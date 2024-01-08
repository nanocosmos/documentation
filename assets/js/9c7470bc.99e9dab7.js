"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||a;return n?l.createElement(k,r(r({ref:t},d),{},{components:n})):l.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<a;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const a={},r=void 0,o={unversionedId:"nanostream/directshow/directshow_mpeg2_video_decoder",id:"nanostream/directshow/directshow_mpeg2_video_decoder",title:"directshow_mpeg2_video_decoder",description:"nanocosmos MPEG-2 HD/SD Video Decoder Filter",source:"@site/docs/nanostream/directshow/directshow_mpeg2_video_decoder.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_mpeg2_video_decoder",permalink:"/docs/nanostream/directshow/directshow_mpeg2_video_decoder",draft:!1,tags:[],version:"current",lastUpdatedAt:1704708501,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{}},u={},p=[{value:"nanocosmos MPEG-2 HD/SD Video Decoder Filter",id:"nanocosmos-mpeg-2-hdsd-video-decoder-filter",level:2},{value:"DirectShow Filter / Module",id:"directshow-filter--module",level:3},{value:"Connectivity",id:"connectivity",level:3},{value:"Filter GUIDs",id:"filter-guids",level:3},{value:"Setting the license to unlock filter",id:"setting-the-license-to-unlock-filter",level:3},{value:"Decoder Configuration Registry Settings",id:"decoder-configuration-registry-settings",level:3},{value:"Frame dropping / skipping mode",id:"frame-dropping--skipping-mode",level:4},{value:"Output color space selection",id:"output-color-space-selection",level:4},{value:"Deinterlacing Mode",id:"deinterlacing-mode",level:4},{value:"DirectShow Editing Services (DES) Return Mode",id:"directshow-editing-services-des-return-mode",level:4},{value:"Threading Mode",id:"threading-mode",level:4},{value:"Output resolution alignment",id:"output-resolution-alignment",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:3},{value:"File name",id:"file-name",level:4},{value:"Logging level",id:"logging-level",level:3}],d={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"nanocosmos-mpeg-2-hdsd-video-decoder-filter"},"nanocosmos MPEG-2 HD/SD Video Decoder Filter"),(0,i.kt)("h3",{id:"directshow-filter--module"},"DirectShow Filter / Module"),(0,i.kt)("p",null,"nanocosmos MPEG-2 HD/SD Video Decoder","\\","\nModule Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"nmpeg2dec.ax")),(0,i.kt)("h3",{id:"connectivity"},"Connectivity"),(0,i.kt)("p",null,"The input is accepting connections to splitter filters or combined source/splitter filters matching the following media types:"),(0,i.kt)("p",null,"Major types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,i.kt)("p",null,"Subtypes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_MPEG2")),(0,i.kt)("p",null,"Formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo,"),(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo2,"),(0,i.kt)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO")),(0,i.kt)("p",null,"The output supports these media types:"),(0,i.kt)("p",null,"Major types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,i.kt)("p",null,"Subtypes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YV12,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_I420,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_IYUV,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YUY2,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB24,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB32,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_ARGB32,"),(0,i.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB565,")),(0,i.kt)("p",null,"Formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo"),(0,i.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo2")),(0,i.kt)("h3",{id:"filter-guids"},"Filter GUIDs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Filter GUID\n// {223784F1-4D9F-45a5-8281-8F9AFCABD904}\nDEFINE_GUID(CLSID_NANO_MPEG2_DECODER, 0x223784f1, 0x4d9f, 0x45a5, 0x82, 0x81, 0x8f, 0x9a, 0xfc, 0xab, 0xd9, 0x4);\n\n// Configuration interface ICodecProp\n// {0F817204-82C8-4c12-884A-F45FB2F33A6E}\nDEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);\n\n// ICodecProp: IID_nanoPeg_LicenseString\n// type: BSTR / Unicode string\n// Set license string to unlock filter\n// {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}\nDEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);\n")),(0,i.kt)("h3",{id:"setting-the-license-to-unlock-filter"},"Setting the license to unlock filter"),(0,i.kt)("p",null,"The filter can be unlocked either through a license key entry in the windows registry or\nby setting the license key through COM interface ICodecProp::SetProperty with the\nproperty ",(0,i.kt)("strong",{parentName:"p"},"IID_nanoPeg_LicenseString")," as first parameter. The second license parameter\nhas to be a wide/unicode string!"),(0,i.kt)("h3",{id:"decoder-configuration-registry-settings"},"Decoder Configuration Registry Settings"),(0,i.kt)("p",null,"Key: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\nanocosmos\\nmpeg2dec\n")),(0,i.kt)("h4",{id:"frame-dropping--skipping-mode"},"Frame dropping / skipping mode"),(0,i.kt)("p",null,"Determines the behaviour in the case of timing / performance problems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \tDroppingMode"),(0,i.kt)("li",{parentName:"ul"},"Value type: \tREG_DWORD"),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"__default value__"))))),(0,i.kt)("h4",{id:"output-color-space-selection"},"Output color space selection"),(0,i.kt)("p",null,"Forces the filter to use a desired output color format. If no or no valid value is set, the output color format will be negotiated with the downstream renderer filter (usually YV12)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \tForceOutputFourCC"),(0,i.kt)("li",{parentName:"ul"},"Value type: \t        ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_SZ / String")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YV12"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"I420"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IYUV"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YUY2"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RGB32"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RGB24"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RGB565"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ARGB32"))))),(0,i.kt)("h4",{id:"deinterlacing-mode"},"Deinterlacing Mode"),(0,i.kt)("p",null,"Determines the deinterlacing behaviour."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: DeinterlacingMode"),(0,i.kt)("li",{parentName:"ul"},"Value type:   REG_DWORD"),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - disabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - duplicate, ",(0,i.kt)("strong",{parentName:"li"},"default value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2")," - blend"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3")," - median"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4")," - edge detection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"5")," - median threshold"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6")," - content adaptive vertical temporal")))),(0,i.kt)("h4",{id:"directshow-editing-services-des-return-mode"},"DirectShow Editing Services (DES) Return Mode"),(0,i.kt)("p",null,"Receive returns HRESULT error values if Deliver fails.\nNeeds to be enabled for DES."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: ",(0,i.kt)("inlineCode",{parentName:"li"},"DESReturnMode")),(0,i.kt)("li",{parentName:"ul"},"Value type: ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - disabled, ",(0,i.kt)("strong",{parentName:"li"},"default value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - enabled")))),(0,i.kt)("h4",{id:"threading-mode"},"Threading Mode"),(0,i.kt)("p",null,"Determines the threading behaviour.\nAuto detection or number of decoding threads."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: ",(0,i.kt)("inlineCode",{parentName:"li"},"DESReturnMode")),(0,i.kt)("li",{parentName:"ul"},"Value type: ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - auto detect number of cpus, ",(0,i.kt)("strong",{parentName:"li"},"default value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1-8")," - set number of decoding threads")))),(0,i.kt)("h4",{id:"output-resolution-alignment"},"Output resolution alignment"),(0,i.kt)("p",null,"Determines the alignment of the output resolution,\nto adjust it to multiples of this value."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: ",(0,i.kt)("inlineCode",{parentName:"li"},"OutputAlignment")),(0,i.kt)("li",{parentName:"ul"},"Value type: ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1-16"),", ",(0,i.kt)("strong",{parentName:"li"},"default value:")," 4")))),(0,i.kt)("h3",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,i.kt)("p",null,"Key: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\nmpeg2dec.ax\n")),(0,i.kt)("h4",{id:"file-name"},"File name"),(0,i.kt)("p",null,"Sets the output file name. The folder must already exist."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \t",(0,i.kt)("inlineCode",{parentName:"li"},"LogToFile")),(0,i.kt)("li",{parentName:"ul"},"Value type: \t        ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_SZ")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Valid values:\ta valid output file name to enable file logging or an empty string")),(0,i.kt)("h3",{id:"logging-level"},"Logging level"),(0,i.kt)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value name: \t",(0,i.kt)("inlineCode",{parentName:"li"},"TRACE")),(0,i.kt)("li",{parentName:"ul"},"Value type: \t        ",(0,i.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,i.kt)("li",{parentName:"ul"},"Valid values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," - minimal logging"),(0,i.kt)("li",{parentName:"ul"},"\u2026"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"9")," - maximal logging")))))}s.isMDXComponent=!0}}]);