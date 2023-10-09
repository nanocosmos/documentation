"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"bintu_stream_tags",title:"Bintu Stream Tags",sidebar_label:"Bintu Stream Tags"},s=void 0,i={unversionedId:"cloud/bintu_stream_tags",id:"cloud/bintu_stream_tags",title:"Bintu Stream Tags",description:"You can group and tag streams with bintu stream tags. These are human readable words or IDs you can use to identify your streams.",source:"@site/docs/cloud/bintu_stream_tags.md",sourceDirName:"cloud",slug:"/cloud/bintu_stream_tags",permalink:"/docs/cloud/bintu_stream_tags",draft:!1,tags:[],version:"current",lastUpdatedAt:1696845431,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"bintu_stream_tags",title:"Bintu Stream Tags",sidebar_label:"Bintu Stream Tags"},sidebar:"nanoStream Cloud",previous:{title:"Bintu custom web hooks",permalink:"/docs/cloud/bintu_custom_webhooks"},next:{title:"Network Diagnostics",permalink:"/docs/cloud/network-diagnostics"}},c={},u=[{value:"Example",id:"example",level:4}],l={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can group and tag streams with bintu stream tags. These are human readable words or IDs you can use to identify your streams."),(0,a.kt)("p",null,"API Documentation:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#tag/Tag"},"https://doc.pages.nanocosmos.de/bintuapi-docs/#tag/Tag")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://bintu.nanocosmos.de/stream/12345678-78f3-466a-97cc-54f160705724/tag \\\n  -H \'content-type: application/json\' \\\n  -H \'x-bintu-apikey: YourBintuApiKeyXXXZZZYYYAAA\'  \\\n  -d \'{\n    "tags": ["myStreamTag1", "camera1", "key1:value1", "key2: value2"]\n}\'\n')))}m.isMDXComponent=!0}}]);