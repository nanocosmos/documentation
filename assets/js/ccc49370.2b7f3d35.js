"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["2998"],{77352:function(e,t,n){n.d(t,{Z:()=>O});var r=n("85893");n("67294");var i=n("67026"),l=n("68141");function a(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var s=n("53367");function o(e){let{className:t}=e,{metadata:n,isBlogPostPage:a}=(0,l.nO)(),{permalink:o,title:c}=n;return(0,r.jsx)(a?"h1":"h2",{className:(0,i.Z)("title_f1Hy",t),children:a?c:(0,r.jsx)(s.Z,{to:o,children:c})})}var c=n("7670"),d=n("11107"),u=n("84221");function m(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,d.c)();return t=>{let n=Math.ceil(t);return e(n,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function h(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function g(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e,{metadata:n}=(0,l.nO)(),{date:a,readingTime:s}=n,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,i.Z)("container_mt6G","margin-vert--md",t),children:[(0,r.jsx)(h,{date:a,formattedDate:o.format(new Date(a))}),void 0!==s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(m,{readingTime:s})]})]})}var x=n("76230");let p={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function j(e){let{className:t}=e,{metadata:{authors:n},assets:a}=(0,l.nO)();if(0===n.length)return null;let s=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,r.jsx)("div",{className:(0,i.Z)("margin-top--md margin-bottom--sm",s?p.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,r.jsx)("div",{className:(0,i.Z)(!s&&(o?"col col--12":"col col--6"),s?p.imageOnlyAuthorCol:p.authorCol),children:(0,r.jsx)(x.Z,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(o,{}),(0,r.jsx)(f,{}),(0,r.jsx)(j,{})]})}var b=n("43781"),Z=n("44719");function _(e){let{children:t,className:n}=e,{isBlogPostPage:a}=(0,l.nO)();return(0,r.jsx)("div",{id:a?b.blogPostContainerID:void 0,className:(0,i.Z)("markdown",n),children:(0,r.jsx)(Z.Z,{children:t})})}var N=n("66171"),y=n("6360"),k=n("56671");function w(){return(0,r.jsx)("b",{children:(0,r.jsx)(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function L(e){let{blogPostTitle:t,...n}=e;return(0,r.jsx)(s.Z,{"aria-label":(0,c.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(w,{})})}function C(){let{metadata:e,isBlogPostPage:t}=(0,l.nO)(),{tags:n,title:a,editUrl:s,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,m=n.length>0;if(!(m||u||s))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,i.Z)("col",{"col--9":u}),children:(0,r.jsx)(k.Z,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,i.Z)("col text--right",{"col--3":m}),children:(0,r.jsx)(L,{blogPostTitle:a,to:e.permalink})})]});{let e=!!(s||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,i.Z)("row","margin-top--sm",N.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.Z,{tags:n})})}),e&&(0,r.jsx)(y.Z,{className:(0,i.Z)("margin-top--sm",N.k.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:d,lastUpdatedBy:c})]})}}function O(e){let{children:t,className:n}=e,s=function(){let{isBlogPostPage:e}=(0,l.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(a,{className:(0,i.Z)(s,n),children:[(0,r.jsx)(v,{}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(C,{})]})}},33042:function(e,t,n){n.r(t),n.d(t,{default:()=>v});var r=n("85893");n("67294");var i=n("67026"),l=n("50357"),a=n("66171"),s=n("68141"),o=n("60187"),c=n("77352"),d=n("7670"),u=n("68007");function m(e){let{nextItem:t,prevItem:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,r.jsx)(u.Z,{...n,subLabel:(0,r.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,r.jsx)(u.Z,{...t,subLabel:(0,r.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){let{assets:e,metadata:t}=(0,s.nO)(),{title:n,description:i,date:a,tags:o,authors:c,frontMatter:d}=t,{keywords:u}=d,m=e.image??d.image;return(0,r.jsxs)(l.d,{title:d.title_meta??n,description:i,keywords:u,image:m,children:[(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"article:published_time",content:a}),c.some(e=>e.url)&&(0,r.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),o.length>0&&(0,r.jsx)("meta",{property:"article:tag",content:o.map(e=>e.label).join(",")})]})}var g=n("11199");function f(){let e=(0,s.iZ)();return(0,r.jsx)(g.Z,{children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n("79521"),p=n("81046");function j(e){let{sidebar:t,children:n}=e,{metadata:i,toc:l}=(0,s.nO)(),{nextItem:a,prevItem:d,frontMatter:u}=i,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:f}=u;return(0,r.jsxs)(o.Z,{sidebar:t,toc:!h&&l.length>0?(0,r.jsx)(x.Z,{toc:l,minHeadingLevel:g,maxHeadingLevel:f}):void 0,children:[(0,r.jsx)(p.Z,{metadata:i}),(0,r.jsx)(c.Z,{children:n}),(a||d)&&(0,r.jsx)(m,{nextItem:a,prevItem:d})]})}function v(e){let t=e.content;return(0,r.jsx)(s.n4,{content:e.content,isBlogPostPage:!0,children:(0,r.jsxs)(l.FG,{className:(0,i.Z)(a.k.wrapper.blogPages,a.k.page.blogPostPage),children:[(0,r.jsx)(h,{}),(0,r.jsx)(f,{}),(0,r.jsx)(j,{sidebar:e.sidebar,children:(0,r.jsx)(t,{})})]})})}},87739:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var i=n(67026),l=n(74385),a=n(66171),s=n(64926);function o(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.cI,{}),className:(0,i.Z)(t,a.k.common.unlistedBanner),children:(0,r.jsx)(l.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.T$,{}),(0,r.jsx)(o,{...e})]})}},81046:function(e,t,n){n.d(t,{Z:()=>d});var r=n("85893");n("67294");var i=n("67026"),l=n("74385"),a=n("66171"),s=n("64926");function o(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.ht,{}),className:(0,i.Z)(t,a.k.common.draftBanner),children:(0,r.jsx)(l.xo,{})})}var c=n("87739");function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(c.Z,{}),i.draft&&(0,r.jsx)(o,{})]})}},68007:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(85893);n(67294);var i=n(67026),l=n(53367);function a(e){let{permalink:t,title:n,subLabel:a,isNext:s}=e;return(0,r.jsxs)(l.Z,{className:(0,i.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},79521:function(e,t,n){n.d(t,{Z:()=>a});var r=n("85893");n("67294");var i=n("67026"),l=n("86643");function a(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.Z)("tableOfContents_bqdL","thin-scrollbar",t),children:(0,r.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},86643:function(e,t,n){n.d(t,{Z:()=>c});var r=n("85893"),i=n("67294"),l=n("66009");function a(e){let t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}var s=n("53367");let o=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:a}=t;return n.length?(0,r.jsx)("ul",{className:a?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(s.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.L)(),g=d??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return t.level>=r&&t.level<=i?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:g,maxHeadingLevel:f});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:s}=e;function o(){let e=Array.from(document.getElementsByClassName(r)),o=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>a(e).top>=n);if(r){var i;return(i=a(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),{anchorTopOffset:n.current}),c=e.find(e=>o&&o.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,i.useMemo)(()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:f}},[s,c,g,f])),(0,r.jsx)(o,{toc:x,className:n,linkClassName:s,...m})}},2684:function(e,t,n){n.d(t,{Z:()=>s});var r=n("85893");n("67294");var i=n("67026"),l=n("53367");let a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:n,count:s,description:o}=e;return(0,r.jsxs)(l.Z,{href:t,title:o,className:(0,i.Z)(a.tag,s?a.tagWithCount:a.tagRegular),children:[n,s&&(0,r.jsx)("span",{children:s})]})}},56671:function(e,t,n){n.d(t,{Z:()=>s});var r=n("85893");n("67294");var i=n("67026"),l=n("7670"),a=n("2684");function s(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,i.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,r.jsx)("li",{className:"tag_QGVx",children:(0,r.jsx)(a.Z,{...e})},e.permalink))})]})}},74385:function(e,t,n){n.d(t,{T$:function(){return o},cI:function(){return a},eU:function(){return s},ht:function(){return c},xo:function(){return d}});var r=n(85893);n(67294);var i=n(7670),l=n(11199);function a(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);