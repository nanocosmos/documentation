"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?r.createElement(h,s(s({ref:t},m),{},{components:a})):r.createElement(h,s({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62304:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"nanostream_webrtc_set_mediastream",title:"External Streams / Mixing",sidebar_label:"External Streams / Mixing"},s=void 0,i={unversionedId:"webrtc/nanostream_webrtc_set_mediastream",id:"webrtc/nanostream_webrtc_set_mediastream",title:"External Streams / Mixing",description:"Since Webcaster version 5.11.0 you can use sources based on HTML5 canvas or other stream sources to enable user-generated live sources, separate to live camera or device screens.",source:"@site/docs/webrtc/nanostream_webrtc_set_mediastream.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_set_mediastream",permalink:"/docs/webrtc/nanostream_webrtc_set_mediastream",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"nanostream_webrtc_set_mediastream",title:"External Streams / Mixing",sidebar_label:"External Streams / Mixing"},sidebar:"nanoStream Webcaster",previous:{title:"Speech / Music Streaming",permalink:"/docs/webrtc/nanostream_webrtc_speech_music"},next:{title:"Stats and Metrics",permalink:"/docs/webrtc/nanostream_webrtc_stats_and_metrics"}},l={},c=[{value:"Use cases",id:"use-cases",level:2},{value:"General workflow",id:"general-workflow",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Resources",id:"resources",level:2},{value:"Samples &amp; Documentation",id:"samples--documentation",level:2},{value:"Online Samples",id:"online-samples",level:3},{value:"Usage Sample",id:"usage-sample",level:3},{value:"HTML canvas as video source",id:"html-canvas-as-video-source",level:4}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Since Webcaster version 5.11.0 you can use sources based on HTML5 canvas or other stream sources to enable user-generated live sources, separate to live camera or device screens."),(0,n.kt)("p",null,"To use this feature, a new API call was added, ",(0,n.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusersetmediastreamconfig"},"setMediaStream()"),".\nIt works without using video and audio sources from ",(0,n.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig"},"startPreview()"),"."),(0,n.kt)("admonition",{title:"camera, microphone or screen share sources",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you simply intent to utilize a combination of camera, microphone or screen share sources:\nUse the ",(0,n.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig"},"startPreview()")," call.")),(0,n.kt)("h2",{id:"use-cases"},"Use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mixing of different video sources into one stream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PIP (picture in picture)"))),(0,n.kt)("li",{parentName:"ul"},"Mixing of different audio sources together"),(0,n.kt)("li",{parentName:"ul"},"Preprocessing of video and audio in the browser"),(0,n.kt)("li",{parentName:"ul"},"Video overlays, eg. rendering animations, drawings, watermarks and logos"),(0,n.kt)("li",{parentName:"ul"},"HTML5 canvas as a live source")),(0,n.kt)("h2",{id:"general-workflow"},"General workflow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Acquire different video/image and/or audio sources"),(0,n.kt)("li",{parentName:"ol"},"Mix the sources together into one MediaStream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Video"),": in a canvas, write your render loop where you mix the sources together via HTML canvas drawing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Audio"),": with the WebAudio API"))),(0,n.kt)("li",{parentName:"ol"},"Pass the resulting stream to the webcaster API")),(0,n.kt)("h2",{id:"restrictions"},"Restrictions"),(0,n.kt)("p",null,"When utilizing this API call, application developers are responsible for the externally created stream."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maintaining the provided framerate")," is critical for end to end latency of the webcast."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tab throttling"),". When the current tab gets out of focus, most browsers will enable tab throttling. Timers, like ",(0,n.kt)("inlineCode",{parentName:"li"},"setInterval"),", will be updated less frequently. You should check wether the tab left focus, and warn your users accordingly. E.g. with the DOM ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event"},"visibilitychange event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Video dimensions (width & height)")," must not change during a webcast."),(0,n.kt)("li",{parentName:"ul"},"Under certain circumstances the browsers encoder will ",(0,n.kt)("strong",{parentName:"li"},"adapt the video resolution"),", for example when ",(0,n.kt)("strong",{parentName:"li"},"CPU overusage")," is being detected.")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},"audio and video devices")),(0,n.kt)("li",{parentName:"ul"},"Capture a screen ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"},"share or an application window")),(0,n.kt)("li",{parentName:"ul"},"Creating a ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream"},"MediaStream from a HTML canvas")),(0,n.kt)("li",{parentName:"ul"},"Create ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode"},"MediaStreams with the WebAudio API"))),(0,n.kt)("h2",{id:"samples--documentation"},"Samples & Documentation"),(0,n.kt)("h3",{id:"online-samples"},"Online Samples"),(0,n.kt)("admonition",{title:"Before starting",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"here"),". ",(0,n.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,n.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,n.kt)("p",null,"Please see the online samples (replace XXX with your bintu API key):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Webcast External Mixing Sample"),": ",(0,n.kt)("a",{parentName:"li",href:"https://webrtc.nanocosmos.de/release/webcast_external_mixing_sample.html?bintu.apikey=XXX"},"https://webrtc.nanocosmos.de/release/webcast_external_mixing_sample.html?bintu.apikey=XXX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Webcast External Stream"),": ",(0,n.kt)("a",{parentName:"li",href:"https://webrtc.nanocosmos.de/release/webcast_external_stream.html?bintu.apikey=XXX"},"https://webrtc.nanocosmos.de/release/webcast_external_stream.html?bintu.apikey=XXX"))),(0,n.kt)("h3",{id:"usage-sample"},"Usage Sample"),(0,n.kt)("h4",{id:"html-canvas-as-video-source"},"HTML canvas as video source"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// pass an MediaStream to the API\n// rtcUser: instance of RtcUser\n\nvar canvasWidth = 1280;\nvar canvasHeight = 720;\nvar framerate = 30;\n\n// access your HTML canvas (<canvas id=\"my-canvas\"/> element)\nvar canvas = document.getElementById('my-canvas');\nvar context = canvas.getContext('2d');\n\n// create a MediaStream from the canvas\nvar canvasStream = canvas.captureStream(framerate);\n\n// optionally, add an AudioStreamTrack\nvar myAudioTrack = ...;\ncanvasStream.addTrack(myAudioTrack);\n     *\n// your render loop, the loop calls itself 30 (framerate) times per second\n// as an example, we simply draw the string \"Hello World\"\nfunction renderLoop() {\n    context.font = '50px serif';\n    context.fillText('Hello world', 50, 90);\n    setTimeout(loop, 1000 / framerate); // drawing at 30fps\n };\n     *\nvar config = {\n    stream: canvasStream,\n    width: canvasWidth,\n    height: canvasHeight,\n    framerate: framerate\n};\n\n// start the render loop\nrenderLoop();\n\nrtcUser.setMediaStream(config);\n")))}u.isMDXComponent=!0}}]);