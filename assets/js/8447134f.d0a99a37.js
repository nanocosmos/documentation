"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["4780"],{6643:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"webrtc-v5/nanostream_webrtc_quality","title":"Quality Settings","description":"Configuring stream quality","source":"@site/docs/webrtc-v5/nanostream_webrtc_quality.md","sourceDirName":"webrtc-v5","slug":"/webrtc-v5/nanostream_webrtc_quality","permalink":"/docs/webrtc-v5/nanostream_webrtc_quality","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"id":"nanostream_webrtc_quality","title":"Quality Settings","sidebar_label":"Quality Settings"},"sidebar":"nanoStream Webcaster V5","previous":{"title":"Multiple Webcasts","permalink":"/docs/webrtc-v5/nanostream_webrtc_multiple_webcasts"},"next":{"title":"Device Selection","permalink":"/docs/webrtc-v5/nanostream_webrtc_device_selection"}}'),r=t("85893"),a=t("50065");let s={id:"nanostream_webrtc_quality",title:"Quality Settings",sidebar_label:"Quality Settings"},o=void 0,d={},c=[{value:"Configuring stream quality",id:"configuring-stream-quality",level:2},{value:"Video and audio preview",id:"video-and-audio-preview",level:3},{value:"Encoding bitrates",id:"encoding-bitrates",level:3},{value:"Audio conversion on the server",id:"audio-conversion-on-the-server",level:3}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"configuring-stream-quality",children:"Configuring stream quality"}),"\n",(0,r.jsx)(n.p,{children:"Webcasting quality can be configured by setting different stream encoding properties.\nIn the nanoStream Webcaster this is basically performed in three steps:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1. Previewing a stream."}),"\nCertain stream properties can be set when starting the preview: ",(0,r.jsx)(n.a,{href:"#video-and-audio-preview",children:"Video and audio preview"})," ",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"2. Encoding the stream in the browser."}),"\nUpstream bitrates can be configured: ",(0,r.jsx)(n.a,{href:"#encoding-bitrates",children:"Encoding bitrates"})," ",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"3. Sending the stream to the nanoStream Cloud."}),"\nAudio is converted again on server side: ",(0,r.jsx)(n.a,{href:"#audio-conversion-on-the-server",children:"Audio conversion on the server"})]}),"\n",(0,r.jsx)(n.h3,{id:"video-and-audio-preview",children:"Video and audio preview"}),"\n",(0,r.jsxs)(n.p,{children:["Streams have different properties that can be set when starting a preview.",(0,r.jsx)(n.br,{}),"\nThose are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"video source (camera or screen share)"}),"\n",(0,r.jsx)(n.li,{children:"video resolution"}),"\n",(0,r.jsx)(n.li,{children:"video framerate"}),"\n",(0,r.jsx)(n.li,{children:"audio source"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The corresponding API call is ",(0,r.jsx)(n.a,{href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig",children:"startPreview(previewConfig)"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var videoDeviceConfig = {\n  device: 0, // use first video device\n  source: 'camera', // or 'screen'\n  width: 1280,\n  height: 720,\n  framerate: 30\n};\n\nvar audioDeviceConfig = {\n  device: 0 // use first audio device\n};\n\nvar videoElement = 'video-local'; // preview stream in <video id=\"video-local\"> tag\n\nvar previewConfig = {\n  videoDeviceConfig: videoDeviceConfig,\n  audioDeviceConfig: audioDeviceConfig,\n  elementId: videoElement\n};\n\n// Start the camera\n// (Note: some browsers will show a popup asking for permission)\nrtcuser.startPreview(previewConfig);\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Note that the ",(0,r.jsx)(n.code,{children:"width"}),", ",(0,r.jsx)(n.code,{children:"height"}),", and ",(0,r.jsx)(n.code,{children:"framerate"})," parameters provided to the ",(0,r.jsx)(n.code,{children:"startPreview"}),' are "ideal" values. In the end, it is up to a browser to decide what resolution and frame rate are the most optimal ones in a particular case.']})}),"\n",(0,r.jsx)(n.h3,{id:"encoding-bitrates",children:"Encoding bitrates"}),"\n",(0,r.jsxs)(n.p,{children:["After the preview has been started and before the stream gets send to the nanoStream Cloud, it will be encoded in the browser.\nYou can set audio and video target encoding bitrates. ",(0,r.jsx)(n.br,{}),"\nThis is done with ",(0,r.jsx)(n.a,{href:"./nanostream_webrtc_api#rtcusersetconfigconfig",children:"setConfig(config)"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// set bitrates in kbits/s\nvar config = {\n  bitrates: {\n    videoSendInitialBitrate: 1000, // min bitrate (chrome only!)\n    videoSendBitrate: 1500, // max video bitrate\n    audioSendBitrate: 64 // max audio bitrate\n  }\n};\n\nrtcuser.setConfig(config);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Note that those are target bitrates, ",(0,r.jsx)(n.code,{children:"videoSendBitrate"})," is the maximum bitrate. The Webcaster will only go up to the configured bitrate when the image is complex (e.g., when much movement is visible in the image). This usually means that the mean bitrate will be lower than the\nconfigured maximum bitrate. For example: if there is no movement in front of the camera or the image is dark, the video bitrate will be lower than configured."]})}),"\n",(0,r.jsx)(n.admonition,{title:"Android devices",type:"caution",children:(0,r.jsxs)(n.p,{children:["Also note that due to non spec-compliant behaviour of some Android devices, it might be required to restart a stream after resolution has changed. Not doing so, can result in a corrupted playback. Resolution change can be detected in the Webcaster stats that is enabled by ",(0,r.jsx)(n.a,{href:"./nanostream_webrtc_api#rtcuserenablestatsenable-interval",children:"enableStats([enable], [interval])"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"audio-conversion-on-the-server",children:"Audio conversion on the server"}),"\n",(0,r.jsxs)(n.p,{children:["Video bitrate of the resulting RTMP stream will be similar to the bitrate encoded by the browsers. Audio is converted on server side.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"RTMP audio bitrate"})," can be set with ",(0,r.jsx)(n.a,{href:"./nanostream_webrtc_api#rtcuserstartbroadcastconfig",children:"startBroadcast(broadcastConfig)"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// set audio transcoding bitrate in bits/s\nvar broadcastConfig = {\n  transcodingTargets: {\n    output: url,\n    streamname: streamname,\n    audiobitrate: 64000 // value is in bits/s!\n  }\n};\n\nrtcuser.startBroadcast(broadcastConfig);\n"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var i=t(67294);let r={},a=i.createContext(r);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);