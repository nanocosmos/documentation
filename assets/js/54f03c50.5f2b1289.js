"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),p=l,f=m["".concat(u,".").concat(p)]||m[p]||c[p]||i;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},25572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const i={id:"directshow_rtmp_source",title:"RTMP Source",sidebar_label:"RTMP Source"},r="nanocosmos DirectShow Filters",o={unversionedId:"nanostream/directshow/directshow_rtmp_source",id:"nanostream/directshow/directshow_rtmp_source",title:"RTMP Source",description:"nanocosmos RTMP Source Filter",source:"@site/docs/nanostream/directshow/directshow_rtmp_source.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_rtmp_source",permalink:"/docs/nanostream/directshow/directshow_rtmp_source",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"directshow_rtmp_source",title:"RTMP Source",sidebar_label:"RTMP Source"}},u={},s=[{value:"nanocosmos RTMP Source Filter",id:"nanocosmos-rtmp-source-filter",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Module Name / Version",id:"module-name--version",level:3},{value:"DirectShow Connectivity",id:"directshow-connectivity",level:3},{value:"Filter GUIDs",id:"filter-guids",level:3},{value:"Configuration through COM Interface",id:"configuration-through-com-interface",level:3},{value:"URL format",id:"url-format",level:4},{value:"Connect to nanocosmos decoder filters only",id:"connect-to-nanocosmos-decoder-filters-only",level:4},{value:"Buffering delay in milliseconds",id:"buffering-delay-in-milliseconds",level:4},{value:"Buffering mode",id:"buffering-mode",level:4},{value:"Receive timeout in milliseconds",id:"receive-timeout-in-milliseconds",level:4},{value:"Stream format detection timeout in milliseconds",id:"stream-format-detection-timeout-in-milliseconds",level:4},{value:"Configuration through DirectShow filter property page",id:"configuration-through-directshow-filter-property-page",level:4},{value:"Configuration Registry Settings",id:"configuration-registry-settings",level:4},{value:"Receive timeout",id:"receive-timeout",level:4},{value:"Stream format detection mode",id:"stream-format-detection-mode",level:4},{value:"Stream format detection timeout",id:"stream-format-detection-timeout",level:4},{value:"Audio Codec",id:"audio-codec",level:4},{value:"Audio Channels",id:"audio-channels",level:4},{value:"Audio Bitlength",id:"audio-bitlength",level:4},{value:"Audio Samplerate",id:"audio-samplerate",level:4},{value:"Valid values AAC:",id:"valid-values-aac",level:5},{value:"Valid values MP3:",id:"valid-values-mp3",level:5},{value:"Valid values SPEEX:",id:"valid-values-speex",level:5},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:3},{value:"File name",id:"file-name",level:4},{value:"Logging level",id:"logging-level",level:4}],d={toc:s},m="wrapper";function c(e){let{components:t,...i}=e;return(0,l.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nanocosmos-directshow-filters"},"nanocosmos DirectShow Filters"),(0,l.kt)("h2",{id:"nanocosmos-rtmp-source-filter"},"nanocosmos RTMP Source Filter"),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DirectShow filter for RTMP Downstreaming / Playback"),(0,l.kt)("li",{parentName:"ul"},"Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server"),(0,l.kt)("li",{parentName:"ul"},"Supported Formats: H.264 + AAC + MP3")),(0,l.kt)("h3",{id:"module-name--version"},"Module Name / Version"),(0,l.kt)("p",null,"Module: ",(0,l.kt)("inlineCode",{parentName:"p"},"nRTMPSource.ax"),"\nVersion: ",(0,l.kt)("inlineCode",{parentName:"p"},"1.3.1.1")),(0,l.kt)("h3",{id:"directshow-connectivity"},"DirectShow Connectivity"),(0,l.kt)("p",null,"The output pins are accepting connections matching the following media types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Major types:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MEDIATYPE_Video"))),(0,l.kt)("li",{parentName:"ul"},"Subtypes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FourCCs: H264, h264"))),(0,l.kt)("li",{parentName:"ul"},"Formats:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FORMAT_MPEG2_VIDEO,"),(0,l.kt)("li",{parentName:"ul"},"FORMAT_NONE"))),(0,l.kt)("li",{parentName:"ul"},"Major types:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AAC: \t   MEDIATYPE_Audio"),(0,l.kt)("li",{parentName:"ul"},"MP3:     MEDIATYPE_Audio"),(0,l.kt)("li",{parentName:"ul"},"SPEEX: MEDIATYPE Ogg Stream"))),(0,l.kt)("li",{parentName:"ul"},"Subtypes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AAC:    MEDIASUBTYPE_AAC,  FourCC: 0x000000FF,"),(0,l.kt)("li",{parentName:"ul"},"MP3:     MEDIASUBTYPE_MP3,  FourCC: 0x00000055"),(0,l.kt)("li",{parentName:"ul"},"SPEEX:  MEDIASUBTYPE_None"))),(0,l.kt)("li",{parentName:"ul"},"Formats:"),(0,l.kt)("li",{parentName:"ul"},"AAC, MP3: \tFORMAT_WaveFormatEx,"),(0,l.kt)("li",{parentName:"ul"},"SPEEX: \tFORMAT_Speex")),(0,l.kt)("h3",{id:"filter-guids"},"Filter GUIDs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Filter GUID\n// {440E11F2-FB35-4699-809B-157C390E9238}\nDEFINE_GUID(CLSID_NANO_RTMP_SOURCE, 0x440e11f2, 0xfb35, 0x4699, 0x80, 0x9b, 0x15, 0x7c, 0x39, 0xe, 0x92, 0x38);\n\n// Property Page GUID\n// {7A05E2F3-9258-4952-920A-54F6AE6A0D66}\nDEFINE_GUID(CLSID_NANO_RTMP_SOURCE_PROPPAGE, 0x7a05e2f3, 0x9258, 0x4952, 0x92, 0xa, 0x54, 0xf6, 0xae, 0x6a, 0xd, 0x66);\n")),(0,l.kt)("h3",{id:"configuration-through-com-interface"},"Configuration through COM Interface"),(0,l.kt)("p",null,"The streaming url can be set by using standard DirectShow interface IFileSourceFilter ."),(0,l.kt)("h4",{id:"url-format"},"URL format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rtmp:%%//%% [ IP:port ]/[ application name]/[ stream name]/\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If no port is specified, standard rtmp port ",(0,l.kt)("inlineCode",{parentName:"p"},"1935")," will be used.")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rtmp:%%//%%127.0.0.1:1935/live/myStream\n")),(0,l.kt)("p",null,"Following options can be set by using standard DirectShow interface ICodecAPI.\nSee DirectShow documentation for usage of ICodecAPI interface."),(0,l.kt)("h4",{id:"connect-to-nanocosmos-decoder-filters-only"},"Connect to nanocosmos decoder filters only"),(0,l.kt)("p",null,"Value Type:     Integer, Variant::intVal, VT_INT","\\","\nValid values:   yes: 1, no: 0 ","\\","\nGUID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// {FB5005A0-3231-4171-A218-A3A3431D7790}\nDEFINE_GUID(PROPID_nanoSourceConnectToNanoDecodersOnly, 0xfb5005a0, 0x3231, 0x4171, 0xa2, 0x18, 0xa3, 0xa3, 0x43, 0x1d, 0x77, 0x90);\n")),(0,l.kt)("h4",{id:"buffering-delay-in-milliseconds"},"Buffering delay in milliseconds"),(0,l.kt)("p",null,"Under low bandwidth conditions a higher value leads to smoother playback."),(0,l.kt)("p",null,"Value Type:     Integer, Variant::intVal, VT_INT","\\","\nValid values:   0...INT32_MAX","\\","\nGUID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// {3641DC07-82CD-40b0-9293-DCBE25E0C274}\nDEFINE_GUID(PROPID_nanoSourceBufferingDelay, 0x3641dc07, 0x82cd, 0x40b0, 0x92, 0x93, 0xdc, 0xbe, 0x25, 0xe0, 0xc2, 0x74);\n")),(0,l.kt)("h4",{id:"buffering-mode"},"Buffering mode"),(0,l.kt)("p",null,"Use this GUID to configure the buffering mode","\\","\nValue Type:     VT_I4 / VARIANT::intVal, get/set ","\\","\nValid values:   0 - Fill buffer once on start, 1 - Refill buffer always if empty","\\","\nDefault value: 1","\\"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// {AB91A1D9-6701-4133-8733-6EB3A20E9583}\nDEFINE_GUID(PROPID_nanoSourceBufferingMode, 0xab91a1d9, 0x6701, 0x4133, 0x87, 0x33, 0x6e, 0xb3, 0xa2, 0xe, 0x95, 0x83);\n")),(0,l.kt)("h4",{id:"receive-timeout-in-milliseconds"},"Receive timeout in milliseconds"),(0,l.kt)("p",null,"A stream is stopped if no data is present for this amount of time Overrides registry value ReceiveTimeout\nValue Type:      Integer, Variant::intVal, VT_I4","\\","\nValid values:   1000...INT (1-30 seconds), default: 5000 (5 seconds)","\\","\nGUID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// {767B756C-A55B-4fd9-88F8-159B338207ED}\nDEFINE_GUID(PROPID_nanoRTMPReceiveTimeoutMs, 0x767b756c, 0xa55b, 0x4fd9, 0x88, 0xf8, 0x15, 0x9b, 0x33, 0x82, 0x7, 0xed);\n")),(0,l.kt)("h4",{id:"stream-format-detection-timeout-in-milliseconds"},"Stream format detection timeout in milliseconds"),(0,l.kt)("p",null,"The detection is stopped after this amount of time, even if less than 2 streams found Overrides registry value DetectStreamFormatTimeout\nValue Type:     Integer, Variant::intVal, VT_I4","\\","\nValid values:   1000...INT32_MAX, default: 10000 (10 seconds)","\\","\nGUID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// {7400166F-8140-4b81-8B3E-C97CB7D972DF}\nDEFINE_GUID(PROPID_nanoRTMPDetectStreamFormatTimeoutMs, 0x7400166f, 0x8140, 0x4b81, 0x8b, 0x3e, 0xc9, 0x7c, 0xb7, 0xd9, 0x72, 0xdf);\n")),(0,l.kt)("h4",{id:"configuration-through-directshow-filter-property-page"},"Configuration through DirectShow filter property page"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"RTMP Source Properties",src:a(68099).Z,width:"332",height:"255"})),(0,l.kt)("h4",{id:"configuration-registry-settings"},"Configuration Registry Settings"),(0,l.kt)("p",null,"Key: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\nanocosmos\\nRTMPSource\n")),(0,l.kt)("h4",{id:"receive-timeout"},"Receive timeout"),(0,l.kt)("p",null,"A stream is stopped if no data is present for this this amount of time","\\","\nValue name: \tDetectStreamFormatTimeout","\\","\nValue type: \tREG_DWORD","\\","\nValid values:\t1 second - 30 seconds, default: 5 seconds"),(0,l.kt)("h4",{id:"stream-format-detection-mode"},"Stream format detection mode"),(0,l.kt)("p",null,"Determines if stream format settings are detected from the RTMP network stream or from registry preset values below.","\\","\nValue name: \tDetectStreamFormatMode","\\","\nValue type: \tREG_DWORD","\\","\nValid values:\t0: Detect from stream (default), 1: Use registry preset","\\"),(0,l.kt)("h4",{id:"stream-format-detection-timeout"},"Stream format detection timeout"),(0,l.kt)("p",null,"Timeout for format detection in seconds","\\","\nValue name: \tDetectStreamFormatTimeout","\\","\nValue type: \tREG_DWORD","\\","\nValid values:\t1 second - 30 seconds, default: 10 seconds"),(0,l.kt)("h4",{id:"audio-codec"},"Audio Codec"),(0,l.kt)("p",null,"Sets the audio codec if DetectStreamFormatMode = 1.","\\","\nValue name: \tAudioCodec","\\","\nValue type: \tREG_DWORD","\\","\nValid values:\t0: Auto/Default(AAC), 1: AAC, 2: MP3, 3: SPEEX"),(0,l.kt)("h4",{id:"audio-channels"},"Audio Channels"),(0,l.kt)("p",null,"Sets the number of audio channels if DetectStreamFormatMode = 1.","\\","\nValue name: \tAudioChannels","\\","\nValue type: \tREG_DWORD","\\","\nValid values:\t0: Auto/Default(Stereo), 1: Mono, 2: Stereo"),(0,l.kt)("h4",{id:"audio-bitlength"},"Audio Bitlength"),(0,l.kt)("p",null,"Sets the number of bits per audio sample if DetectStreamFormatMode = 1.","\\","\nValue name: \tAudioBitlength","\\","\nValue type: \tREG_DWORD","\\","\nValid values:\t0: Auto/Default(16 Bit), 1: 8 Bit, 2: 16 Bit"),(0,l.kt)("h4",{id:"audio-samplerate"},"Audio Samplerate"),(0,l.kt)("p",null,"Sets the audio samplerate if DetectStreamFormatMode = 1.","\\","\nCodecs support different sampling rates and have different default values!!!","\\","\nValue name: \tAudioRate","\\","\nValue type: \tREG_DWORD","\\"),(0,l.kt)("h5",{id:"valid-values-aac"},"Valid values AAC:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0: Auto/Default(44100),"),(0,l.kt)("li",{parentName:"ul"},"1: 8000 ,"),(0,l.kt)("li",{parentName:"ul"},"2: 11025,"),(0,l.kt)("li",{parentName:"ul"},"3: 12000,"),(0,l.kt)("li",{parentName:"ul"},"4: 16000,"),(0,l.kt)("li",{parentName:"ul"},"5: 22050,"),(0,l.kt)("li",{parentName:"ul"},"6: 24000"),(0,l.kt)("li",{parentName:"ul"},"7: 32000,"),(0,l.kt)("li",{parentName:"ul"},"8: 44100,"),(0,l.kt)("li",{parentName:"ul"},"9: 48000,"),(0,l.kt)("li",{parentName:"ul"},"10: 64000,"),(0,l.kt)("li",{parentName:"ul"},"11: 88200,"),(0,l.kt)("li",{parentName:"ul"},"12: 96000")),(0,l.kt)("h5",{id:"valid-values-mp3"},"Valid values MP3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0: Auto/Default(44100),"),(0,l.kt)("li",{parentName:"ul"},"1: 5500 ,"),(0,l.kt)("li",{parentName:"ul"},"2: 11025,"),(0,l.kt)("li",{parentName:"ul"},"3: 22050,"),(0,l.kt)("li",{parentName:"ul"},"4: 44100")),(0,l.kt)("h5",{id:"valid-values-speex"},"Valid values SPEEX:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0: Auto/Default(16000),"),(0,l.kt)("li",{parentName:"ul"},"1: 8000 ,"),(0,l.kt)("li",{parentName:"ul"},"2: 16000,"),(0,l.kt)("li",{parentName:"ul"},"3: 32000,"),(0,l.kt)("li",{parentName:"ul"},"4: 44100\nSPEEX internal sampling is usually 16000 (wideband).\nIt differs from flash's Microphone::rate value!")),(0,l.kt)("h3",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,l.kt)("p",null,"Key: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\nRTMPSource.ax  \n")),(0,l.kt)("h4",{id:"file-name"},"File name"),(0,l.kt)("p",null,"Sets the output file name. The folder must already exist.","\\","\nValue name: \tLogToFile","\\","\nValue type: \tREG_SZ / String","\\","\nValid values:\ta valid output file name to enable file logging or an empty string"),(0,l.kt)("h4",{id:"logging-level"},"Logging level"),(0,l.kt)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed. ","\\","\nValue name: \tTRACE","\\","\nValue type: \tREG_DWORD","\\","\nValid values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 - minimal logging"),(0,l.kt)("li",{parentName:"ul"},"\u2026"),(0,l.kt)("li",{parentName:"ul"},"9 - maximal logging")))}c.isMDXComponent=!0},68099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/directshow_rtmp_source_properties-1387307b01f666f43669254b168dee6d.png"}}]);