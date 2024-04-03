"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6748],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),y=p(t),c=o,g=y["".concat(s,".").concat(c)]||y[c]||u[c]||i;return t?n.createElement(g,l(l({ref:a},d),{},{components:t})):n.createElement(g,l({ref:a},d))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[y]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},59165:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=t(58168),o=(t(96540),t(15680));const i={id:"faq_h5live_player_adjust_style",title:"Adjust/Styling Questions",sidebar_label:"Adjust/Style"},l=void 0,r={unversionedId:"faq/faq_h5live_player_adjust_style",id:"faq/faq_h5live_player_adjust_style",title:"Adjust/Styling Questions",description:"Questions Overview",source:"@site/docs/faq/faq_h5live_player_adjust_style.md",sourceDirName:"faq",slug:"/faq/faq_h5live_player_adjust_style",permalink:"/docs/faq/faq_h5live_player_adjust_style",draft:!1,tags:[],version:"current",lastUpdatedAt:1712137628,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{id:"faq_h5live_player_adjust_style",title:"Adjust/Styling Questions",sidebar_label:"Adjust/Style"},sidebar:"FAQ",previous:{title:"General",permalink:"/docs/faq/faq_h5live_player_general"},next:{title:"General",permalink:"/docs/faq/faq_WebRTC_general"}},s={},p=[{value:"Questions Overview",id:"questions-overview",level:2},{value:"How to make the player responsive and preserve the aspect ratio?",id:"how-to-make-the-player-responsive-and-preserve-the-aspect-ratio",level:2},{value:"1. Player configuration",id:"1-player-configuration",level:4},{value:"2. Player DIV CSS",id:"2-player-div-css",level:4},{value:"Other aspect ratios",id:"other-aspect-ratios",level:4},{value:"How to embed the player into an iframe element?",id:"how-to-embed-the-player-into-an-iframe-element",level:2},{value:"1. Creating the embedded page including the player on your side",id:"1-creating-the-embedded-page-including-the-player-on-your-side",level:4},{value:"2. Embedding the player page in an iframe on a second page on the distribution side",id:"2-embedding-the-player-page-in-an-iframe-on-a-second-page-on-the-distribution-side",level:4},{value:"Can I use a raw player without built-in controls, animations and styles?",id:"can-i-use-a-raw-player-without-built-in-controls-animations-and-styles",level:2},{value:"Can I customize the inline controls?",id:"can-i-customize-the-inline-controls",level:2},{value:"How to adjust the playout orientation when the broadcast on an iOS device get&#39;s rotated?",id:"how-to-adjust-the-playout-orientation-when-the-broadcast-on-an-ios-device-gets-rotated",level:2},{value:"Can I style the player as audio player?",id:"can-i-style-the-player-as-audio-player",level:2},{value:"Can I play video only or audio only streams?",id:"can-i-play-video-only-or-audio-only-streams",level:2},{value:"Can I use an own external video element?",id:"can-i-use-an-own-external-video-element",level:2},{value:"Can I update the source?",id:"can-i-update-the-source",level:2},{value:"Is a fullscreen functionality available?",id:"is-a-fullscreen-functionality-available",level:2},{value:"Can I use a poster as placeholder for the video?",id:"can-i-use-a-poster-as-placeholder-for-the-video",level:2},{value:"Example",id:"example",level:4},{value:"Can I change the background color of the player?",id:"can-i-change-the-background-color-of-the-player",level:2},{value:"Code example with changed background color",id:"code-example-with-changed-background-color",level:4},{value:"Code example with change in the resolve function of the promise",id:"code-example-with-change-in-the-resolve-function-of-the-promise",level:4},{value:"Code example with changed global CSS rule",id:"code-example-with-changed-global-css-rule",level:4},{value:"Is there a simple code snippet available?",id:"is-there-a-simple-code-snippet-available",level:2},{value:"Can I use the player within a mobile webview?",id:"can-i-use-the-player-within-a-mobile-webview",level:2},{value:"Can I have multiple player instances in one page?",id:"can-i-have-multiple-player-instances-in-one-page",level:2},{value:"How to adjust volume?",id:"how-to-adjust-volume",level:2},{value:"1. iOS",id:"1-ios",level:4},{value:"2. Others",id:"2-others",level:4},{value:"Code example with set volume to 50%",id:"code-example-with-set-volume-to-50",level:4}],d={toc:p},y="wrapper";function u(e){let{components:a,...t}=e;return(0,o.yg)(y,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"questions-overview"},"Questions Overview"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#how-to-make-the-player-responsive-and-preserve-the-aspect-ratio"},"How to make the player responsive and preserve the aspect ratio?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#how-to-embed-the-player-into-an-iframe-element"},"How to embed the player into an iframe element?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-use-a-raw-player-without-built-in-controls-animations-and-styles"},"Can I use a raw player without built-in controls, animations and styles?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-customize-the-inline-controls"},"Can I customize the inline controls?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#how-to-adjust-the-playout-orientation-when-the-broadcast-on-an-ios-device-gets-rotated"},"How to adjust the playout orientation when the broadcast on an iOS device get's rotated?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-style-the-player-as-audio-player"},"Can I style the player as audio player?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-play-video-only-or-audio-only-streams"},"Can I play video only or audio only streams?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-use-an-own-external-video-element"},"Can I use an own external video element?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-update-the-source"},"Can I update the source?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#is-a-fullscreen-functionality-available"},"Is a fullscreen functionality available?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-use-a-poster-as-placeholder-for-the-video"},"Can I use a poster as placeholder for the video?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-change-the-background-color-of-the-player"},"Can I change the background color of the player?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#is-there-a-simple-code-snippet-available"},"Is there a simple code snippet available?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-use-the-player-within-a-mobile-webview"},"Can I use the player within a mobile webview?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#can-i-have-multiple-player-instances-in-one-page"},"Can I have multiple player instances in one page?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#how-to-adjust-volume"},"How to adjust volume?"))),(0,o.yg)("h2",{id:"how-to-make-the-player-responsive-and-preserve-the-aspect-ratio"},"How to make the player responsive and preserve the aspect ratio?"),(0,o.yg)("p",null,"The following example is for a ",(0,o.yg)("strong",{parentName:"p"},"16:9 ratio"),", which can be changed to work for all other aspect ratios."),(0,o.yg)("h4",{id:"1-player-configuration"},"1. Player configuration"),(0,o.yg)("p",null,"Set the ",(0,o.yg)("inlineCode",{parentName:"p"},"style.width")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"style.height")," properties inside the player config to ",(0,o.yg)("inlineCode",{parentName:"p"},"auto")," to  keep the size of the parent container."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'// player config \nvar config = {\n    "style": {\n        "width": "auto",\n        "height": "auto"\n    },\n    ...\n}\n')),(0,o.yg)("h4",{id:"2-player-div-css"},"2. Player DIV CSS"),(0,o.yg)("p",null,"Set a percentage value for ",(0,o.yg)("inlineCode",{parentName:"p"},"padding-bottom")," to maintain the aspect ratio of the players ",(0,o.yg)("inlineCode",{parentName:"p"},"<div>")," element. ",(0,o.yg)("br",null),"\nFor a 16:9 aspect ratio: ",(0,o.yg)("strong",{parentName:"p"},"(9 / 16 = 0.5625) = 56.25%")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-html"},'<body>\n    <div id="playerDiv" style="padding-bottom: 56.25%"></div>\n</body>\n')),(0,o.yg)("h4",{id:"other-aspect-ratios"},"Other aspect ratios"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Aspect ratio"),(0,o.yg)("th",{parentName:"tr",align:null},"padding-bottom"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"1:1"),(0,o.yg)("td",{parentName:"tr",align:null},"100%")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"16:9"),(0,o.yg)("td",{parentName:"tr",align:null},"56.25%")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"4:3"),(0,o.yg)("td",{parentName:"tr",align:null},"75%")))),(0,o.yg)("h2",{id:"how-to-embed-the-player-into-an-iframe-element"},"How to embed the player into an iframe element?"),(0,o.yg)("p",null,"For most use cases the implementation of the player directly into the page is the best option. We recommend embedding the player within an iframe element only when the use case requires it."),(0,o.yg)("h4",{id:"1-creating-the-embedded-page-including-the-player-on-your-side"},"1. Creating the embedded page including the player on your side"),(0,o.yg)("p",null,"Please find information and examples on how to add the player to a webpage ",(0,o.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/"},"here"),"."),(0,o.yg)("h4",{id:"2-embedding-the-player-page-in-an-iframe-on-a-second-page-on-the-distribution-side"},"2. Embedding the player page in an iframe on a second page on the distribution side"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Important:")," The ",(0,o.yg)("inlineCode",{parentName:"p"},"allowfullscreen")," attribute is required if the page wants to support fullscreen video."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-html"},'<iframe \n    id="ifvideo" \n    width="640" \n    height="480" \n    scrolling="no" \n    frameborder="0" \n    allowfullscreen="" \n    src="//yourdomain.com/playerpage.html">\n</iframe>\n')),(0,o.yg)("h2",{id:"can-i-use-a-raw-player-without-built-in-controls-animations-and-styles"},"Can I use a raw player without built-in controls, animations and styles?"),(0,o.yg)("p",null,"Yes, by passing the config property ",(0,o.yg)("inlineCode",{parentName:"p"},"config.style.view = false"),"."),(0,o.yg)("p",null,"The view is the top level UI layer containing all built-in controls, animations and styles including automatic video scaling.\nDisabling the view will disable these features as well which is why this is recommended for experienced users only."),(0,o.yg)("p",null,"If you want to disable certain parts of the view (eg. controls) keep the ",(0,o.yg)("inlineCode",{parentName:"p"},"config.style.view")," enabled and disable the specific property"),(0,o.yg)("p",null,"Example to disable inline controls:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'"style": {\n    "view": true // default,\n    "controls": false\n}\n')),(0,o.yg)("p",null,"You can find more information regarding config properties in our API docs ",(0,o.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_api/#NanoPlayer..config"},"here"),"."),(0,o.yg)("admonition",{title:"Important",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you create custom controls or other overlay elements make sure to set the ",(0,o.yg)("inlineCode",{parentName:"p"},"z-index")," value > 1 to ensure they are positioned on top of the video layer.")),(0,o.yg)("h2",{id:"can-i-customize-the-inline-controls"},"Can I customize the inline controls?"),(0,o.yg)("p",null,"Yes, of course. To adjust the inline controls please follow our customization guideline ",(0,o.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_feature_customization/#built-in-controls-animations-and-styles"},"here")),(0,o.yg)("p",null,"In case you would like to disable them, it is enough to pass false in ",(0,o.yg)("inlineCode",{parentName:"p"},"config.style.controls"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"config.style.controls = false;\n")),(0,o.yg)("admonition",{title:"Important",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you create custom controls or other overlay elements make sure to set the ",(0,o.yg)("inlineCode",{parentName:"p"},"z-index")," value > 10 to ensure they are positioned on top of the video layer.")),(0,o.yg)("h2",{id:"how-to-adjust-the-playout-orientation-when-the-broadcast-on-an-ios-device-gets-rotated"},"How to adjust the playout orientation when the broadcast on an iOS device get's rotated?"),(0,o.yg)("admonition",{title:"Note",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The iPhone and iPad send the stream with the initial orientation of the device. Meaning, if you rotate the device the stream is rotated which is a technical restriction that we can not change.")),(0,o.yg)("p",null,"In order to have live rotation on the player side, we send rotation ",(0,o.yg)("strong",{parentName:"p"},"metadata")," to the player to adjust the playback to the rotation.\nTo receive metadata on the player side simply enable it within your player config:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'"playback": {\n    "metadata": true\n},\n')),(0,o.yg)("h2",{id:"can-i-style-the-player-as-audio-player"},"Can I style the player as audio player?"),(0,o.yg)("p",null,"Yes, you can style the player as audio player by passing"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"config.style.audioPlayer = true;\n")),(0,o.yg)("h2",{id:"can-i-play-video-only-or-audio-only-streams"},"Can I play video only or audio only streams?"),(0,o.yg)("p",null,"Yes."),(0,o.yg)("h2",{id:"can-i-use-an-own-external-video-element"},"Can I use an own external video element?"),(0,o.yg)("p",null,"Yes, by passing the ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," attribute of an existing html5 video element through the config property ",(0,o.yg)("inlineCode",{parentName:"p"},"playback.videoId"),". The video will be inserted into the players container and existing styles will be overwritten and restored after a destroy."),(0,o.yg)("admonition",{title:"Important",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Since introducing player version ",(0,o.yg)("strong",{parentName:"p"},"4.4")," with seamless stream switching on iOS & iPadOS, ",(0,o.yg)("strong",{parentName:"p"},"2")," video elements are needed internally. So for special use cases where existing video tags need to be used for playback an ",(0,o.yg)("inlineCode",{parentName:"p"},"array")," of maximal two element Ids can be provided via the ",(0,o.yg)("inlineCode",{parentName:"p"},"playback.videoId")," config property (",(0,o.yg)("strong",{parentName:"p"},"NOT mandatory"),")"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"if 0 Ids are provided 2 video elements will be created internally"),(0,o.yg)("li",{parentName:"ul"},"if 1 Id is provided the other video element will be created internally")),(0,o.yg)("p",{parentName:"admonition"},"You can find more information regarding the ",(0,o.yg)("inlineCode",{parentName:"p"},"playback.videoId")," and other config properties in our ",(0,o.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_api/#NanoPlayer..config"},"API docs"),".")),(0,o.yg)("h2",{id:"can-i-update-the-source"},"Can I update the source?"),(0,o.yg)("p",null,"Yes, by executing the player\u2019s function ",(0,o.yg)("inlineCode",{parentName:"p"},"updateSource")," with an updated ",(0,o.yg)("inlineCode",{parentName:"p"},"config.source")," object."),(0,o.yg)("h2",{id:"is-a-fullscreen-functionality-available"},"Is a fullscreen functionality available?"),(0,o.yg)("p",null,"Yes. Fullscreen is available over the public ",(0,o.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_feature_fullscreen_api"},"fullscreen API")," or over the bottom right fullscreen button in the built-in H5live player control bar."),(0,o.yg)("h2",{id:"can-i-use-a-poster-as-placeholder-for-the-video"},"Can I use a poster as placeholder for the video?"),(0,o.yg)("p",null,"Since the ",(0,o.yg)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.9.1")," it is possible.\nPoster images, which are displayed while the video element is loading, are supported and can be added in the ",(0,o.yg)("inlineCode",{parentName:"p"},"config.style.poster"),". The string has to be a relative or absolute path to a valid image source like ",(0,o.yg)("inlineCode",{parentName:"p"},'"./assets/poster.png"')," or image URL."),(0,o.yg)("h4",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'"style": {\n    "poster": "https://[yourdomain]/assets/niceimage.png"\n}\n')),(0,o.yg)("p",null,"However, if you prefer to use other version of H5Live Player, you cannot set poster in this way. Alternatively, you can use a workaround by passing the id of an existing video tag with poster through the config (",(0,o.yg)("inlineCode",{parentName:"p"},"config.playback.videoId"),"). This video element would be used by the player instead of creating a new one. See ",(0,o.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_api/#NanoPlayer..config"},"here"),"."),(0,o.yg)("p",null,"Another possibility can be that you grab the video element from the DOM after successful setup and then modify the poster attribute."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'var video = document.querySelector("#playerDiv video");\nvideo.poster = ....;\n')),(0,o.yg)("h2",{id:"can-i-change-the-background-color-of-the-player"},"Can I change the background color of the player?"),(0,o.yg)("p",null,"To change the background color of the player set the backgroundColor parameter in ",(0,o.yg)("inlineCode",{parentName:"p"},"config.style.backgroundColor")," to the desired color. By default it is set to black."),(0,o.yg)("h4",{id:"code-example-with-changed-background-color"},"Code example with changed background color"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'"style": {\n    "backgroundColor": \'white\'\n}\n')),(0,o.yg)("p",null,"However, if you prefer to use older version of ",(0,o.yg)("strong",{parentName:"p"},"nanoStream H5Live Player"),", then there is no way to configure the background-color of the video element, but you can have workarounds. You can select the video in the resolve function of the promise (see the sample) and then change the color or you can create a global CSS rule for video elements. Please see the following examples."),(0,o.yg)("h4",{id:"code-example-with-change-in-the-resolve-function-of-the-promise"},"Code example with change in the resolve function of the promise"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'var player; \n  var config = {\n    "source": {\n        "bintu": {\n            "apiurl": "https://bintu.nanocosmos.de",\n            "streamid": "236af21e-fbf3-4ba3-889c-343ef3f0e7ca"\n        }\n    },\n   "playback": {\n      "autoplay": true,\n      "automute": true,\n      "muted": false\n  },\n  "style": {\n      "controls": true,\n      "width": "auto",\n      "height": "auto",    \n      }\n};\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n    player = new NanoPlayer("playerDiv");\n    player.setup(config).then(function (config) {\n        console.log("setup success");\n        console.log("config: " + JSON.stringify(config, undefined, 4));\n        var video = document.querySelector(\'#playerDiv video\');\n        video.style.backgroundColor = \'#123456\';\n    }, function (error) {\n        alert(error.message);\n    });\n});\n')),(0,o.yg)("h4",{id:"code-example-with-changed-global-css-rule"},"Code example with changed global CSS rule"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-html"},"<style>\n    video {\n        background-color: #123456;\n    }\n</style>\n")),(0,o.yg)("h2",{id:"is-there-a-simple-code-snippet-available"},"Is there a simple code snippet available?"),(0,o.yg)("p",null,"Yes. Please check out the ",(0,o.yg)("a",{parentName:"p",href:"../nanoplayer/nanoplayer_getting_started"},"Getting started")," topic in the documentation."),(0,o.yg)("h2",{id:"can-i-use-the-player-within-a-mobile-webview"},"Can I use the player within a mobile webview?"),(0,o.yg)("p",null,"Yes. Some mobile webviews require configuration flags to be set on the app level\nto allow, e.g. inline playback or playback without user interaction (autoplay)."),(0,o.yg)("admonition",{title:"Examples",type:"info"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"iOS"),": allowsInlineMediaPlayback, mediaTypesRequiringUserActionForPlayback ",(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"Android"),": setMediaPlaybackRequiresUserGesture")),(0,o.yg)("p",null,"Please check the documentation of the webview component."),(0,o.yg)("h2",{id:"can-i-have-multiple-player-instances-in-one-page"},"Can I have multiple player instances in one page?"),(0,o.yg)("p",null,"Yes. Please check out the nanoplayer-multi sample in the player package."),(0,o.yg)("h2",{id:"how-to-adjust-volume"},"How to adjust volume?"),(0,o.yg)("p",null,"Adjusting volume differs depending on the operational system."),(0,o.yg)("h4",{id:"1-ios"},"1. iOS"),(0,o.yg)("p",null,"Due to Apple policy, setting the volume internally is not possible at the moment. See ",(0,o.yg)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#volume-control-in-javascript/"},"here")," for more informations."),(0,o.yg)("h4",{id:"2-others"},"2. Others"),(0,o.yg)("p",null,"Set the volume with player method ",(0,o.yg)("inlineCode",{parentName:"p"},"'setVolume'")," and pass a float value between 0.0 and 1.0."),(0,o.yg)("h4",{id:"code-example-with-set-volume-to-50"},"Code example with set volume to 50%"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"player.setVolume(0.5)\n")))}u.isMDXComponent=!0}}]);