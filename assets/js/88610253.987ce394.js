"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,c=m["".concat(u,".").concat(k)]||m[k]||s[k]||a;return n?l.createElement(c,r(r({ref:t},d),{},{components:n})):l.createElement(c,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<a;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},41645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const a={},r=void 0,o={unversionedId:"nanostream/directshow/directshow_h264_video_decoder",id:"nanostream/directshow/directshow_h264_video_decoder",title:"directshow_h264_video_decoder",description:"nanocosmos H.264 Video Decoder Filter",source:"@site/docs/nanostream/directshow/directshow_h264_video_decoder.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_h264_video_decoder",permalink:"/docs/nanostream/directshow/directshow_h264_video_decoder",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{}},u={},p=[{value:"nanocosmos H.264 Video Decoder Filter",id:"nanocosmos-h264-video-decoder-filter",level:2},{value:"Module / Version",id:"module--version",level:3},{value:"Connectivity",id:"connectivity",level:3},{value:"Filter GUIDs",id:"filter-guids",level:3},{value:"Setting the license to unlock filter",id:"setting-the-license-to-unlock-filter",level:3},{value:"Decoder Configuration Registry Settings",id:"decoder-configuration-registry-settings",level:3},{value:"Frame dropping / skipping mode",id:"frame-dropping--skipping-mode",level:4},{value:"Deblocking mode",id:"deblocking-mode",level:4},{value:"Output color space selection",id:"output-color-space-selection",level:4},{value:"Deinterlacing Mode",id:"deinterlacing-mode",level:4},{value:"DirectShow Editing Services (DES) Return Mode",id:"directshow-editing-services-des-return-mode",level:4},{value:"Threading Mode",id:"threading-mode",level:4},{value:"Output resolution alignment",id:"output-resolution-alignment",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:3},{value:"File name",id:"file-name",level:4},{value:"Logging level",id:"logging-level",level:4}],d={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"nanocosmos-h264-video-decoder-filter"},"nanocosmos H.264 Video Decoder Filter"),(0,i.kt)("h3",{id:"module--version"},"Module / Version"),(0,i.kt)("p",null,"nanocosmos H.264/AVC Direct Show Video Decoder Filter","\\","\n",(0,i.kt)("inlineCode",{parentName:"p"},"nh264dec.ax  Version 2.5.2.4")),(0,i.kt)("p",null,"The nanocosmos H.264/AVC Video Decoder support streams in baseline, main and high profile. It is highly optimized for use on hyper-threading and multi core systems."),(0,i.kt)("h3",{id:"connectivity"},"Connectivity"),(0,i.kt)("p",null,"The input is accepting connections to splitter filters or combined source/splitter filters matching the following media types:"),(0,i.kt)("p",null,"Major types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,i.kt)("p",null,"Subtypes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FourCCs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"H264, h264,"),(0,i.kt)("li",{parentName:"ul"},"AVC1, avc1,"),(0,i.kt)("li",{parentName:"ul"},"X264, x264,"),(0,i.kt)("li",{parentName:"ul"},"VSSH, vssh,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_H264: {8D2D71CB-243F-45E3-B2D8-5FD7967EC09B}")))),(0,i.kt)("p",null,"Formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo,"),(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo2,"),(0,i.kt)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO")),(0,i.kt)("p",null,"The output supports these media types:"),(0,i.kt)("p",null,"Major types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,i.kt)("p",null,"Subtypes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YV12,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_I420,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_IYUV,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YUY2,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB24,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB32,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_ARGB32,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB565,")),(0,i.kt)("p",null,"Formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo"),(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo2")),(0,i.kt)("h3",{id:"filter-guids"},"Filter GUIDs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"//%% Filter GUID\n//%% {264DA7DD-CE74-472d-A2FD-796A1F0A379C}\nDEFINE_GUID(CLSID_NANO_H264_DECODER, 0x264DA7DD, 0xCE74, 0x472d, 0xA2, 0xFD, 0x79, 0x6A, 0x1F, 0x0A, 0x37, 0x9C);\n\n//%% Configuration interface ICodecProp\n//%% {0F817204-82C8-4c12-884A-F45FB2F33A6E}\nDEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);\n\n//%% ICodecProp: IID_nanoPeg_LicenseString\n//%% type: BSTR / Unicode string\n//%% Set license string to unlock filter\n//%% {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}\nDEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);\n\n")),(0,i.kt)("h3",{id:"setting-the-license-to-unlock-filter"},"Setting the license to unlock filter"),(0,i.kt)("p",null,"The filter can be unlocked either through a license key entry in the windows registry or\nby setting the license key through COM interface ICodecProp::SetProperty with the\nproperty ",(0,i.kt)("strong",{parentName:"p"},"IID_nanoPeg_LicenseString")," as first parameter. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The second license parameter has to be a wide/unicode string!")),(0,i.kt)("h3",{id:"decoder-configuration-registry-settings"},"Decoder Configuration Registry Settings"),(0,i.kt)("p",null,"The decoder is able to perform an adaptive frame dropping and deblocking depending on the quality / delay messages received from the downstream renderer filter."),(0,i.kt)("p",null,"Key: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\nanocosmos\\nh264dec\n")),(0,i.kt)("h4",{id:"frame-dropping--skipping-mode"},"Frame dropping / skipping mode"),(0,i.kt)("p",null,"Determines the behaviour in the case of timing / performance problems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \t",(0,i.kt)("inlineCode",{parentName:"li"},"DroppingMode")),(0,i.kt)("li",{parentName:"ul"},"Value type: \t        ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - no frames are skipped"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - skip non reference frames only (B-frames)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2")," - skip non intra frames only (P- and B-frames), ",(0,i.kt)("strong",{parentName:"li"},"default value"))))),(0,i.kt)("h4",{id:"deblocking-mode"},"Deblocking mode"),(0,i.kt)("p",null,"Determines the deblocking behaviour."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \t",(0,i.kt)("inlineCode",{parentName:"li"},"DeblockingMode")),(0,i.kt)("li",{parentName:"ul"},"Value type:  \t",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - disable deblocking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - auto, decoder will reduce deblocking temporarily in the case of performance problems, ",(0,i.kt)("strong",{parentName:"li"},"default value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2")," - always perform full deblocking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3")," - always perform deblocking on reference frames only")))),(0,i.kt)("h4",{id:"output-color-space-selection"},"Output color space selection"),(0,i.kt)("p",null,"Forces the filter to use a desired output color format. If no or no valid value is set, the output color format will be negotiated with the downstream renderer filter (usually YV12)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \t",(0,i.kt)("inlineCode",{parentName:"li"},"ForceOutputFourCC")),(0,i.kt)("li",{parentName:"ul"},"Value type:         ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_SZ / String")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YV12"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"I420"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IYUV"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YUY2"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RGB32"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RGB24"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RGB565"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ARGB32"))))),(0,i.kt)("h4",{id:"deinterlacing-mode"},"Deinterlacing Mode"),(0,i.kt)("p",null,"Determines the deinterlacing behaviour."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name:        ",(0,i.kt)("inlineCode",{parentName:"li"},"DeinterlacingMode")),(0,i.kt)("li",{parentName:"ul"},"Value type:          ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - disabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - duplicate, ",(0,i.kt)("strong",{parentName:"li"},"default value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2")," - blend"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3")," - median"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4")," - edge detection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"5")," - median threshold"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6")," - content adaptive vertical temporal")))),(0,i.kt)("h4",{id:"directshow-editing-services-des-return-mode"},"DirectShow Editing Services (DES) Return Mode"),(0,i.kt)("p",null,"Receive returns HRESULT error values if Deliver fails. Needs to be enabled for DES."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name:        ",(0,i.kt)("inlineCode",{parentName:"li"},"DESReturnMode")),(0,i.kt)("li",{parentName:"ul"},"Value type:          ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - disabled, ",(0,i.kt)("strong",{parentName:"li"},"default value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - enabled")))),(0,i.kt)("h4",{id:"threading-mode"},"Threading Mode"),(0,i.kt)("p",null,"Determines the threading behaviour. Auto detection or number of decoding threads."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name:        ",(0,i.kt)("inlineCode",{parentName:"li"},"DESReturnMode")),(0,i.kt)("li",{parentName:"ul"},"Value type:          ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - auto detect number of ",(0,i.kt)("inlineCode",{parentName:"li"},"cpus"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"__default value__")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1-8")," - set number of decoding threads")))),(0,i.kt)("h4",{id:"output-resolution-alignment"},"Output resolution alignment"),(0,i.kt)("p",null,"Determines the alignment of the output resolution,\nto adjust it to multiples of this value."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name:        OutputAlignment"),(0,i.kt)("li",{parentName:"ul"},"Value type:          ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1-16"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"__default value:__ 4"))))),(0,i.kt)("h3",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,i.kt)("p",null,"Key: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\nh264dec.ax\n")),(0,i.kt)("h4",{id:"file-name"},"File name"),(0,i.kt)("p",null,"Sets the output file name. The folder must already exist."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \t",(0,i.kt)("inlineCode",{parentName:"li"},"LogToFile")),(0,i.kt)("li",{parentName:"ul"},"Value type:  \t",(0,i.kt)("inlineCode",{parentName:"li"},"REG_SZ")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Valid values:\ta valid output file name to enable file logging or an empty string")),(0,i.kt)("h4",{id:"logging-level"},"Logging level"),(0,i.kt)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \t",(0,i.kt)("inlineCode",{parentName:"li"},"TRACE")),(0,i.kt)("li",{parentName:"ul"},"Value type:  \t",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - minimal logging"),(0,i.kt)("li",{parentName:"ul"},"\u2026"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"9")," - maximal logging")))))}s.isMDXComponent=!0}}]);