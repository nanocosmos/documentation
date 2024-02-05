"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4824],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>h});var i=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(l,".").concat(u)]||p[u]||g[u]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(45072),n=(a(11504),a(95788));const r={id:"Dashboard_ABR_Transcoding",title:"Adaptive Bitrate (ABR) and Live Transcoding",sidebar_label:"Adaptive Bitrate (ABR) and Live Transcoding"},o=void 0,s={unversionedId:"cloud-frontend-v3/Dashboard_ABR_Transcoding",id:"cloud-frontend-v3/Dashboard_ABR_Transcoding",title:"Adaptive Bitrate (ABR) and Live Transcoding",description:"Adaptive Bitrate (ABR)",source:"@site/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_ABR_Transcoding",permalink:"/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding",draft:!1,tags:[],version:"current",lastUpdatedAt:1707150098,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"Dashboard_ABR_Transcoding",title:"Adaptive Bitrate (ABR) and Live Transcoding",sidebar_label:"Adaptive Bitrate (ABR) and Live Transcoding"},sidebar:"nanoStream Cloud",previous:{title:"Stream Overview",permalink:"/docs/cloud-frontend-v3/Dashboard_Stream_Overview"},next:{title:"Thumbnails",permalink:"/docs/cloud-frontend-v3/Dashboard_Thumbnail"}},l={},d=[{value:"Adaptive Bitrate (ABR)",id:"adaptive-bitrate-abr",level:2},{value:"What is Adaptive Bitrate Playback?",id:"what-is-adaptive-bitrate-playback",level:3},{value:"How to enable Adaptive Bitrate",id:"how-to-enable-adaptive-bitrate",level:3},{value:"Live Transcoding",id:"live-transcoding",level:2},{value:"What is Live Transcoding?",id:"what-is-live-transcoding",level:3},{value:"How to enable Live Transcoding",id:"how-to-enable-live-transcoding",level:3},{value:"Modifying Transcoding Profiles After Stream Creation",id:"modifying-transcoding-profiles-after-stream-creation",level:2},{value:"Transform a Non-Transcoding Stream into an ABR Stream",id:"transform-a-non-transcoding-stream-into-an-abr-stream",level:3},{value:"Integrating Additional Profiles to Your Streamgroup",id:"integrating-additional-profiles-to-your-streamgroup",level:3},{value:"Edit profiles",id:"edit-profiles",level:3},{value:"Delete profiles",id:"delete-profiles",level:3},{value:"Operation and Workflow",id:"operation-and-workflow",level:2},{value:"Example",id:"example",level:3},{value:"Switch Stream Quality manually",id:"switch-stream-quality-manually",level:2}],c={toc:d},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,i.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"adaptive-bitrate-abr"},"Adaptive Bitrate (ABR)"),(0,n.yg)("h3",{id:"what-is-adaptive-bitrate-playback"},"What is Adaptive Bitrate Playback?"),(0,n.yg)("p",null,"Live playback of a live stream relies on a specific network bandwidth. If the viewer's network cannot support the required bandwidth, buffering issues may occur. To prevent buffering, the stream quality can be dynamically adjusted by switching to a lower quality stream encoded with a lower bitrate. Adaptive Bitrate Playback (ABR) is a feature that enables the live player to automatically adapt to the optimal stream quality based on the viewer's available network capacity."),(0,n.yg)("p",null,"For ABR to function effectively, the live stream needs to be available in multiple quality levels, allowing seamless adjustment according to the viewer's network bandwidth."),(0,n.yg)("p",null,"For instance, consider a live stream that offers a high-quality Full HD stream at 1920x1080 resolution with a bitrate of 3 Mbit/s, as well as a lower-resolution stream at 640x360 with a bitrate of 500 kBits/s. This enables viewers with varying network conditions to select the most suitable stream quality for their viewing experience."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Infographic: Adaptive Bitrate Playback",src:a(99644).c,width:"1280",height:"799"}),"\n",(0,n.yg)("em",{parentName:"p"},"Infographic: Adaptive Bitrate Playback")),(0,n.yg)("h3",{id:"how-to-enable-adaptive-bitrate"},"How to enable Adaptive Bitrate"),(0,n.yg)("p",null,"Adaptive Bitrate Playback with nanoPlayer does not require server-generated live transcoding. You can also create 3 live streams with the same content but different bitrates from your live encoder. Typically, live transcoding is done on the server to avoid sending 3 separate streams."),(0,n.yg)("h2",{id:"live-transcoding"},"Live Transcoding"),(0,n.yg)("h3",{id:"what-is-live-transcoding"},"What is Live Transcoding?"),(0,n.yg)("p",null,"Live Transcoding refers to the process of converting a high-quality input live stream into multiple lower-quality output streams. It eliminates the need to send multiple streams from the live encoder or broadcaster by dynamically generating additional formats suitable for distribution and playback at the player."),(0,n.yg)("p",null,"By employing live transcoding, a single high-quality input stream can be transformed into various output streams with different resolutions, bitrates, or other encoding parameters. This allows for efficient streaming to viewers with diverse network conditions and device capabilities, ensuring an optimal viewing experience for each user without the need for separate streams for each quality level."),(0,n.yg)("p",null,"Live transcoding simplifies the streaming workflow by enabling broadcasters to send a single stream while the transcoding system automatically generates the required output formats, reducing bandwidth and storage requirements. This process ensures that viewers can access the live stream in the most suitable quality based on their device capabilities and network conditions."),(0,n.yg)("h3",{id:"how-to-enable-live-transcoding"},"How to enable Live Transcoding"),(0,n.yg)("p",null,"You can enable Live Transcoding for your stream during the ",(0,n.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/stream/create"},"stream creation"),"."),(0,n.yg)("admonition",{title:"Before starting",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,n.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,n.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Create Stream and select Transcoding Profiles",src:a(40900).c,width:"1454",height:"652"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Create Stream and select Transcoding Profiles")),(0,n.yg)("p",null,"During the stream creation process live transcoding is already enabled by default. You have the option to add transcoding profiles and configure them according to your requirements. The default selection is pre-filled, but you can choose different settings. Ensure that the bitrate of each Transcoding Profile is lower than the ingest/passthrough bitrate or the profile above. Once you have completed the setup and created the stream, you can start broadcasting using your live encoder or the nanoStream Webcaster."),(0,n.yg)("h2",{id:"modifying-transcoding-profiles-after-stream-creation"},"Modifying Transcoding Profiles After Stream Creation"),(0,n.yg)("p",null,"As your streaming requirements evolve, you may find the need to revise your transcoding profiles. Whether it was an oversight initially or a strategic shift, nanoStream Cloud ensures you have the tools to make post-creation adjustments effortlessly."),(0,n.yg)("p",null,"Should you have omitted transcoding profiles during your stream's setup, they can always be integrated later through the stream overview."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.yg)("span",{className:"badge-noStreamgroup"},"\u24e7 No streamgroup")," vs. ",(0,n.yg)("span",{className:"badge-streamgroup"},"\u2713 Streamgroup (2-4 Playouts)")),(0,n.yg)("p",{parentName:"admonition"},'Beneath the "Stream Overview" header, you\'ll notice a tag that reads ',(0,n.yg)("span",{className:"badge-noStreamgroup"},"\u24e7 No streamgroup"),". This tag is an indicator that ",(0,n.yg)("strong",{parentName:"p"},"no transcoding profiles have been configured for this stream"),". In contrast, if transcoding profiles were present, it would display as ",(0,n.yg)("span",{className:"badge-streamgroup"},"\u2713 Streamgroup (2-4 Playouts)"),'."')),(0,n.yg)("h3",{id:"transform-a-non-transcoding-stream-into-an-abr-stream"},"Transform a Non-Transcoding Stream into an ABR Stream"),(0,n.yg)("p",null,"At the bottom of the stream details, you'll find an option to add a profile. When you click on it, a dialog will appear, allowing you to create a profile and transform your single stream into a stream group."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Transform a Non-Transcoding Stream into an ABR Stream in the Stream Overview",src:a(94736).c,width:"1920",height:"746"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Transform a Non-Transcoding Stream into an ABR Stream in the Stream Overview")),(0,n.yg)("h3",{id:"integrating-additional-profiles-to-your-streamgroup"},"Integrating Additional Profiles to Your Streamgroup"),(0,n.yg)("p",null,"Upon either initializing your stream as a streamgroup with transcoding profiles or transitioning it to one, the stream overview presents a refined interface, as illustrated in the accompanying screenshot."),(0,n.yg)("p",null,'In the "Adaptive Bitrate (ABR) Stream Overview" section you can switch between various tabs to explore the passthrough and the associated transcoding profiles. Significantly, atop this section, the "Add Profile" button stands ready. By clicking on the button, you can effortlessly incorporate additional profiles to the streamgroup. Each added profile seamlessly integrates and becomes a cohesive part of the overarching streamgroup.'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Stream Overview with the option to add transcoding profiles",src:a(832).c,width:"1920",height:"1467"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Stream Overview with the option to add transcoding profiles")),(0,n.yg)("h3",{id:"edit-profiles"},"Edit profiles"),(0,n.yg)("p",null,"Within the streamgroup, each profile is designed for adaptability. As you navigate, options to edit or remove specific profiles become apparent. Opting to edit brings forth a the option to update the transcoding profile. "),(0,n.yg)("p",null,'Upon selection, a side-by-side comparison layout emerges. On the left, you\'re presented with "Existing profile: settings for profile 1," showcasing the current configurations. In contrast, the right side displays "Proposed profile: new settings for profile 1," revealing potential modifications. Before any changes take effect, a confirmation is required, ensuring intentional adjustments. Nevertheless, if uncertainty strikes, the option to cancel remains readily available, providing flexibility in decision-making.'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: A detailed view of the profile editing process",src:a(24053).c,width:"1095",height:"889"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: A detailed view of the profile editing process")),(0,n.yg)("h3",{id:"delete-profiles"},"Delete profiles"),(0,n.yg)("p",null,'Alongside the edit function, the "remove profile" option is noticeably present for every transcoding profile. Initiating the removal action triggers a modal window, necessitating your confirmation for the deletion.'),(0,n.yg)("p",null,"It's worth noting that post-deletion, the system intuitively restructures the extant profiles within the streamgroup. This automatic reorganization ensures that the streaming quality remains at its optimal level, even in the absence of the deleted profile."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: A detailed view of the profile deletion process",src:a(29780).c,width:"1095",height:"996"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: A detailed view of the profile deletion process")),(0,n.yg)("h2",{id:"operation-and-workflow"},"Operation and Workflow"),(0,n.yg)("p",null,'Transcoding and Adaptive Bitrate Playback (ABR) are built upon a group of streams. On the customer/viewer side, the stream switching occurs seamlessly in the background, depending on the internet connection. A typical configuration involves a single input stream (ingest) and three output streams, including one "passthrough" stream (maintaining the same input quality) and two lower-resolution streams.'),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Input (Ingest) and Highest Quality: 1920x1080, 3 Mbit/s"),(0,n.yg)("li",{parentName:"ul"},"Output 1 (Passthrough): 1920x1080, 3 Mbit/s"),(0,n.yg)("li",{parentName:"ul"},"Transcode 1 (High): 1280x720, 1600 Kbit/s"),(0,n.yg)("li",{parentName:"ul"},"Transcode 2 (Medium): 852x480, 800 Kbit/s"),(0,n.yg)("li",{parentName:"ul"},"Transcode 3 (Low): 640x360, 400 Kbit/s")),(0,n.yg)("h2",{id:"switch-stream-quality-manually"},"Switch Stream Quality manually"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Stream Quality Switch",src:a(17512).c,width:"1920",height:"1003"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Stream Quality Switch")),(0,n.yg)("p",null,'On the playout page, you have the ability to adjust the stream quality manually by collapsing the stream qualities section labeled "Stream Quality: Original (adaptive)." By default, the adaptation is set to automatic, which allows the player to dynamically adjust the stream quality based on the viewer\'s network conditions. However, you can choose to switch to manual mode.'),(0,n.yg)("p",null,"When in manual mode, you can switch between the stream names along with their corresponding qualities, including resolution, bitrate, and framerate. This gives you greater control over the playback experience and allows you to choose a specific quality that suits your preferences or requirements."))}g.isMDXComponent=!0},99644:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/cf-abr-infographic-e1c8932ea02e638ed8de3d7bc3faada5.jpg"},40900:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/cf-abr-stream-a5f970e6812256c58cf20ba45ded21e6.png"},832:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/cf-add-additional-profile-fb6bb110eccc530f77117b27892d31ae.jpg"},94736:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/cf-add-profile-6eb42426e0c23047baeaba5e20574d78.jpg"},29780:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/cf-delete-abr-e4849795538137ecc67e7debf6ea26cd.jpg"},24053:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/cf-edit-profile-180b6895fb15c81f4306cfa6f232c68a.jpg"},17512:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/cf-switch-62d50f7996773449dbb991500ca4943d.jpg"}}]);