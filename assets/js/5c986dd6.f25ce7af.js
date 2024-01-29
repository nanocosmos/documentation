"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[184],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?n.createElement(h,i(i({ref:a},d),{},{components:t})):n.createElement(h,i({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32948:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const o={id:"guardian",title:"nanoStream Guardian",sidebar_label:"nanoStream Guardian"},i=void 0,l={unversionedId:"cloud/guardian",id:"cloud/guardian",title:"nanoStream Guardian",description:"Click PLAY button to start",source:"@site/docs/cloud/guardian.md",sourceDirName:"cloud",slug:"/cloud/guardian",permalink:"/docs/cloud/guardian",draft:!1,tags:[],version:"current",lastUpdatedAt:1706536631,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{id:"guardian",title:"nanoStream Guardian",sidebar_label:"nanoStream Guardian"},sidebar:"nanoStream Cloud",previous:{title:"nanoStream Cloud Security",permalink:"/docs/cloud/security"},next:{title:"Overview",permalink:"/docs/cloud-frontend-v3/Dashboard_Overview"}},s={},u=[{value:"What is nanoStream Guardian?",id:"what-is-nanostream-guardian",level:2},{value:"What do you need to use nanoStream Guardian?",id:"what-do-you-need-to-use-nanostream-guardian",level:2},{value:"How to use nanoStream Guardian",id:"how-to-use-nanostream-guardian",level:2},{value:"With nanoStream Cloud Analytics Dashboard",id:"with-nanostream-cloud-analytics-dashboard",level:3},{value:"With nanoStream Guardian API",id:"with-nanostream-guardian-api",level:3},{value:"API Examples",id:"api-examples",level:3},{value:"Block an IP for 24 hours",id:"block-an-ip-for-24-hours",level:4},{value:"Block a Referrer",id:"block-a-referrer",level:4}],d={toc:u},c="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"video-wrap"},(0,r.kt)("div",{class:"video-container"},(0,r.kt)("iframe",{src:"https://www.youtube.com/embed/hVbkifac1uo",frameborder:"0",allowfullscreen:!0}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Click ",(0,r.kt)("inlineCode",{parentName:"em"},"PLAY")," button to start"))),(0,r.kt)("h2",{id:"what-is-nanostream-guardian"},"What is nanoStream Guardian?"),(0,r.kt)("p",null,"nanoStream Guardian is a new service integrated into nanoStream Cloud, which allows you to ",(0,r.kt)("strong",{parentName:"p"},"block specific IP addresses, referrers, and even entire CIDR masks from accessing your streams"),"."),(0,r.kt)("admonition",{title:"good to know",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A CIDR mask is a notation that allows to affect a range of IP adresses. For example blocking the following mask: 255.255.255.0 /24 would block all 256 IP adresses starting with 255.255.255`")),(0,r.kt)("p",null,"By including nanoStream Guardian in your workflow, you can effectively ",(0,r.kt)("strong",{parentName:"p"},"prevent unauthorized access and illegal replication of your streams, ensuring that only legitimate viewers can watch your content"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Blocking an IP address is effective for 24 hours")," and will affect all your organization's playouts new connections from the given IP address after a delay of max. 6 minutes. Blocking a referrer will prevent the given web domain from playing your streams ",(0,r.kt)("em",{parentName:"p"},"until you unblock it"),"."),(0,r.kt)("h2",{id:"what-do-you-need-to-use-nanostream-guardian"},"What do you need to use nanoStream Guardian?"),(0,r.kt)("admonition",{title:"Before starting",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To begin, you need a valid bintu account, based on our trial or a paid plan. ",(0,r.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://info.nanocosmos.de/"},"Homepage: Overview and Plans")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"cloud_introduction"},"Introduction")))),(0,r.kt)("h2",{id:"how-to-use-nanostream-guardian"},"How to use nanoStream Guardian"),(0,r.kt)("h3",{id:"with-nanostream-cloud-analytics-dashboard"},"With nanoStream Cloud Analytics Dashboard"),(0,r.kt)("p",null,"Via the Analytics Dashboard, you can easily access the data you need to quickly observe any suspicious activities and take action."),(0,r.kt)("p",null,"nanoStream Guardian is included in the Analytics Dashboard in the Guardian and the Breakdown tab."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Analytics Dashboard URL: ",(0,r.kt)("a",{parentName:"p",href:"http://metrics.nanocosmos.de/"},"http://metrics.nanocosmos.de/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/cloud/analytics-guardian"},"In-depth information on using nanoStream Guardian with the Analytics Dashboard")))),(0,r.kt)("h3",{id:"with-nanostream-guardian-api"},"With nanoStream Guardian API"),(0,r.kt)("p",null,"If you require additional control over the service (e.g: for automatization or blocking a high number of IPs) or simply want to integrate the service into your programmers existing workflow, you are also able to use the nanoStream Guardian API."),(0,r.kt)("p",null,"Manipulating CIDR-masks is yet only available via the API. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API Entry point: ",(0,r.kt)("a",{parentName:"p",href:"https://guardian.nanostream.cloud/"},"https://guardian.nanostream.cloud/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://guardian.nanostream.cloud/docs"},"https://guardian.nanostream.cloud/docs")))),(0,r.kt)("h3",{id:"api-examples"},"API Examples"),(0,r.kt)("h4",{id:"block-an-ip-for-24-hours"},"Block an IP for 24 hours"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'https://guardian.nanostream.cloud/ip\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-BINTU-APIKEY: BINTU_API_KEY\' \\\n--data \'{\n    "ip": "103.13.113.1",\n    "type": "deny",\n    "tag": "Blocking malicious user IP"\n}\'\n')),(0,r.kt)("h4",{id:"block-a-referrer"},"Block a Referrer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'https://guardian.nanostream.cloud/referrer\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-BINTU-APIKEY: BINTU_API_KEY\' \\\n--data \'{\n    "domain": "all-good-streams.com",\n    "info": "Domain that replicates 3 streams on 24/02",\n    "type": "deny"\n}\'\n')),(0,r.kt)("admonition",{title:"support",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For further assistance using nanoStream Guardian, use our ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"support form"),", browse the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/faq/faq_streaming/"},"FAQs")," or contact us via support(at)nanocosmos.de")))}p.isMDXComponent=!0}}]);