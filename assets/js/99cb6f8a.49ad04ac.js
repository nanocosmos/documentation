"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["4330"],{67292:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"webrtc-v5/nanostream_webrtc_getting_started","title":"Getting started","description":"How to use nanoStream Webcaster with nanoStream Cloud?","source":"@site/docs/webrtc-v5/nanostream_webrtc_getting_started.md","sourceDirName":"webrtc-v5","slug":"/webrtc-v5/nanostream_webrtc_getting_started","permalink":"/docs/webrtc-v5/nanostream_webrtc_getting_started","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"id":"nanostream_webrtc_getting_started","title":"Getting started","sidebar_label":"Getting started"},"sidebar":"nanoStream Webcaster V5","previous":{"title":"Introduction","permalink":"/docs/webrtc-v5/nanostream_webrtc_introduction"},"next":{"title":"Browser Demos","permalink":"/docs/webrtc-v5/nanostream_webrtc_demos"}}'),r=t("85893"),i=t("50065");let o={id:"nanostream_webrtc_getting_started",title:"Getting started",sidebar_label:"Getting started"},s=void 0,c={},d=[{value:"How to use nanoStream Webcaster with nanoStream Cloud?",id:"how-to-use-nanostream-webcaster-with-nanostream-cloud",level:2},{value:"Create your own nanoStream Cloud account",id:"create-your-own-nanostream-cloud-account",level:3},{value:"Live Encoding / Webcast with nanoStream Webcaster",id:"live-encoding--webcast-with-nanostream-webcaster",level:2},{value:"nanoStream Webcaster Browser API",id:"nanostream-webcaster-browser-api",level:2},{value:"Hosting Requirements",id:"hosting-requirements",level:3},{value:"Broadcast Sample",id:"broadcast-sample",level:2},{value:"Setup The User Interface &amp; Embed The Library",id:"setup-the-user-interface--embed-the-library",level:3},{value:"Minimal Broadcast Sample",id:"minimal-broadcast-sample",level:3},{value:"Screen Sharing",id:"screen-sharing",level:3},{value:"Streaming only audio or video",id:"streaming-only-audio-or-video",level:3},{value:"nanoStream Cloud End-To-End Workflow",id:"nanostream-cloud-end-to-end-workflow",level:2},{value:"Creating a live stream for broadcasting",id:"creating-a-live-stream-for-broadcasting",level:3},{value:"Creating a stream for bintu.live with bintu.js",id:"creating-a-stream-for-bintulive-with-bintujs",level:3},{value:"Streaming to an RTMP URL",id:"streaming-to-an-rtmp-url",level:4},{value:"Streaming to nanoStream Cloud",id:"streaming-to-nanostream-cloud",level:3},{value:"Stream Status",id:"stream-status",level:3},{value:"Live Playback with H5Live Player and nanoStream Cloud",id:"live-playback-with-h5live-player-and-nanostream-cloud",level:3},{value:"Reporting bugs or issues",id:"reporting-bugs-or-issues",level:2},{value:"Camera / Capture Device Testing",id:"camera--capture-device-testing",level:2}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"how-to-use-nanostream-webcaster-with-nanostream-cloud",children:"How to use nanoStream Webcaster with nanoStream Cloud?"}),"\n",(0,r.jsx)(n.p,{children:"It is very simple to test and use nanoStream Webcaster as your live encoder to nanoStream Cloud with integrated nanoStream H5Live Player. You need a camera connected to your computer or built-in on your device, and a WebRTC-compatible browser. We recommend using Google Chrome."}),"\n",(0,r.jsx)(n.h3,{id:"create-your-own-nanostream-cloud-account",children:"Create your own nanoStream Cloud account"}),"\n",(0,r.jsx)(n.admonition,{title:"Before starting",type:"info",children:(0,r.jsxs)(n.p,{children:["To begin, please sign in to the ",(0,r.jsx)(n.a,{href:"https://dashboard.nanostream.cloud",children:"nanoStream Cloud Dashboard"})," using your nanoStream Cloud/Bintu account credentials. ",(0,r.jsx)(n.br,{}),"\nIf you have not created an account yet, you can ",(0,r.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/auth?signup",children:"sign up"})," or reach out to our dedicated sales team via the ",(0,r.jsx)(n.a,{href:"https://www.nanocosmos.de/contact",children:"contact form"})," or by sending an email to sales(at)nanocosmos.de."]})}),"\n",(0,r.jsx)(n.p,{children:"Once logged in, you can create new streams by calling the bintu API with a valid API key."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"live-encoding--webcast-with-nanostream-webcaster",children:"Live Encoding / Webcast with nanoStream Webcaster"}),"\n",(0,r.jsxs)(n.p,{children:["You can start a Live Encoding/Webcast directly from the browser, plugin-free!\nThis demo page can be used for instant live broadcast from a browser:\n",(0,r.jsx)(n.a,{href:"https://webcaster.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY",children:"https://webcaster.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY"})]}),"\n",(0,r.jsx)(n.admonition,{title:"Your API key",type:"tip",children:(0,r.jsxs)(n.p,{children:["You find your bintu API key on the ",(0,r.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/organisation",children:"organisation overview page"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"nanostream-webcaster-browser-api",children:"nanoStream Webcaster Browser API"}),"\n",(0,r.jsx)(n.p,{children:"The nanoStream Webcaster Browser API is based on a Javascript API connected to the nanoStream WebRTC Server. It can be used for creating your own live video broadcast web page for plugin-free live streaming with WebRTC."}),"\n",(0,r.jsx)(n.admonition,{title:"Developer Starting Point",type:"tip",children:(0,r.jsxs)(n.p,{children:['The sample "webcast_minimal.html" is a good starting point for developers.\n',(0,r.jsx)(n.a,{href:"https://webcaster.nanocosmos.de/release/webcast_minimal.html?bintu.apikey=YOURAPIKEY",children:"https://webcaster.nanocosmos.de/release/webcast_minimal.html?bintu.apikey=YOURAPIKEY"})]})}),"\n",(0,r.jsx)(n.h3,{id:"hosting-requirements",children:"Hosting Requirements"}),"\n",(0,r.jsx)(n.p,{children:"You will need the following requirements to be fulfilled in order to host a WebRTC driven website on your own infrastructure:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["HTTPS: ",(0,r.jsx)(n.strong,{children:"WebRTC client web pages need to be hosted via HTTPS"})," for accessing media devices within the browser and for connecting to the server component. Therefore you will need a valid SSL certificate."]}),"\n",(0,r.jsx)(n.li,{children:"Supported browsers: As of 2018, Chrome, Firefox, Edge and Safari are supported. For mobile platforms we recommend Safari on iOS (min iOS11) and Chrome for Android."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"broadcast-sample",children:"Broadcast Sample"}),"\n",(0,r.jsx)(n.p,{children:"The following sample shows how to initiate a broadcast (one-to-many stream) from a WebRTC enabled HTML5 browser."}),"\n",(0,r.jsxs)(n.p,{children:["The stream is sent to an ",(0,r.jsx)(n.code,{children:"RTMP"})," ingest point which you can get from our bintu.live API.\nPlayback can be done with nanoStream H5Live Player."]}),"\n",(0,r.jsx)(n.p,{children:"Be sure to attach a video device (webcam) to your computer."}),"\n",(0,r.jsxs)(n.p,{children:["You also find a full running ",(0,r.jsx)(n.a,{href:"https://codepen.io/nanocosmos-ol/pen/Xybadx",children:"sample at codepen"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"setup-the-user-interface--embed-the-library",children:"Setup The User Interface & Embed The Library"}),"\n",(0,r.jsx)(n.p,{children:"Within your HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<body>\n  \x3c!-- videoelement to preview your video device (camera) --\x3e\n  <video id="video-local" muted autoplay playsinline style="width:800;height:600"></video>\n\n  \x3c!-- buttons for start/stop of broadcast --\x3e\n  <button id="btn-startbroadcast">broadcast</button>\n  <button id="btn-stopbroadcast">stop broadcast</button>\n	\n  \x3c!-- embed the nanoStream Webcaster library --\x3e\n  \x3c!-- replace "<version>" with the version contained in your package --\x3e\n  <script src="./js/api/webrtc/nano.webrtc.<version>.min.js"><\/script>\n</body>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"minimal-broadcast-sample",children:"Minimal Broadcast Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"<script type=\"text/javascript\">\n  // entry point\n  \n  // create user object\n  var user = new window.nanowebrtc.user();\n  \n  // sign into the cloud\n  user.signIn({\n    server: 'wss://bintu-webrtc.nanocosmos.de/p/webrtcws',\n    // token or bintu API key for authentication\n    token: 'myToken',\n    bintuApiKey: 'myBintuApiKey'\n  });\n    \n  // set bitrate config, 0=default\n  user.setConfig({\n    bitrates: {\n      videoSendInitialBitrate: 500, // initial webrtc bitrate 500 kbits/s\n      videoSendBitrate: 1500 // target webrtc bitrate 1500 kbits/s\n    }\n  );\n\n  // example bintu rtmp url\n  // you should use the bintu api to obtain a valid ingest URL (see below)\n  var myOutputStreamUrl = 'rtmp://bintu-stream.nanocosmos.de/live';\n  var myOutputStreamName = 'P4gSV-12345';\n        \n  // get connected devices\n  user.getDevices();\n        \n  // devices have been gathered\n  user.on('ReceivedDeviceList', function(event) {\n    \n    // available devices will be listed in \"event.data\":\n    var audioDevices = event.data.devices.audiodevices;\n    var videoDevices = event.data.devices.videodevices;\n    \n    // SELECT A/V DEVICES TO PREVIEW \n    // select a device by index from audioDevices/videoDevices,\n    // for simplicity of this sample we select the first device\n    // for audio and video (index = 0) in the next step.\n    // you might need to change this for multiple cams/mics \n \n    // we choose the first video device:\n    var videoDeviceConfig = {\n      device: 0 // first camera\n    };\n          \n    // we choose the first audio device:\n    var audioDeviceConfig = {\n      device: 0 // first microphone\n    };\n    \n    // we start the preview in this html <video> element:\n    var videoElement = 'video-local'; \n      \n    var config = {\n      videoDeviceConfig: videoDeviceConfig,\n      audioDeviceConfig: audioDeviceConfig,\n      elementId: videoElement\n    };\n          \n    // start camera preview\n    user.startPreview(config);\n  });\n\n  // start/stop button handlers\n    \n  document.getElementById('btn-startbroadcast').addEventListener('click', function() {      \n    var broadcastConfig = {\n      transcodingTargets: {\n        output: myOutputStreamUrl,\n        streamname: myOutputStreamName\n      }\n    };\n          \n    // start the broadcast\n    user.startBroadcast(broadcastConfig);\n  });\n    \n  document.getElementById('btn-stopbroadcast').addEventListener('click', function() {\n    // stop the broadcast\n    user.stopBroadcast();\n  });\n\n  // event/error handlers\n \n  user.on('StartPreviewSuccess', function(event) {  \n    console.log('preview succeeded');\n  });\n \n  user.on('StartPreviewError', function(event) {\n    console.log('Error starting preview: ' + event.data.error);\n  });\n\n  user.on('StartBroadcastSuccess', function(event) {\n    // broadcast has started\n  });\n        \n  user.on('StartBroadcastError', function(event) {\n    // handle error\n  });\n<\/script>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"screen-sharing",children:"Screen Sharing"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"./nanostream_webrtc_screen_sharing",children:"Features > Screen Sharing"})}),"\n",(0,r.jsx)(n.h3,{id:"streaming-only-audio-or-video",children:"Streaming only audio or video"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"./nanostream_webrtc_audio_video_only",children:"Features > Audio- / Video-Only"})}),"\n",(0,r.jsx)(n.h2,{id:"nanostream-cloud-end-to-end-workflow",children:"nanoStream Cloud End-To-End Workflow"}),"\n",(0,r.jsx)(n.p,{children:"The following describes a plugin-free end to end streaming solution from the camera to the viewer, with nanostream Webcaster, nanoStream Cloud and nanoStream h5live player."}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-live-stream-for-broadcasting",children:"Creating a live stream for broadcasting"}),"\n",(0,r.jsxs)(n.p,{children:["To create a live stream to broadcast to your audience, you need to obtain an ",(0,r.jsx)(n.code,{children:"RTMP"})," ingest URL from either nanoStream Cloud / bintu.live or your own ",(0,r.jsx)(n.code,{children:"RTMP"})," server."]}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-stream-for-bintulive-with-bintujs",children:"Creating a stream for bintu.live with bintu.js"}),"\n",(0,r.jsx)(n.p,{children:"If you don't already have a stream url you can create a new webrtc enabled stream with our bintu.js which is included in the nanoStream Webcaster Browser API."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"<script src=\"./js/api/bintu/nano.bintu.js\"><\/script>\n\n<script type=\"text/javascript\">\n  var bintu = new Bintu(BintuApiKey, 'https://bintu.nanocosmos.de', true, true);\n\n  var bintuTags = ['newTag, test, webrtc']; // optionally add tags to the stream\n    \n  bintu.createStream(bintuTags, function success(request) {\n    var response = JSON.parse(request.responseText);\n    var ingest = response.ingest;\n    var rtmp = ingest.rtmp;\n    var url = rtmp.url;\n    var streamname = rtmp.streamname;\n    var ingestUrl = url + '/' + streamname;\n  }, function onerror(error) {\n    console.log(error);\n  });\n\n<\/script>\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Bintu docs",type:"tip",children:(0,r.jsxs)(n.p,{children:["You can find the bintu.js documentation ",(0,r.jsx)(n.a,{href:"../cloud/bintu_api",children:"here"})]})}),"\n",(0,r.jsx)(n.admonition,{title:"webcaster set up",type:"tip",children:(0,r.jsxs)(n.p,{children:["For instructions on how to setup the Webcaster for screen sharing please follow this link: ",(0,r.jsx)(n.a,{href:"./nanostream_webrtc_screen_sharing",children:"Features > Screen Sharing"})]})}),"\n",(0,r.jsx)(n.h4,{id:"streaming-to-an-rtmp-url",children:"Streaming to an RTMP URL"}),"\n",(0,r.jsxs)(n.p,{children:["If you have a valid ",(0,r.jsx)(n.code,{children:"RTMP"})," URL, you can use this to create a live broadcast: (see the example above):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// example bintu rtmp url\n// you should use the bintu api to obtain a valid ingest URL\nvar myOutputStreamUrl = 'rtmp://bintu-stream.nanocosmos.de/live/';\nvar myOutputStreamName = 'P4gSV-12345';\n\n// you can also set an rtmp/aac audio bitrate\nvar audioBitrate = 64000 // value is in bits/s!\n\n// for more information on possible additional parameters,\n// check API -> nanoStream Webcaster API\n\nvar broadcastConfig = {\n  transcodingTargets: {\n    output: myOutputStreamUrl,\n    streamname: myOutputStreamName,\n    audiobitrate: audioBitrate\n  }\n};\n \n// start the broadcast\nuser.startBroadcast(broadcastConfig);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"streaming-to-nanostream-cloud",children:"Streaming to nanoStream Cloud"}),"\n",(0,r.jsx)(n.p,{children:"The bintu.live REST API or Dashboard can be used to generate and manage live streams."}),"\n",(0,r.jsx)(n.admonition,{title:"getting started",type:"tip",children:(0,r.jsxs)(n.p,{children:["More information can be found ",(0,r.jsx)(n.a,{href:"../cloud/cloud_getting_started",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"stream-status",children:"Stream Status"}),"\n",(0,r.jsx)(n.p,{children:"The call to"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/stream/<YOUR-STREAM-ID>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["should give you all the info. The ",(0,r.jsx)(n.code,{children:"state"})," value should be ",(0,r.jsx)(n.code,{children:"live"})," when your broadcast is running."]}),"\n",(0,r.jsx)(n.admonition,{title:"bintu developer documentation",type:"tip",children:(0,r.jsxs)(n.p,{children:["You can find the full bintu.live documentation ",(0,r.jsx)(n.a,{href:"https://doc.pages.nanocosmos.de/bintuapi-docs/",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "id":"123456-e7a1-46a6-9572-1037beff926c",\n  "state":"live",\n  "type":"low-latency",\n  "created_at":"2018-10-02T08:53:50.377Z",\n  "webrtc":true,\n  "transcoding":false,\n  "webrtc_server":"https://rtc1.nanocosmos.de/prod",\n  "tags":[\n    "myTag"\n  ],\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"live-playback-with-h5live-player-and-nanostream-cloud",children:"Live Playback with H5Live Player and nanoStream Cloud"}),"\n",(0,r.jsxs)(n.p,{children:["You can play back from our servers with the ",(0,r.jsx)(n.a,{href:"../nanoplayer/nanoplayer_introduction",children:"H5Live Player"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"reporting-bugs-or-issues",children:"Reporting bugs or issues"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"./nanostream_webrtc_support",children:"nanoStream Webcaster > Support"})}),"\n",(0,r.jsx)(n.h2,{id:"camera--capture-device-testing",children:"Camera / Capture Device Testing"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://webrtc.github.io/samples/src/content/devices/input-output/",children:"https://webrtc.github.io/samples/src/content/devices/input-output/"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var a=t(67294);let r={},i=a.createContext(r);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);