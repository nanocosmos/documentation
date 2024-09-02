"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3428],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),y=r,u=p["".concat(l,".").concat(y)]||p[y]||d[y]||o;return t?n.createElement(u,i(i({ref:a},c),{},{components:t})):n.createElement(u,i({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},87651:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=t(58168),r=(t(96540),t(15680));const o={id:"nanostream_webrtc_demos",title:"Browser demos",sidebar_label:"Browser Demos"},i=void 0,s={unversionedId:"webrtc/nanostream_webrtc_demos",id:"webrtc/nanostream_webrtc_demos",title:"Browser demos",description:"Webcaster Demos Overview",source:"@site/docs/webrtc/nanostream_webrtc_demos.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_demos",permalink:"/docs/webrtc/nanostream_webrtc_demos",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"nanostream_webrtc_demos",title:"Browser demos",sidebar_label:"Browser Demos"},sidebar:"nanoStream Webcaster",previous:{title:"Getting started",permalink:"/docs/webrtc/nanostream_webrtc_getting_started"},next:{title:"Support",permalink:"/docs/webrtc/nanostream_webrtc_support"}},l={},m=[{value:"Webcaster Demos Overview",id:"webcaster-demos-overview",level:2},{value:"Webcaster Samples",id:"webcaster-samples",level:2},{value:"Usage",id:"usage",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Main Sample",id:"main-sample",level:4},{value:"Playback",id:"playback",level:3}],c={toc:m},p="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"webcaster-demos-overview"},"Webcaster Demos Overview"),(0,r.yg)("p",null,"Below you can find links to our Webcaster demo applications.\nThese samples are designed to showcase the broad capabilities of our Webcaster technology, providing you with practical experience and insight into its features. Explore our sample code to see how nanoStream Webcaster can enhance your webcasting projects."),(0,r.yg)("p",null,"To fully utilize these samples, please ensure you have a bintu account.",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_Start_Streaming"},"Create a stream in the nanoStream Cloud Dashboard"),", then create a stream and append the stream name to the sample pages' URLs using the ",(0,r.yg)("inlineCode",{parentName:"p"},"streamName")," URL parameter."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Please Note Before starting:")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"[Bintu Account]"),(0,r.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,r.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to",(0,r.yg)("a",{parentName:"p",href:"mailto:sales@nanocosmos.de"},"sales@nanocosmos.de"),"\n.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"[Live Transcoding]"),(0,r.yg)("p",{parentName:"admonition"},"Currently, the nanoStream Webcaster does not support ",(0,r.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_ABR_Transcoding"},"live transcoding"),".")),(0,r.yg)("article",{class:"margin-top--lg"},(0,r.yg)("section",{class:"row list_ZO3j"},(0,r.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,r.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"./nanostream_webrtc_demos#webcaster-samples"},(0,r.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Installation"},"Webcaster Samples"),(0,r.yg)("p",{class:"text--truncate cardDescription_mCBT"},"Find browser demos and examples how to implement the webcaster on your webpage."))),(0,r.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,r.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"../cloud-frontend-v3/Dashboard_Start_Streaming#option-1-use-the-nanostream-webcaster"},(0,r.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Configuration"},"Dashboard Integration"),(0,r.yg)("p",{class:"text--truncate cardDescription_mCBT"},"Use the Webcaster directly in the Cloud Dashboard."))))),(0,r.yg)("h2",{id:"webcaster-samples"},"Webcaster Samples"),(0,r.yg)("p",null,"Append your stream name to one of the following samples:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Main Sample: ",(0,r.yg)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/samples/index.html?streamName=%5Bstream-name%5D"},"https://nanocosmos.github.io/webcaster/samples/index.html?streamName=[stream-name]")),(0,r.yg)("li",{parentName:"ul"},"Minimal Sample: ",(0,r.yg)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/samples/minimal/index.html?streamName=%5Bstream-name%5D"},"https://nanocosmos.github.io/webcaster/samples/minimal/index.html?streamName=[stream-name]")),(0,r.yg)("li",{parentName:"ul"},"Screen Share: ",(0,r.yg)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/samples/screenshare/index.html?streamName=%5Bstream-name%5D"},"https://nanocosmos.github.io/webcaster/samples/screenshare/index.html?streamName=[stream-name]"))),(0,r.yg)("h3",{id:"usage"},"Usage"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"main sample")," showcases the lifecyle of the Webcaster, you can perform the following actions there:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"append your bintu stream name to one of the URLs"),(0,r.yg)("li",{parentName:"ul"},"configure stream properties in the editor ",(0,r.yg)("inlineCode",{parentName:"li"},"WebcasterApiV6.Config")),(0,r.yg)("li",{parentName:"ul"},"click ",(0,r.yg)("inlineCode",{parentName:"li"},"Create New Instance")," to create a new Webcaster instance with your configuration"),(0,r.yg)("li",{parentName:"ul"},"click ",(0,r.yg)("inlineCode",{parentName:"li"},"startPreview")," to preview the MediaStream that will be streamed to our CDN "),(0,r.yg)("li",{parentName:"ul"},"click ",(0,r.yg)("inlineCode",{parentName:"li"},"startBroadcast")," to start the ingest"),(0,r.yg)("li",{parentName:"ul"},"click ",(0,r.yg)("inlineCode",{parentName:"li"},"stopBroadcast")," to stop the ingest"),(0,r.yg)("li",{parentName:"ul"},"click ",(0,r.yg)("inlineCode",{parentName:"li"},"recover")," to restart the webcast with the same configuration"),(0,r.yg)("li",{parentName:"ul"},"click ",(0,r.yg)("inlineCode",{parentName:"li"},"dispose")," to destroy the Webcaster instance"),(0,r.yg)("li",{parentName:"ul"},"click ",(0,r.yg)("inlineCode",{parentName:"li"},"setMuted")," to mute the ingest")),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"All samples can be configured by the following URL query parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"streamName"),(0,r.yg)("li",{parentName:"ul"},"ingestUrl"),(0,r.yg)("li",{parentName:"ul"},"serverUrl"),(0,r.yg)("li",{parentName:"ul"},"maxAudioBitrateBps"),(0,r.yg)("li",{parentName:"ul"},"transcodeAudioBitrateBps"),(0,r.yg)("li",{parentName:"ul"},"maxVideoBitrateBps"),(0,r.yg)("li",{parentName:"ul"},"maxEncodingFramerate")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"[Config Interface]"),(0,r.yg)("p",{parentName:"admonition"},"For explanation of the configuration options, please see the definition of the ",(0,r.yg)("a",{parentName:"p",href:"https://nanocosmos.github.io/webcaster/docs/interfaces/config_types.Config.html"},"Config interface"),".")),(0,r.yg)("h4",{id:"main-sample"},"Main Sample"),(0,r.yg)("p",null,"The ",(0,r.yg)("em",{parentName:"p"},"main sample")," can be pre-configured through the ",(0,r.yg)("inlineCode",{parentName:"p"},"webcasterconfig")," URL query parameter.",(0,r.yg)("br",null),"\nPlease see this example link:"),(0,r.yg)("p",null,"   ",(0,r.yg)("a",{parentName:"p",href:"https://nanocosmos.github.io/webcaster/samples/index.html?webcasterconfig=eyJpbnB1dENmZyI6eyJtZWRpYVN0cmVhbUNmZyI6eyJtYXhGcmFtZXJhdGUiOjMwLCJyZXNvbHV0aW9uIjpbNjQwLDQ4MF0sImF1ZGlvQ29uc3RyYWludHMiOnsiYXV0b0dhaW5Db250cm9sIjp0cnVlLCJjaGFubmVsQ291bnQiOjIsImVjaG9DYW5jZWxsYXRpb24iOnRydWUsIm5vaXNlU3VwcHJlc3Npb24iOnRydWV9fSwiYnJvYWRjYXN0Q2ZnIjp7InRyYW5zY29kZUF1ZGlvQml0cmF0ZUJwcyI6MTI4MDAwLCJtYXhBdWRpb0JpdHJhdGVCcHMiOjEyODAwMCwibWF4VmlkZW9CaXRyYXRlQnBzIjo1MDAwMDAsIm1heEVuY29kaW5nRnJhbWVyYXRlIjozMH19LCJwcmV2aWV3VmlkZW9FbElkIjoicHJldmlldyIsInN0cmVhbU5hbWUiOiJbU1RSRUFNLU5BTUVdIiwic2VydmVyVXJsIjoiaHR0cHM6Ly9iaW50dS13ZWJydGMubmFub2Nvc21vcy5kZS9wL3dlYnJ0YyJ9"},"https://nanocosmos.github.io/webcaster/samples/index.html?webcasterconfig=eyJpbnB1dENmZyI6eyJtZWRpYVN0cmVhbUNmZyI6eyJtYXhGcmFtZXJhdGUiOjMwLCJyZXNvbHV0aW9uIjpbNjQwLDQ4MF0sImF1ZGlvQ29uc3RyYWludHMiOnsiYXV0b0dhaW5Db250cm9sIjp0cnVlLCJjaGFubmVsQ291bnQiOjIsImVjaG9DYW5jZWxsYXRpb24iOnRydWUsIm5vaXNlU3VwcHJlc3Npb24iOnRydWV9fSwiYnJvYWRjYXN0Q2ZnIjp7InRyYW5zY29kZUF1ZGlvQml0cmF0ZUJwcyI6MTI4MDAwLCJtYXhBdWRpb0JpdHJhdGVCcHMiOjEyODAwMCwibWF4VmlkZW9CaXRyYXRlQnBzIjo1MDAwMDAsIm1heEVuY29kaW5nRnJhbWVyYXRlIjozMH19LCJwcmV2aWV3VmlkZW9FbElkIjoicHJldmlldyIsInN0cmVhbU5hbWUiOiJbU1RSRUFNLU5BTUVdIiwic2VydmVyVXJsIjoiaHR0cHM6Ly9iaW50dS13ZWJydGMubmFub2Nvc21vcy5kZS9wL3dlYnJ0YyJ9")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In this example ",(0,r.yg)("inlineCode",{parentName:"li"},"webcasterconfig")," encodes the following payload:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"inputCfg":{"mediaStreamCfg":{"maxFramerate":30,"resolution":[640,480],"audioConstraints":{"autoGainControl":true,"channelCount":2,"echoCancellation":true,"noiseSuppression":true}},"broadcastCfg":{"transcodeAudioBitrateBps":128000,"maxAudioBitrateBps":128000,"maxVideoBitrateBps":500000,"maxEncodingFramerate":30}},"previewVideoElId":"preview","streamName":"[STREAM-NAME]","serverUrl":"https://bintu-webrtc.nanocosmos.de/p/webrtc"}\n')))),(0,r.yg)("p",null,"Configuration can be changed in the JSON editor under the ",(0,r.yg)("strong",{parentName:"p"},"WebcasterApiV6.Config")," section.",(0,r.yg)("br",null),"\nChanges to this config will be reflected into the location bar of the browser."),(0,r.yg)("p",null,"This means:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"you can change the settings, like resolution, bitrates, streamName etc"),(0,r.yg)("li",{parentName:"ul"},"you can then:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"reload the window and changes will be persisted"),(0,r.yg)("li",{parentName:"ul"},"or share your config by copying the URL from the location bar")))),(0,r.yg)("h3",{id:"playback"},"Playback"),(0,r.yg)("p",null,"You can play back your Webcaster ingests with our ",(0,r.yg)("strong",{parentName:"p"},"H5Live Player"),"."),(0,r.yg)("p",null,"The main sample from preceding includes a side-by-side player for your convenience when testing.\nTo create a shareable player link, append the stream name to our player demo URL:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Player URL: ",(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=%5Bstream-name%5D"},"https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=[stream-name]"))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"[Embedding]"),(0,r.yg)("p",{parentName:"admonition"},"Click ",(0,r.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_getting_started"},"here")," for more information on  how to ",(0,r.yg)("strong",{parentName:"p"},"embed the H5Live Player")," on your own webpage.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"[Secure Playback]"),(0,r.yg)("p",{parentName:"admonition"},"Also note that for secure playback, you need to create your own playback tokens.\nFind information about secure playback tokens ",(0,r.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_token_security"},"here"),".")))}d.isMDXComponent=!0}}]);