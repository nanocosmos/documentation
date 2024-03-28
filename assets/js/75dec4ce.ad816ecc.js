"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5611],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>p});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,p=d["".concat(u,".").concat(m)]||d[m]||g[m]||r;return t?o.createElement(p,i(i({ref:n},s),{},{components:t})):o.createElement(p,i({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(58168),a=(t(96540),t(15680));const r={},i=void 0,l={unversionedId:"nanostream/directshow/directshow_nanoAVC_encoding_sdk",id:"nanostream/directshow/directshow_nanoAVC_encoding_sdk",title:"directshow_nanoAVC_encoding_sdk",description:"nanoAVC/H.264 DirectShow Encoding SDK",source:"@site/docs/nanostream/directshow/directshow_nanoAVC_encoding_sdk.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_nanoAVC_encoding_sdk",permalink:"/docs/nanostream/directshow/directshow_nanoAVC_encoding_sdk",draft:!1,tags:[],version:"current",lastUpdatedAt:1711640284,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{}},u={},c=[{value:"nanoAVC/H.264 DirectShow Encoding SDK",id:"nanoavch264-directshow-encoding-sdk",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Major Features",id:"major-features",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Filter components",id:"filter-components",level:3},{value:"Registering and unregistering components in the DirectShow framework",id:"registering-and-unregistering-components-in-the-directshow-framework",level:3},{value:"Evaluation mode and filter activation",id:"evaluation-mode-and-filter-activation",level:3},{value:"Embedding / Customizing nanoPEG technology",id:"embedding--customizing-nanopeg-technology",level:3}],s={toc:c},d="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,o.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"nanoavch264-directshow-encoding-sdk"},"nanoAVC/H.264 DirectShow Encoding SDK"),(0,a.yg)("h3",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"nanoAVC/H.264 Direct Show Encoding SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop  video encoding / transcoding applications based on Microsoft(R) DirectX/DirectShow(R) technology."),(0,a.yg)("h3",{id:"major-features"},"Major Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ISO 14496 Part 10 (MPEG-AVC) / ITU H.264 compliance for many profiles and levels"),(0,a.yg)("li",{parentName:"ul"},"Encoding of H.264 video streams in Baseline, Main, Extended and High profile"),(0,a.yg)("li",{parentName:"ul"},"Encoding of AAC-LC/LTP/MAIN/HE(aacPlus) audio streams with up to 6 channels"),(0,a.yg)("li",{parentName:"ul"},"Encoding of AMR-NB audio streams"),(0,a.yg)("li",{parentName:"ul"},"Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64"),(0,a.yg)("li",{parentName:"ul"},"Real-time Encoding from Capture cards is supported"),(0,a.yg)("li",{parentName:"ul"},"Wide range of applications from Mobile Phones (3GP), Portable Devices (iPod, iPhone, Sony PSP etc) up to Professional HDTV"),(0,a.yg)("li",{parentName:"ul"},"Multiplexer for MP4, MOV and 3GP")),(0,a.yg)("h3",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"The SDK\\doc folder contains the following further documents:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"H.264/AVC Video Decoder"),(0,a.yg)("li",{parentName:"ul"},"H.264/AVC Video Encoder"),(0,a.yg)("li",{parentName:"ul"},"AAC Audio Encoder"),(0,a.yg)("li",{parentName:"ul"},"AMR-NB Audio Encoder"),(0,a.yg)("li",{parentName:"ul"},"MP4/3GP Multiplexer")),(0,a.yg)("h3",{id:"filter-components"},"Filter components"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos AVC/H.264 Video Encoder",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnh264enc.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{A88889A8-3C2A-4A32-8EAA-755D491D02A0}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos AAC Audio Encoder",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnaacenc.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{0296CC21-B78D-416D-846C-45E26CA46A4A}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos AMR-NB Audio Encoder",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnamrnbenc.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{10CAB930-E019-41DF-83B7-60D723706B8F}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos MP4 Multiplexer",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnmp4mux.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{78D670BF-49B5-4A3B-BB8C-E2A36E688FCF}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos File Dump Filter",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnanodump.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{DA67A541-8FEA-11D4-A908-00105A6758CF}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos AVC/H.264 Video Decoder",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{264DA7DD-CE74-472D-A2FD-796A1F0A379C}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos AAC Audio Decoder",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnaacdec.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{AEED2B3D-6DA1-4C84-A85D-83547FA90486}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos MP4 Stream Splitter",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnmp4splitter.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{22F493C4-B51B-4767-BE55-ADFA34D6A205}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos MPEG PS/TS Stream Splitter",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnmpegsplitter.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{0994D1E8-B697-47DE-B1E3-36D26937D5B4}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos Color Space Converter",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tncolconv.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{E855821E-C055-4C85-B04F-19F65D5D50FD}")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nanocosmos MPEG TS Writer",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Module:\t\tnanoTsWriter.ax"),(0,a.yg)("li",{parentName:"ul"},"CLSID:\t\t{2C6E92AB-523E-4C90-8A01-394FC0FC273C}")))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Example filtergraph",src:t(89078).A,width:"500",height:"855"})),(0,a.yg)("p",null,"Figure 1.  Example  filtergraph"),(0,a.yg)("h3",{id:"registering-and-unregistering-components-in-the-directshow-framework"},"Registering and unregistering components in the DirectShow framework"),(0,a.yg)("p",null,"In order to use them, filters must be registered in the DirectShow framework. After installation all filters are registered. To re-register or unregister components, execute the RegisterFilters.bat or UnregisterFilters.bat batch files from the SDK/bin folder."),(0,a.yg)("h3",{id:"evaluation-mode-and-filter-activation"},"Evaluation mode and filter activation"),(0,a.yg)("p",null,"Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.","\\","\nIf filters run in evaluation mode, an overlay logo will be shown on video."),(0,a.yg)("h3",{id:"embedding--customizing-nanopeg-technology"},"Embedding / Customizing nanoPEG technology"),(0,a.yg)("p",null,"Nanocosmos also offers special OEM and customization service. Dependent on your needs, we may offer different models of licensing or application development."))}g.isMDXComponent=!0},89078:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/directshow_h264_encoding_filtergraph-fd4f1dbd9224e0645e6e085ef7654963.png"}}]);