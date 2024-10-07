"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4556],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={id:"bintu_api",title:"Bintu API",sidebar_label:"Bintu API"},i=void 0,s={unversionedId:"cloud/bintu_api",id:"cloud/bintu_api",title:"Bintu API",description:"What is bintu?",source:"@site/docs/cloud/bintu_api.md",sourceDirName:"cloud",slug:"/cloud/bintu_api",permalink:"/docs/cloud/bintu_api",draft:!1,tags:[],version:"current",lastUpdatedAt:1728286796,formattedLastUpdatedAt:"Oct 7, 2024",frontMatter:{id:"bintu_api",title:"Bintu API",sidebar_label:"Bintu API"},sidebar:"nanoStream Cloud",previous:{title:"Alerts and Advices",permalink:"/docs/cloud-frontend-v3/Dashboard_Alerting"},next:{title:"Bintu custom web hooks",permalink:"/docs/cloud/bintu_custom_webhooks"}},l={},c=[{value:"What is bintu?",id:"what-is-bintu",level:2},{value:"What do I need?",id:"what-do-i-need",level:2},{value:"bintu REST API",id:"bintu-rest-api",level:2},{value:"Examples",id:"examples",level:2},{value:"Get latest live stream",id:"get-latest-live-stream",level:3},{value:"CURL command line",id:"curl-command-line",level:4},{value:"Javascript",id:"javascript",level:4},{value:"Create MBR/ABR Stream including live transcoding",id:"create-mbrabr-stream-including-live-transcoding",level:3},{value:"CURL command line",id:"curl-command-line-1",level:4},{value:"Javascript",id:"javascript-1",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"what-is-bintu"},"What is bintu?"),(0,r.yg)("p",null,"Bintu is the stream management dashboard and API for nanoStream Cloud and CDN. By using bintu, you can create and manage your live streams, to enable ultra-low-latency live streaming at a global scale."),(0,r.yg)("p",null,"You can manage your streams via the dashboard or the REST API:"),(0,r.yg)("article",{class:"margin-top--lg"},(0,r.yg)("section",{class:"row list_ZO3j"},(0,r.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,r.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"https://dashboard.nanostream.cloud/"},(0,r.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Installation"},"Dashboard"),(0,r.yg)("p",{class:"text--truncate cardDescription_mCBT"},"The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities."))),(0,r.yg)("article",{class:"col col--6 margin-bottom--lg"},(0,r.yg)("a",{class:"card padding--lg cardContainer_Uewx",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/"},(0,r.yg)("h2",{class:"text--truncate cardTitle_dwRT",title:"Configuration"},"Bintu API"),(0,r.yg)("p",{class:"text--truncate cardDescription_mCBT"},"bintu.live is a stream management platform used by nanoStream for end to end live streaming services. bintu live can be used to create, manage, group and tag live streams."))))),(0,r.yg)("h2",{id:"what-do-i-need"},"What do I need?"),(0,r.yg)("admonition",{title:"Before starting",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,r.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.yg)("p",null,"You need a bintu account, based on our trial or a paid plan.\nYou also need a live encoder, currently based on RTMP, SRT, WHIP applications or WebRTC in the browser.\nLive playback will be supported by using our built-in nanoPlayer which you can easily embed into your own applications."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.nanocosmos.de/cloud"},"Homepage: Overview and Plans")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"cloud_introduction"},"Introduction")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"cloud_getting_started"},"Getting Started with bintu"))),(0,r.yg)("h2",{id:"bintu-rest-api"},"bintu REST API"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"API Entry point: ",(0,r.yg)("a",{parentName:"li",href:"https://bintu.nanocosmos.de/"},"https://bintu.nanocosmos.de/")),(0,r.yg)("li",{parentName:"ul"},"Documentation: ",(0,r.yg)("a",{parentName:"li",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/"},"https://doc.pages.nanocosmos.de/bintuapi-docs/"))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"get-latest-live-stream"},"Get latest live stream"),(0,r.yg)("h4",{id:"curl-command-line"},"CURL command line"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl -X GET \"https://bintu.nanocosmos.de/stream?quantity=1\" \\\n-H 'content-type: application/json' \\\n-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' \n")),(0,r.yg)("h4",{id:"javascript"},"Javascript"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'    fetch("https:bintu.nanocosmos.de/stream?quantity=1", {\n        "headers": { "x-bintu-apikey": BINTU_API_KEY }, "method": "GET",\n    }).then((response) => response.json())\n')),(0,r.yg)("h3",{id:"create-mbrabr-stream-including-live-transcoding"},"Create MBR/ABR Stream including live transcoding"),(0,r.yg)("h4",{id:"curl-command-line-1"},"CURL command line"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl \'https://bintu.nanocosmos.de/stream\' \\\n  -H \'content-type: application/json\' \\\n  -H \'accept: application/json\' \\\n  -H \'x-bintu-apikey: YOUR_BINTU_API_KEY\' \n  --data-raw \'{"transcodes":[{"profile":"vtrans2-852x480x800x25","tags":[]},{"profile":"vtrans2-640x360x400x25","tags":[]}]}\' \\\n')),(0,r.yg)("h4",{id:"javascript-1"},"Javascript"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'    fetch("https://bintu.nanocosmos.de/stream", {\n        "headers": { "x-bintu-apikey": BINTU_API_KEY }, "method": "POST",\n        "body": JSON.stringify({"transcodes":[{"profile":"vtrans2-852x480x800x25","tags":[]},{"profile":"vtrans2-640x360x400x25","tags":[]}]}),\n    })\n')),(0,r.yg)("admonition",{title:"Questions?",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For business related questions reach out to our dedicated sales team via the ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de. ",(0,r.yg)("br",null),"\n",(0,r.yg)("strong",{parentName:"p"},"For technical questions you can use our ",(0,r.yg)("a",{parentName:"strong",href:"https://www.nanocosmos.de/support"},"support form"),"."))))}p.isMDXComponent=!0}}]);