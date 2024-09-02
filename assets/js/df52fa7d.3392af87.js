"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1570],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(58168),i=(n(96540),n(15680));const r={id:"Dashboard_Thumbnail",title:"Thumbnails",sidebar_label:"Thumbnails"},o=void 0,s={unversionedId:"cloud-frontend-v3/Dashboard_Thumbnail",id:"cloud-frontend-v3/Dashboard_Thumbnail",title:"Thumbnails",description:"Thumbnails are small-sized preview images used to give viewers a quick snapshot of the content they represent. They open up new use-cases including and not limited to, e.g snapshots of content of interest or poster images for streams. By providing a visual summary, thumbnails enhance user experience and navigation efficiency.",source:"@site/docs/cloud-frontend-v3/Dashboard_Thumbnail.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_Thumbnail",permalink:"/docs/cloud-frontend-v3/Dashboard_Thumbnail",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"Dashboard_Thumbnail",title:"Thumbnails",sidebar_label:"Thumbnails"},sidebar:"nanoStream Cloud",previous:{title:"Adaptive Bitrate (ABR) and Live Transcoding",permalink:"/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding"},next:{title:"Secure Playback & Secure Token",permalink:"/docs/cloud-frontend-v3/Dashboard_Secure"}},l={},u=[{value:"Setting up thumbnails",id:"setting-up-thumbnails",level:2},{value:"Updating settings",id:"updating-settings",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Thumbnails are small-sized preview images used to give viewers a quick snapshot of the content they represent. They open up new use-cases including and not limited to, e.g snapshots of content of interest or poster images for streams. By providing a visual summary, thumbnails enhance user experience and navigation efficiency. "),(0,i.yg)("admonition",{title:"Before starting",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,i.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,i.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,i.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,i.yg)("admonition",{title:"Important to know",type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"The functionality for this feature is exclusively available on our vtrans ingest servers. ",(0,i.yg)("br",null),"\nBintu only recommends these servers when transcodings are in use. If your stream doesn't have transcoding profiles and you wish to utilize the thumbnails feature, please ingest using ",(0,i.yg)("inlineCode",{parentName:"p"},"rtmp://bintu-vtrans.nanocosmos.de"),".")),(0,i.yg)("h2",{id:"setting-up-thumbnails"},"Setting up thumbnails"),(0,i.yg)("p",null,'To activate a thumbnail, you need to navigate to the Stream Overview page of your stream. Within the "Details" section at the top, you can find there the "Thumbnail" flag at the end of the list. By clicking on the "Edit" button located at the end of the row, a dialog to appear.'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot: Stream Overview incl. Thumbnail Flag",src:n(31759).A,width:"1479",height:"885"}),"\n",(0,i.yg)("em",{parentName:"p"},"Screenshot: Stream Overview incl. Thumbnail Flag")),(0,i.yg)("p",null,"In this dialog, you can enable the thumbnail generation and select an interval. This can range from 10 to 3600 seconds. The thumbnail will be generated based on the selected interval."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot: Thumbnail Activation Dialog",src:n(50725).A,width:"1479",height:"1037"}),"\n",(0,i.yg)("em",{parentName:"p"},"Screenshot: Thumbnail Activation Dialog")),(0,i.yg)("p",null,"Upon enabling the thumbnail generation, you'll notice a update in the user interface showcasing the thumbnail. Furthermore, the details list will now include the Thumbnail URL, and the selected interval will be prominently displayed."),(0,i.yg)("admonition",{title:"Important to know",type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"The functionality for this feature is exclusively available on our vtrans ingest servers. ",(0,i.yg)("br",null),"\nBintu only recommends these servers when transcodings are in use. If your stream doesn't have transcoding profiles and you wish to utilize the thumbnails feature, please ingest using ",(0,i.yg)("inlineCode",{parentName:"p"},"rtmp://bintu-vtrans.nanocosmos.de"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot: Thumbnail in Stream Overview",src:n(37388).A,width:"1299",height:"935"}),"\n",(0,i.yg)("em",{parentName:"p"},"Screenshot: Thumbnail in Stream Overview")),(0,i.yg)("h2",{id:"updating-settings"},"Updating settings"),(0,i.yg)("p",null,"There may be a need to make changes, such as adjusting the interval or perhaps turning off the thumbnail generation. To facilitate this, the setup dialog can be accessed again. There are two ways to access this dialog:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},'From the details list, locate the row labeled "Thumbnail Interval" and click on the "Edit" button at the end of the row.'),(0,i.yg)("li",{parentName:"ol"},'From the section above the thumbnail preview, click on "Update settings." ')),(0,i.yg)("p",null,"Both buttons will bring up the same dialog where all settings can be updated as needed."),(0,i.yg)("admonition",{title:"Important to know",type:"danger"},(0,i.yg)("p",{parentName:"admonition"},"To apply any changes, you must (re-)ingest your stream. If your stream is live, the modifications will only take effect once you stop and restart it.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Screenshot: Thumbnail Setup Dialog",src:n(54555).A,width:"1479",height:"1037"}),"\n",(0,i.yg)("em",{parentName:"p"},"Screenshot: Thumbnail Setup Dialog")))}m.isMDXComponent=!0},54555:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cf-adding-thumbnail-interval-a727fac929ed39924e6f309528a04088.jpg"},50725:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cf-adding-thumbnail-b541f586058ad55b1a1919daba18a390.jpg"},31759:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cf-streamoverview-thumbnail-b1c0698d29412ef97dc712b050d25574.jpg"},37388:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cf-thumbnail-added-97323a839a49d5dd53ddf08623dd8f2f.jpg"}}]);