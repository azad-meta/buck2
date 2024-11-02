"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2046],{71914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),o=t(15680);const s={id:"anon_targets",title:"BXL and Anonymous Targets"},i=void 0,a={id:"developers/anon_targets",title:"BXL and Anonymous Targets",description:"Anonymous targets",source:"@site/../docs/developers/bxl_anon_target.md",sourceDirName:"developers",slug:"/developers/anon_targets",permalink:"/docs/developers/anon_targets",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"anon_targets",title:"BXL and Anonymous Targets"},sidebar:"main",previous:{title:"BXL Telemetry",permalink:"/docs/developers/bxl_telemetry"},next:{title:"BXL and Dynamic Outputs",permalink:"/docs/developers/dynamic_output"}},l={},c=[{value:"Anonymous targets",id:"anonymous-targets",level:2},{value:"APIs",id:"apis",level:3},{value:"Complete Example",id:"complete-example",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"anonymous-targets",children:"Anonymous targets"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/rule_authors/anon_targets",children:"Anonymous targets"})," are supported in BXL.\nAnonymous targets are keyed by the attributes, and allow you to share/cache work\nmore effectively."]}),"\n",(0,r.jsx)(n.p,{children:"You might want to use anonymous targets if there is some heavy Starlark\nevaluation which can be cached, or if you want to cache local actions."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": The context object within the anon target rule is ",(0,r.jsx)(n.strong,{children:"not"})," a BXL\ncontext, but a normal rule analysis context."]}),"\n",(0,r.jsx)(n.h3,{id:"apis",children:"APIs"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"actions"})," object returned from ",(0,r.jsx)(n.code,{children:"ctx.bxl_actions().actions"})," (equivalent of\n",(0,r.jsx)(n.code,{children:"ctx.actions"})," in normal rules) has the following functions for anonymous\ntargets:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'anon_target(rule: "rule", attrs: Dict[str, Any]) -> "promise"'}),": generates a\nsingle anonymous target. Return type is an unresolved ",(0,r.jsx)(n.code,{children:"promise"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'anon_targets(rules: [("rule", Dict[str, Any])]) -> "promise"'}),": generates a\nlist of anonymous targets. Return type is an unresolved ",(0,r.jsx)(n.code,{children:"promise"})," representing\nthe list of anonymous targets."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'artifact_promise(promise: "promise") -> "promise_artifact"'}),": turns an\nunresolved promise into a kind of artifact. See\n",(0,r.jsx)(n.a,{href:"/docs/rule_authors/anon_targets#convert-promise-to-artifact",children:"Convert promise to artifact"}),"\nfor more info on why you might want to use this."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The resulting promise also has ",(0,r.jsx)(n.code,{children:"map()"})," and ",(0,r.jsx)(n.code,{children:"join()"})," functions. ",(0,r.jsx)(n.code,{children:"map()"})," applies a\nfunction to the promise's results, and ",(0,r.jsx)(n.code,{children:"join()"})," turns multiple promises into a\nsingle promise."]}),"\n",(0,r.jsxs)(n.p,{children:["To resolve promises in BXL, ",(0,r.jsx)(n.code,{children:"bxl_ctx"})," has a ",(0,r.jsx)(n.code,{children:"resolve()"})," function, which takes in\nthe analysis actions instance (",(0,r.jsx)(n.code,{children:"actions"})," object returned from\n",(0,r.jsx)(n.code,{children:"ctx.bxl_actions().actions"}),") and a single promise and returns an optional\npromise value, if there is one. If you intend to create multiple promises, using\n",(0,r.jsx)(n.code,{children:"join()"})," to produce a single promise will allow you to resolve them concurently\nwith a single ",(0,r.jsx)(n.code,{children:"resolve()"})," call."]}),"\n",(0,r.jsx)(n.p,{children:"Small example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def _my_impl(ctx):\n    bxl_actions = ctx.bxl_actions() # pass in relevant params to configure the execution platform resolution\n    actions = bxl_actions.actions\n\n    promise1 = actions.anon_target(my_anon_rule1, my_attrs1).promise\n    promise2 = actions.anon_target(my_anon_rule2, my_attrs2).promise.map(my_map_function)\n\n    joined = promise1.join(promise2)\n\n    resolved = ctx.resolve(actions, joined)\n\n    # do some more stuff ...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"complete-example",children:"Complete Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'## anon_bxl_rules.bzl ############\n\n# Define an anonymous rule.\n\nMirrorInfo = provider(fields = ["mirrored_attrs"])\n\n# Anonymous rule which writes some silly output, and also mirrors all attributes received\ndef _mirror_impl(ctx: "context") -> ["provider"]:\n    out = ctx.actions.declare_output("my_output")\n    ctx.actions.write(out, "my_content")\n    return [DefaultInfo(default_outputs = [out]), MirrorInfo(mirrored_attrs = ctx.attrs)]\n\nmy_mirror_rule = rule(impl = _mirror_impl, attrs = {\n    "false": attrs.bool(),\n    "int": attrs.int(),\n    "list_string": attrs.list(attrs.string()),\n    "string": attrs.string(),\n    "true": attrs.bool(),\n})\n\n# Will be used in a map function in my_script.bxl below\nStringInfo = provider(fields = ["my_string"])\n\n## my_script.bxl ############\n\nload(":anon_bxl_rules.bzl", "MirrorInfo", "StringInfo", "my_mirror_rule")\n\ndef _anon_target_example(ctx):\n    bxl_actions = ctx.bxl_actions()\n    actions = bxl_actions.actions\n\n    # Attrs to pass into the anonymous target. An anonymous target is defined by the hash of its attributes\n    my_attrs = {\n        "false": False,\n        "int": 42,\n        "list_string": ["a", "b", "c"],\n        "string": "foo-bar-string",\n        "true": True,\n    }\n\n    # A function to be applied to the promise (result of anon target), producing a promise with the resulting value.\n    def my_function(providers):\n        # Do something with the attrs. In this example, we are validating that the attrs are what we expect.\n        mirrored_fields = providers[MirrorInfo].mirrored_attrs\n        assert_eq(mirrored_fields.true, True)\n        assert_eq(mirrored_fields.false, False)\n        assert_eq(mirrored_fields.int, 42)\n        assert_eq(mirrored_fields.string, "foo-bar-string")\n        assert_eq(mirrored_fields.list_string, ["a", "b", "c"])\n\n        outputs = providers[DefaultInfo].default_outputs\n        # These are the providers this target returns\n        return [DefaultInfo(default_outputs = outputs), StringInfo(my_string = "map function succeeded!")]\n\n    # Create an anonymous target by passing in "my_attrs" into "my_mirror_rule", and returns providers.\n    # Specifically, it returns "DefaultInfo" and "MirrorInfo", as defined in "my_mirror_rule"\n    # Then, we map the result to "my_function", which does some validation\n    promise = actions.anon_target(my_mirror_rule, my_attrs).promise.map(my_function)\n\n    # Resolving the promise returns a "provider_collection", which was defined by "my_function" above.\n    # `DefaultInfo` is at index 0, `StringInfo` is at index 1\n    promise_result = ctx.resolve(actions, promise)\n\n    ensured = ctx.output.ensure(promise_result[0].default_outputs[0])\n    # should print out location of the output, which contains the "my_content" string as defined in anon_bxl_rules.bzl above\n    ctx.output.print(ensured)\n\n    # should print out "map function succeeded!"\n    ctx.output.print(promise_result[1].my_string)\n\ndef assert_eq(a, b):\n    if a != b:\n        fail("Expected {} == {}".format(a, b))\n\nanon_target_example = bxl_main(\n    impl = _anon_target_example,\n    cli_args = {\n    },\n)\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.useMDXComponents)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.createElement(e,s({},n,{components:t}))}},p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||s;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=h;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);