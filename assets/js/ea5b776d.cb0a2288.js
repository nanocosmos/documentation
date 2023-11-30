"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"nanostream_webrtc_stats_and_metrics",title:"Stats and Metrics",sidebar_label:"Stats and Metrics"},o=void 0,i={unversionedId:"webrtc-v5/nanostream_webrtc_stats_and_metrics",id:"webrtc-v5/nanostream_webrtc_stats_and_metrics",title:"Stats and Metrics",description:"The Webcaster API provides two types of Quality Of Service reporting mechanisms:",source:"@site/docs/webrtc-v5/nanostream_webrtc_stats_and_metrics.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_stats_and_metrics",permalink:"/docs/webrtc-v5/nanostream_webrtc_stats_and_metrics",draft:!1,tags:[],version:"current",lastUpdatedAt:1701364210,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{id:"nanostream_webrtc_stats_and_metrics",title:"Stats and Metrics",sidebar_label:"Stats and Metrics"},sidebar:"nanoStream Webcaster V5",previous:{title:"External Streams / Mixing",permalink:"/docs/webrtc-v5/nanostream_webrtc_set_mediastream"},next:{title:"Automatic Reconnection",permalink:"/docs/webrtc-v5/nanostream_webrtc_reconnect"}},l={},c=[{value:"Stats",id:"stats",level:2},{value:"Stats Example",id:"stats-example",level:3},{value:"Ingest Quality Indicators",id:"ingest-quality-indicators",level:3},{value:"Traffic Light Recommendations",id:"traffic-light-recommendations",level:3},{value:"Round Trip Time",id:"round-trip-time",level:4},{value:"Packet Loss",id:"packet-loss",level:4},{value:"Sample for a simple traffic light implementation:",id:"sample-for-a-simple-traffic-light-implementation",level:4},{value:"Metrics",id:"metrics",level:2},{value:"Metrics configuration",id:"metrics-configuration",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Webcaster API provides two types of Quality Of Service reporting mechanisms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Client side statistics"),(0,a.kt)("li",{parentName:"ul"},"Collection of backend metrics ")),(0,a.kt)("h2",{id:"stats"},"Stats"),(0,a.kt)("p",null,"In order to display client side statistics that are visible directly in your Webcaster application, please:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable stats via the ",(0,a.kt)("a",{parentName:"li",href:"./nanostream_webrtc_api#rtcuserenablestatsenable-interval"},"enableStats()")," API call"),(0,a.kt)("li",{parentName:"ul"},"Listen to the ",(0,a.kt)("a",{parentName:"li",href:"./nanostream_webrtc_api#receivedwebrtcstats"},'"ReceivedWebRTCStats"')," Event")),(0,a.kt)("admonition",{title:"note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please find a list of available stats ",(0,a.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#webrtcstatsevent--object"},"here"),".\nAlso note that most of the stats are available in Chrome. The other browsers, e.g. Firefox, may not provide all the documented stats.")),(0,a.kt)("h3",{id:"stats-example"},"Stats Example"),(0,a.kt)("p",null,"The following snippet will enable stats reporting on the client side:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// rtcUser: instance of RtcUser\nrtcUser.enableStats();\n\nrtcUser.on('ReceivedWebRTCStats', function(event) {\n    var results = event.data.results;\n    console.log(JSON.stringify(results));\n});\n")),(0,a.kt)("h3",{id:"ingest-quality-indicators"},"Ingest Quality Indicators"),(0,a.kt)("p",null,"Bad network is the major reason for bad end to end user experience.\nIn case of bad network conditions you can warn your users and they will be able to take further steps in order to improve the situation."),(0,a.kt)("p",null,"There are specific stats that indicate the current upstream quality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"roundTripTime")," - Current time in milliseconds that data takes from the client to the webcaster server and back."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"packetLoss")," - Percentage of packets lost during past 10 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"videoSendDelay")," (Chromium based browsers only) - Delay before video frames are send to the server. ")),(0,a.kt)("p",null,"Those statitics will allow you to show a ",(0,a.kt)("strong",{parentName:"p"},"traffic light")," to your webcasters, that indicates the current ingest quality. This regards the upstream network conditions from your customers browsers to our webcast servers."),(0,a.kt)("h3",{id:"traffic-light-recommendations"},"Traffic Light Recommendations"),(0,a.kt)("p",null,"Based upon our analysis, we have gathered recommendations for indicating bad streaming conditions to the end users."),(0,a.kt)("h4",{id:"round-trip-time"},"Round Trip Time"),(0,a.kt)("p",null,"We concider an rtt of 150 or less as acceptable. We observed RTT values going up to 150, with still good playback experience.\nAbove 150 and below 250 the viewer experience will degrade slighly. Above 250 milliseconds users should check their network and\nsee if there are things that can be improved."),(0,a.kt)("h4",{id:"packet-loss"},"Packet Loss"),(0,a.kt)("p",null,"A packet loss of less than 5% still results good playback experience. Greater than 10% of lost packages will degrade viewer experience,\nespecially for streams with higher bitrates (2Mb and above). Above 10% of packet loss, we observed that streams can get chunky and your users should take action then."),(0,a.kt)("h4",{id:"sample-for-a-simple-traffic-light-implementation"},"Sample for a simple traffic light implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// rtcUser: instance of RtcUser\nrtcUser.enableStats();\n\nrtcUser.on('ReceivedWebRTCStats', function(event) {\n    \n    var results = event.data.results;\n    var roundTripTime = results.roundTripTime;\n    var packetLoss = results.packetLoss;\n\n    if (!roundTripTime || !packetLoss) return; // values can be undefined\n\n    // thresholds\n    var quality = 'good';\n    var packetLossLowerBound = 5;\n    var packetLossUpperBound = 10;\n    var rttLowerBound = 150;\n    var rttUpperBound = 250;\n\n    if(packetLoss < packetLossLowerBound && roundTripTime < rttLowerBound) {\n        quality = 'good';\n    } \n    \n    if ((packetLoss > packetLossLowerBound && packetLoss < packetLossUpperBound) \n        || (roundTripTime > rttLowerBound && roundTripTime < rttUpperBound)) {\n        quality = 'medium';\n    }\n\n    if (packetLoss > packetLossUpperBound || roundTripTime > rttUpperBound) {\n        quality = 'bad';\n    }\n\n    console.log('roundTripTime: ', roundTripTime);\n    console.log('packetLoss: ', packetLoss);\n    console.log('quality: ', quality);\n\n});\n")),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Sending metrics to our backend will help us analyze your customers webcast ingest quality and track down client side issues. Additionally you will be able to see useful information in the Analytics Dashboard. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../cloud/analytics#webcaster"},"nanoStream Cloud")," documentation for details on how to enable client metrics for your organization."),(0,a.kt)("h3",{id:"metrics-configuration"},"Metrics configuration"),(0,a.kt)("p",null,"In order to enable sending metrics from the clients, please configure your accountId and accountKey with the ",(0,a.kt)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusersetconfigconfig"},"setConfig()")," API call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// rtcUser: instance of RtcUser\nvar rtcConfig = {\n    metrics: {\n        accountId: 'myAccountId',\n        accountKey: 'myAccountKey'\n    }\n};\n\n// Set metrics credentials\nrtcUser.setConfig(rtcConfig);\n\n")))}d.isMDXComponent=!0}}]);