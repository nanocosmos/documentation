"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["703"],{52693:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>i,contentTitle:()=>o});var r=JSON.parse('{"id":"nanoplayer/nanoplayer_embed_detailed","title":"Embed detailed","description":"Player Embed v1.3.3","source":"@site/docs/nanoplayer/nanoplayer_embed_detailed.md","sourceDirName":"nanoplayer","slug":"/nanoplayer/nanoplayer_embed_detailed","permalink":"/docs/nanoplayer/nanoplayer_embed_detailed","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1742310768000,"frontMatter":{"id":"nanoplayer_embed_detailed","title":"Embed detailed"}}'),l=a("85893"),t=a("50065");let s={id:"nanoplayer_embed_detailed",title:"Embed detailed"},o=void 0,d={},i=[{value:"Player Embed v1.3.3",id:"player-embed-v133",level:2},{value:"Implementation with iFrame",id:"implementation-with-iframe",level:3},{value:"Template example",id:"template-example",level:4},{value:"Example with Nanocosmos Test Stream",id:"example-with-nanocosmos-test-stream",level:4},{value:"New in v1.3.3",id:"new-in-v133",level:3},{value:"New in v1.3.2",id:"new-in-v132",level:3},{value:"New in v1.3.1",id:"new-in-v131",level:3},{value:"New in v1.3.0",id:"new-in-v130",level:3},{value:"New in v1.2.0",id:"new-in-v120",level:3},{value:"URLs with latency control modes",id:"urls-with-latency-control-modes",level:4},{value:"Example URLs for embed player v1.3.3",id:"example-urls-for-embed-player-v133",level:4},{value:"Configuration via URL parameters",id:"configuration-via-url-parameters",level:3},{value:"Not supported",id:"not-supported",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"player-embed-v133",children:"Player Embed v1.3.3"}),"\n",(0,l.jsxs)(n.p,{children:["The version of the embed is related to the embed application code, current version is 1.3.3.\nThe embed is using the latest player version which is always available at this location: ",(0,l.jsx)(n.a,{href:"https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6",children:"latest 4.x"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"implementation-with-iframe",children:"Implementation with iFrame"}),"\n",(0,l.jsx)(n.h4,{id:"template-example",children:"Template example"}),"\n",(0,l.jsxs)(n.p,{children:["In the following example the ",(0,l.jsx)(n.code,{children:"streamname"})," value has to be replaced:"]}),"\n",(0,l.jsxs)(n.p,{children:["Link: ",(0,l.jsx)(n.code,{children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY" frameborder="0" allowfullscreen width="1280" height="720"></iframe>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["iFrame src has to direct to the embedded player ( ",(0,l.jsx)(n.code,{children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY"})," ). It is necessary to add the query (like ",(0,l.jsx)(n.code,{children:"entry.rtmp"})," with ",(0,l.jsx)(n.code,{children:"streamname"}),", else the embedded player will be set but won't run without the stream)!"]}),"\n",(0,l.jsx)(n.h4,{id:"example-with-nanocosmos-test-stream",children:"Example with Nanocosmos Test Stream"}),"\n",(0,l.jsxs)(n.p,{children:["Test stream is ",(0,l.jsx)(n.code,{children:"streamname=HX26g-NRbx9"})]}),"\n",(0,l.jsxs)(n.p,{children:["Link: ",(0,l.jsx)(n.code,{children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9" frameborder="0" allowfullscreen width="1280" height="720"></iframe>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"new-in-v133",children:"New in v1.3.3"}),"\n",(0,l.jsxs)(n.p,{children:["Wait until container is ready before creating the player at iframes ",(0,l.jsx)(n.code,{children:"DOMContenLoaded"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"new-in-v132",children:"New in v1.3.2"}),"\n",(0,l.jsx)(n.p,{children:"Using nanoplayer.4.min.js instead of static nanoplayer.4.18.0.min.js again."}),"\n",(0,l.jsx)(n.h3,{id:"new-in-v131",children:"New in v1.3.1"}),"\n",(0,l.jsx)(n.p,{children:"Added support for stream group configuration and secure JSON Web Token introduced in nanoStream H5Live Player Version 4.18.x."}),"\n",(0,l.jsx)(n.h3,{id:"new-in-v130",children:"New in v1.3.0"}),"\n",(0,l.jsx)(n.p,{children:"Added player metrics configuration support."}),"\n",(0,l.jsx)(n.h3,{id:"new-in-v120",children:"New in v1.2.0"}),"\n",(0,l.jsxs)(n.p,{children:["Following the nanoStream H5Live Player Version 4.14.x release where two new ",(0,l.jsx)(n.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/",children:"latency control modes"})," have been added, it is possible to use them within Player Embed since v1.2.0. The default value is set to ",(0,l.jsx)(n.code,{children:'"classic"'})," and doesn't require passing any parameter. To change to any of the adaptive modes, it is necessary to pass the desired value in the ",(0,l.jsx)(n.code,{children:"playback.latencyControlMode"})," object via URL params."]}),"\n",(0,l.jsxs)(n.p,{children:["Values: ",(0,l.jsx)(n.code,{children:'"classic"'}),", ",(0,l.jsx)(n.code,{children:'"balancedadaptive"'}),", ",(0,l.jsx)(n.code,{children:'"fastadaptive"'}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"urls-with-latency-control-modes",children:"URLs with latency control modes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["default mode:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["latency control mode set to ",(0,l.jsx)(n.code,{children:'"balancedadaptive"'}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["latency control mode set to ",(0,l.jsx)(n.code,{children:'"fastadaptive"'}),":","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Important:"})," Latency control modes are not available in Player Embed prior to v1.2.0."]}),"\n",(0,l.jsx)(n.h4,{id:"example-urls-for-embed-player-v133",children:"Example URLs for embed player v1.3.3"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"single stream minimal:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"latency control mode:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"abr/multi stream:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"autoplay/mute setting:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"UI related: fullScreenControl, displayMutedAutoplay, backgroundColor and poster"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png",children:"https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"configuration-via-url-parameters",children:"Configuration via URL parameters"}),"\n",(0,l.jsxs)(n.p,{children:["For embedded player the configuration is set via URL parameters. These params are mapped with the Player ",(0,l.jsx)(n.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode",children:"config"})," params, however in URL  the dot notation is being used for object values. For all objects the object name has to be included, expect from ",(0,l.jsx)(n.code,{children:"config.source"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Supported query params:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["general parameters from ",(0,l.jsx)(n.code,{children:"config.source"})," object (without ",(0,l.jsx)(n.code,{children:"source"})," as prefix) e.g.:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"defaults.service=bintu"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"startIndex=2"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"options.adaption.rule=deviationOfMean2"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["entries from ",(0,l.jsx)(n.code,{children:"config.source.entries"})," array (except ",(0,l.jsx)(n.code,{children:"info"}),", ",(0,l.jsx)(n.code,{children:"label"})," & ",(0,l.jsx)(n.code,{children:"tag"}),") e.g.:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"entry.rtmp.streamname=**here the streamname**"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"entry2.rtmp.streamname=**here the streamname**"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"entry3.rtmp.streamname=**here the streamname**"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["all playback parameters from ",(0,l.jsx)(n.code,{children:"config.playback"})," e.g.:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"playback.autoplay=true"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"playback.muted=false"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"playback.automute=true"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"playback.timeouts.buffering=20"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"playback.latencyControlMode=classic"})," (v1.2.0)"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["all style parameters from ",(0,l.jsx)(n.code,{children:"config.style"})," e.g.:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"style.fullScreenControl=true"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"style.displayMutedAutoplay=true"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"style.backgroundColor=black"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["all tweaks parameters from ",(0,l.jsx)(n.code,{children:"config.tweaks"})," (have to be given in a complete set) e.g.:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"tweaks.buffer.limit=1.7"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["all metrics parameters from ",(0,l.jsx)(n.code,{children:"config.metrics"})," e.g.:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"metrics.accountKey=**here the account key**"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"metrics.accountId=**here the account id**"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Read more about how to use: ",(0,l.jsx)(n.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics",children:"metrics"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"not-supported",children:"Not supported"}),"\n",(0,l.jsx)(n.p,{children:"Player config which is not supported in embed:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"secure playback with referer binding"}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return s}});var r=a(67294);let l={},t=r.createContext(l);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);