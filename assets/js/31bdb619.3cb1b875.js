"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[887],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={id:"getting_started",title:"Getting started - (V2)",sidebar_label:"Getting started"},i=void 0,s={unversionedId:"cloud-frontend/getting_started",id:"cloud-frontend/getting_started",title:"Getting started - (V2)",description:"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams!",source:"@site/docs/cloud-frontend/getting_started.md",sourceDirName:"cloud-frontend",slug:"/cloud-frontend/getting_started",permalink:"/docs/cloud-frontend/getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"getting_started",title:"Getting started - (V2)",sidebar_label:"Getting started"}},l={},c=[{value:"Use nanoStream Cloud",id:"use-nanostream-cloud",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Introductions",id:"introductions",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"We upgraded to V3",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams! ",(0,a.yg)("br",null)),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"Find the documentation of V3 ",(0,a.yg)("a",{parentName:"strong",href:"../cloud-frontend-v3/Dashboard_Overview"},"here"),"."))),(0,a.yg)("p",null,"The nanoStream Cloud/Bintu dashboard is the frontend that mirrors all features and functions of the ",(0,a.yg)("a",{parentName:"p",href:"../cloud/bintu_api"},"bintu API"),", the stream management backend of nanoStream Cloud. "),(0,a.yg)("admonition",{title:"Before starting",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,a.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,a.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,a.yg)("h2",{id:"use-nanostream-cloud"},"Use nanoStream Cloud"),(0,a.yg)("p",null,"It is very easy to get started. You need a live source (camera) which you can connect to the nanoStream Cloud network (CDN). It will take care about the deliver of your live stream.\nThe ",(0,a.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_introduction"},"nanoStream H5Live Player (nanoPlayer)")," can be used to play your live stream on any web browser. "),(0,a.yg)("p",null,"To create and broadcast a live stream, you need a live source.\nThis can be either a webcam, external camera, streaming device, or even your PC desktop or laptop screen.\nTo send a live stream to nanoStream Cloud, you need a Live Encoder. It can either be a software like OBS or a hardware, or simply a web page with ",(0,a.yg)("a",{parentName:"p",href:"../webrtc/nanostream_webrtc_introduction"},"nanoStream Webcaster"),"."),(0,a.yg)("h2",{id:"quick-start"},"Quick Start"),(0,a.yg)("p",null,"If you just need a quick starting guide to kick off your first live stream, click ",(0,a.yg)("a",{parentName:"p",href:"/docs/cloud-frontend/How_to_Start_a_Stream"},"here"),"."),(0,a.yg)("h2",{id:"introductions"},"Introductions"),(0,a.yg)("p",null,"See our introduction videos and tutorials for step-by-step instructions!"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/videos"},"Videos"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/"},"Getting started with the OBS Software"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"How_to_Use_the_nanoStream_Webcaster"},"Getting started with nanoStream Webcaster from the browser")))))}p.isMDXComponent=!0}}]);