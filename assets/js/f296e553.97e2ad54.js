"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7092],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>u});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=t.createContext({}),p=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=p(e.components);return t.createElement(m.Provider,{value:a},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,u=s["".concat(m,".").concat(c)]||s[c]||d[c]||l;return n?t.createElement(u,o(o({ref:a},y),{},{components:n})):t.createElement(u,o({ref:a},y))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18134:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const l={id:"nanoplayer_embed_detailed",title:"Embed detailed"},o=void 0,i={unversionedId:"nanoplayer/nanoplayer_embed_detailed",id:"nanoplayer/nanoplayer_embed_detailed",title:"Embed detailed",description:"Player Embed v1.3.3",source:"@site/docs/nanoplayer/nanoplayer_embed_detailed.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_embed_detailed",permalink:"/docs/nanoplayer/nanoplayer_embed_detailed",draft:!1,tags:[],version:"current",lastUpdatedAt:1712137628,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{id:"nanoplayer_embed_detailed",title:"Embed detailed"}},m={},p=[{value:"Player Embed v1.3.3",id:"player-embed-v133",level:2},{value:"Implementation with iFrame",id:"implementation-with-iframe",level:3},{value:"Template example",id:"template-example",level:4},{value:"Example with Nanocosmos Test Stream",id:"example-with-nanocosmos-test-stream",level:4},{value:"New in v1.3.3",id:"new-in-v133",level:3},{value:"New in v1.3.2",id:"new-in-v132",level:3},{value:"New in v1.3.1",id:"new-in-v131",level:3},{value:"New in v1.3.0",id:"new-in-v130",level:3},{value:"New in v1.2.0",id:"new-in-v120",level:3},{value:"URLs with latency control modes",id:"urls-with-latency-control-modes",level:4},{value:"Example URLs for embed player v1.3.3",id:"example-urls-for-embed-player-v133",level:4},{value:"Configuration via URL parameters",id:"configuration-via-url-parameters",level:3},{value:"Not supported",id:"not-supported",level:3}],y={toc:p},s="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(s,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"player-embed-v133"},"Player Embed v1.3.3"),(0,r.yg)("p",null,"The version of the embed is related to the embed application code, current version is 1.3.3.\nThe embed is using the latest player version which is always available at this location: ",(0,r.yg)("a",{parentName:"p",href:"https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6"},"latest 4.x"),"."),(0,r.yg)("h3",{id:"implementation-with-iframe"},"Implementation with iFrame"),(0,r.yg)("h4",{id:"template-example"},"Template example"),(0,r.yg)("p",null,"In the following example the ",(0,r.yg)("inlineCode",{parentName:"p"},"streamname")," value has to be replaced:"),(0,r.yg)("p",null,"Link: ",(0,r.yg)("inlineCode",{parentName:"p"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY" frameborder="0" allowfullscreen width="1280" height="720"></iframe>\n')),(0,r.yg)("p",null,"iFrame src has to direct to the embedded player ( ",(0,r.yg)("inlineCode",{parentName:"p"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY")," ). It is necessary to add the query (like ",(0,r.yg)("inlineCode",{parentName:"p"},"entry.rtmp")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"streamname"),", else the embedded player will be set but won't run without the stream)!"),(0,r.yg)("h4",{id:"example-with-nanocosmos-test-stream"},"Example with Nanocosmos Test Stream"),(0,r.yg)("p",null,"Test stream is ",(0,r.yg)("inlineCode",{parentName:"p"},"streamname=HX26g-NRbx9")),(0,r.yg)("p",null,"Link: ",(0,r.yg)("inlineCode",{parentName:"p"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9" frameborder="0" allowfullscreen width="1280" height="720"></iframe>\n')),(0,r.yg)("h3",{id:"new-in-v133"},"New in v1.3.3"),(0,r.yg)("p",null,"Wait until container is ready before creating the player at iframes ",(0,r.yg)("inlineCode",{parentName:"p"},"DOMContenLoaded"),"."),(0,r.yg)("h3",{id:"new-in-v132"},"New in v1.3.2"),(0,r.yg)("p",null,"Using nanoplayer.4.min.js instead of static nanoplayer.4.18.0.min.js again."),(0,r.yg)("h3",{id:"new-in-v131"},"New in v1.3.1"),(0,r.yg)("p",null,"Added support for stream group configuration and secure JSON Web Token introduced in nanoStream H5Live Player Version 4.18.x."),(0,r.yg)("h3",{id:"new-in-v130"},"New in v1.3.0"),(0,r.yg)("p",null,"Added player metrics configuration support."),(0,r.yg)("h3",{id:"new-in-v120"},"New in v1.2.0"),(0,r.yg)("p",null,"Following the nanoStream H5Live Player Version 4.14.x release where two new ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/"},"latency control modes")," have been added, it is possible to use them within Player Embed since v1.2.0. The default value is set to ",(0,r.yg)("inlineCode",{parentName:"p"},'"classic"')," and doesn't require passing any parameter. To change to any of the adaptive modes, it is necessary to pass the desired value in the ",(0,r.yg)("inlineCode",{parentName:"p"},"playback.latencyControlMode")," object via URL params."),(0,r.yg)("p",null,"Values: ",(0,r.yg)("inlineCode",{parentName:"p"},'"classic"'),", ",(0,r.yg)("inlineCode",{parentName:"p"},'"balancedadaptive"'),", ",(0,r.yg)("inlineCode",{parentName:"p"},'"fastadaptive"'),"."),(0,r.yg)("h4",{id:"urls-with-latency-control-modes"},"URLs with latency control modes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"default mode:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic")))),(0,r.yg)("li",{parentName:"ul"},"latency control mode set to ",(0,r.yg)("inlineCode",{parentName:"li"},'"balancedadaptive"'),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive")))),(0,r.yg)("li",{parentName:"ul"},"latency control mode set to ",(0,r.yg)("inlineCode",{parentName:"li"},'"fastadaptive"'),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Important:")," Latency control modes are not available in Player Embed prior to v1.2.0."),(0,r.yg)("h4",{id:"example-urls-for-embed-player-v133"},"Example URLs for embed player v1.3.3"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"single stream minimal:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"latency control mode:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"abr/multi stream:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"autoplay/mute setting:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"UI related: fullScreenControl, displayMutedAutoplay, backgroundColor and poster"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png"},"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png"))))),(0,r.yg)("h3",{id:"configuration-via-url-parameters"},"Configuration via URL parameters"),(0,r.yg)("p",null,"For embedded player the configuration is set via URL parameters. These params are mapped with the Player ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode"},"config")," params, however in URL  the dot notation is being used for object values. For all objects the object name has to be included, expect from ",(0,r.yg)("inlineCode",{parentName:"p"},"config.source"),"."),(0,r.yg)("p",null,"Supported query params:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"general parameters from ",(0,r.yg)("inlineCode",{parentName:"li"},"config.source")," object (without ",(0,r.yg)("inlineCode",{parentName:"li"},"source")," as prefix) e.g.:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"defaults.service=bintu")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"startIndex=2")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"options.adaption.rule=deviationOfMean2")))),(0,r.yg)("li",{parentName:"ul"},"entries from ",(0,r.yg)("inlineCode",{parentName:"li"},"config.source.entries")," array (except ",(0,r.yg)("inlineCode",{parentName:"li"},"info"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"label")," & ",(0,r.yg)("inlineCode",{parentName:"li"},"tag"),") e.g.:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"entry.rtmp.streamname=**here the streamname**")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"entry2.rtmp.streamname=**here the streamname**")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"entry3.rtmp.streamname=**here the streamname**")))),(0,r.yg)("li",{parentName:"ul"},"all playback parameters from ",(0,r.yg)("inlineCode",{parentName:"li"},"config.playback")," e.g.:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"playback.autoplay=true")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"playback.muted=false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"playback.automute=true")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"playback.timeouts.buffering=20")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"playback.latencyControlMode=classic")," (v1.2.0)"))),(0,r.yg)("li",{parentName:"ul"},"all style parameters from ",(0,r.yg)("inlineCode",{parentName:"li"},"config.style")," e.g.:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"style.fullScreenControl=true")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"style.displayMutedAutoplay=true")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"style.backgroundColor=black")))),(0,r.yg)("li",{parentName:"ul"},"all tweaks parameters from ",(0,r.yg)("inlineCode",{parentName:"li"},"config.tweaks")," (have to be given in a complete set) e.g.:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"tweaks.buffer.limit=1.7")))),(0,r.yg)("li",{parentName:"ul"},"all metrics parameters from ",(0,r.yg)("inlineCode",{parentName:"li"},"config.metrics")," e.g.:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"metrics.accountKey=**here the account key**")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"metrics.accountId=**here the account id**"))))),(0,r.yg)("p",null,"Read more about how to use: ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics"},"metrics"),"."),(0,r.yg)("h3",{id:"not-supported"},"Not supported"),(0,r.yg)("p",null,"Player config which is not supported in embed:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"secure playback with referer binding")))}d.isMDXComponent=!0}}]);