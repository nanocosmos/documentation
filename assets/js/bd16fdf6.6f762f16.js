"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[2990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=i.createContext({}),u=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(d,".").concat(m)]||s[m]||l[m]||o;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const o={},a=void 0,c={unversionedId:"nanostream/directshow/directshow_video_mixer",id:"nanostream/directshow/directshow_video_mixer",title:"directshow_video_mixer",description:"Video Mixer / Picture-in-Picture",source:"@site/docs/nanostream/directshow/directshow_video_mixer.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_video_mixer",permalink:"/docs/nanostream/directshow/directshow_video_mixer",draft:!1,tags:[],version:"current",lastUpdatedAt:1694009609,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{}},d={},u=[{value:"Video Mixer / Picture-in-Picture",id:"video-mixer--picture-in-picture",level:2},{value:"Requirements:",id:"requirements",level:4},{value:"Picture-in-picture mode for 2 video inputs",id:"picture-in-picture-mode-for-2-video-inputs",level:3}],p={toc:u},s="wrapper";function l(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"video-mixer--picture-in-picture"},"Video Mixer / Picture-in-Picture"),(0,n.kt)("p",null,"This document describes the DirectShow filter configuration for the nanocosmos Video Mixer 2."),(0,n.kt)("p",null,"See also the [","[live",(0,n.kt)("em",{parentName:"p"},"video_encoder"),"-_overlay_mixing|nanoStream API for the VideoMixer]","]"),(0,n.kt)("h4",{id:"requirements"},"Requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DirectShow architecture / C++"),(0,n.kt)("li",{parentName:"ul"},"Nanocosmos Video Mixer 2 Filter")),(0,n.kt)("h3",{id:"picture-in-picture-mode-for-2-video-inputs"},"Picture-in-picture mode for 2 video inputs"),(0,n.kt)("p",null,"This short C++ example code shows how to configure the Video Mixer to show video 2 in the right top corner of video 1."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// {0ED06AB0-B2F3-421b-BA63-2E591C932802}\nstatic const GUID CLSID_nanoVideoMixer2 = { 0xed06ab0, 0xb2f3, 0x421b, { 0xba, 0x63, 0x2e, 0x59, 0x1c, 0x93, 0x28, 0x2 } };\n\n// {2140722A-9F1E-4ac7-8A81-CF77CA6DD683}\nstatic const GUID IID_IVideoPlacement = { 0x2140722a, 0x9f1e, 0x4ac7, { 0x8a, 0x81, 0xcf, 0x77, 0xca, 0x6d, 0xd6, 0x83 } };\n\nCComPtr<IBaseFilter> m_pVideoMixer;\nm_pVideoMixer.CoCreateInstance(CLSID_nanoVideoMixer2);\n\n// target area picture-in-picture: right top corner of picture 1\nRECT rcTarget = {m_VideoWidth * 7/10, m_VideoHeight*1/20,\nm_VideoWidth * 9/20, m_VideoHeight * 3/10};\n\nCComQIPtr <IVideoPlacement> api = m_pVideoMixer;        \nif (api){\n    api->SetVideoFrameDuration( (REFERENCE_TIME)(10000000LL / m_VideoFrameRate) );\n    api->SetOutputSize(m_VideoWidth, m_VideoHeight);\n    RECT rc = {0,0, m_VideoWidth, m_VideoHeight};\n    api->SetVideoPosition(0, &rc);\n    api->SetVideoPosition(1, &rcTarget);\n    return 0;\n}\n")))}l.isMDXComponent=!0}}]);