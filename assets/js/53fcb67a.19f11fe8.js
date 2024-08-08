"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1670],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,y=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={id:"cloud_introduction",title:"Introduction",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"cloud/cloud_introduction",id:"cloud/cloud_introduction",title:"Introduction",description:"nanoStream Cloud is a unique live streaming platform based on different components for ultra low latency live streaming.",source:"@site/docs/cloud/cloud_introduction.md",sourceDirName:"cloud",slug:"/cloud/cloud_introduction",permalink:"/docs/cloud/cloud_introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1723112171,formattedLastUpdatedAt:"Aug 8, 2024",frontMatter:{id:"cloud_introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"nanoStream Cloud",previous:{title:"Product & Services Overview",permalink:"/docs/cloud/cloud_overview"},next:{title:"Getting started",permalink:"/docs/cloud/cloud_getting_started"}},s={},c=[{value:"What is bintu.live?",id:"what-is-bintulive",level:2},{value:"bintu.live Concepts",id:"bintulive-concepts",level:2},{value:"Bintu streams",id:"bintu-streams",level:3},{value:"Ingest and Playback",id:"ingest-and-playback",level:3},{value:"nanoStream CDN",id:"nanostream-cdn",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"nanoStream Cloud is a unique live streaming platform based on different components for ultra low latency live streaming."),(0,r.yg)("p",null,"This section is about bintu, the stream management dashboard and api."),(0,r.yg)("admonition",{title:"Before starting",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"here"),". ",(0,r.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.yg)("article",{class:"margin-top--lg"},(0,r.yg)("section",{class:"row list_ZO3j"},(0,r.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,r.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"https://dashboard.nanostream.cloud/"},(0,r.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Installation"},"Dashboard"),(0,r.yg)("p",{class:"text--truncate cardDescription_mCBT"},"The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities."))),(0,r.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,r.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/"},(0,r.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Configuration"},"Bintu API"),(0,r.yg)("p",{class:"text--truncate cardDescription_mCBT"},"bintu.live is a stream management platform used by nanoStream for end to end live streaming services. bintu live can be used to create, manage, group and tag live streams."))))),(0,r.yg)("h2",{id:"what-is-bintulive"},"What is bintu.live?"),(0,r.yg)("p",null,"The bintu.live stream management software is part of the nanoStream Cloud an enables easy management of low-latency live video streams with nanoStream Live Encoders and Players or any other encoder or playback software."),(0,r.yg)("admonition",{title:"Start streaming!",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It is easy to setup and manage your live streams without additional server software. Leverage proven software know-how and quality with nanoStream Cloud live streaming services for low-latency live streaming for your own brand. Start streaming immediately!")),(0,r.yg)("h2",{id:"bintulive-concepts"},"bintu.live Concepts"),(0,r.yg)("p",null,"Generally, you can either use the bintu.live system with 2 ways:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Dashboard / manual access in the web browser to create and manage live streams.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"REST API for development purposesIf you use the REST API, you need to obtain your unique secret API Key from the dashboard."))),(0,r.yg)("h3",{id:"bintu-streams"},"Bintu streams"),(0,r.yg)("p",null,"Every \u201cbintu stream\u201d has a unique ID and contains of:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"stream URL for ingest (live encoding) with RTMP"),(0,r.yg)("li",{parentName:"ul"},"playback URL for in different formats (H5Live for Web, RTMP, HLS, \u2026).")),(0,r.yg)("p",null,"Example stream ID: ",(0,r.yg)("inlineCode",{parentName:"p"},"1dec3bbc-758b-4879-a202-7ae877d511ba")),(0,r.yg)("p",null,"Stream information can be obtained by dashboard or API with"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"API: ",(0,r.yg)("inlineCode",{parentName:"li"},"https://bintu.nanocosmos.de/stream/1dec3bbc-758b-4879-a202-7ae877d511ba")),(0,r.yg)("li",{parentName:"ul"},"Dashboard: ",(0,r.yg)("inlineCode",{parentName:"li"},"https://dashboard.nanostream.cloud/stream/1dec3bbc-758b-4879-a202-7ae877d511ba"))),(0,r.yg)("h3",{id:"ingest-and-playback"},"Ingest and Playback"),(0,r.yg)("p",null,"Every bintu stream has an ingest URL and a playback URL. Both are based on a basic URL like rtmp://bintu-stream.nanocosmos.de/live and a stream name like XXXX-YYYY."),(0,r.yg)("p",null,"The ingest URL needs to be used for your Live Encoder, the player URL on your player web page."),(0,r.yg)("p",null,"You can instantly start any number of ingest streams and players, dependent on your booked package and agreement."),(0,r.yg)("h3",{id:"nanostream-cdn"},"nanoStream CDN"),(0,r.yg)("p",null,"The bintu URLs point to real streaming servers, based on the closest geo location to your live encoder or player audience."))}m.isMDXComponent=!0}}]);