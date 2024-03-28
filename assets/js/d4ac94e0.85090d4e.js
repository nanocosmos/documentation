"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[284],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),y=r,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return n?t.createElement(m,l(l({ref:a},d),{},{components:n})):t.createElement(m,l({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},37845:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const o={id:"nanoplayer_release_latest",title:"Latest Release",sidebar_label:"Latest"},l=void 0,i={unversionedId:"nanoplayer/nanoplayer_release_latest",id:"nanoplayer/nanoplayer_release_latest",title:"Latest Release",description:"Please find more about the latency control modes feature in our documentation",source:"@site/docs/nanoplayer/nanoplayer_release_latest.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_release_latest",permalink:"/docs/nanoplayer/nanoplayer_release_latest",draft:!1,tags:[],version:"current",lastUpdatedAt:1711640284,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"nanoplayer_release_latest",title:"Latest Release",sidebar_label:"Latest"},sidebar:"H5Live Player",previous:{title:"Video Access and Processing",permalink:"/docs/nanoplayer/nanoplayer_feature_video_access_and_processing"},next:{title:"History",permalink:"/docs/nanoplayer/nanoplayer_release_history"}},s={},p=[{value:"Please find more about the <strong>latency control modes</strong> feature in our documentation",id:"please-find-more-about-the-latency-control-modes-feature-in-our-documentation",level:2},{value:"<strong>4.23.1</strong>",id:"4231",level:2},{value:"<strong>Release Notes</strong>",id:"release-notes",level:3},{value:"<strong>Changelog</strong>",id:"changelog",level:3},{value:"Added",id:"added",level:3},{value:"Improved",id:"improved",level:3},{value:"Fixed",id:"fixed",level:3},{value:"<strong>Release Package</strong>",id:"release-package",level:3}],d={toc:p},c="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"please-find-more-about-the-latency-control-modes-feature-in-our-documentation"},"Please find more about the ",(0,r.yg)("strong",{parentName:"h2"},"latency control modes")," feature in our ",(0,r.yg)("a",{parentName:"h2",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/"},"documentation")),(0,r.yg)("h2",{id:"4231"},(0,r.yg)("strong",{parentName:"h2"},"[4.23.1]")),(0,r.yg)("h3",{id:"release-notes"},(0,r.yg)("strong",{parentName:"h3"},"Release Notes")),(0,r.yg)("p",null,"In this latest release, we're exited to introduce enhanced playback support through the Managed Media Source API (MMSE) for iOS 17.1 and above. By default, this feature provides an upgraded media playback experience in line with desktop and Android platforms, resulting in improved latency, faster start-up times, and an overall enhanced user experience. In the event that MMSE API is unsupported or disabled, H5live-HLS will seamlessly take over on iOS."),(0,r.yg)("p",null,"Moreover, we've expanded support for the latency control mode ",(0,r.yg)("inlineCode",{parentName:"p"},"balancedadaptive")," across all iOS versions. This empowers users to achieve lower latency while ensuring a smooth playback experience on iOS devices. For more detailed information, refer to our comprehensive feature description in the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes#v4231"},"documentation"),"."),(0,r.yg)("p",null,"Additionally, this version includes a general enhancement to buffer and latency control for H5live-HLS playback on iOS. These improvements contribute to an even more refined and optimized playback experience."),(0,r.yg)("h3",{id:"changelog"},(0,r.yg)("strong",{parentName:"h3"},"Changelog")),(0,r.yg)("h3",{id:"added"},"Added"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"support for playback via Managed Media Source API (MMSE) on iOS 17.1 and higher",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"media playback workflow similar to desktop and Android"),(0,r.yg)("li",{parentName:"ul"},"replacing h5live-HLS"),(0,r.yg)("li",{parentName:"ul"},"improving: latency, start-up time, general UX"))),(0,r.yg)("li",{parentName:"ul"},"support for playback with latency control mode ",(0,r.yg)("inlineCode",{parentName:"li"},"balancedadaptive")," on iOS (all versions)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"configuration fallback from ",(0,r.yg)("inlineCode",{parentName:"li"},"fastadaptive")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"balancedadaptive")," mode"),(0,r.yg)("li",{parentName:"ul"},"improving: latency (control)")))),(0,r.yg)("h3",{id:"improved"},"Improved"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"buffer and latency control on iOS (all versions)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"workflow similar to desktop and Android")))),(0,r.yg)("h3",{id:"fixed"},"Fixed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"false positive ",(0,r.yg)("inlineCode",{parentName:"li"},"warning")," event related to ",(0,r.yg)("inlineCode",{parentName:"li"},"switch.method")," configuration on iOS"),(0,r.yg)("li",{parentName:"ul"},"reconnect behaviour in ",(0,r.yg)("inlineCode",{parentName:"li"},"keepConnection")," mode"),(0,r.yg)("li",{parentName:"ul"},"adaptive bitrate control after error recovery on iOS"),(0,r.yg)("li",{parentName:"ul"},"redundant adaptive bitrate control down step attempts")),(0,r.yg)("h3",{id:"release-package"},(0,r.yg)("strong",{parentName:"h3"},"Release Package")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.nanocosmos.de/index.php/s/R6p8gKXJDirMDRd"},"4.23.1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6"},"latest 4.x")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP"},"latest"))))}u.isMDXComponent=!0}}]);