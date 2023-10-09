"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),w=r,b=u["".concat(s,".").concat(w)]||u[w]||m[w]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}w.displayName="MDXCreateElement"},50672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"nanostream_webrtc_introduction",title:"Introduction",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"webrtc/nanostream_webrtc_introduction",id:"webrtc/nanostream_webrtc_introduction",title:"Introduction",description:"How to build a browser-based live streaming workflow with nanoStream Webcaster and nanoStream Cloud?",source:"@site/docs/webrtc/nanostream_webrtc_introduction.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_introduction",permalink:"/docs/webrtc/nanostream_webrtc_introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1696845431,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"nanostream_webrtc_introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"nanoStream Webcaster",next:{title:"Getting started",permalink:"/docs/webrtc/nanostream_webrtc_getting_started"}},s={},c=[{value:"How to build a browser-based live streaming workflow with nanoStream Webcaster and nanoStream Cloud?",id:"how-to-build-a-browser-based-live-streaming-workflow-with-nanostream-webcaster-and-nanostream-cloud",level:2},{value:"Live streaming to large audiences with nanoStream Webcaster",id:"live-streaming-to-large-audiences-with-nanostream-webcaster",level:3},{value:"Using nanoStream Webcaster with nanoStream Cloud",id:"using-nanostream-webcaster-with-nanostream-cloud",level:3},{value:"Integration with existing live streaming environments",id:"integration-with-existing-live-streaming-environments",level:3},{value:"nanoStream Cloud as a low-latency CDN",id:"nanostream-cloud-as-a-low-latency-cdn",level:3},{value:"Advantages of connecting to nanoStream Cloud",id:"advantages-of-connecting-to-nanostream-cloud",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-build-a-browser-based-live-streaming-workflow-with-nanostream-webcaster-and-nanostream-cloud"},"How to build a browser-based live streaming workflow with nanoStream Webcaster and nanoStream Cloud?"),(0,r.kt)("p",null,"We are entering a new live streaming era where ",(0,r.kt)("strong",{parentName:"p"},"browser-based, plugin-free")," and ",(0,r.kt)("strong",{parentName:"p"},"ultra-low latency on any device")," are the key drivers for interactive customer engagement. What\u2019s needed? nanoStream Webcaster (formerly known as WebRTC.live) in combination with nanoStream Cloud!"),(0,r.kt)("h3",{id:"live-streaming-to-large-audiences-with-nanostream-webcaster"},"Live streaming to large audiences with nanoStream Webcaster"),(0,r.kt)("p",null,"Scalability for large audiences is probably the greatest challenge for new audio/video-based interactive use cases. Scaling your live streaming means to have the capability of handling different amounts of work or, in other words, dealing with a large number of viewers that might change on a short period of time. "),(0,r.kt)("p",null,"Doing this completely relying on WebRTC-based workflows is challenging. WebRTC is not designed for live streaming, but rather for peer-to-peer collaboration. For live streaming to larger audiences, you need a service (SaaS, PaaS) to connect your WebRTC client to."),(0,r.kt)("p",null,"That\u2019s when nanoStream Webcaster comes on board. Once connected to nanoStream Cloud, it becomes an end-to-end live streaming solution that easily scales to large audiences around the world, and the best: with ultra-low latency!"),(0,r.kt)("h3",{id:"using-nanostream-webcaster-with-nanostream-cloud"},"Using nanoStream Webcaster with nanoStream Cloud"),(0,r.kt)("p",null,"nanoStream Webcaster will work as a powerful live encoder from the broadcaster/publisher side, ingesting directly into nanoStream Cloud. On the player side, nanoStream Cloud includes ",(0,r.kt)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_introduction"},"nanoStream H5Live Player"),", an unique playback tool that works with no plugins on all HTML5 browsers, including Safari on iOS."),(0,r.kt)("h3",{id:"integration-with-existing-live-streaming-environments"},"Integration with existing live streaming environments"),(0,r.kt)("p",null,"WebRTC.live can be used completely end-to-end with nanoStream Cloud but also integrates well with existing live streaming environments based on RTMP and HLS."),(0,r.kt)("h3",{id:"nanostream-cloud-as-a-low-latency-cdn"},"nanoStream Cloud as a low-latency CDN"),(0,r.kt)("p",null,"You can use nanoStream Cloud as a low-latency CDN to distribute your live streams with low latency to audiences worldwide. We handle the transport for you across our own origin/edge server network."),(0,r.kt)("h3",{id:"advantages-of-connecting-to-nanostream-cloud"},"Advantages of connecting to nanoStream Cloud"),(0,r.kt)("p",null,"nanoStream Cloud including nanoStream H5Live Player is the perfect solution to deliver and playback live streams in a scalable way. It brings together the easiness of a cloud solution with the ability of delivery and playback in ultra-low latency on any device and HTML5 browser, including Safari on iOS. Hence, together with nanoStream Webcaster for live encoding, they set an entire browser-based live streaming workflow."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.nanocosmos.de/blog/wp-content/uploads/2018/02/webrtc-workflow-1024x358.png",alt:"Infographic: Webcaster Workflow"}),"\n",(0,r.kt)("em",{parentName:"p"},"Infographic: Webcaster Workflow")),(0,r.kt)("p",null,"nanoStream Cloud works out of the box; your presenters can instantly go live and share their live stream with anyone in the world, completely plugin-free within the browser."))}m.isMDXComponent=!0}}]);