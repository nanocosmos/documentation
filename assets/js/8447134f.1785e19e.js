"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1754],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={id:"nanostream_webrtc_quality",title:"Quality Settings",sidebar_label:"Quality Settings"},o=void 0,s={unversionedId:"webrtc-v5/nanostream_webrtc_quality",id:"webrtc-v5/nanostream_webrtc_quality",title:"Quality Settings",description:"Configuring stream quality",source:"@site/docs/webrtc-v5/nanostream_webrtc_quality.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_quality",permalink:"/docs/webrtc-v5/nanostream_webrtc_quality",draft:!1,tags:[],version:"current",lastUpdatedAt:1723112171,formattedLastUpdatedAt:"Aug 8, 2024",frontMatter:{id:"nanostream_webrtc_quality",title:"Quality Settings",sidebar_label:"Quality Settings"},sidebar:"nanoStream Webcaster V5",previous:{title:"Multiple Webcasts",permalink:"/docs/webrtc-v5/nanostream_webrtc_multiple_webcasts"},next:{title:"Device Selection",permalink:"/docs/webrtc-v5/nanostream_webrtc_device_selection"}},c={},l=[{value:"Configuring stream quality",id:"configuring-stream-quality",level:2},{value:"Video and audio preview",id:"video-and-audio-preview",level:3},{value:"Encoding bitrates",id:"encoding-bitrates",level:3},{value:"Audio conversion on the server",id:"audio-conversion-on-the-server",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"configuring-stream-quality"},"Configuring stream quality"),(0,a.yg)("p",null,"Webcasting quality can be configured by setting different stream encoding properties.\nIn the nanoStream Webcaster this is basically performed in three steps:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Previewing a stream."),"\nCertain stream properties can be set when starting the preview: ",(0,a.yg)("a",{parentName:"p",href:"#video-and-audio-preview"},"Video and audio preview")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"2. Encoding the stream in the browser."),"\nUpstream bitrates can be configured: ",(0,a.yg)("a",{parentName:"p",href:"#encoding-bitrates"},"Encoding bitrates")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"3. Sending the stream to the nanoStream Cloud."),"\nAudio is converted again on server side: ",(0,a.yg)("a",{parentName:"p",href:"#audio-conversion-on-the-server"},"Audio conversion on the server")),(0,a.yg)("h3",{id:"video-and-audio-preview"},"Video and audio preview"),(0,a.yg)("p",null,"Streams have different properties that can be set when starting a preview.",(0,a.yg)("br",null),"\nThose are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"video source (camera or screen share)"),(0,a.yg)("li",{parentName:"ul"},"video resolution"),(0,a.yg)("li",{parentName:"ul"},"video framerate"),(0,a.yg)("li",{parentName:"ul"},"audio source")),(0,a.yg)("p",null,"The corresponding API call is ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig"},"startPreview(previewConfig)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"var videoDeviceConfig = {\n  device: 0, // use first video device\n  source: 'camera', // or 'screen'\n  width: 1280,\n  height: 720,\n  framerate: 30\n};\n\nvar audioDeviceConfig = {\n  device: 0 // use first audio device\n};\n\nvar videoElement = 'video-local'; // preview stream in <video id=\"video-local\"> tag\n\nvar previewConfig = {\n  videoDeviceConfig: videoDeviceConfig,\n  audioDeviceConfig: audioDeviceConfig,\n  elementId: videoElement\n};\n\n// Start the camera\n// (Note: some browsers will show a popup asking for permission)\nrtcuser.startPreview(previewConfig);\n\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Note that the ",(0,a.yg)("inlineCode",{parentName:"p"},"width"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"height"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"framerate")," parameters provided to the ",(0,a.yg)("inlineCode",{parentName:"p"},"startPreview"),' are "ideal" values. In the end, it is up to a browser to decide what resolution and frame rate are the most optimal ones in a particular case.')),(0,a.yg)("h3",{id:"encoding-bitrates"},"Encoding bitrates"),(0,a.yg)("p",null,"After the preview has been started and before the stream gets send to the nanoStream Cloud, it will be encoded in the browser.\nYou can set audio and video target encoding bitrates. ",(0,a.yg)("br",null),"\nThis is done with ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusersetconfigconfig"},"setConfig(config)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// set bitrates in kbits/s\nvar config = {\n  bitrates: {\n    videoSendInitialBitrate: 1000, // min bitrate (chrome only!)\n    videoSendBitrate: 1500, // max video bitrate\n    audioSendBitrate: 64 // max audio bitrate\n  }\n};\n\nrtcuser.setConfig(config);\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Note that those are target bitrates, ",(0,a.yg)("inlineCode",{parentName:"p"},"videoSendBitrate")," is the maximum bitrate. The Webcaster will only go up to the configured bitrate when the image is complex (e.g., when much movement is visible in the image). This usually means that the mean bitrate will be lower than the\nconfigured maximum bitrate. For example: if there is no movement in front of the camera or the image is dark, the video bitrate will be lower than configured.")),(0,a.yg)("admonition",{title:"Android devices",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Also note that due to non spec-compliant behaviour of some Android devices, it might be required to restart a stream after resolution has changed. Not doing so, can result in a corrupted playback. Resolution change can be detected in the Webcaster stats that is enabled by ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserenablestatsenable-interval"},"enableStats([enable], [interval])"),".")),(0,a.yg)("h3",{id:"audio-conversion-on-the-server"},"Audio conversion on the server"),(0,a.yg)("p",null,"Video bitrate of the resulting RTMP stream will be similar to the bitrate encoded by the browsers. Audio is converted on server side.",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"RTMP audio bitrate")," can be set with ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserstartbroadcastconfig"},"startBroadcast(broadcastConfig)"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// set audio transcoding bitrate in bits/s\nvar broadcastConfig = {\n  transcodingTargets: {\n    output: url,\n    streamname: streamname,\n    audiobitrate: 64000 // value is in bits/s!\n  }\n};\n\nrtcuser.startBroadcast(broadcastConfig);\n")))}p.isMDXComponent=!0}}]);