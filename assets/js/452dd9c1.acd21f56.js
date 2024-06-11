"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8649],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>w});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,w=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return t?a.createElement(w,i(i({ref:n},d),{},{components:t})):a.createElement(w,i({ref:n},d))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={id:"nanostream_webrtc_introduction",title:"Introduction",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"webrtc/nanostream_webrtc_introduction",id:"webrtc/nanostream_webrtc_introduction",title:"Introduction",description:"You're looking at the Webcaster Client API version 6, that we launched in 2023.",source:"@site/docs/webrtc/nanostream_webrtc_introduction.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_introduction",permalink:"/docs/webrtc/nanostream_webrtc_introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1718107861,formattedLastUpdatedAt:"Jun 11, 2024",frontMatter:{id:"nanostream_webrtc_introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"nanoStream Webcaster",next:{title:"Getting started",permalink:"/docs/webrtc/nanostream_webrtc_getting_started"}},s={},c=[{value:"Build a browser-based live streaming workflow with nanoStream Webcaster and nanoStream Cloud",id:"build-a-browser-based-live-streaming-workflow-with-nanostream-webcaster-and-nanostream-cloud",level:2},{value:"Live streaming to large audiences with nanoStream Webcaster",id:"live-streaming-to-large-audiences-with-nanostream-webcaster",level:3},{value:"Using nanoStream Webcaster with nanoStream Cloud",id:"using-nanostream-webcaster-with-nanostream-cloud",level:3},{value:"Integration with existing live streaming environments",id:"integration-with-existing-live-streaming-environments",level:3},{value:"nanoStream Cloud as a low-latency CDN",id:"nanostream-cloud-as-a-low-latency-cdn",level:3},{value:"Advantages of connecting to nanoStream Cloud",id:"advantages-of-connecting-to-nanostream-cloud",level:3}],d={toc:c},u="wrapper";function m(e){let{components:n,...o}=e;return(0,r.yg)(u,(0,a.A)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"Version v6",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"You're looking at the Webcaster Client API version 6, that we launched in 2023. ",(0,r.yg)("br",null),"\nIf you're still using version 5, check out our ",(0,r.yg)("a",{parentName:"p",href:"./migration_guide_v6"},"migration guide"),". ",(0,r.yg)("br",null),"\nFollow this link If you still need help with\n",(0,r.yg)("a",{parentName:"p",href:"/docs/webrtc-v5/nanostream_webrtc_introduction"},"nanoStream Webcaster Client API v5"))),(0,r.yg)("h2",{id:"build-a-browser-based-live-streaming-workflow-with-nanostream-webcaster-and-nanostream-cloud"},"Build a browser-based live streaming workflow with nanoStream Webcaster and nanoStream Cloud"),(0,r.yg)("p",null,"We are entering a new live streaming era where ",(0,r.yg)("strong",{parentName:"p"},"browser-based, plugin-free")," and ",(0,r.yg)("strong",{parentName:"p"},"ultra-low latency on any device")," are the key drivers for interactive customer engagement. What\u2019s needed? nanoStream Webcaster (formerly known as WebRTC.live) in combination with nanoStream Cloud!"),(0,r.yg)("h3",{id:"live-streaming-to-large-audiences-with-nanostream-webcaster"},"Live streaming to large audiences with nanoStream Webcaster"),(0,r.yg)("p",null,"Scalability for large audiences is probably the greatest challenge for new audio/video-based interactive use cases. Scaling your live streaming means to have the capability of handling different amounts of work or, in other words, dealing with a large number of viewers that might change on a short period of time."),(0,r.yg)("p",null,"Doing this completely relying on WebRTC-based workflows is challenging. WebRTC is not designed for live streaming, but rather for peer-to-peer collaboration. For live streaming to larger audiences, you need a service (SaaS, PaaS) to connect your WebRTC client to."),(0,r.yg)("p",null,"That\u2019s when nanoStream Webcaster comes on board. Once connected to nanoStream Cloud, it becomes an end-to-end live streaming solution that easily scales to large audiences around the world, and the best: with ultra-low latency!"),(0,r.yg)("h3",{id:"using-nanostream-webcaster-with-nanostream-cloud"},"Using nanoStream Webcaster with nanoStream Cloud"),(0,r.yg)("p",null,"nanoStream Webcaster will work as a powerful live encoder from the broadcaster/publisher side, ingesting directly into nanoStream Cloud. On the player side, nanoStream Cloud includes ",(0,r.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_introduction"},"nanoStream H5Live Player"),", an unique playback tool that works with no plugins on all HTML5 browsers, including Safari on iOS."),(0,r.yg)("h3",{id:"integration-with-existing-live-streaming-environments"},"Integration with existing live streaming environments"),(0,r.yg)("p",null,"WebRTC.live can be used completely end-to-end with nanoStream Cloud but also integrates well with existing live streaming environments based on RTMP and HLS."),(0,r.yg)("h3",{id:"nanostream-cloud-as-a-low-latency-cdn"},"nanoStream Cloud as a low-latency CDN"),(0,r.yg)("p",null," You can use nanoStream Cloud as a low-latency CDN to distribute your live streams with low latency to audiences worldwide. We handle the transport for you across our own origin/edge server network."),(0,r.yg)("h3",{id:"advantages-of-connecting-to-nanostream-cloud"},"Advantages of connecting to nanoStream Cloud"),(0,r.yg)("p",null,"nanoStream Cloud including nanoStream H5Live Player is the perfect solution to deliver and playback live streams in a scalable way. It brings together the easiness of a cloud solution with the ability of delivery and playback in ultra-low latency on any device and HTML5 browser, including Safari on iOS. Hence, together with nanoStream Webcaster for live encoding, they set an entire browser-based live streaming workflow."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Infographic: Webcaster Workflow",src:t(83881).A,width:"1024",height:"358"}),"\n",(0,r.yg)("em",{parentName:"p"},"Infographic: Webcaster Workflow")),(0,r.yg)("p",null,"nanoStream Cloud works out of the box; your presenters can instantly go live and share their live stream with anyone in the world, completely plugin-free within the browser."))}m.isMDXComponent=!0},83881:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/webrtc-workflow-1024x358-dc1b229be486f6ac32ebe7edc7a16fce.png"}}]);