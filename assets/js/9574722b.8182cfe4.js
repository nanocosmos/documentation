"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[2735],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||r;return t?a.createElement(f,i(i({ref:n},m),{},{components:t})):a.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={id:"nanoplayer_feature_reconnect_timeouts",title:"Reconnect and Timeouts",sidebar_label:"Reconnect and Timeouts"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_feature_reconnect_timeouts",id:"nanoplayer/nanoplayer_feature_reconnect_timeouts",title:"Reconnect and Timeouts",description:"Reconnect on unexpected connection close",source:"@site/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_reconnect_timeouts",permalink:"/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts",draft:!1,tags:[],version:"current",lastUpdatedAt:1694009609,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{id:"nanoplayer_feature_reconnect_timeouts",title:"Reconnect and Timeouts",sidebar_label:"Reconnect and Timeouts"},sidebar:"H5Live Player",previous:{title:"UI and customization",permalink:"/docs/nanoplayer/nanoplayer_feature_customization"},next:{title:"Media Error Recovery",permalink:"/docs/nanoplayer/nanoplayer_feature_media_error_recovery"}},p={},c=[{value:"Reconnect on unexpected connection close",id:"reconnect-on-unexpected-connection-close",level:2},{value:"Configuration",id:"reconnect-configuration",level:3},{value:"Example",id:"example",level:3},{value:"Timeouts",id:"timeouts",level:2},{value:"Connection timeout",id:"connection-timeout",level:3},{value:"Loading timeout",id:"loading-timeout",level:3},{value:"Buffering timeout",id:"buffering-timeout",level:3},{value:"Example",id:"example-1",level:3}],m={toc:c},u="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"reconnect-on-unexpected-connection-close"},"Reconnect on unexpected connection close"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"nanoStream H5Live Player")," can use an internal reconnect in case the network connection is broke up."),(0,o.kt)("p",null,"Internal network reconnect is ",(0,o.kt)("strong",{parentName:"p"},"supported on all platforms except iOS"),". iOS media stream connections cannot be managed by the player, but by the browser and system.\nFor the supported platforms automatic network reconnect is handling two main cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initial connect failing"),(0,o.kt)("li",{parentName:"ul"},"Connection break up during streaming")),(0,o.kt)("p",null,"The handling is optional and can be disabled. The reconnect is enabled by default with a suggested ",(0,o.kt)("a",{parentName:"p",href:"#reconnect-configuration"},"configuration"),"."),(0,o.kt)("p",null,"During a reconnect no ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..event_onError"},(0,o.kt)("inlineCode",{parentName:"a"},"onError"))," event is being fired.\nThe reconnect will be notified by an ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPause"},(0,o.kt)("inlineCode",{parentName:"a"},"onPause"))," event with ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..pausereason"},(0,o.kt)("inlineCode",{parentName:"a"},"reason"))," 'reconnectionimminent'."),(0,o.kt)("p",null,"If the number of maximum consecutive reconnect attemps is exceeded,\nthe player will fire an ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onError"},(0,o.kt)("inlineCode",{parentName:"a"},"onError"))," event with the related ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..errorcode"},(0,o.kt)("inlineCode",{parentName:"a"},"errorcode"))," followed by an ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPause"},(0,o.kt)("inlineCode",{parentName:"a"},"onPause"))," event. "),(0,o.kt)("admonition",{title:"Important",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The internal reconnect handles network connection break up only! It doesn't handle non network related stream break ups or pause reasons different then ",(0,o.kt)("inlineCode",{parentName:"p"},"normal"),".")),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Reconnect is not supported on iOS!")),(0,o.kt)("h3",{id:"reconnect-configuration"},"Configuration"),(0,o.kt)("p",null,"The internal reconnect behaviour can be configured via ",(0,o.kt)("inlineCode",{parentName:"p"},"config.playback.reconnect")," object during the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," call."),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can find more information on how to configure the player in our ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..config"},"API documentation"),".")),(0,o.kt)("p",null,"The reconnect object has multiple parameters to adjust the behaviour. The parameters are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minDelay")," (default: 2) - The minimum time between reconnect attempts in seconds. The lowest possible value is 1 sec."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxDelay")," (default: 10) - The maximum time between reconnect attempts in seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delaySteps")," (default: 10) - The number of steps till the maximum delay should reached."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxRetries")," (default: 10) - The maximum count of reconnect tries. If set to zero no reconnect will be done.")),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Disable reconnect by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"maxRetries")," to 0.")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var config = {\n    "source": {\n        ...\n    },\n    "playback" : {\n        ...,\n        "reconnect" : {\n            "minDelay"   : 2,\n            "maxDelay"   : 10,\n            "delaySteps" : 10,\n            "maxRetries" : 10\n        }\n    },\n    "style" : {\n        ...\n    }\n};\n')),(0,o.kt)("h2",{id:"timeouts"},"Timeouts"),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Applying custom timeout values should be handled with care.")),(0,o.kt)("p",null,"In case of a timeout, an ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onError"},(0,o.kt)("inlineCode",{parentName:"a"},"onError"))," event is fired with a related ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..errorcode"},(0,o.kt)("inlineCode",{parentName:"a"},"errorcode")),", followed by an ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPause"},(0,o.kt)("inlineCode",{parentName:"a"},"onPause"))," event."),(0,o.kt)("p",null,"Timeouts will be terminated by player state changes like playback starting / resuming or a externally triggered pause."),(0,o.kt)("h3",{id:"connection-timeout"},"Connection timeout"),(0,o.kt)("p",null,"The connection time is the time between opening the connection and having it established. Is the connection established, the timeout will be cleared. The connection time is part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOADING")," phase."),(0,o.kt)("p",null,"The default value for ",(0,o.kt)("inlineCode",{parentName:"p"},"playback.timeouts.connecting")," is ",(0,o.kt)("strong",{parentName:"p"},"5 seconds"),".\nIt can be changed to a value within a range (in seconds):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"min: 5"),(0,o.kt)("li",{parentName:"ul"},"max: 30")),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"connection timeout")," value should ",(0,o.kt)("strong",{parentName:"p"},"not")," be ",(0,o.kt)("strong",{parentName:"p"},"higher than")," the ",(0,o.kt)("strong",{parentName:"p"},"loading timeout")," value.")),(0,o.kt)("p",null,"In case the connection timeout is expired, the player state is changing from ",(0,o.kt)("inlineCode",{parentName:"p"},"LOADING")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PAUSED"),"."),(0,o.kt)("h3",{id:"loading-timeout"},"Loading timeout"),(0,o.kt)("p",null,"The loading time starts with a ",(0,o.kt)("inlineCode",{parentName:"p"},"play")," call and includes the time it takes to establish the connection (",(0,o.kt)("inlineCode",{parentName:"p"},"playback.timeouts.connecting"),") and receiving media data over the connection until the playback has started successfully. Related events are ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onLoading"},(0,o.kt)("inlineCode",{parentName:"a"},"onLoading"))," and ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPlay"},(0,o.kt)("inlineCode",{parentName:"a"},"onPlay")),". The timeout will be cleared if the ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYING")," state has been entered indecated by the ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPlay"},(0,o.kt)("inlineCode",{parentName:"a"},"onPlay"))," event."),(0,o.kt)("p",null,"The default value for ",(0,o.kt)("inlineCode",{parentName:"p"},"playback.timeouts.loading")," is ",(0,o.kt)("strong",{parentName:"p"},"20 seconds"),".\nIt can be changed to a value within a range (in seconds):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"min: 10"),(0,o.kt)("li",{parentName:"ul"},"max: 60")),(0,o.kt)("p",null,"In case the loading timeout is expired, the player state is changing from ",(0,o.kt)("inlineCode",{parentName:"p"},"LOADING")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PAUSED"),"."),(0,o.kt)("h3",{id:"buffering-timeout"},"Buffering timeout"),(0,o.kt)("p",null,"The buffering time starts if the player state changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYING")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"BUFFERING")," in case not enough media data for playback is being received. Related events are ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onStartBuffering"},(0,o.kt)("inlineCode",{parentName:"a"},"onStartBuffering"))," and ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onStopBuffering"},(0,o.kt)("inlineCode",{parentName:"a"},"onStopBuffering")),". The timeout will be cleared if the playback resumes indecated by the ",(0,o.kt)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onStopBuffering"},(0,o.kt)("inlineCode",{parentName:"a"},"onStopBuffering"))," event."),(0,o.kt)("p",null,"The default value for ",(0,o.kt)("inlineCode",{parentName:"p"},"playback.timeouts.buffering")," is ",(0,o.kt)("strong",{parentName:"p"},"20 seconds"),".\nIt can be changed to a value within a range (in seconds):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"min: 10"),(0,o.kt)("li",{parentName:"ul"},"max: 60")),(0,o.kt)("p",null,"In case the buffering timeout is expired, the player state is changing from ",(0,o.kt)("inlineCode",{parentName:"p"},"BUFFERING")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PAUSED"),"."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// with default values:\nvar config = {\n    "source": {\n        ...\n    },\n    "playback" : {\n        ...,\n        "timeouts" : {\n            "connecting" : 5,\n            "loading"    : 20,\n            "buffering"  : 20\n        }\n    },\n    "style" : {\n        ...\n    }\n};\n')))}s.isMDXComponent=!0}}]);