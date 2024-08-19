"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4173],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?t.createElement(y,i(i({ref:n},u),{},{components:r})):t.createElement(y,i({ref:n},u))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63850:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(58168),o=(r(96540),r(15680));const a={id:"nanoplayer_supported_browsers",title:"Support Browsers",sidebar_label:"Supported Browsers"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_supported_browsers",id:"nanoplayer/nanoplayer_supported_browsers",title:"Support Browsers",description:"The low-latency nanoStream h5Live Player runs on all full-featured HTML5 browsers including",source:"@site/docs/nanoplayer/nanoplayer_supported_browsers.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_supported_browsers",permalink:"/docs/nanoplayer/nanoplayer_supported_browsers",draft:!1,tags:[],version:"current",lastUpdatedAt:1724102288,formattedLastUpdatedAt:"Aug 19, 2024",frontMatter:{id:"nanoplayer_supported_browsers",title:"Support Browsers",sidebar_label:"Supported Browsers"},sidebar:"H5Live Player",previous:{title:"Getting started",permalink:"/docs/nanoplayer/nanoplayer_getting_started"},next:{title:"Player Metrics",permalink:"/docs/nanoplayer/nanoplayer_player_metrics"}},s={},p=[{value:"Browser emulations",id:"browser-emulations",level:3},{value:"Issues on specific systems",id:"issues-on-specific-systems",level:3}],u={toc:p},d="wrapper";function c(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The low-latency nanoStream h5Live Player ",(0,o.yg)("strong",{parentName:"p"},"runs on all full-featured HTML5 browsers")," including"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Safari 10 and higher on iOS, iPadOS and macOS"),(0,o.yg)("li",{parentName:"ul"},"Chrome 54 and higher on desktop and mobile"),(0,o.yg)("li",{parentName:"ul"},"Firefox 48 and higher"),(0,o.yg)("li",{parentName:"ul"},"Edge"),(0,o.yg)("li",{parentName:"ul"},"Internet Explorer 11 (starting Windows 8.1)")),(0,o.yg)("p",null,"For Internet Explorer 11 on Windows 7, H5Live player contains a ",(0,o.yg)("inlineCode",{parentName:"p"},"Flash")," player fallback for ",(0,o.yg)("inlineCode",{parentName:"p"},"RTMP"),"."),(0,o.yg)("h3",{id:"browser-emulations"},"Browser emulations"),(0,o.yg)("p",null,"Browser emulation might not be supported. Using the player in a browser emulation mode could lead to unexpected behaviour due to mismatching conditions.\nIt is highly recommended to use real devices for testing and display."),(0,o.yg)("h3",{id:"issues-on-specific-systems"},"Issues on specific systems"),(0,o.yg)("p",null,"Generally nanoStream H5live player support in a certain browser depends on the\navailability of the involved technologies, codecs and formats.\nFor Windows, macOS and Android:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"HTML5 Video"),(0,o.yg)("li",{parentName:"ul"},"Web Sockets"),(0,o.yg)("li",{parentName:"ul"},"Media Source Extensions"),(0,o.yg)("li",{parentName:"ul"},"Support for ",(0,o.yg)("inlineCode",{parentName:"li"},"fMP4"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"H.264")," Video, ",(0,o.yg)("inlineCode",{parentName:"li"},"AAC")," Audio")),(0,o.yg)("p",null,"On iOS, nanoStream H5Live uses a unique version of ",(0,o.yg)("inlineCode",{parentName:"p"},"HLS")," which works plugin-free on all Safari versions starting iOS 10."),(0,o.yg)("p",null,"On some Android-based mobile devices, the default browser is a stripped-down version not featuring all HTML5 elements. For example, the Samsung Internet browser is rather based on Chromium than Chrome.\nThis results in differences regarding the support of certain technologies, codecs and formats.\n",(0,o.yg)("a",{parentName:"p",href:"https://www.chromium.org/audio-video"},"See here for more info")),(0,o.yg)("p",null,"The Samsung Internet Android browser is one example, where the HTML5 Media Source Extension is missing or disabled, one of the key HTML5 technologies."),(0,o.yg)("p",null,"We have been able to confirm that the MSE feature can be enabled through"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"internet://flags \n")),(0,o.yg)("p",null,"in version 6.4, while the default was ",(0,o.yg)("inlineCode",{parentName:"p"},"'disabled'"),".\nIn version 7(.2) this flag has been removed while the default seems to be ",(0,o.yg)("inlineCode",{parentName:"p"},"'disabled'")," still. We are ongoing monitoring Samsung Internet progress."),(0,o.yg)("p",null,"The nanoPlayer setup call is returning a specific error message in case that the browser does not support one of the required technologies."),(0,o.yg)("admonition",{title:"Setup Error",type:"danger"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Setup Error:"),' "This browser does not fully support HTML5 and H5Live. ',(0,o.yg)("br",null),"\nSupported are:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Chrome >=54 (Windows, macOS, Android)"),(0,o.yg)("li",{parentName:"ul"},"Firefox >=48 (Windows, macOS, Android)"),(0,o.yg)("li",{parentName:"ul"},"Microsoft Edge (Windows), Microsoft Internet Explorer 11 (at least Windows 8)"),(0,o.yg)("li",{parentName:"ul"},'Safari (macOS & at least iOS 10)."'))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'player.setup(config).then(function (config) {\n    console.log("setup success");\n}, function (error) {\n    alert(error.message);\n});\n')))}c.isMDXComponent=!0}}]);