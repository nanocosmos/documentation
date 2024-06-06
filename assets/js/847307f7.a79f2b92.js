"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4083],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>d});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),y=l,d=m["".concat(s,".").concat(y)]||m[y]||g[y]||r;return n?t.createElement(d,i(i({ref:a},p),{},{components:n})):t.createElement(d,i({ref:a},p))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},62318:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=n(58168),l=(n(96540),n(15680));const r={id:"faq_streaming",title:"General Questions",sidebar_label:"Live Streaming"},i=void 0,o={unversionedId:"faq/faq_streaming",id:"faq/faq_streaming",title:"General Questions",description:"What is nanoStream Cloud?",source:"@site/docs/faq/faq_streaming.md",sourceDirName:"faq",slug:"/faq/faq_streaming",permalink:"/docs/faq/faq_streaming",draft:!1,tags:[],version:"current",lastUpdatedAt:1717712187,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"faq_streaming",title:"General Questions",sidebar_label:"Live Streaming"}},s={},u=[{value:"nanoStream Cloud is a combination of software and services to enable interactive live streaming Live at a global scale.",id:"nanostream-cloud-is-a-combination-of-software-and-services-to-enable-interactive-live-streaming-live-at-a-global-scale",level:4},{value:"Ingest/Upstream from Live Sources:",id:"ingestupstream-from-live-sources",level:4},{value:"Playback/Downstream:",id:"playbackdownstream",level:4},{value:"RTMP URL Structure",id:"rtmp-url-structure",level:4},{value:"Playback",id:"playback",level:4},{value:"Data Traffic",id:"data-traffic",level:4},{value:"Encoder Settings",id:"encoder-settings",level:4},{value:"OUTPUT STREAMING URL",id:"output-streaming-url",level:4},{value:"H5Live",id:"h5live",level:4},{value:"RTMP",id:"rtmp",level:4},{value:"Example Multiplexing Standards:",id:"example-multiplexing-standards",level:4}],p={toc:u},m="wrapper";function g(e){let{components:a,...r}=e;return(0,l.yg)(m,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"What is nanoStream Cloud?")),(0,l.yg)("p",null,(0,l.yg)("h4",{id:"nanostream-cloud-is-a-combination-of-software-and-services-to-enable-interactive-live-streaming-live-at-a-global-scale"},"nanoStream Cloud is a combination of software and services to enable interactive live streaming Live at a global scale."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"nanoStream Cloud Infographic",src:n(90462).A,width:"1241",height:"602"})),(0,l.yg)("p",null,"You can connect a live source (camera) to a live encoder, and send your stream to nanoStream Cloud"),(0,l.yg)("p",null,"nanoStream H5Live Player then works on all browsers to play this live stream with ultra-low-latency."),(0,l.yg)("p",null,"nanoStream Cloud provides a global CDN to ingest and playback your live streams with high quality anywhere in the world.\nEasy to use dashboards, code snippets and APIs enable easy integration into custom applications."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"What is ultra low latency live streaming?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Live streaming latency is the time between the video leaves the camera and shown on the player device. Ultra-low-latency live streaming means near-realtime latency values of around 1 seconds."),(0,l.yg)("p",null,"nanoStream Cloud supports ultra-low latency live streaming, on any HTML5 browser with a global scale."),(0,l.yg)("p",null,"ULL Live Streaming enables interactive applications for audience engagement."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Which Systems (OS) do you support?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"All existing major browsers and platforms are supported which support H264/AAC live playback."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Which video, audio and streaming formats does nanoStream support (H264, RTMP, RTSP, ...) ?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"nanocosmos supports the following Streaming formats:"),(0,l.yg)("h4",{id:"ingestupstream-from-live-sources"},"Ingest/Upstream from Live Sources:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"RTMP with H264 Video and AAC Audio (nanoStream Apps/SDKs or 3rd party software/hardware)"),(0,l.yg)("li",{parentName:"ul"},"nanoStream Webcaster (browser based)"),(0,l.yg)("li",{parentName:"ul"},"Other formats upon request, e.g. SRT, RTSP, H265, VP9")),(0,l.yg)("h4",{id:"playbackdownstream"},"Playback/Downstream:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"H5Live (unique live streaming with ultra-low-latencyy on all browsers)"),(0,l.yg)("li",{parentName:"ul"},"HLS (ultra-low latency based on H5Live)"),(0,l.yg)("li",{parentName:"ul"},"RTMP")),(0,l.yg)("p",null,"For plugin-free operation and mobile devices, the built-in hardware codecs are supported (H264 Video, AAC Audio)."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"How to use RTMP for Live Encoding from your Application or Server?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"RTMP is still a valid and suitable format for live encoding and broadcast from your camera source, used by most live streaming platforms.\nMost Live Encoder software, hardware and servers support RTMP.\nFor ULL Live Streaming, certain configurations are recommended, like ",(0,l.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/"},"OBS"),"."),(0,l.yg)("h4",{id:"rtmp-url-structure"},"RTMP URL Structure"),(0,l.yg)("p",null,"RTMP is based on the following URL format:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"rtmp://servername:port/application/streamname")),(0,l.yg)("p",null,"The port is optional and ",(0,l.yg)("inlineCode",{parentName:"p"},"1935")," by default."),(0,l.yg)("p",null,"Example to stream to nanoStream Cloud:\n",(0,l.yg)("inlineCode",{parentName:"p"},"rtmp:/bintu-stream.nanocosmos.de/live/XXXX-YYYY")),(0,l.yg)("p",null,"The \u201crtmp application\u201d is \u201clive\u201d, the \u201cstream name\u201d is XXXX-YYYY"),(0,l.yg)("p",null,"Sometimes the RTMP URL is split into the base URL and the stream name like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"URL: rtmp:/bintu-stream.nanocosmos.de/live\nStream Name: XXXX-YYYY\n")),(0,l.yg)("p",null,"With nanoStream Cloud, you get this information with the bintu API or dashboard (",(0,l.yg)("a",{parentName:"p",href:"https://bintu.nanocosmos.de"},"https://bintu.nanocosmos.de"),")."),(0,l.yg)("p",null,"Some software and server applications require a username and password. This rtmp-specific proprietary information is not support by nanoStream Cloud. By default, you do not need username and password. For adding security, you can use web hooks and tokens. See separate docs."),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"playback"},"Playback"),(0,l.yg)("p",null,"Playback from nanoStream Cloud with Ultra-Low-Latency require the nanoStream H5Live Player (nanoPlayer).\nIt automatically selects the right playback format and protocol for your browser and device.\nCertain apps and settop-boxes which do not support Javascript can also use our fallback URLs, please contact us for details."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Resolution and bitrate settings")),(0,l.yg)("p",null,(0,l.yg)("p",null,"The primary quality impact is done by the pixel resolution (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"1280\xd7720"),") and the video encoder bitrate."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"Video Encoding Quality is very much dependent on the content! Static content with little movement and structure is much better to compress than moving content."),(0,l.yg)("li",{parentName:"ul"},"Mobile networks have limited bandwidth and usually lead to a quality impact of a stream. If you set a high bitrate which cannot be delivered through the network, you will get buffering impacts."),(0,l.yg)("li",{parentName:"ul"},"For live streams, a constant pixel resolution is required, as most streaming and playback environments do not support changing resolutions."))),(0,l.yg)("p",null,"The choice of the resolution and bitrate is highly dependent on your requirements and expected quality results. There are different options to choose from, you can always adjust settings according to your needs."),(0,l.yg)("p",null,"It is highly recommended to run your own tests based on typical content, and approve by your own quality expectations."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Here is some general information:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Standard resolutions: ",(0,l.yg)("inlineCode",{parentName:"li"},"640\xd7480 (4:3)")," or ",(0,l.yg)("inlineCode",{parentName:"li"},"640\xd7360 (16:9)"),", up to ",(0,l.yg)("inlineCode",{parentName:"li"},"720\xd7576 (4:3)"),". ",(0,l.yg)("br",null)," ",(0,l.yg)("em",{parentName:"li"},"Recommended bitrate:")," min. ",(0,l.yg)("inlineCode",{parentName:"li"},"300-500 kBits/s")," for medium quality, ",(0,l.yg)("inlineCode",{parentName:"li"},"1000 kBit/s")," for high quality"),(0,l.yg)("li",{parentName:"ul"},"HD resolution: ",(0,l.yg)("inlineCode",{parentName:"li"},"1280\xd7720 (=720p)"),". ",(0,l.yg)("br",null),(0,l.yg)("em",{parentName:"li"},"Recommended bitrates:")," ",(0,l.yg)("inlineCode",{parentName:"li"},"600-1000 kBits/s")," for low/medium quality,  ",(0,l.yg)("inlineCode",{parentName:"li"},"1000-2000 kBits/s")," for high quality"),(0,l.yg)("li",{parentName:"ul"},"Full HD: ",(0,l.yg)("inlineCode",{parentName:"li"},"1920\xd71080"),",  ",(0,l.yg)("inlineCode",{parentName:"li"},"2-3 MBit/s")," and higher"),(0,l.yg)("li",{parentName:"ul"},"4K: up to ",(0,l.yg)("inlineCode",{parentName:"li"},"3820\xd72048"),", min ",(0,l.yg)("inlineCode",{parentName:"li"},"6 MBit/s")),(0,l.yg)("li",{parentName:"ul"},"you should configure the camera in the max. resolution you would like to use for streaming"),(0,l.yg)("li",{parentName:"ul"},"it never makes sense to up-scale video"),(0,l.yg)("li",{parentName:"ul"},"Full HD takes a lot CPU and bandwidth"),(0,l.yg)("li",{parentName:"ul"},"for live streaming HD ",(0,l.yg)("inlineCode",{parentName:"li"},"720")," is probably preferrable to ",(0,l.yg)("inlineCode",{parentName:"li"},"1080"))),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Also see the recommendations by Apple, Youtube, Vimeo and Adobe")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://developer.apple.com/library/ios/technotes/tn2224/_index.html"},"Apple")," "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"http://support.google.com/youtube/bin/answer.py?hl=en&answer=1722171"},"Youtube")," "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"http://vimeo.com/help/compression"},"Vimeo")," "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"http://www.adobe.com/devnet/adobe-media-server/articles/dynstream_live/popup.html"},"Adobe"))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"data-traffic"},"Data Traffic"),(0,l.yg)("p",null,"Data traffic usage is dependent on the overall bitrate sent from the encoder, plus the bitrate received for every viewer. Total traffic usage can be calculated per hour from the bitrate: ",(0,l.yg)("inlineCode",{parentName:"p"},"bitrate/s * 3600 / 8 = x bytes/h")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Examples")),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"500 kBits/s:"),"  ",(0,l.yg)("inlineCode",{parentName:"p"},"500 * 3600 / 8 = 225 MB / hour")),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"1000 kBits/s:")," ",(0,l.yg)("inlineCode",{parentName:"p"},"1000 * 3600 / 8 = 450 MB / hour")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Can I Stream to a mobile phone or tablet pc - including iphone or iPad?")),(0,l.yg)("p",null,"Streaming to Mobile Devices is simple with nanoStream.",(0,l.yg)("p",null,"iOS requires ",(0,l.yg)("inlineCode",{parentName:"p"},"H.264")," video and ",(0,l.yg)("inlineCode",{parentName:"p"},"AAC")," audio, which is used by default in nanoStream."),(0,l.yg)("h4",{id:"encoder-settings"},"Encoder Settings"),(0,l.yg)("p",null,"Video and Audio format should be ",(0,l.yg)("inlineCode",{parentName:"p"},"H.264")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"AAC"),"."),(0,l.yg)("p",null,"Video Encoding Profile can either \u201c",(0,l.yg)("inlineCode",{parentName:"p"},"Baseline"),"\u201d, \u201c",(0,l.yg)("inlineCode",{parentName:"p"},"Main"),"\u201d or \u201c",(0,l.yg)("inlineCode",{parentName:"p"},"High"),"\u201d, dependent on the playback device support."),(0,l.yg)("p",null,"\u201c",(0,l.yg)("inlineCode",{parentName:"p"},"Baseline"),"\u201d profile may lead to slightly lower latency values (max 500ms)"),(0,l.yg)("h4",{id:"output-streaming-url"},"OUTPUT STREAMING URL"),(0,l.yg)("h4",{id:"h5live"},"H5Live"),(0,l.yg)("p",null,"The unique nanoStream h5Live player supports live playback with ultra-low-latency on all HTML5 browsers. Live Playback in iOS devices requires ",(0,l.yg)("inlineCode",{parentName:"p"},"HLS")," support (\u201cHTTP Live Streaming\u201d)."),(0,l.yg)("h4",{id:"rtmp"},"RTMP"),(0,l.yg)("p",null,"Encoder URL: Live URL + Stream Name:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"rtmp://<server>:1935/live/streamname")," "),(0,l.yg)("p",null,"See additional documentation about nanoStream Cloud and H5Live Server and Player."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Can I Stream or record to a CDN?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"nanoStream Cloud can be used as a low-latency CDN for your interactive live streams. With nanoStream Cloud, you can additionally push to other RTMP publishing points (Youtube Live, Facebook Live, and more.)"))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Can I record a video file locally or on the server?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Yes, you can either record to a file instead of streaming to a server or stream and record simultaneously. Supported file formats depend on the platform you are working. Usually ",(0,l.yg)("inlineCode",{parentName:"p"},"MP4")," is supported and recommended on all platforms."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Does the software automatically adjust the Bitrate - Adaptive Bitrate?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Yes! nanoPlayer supports Adaptive Bitrate Playback (ABR)."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Can I add meta data to the live Stream?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Yes, if you publish RTMP Meta Data, it will be passed through to nanoPlayer."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Can I Stream only Audio?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Yes, that is possible."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Is screen capture available in your product?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Yes, with nanoStream Webcaster and nanoMeet."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Do you offer hardware accelerated encoding or decoding?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"nanoPlayer automatically uses the browser-based builtin codec for playback, which is usally hardware accelerated"))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Can I automatically or manually check the available bandwidth?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"A bandwidth check function is available on Desktop and Mobile platforms."),(0,l.yg)("p",null,"There are different modes available:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"static bandwidth check before streaming"),(0,l.yg)("li",{parentName:"ul"},"dynamic bandwidth check during streaming (adaptive bitrate)")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Is your product compatible with Flash?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Flash is an outdated technology."),(0,l.yg)("p",null,"nanoStream is compatible with the ",(0,l.yg)("inlineCode",{parentName:"p"},"RTMP streaming protocol"),", which is independent from Flash."),(0,l.yg)("p",null,"With ",(0,l.yg)("inlineCode",{parentName:"p"},"H5Live"),", you can go completely plugin-free on all devices without using Flash."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Do you offer WebM or Vp8 encoding?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Some nanoStream platforms also support ",(0,l.yg)("inlineCode",{parentName:"p"},"VP8"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"VP9")," and other codecs.\nnanoStream Webcaster supports ",(0,l.yg)("inlineCode",{parentName:"p"},"VP8"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"VP9")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"H.264"),"."),(0,l.yg)("p",null,"Please contact us for details."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"What is Multiplexing?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"For Video/Audio Encoding and Streaming, Multiplexing means combining the Video and Audio data into a common container or stream. There are several multiplexing standards available, dependent on the application and system environment."),(0,l.yg)("h4",{id:"example-multiplexing-standards"},"Example Multiplexing Standards:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"File Formats:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"MPEG TS")," (transport stream) - used for broadcast and streaming"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"MPEG PS")," (program stream) - used for local storage and DVD"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"MP4")," (ISO File Format)")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Streaming Formats:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"RTMP")," (Realtime Message Protocol)"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"RTP")," (Realtime Protocol)")),(0,l.yg)("p",null,"See also ",(0,l.yg)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Multiplexing#Video_processing"},"the wikipedia article")))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Why do I get a lower bitrate then specified?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"A live encoder queries the camera device for the supported resolutions, framerates and colorspaces. If the camera reports the values, which it actually supports, the plugin would choose a supported capture mode of the camera. The resulting bitrate should be equal to the specified bitrate."),(0,l.yg)("p",null,"But, if the camera reports, that it is capable of delivering e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"30 frames")," for a resolution of ",(0,l.yg)("inlineCode",{parentName:"p"},"640\xd7480"),", the plugin assumes that the camera will send ",(0,l.yg)("inlineCode",{parentName:"p"},"30 frames"),". If the actual frame rate is then lower (e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"15 fps"),") the bitrate will be the half of the specified bitrate."),(0,l.yg)("p",null,"That is to keep the quality specified by the user. Another reason for a lower bitrate is, that the lower framerate could be a cause of high cpu load or a low bandwidth. If the plugin would adjust the bitrate in this case, the framerate would be even lower in the process, which in turn would lead the plugin to increase the bitrate again, which in turn would lower the framerate, etc."),(0,l.yg)("p",null,"Also keep in mind that the lighting conditions can have a huge effect on the frame rate of the >camera. We have several webcams delivering only half of the frame rate, if it is too dark."))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"How do I set a Stream name?")),(0,l.yg)("p",null,(0,l.yg)("p",null,"RTMP Streams:"),(0,l.yg)("p",null,"example url:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"rtmp://localhost/live/myStream\n")),(0,l.yg)("p",null,'"myStream" represents the stream name.'))),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("strong",null,"Firewall configuration")),(0,l.yg)("p",null,(0,l.yg)("p",null,"Firewalls are sometimes sensitive to streaming protocols.\nHere is some general advice, please contact us for details."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"H5Live Playback")," ",(0,l.yg)("br",null),"\nH5Live playback is connected over https, port ",(0,l.yg)("inlineCode",{parentName:"p"},"443"),", or http, ports ",(0,l.yg)("inlineCode",{parentName:"p"},"8180")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"8181")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Mp4 File Playback")," ",(0,l.yg)("br",null),"\nMP4 File playback is connected over https, port ",(0,l.yg)("inlineCode",{parentName:"p"},"443"),", or http, port ",(0,l.yg)("inlineCode",{parentName:"p"},"8080")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"RTMP Playback and Ingest")," ",(0,l.yg)("br",null),"\nRTMP is using ports ",(0,l.yg)("inlineCode",{parentName:"p"},"1935")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"80")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"WebRTC")," ",(0,l.yg)("br",null),"\nWebRTC is using ports ",(0,l.yg)("inlineCode",{parentName:"p"},"https/443")," for API calls, port ",(0,l.yg)("inlineCode",{parentName:"p"},"80")," for turn (udp and tcp), and ports ",(0,l.yg)("inlineCode",{parentName:"p"},"40000-50000")," over UDP."))))}g.isMDXComponent=!0},90462:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/nsc-inforgraphic-dc44addf9984c1369044f468199529ce.png"}}]);