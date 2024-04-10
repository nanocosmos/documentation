"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3277],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={id:"nanostream_webrtc_speech_music",title:"Speech / Music Streaming",sidebar_label:"Speech / Music Streaming"},i=void 0,s={unversionedId:"webrtc/nanostream_webrtc_speech_music",id:"webrtc/nanostream_webrtc_speech_music",title:"Speech / Music Streaming",description:"In addition to configuring bitrates (Features > Quality Settings),",source:"@site/docs/webrtc/nanostream_webrtc_speech_music.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_speech_music",permalink:"/docs/webrtc/nanostream_webrtc_speech_music",draft:!1,tags:[],version:"current",lastUpdatedAt:1712739692,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"nanostream_webrtc_speech_music",title:"Speech / Music Streaming",sidebar_label:"Speech / Music Streaming"},sidebar:"nanoStream Webcaster",previous:{title:"Stats and Metrics",permalink:"/docs/webrtc/nanostream_webrtc_stats_and_metrics"},next:{title:"Automatic Reconnection",permalink:"/docs/webrtc/nanostream_webrtc_reconnect"}},c={},l=[{value:"Speech audio",id:"speech-audio",level:2},{value:"Music audio",id:"music-audio",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In addition to configuring bitrates (",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_quality/"},"Features > Quality Settings"),"),\nit is possible to explicitly disable or enable the following audio filters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"autoGainControl")," - Attempts to automatically maintain a steady overall volume level."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"echoCancellation")," - Attempts to prevent echo effects."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"noiseSuppression")," - Automatically filters the audio to remove background noise.")),(0,a.yg)("p",null,"Depending on the use case, it can be beneficial to enable or disable all of these filters at once. ",(0,a.yg)("br",null),"\nIn general, there are two primary types of audio content:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Speech:")," Typically includes spoken content"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Music:")," Comprises musical audio content")),(0,a.yg)("admonition",{title:"Recommendation",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"For optimal results, we recommend setting all of the above filters to ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," for speech/voice streams and all of them to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," for music streaming. In most systems, these filters are enabled by default.")),(0,a.yg)("h2",{id:"speech-audio"},"Speech audio"),(0,a.yg)("p",null,"For speech audio streaming, enable the recommended filters"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n  inputCfg: {\n    mediaStreamCfg: {\n      audioConstraints: {\n        autoGainControl: true,\n        echoCancellation: true,\n        noiseSuppression: true,\n      }\n    },\n  },\n  streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")),(0,a.yg)("h2",{id:"music-audio"},"Music audio"),(0,a.yg)("p",null,"For music audio streaming, disable the filters:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n  inputCfg: {\n    mediaStreamCfg: {\n      audioConstraints: {\n        autoGainControl: false,\n        echoCancellation: false,\n        noiseSuppression: false,\n      }\n    },\n  },\n  streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")))}m.isMDXComponent=!0}}]);