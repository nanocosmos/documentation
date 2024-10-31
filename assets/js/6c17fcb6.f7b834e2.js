"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6679],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),y=o,d=g["".concat(s,".").concat(y)]||g[y]||m[y]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},59384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(58168),o=(n(96540),n(15680));const r={slug:"/analytics/worldmap",id:"worldmap",title:"Worldmap",sidebar_label:"World Map"},i=void 0,l={unversionedId:"cloud/worldmap",id:"cloud/worldmap",title:"Worldmap",description:"The selected filter options affect all availabe metrics.",source:"@site/docs/cloud/worldmap.md",sourceDirName:"cloud",slug:"/analytics/worldmap",permalink:"/docs/analytics/worldmap",draft:!1,tags:[],version:"current",lastUpdatedAt:1730387209,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{slug:"/analytics/worldmap",id:"worldmap",title:"Worldmap",sidebar_label:"World Map"},sidebar:"nanoStream Analytics",previous:{title:"Analytics Dashboard",permalink:"/docs/analytics/dashboard"},next:{title:"Zoom",permalink:"/docs/analytics/zoom"}},s={},p=[{value:"Country View",id:"country-view",level:2},{value:"World Regions View",id:"world-regions-view",level:2},{value:"Regions Comparison",id:"regions-comparison",level:3},{value:"Zoom Region View",id:"zoom-region-view",level:3}],c={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The selected filter options affect all availabe metrics."),(0,o.yg)("admonition",{title:"Before starting",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"To begin, please sign in to the ",(0,o.yg)("a",{parentName:"p",href:"https://metrics.nanocosmos.de/login"},"Analytics dashboard")," using your nanoStream Cloud/Bintu account credentials. ",(0,o.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,o.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,o.yg)("p",null,"The world map gives an overview where your customers are located and shows statistics per country."),(0,o.yg)("admonition",{title:"special case",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"The USA (as a special case) are seperated in different regions, where each region counts individually.")),(0,o.yg)("p",null,"You can choose from the following categories:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Playout/Ingests"),": how many streams where ingested and played back"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Buffering Play Ratio")," (only available with ",(0,o.yg)("a",{parentName:"li",href:"./analytics#h5live"},"H5Live metrics")," enabled): the ratio between buffer and playback duration over all playouts for a country",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"a ratio of 0% means no buffering"),(0,o.yg)("li",{parentName:"ul"},"a ratio of 100% means no playback was possible"),(0,o.yg)("li",{parentName:"ul"},"for countries like India with a high number of mobile connections and unstable internet connection, a higher buffering/play ratio compared to other countries is expected"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Latency")," (only available with ",(0,o.yg)("a",{parentName:"li",href:"./analytics#h5live"},"H5Live metrics")," enabled): the average playback latency over all playbacks for a country"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Playtime average")," (only available with ",(0,o.yg)("a",{parentName:"li",href:"./analytics#h5live"},"H5Live metrics")," enabled): the average playback duration of a playback event, shows how long a viewer will watch a stream"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Usage")," (received/sent): the ingest and playback usage (in gigabytes) for a country"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ABR playtime"),": the playback duration of streams with activated ",(0,o.yg)("strong",{parentName:"li"},'"adaptive bitrate"')," option enabled"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ABR viewer"),": the total viewer count of country/region"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ABR switches"),': the total amount of stream quality level switches for both - "upgrading" and "downgrading"')),(0,o.yg)("p",null,"The area directly below the world map shows either a Top 10 country tabular list for the selected category or a region comparison chart when in ",(0,o.yg)("strong",{parentName:"p"},"World Regions View"),"."),(0,o.yg)("h2",{id:"country-view"},"Country View"),(0,o.yg)("p",null,"In the ",(0,o.yg)("strong",{parentName:"p"},"Country View")," you can investigate the TOP 50 countries that apply to your set filter options. These are ranked by the chosen metric, which can be selected right below the View Switch."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot: World Map Country View",src:n(25010).A,width:"3523",height:"2112"}),"\n",(0,o.yg)("em",{parentName:"p"},"Screenshot: World Map Country View")),(0,o.yg)("p",null,"(A) ",(0,o.yg)("inlineCode",{parentName:"p"},"View Switch")," lets you change between ",(0,o.yg)("strong",{parentName:"p"},"Country View")," and ",(0,o.yg)("strong",{parentName:"p"},"World Regions View"),". ",(0,o.yg)("br",null),"\n(B) ",(0,o.yg)("inlineCode",{parentName:"p"},"Metric Selection")," select a metric category. ",(0,o.yg)("br",null),"\n(C) ",(0,o.yg)("inlineCode",{parentName:"p"},"Metric Subswitch")," lets you choose a ",(0,o.yg)("strong",{parentName:"p"},"sub-metric")," if the current selected metric has more than one. ",(0,o.yg)("br",null),"\n(D) ",(0,o.yg)("inlineCode",{parentName:"p"},"Legend")," describes the visible metric data in more detail."),(0,o.yg)("h2",{id:"world-regions-view"},"World Regions View"),(0,o.yg)("p",null,"In the ",(0,o.yg)("strong",{parentName:"p"},"World Regions View")," all countries belong to their continental region. The functionalites are basically the same as on ",(0,o.yg)("strong",{parentName:"p"},"Country View"),", but the corresponding data is shown in the ",(0,o.yg)("strong",{parentName:"p"},"Region Comparison")," bar chart below the ",(0,o.yg)("strong",{parentName:"p"},"Worldmap"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot: World Map: Regions View",src:n(77157).A,width:"1837",height:"904"}),"\n",(0,o.yg)("em",{parentName:"p"},"Screenshot: World Map: Regions View")),(0,o.yg)("h3",{id:"regions-comparison"},"Regions Comparison"),(0,o.yg)("p",null,"When the ",(0,o.yg)("strong",{parentName:"p"},"World Regions View"),' is selected, in this visualization the current selected metric data is shown. The regions are always ranked from "best" to "worst" based on the selected metric.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot World Map Region Comparison",src:n(72009).A,width:"1854",height:"386"}),"\n",(0,o.yg)("em",{parentName:"p"},"Screenshot World Map Region Comparison")),(0,o.yg)("p",null,"(A) ",(0,o.yg)("inlineCode",{parentName:"p"},"World Regions")," - each of the 7 world regions, classified by our server structure. ",(0,o.yg)("strong",{parentName:"p"},"(not continents)")," ",(0,o.yg)("br",null),"\n(B) ",(0,o.yg)("inlineCode",{parentName:"p"},"Bar Tooltip Description")," opens up when hovering over one bar of the chart. It gives more detailed information based on the chosen metric. ",(0,o.yg)("br",null),"\n(C) ",(0,o.yg)("inlineCode",{parentName:"p"},"Metric Unit")," is always located at the x-axis and changes accordingly to the selected metric and the corresponding data. ",(0,o.yg)("br",null)),(0,o.yg)("p",null,"If a metric consists of ",(0,o.yg)("strong",{parentName:"p"},"multiple properties"),", the bar chart adjusts to a stacked bar chart. Hover over a bar to see more detailed information."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot World Map Region Comparison",src:n(7474).A,width:"1854",height:"386"}),"\n",(0,o.yg)("em",{parentName:"p"},"Screenshot World Map Region Comparison")),(0,o.yg)("h3",{id:"zoom-region-view"},"Zoom Region View"),(0,o.yg)("p",null,"Clicking on a region in the ",(0,o.yg)("strong",{parentName:"p"},"World Regions View"),", lets you zoom in and shows country data of all countries within the selected region. The region comparison bar chart also changes to the Top 10 countries ranking of the selected region."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Screenshot: World Map Region Zoom View",src:n(58276).A,width:"2243",height:"1384"}),"\n",(0,o.yg)("em",{parentName:"p"},"Screenshot: World Map Region Zoom View")),(0,o.yg)("p",null,"In ",(0,o.yg)("strong",{parentName:"p"},"Country View")," the Top 50 ranked countries are marked by a small indicator, while in ",(0,o.yg)("strong",{parentName:"p"},"Zoom Region View")," all countries are marked. The Top 10 in both cases is explicitly numerated to give a quick overview of the most popular locations."),(0,o.yg)("p",null,"(A) ",(0,o.yg)("inlineCode",{parentName:"p"},"Country")," - ",(0,o.yg)("strong",{parentName:"p"},"Hovering")," over the indicator shows country specific details, while ",(0,o.yg)("strong",{parentName:"p"},"Clicking")," opens up a ",(0,o.yg)("a",{parentName:"p",href:"./analytics-zoom#zoom-on-worldmap"},(0,o.yg)("strong",{parentName:"a"},"Breakdown Menu"))," of this countrys streaming activity. ",(0,o.yg)("br",null),"\n(B) ",(0,o.yg)("inlineCode",{parentName:"p"},"Country Overview")," is shown when hovering over one of the Top 50 ranked countries."))}m.isMDXComponent=!0},25010:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/wm-country-view-65604dd1c92bb98d725971b2beeffb21.png"},72009:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/wm-region-comparison1-724a3ff23dacf51585287198bab0a2d4.png"},7474:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/wm-region-comparison2-3fd28e47ebf81f655808ca1ed64b3962.png"},58276:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/wm-region-zoom-view-06ee488090db4a8bc3aab8b86f202052.png"},77157:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/wm-regions-view-267934f3b8f339a35b8fe7f1c168070d.png"}}]);