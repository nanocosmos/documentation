"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={id:"nanostream_webrtc_demos",title:"Browser demos",sidebar_label:"Browser Demos"},s=void 0,i={unversionedId:"webrtc/nanostream_webrtc_demos",id:"webrtc/nanostream_webrtc_demos",title:"Browser demos",description:"Webcaster Demos Overview",source:"@site/docs/webrtc/nanostream_webrtc_demos.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_demos",permalink:"/docs/webrtc/nanostream_webrtc_demos",draft:!1,tags:[],version:"current",lastUpdatedAt:1702554316,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{id:"nanostream_webrtc_demos",title:"Browser demos",sidebar_label:"Browser Demos"},sidebar:"nanoStream Webcaster",previous:{title:"Getting started",permalink:"/docs/webrtc/nanostream_webrtc_getting_started"},next:{title:"Support",permalink:"/docs/webrtc/nanostream_webrtc_support"}},l={},m=[{value:"Webcaster Demos Overview",id:"webcaster-demos-overview",level:2},{value:"Before You Start",id:"before-you-start",level:2},{value:"Webcaster Samples",id:"webcaster-samples",level:2},{value:"Usage",id:"usage",level:3},{value:"Playback",id:"playback",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"webcaster-demos-overview"},"Webcaster Demos Overview"),(0,n.kt)("p",null,"Below you can find links to our Webcaster demo applications.\nThese samples are designed to showcase the broad capabilities of our Webcaster technology, providing you with practical experience and insight into its features. Explore our sample code to see how nanoStream Webcaster can enhance your webcasting projects."),(0,n.kt)("p",null,"To fully utilize these samples, please ensure you have a bintu account. Create a stream in the bintu frontend, and then append the stream name to the sample pages' URLs using the ",(0,n.kt)("inlineCode",{parentName:"p"},"streamName")," URL parameter."),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("admonition",{title:"Before starting",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To begin testing our samples, please sign in to your nanoStream Cloud/Bintu account and create a new stream here ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/stream/create"},"here"),". ",(0,n.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,n.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email  ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@nanocosmos.net"},"sales@nanocosmos.net"))),(0,n.kt)("h2",{id:"webcaster-samples"},"Webcaster Samples"),(0,n.kt)("p",null,"Append your stream name to one of the following samples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main Sample: ",(0,n.kt)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/samples/index.html?streamName=%5Bstream-name%5D"},"https://nanocosmos.github.io/webcaster/samples/index.html?streamName=[stream-name]")),(0,n.kt)("li",{parentName:"ul"},"Minimal Sample: ",(0,n.kt)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/samples/minimal/index.html?streamName=%5Bstream-name%5D"},"https://nanocosmos.github.io/webcaster/samples/minimal/index.html?streamName=[stream-name]")),(0,n.kt)("li",{parentName:"ul"},"Screen Share: ",(0,n.kt)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/samples/screenshare/index.html?streamName=%5Bstream-name%5D"},"https://nanocosmos.github.io/webcaster/samples/screenshare/index.html?streamName=[stream-name]"))),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The main sample showcases the lifecyle of the Webcaster, you can perform the following actions there:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"append your bintu stream name to one of the URLs"),(0,n.kt)("li",{parentName:"ul"},"configure stream properties in the editor ",(0,n.kt)("inlineCode",{parentName:"li"},"WebcasterApiV6.Config")),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create New Instance")," to create a new Webcaster instance with your configuration"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"startPreview")," to preview the MediaStream that will be streamed to our CDN "),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"startBroadcast")," to start the ingest"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"stopBroadcast")," to stop the ingest"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"recover")," to restart the webcast with the same configuration"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"dispose")," to destroy the Webcaster instance"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"setMuted")," to mute the ingest")),(0,n.kt)("h2",{id:"playback"},"Playback"),(0,n.kt)("p",null,"You can play back your Webcaster ingests with our H5LivePlayer."),(0,n.kt)("p",null,"The main sample from above includes a side-by-side player for your convencience when testing.\nTo create a shareable player link, append the stream name to our player demo URL:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"player url: ",(0,n.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=%5Bstream-name%5D"},"https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=[stream-name]"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Click ",(0,n.kt)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_getting_started"},"here")," for more information on  how to embed the H5LivePlayer on your own webpage.")))}u.isMDXComponent=!0}}]);