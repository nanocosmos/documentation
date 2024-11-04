"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6727],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,f=p["".concat(s,".").concat(g)]||p[g]||m[g]||a;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},29748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={id:"nanostream_webrtc_reconnect",title:"Automatic Reconnection",sidebar_label:"Automatic Reconnection"},c=void 0,i={unversionedId:"webrtc-v5/nanostream_webrtc_reconnect",id:"webrtc-v5/nanostream_webrtc_reconnect",title:"Automatic Reconnection",description:"This feature allows configuration of the reconnection behaviour on API level.",source:"@site/docs/webrtc-v5/nanostream_webrtc_reconnect.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_reconnect",permalink:"/docs/webrtc-v5/nanostream_webrtc_reconnect",draft:!1,tags:[],version:"current",lastUpdatedAt:1730716027,formattedLastUpdatedAt:"Nov 4, 2024",frontMatter:{id:"nanostream_webrtc_reconnect",title:"Automatic Reconnection",sidebar_label:"Automatic Reconnection"},sidebar:"nanoStream Webcaster V5",previous:{title:"Stats and Metrics",permalink:"/docs/webrtc-v5/nanostream_webrtc_stats_and_metrics"},next:{title:"Webcaster",permalink:"/docs/webrtc-v5/nanostream_webrtc_api"}},s={},l=[{value:"Automatic Reconnection Configuration",id:"automatic-reconnection-configuration",level:2},{value:"Notice when a reconnect happens",id:"notice-when-a-reconnect-happens",level:2}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This feature allows configuration of the reconnection behaviour on API level.\nOnce the webcaster will register any connection loss, it will attempt to reconnect the current webcast."),(0,o.yg)("p",null,"When enabled, the feature will trigger a reconnect attempt in one of the following cases:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Change of network:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"On mobile devices, e.g. when switching from wifi to mobile network"),(0,o.yg)("li",{parentName:"ul"},"Switching between multiple wifi endpoints"))),(0,o.yg)("li",{parentName:"ul"},"Broadcaster\u2019s brief internet interruptions"),(0,o.yg)("li",{parentName:"ul"},"Unexpected issues on the network side")),(0,o.yg)("p",null,"You will be notified through the ",(0,o.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#broadcaststatus"},"BroadcastStatus")," Event once a reconnection takes place.\nPlease read on how to get notified about a reconnect ",(0,o.yg)("a",{parentName:"p",href:"#notice-when-a-reconnect-happens"},"below"),"."),(0,o.yg)("h2",{id:"automatic-reconnection-configuration"},"Automatic Reconnection Configuration"),(0,o.yg)("p",null,"To enable the feature, the ",(0,o.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusersetconfigconfig"},"setConfig()")," API call now provides additional options:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"reconnect.minDelay:")," Minimum amount of seconds to wait before attempting a reconnect after connection loss"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"reconnect.maxDelay:")," Maximum amount of seconds to wait before attempting a reconnect after connection loss"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"reconnect.maxRetries:")," Maximum amount reconnect attempts, setting this to an integer greater than 0 will enable the reconnect feature")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// add reconnection settings to your config\nvar config = {\n  reconnect: {\n    minDelay: 2,\n    maxDelay: 8,\n    maxRetries: 10\n  }\n};\n\nrtcuser.setConfig(config);\n")),(0,o.yg)("h2",{id:"notice-when-a-reconnect-happens"},"Notice when a reconnect happens"),(0,o.yg)("p",null,"A reconnect will be notified through the ",(0,o.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#broadcaststatus"},"BroadcastStatus")," Event."),(0,o.yg)("p",null,"Connection loss (from client to server) is notified with a status of ",(0,o.yg)("strong",{parentName:"p"},"'reconnecting_broadcast'"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"rtcuser.on('BroadcastStatus', function(event) {\n\n  if(event.data && event.data.message === 'reconnecting_broadcast') {\n    console.log('Broadcast is reconnecting');\n  }\n  \n  // the status (event.data.message) will be one of:\n\n  // 'signalling': a connection is being established\n  // 'connected': the stream has connected to the server successfully\n  // 'broadcasting': the broadcast is running\n  // 'reconnecting_broadcast': the client is reconnecting\n  // 'reconnecting': the RTMP connection is reconnecting on server side\n    \n});\n")))}m.isMDXComponent=!0}}]);