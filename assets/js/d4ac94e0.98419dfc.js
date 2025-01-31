"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["730"],{3459:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"nanoplayer/nanoplayer_release_latest","title":"Latest Release","description":"Please find more about the stream switching and abr feature in our documentation","source":"@site/docs/nanoplayer/nanoplayer_release_latest.md","sourceDirName":"nanoplayer","slug":"/nanoplayer/nanoplayer_release_latest","permalink":"/docs/nanoplayer/nanoplayer_release_latest","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"id":"nanoplayer_release_latest","title":"Latest Release","sidebar_label":"Latest"},"sidebar":"H5Live Player","previous":{"title":"Video Access and Processing","permalink":"/docs/nanoplayer/nanoplayer_feature_video_access_and_processing"},"next":{"title":"History","permalink":"/docs/nanoplayer/nanoplayer_release_history"}}'),t=s("85893"),r=s("50065");let a={id:"nanoplayer_release_latest",title:"Latest Release",sidebar_label:"Latest"},o=void 0,l={},d=[{value:"Please find more about the <strong>stream switching and abr</strong> feature in our documentation",id:"please-find-more-about-the-stream-switching-and-abr-feature-in-our-documentation",level:2},{value:"<strong>[4.29.0]</strong>",id:"4290",level:2},{value:"<strong>Release Notes</strong>",id:"release-notes",level:3},{value:"<strong>Changelog</strong>",id:"changelog",level:3},{value:"<strong>Added</strong>",id:"added",level:3},{value:"<strong>Fixed</strong>",id:"fixed",level:3},{value:"<strong>Release Package</strong>",id:"release-package",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"please-find-more-about-the-stream-switching-and-abr-feature-in-our-documentation",children:["Please find more about the ",(0,t.jsx)(n.strong,{children:"stream switching and abr"})," feature in our ",(0,t.jsx)(n.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_stream_switching/",children:"documentation"})]}),"\n",(0,t.jsx)(n.h2,{id:"4290",children:(0,t.jsx)(n.strong,{children:"[4.29.0]"})}),"\n",(0,t.jsx)(n.h3,{id:"release-notes",children:(0,t.jsx)(n.strong,{children:"Release Notes"})}),"\n",(0,t.jsx)(n.p,{children:"This release introduces a new configuration option for adaptive bitrate (ABR) setups."}),"\n",(0,t.jsxs)(n.p,{children:["You can now omit specific renditions in ABR configurations using the new ",(0,t.jsx)(n.code,{children:"config.source.options.adaption.omitRenditions"})," parameter. This parameter accepts an ",(0,t.jsx)(n.code,{children:"array"})," of predefined quality identifiers (e.g., ",(0,t.jsx)(n.code,{children:'"high"'}),", ",(0,t.jsx)(n.code,{children:'"medium"'}),", ",(0,t.jsx)(n.code,{children:'"low"'}),") or stream entry indexes (e.g., ",(0,t.jsx)(n.code,{children:"0"}),", ",(0,t.jsx)(n.code,{children:"1"}),", ",(0,t.jsx)(n.code,{children:"2"}),", etc.), providing greater flexibility in tailoring adaptive bitrate playback."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, an issue affecting the ",(0,t.jsx)(n.code,{children:"config.source.options.adaption.downStep"})," value in group configurations has been resolved, ensuring proper functionality."]}),"\n",(0,t.jsx)(n.p,{children:"These updates enhance flexibility and reliability in ABR setups."}),"\n",(0,t.jsx)(n.h3,{id:"changelog",children:(0,t.jsx)(n.strong,{children:"Changelog"})}),"\n",(0,t.jsx)(n.h3,{id:"added",children:(0,t.jsx)(n.strong,{children:"Added"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["introduced an option to omit specific renditions in ABR multi-stream configurations via Bintu stream group or entries:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["new parameter: ",(0,t.jsx)(n.code,{children:"config.source.options.adaption.omitRenditions"})," (type: ",(0,t.jsx)(n.code,{children:"array"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["accepted values include predefined quality identifiers (type: ",(0,t.jsx)(n.code,{children:"string"}),") or stream entry indexes (type: ",(0,t.jsx)(n.code,{children:"number"}),"):\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["qualities: ",(0,t.jsx)(n.code,{children:'"high"'}),", ",(0,t.jsx)(n.code,{children:'"medium-high"'}),", ",(0,t.jsx)(n.code,{children:'"medium"'}),", ",(0,t.jsx)(n.code,{children:'"medium-low"'}),", ",(0,t.jsx)(n.code,{children:'"low"'})]}),"\n",(0,t.jsxs)(n.li,{children:["indexes: ",(0,t.jsx)(n.code,{children:"0"}),", ",(0,t.jsx)(n.code,{children:"1"}),", ",(0,t.jsx)(n.code,{children:"2"}),", etc."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["see the ",(0,t.jsx)(n.a,{href:"https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_stream_switching#advanced-abr-settings",children:"feature description"})," for more details"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"fixed",children:(0,t.jsx)(n.strong,{children:"Fixed"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["resolved an issue where the ",(0,t.jsx)(n.code,{children:"config.source.options.adaption.downStep"})," value was not applied correctly when using group configurations"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"release-package",children:(0,t.jsx)(n.strong,{children:"Release Package"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://files.nanocosmos.de/index.php/s/Jn3G43zwdQAMi25",children:"4.29.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6",children:"latest 4.x"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP",children:"latest"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var i=s(67294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);