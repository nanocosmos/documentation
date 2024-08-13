"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1704],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=m(a),u=r,y=g["".concat(s,".").concat(u)]||g[u]||d[u]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));const i={id:"srt_ingest",title:"nanoStream Cloud SRT Ingest Guide",sidebar_label:"SRT Ingest"},o=void 0,l={unversionedId:"cloud/srt_ingest",id:"cloud/srt_ingest",title:"nanoStream Cloud SRT Ingest Guide",description:"What is SRT",source:"@site/docs/cloud/srt_ingest.md",sourceDirName:"cloud",slug:"/cloud/srt_ingest",permalink:"/docs/cloud/srt_ingest",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"srt_ingest",title:"nanoStream Cloud SRT Ingest Guide",sidebar_label:"SRT Ingest"},sidebar:"nanoStream Cloud",previous:{title:"Live Encoding",permalink:"/docs/cloud/live_encoding"},next:{title:"Live Recording and VOD",permalink:"/docs/cloud/live-recording-vod"}},s={},m=[{value:"What is SRT",id:"what-is-srt",level:2},{value:"SRT Setup Guide",id:"srt-setup-guide",level:2},{value:"Ingest",id:"ingest",level:2},{value:"Supported Formats and Codecs",id:"supported-formats-and-codecs",level:3},{value:"Server Domains and Port",id:"server-domains-and-port",level:3},{value:"SRT Stream Id",id:"srt-stream-id",level:3},{value:"Stream Id limitations",id:"stream-id-limitations",level:3},{value:"Stream Id examples",id:"stream-id-examples",level:4},{value:"Ingest Parameters",id:"ingest-parameters",level:3},{value:"Example of Setup using OBS Studio",id:"example-of-setup-using-obs-studio",level:3},{value:"Ingest Address",id:"ingest-address",level:3},{value:"Global Ingest Domain (Recommended)",id:"global-ingest-domain-recommended",level:4},{value:"For Europe Domain",id:"for-europe-domain",level:4},{value:"For North America Domain",id:"for-north-america-domain",level:4},{value:"For South America Domain",id:"for-south-america-domain",level:4},{value:"Stream Transcoding and ABR",id:"stream-transcoding-and-abr",level:3},{value:"Playback",id:"playback",level:2},{value:"Using H5Live Player",id:"using-h5live-player",level:3},{value:"Using RTMP",id:"using-rtmp",level:3}],p={toc:m},g="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(g,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"what-is-srt"},"What is SRT"),(0,r.yg)("p",null,"The Secure Reliable Transport (SRT) protocol is a user-level protocol designed for low-latency live video streaming and generic bulk data transfer over the internet. It is built on top of UDP and provides reliability and security features optimized for real-time data transmission."),(0,r.yg)("h2",{id:"srt-setup-guide"},"SRT Setup Guide"),(0,r.yg)("p",null,"The SRT setup will require creating a new stream or making use of an existing stream in your organization account for publishing and viewing. In this workflow, SRT streaming protocol will be used for ingest while playing back with H5Live player or RTMP protocol. ",(0,r.yg)("em",{parentName:"p"},"SRT playback")," is not supported at the moment."),(0,r.yg)("h2",{id:"ingest"},"Ingest"),(0,r.yg)("h3",{id:"supported-formats-and-codecs"},"Supported Formats and Codecs"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Stream format")),(0,r.yg)("td",{parentName:"tr",align:null},"MPEG-TS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Track count")),(0,r.yg)("td",{parentName:"tr",align:null},"Single channel of video and/or single channel of audio")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Video codec")),(0,r.yg)("td",{parentName:"tr",align:null},"H.264")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Audio codec")),(0,r.yg)("td",{parentName:"tr",align:null},"AAC")))),(0,r.yg)("h3",{id:"server-domains-and-port"},"Server Domains and Port"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Global domain (preferred)"),(0,r.yg)("th",{parentName:"tr",align:null},"bintu-srt.nanocosmos.de"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Asia domain")),(0,r.yg)("td",{parentName:"tr",align:null},"bintu-srt-as.nanocosmos.de")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Europe domain")),(0,r.yg)("td",{parentName:"tr",align:null},"bintu-srt-eu.nanocosmos.de")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"North America domain")),(0,r.yg)("td",{parentName:"tr",align:null},"bintu-srt-us.nanocosmos.de")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"South America domain")),(0,r.yg)("td",{parentName:"tr",align:null},"bintu-srt-sa.nanocosmos.de")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Port number")),(0,r.yg)("td",{parentName:"tr",align:null},"5000")))),(0,r.yg)("h3",{id:"srt-stream-id"},"SRT Stream Id"),(0,r.yg)("p",null,"SRT stream id format definition: ",(0,r.yg)("inlineCode",{parentName:"p"},"prefix:streamname[:postfix]")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"prefix: ",(0,r.yg)("inlineCode",{parentName:"li"},"push")," for ingest or publish action"),(0,r.yg)("li",{parentName:"ul"},"streamname: existing Bintu stream name in the form ",(0,r.yg)("inlineCode",{parentName:"li"},"XXXXX-YYYYY")),(0,r.yg)("li",{parentName:"ul"},"suffix: ",(0,r.yg)("inlineCode",{parentName:"li"},"record")," to enable VOD recording of a live stream (optional)")),(0,r.yg)("h3",{id:"stream-id-limitations"},"Stream Id limitations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The SRT protocol specification limits the Stream Id length to 512 characters."),(0,r.yg)("li",{parentName:"ul"},"Allowed character set in SRT Stream Ids: ",(0,r.yg)("inlineCode",{parentName:"li"},"a-z"),",",(0,r.yg)("inlineCode",{parentName:"li"},"A-Z"),",",(0,r.yg)("inlineCode",{parentName:"li"},"0-9"),",",(0,r.yg)("inlineCode",{parentName:"li"},"?"),",",(0,r.yg)("inlineCode",{parentName:"li"},"&"),",",(0,r.yg)("inlineCode",{parentName:"li"},"="),",",(0,r.yg)("inlineCode",{parentName:"li"},"-"),",",(0,r.yg)("inlineCode",{parentName:"li"},"_"),",",(0,r.yg)("inlineCode",{parentName:"li"},",")," plus delimiter ",(0,r.yg)("inlineCode",{parentName:"li"},":"),". "),(0,r.yg)("li",{parentName:"ul"},"Colon delimiter ",(0,r.yg)("inlineCode",{parentName:"li"},":")," is permited on the stream id, ",(0,r.yg)("strong",{parentName:"li"},"not")," on stream name ",(0,r.yg)("strong",{parentName:"li"},"nor")," stream name parameters. "),(0,r.yg)("li",{parentName:"ul"},"Percent sign ",(0,r.yg)("inlineCode",{parentName:"li"},"%")," is only allowed in the context of URL encoding.")),(0,r.yg)("h4",{id:"stream-id-examples"},"Stream Id examples"),(0,r.yg)("p",null,"Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"XXXXX-YYYYY")," with an existing Bintu stream name."),(0,r.yg)("p",null,"Basic push: ",(0,r.yg)("inlineCode",{parentName:"p"},"push:XXXXX-YYYYY")),(0,r.yg)("p",null,"Push with vod recording: ",(0,r.yg)("inlineCode",{parentName:"p"},"push:XXXXX-YYYYY:record")),(0,r.yg)("p",null,"Push with stream name parameters: ",(0,r.yg)("inlineCode",{parentName:"p"},"push:XXXXX-YYYYY?param1=one&param2=two")),(0,r.yg)("p",null,"Push with stream name parameters and VOD recording: ",(0,r.yg)("inlineCode",{parentName:"p"},"push:XXXXX-YYYYY?param1=one&param2=two:record")),(0,r.yg)("admonition",{title:"note",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Some streaming applications where the SRT stream id needs to be configured as part of a URL, for example ",(0,r.yg)("em",{parentName:"p"},"OBS Studio"),", may require the stream name parameters to use URL encoding.\nThe URL encoding can be applied to the entire Stream Id or stream name parameters only.\nThe URL encoded parts will be decoded accordingly on the server side."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"See the following examples"),":"),(0,r.yg)("p",{parentName:"admonition"},"Push with URL encoded stream id: ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"push%3AXXXXX-YYYYY%3Fparam1%3Done%26param2%3Dtwo")),(0,r.yg)("p",{parentName:"admonition"},"Push with URL encoded stream name parameters: ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"push:XXXXX-YYYYY%3Fparam1%3Done%26param2%3Dtwo")),(0,r.yg)("p",{parentName:"admonition"},"Push with URL encoded stream name parameters and VOD recording:",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"push:XXXXX-YYYYY%3Fparam1%3Done%26param2%3Dtwo:record"))),(0,r.yg)("h3",{id:"ingest-parameters"},"Ingest Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"SRT mode")),(0,r.yg)("td",{parentName:"tr",align:null},"caller")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"SRT transmission type")),(0,r.yg)("td",{parentName:"tr",align:null},"live")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"SRT latency")),(0,r.yg)("td",{parentName:"tr",align:null},"Default is ",(0,r.yg)("strong",{parentName:"td"},"500ms"),". Higher values can be used to maintain more buffer and will help to reduce packet drop in lossy transmission situations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"SRT timeout")),(0,r.yg)("td",{parentName:"tr",align:null},"Recommended is ",(0,r.yg)("strong",{parentName:"td"},"1 second"),". Higher values can solve connect issues in case of longer routing distances or high round trip times (RTT).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"SRT stream id")),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#srt-stream-id"},"Above"),".")))),(0,r.yg)("h3",{id:"example-of-setup-using-obs-studio"},"Example of Setup using OBS Studio"),(0,r.yg)("p",null,"OBS Studio is able to support SRT streaming in versions 25.0 or newer and has the flexibility of fine tuning capabilities.\nYou can refer more here: ",(0,r.yg)("a",{parentName:"p",href:"https://obsproject.com/de/kb/srt-protocol-streaming-guide#stream-with-srt.",title:"OBS SRT Protocol Streaming Guide"},"SRT Protocol Streaming Guide")),(0,r.yg)("admonition",{title:"note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"OBS expects timeout and latency values in microseconds, that is, seconds \u2a09 1000000.")),(0,r.yg)("h3",{id:"ingest-address"},"Ingest Address"),(0,r.yg)("h4",{id:"global-ingest-domain-recommended"},"Global Ingest Domain (Recommended)"),(0,r.yg)("p",null,"Setup server with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"srt://bintu-srt.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY\n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Screenshot: OBS Server Setup",src:a(75180).A,width:"1029",height:"370"}),"\n",(0,r.yg)("em",{parentName:"p"},"Screenshot: OBS Server Setup")),(0,r.yg)("h4",{id:"for-europe-domain"},"For Europe Domain"),(0,r.yg)("p",null,"Setup server with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"srt://bintu-srt-eu.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY\n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Screenshot: OBS Server Setup For Europe Domain",src:a(53241).A,width:"1032",height:"368"}),"\n",(0,r.yg)("em",{parentName:"p"},"Screenshot: OBS Server Setup For Europe Domain")),(0,r.yg)("h4",{id:"for-north-america-domain"},"For North America Domain"),(0,r.yg)("p",null,"Setup server with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"srt://bintu-srt-us.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY\n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Screenshot: OBS Server Setup For North America Domain",src:a(72223).A,width:"1032",height:"369"}),"\n",(0,r.yg)("em",{parentName:"p"},"Screenshot: OBS Server Setup For North America Domain")),(0,r.yg)("h4",{id:"for-south-america-domain"},"For South America Domain"),(0,r.yg)("p",null,"Setup server with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"srt://bintu-srt-sa.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY\n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Screenshot: OBS Server Setup For South America Domain",src:a(12603).A,width:"1032",height:"370"}),"\n",(0,r.yg)("em",{parentName:"p"},"Screenshot: OBS Server Setup For South America Domain")),(0,r.yg)("p",null,"Whereby ",(0,r.yg)("inlineCode",{parentName:"p"},"XXXXX-YYYYY")," is an existing Bintu stream name in your organization account and ",(0,r.yg)("inlineCode",{parentName:"p"},"latency"),", and",(0,r.yg)("inlineCode",{parentName:"p"},"timeout")," values provided in ",(0,r.yg)("strong",{parentName:"p"},"microseconds"),"."),(0,r.yg)("h3",{id:"stream-transcoding-and-abr"},"Stream Transcoding and ABR"),(0,r.yg)("p",null,"If your organization account has transcoding feature enabled you may set up ABR with SRT. Just use the pass-through stream name for SRT ingest."),(0,r.yg)("h2",{id:"playback"},"Playback"),(0,r.yg)("p",null,"SRT playback is not supported at the moment.\nPlayback is possible using the H5live Player or through RTMP protocol."),(0,r.yg)("h3",{id:"using-h5live-player"},"Using H5Live Player"),(0,r.yg)("p",null,"For a single bit-rate stream, the ingested stream can be played out with the following playback URL: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY\n")),(0,r.yg)("p",null,"Whereby ",(0,r.yg)("inlineCode",{parentName:"p"},"XXXXX-YYYYY")," is the Bintu stream name previously set up for SRT ingest."),(0,r.yg)("p",null,"For ABR playback, you can setup a stream group on the latest dashboard v3.\nFind more information following the video guide in the link: "),(0,r.yg)("admonition",{title:"usage of streamgroups",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../cloud-frontend-v3/Dashboard_Start_Streaming"},"Dashboard: Set up streamgroups"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../nanoplayer/nanoplayer_feature_stream_group_configuration"},"nanoPlayer: Streamgroup configuration"),".")),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("em",{parentName:"p"},"If you are on a secure Bintu organization account, you will find information on playback with secure parameters ",(0,r.yg)("a",{parentName:"em",href:"../nanoplayer/nanoplayer_token_security"},"click here"),"."))),(0,r.yg)("h3",{id:"using-rtmp"},"Using RTMP"),(0,r.yg)("p",null,"Following, an example using RTMP protocol playback with ",(0,r.yg)("em",{parentName:"p"},"ffplay")," from the ",(0,r.yg)("em",{parentName:"p"},"ffmpeg")," project on the command line:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"ffplay rtmp://bintu-play.nanocosmos.de/play/XXXXX-YYYYY\n")),(0,r.yg)("p",null,"Whereby ",(0,r.yg)("inlineCode",{parentName:"p"},"XXXXX-YYYYY")," is the Bintu stream name that was configured in the SRT ingest."))}d.isMDXComponent=!0},53241:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/obs-srt-eu-89f21114e7c33a0a21c9679850fddbe6.png"},12603:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/obs-srt-sa-2b47683387d838f966e83f8686437a3b.png"},72223:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/obs-srt-us-c1c1b3b212a35c9c147c389b06a164fe.png"},75180:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/obs-srt-9be23cd659e72b991052957f5c47328c.png"}}]);