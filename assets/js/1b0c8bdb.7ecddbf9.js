"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6945],{15680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>y});var r=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(i),d=a,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return i?r.createElement(y,n(n({ref:t},p),{},{components:i})):r.createElement(y,n({ref:t},p))}));function y(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,n=new Array(o);n[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,n[1]=l;for(var c=2;c<o;c++)n[c]=i[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},53444:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(58168),a=(i(96540),i(15680));const o={},n=void 0,l={unversionedId:"nanostream/directshow/directshow_quicktime_imx",id:"nanostream/directshow/directshow_quicktime_imx",title:"directshow_quicktime_imx",description:"QuickTime IMX Video Playback Components",source:"@site/docs/nanostream/directshow/directshow_quicktime_imx.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_quicktime_imx",permalink:"/docs/nanostream/directshow/directshow_quicktime_imx",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{}},u={},c=[{value:"QuickTime IMX Video Playback Components",id:"quicktime-imx-video-playback-components",level:2},{value:"QuickTime IMX Source Direct Show Package",id:"quicktime-imx-source-direct-show-package",level:3},{value:"File Reader for QuickTime IMX Video Files",id:"file-reader-for-quicktime-imx-video-files",level:4},{value:"IMX Video Decoder Filter",id:"imx-video-decoder-filter",level:4},{value:"QuickTime IMX Decoder for Quicktime Player",id:"quicktime-imx-decoder-for-quicktime-player",level:3},{value:"Supported input Formats:",id:"supported-input-formats",level:4},{value:"Supported Decoding Parameters:",id:"supported-decoding-parameters",level:4},{value:"Supported input Formats:",id:"supported-input-formats-1",level:4},{value:"Supported Decoding Parameters:",id:"supported-decoding-parameters-1",level:4}],p={toc:c},m="wrapper";function s(e){let{components:t,...o}=e;return(0,a.yg)(m,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"quicktime-imx-video-playback-components"},"QuickTime IMX Video Playback Components"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"For QuickTime und DirectShow")),(0,a.yg)("p",null,"The QuickTime IMX Playback components allow easy playback of QuickTime IMX video files with Windows or MacOS systems.","\\","\nIMX is also known as SMPTE D-10 and is based on the MPEG compression technology."),(0,a.yg)("p",null,"The Codec Packet contains the following components:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"QuickTime IMX Source Direct Show Package"),(0,a.yg)("li",{parentName:"ul"},"QuickTime IMX Codec for Quicktime Player")),(0,a.yg)("h3",{id:"quicktime-imx-source-direct-show-package"},"QuickTime IMX Source Direct Show Package"),(0,a.yg)("p",null,"The QuickTime IMX Source DirectShow Package allows playback of QuickTime IMX video files with all WindowsMediaPlayer-/DirectShow based applications. Installation of the Quicktime System is not required.","\\","\nDirect Show Filters included:"),(0,a.yg)("h4",{id:"file-reader-for-quicktime-imx-video-files"},"File Reader for QuickTime IMX Video Files"),(0,a.yg)("p",null,"Output Media Types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Majortype:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Video,"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Sub Type:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MPEG2_Video"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Majortype:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Audio:"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Sub Type:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"PCMAudio")))),(0,a.yg)("h4",{id:"imx-video-decoder-filter"},"IMX Video Decoder Filter"),(0,a.yg)("p",null,"Formats:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"MPEG-2 IMX 30 (FourCC: mx3p)"),(0,a.yg)("li",{parentName:"ul"},"MPEG-2 IMX 40 (FourCC: mx4p)"),(0,a.yg)("li",{parentName:"ul"},"MPEG-2 IMX 50 (FourCC: mx5p)")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Direct Show Example",src:i(1205).A,width:"300",height:"137"})),(0,a.yg)("p",null,"Direct Show Example"),(0,a.yg)("h3",{id:"quicktime-imx-decoder-for-quicktime-player"},"QuickTime IMX Decoder for Quicktime Player"),(0,a.yg)("p",null,"QuickTime IMX Codec Package can be used in all Quicktime based applications, for example QuickTime Player."),(0,a.yg)("h4",{id:"supported-input-formats"},"Supported input Formats:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"QuickTime Movie File"),(0,a.yg)("li",{parentName:"ul"},"IMX Compression (MPEG-2 IMX 30 (FourCC: mx3p)"),(0,a.yg)("li",{parentName:"ul"},"MPEG-2 IMX 40 (FourCC: mx4p)"),(0,a.yg)("li",{parentName:"ul"},"MPEG-2 IMX 50 (FourCC: mx5p))")),(0,a.yg)("h4",{id:"supported-decoding-parameters"},"Supported Decoding Parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bitrates from up to 100 mbps"),(0,a.yg)("li",{parentName:"ul"},"Frame Rates: 23.976, 24, 25, 29.97, and 30 frames/sec up to 60 fields/sec.")),(0,a.yg)("p",null,"The Codec is a QuickTime Decoder Component developed by nanocosmos."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Quicktime IMX Example",src:i(53368).A,width:"300",height:"220"})),(0,a.yg)("p",null,"Quicktime IMX Example"),(0,a.yg)("h4",{id:"supported-input-formats-1"},"Supported input Formats:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"QuickTime Movie File",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"IMX Compression (MPEG-2 IMX 30 (FourCC: mx3p)"),(0,a.yg)("li",{parentName:"ul"},"MPEG-2 IMX 40 (FourCC: 'mx4p')"),(0,a.yg)("li",{parentName:"ul"},"MPEG-2 IMX 50 (FourCC: mx5p))")))),(0,a.yg)("h4",{id:"supported-decoding-parameters-1"},"Supported Decoding Parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bitrates from up to 100 mbps"),(0,a.yg)("li",{parentName:"ul"},"Frame Rates: 23.976, 24, 25, 29.97, and 30 frames/sec up to 60 fields/sec.")))}s.isMDXComponent=!0},53368:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/directshow_imx_example-bdd8867e9d956f6bd4f836435d52b8c4.png"},1205:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/directshow_qt_example-6615df6ce314933a126013cf05159868.png"}}]);