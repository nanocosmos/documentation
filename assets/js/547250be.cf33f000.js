"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"nanostream_webrtc_reconnect",title:"Automatic Reconnection",sidebar_label:"Automatic Reconnection"},c=void 0,i={unversionedId:"webrtc-v5/nanostream_webrtc_reconnect",id:"webrtc-v5/nanostream_webrtc_reconnect",title:"Automatic Reconnection",description:"This feature allows configuration of the reconnection behaviour on API level.",source:"@site/docs/webrtc-v5/nanostream_webrtc_reconnect.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_reconnect",permalink:"/docs/webrtc-v5/nanostream_webrtc_reconnect",draft:!1,tags:[],version:"current",lastUpdatedAt:1702554316,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{id:"nanostream_webrtc_reconnect",title:"Automatic Reconnection",sidebar_label:"Automatic Reconnection"},sidebar:"nanoStream Webcaster V5",previous:{title:"Stats and Metrics",permalink:"/docs/webrtc-v5/nanostream_webrtc_stats_and_metrics"},next:{title:"Webcaster",permalink:"/docs/webrtc-v5/nanostream_webrtc_api"}},s={},l=[{value:"Automatic Reconnection Configuration",id:"automatic-reconnection-configuration",level:2},{value:"Notice when a reconnect happens",id:"notice-when-a-reconnect-happens",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This feature allows configuration of the reconnection behaviour on API level.\nOnce the webcaster will register any connection loss, it will attempt to reconnect the current webcast."),(0,o.kt)("p",null,"When enabled, the feature will trigger a reconnect attempt in one of the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change of network:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On mobile devices, e.g. when switching from wifi to mobile network"),(0,o.kt)("li",{parentName:"ul"},"Switching between multiple wifi endpoints"))),(0,o.kt)("li",{parentName:"ul"},"Broadcaster\u2019s brief internet interruptions"),(0,o.kt)("li",{parentName:"ul"},"Unexpected issues on the network side")),(0,o.kt)("p",null,"You will be notified through the ",(0,o.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#broadcaststatus"},"BroadcastStatus")," Event once a reconnection takes place.\nPlease read on how to get notified about a reconnect ",(0,o.kt)("a",{parentName:"p",href:"#notice-when-a-reconnect-happens"},"below"),"."),(0,o.kt)("h2",{id:"automatic-reconnection-configuration"},"Automatic Reconnection Configuration"),(0,o.kt)("p",null,"To enable the feature, the ",(0,o.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusersetconfigconfig"},"setConfig()")," API call now provides additional options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reconnect.minDelay:")," Minimum amount of seconds to wait before attempting a reconnect after connection loss"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reconnect.maxDelay:")," Maximum amount of seconds to wait before attempting a reconnect after connection loss"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reconnect.maxRetries:")," Maximum amount reconnect attempts, setting this to an integer greater than 0 will enable the reconnect feature")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// add reconnection settings to your config\nvar config = {\n  reconnect: {\n    minDelay: 2,\n    maxDelay: 8,\n    maxRetries: 10\n  }\n};\n\nrtcuser.setConfig(config);\n")),(0,o.kt)("h2",{id:"notice-when-a-reconnect-happens"},"Notice when a reconnect happens"),(0,o.kt)("p",null,"A reconnect will be notified through the ",(0,o.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#broadcaststatus"},"BroadcastStatus")," Event."),(0,o.kt)("p",null,"Connection loss (from client to server) is notified with a status of ",(0,o.kt)("strong",{parentName:"p"},"'reconnecting_broadcast'"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"rtcuser.on('BroadcastStatus', function(event) {\n\n  if(event.data && event.data.message === 'reconnecting_broadcast') {\n    console.log('Broadcast is reconnecting');\n  }\n  \n  // the status (event.data.message) will be one of:\n\n  // 'signalling': a connection is being established\n  // 'connected': the stream has connected to the server successfully\n  // 'broadcasting': the broadcast is running\n  // 'reconnecting_broadcast': the client is reconnecting\n  // 'reconnecting': the RTMP connection is reconnecting on server side\n    \n});\n")))}m.isMDXComponent=!0}}]);