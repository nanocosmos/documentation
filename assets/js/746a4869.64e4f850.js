"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8642],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>A});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,A=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(A,i(i({ref:t},c),{},{components:a})):n.createElement(A,i({ref:t},c))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={id:"transcoding-abr",title:"Live Transcoding and Adaptive Bitrate Playback  - (V2)",sidebar_label:"Adaptive Bitrate"},i=void 0,s={unversionedId:"cloud-frontend/transcoding-abr",id:"cloud-frontend/transcoding-abr",title:"Live Transcoding and Adaptive Bitrate Playback  - (V2)",description:"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams!",source:"@site/docs/cloud-frontend/How_to_Use_Transcoding.md",sourceDirName:"cloud-frontend",slug:"/cloud-frontend/transcoding-abr",permalink:"/docs/cloud-frontend/transcoding-abr",draft:!1,tags:[],version:"current",lastUpdatedAt:1702554316,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{id:"transcoding-abr",title:"Live Transcoding and Adaptive Bitrate Playback  - (V2)",sidebar_label:"Adaptive Bitrate"}},l={},d=[{value:"What is Adaptive Bitrate Playback?",id:"what-is-adaptive-bitrate-playback",level:2},{value:"What is Live Transcoding?",id:"what-is-live-transcoding",level:2},{value:"Functionality",id:"functionality",level:2},{value:"How to Enable Adaptive Bitrate",id:"how-to-enable-adaptive-bitrate",level:2},{value:"How to Enable Live Transcoding",id:"how-to-enable-live-transcoding",level:2},{value:"Setting up live transcoding",id:"setting-up-live-transcoding",level:2},{value:"Create ABR-Streams",id:"create-abr-streams",level:3},{value:"Live Player",id:"live-player",level:3},{value:"Choosing a playback stream to start",id:"choosing-a-playback-stream-to-start",level:2},{value:"Support",id:"support",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"We upgraded to V3",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams! ",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Find the documentation of V3 ",(0,r.kt)("a",{parentName:"strong",href:"../cloud-frontend-v3/Dashboard_Overview"},"here"),"."))),(0,r.kt)("h2",{id:"what-is-adaptive-bitrate-playback"},"What is Adaptive Bitrate Playback?"),(0,r.kt)("p",null,"Live Playback of a live stream requires a certain network bandwidth.\nIf the bandwidth is not available at the viewer, the stream may start buffering at the viewer device.\nTo avoid buffering, the stream quality can be reduced by switching to a lower quality stream encoded with a lower bitrate.\nWith Adaptive Bitrate Playback (ABR), the live player automatically adjusts to the live stream with the best quality for the available network."),(0,r.kt)("p",null,"A live stream for ABR needs to be available with several quality levels, to adjust to viewer's network bandwidth."),(0,r.kt)("p",null,"Example: a live stream is available with high quality Full HD 1920x1080 with 3 Mbits/s,\nand a Lower resolution stream with 640x360 with 500 kBits/s."),(0,r.kt)("h2",{id:"what-is-live-transcoding"},"What is Live Transcoding?"),(0,r.kt)("p",null,"Live Transcoding converts a live stream from a high quality input stream into different lower quality output streams.\nYou only need to send a single stream from your live encoder / broadcaster, and the live transcoder creates the additional formats, for distribution and playback at the player."),(0,r.kt)("h2",{id:"functionality"},"Functionality"),(0,r.kt)("p",null,'Transcoding and ABR is based on a group of streams. On the customer/viewer side, the stream switch is happening seemlessly in the background, dependent on the internet connection. A typical setup is a single ingest (input) and 3 outputs, with 1 "passthrough" (same input quality) and 2 lower resolution streams.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ingest/Input and highest quality: 1920x1080 3 Mbit/s"),(0,r.kt)("li",{parentName:"ul"},"Output 1 (High/Passthrough): 1920x1080 3000 Kbit/s (= 3 Mbit/s)"),(0,r.kt)("li",{parentName:"ul"},"Transcode 1 (Medium): 852x480 800 Kbit/s"),(0,r.kt)("li",{parentName:"ul"},"Transcode 2 (Low): 640x360 400 Kbit/s")),(0,r.kt)("h2",{id:"how-to-enable-adaptive-bitrate"},"How to Enable Adaptive Bitrate"),(0,r.kt)("p",null,"Adaptive Bitrate Playback with nanoPlayer does not require server-generated live transcoding. You can also create 3 live streams with the same content but different bitrates from your live encoder.\nTypically, live transcoding is done on the server to avoid sending 3 separate streams."),(0,r.kt)("h2",{id:"how-to-enable-live-transcoding"},"How to Enable Live Transcoding"),(0,r.kt)("p",null,"Live Transcoding with nanoStream Cloud can be enabled when creating a new stream. In the ",(0,r.kt)("em",{parentName:"p"},"Create new Stream")," preferences, click ",(0,r.kt)("em",{parentName:"p"},"Add Transcoding")," to adjust your transcoding profiles."),(0,r.kt)("p",null,"NOTE: Your account needs to be enabled for live transcoding to use this feature."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transcoding",src:a(80215).Z,width:"1517",height:"743"})),(0,r.kt)("h2",{id:"setting-up-live-transcoding"},"Setting up live transcoding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"ADD TRANSCODING")," to add transcoding functionality to your ingest setup."),(0,r.kt)("li",{parentName:"ul"},"You should now be able ",(0,r.kt)("inlineCode",{parentName:"li"},"choose your transcoding profiles"),"."),(0,r.kt)("li",{parentName:"ul"},"To add the first transcoded stream, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Add 1. Transcoding Profile"),". It is prefilled with our recommended default selection. You can select another setting, but the bitrate needs to be lower than the ingest/passthrough bitrate."),(0,r.kt)("li",{parentName:"ul"},"To add a second transcoded stream, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Add 2. Transcoding Profile"),". You can choose another selection, but the bitrate needs to be lower than the 1st transcoded stream bitrate."),(0,r.kt)("li",{parentName:"ul"},"To add a third transcoded stream, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Add 3. Transcoding Profile"),". You can choose another selection, but the bitrate needs to be lower than the 2nd transcoded stream bitrate.")),(0,r.kt)("p",null,"Add or remove profiles depending on your needs. Select the first version that should be loaded to the playout."),(0,r.kt)("p",null,"Copy the ingest URL and stream name to your live encoder. "),(0,r.kt)("p",null,"Press ",(0,r.kt)("em",{parentName:"p"},"Create New Stream")," to create the stream with your chosen transcoding profiles."),(0,r.kt)("p",null,"Click ",(0,r.kt)("em",{parentName:"p"},"Start Broadcast")," on your live encoder or webcaster."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"created abr stream",src:a(30864).Z,width:"1896",height:"848"})),(0,r.kt)("h3",{id:"create-abr-streams"},"Create ABR-Streams"),(0,r.kt)("p",null,"Once all settings have been done, press the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE NEW STREAM")," button.",(0,r.kt)("br",{parentName:"p"}),"\n","After the custom stream configuration has been created, a new webpage will be displayed that shows all the important information regarding the new stream/streams created."),(0,r.kt)("h3",{id:"live-player"},"Live Player"),(0,r.kt)("p",null,"Scroll down and click the link under ",(0,r.kt)("em",{parentName:"p"},"Access ABR playout")," to access the playout of your transcoded stream."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"access-abr-playout",src:a(47808).Z,width:"1502",height:"320"})),(0,r.kt)("h2",{id:"choosing-a-playback-stream-to-start"},"Choosing a playback stream to start"),(0,r.kt)("p",null,"This enables the selection of which stream quality the playback starts with."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starting with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Highest quality")," will start with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Passthrough Stream")," = quality from your live encoder ingest. This will always work for the viewers but on bad network conditions, the ABR player will auto-switch to a lower quality and enable a seamless live playback without bufferings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When starting with lower stream quality (",(0,r.kt)("inlineCode",{parentName:"p"},"1st or 2nd or 3rd transcode"),", depends on choosen transcoding streams), the viewer starts with lower quality, and switches to higher quality levels after some seconds. "))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Attention!")," Please save your ",(0,r.kt)("em",{parentName:"p"},"Web Playout URL")," at this point. It's not accessible from the ",(0,r.kt)("em",{parentName:"p"},"Stream Overviews")," of the single transcoded streams and can't be restored later.")),(0,r.kt)("p",null,"On the playback side, ",(0,r.kt)("em",{parentName:"p"},"Adaptive Bitrate Controls")," allows you to choose whether the stream version should be switched automatically or manually. If ",(0,r.kt)("em",{parentName:"p"},"Manual")," is ticked, you can choose one of the quality versions yourself."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"abr-controls",src:a(53162).Z,width:"1526",height:"357"})),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Full Stream Info")," displays all information on your different transcoded stream versions."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"abr-stream-info",src:a(38709).Z,width:"553",height:"79"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To learn more about creating streams with the nanoStream Cloud, click ",(0,r.kt)("a",{parentName:"p",href:"How_to_Start_a_Stream"},"here"),".")),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"Hopefully, this tutorial was helpful for you. For further assistance, use our ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"contact form"),", browse the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/faq/faq_streaming/"},"FAQs")," or contact us via support(at)nanocosmos.de"))}u.isMDXComponent=!0},53162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/abr-controls-c094e3b43924dfa8fbd81e574d60f3db.png"},47808:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/access-abr-playout-996471249f1289ffbaecaffa6ecf9fb2.png"},30864:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/created-abr-stream-9c75ff2339e88bfb2c497f4af8409aae.png"},38709:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},80215:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transcoding-fd00ed41a5f8269045b4633a8bd2fe96.png"}}]);