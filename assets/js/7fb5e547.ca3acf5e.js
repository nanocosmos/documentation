"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3810],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"nanostream/directshow/directshow_rtsp_source",id:"nanostream/directshow/directshow_rtsp_source",title:"directshow_rtsp_source",description:"nanocosmos RTSP Source Filter",source:"@site/docs/nanostream/directshow/directshow_rtsp_source.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_rtsp_source",permalink:"/docs/nanostream/directshow/directshow_rtsp_source",draft:!1,tags:[],version:"current",lastUpdatedAt:1730387209,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{}},s={},c=[{value:"nanocosmos RTSP Source Filter",id:"nanocosmos-rtsp-source-filter",level:2},{value:"Module / Version",id:"module--version",level:4},{value:"nanocosmos RTSP Source",id:"nanocosmos-rtsp-source",level:4},{value:"DirectShow Connectivity",id:"directshow-connectivity",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Buffer statistics can be retrieved using IRTSPSourceBufferStats interface.",id:"buffer-statistics-can-be-retrieved-using-irtspsourcebufferstats-interface",level:4},{value:"Use standard DirectShow interface ICodecAPI to get/set these parameters:",id:"use-standard-directshow-interface-icodecapi-to-getset-these-parameters",level:4},{value:"Configuration through DirectShow filter property page",id:"configuration-through-directshow-filter-property-page",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:4},{value:"File name",id:"file-name",level:5},{value:"Logging level",id:"logging-level",level:5}],u={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"nanocosmos-rtsp-source-filter"},"nanocosmos RTSP Source Filter"),(0,a.yg)("h4",{id:"module--version"},"Module / Version"),(0,a.yg)("p",null,"nanocosmos RTSP Source ","\\","\nnRTSPSource.ax  Version 1.2.1.0"),(0,a.yg)("h4",{id:"nanocosmos-rtsp-source"},"nanocosmos RTSP Source"),(0,a.yg)("p",null,"DirectShow filter for RTSP Streaming"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server"),(0,a.yg)("li",{parentName:"ul"},"Supported Formats: H.264 + AAC")),(0,a.yg)("h4",{id:"directshow-connectivity"},"DirectShow Connectivity"),(0,a.yg)("p",null,"The output is accepting connections matching the following media types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Major types:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIATYPE_Video"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Subtypes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FourCCs: H264, h264"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Formats:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO,"),(0,a.yg)("li",{parentName:"ul"},"FORMAT_NONE"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Major types:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIATYPE_Audio"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Subtypes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIASUBTYPE_AAC,  FourCC: 0x000000FF"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Formats:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FORMAT_WaveFormatEx,"),(0,a.yg)("li",{parentName:"ul"},"FORMAT_NONE")))),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The filter configuration may be set by using either the property page or the COM Interface IRTSPSource and as declared in header file RTSPSourceOptions.h . The streaming url can be set by using standard DirectShow interface IFileSourceFilter ."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Filter GUID\n// {99709313-5825-42ab-82ED-A7AD88ACBF4A}\nDEFINE_GUID(CLSID_NANO_RTSP_SOURCE, 0x99709313, 0x5825, 0x42ab, 0x82, 0xed, 0xa7, 0xad, 0x88, 0xac, 0xbf, 0x4a);\n\n// Property Page GUID\n// {D3BE0AA6-A8E2-45a8-9414-385FFD94B816}\nDEFINE_GUID(CLSID_NANO_RTSP_SOURCE_PROPPAGE, 0xd3be0aa6, 0xa8e2, 0x45a8, 0x94, 0x14, 0x38, 0x5f, 0xfd, 0x94, 0xb8, 0x16);\n\n// Configuration Interface GUID\n// IRTSPSource interface\n// {C39F308A-D27B-4c17-B01E-469F00248981}\nDEFINE_GUID(IID_IRTSPSource, 0xc39f308a, 0xd27b, 0x4c17, 0xb0, 0x1e, 0x46, 0x9f, 0x0, 0x24, 0x89, 0x81);\n")),(0,a.yg)("h4",{id:"buffer-statistics-can-be-retrieved-using-irtspsourcebufferstats-interface"},"Buffer statistics can be retrieved using IRTSPSourceBufferStats interface."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// IRTSPSourceBufferStats interface\n// {655D499B-C9E0-4134-9DC4-6431FEEB5EB0}\nDEFINE_GUID(IID_IRTSPSourceBufferStats, 0x655d499b, 0xc9e0, 0x4134, 0x9d, 0xc4, 0x64, 0x31, 0xfe, 0xeb, 0x5e, 0xb0);\n")),(0,a.yg)("h4",{id:"use-standard-directshow-interface-icodecapi-to-getset-these-parameters"},"Use standard DirectShow interface ICodecAPI to get/set these parameters:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// ICodecAPI GUID\n// get/set receive timeout in seconds\n// VARIANT_TYPE: VT_I4, VARIANT::intVal\n// default value: 2\n// {33759D2A-3B7D-45ac-A8BF-C2477915C03B}\nDEFINE_GUID(PROPID_nanoRTSPSourceConnectionTimeout, 0x33759d2a, 0x3b7d, 0x45ac, 0xa8, 0xbf, 0xc2, 0x47, 0x79, 0x15, 0xc0, 0x3b);\n")),(0,a.yg)("h4",{id:"configuration-through-directshow-filter-property-page"},"Configuration through DirectShow filter property page"),(0,a.yg)("p",null,"The filter's property page offers a subset of parameters, containing the most important options.\n{{ :nanortsp_netsrcprop.png?nolink |}}\nURL format:","\\","\nrtsp:%%//%%127.0.0.1:8554/streaming","\\","\nrtsp:%%//%% ","[ IP:port ]","/","[ stream name]"),(0,a.yg)("h4",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,a.yg)("p",null,"Key: HKEY_CURRENT_USER\\Software\\DebugNano\\ nRTSPSource.ax  "),(0,a.yg)("h5",{id:"file-name"},"File name"),(0,a.yg)("p",null,"Sets the output file name. The folder must already exist.","\\","\nValue name: \tLogToFile","\\","\nValue type: \tREG_SZ / String","\\","\nValid values:\ta valid output file name to enable file logging or an empty string"),(0,a.yg)("h5",{id:"logging-level"},"Logging level"),(0,a.yg)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed. ","\\","\nValue name: \tTRACE","\\","\nValue type: \tREG_DWORD","\\","\nValid values:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 - minimal logging"),(0,a.yg)("li",{parentName:"ul"},"\u2026"),(0,a.yg)("li",{parentName:"ul"},"9 - maximal logging")))}g.isMDXComponent=!0}}]);