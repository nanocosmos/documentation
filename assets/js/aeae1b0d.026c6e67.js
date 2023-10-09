"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"nanostream/directshow/directshow_mpeg2_video_encoder",id:"nanostream/directshow/directshow_mpeg2_video_encoder",title:"directshow_mpeg2_video_encoder",description:"nanocosmos MPEG-2 Video Encoder Filter",source:"@site/docs/nanostream/directshow/directshow_mpeg2_video_encoder.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_mpeg2_video_encoder",permalink:"/docs/nanostream/directshow/directshow_mpeg2_video_encoder",draft:!1,tags:[],version:"current",lastUpdatedAt:1696845431,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{}},p={},c=[{value:"nanocosmos MPEG-2 Video Encoder Filter",id:"nanocosmos-mpeg-2-video-encoder-filter",level:2},{value:"DirectShow Filter / Module",id:"directshow-filter--module",level:3},{value:"DirectShow Connectivity",id:"directshow-connectivity",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Setting the license to unlock filter",id:"setting-the-license-to-unlock-filter",level:3},{value:"Common Encoder Settings",id:"common-encoder-settings",level:3},{value:"Configuration through INanoCodecOpts interface",id:"configuration-through-inanocodecopts-interface",level:3},{value:"Configuration through DirectShow  filter property page",id:"configuration-through-directshow--filter-property-page",level:3},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:3},{value:"File name",id:"file-name",level:4},{value:"Logging level",id:"logging-level",level:4}],s={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"nanocosmos-mpeg-2-video-encoder-filter"},"nanocosmos MPEG-2 Video Encoder Filter"),(0,a.kt)("h3",{id:"directshow-filter--module"},"DirectShow Filter / Module"),(0,a.kt)("p",null,"nanocosmos MPEG-2 Video Encoder","\\","\nModule Name: nmpeg2enc.ax"),(0,a.kt)("h3",{id:"directshow-connectivity"},"DirectShow Connectivity"),(0,a.kt)("p",null,"The input is accepting connections to video source, capture and decoder filters matching the following media types:"),(0,a.kt)("p",null,"Major types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,a.kt)("p",null,"Subtypes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YV12,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_I420,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_YUY2,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_UYVY,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_HDYC,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB24,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB32,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_ARGB32,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_RGB565,")),(0,a.kt)("p",null,"Formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo"),(0,a.kt)("li",{parentName:"ul"},"FORMAT_VideoInfo2")),(0,a.kt)("p",null,"The output supports these media types:"),(0,a.kt)("p",null,"Major types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MEDIATYPE_Video")),(0,a.kt)("p",null,"Subtypes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_MPEG2_VIDEO,"),(0,a.kt)("li",{parentName:"ul"},"MEDIASUBTYPE_mpgv")),(0,a.kt)("p",null,"Formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO,"),(0,a.kt)("li",{parentName:"ul"},"FORMAT_NONE")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The encoding configuration may be set by using either the property page or the COM Interface INanoCodecOpts as declared in header file INanoCodecOpts.h ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Filter GUID\n// {2327A344-BECC-4f4f-89C6-DABDC5143832}\nDEFINE_GUID(CLSID_NANO_MPEG2_ENCODER, 0x2327a344, 0xbecc, 0x4f4f, 0x89, 0xc6, 0xda, 0xbd, 0xc5, 0x14, 0x38, 0x32);\n\n// Property Page GUID\n// {8A84396A-277A-4835-9EB5-719863194DC9}\nDEFINE_GUID(CLSID_NANO_MPEG2_ENCODER_PROPPAGE, 0x8a84396a, 0x277a, 0x4835, 0x9e, 0xb5, 0x71, 0x98, 0x63, 0x19, 0x4d, 0xc9);\n\n// Configuration Interface GUID\n// {698E0F57-B828-4c40-8867-095FF49F77D6}\nDEFINE_GUID(IID_INanoCodecOpts, 0x698e0f57, 0xb828, 0x4c40, 0x88, 0x67, 0x9, 0x5f, 0xf4, 0x9f, 0x77, 0xd6);\n\n// Configuration interface ICodecProp\n// {0F817204-82C8-4c12-884A-F45FB2F33A6E}\nDEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);\n\n// ICodecProp: IID_nanoPeg_LicenseString\n// type: BSTR / Unicode string\n// Set license string to unlock filter\n// {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}\nDEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);\n")),(0,a.kt)("h3",{id:"setting-the-license-to-unlock-filter"},"Setting the license to unlock filter"),(0,a.kt)("p",null,"The filter can be unlocked either through a license key entry in the windows registry or\nby setting the license key through COM interface ICodecProp::SetProperty with the\nproperty ",(0,a.kt)("strong",{parentName:"p"},"IID_nanoPeg_LicenseString")," as first parameter. The second license parameter\nhas to be a wide/unicode string!"),(0,a.kt)("h3",{id:"common-encoder-settings"},"Common Encoder Settings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Default values"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"profile, level"),(0,a.kt)("td",{parentName:"tr",align:null},"Main Profile, Main Level"),(0,a.kt)("td",{parentName:"tr",align:null},"MPEG-2 Profile and Level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"base_video.bitrate_kb"),(0,a.kt)("td",{parentName:"tr",align:null},"Profile and Level dependend"),(0,a.kt)("td",{parentName:"tr",align:null},"Video Bitrate in kBits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"base_video.resolution.width"),(0,a.kt)("td",{parentName:"tr",align:null},"0 - use input width"),(0,a.kt)("td",{parentName:"tr",align:null},"Picture Coding Width")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"base_video.resolution.height"),(0,a.kt)("td",{parentName:"tr",align:null},"0 - use input height"),(0,a.kt)("td",{parentName:"tr",align:null},"Picture Coding Height")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"chroma_format_idc"),(0,a.kt)("td",{parentName:"tr",align:null},"0 - I420, 1 - I422"),(0,a.kt)("td",{parentName:"tr",align:null},"[0,1]"," Chroma Format")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rate_method"),(0,a.kt)("td",{parentName:"tr",align:null},"0 - CBR, 1 - VBR"),(0,a.kt)("td",{parentName:"tr",align:null},"[0,1]"," Rate Control Mode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"distance_i"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"Intra Frame Distance / GOP len.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"distance_p"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"P Frame Distance")))),(0,a.kt)("h3",{id:"configuration-through-inanocodecopts-interface"},"Configuration through INanoCodecOpts interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Version check by calling //GetCodecOptsVersion//// //(optional)"),(0,a.kt)("li",{parentName:"ul"},"Instanciating a parameter structure of type //MPDX4_MPEG2EncoderParams//"),(0,a.kt)("li",{parentName:"ul"},"Initializing the parameter struct by calling //InitCodecOptions// will set all parameters to default values for the selected profile and level"),(0,a.kt)("li",{parentName:"ul"},"Setting custom values for resolution and bitrate"),(0,a.kt)("li",{parentName:"ul"},"Applying settings by calling //SetCodecOptions//")),(0,a.kt)("p",null,"Here a code snippet without error handling to show configuration for IMX 50 format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "mpeg2_enc_params.h"\n\nHRESULT hr = S_OK;\n\n// Query INanoCodecOpts interface from IBaseFilter interface\n// of MPEG-2 Encoder filter\nCComQIPtr<INanoCodecOpts> pNanoCodecOpts = pBaseFilter;\n\nMPDX4_MPEG2EncoderParams mpeg2EncParams;\nmemset(&mpeg2EncParams, 0, sizeof(MPDX4_MPEG2EncoderParams));\n\n// Set desired profile and level values\nmpeg2EncParams.profile = MPDX4_MPEG2_PROFILE_422IMX;\nmpeg2EncParams.level = MPDX4_MPEG2_LEVEL_MAIN;\n\n// Intialize the parameter struct according to profile and level set\nhr = pNanoCodecOpts->InitCodecOptions((MPDX4_BaseCodecOpts*) &mpeg2EncParams, INANOCODECOPTS_VERSION);\n\n// Set custom parameter values\n// Bitrate\nmpeg2EncParams.base_video.bitrate_kb = 50000; // IMX 50\n// If resize is needed\nmpeg2EncParams.base_video.resolution.width = 720;\nmpeg2EncParams.base_video.resolution.height = 608;\n\n// Apply settings and finish configuration\nhr = pNanoCodecOpts->SetCodecOptions((MPDX4_BaseCodecOpts*) &mpeg2EncParams, INANOCODECOPTS_VERSION);\n')),(0,a.kt)("h3",{id:"configuration-through-directshow--filter-property-page"},"Configuration through DirectShow  filter property page"),(0,a.kt)("p",null,"The filter's property page offers a subset of encoding parameters, containing the most important options."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MPEG-2 Video Encoder Properties",src:n(84292).Z,width:"300",height:"362"})),(0,a.kt)("h3",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,a.kt)("p",null,"Key: HKEY_CURRENT_USER\\Software\\DebugNano\\nmpeg2enc.ax"),(0,a.kt)("h4",{id:"file-name"},"File name"),(0,a.kt)("p",null,"Sets the output file name. The folder must already exist."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Value name: \tLogToFile"),(0,a.kt)("li",{parentName:"ul"},"Value type: \t       REG_SZ / String"),(0,a.kt)("li",{parentName:"ul"},"Valid values:\ta valid output file name to enable file logging or an empty string")),(0,a.kt)("h4",{id:"logging-level"},"Logging level"),(0,a.kt)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Value name: \tTRACE"),(0,a.kt)("li",{parentName:"ul"},"Value type: \tREG_DWORD"),(0,a.kt)("li",{parentName:"ul"},"Valid values:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"0 - minimal logging"),(0,a.kt)("li",{parentName:"ul"},"\u2026"),(0,a.kt)("li",{parentName:"ul"},"9 - maximal logging")))))}d.isMDXComponent=!0},84292:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/directshow_mpeg2_video_enc_prop-91b8972814fc13faf3ce7f7919841f5c.png"}}]);