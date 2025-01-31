"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["7050"],{71269:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"cloud-frontend-v3/Dashboard_ABR_Transcoding","title":"Adaptive Bitrate (ABR) and Live Transcoding","description":"Adaptive Bitrate (ABR)","source":"@site/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding.md","sourceDirName":"cloud-frontend-v3","slug":"/cloud-frontend-v3/Dashboard_ABR_Transcoding","permalink":"/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"id":"Dashboard_ABR_Transcoding","title":"Adaptive Bitrate (ABR) and Live Transcoding","sidebar_label":"Adaptive Bitrate (ABR) and Live Transcoding"},"sidebar":"nanoStream Cloud","previous":{"title":"Stream Overview","permalink":"/docs/cloud-frontend-v3/Dashboard_Stream_Overview"},"next":{"title":"Live Processing","permalink":"/docs/cloud-frontend-v3/Dashboard_Live_Processing"}}'),n=i("85893"),r=i("50065");let o={id:"Dashboard_ABR_Transcoding",title:"Adaptive Bitrate (ABR) and Live Transcoding",sidebar_label:"Adaptive Bitrate (ABR) and Live Transcoding"},s=void 0,l={},d=[{value:"Adaptive Bitrate (ABR)",id:"adaptive-bitrate-abr",level:2},{value:"What is Adaptive Bitrate Playback?",id:"what-is-adaptive-bitrate-playback",level:3},{value:"How to enable Adaptive Bitrate",id:"how-to-enable-adaptive-bitrate",level:3},{value:"Live Transcoding",id:"live-transcoding",level:2},{value:"What is Live Transcoding?",id:"what-is-live-transcoding",level:3},{value:"How to enable Live Transcoding",id:"how-to-enable-live-transcoding",level:3},{value:"Modifying Transcoding Profiles After Stream Creation",id:"modifying-transcoding-profiles-after-stream-creation",level:2},{value:"Transform a Non-Transcoding Stream into an ABR Stream",id:"transform-a-non-transcoding-stream-into-an-abr-stream",level:3},{value:"Integrating Additional Profiles to Your Streamgroup",id:"integrating-additional-profiles-to-your-streamgroup",level:3},{value:"Edit profiles",id:"edit-profiles",level:3},{value:"Delete profiles",id:"delete-profiles",level:3},{value:"Operation and Workflow",id:"operation-and-workflow",level:2},{value:"Example",id:"example",level:3},{value:"Switch Stream Quality manually",id:"switch-stream-quality-manually",level:2}];function c(e){let t={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",p:"p",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"adaptive-bitrate-abr",children:"Adaptive Bitrate (ABR)"}),"\n",(0,n.jsx)(t.h3,{id:"what-is-adaptive-bitrate-playback",children:"What is Adaptive Bitrate Playback?"}),"\n",(0,n.jsx)(t.p,{children:"Live playback of a live stream relies on a specific network bandwidth. If the viewer's network cannot support the required bandwidth, buffering issues may occur. To prevent buffering, the stream quality can be dynamically adjusted by switching to a lower quality stream encoded with a lower bitrate. Adaptive Bitrate Playback (ABR) is a feature that enables the live player to automatically adapt to the optimal stream quality based on the viewer's available network capacity."}),"\n",(0,n.jsx)(t.p,{children:"For ABR to function effectively, the live stream needs to be available in multiple quality levels, allowing seamless adjustment according to the viewer's network bandwidth."}),"\n",(0,n.jsx)(t.p,{children:"For instance, consider a live stream that offers a high-quality Full HD stream at 1920x1080 resolution with a bitrate of 3 Mbit/s, as well as a lower-resolution stream at 640x360 with a bitrate of 500 kBits/s. This enables viewers with varying network conditions to select the most suitable stream quality for their viewing experience."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Infographic: Adaptive Bitrate Playback",src:i(93362).Z+"",width:"1280",height:"799"}),"\n",(0,n.jsx)(t.em,{children:"Infographic: Adaptive Bitrate Playback"})]}),"\n",(0,n.jsx)(t.h3,{id:"how-to-enable-adaptive-bitrate",children:"How to enable Adaptive Bitrate"}),"\n",(0,n.jsx)(t.p,{children:"Adaptive Bitrate Playback with nanoPlayer does not require server-generated live transcoding. You can also create 3 live streams with the same content but different bitrates from your live encoder. Typically, live transcoding is done on the server to avoid sending 3 separate streams."}),"\n",(0,n.jsx)(t.h2,{id:"live-transcoding",children:"Live Transcoding"}),"\n",(0,n.jsx)(t.h3,{id:"what-is-live-transcoding",children:"What is Live Transcoding?"}),"\n",(0,n.jsx)(t.p,{children:"Live Transcoding refers to the process of converting a high-quality input live stream into multiple lower-quality output streams. It eliminates the need to send multiple streams from the live encoder or broadcaster by dynamically generating additional formats suitable for distribution and playback at the player."}),"\n",(0,n.jsx)(t.p,{children:"By employing live transcoding, a single high-quality input stream can be transformed into various output streams with different resolutions, bitrates, or other encoding parameters. This allows for efficient streaming to viewers with diverse network conditions and device capabilities, ensuring an optimal viewing experience for each user without the need for separate streams for each quality level."}),"\n",(0,n.jsx)(t.p,{children:"Live transcoding simplifies the streaming workflow by enabling broadcasters to send a single stream while the transcoding system automatically generates the required output formats, reducing bandwidth and storage requirements. This process ensures that viewers can access the live stream in the most suitable quality based on their device capabilities and network conditions."}),"\n",(0,n.jsx)(t.h3,{id:"how-to-enable-live-transcoding",children:"How to enable Live Transcoding"}),"\n",(0,n.jsxs)(t.p,{children:["You can enable Live Transcoding for your stream during the ",(0,n.jsx)(t.a,{href:"https://dashboard.nanostream.cloud/stream/create",children:"stream creation"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"Before starting",type:"info",children:(0,n.jsxs)(t.p,{children:["To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,n.jsx)(t.br,{}),"\nIf you have not created an account yet, you can ",(0,n.jsx)(t.a,{href:"https://dashboard.nanostream.cloud/auth?signup",children:"sign up"})," or reach out to our dedicated sales team via the ",(0,n.jsx)(t.a,{href:"https://www.nanocosmos.de/contact",children:"contact form"})," or by sending an email to sales(at)nanocosmos.de."]})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Screenshot: Create Stream and select Transcoding Profiles",src:i(14261).Z+"",width:"1680",height:"1228"}),"\n",(0,n.jsx)(t.em,{children:"Screenshot: Create Stream and select Transcoding Profiles"})]}),"\n",(0,n.jsx)(t.p,{children:"During the stream creation process live transcoding is already enabled by default. You have the option to add transcoding profiles and configure them according to your requirements. The default selection is pre-filled, but you can choose different settings. Ensure that the bitrate of each Transcoding Profile is lower than the ingest/passthrough bitrate or the profile above. Once you have completed the setup and created the stream, you can start broadcasting using your live encoder or the nanoStream Webcaster."}),"\n",(0,n.jsx)(t.h2,{id:"modifying-transcoding-profiles-after-stream-creation",children:"Modifying Transcoding Profiles After Stream Creation"}),"\n",(0,n.jsx)(t.p,{children:"As your streaming requirements evolve, you may find the need to revise your transcoding profiles. Whether it was an oversight initially or a strategic shift, nanoStream Cloud ensures you have the tools to make post-creation adjustments effortlessly."}),"\n",(0,n.jsx)(t.p,{children:"Should you have omitted transcoding profiles during your stream's setup, they can always be integrated later through the stream overview."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.mdxadmonitiontitle,{children:[(0,n.jsx)(t.span,{className:"badge-noStreamgroup",children:"\u24E7 No streamgroup"})," vs. ",(0,n.jsx)(t.span,{className:"badge-streamgroup",children:"\u2713 Streamgroup (2-4 Playouts)"})]}),(0,n.jsxs)(t.p,{children:['Beneath the "Stream Overview" header, you\'ll notice a tag that reads ',(0,n.jsx)(t.span,{className:"badge-noStreamgroup",children:"\u24E7 No streamgroup"}),". This tag is an indicator that ",(0,n.jsx)(t.strong,{children:"no transcoding profiles have been configured for this stream"}),". In contrast, if transcoding profiles were present, it would display as ",(0,n.jsx)(t.span,{className:"badge-streamgroup",children:"\u2713 Streamgroup (2-4 Playouts)"}),'."']})]}),"\n",(0,n.jsx)(t.h3,{id:"transform-a-non-transcoding-stream-into-an-abr-stream",children:"Transform a Non-Transcoding Stream into an ABR Stream"}),"\n",(0,n.jsx)(t.p,{children:"At the bottom of the stream details, you'll find an option to add a profile. When you click on it, a dialog will appear, allowing you to create a profile and transform your single stream into a stream group."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Screenshot: Transform a Non-Transcoding Stream into an ABR Stream in the Stream Overview",src:i(80255).Z+"",width:"1920",height:"746"}),"\n",(0,n.jsx)(t.em,{children:"Screenshot: Transform a Non-Transcoding Stream into an ABR Stream in the Stream Overview"})]}),"\n",(0,n.jsx)(t.h3,{id:"integrating-additional-profiles-to-your-streamgroup",children:"Integrating Additional Profiles to Your Streamgroup"}),"\n",(0,n.jsx)(t.p,{children:"Upon either initializing your stream as a streamgroup with transcoding profiles or transitioning it to one, the stream overview presents a refined interface, as illustrated in the accompanying screenshot."}),"\n",(0,n.jsx)(t.p,{children:'In the "Adaptive Bitrate (ABR) Stream Overview" section you can switch between various tabs to explore the passthrough and the associated transcoding profiles. Significantly, atop this section, the "Add Profile" button stands ready. By clicking on the button, you can effortlessly incorporate additional profiles to the streamgroup. Each added profile seamlessly integrates and becomes a cohesive part of the overarching streamgroup.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Screenshot: Stream Overview with the option to add transcoding profiles",src:i(11500).Z+"",width:"1920",height:"1467"}),"\n",(0,n.jsx)(t.em,{children:"Screenshot: Stream Overview with the option to add transcoding profiles"})]}),"\n",(0,n.jsx)(t.h3,{id:"edit-profiles",children:"Edit profiles"}),"\n",(0,n.jsx)(t.p,{children:"Within the streamgroup, each profile is designed for adaptability. As you navigate, options to edit or remove specific profiles become apparent. Opting to edit brings forth a the option to update the transcoding profile."}),"\n",(0,n.jsx)(t.p,{children:'Upon selection, a side-by-side comparison layout emerges. On the left, you\'re presented with "Existing profile: settings for profile 1," showcasing the current configurations. In contrast, the right side displays "Proposed profile: new settings for profile 1," revealing potential modifications. Before any changes take effect, a confirmation is required, ensuring intentional adjustments. Nevertheless, if uncertainty strikes, the option to cancel remains readily available, providing flexibility in decision-making.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Screenshot: A detailed view of the profile editing process",src:i(74781).Z+"",width:"1095",height:"889"}),"\n",(0,n.jsx)(t.em,{children:"Screenshot: A detailed view of the profile editing process"})]}),"\n",(0,n.jsx)(t.h3,{id:"delete-profiles",children:"Delete profiles"}),"\n",(0,n.jsx)(t.p,{children:'Alongside the edit function, the "remove profile" option is noticeably present for every transcoding profile. Initiating the removal action triggers a modal window, necessitating your confirmation for the deletion.'}),"\n",(0,n.jsx)(t.p,{children:"It's worth noting that post-deletion, the system intuitively restructures the extant profiles within the streamgroup. This automatic reorganization ensures that the streaming quality remains at its optimal level, even in the absence of the deleted profile."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Screenshot: A detailed view of the profile deletion process",src:i(23959).Z+"",width:"1095",height:"996"}),"\n",(0,n.jsx)(t.em,{children:"Screenshot: A detailed view of the profile deletion process"})]}),"\n",(0,n.jsx)(t.h2,{id:"operation-and-workflow",children:"Operation and Workflow"}),"\n",(0,n.jsx)(t.p,{children:'Transcoding and Adaptive Bitrate Playback (ABR) are built upon a group of streams. On the customer/viewer side, the stream switching occurs seamlessly in the background, depending on the internet connection. A typical configuration involves a single input stream (ingest) and three output streams, including one "passthrough" stream (maintaining the same input quality) and two lower-resolution streams.'}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Input (Ingest) and Highest Quality: 1920x1080, 3 Mbit/s"}),"\n",(0,n.jsx)(t.li,{children:"Output 1 (Passthrough): 1920x1080, 3 Mbit/s"}),"\n",(0,n.jsx)(t.li,{children:"Transcode 1 (High): 1280x720, 1600 Kbit/s"}),"\n",(0,n.jsx)(t.li,{children:"Transcode 2 (Medium): 852x480, 800 Kbit/s"}),"\n",(0,n.jsx)(t.li,{children:"Transcode 3 (Low): 640x360, 400 Kbit/s"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"switch-stream-quality-manually",children:"Switch Stream Quality manually"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Screenshot: Stream Quality Switch",src:i(4940).Z+"",width:"1920",height:"1003"}),"\n",(0,n.jsx)(t.em,{children:"Screenshot: Stream Quality Switch"})]}),"\n",(0,n.jsx)(t.p,{children:'On the playout page, you have the ability to adjust the stream quality manually by collapsing the stream qualities section labeled "Stream Quality: Original (adaptive)." By default, the adaptation is set to automatic, which allows the player to dynamically adjust the stream quality based on the viewer\'s network conditions. However, you can choose to switch to manual mode.'}),"\n",(0,n.jsx)(t.p,{children:"When in manual mode, you can switch between the stream names along with their corresponding qualities, including resolution, bitrate, and framerate. This gives you greater control over the playback experience and allows you to choose a specific quality that suits your preferences or requirements."})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},93362:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/cf-abr-infographic-e1c8932ea02e638ed8de3d7bc3faada5.jpg"},14261:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/cf-abr-stream-b465acbd9686d7b87a9da9e6d1ccb818.png"},11500:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/cf-add-additional-profile-fb6bb110eccc530f77117b27892d31ae.jpg"},80255:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/cf-add-profile-6eb42426e0c23047baeaba5e20574d78.jpg"},23959:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/cf-delete-abr-e4849795538137ecc67e7debf6ea26cd.jpg"},74781:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/cf-edit-profile-180b6895fb15c81f4306cfa6f232c68a.jpg"},4940:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/cf-switch-62d50f7996773449dbb991500ca4943d.jpg"},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return o}});var a=i(67294);let n={},r=a.createContext(n);function o(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);