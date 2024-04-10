"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5882],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const a={id:"nanostream_webrtc_support",title:"Support",sidebar_label:"Support"},i=void 0,s={unversionedId:"webrtc-v5/nanostream_webrtc_support",id:"webrtc-v5/nanostream_webrtc_support",title:"Support",description:"Reporting bugs or issues",source:"@site/docs/webrtc-v5/nanostream_webrtc_support.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_support",permalink:"/docs/webrtc-v5/nanostream_webrtc_support",draft:!1,tags:[],version:"current",lastUpdatedAt:1712739692,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"nanostream_webrtc_support",title:"Support",sidebar_label:"Support"},sidebar:"nanoStream Webcaster V5",previous:{title:"Browser Demos",permalink:"/docs/webrtc-v5/nanostream_webrtc_demos"},next:{title:"Secure ingest with Webcaster",permalink:"/docs/webrtc-v5/nanostream_webrtc_secure_ingest"}},l={},p=[{value:"Reporting bugs or issues",id:"reporting-bugs-or-issues",level:2},{value:"Log information",id:"log-information",level:3},{value:"Browser console log",id:"browser-console-log",level:4},{value:"Use debug-log information",id:"use-debug-log-information",level:4},{value:"Chrome webrtc-internals",id:"chrome-webrtc-internals",level:4},{value:"Remote Support",id:"remote-support",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"reporting-bugs-or-issues"},"Reporting bugs or issues"),(0,o.yg)("p",null,"To report any bugs or issues, please send a complete issue report including the following:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"a description of the issue and expected results"),(0,o.yg)("li",{parentName:"ul"},"the configuration you are using for webrtc, bintu.live and h5live"),(0,o.yg)("li",{parentName:"ul"},"potential stream IDs which show the issue"),(0,o.yg)("li",{parentName:"ul"},"how to replicate the issue")),(0,o.yg)("h3",{id:"log-information"},"Log information"),(0,o.yg)("h4",{id:"browser-console-log"},"Browser console log"),(0,o.yg)("p",null,"Press ",(0,o.yg)("inlineCode",{parentName:"p"},"Ctrl+Shift+J")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"F12")," (Windows / Linux) or ",(0,o.yg)("inlineCode",{parentName:"p"},"Cmd+Opt+J")," (Mac)\ncopy/paste the result of the console"),(0,o.yg)("h4",{id:"use-debug-log-information"},"Use debug-log information"),(0,o.yg)("p",null,"Enhanced logging can be enabled by adding ",(0,o.yg)("inlineCode",{parentName:"p"},"&debug=3")," to the web page URL"),(0,o.yg)("h4",{id:"chrome-webrtc-internals"},"Chrome webrtc-internals"),(0,o.yg)("p",null,"Open a separate browser tab and open the URL ",(0,o.yg)("inlineCode",{parentName:"p"},"chrome://webrtc-internals")," click ",(0,o.yg)("inlineCode",{parentName:"p"},"dump")," and download the data and send to us."),(0,o.yg)("h3",{id:"remote-support"},"Remote Support"),(0,o.yg)("admonition",{title:"Remote support session",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Any potential issues might be best resolved based on a remote support session, dependent on your support level.\n",(0,o.yg)("strong",{parentName:"p"},"Please ",(0,o.yg)("a",{parentName:"strong",href:"mailto:support@nanocosmos.de"},"contact")," us to arrange an online meeting."))))}d.isMDXComponent=!0}}]);