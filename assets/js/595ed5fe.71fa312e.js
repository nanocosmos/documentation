"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,b=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"nanostream_webrtc_getting_started",title:"Getting started",sidebar_label:"Getting started"},i=void 0,s={unversionedId:"webrtc/nanostream_webrtc_getting_started",id:"webrtc/nanostream_webrtc_getting_started",title:"Getting started",description:"How to use nanoStream Webcaster with nanoStream Cloud?",source:"@site/docs/webrtc/nanostream_webrtc_getting_started.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_getting_started",permalink:"/docs/webrtc/nanostream_webrtc_getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"nanostream_webrtc_getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"nanoStream Webcaster",previous:{title:"Introduction",permalink:"/docs/webrtc/nanostream_webrtc_introduction"},next:{title:"Browser Demos",permalink:"/docs/webrtc/nanostream_webrtc_demos"}},l={},c=[{value:"How to use nanoStream Webcaster with nanoStream Cloud?",id:"how-to-use-nanostream-webcaster-with-nanostream-cloud",level:2},{value:"Create your own nanoStream Cloud account",id:"create-your-own-nanostream-cloud-account",level:3},{value:"Live Encoding / Webcast with nanoStream Webcaster",id:"live-encoding--webcast-with-nanostream-webcaster",level:2},{value:"nanoStream Webcaster Browser API",id:"nanostream-webcaster-browser-api",level:2},{value:"Hosting Requirements",id:"hosting-requirements",level:3},{value:"Broadcast Sample",id:"broadcast-sample",level:2},{value:"Setup The User Interface &amp; Embed The Library",id:"setup-the-user-interface--embed-the-library",level:3},{value:"Minimal Broadcast Sample",id:"minimal-broadcast-sample",level:3},{value:"Screen Sharing",id:"screen-sharing",level:3},{value:"Streaming only audio or video",id:"streaming-only-audio-or-video",level:3},{value:"nanoStream Cloud End-To-End Workflow",id:"nanostream-cloud-end-to-end-workflow",level:2},{value:"Creating a live stream for broadcasting",id:"creating-a-live-stream-for-broadcasting",level:3},{value:"Creating a stream for bintu.live with bintu.js",id:"creating-a-stream-for-bintulive-with-bintujs",level:3},{value:"Streaming to an RTMP URL",id:"streaming-to-an-rtmp-url",level:4},{value:"Streaming to nanoStream Cloud",id:"streaming-to-nanostream-cloud",level:3},{value:"Stream Status",id:"stream-status",level:3},{value:"Live Playback with H5Live Player and nanoStream Cloud",id:"live-playback-with-h5live-player-and-nanostream-cloud",level:3},{value:"Reporting bugs or issues",id:"reporting-bugs-or-issues",level:2},{value:"Camera / Capture Device Testing",id:"camera--capture-device-testing",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-use-nanostream-webcaster-with-nanostream-cloud"},"How to use nanoStream Webcaster with nanoStream Cloud?"),(0,r.kt)("p",null,"It is very simple to test and use nanoStream Webcaster as your live encoder to nanoStream Cloud with integrated nanoStream H5Live Player. You need a camera connected to your computer or built-in on your device, and a WebRTC-compatible browser. We recommend using Google Chrome."),(0,r.kt)("h3",{id:"create-your-own-nanostream-cloud-account"},"Create your own nanoStream Cloud account"),(0,r.kt)("admonition",{title:"Before starting",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To begin, please sign in to the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud"},"nanoStream Cloud Dashboard")," using your nanoStream Cloud/Bintu account credentials. ",(0,r.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.kt)("p",null,"Once logged in, you can create new streams by calling the bintu API with a valid API key."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"live-encoding--webcast-with-nanostream-webcaster"},"Live Encoding / Webcast with nanoStream Webcaster"),(0,r.kt)("p",null,"You can start a Live Encoding/Webcast directly from the browser, plugin-free!\nThis demo page can be used for instant live broadcast from a browser:\n",(0,r.kt)("a",{parentName:"p",href:"https://webcaster.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY"},"https://webcaster.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY")),(0,r.kt)("admonition",{title:"Your API key",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You find your bintu API key on the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"organisation overview page"),".")),(0,r.kt)("h2",{id:"nanostream-webcaster-browser-api"},"nanoStream Webcaster Browser API"),(0,r.kt)("p",null,"The nanoStream Webcaster Browser API is based on a Javascript API connected to the nanoStream WebRTC Server. It can be used for creating your own live video broadcast web page for plugin-free live streaming with WebRTC."),(0,r.kt)("admonition",{title:"Developer Starting Point",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'The sample "webcast_minimal.html" is a good starting point for developers.\n',(0,r.kt)("a",{parentName:"p",href:"https://webcaster.nanocosmos.de/release/webcast_minimal.html?bintu.apikey=YOURAPIKEY"},"https://webcaster.nanocosmos.de/release/webcast_minimal.html?bintu.apikey=YOURAPIKEY"))),(0,r.kt)("h3",{id:"hosting-requirements"},"Hosting Requirements"),(0,r.kt)("p",null,"You will need the following requirements to be fulfilled in order to host a WebRTC driven website on your own infrastructure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTPS: ",(0,r.kt)("strong",{parentName:"li"},"WebRTC client web pages need to be hosted via HTTPS")," for accessing media devices within the browser and for connecting to the server component. Therefore you will need a valid SSL certificate."),(0,r.kt)("li",{parentName:"ul"},"Supported browsers: As of 2018, Chrome, Firefox, Edge and Safari are supported. For mobile platforms we recommend Safari on iOS (min iOS11) and Chrome for Android. ")),(0,r.kt)("h2",{id:"broadcast-sample"},"Broadcast Sample"),(0,r.kt)("p",null,"The following sample shows how to initiate a broadcast (one-to-many stream) from a WebRTC enabled HTML5 browser."),(0,r.kt)("p",null,"The stream is sent to an ",(0,r.kt)("inlineCode",{parentName:"p"},"RTMP")," ingest point which you can get from our bintu.live API.\nPlayback can be done with nanoStream H5Live Player."),(0,r.kt)("p",null,"Be sure to attach a video device (webcam) to your computer."),(0,r.kt)("p",null,"You also find a full running ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/nanocosmos-ol/pen/Xybadx"},"sample at codepen"),"."),(0,r.kt)("h3",{id:"setup-the-user-interface--embed-the-library"},"Setup The User Interface & Embed The Library"),(0,r.kt)("p",null,"Within your HTML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  \x3c!-- videoelement to preview your video device (camera) --\x3e\n  <video id="video-local" muted autoplay playsinline style="width:800;height:600"></video>\n\n  \x3c!-- buttons for start/stop of broadcast --\x3e\n  <button id="btn-startbroadcast">broadcast</button>\n  <button id="btn-stopbroadcast">stop broadcast</button>\n    \n  \x3c!-- embed the nanoStream Webcaster library --\x3e\n  \x3c!-- replace "<version>" with the version contained in your package --\x3e\n  <script src="./js/api/webrtc/nano.webrtc.<version>.min.js"><\/script>\n</body>\n')),(0,r.kt)("h3",{id:"minimal-broadcast-sample"},"Minimal Broadcast Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<script type=\"text/javascript\">\n  // entry point\n  \n  // create user object\n  var user = new window.nanowebrtc.user();\n  \n  // sign into the cloud\n  user.signIn({\n    server: 'wss://bintu-webrtc.nanocosmos.de/p/webrtcws',\n    // token or bintu API key for authentication\n    token: 'myToken',\n    bintuApiKey: 'myBintuApiKey'\n  });\n    \n  // set bitrate config, 0=default\n  user.setConfig({\n    bitrates: {\n      videoSendInitialBitrate: 500, // initial webrtc bitrate 500 kbits/s\n      videoSendBitrate: 1500 // target webrtc bitrate 1500 kbits/s\n    }\n  );\n\n  // example bintu rtmp url\n  // you should use the bintu api to obtain a valid ingest URL (see below)\n  var myOutputStreamUrl = 'rtmp://bintu-stream.nanocosmos.de/live';\n  var myOutputStreamName = 'P4gSV-12345';\n        \n  // get connected devices\n  user.getDevices();\n        \n  // devices have been gathered\n  user.on('ReceivedDeviceList', function(event) {\n    \n    // available devices will be listed in \"event.data\":\n    var audioDevices = event.data.devices.audiodevices;\n    var videoDevices = event.data.devices.videodevices;\n    \n    // SELECT A/V DEVICES TO PREVIEW \n    // select a device by index from audioDevices/videoDevices,\n    // for simplicity of this sample we select the first device\n    // for audio and video (index = 0) in the next step.\n    // you might need to change this for multiple cams/mics \n \n    // we choose the first video device:\n    var videoDeviceConfig = {\n      device: 0 // first camera\n    };\n          \n    // we choose the first audio device:\n    var audioDeviceConfig = {\n      device: 0 // first microphone\n    };\n    \n    // we start the preview in this html <video> element:\n    var videoElement = 'video-local'; \n      \n    var config = {\n      videoDeviceConfig: videoDeviceConfig,\n      audioDeviceConfig: audioDeviceConfig,\n      elementId: videoElement\n    };\n          \n    // start camera preview\n    user.startPreview(config);\n  });\n\n  // start/stop button handlers\n    \n  document.getElementById('btn-startbroadcast').addEventListener('click', function() {      \n    var broadcastConfig = {\n      transcodingTargets: {\n        output: myOutputStreamUrl,\n        streamname: myOutputStreamName\n      }\n    };\n          \n    // start the broadcast\n    user.startBroadcast(broadcastConfig);\n  });\n    \n  document.getElementById('btn-stopbroadcast').addEventListener('click', function() {\n    // stop the broadcast\n    user.stopBroadcast();\n  });\n\n  // event/error handlers\n \n  user.on('StartPreviewSuccess', function(event) {  \n    console.log('preview succeeded');\n  });\n \n  user.on('StartPreviewError', function(event) {\n    console.log('Error starting preview: ' + event.data.error);\n  });\n\n  user.on('StartBroadcastSuccess', function(event) {\n    // broadcast has started\n  });\n        \n  user.on('StartBroadcastError', function(event) {\n    // handle error\n  });\n<\/script>\n")),(0,r.kt)("h3",{id:"screen-sharing"},"Screen Sharing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./nanostream_webrtc_screen_sharing"},"Features > Screen Sharing")),(0,r.kt)("h3",{id:"streaming-only-audio-or-video"},"Streaming only audio or video"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./nanostream_webrtc_audio_video_only"},"Features > Audio- / Video-Only")),(0,r.kt)("h2",{id:"nanostream-cloud-end-to-end-workflow"},"nanoStream Cloud End-To-End Workflow"),(0,r.kt)("p",null,"The following describes a plugin-free end to end streaming solution from the camera to the viewer, with nanostream Webcaster, nanoStream Cloud and nanoStream h5live player."),(0,r.kt)("h3",{id:"creating-a-live-stream-for-broadcasting"},"Creating a live stream for broadcasting"),(0,r.kt)("p",null,"To create a live stream to broadcast to your audience, you need to obtain an ",(0,r.kt)("inlineCode",{parentName:"p"},"RTMP")," ingest URL from either nanoStream Cloud / bintu.live or your own ",(0,r.kt)("inlineCode",{parentName:"p"},"RTMP")," server."),(0,r.kt)("h3",{id:"creating-a-stream-for-bintulive-with-bintujs"},"Creating a stream for bintu.live with bintu.js"),(0,r.kt)("p",null,"If you don't already have a stream url you can create a new webrtc enabled stream with our bintu.js which is included in the nanoStream Webcaster Browser API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<script src=\"./js/api/bintu/nano.bintu.js\"><\/script>\n\n<script type=\"text/javascript\">\n  var bintu = new Bintu(BintuApiKey, 'https://bintu.nanocosmos.de', true, true);\n\n  var bintuTags = ['newTag, test, webrtc']; // optionally add tags to the stream\n    \n  bintu.createStream(bintuTags, function success(request) {\n    var response = JSON.parse(request.responseText);\n    var ingest = response.ingest;\n    var rtmp = ingest.rtmp;\n    var url = rtmp.url;\n    var streamname = rtmp.streamname;\n    var ingestUrl = url + '/' + streamname;\n  }, function onerror(error) {\n    console.log(error);\n  });\n\n<\/script>\n")),(0,r.kt)("admonition",{title:"Bintu docs",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find the bintu.js documentation ",(0,r.kt)("a",{parentName:"p",href:"../cloud/bintu_api"},"here"))),(0,r.kt)("admonition",{title:"webcaster set up",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For instructions on how to setup the Webcaster for screen sharing please follow this link: ",(0,r.kt)("a",{parentName:"p",href:"./nanostream_webrtc_screen_sharing"},"Features > Screen Sharing"))),(0,r.kt)("h4",{id:"streaming-to-an-rtmp-url"},"Streaming to an RTMP URL"),(0,r.kt)("p",null,"If you have a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"RTMP")," URL, you can use this to create a live broadcast: (see the example above):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// example bintu rtmp url\n// you should use the bintu api to obtain a valid ingest URL\nvar myOutputStreamUrl = 'rtmp://bintu-stream.nanocosmos.de/live/';\nvar myOutputStreamName = 'P4gSV-12345';\n\n// you can also set an rtmp/aac audio bitrate\nvar audioBitrate = 64000 // value is in bits/s!\n\n// for more information on possible additional parameters,\n// check API -> nanoStream Webcaster API\n\nvar broadcastConfig = {\n  transcodingTargets: {\n    output: myOutputStreamUrl,\n    streamname: myOutputStreamName,\n    audiobitrate: audioBitrate\n  }\n};\n \n// start the broadcast\nuser.startBroadcast(broadcastConfig);\n")),(0,r.kt)("h3",{id:"streaming-to-nanostream-cloud"},"Streaming to nanoStream Cloud"),(0,r.kt)("p",null,"The bintu.live REST API or Dashboard can be used to generate and manage live streams."),(0,r.kt)("admonition",{title:"getting started",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More information can be found ",(0,r.kt)("a",{parentName:"p",href:"../cloud/cloud_getting_started"},"here"),".")),(0,r.kt)("h3",{id:"stream-status"},"Stream Status"),(0,r.kt)("p",null,"The call to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/stream/<YOUR-STREAM-ID>\n")),(0,r.kt)("p",null,"should give you all the info. The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," value should be ",(0,r.kt)("inlineCode",{parentName:"p"},"live")," when your broadcast is running."),(0,r.kt)("admonition",{title:"bintu developer documentation",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find the full bintu.live documentation ",(0,r.kt)("a",{parentName:"p",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/"},"here"),".")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"123456-e7a1-46a6-9572-1037beff926c",\n  "state":"live",\n  "type":"low-latency",\n  "created_at":"2018-10-02T08:53:50.377Z",\n  "webrtc":true,\n  "transcoding":false,\n  "webrtc_server":"https://rtc1.nanocosmos.de/prod",\n  "tags":[\n    "myTag"\n  ],\n}\n')),(0,r.kt)("h3",{id:"live-playback-with-h5live-player-and-nanostream-cloud"},"Live Playback with H5Live Player and nanoStream Cloud"),(0,r.kt)("p",null,"You can play back from our servers with the ",(0,r.kt)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_introduction"},"H5Live Player"),"."),(0,r.kt)("h2",{id:"reporting-bugs-or-issues"},"Reporting bugs or issues"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./nanostream_webrtc_support"},"nanoStream Webcaster > Support")),(0,r.kt)("h2",{id:"camera--capture-device-testing"},"Camera / Capture Device Testing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webrtc.github.io/samples/src/content/devices/input-output/"},"https://webrtc.github.io/samples/src/content/devices/input-output/")))}m.isMDXComponent=!0}}]);