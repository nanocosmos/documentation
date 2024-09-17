"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6761],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={id:"nanostream_webrtc_getting_started",title:"Getting started",sidebar_label:"Getting started"},i=void 0,s={unversionedId:"webrtc/nanostream_webrtc_getting_started",id:"webrtc/nanostream_webrtc_getting_started",title:"Getting started",description:"If you have not created an account yet, you can sign up or reach out to our dedicated sales team via the contact form or by sending an email to sales(at)nanocosmos.de.",source:"@site/docs/webrtc/nanostream_webrtc_getting_started.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_getting_started",permalink:"/docs/webrtc/nanostream_webrtc_getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1726579045,formattedLastUpdatedAt:"Sep 17, 2024",frontMatter:{id:"nanostream_webrtc_getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"nanoStream Webcaster",previous:{title:"Introduction",permalink:"/docs/webrtc/nanostream_webrtc_introduction"},next:{title:"Browser Demos",permalink:"/docs/webrtc/nanostream_webrtc_demos"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Code Snippet",id:"code-snippet",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"Before starting",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you have not created an account yet, you can ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"This section provides a straightforward guide to initiate your journey with Webcaster. The provided snippet exemplifies the elementary steps to set up and start a live stream using Webcaster."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/nanocosmos/webcaster/"},"Download")," and include the Webcaster JavaScript file in your project."),(0,r.yg)("li",{parentName:"ul"},"Create a new stream. Read about stream creation via the nanoStream Cloud dashboard ",(0,r.yg)("a",{parentName:"li",href:"../cloud-frontend-v3/Dashboard_Start_Streaming"},"here"),"."),(0,r.yg)("li",{parentName:"ul"},"Basic understanding of TypeScript or JavaScript is advantageous.")),(0,r.yg)("h2",{id:"implementation"},"Implementation"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Include Webcaster"),": Ensure the Webcaster JavaScript file is downloaded and included in your project.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Configure Webcaster"),": Create a configuration object with essential properties, notably the bintu stream name."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Find the Webcaster Client API docs ",(0,r.yg)("a",{parentName:"li",href:"../webrtc/nanostream_webrtc_api"},"here"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Instantiate Webcaster"),": Initialize a ",(0,r.yg)("inlineCode",{parentName:"p"},"Webcaster")," instance with your configuration.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Setup and Begin Streaming"),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Execute the ",(0,r.yg)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html#setup"},(0,r.yg)("inlineCode",{parentName:"a"},"setup"))," method to configure your client."),(0,r.yg)("li",{parentName:"ul"},"Employ ",(0,r.yg)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html#startPreview"},(0,r.yg)("inlineCode",{parentName:"a"},"startPreview"))," to initiate video preview."),(0,r.yg)("li",{parentName:"ul"},"Utilize ",(0,r.yg)("a",{parentName:"li",href:"https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html#startBroadcast"},(0,r.yg)("inlineCode",{parentName:"a"},"startBroadcast"))," to commence your live stream.")))),(0,r.yg)("h3",{id:"code-snippet"},"Code Snippet"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { Config as WebcasterConfig, Webcaster } from '../../dist/nanostream.webcaster';\n\nconst config: WebcasterConfig = {\n    streamName: 'my-nanostream-name'\n};\n\nconst client = new Webcaster(config);\n\nclient.setup().then(fullCfg => {\n    console.log(fullCfg);\n\n    client.startPreview('myPreviewElId');\n    client.startBroadcast();\n});\n")),(0,r.yg)("h2",{id:"next-steps"},"Next Steps"),(0,r.yg)("p",null,"With the fundamental streaming setup complete, you are encouraged to delve into more sophisticated functionalities like stream control, metrics integration, and personalization. For comprehensive information, refer to the detailed feature sections in the Webcaster SDK documentation."))}d.isMDXComponent=!0}}]);