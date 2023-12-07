"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"introduction",title:"nanoMeet",sidebar_label:"Introduction"},i=void 0,s={unversionedId:"nanomeet/introduction",id:"nanomeet/introduction",title:"nanoMeet",description:"&copy; 2021 nanocosmos.",source:"@site/docs/nanomeet/introduction.md",sourceDirName:"nanomeet",slug:"/nanomeet/introduction",permalink:"/docs/nanomeet/introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1701953705,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"introduction",title:"nanoMeet",sidebar_label:"Introduction"}},l={},p=[{value:"About the nanoMeet documentation",id:"about-the-nanomeet-documentation",level:2},{value:"What is nanoMeet?",id:"what-is-nanomeet",level:2},{value:"Key features",id:"key-features",level:3},{value:"Example applications",id:"example-applications",level:3},{value:"What is part of nanoMeet?",id:"what-is-part-of-nanomeet",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Contents",id:"contents",level:3},{value:"Usage",id:"usage",level:3},{value:"Customization",id:"customization",level:3},{value:"Roles",id:"roles",level:3},{value:"Support",id:"support",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\xa9"," 2021 ",(0,o.kt)("a",{parentName:"p",href:"https://info.nanocosmos.de/"},"nanocosmos"),"."),(0,o.kt)("h2",{id:"about-the-nanomeet-documentation"},"About the nanoMeet documentation"),(0,o.kt)("p",null,"The following provided content is divided into three parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./samples"},"User Guide"),": Online samples for immediate use with all provided features and functions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./source-code"},"User/Developer Guide"),": Source code of our samples that can be copied easily."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./api"},"Developer Guide"),": The documentation of our web API which provides all features and functions of nanoMeet.")),(0,o.kt)("h2",{id:"what-is-nanomeet"},"What is nanoMeet?"),(0,o.kt)("p",null,"nanoMeet is a browser-based live video and collaboration platform connected to nanoStream Cloud, for interactive live streaming.\nIt allows you to create your own branded video meeting rooms in the browser to engage and interact with your audience.\nnanoMeet is based on a custom version of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet"},"Jitsi Meet")," and integrated into ",(0,o.kt)("a",{parentName:"p",href:"https://info.nanocosmos.de"},"nanoStream Cloud"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenhot: nanoMeet Meeting",src:n(49416).Z,width:"1437",height:"892"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: nanoMeet Meeting")),(0,o.kt)("h3",{id:"key-features"},"Key features"),(0,o.kt)("p",null,"With nanoMeet you can create, host and broadcast online video meetings and events on your own web page using your own coporate design and interact with a large audience."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Host online video meetings embedded on your own web page"),(0,o.kt)("li",{parentName:"ul"},"Web-browser based applications and web services"),(0,o.kt)("li",{parentName:"ul"},"Live streaming integration into nanoStream Cloud"),(0,o.kt)("li",{parentName:"ul"},"Enable audience interaction with large audiences (1000s of participants anywhere in the world)"),(0,o.kt)("li",{parentName:"ul"},"Invite participants with secure tokens"),(0,o.kt)("li",{parentName:"ul"},"nanoMeet web API and code examples for easy white-label integration into custom branded environments"),(0,o.kt)("li",{parentName:"ul"},"\u201eWatch party\u201c: Watch a live stream together in a video meeting")),(0,o.kt)("h3",{id:"example-applications"},"Example applications"),(0,o.kt)("p",null,"There are various usecases for nanoMeet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Town hall meetings e.g. company webcasts"),(0,o.kt)("li",{parentName:"ul"},"Podium discussions e.g. expert sessions"),(0,o.kt)("li",{parentName:"ul"},"Interviews and announcements with Q&A e.g. press briefings"),(0,o.kt)("li",{parentName:"ul"},"Live events e.g. music, comedy, \u2026"),(0,o.kt)("li",{parentName:"ul"},"Education e.g.remote learning"),(0,o.kt)("li",{parentName:"ul"},"Watchparties e.g. watch a live stream together and discuss")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"nanoMeet Infographic",src:n(64701).Z,width:"3724",height:"1880"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: nanoMeet Infographic")),(0,o.kt)("h2",{id:"what-is-part-of-nanomeet"},"What is part of nanoMeet?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web services for 24/7 usage anywhere in the world"),(0,o.kt)("li",{parentName:"ul"},"Sample pages to set up and use nanoMeet rooms"),(0,o.kt)("li",{parentName:"ul"},"Web API with code snippets/example implementations"),(0,o.kt)("li",{parentName:"ul"},"Live Streaming: Integration into nanoStream Cloud (Bintu)")),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"nanoMeet is part of ",(0,o.kt)("a",{parentName:"p",href:"https://bintu-cloud-frontend.nanocosmos.de"},"nanoStream Cloud"),".\nYou need a nanoStream Cloud/Bintu account with nanoMeet enabled."),(0,o.kt)("admonition",{title:"before getting started",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you do not have an account or nanoMeet enabled yet, please contact our sales team for a personal demo via ",(0,o.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/nanomeet/?demo&utm_source=nanoMeet_Docs&utm_medium=nanocosmos&utm_campaign=nanoMeet&utm_content=CTA_Requirements"},"contact form")," or sales(at)nanocosmos.de.\nTo check if your organisation enables nanoMeet, check your ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"organisation overview"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"nanoMeet enabled",src:n(2486).Z,width:"671",height:"49"}))),(0,o.kt)("h3",{id:"contents"},"Contents"),(0,o.kt)("p",null,"Enabling ",(0,o.kt)("strong",{parentName:"p"},"nanoMeet")," for your organisation gives you access to create, use and broadcast nanoMeet rooms.\nFor that you can either use our samples that utilize our nanoMeet web API, copy the source code or create your own code using our documentation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"nanoMeet Token Creator (Online Sample)")," - ",(0,o.kt)("em",{parentName:"li"},"Create a room and secure invite token")," ",(0,o.kt)("br",null),"\nYou can create a secure token with moderator rights to join and invite people into a nanoMeet room.")),(0,o.kt)("admonition",{title:"Online Samples: nanoMeet Token creator",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Available as ",(0,o.kt)("a",{parentName:"p",href:"https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME"},"online web page")," and ",(0,o.kt)("a",{parentName:"p",href:"source-code#nanomeet-token-creator-source-code"},"source code")," to integrate.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: nanoMeet Token Creator",src:n(35491).Z,width:"1335",height:"571"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: nanoMeet Token Creator")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"nanoMeet sample (Online Sample)")," - ",(0,o.kt)("em",{parentName:"li"},"Host nanoMeet meetings")," ",(0,o.kt)("br",null),"\nYou can use nanoMeet with a valid secure token. Using this sample in a moderator role lets you invite people, set up security options and start a broadcast incl. recording.")),(0,o.kt)("admonition",{title:"Online Samples: nanoMeet Sample",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Available as ",(0,o.kt)("a",{parentName:"p",href:"https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=YOUR-INVITE-TOKEN"},"online web page")," and ",(0,o.kt)("a",{parentName:"p",href:"source-code#nanomeet-sample-source-code"},"source code")," to integrate.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot: nanoMeet Meeting",src:n(38200).Z,width:"2022",height:"1260"}),"\n",(0,o.kt)("em",{parentName:"p"},"Screenshot: nanoMeet Meeting")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"nanoMeet Web API")," - ",(0,o.kt)("em",{parentName:"li"},"All nanoMeet functions")," ",(0,o.kt)("br",null),"\nThis nanomeet.js file lets you access all nanoMeet functions and procedures.")),(0,o.kt)("admonition",{title:"nanoMeet API",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Find the nanoMeet API documentation ",(0,o.kt)("a",{parentName:"p",href:"./api"},"here"),".")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To use nanoMeet you can either use our online samples, copy our sample code or write your own code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"nanoMeet Samples"),":\nRead the section ",(0,o.kt)("a",{parentName:"p",href:"./samples"},"nanoMeet Samples")," to get further instructions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"nanoMeet samples source code code"),":\nFind the source code of our samples ",(0,o.kt)("a",{parentName:"p",href:"./source-code"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"nanoMeet Web API"),":\nRead our ",(0,o.kt)("a",{parentName:"p",href:"./api"},"developers documentation")," "))),(0,o.kt)("h3",{id:"customization"},"Customization"),(0,o.kt)("p",null,"You are able to customize your nanoMeet room using your own branding! Read more ",(0,o.kt)("a",{parentName:"p",href:"./getting-started#customize-a-nanomeet-room"},"here"),"."),(0,o.kt)("h3",{id:"roles"},"Roles"),(0,o.kt)("p",null,"There are two main Roles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Moderator"),": Is able to create invite tokens for participants and moderators, start live streams and customize the nanoMeet room."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Participant"),": Is able to join a nanoMeet room.")),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("admonition",{title:"Do you need assistance using nanomeet?",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please use ",(0,o.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"our support contact form")," for further assistance.")))}c.isMDXComponent=!0},2486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-nanomeet-13febcf2a92a10ff578709f6bf7d7864.jpg"},35491:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nanomeet-helper-b32a5bb345b8d7b63b669b85db35bee4.jpg"},64701:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nanomeet-infografik-7bf9521d26131d1540f7db89dfb15b31.jpg"},38200:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nanomeet-meeting-331c215c683e4eb83f0e6d5cd2e3ed6a.jpg"},49416:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nanomeet-ui-7bae59eb459e9325d899254fdff66e0a.jpg"}}]);