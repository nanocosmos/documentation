"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4543],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,y=d["".concat(m,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"nanoplayer_embed_detailed",title:"Embed detailed"},o=void 0,i={unversionedId:"nanoplayer/nanoplayer_embed_detailed",id:"nanoplayer/nanoplayer_embed_detailed",title:"Embed detailed",description:"Player Embed v1.3.3",source:"@site/docs/nanoplayer/nanoplayer_embed_detailed.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_embed_detailed",permalink:"/docs/nanoplayer/nanoplayer_embed_detailed",draft:!1,tags:[],version:"current",lastUpdatedAt:1696845431,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"nanoplayer_embed_detailed",title:"Embed detailed"}},m={},p=[{value:"Player Embed v1.3.3",id:"player-embed-v133",level:2},{value:"Implementation with iFrame",id:"implementation-with-iframe",level:3},{value:"Template example",id:"template-example",level:4},{value:"Example with Nanocosmos Test Stream",id:"example-with-nanocosmos-test-stream",level:4},{value:"New in v1.3.3",id:"new-in-v133",level:3},{value:"New in v1.3.2",id:"new-in-v132",level:3},{value:"New in v1.3.1",id:"new-in-v131",level:3},{value:"New in v1.3.0",id:"new-in-v130",level:3},{value:"New in v1.2.0",id:"new-in-v120",level:3},{value:"URLs with latency control modes",id:"urls-with-latency-control-modes",level:4},{value:"Example URLs for embed player v1.3.3",id:"example-urls-for-embed-player-v133",level:4},{value:"Configuration via URL parameters",id:"configuration-via-url-parameters",level:3},{value:"Not supported",id:"not-supported",level:3}],s={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"player-embed-v133"},"Player Embed v1.3.3"),(0,r.kt)("p",null,"The version of the embed is related to the embed application code, current version is 1.3.3.\nThe embed is using the latest player version which is always available at this location: ",(0,r.kt)("a",{parentName:"p",href:"https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6"},"latest 4.x"),"."),(0,r.kt)("h3",{id:"implementation-with-iframe"},"Implementation with iFrame"),(0,r.kt)("h4",{id:"template-example"},"Template example"),(0,r.kt)("p",null,"In the following example the ",(0,r.kt)("inlineCode",{parentName:"p"},"streamname")," value has to be replaced:"),(0,r.kt)("p",null,"Link: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY" frameborder="0" allowfullscreen width="1280" height="720"></iframe>\n')),(0,r.kt)("p",null,"iFrame src has to direct to the embedded player ( ",(0,r.kt)("inlineCode",{parentName:"p"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY")," ). It is necessary to add the query (like ",(0,r.kt)("inlineCode",{parentName:"p"},"entry.rtmp")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"streamname"),", else the embedded player will be set but won't run without the stream)!"),(0,r.kt)("h4",{id:"example-with-nanocosmos-test-stream"},"Example with Nanocosmos Test Stream"),(0,r.kt)("p",null,"Test stream is ",(0,r.kt)("inlineCode",{parentName:"p"},"streamname=HX26g-NRbx9")),(0,r.kt)("p",null,"Link: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9" frameborder="0" allowfullscreen width="1280" height="720"></iframe>\n')),(0,r.kt)("h3",{id:"new-in-v133"},"New in v1.3.3"),(0,r.kt)("p",null,"Wait until container is ready before creating the player at iframes ",(0,r.kt)("inlineCode",{parentName:"p"},"DOMContenLoaded"),"."),(0,r.kt)("h3",{id:"new-in-v132"},"New in v1.3.2"),(0,r.kt)("p",null,"Using nanoplayer.4.min.js instead of static nanoplayer.4.18.0.min.js again."),(0,r.kt)("h3",{id:"new-in-v131"},"New in v1.3.1"),(0,r.kt)("p",null,"Added support for stream group configuration and secure JSON Web Token introduced in nanoStream H5Live Player Version 4.18.x."),(0,r.kt)("h3",{id:"new-in-v130"},"New in v1.3.0"),(0,r.kt)("p",null,"Added player metrics configuration support."),(0,r.kt)("h3",{id:"new-in-v120"},"New in v1.2.0"),(0,r.kt)("p",null,"Following the nanoStream H5Live Player Version 4.14.x release where two new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/"},"latency control modes")," have been added, it is possible to use them within Player Embed since v1.2.0. The default value is set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"classic"')," and doesn't require passing any parameter. To change to any of the adaptive modes, it is necessary to pass the desired value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"playback.latencyControlMode")," object via URL params."),(0,r.kt)("p",null,"Values: ",(0,r.kt)("inlineCode",{parentName:"p"},'"classic"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"balancedadaptive"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"fastadaptive"'),"."),(0,r.kt)("h4",{id:"urls-with-latency-control-modes"},"URLs with latency control modes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default mode:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic")))),(0,r.kt)("li",{parentName:"ul"},"latency control mode set to ",(0,r.kt)("inlineCode",{parentName:"li"},'"balancedadaptive"'),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive")))),(0,r.kt)("li",{parentName:"ul"},"latency control mode set to ",(0,r.kt)("inlineCode",{parentName:"li"},'"fastadaptive"'),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," Latency control modes are not available in Player Embed prior to v1.2.0."),(0,r.kt)("h4",{id:"example-urls-for-embed-player-v133"},"Example URLs for embed player v1.3.3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"single stream minimal:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"latency control mode:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"abr/multi stream:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"autoplay/mute setting:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UI related: fullScreenControl, displayMutedAutoplay, backgroundColor and poster"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png"))))),(0,r.kt)("h3",{id:"configuration-via-url-parameters"},"Configuration via URL parameters"),(0,r.kt)("p",null,"For embedded player the configuration is set via URL parameters. These params are mapped with the Player ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode"},"config")," params, however in URL  the dot notation is being used for object values. For all objects the object name has to be included, expect from ",(0,r.kt)("inlineCode",{parentName:"p"},"config.source"),"."),(0,r.kt)("p",null,"Supported query params:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"general parameters from ",(0,r.kt)("inlineCode",{parentName:"li"},"config.source")," object (without ",(0,r.kt)("inlineCode",{parentName:"li"},"source")," as prefix) e.g.:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaults.service=bintu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startIndex=2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.adaption.rule=deviationOfMean2")))),(0,r.kt)("li",{parentName:"ul"},"entries from ",(0,r.kt)("inlineCode",{parentName:"li"},"config.source.entries")," array (except ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"label")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"tag"),") e.g.:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entry.rtmp.streamname=**here the streamname**")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entry2.rtmp.streamname=**here the streamname**")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entry3.rtmp.streamname=**here the streamname**")))),(0,r.kt)("li",{parentName:"ul"},"all playback parameters from ",(0,r.kt)("inlineCode",{parentName:"li"},"config.playback")," e.g.:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playback.autoplay=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playback.muted=false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playback.automute=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playback.timeouts.buffering=20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playback.latencyControlMode=classic")," (v1.2.0)"))),(0,r.kt)("li",{parentName:"ul"},"all style parameters from ",(0,r.kt)("inlineCode",{parentName:"li"},"config.style")," e.g.:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style.fullScreenControl=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style.displayMutedAutoplay=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style.backgroundColor=black")))),(0,r.kt)("li",{parentName:"ul"},"all tweaks parameters from ",(0,r.kt)("inlineCode",{parentName:"li"},"config.tweaks")," (have to be given in a complete set) e.g.:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tweaks.buffer.limit=1.7")))),(0,r.kt)("li",{parentName:"ul"},"all metrics parameters from ",(0,r.kt)("inlineCode",{parentName:"li"},"config.metrics")," e.g.:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics.accountKey=**here the account key**")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics.accountId=**here the account id**"))))),(0,r.kt)("p",null,"Read more about how to use: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics"},"metrics"),"."),(0,r.kt)("h3",{id:"not-supported"},"Not supported"),(0,r.kt)("p",null,"Player config which is not supported in embed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"secure playback with referer binding")))}c.isMDXComponent=!0}}]);