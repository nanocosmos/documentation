"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={id:"Dashboard_Thumbnail",title:"Thumbnails",sidebar_label:"Thumbnails"},r=void 0,s={unversionedId:"cloud-frontend-v3/Dashboard_Thumbnail",id:"cloud-frontend-v3/Dashboard_Thumbnail",title:"Thumbnails",description:"Thumbnails are small-sized preview images used to give viewers a quick snapshot of the content they represent. They open up new use-cases including and not limited to, e.g snapshots of content of interest or poster images for streams. By providing a visual summary, thumbnails enhance user experience and navigation efficiency.",source:"@site/docs/cloud-frontend-v3/Dashboard_Thumbnail.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_Thumbnail",permalink:"/docs/cloud-frontend-v3/Dashboard_Thumbnail",draft:!1,tags:[],version:"current",lastUpdatedAt:1701953705,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"Dashboard_Thumbnail",title:"Thumbnails",sidebar_label:"Thumbnails"},sidebar:"nanoStream Cloud",previous:{title:"Adaptive Bitrate (ABR) and Live Transcoding",permalink:"/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding"},next:{title:"Secure Playback & Secure Token",permalink:"/docs/cloud-frontend-v3/Dashboard_Secure"}},l={},u=[{value:"Setting up thumbnails",id:"setting-up-thumbnails",level:2},{value:"Updating settings",id:"updating-settings",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Thumbnails are small-sized preview images used to give viewers a quick snapshot of the content they represent. They open up new use-cases including and not limited to, e.g snapshots of content of interest or poster images for streams. By providing a visual summary, thumbnails enhance user experience and navigation efficiency. "),(0,i.kt)("admonition",{title:"Before starting",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,i.kt)("br",null),"\nIf you have not created an account yet, you can ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,i.kt)("admonition",{title:"Important to know",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The functionality for this feature is exclusively available on our vtrans ingest servers. ",(0,i.kt)("br",null),"\nBintu only recommends these servers when transcodings are in use. If your stream doesn't have transcoding profiles and you wish to utilize the thumbnails feature, please ingest using ",(0,i.kt)("inlineCode",{parentName:"p"},"rtmp://bintu-vtrans.nanocosmos.de"),".")),(0,i.kt)("h2",{id:"setting-up-thumbnails"},"Setting up thumbnails"),(0,i.kt)("p",null,'To activate a thumbnail, you need to navigate to the Stream Overview page of your stream. Within the "Details" section at the top, you can find there the "Thumbnail" flag at the end of the list. By clicking on the "Edit" button located at the end of the row, a dialog to appear.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot: Stream Overview incl. Thumbnail Flag",src:n(83666).Z,width:"1479",height:"885"}),"\n",(0,i.kt)("em",{parentName:"p"},"Screenshot: Stream Overview incl. Thumbnail Flag")),(0,i.kt)("p",null,"In this dialog, you can enable the thumbnail generation and select an interval. This can range from 10 to 3600 seconds. The thumbnail will be generated based on the selected interval."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot: Thumbnail Activation Dialog",src:n(79737).Z,width:"1479",height:"1037"}),"\n",(0,i.kt)("em",{parentName:"p"},"Screenshot: Thumbnail Activation Dialog")),(0,i.kt)("p",null,"Upon enabling the thumbnail generation, you'll notice a update in the user interface showcasing the thumbnail. Furthermore, the details list will now include the Thumbnail URL, and the selected interval will be prominently displayed."),(0,i.kt)("admonition",{title:"Important to know",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The functionality for this feature is exclusively available on our vtrans ingest servers. ",(0,i.kt)("br",null),"\nBintu only recommends these servers when transcodings are in use. If your stream doesn't have transcoding profiles and you wish to utilize the thumbnails feature, please ingest using ",(0,i.kt)("inlineCode",{parentName:"p"},"rtmp://bintu-vtrans.nanocosmos.de"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot: Thumbnail in Stream Overview",src:n(12477).Z,width:"1299",height:"935"}),"\n",(0,i.kt)("em",{parentName:"p"},"Screenshot: Thumbnail in Stream Overview")),(0,i.kt)("h2",{id:"updating-settings"},"Updating settings"),(0,i.kt)("p",null,"There may be a need to make changes, such as adjusting the interval or perhaps turning off the thumbnail generation. To facilitate this, the setup dialog can be accessed again. There are two ways to access this dialog:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'From the details list, locate the row labeled "Thumbnail Interval" and click on the "Edit" button at the end of the row.'),(0,i.kt)("li",{parentName:"ol"},'From the section above the thumbnail preview, click on "Update settings." ')),(0,i.kt)("p",null,"Both buttons will bring up the same dialog where all settings can be updated as needed."),(0,i.kt)("admonition",{title:"Important to know",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"To apply any changes, you must (re-)ingest your stream. If your stream is live, the modifications will only take effect once you stop and restart it.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot: Thumbnail Setup Dialog",src:n(34647).Z,width:"1479",height:"1037"}),"\n",(0,i.kt)("em",{parentName:"p"},"Screenshot: Thumbnail Setup Dialog")))}m.isMDXComponent=!0},34647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cf-adding-thumbnail-interval-a727fac929ed39924e6f309528a04088.jpg"},79737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cf-adding-thumbnail-b541f586058ad55b1a1919daba18a390.jpg"},83666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cf-streamoverview-thumbnail-b1c0698d29412ef97dc712b050d25574.jpg"},12477:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cf-thumbnail-added-97323a839a49d5dd53ddf08623dd8f2f.jpg"}}]);