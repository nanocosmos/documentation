"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3367],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={id:"nanostream_webrtc_quality",title:"Quality Settings",sidebar_label:"Quality Settings"},i=void 0,s={unversionedId:"webrtc/nanostream_webrtc_quality",id:"webrtc/nanostream_webrtc_quality",title:"Quality Settings",description:"Stream Quality Configuration",source:"@site/docs/webrtc/nanostream_webrtc_quality.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_quality",permalink:"/docs/webrtc/nanostream_webrtc_quality",draft:!1,tags:[],version:"current",lastUpdatedAt:1711640284,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"nanostream_webrtc_quality",title:"Quality Settings",sidebar_label:"Quality Settings"},sidebar:"nanoStream Webcaster",previous:{title:"Multiple Webcasts",permalink:"/docs/webrtc/nanostream_webrtc_multiple_webcasts"},next:{title:"Device Selection",permalink:"/docs/webrtc/nanostream_webrtc_device_selection"}},l={},c=[{value:"Stream Quality Configuration",id:"stream-quality-configuration",level:2},{value:"Media Stream Quality Configuration",id:"media-stream-quality-configuration",level:3},{value:"Browser-side Encoding Options",id:"browser-side-encoding-options",level:3},{value:"Audio Conversion on the Server",id:"audio-conversion-on-the-server",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"stream-quality-configuration"},"Stream Quality Configuration"),(0,a.yg)("p",null,"Webcaster API allows you to configure the quality settings for your broadcasts. You can control the quality of your streams through Media Stream constraints and encoding properties in two corresponding places:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Media Stream (Preview) Configuration:")," These settings affect the quality of the preview stream before broadcasting. Learn more about ",(0,a.yg)("a",{parentName:"p",href:"#media-stream-quality-configuration"},"Media Stream Quality Configuration"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Broadcast Configuration:")," These settings influence the encoding and quality of the stream as it's sent to the nanoStream Cloud. Explore ",(0,a.yg)("a",{parentName:"p",href:"#browser-side-encoding-options"},"Browser-side Encoding Options")," and ",(0,a.yg)("a",{parentName:"p",href:"#audio-conversion-on-the-server"},"Audio Conversion on the Server"),"."))),(0,a.yg)("h3",{id:"media-stream-quality-configuration"},"Media Stream Quality Configuration"),(0,a.yg)("p",null,"Adjust various quality settings for your media stream:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Video resolution"),(0,a.yg)("li",{parentName:"ul"},"Maximum video frame rate"),(0,a.yg)("li",{parentName:"ul"},"Audio constraints")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n  inputCfg: {\n    mediaStreamCfg: {\n      resolution: [1280, 720],\n      maxFramerate: 30,\n      audioConstraints: {\n        autoGainControl: true,\n        channelCount: 1,\n        echoCancellation: true,\n        noiseSuppression: true\n      }\n    },\n  },\n  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n  streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Note that the ",(0,a.yg)("inlineCode",{parentName:"p"},"resolution"),' is "ideal" value. In the end, it is up to a browser to decide what resolution is the most optimal one in a particular case. Similar applies to ',(0,a.yg)("inlineCode",{parentName:"p"},"maxFramerate")," which only sets the upper limit of frame rate")),(0,a.yg)("h3",{id:"browser-side-encoding-options"},"Browser-side Encoding Options"),(0,a.yg)("p",null,"After the webcaster has been set up and before the stream is sent to the nanoStream cloud, it is encoded in the browser.\nIt's possible to configure the following encoding properties:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Maximum video bitrate"),(0,a.yg)("li",{parentName:"ul"},"Maximum audio bitrate"),(0,a.yg)("li",{parentName:"ul"},"Maximum encoding frame rate"),(0,a.yg)("li",{parentName:"ul"},"Audio transcoding bitrate")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n  inputCfg: {\n    broadcastCfg: {\n      maxAudioBitrateBps: 64000,\n      maxVideoBitrateBps: 2000000,\n      maxEncodingFramerate: 30,\n    },\n  },\n  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n  streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Note that these values are upper limits. The browser will only go up to the configured bitrate if the image is complex (for example, if there is a lot of motion in the image). This usually means that the average bitrate will be lower than the\nconfigured maximum bitrate. For example, if there is no movement in front of the camera or the image is dark, the video bitrate will be lower than configured.\nmaxEncodingFramerate' takes into account the Media Stream frame rate setting and cannot be higher than this.")),(0,a.yg)("h3",{id:"audio-conversion-on-the-server"},"Audio Conversion on the Server"),(0,a.yg)("p",null,"The video bitrate of the resulting RTMP stream will be similar to the bitrate encoded by browsers. Audio is converted on the server side, so it's also possible to set the transcoding bitrate for audio.",(0,a.yg)("br",null)),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n  inputCfg: {\n    broadcastCfg: {\n      transcodeAudioBitrateBps: 64000,\n    },\n  },\n  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n  streamName: '<STREAM-NAME-1>'\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")))}p.isMDXComponent=!0}}]);