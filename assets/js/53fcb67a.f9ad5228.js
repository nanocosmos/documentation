"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["4480"],{31069:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>r});var a=JSON.parse('{"id":"cloud/cloud_introduction","title":"Introduction","description":"nanoStream Cloud is a unique live streaming platform based on different components for ultra low latency live streaming.","source":"@site/docs/cloud/cloud_introduction.md","sourceDirName":"cloud","slug":"/cloud/cloud_introduction","permalink":"/docs/cloud/cloud_introduction","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"id":"cloud_introduction","title":"Introduction","sidebar_label":"Introduction"},"sidebar":"nanoStream Cloud","previous":{"title":"Product & Services Overview","permalink":"/docs/cloud/cloud_overview"},"next":{"title":"Getting started","permalink":"/docs/cloud/cloud_getting_started"}}'),i=t("85893"),o=t("50065");let s={id:"cloud_introduction",title:"Introduction",sidebar_label:"Introduction"},r=void 0,l={},d=[{value:"What is bintu.live?",id:"what-is-bintulive",level:2},{value:"bintu.live Concepts",id:"bintulive-concepts",level:2},{value:"Bintu streams",id:"bintu-streams",level:3},{value:"Ingest and Playback",id:"ingest-and-playback",level:3},{value:"nanoStream CDN",id:"nanostream-cdn",level:3}];function c(e){let n={a:"a",admonition:"admonition",article:"article",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"nanoStream Cloud is a unique live streaming platform based on different components for ultra low latency live streaming."}),"\n",(0,i.jsx)(n.p,{children:"This section is about bintu, the stream management dashboard and api."}),"\n",(0,i.jsx)(n.admonition,{title:"Before starting",type:"info",children:(0,i.jsxs)(n.p,{children:["To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key ",(0,i.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/organisation",children:"here"}),". ",(0,i.jsx)(n.br,{}),"\nIf you have not created an account yet, you can ",(0,i.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/auth?signup",children:"sign up"})," or reach out to our dedicated sales team via the ",(0,i.jsx)(n.a,{href:"https://www.nanocosmos.de/contact",children:"contact form"})," or by sending an email to sales(at)nanocosmos.de."]})}),"\n",(0,i.jsxs)(n.article,{className:"margin-top--lg",children:["\n    ",(0,i.jsxs)(n.section,{className:"row list_ZO3j",children:["\n        ",(0,i.jsxs)(n.article,{className:"col col--6 margin-bottom--lg",children:["\n            ",(0,i.jsxs)(n.a,{className:"card padding--lg cardContainer_Uewx",href:"https://dashboard.nanostream.cloud/",children:["\n                ",(0,i.jsx)(n.h2,{className:"text--truncate cardTitle_dwRT",title:"Installation",children:"Dashboard"}),"\n                ",(0,i.jsx)(n.p,{className:"text--truncate cardDescription_mCBT",children:"\n                    The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities.\n                "}),"\n            "]})]}),"\n        ",(0,i.jsxs)(n.article,{className:"col col--6 margin-bottom--lg",children:["\n            ",(0,i.jsxs)(n.a,{className:"card padding--lg cardContainer_Uewx",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/",children:["\n                ",(0,i.jsx)(n.h2,{className:"text--truncate cardTitle_dwRT",title:"Configuration",children:"Bintu API"}),"\n                ",(0,i.jsx)(n.p,{className:"text--truncate cardDescription_mCBT",children:"\n                    bintu.live is a stream management platform used by nanoStream for end to end live streaming services. bintu live can be used to create, manage, group and tag live streams.\n                "}),"\n            "]})]}),"\n    "]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-bintulive",children:"What is bintu.live?"}),"\n",(0,i.jsx)(n.p,{children:"The bintu.live stream management software is part of the nanoStream Cloud an enables easy management of low-latency live video streams with nanoStream Live Encoders and Players or any other encoder or playback software."}),"\n",(0,i.jsx)(n.admonition,{title:"Start streaming!",type:"tip",children:(0,i.jsx)(n.p,{children:"It is easy to setup and manage your live streams without additional server software. Leverage proven software know-how and quality with nanoStream Cloud live streaming services for low-latency live streaming for your own brand. Start streaming immediately!"})}),"\n",(0,i.jsx)(n.h2,{id:"bintulive-concepts",children:"bintu.live Concepts"}),"\n",(0,i.jsx)(n.p,{children:"Generally, you can either use the bintu.live system with 2 ways:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dashboard / manual access in the web browser to create and manage live streams."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"REST API for development purposesIf you use the REST API, you need to obtain your unique secret API Key from the dashboard."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bintu-streams",children:"Bintu streams"}),"\n",(0,i.jsx)(n.p,{children:"Every \u201Cbintu stream\u201D has a unique ID and contains of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"stream URL for ingest (live encoding) with RTMP"}),"\n",(0,i.jsx)(n.li,{children:"playback URL for in different formats (H5Live for Web, RTMP, HLS, \u2026)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example stream ID: ",(0,i.jsx)(n.code,{children:"1dec3bbc-758b-4879-a202-7ae877d511ba"})]}),"\n",(0,i.jsx)(n.p,{children:"Stream information can be obtained by dashboard or API with"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["API: ",(0,i.jsx)(n.code,{children:"https://bintu.nanocosmos.de/stream/1dec3bbc-758b-4879-a202-7ae877d511ba"})]}),"\n",(0,i.jsxs)(n.li,{children:["Dashboard: ",(0,i.jsx)(n.code,{children:"https://dashboard.nanostream.cloud/stream/1dec3bbc-758b-4879-a202-7ae877d511ba"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ingest-and-playback",children:"Ingest and Playback"}),"\n",(0,i.jsx)(n.p,{children:"Every bintu stream has an ingest URL and a playback URL. Both are based on a basic URL like rtmp://bintu-stream.nanocosmos.de/live and a stream name like XXXX-YYYY."}),"\n",(0,i.jsx)(n.p,{children:"The ingest URL needs to be used for your Live Encoder, the player URL on your player web page."}),"\n",(0,i.jsx)(n.p,{children:"You can instantly start any number of ingest streams and players, dependent on your booked package and agreement."}),"\n",(0,i.jsx)(n.h3,{id:"nanostream-cdn",children:"nanoStream CDN"}),"\n",(0,i.jsx)(n.p,{children:"The bintu URLs point to real streaming servers, based on the closest geo location to your live encoder or player audience."})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(67294);let i={},o=a.createContext(i);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);