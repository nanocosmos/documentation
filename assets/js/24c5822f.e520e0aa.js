"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9019],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),g=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(a),u=n,y=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return a?o.createElement(y,i(i({ref:t},d),{},{components:a})):o.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var g=2;g<r;g++)i[g]=a[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var o=a(58168),n=(a(96540),a(15680));const r={slug:"/analytics/zoom",id:"analytics-zoom",title:"Zoom Feature",sidebar_label:"Zoom"},i=void 0,l={unversionedId:"cloud/analytics-zoom",id:"cloud/analytics-zoom",title:"Zoom Feature",description:"To begin, please sign in to the Analytics Dashboard using your nanoStream Cloud/Bintu account credentials.",source:"@site/docs/cloud/analytics-zoom.md",sourceDirName:"cloud",slug:"/analytics/zoom",permalink:"/docs/analytics/zoom",draft:!1,tags:[],version:"current",lastUpdatedAt:1728286796,formattedLastUpdatedAt:"Oct 7, 2024",frontMatter:{slug:"/analytics/zoom",id:"analytics-zoom",title:"Zoom Feature",sidebar_label:"Zoom"},sidebar:"nanoStream Analytics",previous:{title:"World Map",permalink:"/docs/analytics/worldmap"},next:{title:"nanoStream Guardian",permalink:"/docs/analytics/guardian"}},s={},g=[{value:"Zoom in for more insight",id:"zoom-in-for-more-insight",level:2},{value:"General",id:"general",level:2},{value:"Zoom on Home",id:"zoom-on-home",level:2},{value:"Usage/Traffic",id:"usagetraffic",level:3},{value:"Protocol Usage",id:"protocol-usage",level:3},{value:"Max Concurrent Viewer",id:"max-concurrent-viewer",level:3},{value:"Zoom on Worldmap",id:"zoom-on-worldmap",level:2},{value:"Playout/Ingest (Usage)",id:"playoutingest-usage",level:3},{value:"Aggregated Metrics",id:"aggregated-metrics",level:3},{value:"Buffering Play Ratio",id:"buffering-play-ratio",level:4},{value:"Playtime",id:"playtime",level:4},{value:"Latency",id:"latency",level:4},{value:"ABR",id:"abr",level:4},{value:"Zoom on H5Live",id:"zoom-on-h5live",level:2},{value:"Playback Count",id:"playback-count",level:3},{value:"Player Versions",id:"player-versions",level:3},{value:"Player Startup Times",id:"player-startup-times",level:3},{value:"Player Loading Counts",id:"player-loading-counts",level:3},{value:"Status/Error Codes",id:"statuserror-codes",level:3},{value:"Reasons for Stopping",id:"reasons-for-stopping",level:3},{value:"Aggregated Metrics",id:"aggregated-metrics-1",level:3},{value:"Latency",id:"latency-1",level:4},{value:"Buffering Ratios",id:"buffering-ratios",level:4},{value:"Zoom on ABR",id:"zoom-on-abr",level:2},{value:"Profile Details",id:"profile-details",level:3},{value:"Playtime per Profile",id:"playtime-per-profile",level:4},{value:"Viewer Count per Profile",id:"viewer-count-per-profile",level:4},{value:"Profile Switch Details",id:"profile-switch-details",level:3},{value:"Success Rate",id:"success-rate",level:4},{value:"Up and Down Switches",id:"up-and-down-switches",level:4},{value:"Zoom on Webcaster",id:"zoom-on-webcaster",level:2},{value:"Webcaster Publishes",id:"webcaster-publishes",level:3},{value:"Bitrates",id:"bitrates",level:3},{value:"Error/Status Codes",id:"errorstatus-codes",level:3},{value:"Broadcasting Times",id:"broadcasting-times",level:3},{value:"Reasons for stopping",id:"reasons-for-stopping-1",level:3},{value:"Versions",id:"versions",level:3}],d={toc:g},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,o.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"Before starting",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"To begin, please sign in to the ",(0,n.yg)("a",{parentName:"p",href:"https://metrics.nanocosmos.de/login"},"Analytics Dashboard")," using your nanoStream Cloud/Bintu account credentials. ",(0,n.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,n.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,n.yg)("p",null,"This feature is available for multiple widgets. The zoom tag shows if this feature is supported for this chart."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Zoom Tag",src:a(44576).A,width:"1088",height:"368"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Zoom Tag")),(0,n.yg)("h2",{id:"zoom-in-for-more-insight"},"Zoom in for more insight"),(0,n.yg)("p",null,"By clicking on a bar in one of the supported widgets an overlay window is being opened.\nThere you can gain more insight about that specific diagram by doing your own research. The table shows the TOP 10 (highest) ranked results depending on the metric and your selected search parameters."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Metrics like ",(0,n.yg)("strong",{parentName:"p"},"max concurrent viewer, latency"),"  or other ",(0,n.yg)("strong",{parentName:"p"},"aggregated metrics")," do rank by their ",(0,n.yg)("strong",{parentName:"p"},"individual parameter of significance"),". (e.g. viewer count, latency in seconds, etc.)")),(0,n.yg)("h2",{id:"general"},"General"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: World Map Breakdown",src:a(48425).A,width:"3513",height:"2119"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: World Map Breakdown")),(0,n.yg)("p",null,"(A) ",(0,n.yg)("inlineCode",{parentName:"p"},"Chosen Metric Category")," horizontal bar (orange) data ",(0,n.yg)("strong",{parentName:"p"},"category"),":\nA list of the available data categories, like Playout/Ingest, a specific transfer protocol you are interested in (e.g. H5Live) or individual metrics. ",(0,n.yg)("br",null)),(0,n.yg)("admonition",{title:"example",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The available category options depend on the selected zoom-widgets. ",(0,n.yg)("br",null),"\nHere is another example for ABR switches from the worldmap tab:\n",(0,n.yg)("img",{alt:"Screenshot",src:a(47559).A,width:"681",height:"74"}))),(0,n.yg)("p",null,"(B) ",(0,n.yg)("inlineCode",{parentName:"p"},"Filtering by Data Features")," vertical bar (blue) data ",(0,n.yg)("strong",{parentName:"p"},"feature"),":\nThis is a data feature you are interested in (e.g. streamname, referrer, country, etc.). These can be used to switch between the metric data to evaluate the results under different points of view."),(0,n.yg)("p",null,"Most of the zoom menus have these main filters:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"IP"),(0,n.yg)("li",{parentName:"ul"},"Stream name"),(0,n.yg)("li",{parentName:"ul"},"City"),(0,n.yg)("li",{parentName:"ul"},"Country"),(0,n.yg)("li",{parentName:"ul"},"Referrer")),(0,n.yg)("p",null,"While ",(0,n.yg)("inlineCode",{parentName:"p"},"Buffering Ratio"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"Latency"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"Playtime Average"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ABR Viewers"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ABR Playtime")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"ABR Switches")," and other individual metrics also contain filters for:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"OS"),(0,n.yg)("li",{parentName:"ul"},"Player version"),(0,n.yg)("li",{parentName:"ul"},"Browser")),(0,n.yg)("p",null,"(C) ",(0,n.yg)("inlineCode",{parentName:"p"},"Table Columns")," represent the chosen filter and show the corresponding data. You can sort all entries by clicking on a header column. ",(0,n.yg)("br",null)),(0,n.yg)("p",null,"(D) ",(0,n.yg)("inlineCode",{parentName:"p"},"Selected Time Range")," displays the ",(0,n.yg)("inlineCode",{parentName:"p"},"start")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"end")," of the selected time range."),(0,n.yg)("h2",{id:"zoom-on-home"},"Zoom on Home"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Zoom on Home",src:a(48163).A,width:"2528",height:"1381"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Zoom on Home")),(0,n.yg)("h3",{id:"usagetraffic"},"Usage/Traffic"),(0,n.yg)("p",null,"Zooming into an usage diagram opens detailed information about the top 10 with biggest playout or ingest traffic within a specific time frame. (e.g. the top 10 countries with the highest stream data traffic)"),(0,n.yg)("h3",{id:"protocol-usage"},"Protocol Usage"),(0,n.yg)("p",null,"The protocol usage shows the traffic for every protocol individually (e.g. H5Live, RTMP, HLS and H5Live Token). "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Zoom on Protocol Usage",src:a(65747).A,width:"2530",height:"1387"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Zoom on Protocol Usage")),(0,n.yg)("h3",{id:"max-concurrent-viewer"},"Max Concurrent Viewer"),(0,n.yg)("p",null,"The max concurrent viewer zoom table ranks by the top 10 results by their concurrent viewer counts for the chosen data feature. (e.g. the top 10 streams with the highest count of concurrent viewer)"),(0,n.yg)("h2",{id:"zoom-on-worldmap"},"Zoom on Worldmap"),(0,n.yg)("p",null,"This Zoom/Breakdown menu is shown when clicking on a marked country in the ",(0,n.yg)("a",{parentName:"p",href:"./worldmap#zoom-region-view"},(0,n.yg)("strong",{parentName:"a"},"Zoom Region View"))," or ",(0,n.yg)("a",{parentName:"p",href:"./worldmap#country-view"},(0,n.yg)("strong",{parentName:"a"},"Country View")),". It represents a more detailed overview of this countrys Top 10 results by the selected metric category and filter option."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Zoom on Worldmap",src:a(93572).A,width:"2530",height:"1387"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Zoom on Worldmap")),(0,n.yg)("h3",{id:"playoutingest-usage"},"Playout/Ingest (Usage)"),(0,n.yg)("p",null,"Like the usage details from home tab, but only for the selected country."),(0,n.yg)("h3",{id:"aggregated-metrics"},"Aggregated Metrics"),(0,n.yg)("p",null,"The following aggregated metrics provide more insight for different use cases regarding your stream quality:"),(0,n.yg)("h4",{id:"buffering-play-ratio"},"Buffering Play Ratio"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"the ratio between stream buffering and fluent play back (ranked by highest ratio)")),(0,n.yg)("h4",{id:"playtime"},"Playtime"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"the average and total play back time (ranked by highest average play back time)")),(0,n.yg)("h4",{id:"latency"},"Latency"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"the average and total latency from ingest to playout (ranked by highest latency)")),(0,n.yg)("h4",{id:"abr"},"ABR"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"successfull profile switch count"),(0,n.yg)("li",{parentName:"ul"},"playtime per device per profile"),(0,n.yg)("li",{parentName:"ul"},"viewers per profile")),(0,n.yg)("h2",{id:"zoom-on-h5live"},"Zoom on H5Live"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Zoom on H5Live",src:a(45353).A,width:"2530",height:"1387"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Zoom on H5Live")),(0,n.yg)("h3",{id:"playback-count"},"Playback Count"),(0,n.yg)("p",null,"Shows the playback count per OS or per browser."),(0,n.yg)("h3",{id:"player-versions"},"Player Versions"),(0,n.yg)("p",null,"You can check detailed information about the use of different H5Live player versions, ranked by the most occuring player events. (e.g. pause, play, stop)"),(0,n.yg)("h3",{id:"player-startup-times"},"Player Startup Times"),(0,n.yg)("p",null,"Here you can find details about the initial loading times of the player, ranked by the longest average first."),(0,n.yg)("h3",{id:"player-loading-counts"},"Player Loading Counts"),(0,n.yg)("p",null,"This insight provides information about the frequency of player loading events. Note, that each country is viewed separately."),(0,n.yg)("h3",{id:"statuserror-codes"},"Status/Error Codes"),(0,n.yg)("p",null,"Check more defined details on occuring status and error codes, ranked by their counts."),(0,n.yg)("h3",{id:"reasons-for-stopping"},"Reasons for Stopping"),(0,n.yg)("p",null,"Use this details to see which stopping reasons the players had, ranked by how often they occur"),(0,n.yg)("h3",{id:"aggregated-metrics-1"},"Aggregated Metrics"),(0,n.yg)("p",null,"The following aggregated metrics provide more insight for different use cases regarding your stream quality:"),(0,n.yg)("h4",{id:"latency-1"},"Latency"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"average and total latency")),(0,n.yg)("h4",{id:"buffering-ratios"},"Buffering Ratios"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"average and total buffering ratios")),(0,n.yg)("h2",{id:"zoom-on-abr"},"Zoom on ABR"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Zoom on ABR",src:a(67701).A,width:"2525",height:"1375"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Zoom on ABR")),(0,n.yg)("h3",{id:"profile-details"},"Profile Details"),(0,n.yg)("p",null,"The ABR profiles represent different resolutions for the playback, based on the video height (e.g. 360p, 720p, 1080p) :"),(0,n.yg)("h4",{id:"playtime-per-profile"},"Playtime per Profile"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"playtime per resoultion, ranked by longest playtime")),(0,n.yg)("h4",{id:"viewer-count-per-profile"},"Viewer Count per Profile"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"active viewers per profile (not concurrent viewers)")),(0,n.yg)("h3",{id:"profile-switch-details"},"Profile Switch Details"),(0,n.yg)("p",null,"Insights for the ABR profile switches provide useful information to determine general stream or bandwidth quality:"),(0,n.yg)("h4",{id:"success-rate"},"Success Rate"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"relation between successed and failed up and down profile switches")),(0,n.yg)("h4",{id:"up-and-down-switches"},"Up and Down Switches"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"more distinct insights of different profile switch categories (e.g. only up or down switches)")),(0,n.yg)("h2",{id:"zoom-on-webcaster"},"Zoom on Webcaster"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Screenshot: Zoom on Webcaster",src:a(2154).A,width:"2533",height:"1390"}),"\n",(0,n.yg)("em",{parentName:"p"},"Screenshot: Zoom on Webcaster")),(0,n.yg)("h3",{id:"webcaster-publishes"},"Webcaster Publishes"),(0,n.yg)("p",null,"The counts of publishes which are using the our webcaster."),(0,n.yg)("h3",{id:"bitrates"},"Bitrates"),(0,n.yg)("p",null,"The average and median bitrates for video and audio data helps to determine bandwidth fluctuations."),(0,n.yg)("h3",{id:"errorstatus-codes"},"Error/Status Codes"),(0,n.yg)("p",null,"This widget provides insights for different status and error codes of the webcaster, which get ranked by their frequency."),(0,n.yg)("h3",{id:"broadcasting-times"},"Broadcasting Times"),(0,n.yg)("p",null,"These broadcasting times represent the median and average time ranges when the webcaster send a broadcasting signal. "),(0,n.yg)("h3",{id:"reasons-for-stopping-1"},"Reasons for stopping"),(0,n.yg)("p",null,"This widget lists all the stopping counts of the streams and specific stopping reasons."),(0,n.yg)("h3",{id:"versions"},"Versions"),(0,n.yg)("p",null,"More details about the different webcaster versions, ranked by their counts of use."))}p.isMDXComponent=!0},67701:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/analytics-zoom-abr-c9d69efb227834bcb5b36be977bdcfce.png"},45353:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/analytics-zoom-h5live-9fb0c1b71ecd660f90c791ca48e1dab0.png"},65747:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/analytics-zoom-home-protocols-9af79015f47dea6aa28d1da3d4704c42.png"},48163:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/analytics-zoom-home-d78ede1b79b211f5e47c5828f49919d3.png"},44576:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/analytics-zoom-tag-7fc0bea7be4187230ec66843331b1974.png"},2154:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/analytics-zoom-webcaster-eeb1774cabdee01222ef170fecf51a65.png"},93572:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/analytics-zoom-worldmap-6c570362bd50e5a6058952f07db2aa50.png"},47559:(e,t,a)=>{a.d(t,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqkAAABKCAIAAAAXC1qVAAAACXBIWXMAAAsTAAALEwEAmpwYAAANd0lEQVR4nO3dfVATZx4H8F94M5CALKEmEPSGl4oKoiio2DuPWsVy2GrbubNa2qvKqENFy5x2TmvPaa+tndOWUTxabet4PVs7dSylaO1Zz6FefQXhVPCtBKa8KKiwCEkMKOT+2LiEJITAJWRhv59hnGSz2X32cfN8n32eDUiMRiMBAACAaHi4uwAAAAAwqJD9AAAA4oLsBwAAEBdkPwAAgLgg+wEAAMQF2Q8AACAuyH4AAABxQfYDAACIC7IfAABAXJD9AAAA4oLsBwAAEBdkPwAAgLgg+wEAAMQF2Q8AACAuyH4AAABxQfYDAACIC7IfAABAXJD9AAAA4oLsBwAAEBdkPwAAgLgg+wEAAMQF2Q8AACAuXu4uwPDR0qplW7Ud9x+4uyAAvYo+nO7uIgxD19L2ubsIw8QIH+9Af1lggNzdBRn+kP3O0dzSdpu96+5SAAAMYe0d9xubWoxGYkYi/l0LY/7OcVerc3cRAACGg5Y2rbuLMPwh+53jPob6AQCcAc3pIED2O4fR3QUAABge0JwOAmQ/AAAIi9GIDoBrIfsBAEBwEP8uhewHAABhQfC7GrIfAACECD0A10H2AwCAsBiNRgS/SyH7AQBAoNADcBFkv4AYDIat771TXaXhl7Asu3nTBpZl+Qf8S3m528dFjOZ+Ml5Ot7lOdZVm63vvGAwG873ITv3k1XSntzKwLJvxcnpe7naL5dVVmoVp80pLiomosCC/sCCfiEpLivkyjIsYvXnTBot9CUSfB2Ve84UF+eYHZf0ujk91lbSinHpvmPhaMmdeY9z/GhHl5W43X7OwIN+8JktLigVasdEptPQARaf0WBgWT0sP0Ooi08/C94mIpi+jjILuNaNTaOV3NHt9j7fwT4l+ZAzfjtIb7XzVa+H7lPkDTV9muXzJXlp6gMLiafZ6WrK3e198eWy+SxgKC/IXps0z//hz8nK3cydAaUkxdzZy5zN/Itl8FxFpjdovO/a3GFt626OdFsPiJYs98sVwpMEZGES+qyH7hx6DwbB50wYiulpVy/0sfuHFFrbZwbdLL14IzcoMOPStpKPd5gojR46s/Pm6RWty5PChq1cuW6+8JnsdX4yExGnPP7fAZjPkdv06qK05O/iDIiI+pM15sqzqjQ3BOdvsdKQsFBbk5+3cfvr8RW7LmavXLk1/vrpKMyNpZknxOb7FrK2puVBWevNGPfe0vr4uIXGaVCrt1/G6R3QKpb1DbA3tTKadyfRNNjFjaMleqi+jzg5STzKtFhhGnt6kijE9lT1CRFR/gd/MDWnn6vHsc/FNlX73e91Xh54iZ/VYMn0ZBaptramjH941Fen8fpq62NQjEZ6IyKgjhw+ZL6mu0hz9/jvrNdVho/kTKSc3Lzsr07qj2UVdxzuPv3gv/cD9rx7QwH9bTnWVZmn685mr13K7++/lnxXBwYPQGcWwv0sh+4eePR/vSkiclpm1ll/yxNx54RGRjm/BQ68L+mRXyLps39Lz1NVl8arcPyBu8uTySxf5JdVVGp1Ou3zFKvubfWrBM8tXrLJovARiwAeVmbV2ytTEn04U2Xitq0t+oig0K3Nk/kEPvd7+dqqrNEXHj23NyWUYhlsyJSGRq67wyCgiunfvHhGxLNvY2DApfgrb3ExEBoOhpPicWh3m+JG609Ql1HiFvvmT6WldGZ36mPwYUscTW0MBKtPykBjS3iYvHwqLJyJTn0B323xLRomkeGTHkwm3/zy2pcm708a+2hpphKzHqEPkLGq8Rp29dxeI6OweOr+fgqMshyuEIW7y5MbGBvOO5pHDhxanvySX2/vl9uERkTm5eUXHj1n3UInonlG/q+OjDP3ysw/O2BtK6QXLsju3f5CTmzclIZFbIpVKFy1+wdWdUaS+qyH7hxiWZTWV12Mnxv3/m/Kp+UX51l9Ub2zweniJyfvt40+UFJ/jm5Ijhw+NGz9BJuv7r2vETozTVF632Qa53YAPyuK63IKHXsf8Y486c4XfqZPWHSle+aWLkVFj+eDncNXVbjAQUbWmkvtXqVQtWPjsmdOniOjmjXptWyvXORC66BTyY+hmRY+F146SnqWQGGptIGYMhcVTWDwFhFD1KSIidTwRkSqG2BqqK7PeZLsHfR6qf2zGrd1hbQ8kPcOgvY3YGho/z/R0+jLyY4j9pe9yWgxCCIlCEZyQOI3vaFZXaTSV1x99dGyfbwwJVcv9A7hTyKY6Y+2m9tez771a0+VAFZmp1lTK/QNCQm0NqMBQhuwXFq1WmzonmZ9XS5oaV19Xa7GO3D8gkAniHvOz/txMfH1dbdLUOP7tqXOStdo+/iqGtKI8+MO/WwxcBwYySqWKa4O4K9Ffz0p2pPyBTJDcP8ChQx10Az4oJijI/oUXEXm2sIrdH0ovXbCzzugxYyyLxATJ/QNGSKUJidO4sD9z+tSMpJlMUBDXhWKbm617DMLV2UEtdZYL9U1ERPUXyNOH1PGmvK8+SQ86KCSGwuLJy8eyx9CTztP4Qbj2oPKe5Qs3K7qv4ENi6E4l6Zr6LmRdGbUL9y9vxU6M46/gyy9dTJ49hwkK6vNdUqlUqVTZX8dIxoqu8tz23CZjdy050mIolSruKp+f9ednwQbQ4IBAIPuFRS6XHzlWxE82nz5/UR022mIdbVsrP7ufmbX2alXtmux13FPzWcCrVbVHjhXZD63OQObWaxsb3nz7gSLY4qXUtPlXr1w2GAw/nShKSJzmYPy0sM1yudzX19ehox10AzsotrlZJpPbG+T08rr7zHP1ebsNk+LtbKe2psZiCV9dsRPjdDoty7I6nZYJCgoJVatCQlvY5jOnT1n3GITL04cCraYn/BTU2mAaAJApSKagBx1UV0YNFeSnIHU8+chs9BgekhiNv7s14uSZUYsa/CxfO7uH9CypJ1F0CjFj6Mq/HCok19twpJfgDuERkZFRY6s1lSzLlhSfc7B7ajAYuDPHzjoKiWLjiNf/5rtVIVHwCx1pMRobG7hBL4ZhPtm7z7xR6m+D4zhM9rsasn+IYRgmMmqs+bz1wHT5yZozVtbt/lQ/8zHysHEahEdEymTyk//50fEGiB4OpAv2xrQBHJTBYCj45usZSTNtv+zhoZ2VXLfrU/aPy7r8rMLJjM3ZkPJLF7leBTemWlpyjohCQtVSqXTc+Annzp7R6bROmd8ZDPzwvjluIoAL2oYKUsWQKoYaKoiI6i/QCBkFR5GepWtHrbcnMRoT7/ocLx6167JCcd/T9k41JygsnmKfJrbG5kZsGDuHPL2p3sYUg0Ckps3/97GjR7//zvHu6eXyS1qttreReV+J30qfVZ/77X/ca7aEJP0qTHhklLat9abVtCAMdcj+oSc1bf6nuz+yvq3XcdpZyTdy81rnP230GWFntRlJM19ZmaFUqhxsgPJytzc2Nsydlzrggg2Cfh2UwWDY8vabSqWKv9HJXMeYXzX8dcud7HXWoybWuOu59dlZfPwXFuQX5B9cnP4SEUmlUplM/srKDL7nFDsxbv++z+w06EKkOUGhcd130UenUPKrdKeSzu4hItI1UaCa/EeZbum/dpTadRQ+09QV6EnZ7rHzCnOwTBGl97a3x/oy8vQmZbT9WYNus9fTuBS6fMTm7QUCERKq1mq1+/d95mC3r7Sk+K3Nm15elmHd5/YgyW88Z/3Td9/vvf/gRV4DKAzDMMmz52RnZQrz+zswYAM5G8C9wiMivzxYsOXtN9dnr+GWrMleNyUh0cE77NgXXuqSy0nSd/d/QuzE5StWpabNt7POjpxtO3K2cY+35uww//aBMDlyUOuz1/B1+8VXX9sMfsP4CTe35djvPFlsJzNrbWFBftJUU4O+aEn6zo8+4dvrGUkzj34/gW/uA5mg4EceEfq3+3xkNHcjzd1IRKS7TT+8Sy11lPwqrS4yrXD5MB3fanpcX0YTUqld132Brm/q7gqYefKO9KlbvvJOB65M6srol3OkijF1Lxwp5LevCTn4iUgqlS5Y+KxSqbLz5R1uop17vGhJ+pcHC6zPEylJ35FuMR/hH5inFjwTOzEuOyuT/0LsF199zTCMMG/pBQdJMKfiFNeqe52wBBCO6MPp7i7CMHQtbZ+7izDchKtHeXp6Sh5yd3GGIYz5AwCAsCDvXQ3ZDwAAIC7IfgAAEBZc97sash8AAIQIPQDXQfYDAICw4BY/V0P2AwCAQKEH4CLIfgAAEBZc97sast85vLx6+Z2jAADQH95oTl0P2e8cI+UydxcBAGA48Jf5cRf9uPR3HWS/cwQF+vvLBPrH6wAAhgp/ma8i0N/dpRj+8Dt9XYKr1d7+NX8gZuZde+t/qWevH1XqINSqK6BWna5fVQpOh+x3FevPuXlVo9qp52fbeojP+pOPKnUEatUVUKtO198qBedC9ruQRd2iqntj8Tm387FHlToOteoKqFWnc7xKwYmQ/YMBleyIfn3mUaUOQq26AmrV6RD5gwzZDwAAIC64zx8AAEBckP0AAADiguwHAAAQF2Q/AACAuCD7AQAAxAXZDwAAIC7IfgAAAHFB9gMAAIgLsh8AAEBckP0AAADiguwHAAAQF2Q/AACAuCD7AQAAxAXZDwAAIC7IfgAAAHH5H0opKxWdfSCxAAAAAElFTkSuQmCC"},48425:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/wm-breakdown-9d2c38bc98576af33327368422700e77.png"}}]);