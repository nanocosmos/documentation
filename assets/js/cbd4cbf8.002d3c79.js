"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"Dashboard_Metrics",title:"Metrics",sidebar_label:"Metrics"},i=void 0,s={unversionedId:"cloud-frontend-v3/Dashboard_Metrics",id:"cloud-frontend-v3/Dashboard_Metrics",title:"Metrics",description:"As the digital landscape progresses, real-time monitoring and analytics play a crucial role in ensuring the efficiency and performance of live streams. Integrating nanoStream Analytics API with the nanoStream Cloud Customer Dashboard enhances your ability to monitor and analyze live streams in terms of performance and the quality of service.",source:"@site/docs/cloud-frontend-v3/Dashboard_Metrics.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_Metrics",permalink:"/docs/cloud-frontend-v3/Dashboard_Metrics",draft:!1,tags:[],version:"current",lastUpdatedAt:1696845431,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"Dashboard_Metrics",title:"Metrics",sidebar_label:"Metrics"},sidebar:"nanoStream Cloud",previous:{title:"Embed nanoPlayer Code on Your Web Page",permalink:"/docs/cloud-frontend-v3/Dashboard_nanoPlayer"},next:{title:"Alerts and Advices",permalink:"/docs/cloud-frontend-v3/Dashboard_Alerting"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Month to Date Usage",id:"month-to-date-usage",level:2},{value:"Total Usage <em>Month</em>",id:"total-usage-month",level:3},{value:"Total Playout <em>Month</em>",id:"total-playout-month",level:3},{value:"Total Ingest <em>Month</em>",id:"total-ingest-month",level:3},{value:"Concurrent Viewer",id:"concurrent-viewer",level:2},{value:"Byte Usage (Ingest / Playout)",id:"byte-usage-ingest--playout",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As the digital landscape progresses, real-time monitoring and analytics play a crucial role in ensuring the efficiency and performance of live streams. Integrating nanoStream Analytics API with the nanoStream Cloud Customer Dashboard enhances your ability to monitor and analyze live streams in terms of performance and the quality of service."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The essence of nanoStream Analytics is to grant you a clear understanding of how your live streams are functioning. It provides insights into the performance metrics and the quality of service of your streams, allowing you to pinpoint issues, make improvements, or even understand the preferences and behaviors of your viewers."),(0,r.kt)("admonition",{title:"Before starting",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,r.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.kt)("h2",{id:"month-to-date-usage"},"Month to Date Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Month to Date Usage")," feature provides a comparative analysis of the current month's usage of your organization against the previous month.\nThis comparative analysis is crucial to understand your stream's growth trajectory and to make informed decisions based on past trends."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud"},"Click here")," to see this metric.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Month to Date Usage",src:n(78074).Z,width:"1604",height:"285"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Month to Date Usage")),(0,r.kt)("h3",{id:"total-usage-month"},"Total Usage ",(0,r.kt)("em",{parentName:"h3"},"Month")),(0,r.kt)("p",null,"Represents the aggregate traffic for the ongoing month. It encompasses both ingest and playout traffic, offering a holistic view of your stream's overall traffic."),(0,r.kt)("h3",{id:"total-playout-month"},"Total Playout ",(0,r.kt)("em",{parentName:"h3"},"Month")),(0,r.kt)("p",null,"Exclusively displays the playout traffic for the month. This metric is pivotal in understanding viewer engagement and the reach of your streams."),(0,r.kt)("h3",{id:"total-ingest-month"},"Total Ingest ",(0,r.kt)("em",{parentName:"h3"},"Month")),(0,r.kt)("p",null,"Focuses on the total ingest for the current month, providing clarity on the amount of data your streams are taking in."),(0,r.kt)("admonition",{title:"example",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Consider today's date as September 16th."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Last month, up to August 16th, you generated 300GB of traffic."),(0,r.kt)("li",{parentName:"ul"},"This month, as of September 16th, you've generated 325GB.")),(0,r.kt)("p",{parentName:"admonition"},"Therefore, as of September 16th, your traffic has increased by ",(0,r.kt)("strong",{parentName:"p"},"8.33%")," compared to the same date in the previous month.")),(0,r.kt)("h2",{id:"concurrent-viewer"},"Concurrent Viewer"),(0,r.kt)("p",null,'The Concurrent Viewer section provides insights into the "Time series of maximum concurrent viewers" for your organization\'s streams, giving you a visual representation of viewer engagement over a specific duration.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/metrics"},"Click here")," to see this metric.")),(0,r.kt)("admonition",{title:"benefit",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This feature helps in understanding your audience's behavior, peak viewing times, and helps in forecasting future trends based on past data.")),(0,r.kt)("p",null,"Hovering over the chart will display tooltip data, revealing exact numbers of concurrent viewers and the corresponding time stamp. ",(0,r.kt)("br",null),"\nYou can filter the time series based on three presets on the top right:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Hour (1H)"),": View concurrent viewer data from the past 60 minutes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Day (1D)"),": Get insights spanning the previous 24 hours."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Week (1W)"),": Understand viewer trends over the last 7 days.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Concurrent Viewer",src:n(21618).Z,width:"1626",height:"1130"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Concurrent Viewer")),(0,r.kt)("h2",{id:"byte-usage-ingest--playout"},"Byte Usage (Ingest / Playout)"),(0,r.kt)("p",null,"The Byte Usage section offers a detailed breakdown of the data usage patterns, focusing specifically on ingest (data being sent to the server) and playout (data being broadcasted to viewers) traffic."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/metrics"},"Click here")," to see this metric.")),(0,r.kt)("p",null,"The chart provides a dual-layered visual comparison, with separate lines depicting the byte usage for both ingest and playout. This allows you to quickly discern which aspect of your streaming operation is consuming more bandwidth at any given time."),(0,r.kt)("admonition",{title:"Benefit",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This metric provides a comprehensive look at your streaming infrastructure's efficiency, helping identify potential bottlenecks or areas for optimization in your data handling process.")),(0,r.kt)("p",null,"By hovering over the chart, users can see tooltip data, pinpointing exact byte usage values and their respective timestamps. ",(0,r.kt)("br",null),"\nYou can filter the time series based on three presets on the top right:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Hour (1H)"),": View concurrent viewer data from the past 60 minutes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Day (1D)"),": Get insights spanning the previous 24 hours."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Week (1W)"),": Understand viewer trends over the last 7 days.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot: Byte Usage (Ingest / Playout)",src:n(82898).Z,width:"1647",height:"1119"}),"\n",(0,r.kt)("em",{parentName:"p"},"Screenshot: Byte Usage (Ingest / Playout)")))}p.isMDXComponent=!0},21618:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cf-concurrent_viewer-478aa2e8cecdcb794374cb69f4651b1d.png"},78074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cf-month-to-date-closeup-840a34968eb9efdd7eff339e7bfc428c.png"},82898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cf-usage-1206a130b1be46c5f97ea8e4a72ddf9e.png"}}]);