"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[192],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var o=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),u=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},y=function(e){var a=u(e.components);return o.createElement(p.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=n,m=s["".concat(p,".").concat(d)]||s[d]||c[d]||r;return t?o.createElement(m,i(i({ref:a},y),{},{components:t})):o.createElement(m,i({ref:a},y))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29973:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=t(58168),n=(t(96540),t(15680));const r={id:"nanoplayer_autoplay",title:"Autoplay",sidebar_label:"Autoplay"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_autoplay",id:"nanoplayer/nanoplayer_autoplay",title:"Autoplay",description:"Autoplay of videos on web pages is a highly discussed topic.",source:"@site/docs/nanoplayer/nanoplayer_autoplay.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_autoplay",permalink:"/docs/nanoplayer/nanoplayer_autoplay",draft:!1,tags:[],version:"current",lastUpdatedAt:1711640284,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"nanoplayer_autoplay",title:"Autoplay",sidebar_label:"Autoplay"},sidebar:"H5Live Player",previous:{title:"iframe Embeds",permalink:"/docs/nanoplayer/nanoplayer_iframe"},next:{title:"Fast playback start",permalink:"/docs/nanoplayer/nanoplayer_feature_fast_start"}},p={},u=[{value:"Autoplay and audio configuration",id:"autoplay-and-audio-configuration",level:2},{value:"How can you achieve autoplay on web pages with H5Live player?",id:"how-can-you-achieve-autoplay-on-web-pages-with-h5live-player",level:3},{value:"Autoplay and iOS low power mode",id:"autoplay-and-ios-low-power-mode",level:2}],y={toc:u},s="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(s,(0,o.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Autoplay of videos on web pages is a highly discussed topic.\nDoes it improve or reduce user experience? "),(0,n.yg)("h2",{id:"autoplay-and-audio-configuration"},"Autoplay and audio configuration"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Autoplay of video and audio streams is now only supported with ",(0,n.yg)("em",{parentName:"p"},"muted")," audio (silent)! ",(0,n.yg)("br",null),"\nWhen audio is not muted, the video would just not play.")),(0,n.yg)("p",null,"This is a restriction introduced by all large browser vendors, and it requires fine-tuned configuration for web developers."),(0,n.yg)("p",null,"From the Google web page:"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Chrome's autoplay policies have changed in April 2018 and this is going to affect video playback with sound. Spoiler alert: users are going to love it!")),(0,n.yg)("h3",{id:"how-can-you-achieve-autoplay-on-web-pages-with-h5live-player"},"How can you achieve autoplay on web pages with H5Live player?"),(0,n.yg)("p",null,"With autoplay and automute enabled the player will attempt to start the playback unmuted.\nIf this fails due to browser autoplay policy restrictions the playback will be started muted."),(0,n.yg)("p",null,"Configuring auto mute in nanoStream H5live Player:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"config.playback.autoplay=true;\nconfig.playback.automute=true;\nconfig.playback.muted=false;\n")),(0,n.yg)("p",null,"or"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'var config = {\n    "source": {\n        // ...\n    },\n    "playback": {\n        "autoplay": true,\n        "automute": true,\n        "muted": false\n    }\n    // ...\n};\n')),(0,n.yg)("admonition",{title:"More information regarding autoplay",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Learn more about the autoplay policy changes on the ",(0,n.yg)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/09/autoplay-policy-changes"},"Chrome web page")," ",(0,n.yg)("br",null),"\nRead more on this blogpost about the autoplay policy changes for ",(0,n.yg)("a",{parentName:"p",href:"https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/"},"Webkit / Safari web page"))),(0,n.yg)("h2",{id:"autoplay-and-ios-low-power-mode"},"Autoplay and iOS low power mode"),(0,n.yg)("p",null,"Due to iOS security policies implemented by Apple themselves, in low power mode, it is required to have a user interaction to start the playback. This behavior is expected even if muted - there are no exceptions in low power mode.\nAs the playback is denied without the user gesture, the ",(0,n.yg)("inlineCode",{parentName:"p"},"1005")," error is thrown (Playback must be initialized by user gesture).\nIt is recommended not to attempt a recovery for ",(0,n.yg)("inlineCode",{parentName:"p"},"1005"),' error but to find a workaround, i.e ask the user to "tap to play" instead.'))}c.isMDXComponent=!0}}]);