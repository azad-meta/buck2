"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1408],{88552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(74848),a=t(15680);const o={id:"anon_targets",title:"Anonymous Targets"},i="Creating anon targets",s={id:"rule_authors/anon_targets",title:"Anonymous Targets",description:"An anonymous target is defined by the hash of its attributes, rather than its",source:"@site/../docs/rule_authors/anon_targets.md",sourceDirName:"rule_authors",slug:"/rule_authors/anon_targets",permalink:"/docs/rule_authors/anon_targets",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"anon_targets",title:"Anonymous Targets"},sidebar:"main",previous:{title:"Dynamic Dependencies",permalink:"/docs/rule_authors/dynamic_dependencies"},next:{title:"Test Execution",permalink:"/docs/rule_authors/test_execution"}},l={},c=[{value:"Anon rule",id:"anon-rule",level:2},{value:"Anon target",id:"anon-target",level:2},{value:"<code>AnonTarget</code> and <code>AnonTargets</code>",id:"anontarget-and-anontargets",level:3},{value:"Attribute resolution",id:"attribute-resolution",level:2},{value:"<code>name</code> attribute example",id:"name-attribute-example",level:3},{value:"Simple Example",id:"simple-example",level:2},{value:"Longer example",id:"longer-example",level:2},{value:"Convert promise to artifact",id:"convert-promise-to-artifact",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"An anonymous target is defined by the hash of its attributes, rather than its\nname. During analysis, rules can define and access the providers of anonymous\ntargets before producing their own providers. Two distinct rules might ask for\nthe same anonymous target, sharing the work it performs."}),"\n",(0,r.jsx)(n.p,{children:"This solves two distinct problems:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"The sharing problem"})," - if you have two processes that want to share some\nwork, you can create an anon target that does that work once, which is then\nreused by the two processes. Without such a mechanism, all sharing must be\npresent in the target graph: you can't create any new sharing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"The overlay problem"})," - this is the idea that you want to have a\nshadow-graph, similar in structure to the normal graph, but with additional\ninformation attached. Bazel accomplishes this with\n",(0,r.jsx)(n.a,{href:"https://bazel.build/extending/aspects",children:"Aspects"}),". With Anonymous (anon)\ntargets, you can create a shadow-graph by convention, just by using the target\nname you wish to shadow as the attribute."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Dynamic dependencies, in their full generality, enable users to do a thing, look\nat the result, then ask for fresh things. However, this full generality is not\nprovided as it breaks processes, like query, that power the Target Determinator."}),"\n",(0,r.jsxs)(n.p,{children:["In Buck2, dynamic dependencies are implemented using ",(0,r.jsx)(n.code,{children:"dynamic_output"}),", which\nprovides users with the ability to create new actions, after running actions,\nthen look at the result. ",(0,r.jsx)(n.code,{children:"dynamic_output"})," is restricted in its power when\ncompared to fully generic dynamic dependencies, as detailed in the\n",(0,r.jsx)(n.a,{href:"/docs/rule_authors/dynamic_dependencies",children:"Dynamic Dependencies"})," page."]}),"\n",(0,r.jsxs)(n.p,{children:["Anon targets enable users to create a new analysis (that is, call an anon target\nthat may not have existed before) after looking at the result of a previous\nanalysis (which is passed in, or after looking at an anon target). In many ways,\nanon target is the version of ",(0,r.jsx)(n.code,{children:"dynamic_output"})," at analysis time, rather than\naction time."]}),"\n",(0,r.jsx)(n.p,{children:"The execution platform for an anon target is that of the inherited from the\ncalling target, which is part of the hash. If that is too restrictive, you could\nuse execution groups, where an anon target gets told which execution group to\nuse."}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"creating-anon-targets",children:"Creating anon targets"})}),"\n",(0,r.jsx)(n.h2,{id:"anon-rule",children:"Anon rule"}),"\n",(0,r.jsxs)(n.p,{children:["An anonymous rule is defined using ",(0,r.jsx)(n.code,{children:"rule"})," or ",(0,r.jsx)(n.code,{children:"anon_rule"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"my_anon_rule = rule(\n    impl = _anon_impl,\n    attrs = {},\n)\n\n# Or:\n\nmy_anon_rule = anon_rule(\n    impl = _anon_impl,\n    attrs = {},\n    artifact_promise_mappings = {} # only available for anon_rule\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"rule"}),", these are normal rules, with the difference that they are not in a\nconfiguration, so ",(0,r.jsx)(n.code,{children:"ctx.actions.label"})," won't show configuration information, but\njust ",(0,r.jsx)(n.code,{children:"unspecified"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"anon_rule"}),", the configuration restrictions also apply, and there is an\n",(0,r.jsx)(n.code,{children:"artifact_promise_mappings"})," field which you can specify a dict of artifact\npromise names to the map function, which would be applied to the anon target's\npromise during rule resolution."]}),"\n",(0,r.jsx)(n.h2,{id:"anon-target",children:"Anon target"}),"\n",(0,r.jsxs)(n.p,{children:["An anonymous rule is used via ",(0,r.jsx)(n.code,{children:"ctx.actions.anon_target"})," or\n",(0,r.jsx)(n.code,{children:"ctx.actions.anon_targets"}),", passing in the rule and the attributes for the rule."]}),"\n",(0,r.jsxs)(n.p,{children:["The return values of those functions are a ",(0,r.jsx)(n.code,{children:"AnonTarget"})," and ",(0,r.jsx)(n.code,{children:"AnonTargets"})," type,\nrespectively."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"my_anon_rule1 = anon_rule(\n    impl = _anon_impl,\n    attrs = {},\n    artifact_promise_mappings = {}\n)\n\nmy_anon_rule2 = anon_rule(\n    impl = _anon_impl,\n    attrs = {},\n    artifact_promise_mappings = {}\n)\n\n# <elsewhere>\nanon_target = ctx.actions.anon_target(my_anon_rule1, {})\n\nanon_targets = ctx.actions.anon_targets([(my_anon_rule1, {}), (my_anon_rule2, {})])\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"anontarget-and-anontargets",children:[(0,r.jsx)(n.code,{children:"AnonTarget"})," and ",(0,r.jsx)(n.code,{children:"AnonTargets"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AnonTarget"})," has a ",(0,r.jsx)(n.code,{children:"promise"})," attribute, and ",(0,r.jsx)(n.code,{children:"artifact()"})," and ",(0,r.jsx)(n.code,{children:"artifacts()"}),"\nfunctions. ",(0,r.jsx)(n.code,{children:"AnonTargets"})," has a ",(0,r.jsx)(n.code,{children:"promise"})," attribute and ",(0,r.jsx)(n.code,{children:"anon_targets"})," attribute."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"promise"})," attribute for both types returns the anon target's promise (type\nis ",(0,r.jsx)(n.code,{children:"promise"}),"), which when evaluated returns the providers of the anonymous\ntarget. The ",(0,r.jsx)(n.code,{children:"promise"})," type has a few special behaviors."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["It has a ",(0,r.jsx)(n.code,{children:"map"})," function, which takes a function and applies it to the future,\nreturning a new future"]}),"\n",(0,r.jsx)(n.li,{children:"All promises will eventually resolve to a list of providers"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"AnonTarget"}),", the ",(0,r.jsx)(n.code,{children:"artifact()"})," and ",(0,r.jsx)(n.code,{children:"artifacts()"})," functions only return\nsomething if using ",(0,r.jsx)(n.code,{children:"anon_rule"}),". ",(0,r.jsx)(n.code,{children:"artifact()"})," takes in an artifact name, which\nshould be found in the ",(0,r.jsx)(n.code,{children:"artifact_promise_mappings"})," dict, and returns the\nartifact promise. ",(0,r.jsx)(n.code,{children:"artifacts()"})," returns the dict of all promise artifact names\nto the artifact promise itself, as defined in ",(0,r.jsx)(n.code,{children:"artifact_promise_mappings"}),". See\n",(0,r.jsx)(n.a,{href:"#convert-promise-to-artifact",children:"Convert promise to artifact"})," below for more\ninformation about artifact promises."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'HelloInfo = provider(fields = ["output"])\n\nmy_anon_rule = anon_rule(\n    impl = _anon_impl,\n    attrs = {},\n    artifact_promise_mappings = {\n        "hello": lambda x: x[HelloInfo].output,\n    }\n)\n\n# <elsewhere>\nanon_target = ctx.actions.anon_target(my_anon_rule, {})\nartifact = anon_target.artifact("hello")\nartifact_from_dict = anon_target.artifacts()["hello"]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"AnonTargets"}),", the ",(0,r.jsx)(n.code,{children:"anon_targets"})," attribute returns a list of the underlying\n",(0,r.jsx)(n.code,{children:"AnonTarget"}),"s."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'HelloInfo = provider(fields = ["output"])\nGoodbyeInfo = provider(fields = ["output"])\n\nmy_anon_rule1 = anon_rule(\n    impl = _anon_impl,\n    attrs = {},\n    artifact_promise_mappings = {\n        "hello": lambda x: x[HelloInfo].output,\n    }\n)\n\nmy_anon_rule2 = anon_rule(\n    impl = _anon_impl,\n    attrs = {},\n    artifact_promise_mappings = {\n        "goodbye": lambda x: x[GoodbyeInfo].output,\n    }\n)\n\n# <elsewhere>\nall_targets = ctx.actions.anon_targets([(my_anon_rule1, {}), (my_anon_rule2, {})])\nhello = all_targets.anon_targets[0].artifact("hello")\ngoodbye = all_targets.anon_targets[1].artifact("goodbye")\n'})}),"\n",(0,r.jsx)(n.h1,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsx)(n.p,{children:"Anon targets only support a subset of attributes that normal rules support."}),"\n",(0,r.jsx)(n.p,{children:"Supported attributes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bool"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"int"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"str"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"enum"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dep"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"deps"})," attributes do not take strings, but dependencies, already in a\nconfiguration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"exec_deps"})," are available if the passed in ",(0,r.jsx)(n.code,{children:"dep"}),"'s execution platform\nmatches"]}),"\n",(0,r.jsxs)(n.li,{children:["Default ",(0,r.jsx)(n.code,{children:"attr.deps"})," (as used for toolchains) are not permitted, as the\ndefault can't express a dependency. They must be passed forward from the\ncaller. that of the anon target's caller"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"source"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Accepts bound artifacts or promise artifacts"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"arg"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Can only be used if ",(0,r.jsx)(n.code,{children:"anon_target_compatible"})," is ",(0,r.jsx)(n.code,{children:"True"})," when declaring\n",(0,r.jsx)(n.code,{children:"attrs.arg"})," (ex: ",(0,r.jsx)(n.code,{children:"attrs.arg(anon_target_compatible = True)"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"label"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"list"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"tuple"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"dict"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"one_of"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"option"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can use these attributes like you would in normal rules:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'my_anon_rule = anon_rule(\n    impl = _my_anon_impl,\n    attrs = {\n        "my_int": attrs.int(),\n        "my_string_with_default": attrs.string(default = "foo"),\n        "my_optional_source": attrs.option(attrs.source()),\n        "my_list_of_labels": attrs.list(attrs.label()),\n    },\n    artifact_promise_mappings = {}\n)\n\ndef _my_anon_impl(ctx: AnalysisContext) -> list[Provider]:\n    my_int = ctx.attrs.my_int\n    my_string_with_default = ctx.attrs.my_string_with_default\n    my_optional_source = ctx.attrs.my_optional_source\n    my_list_of_labels = ctx.attrs.my_list_of_labels\n\n    # do something with the attributes...\n\n    return [DefaultInfo()]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"attribute-resolution",children:"Attribute resolution"}),"\n",(0,r.jsx)(n.p,{children:"Attribute resolution is handled differently from normal code:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Transitions and more complex forms of attributes are banned."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"name"})," attribute is a reserved attribute. It is an implicit attribute when\ndefining a rule for an anon target, but can be optionally set when creating an\nanon target. If present, it must be a syntactically valid target, but could\nrefer to a cell/package that does not exist. If not present, buck2 will\ngenerate a name for the target automatically."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"name-attribute-example",children:[(0,r.jsx)(n.code,{children:"name"})," attribute example"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Rule definition for anon target\nmy_rule = rule(\n    impl = _my_impl,\n    attrs = {\n        # `name` is already implicitly defined as an attribute, and will error\n        # out if you try to define it again during rule declaration\n    },\n)\n\n# Anon target instantiation, elsewhere\n ctx.actions.anon_target(\n    my_rule,\n    {\n        # you can optionally pass `name` into the attributes even though it\'s\n        # not explicitly defined in the `attrs` field for `my_rule`\n        "name": "foo//bar:baz"\n    },\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To access the ",(0,r.jsx)(n.code,{children:"name"})," attribute from an analysis context, you can use\n",(0,r.jsx)(n.code,{children:"ctx.label.name"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h2,{id:"simple-example",children:"Simple Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Define an anonymous rule\nUpperInfo = provider(fields = ["message"])\n\ndef _impl_upper(ctx):\n    return [UpperInfo(message = ctx.attrs.message.upper()]\n\nupper = rule(\n    attrs = {"message", attrs.string()},\n    impl = _impl_upper\n)\n\n# Use an anonymous target\ndef impl(ctx):\n    def k(providers):\n        print(providers[UpperInfo].message)\n        # These are the providers this target returns\n        return [DefaultInfo()]\n    return ctx.actions.anon_target(upper, {\n        name: "my//:greeting",\n        message: "Hello World",\n    })\n    .promise\n    .map(k)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"longer-example",children:"Longer example"}),"\n",(0,r.jsx)(n.p,{children:"The following code represents a scenario for a compile-and-link language where,\nif two targets end up compiling the same file (for example, they are in the same\npackage and both list it, or it gets export_file'd), then that file is compiled\njust once:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'## BUCK ##############\n@load(":silly.bzl", "silly_binary")\n\nsilly_binary(\n    name = "hello",\n    srcs = ["hello.sil", "world.sil"],\n)\n\n## silly.bzl ############\n\n_SillyCompilation = provider(fields = ["compiled"])\n\ndef _silly_compilation_impl(ctx):\n    out = ctx.actions.declare_output("output.o")\n    ctx.actions.run(cmd_args(\n        ctx.attrs.toolchain.compiler,\n        ctx.attrs.src,\n        "-o",\n        out.as_output(),\n    ))\n    return [DefaultInfo(), _SillyCompilation(compiled = out)]\n\n_silly_compilation = rule(\n    impl = _silly_compilation_impl,\n    attrs = {\n        "src": attrs.src(),\n        "toolchain": attrs.dep(),\n    },\n)\n\ndef _silly_binary_impl(ctx):\n    def k(providers):\n        # Step 2: now link them all together\n        out = ctx.actions.declare_output("out.exe")\n        objs = [p[_SillyCompilation].compiled for p in providers]\n        ctx.actions.run(cmd_args(\n            ctx.attrs._silly_toolchain.linker,\n            objs,\n            "-o",\n            out.as_output(),\n        ))\n        return [\n            DefaultInfo(default_output = out),\n            RunInfo(args = out),\n        ]\n\n    # Step 1: compile all my individual files\n    return ctx.actions.anon_targets(\n        [(_silly_compilation, {\n            "src": src,\n            "toolchain": ctx.attrs._silly_toolchain\n        }) for src in ctx.attrs.srcs]\n    ).map(k)\n\nsilly_binary = rule(\n    impl = _silly_binary_impl,\n    attrs = {\n        "srcs": attr.list(attr.src()),\n        "_silly_toolchain": attr.dep(default = "toolchains//:silly"),\n    },\n)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"convert-promise-to-artifact",children:"Convert promise to artifact"}),"\n",(0,r.jsxs)(n.p,{children:["It can be challenging to pass around the promises from anon_target and structure\nfunctions to support that. If you only need an artifact (or multiple artifacts)\nfrom an anon_target, you can use ",(0,r.jsx)(n.code,{children:"artifact()"})," function on the anon target to\nconvert a promise to an artifact. This artifact can be passed to most things\nthat expect artifacts, but until it is resolved (at the end of the current\nanalysis) it can't be inspected with artifact functions like ",(0,r.jsx)(n.code,{children:".extension"}),", etc.\n",(0,r.jsx)(n.code,{children:".short_path"})," is supported if ",(0,r.jsx)(n.code,{children:"ctx.actions.assert_short_path()"})," was called,\nwhich produces an artifact type. The promise must resolve to a build (not\nsource) artifact with no associated artifacts."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'HelloInfo = provider(fields = ["hello", "world"])\n\ndef _anon_impl(ctx: AnalysisContext) -> ["provider"]:\n    hello = ctx.actions.write("hello.out", "hello")\n    world = ctx.actions.write("world.out", "world")\n    return [DefaultInfo(), HelloInfo(hello = hello, world = world)]\n\n_anon = anon_rule(\n    impl = _anon_impl,\n    attrs = {},\n    artifact_promise_mappings = {\n        "hello": lambda x: x[HelloInfo].hello,\n        "world": lambda x: x[HelloInfo].world,\n    }\n)\n\ndef _use_impl(ctx: AnalysisContext) -> ["provider"]:\n    anon = ctx.actions.anon_target(_anon, {})\n    hello_artifact = anon.artifact("hello")\n    world_artifact = anon.artifact("world")\n\n    out = ctx.actions.declare_output("output")\n    ctx.actions.run([\n            ctx.attrs.some_tool,\n            hello_artifact,\n            world_artifact,\n            out.as_output()\n        ], category = "process")\n    return [DefaultInfo(default_output = out)]\n\nuse_promise_artifact = rule(impl = _use_impl, attrs = {\n    "some_tool": attr.exec_dep(),\n})\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.useMDXComponents)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>h,withMDXComponents:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){return function(n){var t=h(n.components);return r.createElement(e,o({},n,{components:t}))}},h=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=h(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(t),u=a,p=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(p,s(s({ref:n},c),{},{components:t})):r.createElement(p,s({ref:n},c))}));function x(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);