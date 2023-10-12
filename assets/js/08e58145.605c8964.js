"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"security",title:"nanoStream Cloud Security",sidebar_label:"nanoStream Cloud Security"},i=void 0,l={unversionedId:"cloud/security",id:"cloud/security",title:"nanoStream Cloud Security",description:"Click PLAY button to start",source:"@site/docs/cloud/security.md",sourceDirName:"cloud",slug:"/cloud/security",permalink:"/docs/cloud/security",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"security",title:"nanoStream Cloud Security",sidebar_label:"nanoStream Cloud Security"},sidebar:"nanoStream Cloud",previous:{title:"Live Recording and VOD",permalink:"/docs/cloud/live-recording-vod"},next:{title:"nanoStream Guardian",permalink:"/docs/cloud/guardian"}},s={},c=[{value:"Encrypted streaming",id:"encrypted-streaming",level:2},{value:"Client authorization",id:"client-authorization",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"video-wrap"},(0,a.kt)("div",{class:"video-container"},(0,a.kt)("iframe",{src:"https://www.youtube.com/embed/M_chQzdc5m0",frameborder:"0",allowfullscreen:!0}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Click ",(0,a.kt)("inlineCode",{parentName:"em"},"PLAY")," button to start"))),(0,a.kt)("p",null,"nanoStream Cloud ensures security on several levels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reliability"),": our system works 24/7 on a global scale with automatic failover "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),": encrypted streaming is possible"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authorization"),": web hooks and secure tokens can be used to authorize clients")),(0,a.kt)("h2",{id:"encrypted-streaming"},"Encrypted streaming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanoStream H5Live Player and Webcaster by default work over transport level security (HTTPS), based on industry standards.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RTMP can be encrypted with SSL. You can use rtmps over port 1937 instead 1935."))),(0,a.kt)("admonition",{title:"example",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Standard non-encrypted ingest (RTMP)"),": rtmp://bintu-stream.nanocosmos.de:1935/live/STREAM "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Encrypted ingest (RTMPS)"),": rtmps://bintu-stream.nanocosmos.de:1937/live/STREAM"))),(0,a.kt)("h2",{id:"client-authorization"},"Client authorization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RTMP Ingest can be authorized with ",(0,a.kt)("a",{parentName:"p",href:"bintu_custom_webhooks"},"web hooks")," with our bintu REST API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"nanoStream H5Live Player clients can be authorized with nanoPlayer ",(0,a.kt)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_token_security"},"secure tokens")))),(0,a.kt)("admonition",{title:"Questions?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For business related questions reach out to our dedicated sales team via the ",(0,a.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"For technical questions you can use our ",(0,a.kt)("a",{parentName:"strong",href:"https://www.nanocosmos.de/support"},"support form"),"."))))}m.isMDXComponent=!0}}]);