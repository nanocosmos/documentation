"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[2083],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>v});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,v=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(v,s(s({ref:t},u),{},{components:n})):r.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={id:"nanostream_webrtc_multiple_webcasts",title:"Multiple Webcasts",sidebar_label:"Multiple Webcasts"},s=void 0,c={unversionedId:"webrtc-v5/nanostream_webrtc_multiple_webcasts",id:"webrtc-v5/nanostream_webrtc_multiple_webcasts",title:"Multiple Webcasts",description:"Multiple Webcasts can be started from a single browser tab.",source:"@site/docs/webrtc-v5/nanostream_webrtc_multiple_webcasts.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_multiple_webcasts",permalink:"/docs/webrtc-v5/nanostream_webrtc_multiple_webcasts",draft:!1,tags:[],version:"current",lastUpdatedAt:1711640284,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"nanostream_webrtc_multiple_webcasts",title:"Multiple Webcasts",sidebar_label:"Multiple Webcasts"},sidebar:"nanoStream Webcaster V5",previous:{title:"Screen Sharing",permalink:"/docs/webrtc-v5/nanostream_webrtc_screen_sharing"},next:{title:"Quality Settings",permalink:"/docs/webrtc-v5/nanostream_webrtc_quality"}},o={},l=[{value:"Setup Multiple Webcasts",id:"setup-multiple-webcasts",level:2},{value:"Example: Camera &amp; Screen Share",id:"example-camera--screen-share",level:2},{value:"1. Create API instances",id:"1-create-api-instances",level:3},{value:"2. Starting the previews",id:"2-starting-the-previews",level:3},{value:"3. Start both workflows",id:"3-start-both-workflows",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Multiple Webcasts can be started from a single browser tab. ",(0,a.yg)("br",null),"\nUse cases can be:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"broadcast multiple camera (and/or microphone) streams at once"),(0,a.yg)("li",{parentName:"ul"},"broadcast a camera and a screen share stream"),(0,a.yg)("li",{parentName:"ul"},"broadcast multiple audio streams")),(0,a.yg)("h2",{id:"setup-multiple-webcasts"},"Setup Multiple Webcasts"),(0,a.yg)("p",null,"In order to set up multiple Webcasts you will have to create multiple instances of\nthe Webcaster API in your code. Depending on what sources you want to use for streaming,\nyou will set up those instances differently."),(0,a.yg)("h2",{id:"example-camera--screen-share"},"Example: Camera & Screen Share"),(0,a.yg)("admonition",{title:"What we will do in this example",type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"create two instances of the API"),(0,a.yg)("li",{parentName:"ul"},"register required event handlers"),(0,a.yg)("li",{parentName:"ul"},"start two previews, one for camera, one for screen share"),(0,a.yg)("li",{parentName:"ul"},"start each Webcast, once the regarding preview has succeeded"))),(0,a.yg)("h3",{id:"1-create-api-instances"},"1. Create API instances"),(0,a.yg)("p",null,"Create two instances of the API, one for camera, one for screen share."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// we will broadcast a camera with the first instance\nvar camUser = new window.nanowebrtc.user();\n\n// we will broadcast a screen share with the second instance\nvar screenUser = new window.nanowebrtc.user();\n")),(0,a.yg)("h3",{id:"2-starting-the-previews"},"2. Starting the previews"),(0,a.yg)("p",null,"We have to start the previews after the device lists have been emitted.\nTherefore, we start the previews within ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#receiveddevicelist"},"ReceivedDeviceList")," event listeners for both API instances.\nRequesting devices will be done in the next step."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"camUser.on('ReceivedDeviceList', function(event) {\n  // we received the device list, now we start a preview of the first camera in the list\n  var cameraConfig = {\n    source: 'camera',  \n    device: 0,\n    width: 1280,\n    height: 720,\n    framerate: 30\n  };\n\n  var audioDeviceConfig = {\n    device: 0 // choose first audio device found\n  };\n  \n  // preview camera in <video id=\"video-local-camera\"> tag\n  var videoElementCamera = 'video-local-camera';\n\n  camUser.startPreview({\n    videoDeviceConfig: cameraConfig,\n    audioDeviceConfig: audioDeviceConfig,\n    elementId: videoElementCamera\n  });\n});\n\nscreenUser.on('ReceivedDeviceList', function(event) {\n  // we received the device list, now we start a preview of the screen\n  var screenConfig = {\n    source: 'screen',   \n    width: 1920,\n    height: 1080,\n    framerate: 5\n  };\n\n  var audioDeviceConfig = {\n    device: 0 // choose first audio device found\n  };\n\n  // preview screen share in <video id=\"video-local-screen\"> tag\n  var videoElementScreen = 'video-local-screen';\n\n  screenUser.startPreview({\n    videoDeviceConfig: screenConfig,\n    audioDeviceConfig: audioDeviceConfig,\n    elementId: videoElementScreen\n  });\n});\n\n")),(0,a.yg)("h3",{id:"3-start-both-workflows"},"3. Start both workflows"),(0,a.yg)("admonition",{title:"We will now",type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"sign in to the server"),(0,a.yg)("li",{parentName:"ul"},"request the device lists for both instances"),(0,a.yg)("li",{parentName:"ul"},"start the webcasts once we have a preview (prepared in last step)"))),(0,a.yg)("p",null,"After we signed in successfully, we can call ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusergetdevices"},"getDevices()"),",\nthis will emit the ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#receiveddevicelist"},"ReceivedDeviceList")," event when succeeding.\nIn this example we simply start the broadcasts immediately once the ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#startpreviewsuccess"},"StartPreviewSuccess()")," events have been fired."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"camUser.on('SignInSuccess', function(event) {\n  camUser.getDevices(); // will fire 'ReceivedDeviceList' for the camUser\n});\n\nscreenUser.on('SignInSuccess', function(event) {\n  screenUser.getDevices(); // will fire 'ReceivedDeviceList' for the screenUser\n});\n\ncamUser.on('StartPreviewSuccess', function(event) {\n  camUser.startBroadcast({\n      transcodingTargets: {\n        output: streamUrl1,\n        streamname: streamName1,\n      }\n    }\n});\n\nscreenUser.on('StartPreviewSuccess', function(event) {\n  screenUser.startBroadcast({\n      transcodingTargets: {\n        output: streamUrl2,\n        streamname: streamName2,\n      }\n    }\n});\n\nvar signInConfig = {\n   server: config.webrtc.server, // do not change the default\n   bintuApiKey: bintuApiKey // your api key\n};\n\n// on success, both\ncamUser.signIn(signInConfig);\nscreenUser.signIn(signInConfig);\n")))}m.isMDXComponent=!0}}]);