"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7703],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(t),u=a,m=g["".concat(l,".").concat(u)]||g[u]||d[u]||o;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(58168),a=(t(96540),t(15680));const o={id:"Dashboard_Live_Processing",title:"Live Processing",sidebar_label:"Live Processing"},r=void 0,s={unversionedId:"cloud-frontend-v3/Dashboard_Live_Processing",id:"cloud-frontend-v3/Dashboard_Live_Processing",title:"Live Processing",description:"Live streaming goes beyond simply delivering video and audio to viewers. Live Processing adds advanced functionalities to your streams, enabling features like recording, thumbnail and motion clip generation and replay capabilities. These features enhance the viewer experience and give broadcasters greater flexibility in managing and optimizing their live content in real-time. With the Bintu API v1.24.1, we introduced several new live processing capabilities, that can be configured easily during stream setup or adjusted as the broadcasters streaming requirements evolve.",source:"@site/docs/cloud-frontend-v3/Dashboard_Live_Processing.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_Live_Processing",permalink:"/docs/cloud-frontend-v3/Dashboard_Live_Processing",draft:!1,tags:[],version:"current",lastUpdatedAt:1734355607,formattedLastUpdatedAt:"Dec 16, 2024",frontMatter:{id:"Dashboard_Live_Processing",title:"Live Processing",sidebar_label:"Live Processing"},sidebar:"nanoStream Cloud",previous:{title:"Adaptive Bitrate (ABR) and Live Transcoding",permalink:"/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding"},next:{title:"Secure Playback & Secure Token",permalink:"/docs/cloud-frontend-v3/Dashboard_Secure"}},l={},c=[{value:"Configuring Live Processing Options",id:"configuring-live-processing-options",level:2},{value:"Overview of Live Processing Options",id:"overview-of-live-processing-options",level:2},{value:"Output Links and Assets",id:"output-links-and-assets",level:2},{value:"Modifying Live Processing Options",id:"modifying-live-processing-options",level:2}],p={toc:c},g="wrapper";function d(e){let{components:n,...o}=e;return(0,a.yg)(g,(0,i.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Live streaming goes beyond simply delivering video and audio to viewers. ",(0,a.yg)("strong",{parentName:"p"},"Live Processing")," adds advanced functionalities to your streams, enabling features like recording, thumbnail and motion clip generation and replay capabilities. These features enhance the viewer experience and give broadcasters greater flexibility in managing and optimizing their live content in real-time. With the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Bintu API v1.24.1")),", we introduced several new live processing capabilities, that can be configured easily during stream setup or adjusted as the broadcasters streaming requirements evolve. "),(0,a.yg)("admonition",{title:"Prerequisites",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Before you get started, make sure you have an active bintu account, whether it's part of a trial or a paid plan. ",(0,a.yg)("br",null),"\nTo use the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"live processing"))," feature, ensure it is enabled for your account. You can verify this by checking your ",(0,a.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"Organisation Overview"),"."),(0,a.yg)("p",{parentName:"admonition"},"If you have not created an account or enabled the feature yet, you can ",(0,a.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de."),(0,a.yg)("p",{parentName:"admonition"},"For more details, visit our ",(0,a.yg)("a",{parentName:"p",href:"https://info.nanocosmos.de/"},"Homepage: Overview and Plans"))),(0,a.yg)("admonition",{title:"Please Note",type:"caution"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Additional charges may apply based on actual usage and package limits."),(0,a.yg)("li",{parentName:"ul"},"Please note that ",(0,a.yg)("strong",{parentName:"li"},"secure access control")," is not available for these features."))),(0,a.yg)("h2",{id:"configuring-live-processing-options"},"Configuring Live Processing Options"),(0,a.yg)("p",null,"To configure the live processing options, follow the steps during the ",(0,a.yg)("a",{parentName:"p",href:"Dashboard_Start_Streaming#add-live-processing"},"stream creation process"),". Live processing options can be enabled by default or added later as required."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot: Live Processing Activation during Stream Creation",src:t(23248).A,width:"1353",height:"1147"}),"\n",(0,a.yg)("em",{parentName:"p"},"Screenshot: Live Processing Activation during Stream Creation")),(0,a.yg)("p",null,"Depending on whether ",(0,a.yg)("strong",{parentName:"p"},"transcoding")," is enabled, tabs for each stream will appear in the ",(0,a.yg)("em",{parentName:"p"},"Live Processing Section"),". For each stream, you can select whether to activate live processing and which options to enable. The summary of your selections is displayed in the blue box next to the tabs, allowing you to review your choices."),(0,a.yg)("h2",{id:"overview-of-live-processing-options"},"Overview of Live Processing Options"),(0,a.yg)("p",null,"The Live Processing feature has its own section in the ",(0,a.yg)("strong",{parentName:"p"},"Stream Overview"),". This section displays the ",(0,a.yg)("strong",{parentName:"p"},"Thumbnails")," and ",(0,a.yg)("strong",{parentName:"p"},"Motion Clips")," (as GIFs) alongside a table providing an overview of the information related to live processing for the selected stream."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot: Live Processing Overview, including Thumbnail, Motionclip and a resource table",src:t(52682).A,width:"846",height:"666"}),"\n",(0,a.yg)("em",{parentName:"p"},"Screenshot: Live Processing Overview, including Thumbnail, Motionclip and a resource table")),(0,a.yg)("p",null,'By clicking on the button "Edit Options" next to the title you can ',(0,a.yg)("a",{parentName:"p",href:"#modifying-live-processing-options"},"edit your selections"),". It also allows you to review the current settings. The listed options show whether each option is active, the configured ",(0,a.yg)("strong",{parentName:"p"},"interval")," (in seconds), the ",(0,a.yg)("strong",{parentName:"p"},"duration")," (in seconds), and the number of available resource links."),(0,a.yg)("h2",{id:"output-links-and-assets"},"Output Links and Assets"),(0,a.yg)("p",null,"When expanding the links for active processes, you will see the URLs for each resource. "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot: Expanded Live Processing Table showing the available resources for each option",src:t(33768).A,width:"834",height:"1087"}),"\n",(0,a.yg)("em",{parentName:"p"},"Screenshot: Expanded Live Processing Table showing the available resources for each option")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For ",(0,a.yg)("strong",{parentName:"li"},"motion clips")," and ",(0,a.yg)("strong",{parentName:"li"},"thumbnails")," you can find generic URLs that lead to the corresponding files."),(0,a.yg)("li",{parentName:"ul"},"For ",(0,a.yg)("strong",{parentName:"li"},"recordings"),", you\u2019ll also find the date and time of each session next to the resource link. "),(0,a.yg)("li",{parentName:"ul"},"For ",(0,a.yg)("strong",{parentName:"li"},"replay"),", three different links are provided, directing you to demo tools:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Latest Live Session"),': Clicking "Clip & Share Latest Live Session" leads you to the demo page, where, in addition to viewing the live stream, you can use the ',(0,a.yg)("strong",{parentName:"li"},"Clipping Tool")," to create live clips."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Watch Replay"),": This link allows you to replay the selected session."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Clip & Share"),": Here, you can clip the selected session and share it.")))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot: Live Clipping and Share Demo",src:t(9265).A,width:"1530",height:"1017"}),"\n",(0,a.yg)("em",{parentName:"p"},"Screenshot: Live Clipping and Share Demo")),(0,a.yg)("h2",{id:"modifying-live-processing-options"},"Modifying Live Processing Options"),(0,a.yg)("p",null,"You can modify live processing settings at any time. ",(0,a.yg)("strong",{parentName:"p"},"However, it\u2019s important to note that the stream must be re-ingested for the changes to take effect.")),(0,a.yg)("p",null,"Through separate tabs, you can select the stream you want to modify and update the live processing values."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Screenshot: Edit Live Processing",src:t(68619).A,width:"919",height:"1267"}),"\n",(0,a.yg)("em",{parentName:"p"},"Screenshot: Edit Live Processing")))}d.isMDXComponent=!0},23248:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cf-add-processes-deec32e116be2fa0dd885e504359e955.png"},68619:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cf-edit-liveprocesses-56ceb3dfc7de90bb9164d5661cbc6cff.png"},33768:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cf-opcodes-collapsed-links-c7a1de07418566431494485fb232faa7.png"},52682:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cf-opcodes-section-71552821e45db4e77ce9410b1762db2e.png"},9265:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/demo-clipping-80a12b07a7577a26ee69fff5a0671970.png"}}]);