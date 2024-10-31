"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3452],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const o={id:"nanostream_webrtc_reconnect",title:"Automatic Reconnection",sidebar_label:"Automatic Reconnection"},i=void 0,c={unversionedId:"webrtc/nanostream_webrtc_reconnect",id:"webrtc/nanostream_webrtc_reconnect",title:"Automatic Reconnection",description:"Webcaster API includes an automatic reconnection feature, designed to resume broadcasting after unintentional disconnections. This functionality is essential for maintaining a high-quality viewer experience during network instability or changes.",source:"@site/docs/webrtc/nanostream_webrtc_reconnect.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_reconnect",permalink:"/docs/webrtc/nanostream_webrtc_reconnect",draft:!1,tags:[],version:"current",lastUpdatedAt:1730387209,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{id:"nanostream_webrtc_reconnect",title:"Automatic Reconnection",sidebar_label:"Automatic Reconnection"},sidebar:"nanoStream Webcaster",previous:{title:"Speech / Music Streaming",permalink:"/docs/webrtc/nanostream_webrtc_speech_music"},next:{title:"Webcaster",permalink:"/docs/webrtc/nanostream_webrtc_api"}},s={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Notice When a Reconnect Occurs",id:"notice-when-a-reconnect-occurs",level:2}],u={toc:l},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Webcaster API includes an automatic reconnection feature, designed to resume broadcasting after unintentional disconnections. This functionality is essential for maintaining a high-quality viewer experience during network instability or changes."),(0,r.yg)("p",null,"Upon activation, this feature initiates a reconnection attempt under these circumstances:"),(0,r.yg)("p",null,"Network Alteration:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"On mobile platforms, such as during transitions from Wi-Fi to cellular data"),(0,r.yg)("li",{parentName:"ul"},"When moving across different Wi-Fi networks"),(0,r.yg)("li",{parentName:"ul"},"Short-term disruptions in the broadcaster's internet connection"),(0,r.yg)("li",{parentName:"ul"},"Sudden network-related complications")),(0,r.yg)("p",null,"Read how to be notified of a reconnect ",(0,r.yg)("a",{parentName:"p",href:"#notice-when-a-reconnect-occurs"},"below"),"."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"Initiating automatic reconnection involves including the ",(0,r.yg)("strong",{parentName:"p"},"reconnect")," option within the Webcaster configuration object."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"reconnect: true"),": This setting activates automatic reconnection with predetermined configurations:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"{\n  minDelaySec: 2,\n  maxDelaySec: 15,\n  maxRetries: 10\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Custom Configuration"),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"reconnect.minDelaySec"),": Minimum amount of seconds to wait before attempting a reconnect after connection loss. Minimum value: 1."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"reconnect.maxDelaySec"),": Maximum amount of seconds to wait before attempting a reconnect after connection loss. Minimum value: 1."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"reconnect.maxRetries"),": Maximum amount of reconnect attempts. Minimum value: 1.")))),(0,r.yg)("admonition",{title:"Recommended Configuration",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"For effective reconnection execution, it is advised to set the total reconnection delay to exceed 1 minute. This strategy accommodates DNS record Time-To-Live (TTL) adjustments.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n    reconnect: {\n      minDelaySec: 2,\n      maxDelaySec: 15,\n      maxRetries: 10\n    }\n    streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")),(0,r.yg)("h2",{id:"notice-when-a-reconnect-occurs"},"Notice When a Reconnect Occurs"),(0,r.yg)("p",null,"To monitor the status of the reconnection process, the Webcaster API provides an ",(0,r.yg)("inlineCode",{parentName:"p"},"onReconnectionStateChange")," callback, which is invoked with a ",(0,r.yg)("inlineCode",{parentName:"p"},"ReconnectionState")," argument."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"webcaster.onReconnectionStateChange = (newState: ReconnectionState) => {\n  console.log(newState);\n};\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ReconnectionState")," indicates the current state of the reconnection process. Possible values:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"idle"),": The initial state indicating no current activity in the reconnection process."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"reconnecting"),": Connection has failed and a reconnection attempt is underway."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"failed"),": Reconnection process has reached the retry limit and has stopped attempting to reconnect. To start a new broadcast instance, ",(0,r.yg)("inlineCode",{parentName:"li"},"recover")," should be called first.")))}p.isMDXComponent=!0}}]);