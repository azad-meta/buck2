/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::ffi::OsStr;
use std::fs::File;
use std::fs::OpenOptions;
use std::io::Write;
use std::os::unix::ffi::OsStrExt;
use std::path::Path;
use std::pin::Pin;
use std::sync::Arc;

use anyhow::Context as _;
use buck2_common::convert::ProstDurationExt;
use buck2_common::init::ResourceControlConfig;
use buck2_common::systemd::SystemdPropertySetType;
use buck2_common::systemd::SystemdRunner;
use buck2_core::fs::fs_util;
use buck2_core::fs::paths::abs_norm_path::AbsNormPath;
use buck2_core::fs::paths::abs_norm_path::AbsNormPathBuf;
use buck2_core::fs::paths::abs_path::AbsPath;
use buck2_core::fs::paths::forward_rel_path::ForwardRelativePath;
use buck2_core::logging::LogConfigurationReloadHandle;
use buck2_error::AnyhowContextForError;
use buck2_forkserver_proto::forkserver_server::Forkserver;
use buck2_forkserver_proto::CommandRequest;
use buck2_forkserver_proto::RequestEvent;
use buck2_forkserver_proto::SetLogFilterRequest;
use buck2_forkserver_proto::SetLogFilterResponse;
use buck2_grpc::to_tonic;
use buck2_util::cgroup_info::CGroupInfo;
use buck2_util::process::background_command;
use futures::future::select;
use futures::future::FutureExt;
use futures::stream::Stream;
use futures::stream::StreamExt;
use rand::distributions::Alphanumeric;
use rand::distributions::DistString;
use tonic::Request;
use tonic::Response;
use tonic::Status;
use tonic::Streaming;

use crate::convert::encode_event_stream;
use crate::run::maybe_absolutize_exe;
use crate::run::process_group::ProcessCommand;
use crate::run::status_decoder::CGroupStatusDecoder;
use crate::run::status_decoder::DefaultStatusDecoder;
use crate::run::status_decoder::MiniperfStatusDecoder;
use crate::run::stream_command_events;
use crate::run::timeout_into_cancellation;
use crate::run::DefaultKillProcess;
use crate::run::GatherOutputStatus;

// Not quite BoxStream: it has to be Sync (...)
type RunStream =
    Pin<Box<dyn Stream<Item = Result<buck2_forkserver_proto::CommandEvent, Status>> + Send>>;

pub struct UnixForkserverService {
    log_reload_handle: Arc<dyn LogConfigurationReloadHandle>,

    /// State for Miniperf.
    miniperf: Option<MiniperfContainer>,

    /// Systemd for resource control
    systemd: Option<SystemdContainer>,
}

impl UnixForkserverService {
    pub fn new(
        log_reload_handle: Arc<dyn LogConfigurationReloadHandle>,
        state_dir: &AbsNormPath,
        resource_control: ResourceControlConfig,
    ) -> anyhow::Result<Self> {
        let miniperf = MiniperfContainer::new(state_dir)?;
        let systemd = SystemdContainer::new(&resource_control)?;

        Ok(Self {
            log_reload_handle,
            miniperf,
            systemd,
        })
    }
}

#[async_trait::async_trait]
impl Forkserver for UnixForkserverService {
    type RunStream = RunStream;

    async fn run(
        &self,
        req: Request<Streaming<RequestEvent>>,
    ) -> Result<Response<Self::RunStream>, Status> {
        to_tonic(async move {
            let mut stream = req.into_inner();

            let msg = stream
                .message()
                .await?
                .and_then(|m| m.data)
                .and_then(|m| m.into_command_request())
                .context("RequestEvent was not a CommandRequest!")?;

            let cancel = async move {
                stream
                    .message()
                    .await?
                    .and_then(|m| m.data)
                    .and_then(|m| m.into_cancel_request())
                    .context("RequestEvent was not a CancelRequest!")?;

                anyhow::Ok(GatherOutputStatus::Cancelled)
            };

            let CommandRequest {
                exe,
                argv,
                env,
                cwd,
                timeout,
                enable_miniperf,
                std_redirects,
                graceful_shutdown_timeout_s,
                action_digest,
            } = msg;

            let exe = OsStr::from_bytes(&exe);
            let cwd = OsStr::from_bytes(&cwd.as_ref().context("Missing cwd")?.path);
            let cwd = AbsPath::new(Path::new(cwd)).context("Inalid cwd")?;

            let argv = argv.iter().map(|a| OsStr::from_bytes(a));
            let timeout = timeout
                .map(|t| t.try_into_duration())
                .transpose()
                .context("Invalid timeout")?;

            let exe = maybe_absolutize_exe(exe, cwd)?;
            let systemd_context = self.systemd.as_ref().zip(action_digest);

            let (mut cmd, miniperf_output) =
                match (enable_miniperf, &self.miniperf, &systemd_context) {
                    (true, Some(miniperf), None) => {
                        let mut cmd = background_command(miniperf.miniperf.as_path());
                        let output_path = miniperf.allocate_output_path();
                        cmd.arg(output_path.as_path());
                        cmd.arg(exe.as_ref());
                        (cmd, Some(output_path))
                    }
                    (_, _, Some((systemd, action_digest))) => (
                        systemd.runner.background_command_linux(
                            exe.as_ref(),
                            &action_digest,
                            &AbsNormPath::new(cwd)?,
                        ),
                        None,
                    ),
                    _ => (background_command(exe.as_ref()), None),
                };

            cmd.current_dir(cwd);
            cmd.args(argv);

            {
                use buck2_forkserver_proto::env_directive::Data;

                for directive in env {
                    match directive.data.context("EnvDirective is missing data")? {
                        Data::Clear(..) => {
                            cmd.env_clear();
                        }
                        Data::Set(var) => {
                            cmd.env(OsStr::from_bytes(&var.key), OsStr::from_bytes(&var.value));
                        }
                        Data::Remove(var) => {
                            cmd.env_remove(OsStr::from_bytes(&var.key));
                        }
                    }
                }
            }

            let stream_stdio = std_redirects.is_none();
            let mut cmd = ProcessCommand::new(cmd);
            if let Some(std_redirects) = std_redirects {
                cmd.stdout(File::create(OsStr::from_bytes(&std_redirects.stdout))?);
                cmd.stderr(File::create(OsStr::from_bytes(&std_redirects.stderr))?);
            }

            let process_group = cmd.spawn().map_err(anyhow::Error::from);

            let timeout = timeout_into_cancellation(timeout);

            let cancellation = select(timeout.boxed(), cancel.boxed()).map(|r| r.factor_first().0);

            let stream = match miniperf_output {
                Some(out) => stream_command_events(
                    process_group,
                    cancellation,
                    MiniperfStatusDecoder::new(out),
                    DefaultKillProcess {
                        graceful_shutdown_timeout_s,
                    },
                    stream_stdio,
                )?
                .left_stream(),
                None => if let Some((systemd, action_digest)) = systemd_context {
                    stream_command_events(
                        process_group,
                        cancellation,
                        CGroupStatusDecoder::new(systemd.get_cgroup_path(&action_digest).await?),
                        DefaultKillProcess {
                            graceful_shutdown_timeout_s,
                        },
                        stream_stdio,
                    )?
                    .left_stream()
                } else {
                    stream_command_events(
                        process_group,
                        cancellation,
                        DefaultStatusDecoder,
                        DefaultKillProcess {
                            graceful_shutdown_timeout_s,
                        },
                        stream_stdio,
                    )?
                    .right_stream()
                }
                .right_stream(),
            };
            let stream = encode_event_stream(stream);
            Ok(Box::pin(stream) as _)
        })
        .await
    }

