"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[295],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>g});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),s=o,g=u["".concat(p,".").concat(s)]||u[s]||y[s]||r;return a?t.createElement(g,i(i({ref:n},m),{},{components:a})):t.createElement(g,i({ref:n},m))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},86261:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(58168),o=(a(96540),a(15680));const r={id:"nanoplayer_feature_reconnect_timeouts",title:"Reconnect and Timeouts",sidebar_label:"Reconnect and Timeouts"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_feature_reconnect_timeouts",id:"nanoplayer/nanoplayer_feature_reconnect_timeouts",title:"Reconnect and Timeouts",description:"Reconnect on unexpected connection close",source:"@site/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_reconnect_timeouts",permalink:"/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts",draft:!1,tags:[],version:"current",lastUpdatedAt:1718025698,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{id:"nanoplayer_feature_reconnect_timeouts",title:"Reconnect and Timeouts",sidebar_label:"Reconnect and Timeouts"},sidebar:"H5Live Player",previous:{title:"UI and customization",permalink:"/docs/nanoplayer/nanoplayer_feature_customization"},next:{title:"Media Error Recovery",permalink:"/docs/nanoplayer/nanoplayer_feature_media_error_recovery"}},p={},c=[{value:"Reconnect on unexpected connection close",id:"reconnect-on-unexpected-connection-close",level:2},{value:"Configuration",id:"reconnect-configuration",level:3},{value:"Example",id:"example",level:3},{value:"Timeouts",id:"timeouts",level:2},{value:"Connection timeout",id:"connection-timeout",level:3},{value:"Loading timeout",id:"loading-timeout",level:3},{value:"Buffering timeout",id:"buffering-timeout",level:3},{value:"Example",id:"example-1",level:3}],m={toc:c},u="wrapper";function y(e){let{components:n,...a}=e;return(0,o.yg)(u,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"reconnect-on-unexpected-connection-close"},"Reconnect on unexpected connection close"),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"nanoStream H5Live Player")," can use an internal reconnect in case the network connection is broke up."),(0,o.yg)("p",null,"Internal network reconnect is ",(0,o.yg)("strong",{parentName:"p"},"supported on all platforms except iOS"),". iOS media stream connections cannot be managed by the player, but by the browser and system.\nFor the supported platforms automatic network reconnect is handling two main cases:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Initial connect failing"),(0,o.yg)("li",{parentName:"ul"},"Connection break up during streaming")),(0,o.yg)("p",null,"The handling is optional and can be disabled. The reconnect is enabled by default with a suggested ",(0,o.yg)("a",{parentName:"p",href:"#reconnect-configuration"},"configuration"),"."),(0,o.yg)("p",null,"During a reconnect no ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..event_onError"},(0,o.yg)("inlineCode",{parentName:"a"},"onError"))," event is being fired.\nThe reconnect will be notified by an ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPause"},(0,o.yg)("inlineCode",{parentName:"a"},"onPause"))," event with ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..pausereason"},(0,o.yg)("inlineCode",{parentName:"a"},"reason"))," 'reconnectionimminent'."),(0,o.yg)("p",null,"If the number of maximum consecutive reconnect attemps is exceeded,\nthe player will fire an ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onError"},(0,o.yg)("inlineCode",{parentName:"a"},"onError"))," event with the related ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..errorcode"},(0,o.yg)("inlineCode",{parentName:"a"},"errorcode"))," followed by an ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPause"},(0,o.yg)("inlineCode",{parentName:"a"},"onPause"))," event. "),(0,o.yg)("admonition",{title:"Important",type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"The internal reconnect handles network connection break up only! It doesn't handle non network related stream break ups or pause reasons different then ",(0,o.yg)("inlineCode",{parentName:"p"},"normal"),".")),(0,o.yg)("admonition",{title:"Important",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Reconnect is not supported on iOS!")),(0,o.yg)("h3",{id:"reconnect-configuration"},"Configuration"),(0,o.yg)("p",null,"The internal reconnect behaviour can be configured via ",(0,o.yg)("inlineCode",{parentName:"p"},"config.playback.reconnect")," object during the initial ",(0,o.yg)("inlineCode",{parentName:"p"},"setup")," call."),(0,o.yg)("admonition",{title:"note",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"You can find more information on how to configure the player in our ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..config"},"API documentation"),".")),(0,o.yg)("p",null,"The reconnect object has multiple parameters to adjust the behaviour. The parameters are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"minDelay")," (default: 2) - The minimum time between reconnect attempts in seconds. The lowest possible value is 1 sec."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"maxDelay")," (default: 10) - The maximum time between reconnect attempts in seconds."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"delaySteps")," (default: 10) - The number of steps till the maximum delay should reached."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"maxRetries")," (default: 10) - The maximum count of reconnect tries. If set to zero no reconnect will be done.")),(0,o.yg)("admonition",{title:"note",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Disable reconnect by setting ",(0,o.yg)("inlineCode",{parentName:"p"},"maxRetries")," to 0.")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'var config = {\n    "source": {\n        ...\n    },\n    "playback" : {\n        ...,\n        "reconnect" : {\n            "minDelay"   : 2,\n            "maxDelay"   : 10,\n            "delaySteps" : 10,\n            "maxRetries" : 10\n        }\n    },\n    "style" : {\n        ...\n    }\n};\n')),(0,o.yg)("h2",{id:"timeouts"},"Timeouts"),(0,o.yg)("admonition",{title:"Important",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Applying custom timeout values should be handled with care.")),(0,o.yg)("p",null,"In case of a timeout, an ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onError"},(0,o.yg)("inlineCode",{parentName:"a"},"onError"))," event is fired with a related ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..errorcode"},(0,o.yg)("inlineCode",{parentName:"a"},"errorcode")),", followed by an ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPause"},(0,o.yg)("inlineCode",{parentName:"a"},"onPause"))," event."),(0,o.yg)("p",null,"Timeouts will be terminated by player state changes like playback starting / resuming or a externally triggered pause."),(0,o.yg)("h3",{id:"connection-timeout"},"Connection timeout"),(0,o.yg)("p",null,"The connection time is the time between opening the connection and having it established. Is the connection established, the timeout will be cleared. The connection time is part of the ",(0,o.yg)("inlineCode",{parentName:"p"},"LOADING")," phase."),(0,o.yg)("p",null,"The default value for ",(0,o.yg)("inlineCode",{parentName:"p"},"playback.timeouts.connecting")," is ",(0,o.yg)("strong",{parentName:"p"},"5 seconds"),".\nIt can be changed to a value within a range (in seconds):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"min: 5"),(0,o.yg)("li",{parentName:"ul"},"max: 30")),(0,o.yg)("admonition",{title:"Note",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("strong",{parentName:"p"},"connection timeout")," value should ",(0,o.yg)("strong",{parentName:"p"},"not")," be ",(0,o.yg)("strong",{parentName:"p"},"higher than")," the ",(0,o.yg)("strong",{parentName:"p"},"loading timeout")," value.")),(0,o.yg)("p",null,"In case the connection timeout is expired, the player state is changing from ",(0,o.yg)("inlineCode",{parentName:"p"},"LOADING")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"PAUSED"),"."),(0,o.yg)("h3",{id:"loading-timeout"},"Loading timeout"),(0,o.yg)("p",null,"The loading time starts with a ",(0,o.yg)("inlineCode",{parentName:"p"},"play")," call and includes the time it takes to establish the connection (",(0,o.yg)("inlineCode",{parentName:"p"},"playback.timeouts.connecting"),") and receiving media data over the connection until the playback has started successfully. Related events are ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onLoading"},(0,o.yg)("inlineCode",{parentName:"a"},"onLoading"))," and ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPlay"},(0,o.yg)("inlineCode",{parentName:"a"},"onPlay")),". The timeout will be cleared if the ",(0,o.yg)("inlineCode",{parentName:"p"},"PLAYING")," state has been entered indecated by the ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onPlay"},(0,o.yg)("inlineCode",{parentName:"a"},"onPlay"))," event."),(0,o.yg)("p",null,"The default value for ",(0,o.yg)("inlineCode",{parentName:"p"},"playback.timeouts.loading")," is ",(0,o.yg)("strong",{parentName:"p"},"20 seconds"),".\nIt can be changed to a value within a range (in seconds):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"min: 10"),(0,o.yg)("li",{parentName:"ul"},"max: 60")),(0,o.yg)("p",null,"In case the loading timeout is expired, the player state is changing from ",(0,o.yg)("inlineCode",{parentName:"p"},"LOADING")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"PAUSED"),"."),(0,o.yg)("h3",{id:"buffering-timeout"},"Buffering timeout"),(0,o.yg)("p",null,"The buffering time starts if the player state changes from ",(0,o.yg)("inlineCode",{parentName:"p"},"PLAYING")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"BUFFERING")," in case not enough media data for playback is being received. Related events are ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onStartBuffering"},(0,o.yg)("inlineCode",{parentName:"a"},"onStartBuffering"))," and ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onStopBuffering"},(0,o.yg)("inlineCode",{parentName:"a"},"onStopBuffering")),". The timeout will be cleared if the playback resumes indecated by the ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onStopBuffering"},(0,o.yg)("inlineCode",{parentName:"a"},"onStopBuffering"))," event."),(0,o.yg)("p",null,"The default value for ",(0,o.yg)("inlineCode",{parentName:"p"},"playback.timeouts.buffering")," is ",(0,o.yg)("strong",{parentName:"p"},"20 seconds"),".\nIt can be changed to a value within a range (in seconds):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"min: 10"),(0,o.yg)("li",{parentName:"ul"},"max: 60")),(0,o.yg)("p",null,"In case the buffering timeout is expired, the player state is changing from ",(0,o.yg)("inlineCode",{parentName:"p"},"BUFFERING")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"PAUSED"),"."),(0,o.yg)("h3",{id:"example-1"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'// with default values:\nvar config = {\n    "source": {\n        ...\n    },\n    "playback" : {\n        ...,\n        "timeouts" : {\n            "connecting" : 5,\n            "loading"    : 20,\n            "buffering"  : 20\n        }\n    },\n    "style" : {\n        ...\n    }\n};\n')))}y.isMDXComponent=!0}}]);