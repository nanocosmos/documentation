"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[2693],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=g(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var g=2;g<i;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const i={id:"nanostream_directshow_rtsp",title:"RTSP",sidebar_label:"RTSP"},o=void 0,l={unversionedId:"nanostream/directshow/nanostream_directshow_rtsp",id:"nanostream/directshow/nanostream_directshow_rtsp",title:"RTSP",description:"nanocosmos RTSP Sink Filter",source:"@site/docs/nanostream/directshow/nanostream_directshow_rtsp.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/nanostream_directshow_rtsp",permalink:"/docs/nanostream/directshow/nanostream_directshow_rtsp",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"nanostream_directshow_rtsp",title:"RTSP",sidebar_label:"RTSP"},sidebar:"nanoStream Apps & SDKs",previous:{title:"RTMP Writer",permalink:"/docs/nanostream/directshow/directshow_rtmp_writer"},next:{title:"UDP/TS Streaming",permalink:"/docs/nanostream/directshow/nanostream_directshow_udp_streaming"}},s={},g=[{value:"nanocosmos RTSP Sink Filter",id:"nanocosmos-rtsp-sink-filter",level:2},{value:"Module / Version",id:"module--version",level:4},{value:"nanocosmos RTSP Sink",id:"nanocosmos-rtsp-sink",level:4},{value:"DirectShow Connectivity",id:"directshow-connectivity",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Configuration through DirectShow filter property page",id:"configuration-through-directshow-filter-property-page",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:4},{value:"File name",id:"file-name",level:5},{value:"Logging level",id:"logging-level",level:5},{value:"nanocosmos RTSP Source Filter",id:"nanocosmos-rtsp-source-filter",level:2},{value:"Module / Version",id:"module--version-1",level:4},{value:"nanocosmos RTSP Source",id:"nanocosmos-rtsp-source",level:4},{value:"DirectShow Connectivity",id:"directshow-connectivity-1",level:4},{value:"Configuration",id:"configuration-1",level:3},{value:"Buffer statistics can be retrieved using IRTSPSourceBufferStats interface.",id:"buffer-statistics-can-be-retrieved-using-irtspsourcebufferstats-interface",level:4},{value:"Use standard DirectShow interface ICodecAPI to get/set these parameters:",id:"use-standard-directshow-interface-icodecapi-to-getset-these-parameters",level:4},{value:"Configuration through DirectShow filter property page",id:"configuration-through-directshow-filter-property-page-1",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings-1",level:4},{value:"File name",id:"file-name-1",level:5},{value:"Logging level",id:"logging-level-1",level:5}],u={toc:g},p="wrapper";function c(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,r.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"nanocosmos-rtsp-sink-filter"},"nanocosmos RTSP Sink Filter"),(0,a.yg)("h4",{id:"module--version"},"Module / Version"),(0,a.yg)("p",null,"nanocosmos RTSP Sink\nnRTSPSink.ax  Version 1.1.1.0"),(0,a.yg)("h4",{id:"nanocosmos-rtsp-sink"},"nanocosmos RTSP Sink"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"DirectShow filter for RTSP Streaming"),(0,a.yg)("li",{parentName:"ul"},"Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server"),(0,a.yg)("li",{parentName:"ul"},"Supported Formats: H.264 + AAC")),(0,a.yg)("h3",{id:"directshow-connectivity"},"DirectShow Connectivity"),(0,a.yg)("p",null,"The input is accepting connections matching the following media types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Major types:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIATYPE_Video"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Subtypes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FourCCs: H264, h264"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Formats:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO,"),(0,a.yg)("li",{parentName:"ul"},"FORMAT_NONE"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Major types:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIATYPE_Audio"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Subtypes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIASUBTYPE_AAC,  FourCC: 0x000000FF"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Formats:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FORMAT_WaveFormatEx,"),(0,a.yg)("li",{parentName:"ul"},"FORMAT_NONE")))),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The filter configuration may be set by using either the property page or the COM Interface IRTSPSink and as declared in header file RTSPWriterOptions.h . The streaming url can be set by using standard DirectShow interface IFileSinkFilter ."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Filter GUID\n// {2ECDA33B-81FB-4467-96C9-BD53A9ED975F}\nDEFINE_GUID(CLSID_NANO_RTSP_WRITER, 0x2ecda33b, 0x81fb, 0x4467, 0x96, 0xc9, 0xbd, 0x53, 0xa9, 0xed, 0x97, 0x5f);\n\n// Property Page GUID\n// {F387B72B-05AA-4016-8EC8-D6DA5DB36D23}\nDEFINE_GUID(CLSID_NANO_RTSP_WRITER_PROPPAGE, 0xf387b72b, 0x5aa, 0x4016, 0x8e, 0xc8, 0xd6, 0xda, 0x5d, 0xb3, 0x6d, 0x23);\n\n// Configuration Interface GUID\n// IRTSPSink\n// {F79C7B6E-E89E-415e-B3C7-A8E8BFA0278D}\nDEFINE_GUID(IID_IRTSPSink, 0xf79c7b6e, 0xe89e, 0x415e, 0xb3, 0xc7, 0xa8, 0xe8, 0xbf, 0xa0, 0x27, 0x8d);\n")),(0,a.yg)("h4",{id:"configuration-through-directshow-filter-property-page"},"Configuration through DirectShow filter property page"),(0,a.yg)("p",null,"The filter's property page offers a subset of parameters, containing the most important options."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"RTSP Network Writer Properties",src:n(5688).A,width:"380",height:"211"})),(0,a.yg)("p",null,"URL format:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"rtsp:%%//%%127.0.0.1:8554/streaming\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"rtsp:%%//%%[ IP:port ]/[ stream name]\n")),(0,a.yg)("h4",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,a.yg)("p",null,"Key: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\nRTSPSink.ax  \n")),(0,a.yg)("h5",{id:"file-name"},"File name"),(0,a.yg)("p",null,"Sets the output file name. The folder must already exist.\nValue name: \tLogToFile\nValue type: \tREG_SZ / String\nValid values:\ta valid output file name to enable file logging or an empty string"),(0,a.yg)("h5",{id:"logging-level"},"Logging level"),(0,a.yg)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed.\nValue name: \tTRACE\nValue type: \tREG_DWORD\nValid values:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 - minimal logging"),(0,a.yg)("li",{parentName:"ul"},"\u2026"),(0,a.yg)("li",{parentName:"ul"},"9 - maximal logging")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"nanocosmos-rtsp-source-filter"},"nanocosmos RTSP Source Filter"),(0,a.yg)("h4",{id:"module--version-1"},"Module / Version"),(0,a.yg)("p",null,"nanocosmos RTSP Source\nnRTSPSource.ax  Version 1.2.1.0"),(0,a.yg)("h4",{id:"nanocosmos-rtsp-source"},"nanocosmos RTSP Source"),(0,a.yg)("p",null,"DirectShow filter for RTSP Streaming"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server"),(0,a.yg)("li",{parentName:"ul"},"Supported Formats: H.264 + AAC")),(0,a.yg)("h4",{id:"directshow-connectivity-1"},"DirectShow Connectivity"),(0,a.yg)("p",null,"The output is accepting connections matching the following media types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Major types:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIATYPE_Video"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Subtypes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FourCCs: H264, h264"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Formats:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO,"),(0,a.yg)("li",{parentName:"ul"},"FORMAT_NONE"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Major types:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIATYPE_Audio"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Subtypes:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MEDIASUBTYPE_AAC,  FourCC: 0x000000FF"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Formats:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"FORMAT_WaveFormatEx,"),(0,a.yg)("li",{parentName:"ul"},"FORMAT_NONE")))),(0,a.yg)("h3",{id:"configuration-1"},"Configuration"),(0,a.yg)("p",null,"The filter configuration may be set by using either the property page or the COM Interface IRTSPSource and as declared in header file RTSPSourceOptions.h . The streaming url can be set by using standard DirectShow interface IFileSourceFilter ."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Filter GUID\n// {99709313-5825-42ab-82ED-A7AD88ACBF4A}\nDEFINE_GUID(CLSID_NANO_RTSP_SOURCE, 0x99709313, 0x5825, 0x42ab, 0x82, 0xed, 0xa7, 0xad, 0x88, 0xac, 0xbf, 0x4a);\n\n// Property Page GUID\n// {D3BE0AA6-A8E2-45a8-9414-385FFD94B816}\nDEFINE_GUID(CLSID_NANO_RTSP_SOURCE_PROPPAGE, 0xd3be0aa6, 0xa8e2, 0x45a8, 0x94, 0x14, 0x38, 0x5f, 0xfd, 0x94, 0xb8, 0x16);\n\n// Configuration Interface GUID\n// IRTSPSource interface\n// {C39F308A-D27B-4c17-B01E-469F00248981}\nDEFINE_GUID(IID_IRTSPSource, 0xc39f308a, 0xd27b, 0x4c17, 0xb0, 0x1e, 0x46, 0x9f, 0x0, 0x24, 0x89, 0x81);\n")),(0,a.yg)("h4",{id:"buffer-statistics-can-be-retrieved-using-irtspsourcebufferstats-interface"},"Buffer statistics can be retrieved using IRTSPSourceBufferStats interface."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// IRTSPSourceBufferStats interface\n// {655D499B-C9E0-4134-9DC4-6431FEEB5EB0}\nDEFINE_GUID(IID_IRTSPSourceBufferStats, 0x655d499b, 0xc9e0, 0x4134, 0x9d, 0xc4, 0x64, 0x31, 0xfe, 0xeb, 0x5e, 0xb0);\n")),(0,a.yg)("h4",{id:"use-standard-directshow-interface-icodecapi-to-getset-these-parameters"},"Use standard DirectShow interface ICodecAPI to get/set these parameters:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// ICodecAPI GUID\n// get/set receive timeout in seconds\n// VARIANT_TYPE: VT_I4, VARIANT::intVal\n// default value: 2\n// {33759D2A-3B7D-45ac-A8BF-C2477915C03B}\nDEFINE_GUID(PROPID_nanoRTSPSourceConnectionTimeout, 0x33759d2a, 0x3b7d, 0x45ac, 0xa8, 0xbf, 0xc2, 0x47, 0x79, 0x15, 0xc0, 0x3b);\n")),(0,a.yg)("h4",{id:"configuration-through-directshow-filter-property-page-1"},"Configuration through DirectShow filter property page"),(0,a.yg)("p",null,"The filter's property page offers a subset of parameters, containing the most important options.\n{{ :nanortsp_netsrcprop.png?nolink |}}\nURL format:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"rtsp:%%//%%127.0.0.1:8554/streaming\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"rtsp:%%//%% [ IP:port ]/[ stream name]\n")),(0,a.yg)("h4",{id:"debug-log-configuration-registry-settings-1"},"Debug-Log Configuration Registry Settings"),(0,a.yg)("p",null,"Key: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\ nRTSPSource.ax  \n")),(0,a.yg)("h5",{id:"file-name-1"},"File name"),(0,a.yg)("p",null,"Sets the output file name. The folder must already exist.\nValue name: \tLogToFile\nValue type: \tREG_SZ / String\nValid values:\ta valid output file name to enable file logging or an empty string"),(0,a.yg)("h5",{id:"logging-level-1"},"Logging level"),(0,a.yg)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed.\nValue name: \tTRACE\nValue type: \tREG_DWORD\nValid values:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 - minimal logging"),(0,a.yg)("li",{parentName:"ul"},"\u2026"),(0,a.yg)("li",{parentName:"ul"},"9 - maximal logging")))}c.isMDXComponent=!0},5688:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/directshow_rtsp_writer_properties-12d0c38179308c55bc8baa0c911f5417.png"}}]);