    async fn set_log_filter(
        &self,
        req: Request<SetLogFilterRequest>,
    ) -> Result<Response<SetLogFilterResponse>, Status> {
        self.log_reload_handle
            .update_log_filter(&req.get_ref().log_filter)
            .context("Error updating forkserver filter")
            .map_err(|e| Status::invalid_argument(format!("{:#}", e)))?;

        Ok(Response::new(SetLogFilterResponse {}))
    }
}

struct MiniperfContainer {
    /// The Miniperf binary
    miniperf: AbsNormPathBuf,

    /// The directory where Miniperf outputs go.
    output_dir: AbsNormPathBuf,
}

impl MiniperfContainer {
    fn new(forkserver_state_dir: &AbsNormPath) -> anyhow::Result<Option<Self>> {
        let miniperf_bin: Option<&'static [u8]>;

        #[cfg(all(fbcode_build, target_os = "linux"))]
        {
            miniperf_bin = Some(buck2_miniperf_data::get());
        }

        #[cfg(not(all(fbcode_build, target_os = "linux")))]
        {
            miniperf_bin = None;
        }

        let miniperf_bin = match miniperf_bin {
            Some(m) => m,
            None => return Ok(None),
        };

        let miniperf = forkserver_state_dir.join(ForwardRelativePath::unchecked_new("miniperf"));
        let output_dir = forkserver_state_dir.join(ForwardRelativePath::unchecked_new("out"));

        fs_util::remove_all(&miniperf)?;
        fs_util::remove_all(&output_dir)?;
        fs_util::create_dir_all(&output_dir)?;

        let mut opts = OpenOptions::new();
        opts.create_new(true);
        opts.write(true);

        #[cfg(unix)]
        {
            use std::os::unix::fs::OpenOptionsExt;
            opts.mode(0o755);
        }

        let mut miniperf_writer = opts
            .open(miniperf.as_path())
            .with_context(|| format!("Error opening: `{}`", miniperf.display()))?;

        miniperf_writer
            .write_all(miniperf_bin)
            .and_then(|()| miniperf_writer.flush())
            .with_context(|| format!("Error writing miniperf to `{}`", miniperf.display()))?;

        Ok(Some(Self {
            miniperf,
            output_dir,
        }))
    }

    fn allocate_output_path(&self) -> AbsNormPathBuf {
        let name = Alphanumeric.sample_string(&mut rand::thread_rng(), 16);
        self.output_dir
            .join(ForwardRelativePath::unchecked_new(&name))
    }
}

struct SystemdContainer {
    runner: SystemdRunner,
}

impl SystemdContainer {
    const SLICE_NAME: &'static str = "forkserver";

    fn new(resource_control: &ResourceControlConfig) -> anyhow::Result<Option<Self>> {
        let runner = SystemdRunner::create_if_enabled(
            SystemdPropertySetType::Daemon,
            &resource_control,
            Self::SLICE_NAME,
            // we want to create forkserver in the same hierarchy where buck-daemon scope
            // for this we inherit slice
            true,
        )?;
        Ok(runner.map(|runner| Self { runner }))
    }

    async fn get_cgroup_path(&self, action_digest: &str) -> anyhow::Result<AbsNormPathBuf> {
        let cgroup_path = CGroupInfo::read_async()
            .await?
            .join_hierarchically(&[Self::SLICE_NAME, action_digest])
            .context("Can't create cgroup path")?;
        AbsNormPathBuf::from(cgroup_path)
    }
}
