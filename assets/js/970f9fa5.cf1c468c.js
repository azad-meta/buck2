"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{11637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(74848),a=t(15680),o=t(28774);const i={},l="ConstraintValueInfo",s={id:"api/build/ConstraintValueInfo",title:"ConstraintValueInfo",description:"Provider that signals that a target can be used as a constraint key. This is the only provider returned by a constraint_value() target.",source:"@site/../docs/api/build/ConstraintValueInfo.md",sourceDirName:"api/build",slug:"/api/build/ConstraintValueInfo",permalink:"/docs/api/build/ConstraintValueInfo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ConstraintSettingInfo",permalink:"/docs/api/build/ConstraintSettingInfo"},next:{title:"DefaultInfo",permalink:"/docs/api/build/DefaultInfo"}},c={},u=[{value:"ConstraintValueInfo.label",id:"constraintvalueinfolabel",level:2},{value:"ConstraintValueInfo.setting",id:"constraintvalueinfosetting",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",...(0,a.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"constraintvalueinfo",children:"ConstraintValueInfo"})}),"\n",(0,r.jsxs)(n.p,{children:["Provider that signals that a target can be used as a constraint key. This is the only provider returned by a ",(0,r.jsx)(n.code,{children:"constraint_value()"})," target."]}),"\n",(0,r.jsx)(n.h2,{id:"constraintvalueinfolabel",children:"ConstraintValueInfo.label"}),"\n",(0,r.jsx)("pre",{class:"language-python",children:(0,r.jsxs)("code",{children:["ConstraintValueInfo.label: ",(0,r.jsx)(o.default,{to:"/docs/api/build/TargetLabel",children:"target_label"})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"constraintvalueinfosetting",children:"ConstraintValueInfo.setting"}),"\n",(0,r.jsx)("pre",{class:"language-python",children:(0,r.jsx)("code",{children:"ConstraintValueInfo.setting: ConstraintSettingInfo"})})]})}function f(e={}){const{wrapper:n}={...(0,a.useMDXComponents)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,d=u["".concat(i,".").concat(f)]||u[f]||h[f]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);