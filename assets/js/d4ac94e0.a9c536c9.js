"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"nanoplayer_release_latest",title:"Latest Release",sidebar_label:"Latest"},l=void 0,s={unversionedId:"nanoplayer/nanoplayer_release_latest",id:"nanoplayer/nanoplayer_release_latest",title:"Latest Release",description:"Please find more about the fast playback start feature in our documentation",source:"@site/docs/nanoplayer/nanoplayer_release_latest.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_release_latest",permalink:"/docs/nanoplayer/nanoplayer_release_latest",draft:!1,tags:[],version:"current",lastUpdatedAt:1699966917,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{id:"nanoplayer_release_latest",title:"Latest Release",sidebar_label:"Latest"},sidebar:"H5Live Player",previous:{title:"Video Access and Processing",permalink:"/docs/nanoplayer/nanoplayer_feature_video_access_and_processing"},next:{title:"History",permalink:"/docs/nanoplayer/nanoplayer_release_history"}},i={},p=[{value:"Please find more about the <strong>fast playback start</strong> feature in our documentation",id:"please-find-more-about-the-fast-playback-start-feature-in-our-documentation",level:2},{value:"<strong>4.22.2</strong>",id:"4222",level:2},{value:"<strong>Release Notes</strong>",id:"release-notes",level:3},{value:"<strong>Changelog</strong>",id:"changelog",level:3},{value:"Improved",id:"improved",level:3},{value:"Fixed",id:"fixed",level:3},{value:"<strong>Release Package</strong>",id:"release-package",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"please-find-more-about-the-fast-playback-start-feature-in-our-documentation"},"Please find more about the ",(0,r.kt)("strong",{parentName:"h2"},"fast playback start")," feature in our ",(0,r.kt)("a",{parentName:"h2",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_fast_start/"},"documentation")),(0,r.kt)("h2",{id:"4222"},(0,r.kt)("strong",{parentName:"h2"},"[4.22.2]")),(0,r.kt)("h3",{id:"release-notes"},(0,r.kt)("strong",{parentName:"h3"},"Release Notes")),(0,r.kt)("p",null,"This release introduces crucial improvements and fixes to elevate your streaming experience. We have addressed issues that had impacted playback on iOS devices, ensuring a smoother experience across various scenarios. This update focuses on improving playback latencies, stream switch buffering on iOS, fullscreen layout issues, and occasional exceptions during player destruction on iOS."),(0,r.kt)("h3",{id:"changelog"},(0,r.kt)("strong",{parentName:"h3"},"Changelog")),(0,r.kt)("h3",{id:"improved"},"Improved"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"preventing higher playback latencies of some webrtc ingest streams that show frequent resolution adaptions")),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"randomly occurring issue that could lead to repeated buffering after stream switches on iOS"),(0,r.kt)("li",{parentName:"ul"},"fullscreen layout issue after entering fullscreen mode more than one time",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"affected screens with display ratios higher/wider than the player including mobile landscape orientation"),(0,r.kt)("li",{parentName:"ul"},"the bottom of the video was partially out of the display area"),(0,r.kt)("li",{parentName:"ul"},"(the issue has been introduced in v4.22.0)"))),(0,r.kt)("li",{parentName:"ul"},"non critical exception occurring occasionally during ",(0,r.kt)("inlineCode",{parentName:"li"},"player.destroy")," on iOS")),(0,r.kt)("h3",{id:"release-package"},(0,r.kt)("strong",{parentName:"h3"},"Release Package")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.nanocosmos.de/index.php/s/2LNiXaetkw8wzB3"},"4.22.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6"},"latest 4.x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP"},"latest"))))}d.isMDXComponent=!0}}]);