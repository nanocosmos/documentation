"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||a;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=n(87462),l=(n(67294),n(3905));const a={id:"nanostream_directshow_h264",title:"H264",sidebar_label:"H264"},o=void 0,r={unversionedId:"nanostream/directshow/nanostream_directshow_h264",id:"nanostream/directshow/nanostream_directshow_h264",title:"H264",description:"AVC/H.264 Video Codec / SDK",source:"@site/docs/nanostream/directshow/nanostream_directshow_h264.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/nanostream_directshow_h264",permalink:"/docs/nanostream/directshow/nanostream_directshow_h264",draft:!1,tags:[],version:"current",lastUpdatedAt:1702554316,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{id:"nanostream_directshow_h264",title:"H264",sidebar_label:"H264"},sidebar:"nanoStream Apps & SDKs",previous:{title:"Overview",permalink:"/docs/nanostream/directshow/"},next:{title:"RTMP",permalink:"/docs/nanostream/directshow/nanostream_directshow_rtmp"}},d={},u=[{value:"AVC/H.264 Video Codec / SDK",id:"avch264-video-codec--sdk",level:2},{value:"High Quality and High Performance Video Coding",id:"high-quality-and-high-performance-video-coding",level:3},{value:"Major Features",id:"major-features",level:3},{value:"Architecture and Availability",id:"architecture-and-availability",level:3},{value:"Components",id:"components",level:3},{value:"Licensing model",id:"licensing-model",level:3},{value:"H.264 / AVC Video Encoder",id:"h264--avc-video-encoder",level:3},{value:"H.264/AVC Video Decoder",id:"h264avc-video-decoder",level:3},{value:"Audio, Multiplexer and File Formats",id:"audio-multiplexer-and-file-formats",level:3},{value:"Other codec types",id:"other-codec-types",level:3},{value:"nanoAVC/H.264 DirectShow Decoding SDK",id:"nanoavch264-directshow-decoding-sdk",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Filter components",id:"filter-components",level:3},{value:"Registering and unregistering components in the DirectShow framework",id:"registering-and-unregistering-components-in-the-directshow-framework",level:3},{value:"Evaluation mode and filter activation",id:"evaluation-mode-and-filter-activation",level:3},{value:"Embedding / Customizing nanocosmos technology",id:"embedding--customizing-nanocosmos-technology",level:3},{value:"nanoAVC/H.264 DirectShow Encoding SDK",id:"nanoavch264-directshow-encoding-sdk",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Major Features",id:"major-features-1",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Filter components",id:"filter-components-1",level:3},{value:"Registering and unregistering components in the DirectShow framework",id:"registering-and-unregistering-components-in-the-directshow-framework-1",level:3},{value:"Evaluation mode and filter activation",id:"evaluation-mode-and-filter-activation-1",level:3},{value:"Embedding / Customizing nanoPEG technology",id:"embedding--customizing-nanopeg-technology",level:3},{value:"nanocosmos H.264 Video Decoder Filter",id:"nanocosmos-h264-video-decoder-filter",level:2},{value:"Module / Version",id:"module--version",level:3},{value:"Connectivity",id:"connectivity",level:3},{value:"Filter GUIDs",id:"filter-guids",level:3},{value:"Setting the license to unlock filter",id:"setting-the-license-to-unlock-filter",level:3},{value:"Decoder Configuration Registry Settings",id:"decoder-configuration-registry-settings",level:3},{value:"Frame dropping / skipping mode",id:"frame-dropping--skipping-mode",level:4},{value:"Deblocking mode",id:"deblocking-mode",level:4},{value:"Output color space selection",id:"output-color-space-selection",level:4},{value:"Deinterlacing Mode",id:"deinterlacing-mode",level:4},{value:"DirectShow Editing Services (DES) Return Mode",id:"directshow-editing-services-des-return-mode",level:4},{value:"Threading Mode",id:"threading-mode",level:4},{value:"Output resolution alignment",id:"output-resolution-alignment",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:3},{value:"File name",id:"file-name",level:4},{value:"Logging level",id:"logging-level",level:4}],s={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"avch264-video-codec--sdk"},"AVC/H.264 Video Codec / SDK"),(0,l.kt)("h3",{id:"high-quality-and-high-performance-video-coding"},"High Quality and High Performance Video Coding"),(0,l.kt)("p",null,"nanocosmos AVC/H.264 video codec is a high performance video codec for the latest generation ",(0,l.kt)("inlineCode",{parentName:"p"},"MPEG-AVC / H.264")," video coding standards. It may be licensed by Professional and OEM customers for integration into custom applications."),(0,l.kt)("h3",{id:"major-features"},"Major Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Most advanced video coding standard ",(0,l.kt)("inlineCode",{parentName:"li"},"H.264 (MPEG-AVC)")),(0,l.kt)("li",{parentName:"ul"},"Highly optimized software coding with support for latest CPU generations (Multicore / Core i7)"),(0,l.kt)("li",{parentName:"ul"},"Wide range of applications from Mobile Phones (3GP), Portable Devices (iPod etc.) up to HDTV"),(0,l.kt)("li",{parentName:"ul"},"Full HD ",(0,l.kt)("inlineCode",{parentName:"li"},"1080i")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"1080p "),"support"),(0,l.kt)("li",{parentName:"ul"},"X-HD support for Custom Applications (Dome Cinema, Projections), up to ",(0,l.kt)("inlineCode",{parentName:"li"},"2k/4k")," (4096 x 4096)"),(0,l.kt)("li",{parentName:"ul"},"Support for realtime Full HD 1080 encoding and decoding of ",(0,l.kt)("inlineCode",{parentName:"li"},"dual channel video")," (stereo video / 3d)"),(0,l.kt)("li",{parentName:"ul"},"Baseline Profile, Main Profile and HDTV modes supported")),(0,l.kt)("h3",{id:"architecture-and-availability"},"Architecture and Availability"),(0,l.kt)("p",null,"The Codec is available for Windows platforms based on DirectShow filters. For MacOS and Linux, custom based solutions are available."),(0,l.kt)("h3",{id:"components"},"Components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AVC/H.264 Video Encoder and Decoder, MP4 splitter and multiplexer"),(0,l.kt)("li",{parentName:"ul"},"MPEG audio and AAC audio codecs."),(0,l.kt)("li",{parentName:"ul"},"MP4, 3GP and optionally Quicktime and AVI file format writers")),(0,l.kt)("h3",{id:"licensing-model"},"Licensing model"),(0,l.kt)("p",null,"We offer several licensing models, dependent on customer requirements."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Developer License (SDK):  With the Developer License, you will get a documented SDK including shared library objects (DLLs), interface specifications, header files and source code samples to develop video coding applications."),(0,l.kt)("li",{parentName:"ul"},"Redistribution License (Royalties):  For redistributing video coding modules with your application, a per-item additional royalty license is needed. You may also get flat fees for high sales volumes. Please contact us for further information."),(0,l.kt)("li",{parentName:"ul"},"Customization and flat fees are possible")),(0,l.kt)("h3",{id:"h264--avc-video-encoder"},"H.264 / AVC Video Encoder"),(0,l.kt)("p",null,"The Video Encoder produces compatible streams according to ",(0,l.kt)("inlineCode",{parentName:"p"},"ITU H.264 / ISO MPEG/AVC Reference Model JM9.2"),", as well as MP4 file format output."),(0,l.kt)("p",null,"Dual channel encoding for stereo video is supported."),(0,l.kt)("p",null,"The encoder accepts the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GOP Structure (I-frame distance / P-frame distance)"),(0,l.kt)("li",{parentName:"ul"},"Bit rate"),(0,l.kt)("li",{parentName:"ul"},"Profile/Level (baseline, main, extended, high)"),(0,l.kt)("li",{parentName:"ul"},"Field Structure (Interlaced/Progressive)"),(0,l.kt)("li",{parentName:"ul"},"Frame rate (",(0,l.kt)("inlineCode",{parentName:"li"},"15"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"24"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"25"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"30"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"50"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"60"),")"),(0,l.kt)("li",{parentName:"ul"},"chroma_format / aux_format ",(0,l.kt)("inlineCode",{parentName:"li"},"(monochrome"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"4:2:0"),")"),(0,l.kt)("li",{parentName:"ul"},"misc. rate controls (fixed quantization, vbr, cbr)"),(0,l.kt)("li",{parentName:"ul"},"Motion Estimation method"),(0,l.kt)("li",{parentName:"ul"},"full pel, half pel and quarter pel motion vectors"),(0,l.kt)("li",{parentName:"ul"},"SVC chroma deblocking filter mode"),(0,l.kt)("li",{parentName:"ul"},"transform_8x8_mode"),(0,l.kt)("li",{parentName:"ul"},"Frame Size from Mobile to HDTV (",(0,l.kt)("inlineCode",{parentName:"li"},"64x64")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"4096x2048"),")")),(0,l.kt)("h3",{id:"h264avc-video-decoder"},"H.264/AVC Video Decoder"),(0,l.kt)("p",null,"The decoder supports decoding of files created by ",(0,l.kt)("inlineCode",{parentName:"p"},"JM9.2")," compliant encoders or later, as well as MP4 file format input. The decoder supports baseline, main, extended and high profiles features, including HD, e.g. 1080i."),(0,l.kt)("h3",{id:"audio-multiplexer-and-file-formats"},"Audio, Multiplexer and File Formats"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Elementary Files, MP4 file format, 3GP file format, Quicktime"),(0,l.kt)("li",{parentName:"ul"},"RTMP streaming for Flash compatible streaming servers"),(0,l.kt)("li",{parentName:"ul"},"MPEG audio and AAC formats are available.")),(0,l.kt)("h3",{id:"other-codec-types"},"Other codec types"),(0,l.kt)("p",null,"Ask for special configurations and custom codec development, e.g. for ",(0,l.kt)("inlineCode",{parentName:"p"},"IMX"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DVCPRO-HD XDCAM"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nanoavch264-directshow-decoding-sdk"},"nanoAVC/H.264 DirectShow Decoding SDK"),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"nanoAVC/H.264 Direct Show Decoding SDK enables you to decode/play back\nAVC/H.264 video and AAC audio from MP4/3GP or transport stream (TS) sources\nwithin Windows Media Player and custom applications based on Microsoft DirectShow Framework."),(0,l.kt)("p",null,"The nanocosmos H.264/AVC Video Decoder supports streams in baseline, main and high profile. It is highly optimized for use on hyper-threading and multi core systems."),(0,l.kt)("h3",{id:"filter-components"},"Filter components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos AVC/H.264 Video Decoder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{264DA7DD-CE74-472D-A2FD-796A1F0A379C}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos AAC Audio Decoder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnaacdec.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{AEED2B3D-6DA1-4C84-A85D-83547FA90486}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos MP4 Stream Splitter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnmp4splitter.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{22F493C4-B51B-4767-BE55-ADFA34D6A205}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos MPEG PS/TS Stream Splitter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnmpegsplitter.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{0994D1E8-B697-47DE-B1E3-36D26937D5B4}")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example playback filtergraph",src:n(40738).Z,width:"800",height:"208"})),(0,l.kt)("p",null,"Figure 1.  Example playback filtergraph"),(0,l.kt)("h3",{id:"registering-and-unregistering-components-in-the-directshow-framework"},"Registering and unregistering components in the DirectShow framework"),(0,l.kt)("p",null,"In order to use them, filters must be registered in the DirectShow framework. After installation all filters are registered. To re-register or unregister components, execute the RegisterFilters.bat or UnregisterFilters.bat batch files from the SDK/bin folder."),(0,l.kt)("h3",{id:"evaluation-mode-and-filter-activation"},"Evaluation mode and filter activation"),(0,l.kt)("p",null,"Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.\nIf filters run in evaluation mode, an overlay logo will be shown on video."),(0,l.kt)("h3",{id:"embedding--customizing-nanocosmos-technology"},"Embedding / Customizing nanocosmos technology"),(0,l.kt)("p",null,"Nanocosmos also offers special OEM and customization service. Dependent on your needs, we may offer different models of licensing or application development."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nanoavch264-directshow-encoding-sdk"},"nanoAVC/H.264 DirectShow Encoding SDK"),(0,l.kt)("h3",{id:"introduction-1"},"Introduction"),(0,l.kt)("p",null,"nanoAVC/H.264 Direct Show Encoding SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop  video encoding / transcoding applications based on Microsoft(R) DirectX/DirectShow(R) technology."),(0,l.kt)("h3",{id:"major-features-1"},"Major Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ISO 14496 Part 10 (MPEG-AVC) / ITU H.264 compliance for many profiles and levels"),(0,l.kt)("li",{parentName:"ul"},"Encoding of H.264 video streams in Baseline, Main, Extended and High profile"),(0,l.kt)("li",{parentName:"ul"},"Encoding of AAC-LC/LTP/MAIN/HE(aacPlus) audio streams with up to 6 channels"),(0,l.kt)("li",{parentName:"ul"},"Encoding of AMR-NB audio streams"),(0,l.kt)("li",{parentName:"ul"},"Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64"),(0,l.kt)("li",{parentName:"ul"},"Real-time Encoding from Capture cards is supported"),(0,l.kt)("li",{parentName:"ul"},"Wide range of applications from Mobile Phones (3GP), Portable Devices (iPod, iPhone, Sony PSP etc) up to Professional HDTV"),(0,l.kt)("li",{parentName:"ul"},"Multiplexer for MP4, MOV and 3GP")),(0,l.kt)("h3",{id:"documentation"},"Documentation"),(0,l.kt)("p",null,"The SDK\\doc folder contains the following further documents:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"H.264/AVC Video Decoder"),(0,l.kt)("li",{parentName:"ul"},"H.264/AVC Video Encoder"),(0,l.kt)("li",{parentName:"ul"},"AAC Audio Encoder"),(0,l.kt)("li",{parentName:"ul"},"AMR-NB Audio Encoder"),(0,l.kt)("li",{parentName:"ul"},"MP4/3GP Multiplexer")),(0,l.kt)("h3",{id:"filter-components-1"},"Filter components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos AVC/H.264 Video Encoder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnh264enc.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{A88889A8-3C2A-4A32-8EAA-755D491D02A0}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos AAC Audio Encoder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnaacenc.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{0296CC21-B78D-416D-846C-45E26CA46A4A}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos AMR-NB Audio Encoder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnamrnbenc.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{10CAB930-E019-41DF-83B7-60D723706B8F}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos MP4 Multiplexer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnmp4mux.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{78D670BF-49B5-4A3B-BB8C-E2A36E688FCF}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos File Dump Filter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnanodump.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{DA67A541-8FEA-11D4-A908-00105A6758CF}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos AVC/H.264 Video Decoder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnh264dec.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{264DA7DD-CE74-472D-A2FD-796A1F0A379C}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos AAC Audio Decoder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnaacdec.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{AEED2B3D-6DA1-4C84-A85D-83547FA90486}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos MP4 Stream Splitter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnmp4splitter.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{22F493C4-B51B-4767-BE55-ADFA34D6A205}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos MPEG PS/TS Stream Splitter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnmpegsplitter.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{0994D1E8-B697-47DE-B1E3-36D26937D5B4}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos Color Space Converter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tncolconv.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{E855821E-C055-4C85-B04F-19F65D5D50FD}")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nanocosmos MPEG TS Writer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Module:\t\tnanoTsWriter.ax"),(0,l.kt)("li",{parentName:"ul"},"CLSID:\t\t{2C6E92AB-523E-4C90-8A01-394FC0FC273C}")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example filtergraph",src:n(34618).Z,width:"500",height:"855"})),(0,l.kt)("p",null,"Figure 1.  Example  filtergraph"),(0,l.kt)("h3",{id:"registering-and-unregistering-components-in-the-directshow-framework-1"},"Registering and unregistering components in the DirectShow framework"),(0,l.kt)("p",null,"In order to use them, filters must be registered in the DirectShow framework. After installation all filters are registered. To re-register or unregister components, execute the ",(0,l.kt)("inlineCode",{parentName:"p"},"RegisterFilters.bat")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"UnregisterFilters.bat")," batch files from the SDK/bin folder."),(0,l.kt)("h3",{id:"evaluation-mode-and-filter-activation-1"},"Evaluation mode and filter activation"),(0,l.kt)("p",null,"Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.\nIf filters run in evaluation mode, an overlay logo will be shown on video."),(0,l.kt)("h3",{id:"embedding--customizing-nanopeg-technology"},"Embedding / Customizing nanoPEG technology"),(0,l.kt)("p",null,"Nanocosmos also offers special OEM and customization service. Dependent on your needs, we may offer different models of licensing or application development."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nanocosmos-h264-video-decoder-filter"},"nanocosmos H.264 Video Decoder Filter"),(0,l.kt)("h3",{id:"module--version"},"Module / Version"),(0,l.kt)("p",null,"nanocosmos H.264/AVC Direct Show Video Decoder Filter","\\","\n",(0,l.kt)("inlineCode",{parentName:"p"},"nh264dec.ax  Version 2.5.2.4")),(0,l.kt)("p",null,"The nanocosmos H.264/AVC Video Decoder support streams in baseline, main and high profile. It is highly optimized for use on hyper-threading and multi core systems."),(0,l.kt)("h3",{id:"connectivity"},"Connectivity"),(0,l.kt)("p",null,"The input is accepting connections to splitter filters or combined source/splitter filters matching the following media types:"),(0,l.kt)("p",null,"Major types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,l.kt)("p",null,"Subtypes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FourCCs:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"H264, h264,"),(0,l.kt)("li",{parentName:"ul"},"AVC1, avc1,"),(0,l.kt)("li",{parentName:"ul"},"X264, x264,"),(0,l.kt)("li",{parentName:"ul"},"VSSH, vssh,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_H264: {8D2D71CB-243F-45E3-B2D8-5FD7967EC09B}")))),(0,l.kt)("p",null,"Formats:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo,"),(0,l.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo2,"),(0,l.kt)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO")),(0,l.kt)("p",null,"The output supports these media types:"),(0,l.kt)("p",null,"Major types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,l.kt)("p",null,"Subtypes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YV12,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_I420,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_IYUV,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YUY2,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB24,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB32,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_ARGB32,"),(0,l.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB565,")),(0,l.kt)("p",null,"Formats:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo"),(0,l.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo2")),(0,l.kt)("h3",{id:"filter-guids"},"Filter GUIDs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"//%% Filter GUID\n//%% {264DA7DD-CE74-472d-A2FD-796A1F0A379C}\nDEFINE_GUID(CLSID_NANO_H264_DECODER, 0x264DA7DD, 0xCE74, 0x472d, 0xA2, 0xFD, 0x79, 0x6A, 0x1F, 0x0A, 0x37, 0x9C);\n\n//%% Configuration interface ICodecProp\n//%% {0F817204-82C8-4c12-884A-F45FB2F33A6E}\nDEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);\n\n//%% ICodecProp: IID_nanoPeg_LicenseString\n//%% type: BSTR / Unicode string\n//%% Set license string to unlock filter\n//%% {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}\nDEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);\n\n")),(0,l.kt)("h3",{id:"setting-the-license-to-unlock-filter"},"Setting the license to unlock filter"),(0,l.kt)("p",null,"The filter can be unlocked either through a license key entry in the windows registry or\nby setting the license key through COM interface ICodecProp::SetProperty with the\nproperty ",(0,l.kt)("strong",{parentName:"p"},"IID_nanoPeg_LicenseString")," as first parameter. "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The second license parameter has to be a wide/unicode string!")),(0,l.kt)("h3",{id:"decoder-configuration-registry-settings"},"Decoder Configuration Registry Settings"),(0,l.kt)("p",null,"The decoder is able to perform an adaptive frame dropping and deblocking depending on the quality / delay messages received from the downstream renderer filter."),(0,l.kt)("p",null,"Key: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\nanocosmos\\nh264dec\n")),(0,l.kt)("h4",{id:"frame-dropping--skipping-mode"},"Frame dropping / skipping mode"),(0,l.kt)("p",null,"Determines the behaviour in the case of timing / performance problems."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name: \t",(0,l.kt)("inlineCode",{parentName:"li"},"DroppingMode")),(0,l.kt)("li",{parentName:"ul"},"Value type: \t        ",(0,l.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," - no frames are skipped"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," - skip non reference frames only (B-frames)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2")," - skip non intra frames only (P- and B-frames), ",(0,l.kt)("strong",{parentName:"li"},"default value"))))),(0,l.kt)("h4",{id:"deblocking-mode"},"Deblocking mode"),(0,l.kt)("p",null,"Determines the deblocking behaviour."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name: \t",(0,l.kt)("inlineCode",{parentName:"li"},"DeblockingMode")),(0,l.kt)("li",{parentName:"ul"},"Value type:  \t",(0,l.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," - disable deblocking"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," - auto, decoder will reduce deblocking temporarily in the case of performance problems, ",(0,l.kt)("strong",{parentName:"li"},"default value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2")," - always perform full deblocking"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3")," - always perform deblocking on reference frames only")))),(0,l.kt)("h4",{id:"output-color-space-selection"},"Output color space selection"),(0,l.kt)("p",null,"Forces the filter to use a desired output color format. If no or no valid value is set, the output color format will be negotiated with the downstream renderer filter (usually YV12)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name: \t",(0,l.kt)("inlineCode",{parentName:"li"},"ForceOutputFourCC")),(0,l.kt)("li",{parentName:"ul"},"Value type:         ",(0,l.kt)("inlineCode",{parentName:"li"},"REG_SZ / String")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"YV12"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"I420"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IYUV"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"YUY2"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RGB32"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RGB24"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RGB565"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ARGB32"))))),(0,l.kt)("h4",{id:"deinterlacing-mode"},"Deinterlacing Mode"),(0,l.kt)("p",null,"Determines the deinterlacing behaviour."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name:        ",(0,l.kt)("inlineCode",{parentName:"li"},"DeinterlacingMode")),(0,l.kt)("li",{parentName:"ul"},"Value type:          ",(0,l.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," - disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," - duplicate, ",(0,l.kt)("strong",{parentName:"li"},"default value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2")," - blend"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3")," - median"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"4")," - edge detection"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"5")," - median threshold"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"6")," - content adaptive vertical temporal")))),(0,l.kt)("h4",{id:"directshow-editing-services-des-return-mode"},"DirectShow Editing Services (DES) Return Mode"),(0,l.kt)("p",null,"Receive returns HRESULT error values if Deliver fails. Needs to be enabled for DES."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name:        ",(0,l.kt)("inlineCode",{parentName:"li"},"DESReturnMode")),(0,l.kt)("li",{parentName:"ul"},"Value type:          ",(0,l.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," - disabled, ",(0,l.kt)("strong",{parentName:"li"},"default value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," - enabled")))),(0,l.kt)("h4",{id:"threading-mode"},"Threading Mode"),(0,l.kt)("p",null,"Determines the threading behaviour. Auto detection or number of decoding threads."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name:        ",(0,l.kt)("inlineCode",{parentName:"li"},"DESReturnMode")),(0,l.kt)("li",{parentName:"ul"},"Value type:          ",(0,l.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," - auto detect number of ",(0,l.kt)("inlineCode",{parentName:"li"},"cpus"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"__default value__")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1-8")," - set number of decoding threads")))),(0,l.kt)("h4",{id:"output-resolution-alignment"},"Output resolution alignment"),(0,l.kt)("p",null,"Determines the alignment of the output resolution,\nto adjust it to multiples of this value."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name:        OutputAlignment"),(0,l.kt)("li",{parentName:"ul"},"Value type:          ",(0,l.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1-16"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"__default value:__ 4"))))),(0,l.kt)("h3",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,l.kt)("p",null,"Key: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\nh264dec.ax\n")),(0,l.kt)("h4",{id:"file-name"},"File name"),(0,l.kt)("p",null,"Sets the output file name. The folder must already exist."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name: \t",(0,l.kt)("inlineCode",{parentName:"li"},"LogToFile")),(0,l.kt)("li",{parentName:"ul"},"Value type:  \t",(0,l.kt)("inlineCode",{parentName:"li"},"REG_SZ")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Valid values:\ta valid output file name to enable file logging or an empty string")),(0,l.kt)("h4",{id:"logging-level"},"Logging level"),(0,l.kt)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value name: \t",(0,l.kt)("inlineCode",{parentName:"li"},"TRACE")),(0,l.kt)("li",{parentName:"ul"},"Value type:  \t",(0,l.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,l.kt)("li",{parentName:"ul"},"Valid values:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," - minimal logging"),(0,l.kt)("li",{parentName:"ul"},"\u2026"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"9")," - maximal logging")))))}p.isMDXComponent=!0},40738:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/directshow_h264_decoding_filtergraph-0cdbf2d1d5195bfde74a6ad68809f39f.png"},34618:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/directshow_h264_encoding_filtergraph-fd4f1dbd9224e0645e6e085ef7654963.png"}}]);