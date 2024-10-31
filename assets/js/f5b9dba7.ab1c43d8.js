"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6669],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const a={},i=void 0,l={unversionedId:"nanostream/directshow/directshow_h264_video_encoder",id:"nanostream/directshow/directshow_h264_video_encoder",title:"directshow_h264_video_encoder",description:"nanocosmos MPEG-2 Broadcast DirectShow SDK",source:"@site/docs/nanostream/directshow/directshow_h264_video_encoder.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_h264_video_encoder",permalink:"/docs/nanostream/directshow/directshow_h264_video_encoder",draft:!1,tags:[],version:"current",lastUpdatedAt:1730387209,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{}},c={},u=[{value:"nanocosmos MPEG-2 Broadcast DirectShow SDK",id:"nanocosmos-mpeg-2-broadcast-directshow-sdk",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Major Features",id:"major-features",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Filter components",id:"filter-components",level:3},{value:"Registering and unregistering components in the DirectShow framework",id:"registering-and-unregistering-components-in-the-directshow-framework",level:3},{value:"Filter activation",id:"filter-activation",level:3}],s={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"nanocosmos-mpeg-2-broadcast-directshow-sdk"},"nanocosmos MPEG-2 Broadcast DirectShow SDK"),(0,o.yg)("h3",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Nanocosmos MPEG-2 Broadcast DirectShow SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop video encoding / transcoding applications based on Microsoft DirectShow technology.","\\","  "),(0,o.yg)("h3",{id:"major-features"},"Major Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Encoding of MPEG-2 video streams in Main and High profile"),(0,o.yg)("li",{parentName:"ul"},"Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64"),(0,o.yg)("li",{parentName:"ul"},"Real-time Encoding from Capture cards is supported"),(0,o.yg)("li",{parentName:"ul"},"File Reader for MOV and MXF"),(0,o.yg)("li",{parentName:"ul"},"File Writer for MOV and MXF")),(0,o.yg)("h3",{id:"documentation"},"Documentation"),(0,o.yg)("p",null,"The SDK\\doc folder contains further documentation for the following filters:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"MPEG-2 Video Decoder"),(0,o.yg)("li",{parentName:"ul"},"MPEG-2 Video Encoder"),(0,o.yg)("li",{parentName:"ul"},"QuickTime Source"),(0,o.yg)("li",{parentName:"ul"},"QuickTime Writer"),(0,o.yg)("li",{parentName:"ul"},"MXF Reader"),(0,o.yg)("li",{parentName:"ul"},"MXF Writer")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Contact us for additional modules for MPEG Audio Encoding and Multiplexing")),(0,o.yg)("h3",{id:"filter-components"},"Filter components"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos MPEG-2 Video Decoder",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnmpeg2dec.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{223784F1-4D9F-45A5-8281-8F9AFCABD904}")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos MPEG-2 Video Encoder",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnmpeg2enc.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{2327A344-BECC-4F4F-89C6-DABDC5143832}")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos QuickTime Source Filter",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnqtsource.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{53718C99-F067-4609-8184-A8A92A241A5A}")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos Quicktime Writer (MPEG2/Broadcast)",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnmp4mux.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{C2FB362B-CE6C-4797-BC16-F81976DFEF61}")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos MXF Reader",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{A3462D0F-3BD0-48A2-BD91-A1366CFC35BB}")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos MXF Writer",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{C1C2C181-EBDA-421F-895F-638A4C5F132B}")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos MPEG PS/TS Stream Splitter",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnmpegsplitter.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{0994D1E8-B697-47DE-B1E3-36D26937D5B4}")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"nanocosmos File Dump Filter",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Module:\t\tnanodump.ax"),(0,o.yg)("li",{parentName:"ul"},"CLSID:\t\t{DA67A541-8FEA-11D4-A908-00105A6758CF}")))),(0,o.yg)("h3",{id:"registering-and-unregistering-components-in-the-directshow-framework"},"Registering and unregistering components in the DirectShow framework"),(0,o.yg)("p",null,"In order to use them, filters must be registered in the DirectShow framework. After\ninstallation all filters are registered. To re-register or unregister components, execute the ",(0,o.yg)("inlineCode",{parentName:"p"},"RegisterFilters.bat")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"UnregisterFilters.bat")," batch files from the SDK/bin folder."),(0,o.yg)("h3",{id:"filter-activation"},"Filter activation"),(0,o.yg)("p",null,"Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents."))}m.isMDXComponent=!0}}]);