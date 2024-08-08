"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3870],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>p});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,p=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return t?o.createElement(p,a(a({ref:n},d),{},{components:t})):o.createElement(p,a({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(58168),r=(t(96540),t(15680));const i={},a=void 0,l={unversionedId:"nanostream/directshow/directshow_nanoAVC_decoding_sdk",id:"nanostream/directshow/directshow_nanoAVC_decoding_sdk",title:"directshow_nanoAVC_decoding_sdk",description:"nanoAVC/H.264 DirectShow Decoding SDK",source:"@site/docs/nanostream/directshow/directshow_nanoAVC_decoding_sdk.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_nanoAVC_decoding_sdk",permalink:"/docs/nanostream/directshow/directshow_nanoAVC_decoding_sdk",draft:!1,tags:[],version:"current",lastUpdatedAt:1723112171,formattedLastUpdatedAt:"Aug 8, 2024",frontMatter:{}},s={},c=[{value:"nanoAVC/H.264 DirectShow Decoding SDK",id:"nanoavch264-directshow-decoding-sdk",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Filter components",id:"filter-components",level:3},{value:"Registering and unregistering components in the DirectShow framework",id:"registering-and-unregistering-components-in-the-directshow-framework",level:3},{value:"Evaluation mode and filter activation",id:"evaluation-mode-and-filter-activation",level:3},{value:"Embedding / Customizing nanocosmos technology",id:"embedding--customizing-nanocosmos-technology",level:3}],d={toc:c},u="wrapper";function m(e){let{components:n,...i}=e;return(0,r.yg)(u,(0,o.A)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"nanoavch264-directshow-decoding-sdk"},"nanoAVC/H.264 DirectShow Decoding SDK"),(0,r.yg)("h3",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"nanoAVC/H.264 Direct Show Decoding SDK enables you to decode/play back\nAVC/H.264 video and AAC audio from MP4/3GP or transport stream (TS) sources\nwithin Windows Media Player and custom applications based on Microsoft DirectShow Framework."),(0,r.yg)("p",null,"The nanocosmos H.264/AVC Video Decoder supports streams in baseline, main and high profile. It is highly optimized for use on hyper-threading and multi core systems."),(0,r.yg)("h3",{id:"filter-components"},"Filter components"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"nanocosmos AVC/H.264 Video Decoder",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,r.yg)("li",{parentName:"ul"},"CLSID:\t\t{264DA7DD-CE74-472D-A2FD-796A1F0A379C}")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"nanocosmos AAC Audio Decoder",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Module:\t\tnaacdec.ax"),(0,r.yg)("li",{parentName:"ul"},"CLSID:\t\t{AEED2B3D-6DA1-4C84-A85D-83547FA90486}")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"nanocosmos MP4 Stream Splitter",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Module:\t\tnmp4splitter.ax"),(0,r.yg)("li",{parentName:"ul"},"CLSID:\t\t{22F493C4-B51B-4767-BE55-ADFA34D6A205}")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"nanocosmos MPEG PS/TS Stream Splitter",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Module:\t\tnmpegsplitter.ax"),(0,r.yg)("li",{parentName:"ul"},"CLSID:\t\t{0994D1E8-B697-47DE-B1E3-36D26937D5B4}")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example playback filtergraph",src:t(24578).A,width:"800",height:"208"})),(0,r.yg)("p",null,"Figure 1.  Example playback filtergraph"),(0,r.yg)("h3",{id:"registering-and-unregistering-components-in-the-directshow-framework"},"Registering and unregistering components in the DirectShow framework"),(0,r.yg)("p",null,"In order to use them, filters must be registered in the DirectShow framework. After installation all filters are registered. To re-register or unregister components, execute the RegisterFilters.bat or UnregisterFilters.bat batch files from the SDK/bin folder."),(0,r.yg)("h3",{id:"evaluation-mode-and-filter-activation"},"Evaluation mode and filter activation"),(0,r.yg)("p",null,"Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.","\\","\nIf filters run in evaluation mode, an overlay logo will be shown on video."),(0,r.yg)("h3",{id:"embedding--customizing-nanocosmos-technology"},"Embedding / Customizing nanocosmos technology"),(0,r.yg)("p",null,"Nanocosmos also offers special OEM and customization service. Dependent on your needs, we may offer different models of licensing or application development."))}m.isMDXComponent=!0},24578:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/directshow_h264_decoding_filtergraph-0cdbf2d1d5195bfde74a6ad68809f39f.png"}}]);