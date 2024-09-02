"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9759],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),A=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=A(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=A(a),p=n,y=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var A=2;A<o;A++)i[A]=a[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},26213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>A});var r=a(58168),n=(a(96540),a(15680));const o={id:"How_to_Start_a_Stream",title:"How to start a stream  - (V2)",sidebar_label:"Start streaming"},i=void 0,s={unversionedId:"cloud-frontend/How_to_Start_a_Stream",id:"cloud-frontend/How_to_Start_a_Stream",title:"How to start a stream  - (V2)",description:"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams!",source:"@site/docs/cloud-frontend/How_to_Start_a_Stream.md",sourceDirName:"cloud-frontend",slug:"/cloud-frontend/How_to_Start_a_Stream",permalink:"/docs/cloud-frontend/How_to_Start_a_Stream",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"How_to_Start_a_Stream",title:"How to start a stream  - (V2)",sidebar_label:"Start streaming"}},l={},A=[{value:"<em>Click <code>PLAY</code> button to start</em>",id:"click-play-button-to-start",level:5},{value:"Create a Stream",id:"create-a-stream",level:2},{value:"Setting up a Live Stream Using the Webcaster",id:"setting-up-a-live-stream-using-the-webcaster",level:2},{value:"Set up the video settings",id:"set-up-the-video-settings",level:3},{value:"Set up the bitrates",id:"set-up-the-bitrates",level:3},{value:"Add Stream Tag",id:"add-stream-tag",level:3},{value:"Set up the transcoding profiles",id:"set-up-the-transcoding-profiles",level:3},{value:"Start broadcast",id:"start-broadcast",level:3},{value:"Use a live encoder",id:"use-a-live-encoder",level:2},{value:"Live Playback with nanoPlayer",id:"live-playback-with-nanoplayer",level:2},{value:"Stream Playout",id:"stream-playout",level:2},{value:"Support",id:"support",level:2}],u={toc:A},d="wrapper";function c(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"We upgraded to V3",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams! ",(0,n.yg)("br",null)),(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"Find the documentation of V3 ",(0,n.yg)("a",{parentName:"strong",href:"../cloud-frontend-v3/Dashboard_Overview"},"here"),"."))),(0,n.yg)("iframe",{width:"100%",height:"360",src:"https://www.youtube.com/embed/om3cOpV0WKo",frameborder:"0",allowfullscreen:!0}),(0,n.yg)("h5",{id:"click-play-button-to-start"},(0,n.yg)("em",{parentName:"h5"},"Click ",(0,n.yg)("inlineCode",{parentName:"em"},"PLAY")," button to start")),(0,n.yg)("p",null,"Tutorial : How To Set Up a Low Latency Stream by nanocosmos"),(0,n.yg)("p",null,"In this tutorial you'll get to know the basic functionality of the nanoStream Cloud:\ncreate, broadcast and watch a live stream with ultra-low-latency. "),(0,n.yg)("p",null,"The process requires the following steps:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"create a bintu live stream on the dashboard"),(0,n.yg)("li",{parentName:"ul"},"configure your live encoder software or Webcaster"),(0,n.yg)("li",{parentName:"ul"},"use the nanoPlayer page or API to view the live stream")),(0,n.yg)("h2",{id:"create-a-stream"},"Create a Stream"),(0,n.yg)("admonition",{title:"Before starting",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,n.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,n.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,n.yg)("p",null,"First, ",(0,n.yg)("a",{parentName:"p",href:"cloud-readme#authentication"},"log in")," to your nanoStream Cloud/Bintu account."),(0,n.yg)("p",null,"Then, create a bintu live stream with ",(0,n.yg)("a",{parentName:"p",href:"https://bintu-cloud-frontend.nanocosmos.de/stream/create"},(0,n.yg)("em",{parentName:"a"},"Create Stream")),". You can press ",(0,n.yg)("em",{parentName:"p"},"Create New Stream")," right next to your organization name or press the ",(0,n.yg)("em",{parentName:"p"},"plus icon")," on the top of the site. Alternatively, you can navigate to the menu on the left hand side and press ",(0,n.yg)("em",{parentName:"p"},"Streams")," and then ",(0,n.yg)("em",{parentName:"p"},"Create New Stream"),"."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"dashboard",src:a(78750).A,width:"1897",height:"840"})),(0,n.yg)("p",null,"To send a live stream, there are 2 options:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"use a separate live encoder software or hardware (for example OBS). (Read more ",(0,n.yg)("a",{parentName:"li",href:"#use-a-live-encoder"},"here"),")"),(0,n.yg)("li",{parentName:"ul"},"use the nanoStream Webcaster web page or API directly from your browser. (Read more ",(0,n.yg)("a",{parentName:"li",href:"#setting-up-a-live-stream-using-the-webcaster"},"here"),")")),(0,n.yg)("h2",{id:"setting-up-a-live-stream-using-the-webcaster"},"Setting up a Live Stream Using the Webcaster"),(0,n.yg)("p",null,"The Webcaster is a browser application that allows you to go live around the world immediately, without a separate setup. "),(0,n.yg)("h3",{id:"set-up-the-video-settings"},"Set up the video settings"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You can set up your source resolution and frame rate from a list of prefilled values."),(0,n.yg)("li",{parentName:"ul"},"Select suitable values that fit your needs."),(0,n.yg)("li",{parentName:"ul"},"If in doubt, just keep the default or contact customer support.")),(0,n.yg)("h3",{id:"set-up-the-bitrates"},"Set up the bitrates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Similarly, you can set up your audio and video bitrates from a list of prefilled values."),(0,n.yg)("li",{parentName:"ul"},"Select suitable values taking into account network bandwidth considerations."),(0,n.yg)("li",{parentName:"ul"},"If in doubt, just keep the default or contact customer support.")),(0,n.yg)("h3",{id:"add-stream-tag"},"Add Stream Tag"),(0,n.yg)("p",null,"You can group and tag streams with bintu stream tags. These are human readable words or IDs you can use to identify your streams. This is optional."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Click on ",(0,n.yg)("inlineCode",{parentName:"li"},"ADD STREAM TAGS")," to add search tags to your stream."),(0,n.yg)("li",{parentName:"ul"},"You can create new tags by typing onto the ",(0,n.yg)("inlineCode",{parentName:"li"},"Tags")," field and hit ",(0,n.yg)("inlineCode",{parentName:"li"},"Enter")," to add it to the list."),(0,n.yg)("li",{parentName:"ul"},"Repeat this for all tags you want to add."),(0,n.yg)("li",{parentName:"ul"},"Or add an existing tag through ",(0,n.yg)("inlineCode",{parentName:"li"},"Show all tags"),". ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"create stream",src:a(75935).A,width:"1896",height:"927"})),(0,n.yg)("h3",{id:"set-up-the-transcoding-profiles"},"Set up the transcoding profiles"),(0,n.yg)("p",null,"Transcoding allows your stream to perform perfectly adjusted to any network situation. "),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"To learn more about adaptive bitrate and live transcoding and how to use it, click ",(0,n.yg)("a",{parentName:"p",href:"/docs/cloud-frontend/transcoding-abr"},"here"),".")),(0,n.yg)("h3",{id:"start-broadcast"},"Start broadcast"),(0,n.yg)("p",null,"As soon as you have adjusted your preferences, press ",(0,n.yg)("em",{parentName:"p"},"Create New Stream")," and you\u2019ll be redirected automatically to the ",(0,n.yg)("em",{parentName:"p"},"Stream Overview"),". Press ",(0,n.yg)("em",{parentName:"p"},"Start Broadcast")," to start your stream directly from the browser."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"start broadcast",src:a(48740).A,width:"1895",height:"848"})),(0,n.yg)("h2",{id:"use-a-live-encoder"},"Use a live encoder"),(0,n.yg)("p",null,"You can ingest a live stream with a live encoder software or hardware, using the RTMP ingest streamname and the RTMP ingest URL.\nClick here for information on ingesting a stream with the ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2019/03/how-to-use-obs-for-low-latency-live-encoding-to-nanostream-cloud/"},"OBS software")," or ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2020/12/how-to-use-wirecast-with-nanostream-cloud-for-ultra-low-latency-live-streaming/"},"Wirecast"),". "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"start ingest",src:a(48321).A,width:"1537",height:"319"})),(0,n.yg)("h2",{id:"live-playback-with-nanoplayer"},"Live Playback with nanoPlayer"),(0,n.yg)("p",null,"You find direct access to the nanoPlayer playout of your live stream. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"access-playout",src:a(45180).A,width:"1543",height:"480"})),(0,n.yg)("p",null,"If you are a secured organization, you can also  ",(0,n.yg)("em",{parentName:"p"},"Create a Secure Playback Token"),". (This applies only for secured organizations.)"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"To learn more about secure playbacks, click ",(0,n.yg)("a",{parentName:"p",href:"cloud-playback-tokens"},"here"),". ")),(0,n.yg)("p",null,"If you want to embed the stream playout in your own webpage, use the ",(0,n.yg)("em",{parentName:"p"},"H5Live Code Snippet"),". "),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"To get more informations about the H5Live Player and its implementation, see our ",(0,n.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/"},"documentation"),".")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"code snippet",src:a(35535).A,width:"1519",height:"91"})),(0,n.yg)("p",null,"The information displayed under ",(0,n.yg)("em",{parentName:"p"},"Stream Overview")," shows an overview of your created stream(s). "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"created-stream-link",src:a(39572).A,width:"1486",height:"150"})),(0,n.yg)("h2",{id:"stream-playout"},"Stream Playout"),(0,n.yg)("p",null,"Clicking the ",(0,n.yg)("em",{parentName:"p"},"Live Playout URL")," opens a new browser tab displaying your stream output. This is the default ",(0,n.yg)("em",{parentName:"p"},"H5Live Playout")," of your created stream. It also displays important information on your stream.  As you can see, the latency is below one second."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"stream playout",src:a(70645).A,width:"1896",height:"849"})),(0,n.yg)("p",null,"Share the ",(0,n.yg)("em",{parentName:"p"},"Live Playout URL")," with the people you want to reach and let your stream go around the world in one second!"),(0,n.yg)("h2",{id:"support"},"Support"),(0,n.yg)("p",null,"Hopefully, this tutorial was helpful for you. For further assistance, use our ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"contact form"),", browse the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/faq/faq_streaming/"},"FAQs")," or contact us via support(at)nanocosmos.de"))}c.isMDXComponent=!0},45180:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/access-playout-4fdd658e2d638eced951489e1db07c29.png"},35535:(e,t,a)=>{a.d(t,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABe8AAABbCAYAAADqfH6YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAABDESURBVHhe7d3PrtxE2gfg7wrmCrkNltF3AZFArLiFwI4tG9bcQBazR0JCZKIIMRKJ0tPu026/5XrLf7pOgwPPI/2kzDluu6pc9uKXJvN/f/zxx0lERERERERERERERI4T5b2IiIiIiIiIiIiIyMGivBcREREREREREREROViU9yIiIiIiIiIiIiIiB4vyXkRERERERERERETkYFHei4iIiIiIiIiIiIgcLMp7EREREREREREREZGDRXkvIiIiIiIiIiIiInKwKO9FRERERERERERERA6WQ5f3Hz58OH38+PEEAAAAAABHMfTWQ3+d9drPlUOW9+/fv1faAwAAAABwaEOPPfTZWc/dm0OW94p7AAAAAAA+BUOfnfXcvTlceT/8pwYAAAAAAPCpeMQ/oXO48t637gEAAAAA+JQ84tv3hyvvAQAAAADgU5P13T1R3gMAAAAAQKes7+6J8h4AAAAAADplfXdPlPcAAAAAANAp67t7orwHAAAAAIBOWd/dE+U9AAAAAAB0yvrunijvAQAAAACgU9Z390R5DwAAAAAAnbK+uyfKewAAAAAA6JT13T1R3gMAAAAAQKes7+6J8h4AAAAAADplfXdPlPcAAAAAANAp67t7orwHAAAAAIBOWd/dE+U9AAAAAAB0yvrunijvAQAAAACgU9Z390R5DwAAAAAAnbK+uyfKewAAAAAA6JT13T1R3gMAAAAAQKes7+6J8h4AAAAAADplfXdPlPcAAAAAANAp67t7orwHAAAAAIBOWd/dE+U9AAAAAAB0yvrunijvAXhWv7361+nXr749/ff6v/l7+e8Pn51+ffHZ6d0v1x8AAAAAF1nf3RPlPQDP5/XL068v/nXJmx9+vv6Qv48fT2+v9/fXVz9efwYAAAAMsr67J8r7B3j6VuK13Ki+fRqKj+ybqb98e3oz/n5IVo4Ux9Tffrx867Xxu9Pp59O7r8bfT1ku2cKYk+OL+S7lOpdpfFlenn67HDVZPj4fe/mZbB3KOaXzX1nnm3hcck/jWN6+vv7wbGlecTytz89Vx4USNVvXcg2G+dX3uczCGkTzPXxOvr/y62VzXNpj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"},75935:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/create-stream-a7af07bffff4d7d0b226b6901ab25b0d.png"},39572:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/created-stream-link-3c5f5beebe03500ab425d8e3587c29be.png"},78750:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dashboard-7ad8ec456b0d40e4861139567c5857a9.png"},48740:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/start-broadcast-e4724bda5fb11445be3a6a60e032a1b6.png"},48321:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/start-ingest-38daed427a9505f0509b12c8ca022125.png"},70645:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/stream-playout-e8aa5878ffaa7d4e10ad33321fbed25e.png"}}]);