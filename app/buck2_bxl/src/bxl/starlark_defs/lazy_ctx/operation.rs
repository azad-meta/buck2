/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::sync::Arc;

use allocative::Allocative;
use async_recursion::async_recursion;
use buck2_build_api::analysis::calculation::RuleAnalysisCalculation;
use buck2_common::global_cfg_options::GlobalCfgOptions;
use buck2_core::configuration::compatibility::MaybeCompatible;
use buck2_core::provider::label::ConfiguredProvidersLabel;
use buck2_node::nodes::unconfigured::TargetNode;
use derivative::Derivative;
use derive_more::Display;
use dice::DiceComputations;
use dupe::Dupe;
use either::Either;
use futures::FutureExt;
use starlark::any::ProvidesStaticType;
use starlark::environment::Methods;
use starlark::environment::MethodsBuilder;
use starlark::environment::MethodsStatic;
use starlark::eval::Evaluator;
use starlark::starlark_module;
use starlark::starlark_simple_value;
use starlark::values::list::AllocList;
use starlark::values::starlark_value;
use starlark::values::Heap;
use starlark::values::NoSerialize;
use starlark::values::StarlarkValue;
use starlark::values::Trace;
use starlark::values::Value;

use crate::bxl::starlark_defs::analysis_result::StarlarkAnalysisResult;
use crate::bxl::starlark_defs::context::BxlContextCoreData;
use crate::bxl::starlark_defs::eval_extra::BxlEvalExtra;
use crate::bxl::starlark_defs::nodes::unconfigured::StarlarkTargetNode;
use crate::bxl::starlark_defs::result::StarlarkResultGen;
use crate::bxl::starlark_defs::target_list_expr::OwnedConfiguredTargetNodeArg;
use crate::bxl::starlark_defs::target_list_expr::OwnedTargetNodeArg;
use crate::bxl::starlark_defs::target_list_expr::SingleOrCompatibleConfiguredTargets;
use crate::bxl::starlark_defs::targetset::StarlarkTargetSet;

#[derive(Derivative, Debug, Allocative)]
enum LazyOperation {
    Analysis(ConfiguredProvidersLabel),
    ConfiguredTargetNode {
        arg: OwnedConfiguredTargetNodeArg,
        global_cfg_options: buck2_error::Result<GlobalCfgOptions>,
    },
    UnconfiguredTargetNode(OwnedTargetNodeArg),
    Join(Arc<LazyOperation>, Arc<LazyOperation>),
    Batch(Vec<Arc<LazyOperation>>),
    Catch(Arc<LazyOperation>),
}

#[derive(Allocative)]
enum LazyResult {
    Analysis(StarlarkAnalysisResult),
    ConfiguredTargetNode(SingleOrCompatibleConfiguredTargets),
    UnconfiguredTargetNode(Either<StarlarkTargetNode, StarlarkTargetSet<TargetNode>>),
    Join(Box<(LazyResult, LazyResult)>),
    Batch(Vec<LazyResult>),
    Catch(Box<anyhow::Result<LazyResult>>),
}

impl LazyResult {
    fn into_value<'v>(
        self,
        heap: &'v Heap,
        bxl_eval_extra: &BxlEvalExtra,
    ) -> anyhow::Result<Value<'v>> {
        match self {
            LazyResult::Analysis(analysis_res) => Ok(heap.alloc(analysis_res)),
            LazyResult::ConfiguredTargetNode(res) => res.into_value(heap, bxl_eval_extra),
            LazyResult::UnconfiguredTargetNode(node) => Ok(heap.alloc(node)),
            LazyResult::Join(res) => Ok(heap.alloc((
                res.0.into_value(heap, bxl_eval_extra)?,
                res.1.into_value(heap, bxl_eval_extra)?,
            ))),
            LazyResult::Batch(res) => Ok(heap.alloc(AllocList(
                res.into_iter()
                    .map(|v| v.into_value(heap, bxl_eval_extra))
                    .collect::<anyhow::Result<Vec<_>>>()?,
            ))),
            LazyResult::Catch(res) => {
                let val = match *res {
                    Ok(res) => Ok(res.into_value(heap, bxl_eval_extra)?),
                    Err(e) => Err(e),
                };
                Ok(heap.alloc(StarlarkResultGen::from_result(val)))
            }
        }
    }
}

