"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7479],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const s={},i=void 0,o={unversionedId:"nanostream/directshow/directshow_rtmp_status_statistics",id:"nanostream/directshow/directshow_rtmp_status_statistics",title:"directshow_rtmp_status_statistics",description:"RTMP DirectShow Events",source:"@site/docs/nanostream/directshow/directshow_rtmp_status_statistics.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_rtmp_status_statistics",permalink:"/docs/nanostream/directshow/directshow_rtmp_status_statistics",draft:!1,tags:[],version:"current",lastUpdatedAt:1726579045,formattedLastUpdatedAt:"Sep 17, 2024",frontMatter:{}},c={},p=[{value:"RTMP DirectShow Events",id:"rtmp-directshow-events",level:2},{value:"RTMP Event Codes",id:"rtmp-event-codes",level:3},{value:"RTMP Statistics Event Parameters",id:"rtmp-statistics-event-parameters",level:3},{value:"RTMP Status Event Parameters",id:"rtmp-status-event-parameters",level:3},{value:"RTMP Status Values",id:"rtmp-status-values",level:3},{value:"RTMP Statistics Data Structure",id:"rtmp-statistics-data-structure",level:3}],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(l,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"rtmp-directshow-events"},"RTMP DirectShow Events"),(0,a.yg)("p",null,"RTMP Writer filter provides statistics and information about the current streaming status as DirectShow events."),(0,a.yg)("p",null,"All types are declared in RTMPWriterOptions.h."),(0,a.yg)("h3",{id:"rtmp-event-codes"},"RTMP Event Codes"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// EC_USER is defined in Windows SDK\\include\\evcode.h\n// EC_USER                             0x8000\n\n// RTMP Statistics Event Code\n#define EC_NANO_RTMP_WRITER_STATS   EC_USER+179\n\n// RTMP Status Event Code\n#define EC_NANO_RTMP_WRITER_STATUS  EC_USER+181\n")),(0,a.yg)("h3",{id:"rtmp-statistics-event-parameters"},"RTMP Statistics Event Parameters"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// RTMP Statistics Event Parameters\n// EventCode: (long)EC_NANO_RTMP_WRITER_STATS\n// EventParam1: (LONG_PTR)rtmp_writer_stats_t* pStatistics\n// EventParam2: (LONG_PTR)(char**)ppRTMPUrl or NULL\n// The parameter pointers MUST NOT be deleted or released\n")),(0,a.yg)("h3",{id:"rtmp-status-event-parameters"},"RTMP Status Event Parameters"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// RTMP Status Event Parameters\n// EventCode: (long)EC_NANO_RTMP_WRITER_STATUS\n// EventParam1: (LONG_PTR)(int*)pRtmpWriterStatus\n// EventParam2: (LONG_PTR))(char**)ppRTMPUrl or NULL\n// The parameter pointers MUST NOT be deleted or released\n")),(0,a.yg)("h3",{id:"rtmp-status-values"},"RTMP Status Values"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"enum RtmpWriterStatus\n{\n    RTMPWriterConnected = 0,     // RTMP Writer is connected\n    RTMPWriterDisconnected = 1,  // RTMP Writer is disconnected\n    RTMPWriterReconnecting = 2   // RTMP Writer is trying to reconnect\n};\n")),(0,a.yg)("h3",{id:"rtmp-statistics-data-structure"},"RTMP Statistics Data Structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"struct rtmp_writer_stats_t\n{\n    int output_buffer_size; // Available buffer size in bytes\n    int output_buffer_fillness; // Current buffer fillness in bytes\n\n    __int64 output_bitrate; // Data rate sent through network in bits/s\n    __int64 output_bitrate2;    // Deprecated - works only with Windows XP\n    __int64 output_bitrate3;    // Deprecated - works only with Windows XP\n\n    DWORD packetsRtt;       // Deprecated - works only with Windows XP\n    unsigned int clientBytesReceived;   // Experimental - Bytes received /\n                                        // acknowledged by client\n\n    size_t audio_packets_buffered; // Number of audio packets/frames buffered\n    size_t video_packets_buffered; // Number of video packets/frames buffered\n\n    int audio_bitrate;      // Input audio bitrate in bits/s\n    int video_bitrate;      // Input video bitrate in bits/s\n\n    int audio_packets_sent; // Number of audio packets/frames sent\n    int video_packets_sent; // Number of video packets/frames sent\n};\n")))}d.isMDXComponent=!0}}]);