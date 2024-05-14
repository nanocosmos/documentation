"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4095],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),y=o,m=d["".concat(p,".").concat(y)]||d[y]||c[y]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},69792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(58168),o=(t(96540),t(15680));const r={id:"nanoplayer_introduction",title:"Introduction",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_introduction",id:"nanoplayer/nanoplayer_introduction",title:"Introduction",description:"Schema",source:"@site/docs/nanoplayer/nanoplayer_introduction.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_introduction",permalink:"/docs/nanoplayer/nanoplayer_introduction",draft:!1,tags:[],version:"current",lastUpdatedAt:1715695199,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{id:"nanoplayer_introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"H5Live Player",next:{title:"Getting started",permalink:"/docs/nanoplayer/nanoplayer_getting_started"}},p={},s=[{value:"H5Live Overview",id:"h5live-overview",level:2},{value:"H5Live Usage",id:"h5live-usage",level:2},{value:"H5Live Configuration",id:"h5live-configuration",level:2},{value:"Demo Player Web Page Example",id:"demo-player-web-page-example",level:3},{value:"Configuration",id:"configuration",level:3},{value:"End-to-end streaming",id:"end-to-end-streaming",level:2},{value:"Pull Mode",id:"pull-mode",level:3},{value:"H5Live Operating Modes",id:"h5live-operating-modes",level:2},{value:"Secure Streaming",id:"secure-streaming",level:3}],u={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://www.nanocosmos.de/blog/wp-content/uploads/H5Live-Schema.png?direct&600",alt:"Schema"})),(0,o.yg)("h2",{id:"h5live-overview"},"H5Live Overview"),(0,o.yg)("p",null,"nanoStream H5Live is a client-server technology based on nanoStream Cloud and nanoStream H5Live Player (aka nanoPlayer). It is the perfect playback solution for live video streaming in all HTML5 web browsers, with  ",(0,o.yg)("strong",{parentName:"p"},"Ultra-Low latency live streaming")," (",(0,o.yg)("inlineCode",{parentName:"p"},"around 1 second end-to-end, glass-to-glass"),") . The future-proof, plugin-free implementation enables a lot of exciting use cases. "),(0,o.yg)("p",null,"H5Live requires the ",(0,o.yg)("inlineCode",{parentName:"p"},"H5Live server")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"H5Live client"),". The server runs as part of the nanoStream cloud services and global CDN for providing the best end-to-end user experience with a global scale."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Find additional info and demo on ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/h5live"},"our web page"))),(0,o.yg)("h2",{id:"h5live-usage"},"H5Live Usage"),(0,o.yg)("p",null,"nanoStream Cloud is a global, geo-load-balanced content delivery network which you can use to deliver and play your live streams with ultra-low-latency.",(0,o.yg)("br",{parentName:"p"}),"\n","It can be configured by the player client with a Javascript API or with our demo player page directly with a player URL."),(0,o.yg)("h2",{id:"h5live-configuration"},"H5Live Configuration"),(0,o.yg)("h3",{id:"demo-player-web-page-example"},"Demo Player Web Page Example"),(0,o.yg)("p",null,"The best way to use H5Live is as part of nanoStream Cloud. You can send a live stream to nanoStream Cloud and use the H5Live Player for playback on all browsers.\nSee the nanoStream Cloud - Getting Started Documentation for details."),(0,o.yg)("h3",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"You need to use the playback URL to play your live streams.\nYou can obtain the playback URL from the nanoStream Cloud / bintu API or dashboard. "),(0,o.yg)("h2",{id:"end-to-end-streaming"},"End-to-end streaming"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"H5Live integrates with nanoStream Live Encoder SDKs and nanoStream Cloud with bintu.live for complete end-to-end live streaming services in ultra-low latency.")),(0,o.yg)("p",null,"There are different possible use cases for interactive live streaming, including grouping and tagging live streams. You can create web pages which query for specific bintu tags and show their live streams accordingly."),(0,o.yg)("p",null,'For playback with nanoStream Cloud, you need to send ("push") a live stream to the bintu system. You obtain an ingest and playback URL from the bintu dashboard or API.  '),(0,o.yg)("p",null,"Example playback URL with bintu.live:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?bintu.apiurl=https://bintu.nanocosmos.de&bintu.streamid=b95225dd-3dd1-4d23-8eb0-232909aadab5\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"H5Live can be used in combination with our nanoStream SDKs for Windows, Mac, iOS, Android or the plugin-free browser-based nanoStream Webcaster solution to create plugin-free interactive live streaming applications.")),(0,o.yg)("h3",{id:"pull-mode"},"Pull Mode"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},'It is recommended to use the "push" mode to nanoStream Cloud as described above.\nIf you have a running live stream and server already, you can also use H5Live Player with existing RTMP streams to pull from your server.  ')),(0,o.yg)("p",null,"Click ",(0,o.yg)("a",{parentName:"p",href:"http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.token=%7B%22type%22:%22token1%22,%22key%22:CUSTOMERTOKEN123%22%7D&h5live.rtmp.url=rtmp://streaming.server.com/live&h5live.rtmp.streamname=myStreamName"},"here")," to test the Demo Player"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"URL Parameters: ",(0,o.yg)("br",null),"\nYou need to change the URL parameters for your setup.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"h5live.rtmp.url=rtmp://`<yourserver-address>`/`<yourserver-application\nh5live.rtmp.streamname=`<yourserver-streamname>`\n")),(0,o.yg)("p",null,"  Unique customer token: ",(0,o.yg)("inlineCode",{parentName:"p"},"CUSTOMERTOKEN")," - ",(0,o.yg)("strong",{parentName:"p"},"replace with the one you receive in your email")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"h5live.token")," is to unlock your account (you may need to change this based on your license)")),(0,o.yg)("p",null,"Example: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'h5live.token=h5live.token={"type":"token1","key":CUSTOMERTOKEN"}\n')),(0,o.yg)("h2",{id:"h5live-operating-modes"},"H5Live Operating Modes"),(0,o.yg)("p",null,"H5Live player works on any browser and operates in different modes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"fMP4")," / ",(0,o.yg)("inlineCode",{parentName:"li"},"WebSocket")," / ",(0,o.yg)("inlineCode",{parentName:"li"},"MediaSource"),": compatible to Chrome, Firefox and other browsers"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"HLS low-latency"),": compatible to Safari on iOS and MacOS"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"MP4"),": compatible to settop boxes and TV Sets")),(0,o.yg)("p",null,"You do not need to worry about these modes, they are automatically selected by the player."),(0,o.yg)("h3",{id:"secure-streaming"},"Secure Streaming"),(0,o.yg)("p",null,"For secure playback you need to have your account enabled for playback security. See the h5live secure playback documentation."),(0,o.yg)("admonition",{title:"More Information",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Find a product overview and live demo ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/h5live"},"here"),". ",(0,o.yg)("br",null),"\nOur API documentation can be found ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api"},"here"),".")),(0,o.yg)("admonition",{title:"Questions?",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"For business related questions reach out to our dedicated sales team via the ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de. ",(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"For technical questions you can use our ",(0,o.yg)("a",{parentName:"strong",href:"https://www.nanocosmos.de/support"},"support form"),"."))))}c.isMDXComponent=!0}}]);