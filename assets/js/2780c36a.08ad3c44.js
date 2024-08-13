"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1031],{15680:(e,t,a)=>{a.d(t,{xA:()=>v,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},v=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,v=c(e,["components","mdxType","originalType","parentName"]),m=l(a),p=n,u=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return a?r.createElement(u,i(i({ref:t},v),{},{components:a})):r.createElement(u,i({ref:t},v))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},67817:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(58168),n=(a(96540),a(15680));const o={id:"faq_WebRTC_devices",title:"Device Questions",sidebar_label:"Devices"},i=void 0,c={unversionedId:"faq/faq_WebRTC_devices",id:"faq/faq_WebRTC_devices",title:"Device Questions",description:"Questions Overview",source:"@site/docs/faq/faq_WebRTC_devices.md",sourceDirName:"faq",slug:"/faq/faq_WebRTC_devices",permalink:"/docs/faq/faq_WebRTC_devices",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"faq_WebRTC_devices",title:"Device Questions",sidebar_label:"Devices"},sidebar:"FAQ",previous:{title:"General",permalink:"/docs/faq/faq_WebRTC_general"},next:{title:"How to Setup a Low Latency Stream",permalink:"/docs/cloud-frontend/How_to_Setup_Low_Latency_Stream"}},s={},l=[{value:"Questions Overview",id:"questions-overview",level:2},{value:"I do not see a preview of my camera. What can this be?",id:"i-do-not-see-a-preview-of-my-camera-what-can-this-be",level:2},{value:"I am trying to preview my camera but I get an error message. What can this be?",id:"i-am-trying-to-preview-my-camera-but-i-get-an-error-message-what-can-this-be",level:2},{value:"I want to toggle my video device. How can I achieve this?",id:"i-want-to-toggle-my-video-device-how-can-i-achieve-this",level:2}],v={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"questions-overview"},"Questions Overview"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#i-do-not-see-a-preview-of-my-camera-what-can-this-be"},"I do not see a preview of my camera. What can this be?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#i-am-trying-to-preview-my-camera-but-i-get-an-error-message-what-can-this-be"},"I am trying to preview my camera but I get an error message. What can this be?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#i-want-to-toggle-my-video-device-how-can-i-achieve-this"},"I want to toggle my video device. How can I achieve this?"))),(0,n.yg)("h2",{id:"i-do-not-see-a-preview-of-my-camera-what-can-this-be"},"I do not see a preview of my camera. What can this be?"),(0,n.yg)("p",null,"This can have multiple reasons. First be sure to listen to the proper events for device handling - please listen to the event ",(0,n.yg)("inlineCode",{parentName:"p"},"StartPreviewError")," to see why the camera/preview is not working correctly."),(0,n.yg)("h2",{id:"i-am-trying-to-preview-my-camera-but-i-get-an-error-message-what-can-this-be"},"I am trying to preview my camera but I get an error message. What can this be?"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"There is no camera connected."),(0,n.yg)("li",{parentName:"ol"},"Camera is being used by another browser.")),(0,n.yg)("h2",{id:"i-want-to-toggle-my-video-device-how-can-i-achieve-this"},"I want to toggle my video device. How can I achieve this?"),(0,n.yg)("p",null,"You can not switch cameras/devices while a broadcast is active. Please stop the broadcast, switch camera/device and then start the broadcast again. Unfortunately we do not have an example for device toggling, you receive a list of available devices in the ",(0,n.yg)("inlineCode",{parentName:"p"},"ReceivedDeviceList")," event. Please also add at least logs to the error handlers so you can see if something goes wrong:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'user.on("StartPreviewError", function(evt) {\n  // handle error\nconsole.log((event.data.text);\n});\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'user.on("StartBroadcastError", function(evt){\n// handle error\nconsole.log((event.data.text);\n});\n')))}d.isMDXComponent=!0}}]);