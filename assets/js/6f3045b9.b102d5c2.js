"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7529],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const r={id:"nanostream_windows_developer_manual",title:"Developer Manual",sidebar_label:"Developer Manual"},i=void 0,l={unversionedId:"nanostream/windows/nanostream_windows_developer_manual",id:"nanostream/windows/nanostream_windows_developer_manual",title:"Developer Manual",description:"Note:",source:"@site/docs/nanostream/windows/nanostream_windows_developer_manual.md",sourceDirName:"nanostream/windows",slug:"/nanostream/windows/nanostream_windows_developer_manual",permalink:"/docs/nanostream/windows/nanostream_windows_developer_manual",draft:!1,tags:[],version:"current",lastUpdatedAt:1704708501,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"nanostream_windows_developer_manual",title:"Developer Manual",sidebar_label:"Developer Manual"},sidebar:"nanoStream Apps & SDKs",previous:{title:"Binary Modules for Windows",permalink:"/docs/nanostream/windows/nanostream_windows_binaries"},next:{title:"nanoStream Windows Language Integration",permalink:"/docs/nanostream/windows/nanostream_windows_language_integration"}},d={},s=[{value:"Live Video Capture Active-X Control (<code>npvidcap.ax</code>)",id:"live-video-capture-active-x-control-npvidcapax",level:2},{value:"nanocosmos H.264 video encoder (Filename: <code>nh264enc.ax</code>)",id:"nanocosmos-h264-video-encoder-filename-nh264encax",level:2},{value:"nanocosmos AAC audio encoder (Filename: <code>naacenc.ax</code>)",id:"nanocosmos-aac-audio-encoder-filename-naacencax",level:2},{value:"nanocosmos MP4 File Writer",id:"nanocosmos-mp4-file-writer",level:2},{value:"nanocosmos RTMP Network Writer (Filename: <code>nRtmpRenderer.ax</code>)",id:"nanocosmos-rtmp-network-writer-filename-nrtmprendererax",level:2},{value:"HD / UDP Streaming Filters",id:"hd--udp-streaming-filters",level:2},{value:"WindowsMedia Encoding and Streaming",id:"windowsmedia-encoding-and-streaming",level:2},{value:"Additional Extensions:",id:"additional-extensions",level:2},{value:"Setting DirectShow properties from C++",id:"setting-directshow-properties-from-c",level:2}],p={toc:s},c="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": "),(0,a.kt)("p",{parentName:"blockquote"},"Not all modules are contained in all configurations. Please ask for availability and prices.")),(0,a.kt)("h2",{id:"live-video-capture-active-x-control-npvidcapax"},"Live Video Capture Active-X Control (",(0,a.kt)("inlineCode",{parentName:"h2"},"npvidcap.ax"),")"),(0,a.kt)("p",null,"Active-X-Control compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveX")," technologies for Windows ",(0,a.kt)("inlineCode",{parentName:"p"},"C/C++"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NET/C#")),(0,a.kt)("h2",{id:"nanocosmos-h264-video-encoder-filename-nh264encax"},"nanocosmos H.264 video encoder (Filename: ",(0,a.kt)("inlineCode",{parentName:"h2"},"nh264enc.ax"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DirectShow")," video encoder filter for encoding live video to ",(0,a.kt)("inlineCode",{parentName:"p"},"H.264")),(0,a.kt)("h2",{id:"nanocosmos-aac-audio-encoder-filename-naacencax"},"nanocosmos AAC audio encoder (Filename: ",(0,a.kt)("inlineCode",{parentName:"h2"},"naacenc.ax"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DirectShow")," audio encoder filter for encoding live audio to ",(0,a.kt)("inlineCode",{parentName:"p"},"AAC")),(0,a.kt)("h2",{id:"nanocosmos-mp4-file-writer"},"nanocosmos MP4 File Writer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DirectShow")," filter for creating ",(0,a.kt)("inlineCode",{parentName:"p"},"MP4")," files with ",(0,a.kt)("inlineCode",{parentName:"p"},"H.264")," support"),(0,a.kt)("h2",{id:"nanocosmos-rtmp-network-writer-filename-nrtmprendererax"},"nanocosmos RTMP Network Writer (Filename: ",(0,a.kt)("inlineCode",{parentName:"h2"},"nRtmpRenderer.ax"),")"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DirectShow")," filter for streaming to RTMP Servers\nExample URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"rtmp://localhost/live+myStream")),(0,a.kt)("h2",{id:"hd--udp-streaming-filters"},"HD / UDP Streaming Filters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DirectShow")," Streaming components for HD video streaming in Local Area Networks:\nPoint-to-Point, Broadcast, Multicast support\nExample URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"udp://localhost:1234")),(0,a.kt)("h2",{id:"windowsmedia-encoding-and-streaming"},"WindowsMedia Encoding and Streaming"),(0,a.kt)("p",null,"Streaming component compatible to Microsoft WindowsMedia Video Formats:"),(0,a.kt)("h2",{id:"additional-extensions"},"Additional Extensions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nanocosmos Stereoscopic 3D-Video Mixer supporting Side-by-side/Interlaced/Color Anaglyph\nmodes"),(0,a.kt)("li",{parentName:"ul"},"Video Resizer for resizing and deinterlacing video"),(0,a.kt)("li",{parentName:"ul"},"Overlay Filter for blending of, Texts, Bitmaps, Tickers, etc."),(0,a.kt)("li",{parentName:"ul"},"Desktop Capture / Screen Grabber Filter for Application Streaming e.g. Games (upon request)"),(0,a.kt)("li",{parentName:"ul"},"Remote Control Function for Keyboard Feedback"),(0,a.kt)("li",{parentName:"ul"},"Player/Clients for DirectShow/Applications or Browser-Plugin or Flash based"),(0,a.kt)("li",{parentName:"ul"},"Live Video Encoder Application\nReference Application to show functionality in a simple end user program")),(0,a.kt)("h1",{id:"directshow-filter-usage-with-graphedit--graphstudionext"},"DirectShow Filter usage with GraphEdit / GraphStudioNext"),(0,a.kt)("p",null,"All Live Video Encoder components are available as ",(0,a.kt)("inlineCode",{parentName:"p"},"DirectShow")," filters and may be used within DirectShow applications."),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://code.google.com/p/graph-studio-next/"},"GraphStudio")," as a replacement for GraphEdit, as ",(0,a.kt)("inlineCode",{parentName:"p"},"RTMP")," URLs may be set easily with this software."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"live_encoding_graph",src:t(39452).Z,width:"300",height:"179"})),(0,a.kt)("h2",{id:"setting-directshow-properties-from-c"},"Setting DirectShow properties from C++"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"H.264")," parameters may be set by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"InanoCodecOpts")," interface. The ",(0,a.kt)("inlineCode",{parentName:"p"},"RTMP")," output path may be set by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"SetFileName()")," method of the default DirectShow ",(0,a.kt)("inlineCode",{parentName:"p"},"FileSinkFilter")," interface."))}m.isMDXComponent=!0},39452:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/windows_developer_manual_graph_studio-2293555498af321ff42fe89055b86756.png"}}]);