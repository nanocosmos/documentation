"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?i.createElement(h,s(s({ref:t},c),{},{components:a})):i.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:n,s[1]=r;for(var d=2;d<o;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=a(87462),n=a(67294),o=a(3905),s=a(6272);const r=e=>{let{image:t,alt:a,widthScaling:i,title:o,description:r}=e;const[l,d]=(0,n.useState)(!1);return void 0===a&&(a="This is an example."),void 0===i&&(i=100),(0,n.useEffect)((()=>{const e=()=>{const e=document.querySelectorAll('div[class^="scaled-image-container"]');e[0]?.offsetWidth<800?(d(!0),e.forEach((e=>{e.style.display="block"}))):(d(!1),e.forEach((e=>{e.style.display="grid"})))};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]),void 0===o?n.createElement("div",{className:s.Z["notext-container-centered"]},n.createElement("img",{src:`/${t}`,className:s.Z[`image-${i}`],alt:a}),n.createElement("figcaption",{className:s.Z["scaled-image-caption"]},a)):l?n.createElement("div",{className:s.Z[`scaled-image-container-${i}`]},n.createElement("div",{className:s.Z["scaled-image-textbox"]},n.createElement("div",{className:s.Z["scaled-image-title"]},o),n.createElement("div",{className:s.Z["scaled-image-description"]},r)),n.createElement("div",{className:s.Z["scaled-image"]},n.createElement("img",{src:`/${t}`,alt:a}),n.createElement("figcaption",{className:s.Z["scaled-image-caption"]},a))):n.createElement("div",{className:s.Z[`scaled-image-container-${i}`]},n.createElement("div",{className:s.Z["scaled-image"]},n.createElement("img",{src:`/${t}`,alt:a}),n.createElement("figcaption",{className:s.Z["scaled-image-caption"]},a)),n.createElement("div",{className:s.Z["scaled-image-textbox"]},n.createElement("div",{className:s.Z["scaled-image-title"]},o),n.createElement("div",{className:s.Z["scaled-image-description"]},r)))},l={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},d=void 0,c={unversionedId:"cloud/troubleshooting",id:"cloud/troubleshooting",title:"Troubleshooting",description:"The trouble shooting page helps to investigate stream or user specific metrics across the streaming experience from stream ingest to the playout at the enduser. With this feature you have a complete transparent view at your streams, which helps you to find potential problems and be more capable of solving them faster.",source:"@site/docs/cloud/troubleshooting.mdx",sourceDirName:"cloud",slug:"/cloud/troubleshooting",permalink:"/docs/cloud/troubleshooting",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"nanoStream Analytics",previous:{title:"Alerts and Advices",permalink:"/docs/cloud/alerting"},next:{title:"nanoStream Guardian",permalink:"/docs/cloud/analytics-guardian"}},m={},p=[{value:"Access",id:"access",level:2},{value:"Time Picker",id:"time-picker",level:2},{value:"Playouts",id:"playouts",level:2},{value:"Stream Playout Information",id:"stream-playout-information",level:3},{value:"Visualizations",id:"visualizations",level:3},{value:"Ingests",id:"ingests",level:2},{value:"Stream Ingest Information",id:"stream-ingest-information",level:3},{value:"Visualizations",id:"visualizations-1",level:3},{value:"RTMP Ingests",id:"rtmp-ingests",level:4},{value:"WebRTC Ingests",id:"webrtc-ingests",level:4},{value:"Ingest Quality Alerting",id:"ingest-quality-alerting",level:3},{value:"Stream Time Ratio",id:"stream-time-ratio",level:4},{value:"Other Samples",id:"other-samples",level:3},{value:"Video only ingest workflow",id:"video-only-ingest-workflow",level:4},{value:"Audio only ingest workflow",id:"audio-only-ingest-workflow",level:4},{value:"Audio/Video ingest workflow in good condition",id:"audiovideo-ingest-workflow-in-good-condition",level:4},{value:"Audio/Video ingest workflow with network issues",id:"audiovideo-ingest-workflow-with-network-issues",level:4}],u={toc:p},h="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The trouble shooting page helps to investigate stream or user specific metrics across the streaming experience from stream ingest to the playout at the enduser. With this feature you have a complete transparent view at your streams, which helps you to find potential problems and be more capable of solving them faster."),(0,o.kt)("admonition",{title:"Before starting",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To begin, please sign in to the ",(0,o.kt)("a",{parentName:"p",href:"https://metrics.nanocosmos.de/login"},"metrics dashboard")," using your nanoStream Cloud/Bintu account credentials. ",(0,o.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,o.kt)("h2",{id:"access"},"Access"),(0,o.kt)("p",null,"Access to the Trouble Shooting page is available for every nanoStream Cloud customer."),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Displaying Stream Playout information will require a business upgrade to sent your H5Live Player metrics to our Analytics backend. Please contact sales(at)nanocosmos.de for business details.")),(0,o.kt)("h2",{id:"time-picker"},"Time Picker"),(0,o.kt)("p",null,'The time picker declares the time period in which you will query for available metric results. Use to " Set to Now" button the to automatically update to the current time.'),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Date and time values are interpreted as UTC, an offset to your local timezone needs to be considered.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Time Picker",src:a(68154).Z,width:"636",height:"329"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Time Picker")),(0,o.kt)("h2",{id:"playouts"},"Playouts"),(0,o.kt)("p",null,"After selecting a specific time period you are asked to enter an IP address or an user ID to access playout statistics about all streams that this user retrieved. You will then be able to select one out of the 5 newest playouts based on their start date. To view more than these 5 results you need to adjust the time range accordingly. We also implemented support for currently running playouts."),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Only organizations with player metrics option enabled will be able to see the items in this data group.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Playout Time Picker",src:a(15334).Z,width:"1620",height:"420"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Playout Time Picker")),(0,o.kt)("p",null,"(A) ",(0,o.kt)("inlineCode",{parentName:"p"},"From (UTC Time)")," the ",(0,o.kt)("strong",{parentName:"p"},"start")," of the time range to search in."),(0,o.kt)("p",null,"(B) ",(0,o.kt)("inlineCode",{parentName:"p"},"To (UTC Time)")," the ",(0,o.kt)("strong",{parentName:"p"},"end")," of the time range to search in."),(0,o.kt)("p",null,"(C) ",(0,o.kt)("inlineCode",{parentName:"p"},"By")," indicates the time interval granularity. It can be 30 seconds or 1 minute."),(0,o.kt)("p",null,"(D) ",(0,o.kt)("inlineCode",{parentName:"p"},"Playout")," tab which selects to view playout statistics. Playout statistics for all streams in the selected time period are retrieved."),(0,o.kt)("p",null,"(E) ",(0,o.kt)("inlineCode",{parentName:"p"},"End to End")," tab which selects to view both playout and ingest statistics in the same page. Playout and ingest statistics for all streams in the selected time period are retrieved."),(0,o.kt)("p",null,"(F) ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingest")," tab which selects to view ingest statistics. Ingest statistics for all streams in the selected time period are retrieved."),(0,o.kt)("p",null,"(G) ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy URL to share")," will copy the current page setup to clipboard. Users can send this URL to nanocosmos support for further troubleshooting help."),(0,o.kt)("p",null,"(H) ",(0,o.kt)("inlineCode",{parentName:"p"},"IP address/user ID")," specifies either the IP address used in client playouts or user IDs to search for related streams."),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To make this work with user IDs, you have to assign IDs to your users beforehand and also transmit that to the ",(0,o.kt)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_player_metrics#how-to-use"},"player API"),".")),(0,o.kt)("p",null,"(I) ",(0,o.kt)("inlineCode",{parentName:"p"},"Select a stream")," shows all streams that has a playout related to the IP address or user ID set earlier."),(0,o.kt)("h3",{id:"stream-playout-information"},"Stream Playout Information"),(0,o.kt)("p",null,"If there are metrics available for the selected IP/ user ID within the stated time period, a list of streams viewed by this user is shown. Select the desired stream name to see a list of all playouts for this stream. After you selected a playout more detailed information are shown. Define the time interval with the slider to zoom into streams with a longer duration or to focus on specific parts of the stream. At this point you can synchronize with the corresponding ingest data of the playout on the right side."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Playout Stream Information",src:a(9740).Z,width:"1661",height:"821"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Playout Stream Information")),(0,o.kt)("p",null,"(A) ",(0,o.kt)("inlineCode",{parentName:"p"},"Playouts")," of selected stream name."),(0,o.kt)("p",null,"(B)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Start")," indicates the start of playout."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"End")," indicates the end of playout."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Duration")," indicates playback duration.")),(0,o.kt)("p",null,"(C) Groups of meta-data information are shown related to the stream. ",(0,o.kt)("br",null),"\nThe meta-data includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"User ID")," - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use"},"user ID"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IP")," - client IP address used for playout."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Event ID")," - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use"},"event ID"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Custom field 1")," - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use"},"custom field1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Playout ID")," - internally generated unique ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"H5Live player version")," - version of nanoplayer used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Device")," - type of device used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Referrer")," - webpage that hosts the nanoPlayer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Country")," - location of user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"City")," - location of user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Resolution width")," - width of video stream in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Resolution height")," - height of video stream in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OS")," - OS used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OS version")," - OS version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Browser")," - web browser used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Browser version")," - browser version.")),(0,o.kt)("p",null,"(D) This tab shows which group of meta-data information is being shown at the moment and how many groups are available."),(0,o.kt)("p",null,"(E) (F)\nClick to switch between meta-data information."),(0,o.kt)("p",null,"(G)\nThis time slider can be used to define the time interval, allowing to zoom into streams with a longer duration or to focus on specific parts of the stream."),(0,o.kt)("p",null,"(H)\n",(0,o.kt)("inlineCode",{parentName:"p"},"Synchronize ingest")," gives the ability to synchronize the currently selected playout with the corresponding ingest data group. In this selection, the playout data group is shown on the left side while the ingest data group is shown on the right side. This is same as selecting the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"End to End"))," data group."),(0,o.kt)("admonition",{title:"Info",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If an user reloads the page of a stream, it will be accounted as a new playout. ")),(0,o.kt)("admonition",{title:"info",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you set the visible time range to under 5 minutes, you switch from data aggregation mode into raw data mode. Therefore you will get exact datapoints at the given time. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Troubleshooting Raw Data Mode",src:a(8655).Z,width:"850",height:"806"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Troubleshooting Raw Data Mode")),(0,o.kt)("h3",{id:"visualizations"},"Visualizations"),(0,o.kt)("p",null,"This area shows charts for various player metrics."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Playout Media Information",src:a(43543).Z,width:"1619",height:"856"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Playout Media Information")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Bitrate")," ","[kBits/s]",":\nThe retrieved bitrate on the client side at a specific time. Purple lines symbolize events which are also listed in the Events table."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Latency")," ","[s]",":\nThe latency from ingest to playout. Purple lines symbolize events which are also listed in the Events table."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Buffering Totaltime Ratio")," ","[%]",":\nThe ratio between buffer and playback duration. "),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A ratio of 0% means no buffering and a ratio of 100% means no playback was possible.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Events"),":\nAll events that occurred in the selected playout."),(0,o.kt)("h2",{id:"ingests"},"Ingests"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Ingest"))," tab selects the ingest data group with all items described in detail next. Whether you have synchronized a corresponding playout or entered a valid, in the time period available stream name yourself, you will have access to ingest specific data, depending on the used protocol WebRTC or RTMP. You can see which protocol was used after entering a stream name right below the selection. We also implemented support for current running ingests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Troubleshoot Ingest",src:a(72293).Z,width:"2486",height:"1548"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Troubleshoot Ingest")),(0,o.kt)("p",null,"(A) ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream name")," indicates the stream name of interest."),(0,o.kt)("p",null,"(B)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Status")," shows if the ingest was successful or failed due to an error."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Start")," indicates the ingest start time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"End")," indicates the ingest end time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Duration")," indicates ingest duration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Drops")," indicates if the ingest was interrupted.")),(0,o.kt)("p",null,"\u24b8","\nGroups of meta-data information are shown related to the stream. The meta-data includes :\n-",(0,o.kt)("inlineCode",{parentName:"p"},"Protocol")," - streaming protocol used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Data center")," - specific data center used for this ingest."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Server")," - specific server in the data center used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IP")," - client IP from which the stream was ingested."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Country")," - location of client IP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"City")," - location of client IP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Resolution width")," - width of video stream in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Resolution height")," - height of video stream in pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webcaster ID")," - ID of corresponding webcaster instance.")),(0,o.kt)("p",null,"(C) This tab shows which group of meta-data information is being shown at the moment and how many groups are available."),(0,o.kt)("p",null,"(E) (F) Click to switch between meta-data information."),(0,o.kt)("p",null,"(G) This time slider can be used to define the time interval, allowing to zoom into streams with a longer duration or to focus on specific parts of the stream."),(0,o.kt)("h3",{id:"stream-ingest-information"},"Stream Ingest Information"),(0,o.kt)("p",null,"The list of ingests for the selected stream name contains both successful ingest tries and ingest failures within the chosen time range. You can click on a specific ingest to get more details, regarding error message, error codes or additional meta information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Troubleshoot Ingest Status",src:a(25988).Z,width:"1631",height:"597"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Troubleshoot Ingest Status")),(0,o.kt)("h3",{id:"visualizations-1"},"Visualizations"),(0,o.kt)("p",null,"Define the time interval with the slider to zoom into streams with a longer duration or to focus on specific parts of the stream. The results you get for the ingest stream name are also sorted by newest first as for the playouts. Selecting a time period auto-refreshes the statistics below."),(0,o.kt)("h4",{id:"rtmp-ingests"},"RTMP Ingests"),(0,o.kt)("p",null,"Ingests using RTMP only provide metrics about video and audio bitrates."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Troubleshoot Ingest RTMP",src:a(84249).Z,width:"1623",height:"438"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Troubleshoot Ingest RTMP")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Video bitrate")," ","[kBits/s]",": Video bitrate of the ingested stream.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Audio bitrate")," ","[kBits/s]",": Audio bitrate of the ingested stream."))),(0,o.kt)("h4",{id:"webrtc-ingests"},"WebRTC Ingests"),(0,o.kt)("p",null,"Ingests using Web Real Time Communication are providing additional insights to framerate, encoding and package delivery."),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To have ",(0,o.kt)("a",{parentName:"p",href:"./analytics#webcaster"},"WebRTC metric")," data available for the Troubleshooting page, they need to be enabled.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Troubleshoot Ingest Webcaster",src:a(44245).Z,width:"1679",height:"782"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Troubleshoot Ingest Webcaster")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Video bitrate")," ","[kBits/s]",": Video bitrate of the ingested stream.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Audio bitrate")," ","[kBits/s]",": Audio bitrate of the ingested stream.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Framerate")," ","[fps]",": Framerate of the ingested stream.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Average frame encode time")," ","[ms]",": The average time needed to encode one frame of the stream.\n"))),(0,o.kt)("admonition",{title:"Long encode time",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that a long encode time is an indicator for high encoder workload, which can lead to ingest problems. ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Count of packet loss detections"),": Amount of WebRTC notifications about lost data packages.")),(0,o.kt)("admonition",{title:"High count of lost packages",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note, a high count of lost packages at a time can lead to issues with the video representation on the side of the end user.")),(0,o.kt)("h3",{id:"ingest-quality-alerting"},"Ingest Quality Alerting"),(0,o.kt)("p",null,"Via troubleshooting capability you can examine alerted streams and make potential issues visible, by checking the following metrics."),(0,o.kt)("h4",{id:"stream-time-ratio"},"Stream Time Ratio"),(0,o.kt)("p",null,"The stream time ratio (STR) represents the relation between the elapsed real time and the stream time within a window of 15 seconds. A constant ratio value of 1 would be ideal - but a small fluctuation is expected. A big fluctuation or deviation from the value 1 indicates issues on the ingest side, for instance caused by a limited bandwidth or high CPU load. The higher the deviation from the value 1, the higher the probability for an increased latency on the playback/viewer side."),(0,o.kt)(r,{image:"str_normal.png",alt:"Normal STR Example",widthScaling:"50",title:"Regular Stream Time Ratio",description:"In this example you can see a regular course of the STR metric. If you take a closer look at the beginning of the stream, you will notice an increasement in the first 30 seconds, which is intended behavior and does not generate an alert. Sometimes the ingest stream takes a bit to run stable and little fluctuations are considered as regular conditions.",mdxType:"ScaledImage"}),(0,o.kt)(r,{image:"str_drops.png",alt:"Drop STR Example",widthScaling:"50",title:"Stream Time Ratio with Drops",description:"This example shows some kind of edge case. If the stream time ratio indicates spikes, it can be a hint for possible issues. Nevertheless if the stream does recover quickly enough, there is nothing to worry about. The constant fluctuations are sometimes dipping below 0.9, but will be okay, since the average value will be above this threshold.",mdxType:"ScaledImage"}),(0,o.kt)(r,{image:"str_fluc_recover.png",alt:"Fluctuation STR Example",widthScaling:"50",title:"Temporary fluctuating Stream Time Ratio",description:"In this case you can observe a highly fluctating moment of an ingest stream, which does recover after a while. This is a good example for stream behavior that might generate an alert within the first minutes, but will recover by itself afterwards. The reason behind the fluctuation could be bandwith issues or encoder instability.",mdxType:"ScaledImage"}),(0,o.kt)("h3",{id:"other-samples"},"Other Samples"),(0,o.kt)("h4",{id:"video-only-ingest-workflow"},"Video only ingest workflow"),(0,o.kt)("p",null,"The figure below shows the graphical representation.\nIn this scenario, only video bitrate data can be observed, while audio bitrate is not available.\nAlso, the detected video bitrate is about 1 Mbps and this can be checked against settings on ingest encoder."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Video Only",src:a(63992).Z,width:"880",height:"425"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Video Only")),(0,o.kt)("h4",{id:"audio-only-ingest-workflow"},"Audio only ingest workflow"),(0,o.kt)("p",null,"The figure below shows the graphical representation.\nIn this scenario, only audio bitrate data can be observed, while video bitrate is not available.\nSimilarly, the detected audio bitrate is averaging above 25Kbps and this can be checked against settings on ingest encoder."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Audio Only Ingest Workflow",src:a(95996).Z,width:"863",height:"433"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Audio Only Ingest Workflow")),(0,o.kt)("h4",{id:"audiovideo-ingest-workflow-in-good-condition"},"Audio/Video ingest workflow in good condition"),(0,o.kt)("p",null,"The figure below shows the graphical representation.\nAs can be observed, the average video bitrate is about 1.2Mbps while audio bitrate is about 90Kbps. The video and audio bitrates do not deviate too much from the average over time and will not cause overflow or underflow of buffers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot Audio/Video Ingest Workflow in good condition",src:a(84249).Z,width:"1623",height:"438"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot Audio/Video Ingest Workflow in good condition")),(0,o.kt)("h4",{id:"audiovideo-ingest-workflow-with-network-issues"},"Audio/Video ingest workflow with network issues"),(0,o.kt)("p",null,"The figure below shows the graphical representation.\nAs can be observed, the average video bitrate is about 2Mbps while audio bitrate is about 150Kbps. Towards the end of the graph as highlighted by the red box, the video and audio bitrates fluctuate by more than 50% of the average. This signifies some issues with the ingest from the encoder to nanocosmos CDN. Some causes of these could be ISP related network degradation or encoding anomalies. If this issue is not rectified quickly, then it will cause overflow or underflow of buffers resulting in buffering, connection issues, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: Audio/Video Ingest workflow with network issues",src:a(11240).Z,width:"1618",height:"433"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: Audio/Video Ingest workflow with network issues")))}g.isMDXComponent=!0},6272:(e,t,a)=>{a.d(t,{Z:()=>i});const i={footerExtensionWrapper:"footerExtensionWrapper_nPNg",footerExtensionSection:"footerExtensionSection_cI1P",features:"features_TVkQ",featureSvg:"featureSvg_qy_F",horizontalLine:"horizontalLine_pd3l",buttons:"buttons_ZitN","scaled-image":"scaled-image_xMYw","scaled-image-inverse":"scaled-image-inverse_V4ln","scaled-image-textbox":"scaled-image-textbox_W280","scaled-image-textbox-inverse":"scaled-image-textbox-inverse_tAfO","scaled-image-title":"scaled-image-title_VOqC","scaled-image-description":"scaled-image-description_pOxj","scaled-image-caption":"scaled-image-caption_QQte","scaled-image-container-10":"scaled-image-container-10_RhEk","scaled-image-container-20":"scaled-image-container-20_jdoN","scaled-image-container-30":"scaled-image-container-30__jUc","scaled-image-container-40":"scaled-image-container-40_I6vH","scaled-image-container-50":"scaled-image-container-50_YSNh","scaled-image-container-60":"scaled-image-container-60_lz7Y","scaled-image-container-70":"scaled-image-container-70_W3Z0","scaled-image-container-80":"scaled-image-container-80_ukdq","scaled-image-container-90":"scaled-image-container-90_q5ZW","scaled-image-container-100":"scaled-image-container-100_JjDj","notext-container-centered":"notext-container-centered_NsQE","image-10":"image-10_vsdz","image-20":"image-20_VnPH","image-30":"image-30_CuLN","image-40":"image-40_lRwB","image-50":"image-50_BOA8","image-60":"image-60_rFhm","image-70":"image-70_qOC_","image-80":"image-80_CZ8M","image-90":"image-90_AXyW","image-100":"image-100_OHmW"}},95996:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-audio-only-79abba7c66cde8139149b1096a4781b8.png"},84249:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-ingest-rtmp-16f5d970eccd60482a740c46889658c5.png"},25988:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-ingest-status-d3d88c5bae204f0d945d96c40a521f89.png"},44245:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-ingest-webrtc-732e4bdc1b568d7b234720c1303955a9.png"},72293:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-ingest-5bea75c6b3e868676b85348936ee0262.png"},11240:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-ingestNG-8e140f0b4fdd7823323bd8fe7a04ef34.png"},15334:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-playout-5ab7817409bda8147aa9a37d36c32c38.png"},9740:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-po1-3f5ab156bb6c3f36610c63c935456580.png"},43543:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-po2-c3edec161a0fcc53f9a8ab1d8d8c4111.png"},8655:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-raw_mode-67afe4cfb91815f704b3060f47a749fc.png"},68154:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-time_picker-4cd1e4e68b1ebd059aa5a0603e69b0a7.png"},63992:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tp-video-only-3611bb648a23d620b4a8210bc25b9c05.png"}}]);