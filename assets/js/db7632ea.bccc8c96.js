"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4303],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),l=p(r),m=a,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return r?n.createElement(f,i(i({ref:e},u),{},{components:r})):n.createElement(f,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[l]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35226:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={},i=void 0,o={unversionedId:"nanostream/directshow/directshow_rtmp_status_statistics",id:"nanostream/directshow/directshow_rtmp_status_statistics",title:"directshow_rtmp_status_statistics",description:"RTMP DirectShow Events",source:"@site/docs/nanostream/directshow/directshow_rtmp_status_statistics.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_rtmp_status_statistics",permalink:"/docs/nanostream/directshow/directshow_rtmp_status_statistics",draft:!1,tags:[],version:"current",lastUpdatedAt:1706536631,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{}},c={},p=[{value:"RTMP DirectShow Events",id:"rtmp-directshow-events",level:2},{value:"RTMP Event Codes",id:"rtmp-event-codes",level:3},{value:"RTMP Statistics Event Parameters",id:"rtmp-statistics-event-parameters",level:3},{value:"RTMP Status Event Parameters",id:"rtmp-status-event-parameters",level:3},{value:"RTMP Status Values",id:"rtmp-status-values",level:3},{value:"RTMP Statistics Data Structure",id:"rtmp-statistics-data-structure",level:3}],u={toc:p},l="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rtmp-directshow-events"},"RTMP DirectShow Events"),(0,a.kt)("p",null,"RTMP Writer filter provides statistics and information about the current streaming status as DirectShow events."),(0,a.kt)("p",null,"All types are declared in RTMPWriterOptions.h."),(0,a.kt)("h3",{id:"rtmp-event-codes"},"RTMP Event Codes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// EC_USER is defined in Windows SDK\\include\\evcode.h\n// EC_USER                             0x8000\n\n// RTMP Statistics Event Code\n#define EC_NANO_RTMP_WRITER_STATS   EC_USER+179\n\n// RTMP Status Event Code\n#define EC_NANO_RTMP_WRITER_STATUS  EC_USER+181\n")),(0,a.kt)("h3",{id:"rtmp-statistics-event-parameters"},"RTMP Statistics Event Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// RTMP Statistics Event Parameters\n// EventCode: (long)EC_NANO_RTMP_WRITER_STATS\n// EventParam1: (LONG_PTR)rtmp_writer_stats_t* pStatistics\n// EventParam2: (LONG_PTR)(char**)ppRTMPUrl or NULL\n// The parameter pointers MUST NOT be deleted or released\n")),(0,a.kt)("h3",{id:"rtmp-status-event-parameters"},"RTMP Status Event Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// RTMP Status Event Parameters\n// EventCode: (long)EC_NANO_RTMP_WRITER_STATUS\n// EventParam1: (LONG_PTR)(int*)pRtmpWriterStatus\n// EventParam2: (LONG_PTR))(char**)ppRTMPUrl or NULL\n// The parameter pointers MUST NOT be deleted or released\n")),(0,a.kt)("h3",{id:"rtmp-status-values"},"RTMP Status Values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum RtmpWriterStatus\n{\n    RTMPWriterConnected = 0,     // RTMP Writer is connected\n    RTMPWriterDisconnected = 1,  // RTMP Writer is disconnected\n    RTMPWriterReconnecting = 2   // RTMP Writer is trying to reconnect\n};\n")),(0,a.kt)("h3",{id:"rtmp-statistics-data-structure"},"RTMP Statistics Data Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct rtmp_writer_stats_t\n{\n    int output_buffer_size; // Available buffer size in bytes\n    int output_buffer_fillness; // Current buffer fillness in bytes\n\n    __int64 output_bitrate; // Data rate sent through network in bits/s\n    __int64 output_bitrate2;    // Deprecated - works only with Windows XP\n    __int64 output_bitrate3;    // Deprecated - works only with Windows XP\n\n    DWORD packetsRtt;       // Deprecated - works only with Windows XP\n    unsigned int clientBytesReceived;   // Experimental - Bytes received /\n                                        // acknowledged by client\n\n    size_t audio_packets_buffered; // Number of audio packets/frames buffered\n    size_t video_packets_buffered; // Number of video packets/frames buffered\n\n    int audio_bitrate;      // Input audio bitrate in bits/s\n    int video_bitrate;      // Input video bitrate in bits/s\n\n    int audio_packets_sent; // Number of audio packets/frames sent\n    int video_packets_sent; // Number of video packets/frames sent\n};\n")))}d.isMDXComponent=!0}}]);