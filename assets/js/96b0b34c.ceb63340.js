"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[374],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>m});var a=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(s,".").concat(u)]||p[u]||y[u]||t;return n?a.createElement(m,i(i({ref:r},c),{},{components:n})):a.createElement(m,i({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<t;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13714:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=n(58168),o=(n(96540),n(15680));const t={id:"nanoplayer_api_errors",title:"NanoPlayer Error Codes & Handling",sidebar_label:"NanoPlayer Error Codes & Handling"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_api_errors",id:"nanoplayer/nanoplayer_api_errors",title:"NanoPlayer Error Codes & Handling",description:"General",source:"@site/docs/nanoplayer/nanoplayer_api_errors.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_api_errors",permalink:"/docs/nanoplayer/nanoplayer_api_errors",draft:!1,tags:[],version:"current",lastUpdatedAt:1711640284,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"nanoplayer_api_errors",title:"NanoPlayer Error Codes & Handling",sidebar_label:"NanoPlayer Error Codes & Handling"},sidebar:"H5Live Player",previous:{title:"NanoPlayer",permalink:"/docs/nanoplayer/nanoplayer_api"},next:{title:"FAQ",permalink:"/docs/nanoplayer/nanoplayer_faq"}},s={},d=[{value:"General",id:"general",level:2},{value:"Player Errors",id:"player-errors",level:2},{value:"1005 Playback must be initialized by user gesture",id:"1005-playback-must-be-initialized-by-user-gesture",level:3},{value:"1007 Playback suspended by external reason",id:"1007-playback-suspended-by-external-reason",level:3},{value:"1008 Playback error. Only on iOS.",id:"1008-playback-error-only-on-ios",level:3},{value:"1009 Playback failed because the player was in visibility state &#39;hidden&#39; at load start",id:"1009-playback-failed-because-the-player-was-in-visibility-state-hidden-at-load-start",level:3},{value:"Stream Errors",id:"stream-errors",level:2},{value:"2001 The requested stream can not be found",id:"2001-the-requested-stream-can-not-be-found",level:3},{value:"2002 No media available",id:"2002-no-media-available",level:3},{value:"2003 Not enough media data received",id:"2003-not-enough-media-data-received",level:3},{value:"2004 The source stream has been stopped",id:"2004-the-source-stream-has-been-stopped",level:3},{value:"Media Errors",id:"media-errors",level:2},{value:"3003 An error occurred when decoding media",id:"3003-an-error-occurred-when-decoding-media",level:3},{value:"3005 An error occurred while hls playback when decoding video",id:"3005-an-error-occurred-while-hls-playback-when-decoding-video",level:3},{value:"3100 The media source extension changed the state to &#39;ended&#39;",id:"3100-the-media-source-extension-changed-the-state-to-ended",level:3},{value:"3101 An error occurred while buffering on hls playback",id:"3101-an-error-occurred-while-buffering-on-hls-playback",level:3},{value:"Network Errors",id:"network-errors",level:2},{value:"4001 Could not open connection. Timeout reached",id:"4001-could-not-open-connection-timeout-reached",level:3},{value:"4006 The source request was aborted by timeout",id:"4006-the-source-request-was-aborted-by-timeout",level:3},{value:"4106 Maybe no network, wrong url or server down. Reconnect possible.",id:"4106-maybe-no-network-wrong-url-or-server-down-reconnect-possible",level:3},{value:"Security Errors",id:"security-errors",level:2},{value:"4901 The security service denied access. The authentication token is invalid.",id:"4901-the-security-service-denied-access-the-authentication-token-is-invalid",level:3},{value:"4903 The security service denied access. The url is expired or a token parameter is missing (expires, token, or options).",id:"4903-the-security-service-denied-access-the-url-is-expired-or-a-token-parameter-is-missing-expires-token-or-options",level:3},{value:"Setup Errors",id:"setup-errors",level:2},{value:"5001 &quot;?javascript error?&quot;",id:"5001-javascript-error",level:3},{value:"5002 This browser does not fully support HTML5 and H5Live",id:"5002-this-browser-does-not-fully-support-html5-and-h5live",level:3},{value:"5004 The players source configuration is malformed or missing.",id:"5004-the-players-source-configuration-is-malformed-or-missing",level:3},{value:"Error handling",id:"error-handling",level:2},{value:"Most common errors that shouldn&#39;t be recovered by user due to internal automatic recovery or reconnection workflow",id:"most-common-errors-that-shouldnt-be-recovered-by-user-due-to-internal-automatic-recovery-or-reconnection-workflow",level:3},{value:"Reconnect/replay event flow",id:"reconnectreplay-event-flow",level:3},{value:"Example code snippet",id:"example-code-snippet",level:2}],c={toc:d},p="wrapper";function y(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"general"},"General"),(0,o.yg)("p",null,"In case something went wrong at setup, startup or playback an error will be thrown over the ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..event_onError"},(0,o.yg)("inlineCode",{parentName:"a"},"onError"))," event if registered with an error handler function over ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..config"},(0,o.yg)("inlineCode",{parentName:"a"},"config.events.onError")),"."),(0,o.yg)("p",null,"There are five error groups:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#player-errors"},(0,o.yg)("strong",{parentName:"a"},"General Player Errors"))," ",(0,o.yg)("inlineCode",{parentName:"li"},"1000-1999")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#stream-errors"},(0,o.yg)("strong",{parentName:"a"},"Stream Errors"))," ",(0,o.yg)("inlineCode",{parentName:"li"},"2000-2999")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#media-errors"},(0,o.yg)("strong",{parentName:"a"},"Media Element Errors"))," ",(0,o.yg)("inlineCode",{parentName:"li"},"3000-3999")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#network-errors"},(0,o.yg)("strong",{parentName:"a"},"Network Connection and Security Errors"))," ",(0,o.yg)("inlineCode",{parentName:"li"},"4000-4999")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#setup-errors"},(0,o.yg)("strong",{parentName:"a"},"Setup Errors"))," ",(0,o.yg)("inlineCode",{parentName:"li"},"5000-5999"))),(0,o.yg)("p",null,"Following some of the most frequent errors will be described.",(0,o.yg)("br",null)," To see all errors please have a look at the possible ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..errorcode"},(0,o.yg)("inlineCode",{parentName:"a"},"errorcodes")),"."),(0,o.yg)("h2",{id:"player-errors"},"Player Errors"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"These errors have codes in a ",(0,o.yg)("strong",{parentName:"p"},"range from 1000 to 1999"),".")),(0,o.yg)("p",null,"1xxx codes represent general errors of the player on startup or playback.",(0,o.yg)("br",null),"\nThe most frequent errors here are ",(0,o.yg)("inlineCode",{parentName:"p"},"1005"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"1007"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"1008")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"1009"),"."),(0,o.yg)("h3",{id:"1005-playback-must-be-initialized-by-user-gesture"},"1005 Playback must be initialized by user gesture"),(0,o.yg)("p",null,"This is related to autoplay. There are two possible scenarios for this error occurrence:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Unmuted playback is not able to start due to the browser policy"),(0,o.yg)("li",{parentName:"ol"},"iOS low power mode")),(0,o.yg)("p",null,"It is recommended to review the autoplay settings.",(0,o.yg)("br",null)),(0,o.yg)("p",null,"Read more about how to configure ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_autoplay"},"Autoplay"),"."),(0,o.yg)("h3",{id:"1007-playback-suspended-by-external-reason"},"1007 Playback suspended by external reason"),(0,o.yg)("p",null,"This is indicating a special condition on mobile devices when the playback has been stopped by an event in the browser or system on a mobile device.",(0,o.yg)("br",null)),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"This is a non critical error.")),(0,o.yg)("p",null,"This includes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Player tab going to background after a tab switch"),(0,o.yg)("li",{parentName:"ul"},"Browser application being minimized or closed"),(0,o.yg)("li",{parentName:"ul"},"Browser application being interrupted by the system, e.g. in case of an incoming call or device being locked")),(0,o.yg)("h3",{id:"1008-playback-error-only-on-ios"},"1008 Playback error. Only on iOS."),(0,o.yg)("p",null,"An unexpected error occurred during playback on iOS. This error is recoverable. Read more about ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_feature_media_error_recovery"},"Media Error Recovery"),"."),(0,o.yg)("h3",{id:"1009-playback-failed-because-the-player-was-in-visibility-state-hidden-at-load-start"},"1009 Playback failed because the player was in visibility state 'hidden' at load start"),(0,o.yg)("p",null,"This is related to a policy in some browsers, e.g. Chrome, Chromium based and Safari preventing media playback start in a background tab, a tab that did not have focus/visibility yet."),(0,o.yg)("h2",{id:"stream-errors"},"Stream Errors"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"These errors have codes in a ",(0,o.yg)("strong",{parentName:"p"},"range from 2000 to 2999"),".")),(0,o.yg)("p",null,"2xxx codes are related to fetching the media stream on the player side and the occurrence\nof timeouts during loading or playback. It is about the availability of the stream on the player side,\nwhich can be connected to the general availabilty of the stream, but as well to bad network conditions\non the player side.",(0,o.yg)("br",null),"\nThe most frequent errors here are ",(0,o.yg)("inlineCode",{parentName:"p"},"2001"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"2002"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"2003")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"2004"),"."),(0,o.yg)("h3",{id:"2001-the-requested-stream-can-not-be-found"},"2001 The requested stream can not be found"),(0,o.yg)("p",null,"No stream info and media data received."),(0,o.yg)("h3",{id:"2002-no-media-available"},"2002 No media available"),(0,o.yg)("p",null,"The stream was already playing, but media data stopped receiving."),(0,o.yg)("h3",{id:"2003-not-enough-media-data-received"},"2003 Not enough media data received"),(0,o.yg)("p",null,"Stream info is received, but no media data was fetched."),(0,o.yg)("h3",{id:"2004-the-source-stream-has-been-stopped"},"2004 The source stream has been stopped"),(0,o.yg)("p",null,"The stream was already playing, but the stream was unpublished."),(0,o.yg)("h2",{id:"media-errors"},"Media Errors"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"These errors have codes in a ",(0,o.yg)("strong",{parentName:"p"},"range from 3000 to 3999"),".")),(0,o.yg)("p",null,"3xxx codes are related to media playback errors in the system/browser playback components,\nMediaElement and/or Media Source Extensions.",(0,o.yg)("br",null),"\nThe most present errors here are ",(0,o.yg)("inlineCode",{parentName:"p"},"3003"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"3100")," for MSE playback and ",(0,o.yg)("inlineCode",{parentName:"p"},"3005"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"3101")," for HLS playback. This errors can be recovered.\nRead more about ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_feature_media_error_recovery"},"Media Error Recovery"),"."),(0,o.yg)("h3",{id:"3003-an-error-occurred-when-decoding-media"},"3003 An error occurred when decoding media"),(0,o.yg)("p",null,"An receiving media data chunk couldn't be decoded."),(0,o.yg)("h3",{id:"3005-an-error-occurred-while-hls-playback-when-decoding-video"},"3005 An error occurred while hls playback when decoding video"),(0,o.yg)("p",null,"The receiving media data of the hls stream couldn't be decoded."),(0,o.yg)("h3",{id:"3100-the-media-source-extension-changed-the-state-to-ended"},"3100 The media source extension changed the state to 'ended'"),(0,o.yg)("p",null,"The MSE stopped working."),(0,o.yg)("h3",{id:"3101-an-error-occurred-while-buffering-on-hls-playback"},"3101 An error occurred while buffering on hls playback"),(0,o.yg)("p",null,"The hls playback was interupted during media data buffering."),(0,o.yg)("h2",{id:"network-errors"},"Network Errors"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"These errors have codes in a ",(0,o.yg)("strong",{parentName:"p"},"range from 4000 to 4899"),".")),(0,o.yg)("p",null,"4xxx codes are related to network errors of the media stream connections.\nConnect failures can be caused by bad network conditions, firewall issues\nand in rare cases by overreacting ad blockers."),(0,o.yg)("h3",{id:"4001-could-not-open-connection-timeout-reached"},"4001 Could not open connection. Timeout reached"),(0,o.yg)("p",null,"The websocket server is not available or not present, a timeout for establishing the connection is reached."),(0,o.yg)("h3",{id:"4006-the-source-request-was-aborted-by-timeout"},"4006 The source request was aborted by timeout"),(0,o.yg)("p",null,"An ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer+updateSource"},(0,o.yg)("inlineCode",{parentName:"a"},"updateSource"))," or a ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer+switchStream"},(0,o.yg)("inlineCode",{parentName:"a"},"switchStream"))," request was run into a timeout."),(0,o.yg)("h3",{id:"4106-maybe-no-network-wrong-url-or-server-down-reconnect-possible"},"4106 Maybe no network, wrong url or server down. Reconnect possible."),(0,o.yg)("p",null,"The websocket server is not available or not present, establishing new connection is possible."),(0,o.yg)("h2",{id:"security-errors"},"Security Errors"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"These errors have codes in a ",(0,o.yg)("strong",{parentName:"p"},"range from 4900 to 4999"),".")),(0,o.yg)("h3",{id:"4901-the-security-service-denied-access-the-authentication-token-is-invalid"},"4901 The security service denied access. The authentication token is invalid."),(0,o.yg)("p",null,"Unsuccesful authentication due to invalid token. Read more about ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_token_security"},"Secure playback with H5Live"),"."),(0,o.yg)("h3",{id:"4903-the-security-service-denied-access-the-url-is-expired-or-a-token-parameter-is-missing-expires-token-or-options"},"4903 The security service denied access. The url is expired or a token parameter is missing (expires, token, or options)."),(0,o.yg)("p",null,"Unsuccesful authentication due to expired token or a missing token parameter. Read more about ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_token_security"},"Secure playback with H5Live"),"."),(0,o.yg)("h2",{id:"setup-errors"},"Setup Errors"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"These errors have codes in a ",(0,o.yg)("strong",{parentName:"p"},"range from 5000 to 5999"),".")),(0,o.yg)("p",null,"5xxx are related to errors during the setup/configuration stage, mainly configuration errors and insufficient browser capabilities.\nIn most cases it makes sense to check the configuration that has been used."),(0,o.yg)("h3",{id:"5001-javascript-error"},'5001 "?javascript error?"'),(0,o.yg)("p",null,"A javascript error occured during setup promise execution. Most often the is reason an 'undefined' error within the setup promise resolve or triggered events (e.g. ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onReady"},(0,o.yg)("inlineCode",{parentName:"a"},"onReady")),", ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onMute"},(0,o.yg)("inlineCode",{parentName:"a"},"onMute"))," or ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_api/#NanoPlayer..event_onVolumeChange"},(0,o.yg)("inlineCode",{parentName:"a"},"onVolumeChange")),") during setup.",(0,o.yg)("br",null)),(0,o.yg)("p",null,"Example:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'"undefined is not an object"')),(0,o.yg)("h3",{id:"5002-this-browser-does-not-fully-support-html5-and-h5live"},"5002 This browser does not fully support HTML5 and H5Live"),(0,o.yg)("p",null,"The used browser does not fully support HTML5 and H5Live.",(0,o.yg)("br",null)),(0,o.yg)("p",null,"Supported browsers are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Chrome >=54 (Windows, MacOSX, Android)"),(0,o.yg)("li",{parentName:"ul"},"Firefox >=48 (Windows, MacOSX, Android)"),(0,o.yg)("li",{parentName:"ul"},"Microsoft Edge (Windows)"),(0,o.yg)("li",{parentName:"ul"},"Microsoft Internet Explorer 11 (at least Windows 8)"),(0,o.yg)("li",{parentName:"ul"},"Safari (MacOSX & at least iOS 10)")),(0,o.yg)("h3",{id:"5004-the-players-source-configuration-is-malformed-or-missing"},"5004 The players source configuration is malformed or missing."),(0,o.yg)("p",null,"This setup error occurres when one of the key parameters (ie ",(0,o.yg)("inlineCode",{parentName:"p"},"source")," object, ",(0,o.yg)("inlineCode",{parentName:"p"},"group.id")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"rtmp.streamname"),") in the config object is malformed, therefore not readable for config parsing, or missing.\nProper configuration examples can be found in ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_getting_started"},"Getting started"),"."),(0,o.yg)("h2",{id:"error-handling"},"Error handling"),(0,o.yg)("p",null,"In case of an error, the following choice is to either try to replay/reconnect, or do nothing. "),(0,o.yg)("p",null,"There are 3 available scenarios depending on the error type:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Errors covered by internal recovery or reconnect workflow")),(0,o.yg)("p",null,"a) Media element errors with available configuration for automatic recovery"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"error codes: ",(0,o.yg)("inlineCode",{parentName:"li"},"1008"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"3003"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"3005"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"3100"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"3101"),";")),(0,o.yg)("p",null,"Those are media errors which have an automatic recovery workflow. In case of an error, the recovery will be triggered. The amount of recoveries is set within a time frame of 60 seconds and can be adjusted via player configuration. Read more about ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_feature_media_error_recovery"},"Media Error Recovery"),"."),(0,o.yg)("p",null,"b) Network connection errors with available configuration for reconnection"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"error codes: ",(0,o.yg)("inlineCode",{parentName:"li"},"4102"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4103"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4105"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4106"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4107"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4108"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4109"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4111"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4115"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4500"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"4503"),";")),(0,o.yg)("p",null,"In case of initial connection failure or connection break up during streaming, there is an internal network reconnection workflow supported on all platforms except iOS. Read more about ",(0,o.yg)("a",{parentName:"p",href:"./nanoplayer_feature_reconnect_timeouts"},"Reconnect and Timeouts"),"."),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Shouldn't be attempted to recover by retry")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"error codes related to autoplay policies: ",(0,o.yg)("inlineCode",{parentName:"li"},"1005"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"1007"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"1009"),";"),(0,o.yg)("li",{parentName:"ul"},"error codes related to network security: ",(0,o.yg)("inlineCode",{parentName:"li"},"49xx"),"-",(0,o.yg)("inlineCode",{parentName:"li"},"4999"),";"),(0,o.yg)("li",{parentName:"ul"},"error codes related to setup: ",(0,o.yg)("inlineCode",{parentName:"li"},"5001"),"-",(0,o.yg)("inlineCode",{parentName:"li"},"5010"),";")),(0,o.yg)("p",null,"There are errors which should not be attempted to recover as it would be mutually exclusive with the fundation of particular errors. Most errors in this category are directly linked with the mobile usage (autoplay policies, low power mode, tab switching), as well as security errors group (error codes: ",(0,o.yg)("inlineCode",{parentName:"p"},"49xx"),"-",(0,o.yg)("inlineCode",{parentName:"p"},"4999"),") and setup errors (error codes: ",(0,o.yg)("inlineCode",{parentName:"p"},"5001"),"-",(0,o.yg)("inlineCode",{parentName:"p"},"5010"),")."),(0,o.yg)("p",null,"Example 1: user is switching tabs on the phone and the application with running player is going to the background for a moment. In this situation, no one wants to have a running playback in the background tab. As a result the ",(0,o.yg)("inlineCode",{parentName:"p"},"1007")," error (",(0,o.yg)("inlineCode",{parentName:"p"},"Playback suspended by external reason"),") is thrown and the playback should not be recovered while in the background tab. Therefore, the error recovery is not recommended for this error. "),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Errors for which replay can be attempted")),(0,o.yg)("p",null,"Errors which are not a part of the internal automatic recovery or reconnect worfklow mentioned above (#1), nor are not suitable for the retry (#2) fall under the replay/reconnect attempt category.\nHowever, it is strongly recommended that in this scenario:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"the number of consecutive replay attempts is limited and/or"),(0,o.yg)("li",{parentName:"ul"},"the time/interval between consecutive replay attempts is increasing with the number of attempts")),(0,o.yg)("h3",{id:"most-common-errors-that-shouldnt-be-recovered-by-user-due-to-internal-automatic-recovery-or-reconnection-workflow"},"Most common errors that shouldn't be recovered by user due to internal automatic recovery or reconnection workflow"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"        1005, // Playback must be initialized by user gesture.\n        1007, // Playback suspended by external reason.\n        1008, // Playback error, only on iOS.\n        1009, // Playback failed because the player was in visibility state 'hidden' at load start.\n        3001, // A fetching process of the media aborted by user.\n        3002, // An error occurred when downloading media.\n        3003, // An error occurred when decoding media.\n        3004, // The received audio/video is not supported.\n        3005, // The receiving media data of the hls stream couldn't be decoded.\n        3100, // The media source extension changed the state to 'ended'. NOT AVAILABLE FOR IOS.\n        3101, // An error occurred while buffering on hls playback\n        3200, // An unspecific media error occurred.\n        4003  // Maximum number of reconnection tries reached.\n")),(0,o.yg)("h3",{id:"reconnectreplay-event-flow"},"Reconnect/replay event flow"),(0,o.yg)("p",null,"For errors that meet the conditions of replay/reconnection, there is a recommended workflow.\nBased on the last error code (stored in ",(0,o.yg)("inlineCode",{parentName:"p"},"onError")," handler), the replay decision and following execution will take place (in ",(0,o.yg)("inlineCode",{parentName:"p"},"onPause")," handler). The number of consecutive replay attempts should be limited. "),(0,o.yg)("h2",{id:"example-code-snippet"},"Example code snippet"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml">\n<body>\n    <div id="playerDiv"></div>\n    <p>\n        <input type="checkbox" id="allowReplay">\n        <label for="replay">allow replay</label>\n    </p>\n    <script src="http://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js"><\/script>\n    <script>\n        var player;\n        var config = {\n            "source": {\n                "entries": [\n                    {\n                        "index": 0,\n                        "label": "stream 1",\n                        "tag": "",\n                        "info": {\n                            "bitrate": 1500,\n                            "width": 1280,\n                            "height": 720,\n                            "framerate": 30\n                        },\n                            "rtmp": {\n                                "streamname": "XXXXX-YYYYY" // Enter your stream name\n                            }\n                        },\n                        "bintu": {}\n                    },\n                ],\n                "options": {\n                    "adaption": {\n                        "rule": "none"\n                    },\n                    "switch": {}\n                },\n                "startIndex": 0\n            },\n            "playback": {\n                "autoplay": true,\n                "automute": true,\n                "muted": false\n            },\n            "style": {\n                "controls": true,\n                "displayMutedAutoplay": false\n            },\n            // event callback functions\n            "events": {\n                "onPlay": onPlay,\n                "onPause": onPause,\n                "onError": onError,\n                "onSwitchStreamSuccess": onSwitchStreamSuccess,\n                "onUpdateSourceSuccess": onUpdateSourceSuccess\n            }\n        };\n\n        var allowReplayCheckBox = document.getElementById("allowReplay");\n        // last error\n        var error = null;\n        // current and maximum consecutive replay attempts \n        var playAttempts = 0, maxPlayAttempts = 10;\n        var errorCodesNotReplay = [\n            1005, // Playback must be initialized by user gesture.\n            1007, // Playback suspended by external reason.\n            1008, // Playback error, only on iOS.\n            1009, // Playback failed because the player was in visibility state \'hidden\' at load start.\n            3001, // A fetching process of the media aborted by user.\n            3002, // An error occurred when downloading media.\n            3003, // An error occurred when decoding media.\n            3004, // The received audio/video is not supported.\n            3005, // The receiving media data of the hls stream couldn\'t be decoded.\n            3100, // The media source extension changed the state to \'ended\'. NOT AVAILABLE FOR IOS.\n            3101, // An error occurred while buffering on hls playback\n            3200, // An unspecific media error occurred.\n            4003  // Maximum number of reconnection tries reached.\n        ];\n\n        function resetPlayAttemps () {\n            playAttempts = 0;\n        }\n\n        // playback started successfully\n        function onPlay (e) {\n            resetPlayAttemps();\n        }\n\n        // store error, pause will be fired immediately\n        // error will be checked in pause handler\n        function onError (e) {\n            error = e.data;\n            console.log("error code: " + error.code.toString());\n            console.log("error message: " + error.message);\n        }\n\n        // check for error\n        function onPause (e) {\n            if (error !== null && e.reason !== \'normal\') {\n                console.log("paused after error " + error.code.toString());\n\n                if (allowReplayCheckBox.checked) {\n                    // shouldn\'t replay when error from errorCodesNotReplay occur or error from range: 4001-4999, 5001-5010\n                    if (errorCodesNotReplay.indexOf(error.code) !== -1 || ((error.code >= 4001 && error.code <= 4999) || (error.code >= 5001 && error.code <= 5010))) {\n                        doNotReplay();\n                    } else {\n                        doReplay();\n                    }\n                }\n            }\n            // reset error\n            error = null;\n        }\n\n        function onSwitchStreamSuccess () {\n            console.log("SwitchStreamSuccess");\n            resetPlayAttemps();\n        }\n\n        function onUpdateSourceSuccess () {\n            console.log("UpdateSourceSuccess");\n            resetPlayAttemps();\n        }\n\n        function doNotReplay () {\n            console.log("no replay scheduled");\n        }\n\n        function doReplay () {\n            try {\n                if (player && player.play) {\n                    if (playAttempts < maxPlayAttempts) {\n                        playAttempts++;\n                        console.log("replay attempt " + playAttempts.toString());\n                        player.play();\n                    } else {\n                        console.log(\'max replays reached\');\n                    }\n                }\n            } catch (err) { }\n        }\n\n        document.addEventListener(\'DOMContentLoaded\', function () {\n            player = new NanoPlayer("playerDiv");\n            player.setup(config).then(function (config) {\n                console.log("setup success");\n                console.log("config: " + JSON.stringify(config, undefined, 4));\n            }, function (error) {\n                console.log("setup reject error code: " + error.code.toString());\n                console.log("setup reject error message: " + error.message);\n            });\n        });\n    <\/script>\n</body>\n\n</html>\n')))}y.isMDXComponent=!0}}]);