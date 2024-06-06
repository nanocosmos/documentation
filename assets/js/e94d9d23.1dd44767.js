"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5575],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,m=u["".concat(l,".").concat(p)]||u[p]||v[p]||r;return t?o.createElement(m,a(a({ref:n},s),{},{components:t})):o.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(58168),i=(t(96540),t(15680));const r={id:"nanostream_webrtc_audio_video_only",title:"Audio- / Video-Only",sidebar_label:"Audio- / Video-Only"},a=void 0,c={unversionedId:"webrtc-v5/nanostream_webrtc_audio_video_only",id:"webrtc-v5/nanostream_webrtc_audio_video_only",title:"Audio- / Video-Only",description:"In addition to regular streaming, with the nanoStream Webcaster you can stream Audio-Only and Video-Only.",source:"@site/docs/webrtc-v5/nanostream_webrtc_audio_video_only.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_audio_video_only",permalink:"/docs/webrtc-v5/nanostream_webrtc_audio_video_only",draft:!1,tags:[],version:"current",lastUpdatedAt:1717712187,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"nanostream_webrtc_audio_video_only",title:"Audio- / Video-Only",sidebar_label:"Audio- / Video-Only"},sidebar:"nanoStream Webcaster V5",previous:{title:"Device Selection",permalink:"/docs/webrtc-v5/nanostream_webrtc_device_selection"},next:{title:"Speech / Music Streaming",permalink:"/docs/webrtc-v5/nanostream_webrtc_speech_music"}},l={},d=[{value:"Audio-Only Streaming",id:"audio-only-streaming",level:2},{value:"Video-Only Streaming",id:"video-only-streaming",level:2}],s={toc:d},u="wrapper";function v(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In addition to regular streaming, with the nanoStream Webcaster you can stream Audio-Only and Video-Only.",(0,i.yg)("br",null)),(0,i.yg)("p",null,"Audio-Only or Video-Only streaming is enabled by setting video or audio device to ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," in the configuration object passed to ",(0,i.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig"},"startPreview(config)"),".",(0,i.yg)("br",null)),(0,i.yg)("h2",{id:"audio-only-streaming"},"Audio-Only Streaming"),(0,i.yg)("admonition",{title:"audio-only streaming",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"To start Audio-Only streaming, we pass ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," to the video device configuration.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'var videoDeviceConfig = {\n  device: false  // setting a video device to "false" allows to stream Audio-Only\n};\n\nvar audioDeviceConfig = {\n  device: 0 // we select the first available audio device\n};\n\nvar config = {\n  videoDeviceConfig: videoDeviceConfig,\n  audioDeviceConfig: audioDeviceConfig,\n  elementId: videoElement\n};\n \nuser.startPreview(config);\n')),(0,i.yg)("h2",{id:"video-only-streaming"},"Video-Only Streaming"),(0,i.yg)("admonition",{title:"video-only streaming",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"To start Video-Only streaming, we pass ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," to the audio device configuration")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'var videoDeviceConfig = {\n  device: 0  // we select the first available video device\n};\n\nvar audioDeviceConfig = {\n  device: false // setting an audio device to "false" allows to stream Video-Only\n};\n\nvar config = {\n  videoDeviceConfig: videoDeviceConfig,\n  audioDeviceConfig: audioDeviceConfig,\n  elementId: videoElement\n};\n \nuser.startPreview(config);\n')))}v.isMDXComponent=!0}}]);