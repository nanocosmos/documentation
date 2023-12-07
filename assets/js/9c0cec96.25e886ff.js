"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),h=r,p=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={id:"Dashboard_Start_Streaming",title:"Start Streaming",sidebar_label:"Start Streaming"},i=void 0,s={unversionedId:"cloud-frontend-v3/Dashboard_Start_Streaming",id:"cloud-frontend-v3/Dashboard_Start_Streaming",title:"Start Streaming",description:"To begin, please sign in using your nanoStream Cloud/Bintu account credentials.",source:"@site/docs/cloud-frontend-v3/Dashboard_Start_Streaming.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_Start_Streaming",permalink:"/docs/cloud-frontend-v3/Dashboard_Start_Streaming",draft:!1,tags:[],version:"current",lastUpdatedAt:1701953705,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"Dashboard_Start_Streaming",title:"Start Streaming",sidebar_label:"Start Streaming"},sidebar:"nanoStream Cloud",previous:{title:"Getting Started",permalink:"/docs/cloud-frontend-v3/Dashboard_Getting_Started"},next:{title:"Stream Overview",permalink:"/docs/cloud-frontend-v3/Dashboard_Stream_Overview"}},l={},d=[{value:"Setting up and creating a stream",id:"setting-up-and-creating-a-stream",level:2},{value:"Add Tags",id:"add-tags",level:3},{value:"Add Transcoding",id:"add-transcoding",level:3},{value:"Add thumbnail",id:"add-thumbnail",level:3},{value:"Add timecode injection",id:"add-timecode-injection",level:3},{value:"Start Streaming",id:"start-streaming",level:2},{value:"Option 1: Use the nanoStream Webcaster",id:"option-1-use-the-nanostream-webcaster",level:3},{value:"Option 2: Use a separate live encoder software or hardware:",id:"option-2-use-a-separate-live-encoder-software-or-hardware",level:3}],c={toc:d},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Before starting",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,r.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.kt)("p",null,'Locate the "',(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/stream/create"},"Create New Stream"),'" button either next to dashboard overview title (1). Alternatively, you can also navigate to the left-hand side menu, choose the \u201eOutlined Plus Circle\u201c Icon (2).'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Navigation to Stream Creation",src:a(79036).Z,width:"1081",height:"1259"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Navigation to Stream Creation")),(0,r.kt)("h2",{id:"setting-up-and-creating-a-stream"},"Setting up and creating a stream"),(0,r.kt)("p",null,"You can access the stream creation page using the menu on the left. You can tell whether you are on the right page when the round plus icon is highlighted in orange and you can see the UI as shown in the screenshot."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Create Stream",src:a(95655).Z,width:"1199",height:"458"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Create Stream")),(0,r.kt)("h3",{id:"add-tags"},"Add Tags"),(0,r.kt)("p",null,'In the "Add Tags" section you can add tag(s) to identify your stream more easily in the future. '),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can enter in the text field a tag that you want to add. "),(0,r.kt)("li",{parentName:"ol"},'By hitting "Enter" they will be added to the list above the text field and are added to the stream you are about to create.'),(0,r.kt)("li",{parentName:"ol"},"From the 3rd letter in the text field, it will be checked if you have used such a series of characters in the past and all tags that contain these three letters will be suggested to you. By clicking on them, they will also be added to the list (see 2)."),(0,r.kt)("li",{parentName:"ol"},'Independently if you have already typed something, you can press "Show all tags" and see the last tags you have used in the organization. You can scroll through them all using the menu at the bottom right. By clicking on them you can add them to the list of your tags (see 2).')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Addition of Tags during Stream Creation",src:a(19610).Z,width:"1199",height:"831"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Addition of Tags during Stream Creation")),(0,r.kt)("h3",{id:"add-transcoding"},"Add Transcoding"),(0,r.kt)("p",null,"During the stream creation process live transcoding is already enabled by default. You have the option to add transcoding profiles and configure them according to your requirements. The default selection is pre-filled, but you can choose different settings. Ensure that the bitrate of each Transcoding Profile is lower than the ingest/passthrough bitrate or the profile above."),(0,r.kt)("admonition",{title:"Adaptive Bitrate (ABR) and Live Transcoding",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about Adaptive Bitrate (ABR) and Live Transcoding, you can have a look here:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#what-is-adaptive-bitrate-playback"},"What is Adaptive Bitrate Playback?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#what-is-live-transcoding"},"What is Live Transcoding?")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Create Stream and select Transcoding Profiles",src:a(40048).Z,width:"1454",height:"652"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Create Stream and select Transcoding Profiles")),(0,r.kt)("admonition",{title:"Modifying Transcoding Profiles After Stream Creation",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As your streaming requirements evolve, you may find the need to revise your transcoding profiles. Learn more about this here:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#modifying-transcoding-profiles-after-stream-creation"},"Modifying Transcoding Profiles After Stream Creation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#transform-a-non-transcoding-stream-into-an-abr-stream"},"Transform a Non-Transcoding Stream into an ABR Stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#integrating-additional-profiles-to-your-streamgroup"},"Integrating Additional Profiles to Your Streamgroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#edit-profiles"},"Edit profiles")," or ",(0,r.kt)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#delete-profiles"},"Delete profiles")))),(0,r.kt)("h3",{id:"add-thumbnail"},"Add thumbnail"),(0,r.kt)("p",null,'By clicking on "Add thumbnail" you can enable the thumbnail generation and select an interval for the creation. This can range from 10 to 3600 seconds. The default is set to 30s. The thumbnail will be generated based on the selected interval.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Thumbnail Activation during Stream Creation",src:a(83131).Z,width:"1454",height:"652"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Thumbnail Activation during Stream Creation")),(0,r.kt)("admonition",{title:"Learn more",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_Thumbnail#setting-up-thumbnails"},"Setting up thumbnails after stream creation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Dashboard_Thumbnail#updating-settings"},"Updating thumbnail settings after stream creation")))),(0,r.kt)("h3",{id:"add-timecode-injection"},"Add timecode injection"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Enabling ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"timecode")," feature"),(0,r.kt)("p",{parentName:"admonition"},"If you wish to utilize this feature, you would need to activate them and ensure that the corresponding pricing and payment options are set up.\nContact us ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"here")," to find the perfect solution for you!")),(0,r.kt)("p",null,'By clicking on "Add timecode" you can enable this feature. It allows precise synchronization or indexing of video content. You can set the time injection interval between 500 ms and 3600000 ms (1 hour), recommended: 1000-5000 ms. The default is 2000ms. '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Thumbnail Activation during Stream Creation",src:a(99975).Z,width:"1454",height:"610"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Timecode Injection during Stream Creation")),(0,r.kt)("h2",{id:"start-streaming"},"Start Streaming"),(0,r.kt)("p",null,'After clicking on "Create New Stream\u201c, you will be redirected to the easy instructions page. This page provides you with all the information required to begin streaming, including the necessary steps and details for a seamless setup.'),(0,r.kt)("p",null,"The information is presented in three sections:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start the Ingest"),": Here, you'll find the ingest details, including the RTMP stream name and RTMP URL. To easily copy these details, simply click on the copy icon provided at the end of the row."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Access the Web Playout"),": In this section, you'll discover the live playout URL. Clicking on it will also reveal a code snippet. This code snippet contains everything you need to embed the H5Live Player with your stream onto your web page.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Additionally, the dashboard offers the ",(0,r.kt)("inlineCode",{parentName:"p"},"secure"),' option (if enabled) to generate a playback token. During your logged-in session, you have a jwt token that is valid for the whole organisation and lets you watch every stream. Alternatively, you can create a new stream JWT token with an expiration date. This token can be valid for the entire organization, specific stream groups, or individual stream names. You can specify options such as "not before" date, client IP, domain, user ID, or a single tag for added security and control. Contact us ',(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"here")," to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"secure")," feature for you!")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stream Overvie"),"w: This section provides a link to the stream's overview page. By clicking on the URL, you can access the complete stream overview, which includes various other relevant details.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Easy Instructions to the live stream",src:a(79064).Z,width:"1465",height:"845"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Easy Instructions to the live stream")),(0,r.kt)("p",null,"By following these instructions, you can start your stream smoothly, access playout options, generate playback tokens with specific configurations, and embed the nanoStream H5Live Player on your webpage using the provided code snippets or iFrame tag."),(0,r.kt)("p",null,"Once you have accessed this page, you have two options for broadcasting a live streaming:"),(0,r.kt)("h3",{id:"option-1-use-the-nanostream-webcaster"},"Option 1: Use the nanoStream Webcaster"),(0,r.kt)("p",null,"\u2026wip\u2026"),(0,r.kt)("h3",{id:"option-2-use-a-separate-live-encoder-software-or-hardware"},"Option 2: Use a separate live encoder software or hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure your preferred live encoder software or hardware, such as OBS or Wirecast, according to the setup instructions."),(0,r.kt)("li",{parentName:"ul"},'Obtain the necessary RTMP stream details (stream name and URL) from the "Ingest" section on the stream creation or easy instructions page.'),(0,r.kt)("li",{parentName:"ul"},"Enter the RTMP stream details into your live encoder settings."),(0,r.kt)("li",{parentName:"ul"},"Start the live stream from your encoder to begin sending the video feed to nanoStream Cloud.")),(0,r.kt)("admonition",{title:"Additional Resources",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Read more about ",(0,r.kt)("a",{parentName:"li",href:"https://www.nanocosmos.de/blog/2019/03/how-to-use-obs-for-low-latency-live-encoding-to-nanostream-cloud/"},"how to use OBS for Low Latency Live Encoding to nanoStream Cloud"),"."),(0,r.kt)("li",{parentName:"ul"},"Find also ",(0,r.kt)("a",{parentName:"li",href:"https://www.nanocosmos.de/blog/2020/12/how-to-use-wirecast-with-nanostream-cloud-for-ultra-low-latency-live-streaming/"},"instructions how to use Wirecast with nanoStream Cloud")," in our blog."))))}u.isMDXComponent=!0},40048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cf-abr-stream-a5f970e6812256c58cf20ba45ded21e6.png"},19610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cf-add-tags-steps-1bf3d3e332b6ca791a0d85d5f0b83677.jpg"},83131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cf-add-thumbnail-cd7e5e007c757ff835502731f8c3c8ae.png"},79036:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cf-create-guide-cea37cf04239f9d6f259fc7ad3cfa92e.jpg"},95655:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cf-create-stream-22ad334be702f0f03444112e99c85755.png"},79064:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cf-instructions-9a5af214d6bd469f42fecdc1a2e52d1b.jpg"},99975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cf-timecode-9879e465d227973f121be950d4ed6c10.jpg"}}]);