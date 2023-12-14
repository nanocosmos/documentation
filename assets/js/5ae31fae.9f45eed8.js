"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[40],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"nanostream/directshow/directshow_mpeg2_broadcast_sdk",id:"nanostream/directshow/directshow_mpeg2_broadcast_sdk",title:"directshow_mpeg2_broadcast_sdk",description:"nanocosmos MPEG-2 Broadcast DirectShow SDK",source:"@site/docs/nanostream/directshow/directshow_mpeg2_broadcast_sdk.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_mpeg2_broadcast_sdk",permalink:"/docs/nanostream/directshow/directshow_mpeg2_broadcast_sdk",draft:!1,tags:[],version:"current",lastUpdatedAt:1702554316,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{}},c={},s=[{value:"nanocosmos MPEG-2 Broadcast DirectShow SDK",id:"nanocosmos-mpeg-2-broadcast-directshow-sdk",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Major Features",id:"major-features",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Filter components",id:"filter-components",level:3},{value:"Registering and unregistering components in the DirectShow framework",id:"registering-and-unregistering-components-in-the-directshow-framework",level:3},{value:"Filter activation",id:"filter-activation",level:3}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"nanocosmos-mpeg-2-broadcast-directshow-sdk"},"nanocosmos MPEG-2 Broadcast DirectShow SDK"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Nanocosmos MPEG-2 Broadcast DirectShow  SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop video encoding / transcoding applications based on Microsoft DirectShow technology."),(0,a.kt)("h3",{id:"major-features"},"Major Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Encoding of MPEG-2 video streams in Main and High profile"),(0,a.kt)("li",{parentName:"ul"},"Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64"),(0,a.kt)("li",{parentName:"ul"},"Real-time Encoding from Capture cards is supported"),(0,a.kt)("li",{parentName:"ul"},"File Reader for MOV and MXF"),(0,a.kt)("li",{parentName:"ul"},"File Writer for MOV and MXF")),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"The SDK\\doc folder contains further documentation for the following filters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MPEG-2 Video Decoder"),(0,a.kt)("li",{parentName:"ul"},"MPEG-2 Video Encoder"),(0,a.kt)("li",{parentName:"ul"},"QuickTime Source"),(0,a.kt)("li",{parentName:"ul"},"QuickTime Writer"),(0,a.kt)("li",{parentName:"ul"},"MXF Reader"),(0,a.kt)("li",{parentName:"ul"},"MXF Writer")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Contact us for additional modules for MPEG Audio Encoding and Multiplexing")),(0,a.kt)("h3",{id:"filter-components"},"Filter components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos MPEG-2 Video Decoder"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Module:\t\tnmpeg2dec.ax"),(0,a.kt)("li",{parentName:"ul"},"CLSID:\t\t{223784F1-4D9F-45A5-8281-8F9AFCABD904}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos MPEG-2 Video Encoder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Module:\t\tnmpeg2enc.ax")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CLSID:\t\t{2327A344-BECC-4F4F-89C6-DABDC5143832}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos QuickTime Source Filter"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Module:\t\tnqtsource.ax"),(0,a.kt)("li",{parentName:"ul"},"CLSID:\t\t{53718C99-F067-4609-8184-A8A92A241A5A}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos Quicktime Writer (MPEG2/Broadcast)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Module:\t\tnmp4mux.ax"),(0,a.kt)("li",{parentName:"ul"},"CLSID:\t\t{C2FB362B-CE6C-4797-BC16-F81976DFEF61}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos MXF Reader"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,a.kt)("li",{parentName:"ul"},"CLSID:\t\t{A3462D0F-3BD0-48A2-BD91-A1366CFC35BB}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos MXF Writer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,a.kt)("li",{parentName:"ul"},"CLSID:\t\t{C1C2C181-EBDA-421F-895F-638A4C5F132B}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos MPEG PS/TS Stream Splitter"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Module:\t\tnmpegsplitter.ax"),(0,a.kt)("li",{parentName:"ul"},"CLSID:\t\t{0994D1E8-B697-47DE-B1E3-36D26937D5B4}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanocosmos File Dump Filter"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Module:\t\tnanodump.ax"),(0,a.kt)("li",{parentName:"ul"},"CLSID:\t\t{DA67A541-8FEA-11D4-A908-00105A6758CF}")))),(0,a.kt)("h3",{id:"registering-and-unregistering-components-in-the-directshow-framework"},"Registering and unregistering components in the DirectShow framework"),(0,a.kt)("p",null,"In order to use them, filters must be registered in the DirectShow framework. After\ninstallation all filters are registered. To re-register or unregister components, execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterFilters.bat")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"UnregisterFilters.bat")," batch files from the SDK/bin folder."),(0,a.kt)("h3",{id:"filter-activation"},"Filter activation"),(0,a.kt)("p",null,"Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents."))}p.isMDXComponent=!0}}]);