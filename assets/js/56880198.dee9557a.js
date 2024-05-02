"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6812],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={},i=void 0,c={unversionedId:"nanostream/directshow/directshow_screen_capture_filter",id:"nanostream/directshow/directshow_screen_capture_filter",title:"directshow_screen_capture_filter",description:"How to use the Screen Capture DirectShow filter",source:"@site/docs/nanostream/directshow/directshow_screen_capture_filter.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_screen_capture_filter",permalink:"/docs/nanostream/directshow/directshow_screen_capture_filter",draft:!1,tags:[],version:"current",lastUpdatedAt:1714646189,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{}},s={},l=[{value:"How to use the Screen Capture DirectShow filter",id:"how-to-use-the-screen-capture-directshow-filter",level:2},{value:"Capture Modes",id:"capture-modes",level:3},{value:"Screen Capture - Single Window",id:"screen-capture---single-window",level:3},{value:"Region Capture",id:"region-capture",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"how-to-use-the-screen-capture-directshow-filter"},"How to use the Screen Capture DirectShow filter"),(0,o.yg)("h3",{id:"capture-modes"},"Capture Modes"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Mouse Follow"),(0,o.yg)("li",{parentName:"ul"},"Region"),(0,o.yg)("li",{parentName:"ul"},"Screen"),(0,o.yg)("li",{parentName:"ul"},"Window Handle")),(0,o.yg)("h3",{id:"screen-capture---single-window"},"Screen Capture - Single Window"),(0,o.yg)("p",null,"It is possible to capture a single window instead of the entire screen. The content of the window is captured even if the window is partially or completely in the background. You need to enter the Window handle or Window class name into the field."),(0,o.yg)("p",null,"At the moment there are two modes for capturing a single window:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Auto Size: adjusts the output size depending on the size of the window to capture, before the directshow graph is started"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Auto Size",src:r(39766).A,width:"900",height:"498"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Fullscreen: the output size is equivalent to the screen size, the window size is not scaled, the window can be resized while the graph is running and one can see the whole window at all times"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Fullscreen",src:r(43599).A,width:"900",height:"507"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},'Scaling example: if you need to downscale a full screen capture, use the additional "Resize/Scale" functionality in the encoder or add a resizer/scaler filter to the DirectShow filter graph'))),(0,o.yg)("h3",{id:"region-capture"},"Region Capture"),(0,o.yg)("p",null,"If the output of the region area seems to be different from the specified region, check if Windows display zoom is enabled:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Zoom",src:r(34583).A,width:"732",height:"672"})))}d.isMDXComponent=!0},34583:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/directshow_screen_capture_region-408a357c936ae605788bd0e92ea174db.jpg"},39766:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/directshow_screen_capture_single_autosize-ef93b73e52229adfe7d04905fc7133d0.jpg"},43599:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/directshow_screen_capture_single_fullscreen-9ca89c8328f4786a96256c91afae45ee.jpg"}}]);