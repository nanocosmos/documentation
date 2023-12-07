"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={id:"nanoplayer_introduction",title:"Introduction",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_introduction",id:"nanoplayer/nanoplayer_introduction",title:"Introduction",description:"Schema",source:"@site/docs/nanoplayer/nanoplayer_introduction.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_introduction",permalink:"/docs/nanoplayer/nanoplayer_introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1701953705,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"nanoplayer_introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"H5Live Player",next:{title:"Getting started",permalink:"/docs/nanoplayer/nanoplayer_getting_started"}},p={},s=[{value:"H5Live Overview",id:"h5live-overview",level:2},{value:"H5Live Usage",id:"h5live-usage",level:2},{value:"H5Live Configuration",id:"h5live-configuration",level:2},{value:"Demo Player Web Page Example",id:"demo-player-web-page-example",level:3},{value:"Configuration",id:"configuration",level:3},{value:"End-to-end streaming",id:"end-to-end-streaming",level:2},{value:"Pull Mode",id:"pull-mode",level:3},{value:"H5Live Operating Modes",id:"h5live-operating-modes",level:2},{value:"Secure Streaming",id:"secure-streaming",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.nanocosmos.de/blog/wp-content/uploads/H5Live-Schema.png?direct&600",alt:"Schema"})),(0,o.kt)("h2",{id:"h5live-overview"},"H5Live Overview"),(0,o.kt)("p",null,"nanoStream H5Live is a client-server technology based on nanoStream Cloud and nanoStream H5Live Player (aka nanoPlayer). It is the perfect playback solution for live video streaming in all HTML5 web browsers, with  ",(0,o.kt)("strong",{parentName:"p"},"Ultra-Low latency live streaming")," (",(0,o.kt)("inlineCode",{parentName:"p"},"around 1 second end-to-end, glass-to-glass"),") . The future-proof, plugin-free implementation enables a lot of exciting use cases. "),(0,o.kt)("p",null,"H5Live requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"H5Live server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"H5Live client"),". The server runs as part of the nanoStream cloud services and global CDN for providing the best end-to-end user experience with a global scale."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Find additional info and demo on ",(0,o.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/h5live"},"our web page"))),(0,o.kt)("h2",{id:"h5live-usage"},"H5Live Usage"),(0,o.kt)("p",null,"nanoStream Cloud is a global, geo-load-balanced content delivery network which you can use to deliver and play your live streams with ultra-low-latency.",(0,o.kt)("br",{parentName:"p"}),"\n","It can be configured by the player client with a Javascript API or with our demo player page directly with a player URL."),(0,o.kt)("h2",{id:"h5live-configuration"},"H5Live Configuration"),(0,o.kt)("h3",{id:"demo-player-web-page-example"},"Demo Player Web Page Example"),(0,o.kt)("p",null,"The best way to use H5Live is as part of nanoStream Cloud. You can send a live stream to nanoStream Cloud and use the H5Live Player for playback on all browsers.\nSee the nanoStream Cloud - Getting Started Documentation for details."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You need to use the playback URL to play your live streams.\nYou can obtain the playback URL from the nanoStream Cloud / bintu API or dashboard. "),(0,o.kt)("h2",{id:"end-to-end-streaming"},"End-to-end streaming"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"H5Live integrates with nanoStream Live Encoder SDKs and nanoStream Cloud with bintu.live for complete end-to-end live streaming services in ultra-low latency.")),(0,o.kt)("p",null,"There are different possible use cases for interactive live streaming, including grouping and tagging live streams. You can create web pages which query for specific bintu tags and show their live streams accordingly."),(0,o.kt)("p",null,'For playback with nanoStream Cloud, you need to send ("push") a live stream to the bintu system. You obtain an ingest and playback URL from the bintu dashboard or API.  '),(0,o.kt)("p",null,"Example playback URL with bintu.live:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?bintu.apiurl=https://bintu.nanocosmos.de&bintu.streamid=b95225dd-3dd1-4d23-8eb0-232909aadab5\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"H5Live can be used in combination with our nanoStream SDKs for Windows, Mac, iOS, Android or the plugin-free browser-based nanoStream Webcaster solution to create plugin-free interactive live streaming applications.")),(0,o.kt)("h3",{id:"pull-mode"},"Pull Mode"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'It is recommended to use the "push" mode to nanoStream Cloud as described above.\nIf you have a running live stream and server already, you can also use H5Live Player with existing RTMP streams to pull from your server.  ')),(0,o.kt)("p",null,"Click ",(0,o.kt)("a",{parentName:"p",href:"http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.token=%7B%22type%22:%22token1%22,%22key%22:CUSTOMERTOKEN123%22%7D&h5live.rtmp.url=rtmp://streaming.server.com/live&h5live.rtmp.streamname=myStreamName"},"here")," to test the Demo Player"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL Parameters: ",(0,o.kt)("br",null),"\nYou need to change the URL parameters for your setup.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"h5live.rtmp.url=rtmp://`<yourserver-address>`/`<yourserver-application\nh5live.rtmp.streamname=`<yourserver-streamname>`\n")),(0,o.kt)("p",null,"  Unique customer token: ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMERTOKEN")," - ",(0,o.kt)("strong",{parentName:"p"},"replace with the one you receive in your email")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"h5live.token")," is to unlock your account (you may need to change this based on your license)")),(0,o.kt)("p",null,"Example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'h5live.token=h5live.token={"type":"token1","key":CUSTOMERTOKEN"}\n')),(0,o.kt)("h2",{id:"h5live-operating-modes"},"H5Live Operating Modes"),(0,o.kt)("p",null,"H5Live player works on any browser and operates in different modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fMP4")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"WebSocket")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"MediaSource"),": compatible to Chrome, Firefox and other browsers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HLS low-latency"),": compatible to Safari on iOS and MacOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MP4"),": compatible to settop boxes and TV Sets")),(0,o.kt)("p",null,"You do not need to worry about these modes, they are automatically selected by the player."),(0,o.kt)("h3",{id:"secure-streaming"},"Secure Streaming"),(0,o.kt)("p",null,"For secure playback you need to have your account enabled for playback security. See the h5live secure playback documentation."),(0,o.kt)("admonition",{title:"More Information",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Find a product overview and live demo ",(0,o.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/h5live"},"here"),". ",(0,o.kt)("br",null),"\nOur API documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api"},"here"),".")),(0,o.kt)("admonition",{title:"Questions?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For business related questions reach out to our dedicated sales team via the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"For technical questions you can use our ",(0,o.kt)("a",{parentName:"strong",href:"https://www.nanocosmos.de/support"},"support form"),"."))))}c.isMDXComponent=!0}}]);