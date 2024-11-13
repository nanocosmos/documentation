"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1831],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={id:"nanostream_webrtc_stats_and_metrics",title:"Stats and Metrics",sidebar_label:"Stats and Metrics"},i=void 0,s={unversionedId:"webrtc/nanostream_webrtc_stats_and_metrics",id:"webrtc/nanostream_webrtc_stats_and_metrics",title:"Stats and Metrics",description:"The Webcaster API offers two Quality of Service reporting mechanisms for monitoring the performance of your webcasts:",source:"@site/docs/webrtc/nanostream_webrtc_stats_and_metrics.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_stats_and_metrics",permalink:"/docs/webrtc/nanostream_webrtc_stats_and_metrics",draft:!1,tags:[],version:"current",lastUpdatedAt:1731523817,formattedLastUpdatedAt:"Nov 13, 2024",frontMatter:{id:"nanostream_webrtc_stats_and_metrics",title:"Stats and Metrics",sidebar_label:"Stats and Metrics"},sidebar:"nanoStream Webcaster",previous:{title:"Audio-Only / Video-Only",permalink:"/docs/webrtc/nanostream_webrtc_audio_video_only"},next:{title:"Speech / Music Streaming",permalink:"/docs/webrtc/nanostream_webrtc_speech_music"}},c={},l=[{value:"Client-side emitted metrics",id:"client-side-emitted-metrics",level:3},{value:"Ingest Quality Indicators",id:"ingest-quality-indicators",level:3},{value:"Traffic Light Recommendations",id:"traffic-light-recommendations",level:3},{value:"Round Trip Time",id:"round-trip-time",level:4},{value:"Packet Loss",id:"packet-loss",level:4},{value:"Sample of a simple traffic light implementation:",id:"sample-of-a-simple-traffic-light-implementation",level:4},{value:"Sending Metrics to Our Backend",id:"sending-metrics-to-our-backend",level:2},{value:"Metrics Configuration",id:"metrics-configuration",level:3}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Webcaster API offers two Quality of Service reporting mechanisms for monitoring the performance of your webcasts:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#client-side-emitted-metrics"},"Client-side emitted metrics")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#sending-metrics-to-our-backend"},"Sending Metrics to Our Backend"))),(0,a.yg)("h3",{id:"client-side-emitted-metrics"},"Client-side emitted metrics"),(0,a.yg)("p",null,"You can receive client-side metrics on an interval,\nNote: Metrics indicating an error would be output regardless of the interval.\nFor a comprehensive list of metrics, please refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/webrtc/nanostream_webrtc_api"},"Webcaster API docs"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n  streamName: '<STREAM-NAME-1>'\n});\n\nwebcaster.onMetrics = (metrics) => {\n    console.log(metrics);\n\n    // Check if the metric contains error information\n    if (metrics.errorMessage) {\n        console.log(metrics.errorMessage, metrics.errorCode);\n    }\n};\n\nawait webcaster.setup();\n\n// Will also start emitting metrics at an interval\nawait webcaster.startBroadcast();\n")),(0,a.yg)("h3",{id:"ingest-quality-indicators"},"Ingest Quality Indicators"),(0,a.yg)("p",null,"Detecting and addressing poor network conditions is crucial for ensuring a good end-to-end user experience. Specific statistics indicate the current upstream quality:"),(0,a.yg)("p",null,"There are specific stats that indicate the current upstream quality:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"RTT (Round Trip Time)")," - The current time in milliseconds that data takes from the client to the webcaster server and back."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Packet loss")," - The percentage of packets lost during the past 10 seconds."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Send Delay")," (Chromium-based browsers only) - The delay before video frames are sent to the server.")),(0,a.yg)("p",null,"These statistics enable you to display  ",(0,a.yg)("strong",{parentName:"p"},"traffic lights")," to your webcasters, indicating the current ingest quality and network conditions from your customers' browsers to our webcast servers."),(0,a.yg)("h3",{id:"traffic-light-recommendations"},"Traffic Light Recommendations"),(0,a.yg)("p",null,"We have gathered recommendations for indicating poor streaming conditions to end users based on our analysis:"),(0,a.yg)("h4",{id:"round-trip-time"},"Round Trip Time"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"An RTT of 150 milliseconds or less is considered acceptable and may result in a good playback experience."),(0,a.yg)("li",{parentName:"ul"},"Above 150 and below 250 milliseconds, viewer experience may degrade slightly."),(0,a.yg)("li",{parentName:"ul"},"Above 250 milliseconds, users should check their network for improvements.")),(0,a.yg)("h4",{id:"packet-loss"},"Packet Loss"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Packet loss of less than 5% generally results in a good playback experience."),(0,a.yg)("li",{parentName:"ul"},"Packet loss exceeding 10%, especially for streams with higher bitrates (2Mb and above), can degrade viewer experience."),(0,a.yg)("li",{parentName:"ul"},"Beyond 10% packet loss, streams can become chunky, and users should take action.")),(0,a.yg)("h4",{id:"sample-of-a-simple-traffic-light-implementation"},"Sample of a simple traffic light implementation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n  streamName: '<STREAM-NAME-1>'\n});\n\nwebcaster.onMetrics = (metrics) => {\n    console.log(metrics);\n\n    const rtcstats = metrics.rtcstats;\n    const connectionRtt = rtcstats.connection.rtt.value;\n    const packetLoss = rtcstats.connection.packetLoss.value;\n\n    if (!connectionRtt || !packetLoss) {\n        return // values can be undefined\n    };\n\n    // thresholds\n    let quality = 'good';\n    const packetLossLowerBound = 5;\n    const packetLossUpperBound = 10;\n    const rttLowerBound = 150;\n    const rttUpperBound = 250;\n\n    if (packetLoss < packetLossLowerBound && connectionRtt < rttLowerBound) {\n        quality = 'good';\n    }\n\n    if ((packetLoss > packetLossLowerBound && packetLoss < packetLossUpperBound)\n        || (connectionRtt > rttLowerBound && connectionRtt < rttUpperBound)) {\n        quality = 'medium';\n    }\n\n    if (packetLoss > packetLossUpperBound || connectionRtt > rttUpperBound) {\n        quality = 'bad';\n    }\n\n    console.log('roundTripTime: ', connectionRtt);\n    console.log('packetLoss: ', packetLoss);\n    console.log('quality: ', quality);\n};\n\nawait webcaster.setup()\n\nawait webcaster.startBroadcast()\n")),(0,a.yg)("h2",{id:"sending-metrics-to-our-backend"},"Sending Metrics to Our Backend"),(0,a.yg)("p",null,"Sending metrics to our backend is useful for analyzing webcast ingest quality and tracking client-side issues. It also provides valuable information in the Analytics Dashboard. Refer to the ",(0,a.yg)("a",{parentName:"p",href:"../cloud/analytics#webcaster"},"nanoStream Cloud")," for details on enabling client metrics for your organization."),(0,a.yg)("h3",{id:"metrics-configuration"},"Metrics Configuration"),(0,a.yg)("p",null,"To configure sending metrics from clients, set your accountId and accountKey in the constructor's config object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const webcaster = new window.WebcasterApiV6.Webcaster({\n    streamName: '<STREAM-NAME-1>',\n    metrics: {\n        accountId: 'myAccountId',\n        accountKey: 'myAccountKey'\n    }\n});\n\nawait webcaster.setup()\nawait webcaster.startBroadcast()\n")))}m.isMDXComponent=!0}}]);