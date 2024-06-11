"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[23],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>y});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),c=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=t,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(y,i(i({ref:a},p),{},{components:r})):n.createElement(y,i({ref:a},p))}));function y(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18141:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(58168),t=(r(96540),r(15680));const o={id:"faq_devices_support",title:"Capture Devices & Camera Support Questions",sidebar_label:"Capture Devices & Camera Support"},i=void 0,s={unversionedId:"faq/faq_devices_support",id:"faq/faq_devices_support",title:"Capture Devices & Camera Support Questions",description:"Questions Overview",source:"@site/docs/faq/faq_devices_support.md",sourceDirName:"faq",slug:"/faq/faq_devices_support",permalink:"/docs/faq/faq_devices_support",draft:!1,tags:[],version:"current",lastUpdatedAt:1718107861,formattedLastUpdatedAt:"Jun 11, 2024",frontMatter:{id:"faq_devices_support",title:"Capture Devices & Camera Support Questions",sidebar_label:"Capture Devices & Camera Support"}},l={},c=[{value:"Questions Overview",id:"questions-overview",level:2},{value:"Which cameras and capture cards are compatible with nanoStream?",id:"which-cameras-and-capture-cards-are-compatible-with-nanostream",level:2},{value:"Our recommendations:",id:"our-recommendations",level:4},{value:"Can I stream from an IP camera?",id:"can-i-stream-from-an-ip-camera",level:2},{value:"Devices and cameras supported for Android and iOS?",id:"devices-and-cameras-supported-for-android-and-ios",level:2},{value:"Web Applications / nanoStream H5Live",id:"web-applications--nanostream-h5live",level:4},{value:"nanoStream H5Live Player",id:"nanostream-h5live-player",level:5},{value:"nanoStream Webcaster Broadcaster",id:"nanostream-webcaster-broadcaster",level:5},{value:"Native Applications / nanoStream SDKs",id:"native-applications--nanostream-sdks",level:4},{value:"nanoStream native SDK iOS",id:"nanostream-native-sdk-ios",level:5}],p={toc:c},d="wrapper";function m(e){let{components:a,...r}=e;return(0,t.yg)(d,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"questions-overview"},"Questions Overview"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#which-cameras-and-capture-cards-are-compatible-with-nanostream"},"Which cameras and capture cards are compatible with nanoStream?")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#can-i-stream-from-an-ip-camera"},"Can I stream from an IP camera?")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#devices-and-cameras-supported-for-android-and-ios"},"Devices and cameras supported for Android and iOS?"))),(0,t.yg)("h2",{id:"which-cameras-and-capture-cards-are-compatible-with-nanostream"},"Which cameras and capture cards are compatible with nanoStream?"),(0,t.yg)("p",null,"Basically every camera connected to a live encoder hardware or software can be used."),(0,t.yg)("p",null,"The connection to nanoStream Cloud is the RTMP protocol, with the H264/AAC video audio codecs."),(0,t.yg)("p",null,"Most live encoder hard- and software support this protocol."),(0,t.yg)("p",null,"nanoStream Webcaster and nanoMeet use the browser-builtin architecture to connect a camera and encoder,\nbased on HTML technologies and WebRTC. If your camera works with the browser, it should also work with nanoStream Cloud."),(0,t.yg)("p",null,"There is a range of cameras which are tested in our lab and verified."),(0,t.yg)("h4",{id:"our-recommendations"},"Our recommendations:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Web cams: ",(0,t.yg)("inlineCode",{parentName:"li"},"Logitech")," or ",(0,t.yg)("inlineCode",{parentName:"li"},"Microsoft")),(0,t.yg)("li",{parentName:"ul"},"Studio based encoding ",(0,t.yg)("inlineCode",{parentName:"li"},"Blackmagic Decklink"),", Videon, Teradek ")),(0,t.yg)("h2",{id:"can-i-stream-from-an-ip-camera"},"Can I stream from an IP camera?"),(0,t.yg)("p",null,"It depends. You may need to connect the IP cam to a PC as a live source and stream with RTMP,\nWe can also provide custom support for specific IP cameras."),(0,t.yg)("h2",{id:"devices-and-cameras-supported-for-android-and-ios"},"Devices and cameras supported for Android and iOS?"),(0,t.yg)("h4",{id:"web-applications--nanostream-h5live"},"Web Applications / nanoStream H5Live"),(0,t.yg)("h5",{id:"nanostream-h5live-player"},"nanoStream H5Live Player"),(0,t.yg)("p",null,"nanoStream H5Live player is compatible to most HTML5 browsers, either based on - ",(0,t.yg)("inlineCode",{parentName:"p"},"ULL HLS")," (Safari/iOS) - ",(0,t.yg)("inlineCode",{parentName:"p"},"MSE")," (other browsers)"),(0,t.yg)("p",null,"Known to work for H5Live plugin-free are ",(0,t.yg)("inlineCode",{parentName:"p"},"Chrome"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Firefox"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Safari"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Edge")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"IE")," "),(0,t.yg)("p",null,"For Windows 7 / IE there is a Flash player fallback"),(0,t.yg)("admonition",{title:"note",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"Some builtin browsers, especially on Android, do not fully support HTML5. This might affect builtin Samsung browsers. ",(0,t.yg)("br",null),"\n",(0,t.yg)("strong",{parentName:"p"},"We recommend using Chrome."))),(0,t.yg)("h5",{id:"nanostream-webcaster-broadcaster"},"nanoStream Webcaster Broadcaster"),(0,t.yg)("p",null,"Most browsers supporting the latest HTML5 WebRTC standards should work.\nApple introduced WebRTC support end 2017 for iOS/Safari, and the WebRTC standard is not fully finalized yet, so there might be specific issues on specific devices. Please contact us for details."),(0,t.yg)("h4",{id:"native-applications--nanostream-sdks"},"Native Applications / nanoStream SDKs"),(0,t.yg)("h5",{id:"nanostream-native-sdk-ios"},"nanoStream native SDK iOS"),(0,t.yg)("p",null,"All iOS devices running ",(0,t.yg)("inlineCode",{parentName:"p"},"iOS8 and higher")," should be compatible with nanoStream Live Encoder for iOS. It is recommended to use at least ",(0,t.yg)("inlineCode",{parentName:"p"},"iPhone 5s or higher")," with the latest updates available."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"nanoStream native SDK for Android")),(0,t.yg)("p",null,"Recommended Android version is ",(0,t.yg)("inlineCode",{parentName:"p"},"5.x or higher")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Compatible devices for Android:")),(0,t.yg)("p",null,"There is a wide range of Android devices known to work with nanoStream, e.g. Samsung Galaxy S and Tab, Google/HTC/LG Nexus/Pixel, Sony XPeria"))}m.isMDXComponent=!0}}]);