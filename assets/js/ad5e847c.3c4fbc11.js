"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3667],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(a),f=r,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return a?n.createElement(y,l(l({ref:e},c),{},{components:a})):n.createElement(y,l({ref:e},c))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},59861:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"nanoplayer_feature_fast_start",title:"Fast playback start",sidebar_label:"Fast playback start"},l=void 0,i={unversionedId:"nanoplayer/nanoplayer_feature_fast_start",id:"nanoplayer/nanoplayer_feature_fast_start",title:"Fast playback start",description:"Using the fast playback start feature with nanoStream Cloud",source:"@site/docs/nanoplayer/nanoplayer_feature_fast_start.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_fast_start",permalink:"/docs/nanoplayer/nanoplayer_feature_fast_start",draft:!1,tags:[],version:"current",lastUpdatedAt:1701953705,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"nanoplayer_feature_fast_start",title:"Fast playback start",sidebar_label:"Fast playback start"},sidebar:"H5Live Player",previous:{title:"Autoplay",permalink:"/docs/nanoplayer/nanoplayer_autoplay"},next:{title:"Latency control modes",permalink:"/docs/nanoplayer/nanoplayer_feature_latency_control_modes"}},s={},p=[{value:"Using the fast playback start feature with nanoStream Cloud",id:"using-the-fast-playback-start-feature-with-nanostream-cloud",level:2},{value:"Configuration with fast playback start enabled",id:"configuration-with-fast-playback-start-enabled",level:3},{value:"Fast playback start support in v4.22",id:"fast-playback-start-support-in-v422",level:3},{value:"Recommendations for fast playback start with adaptive bitrate (ABR) playback",id:"recommendations-for-fast-playback-start-with-adaptive-bitrate-abr-playback",level:3},{value:"More about the player configuration",id:"more-about-the-player-configuration",level:3}],c={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-the-fast-playback-start-feature-with-nanostream-cloud"},"Using the fast playback start feature with nanoStream Cloud"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.22.0"),", the fast start mode is improving the time to first frame and the playback start time with nanoStream Cloud.\nTo enable it, developers need to set the boolean value ",(0,r.kt)("inlineCode",{parentName:"p"},"config.playback.faststart")," to true.\nBy default, the fast start mode is disabled in v4.22.0."),(0,r.kt)("h3",{id:"configuration-with-fast-playback-start-enabled"},"Configuration with fast playback start enabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"'config': {\n    ...\n    'playback': {\n        'faststart': true,\n        ...\n    },\n    ...\n}\n")),(0,r.kt)("h3",{id:"fast-playback-start-support-in-v422"},"Fast playback start support in v4.22"),(0,r.kt)("p",null,"If enabled, fast start mode will be applied in all cases when the player is transitioning from ",(0,r.kt)("inlineCode",{parentName:"p"},"paused")," state to ",(0,r.kt)("inlineCode",{parentName:"p"},"playing")," state including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playback start via player UI controls"),(0,r.kt)("li",{parentName:"ul"},"API calls to player.setup() with autoplay enabled"),(0,r.kt)("li",{parentName:"ul"},"API calls to player.play() if the player is in ",(0,r.kt)("inlineCode",{parentName:"li"},"paused")," state"),(0,r.kt)("li",{parentName:"ul"},"API calls to player.switchStream() with ",(0,r.kt)("inlineCode",{parentName:"li"},"source.options.switch.forcePlay")," enabled if the player is in ",(0,r.kt)("inlineCode",{parentName:"li"},"paused")," state"),(0,r.kt)("li",{parentName:"ul"},"API calls to player.updateSource() with ",(0,r.kt)("inlineCode",{parentName:"li"},"source.options.switch.forcePlay")," enabled if the player is in ",(0,r.kt)("inlineCode",{parentName:"li"},"paused")," state")),(0,r.kt)("h3",{id:"recommendations-for-fast-playback-start-with-adaptive-bitrate-abr-playback"},"Recommendations for fast playback start with adaptive bitrate (ABR) playback"),(0,r.kt)("p",null,"For adaptive bitrate (ABR) playback with fast start enabled it is recommended to adjust the start index/quality to a medium or lower bitrate rendition to ensure a seemless user experience in case of limited network bandwidth on the viewer side."),(0,r.kt)("h3",{id:"more-about-the-player-configuration"},"More about the player configuration"),(0,r.kt)("p",null,"Please check examples on how to configure the player at the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/"},"Getting started")," section."))}d.isMDXComponent=!0}}]);