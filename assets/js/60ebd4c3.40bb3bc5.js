"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["3796"],{28477:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"webrtc-v5/nanostream_webrtc_set_mediastream","title":"External Streams / Mixing","description":"Since Webcaster version 5.11.0 you can use sources based on HTML5 canvas or other stream sources to enable user-generated live sources, separate to live camera or device screens.","source":"@site/docs/webrtc-v5/nanostream_webrtc_set_mediastream.md","sourceDirName":"webrtc-v5","slug":"/webrtc-v5/nanostream_webrtc_set_mediastream","permalink":"/docs/webrtc-v5/nanostream_webrtc_set_mediastream","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"id":"nanostream_webrtc_set_mediastream","title":"External Streams / Mixing","sidebar_label":"External Streams / Mixing"},"sidebar":"nanoStream Webcaster V5","previous":{"title":"Speech / Music Streaming","permalink":"/docs/webrtc-v5/nanostream_webrtc_speech_music"},"next":{"title":"Stats and Metrics","permalink":"/docs/webrtc-v5/nanostream_webrtc_stats_and_metrics"}}'),a=s("85893"),t=s("50065");let i={id:"nanostream_webrtc_set_mediastream",title:"External Streams / Mixing",sidebar_label:"External Streams / Mixing"},o=void 0,c={},l=[{value:"Use cases",id:"use-cases",level:2},{value:"General workflow",id:"general-workflow",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Resources",id:"resources",level:2},{value:"Samples &amp; Documentation",id:"samples--documentation",level:2},{value:"Online Samples",id:"online-samples",level:3},{value:"Usage Sample",id:"usage-sample",level:3},{value:"HTML canvas as video source",id:"html-canvas-as-video-source",level:4}];function d(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Since Webcaster version 5.11.0 you can use sources based on HTML5 canvas or other stream sources to enable user-generated live sources, separate to live camera or device screens."}),"\n",(0,a.jsxs)(n.p,{children:["To use this feature, a new API call was added, ",(0,a.jsx)(n.a,{href:"./nanostream_webrtc_api#rtcusersetmediastreamconfig",children:"setMediaStream()"}),".\nIt works without using video and audio sources from ",(0,a.jsx)(n.a,{href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig",children:"startPreview()"}),"."]}),"\n",(0,a.jsx)(n.admonition,{title:"camera, microphone or screen share sources",type:"note",children:(0,a.jsxs)(n.p,{children:["If you simply intent to utilize a combination of camera, microphone or screen share sources:\nUse the ",(0,a.jsx)(n.a,{href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig",children:"startPreview()"})," call."]})}),"\n",(0,a.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Mixing of different video sources into one stream\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"PIP (picture in picture)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Mixing of different audio sources together"}),"\n",(0,a.jsx)(n.li,{children:"Preprocessing of video and audio in the browser"}),"\n",(0,a.jsx)(n.li,{children:"Video overlays, eg. rendering animations, drawings, watermarks and logos"}),"\n",(0,a.jsx)(n.li,{children:"HTML5 canvas as a live source"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"general-workflow",children:"General workflow"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Acquire different video/image and/or audio sources"}),"\n",(0,a.jsxs)(n.li,{children:["Mix the sources together into one MediaStream\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Video"}),": in a canvas, write your render loop where you mix the sources together via HTML canvas drawing"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Audio"}),": with the WebAudio API"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Pass the resulting stream to the webcaster API"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"restrictions",children:"Restrictions"}),"\n",(0,a.jsx)(n.p,{children:"When utilizing this API call, application developers are responsible for the externally created stream."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Maintaining the provided framerate"})," is critical for end to end latency of the webcast."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Tab throttling"}),". When the current tab gets out of focus, most browsers will enable tab throttling. Timers, like ",(0,a.jsx)(n.code,{children:"setInterval"}),", will be updated less frequently. You should check wether the tab left focus, and warn your users accordingly. E.g. with the DOM ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event",children:"visibilitychange event"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Video dimensions (width & height)"})," must not change during a webcast."]}),"\n",(0,a.jsxs)(n.li,{children:["Under certain circumstances the browsers encoder will ",(0,a.jsx)(n.strong,{children:"adapt the video resolution"}),", for example when ",(0,a.jsx)(n.strong,{children:"CPU overusage"})," is being detected."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Access ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia",children:"audio and video devices"})]}),"\n",(0,a.jsxs)(n.li,{children:["Capture a screen ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",children:"share or an application window"})]}),"\n",(0,a.jsxs)(n.li,{children:["Creating a ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream",children:"MediaStream from a HTML canvas"})]}),"\n",(0,a.jsxs)(n.li,{children:["Create ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode",children:"MediaStreams with the WebAudio API"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"samples--documentation",children:"Samples & Documentation"}),"\n",(0,a.jsx)(n.h3,{id:"online-samples",children:"Online Samples"}),"\n",(0,a.jsx)(n.admonition,{title:"Before starting",type:"info",children:(0,a.jsxs)(n.p,{children:["To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key ",(0,a.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/organisation",children:"here"}),". ",(0,a.jsx)(n.br,{}),"\nIf you have not created an account yet, you can ",(0,a.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/auth?signup",children:"sign up"})," or reach out to our dedicated sales team via the ",(0,a.jsx)(n.a,{href:"https://www.nanocosmos.de/contact",children:"contact form"})," or by sending an email to sales(at)nanocosmos.de."]})}),"\n",(0,a.jsx)(n.p,{children:"Please see the online samples (replace XXX with your bintu API key):"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Webcast External Mixing Sample"}),": ",(0,a.jsx)(n.a,{href:"https://webrtc.nanocosmos.de/release/webcast_external_mixing_sample.html?bintu.apikey=XXX",children:"https://webrtc.nanocosmos.de/release/webcast_external_mixing_sample.html?bintu.apikey=XXX"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Webcast External Stream"}),": ",(0,a.jsx)(n.a,{href:"https://webrtc.nanocosmos.de/release/webcast_external_stream.html?bintu.apikey=XXX",children:"https://webrtc.nanocosmos.de/release/webcast_external_stream.html?bintu.apikey=XXX"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"usage-sample",children:"Usage Sample"}),"\n",(0,a.jsx)(n.h4,{id:"html-canvas-as-video-source",children:"HTML canvas as video source"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// pass an MediaStream to the API\n// rtcUser: instance of RtcUser\n\nvar canvasWidth = 1280;\nvar canvasHeight = 720;\nvar framerate = 30;\n\n// access your HTML canvas (<canvas id=\"my-canvas\"/> element)\nvar canvas = document.getElementById('my-canvas');\nvar context = canvas.getContext('2d');\n\n// create a MediaStream from the canvas\nvar canvasStream = canvas.captureStream(framerate);\n\n// optionally, add an AudioStreamTrack\nvar myAudioTrack = ...;\ncanvasStream.addTrack(myAudioTrack);\n     *\n// your render loop, the loop calls itself 30 (framerate) times per second\n// as an example, we simply draw the string \"Hello World\"\nfunction renderLoop() {\n    context.font = '50px serif';\n    context.fillText('Hello world', 50, 90);\n    setTimeout(loop, 1000 / framerate); // drawing at 30fps\n };\n     *\nvar config = {\n    stream: canvasStream,\n    width: canvasWidth,\n    height: canvasHeight,\n    framerate: framerate\n};\n\n// start the render loop\nrenderLoop();\n\nrtcUser.setMediaStream(config);\n"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(67294);let a={},t=r.createContext(a);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);