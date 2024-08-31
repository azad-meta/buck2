# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.buck_workspace import buck_test
from buck2.tests.e2e_util.helper.golden import golden


@buck_test(inplace=False)
async def test_metadata(buck: Buck) -> None:
    stdout = (
        await buck.targets(
            "//...", "--keep-going", "-a", "^metadata|buck.package|name$"
        )
    ).stdout
    golden(
        output=stdout,
        rel_path="test_metadata.golden.json",
    )
