"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1680],{15680:(e,n,o)=>{o.d(n,{xA:()=>p,yg:()=>g});var a=o(96540);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=a.createContext({}),s=function(e){var n=a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),u=t,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return o?a.createElement(g,i(i({ref:n},p),{},{components:o})):a.createElement(g,i({ref:n},p))}));function g(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},72699:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(58168),t=(o(96540),o(15680));const r={id:"nanostream_windows_developer_manual",title:"Developer Manual",sidebar_label:"Developer Manual"},i=void 0,l={unversionedId:"nanostream/windows/nanostream_windows_developer_manual",id:"nanostream/windows/nanostream_windows_developer_manual",title:"Developer Manual",description:"Note:",source:"@site/docs/nanostream/windows/nanostream_windows_developer_manual.md",sourceDirName:"nanostream/windows",slug:"/nanostream/windows/nanostream_windows_developer_manual",permalink:"/docs/nanostream/windows/nanostream_windows_developer_manual",draft:!1,tags:[],version:"current",lastUpdatedAt:1709564238,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{id:"nanostream_windows_developer_manual",title:"Developer Manual",sidebar_label:"Developer Manual"},sidebar:"nanoStream Apps & SDKs",previous:{title:"Binary Modules for Windows",permalink:"/docs/nanostream/windows/nanostream_windows_binaries"},next:{title:"nanoStream Windows Language Integration",permalink:"/docs/nanostream/windows/nanostream_windows_language_integration"}},d={},s=[{value:"Live Video Capture Active-X Control (<code>npvidcap.ax</code>)",id:"live-video-capture-active-x-control-npvidcapax",level:2},{value:"nanocosmos H.264 video encoder (Filename: <code>nh264enc.ax</code>)",id:"nanocosmos-h264-video-encoder-filename-nh264encax",level:2},{value:"nanocosmos AAC audio encoder (Filename: <code>naacenc.ax</code>)",id:"nanocosmos-aac-audio-encoder-filename-naacencax",level:2},{value:"nanocosmos MP4 File Writer",id:"nanocosmos-mp4-file-writer",level:2},{value:"nanocosmos RTMP Network Writer (Filename: <code>nRtmpRenderer.ax</code>)",id:"nanocosmos-rtmp-network-writer-filename-nrtmprendererax",level:2},{value:"HD / UDP Streaming Filters",id:"hd--udp-streaming-filters",level:2},{value:"WindowsMedia Encoding and Streaming",id:"windowsmedia-encoding-and-streaming",level:2},{value:"Additional Extensions:",id:"additional-extensions",level:2},{value:"Setting DirectShow properties from C++",id:"setting-directshow-properties-from-c",level:2}],p={toc:s},c="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Note"),": "),(0,t.yg)("p",{parentName:"blockquote"},"Not all modules are contained in all configurations. Please ask for availability and prices.")),(0,t.yg)("h2",{id:"live-video-capture-active-x-control-npvidcapax"},"Live Video Capture Active-X Control (",(0,t.yg)("inlineCode",{parentName:"h2"},"npvidcap.ax"),")"),(0,t.yg)("p",null,"Active-X-Control compatible with ",(0,t.yg)("inlineCode",{parentName:"p"},"ActiveX")," technologies for Windows ",(0,t.yg)("inlineCode",{parentName:"p"},"C/C++"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"NET/C#")),(0,t.yg)("h2",{id:"nanocosmos-h264-video-encoder-filename-nh264encax"},"nanocosmos H.264 video encoder (Filename: ",(0,t.yg)("inlineCode",{parentName:"h2"},"nh264enc.ax"),")"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"DirectShow")," video encoder filter for encoding live video to ",(0,t.yg)("inlineCode",{parentName:"p"},"H.264")),(0,t.yg)("h2",{id:"nanocosmos-aac-audio-encoder-filename-naacencax"},"nanocosmos AAC audio encoder (Filename: ",(0,t.yg)("inlineCode",{parentName:"h2"},"naacenc.ax"),")"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"DirectShow")," audio encoder filter for encoding live audio to ",(0,t.yg)("inlineCode",{parentName:"p"},"AAC")),(0,t.yg)("h2",{id:"nanocosmos-mp4-file-writer"},"nanocosmos MP4 File Writer"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"DirectShow")," filter for creating ",(0,t.yg)("inlineCode",{parentName:"p"},"MP4")," files with ",(0,t.yg)("inlineCode",{parentName:"p"},"H.264")," support"),(0,t.yg)("h2",{id:"nanocosmos-rtmp-network-writer-filename-nrtmprendererax"},"nanocosmos RTMP Network Writer (Filename: ",(0,t.yg)("inlineCode",{parentName:"h2"},"nRtmpRenderer.ax"),")"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"DirectShow")," filter for streaming to RTMP Servers\nExample URL: ",(0,t.yg)("inlineCode",{parentName:"p"},"rtmp://localhost/live+myStream")),(0,t.yg)("h2",{id:"hd--udp-streaming-filters"},"HD / UDP Streaming Filters"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"DirectShow")," Streaming components for HD video streaming in Local Area Networks:\nPoint-to-Point, Broadcast, Multicast support\nExample URL: ",(0,t.yg)("inlineCode",{parentName:"p"},"udp://localhost:1234")),(0,t.yg)("h2",{id:"windowsmedia-encoding-and-streaming"},"WindowsMedia Encoding and Streaming"),(0,t.yg)("p",null,"Streaming component compatible to Microsoft WindowsMedia Video Formats:"),(0,t.yg)("h2",{id:"additional-extensions"},"Additional Extensions:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"nanocosmos Stereoscopic 3D-Video Mixer supporting Side-by-side/Interlaced/Color Anaglyph\nmodes"),(0,t.yg)("li",{parentName:"ul"},"Video Resizer for resizing and deinterlacing video"),(0,t.yg)("li",{parentName:"ul"},"Overlay Filter for blending of, Texts, Bitmaps, Tickers, etc."),(0,t.yg)("li",{parentName:"ul"},"Desktop Capture / Screen Grabber Filter for Application Streaming e.g. Games (upon request)"),(0,t.yg)("li",{parentName:"ul"},"Remote Control Function for Keyboard Feedback"),(0,t.yg)("li",{parentName:"ul"},"Player/Clients for DirectShow/Applications or Browser-Plugin or Flash based"),(0,t.yg)("li",{parentName:"ul"},"Live Video Encoder Application\nReference Application to show functionality in a simple end user program")),(0,t.yg)("h1",{id:"directshow-filter-usage-with-graphedit--graphstudionext"},"DirectShow Filter usage with GraphEdit / GraphStudioNext"),(0,t.yg)("p",null,"All Live Video Encoder components are available as ",(0,t.yg)("inlineCode",{parentName:"p"},"DirectShow")," filters and may be used within DirectShow applications."),(0,t.yg)("p",null,"We recommend using ",(0,t.yg)("a",{parentName:"p",href:"https://code.google.com/p/graph-studio-next/"},"GraphStudio")," as a replacement for GraphEdit, as ",(0,t.yg)("inlineCode",{parentName:"p"},"RTMP")," URLs may be set easily with this software."),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"live_encoding_graph",src:o(10232).A,width:"300",height:"179"})),(0,t.yg)("h2",{id:"setting-directshow-properties-from-c"},"Setting DirectShow properties from C++"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"H.264")," parameters may be set by calling the ",(0,t.yg)("inlineCode",{parentName:"p"},"InanoCodecOpts")," interface. The ",(0,t.yg)("inlineCode",{parentName:"p"},"RTMP")," output path may be set by calling the ",(0,t.yg)("inlineCode",{parentName:"p"},"SetFileName()")," method of the default DirectShow ",(0,t.yg)("inlineCode",{parentName:"p"},"FileSinkFilter")," interface."))}m.isMDXComponent=!0},10232:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/windows_developer_manual_graph_studio-2293555498af321ff42fe89055b86756.png"}}]);