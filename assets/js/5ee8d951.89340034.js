"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9301],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={id:"nanostream_webrtc_whip_ingest",title:"WHIP Ingest Guide",sidebar_label:"WHIP Ingest"},i=void 0,s={unversionedId:"webrtc/nanostream_webrtc_whip_ingest",id:"webrtc/nanostream_webrtc_whip_ingest",title:"WHIP Ingest Guide",description:"What is WHIP?",source:"@site/docs/webrtc/nanostream_webrtc_whip_ingest.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_whip_ingest",permalink:"/docs/webrtc/nanostream_webrtc_whip_ingest",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"nanostream_webrtc_whip_ingest",title:"WHIP Ingest Guide",sidebar_label:"WHIP Ingest"},sidebar:"nanoStream Webcaster",previous:{title:"Migration Guide From v5 To v6",permalink:"/docs/webrtc/migration_guide_v6"},next:{title:"FAQ",permalink:"/docs/webrtc/nanostream_webrtc_faq"}},l={},p=[{value:"What is WHIP?",id:"what-is-whip",level:2},{value:"WHIP Ingest on nanoStream Cloud",id:"whip-ingest-on-nanostream-cloud",level:2},{value:"Features",id:"features",level:3},{value:"WHIP Ingest Quick Guide",id:"whip-ingest-quick-guide",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"what-is-whip"},"What is WHIP?"),(0,a.yg)("p",null,"The ",(0,a.yg)("em",{parentName:"p"},"WebRTC-HTTP Ingest Protocol")," (WHIP) is a simple HTTP-based protocol that allows ingestion of media content into a broadcasting ingestion endpoint."),(0,a.yg)("p",null,"It defines how to use standard HTTP mechanisms like POST requests, authentication headers, and response codes for establishing a WebRTC connection to ingest audio/video."),(0,a.yg)("admonition",{title:"WHIP Overview",type:"note"},(0,a.yg)("h3",{parentName:"admonition",id:"how-whip-works"},"How WHIP Works"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"The client (encoder/camera) sends an HTTP POST request to the WHIP endpoint with the SDP offer in the body."),(0,a.yg)("li",{parentName:"ul"},"The WHIP endpoint responds with a 201 Created status and the SDP answer in the body."),(0,a.yg)("li",{parentName:"ul"},"This establishes the WebRTC connection for media ingestion."),(0,a.yg)("li",{parentName:"ul"},"The WHIP endpoint can provide ICE server configuration via Link headers in responses.")),(0,a.yg)("h3",{parentName:"admonition",id:"benefits-of-whip"},"Benefits of WHIP"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Uses widely adopted HTTP protocol rather than proprietary protocols."),(0,a.yg)("li",{parentName:"ul"},"Leverages standard HTTP security, load balancing, and so on."),(0,a.yg)("li",{parentName:"ul"},"Simplifies integration of encoders/cameras with WebRTC platforms."))),(0,a.yg)("h2",{id:"whip-ingest-on-nanostream-cloud"},"WHIP Ingest on nanoStream Cloud"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("p",null,"Our WebRTC-HTTP servers support the following features:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create broadcast streams via WebRTC"),(0,a.yg)("li",{parentName:"ul"},"Push broadcast to nanoStream Cloud upstream via RTMP protocol"),(0,a.yg)("li",{parentName:"ul"},"Toggle/switch client side video tracks (inputs) at runtime"),(0,a.yg)("li",{parentName:"ul"},"Control upstream quality at runtime")),(0,a.yg)("p",null,"The current implementation of WHIP follows the mandatory parts from ",(0,a.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ietf-wish-whip/"},"specifications"),","),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Endpoint provides service to create resource and delete resource. "),(0,a.yg)("li",{parentName:"ul"},"Bearer token authorization isn't required in the current implementation."),(0,a.yg)("li",{parentName:"ul"},"Requires Input sources to have H.264 codec for video, and Opus for audio. "),(0,a.yg)("li",{parentName:"ul"},"The client should append configuration options as query parameters for the target ingest to set up the broadcast stream.\nThe parameters ",(0,a.yg)("inlineCode",{parentName:"li"},"stream_name")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"stream_url")," are ",(0,a.yg)("strong",{parentName:"li"},"mandatory"),".")),(0,a.yg)("p",null,"We provide a WHIP endpoint at:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," https://bintu-webrtc.nanocosmos.de/p/webrtc\n")),(0,a.yg)("p",null,"The request to create resource will then look like the form:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"POST https://bintu-webrtc.nanocosmos.de/p/webrtc?stream_name=<example-stream>&stream_url=rtmp://bintu-stream.nanocosmos.de:1935/live\n[sdp body]\n")),(0,a.yg)("h3",{id:"whip-ingest-quick-guide"},"WHIP Ingest Quick Guide"),(0,a.yg)("admonition",{title:"WHIP Ingest Setup",type:"tip"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Prepare for streaming")),(0,a.yg)("p",{parentName:"li"},"Obtain Stream Name"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Sign in to your nanoStream Cloud dashboard"),(0,a.yg)("li",{parentName:"ul"},"Create a new stream or choose an existing created or Ended stream"),(0,a.yg)("li",{parentName:"ul"},"Alternatively, get your API key and prepare stream with ",(0,a.yg)("a",{parentName:"li",href:"../cloud/bintu_api"},"bintu API")," "))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Configure Encoder ingest URL")),(0,a.yg)("p",{parentName:"li"},"In your encoder software or device, select the WHIP ingest protocol."),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Use the WHIP ingest URL format: ")))),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"    https://bintu-webrtc.nanocosmos.de/p/webrtc?stream_name=<STREAM NAME>&stream_url=<STREAM URL>\n\n")),(0,a.yg)("p",{parentName:"admonition"},"Full request path will have the form:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"\n    https://bintu-webrtc.nanocosmos.de/p/webrtc?stream_name=<string>&stream_url=rtmp://bintu-stream.nanocosmos.de/live\n\n")),(0,a.yg)("ol",{parentName:"admonition",start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Encoder Settings")),(0,a.yg)("p",{parentName:"li"},"Use H.264 video codec, and Opus audio codec.\nConfigure video resolution and audio quality options according to preferences"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("em",{parentName:"p"},"Recommended settings"),": "),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"W\xd7H: 1280\xd7720 resolution"),(0,a.yg)("li",{parentName:"ul"},"FR: 25 fps"),(0,a.yg)("li",{parentName:"ul"},"Bitrate: 2 Mbps "),(0,a.yg)("li",{parentName:"ul"},"Keyframe Interval: 2 second, or GoP size of ",(0,a.yg)("em",{parentName:"li"},"FR"),"\xd72 ",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"(i.e. in OBS > Settings > Output (Advanced) > Streaming > Encoder Setting > Keyframe Interval)")))))),(0,a.yg)("ol",{parentName:"admonition",start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Start Stream"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Start streaming from your encoder"),(0,a.yg)("li",{parentName:"ul"},"Your stream will be ingested into nanoStream Cloud via WHIP"),(0,a.yg)("li",{parentName:"ul"},"The stream will broadcast over RTMP from:")))),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"\nrtmp://bintu-stream.nanocosmos.de/live/STREAM-NAME\n\n"))))}c.isMDXComponent=!0}}]);