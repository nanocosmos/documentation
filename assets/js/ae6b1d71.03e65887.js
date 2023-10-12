"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const s={id:"stream-list",title:"How to use the Stream List - (V2)",sidebar_label:"Stream List"},o=void 0,i={unversionedId:"cloud-frontend/stream-list",id:"cloud-frontend/stream-list",title:"How to use the Stream List - (V2)",description:"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams!",source:"@site/docs/cloud-frontend/How_to_Use_the_Stream_List.md",sourceDirName:"cloud-frontend",slug:"/cloud-frontend/stream-list",permalink:"/docs/cloud-frontend/stream-list",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"stream-list",title:"How to use the Stream List - (V2)",sidebar_label:"Stream List"}},l={},m=[{value:"Finding the Stream List",id:"finding-the-stream-list",level:2},{value:"Stream Status",id:"stream-status",level:3},{value:"Stream IDs and Stream Names",id:"stream-ids-and-stream-names",level:3},{value:"Working with Tags",id:"working-with-tags",level:3},{value:"Support",id:"support",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"We upgraded to V3",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams! ",(0,n.kt)("br",null)),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Find the documentation of V3 ",(0,n.kt)("a",{parentName:"strong",href:"../cloud-frontend-v3/Dashboard_Overview"},"here"),"."))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://bintu-cloud-frontend.nanocosmos.de/stream"},"stream list")," displays all of your streams. It includes streams that are live, created and expired."),(0,n.kt)("h2",{id:"finding-the-stream-list"},"Finding the Stream List"),(0,n.kt)("p",null,"Click ",(0,n.kt)("a",{parentName:"p",href:"https://bintu-cloud-frontend.nanocosmos.de/stream"},(0,n.kt)("em",{parentName:"a"},"Streams"))," on the right-hand side of the homepage to find the stream list. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"finding-stream-list",src:a(75998).Z,width:"1893",height:"850"})),(0,n.kt)("p",null,"Clicking on one of the streams will open up its ",(0,n.kt)("em",{parentName:"p"},"Stream Overview")," displaying important parameters of the stream."),(0,n.kt)("h3",{id:"stream-status"},"Stream Status"),(0,n.kt)("p",null,"As you can see, some streams are displayed as ",(0,n.kt)("em",{parentName:"p"},"Live"),", some as ",(0,n.kt)("em",{parentName:"p"},"Created")," and some as ",(0,n.kt)("em",{parentName:"p"},"Ended"),"."),(0,n.kt)("p",null,"These terms refer to the status of each stream.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a stream that is ",(0,n.kt)("strong",{parentName:"li"},"live")," is right now sending a live video."),(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"created")," stream is not yet sending a video"),(0,n.kt)("li",{parentName:"ul"},"a stream that has ",(0,n.kt)("strong",{parentName:"li"},"ended")," is not anymore outputting footage.")),(0,n.kt)("h3",{id:"stream-ids-and-stream-names"},"Stream IDs and Stream Names"),(0,n.kt)("p",null,"Stream names and IDs are important identifiers for each stream. "),(0,n.kt)("h3",{id:"working-with-tags"},"Working with Tags"),(0,n.kt)("p",null,"The stream list also shows the tags that are assigned to each stream. This is helpful for example when searching for a specific stream. Click ",(0,n.kt)("em",{parentName:"p"},"Search")," and then ",(0,n.kt)("em",{parentName:"p"},"Search Tags")," to filter your streams by tag. You can also search the stream list using the date a stream was created."),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,"Hopefully, this tutorial was helpful for you. For further assistance, use our ",(0,n.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"contact form"),", browse the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/faq/faq_streaming/"},"FAQs")," or contact us via support(at)nanocosmos.de"))}c.isMDXComponent=!0},75998:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/stream-list-62c0b031f5c5da209ebd41b79914843e.png"}}]);