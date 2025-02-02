# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


import tempfile

from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.buck_workspace import buck_test
from buck2.tests.e2e_util.helper.utils import filter_events


async def check_dice_equality(buck: Buck) -> None:
    dice_equal = await filter_events(
        buck,
        "Event",
        "data",
        "Instant",
        "data",
        "DiceEqualityCheck",
        "is_equal",
    )
    assert len(dice_equal) == 1
    assert dice_equal[0] is True


async def check_config_is_the_same(buck: Buck) -> None:
    diff_count = await filter_events(
        buck,
        "Event",
        "data",
        "Instant",
        "data",
        "CellConfigDiff",
        "config_diff_count",
    )
    assert len(diff_count) == 1
    assert diff_count[0] == 0


@buck_test()
async def test_ignore_state_invalidation_with_re_override_in_arg(buck: Buck) -> None:
    # Add arg to switch to buck2-user
    await buck.build(
        "root//:simple",
        "--config",
        "buck2_re_client.override_use_case=buck2-user",
    )
    # No arg, default is buck2-default
    await buck.build("root//:simple")
    await check_dice_equality(buck)
    # Add arg to switch to buck2-user again
    await buck.build(
        "root//:simple",
        "--config",
        "buck2_re_client.override_use_case=buck2-user",
    )
    await check_dice_equality(buck)


@buck_test()
async def test_ignore_state_invalidation_with_re_override_in_config(buck: Buck) -> None:
    # Default is buck2-default
    await buck.build("root//:simple")
    # Add config to switch to buck2-user
    with open(buck.cwd / ".buckconfig.local", "w") as f:
        f.write("[buck2_re_client]\n")
        f.write("override_use_case = buck2-user\n")
    await buck.build("root//:simple")
    await check_config_is_the_same(buck)
    # Add config to return to buck2-default
    with open(buck.cwd / ".buckconfig.local", "w") as f:
        f.write("[buck2_re_client]\n")
        f.write("override_use_case = buck2-default\n")
    await buck.build("root//:simple")
    await check_config_is_the_same(buck)


@buck_test()
async def test_ignore_state_invalidation_with_re_override_in_external_config(
    buck: Buck,
) -> None:
    # Default is buck2-default
    await buck.build("root//:simple")
    # Add config to switch to buck2-user
    with tempfile.NamedTemporaryFile("w", delete=False) as f:
        f.write("[buck2_re_client]\n")
        f.write("override_use_case = buck2-user\n")
        f.close()
        await buck.build("root//:simple", "--config-file", f.name)
    await check_config_is_the_same(buck)
    # Add config to return to buck2-default
    with tempfile.NamedTemporaryFile("w", delete=False) as f:
        f.write("[buck2_re_client]\n")
        f.write("override_use_case = buck2-default\n")
        f.close()
        await buck.build("root//:simple", "--config-file", f.name)
    await check_config_is_the_same(buck)
