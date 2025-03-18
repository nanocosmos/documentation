"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["627"],{95513:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"cloud/worldmap","title":"Worldmap","description":"The selected filter options affect all availabe metrics.","source":"@site/docs/cloud/worldmap.md","sourceDirName":"cloud","slug":"/analytics/worldmap","permalink":"/docs/analytics/worldmap","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1742310768000,"frontMatter":{"slug":"/analytics/worldmap","id":"worldmap","title":"Worldmap","sidebar_label":"World Map"},"sidebar":"nanoStream Analytics","previous":{"title":"Analytics Dashboard","permalink":"/docs/analytics/dashboard"},"next":{"title":"Zoom","permalink":"/docs/analytics/zoom"}}'),r=i("85893"),t=i("50065");let s={slug:"/analytics/worldmap",id:"worldmap",title:"Worldmap",sidebar_label:"World Map"},a=void 0,l={},c=[{value:"Country View",id:"country-view",level:2},{value:"World Regions View",id:"world-regions-view",level:2},{value:"Regions Comparison",id:"regions-comparison",level:3},{value:"Zoom Region View",id:"zoom-region-view",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The selected filter options affect all availabe metrics."}),"\n",(0,r.jsx)(n.admonition,{title:"Before starting",type:"info",children:(0,r.jsxs)(n.p,{children:["To begin, please sign in to the ",(0,r.jsx)(n.a,{href:"https://metrics.nanocosmos.de/login",children:"Analytics dashboard"})," using your nanoStream Cloud/Bintu account credentials. ",(0,r.jsx)("br",{}),"\r\nIf you have not created an account yet, you can ",(0,r.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/auth?signup",children:"sign up"})," or reach out to our dedicated sales team via the ",(0,r.jsx)(n.a,{href:"https://www.nanocosmos.de/contact",children:"contact form"})," or by sending an email to sales(at)nanocosmos.de."]})}),"\n",(0,r.jsx)(n.p,{children:"The world map gives an overview where your customers are located and shows statistics per country."}),"\n",(0,r.jsx)(n.admonition,{title:"special case",type:"tip",children:(0,r.jsx)(n.p,{children:"The USA (as a special case) are seperated in different regions, where each region counts individually."})}),"\n",(0,r.jsx)(n.p,{children:"You can choose from the following categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Playout/Ingests"}),": how many streams where ingested and played back"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Buffering Play Ratio"})," (only available with ",(0,r.jsx)(n.a,{href:"./analytics#h5live",children:"H5Live metrics"})," enabled): the ratio between buffer and playback duration over all playouts for a country","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a ratio of 0% means no buffering"}),"\n",(0,r.jsx)(n.li,{children:"a ratio of 100% means no playback was possible"}),"\n",(0,r.jsx)(n.li,{children:"for countries like India with a high number of mobile connections and unstable internet connection, a higher buffering/play ratio compared to other countries is expected"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Latency"})," (only available with ",(0,r.jsx)(n.a,{href:"./analytics#h5live",children:"H5Live metrics"})," enabled): the average playback latency over all playbacks for a country"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Playtime average"})," (only available with ",(0,r.jsx)(n.a,{href:"./analytics#h5live",children:"H5Live metrics"})," enabled): the average playback duration of a playback event, shows how long a viewer will watch a stream"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage"})," (received/sent): the ingest and playback usage (in gigabytes) for a country"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ABR playtime"}),": the playback duration of streams with activated ",(0,r.jsx)(n.strong,{children:'"adaptive bitrate"'})," option enabled"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ABR viewer"}),": the total viewer count of country/region"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ABR switches"}),': the total amount of stream quality level switches for both - "upgrading" and "downgrading"']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The area directly below the world map shows either a Top 10 country tabular list for the selected category or a region comparison chart when in ",(0,r.jsx)(n.strong,{children:"World Regions View"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"country-view",children:"Country View"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Country View"})," you can investigate the TOP 50 countries that apply to your set filter options. These are ranked by the chosen metric, which can be selected right below the View Switch."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Screenshot: World Map Country View",src:i(43577).Z+"",width:"3523",height:"2112"}),"\r\n",(0,r.jsx)(n.em,{children:"Screenshot: World Map Country View"})]}),"\n",(0,r.jsxs)(n.p,{children:["(A) ",(0,r.jsx)(n.code,{children:"View Switch"})," lets you change between ",(0,r.jsx)(n.strong,{children:"Country View"})," and ",(0,r.jsx)(n.strong,{children:"World Regions View"}),". ",(0,r.jsx)("br",{}),"\r\n(B) ",(0,r.jsx)(n.code,{children:"Metric Selection"})," select a metric category. ",(0,r.jsx)("br",{}),"\r\n(C) ",(0,r.jsx)(n.code,{children:"Metric Subswitch"})," lets you choose a ",(0,r.jsx)(n.strong,{children:"sub-metric"})," if the current selected metric has more than one. ",(0,r.jsx)("br",{}),"\r\n(D) ",(0,r.jsx)(n.code,{children:"Legend"})," describes the visible metric data in more detail."]}),"\n",(0,r.jsx)(n.h2,{id:"world-regions-view",children:"World Regions View"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"World Regions View"})," all countries belong to their continental region. The functionalites are basically the same as on ",(0,r.jsx)(n.strong,{children:"Country View"}),", but the corresponding data is shown in the ",(0,r.jsx)(n.strong,{children:"Region Comparison"})," bar chart below the ",(0,r.jsx)(n.strong,{children:"Worldmap"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Screenshot: World Map: Regions View",src:i(58911).Z+"",width:"1837",height:"904"}),"\r\n",(0,r.jsx)(n.em,{children:"Screenshot: World Map: Regions View"})]}),"\n",(0,r.jsx)(n.h3,{id:"regions-comparison",children:"Regions Comparison"}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.strong,{children:"World Regions View"}),' is selected, in this visualization the current selected metric data is shown. The regions are always ranked from "best" to "worst" based on the selected metric.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Screenshot World Map Region Comparison",src:i(4916).Z+"",width:"1854",height:"386"}),"\r\n",(0,r.jsx)(n.em,{children:"Screenshot World Map Region Comparison"})]}),"\n",(0,r.jsxs)(n.p,{children:["(A) ",(0,r.jsx)(n.code,{children:"World Regions"})," - each of the 7 world regions, classified by our server structure. ",(0,r.jsx)(n.strong,{children:"(not continents)"})," ",(0,r.jsx)("br",{}),"\r\n(B) ",(0,r.jsx)(n.code,{children:"Bar Tooltip Description"})," opens up when hovering over one bar of the chart. It gives more detailed information based on the chosen metric. ",(0,r.jsx)("br",{}),"\r\n(C) ",(0,r.jsx)(n.code,{children:"Metric Unit"})," is always located at the x-axis and changes accordingly to the selected metric and the corresponding data. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["If a metric consists of ",(0,r.jsx)(n.strong,{children:"multiple properties"}),", the bar chart adjusts to a stacked bar chart. Hover over a bar to see more detailed information."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Screenshot World Map Region Comparison",src:i(50719).Z+"",width:"1854",height:"386"}),"\r\n",(0,r.jsx)(n.em,{children:"Screenshot World Map Region Comparison"})]}),"\n",(0,r.jsx)(n.h3,{id:"zoom-region-view",children:"Zoom Region View"}),"\n",(0,r.jsxs)(n.p,{children:["Clicking on a region in the ",(0,r.jsx)(n.strong,{children:"World Regions View"}),", lets you zoom in and shows country data of all countries within the selected region. The region comparison bar chart also changes to the Top 10 countries ranking of the selected region."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Screenshot: World Map Region Zoom View",src:i(10046).Z+"",width:"2243",height:"1384"}),"\r\n",(0,r.jsx)(n.em,{children:"Screenshot: World Map Region Zoom View"})]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"Country View"})," the Top 50 ranked countries are marked by a small indicator, while in ",(0,r.jsx)(n.strong,{children:"Zoom Region View"})," all countries are marked. The Top 10 in both cases is explicitly numerated to give a quick overview of the most popular locations."]}),"\n",(0,r.jsxs)(n.p,{children:["(A) ",(0,r.jsx)(n.code,{children:"Country"})," - ",(0,r.jsx)(n.strong,{children:"Hovering"})," over the indicator shows country specific details, while ",(0,r.jsx)(n.strong,{children:"Clicking"})," opens up a ",(0,r.jsx)(n.a,{href:"./analytics-zoom#zoom-on-worldmap",children:(0,r.jsx)(n.strong,{children:"Breakdown Menu"})})," of this countrys streaming activity. ",(0,r.jsx)("br",{}),"\r\n(B) ",(0,r.jsx)(n.code,{children:"Country Overview"})," is shown when hovering over one of the Top 50 ranked countries."]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},43577:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/wm-country-view-65604dd1c92bb98d725971b2beeffb21.png"},4916:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/wm-region-comparison1-724a3ff23dacf51585287198bab0a2d4.png"},50719:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/wm-region-comparison2-3fd28e47ebf81f655808ca1ed64b3962.png"},10046:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/wm-region-zoom-view-06ee488090db4a8bc3aab8b86f202052.png"},58911:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/wm-regions-view-267934f3b8f339a35b8fe7f1c168070d.png"},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var o=i(67294);let r={},t=o.createContext(r);function s(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);