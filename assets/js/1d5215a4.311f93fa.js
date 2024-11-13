"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[2432],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40376:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(58168),o=(t(96540),t(15680));const r={id:"cloud_getting_started",title:"Getting started",sidebar_label:"Getting started"},i=void 0,l={unversionedId:"cloud/cloud_getting_started",id:"cloud/cloud_getting_started",title:"Getting started",description:"To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key here.",source:"@site/docs/cloud/cloud_getting_started.md",sourceDirName:"cloud",slug:"/cloud/cloud_getting_started",permalink:"/docs/cloud/cloud_getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1731523817,formattedLastUpdatedAt:"Nov 13, 2024",frontMatter:{id:"cloud_getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"nanoStream Cloud",previous:{title:"Introduction",permalink:"/docs/cloud/cloud_introduction"},next:{title:"Live Encoding",permalink:"/docs/cloud/live_encoding"}},s={},d=[{value:"Using bintu.live",id:"using-bintulive",level:2},{value:"What you need",id:"what-you-need",level:3},{value:"Create a nanoStream Cloud account (bintu.live)",id:"create-a-nanostream-cloud-account-bintulive",level:3},{value:"Create a new live stream",id:"create-a-new-live-stream",level:3},{value:"Start a live stream broadcast",id:"start-a-live-stream-broadcast",level:2},{value:"Live Encoder Usage",id:"live-encoder-usage",level:3},{value:"Configuring the camera and live encoder",id:"configuring-the-camera-and-live-encoder",level:3},{value:"Running the stream",id:"running-the-stream",level:3},{value:"Play your live stream",id:"play-your-live-stream",level:3},{value:"Additional features",id:"additional-features",level:2},{value:"Metrics",id:"metrics",level:3},{value:"API Access",id:"api-access",level:3},{value:"Secure Streaming",id:"secure-streaming",level:3},{value:"Example:",id:"example",level:4},{value:"More information",id:"more-information",level:2}],u={toc:d},c="wrapper";function p(e){let{components:a,...t}=e;return(0,o.yg)(c,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Before starting",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key ",(0,o.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"here"),". ",(0,o.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,o.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,o.yg)("h2",{id:"using-bintulive"},"Using bintu.live"),(0,o.yg)("p",null,"bintu.live is the API for nanoStream Cloud. You can use it via the nanoStream Cloud Dashboard or the API."),(0,o.yg)("article",{class:"margin-top--lg"},(0,o.yg)("section",{class:"row list_ZO3j"},(0,o.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,o.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"https://dashboard.nanostream.cloud/"},(0,o.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Installation"},"Dashboard"),(0,o.yg)("p",{class:"text--truncate cardDescription_mCBT"},"The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities."))),(0,o.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,o.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/"},(0,o.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Configuration"},"Bintu API"),(0,o.yg)("p",{class:"text--truncate cardDescription_mCBT"},"bintu.live is a stream management platform used by nanoStream for end to end live streaming services. bintu live can be used to create, manage, group and tag live streams."))))),(0,o.yg)("h3",{id:"what-you-need"},"What you need"),(0,o.yg)("p",null,"To create and broadcast a live stream, you need a live source.\nThis can be either a webcam, external camera, streaming device, or even your PC screen.\nTo send a live stream to nanoStream Cloud, you need a streaming software or hardware,\nor just your browser which directly can be used to send a live stream to your audience."),(0,o.yg)("p",null,"See our introduction videos and tutorials for step-by-step instructions!"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/videos"},"Videos"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/"},"Getting started with the OBS Software"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2019/09/how-to-create-a-livestream-with-our-nanostream-webrtc-application-demo-version/"},"Getting started with nanoStream Webcaster from the browser")))),(0,o.yg)("h3",{id:"create-a-nanostream-cloud-account-bintulive"},"Create a nanoStream Cloud account (bintu.live)"),(0,o.yg)("p",null,"If you have not created an account yet, you can ",(0,o.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_Overview#authentication"},"Click here")," to see how you can authenticate to the nanoStream Cloud/Bintu Dashboard."),(0,o.yg)("h3",{id:"create-a-new-live-stream"},"Create a new live stream"),(0,o.yg)("p",null,"To learn how to create your first stream with our nanoStream Cloud/Bintu dashboard, ",(0,o.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_Start_Streaming"},"click here"),"."),(0,o.yg)("h2",{id:"start-a-live-stream-broadcast"},"Start a live stream broadcast"),(0,o.yg)("p",null,"Once you created a stream via the dashboard, you will see stream instructions to start your stream. ",(0,o.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_Overview#instructions-to-start-a-stream"},"Click here")," to learn more about it."),(0,o.yg)("p",null,"To start a live stream broadcast, you need a live encoder software, either based on an ",(0,o.yg)("inlineCode",{parentName:"p"},"RTMP Live Encoder application"),", or the browser-based ",(0,o.yg)("a",{parentName:"p",href:"../webrtc/nanostream_webrtc_getting_started"},"nanoStream Webcaster broadcaster"),"."),(0,o.yg)("p",null,"You can use 3rd part software like ",(0,o.yg)("a",{parentName:"p",href:"https://obsproject.com/"},"OBS (Open Broadcaster)")," or professional Live Encoders like ",(0,o.yg)("a",{parentName:"p",href:"https://www.elemental.com/products/aws-elemental-live"},"Elemental Live"),"."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The primary ingest protocol is RTMP.")),(0,o.yg)("h3",{id:"live-encoder-usage"},"Live Encoder Usage"),(0,o.yg)("p",null,"Copy/paste the ingest URL to use it with your live encoder software."),(0,o.yg)("p",null,"If you are not sure, where you can find these informations, ",(0,o.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_Stream_Overview"},"click here")," to learn more about the stream overview of the nanoStream Cloud/bintu Dashboard."),(0,o.yg)("admonition",{title:"Example",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"rtmp://bintu-stream.nanocosmos.de/live/XXXXX-YYYYY")),(0,o.yg)("p",null,"For some live encoder software, you might need to separate the stream url and stream name, e.g."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"RTMP URL"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"rtmp://bintu-stream.nanocosmos.de/live")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Stream Name")),": ",(0,o.yg)("inlineCode",{parentName:"li"},"XXXXX-YYYYY"))),(0,o.yg)("admonition",{title:"good to know",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Some applications like ",(0,o.yg)("inlineCode",{parentName:"p"},"OBS")," use the name ",(0,o.yg)("inlineCode",{parentName:"p"},"Stream Key")," instead ",(0,o.yg)("inlineCode",{parentName:"p"},"Stream Name"))),(0,o.yg)("h3",{id:"configuring-the-camera-and-live-encoder"},"Configuring the camera and live encoder"),(0,o.yg)("p",null,"Codecs: "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"H264 video"),","),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"AAC audio"))),(0,o.yg)("p",null,"Video resolution: flexible, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"640\xd7480"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"1280\xd7720"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"1920\xd71080")),(0,o.yg)("p",null,"Video bitrate: flexible, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"500 kbits/s"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"1 MBit/s")),(0,o.yg)("h3",{id:"running-the-stream"},"Running the stream"),(0,o.yg)("p",null,"After entering the ",(0,o.yg)("inlineCode",{parentName:"p"},"RTMP ingest URL")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"stream name")," into your live encoder software, you can instantly start the broadcast to nanoStream Cloud / bintu.live."),(0,o.yg)("h3",{id:"play-your-live-stream"},"Play your live stream"),(0,o.yg)("p",null,"Play the stream directly in your browser or by inserting the Playout URL into a player application. By using the ",(0,o.yg)("inlineCode",{parentName:"p"},"Web Playout URL"),", you will automatically be directed to a web player page based on our unique ",(0,o.yg)("inlineCode",{parentName:"p"},"nanoStream H5Live")," low-latency playback technology."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The player URL is different from the Ingest URL! This is to adjust to world regional locations of our worldwide CDN with ingest and playback servers.")),(0,o.yg)("p",null,"The H5Live player is running on a sample page which also shows an embed code to copy to your own web page."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_Overview#nanoplayer"},"Click here")," to learn more about the nanoPlayer within the nanoStream Cloud/Bintu dashboard.\nIf you want to learn more about the usage of the nanoPlayer, ",(0,o.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_introduction"},"click here")," to dive into our developer documentation."),(0,o.yg)("h2",{id:"additional-features"},"Additional features"),(0,o.yg)("h3",{id:"metrics"},"Metrics"),(0,o.yg)("p",null,"nanoStream Cloud and the unique nanoStream H5Live Player have been designed as an easy to use ultra-low-latency and light-weight live streaming platform. nanoStream Analytics follows the same philosophy. Easy to use, lightweight and focused on delivering our partners the information that makes their business more successful."),(0,o.yg)("p",null,"nanoStream Cloud Analytics offers a great way to monitor and analyze the performance and quality of service of your live streams. "),(0,o.yg)("admonition",{title:"Getting started",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you have not created an account yet, you can ",(0,o.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,o.yg)("h3",{id:"api-access"},"API Access"),(0,o.yg)("admonition",{title:"Your API key",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"You can find your bintu API key on the ",(0,o.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"organisation overview page"),".")),(0,o.yg)("h3",{id:"secure-streaming"},"Secure Streaming"),(0,o.yg)("p",null,"Secure streaming can be done on the ingest side based on rtmps or WebRTC."),(0,o.yg)("p",null,"For encrypted ingest with rtmps, you can use port 1937 instead 1935."),(0,o.yg)("h4",{id:"example"},"Example:"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Standard non-encrypted ingest (RTMP)"),": rtmp://bintu-stream.nanocosmos.de:1935/live/STREAM\n",(0,o.yg)("strong",{parentName:"p"},"Encrypted ingest (RTMPS)"),": rtmps://bintu-stream.nanocosmos.de:1937/live/STREAM"),(0,o.yg)("p",null,"For secure playback with the nanoStream H5Live Player you need to have your account enabled for playback security. See the h5live secure playback documentation."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"../cloud-frontend-v3/Dashboard_Secure"},"Learn more about Secure Playback & Secure Token"),"."),(0,o.yg)("h2",{id:"more-information"},"More information"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://dashboard.nanostream.cloud/"},"nanoStream Cloud/Bintu Dashboard")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://doc.pages.nanocosmos.de/bintuapi-docs"},"bintu.live API documentation")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"http://www.nanocosmos.de/demo"},"nanoStream software demos and downloads"))))}p.isMDXComponent=!0}}]);