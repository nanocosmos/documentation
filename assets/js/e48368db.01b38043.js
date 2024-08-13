"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4183],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,y=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const o={id:"nanoplayer_iframe",title:"iframe Embeds",sidebar_label:"iframe Embeds"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_iframe",id:"nanoplayer/nanoplayer_iframe",title:"iframe Embeds",description:"Creating a custom iframe",source:"@site/docs/nanoplayer/nanoplayer_iframe.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_iframe",permalink:"/docs/nanoplayer/nanoplayer_iframe",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"nanoplayer_iframe",title:"iframe Embeds",sidebar_label:"iframe Embeds"},sidebar:"H5Live Player",previous:{title:"Player Metrics",permalink:"/docs/nanoplayer/nanoplayer_player_metrics"},next:{title:"Mobile WebViews",permalink:"/docs/nanoplayer/nanoplayer_webview"}},p={},d=[{value:"Creating a custom iframe",id:"creating-a-custom-iframe",level:2},{value:"How to embed the player into an iframe element?",id:"how-to-embed-the-player-into-an-iframe-element",level:3},{value:"Creating the embedded page including the player on your side",id:"creating-the-embedded-page-including-the-player-on-your-side",level:3},{value:"Embedding the player page in an iframe on a second page on the distribution side",id:"embedding-the-player-page-in-an-iframe-on-a-second-page-on-the-distribution-side",level:3}],m={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"creating-a-custom-iframe"},"Creating a custom iframe"),(0,a.yg)("h3",{id:"how-to-embed-the-player-into-an-iframe-element"},"How to embed the player into an iframe element?"),(0,a.yg)("p",null,"For most use cases the implementation of the player directly into the page is the best option. We recommend embedding the player within an iframe element only when the use case requires it."),(0,a.yg)("h3",{id:"creating-the-embedded-page-including-the-player-on-your-side"},"Creating the embedded page including the player on your side"),(0,a.yg)("p",null,"Please check examples on how to add the player at the ",(0,a.yg)("a",{parentName:"p",href:"./nanoplayer_getting_started/"},"Getting started")," section."),(0,a.yg)("h3",{id:"embedding-the-player-page-in-an-iframe-on-a-second-page-on-the-distribution-side"},"Embedding the player page in an iframe on a second page on the distribution side"),(0,a.yg)("admonition",{title:"Important ",type:"tip"},(0,a.yg)("p",{parentName:"admonition"}," The ",(0,a.yg)("inlineCode",{parentName:"p"},"allowfullscreen")," attribute is required if the page wants to support fullscreen video.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'    <iframe id="ifvideo" width="640" height="480" scrolling="no" frameborder="0" allowfullscreen=""\n    src="//yourdomain.com/playerpage.html">\n    </iframe>\n')),(0,a.yg)("admonition",{title:"Ready-for-use iframe",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"If you are looking for a ready-for-use iframe hosted in the nanoStream Cloud please reach out to our dedicated support team via the ",(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"support form")," or by sending an email to support(at)nanocosmos.de for details.")))}c.isMDXComponent=!0}}]);