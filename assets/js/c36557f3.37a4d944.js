"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7113],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>v});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=n,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(v,i(i({ref:a},p),{},{components:t})):r.createElement(v,i({ref:a},p))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35528:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),n=(t(67294),t(3905));const o={id:"faq_devices_support",title:"Capture Devices & Camera Support Questions",sidebar_label:"Capture Devices & Camera Support"},i=void 0,s={unversionedId:"faq/faq_devices_support",id:"faq/faq_devices_support",title:"Capture Devices & Camera Support Questions",description:"Questions Overview",source:"@site/docs/faq/faq_devices_support.md",sourceDirName:"faq",slug:"/faq/faq_devices_support",permalink:"/docs/faq/faq_devices_support",draft:!1,tags:[],version:"current",lastUpdatedAt:1694009609,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{id:"faq_devices_support",title:"Capture Devices & Camera Support Questions",sidebar_label:"Capture Devices & Camera Support"}},l={},c=[{value:"Questions Overview",id:"questions-overview",level:2},{value:"Which cameras and capture cards are compatible with nanoStream?",id:"which-cameras-and-capture-cards-are-compatible-with-nanostream",level:2},{value:"Our recommendations:",id:"our-recommendations",level:4},{value:"Can I stream from an IP camera?",id:"can-i-stream-from-an-ip-camera",level:2},{value:"Devices and cameras supported for Android and iOS?",id:"devices-and-cameras-supported-for-android-and-ios",level:2},{value:"Web Applications / nanoStream H5Live",id:"web-applications--nanostream-h5live",level:4},{value:"nanoStream H5Live Player",id:"nanostream-h5live-player",level:5},{value:"nanoStream Webcaster Broadcaster",id:"nanostream-webcaster-broadcaster",level:5},{value:"Native Applications / nanoStream SDKs",id:"native-applications--nanostream-sdks",level:4},{value:"nanoStream native SDK iOS",id:"nanostream-native-sdk-ios",level:5}],p={toc:c},d="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"questions-overview"},"Questions Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#which-cameras-and-capture-cards-are-compatible-with-nanostream"},"Which cameras and capture cards are compatible with nanoStream?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#can-i-stream-from-an-ip-camera"},"Can I stream from an IP camera?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#devices-and-cameras-supported-for-android-and-ios"},"Devices and cameras supported for Android and iOS?"))),(0,n.kt)("h2",{id:"which-cameras-and-capture-cards-are-compatible-with-nanostream"},"Which cameras and capture cards are compatible with nanoStream?"),(0,n.kt)("p",null,"Basically every camera connected to a live encoder hardware or software can be used."),(0,n.kt)("p",null,"The connection to nanoStream Cloud is the RTMP protocol, with the H264/AAC video audio codecs."),(0,n.kt)("p",null,"Most live encoder hard- and software support this protocol."),(0,n.kt)("p",null,"nanoStream Webcaster and nanoMeet use the browser-builtin architecture to connect a camera and encoder,\nbased on HTML technologies and WebRTC. If your camera works with the browser, it should also work with nanoStream Cloud."),(0,n.kt)("p",null,"There is a range of cameras which are tested in our lab and verified."),(0,n.kt)("h4",{id:"our-recommendations"},"Our recommendations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web cams: ",(0,n.kt)("inlineCode",{parentName:"li"},"Logitech")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Microsoft")),(0,n.kt)("li",{parentName:"ul"},"Studio based encoding ",(0,n.kt)("inlineCode",{parentName:"li"},"Blackmagic Decklink"),", Videon, Teradek ")),(0,n.kt)("h2",{id:"can-i-stream-from-an-ip-camera"},"Can I stream from an IP camera?"),(0,n.kt)("p",null,"It depends. You may need to connect the IP cam to a PC as a live source and stream with RTMP,\nWe can also provide custom support for specific IP cameras."),(0,n.kt)("h2",{id:"devices-and-cameras-supported-for-android-and-ios"},"Devices and cameras supported for Android and iOS?"),(0,n.kt)("h4",{id:"web-applications--nanostream-h5live"},"Web Applications / nanoStream H5Live"),(0,n.kt)("h5",{id:"nanostream-h5live-player"},"nanoStream H5Live Player"),(0,n.kt)("p",null,"nanoStream H5Live player is compatible to most HTML5 browsers, either based on - ",(0,n.kt)("inlineCode",{parentName:"p"},"ULL HLS")," (Safari/iOS) - ",(0,n.kt)("inlineCode",{parentName:"p"},"MSE")," (other browsers)"),(0,n.kt)("p",null,"Known to work for H5Live plugin-free are ",(0,n.kt)("inlineCode",{parentName:"p"},"Chrome"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Firefox"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Safari"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Edge")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"IE")," "),(0,n.kt)("p",null,"For Windows 7 / IE there is a Flash player fallback"),(0,n.kt)("admonition",{title:"note",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Some builtin browsers, especially on Android, do not fully support HTML5. This might affect builtin Samsung browsers. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"We recommend using Chrome."))),(0,n.kt)("h5",{id:"nanostream-webcaster-broadcaster"},"nanoStream Webcaster Broadcaster"),(0,n.kt)("p",null,"Most browsers supporting the latest HTML5 WebRTC standards should work.\nApple introduced WebRTC support end 2017 for iOS/Safari, and the WebRTC standard is not fully finalized yet, so there might be specific issues on specific devices. Please contact us for details."),(0,n.kt)("h4",{id:"native-applications--nanostream-sdks"},"Native Applications / nanoStream SDKs"),(0,n.kt)("h5",{id:"nanostream-native-sdk-ios"},"nanoStream native SDK iOS"),(0,n.kt)("p",null,"All iOS devices running ",(0,n.kt)("inlineCode",{parentName:"p"},"iOS8 and higher")," should be compatible with nanoStream Live Encoder for iOS. It is recommended to use at least ",(0,n.kt)("inlineCode",{parentName:"p"},"iPhone 5s or higher")," with the latest updates available."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"nanoStream native SDK for Android")),(0,n.kt)("p",null,"Recommended Android version is ",(0,n.kt)("inlineCode",{parentName:"p"},"5.x or higher")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Compatible devices for Android:")),(0,n.kt)("p",null,"There is a wide range of Android devices known to work with nanoStream, e.g. Samsung Galaxy S and Tab, Google/HTC/LG Nexus/Pixel, Sony XPeria"))}m.isMDXComponent=!0}}]);