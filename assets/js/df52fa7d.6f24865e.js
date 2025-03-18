"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["5855"],{94577:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"cloud-frontend-v3/Dashboard_Thumbnail","title":"Thumbnails (Deprecated)","description":"With the Bintu API v1.24.1, we introduced several new live processing options in Q3/2024. These options enhance stream management and playback features, providing more control and flexibility for stream processing. Learn more about live processing:","source":"@site/docs/cloud-frontend-v3/Dashboard_Thumbnail.md","sourceDirName":"cloud-frontend-v3","slug":"/cloud-frontend-v3/Dashboard_Thumbnail","permalink":"/docs/cloud-frontend-v3/Dashboard_Thumbnail","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1742310768000,"frontMatter":{"id":"Dashboard_Thumbnail","title":"Thumbnails (Deprecated)","sidebar_label":"Thumbnails"}}'),a=t("85893"),s=t("50065");let o={id:"Dashboard_Thumbnail",title:"Thumbnails (Deprecated)",sidebar_label:"Thumbnails"},r=void 0,l={},d=[{value:"Setting up thumbnails",id:"setting-up-thumbnails",level:2},{value:"Updating settings",id:"updating-settings",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.admonition,{title:"Bintu API v1.x.x",type:"caution",children:[(0,a.jsxs)(n.p,{children:["With the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"Bintu API v1.24.1"})}),", we introduced several new live processing options in Q3/2024. These options enhance stream management and playback features, providing more control and flexibility for stream processing. Learn more about live processing:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/cloud/live_processing",children:"Bintu: Live Processing"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/cloud-frontend-v3/Dashboard_Live_Processing",children:"Dashboard: How to utilize live processing"})}),"\n"]})]}),"\n",(0,a.jsx)(n.p,{children:"Thumbnails are small-sized preview images used to give viewers a quick snapshot of the content they represent. They open up new use-cases including and not limited to, e.g snapshots of content of interest or poster images for streams. By providing a visual summary, thumbnails enhance user experience and navigation efficiency."}),"\n",(0,a.jsx)(n.admonition,{title:"Before starting",type:"info",children:(0,a.jsxs)(n.p,{children:["To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,a.jsx)("br",{}),"\nIf you have not created an account yet, you can ",(0,a.jsx)(n.a,{href:"https://dashboard.nanostream.cloud/auth?signup",children:"sign up"})," or reach out to our dedicated sales team via the ",(0,a.jsx)(n.a,{href:"https://www.nanocosmos.de/contact",children:"contact form"})," or by sending an email to sales(at)nanocosmos.de."]})}),"\n",(0,a.jsx)(n.admonition,{title:"Important to know",type:"warning",children:(0,a.jsxs)(n.p,{children:["The functionality for this feature is exclusively available on our vtrans ingest servers. ",(0,a.jsx)("br",{}),"\nBintu only recommends these servers when transcodings are in use. If your stream doesn't have transcoding profiles and you wish to utilize the thumbnails feature, please ingest using ",(0,a.jsx)(n.code,{children:"rtmp://bintu-vtrans.nanocosmos.de"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-thumbnails",children:"Setting up thumbnails"}),"\n",(0,a.jsx)(n.p,{children:'To activate a thumbnail, you need to navigate to the Stream Overview page of your stream. Within the "Details" section at the top, you can find there the "Thumbnail" flag at the end of the list. By clicking on the "Edit" button located at the end of the row, a dialog to appear.'}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"Screenshot: Stream Overview incl. Thumbnail Flag",src:t(57481).Z+"",width:"1479",height:"885"}),"\n",(0,a.jsx)(n.em,{children:"Screenshot: Stream Overview incl. Thumbnail Flag"})]}),"\n",(0,a.jsx)(n.p,{children:"In this dialog, you can enable the thumbnail generation and select an interval. This can range from 10 to 3600 seconds. The thumbnail will be generated based on the selected interval."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"Screenshot: Thumbnail Activation Dialog",src:t(14564).Z+"",width:"1479",height:"1037"}),"\n",(0,a.jsx)(n.em,{children:"Screenshot: Thumbnail Activation Dialog"})]}),"\n",(0,a.jsx)(n.p,{children:"Upon enabling the thumbnail generation, you'll notice a update in the user interface showcasing the thumbnail. Furthermore, the details list will now include the Thumbnail URL, and the selected interval will be prominently displayed."}),"\n",(0,a.jsx)(n.admonition,{title:"Important to know",type:"warning",children:(0,a.jsxs)(n.p,{children:["The functionality for this feature is exclusively available on our vtrans ingest servers. ",(0,a.jsx)("br",{}),"\nBintu only recommends these servers when transcodings are in use. If your stream doesn't have transcoding profiles and you wish to utilize the thumbnails feature, please ingest using ",(0,a.jsx)(n.code,{children:"rtmp://bintu-vtrans.nanocosmos.de"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"Screenshot: Thumbnail in Stream Overview",src:t(6542).Z+"",width:"1299",height:"935"}),"\n",(0,a.jsx)(n.em,{children:"Screenshot: Thumbnail in Stream Overview"})]}),"\n",(0,a.jsx)(n.h2,{id:"updating-settings",children:"Updating settings"}),"\n",(0,a.jsx)(n.p,{children:"There may be a need to make changes, such as adjusting the interval or perhaps turning off the thumbnail generation. To facilitate this, the setup dialog can be accessed again. There are two ways to access this dialog:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'From the details list, locate the row labeled "Thumbnail Interval" and click on the "Edit" button at the end of the row.'}),"\n",(0,a.jsx)(n.li,{children:'From the section above the thumbnail preview, click on "Update settings."'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Both buttons will bring up the same dialog where all settings can be updated as needed."}),"\n",(0,a.jsx)(n.admonition,{title:"Important to know",type:"danger",children:(0,a.jsx)(n.p,{children:"To apply any changes, you must (re-)ingest your stream. If your stream is live, the modifications will only take effect once you stop and restart it."})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"Screenshot: Thumbnail Setup Dialog",src:t(99744).Z+"",width:"1479",height:"1037"}),"\n",(0,a.jsx)(n.em,{children:"Screenshot: Thumbnail Setup Dialog"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},99744:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cf-adding-thumbnail-interval-a727fac929ed39924e6f309528a04088.jpg"},14564:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cf-adding-thumbnail-b541f586058ad55b1a1919daba18a390.jpg"},57481:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cf-streamoverview-thumbnail-b1c0698d29412ef97dc712b050d25574.jpg"},6542:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/cf-thumbnail-added-97323a839a49d5dd53ddf08623dd8f2f.jpg"},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(67294);let a={},s=i.createContext(a);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);