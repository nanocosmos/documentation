"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"directshow_rtmp_writer",title:"RTMP Writer",sidebar_label:"RTMP Writer"},o="DirectShow RTMP Network Renderer & Writer",l={unversionedId:"nanostream/directshow/directshow_rtmp_writer",id:"nanostream/directshow/directshow_rtmp_writer",title:"RTMP Writer",description:"Purpose",source:"@site/docs/nanostream/directshow/directshow_rtmp_writer.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_rtmp_writer",permalink:"/docs/nanostream/directshow/directshow_rtmp_writer",draft:!1,tags:[],version:"current",lastUpdatedAt:1694009609,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{id:"directshow_rtmp_writer",title:"RTMP Writer",sidebar_label:"RTMP Writer"},sidebar:"nanoStream Apps & SDKs",previous:{title:"RTMP",permalink:"/docs/nanostream/directshow/nanostream_directshow_rtmp"},next:{title:"RTSP",permalink:"/docs/nanostream/directshow/nanostream_directshow_rtsp"}},s={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Module / Version",id:"module--version",level:2},{value:"DirectShow Connectivity",id:"directshow-connectivity",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Configuration with DirectShow filter property page",id:"configuration-with-directshow-filter-property-page",level:3},{value:"Connection Test",id:"connection-test",level:2},{value:"RTMP Authentication",id:"rtmp-authentication",level:2},{value:"Automatic Reconnection:",id:"automatic-reconnection",level:2},{value:"Advanced Configuration Options",id:"advanced-configuration-options",level:2},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"Connection Status Notification",id:"connection-status-notification",level:2},{value:"Rtmp Writer Filter crashes when using <code>SetStatusNotifyHandler()</code>",id:"rtmp-writer-filter-crashes-when-using-setstatusnotifyhandler",level:2},{value:"Log / Debug Configuration Registry Settings",id:"log--debug-configuration-registry-settings",level:2},{value:"File name",id:"file-name",level:3},{value:"Logging level",id:"logging-level",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"directshow-rtmp-network-renderer--writer"},"DirectShow RTMP Network Renderer & Writer"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Writing ",(0,r.kt)("inlineCode",{parentName:"p"},"RTMP")," compatible video/audio streams over a network connection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supported Architectures: Microsoft DirectShow, Windows "),(0,r.kt)("li",{parentName:"ul"},"Supported Formats: H.264 Video + AAC Audio")),(0,r.kt)("h2",{id:"module--version"},"Module / Version"),(0,r.kt)("p",null,"nanocosmos RTMP Network Writer\n",(0,r.kt)("inlineCode",{parentName:"p"},"nRtmpRenderer.ax")," Version 3.0.3.1"),(0,r.kt)("h2",{id:"directshow-connectivity"},"DirectShow Connectivity"),(0,r.kt)("p",null,"The RTMP Writer is implemented as a \u201cRenderer Filter\u201d, which means it only has 2 input pins for compressed video and audio and no output pin.\nThe input is accepting connections matching the following media types:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pin 1 Media Types:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MEDIATYPE_Video\nPin 1 Media Subtypes:\nFourCCs: ",(0,r.kt)("inlineCode",{parentName:"li"},"H264"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"h264"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pin 1 Formats:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT_MPEG2_VIDEO"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT_NONE")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pin 2 Major Media Types:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MEDIATYPE_Audio")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pin 2 Media Subtypes:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MEDIASUBTYPE_AAC"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FourCC: 0x000000FF")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pin 2 Formats:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT_WaveFormatEx"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT_NONE")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rtmp_writer_prop",src:n(17507).Z,width:"160",height:"300"})),(0,r.kt)("p",null,"The filter's property page offers a subset of encoding parameters, containing the most important options.\nURL formatting:",(0,r.kt)("inlineCode",{parentName:"p"},"rtmp: [hostname / IP address]/[application]+[stream name]"),"  for  example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rtmp:127.0.0.1/live+myStream")," with:",(0,r.kt)("inlineCode",{parentName:"p"},"IP address: 127.0.0.1"),"\nApplication name: ",(0,r.kt)("inlineCode",{parentName:"p"},"live"),", Stream name: ",(0,r.kt)("inlineCode",{parentName:"p"},"myStream")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration may be set by using either the property page or the COM-Interface IRTMPOptions as declared in header file RTMPWriterOptions.h."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// Filter Guids\n// {B4FB59C5-983B-4d96-9204-F8B0E46704EE}\nDEFINE_GUID(CLSID_NANO_RTMP_WRITER,  0xb4fb59c5, 0x983b, 0x4d96, 0x92, 0x4, 0xf8, 0xb0, 0xe4, 0x67, 0x4, 0xee);\n\n// Property Page GUID\n// {EFC673DE-E20E-4699-8331-9522C5DF7A6D}\nDEFINE_GUID(CLSID_NANO_RTMP_WRITER_PROPPAGE, 0xefc673de, 0xe20e, 0x4699, 0x83, 0x31, 0x95, 0x22, 0xc5, 0xdf, 0x7a, 0x6d);\n\n// Configuration Interface GUID\n// IID_IRTMPOptions interface\n// {B8AF4593-BE31-449c-8485-3E6D65CBC1FE}\nDEFINE_GUID(IID_IRTMPOptions, 0xb8af4593, 0xbe31, 0x449c, 0x84, 0x85, 0x3e, 0x6d, 0x65, 0xcb, 0xc1, 0xfe)\n")),(0,r.kt)("p",null,"The streaming url can be set by using standard DirectShow interface IFileSinkFilter ."),(0,r.kt)("h3",{id:"configuration-with-directshow-filter-property-page"},"Configuration with DirectShow filter property page"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RTMP Writer Properties",src:n(86003).Z,width:"400",height:"748"})),(0,r.kt)("p",null,"The filter's property page offers a subset of encoding parameters, containing the most important options."),(0,r.kt)("p",null,"URL formatting:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rtmp:// [hostname / IP address]/[application]+[stream name]")),(0,r.kt)("p",null,"for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"rtmp://127.0.0.1/live+myStream")),(0,r.kt)("p",null,"with:\nIP address: 127.0.0.1\nApplication name: live,   Stream name: myStream"),(0,r.kt)("h2",{id:"connection-test"},"Connection Test"),(0,r.kt)("p",null,"Connect/Disconnect buttons. Allows to connect before starting the graph and disconnect during the streaming (this stops the running graph)."),(0,r.kt)("h2",{id:"rtmp-authentication"},"RTMP Authentication"),(0,r.kt)("p",null,"RTMP Authentication expects a user name and a password for unlocking access to the Media Server. RTMP Authentication is an outdated functionality not available with nanoStream Cloud."),(0,r.kt)("h2",{id:"automatic-reconnection"},"Automatic Reconnection:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Attempts")," to restore network connection after n seconds to the server in case of network interrupts. During the reconnect attempts the graph still playing. 0 means no attempts to reconnect to server."),(0,r.kt)("h2",{id:"advanced-configuration-options"},"Advanced Configuration Options"),(0,r.kt)("p",null,"The advanced options should be handled carefully. They can severely affect network and streaming performance. Contact support if you want to fine tune any settings.\n",(0,r.kt)("em",{parentName:"p"},"Buffering:"),"\nData Flow: RTMP multiplexed data \u2192 application buffer \u2192 socket buffer \u2192 network.\nThere are 2 buffer types:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Socket level buffer: Size of the network socket buffer, much dependent on the underlying network architecture"),(0,r.kt)("li",{parentName:"ol"},"Application level buffer (Output Buffer Size, Output packet size), 0=no buffer Affects bandwidth utilization, prevents bitrate changes and puts the sending process to a separate thread.")),(0,r.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Live Mode: Turns on/off blocking of input pins. (should be off by default)"),(0,r.kt)("li",{parentName:"ul"},"TCP No Delay: Activates the ",(0,r.kt)("inlineCode",{parentName:"li"},"TCP_NODELAY"),' option for TCP transmission ("Nagle Algorithm")'),(0,r.kt)("li",{parentName:"ul"},"Timecode Options: Sends Time Code in RTMP Meta Data"),(0,r.kt)("li",{parentName:"ul"},"Allow B Frames: should be on, it reduces the buffer/delay in ",(0,r.kt)("inlineCode",{parentName:"li"},"H.264 Main Profile")," without B Frames. No effect in Baseline Mode."),(0,r.kt)("li",{parentName:"ul"},"Timecode Options: send Time Code in RTMP Meta Data")),(0,r.kt)("h2",{id:"connection-status-notification"},"Connection Status Notification"),(0,r.kt)("p",null,"There are two possibilities to get the status of the connection to the server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Event messages are sent via IMediaEventSink with the event code EC_NANO_RTMP_WRITER_STATUS declared in ",(0,r.kt)("inlineCode",{parentName:"li"},"RTMPWriterOptions.h")," (",(0,r.kt)("inlineCode",{parentName:"li"},"#define EC_NANO_RTMP_WRITER_STATUS EC_USER+181"),"). A message is sent when the connection state changes. The different states are represented by (also declared in ",(0,r.kt)("inlineCode",{parentName:"li"},"RTMPWriterOptions.h"),"):"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RTMPWriterConnected=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RTMPWriterDisconnected=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RTMPWriterReconnecting=2")),(0,r.kt)("li",{parentName:"ul"},"Using a callback function, which is called when the connection state changes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Query for the interface ",(0,r.kt)("inlineCode",{parentName:"li"},"IRTMPStatusNotify")),(0,r.kt)("li",{parentName:"ul"},"Set the callback function via ",(0,r.kt)("inlineCode",{parentName:"li"},"SetStatusNotifyHandler()"))))),(0,r.kt)("h2",{id:"rtmp-writer-filter-crashes-when-using-setstatusnotifyhandler"},"Rtmp Writer Filter crashes when using ",(0,r.kt)("inlineCode",{parentName:"h2"},"SetStatusNotifyHandler()")),(0,r.kt)("p",null,"This problem is probably caused by calling a function declared with one calling convention with a function pointer declared with a different calling convention. Here is a good explanation of the problem:\n",(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/301655/c-visual-studio-runtime-error"},"Visual Studio Runtime Error")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/10079625/c-run-time-check-failure-0-the-value-of-esp-was-not-properly-saved-across-a"},"Run Time Check Failure")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conclusion"),": Make sure you use ",(0,r.kt)("inlineCode",{parentName:"p"},"stdcall")," in your declaration"),(0,r.kt)("h2",{id:"log--debug-configuration-registry-settings"},"Log / Debug Configuration Registry Settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key: HKEYCURRENTUSER\\Software\\DebugNano\\ nRtmpRenderer.ax")),(0,r.kt)("h3",{id:"file-name"},"File name"),(0,r.kt)("p",null,"Sets the output file name. The folder must exist.\nValue name: ",(0,r.kt)("inlineCode",{parentName:"p"},"LogToFile"),"\nValue type: ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_SZ / String"),"\nValid values: a valid output file name to enable file logging or an empty string"),(0,r.kt)("h3",{id:"logging-level"},"Logging level"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A higher value increases the amount of logging messages sent, and messages get more detailed."),(0,r.kt)("li",{parentName:"ul"},"Value name: ",(0,r.kt)("inlineCode",{parentName:"li"},"TRACE")),(0,r.kt)("li",{parentName:"ul"},"Value type: ",(0,r.kt)("inlineCode",{parentName:"li"},"REG_DWORD")),(0,r.kt)("li",{parentName:"ul"},"Valid values: 0 (minimal logging) - 9 (maximal logging)")))}d.isMDXComponent=!0},86003:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/directshow_rtmp_writer_properties-bffa820ffa981cd7a1b54b29b0beb8ff.png"},17507:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows_networkwriter_properties-f3539ec954ceaac782bf6c9b2eecc2e7.png"}}]);