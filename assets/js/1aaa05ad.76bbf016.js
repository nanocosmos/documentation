"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3700],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>g});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(45072),o=(t(11504),t(95788));const a={id:"live-recording-vod",title:"Live Recording and VOD",sidebar_label:"Live Recording and VOD"},i=void 0,l={unversionedId:"cloud/live-recording-vod",id:"cloud/live-recording-vod",title:"Live Recording and VOD",description:"Please reach out to our dedicated sales team via the contact form or by sending an email to sales(at)nanocosmos.de",source:"@site/docs/cloud/live-recording-vod.md",sourceDirName:"cloud",slug:"/cloud/live-recording-vod",permalink:"/docs/cloud/live-recording-vod",draft:!1,tags:[],version:"current",lastUpdatedAt:1707150098,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"live-recording-vod",title:"Live Recording and VOD",sidebar_label:"Live Recording and VOD"},sidebar:"nanoStream Cloud",previous:{title:"SRT Ingest",permalink:"/docs/cloud/srt_ingest"},next:{title:"nanoStream Cloud Security",permalink:"/docs/cloud/security"}},c={},s=[],d={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Live Recording and VOD will require a business upgrade",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Please reach out to our dedicated sales team via the ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de")),(0,o.yg)("p",null,"If enabled, by default all incoming streams will be recorded for later\nplayback (video on demand, VOD). You can choose to either record the live stream or do a live stream without recording:"),(0,o.yg)("p",null,"Ingest URL without recording, live only - default, if VOD is not enabled for your account:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"rtmp://bintu-stream.nanocosmos.de/live/STREAM"))),(0,o.yg)("p",null,"Ingest URL with live streaming and recording the incoming upstream for later playback:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"rtmp://bintu-stream.nanocosmos.de/rec/STREAM"))),(0,o.yg)("p",null,"The bintu system saves the recording in different world regions,based on their ingest location.\nWe have these regional storages available:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-eu-")," Europe and default"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-us-")," North America"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-au-")," Australia/Oceania")),(0,o.yg)("p",null,"As an example, if your ingest was in EU, you will get this playback URL:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://bintu-vod-eu.nanocosmos.de/XXXXX/XXXXX-12345.mp4"},"https://bintu-vod-eu.nanocosmos.de/XXXXX/XXXXX-12345.mp4")),(0,o.yg)("p",null,"for North America:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://bintu-vod-us.nanocosmos.de/XXXXX/XXXXX-12345.mp4"},"https://bintu-vod-us.nanocosmos.de/XXXXX/XXXXX-12345.mp4")),(0,o.yg)("p",null,"for Australia:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://bintu-vod-au.nanocosmos.de/XXXXX/XXXXX-12345.mp4"},"https://bintu-vod-au.nanocosmos.de/XXXXX/XXXXX-12345.mp4")),(0,o.yg)("p",null,"Depending on your location, from which you want to access a VOD, you might need to replace your default URL with the region where the VOD was recorded."))}p.isMDXComponent=!0}}]);