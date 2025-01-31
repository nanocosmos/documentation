"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["6123"],{75923:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"cloud/support","title":"Support","description":"Support Options","source":"@site/docs/cloud/support.md","sourceDirName":"cloud","slug":"/cloud/support","permalink":"/docs/cloud/support","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"id":"support","title":"Support","sidebar_label":"Support"},"sidebar":"nanoStream Cloud","previous":{"title":"Network Diagnostics","permalink":"/docs/cloud/network-diagnostics"}}'),t=o("85893"),r=o("50065");let i={id:"support",title:"Support",sidebar_label:"Support"},a=void 0,l={},d=[{value:"Support Options",id:"support-options",level:2},{value:"Live Stream Information",id:"live-stream-information",level:2},{value:"Additional information for player issues",id:"additional-information-for-player-issues",level:2},{value:"Test Player",id:"test-player",level:2},{value:"Geo Locations",id:"geo-locations",level:2},{value:"nanoStream Cloud Public URLs",id:"nanostream-cloud-public-urls",level:2},{value:"Standard URLs, geo-loadbalanced:",id:"standard-urls-geo-loadbalanced",level:3},{value:"Geo Region Override",id:"geo-region-override",level:3},{value:"Primary host URLs",id:"primary-host-urls",level:3},{value:"Additional Help",id:"additional-help",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"support-options",children:"Support Options"}),"\n",(0,t.jsxs)(n.p,{children:["If you experience any issues or have questions, there are certain ways to do some diagnostics on your end.\nIf you do not find a solution, please create a ",(0,t.jsx)(n.a,{href:"https://www.nanocosmos.de/support",children:"support ticket"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To check your network connectivity, please read our ",(0,t.jsx)(n.a,{href:"network-diagnostics",children:"network diagnostics"})," information page."]}),"\n",(0,t.jsx)(n.h2,{id:"live-stream-information",children:"Live Stream Information"}),"\n",(0,t.jsx)(n.p,{children:"A live stream in nanoStream Cloud is identified by either a bintu stream ID or stream name.\nFor any issues you report to us, please add"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the stream name and ID"}),"\n",(0,t.jsx)(n.li,{children:"your live camera and encoder configuration"}),"\n",(0,t.jsx)(n.li,{children:"your player page or a link to our demo player"}),"\n",(0,t.jsx)(n.li,{children:"the time of the issue, UTC time, and if it happens frequently"}),"\n",(0,t.jsx)(n.li,{children:"your geo location of live encoding and playback"}),"\n",(0,t.jsxs)(n.li,{children:["the result of the ",(0,t.jsx)(n.a,{href:"network-diagnostics",children:"network diagnostics"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-information-for-player-issues",children:"Additional information for player issues"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Does the issue happen on all of your test streams and sessions?"}),"\n",(0,t.jsx)(n.li,{children:"Please check your live encoder configuration: try lower bitrate and keyframe distance 2s"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"test-player",children:"Test Player"}),"\n",(0,t.jsx)(n.p,{children:"You can use our demo/test player for verifying your playback."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example URL"}),": ",(0,t.jsx)(n.a,{href:"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY",children:"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY"})]}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"h5live.rtmp.streamname=XXXXX-YYYYY"})," with your bintu stream name."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also predefine a specific geo location for playback. ",(0,t.jsx)(n.br,{}),"\nReplace ",(0,t.jsx)(n.code,{children:"h5live.server=bintu-play.nanocosmos.de"})," with one of the locations mentioned below."]}),"\n",(0,t.jsx)(n.admonition,{title:"Example playback from US East",type:"tip",children:(0,t.jsxs)(n.p,{children:["Location: ",(0,t.jsx)(n.code,{children:"bintu-play-use.nanocosmos.de"}),"\n",(0,t.jsx)(n.a,{href:"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play-use.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY",children:"https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play-use.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY"})]})}),"\n",(0,t.jsx)(n.h2,{id:"geo-locations",children:"Geo Locations"}),"\n",(0,t.jsx)(n.p,{children:"By default, the URLs you get from our system are load-balanced between different geo locations. This means you will land on different servers close to your location."}),"\n",(0,t.jsx)(n.p,{children:"You can override the geo location detection for both encoding/ingest and playback."}),"\n",(0,t.jsx)(n.admonition,{title:"note",type:"info",children:(0,t.jsx)(n.p,{children:"In general overriding the default URL is not required and most of the time not recommended."})}),"\n",(0,t.jsx)(n.h2,{id:"nanostream-cloud-public-urls",children:"nanoStream Cloud Public URLs"}),"\n",(0,t.jsx)(n.h3,{id:"standard-urls-geo-loadbalanced",children:"Standard URLs, geo-loadbalanced:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Playback"}),": bintu-play.nanocosmos.de ",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Ingest"}),": bintu-stream.nanocosmos.de"]}),"\n",(0,t.jsx)(n.h3,{id:"geo-region-override",children:"Geo Region Override"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Geo region"}),(0,t.jsx)(n.th,{children:"URL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-play from EU"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-play-eu.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-stream (ingest) from EU"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-stream-eu.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-play from US East"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-play-use.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-stream (ingest) from US East"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-stream-use.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-play from US West"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-play-usw.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-stream (ingest) from US West"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-stream-usw.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-play from Asia South"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-play-ass.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-stream (ingest) from Asia South"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-stream-ass.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-play from Australia"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-play-au.nanocosmos.de"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bintu-stream (ingest) from Australia"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bintu-stream-au.nanocosmos.de"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"primary-host-urls",children:"Primary host URLs"}),"\n",(0,t.jsx)(n.p,{children:"If you need to test with specific hosts, please contact us.\nPrimary host URLs will only be shared on request."}),"\n",(0,t.jsx)(n.h2,{id:"additional-help",children:"Additional Help"}),"\n",(0,t.jsxs)(n.p,{children:["There are other secondary regions like South America, Turkey, Japan, Hongkong. ",(0,t.jsx)(n.br,{}),"\nPlease ",(0,t.jsx)(n.a,{href:"https://www.nanocosmos.de/support",children:"create a support ticket"})," for additional help."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return i}});var s=o(67294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);