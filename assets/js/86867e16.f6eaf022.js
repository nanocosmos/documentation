"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6478],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),y=r,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},40874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={id:"cloud-playback-tokens",title:"Secure Playback Tokens  - (V2)",sidebar_label:"Secure Playback Tokens"},s=void 0,i={unversionedId:"cloud-frontend/cloud-playback-tokens",id:"cloud-frontend/cloud-playback-tokens",title:"Secure Playback Tokens  - (V2)",description:"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams!",source:"@site/docs/cloud-frontend/How_to_Use_Playback_Tokens.md",sourceDirName:"cloud-frontend",slug:"/cloud-frontend/cloud-playback-tokens",permalink:"/docs/cloud-frontend/cloud-playback-tokens",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"cloud-playback-tokens",title:"Secure Playback Tokens  - (V2)",sidebar_label:"Secure Playback Tokens"}},l={},p=[{value:"Create secure tokens",id:"create-secure-tokens",level:2},{value:"Step-by-step instructions",id:"step-by-step-instructions",level:2},{value:"Enabling Security Tokens when Creating a new Stream",id:"enabling-security-tokens-when-creating-a-new-stream",level:3},{value:"Adding Secure Tokens after Creating a Stream",id:"adding-secure-tokens-after-creating-a-stream",level:3},{value:"Adding Secure Playback Tokens from the Stream List",id:"adding-secure-playback-tokens-from-the-stream-list",level:3},{value:"Support",id:"support",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"We upgraded to V3",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams! ",(0,r.yg)("br",null)),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Find the documentation of V3 ",(0,r.yg)("a",{parentName:"strong",href:"../cloud-frontend-v3/Dashboard_Overview"},"here"),"."))),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Secure Playback Tokens")," are a tool that ensures highest security standards for your stream. With tokens you can decide who is able to playback your stream. The mere ",(0,r.yg)("em",{parentName:"p"},"playout URL")," won't allow your stream to be played out."),(0,r.yg)("h2",{id:"create-secure-tokens"},"Create secure tokens"),(0,r.yg)("p",null,"If your organisation has the ",(0,r.yg)("inlineCode",{parentName:"p"},"secure")," option ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled"),", then you will be able to see ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE SECURE PLAYBACK TOKEN")," option."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You have to choose between ",(0,r.yg)("inlineCode",{parentName:"li"},"Stream")," which will generate a token that is only valid for the given ",(0,r.yg)("inlineCode",{parentName:"li"},"streamname")," on this setup and ",(0,r.yg)("inlineCode",{parentName:"li"},"Organisation Hash")," where the generated token is valid for ",(0,r.yg)("strong",{parentName:"li"},"all streams")," of your organisation. "),(0,r.yg)("li",{parentName:"ul"},"By default, the expiration date is 2 weeks in the future (can\xb4t be more than 365 days). It is recommended to use short expiration dates to increase the security, so 14 days should be sufficient."),(0,r.yg)("li",{parentName:"ul"},"You can restrict the access/playback of a stream to a specific ",(0,r.yg)("inlineCode",{parentName:"li"},"IP")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"Referer"),". Fill out the corresponding field (please keep in mind if you set a ",(0,r.yg)("inlineCode",{parentName:"li"},"IP")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"Referer")," the generated ",(0,r.yg)("inlineCode",{parentName:"li"},"Player-Link")," will not work, as this requires ",(0,r.yg)("inlineCode",{parentName:"li"},"demo.nanocosmos.de")," as ",(0,r.yg)("inlineCode",{parentName:"li"},"Referer"),")."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"Optional")," - ",(0,r.yg)("inlineCode",{parentName:"li"},"Add a single tag"),"."),(0,r.yg)("li",{parentName:"ul"},"When everything is ready, hit the ",(0,r.yg)("inlineCode",{parentName:"li"},"CREATE SECURE PLAYBACK TOKEN")," button."),(0,r.yg)("li",{parentName:"ul"},"An updated overview of the new playback token generated will be displayed.")),(0,r.yg)("h2",{id:"step-by-step-instructions"},"Step-by-step instructions"),(0,r.yg)("h3",{id:"enabling-security-tokens-when-creating-a-new-stream"},"Enabling Security Tokens when Creating a new Stream"),(0,r.yg)("p",null,"If you want your stream to be secured with a token immediately when starting to stream, press ",(0,r.yg)("em",{parentName:"p"},"Create Secure Playback Token")," in the ",(0,r.yg)("em",{parentName:"p"},"Create Stream")," overview."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"create-spb-token",src:a(76762).A,width:"1894",height:"853"})),(0,r.yg)("p",null,"The pop-up menu allows you to make some adjustments. You can choose whether the token you are about to create should cover only this specific streams or all streams of your organization. Also, you are able to set an expiration date of the token and give some more detailed preferences. You can also add a tag. As soon as you press ",(0,r.yg)("em",{parentName:"p"},"Create Secure Playback Token")," your token will be created."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Attention!")),"  Please save your token immediately after creating it. It's only saved and can't be retrieved as soon as this page is refreshed or closed. You can generate new tokens any time.")),(0,r.yg)("p",null,"You can find your security token under ",(0,r.yg)("em",{parentName:"p"},"Playback Token Overview"),". Also, the security token is automatically added to the ",(0,r.yg)("em",{parentName:"p"},"Web Playout URL")," of your stream."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"spb-token-overview",src:a(34879).A,width:"1893",height:"852"})),(0,r.yg)("p",null,"The ",(0,r.yg)("em",{parentName:"p"},"Web Code Snippet")," also includes the secure token automatically."),(0,r.yg)("p",null,"Now you can access the stream playback by opening the ",(0,r.yg)("em",{parentName:"p"},"Web Playout URL"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"spbt-playout",src:a(12193).A,width:"1884",height:"849"})),(0,r.yg)("p",null,"As you can see, also secured streams are transmitted with a latency of only one second."),(0,r.yg)("p",null,"The playback page also includes information about the secure token validity. This can be found right underneath the player."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"secured-stream",src:a(8238).A,width:"1512",height:"151"})),(0,r.yg)("h3",{id:"adding-secure-tokens-after-creating-a-stream"},"Adding Secure Tokens after Creating a Stream"),(0,r.yg)("p",null,"On the home page, click ",(0,r.yg)("em",{parentName:"p"},"Secure Playback Token")," from the menu bar on the right, to create a secure playback token."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"spbt-menu",src:a(68975).A,width:"1892",height:"835"})),(0,r.yg)("p",null,"Also here you can choose whether you want to create your token only for one stream that is identified by stream name or your whole organization. Moreover, you can edit the expiration date of your token and make further adjustments."),(0,r.yg)("p",null,"As soon as you press ",(0,r.yg)("em",{parentName:"p"},"Create Secure Playback Token")," a pop-up window will give you an overview over the token."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"spbt-popup",src:a(12898).A,width:"1368",height:"510"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Attention!"))," Please save your token immediately. After closing this pop-up window, the token can't be retrieved.")),(0,r.yg)("h3",{id:"adding-secure-playback-tokens-from-the-stream-list"},"Adding Secure Playback Tokens from the Stream List"),(0,r.yg)("p",null,"Press ",(0,r.yg)("em",{parentName:"p"},"Streams")," in the menu bar on the left side of the home page to see all your streams. Click on one of them to see it's ",(0,r.yg)("em",{parentName:"p"},"Stream Overview"),". It's possible to add secure playback tokens here. This works the same way that it works when adding secure tokens while creating a stream. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"spbt-stream-overview",src:a(2576).A,width:"1893",height:"845"})),(0,r.yg)("p",null,"Go to ",(0,r.yg)("em",{parentName:"p"},"Playouts")," and press ",(0,r.yg)("em",{parentName:"p"},"Create Secure Playback Token"),". Then follow the instructions given above (see: ",(0,r.yg)("a",{parentName:"p",href:"#enabling-security-tokens-when-creating-a-new-stream"},"Enabling Security Tokens")," when ",(0,r.yg)("a",{parentName:"p",href:"/docs/cloud-frontend/How_to_Start_a_Stream"},"Creating a new Stream"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"To get more informations about the H5Live Player and its implementation, see our ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/"},"documentation"),".")),(0,r.yg)("h2",{id:"support"},"Support"),(0,r.yg)("p",null,"Hopefully, this tutorial was helpful for you. For further assistance, use our ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"contact form"),", browse the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/faq/faq_streaming/"},"FAQs")," or contact us via support(at)nanocosmos.de"))}d.isMDXComponent=!0},76762:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create-spb-token-01eda332cf0b4891d5f449284ca0f724.png"},8238:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/secured-stream-fcd023402b0e87be4228d509787d2ef8.png"},34879:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/spb-token-overview-7f5ba0d3e267063e3a9261660c5b83e3.png"},68975:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/spbt-menu-16d319f03af9125775e96ead8435d0e4.png"},12193:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/spbt-playback-aa6fcebc913acdcd2692d547b1433b9c.png"},12898:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/spbt-popup-5fbd26d32f05c902db11a02135e3cd4d.png"},2576:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/spbt-stream-overview-1f9b9872bd5dd3e7e99c5498fa1c8ac1.png"}}]);