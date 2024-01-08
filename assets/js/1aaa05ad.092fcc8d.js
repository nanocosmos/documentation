"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"live-recording-vod",title:"Live Recording and VOD",sidebar_label:"Live Recording and VOD"},i=void 0,l={unversionedId:"cloud/live-recording-vod",id:"cloud/live-recording-vod",title:"Live Recording and VOD",description:"Please reach out to our dedicated sales team via the contact form or by sending an email to sales(at)nanocosmos.de",source:"@site/docs/cloud/live-recording-vod.md",sourceDirName:"cloud",slug:"/cloud/live-recording-vod",permalink:"/docs/cloud/live-recording-vod",draft:!1,tags:[],version:"current",lastUpdatedAt:1704708501,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"live-recording-vod",title:"Live Recording and VOD",sidebar_label:"Live Recording and VOD"},sidebar:"nanoStream Cloud",previous:{title:"SRT Ingest",permalink:"/docs/cloud/srt_ingest"},next:{title:"nanoStream Cloud Security",permalink:"/docs/cloud/security"}},c={},s=[],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Live Recording and VOD will require a business upgrade",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please reach out to our dedicated sales team via the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de")),(0,o.kt)("p",null,"If enabled, by default all incoming streams will be recorded for later\nplayback (video on demand, VOD). You can choose to either record the live stream or do a live stream without recording:"),(0,o.kt)("p",null,"Ingest URL without recording, live only - default, if VOD is not enabled for your account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rtmp://bintu-stream.nanocosmos.de/live/STREAM"))),(0,o.kt)("p",null,"Ingest URL with live streaming and recording the incoming upstream for later playback:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rtmp://bintu-stream.nanocosmos.de/rec/STREAM"))),(0,o.kt)("p",null,"The bintu system saves the recording in different world regions,based on their ingest location.\nWe have these regional storages available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-eu-")," Europe and default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-us-")," North America"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-au-")," Australia/Oceania")),(0,o.kt)("p",null,"As an example, if your ingest was in EU, you will get this playback URL:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bintu-vod-eu.nanocosmos.de/XXXXX/XXXXX-12345.mp4"},"https://bintu-vod-eu.nanocosmos.de/XXXXX/XXXXX-12345.mp4")),(0,o.kt)("p",null,"for North America:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bintu-vod-us.nanocosmos.de/XXXXX/XXXXX-12345.mp4"},"https://bintu-vod-us.nanocosmos.de/XXXXX/XXXXX-12345.mp4")),(0,o.kt)("p",null,"for Australia:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bintu-vod-au.nanocosmos.de/XXXXX/XXXXX-12345.mp4"},"https://bintu-vod-au.nanocosmos.de/XXXXX/XXXXX-12345.mp4")),(0,o.kt)("p",null,"Depending on your location, from which you want to access a VOD, you might need to replace your default URL with the region where the VOD was recorded."))}p.isMDXComponent=!0}}]);