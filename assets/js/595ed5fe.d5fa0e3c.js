"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"nanostream_webrtc_getting_started",title:"Getting started",sidebar_label:"Getting started"},o=void 0,s={unversionedId:"webrtc/nanostream_webrtc_getting_started",id:"webrtc/nanostream_webrtc_getting_started",title:"Getting started",description:"Overview",source:"@site/docs/webrtc/nanostream_webrtc_getting_started.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_getting_started",permalink:"/docs/webrtc/nanostream_webrtc_getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1701953705,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"nanostream_webrtc_getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"nanoStream Webcaster",previous:{title:"Introduction",permalink:"/docs/webrtc/nanostream_webrtc_introduction"},next:{title:"Browser Demos",permalink:"/docs/webrtc/nanostream_webrtc_demos"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Code Snippet",id:"code-snippet",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This section provides a straightforward guide to initiate your journey with Webcaster. The provided snippet exemplifies the elementary steps to set up and start a live stream using Webcaster."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nanocosmos/webcaster/"},"Download")," and include the Webcaster JavaScript file in your project."),(0,a.kt)("li",{parentName:"ul"},"Create a bintu stream, read about ",(0,a.kt)("a",{parentName:"li",href:"../cloud/cloud_getting_started"},"bintu here"),"."),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of TypeScript or JavaScript is advantageous.")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Include Webcaster"),": Ensure the Webcaster JavaScript file is downloaded and included in your project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure Webcaster"),": Create a configuration object with essential properties, notably the bintu stream name."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Find the Webcaster Client API docs ",(0,a.kt)("a",{parentName:"li",href:"../webrtc/nanostream_webrtc_api"},"here")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Instantiate Webcaster"),": Initialize a ",(0,a.kt)("inlineCode",{parentName:"p"},"Webcaster")," instance with your configuration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Setup and Begin Streaming"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Execute the ",(0,a.kt)("inlineCode",{parentName:"li"},"setup")," method to configure your client."),(0,a.kt)("li",{parentName:"ul"},"Employ ",(0,a.kt)("inlineCode",{parentName:"li"},"startPreview")," to initiate video preview."),(0,a.kt)("li",{parentName:"ul"},"Utilize ",(0,a.kt)("inlineCode",{parentName:"li"},"startBroadcast")," to commence your live stream.")))),(0,a.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config as WebcasterConfig, Webcaster } from '../../dist/nanostream.webcaster';\n\nconst config: WebcasterConfig = {\n    streamName: 'my-nanostream-name'\n};\n\nconst client = new Webcaster(config);\n\nclient.setup().then(fullCfg => {\n    console.log(fullCfg);\n\n    client.startPreview('myPreviewElId');\n    client.startBroadcast();\n});\n")),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"With the fundamental streaming setup complete, you are encouraged to delve into more sophisticated functionalities like stream control, metrics integration, and personalization. For comprehensive information, refer to the detailed feature sections in the Webcaster SDK documentation."))}u.isMDXComponent=!0}}]);