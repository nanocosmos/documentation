"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5857],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(y,o(o({ref:t},g),{},{components:n})):r.createElement(y,o({ref:t},g))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(58168),i=(n(96540),n(15680));const a={},o=void 0,l={unversionedId:"nanostream/directshow/directshow_rtsp_sink",id:"nanostream/directshow/directshow_rtsp_sink",title:"directshow_rtsp_sink",description:"nanocosmos RTSP Sink Filter",source:"@site/docs/nanostream/directshow/directshow_rtsp_sink.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_rtsp_sink",permalink:"/docs/nanostream/directshow/directshow_rtsp_sink",draft:!1,tags:[],version:"current",lastUpdatedAt:1712137628,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{}},s={},p=[{value:"nanocosmos RTSP Sink Filter",id:"nanocosmos-rtsp-sink-filter",level:2},{value:"Module / Version",id:"module--version",level:4},{value:"nanocosmos RTSP Sink",id:"nanocosmos-rtsp-sink",level:4},{value:"DirectShow Connectivity",id:"directshow-connectivity",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Configuration through DirectShow filter property page",id:"configuration-through-directshow-filter-property-page",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:4},{value:"File name",id:"file-name",level:5},{value:"Logging level",id:"logging-level",level:5}],g={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"nanocosmos-rtsp-sink-filter"},"nanocosmos RTSP Sink Filter"),(0,i.yg)("h4",{id:"module--version"},"Module / Version"),(0,i.yg)("p",null,"nanocosmos RTSP Sink ","\\","\nnRTSPSink.ax  Version 1.1.1.0"),(0,i.yg)("h4",{id:"nanocosmos-rtsp-sink"},"nanocosmos RTSP Sink"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"DirectShow filter for RTSP Streaming"),(0,i.yg)("li",{parentName:"ul"},"Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server"),(0,i.yg)("li",{parentName:"ul"},"Supported Formats: H.264 + AAC")),(0,i.yg)("h3",{id:"directshow-connectivity"},"DirectShow Connectivity"),(0,i.yg)("p",null,"The input is accepting connections matching the following media types:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Major types:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"MEDIATYPE_Video"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Subtypes:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"FourCCs: H264, h264"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Formats:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO,"),(0,i.yg)("li",{parentName:"ul"},"FORMAT_NONE"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Major types:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"MEDIATYPE_Audio"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Subtypes:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"MEDIASUBTYPE_AAC,  FourCC: 0x000000FF"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Formats:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"FORMAT_WaveFormatEx,"),(0,i.yg)("li",{parentName:"ul"},"FORMAT_NONE")))),(0,i.yg)("h3",{id:"configuration"},"Configuration"),(0,i.yg)("p",null,"The filter configuration may be set by using either the property page or the COM Interface IRTSPSink and as declared in header file RTSPWriterOptions.h . The streaming url can be set by using standard DirectShow interface IFileSinkFilter ."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"// Filter GUID\n// {2ECDA33B-81FB-4467-96C9-BD53A9ED975F}\nDEFINE_GUID(CLSID_NANO_RTSP_WRITER, 0x2ecda33b, 0x81fb, 0x4467, 0x96, 0xc9, 0xbd, 0x53, 0xa9, 0xed, 0x97, 0x5f);\n\n// Property Page GUID\n// {F387B72B-05AA-4016-8EC8-D6DA5DB36D23}\nDEFINE_GUID(CLSID_NANO_RTSP_WRITER_PROPPAGE, 0xf387b72b, 0x5aa, 0x4016, 0x8e, 0xc8, 0xd6, 0xda, 0x5d, 0xb3, 0x6d, 0x23);\n\n// Configuration Interface GUID\n// IRTSPSink\n// {F79C7B6E-E89E-415e-B3C7-A8E8BFA0278D}\nDEFINE_GUID(IID_IRTSPSink, 0xf79c7b6e, 0xe89e, 0x415e, 0xb3, 0xc7, 0xa8, 0xe8, 0xbf, 0xa0, 0x27, 0x8d);\n")),(0,i.yg)("h4",{id:"configuration-through-directshow-filter-property-page"},"Configuration through DirectShow filter property page"),(0,i.yg)("p",null,"The filter's property page offers a subset of parameters, containing the most important options."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"RTSP Network Writer Properties",src:n(5688).A,width:"380",height:"211"})),(0,i.yg)("p",null,"URL format:","\\","\nrtsp:%%//%%127.0.0.1:8554/streaming","\\","\nrtsp:%%//%%","[ IP:port ]","/","[ stream name]","\\"),(0,i.yg)("h4",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,i.yg)("p",null,"Key: HKEY_CURRENT_USER\\Software\\DebugNano\\nRTSPSink.ax  "),(0,i.yg)("h5",{id:"file-name"},"File name"),(0,i.yg)("p",null,"Sets the output file name. The folder must already exist.","\\","\nValue name: \tLogToFile","\\","\nValue type: \tREG_SZ / String","\\","\nValid values:\ta valid output file name to enable file logging or an empty string"),(0,i.yg)("h5",{id:"logging-level"},"Logging level"),(0,i.yg)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed. ","\\","\nValue name: \tTRACE","\\","\nValue type: \tREG_DWORD","\\","\nValid values:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"0 - minimal logging"),(0,i.yg)("li",{parentName:"ul"},"\u2026"),(0,i.yg)("li",{parentName:"ul"},"9 - maximal logging")))}c.isMDXComponent=!0},5688:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/directshow_rtsp_writer_properties-12d0c38179308c55bc8baa0c911f5417.png"}}]);