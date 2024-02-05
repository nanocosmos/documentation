"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9020],{95788:(e,a,t)=>{t.d(a,{Iu:()=>u,yg:()=>g});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(g,s(s({ref:a},u),{},{components:t})):r.createElement(g,s({ref:a},u))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59176:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(45072),n=(t(11504),t(95788));const o={id:"nanostream_webrtc_input_sources",title:"Input sources",sidebar_label:"Input sources"},s=void 0,i={unversionedId:"webrtc/nanostream_webrtc_input_sources",id:"webrtc/nanostream_webrtc_input_sources",title:"Input sources",description:"The Webcaster Client API offers versatile input options to cater to a wide range of broadcasting needs. This section of the documentation will guide you through setting up various input sources.",source:"@site/docs/webrtc/nanostream_webrtc_input_sources.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_input_sources",permalink:"/docs/webrtc/nanostream_webrtc_input_sources",draft:!1,tags:[],version:"current",lastUpdatedAt:1707150098,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"nanostream_webrtc_input_sources",title:"Input sources",sidebar_label:"Input sources"},sidebar:"nanoStream Webcaster",previous:{title:"Support",permalink:"/docs/webrtc/nanostream_webrtc_support"},next:{title:"Multiple Webcasts",permalink:"/docs/webrtc/nanostream_webrtc_multiple_webcasts"}},c={},l=[{value:"Resources",id:"resources",level:2},{value:"Supported Browsers",id:"supported-browsers",level:2},{value:"Create an input via the Webcaster",id:"create-an-input-via-the-webcaster",level:2},{value:"Manual Setup of Camera and Microphone",id:"manual-setup-of-camera-and-microphone",level:2},{value:"Setup of Screen Sharing",id:"setup-of-screen-sharing",level:2},{value:"Capture from HTML canvas",id:"capture-from-html-canvas",level:2},{value:"General workflow:",id:"general-workflow",level:3},{value:"Restrictions",id:"restrictions",level:3},{value:"Canvas streaming sample",id:"canvas-streaming-sample",level:3}],u={toc:l},p="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(p,(0,r.c)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Webcaster Client API offers versatile input options to cater to a wide range of broadcasting needs. This section of the documentation will guide you through setting up various input sources."),(0,n.yg)("p",null,"Sources can either be physical media devices, screen shares or virtual sources that you can create with Javascript."),(0,n.yg)("p",null,"The interface for creating video and audio input for the Webcaster is the ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices"},"MediaDevices")," interface."),(0,n.yg)("p",null,"We enable two workflows for the creation of input sources:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"you can create an input source by ",(0,n.yg)("a",{parentName:"li",href:"#create-an-input-via-the-webcaster"},"configuring the Webcaster")),(0,n.yg)("li",{parentName:"ul"},"or you can manually create different inputs, for example:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#manual-setup-of-camera-and-microphone"},"camera & microphone")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#setup-of-screen-sharing"},"screen share")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#capture-from-html-canvas"},"capture from HTML canvas"))))),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("p",null,"Please find additional documentation for different topics below:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Access ",(0,n.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},"audio and video devices")),(0,n.yg)("li",{parentName:"ul"},"Capture a ",(0,n.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"},"screen share or an application window")),(0,n.yg)("li",{parentName:"ul"},"Creating a ",(0,n.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream"},"MediaStream from a HTML canvas"))),(0,n.yg)("h2",{id:"supported-browsers"},"Supported Browsers"),(0,n.yg)("p",null,"1) Physical Devices"),(0,n.yg)("p",null,"Cameras and Microphones can be used with all major browsers on desktop and mobile devices.\nHere is a list of supported browsers:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Google Chrome"),(0,n.yg)("li",{parentName:"ul"},"Mozilla Firefox"),(0,n.yg)("li",{parentName:"ul"},"Microsoft Edge Version 79 and later (Chromium-based version)"),(0,n.yg)("li",{parentName:"ul"},"Safari"),(0,n.yg)("li",{parentName:"ul"},"Opera")),(0,n.yg)("p",null,"| Note: Always ensure that you're using up-to-date versions of browsers for optimal performance and security."),(0,n.yg)("p",null,"2) Screen Sharing"),(0,n.yg)("p",null,"Screen Sharing is supported on Desktop browsers only."),(0,n.yg)("h2",{id:"create-an-input-via-the-webcaster"},"Create an input via the Webcaster"),(0,n.yg)("p",null,"The Webcaster can take over the creation of input sources for you.\nIn that case you will simply provide a configuration in the ",(0,n.yg)("inlineCode",{parentName:"p"},"mediaStreamCfg")," property:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n    inputCfg: {\n        mediaStreamCfg: {\n            maxFramerate: 30,\n            resolution: [1280, 720],\n            audioConstraints: {\n                autoGainControl: true,\n                channelCount: 2,\n                echoCancellation: true,\n                noiseSuppression: true\n            },\n        }\n    },\n    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n    streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")),(0,n.yg)("h2",{id:"manual-setup-of-camera-and-microphone"},"Manual Setup of Camera and Microphone"),(0,n.yg)("p",null,"To access and preview the user's camera, you can use the ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},"getUserMedia")," method. Here's a snippet:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });\n\nconst webcaster = new window.WebcasterApiV6.Webcaster({\n    inputCfg: {\n        mediaStream: stream,\n    },\n    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n    streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup();\nawait webcaster.startBroadcast();\n")),(0,n.yg)("h2",{id:"setup-of-screen-sharing"},"Setup of Screen Sharing"),(0,n.yg)("p",null,"To capture a screen share, you can use the ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"},"getDisplayMedia")," method. Here's a snippet:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// First create two MediaStreams and access the regarding MediaStreamTracks\nconst audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });\nconst videoStream = await navigator.mediaDevices.getDisplayMedia({ video: true });\nconst audioTrack = audioStream.getAudioTracks()[0];\nconst videoTrack = videoStream.getVideoTracks()[0];\n// Then construct a new MediaStream from a MediaStreamTrack for video (screen share)\n// and a MediaStreamTrack for audio (microphone).\nconst stream = new MediaStream([audioTrack, videoTrack]);\n\nconst webcaster = new window.WebcasterApiV6.Webcaster({\n    inputCfg: {\n        mediaStream: stream,\n    },\n    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n    streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup();\nawait webcaster.startBroadcast();\n")),(0,n.yg)("h2",{id:"capture-from-html-canvas"},"Capture from HTML canvas"),(0,n.yg)("h3",{id:"general-workflow"},"General workflow:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Acquire different video/image and/or audio sources"),(0,n.yg)("li",{parentName:"ol"},"Mix the sources together into one MediaStream",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Video"),": in a canvas, write your render loop where you mix the sources together via HTML canvas drawing"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Audio"),": optionally add an audio track to the mixed stream"))),(0,n.yg)("li",{parentName:"ol"},"Pass the resulting stream to the webcaster API")),(0,n.yg)("h3",{id:"restrictions"},"Restrictions"),(0,n.yg)("p",null,"When using canvas based streams, application developers are responsible for the rendering.\nPlease take note of the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Maintaining the provided framerate")," is critical for end to end latency of the webcast."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Tab throttling"),". When the current tab gets out of focus, most browsers will enable tab throttling. Timers, like ",(0,n.yg)("inlineCode",{parentName:"li"},"setInterval"),", will be updated less frequently. You should check wether the tab left focus, and warn your users accordingly. E.g. with the DOM ",(0,n.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event"},"visibilitychange event")),(0,n.yg)("li",{parentName:"ul"},"Under certain circumstances the browsers encoder will ",(0,n.yg)("strong",{parentName:"li"},"adapt the video resolution"),", for example when ",(0,n.yg)("strong",{parentName:"li"},"CPU overusage")," is being detected.")),(0,n.yg)("h3",{id:"canvas-streaming-sample"},"Canvas streaming sample"),(0,n.yg)("p",null,"The following snippet demonstrates how to capture a HTML canvas and pass it to the Webcaster."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// Rendering properties\nconst canvasWidth = 1280;\nconst canvasHeight = 720;\nconst framerate = 30;\n\n// Access your HTML canvas (<canvas id=\"my-canvas\"/> element)\nconst canvas = document.getElementById('my-canvas');\nconst context = canvas.getContext('2d');\n\n// Create a MediaStream from the canvas\nconst canvasStream = canvas.captureStream(framerate);\n\n// Optionally, add a AudioStreamTrack to our canvas stream\nconst myAudioStream = await navigator.mediaDevices.getUserMedia({ audio: true });\nconst myAudioTrack = myAudioStream.getAudioTracks()[0];\ncanvasStream.addTrack(myAudioTrack);\n\n// Simple render loop. The function calls itself 30 (framerate) times per second.\n// As an example, we simply draw the string \"Hello World\".\nfunction renderLoop() {\n    context.font = '50px serif';\n    context.fillText('Hello world', 50, 90);\n    setTimeout(loop, 1000 / framerate); // drawing at 30fps\n};\n\n// Start the render loop\nrenderLoop();\n\n// Setup the Webcaster with our manually created stream\nconst webcaster = new window.WebcasterApiV6.Webcaster({\n    inputCfg: {\n        mediaStream: canvasStream\n    },\n    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n    streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup();\nawait webcaster.startBroadcast();\n")))}d.isMDXComponent=!0}}]);