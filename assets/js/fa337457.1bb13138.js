"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[463],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,g=d["".concat(s,".").concat(y)]||d[y]||m[y]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},66851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={id:"support",title:"Support",sidebar_label:"Support"},l=void 0,i={unversionedId:"cloud/support",id:"cloud/support",title:"Support",description:"Support Options",source:"@site/docs/cloud/support.md",sourceDirName:"cloud",slug:"/cloud/support",permalink:"/docs/cloud/support",draft:!1,tags:[],version:"current",lastUpdatedAt:1730716027,formattedLastUpdatedAt:"Nov 4, 2024",frontMatter:{id:"support",title:"Support",sidebar_label:"Support"},sidebar:"nanoStream Cloud",previous:{title:"Network Diagnostics",permalink:"/docs/cloud/network-diagnostics"}},s={},p=[{value:"Support Options",id:"support-options",level:2},{value:"Live Stream Information",id:"live-stream-information",level:2},{value:"Additional information for player issues",id:"additional-information-for-player-issues",level:2},{value:"Test Player",id:"test-player",level:2},{value:"Geo Locations",id:"geo-locations",level:2},{value:"nanoStream Cloud Public URLs",id:"nanostream-cloud-public-urls",level:2},{value:"Standard URLs, geo-loadbalanced:",id:"standard-urls-geo-loadbalanced",level:3},{value:"Geo Region Override",id:"geo-region-override",level:3},{value:"Primary host URLs",id:"primary-host-urls",level:3},{value:"Additional Help",id:"additional-help",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"support-options"},"Support Options"),(0,r.yg)("p",null,"If you experience any issues or have questions, there are certain ways to do some diagnostics on your end.\nIf you do not find a solution, please create a ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"support ticket"),"."),(0,r.yg)("p",null,"To check your network connectivity, please read our ",(0,r.yg)("a",{parentName:"p",href:"network-diagnostics"},"network diagnostics")," information page."),(0,r.yg)("h2",{id:"live-stream-information"},"Live Stream Information"),(0,r.yg)("p",null,"A live stream in nanoStream Cloud is identified by either a bintu stream ID or stream name.\nFor any issues you report to us, please add"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the stream name and ID"),(0,r.yg)("li",{parentName:"ul"},"your live camera and encoder configuration"),(0,r.yg)("li",{parentName:"ul"},"your player page or a link to our demo player"),(0,r.yg)("li",{parentName:"ul"},"the time of the issue, UTC time, and if it happens frequently"),(0,r.yg)("li",{parentName:"ul"},"your geo location of live encoding and playback"),(0,r.yg)("li",{parentName:"ul"},"the result of the ",(0,r.yg)("a",{parentName:"li",href:"network-diagnostics"},"network diagnostics"))),(0,r.yg)("h2",{id:"additional-information-for-player-issues"},"Additional information for player issues"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Does the issue happen on all of your test streams and sessions?"),(0,r.yg)("li",{parentName:"ul"},"Please check your live encoder configuration: try lower bitrate and keyframe distance 2s")),(0,r.yg)("h2",{id:"test-player"},"Test Player"),(0,r.yg)("p",null,"You can use our demo/test player for verifying your playback."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example URL"),": ",(0,r.yg)("a",{parentName:"p",href:"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY"},"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY")),(0,r.yg)("p",null,"Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"h5live.rtmp.streamname=XXXXX-YYYYY")," with your bintu stream name."),(0,r.yg)("p",null,"You can also predefine a specific geo location for playback. ",(0,r.yg)("br",null),"\nReplace ",(0,r.yg)("inlineCode",{parentName:"p"},"h5live.server=bintu-play.nanocosmos.de")," with one of the locations mentioned below."),(0,r.yg)("admonition",{title:"Example playback from US East",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Location: ",(0,r.yg)("inlineCode",{parentName:"p"},"bintu-play-use.nanocosmos.de"),"\n",(0,r.yg)("a",{parentName:"p",href:"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play-use.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY"},"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play-use.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY"))),(0,r.yg)("h2",{id:"geo-locations"},"Geo Locations"),(0,r.yg)("p",null,"By default, the URLs you get from our system are load-balanced between different geo locations. This means you will land on different servers close to your location."),(0,r.yg)("p",null,"You can override the geo location detection for both encoding/ingest and playback."),(0,r.yg)("admonition",{title:"note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"In general overriding the default URL is not required and most of the time not recommended.")),(0,r.yg)("h2",{id:"nanostream-cloud-public-urls"},"nanoStream Cloud Public URLs"),(0,r.yg)("h3",{id:"standard-urls-geo-loadbalanced"},"Standard URLs, geo-loadbalanced:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Playback"),": bintu-play.nanocosmos.de ",(0,r.yg)("br",null),"\n",(0,r.yg)("strong",{parentName:"p"},"Ingest"),": bintu-stream.nanocosmos.de"),(0,r.yg)("h3",{id:"geo-region-override"},"Geo Region Override"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Geo region"),(0,r.yg)("th",{parentName:"tr",align:null},"URL"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-play from EU"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-play-eu.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-stream (ingest) from EU"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-stream-eu.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-play from US East"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-play-use.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-stream (ingest) from US East"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-stream-use.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-play from US West"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-play-usw.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-stream (ingest) from US West"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-stream-usw.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-play from Asia South"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-play-ass.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-stream (ingest) from Asia South"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-stream-ass.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-play from Australia"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-play-au.nanocosmos.de"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bintu-stream (ingest) from Australia"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bintu-stream-au.nanocosmos.de"))))),(0,r.yg)("h3",{id:"primary-host-urls"},"Primary host URLs"),(0,r.yg)("p",null,"If you need to test with specific hosts, please contact us.\nPrimary host URLs will only be shared on request."),(0,r.yg)("h2",{id:"additional-help"},"Additional Help"),(0,r.yg)("p",null,"There are other secondary regions like South America, Turkey, Japan, Hongkong. ",(0,r.yg)("br",null),"\nPlease ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"create a support ticket")," for additional help."))}m.isMDXComponent=!0}}]);