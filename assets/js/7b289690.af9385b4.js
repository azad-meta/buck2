"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3768],{98266:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=i(74848),r=i(15680),o=i(52112);const l={id:"optimization",title:"Observability and Optimization"},s=void 0,a={id:"rule_authors/optimization",title:"Observability and Optimization",description:"Optimization involves the use of techniques for determining and improving the",source:"@site/../docs/rule_authors/optimization.md",sourceDirName:"rule_authors",slug:"/rule_authors/optimization",permalink:"/docs/rule_authors/optimization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"optimization",title:"Observability and Optimization"},sidebar:"main",previous:{title:"Test Execution",permalink:"/docs/rule_authors/test_execution"},next:{title:"Incremental Actions",permalink:"/docs/rule_authors/incremental_actions"}},c={},h=[{value:"Starlark profiling",id:"starlark-profiling",level:2},{value:"Summary profiling",id:"summary-profiling",level:3},{value:"Statement profiling",id:"statement-profiling",level:3},{value:"Flame profiling",id:"flame-profiling",level:3},{value:"Native profiling",id:"native-profiling",level:2},{value:"Benchmarking",id:"benchmarking",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Optimization involves the use of techniques for determining and improving the\nperformance of Buck2 and specific actions performed by Buck2. This page covers\nthe internals for developers of Buck2 and provides details of Starlark that are\nlikely to be relevant to end users."}),"\n",(0,t.jsx)(n.h2,{id:"starlark-profiling",children:"Starlark profiling"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"buck2"})," supports profiling of the evaluation of specific ",(0,t.jsx)(n.code,{children:"BUCK"})," files and\nprofiling of the analysis of specific targets."]}),"\n",(0,t.jsxs)(n.p,{children:["There are three ",(0,t.jsx)(n.code,{children:"buck2"})," profiling commands:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"buck2 profile loading"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"buck2 profile analysis"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"buck2 profile bxl"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"buck2 profile loading --mode=heap-summary-allocated -o heap-summary.csv //some/package:\nbuck2 profile analysis --mode=heap-summary-allocated -o heap-summary.csv //some/package:target\n"})}),"\n",(0,t.jsx)(n.p,{children:"Possible values for profiling modes are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#summary-profiling",children:"heap-summary-allocated"}),": The heap profile mode provides\ninformation about the time spent in each function and allocations performed by\neach function. Enabling this mode has the side effect of disabling\ngarbage-collection. This profiling mode is the recommended one."]}),"\n",(0,t.jsx)(n.li,{children:"heap-summary-retained: Like heap summary, but information about retained\nmemory after module is frozen."}),"\n",(0,t.jsxs)(n.li,{children:["time-flame: Provide output compatible with\n",(0,t.jsx)(n.a,{href:"https://github.com/brendangregg/FlameGraph/blob/master/flamegraph.pl",children:"flamegraph.pl"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["heap-flame-allocated: Like heap profile, but writes output comparible with\n",(0,t.jsx)(n.a,{href:"https://github.com/brendangregg/FlameGraph/blob/master/flamegraph.pl",children:"flamegraph.pl"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"heap-flame-retained: Like heap flame, but information about retained memory\nafter module is frozen."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#statement-profiling",children:"statement"}),": The statement profile mode provides\ninformation about time spent in each statement."]}),"\n",(0,t.jsx)(n.li,{children:"bytecode: The bytecode profile mode provides information about bytecode\ninstruction pairs."}),"\n",(0,t.jsx)(n.li,{children:"bytecode-pairs: The bytecode profile mode provides information about bytecode\ninstruction pairs."}),"\n",(0,t.jsx)(n.li,{children:"typecheck: Profile runtime typechecking."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"summary-profiling",children:"Summary profiling"}),"\n",(0,t.jsxs)(n.p,{children:["The first profiling mode (",(0,t.jsx)(n.code,{children:"heap-summary-allocated"}),") provides the time spent\nwithin a function and the allocations that are performed."]}),"\n",(0,t.jsx)(n.p,{children:"As an example, running over a folly BUCK file, produces a CSV file whose\ntop-left corner is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Function         Time(s)  TimeRec(s)    Calls   Allocs\nTOTALS            10.455      10.455  9712799  3477203\nfbchain_configs    1.163       2.514    11328    33984\nis_string          0.726       1.028  1514985        0\napple_library      0.725       0.725     1887        0\ntype               0.435       0.435  2053296        0\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"This reveals the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Total execution was 10.455s, which will be a bit slower than normal, because\nprofiling is on."}),"\n",(0,t.jsxs)(n.li,{children:["1.163s was spent in ",(0,t.jsx)(n.code,{children:"fbchain_configs"})," itself and 2.514s in that function and\nthe things it calls."]}),"\n",(0,t.jsx)(n.li,{children:"A disturbing 1.5M calls and 1.028s is spent testing if things are strings,\nwhich is almost certainly responsible for half the type calls."}),"\n",(0,t.jsxs)(n.li,{children:["Happily, ",(0,t.jsx)(n.code,{children:"is_string"})," doesn't allocate, but ",(0,t.jsx)(n.code,{children:"fbchain_configs"})," does. Scrolling\nto the right, on the full CSV file (not shown), reveals it allocates 1 tuple\nand 2 dict per call. It can also be seen that ",(0,t.jsx)(n.code,{children:"fbchain_configs"})," is mostly\ncalled by ",(0,t.jsx)(n.code,{children:"_add_code_coverage_configs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This profiling mode is implemented by turning off garbage collection, so the\nheap retains everything, and pushing function entry/exit entries on to the heap\nwith the time they happen. After execution, the heap can be scanned in order to\nreconstruct the call tree and allocation patterns. As a result, this profile\nmode may consume significantly more memory."}),"\n",(0,t.jsx)(n.h3,{id:"statement-profiling",children:"Statement profiling"}),"\n",(0,t.jsxs)(n.p,{children:["The second profiling mode tells us which statements spent most time executing.\nRunning it over a structured-logger ",(0,t.jsx)(n.code,{children:"BUCK"})," file gives us a CSV file starting\nwith:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"File                            Span  Duration(s)    Count\nTOTAL                                        4.03  7187761\nfbcode_allowed_list.bzl  420:9-423:1         0.27   455884\ncell_defs.bzl             13:5-13:60         0.17   117736\nread_configs.bzl          46:5-46:55         0.08    65042\nprelude.bzl               28:9-29:20         0.07     1004\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This profile shows how much time is spent in each statement. Looking at the\nrelevant portion of ",(0,t.jsx)(n.code,{children:"fbode_allowed_list.bzl"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'for _package in _recursive_allowlist:\n    if base_path == _package or base_path.startswith(_package + "/"):\n        return True\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"if"})," statement is at location 420:9-423:1 and takes 0.27s. The ",(0,t.jsx)(n.code,{children:"if"}),"\nstatement runs approximately 456K times. While looking at the outer statement in\nthe profile (not shown), it can be seen that the ",(0,t.jsx)(n.code,{children:"for"})," loop is only called 3188\ntimes, implying an average of 143 iterations per call. It's possible that this\nloop could be rewritten as some clever dictionary lookup, perhaps iterating over\nthe path components of ",(0,t.jsx)(n.code,{children:"_package"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Line profiling builds on top of the ",(0,t.jsx)(n.code,{children:"before_stmt"})," hook that is used for\ndebugging. It records the time each statement is entered then blames that\nstatement for all time until the next statement. That means that sometimes, due\nto statements making function calls, the ",(0,t.jsx)(n.code,{children:"return"})," of the function call may be\n'blamed' until the next statement executes. As a result, treat the results with\nslight caution."]}),"\n",(0,t.jsx)(n.h3,{id:"flame-profiling",children:"Flame profiling"}),"\n",(0,t.jsxs)(n.p,{children:["The flame profiling modes produces a ",(0,t.jsx)(n.code,{children:".svg"})," flamegraph showing either time spent\nor allocations. You can open it in Google chrome and inspect the resulting flame\ngraph."]}),"\n",(0,t.jsx)(o.FbInternalOnly,{children:(0,t.jsxs)(n.p,{children:["The flame profile provides a list of how time is used based on call stacks (you\ncan download an example ",(0,t.jsx)(n.a,{href:"https://www.internalfb.com/intern/px/p/1Mz2W",children:"here"}),")."]})}),"\n",(0,t.jsx)(n.h2,{id:"native-profiling",children:"Native profiling"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Profiling on Linux can be done with\n",(0,t.jsx)(n.code,{children:"perf record -g --call-graph=dwarf,20000 ..."})," and ",(0,t.jsx)(n.code,{children:"perf report --call-graph"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Don't profile the ",(0,t.jsx)(n.code,{children:"buck2"})," process directly unless you are interested in\nprofiling the CLI; you likely want to profile the ",(0,t.jsx)(n.code,{children:"buck2"})," daemon process.\nYou can find the pid with ",(0,t.jsx)(n.code,{children:"buck2 status"})," and attach ",(0,t.jsx)(n.code,{children:"perf"})," to that PID."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Profiling on Mac can be done with ",(0,t.jsx)(n.code,{children:"Instruments"}),(0,t.jsxs)(o.FbInternalOnly,{children:[" (for details,\nsee the Wiki article\n",(0,t.jsx)(n.a,{href:"https://www.internalfb.com/intern/wiki/GraphQL/Build_Infra/Running_and_Testing_Builds/#profiling-the-rust-code",children:"Running and Testing Builds"}),")"]}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"benchmarking",children:"Benchmarking"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you want to do proper statistically relevant A/B testing, use\n",(0,t.jsx)(n.code,{children:"absh -a testa -b testb"})," (see ",(0,t.jsx)(n.a,{href:"https://github.com/stepancheg/absh",children:"absh"})," in\nthe GitHub repository)."]}),"\n",(0,t.jsxs)(n.li,{children:["To measure the number of instructions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On Linux, use ",(0,t.jsx)(n.code,{children:"perf stat foo"})]}),"\n",(0,t.jsxs)(n.li,{children:["On Mac, use ",(0,t.jsx)(n.code,{children:"/usr/bin/time -lp foo"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["On Mac, to run something with the time profiler on the command line, use\n",(0,t.jsx)(n.code,{children:"xcrun xctrace record --template 'Time Profiler' --launch -- foo"}),", then\n",(0,t.jsx)(n.code,{children:"open Foo.trace"})," for the name of the trace file it spits out (or pass\n",(0,t.jsx)(n.code,{children:"--output"})," to control the output filename)."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},15680:(e,n,i)=>{i.r(n),i.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>h});var t=i(96540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},o.apply(this,arguments)}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=t.createContext({}),h=function(e){return function(n){var i=d(n.components);return t.createElement(e,o({},n,{components:i}))}},d=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},p=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=d(i),p=r,u=h["".concat(l,".").concat(p)]||h[p]||f[p]||o;return i?t.createElement(u,s(s({ref:n},c),{},{components:i})):t.createElement(u,s({ref:n},c))}));function g(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=m;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=i[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"}}]);