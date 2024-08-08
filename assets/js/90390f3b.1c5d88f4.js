"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5621],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>v});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(v,o(o({ref:n},u),{},{components:t})):r.createElement(v,o({ref:n},u))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(58168),i=(t(96540),t(15680));const a={id:"nanostream_webrtc_speech_music",title:"Speech / Music Streaming",sidebar_label:"Speech / Music Streaming"},o=void 0,c={unversionedId:"webrtc-v5/nanostream_webrtc_speech_music",id:"webrtc-v5/nanostream_webrtc_speech_music",title:"Speech / Music Streaming",description:"Since Webcaster version 5.8.0 additional audio preprocessing options are available.",source:"@site/docs/webrtc-v5/nanostream_webrtc_speech_music.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_speech_music",permalink:"/docs/webrtc-v5/nanostream_webrtc_speech_music",draft:!1,tags:[],version:"current",lastUpdatedAt:1723112171,formattedLastUpdatedAt:"Aug 8, 2024",frontMatter:{id:"nanostream_webrtc_speech_music",title:"Speech / Music Streaming",sidebar_label:"Speech / Music Streaming"},sidebar:"nanoStream Webcaster V5",previous:{title:"Audio- / Video-Only",permalink:"/docs/webrtc-v5/nanostream_webrtc_audio_video_only"},next:{title:"External Streams / Mixing",permalink:"/docs/webrtc-v5/nanostream_webrtc_set_mediastream"}},s={},l=[{value:"Speech audio",id:"speech-audio",level:2},{value:"Music audio",id:"music-audio",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Since Webcaster version 5.8.0 additional audio preprocessing options are available.",(0,i.yg)("br",null),"\nAdditionally to configuring bitrates (",(0,i.yg)("a",{parentName:"p",href:"./nanostream_webrtc_quality/"},"Features > Quality Settings"),"),\nit is from now on possible to disable or enable the following filters explicitly:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"autoGainControl")," - Attempts to automatically maintain a steady overall volume level."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"echoCancellation")," - Attempts to prevent echo effects."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"noiseSuppression")," - Automatically filters the audio to remove background noise.")),(0,i.yg)("p",null,"Depending on the use case it can make sense to disable or enable all of those filters at once. ",(0,i.yg)("br",null),"\nIn general there are two different types of audio content:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Audio containing ",(0,i.yg)("strong",{parentName:"li"},"speech")),(0,i.yg)("li",{parentName:"ul"},"Audio containing ",(0,i.yg)("strong",{parentName:"li"},"music"))),(0,i.yg)("admonition",{title:"recommendation",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"We recommend setting all of the above filters to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," for speech/voice streams and all of them to ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," for music streaming.\nOn most systems these filters will be on by default.")),(0,i.yg)("h2",{id:"speech-audio"},"Speech audio"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"var videoDeviceConfig = {\n  device: 0, // use first video device\n  source: 'camera'\n};\n\n// set all filters to 'true' for streaming voice/speech\nvar audioDeviceConfig = {\n  device: 0, // use first audio device\n  echoCancellation: true,\n  autoGainControl: true,\n  noiseSuppression: true\n};\n\nvar videoElement = 'video-local'; // preview stream in <video id=\"video-local\"> tag\n\nvar previewConfig = {\n  videoDeviceConfig: videoDeviceConfig,\n  audioDeviceConfig: audioDeviceConfig,\n  elementId: videoElement\n};\n\n// Start the preview\nrtcuser.startPreview(previewConfig);\n\n")),(0,i.yg)("h2",{id:"music-audio"},"Music audio"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"var videoDeviceConfig = {\n  device: 0, // use first video device\n  source: 'camera'\n};\n\n// set all filters to 'false' for streaming music\nvar audioDeviceConfig = {\n  device: 0, // use first audio device\n  echoCancellation: false,\n  autoGainControl: false,\n  noiseSuppression: false\n};\n\nvar videoElement = 'video-local'; // preview stream in <video id=\"video-local\"> tag\n\nvar previewConfig = {\n  videoDeviceConfig: videoDeviceConfig,\n  audioDeviceConfig: audioDeviceConfig,\n  elementId: videoElement\n};\n\n// start the preview\nrtcuser.startPreview(previewConfig);\n\n")))}d.isMDXComponent=!0}}]);