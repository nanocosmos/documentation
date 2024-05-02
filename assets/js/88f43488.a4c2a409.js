"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[9216],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>u});var a=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),s=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=t,u=p["".concat(c,".").concat(m)]||p[m]||y[m]||o;return n?a.createElement(u,i(i({ref:r},d),{},{components:n})):a.createElement(u,i({ref:r},d))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66718:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(58168),t=(n(96540),n(15680));const o={id:"nanoplayer_feature_media_error_recovery",title:"Media Error Recovery",sidebar_label:"Media Error Recovery"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_feature_media_error_recovery",id:"nanoplayer/nanoplayer_feature_media_error_recovery",title:"Media Error Recovery",description:"With the nanoStream H5Live Player Version 4.10.4 an automatic recovery workflow was introduced, meaning that for certain media errors which might occur during playback, the recovery will be triggered.  In this way, even if there is a disturbance during media decoding, playback resumes automatically. This feature brings a better experience for users.",source:"@site/docs/nanoplayer/nanoplayer_feature_media_error_recovery.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_media_error_recovery",permalink:"/docs/nanoplayer/nanoplayer_feature_media_error_recovery",draft:!1,tags:[],version:"current",lastUpdatedAt:1714646189,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{id:"nanoplayer_feature_media_error_recovery",title:"Media Error Recovery",sidebar_label:"Media Error Recovery"},sidebar:"H5Live Player",previous:{title:"Reconnect and Timeouts",permalink:"/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts"},next:{title:"Source defaults",permalink:"/docs/nanoplayer/nanoplayer_feature_source_defaults"}},c={},s=[{value:"Errors covered by automatic recovery",id:"errors-covered-by-automatic-recovery",level:2},{value:"Configuration parameter",id:"configuration-parameter",level:2},{value:"60 seconds time frame",id:"60-seconds-time-frame",level:2},{value:"Warnings",id:"warnings",level:2}],d={toc:s},p="wrapper";function y(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"With the ",(0,t.yg)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.10.4")," an automatic recovery workflow was introduced, meaning that for certain media errors which might occur during playback, the recovery will be triggered.  In this way, even if there is a disturbance during media decoding, playback resumes automatically. This feature brings a better experience for users."),(0,t.yg)("h2",{id:"errors-covered-by-automatic-recovery"},"Errors covered by automatic recovery"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1008")," - ",(0,t.yg)("inlineCode",{parentName:"li"},"'Playback error.'")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"3003")," - ",(0,t.yg)("inlineCode",{parentName:"li"},"'An error occurred when decoding media.'")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"3005")," - ",(0,t.yg)("inlineCode",{parentName:"li"},"'An error occurred while hls playback when decoding video.'")," (since 4.20.2)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"3100")," - ",(0,t.yg)("inlineCode",{parentName:"li"},"'The media source extension changed the state to \\'ended\\'.'")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"3101")," - ",(0,t.yg)("inlineCode",{parentName:"li"},"'An error occurred while buffering on hls playback.'")," (since 4.20.2)")),(0,t.yg)("p",null,"For further information see ",(0,t.yg)("inlineCode",{parentName:"p"},"errorcode")," ",(0,t.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..errorcode"},"definitions"),"."),(0,t.yg)("h2",{id:"configuration-parameter"},"Configuration parameter"),(0,t.yg)("p",null,"You can adjust the maximum number of recoveries allowed within ",(0,t.yg)("strong",{parentName:"p"},"60 seconds"),". To do so, use the config parameter ",(0,t.yg)("inlineCode",{parentName:"p"},"playback.mediaErrorRecoveries"),",\nby setting the value to the desired number. Remember that the default value is ",(0,t.yg)("inlineCode",{parentName:"p"},"3"),", which is recommended to use. To disable the recovery feature set the ",(0,t.yg)("inlineCode",{parentName:"p"},"playback.mediaErrorRecoveries")," value to ",(0,t.yg)("inlineCode",{parentName:"p"},"0"),".\nRead more about playback section in ",(0,t.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..config"},"config"),"."),(0,t.yg)("h2",{id:"60-seconds-time-frame"},"60 seconds time frame"),(0,t.yg)("admonition",{title:"Important",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"It is important to note, that the recoveries are counted in the frame of ",(0,t.yg)("strong",{parentName:"p"},"60 seconds"),".\nWhen a recovery is triggered, the last 60 seconds of playback are checked for the total number of recoveries which were set off. If the number (of recoveries) is higher than the allowed maximum number within this time frame, an error is thrown. If no error occured and there were no issues in i.e. media decoding in the last 60 seconds, the count will start again from 0. The number of allowed recoveries can be customized.")),(0,t.yg)("p",null,"The default number of recoveries is ",(0,t.yg)("inlineCode",{parentName:"p"},"3"),". When the threshold is reached, an error is thrown, followed by a pause with reason: ",(0,t.yg)("inlineCode",{parentName:"p"},"'playbackerror'"),"."),(0,t.yg)("h2",{id:"warnings"},"Warnings"),(0,t.yg)("p",null,"When enabling the media error recovery, each recovery will be indicated by an ",(0,t.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..event_onWarning"},(0,t.yg)("inlineCode",{parentName:"a"},"onWarning"))," event."),(0,t.yg)("p",null,"A sample message which you might see in the console when a warning is thrown:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"'Recovering from media error 3003, recovery 1/3 within the last 60 seconds (12 total).'"))))}y.isMDXComponent=!0}}]);