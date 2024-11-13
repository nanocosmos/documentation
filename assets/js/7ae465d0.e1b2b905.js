"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6711],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={id:"nanoplayer_player_metrics",title:"Player Metrics",sidebar_label:"Player Metrics"},i=void 0,c={unversionedId:"nanoplayer/nanoplayer_player_metrics",id:"nanoplayer/nanoplayer_player_metrics",title:"Player Metrics",description:"How to use",source:"@site/docs/nanoplayer/nanoplayer_player_metrics.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_player_metrics",permalink:"/docs/nanoplayer/nanoplayer_player_metrics",draft:!1,tags:[],version:"current",lastUpdatedAt:1731523817,formattedLastUpdatedAt:"Nov 13, 2024",frontMatter:{id:"nanoplayer_player_metrics",title:"Player Metrics",sidebar_label:"Player Metrics"},sidebar:"H5Live Player",previous:{title:"Supported Browsers",permalink:"/docs/nanoplayer/nanoplayer_supported_browsers"},next:{title:"iframe Embeds",permalink:"/docs/nanoplayer/nanoplayer_iframe"}},l={},s=[{value:"How to use",id:"how-to-use",level:2},{value:"Example player configuration with metrics enabled",id:"example-player-configuration-with-metrics-enabled",level:4}],p={toc:s},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"how-to-use"},"How to use"),(0,a.yg)("p",null,"Player metrics are providing additional insights for our cloud support team and our ",(0,a.yg)("a",{parentName:"p",href:"../cloud/analytics"},"nanoStream Cloud Analytics")," service. The player metrics can be enabled by adding the ",(0,a.yg)("inlineCode",{parentName:"p"},"metrics")," object to the player config as shown below."),(0,a.yg)("admonition",{title:"Before starting",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,a.yg)("br",null),"\nIf you don't have metrics account information for your organisation yet, you can ",(0,a.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,a.yg)("h4",{id:"example-player-configuration-with-metrics-enabled"},"Example player configuration with metrics enabled"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'var config = {\n    "source": {\n        ...\n    },\n    "playback": {\n        ...\n    },\n    "style": {\n        ...\n    },\n    "metrics": {\n        "accountId": "YOUR-METRICS-ACCOUNT-ID", // replace with your metrics account id\n        "accountKey": "YOUR-METRICS-ACCOUNT-KEY", // replace with your metrics account key\n        "userId": "viewer1", // value can be changed per viewer\n        "eventId": "event1", // value can be changed per event\n        "statsInterval": 10, // statistics interval in seconds\n        "customField1": "CustomInfo1" // value can be changed\n    },\n    ...\n}\n')),(0,a.yg)("admonition",{title:"Additional Information",type:"tip"},(0,a.yg)("p",{parentName:"admonition"}," For more information on the metrics configuration object see our ",(0,a.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..config"},"API documentation"),". More detailed information around nanoStream Cloud Analytics can be found in our ",(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/blog/2019/09/nanostream-analytics-get-insights-in-your-nanostream-cloud-service-and-h5live-player-performance/"},"blog")," and ",(0,a.yg)("a",{parentName:"p",href:"../cloud/analytics"},"docs"),".")))}y.isMDXComponent=!0}}]);