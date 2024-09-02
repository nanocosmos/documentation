"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1757],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=p(r),m=a,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={id:"nanoplayer_token_security",title:"Secure playback with H5Live",sidebar_label:"Secure playback with H5Live"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_token_security",id:"nanoplayer/nanoplayer_token_security",title:"Secure playback with H5Live",description:"Click PLAY button to start",source:"@site/docs/nanoplayer/nanoplayer_token_security.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_token_security",permalink:"/docs/nanoplayer/nanoplayer_token_security",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"nanoplayer_token_security",title:"Secure playback with H5Live",sidebar_label:"Secure playback with H5Live"},sidebar:"H5Live Player",previous:{title:"Stream group configuration",permalink:"/docs/nanoplayer/nanoplayer_feature_stream_group_configuration"},next:{title:"Stream switching and ABR",permalink:"/docs/nanoplayer/nanoplayer_feature_stream_switching"}},c={},p=[{value:"Encrypted playback",id:"encrypted-playback",level:2},{value:"Token Security for nanoStream H5Live Player",id:"token-security-for-nanostream-h5live-player",level:2}],s={toc:p},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{class:"video-wrap"},(0,a.yg)("div",{class:"video-container"},(0,a.yg)("iframe",{src:"https://www.youtube.com/embed/nOmcvcgr6UI",frameborder:"0",allowfullscreen:!0}))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Click ",(0,a.yg)("inlineCode",{parentName:"em"},"PLAY")," button to start"))),(0,a.yg)("h2",{id:"encrypted-playback"},"Encrypted playback"),(0,a.yg)("p",null,"When using H5Live player, all playback is encrypted by default over ",(0,a.yg)("inlineCode",{parentName:"p"},"HTTPS"),"."),(0,a.yg)("h2",{id:"token-security-for-nanostream-h5live-player"},"Token Security for nanoStream H5Live Player"),(0,a.yg)("admonition",{title:"Enable Security feature",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Token Security for nanoPlayer is not enabled by default and requires a separate account and business agreement. ",(0,a.yg)("br",null),"\nPlease ",(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"contact us")," for further details.")),(0,a.yg)("p",null,"H5Live Player supports signed URLs with tokens to restrict playback to a specific time or / and domain. To use token security, you need a security enabled ",(0,a.yg)("a",{parentName:"p",href:"../cloud/bintu_api"},"Bintu")," organization in nanoStream Cloud."),(0,a.yg)("p",null,"Notice that once the secure feature is enabled for your organization, every stream group (H5Live Player v4.18) or stream playback requires a token. It is not possible to playback a stream without a token.\nThus we recommend to use a second Bintu organization to not interfere with your current (production) setup."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"There are 2 options for secure playback configuration:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"./nanoplayer_security_jwt"},(0,a.yg)("strong",{parentName:"a"},"Simple configuration with JSON Web Token (JWT) (since v4.18.0)")),"\nA standard conform security token, recommended for new users of the secure playback feature, easy to use for single stream and ABR configuration."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"(Deprecated)")," ",(0,a.yg)("a",{parentName:"li",href:"./nanoplayer_feature_security_sts"},(0,a.yg)("strong",{parentName:"a"},"Configuration with STS token")),"\nProprietary security token with multi value format, commonly used before v4.18.0, available for backwards compatibility.")))}u.isMDXComponent=!0}}]);