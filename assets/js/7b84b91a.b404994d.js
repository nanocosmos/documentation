"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[2245],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>m});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},80698:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(58168),a=(n(96540),n(15680));const o={id:"nanostream_webrtc_screen_sharing",title:"Screen Sharing",sidebar_label:"Screen Sharing"},i=void 0,s={unversionedId:"webrtc-v5/nanostream_webrtc_screen_sharing",id:"webrtc-v5/nanostream_webrtc_screen_sharing",title:"Screen Sharing",description:"The nanoStream Webcaster supports screen sharing!",source:"@site/docs/webrtc-v5/nanostream_webrtc_screen_sharing.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_screen_sharing",permalink:"/docs/webrtc-v5/nanostream_webrtc_screen_sharing",draft:!1,tags:[],version:"current",lastUpdatedAt:1709564238,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{id:"nanostream_webrtc_screen_sharing",title:"Screen Sharing",sidebar_label:"Screen Sharing"},sidebar:"nanoStream Webcaster V5",previous:{title:"Secure ingest with Webcaster",permalink:"/docs/webrtc-v5/nanostream_webrtc_secure_ingest"},next:{title:"Multiple Webcasts",permalink:"/docs/webrtc-v5/nanostream_webrtc_multiple_webcasts"}},c={},l=[{value:"Supported Browsers",id:"supported-browsers",level:2},{value:"Setup Screen Sharing",id:"setup-screen-sharing",level:2}],u={toc:l},p="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The nanoStream Webcaster supports screen sharing!"),(0,a.yg)("p",null,"Instead of a web camera you can use a screen or a window, depending on the browser used, as a live video source."),(0,a.yg)("h2",{id:"supported-browsers"},"Supported Browsers"),(0,a.yg)("p",null,"Screen sharing is currently available for desktop browsers:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Google Chrome"),(0,a.yg)("li",{parentName:"ul"},"Firefox"),(0,a.yg)("li",{parentName:"ul"},"Safari 13+")),(0,a.yg)("p",null,"Screen sharing is a built-in feature in modern desktop browsers. For early Google Chrome versions, a certified browser extension was required due to Google security policy. Starting from Google Chrome 72+, however, screen share is supported without the need to install the browser extention."),(0,a.yg)("h2",{id:"setup-screen-sharing"},"Setup Screen Sharing"),(0,a.yg)("p",null,"Screen sharing is enabled by setting video source to ",(0,a.yg)("inlineCode",{parentName:"p"},"screen")," in the configuration object passed to ",(0,a.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig"},"startPreview(config)"),". Note that the default video source's value is ",(0,a.yg)("inlineCode",{parentName:"p"},"camera"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// to enable Screen Sharing, we pass \"screen\" as a source to the video device configuration\n\nvar videoDeviceConfig = {\n  source: 'screen'\n};\n\nvar audioDeviceConfig = {\n  device: 0 // we select the first available audio device\n};\n\nvar config = {\n  videoDeviceConfig: videoDeviceConfig,\n  audioDeviceConfig: audioDeviceConfig,\n  elementId: videoElement\n};\n \nuser.startPreview(config);\n")))}d.isMDXComponent=!0}}]);