impl LazyOperation {
    #[async_recursion]
    async fn resolve(
        &self,
        dice: &mut DiceComputations<'_>,
        core_data: &BxlContextCoreData,
    ) -> anyhow::Result<LazyResult> {
        match self {
            LazyOperation::Analysis(label) => {
                Ok(LazyResult::Analysis(analysis(dice, label).await?))
            }
            LazyOperation::ConfiguredTargetNode {
                arg,
                global_cfg_options,
            } => {
                let global_cfg_options = global_cfg_options.as_ref().map_err(|e| e.clone())?;
                let res = arg
                    .to_configured_target_node(global_cfg_options, core_data, dice)
                    .await?;
                Ok(LazyResult::ConfiguredTargetNode(res))
            }
            LazyOperation::UnconfiguredTargetNode(expr) => {
                let node = expr.to_unconfigured_target_node(core_data, dice).await?;
                Ok(LazyResult::UnconfiguredTargetNode(node))
            }
            LazyOperation::Join(lazy0, lazy1) => {
                let compute0 = DiceComputations::declare_closure(|dice| {
                    async move { lazy0.resolve(dice, core_data).await }.boxed()
                });
                let compute1 = DiceComputations::declare_closure(|dice| {
                    async move { lazy1.resolve(dice, core_data).await }.boxed()
                });
                let (res0, res1) = dice.try_compute2(compute0, compute1).await?;
                Ok(LazyResult::Join(Box::new((res0, res1))))
            }
            LazyOperation::Batch(lazies) => {
                let res = dice
                    .try_compute_join(lazies, |dice, lazy| {
                        async move { lazy.resolve(dice, core_data).await }.boxed()
                    })
                    .await?;
                Ok(LazyResult::Batch(res))
            }
            LazyOperation::Catch(lazy) => {
                let res = lazy.resolve(dice, core_data).await;
                Ok(LazyResult::Catch(Box::new(res)))
            }
        }
    }
}

#[derive(
    ProvidesStaticType,
    Derivative,
    Display,
    Trace,
    NoSerialize,
    Allocative,
    Clone,
    Dupe
)]
#[derivative(Debug)]
#[display("{:?}", self)]
pub(crate) struct StarlarkLazy {
    lazy: Arc<LazyOperation>,
}

starlark_simple_value!(StarlarkLazy);

impl StarlarkLazy {
    pub(crate) fn new_analysis(label: ConfiguredProvidersLabel) -> Self {
        Self {
            lazy: Arc::new(LazyOperation::Analysis(label)),
        }
    }

    pub(crate) fn new_configured_target_node(
        arg: OwnedConfiguredTargetNodeArg,
        global_cfg_options: anyhow::Result<GlobalCfgOptions>,
    ) -> Self {
        Self {
            lazy: Arc::new(LazyOperation::ConfiguredTargetNode {
                arg,
                global_cfg_options: global_cfg_options.map_err(buck2_error::Error::from),
            }),
        }
    }

    pub(crate) fn new_unconfigured_target_node(expr: OwnedTargetNodeArg) -> Self {
        Self {
            lazy: Arc::new(LazyOperation::UnconfiguredTargetNode(expr)),
        }
    }

    pub(crate) fn new_batch<I: IntoIterator<Item = StarlarkLazy>>(lazies: I) -> Self {
        Self {
            lazy: Arc::new(LazyOperation::Batch(
                lazies.into_iter().map(|v| v.lazy).collect(),
            )),
        }
    }

    pub(crate) fn new_join(lazy0: StarlarkLazy, lazy1: StarlarkLazy) -> Self {
        Self {
            lazy: Arc::new(LazyOperation::Join(lazy0.lazy, lazy1.lazy)),
        }
    }
}

#[starlark_value(type = "bxl.Lazy")]
impl<'v> StarlarkValue<'v> for StarlarkLazy {
    fn get_methods() -> Option<&'static Methods> {
        static RES: MethodsStatic = MethodsStatic::new();
        RES.methods(lazy_operation_methods)
    }
}

async fn analysis<'v>(
    dice: &mut DiceComputations<'_>,
    label: &ConfiguredProvidersLabel,
) -> anyhow::Result<StarlarkAnalysisResult> {
    let maybe_result = dice.get_analysis_result(label.target()).await?;
    match maybe_result {
        MaybeCompatible::Incompatible(reason) => Err(reason.to_err()),
        MaybeCompatible::Compatible(result) => StarlarkAnalysisResult::new(result, label.dupe()),
    }
}

/// bxl.Lazy can be resolved to the actual result. The computation only happens when called `.resolve()` or `try_resolve()`.
#[starlark_module]
fn lazy_operation_methods(builder: &mut MethodsBuilder) {
    /// Resolve the operation to the actual result without catching the error.
    ///
    /// Example:
    /// ```text
    /// def _impl(ctx):
    ///     target = ctx.configured_targets("cell//path/to:target")
    ///     analysis_result = ctx.lazy.analysis(target).resolve()
    /// ```
    fn resolve<'v>(
        this: &StarlarkLazy,
        eval: &mut Evaluator<'v, '_, '_>,
    ) -> anyhow::Result<Value<'v>> {
        let bxl_eval_extra = BxlEvalExtra::from_context(eval)?;
        let lazy = this.lazy.clone();
        let res = bxl_eval_extra.via_dice(|dice, core_data| {
            dice.via(|dice| async { lazy.resolve(dice, core_data).await }.boxed_local())
        });

        let heap = eval.heap();
        res.and_then(|v| v.into_value(heap, bxl_eval_extra))
    }

    /// Make `Lazy` can be resolved later by catching the error.
    ///
    /// Example:
    /// ```text
    /// def _impl(ctx):
    ///     target = ctx.configured_targets("cell//path/to:target")
    ///     analysis_result = ctx.lazy.analysis(target).catch().resolve()
    /// ```
    fn catch(this: &StarlarkLazy) -> anyhow::Result<StarlarkLazy> {
        let lazy = Arc::new(LazyOperation::Catch(this.lazy.dupe()));
        Ok(StarlarkLazy { lazy })
    }
}
