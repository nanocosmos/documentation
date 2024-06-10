"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[870],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i=void 0,l={unversionedId:"nanostream/directshow/directshow_mpeg2_broadcast_sdk",id:"nanostream/directshow/directshow_mpeg2_broadcast_sdk",title:"directshow_mpeg2_broadcast_sdk",description:"nanocosmos MPEG-2 Broadcast DirectShow SDK",source:"@site/docs/nanostream/directshow/directshow_mpeg2_broadcast_sdk.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_mpeg2_broadcast_sdk",permalink:"/docs/nanostream/directshow/directshow_mpeg2_broadcast_sdk",draft:!1,tags:[],version:"current",lastUpdatedAt:1718025698,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{}},s={},c=[{value:"nanocosmos MPEG-2 Broadcast DirectShow SDK",id:"nanocosmos-mpeg-2-broadcast-directshow-sdk",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Major Features",id:"major-features",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Filter components",id:"filter-components",level:3},{value:"Registering and unregistering components in the DirectShow framework",id:"registering-and-unregistering-components-in-the-directshow-framework",level:3},{value:"Filter activation",id:"filter-activation",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"nanocosmos-mpeg-2-broadcast-directshow-sdk"},"nanocosmos MPEG-2 Broadcast DirectShow SDK"),(0,a.yg)("h3",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Nanocosmos MPEG-2 Broadcast DirectShow  SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop video encoding / transcoding applications based on Microsoft DirectShow technology."),(0,a.yg)("h3",{id:"major-features"},"Major Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Encoding of MPEG-2 video streams in Main and High profile"),(0,a.yg)("li",{parentName:"ul"},"Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64"),(0,a.yg)("li",{parentName:"ul"},"Real-time Encoding from Capture cards is supported"),(0,a.yg)("li",{parentName:"ul"},"File Reader for MOV and MXF"),(0,a.yg)("li",{parentName:"ul"},"File Writer for MOV and MXF")),(0,a.yg)("h3",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"The SDK\\doc folder contains further documentation for the following filters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"MPEG-2 Video Decoder"),(0,a.yg)("li",{parentName:"ul"},"MPEG-2 Video Encoder"),(0,a.yg)("li",{parentName:"ul"},"QuickTime Source"),(0,a.yg)("li",{parentName:"ul"},"QuickTime Writer"),(0,a.yg)("li",{parentName:"ul"},"MXF Reader"),(0,a.yg)("li",{parentName:"ul"},"MXF Writer")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Contact us for additional modules for MPEG Audio Encoding and Multiplexing")),(0,a.yg)("h3",{id:"filter-components"},"Filter components"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos MPEG-2 Video Decoder"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnmpeg2dec.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{223784F1-4D9F-45A5-8281-8F9AFCABD904}"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos MPEG-2 Video Encoder")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Module:\t\tnmpeg2enc.ax")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"CLSID:\t\t{2327A344-BECC-4F4F-89C6-DABDC5143832}")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos QuickTime Source Filter"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnqtsource.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{53718C99-F067-4609-8184-A8A92A241A5A}"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos Quicktime Writer (MPEG2/Broadcast)"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnmp4mux.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{C2FB362B-CE6C-4797-BC16-F81976DFEF61}"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos MXF Reader"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{A3462D0F-3BD0-48A2-BD91-A1366CFC35BB}"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos MXF Writer"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{C1C2C181-EBDA-421F-895F-638A4C5F132B}"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos MPEG PS/TS Stream Splitter"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnmpegsplitter.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{0994D1E8-B697-47DE-B1E3-36D26937D5B4}"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"nanocosmos File Dump Filter"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnanodump.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{DA67A541-8FEA-11D4-A908-00105A6758CF}")))),(0,a.yg)("h3",{id:"registering-and-unregistering-components-in-the-directshow-framework"},"Registering and unregistering components in the DirectShow framework"),(0,a.yg)("p",null,"In order to use them, filters must be registered in the DirectShow framework. After\ninstallation all filters are registered. To re-register or unregister components, execute the ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterFilters.bat")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"UnregisterFilters.bat")," batch files from the SDK/bin folder."),(0,a.yg)("h3",{id:"filter-activation"},"Filter activation"),(0,a.yg)("p",null,"Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents."))}p.isMDXComponent=!0}}]);