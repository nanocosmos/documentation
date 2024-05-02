"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1350],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(58168),o=(n(96540),n(15680));const r={id:"bintu_ios_sample",title:"iOS Streaming App in 5 Minutes",sidebar_label:"iOS Streaming App in 5 Minutes"},i=void 0,l={unversionedId:"nanostream/ios/bintu_ios_sample",id:"nanostream/ios/bintu_ios_sample",title:"iOS Streaming App in 5 Minutes",description:"Introduction",source:"@site/docs/nanostream/ios/bintu_ios_sample.md",sourceDirName:"nanostream/ios",slug:"/nanostream/ios/bintu_ios_sample",permalink:"/docs/nanostream/ios/bintu_ios_sample",draft:!1,tags:[],version:"current",lastUpdatedAt:1714646189,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{id:"bintu_ios_sample",title:"iOS Streaming App in 5 Minutes",sidebar_label:"iOS Streaming App in 5 Minutes"},sidebar:"nanoStream Apps & SDKs",previous:{title:"bintu.live client SDK",permalink:"/docs/nanostream/ios/bintu_ios_sdk"},next:{title:"License Deployment Information",permalink:"/docs/nanostream/ios/nanostream_ios_license_deployment"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Broadcast (Publisher) App",id:"broadcast-publisher-app",level:2},{value:"How to use the broadcaster",id:"how-to-use-the-broadcaster",level:3},{value:"Player App",id:"player-app",level:2},{value:"All Together",id:"all-together",level:2},{value:"Next steps",id:"next-steps",level:4},{value:"New to bintu.live?",id:"new-to-bintulive",level:3},{value:"Getting help",id:"getting-help",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"This guide will show you how you can get a head start on your competition for your end-to-end streaming platform by leveraging tried and true nanoStream technology."),(0,o.yg)("p",null,"You will be able to create a ",(0,o.yg)("em",{parentName:"p"},"live video broadcaster app")," with nanoStream SDK, connected to the nanoStream Cloud / bintu.live streaming platform. "),(0,o.yg)("p",null,"You do not need to install your own server, just stream to the URL you get from bintu! "),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"nanoStream SDK 4.5.5")," or later"),(0,o.yg)("li",{parentName:"ul"},"a nanoStream SDK license for iOS (valid for publish & playback)"),(0,o.yg)("li",{parentName:"ul"},"a valid bintu.live API key"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"XCode 7.2")," or later on ",(0,o.yg)("inlineCode",{parentName:"li"},"Mac OS 10.10")," or later"),(0,o.yg)("li",{parentName:"ul"},"bintu.live connector requires at least ",(0,o.yg)("inlineCode",{parentName:"li"},"iOS 8.0"))),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"broadcast-publisher-app"},"Broadcast (Publisher) App"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Open one of the sample projects from the SDK samples folder in ",(0,o.yg)("inlineCode",{parentName:"li"},"Xcode"),". We recommend getting started with the BintuStream sample, which includes both live encoding and playback. ")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"BintuStream is written in ",(0,o.yg)("inlineCode",{parentName:"p"},"Swift"),". The BintuEncoder and BintuPlayer samples can also be used, they are written in ",(0,o.yg)("inlineCode",{parentName:"p"},"ObjC"),".")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Add the license and API keys"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Open ",(0,o.yg)("inlineCode",{parentName:"li"},"nanoLicenseConfig.h"),"."),(0,o.yg)("li",{parentName:"ul"},"insert your License and API keys.")))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'myLicenseKey = @"nlic:1.2:..."\nmyApiKey  = @"12773-..."\n\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Build and run the application.")),(0,o.yg)("h3",{id:"how-to-use-the-broadcaster"},"How to use the broadcaster"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Run the app"),(0,o.yg)("li",{parentName:"ul"},"Enter your API key if not hardcoded"),(0,o.yg)("li",{parentName:"ul"},"Wait for the bandwidth check to finish or just skip to use defaults"),(0,o.yg)("li",{parentName:"ul"},"Tap the ",(0,o.yg)("inlineCode",{parentName:"li"},"start broadcast")," button")),(0,o.yg)("p",null,"You should see the result logged to the console: ",(0,o.yg)("inlineCode",{parentName:"p"},"You are live!"),". The streamer automatically gets a stream URL from bintu.live and starts streaming. The stream URL is logged as well."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"In case of error please check the error message in the console log, your API key and your account. Contact us for help.")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://www.nanocosmos.de/v4/documentation/_media/run_bandwith_check1.png",alt:"bandwidth check"}),"\n",(0,o.yg)("img",{parentName:"p",src:"https://www.nanocosmos.de/v4/documentation/_media/anzeige_bandwidth_in_stream1.png",alt:"img"})),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"player-app"},"Player App"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Open the project ",(0,o.yg)("inlineCode",{parentName:"li"},"PlayingExample")," from the SDK samples folder in Xcode."),(0,o.yg)("li",{parentName:"ul"},"Build and run the application. (your license and API keys should be used from the same file as the broadcaster app)")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"If you tap the play button, you should see your live video sent from the broacaster device! In case of error, please check the debug console. The error message should tell you something about the error. Check your API and license keys. Contact us for help.")),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"all-together"},"All Together"),(0,o.yg)("p",null,"Congratulations! You now have everything you need for your own streaming platform."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"You can now run the broadcaster app on one device and the player app on another. You can start a stream in the broadcaster app (via ",(0,o.yg)("inlineCode",{parentName:"p"},"Start")," button) and can play it directly in the player app (via ",(0,o.yg)("inlineCode",{parentName:"p"},"Play")," button). The player app assumes that you want to play the latest stream on your account that is live.")),(0,o.yg)("h4",{id:"next-steps"},"Next steps"),(0,o.yg)("p",null,"From here on you would probably want to integrate the live streaming function into your own backend. If you want to know more how these sample apps were created and how you can set up your own ones, visit this ",(0,o.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/v4/documentation/nanostream-sdk-bintu-ios-getting-started-tutorial"},"step-by-step tutorial"),"."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"These samples are pretty basic for better understanding what is going on. For a more complete sample on how to use nanoStream and bintu.live, see the samples ",(0,o.yg)("inlineCode",{parentName:"p"},"BintuEncoder")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"BintuPlayer")," in the SDK ",(0,o.yg)("inlineCode",{parentName:"p"},"samples")," folder.")),(0,o.yg)("h3",{id:"new-to-bintulive"},"New to bintu.live?"),(0,o.yg)("p",null,"If you don't have a bintu.live account yet click ",(0,o.yg)("a",{parentName:"p",href:"../../cloud/cloud_getting_started"},"here")," to learn how to create one."),(0,o.yg)("h3",{id:"getting-help"},"Getting help"),(0,o.yg)("p",null,"Contact us for additional help, or additional functions, full-feature apps and consulting services!"))}d.isMDXComponent=!0}}]);