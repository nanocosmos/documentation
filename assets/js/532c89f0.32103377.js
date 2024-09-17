"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6133],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,c=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const i={id:"live_encoding",title:"Live Encoding",sidebar_label:"Live Encoding"},o=void 0,l={unversionedId:"cloud/live_encoding",id:"cloud/live_encoding",title:"Live Encoding",description:"What is Live Encoding ?",source:"@site/docs/cloud/live_encoding.md",sourceDirName:"cloud",slug:"/cloud/live_encoding",permalink:"/docs/cloud/live_encoding",draft:!1,tags:[],version:"current",lastUpdatedAt:1726579045,formattedLastUpdatedAt:"Sep 17, 2024",frontMatter:{id:"live_encoding",title:"Live Encoding",sidebar_label:"Live Encoding"},sidebar:"nanoStream Cloud",previous:{title:"Getting started",permalink:"/docs/cloud/cloud_getting_started"},next:{title:"SRT Ingest",permalink:"/docs/cloud/srt_ingest"}},s={},d=[{value:"What is Live Encoding ?",id:"what-is-live-encoding-",level:2},{value:"Live Encoding Options",id:"live-encoding-options",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Required RTMP configuration metadata",id:"required-rtmp-configuration-metadata",level:3},{value:"Values/fields",id:"valuesfields",level:4},{value:"Encoder Configuration",id:"encoder-configuration",level:2},{value:"Resolution and bitrate settings",id:"resolution-and-bitrate-settings",level:3},{value:"General recommendations",id:"general-recommendations",level:3},{value:"Standard Resolutions",id:"standard-resolutions",level:4},{value:"Recommended bitrates",id:"recommended-bitrates",level:4},{value:"Encoding for low bandwidth or bad networks",id:"encoding-for-low-bandwidth-or-bad-networks",level:3},{value:"Stream Configuration",id:"stream-configuration",level:2},{value:"Data Traffic",id:"data-traffic",level:2},{value:"Adaptive Bitrate / Multi-Bitrate Live Streaming",id:"adaptive-bitrate--multi-bitrate-live-streaming",level:2},{value:"Additional info",id:"additional-info",level:2}],u={toc:d},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"what-is-live-encoding-"},"What is Live Encoding ?"),(0,r.yg)("p",null,"Live Encoding is done directly behind the live source (camera or screen).\nA Live Encoder is either a software or hardware which converts the\ncamera video to a compressed live stream, to send it to the cloud (ingest).\nA Live Encoder requires codec and stream configuration. "),(0,r.yg)("h2",{id:"live-encoding-options"},"Live Encoding Options"),(0,r.yg)("p",null,"The following Live Encoding Options are possible:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"nanoStream Webcaster"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"for direct webcast from the browser (based on WebRTC)"),(0,r.yg)("li",{parentName:"ul"},"supported for web cams and screen casts")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Live Encoder Software"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"OBS Broadcaster Software, Wirecast, VMix, ffmpeg")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Live Encoder Hardware"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JVC Connected Camera, Videon, Teradek, and others")),(0,r.yg)("admonition",{title:"Getting started",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For getting started and tutorials, please see our ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/"},"blog")," and ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/videos"},"videos"),"!")),(0,r.yg)("h3",{id:"supported-formats"},"Supported formats"),(0,r.yg)("p",null,"nanoStream Webcaster: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Video Codec: H264, VP9"),(0,r.yg)("li",{parentName:"ul"},"Audio Codec: Opus")),(0,r.yg)("p",null,"Encoder Software/Hardware:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Video Codec: H.264"),(0,r.yg)("li",{parentName:"ul"},"Audio Codec: AAC"),(0,r.yg)("li",{parentName:"ul"},"Stream Format: RTMP")),(0,r.yg)("p",null,"Other formats like RTSP or SRT are available on request."),(0,r.yg)("h3",{id:"required-rtmp-configuration-metadata"},"Required RTMP configuration metadata"),(0,r.yg)("admonition",{title:"important",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"RTMP encoders/broadcasters are required to send proper RTMP configuration metadata (onMetaData) during the start of the ingest. ")),(0,r.yg)("h4",{id:"valuesfields"},"Values/fields"),(0,r.yg)("p",null,"If a video stream is present:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"videocodecid ('avc1')"),(0,r.yg)("li",{parentName:"ul"},"width (640)"),(0,r.yg)("li",{parentName:"ul"},"height (480) ")),(0,r.yg)("p",null,"If an audio stream is present:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"audiocodecid ('mp4a')"),(0,r.yg)("li",{parentName:"ul"},"audiosamplerate (44100) ")),(0,r.yg)("p",null,"Further recommended:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"hasVideo ","[0 or 1]"),(0,r.yg)("li",{parentName:"ul"},"hasAudio ","[0 or 1]"," to indicate the present streams and"),(0,r.yg)("li",{parentName:"ul"},"framerate (30)"),(0,r.yg)("li",{parentName:"ul"},"audiochannels (2)")),(0,r.yg)("admonition",{title:"note",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The values in the brackets ( ) are examples and will change based on different encoder configuration settings.")),(0,r.yg)("h2",{id:"encoder-configuration"},"Encoder Configuration"),(0,r.yg)("h3",{id:"resolution-and-bitrate-settings"},"Resolution and bitrate settings"),(0,r.yg)("p",null,"The quality is primarily influenced by the pixel resolution (e.g. 1280x720)\nand the video encoder bitrate (e.g. 500 kBits/s)."),(0,r.yg)("admonition",{title:"notes",type:"info"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Video Encoding Quality is very much dependent on the content! Static content with little movement and structure is much better to compress than moving content."),(0,r.yg)("li",{parentName:"ul"},"Mobile networks have limited bandwidth and usually lead to a quality impact of a stream. If you set a high bitrate for your stream, which cannot be delivered through the network, your clients will experience buffering and stream freezes during the playback."),(0,r.yg)("li",{parentName:"ul"},"For live streams, a constant pixel resolution is required, as most streaming and playback environments do not support changing resolutions while streaming."))),(0,r.yg)("p",null,"The choice of the resolution and bitrate is highly dependent on your requirements and expected quality results.\nThere are different options to choose from, you can always adjust settings according to your needs."),(0,r.yg)("p",null,"It is highly recommended to run your own tests based on typical content, and approve by your own quality expectations."),(0,r.yg)("h3",{id:"general-recommendations"},"General recommendations"),(0,r.yg)("p",null,"nanoStream Cloud works with a wide range of live encoder configurations.\nThere is some general advice for low latency:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Frame rate is recommended to use 25 or 30 fps, not 60"),(0,r.yg)("li",{parentName:"ul"},"Encoder GOP Size should be 2 seconds (=50 / 60 frames for 25/30 fps)"),(0,r.yg)("li",{parentName:"ul"},"Bitrate should be rather low than too high (see below)"),(0,r.yg)("li",{parentName:"ul"},"you should configure the camera with the max. resolution you would like to use for streaming, not higher (e.g. if you stream with 720p, also configure your camera with 720p, not higher)"),(0,r.yg)("li",{parentName:"ul"},"it never makes sense to up-scale video (e.g. do not scale from 720 to 1080)"),(0,r.yg)("li",{parentName:"ul"},"Full HD takes a lot CPU and bandwidth"),(0,r.yg)("li",{parentName:"ul"},"for live streaming HD 720 is probably preferrable to 1080")),(0,r.yg)("h4",{id:"standard-resolutions"},"Standard Resolutions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"640x480 (4:3) "),(0,r.yg)("li",{parentName:"ul"},"640x360 (16:9)"),(0,r.yg)("li",{parentName:"ul"},"240p (424x240)"),(0,r.yg)("li",{parentName:"ul"},"360p (640x360)"),(0,r.yg)("li",{parentName:"ul"},"432p (768x432)"),(0,r.yg)("li",{parentName:"ul"},"480p (848x480)"),(0,r.yg)("li",{parentName:"ul"},'576p (720x576 or 1024x576, "SD")'),(0,r.yg)("li",{parentName:"ul"},'720p (1280x720, "HD")'),(0,r.yg)("li",{parentName:"ul"},'1080p (1920x1080, "Full HD")')),(0,r.yg)("h4",{id:"recommended-bitrates"},"Recommended bitrates"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"up to 720x576")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"min. 300-500 kBits/s for medium quality"),(0,r.yg)("li",{parentName:"ul"},"1000 kBit/s or higher for high quality")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HD resolution: 1280x720 (=720p)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"600-1000 kBits/s for low/medium quality"),(0,r.yg)("li",{parentName:"ul"},"1000-2000 kBits/s or higher for high quality")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Full HD: 1920x1080")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2-3 MBit/s and higher")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4K")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"up to 4096x2160, min 6 MBit/s")),(0,r.yg)("h3",{id:"encoding-for-low-bandwidth-or-bad-networks"},"Encoding for low bandwidth or bad networks"),(0,r.yg)("p",null,"If you expect to have audiences in bad network environments, we suggest to reduce\nthe bitrate to far below 1 MBit/s (1000 kBits/s), for example 500 kBits/s."),(0,r.yg)("h2",{id:"stream-configuration"},"Stream Configuration"),(0,r.yg)("p",null,"The default stream format for sending a live stream to nanoStream Cloud\nis the RTMP Format.\nMost Live Encoders support RTMP.\nWith nanoStream Cloud, you get a rtmp ingest URL from the bintu dashboard or API.\nThis ingest URL needs to be put to the Live Encoder."),(0,r.yg)("h2",{id:"data-traffic"},"Data Traffic"),(0,r.yg)("p",null,"Data traffic usage is dependent on the overall bitrate sent from the encoder, plus the bitrate received for every viewer.\nTotal traffic usage can be calculated per hour from the bitrate:\nbitrate/s * 3600 / 8 =  bytes/h"),(0,r.yg)("admonition",{title:"Examples",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"500 kBits/s"),":\n500 ","*"," 3600 / 8 = 225 MB / hour ",(0,r.yg)("br",null),"\n",(0,r.yg)("strong",{parentName:"p"},"1000 kBits/s"),":\n1000 ","*"," 3600 / 8 = 450 MB / hour")),(0,r.yg)("h2",{id:"adaptive-bitrate--multi-bitrate-live-streaming"},"Adaptive Bitrate / Multi-Bitrate Live Streaming"),(0,r.yg)("p",null,"To adjust to network conditions, certain adaptive bitrate (ABR) configurations are available."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Dynamic Upstream (single bitrate): automatic adjustment of live encoder bitrate (dependent on your live encoder)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Multiple Bitrates (MBR)\nTo support multiple video quality levels, you can send multiple streams in multiple bitrates. Example: 1 HD 2 Mbits/s, 1 Lowres 500 kBits/s. You can send your own MBR stream or use our live transcoding service.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Downstream: ",(0,r.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_feature_stream_switching"},"ABR Playback"),": automatic adjustment of the quality on the player"))),(0,r.yg)("p",null,"For ABR Playback, several live streams need to be running at the same time with different quality levels. These streams can either be created on the encoder side or on the server side by live transcoding, based on one incoming stream."),(0,r.yg)("h2",{id:"additional-info"},"Additional info"),(0,r.yg)("admonition",{title:"recommendations by apple, youtube, vimeo and adobe",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developer.apple.com/library/ios/technotes/tn2224/_index.html"},"https://developer.apple.com/library/ios/technotes/tn2224/_index.html")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"http://support.google.com/youtube/bin/answer.py?hl=en&answer=1722171"},"http://support.google.com/youtube/bin/answer.py?hl=en&answer=1722171")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"http://vimeo.com/help/compression"},"http://vimeo.com/help/compression")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"http://www.adobe.com/devnet/adobe-media-server/articles/dynstream_live/popup.html"},"http://www.adobe.com/devnet/adobe-media-server/articles/dynstream_live/popup.html")))))}g.isMDXComponent=!0}}]);