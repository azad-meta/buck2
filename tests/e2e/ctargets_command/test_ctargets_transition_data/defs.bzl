# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

def _clay_transition_impl(platform, refs):
    _ignore = (platform, refs)  # buildifier: disable=unused-variable
    return PlatformInfo(label = "<clay>", configuration = ConfigurationInfo(constraints = {}, values = {}))

clay_transition = transition(
    impl = _clay_transition_impl,
    refs = {},
)

def _clay_library_impl(ctx):
    _ignore = ctx  # buildifier: disable=unused-variable
    return [DefaultInfo()]

clay_library = rule(
    impl = _clay_library_impl,
    attrs = {},
    cfg = clay_transition,
)
