"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3332],{83407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(15680);const a={id:"bxl_faqs",title:"FAQs"},s=void 0,o={id:"developers/bxl_faqs",title:"FAQs",description:"When is my BXL script cached?",source:"@site/../docs/developers/bxl_faq.md",sourceDirName:"developers",slug:"/developers/bxl_faqs",permalink:"/docs/developers/bxl_faqs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"bxl_faqs",title:"FAQs"},sidebar:"main",previous:{title:"BXL and Dynamic Outputs",permalink:"/docs/developers/dynamic_output"},next:{title:"Architectural Model",permalink:"/docs/developers/architecture/buck2"}},c={},l=[{value:"When is my BXL script cached?",id:"when-is-my-bxl-script-cached",level:2},{value:"What\u2019s the difference between <code>ctx.output.print()</code> and <code>print()</code>?",id:"whats-the-difference-between-ctxoutputprint-and-print",level:2},{value:"What do I need to know about ensured artifacts",id:"what-do-i-need-to-know-about-ensured-artifacts",level:2},{value:"What is the difference between dynamic outputs and anon targets?",id:"what-is-the-difference-between-dynamic-outputs-and-anon-targets",level:2},{value:"Can I mutate types returned by BXL APIs?",id:"can-i-mutate-types-returned-by-bxl-apis",level:2},{value:"What is run synchronously vs asynchronously?",id:"what-is-run-synchronously-vs-asynchronously",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"when-is-my-bxl-script-cached",children:"When is my BXL script cached?"}),"\n",(0,r.jsxs)(t.p,{children:["The entire BXL script is represented as a single node on the DICE graph (Buck2\u2019s\ninternal dependency graph). When the script\u2019s input changes, the entire node is\ninvalidated and needs to be recomputed. For example, if a BXL function calls\nuquery, then uses the result to do a cquery and then a build, if Buck2 detects\nthat any of the recorded calls to uquery, cquery, and build changes, then the\nentire BXL script will be reran. The computations themselves (uquery, cquery,\nand build) will still be incrementally evaluated via DICE, so we are not\nrerunning ",(0,r.jsx)(t.em,{children:"every"})," computation entirely within the BXL."]}),"\n",(0,r.jsx)(t.p,{children:"When the BXL script creates artifacts and ensures them, those artifacts are\ncached separately in an action outside of the BXL execution. This means that the\nartifacts produced by BXL are cached separately from the BXL script itself, much\nlike the computations within a BXL."}),"\n",(0,r.jsx)(t.p,{children:"During 2023, there is a plan to add finer grain incrementality to make better\nuse of DICE\u2019s existing incrementality support."}),"\n",(0,r.jsxs)(t.h2,{id:"whats-the-difference-between-ctxoutputprint-and-print",children:["What\u2019s the difference between ",(0,r.jsx)(t.code,{children:"ctx.output.print()"})," and ",(0,r.jsx)(t.code,{children:"print()"}),"?"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ctx.output.print()"})," writes items to stdout by buck2 even when the script is\ncached. Items written to the output stream are considered to be the results of\na BXL script, which will be displayed to stdout by buck2 even when the script\nis cached."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"print()"})," is offered by Starlark via the stdlib. This prints anything you want\nbut won\u2019t be provided to stdout at the end of a BXL script. These can be used\nto print to stderr. NOTE: ",(0,r.jsx)(t.code,{children:"print()"})," statements don't show up if the script has\nbeen cached."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"what-do-i-need-to-know-about-ensured-artifacts",children:"What do I need to know about ensured artifacts"}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.code,{children:"ensured_artifact"})," prints out the relative or absolute path via\n",(0,r.jsx)(t.code,{children:"ctx.output.print()"}),", depending on if called with ",(0,r.jsx)(t.code,{children:"abs_path()"})," or ",(0,r.jsx)(t.code,{children:"rel_path"}),"(),\nbut will print out ",(0,r.jsx)(t.code,{children:"<ensured artifact bound to <some path>>"})," via ",(0,r.jsx)(t.code,{children:"print()"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This is intentional because when the ensured artifact is created within BXL, it\nhas not been materialized yet. It will be materialized after the BXL script\nfinishes executing, and Buck2 core performs some additional actions after the\nBXL script."}),"\n",(0,r.jsx)(t.p,{children:"This is a safeguard to prevent people from misusing the artifact path and\npassing it into an action without the artifact having been materialized or\npassing an absolute path into RE, which can actually mess up RE and render the\naction not shareable across users. In addition, it makes these actions\nseparately cacheable from the BXL execution."}),"\n",(0,r.jsx)(t.h2,{id:"what-is-the-difference-between-dynamic-outputs-and-anon-targets",children:"What is the difference between dynamic outputs and anon targets?"}),"\n",(0,r.jsxs)(t.p,{children:["Dynamic outputs are meant for\n",(0,r.jsx)(t.a,{href:"/docs/rule_authors/dynamic_dependencies",children:"dynamic dependencies"}),". The context\ntype is a ",(0,r.jsx)(t.code,{children:"bxl_ctx"}),". Dynamic outputs are ran asynchronously outside of the BXL\nexecution."]}),"\n",(0,r.jsxs)(t.p,{children:["Anon targets are meant for sharing work betwen multiple BXLs. The context type\nis a normal rule analysis ",(0,r.jsx)(t.code,{children:"context"}),". Anon targets are ",(0,r.jsx)(t.code,{children:"await"}),"-ed inline with\nyour BXL function."]}),"\n",(0,r.jsx)(t.h2,{id:"can-i-mutate-types-returned-by-bxl-apis",children:"Can I mutate types returned by BXL APIs?"}),"\n",(0,r.jsx)(t.p,{children:"The data types produced by BXL API calls are always immutable."}),"\n",(0,r.jsx)(t.h2,{id:"what-is-run-synchronously-vs-asynchronously",children:"What is run synchronously vs asynchronously?"}),"\n",(0,r.jsx)(t.p,{children:"Starlark itself is run synchronously. However, certain BXL APIs are evaluated\nasynchronously."}),"\n",(0,r.jsx)(t.p,{children:"If you pass in multiple inputs to builds, queries, or analyses, the execution of\nthese API calls will be blocking, but the inputs themselves will be evaluated in\nparallel within the execution."}),"\n",(0,r.jsxs)(t.p,{children:["Ensuring artifacts, dynamic outputs, anon targets, and resolving promises will\nhappen ",(0,r.jsx)(t.em,{children:"after"})," the Starlark script is executed."]})]})}function u(e={}){const{wrapper:t}={...(0,i.useMDXComponents)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>h,mdx:()=>m,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,p=d["".concat(s,".").concat(h)]||d[h]||f[h]||a;return n?r.createElement(p,o(o({ref:t},l),{},{components:n})):r.createElement(p,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);