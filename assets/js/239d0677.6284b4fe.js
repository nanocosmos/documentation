"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["8552"],{80400:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"cloud/troubleshooting","title":"Troubleshooting","description":"The trouble shooting page helps to investigate stream or user specific metrics across the streaming experience from stream ingest to the playout at the enduser. With this feature you have a complete transparent view at your streams, which helps you to find potential problems and be more capable of solving them faster.","source":"@site/docs/cloud/troubleshooting.mdx","sourceDirName":"cloud","slug":"/analytics/troubleshooting","permalink":"/docs/analytics/troubleshooting","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"slug":"/analytics/troubleshooting","id":"troubleshooting","title":"Troubleshooting","sidebar_label":"Troubleshooting"},"sidebar":"nanoStream Analytics","previous":{"title":"Alerts and Advices","permalink":"/docs/analytics/alerting"},"next":{"title":"API","permalink":"/docs/analytics/api"}}'),i=n("85893"),o=n("50065");let r={slug:"/analytics/troubleshooting",id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},a=void 0,l={},d=[{value:"Access",id:"access",level:2},{value:"Time Picker",id:"time-picker",level:2},{value:"Playouts",id:"playouts",level:2},{value:"Stream Playout Information",id:"stream-playout-information",level:4},{value:"Visualizations",id:"visualizations",level:4},{value:"Ingests",id:"ingests",level:2},{value:"Publishes",id:"publishes",level:3},{value:"Stream Time Ratio",id:"stream-time-ratio",level:4},{value:"Visualizations",id:"visualizations-1",level:4},{value:"Other Samples",id:"other-samples",level:4},{value:"Alerts",id:"alerts",level:3},{value:"Alerts of Type - Stream Time Ratio Issue",id:"alerts-of-type---stream-time-ratio-issue",level:4},{value:"Alerts of Type - Continuous Restarts",id:"alerts-of-type---continuous-restarts",level:4},{value:"Alerts of Type - Duplicated Ingests",id:"alerts-of-type---duplicated-ingests",level:4}];function c(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",scaledimage:"scaledimage",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"import { ScaledImage } from '../../src/components/global/ScaledImage.js';"}),"\n",(0,i.jsx)(t.p,{children:"The trouble shooting page helps to investigate stream or user specific metrics across the streaming experience from stream ingest to the playout at the enduser. With this feature you have a complete transparent view at your streams, which helps you to find potential problems and be more capable of solving them faster."}),"\n",(0,i.jsx)(t.admonition,{title:"Before starting",type:"info",children:(0,i.jsxs)(t.p,{children:["To begin, please sign in to the ",(0,i.jsx)(t.a,{href:"https://metrics.nanocosmos.de/login",children:"Analytics Dashboard"})," using your nanoStream Cloud/Bintu account credentials. ",(0,i.jsx)(t.br,{}),"\nIf you have not created an account yet, you can ",(0,i.jsx)(t.a,{href:"https://dashboard.nanostream.cloud/auth?signup",children:"sign up"})," or reach out to our dedicated sales team via the ",(0,i.jsx)(t.a,{href:"https://www.nanocosmos.de/contact",children:"contact form"})," or by sending an email to sales(at)nanocosmos.de."]})}),"\n",(0,i.jsx)(t.h2,{id:"access",children:"Access"}),"\n",(0,i.jsx)(t.p,{children:"Access to the Trouble Shooting page is available for every nanoStream Cloud customer."}),"\n",(0,i.jsx)(t.admonition,{title:"note",type:"info",children:(0,i.jsx)(t.p,{children:"Displaying Stream Playout information will require a business upgrade to sent your H5Live Player metrics to our Analytics backend. Please contact sales(at)nanocosmos.de for business details."})}),"\n",(0,i.jsx)(t.h2,{id:"time-picker",children:"Time Picker"}),"\n",(0,i.jsx)(t.p,{children:'The time picker declares the time period in which you will query for available metric results. Use to " Set to Now" button the to automatically update to the current time.'}),"\n",(0,i.jsx)(t.admonition,{title:"note",type:"tip",children:(0,i.jsx)(t.p,{children:"Date and time values are interpreted as UTC, an offset to your local timezone needs to be considered."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Time Picker",src:n(66371).Z+"",width:"636",height:"329"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Time Picker"})]}),"\n",(0,i.jsx)(t.h2,{id:"playouts",children:"Playouts"}),"\n",(0,i.jsx)(t.p,{children:"After selecting a specific time period you are asked to enter an IP address or an user ID to access playout statistics about all streams that this user retrieved. You will then be able to select one out of the 5 newest playouts based on their start date. To view more than these 5 results you need to adjust the time range accordingly. We also implemented support for currently running playouts."}),"\n",(0,i.jsx)(t.admonition,{title:"note",type:"tip",children:(0,i.jsx)(t.p,{children:"Only organizations with player metrics option enabled will be able to see the items in this data group."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Playout Time Picker",src:n(2902).Z+"",width:"1620",height:"420"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Playout Time Picker"})]}),"\n",(0,i.jsxs)(t.p,{children:["(A) ",(0,i.jsx)(t.code,{children:"From (UTC Time)"})," the ",(0,i.jsx)(t.strong,{children:"start"})," of the time range to search in."]}),"\n",(0,i.jsxs)(t.p,{children:["(B) ",(0,i.jsx)(t.code,{children:"To (UTC Time)"})," the ",(0,i.jsx)(t.strong,{children:"end"})," of the time range to search in."]}),"\n",(0,i.jsxs)(t.p,{children:["(C) ",(0,i.jsx)(t.code,{children:"By"})," indicates the time interval granularity. It can be 30 seconds or 1 minute."]}),"\n",(0,i.jsxs)(t.p,{children:["(D) ",(0,i.jsx)(t.code,{children:"Playout"})," tab which selects to view playout statistics. Playout statistics for all streams in the selected time period are retrieved."]}),"\n",(0,i.jsxs)(t.p,{children:["(E) ",(0,i.jsx)(t.code,{children:"End to End"})," tab which selects to view both playout and ingest statistics in the same page. Playout and ingest statistics for all streams in the selected time period are retrieved."]}),"\n",(0,i.jsxs)(t.p,{children:["(F) ",(0,i.jsx)(t.code,{children:"Ingest"})," tab which selects to view ingest statistics. Ingest statistics for all streams in the selected time period are retrieved."]}),"\n",(0,i.jsxs)(t.p,{children:["(G) ",(0,i.jsx)(t.code,{children:"Copy URL to share"})," will copy the current page setup to clipboard. Users can send this URL to nanocosmos support for further troubleshooting help."]}),"\n",(0,i.jsxs)(t.p,{children:["(H) ",(0,i.jsx)(t.code,{children:"IP address/user ID"})," specifies either the IP address used in client playouts or user IDs to search for related streams."]}),"\n",(0,i.jsx)(t.admonition,{title:"note",type:"info",children:(0,i.jsxs)(t.p,{children:["To make this work with user IDs, you have to assign IDs to your users beforehand and also transmit that to the ",(0,i.jsx)(t.a,{href:"../nanoplayer/nanoplayer_player_metrics#how-to-use",children:"player API"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["(I) ",(0,i.jsx)(t.code,{children:"Select a stream"})," shows all streams that has a playout related to the IP address or user ID set earlier."]}),"\n",(0,i.jsx)(t.h4,{id:"stream-playout-information",children:"Stream Playout Information"}),"\n",(0,i.jsx)(t.p,{children:"If there are metrics available for the selected IP/ user ID within the stated time period, a list of streams viewed by this user is shown. Select the desired stream name to see a list of all playouts for this stream. After you selected a playout more detailed information are shown. Define the time interval with the slider to zoom into streams with a longer duration or to focus on specific parts of the stream. At this point you can synchronize with the corresponding ingest data of the playout on the right side."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Playout Stream Information",src:n(57795).Z+"",width:"1661",height:"821"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Playout Stream Information"})]}),"\n",(0,i.jsxs)(t.p,{children:["(A) ",(0,i.jsx)(t.code,{children:"Playouts"})," of selected stream name."]}),"\n",(0,i.jsx)(t.p,{children:"(B)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Start"})," indicates the start of playout."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"End"})," indicates the end of playout."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Duration"})," indicates playback duration."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["(C) Groups of meta-data information are shown related to the stream. ",(0,i.jsx)(t.br,{}),"\nThe meta-data includes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"User ID"})," - ",(0,i.jsx)(t.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use",children:"user ID"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"IP"})," - client IP address used for playout."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Event ID"})," - ",(0,i.jsx)(t.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use",children:"event ID"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Custom field 1"})," - ",(0,i.jsx)(t.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use",children:"custom field1"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Playout ID"})," - internally generated unique ID."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"H5Live player version"})," - version of nanoplayer used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Device"})," - type of device used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Referrer"})," - webpage that hosts the nanoPlayer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Country"})," - location of user."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"City"})," - location of user."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Resolution width"})," - width of video stream in pixels."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Resolution height"})," - height of video stream in pixels."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OS"})," - OS used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OS version"})," - OS version."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Browser"})," - web browser used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Browser version"})," - browser version."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"(D) This tab shows which group of meta-data information is being shown at the moment and how many groups are available."}),"\n",(0,i.jsx)(t.p,{children:"(E) (F)\nClick to switch between meta-data information."}),"\n",(0,i.jsx)(t.p,{children:"(G)\nThis time slider can be used to define the time interval, allowing to zoom into streams with a longer duration or to focus on specific parts of the stream."}),"\n",(0,i.jsxs)(t.p,{children:["(H)\n",(0,i.jsx)(t.code,{children:"Synchronize ingest"})," gives the ability to synchronize the currently selected playout with the corresponding ingest data group. In this selection, the playout data group is shown on the left side while the ingest data group is shown on the right side. This is same as selecting the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"End to End"})})," data group."]}),"\n",(0,i.jsx)(t.admonition,{title:"Info",type:"note",children:(0,i.jsx)(t.p,{children:"If an user reloads the page of a stream, it will be accounted as a new playout."})}),"\n",(0,i.jsx)(t.admonition,{title:"info",type:"note",children:(0,i.jsx)(t.p,{children:"If you set the visible time range to under 5 minutes, you switch from data aggregation mode into raw data mode. Therefore you will get exact datapoints at the given time."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Troubleshooting Raw Data Mode",src:n(97702).Z+"",width:"850",height:"806"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Troubleshooting Raw Data Mode"})]}),"\n",(0,i.jsx)(t.h4,{id:"visualizations",children:"Visualizations"}),"\n",(0,i.jsx)(t.p,{children:"This area shows charts for various player metrics."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Playout Media Information",src:n(84232).Z+"",width:"1619",height:"856"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Playout Media Information"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Bitrate"})," [kBits/s]:\nThe retrieved bitrate on the client side at a specific time. Purple lines symbolize events which are also listed in the Events table."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Latency"})," [s]:\nThe latency from ingest to playout. Purple lines symbolize events which are also listed in the Events table."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Buffering Totaltime Ratio"})," [%]:\nThe ratio between buffer and playback duration."]}),"\n",(0,i.jsx)(t.admonition,{title:"note",type:"info",children:(0,i.jsx)(t.p,{children:"A ratio of 0% means no buffering and a ratio of 100% means no playback was possible."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Events"}),":\nAll events that occurred in the selected playout."]}),"\n",(0,i.jsx)(t.h2,{id:"ingests",children:"Ingests"}),"\n",(0,i.jsx)(t.h3,{id:"publishes",children:"Publishes"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Ingest/Publishes"})," tab selects the ingest data group with all items described in detail next. By either synchronizing the ingest stream from a corresponding playout or entering a valid stream name/tag manually, you will get access to ingest specific data, depending on the used protocol WebRTC or RTMP. You can see which protocol was used in the meta-information section after selecting a publish. Currently running ingests are also supported in this overview and are indicated by ",(0,i.jsx)(t.code,{children:"(ongoing)"})," status within the ",(0,i.jsx)(t.code,{children:"End"})," column."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Publish Table",src:n(42536).Z+"",width:"2200",height:"900"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Publish Table Pre- & Post- Publish Selection"})]}),"\n",(0,i.jsxs)(t.p,{children:["(A) ",(0,i.jsx)(t.code,{children:"Publish search input field"})," to enter stream name or stream tag"]}),"\n",(0,i.jsxs)(t.p,{children:["(B) ",(0,i.jsx)(t.code,{children:"Publish table header"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Start"})," indicates the ingest start time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"End"})," indicates the ingest end time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Duration"})," indicates ingest duration."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Has drops"})," indicates if the ingest was interrupted."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["(C) ",(0,i.jsx)(t.code,{children:"General stream details"})," show meta-data information related to the stream"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Protocol"})," - streaming protocol used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Data center"})," - specific data center used for this ingest."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Server"})," - specific server in the data center used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"IP"})," - client IP from which the stream was ingested."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Country"})," - location of client IP."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"City"})," - location of client IP."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Resolution width"})," - width of video stream in pixels."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Resolution height"})," - height of video stream in pixels."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"webcaster ID"})," - ID of corresponding webcaster instance."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"(D) These dot indicators show which group of meta-data information is displayed at the moment and how many groups are available."}),"\n",(0,i.jsx)(t.p,{children:"(E) Click to switch between meta-data information."}),"\n",(0,i.jsxs)(t.p,{children:["(F) ",(0,i.jsx)(t.code,{children:"Ingest tabs"})," - Choose between alerts & publishes to search for"]}),"\n",(0,i.jsxs)(t.p,{children:["(G) ",(0,i.jsx)(t.code,{children:"Fine interval slider"})," can be used to define the time interval, allowing to zoom into streams with a longer duration or to focus on specific parts of the stream."]}),"\n",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.h4,{id:"stream-time-ratio",children:"Stream Time Ratio"}),"\n",(0,i.jsx)(t.p,{children:"The stream time ratio (STR) represents the relation between the elapsed real time and the stream time within a window of 15 seconds. A constant ratio value of 1 would be ideal - but a small fluctuation is expected. A big fluctuation or deviation from the value 1 indicates issues on the ingest side, for instance caused by a limited bandwidth or high CPU load. The higher the deviation from the value 1, the higher the probability for an increased latency on the playback/viewer side."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.scaledimage,{image:"str_normal.png",alt:"Normal STR Example",widthscaling:"50",title:"Regular Stream Time Ratio",description:"In this example you can see a regular course of the STR metric. If you take a closer look at the beginning of the stream, you will notice an increasement in the first 30 seconds, which is intended behavior and does not generate an alert. Sometimes the ingest stream takes a bit to run stable and little fluctuations are considered as regular conditions."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.scaledimage,{image:"str_drops.png",alt:"Drop STR Example",widthscaling:"50",title:"Stream Time Ratio with Drops",description:"This example shows some kind of edge case. If the stream time ratio indicates spikes, it can be a hint for possible issues. Nevertheless if the stream does recover quickly enough, there is nothing to worry about. The constant fluctuations are sometimes dipping below 0.9, but will be okay, since the average value will be above this threshold."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.scaledimage,{image:"str_fluc_recover.png",alt:"Fluctuation STR Example",widthscaling:"50",title:"Temporary fluctuating Stream Time Ratio",description:"In this case you can observe a highly fluctating moment of an ingest stream, which does recover after a while. This is a good example for stream behavior that might generate an alert within the first minutes, but will recover by itself afterwards. The reason behind the fluctuation could be bandwith issues or encoder instability."})}),"\n",(0,i.jsx)(t.h4,{id:"visualizations-1",children:"Visualizations"}),"\n",(0,i.jsx)(t.p,{children:"Define the time interval with the slider to zoom into streams with a longer duration or to focus on specific parts of the stream. The results you get for the ingest stream name are also sorted by newest first as for the playouts. Selecting a time period auto-refreshes the statistics below."}),"\n",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"RTMP Ingests"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Ingests using RTMP only provide metrics about video and audio bitrates."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Troubleshoot Ingest RTMP",src:n(20160).Z+"",width:"1623",height:"438"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Troubleshoot Ingest RTMP"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Video bitrate"})," [kBits/s]: Video bitrate of the ingested stream."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Audio bitrate"})," [kBits/s]: Audio bitrate of the ingested stream."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"WebRTC Ingests"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Ingests using Web Real Time Communication are providing additional insights to framerate, encoding and package delivery."}),"\n",(0,i.jsx)(t.admonition,{title:"note",type:"info",children:(0,i.jsxs)(t.p,{children:["To have ",(0,i.jsx)(t.a,{href:"./analytics#webcaster",children:"WebRTC metric"})," data available for the Troubleshooting page, they need to be enabled."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Troubleshoot Ingest Webcaster",src:n(4537).Z+"",width:"1679",height:"782"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Troubleshoot Ingest Webcaster"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Video bitrate"})," [kBits/s]: Video bitrate of the ingested stream."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Audio bitrate"})," [kBits/s]: Audio bitrate of the ingested stream."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Framerate"})," [fps]: Framerate of the ingested stream."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Average frame encode time"})," [ms]: The average time needed to encode one frame of the stream."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Long encode time",type:"caution",children:(0,i.jsx)(t.p,{children:"Note that a long encode time is an indicator for high encoder workload, which can lead to ingest problems."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Count of packet loss detections"}),": Amount of WebRTC notifications about lost data packages."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"High count of lost packages",type:"caution",children:(0,i.jsx)(t.p,{children:"Note, a high count of lost packages at a time can lead to issues with the video representation on the side of the end user."})}),"\n",(0,i.jsx)(t.h4,{id:"other-samples",children:"Other Samples"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Video only ingest workflow"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The figure below shows the graphical representation.\nIn this scenario, only video bitrate data can be observed, while audio bitrate is not available.\nAlso, the detected video bitrate is about 1 Mbps and this can be checked against settings on ingest encoder."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Video Only",src:n(13517).Z+"",width:"880",height:"425"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Video Only"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Audio only ingest workflow"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The figure below shows the graphical representation.\nIn this scenario, only audio bitrate data can be observed, while video bitrate is not available.\nSimilarly, the detected audio bitrate is averaging above 25Kbps and this can be checked against settings on ingest encoder."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Audio Only Ingest Workflow",src:n(54819).Z+"",width:"863",height:"433"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Audio Only Ingest Workflow"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Audio/Video ingest workflow in good condition"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The figure below shows the graphical representation.\nAs can be observed, the average video bitrate is about 1.2Mbps while audio bitrate is about 90Kbps. The video and audio bitrates do not deviate too much from the average over time and will not cause overflow or underflow of buffers."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot Audio/Video Ingest Workflow in good condition",src:n(20160).Z+"",width:"1623",height:"438"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot Audio/Video Ingest Workflow in good condition"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Audio/Video ingest workflow with network issues"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The figure below shows the graphical representation.\nAs can be observed, the average video bitrate is about 2Mbps while audio bitrate is about 150Kbps. Towards the end of the graph as highlighted by the red box, the video and audio bitrates fluctuate by more than 50% of the average. This signifies some issues with the ingest from the encoder to nanocosmos CDN. Some causes of these could be ISP related network degradation or encoding anomalies. If this issue is not rectified quickly, then it will cause overflow or underflow of buffers resulting in buffering, connection issues, etc."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Audio/Video Ingest workflow with network issues",src:n(12190).Z+"",width:"1618",height:"433"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Audio/Video Ingest workflow with network issues"})]}),"\n",(0,i.jsx)(t.h3,{id:"alerts",children:"Alerts"}),"\n",(0,i.jsxs)(t.p,{children:["Via ",(0,i.jsx)(t.strong,{children:"Ingests/Alerts"})," tab you can examine alerted streams and make potential issues visible, identify their causes and get helpful recommendations to solve them. After entering a stream name you able to search for any alert occurences in the past 4 weeks. In the following table you can select any alert to get the basic stream details right away."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Alert Table Pre- &amp; Post- Alert Selection",src:n(45099).Z+"",width:"2200",height:"900"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Alert Table Pre- & Post- Alert Selection"})]}),"\n",(0,i.jsxs)(t.p,{children:["(A) ",(0,i.jsx)(t.code,{children:"Alert search input field"})," to enter stream name"]}),"\n",(0,i.jsxs)(t.p,{children:["(B) ",(0,i.jsx)(t.code,{children:"Alert table header"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Alert ID"})," - Each alert gets a unique alert ID"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Severity"})," - Defines the impact level of the underlying issue"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Status"})," - The current alert status"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Alert type"})," - The individual alert type"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Alert codes"})," - Defines the exact alert kind"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Started at"})," - The point in time when the alert was emitted"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Last seen at"})," - The last minute when the alert was active"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Duration"})," - The current alert duration from emitting to last seen occurrence"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["(C) ",(0,i.jsx)(t.code,{children:"General stream details"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Ingest IP"})," - The IPv4 address that ingested to the stream name"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Server"})," - The server that got the ingested data"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Provider"})," - The corresponding regional ISP"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Country"})," - The country that was ingested from"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"City"})," - The city that was ingested from"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Video Width"})," - The video resolution width"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Video Height"})," - The video resolution height"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"(D) These dot indicators show which group of meta-data information is displayed at the moment and how many groups are available."}),"\n",(0,i.jsx)(t.p,{children:"(E) Click to switch between meta-data information."}),"\n",(0,i.jsxs)(t.p,{children:["(F) ",(0,i.jsx)(t.code,{children:"Ingest tabs"})," - Choose between alerts & publishes to search for"]}),"\n",(0,i.jsxs)(t.p,{children:["(G) ",(0,i.jsx)(t.code,{children:"Alerts per page settings"})]}),"\n",(0,i.jsxs)(t.p,{children:["(H) ",(0,i.jsx)(t.code,{children:"Page navigation"})]}),"\n",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.h4,{id:"alerts-of-type---stream-time-ratio-issue",children:"Alerts of Type - Stream Time Ratio Issue"}),"\n",(0,i.jsxs)(t.p,{children:["If a performance alert is selected in the alert table, which is ",(0,i.jsx)(t.strong,{children:"less than 2 weeks old"}),", the corresponding performance widget is shown below the alert table, providing crucial insights of the stream time ratio (STR) metric. Depending on how good/bad the values are this widget will show a ",(0,i.jsx)(t.strong,{children:"suboptimal"})," or ",(0,i.jsx)(t.strong,{children:"poor"})," performance. There is an example of ",(0,i.jsx)(t.strong,{children:"suboptimal performance on the left"})," and ",(0,i.jsx)(t.strong,{children:"poor performance on the right"})," below."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Alert Widget STR",src:n(97953).Z+"",width:"2000",height:"1080"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Alert Widget STR"})]}),"\n",(0,i.jsxs)(t.p,{children:["(A) ",(0,i.jsx)(t.code,{children:"Fine Interval Slider"})," - Is used to fine tune the selected time interval within the alert duration (max 2 hours of displayed data at once)"]}),"\n",(0,i.jsxs)(t.p,{children:["(B) ",(0,i.jsx)(t.code,{children:"CSV data export button"})," - By clicking you can automatically download a ",(0,i.jsx)(t.code,{children:".csv"})," file, containing the currently displayed data"]}),"\n",(0,i.jsxs)(t.p,{children:["(C) ",(0,i.jsx)(t.code,{children:"Suboptimal STR Occurences"})," - Shows the number of data points that are between the orange and red horizontal lines (representing the thresholds)"]}),"\n",(0,i.jsxs)(t.p,{children:["(D) ",(0,i.jsx)(t.code,{children:"Poor STR Occurences"})," - Shows the number of data points that are below the red horizontal line (representing the threshold)"]}),"\n",(0,i.jsxs)(t.p,{children:["(E) ",(0,i.jsx)(t.code,{children:"Quick Info"})," - Short conclusion of the underlying issue"]}),"\n",(0,i.jsxs)(t.p,{children:["(F) ",(0,i.jsx)(t.code,{children:"Detection Start"})," - The beginning point in time that counted for alert emitting later"]}),"\n",(0,i.jsxs)(t.p,{children:["(G) ",(0,i.jsx)(t.code,{children:"Emitted Alert"})," - The point in time when the selected alert has been raised initially"]}),"\n",(0,i.jsxs)(t.p,{children:["(H) ",(0,i.jsx)(t.code,{children:"Recovered/Stream Ended"})," - The point in time when the stream performance recovered from the issue by itself or when the stream ended (currently active alerts do not have this indicator)"]}),"\n",(0,i.jsxs)(t.p,{children:["(I) ",(0,i.jsx)(t.code,{children:"Alert Details Panel"})," - Containing explanantions and further details of this alert and also provides a recommended action to potentially solve the issue"]}),"\n",(0,i.jsxs)(t.p,{children:["(J) ",(0,i.jsx)(t.code,{children:"Link to Documentation"})," - References more knowledge about alerts and how to deal with them"]}),"\n",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.h4,{id:"alerts-of-type---continuous-restarts",children:"Alerts of Type - Continuous Restarts"}),"\n",(0,i.jsxs)(t.p,{children:["In case a ",(0,i.jsx)(t.em,{children:"Continuous Restarts"})," alert is selected in the alert table, this widget will be shown. It shows the analyzed information that lead to this alert notification."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Alert Widget CR",src:n(71054).Z+"",width:"1021",height:"617"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Alert Widget CR"})]}),"\n",(0,i.jsxs)(t.p,{children:["(A) ",(0,i.jsx)(t.code,{children:"CSV data export button"})," - By clicking you can automatically download a ",(0,i.jsx)(t.code,{children:".csv"})," file, containing the currently displayed data"]}),"\n",(0,i.jsxs)(t.p,{children:["(B) ",(0,i.jsx)(t.code,{children:"Quick Info"})," - Short conclusion of the underlying issue"]}),"\n",(0,i.jsxs)(t.p,{children:["(C) ",(0,i.jsx)(t.code,{children:"Restart Count"})," - The counted restarts within the alert's duration"]}),"\n",(0,i.jsxs)(t.p,{children:["(D) ",(0,i.jsx)(t.code,{children:"Analyzed Events"})," - The amount of events that were analyzed within the alert's duration"]}),"\n",(0,i.jsxs)(t.p,{children:["(E) ",(0,i.jsx)(t.code,{children:"Min Distance"})," - The minimum distance between 2 restarts in seconds"]}),"\n",(0,i.jsxs)(t.p,{children:["(F) ",(0,i.jsx)(t.code,{children:"Max Distance"})," - The maximum distance between 2 restarts in seconds"]}),"\n",(0,i.jsxs)(t.p,{children:["(G) ",(0,i.jsx)(t.code,{children:"Average Distance"})," - The average distance between 2 restarts in seconds"]}),"\n",(0,i.jsxs)(t.p,{children:["(H) ",(0,i.jsx)(t.code,{children:"Alert Details Panel"})," - Containing explanantions and further details of this alert and also provides a recommended action to potentially solve the issue"]}),"\n",(0,i.jsxs)(t.p,{children:["(I) ",(0,i.jsx)(t.code,{children:"Link to Documentation"})," - References more knowledge about alerts and how to deal with them"]}),"\n",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.h4,{id:"alerts-of-type---duplicated-ingests",children:"Alerts of Type - Duplicated Ingests"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Duplicated Ingests"})," alert details are shown within the duplicated ingests widget when such an alert type is selected above. Depending on the determined reason this widget will provide information about different locations, IPv4 addresses, or infrastructures. In the following example multiple ingest connections were found for different locations at the same time for the chosen stream."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Screenshot: Alert Widget DI",src:n(43260).Z+"",width:"1024",height:"582"}),"\n",(0,i.jsx)(t.em,{children:"Screenshot: Alert Widget DI"})]}),"\n",(0,i.jsxs)(t.p,{children:["(A) ",(0,i.jsx)(t.code,{children:"Quick Info"})," - Short conclusion of the underlying issue"]}),"\n",(0,i.jsxs)(t.p,{children:["(B) ",(0,i.jsx)(t.code,{children:"Locations"})," - List of found locations"]}),"\n",(0,i.jsxs)(t.p,{children:["(C) ",(0,i.jsx)(t.code,{children:"Alert Details Panel"})," - Containing explanantions and further details of this alert and also provides a recommended action to potentially solve the issue"]}),"\n",(0,i.jsxs)(t.p,{children:["(D) ",(0,i.jsx)(t.code,{children:"Link to Documentation"})," - References more knowledge about alerts and how to deal with them"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},45099:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/analytics-alert-table-comparison-2e74518c7b2c011381a8faf526c73bb3.png"},71054:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/analytics-alert-widget-cr-9cc5cb52da9fbc929a3dbb9f287af69e.png"},43260:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/analytics-alert-widget-di-bb6d7e268fed5b6da6f4a2624b08b232.png"},97953:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/analytics-alert-widget-str-410a7ddef0b1a40176b6a7ee51a0e499.png"},42536:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/analytics-publish-table-comparison-bc1be0ecfe9fb7a677978aef6250c03f.png"},54819:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-audio-only-79abba7c66cde8139149b1096a4781b8.png"},20160:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-ingest-rtmp-16f5d970eccd60482a740c46889658c5.png"},4537:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-ingest-webrtc-732e4bdc1b568d7b234720c1303955a9.png"},12190:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-ingestNG-8e140f0b4fdd7823323bd8fe7a04ef34.png"},2902:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-playout-5ab7817409bda8147aa9a37d36c32c38.png"},57795:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-po1-3f5ab156bb6c3f36610c63c935456580.png"},84232:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-po2-c3edec161a0fcc53f9a8ab1d8d8c4111.png"},97702:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-raw_mode-67afe4cfb91815f704b3060f47a749fc.png"},66371:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-time_picker-4cd1e4e68b1ebd059aa5a0603e69b0a7.png"},13517:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/tp-video-only-3611bb648a23d620b4a8210bc25b9c05.png"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(67294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);