"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5464],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=m(a),u=n,c=g["".concat(l,".").concat(u)]||g[u]||p[u]||i;return a?r.createElement(c,s(s({ref:t},d),{},{components:a})):r.createElement(c,s({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:n,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(58168),n=(a(96540),a(15680));const i={id:"Dashboard_Stream_Overview",title:"Stream Overview",sidebar_label:"Stream Overview"},s=void 0,o={unversionedId:"cloud-frontend-v3/Dashboard_Stream_Overview",id:"cloud-frontend-v3/Dashboard_Stream_Overview",title:"Stream Overview",description:"The streams page provides a comprehensive list of all your streams, displaying their state (created, live, ended), stream ID, stream name, whether they are part of a stream group, and their last update timestamp. Additionally, the pesence of tags allows for easier stream identification.",source:"@site/docs/cloud-frontend-v3/Dashboard_Stream_Overview.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_Stream_Overview",permalink:"/docs/cloud-frontend-v3/Dashboard_Stream_Overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"Dashboard_Stream_Overview",title:"Stream Overview",sidebar_label:"Stream Overview"},sidebar:"nanoStream Cloud",previous:{title:"Start Streaming",permalink:"/docs/cloud-frontend-v3/Dashboard_Start_Streaming"},next:{title:"Adaptive Bitrate (ABR) and Live Transcoding",permalink:"/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding"}},l={},m=[{value:"Stream List",id:"stream-list",level:2},{value:"Labels of the Stream List",id:"labels-of-the-stream-list",level:2},{value:"Stream State",id:"stream-state",level:3},{value:"Stream ID",id:"stream-id",level:3},{value:"Stream name",id:"stream-name",level:3},{value:"ABR Stream",id:"abr-stream",level:3},{value:"Last Udpated",id:"last-udpated",level:3},{value:"Tags",id:"tags",level:3},{value:"Filter",id:"filter",level:2},{value:"Select Dates",id:"select-dates",level:3},{value:"All ABR Streams",id:"all-abr-streams",level:3},{value:"Filter by tags",id:"filter-by-tags",level:3},{value:"State",id:"state",level:3},{value:"Single Stream Overview",id:"single-stream-overview",level:2}],d={toc:m},g="wrapper";function p(e){let{components:t,...i}=e;return(0,n.yg)(g,(0,r.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/stream"},"streams page")," provides a comprehensive list of all your streams, displaying their state (",(0,n.yg)("inlineCode",{parentName:"p"},"created"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"live"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ended"),"), stream ID, stream name, whether they are part of a stream group, and their last update timestamp. Additionally, the pesence of tags allows for easier stream identification."),(0,n.yg)("h2",{id:"stream-list"},"Stream List"),(0,n.yg)("admonition",{title:"Before starting",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,n.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,n.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: All Streams Overview",src:a(32412).A,width:"1920",height:"1080"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: All Streams Overview")),(0,n.yg)("p",null,"If a stream belongs to a stream group, you have the option to collapse the row and view the individual streams within the group, such as passthrough, first transcode, and second transcode."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenhot: Collapsed Streamgroup",src:a(20964).A,width:"1920",height:"1080"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenhot: Collapsed Streamgroup")),(0,n.yg)("h2",{id:"labels-of-the-stream-list"},"Labels of the Stream List"),(0,n.yg)("h3",{id:"stream-state"},"Stream State"),(0,n.yg)("p",null,"This column indicates the current state of each stream."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"created"),": The stream has never been live"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"live"),": The stream is live right now"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"deleted"),": The stream was live and is not outputting footage anymore.")),(0,n.yg)("h3",{id:"stream-id"},"Stream ID"),(0,n.yg)("p",null,"The column displays a unique identifier for each stream and if the stream is an ABR stream it is also the stream group id."),(0,n.yg)("h3",{id:"stream-name"},"Stream name"),(0,n.yg)("p",null,"The streamname (\u201eXXXXX-YYYYY\u201c) shows the organisation hash and the unique stream name assigned to each stream."),(0,n.yg)("h3",{id:"abr-stream"},"ABR Stream"),(0,n.yg)("p",null,'Indicates whether the stream is an Adaptive Bitrate (ABR) stream. It shows the number of playouts for ABR streams, and for non-ABR streams, it displays "No ABR".'),(0,n.yg)("h3",{id:"last-udpated"},"Last Udpated"),(0,n.yg)("p",null,"Timestamp of the most recent update or modification to the stream."),(0,n.yg)("h3",{id:"tags"},"Tags"),(0,n.yg)("p",null,"Assigned tags or labels for categorizing and identifying streams based on specific attributes or characteristics."),(0,n.yg)("h2",{id:"filter"},"Filter"),(0,n.yg)("p",null,"To streamline your search, you can utilize various filters such as selecting a date range to view specific streams, filtering streams by tags, or filtering by state."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Filter",src:a(90659).A,width:"1837",height:"144"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Filter")),(0,n.yg)("p",null,"These features enable you to efficiently manage and navigate through your streams, providing a clear and organized overview of your streaming content within the nanoStream Cloud Dashboard."),(0,n.yg)("h3",{id:"select-dates"},"Select Dates"),(0,n.yg)("p",null,'The "Select Date" filter allows you to choose any specific day and time range within the entire duration of your usage of the nanoStream Cloud. You can select a start date and time, as well as an end date and time.'),(0,n.yg)("h3",{id:"all-abr-streams"},"All ABR Streams"),(0,n.yg)("p",null,'You have the option to enable the "All ABR Streams" button, which allows you to view all individual streams, regardless of whether they are part of a stream group or not. To assist you in identifying stream groups, the stream ID of the corresponding stream group will be displayed underneath. However, please note that it may be a bit confusing to differentiate between individual streams and stream groups in this view.'),(0,n.yg)("h3",{id:"filter-by-tags"},"Filter by tags"),(0,n.yg)("p",null,'The tag filter allows you to look for streams based on specific tags. You can either manually type in the desired tag or choose from the existing tags that you have previously used. As you start typing at least 3 characters, the system will suggest tags that match the entered characters. To apply a tag, simply hit the "Enter" key after typing it.'),(0,n.yg)("h3",{id:"state"},"State"),(0,n.yg)("p",null,'The "Filter by State" option allows you to choose between different stream states:'),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"live"),": This state indicates that the stream is currently active and being broadcasted live."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"created"),': Streams in the "Created" state are newly created streams that are ready to be started or scheduled for future broadcasting.'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ended"),': "Ended" streams have completed their live broadcasting and are no longer actively streaming.'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"deleted"),': Streams in the "Deleted" state have been removed or deleted from the system. Please note that you can only access the deleted streams once you select the "Deleted" option in the filter line. ',(0,n.yg)("em",{parentName:"li"},"Also: It is not possible to see a stream overview of it."))),(0,n.yg)("h2",{id:"single-stream-overview"},"Single Stream Overview"),(0,n.yg)("p",null,"The stream overview provides a comprehensive view of your streams and their associated details. This section serves as a central hub where you can access important information about your stream."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Stream Overview",src:a(76464).A,width:"1305",height:"2353"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Stream Overview")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Detailed Stream View"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"View the unique stream ID, its current state (live, created, ended), date of creation, its association with a stream group, and the number of associated playouts. Determine if the stream is secure."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Stream Group Details"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Understand your stream group with its ID and the last update timestamp. You have the option to activate the time code interval and thumbnails. If activated, the chosen intervals are displayed."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Adaptive Bitrate (ABR) Stream Overview"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Navigate between tabs for a comprehensive view of individual streams within a stream group."),(0,n.yg)("li",{parentName:"ul"},"Details include each stream's ABR profile quality, ID, tags, push URL, and name. You can edit the tags and push URL for each profile. Additionally, profiles can be ",(0,n.yg)("a",{parentName:"li",href:"./Dashboard_ABR_Transcoding#transform-a-non-transcoding-stream-into-an-abr-stream"},"added"),", ",(0,n.yg)("a",{parentName:"li",href:"./Dashboard_ABR_Transcoding#edit-profiles"},"edited"),", or ",(0,n.yg)("a",{parentName:"li",href:"Dashboard_ABR_Transcoding#delete-profiles"},"removed"),"."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Thumbnails"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"If activated, view the thumbnail of your stream generated based on the chosen interval during activation."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Ingest Section"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Access the RTMP ingest stream name and URL for easy integration with your streaming source."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Secure JWT Token Creation")," (if enabled):",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Generate secure JWT tokens for enhanced stream access control when this feature is activated."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"H5Live Playout"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"View the live playout URL, enabling real-time streaming for viewers. For embedding the nanoStream H5Live Player on a website, an iframe embed URL is available for integration."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Codes for Nanoplayer Integration"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Use the provided code snippets, such as the iframe embed tag or the HTML nanoStream H5Live code, to embed the nanoStream H5Live Player effortlessly on your website."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"RTMP Playout Stream"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Retrieve the RTMP playout stream name and URL for broader distribution or integration into other platforms."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Stream Management (Delete, Lock)"),":",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Manage your streams effectively with options to delete, lock, or unlock them for ingest purposes.")))))}p.isMDXComponent=!0},32412:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cf-all-streams-66ecb774f93ef1ced1386af8093b9995.jpg"},90659:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cf-filter-5a7b676cf6b856f882ad1d15d673755e.png"},76464:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cf-overview-b7ff798e0bf7305ebcc362185b722e4e.jpg"},20964:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cf-streamgroup-e88ac8c4f40f342e709751e9b23cb6d5.jpg"}}]);