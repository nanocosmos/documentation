"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3582],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,m=c["".concat(p,".").concat(d)]||c[d]||y[d]||r;return a?o.createElement(m,i(i({ref:t},s),{},{components:a})):o.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={id:"nanoplayer_autoplay",title:"Autoplay",sidebar_label:"Autoplay"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_autoplay",id:"nanoplayer/nanoplayer_autoplay",title:"Autoplay",description:"Autoplay of videos on web pages is a highly discussed topic.",source:"@site/docs/nanoplayer/nanoplayer_autoplay.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_autoplay",permalink:"/docs/nanoplayer/nanoplayer_autoplay",draft:!1,tags:[],version:"current",lastUpdatedAt:1694431713,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"nanoplayer_autoplay",title:"Autoplay",sidebar_label:"Autoplay"},sidebar:"H5Live Player",previous:{title:"iframe Embeds",permalink:"/docs/nanoplayer/nanoplayer_iframe"},next:{title:"Fast playback start",permalink:"/docs/nanoplayer/nanoplayer_feature_fast_start"}},p={},u=[{value:"Autoplay and audio configuration",id:"autoplay-and-audio-configuration",level:2},{value:"How can you achieve autoplay on web pages with H5Live player?",id:"how-can-you-achieve-autoplay-on-web-pages-with-h5live-player",level:3},{value:"Autoplay and iOS low power mode",id:"autoplay-and-ios-low-power-mode",level:2}],s={toc:u},c="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Autoplay of videos on web pages is a highly discussed topic.\nDoes it improve or reduce user experience? "),(0,n.kt)("h2",{id:"autoplay-and-audio-configuration"},"Autoplay and audio configuration"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Autoplay of video and audio streams is now only supported with ",(0,n.kt)("em",{parentName:"p"},"muted")," audio (silent)! ",(0,n.kt)("br",null),"\nWhen audio is not muted, the video would just not play.")),(0,n.kt)("p",null,"This is a restriction introduced by all large browser vendors, and it requires fine-tuned configuration for web developers."),(0,n.kt)("p",null,"From the Google web page:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Chrome's autoplay policies have changed in April 2018 and this is going to affect video playback with sound. Spoiler alert: users are going to love it!")),(0,n.kt)("h3",{id:"how-can-you-achieve-autoplay-on-web-pages-with-h5live-player"},"How can you achieve autoplay on web pages with H5Live player?"),(0,n.kt)("p",null,"With autoplay and automute enabled the player will attempt to start the playback unmuted.\nIf this fails due to browser autoplay policy restrictions the playback will be started muted."),(0,n.kt)("p",null,"Configuring auto mute in nanoStream H5live Player:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"config.playback.autoplay=true;\nconfig.playback.automute=true;\nconfig.playback.muted=false;\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'var config = {\n    "source": {\n        // ...\n    },\n    "playback": {\n        "autoplay": true,\n        "automute": true,\n        "muted": false\n    }\n    // ...\n};\n')),(0,n.kt)("admonition",{title:"More information regarding autoplay",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Learn more about the autoplay policy changes on the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/09/autoplay-policy-changes"},"Chrome web page")," ",(0,n.kt)("br",null),"\nRead more on this blogpost about the autoplay policy changes for ",(0,n.kt)("a",{parentName:"p",href:"https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/"},"Webkit / Safari web page"))),(0,n.kt)("h2",{id:"autoplay-and-ios-low-power-mode"},"Autoplay and iOS low power mode"),(0,n.kt)("p",null,"Due to iOS security policies implemented by Apple themselves, in low power mode, it is required to have a user interaction to start the playback. This behavior is expected even if muted - there are no exceptions in low power mode.\nAs the playback is denied without the user gesture, the ",(0,n.kt)("inlineCode",{parentName:"p"},"1005")," error is thrown (Playback must be initialized by user gesture).\nIt is recommended not to attempt a recovery for ",(0,n.kt)("inlineCode",{parentName:"p"},"1005"),' error but to find a workaround, i.e ask the user to "tap to play" instead.'))}y.isMDXComponent=!0}}]);