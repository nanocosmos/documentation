"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7440],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>u});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),y=r,u=c["".concat(p,".").concat(y)]||c[y]||m[y]||o;return n?t.createElement(u,i(i({ref:a},d),{},{components:n})):t.createElement(u,i({ref:a},d))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},46992:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const o={id:"nanoplayer_feature_latency_control_modes",title:"Latency Control Modes",sidebar_label:"Latency control modes"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_feature_latency_control_modes",id:"nanoplayer/nanoplayer_feature_latency_control_modes",title:"Latency Control Modes",description:"Click PLAY button to start",source:"@site/docs/nanoplayer/nanoplayer_feature_latency_control_modes.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_latency_control_modes",permalink:"/docs/nanoplayer/nanoplayer_feature_latency_control_modes",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"nanoplayer_feature_latency_control_modes",title:"Latency Control Modes",sidebar_label:"Latency control modes"},sidebar:"H5Live Player",previous:{title:"Fast playback start",permalink:"/docs/nanoplayer/nanoplayer_feature_fast_start"},next:{title:"Stream group configuration",permalink:"/docs/nanoplayer/nanoplayer_feature_stream_group_configuration"}},p={},s=[{value:"Supported platforms and browsers",id:"supported-platforms-and-browsers",level:2},{value:"v.4.14.1",id:"v4141",level:3},{value:"v.4.23.1",id:"v4231",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2},{value:"Latency control modes",id:"latency-control-modes",level:2},{value:"<code>&#39;classic&#39;</code> mode",id:"classic-mode",level:3},{value:"<code>&#39;balancedadaptive&#39;</code> mode",id:"balancedadaptive-mode",level:3},{value:"<code>&#39;fastadaptive&#39;</code> mode",id:"fastadaptive-mode",level:3},{value:"Buffer Tweaks",id:"buffer-tweaks",level:2},{value:"Buffer tweaks and latency control modes",id:"buffer-tweaks-and-latency-control-modes",level:3}],d={toc:s},c="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("div",{class:"video-wrap"},(0,r.yg)("div",{class:"video-container"},(0,r.yg)("iframe",{src:"https://www.youtube.com/embed/65qfMRSSPjU",frameborder:"0",allowfullscreen:!0}))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Click ",(0,r.yg)("inlineCode",{parentName:"em"},"PLAY")," button to start"))),(0,r.yg)("p",null,"Introduced in ",(0,r.yg)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.14.x"),", two new latency control modes have been added, targeting especially lowest latency use cases like live auctioning.\nThe latency control mode can be selected via the added ",(0,r.yg)("inlineCode",{parentName:"p"},"playback.latencyControlMode")," configuration parameter.\nThe established latency control mode is available as the ",(0,r.yg)("inlineCode",{parentName:"p"},"'classic'")," option which remains to be the default mode.\nIn addition the new latency control modes ",(0,r.yg)("inlineCode",{parentName:"p"},"'balancedadaptive'")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"'fastadaptive'")," have been added. According to the current stream and network conditions they can adjust the latency adaptively. This allows to achieve a lower latency while keeping the playback experience smooth."),(0,r.yg)("h2",{id:"supported-platforms-and-browsers"},"Supported platforms and browsers"),(0,r.yg)("p",null,"This feature is particularly helpful in i.e. live auctioning, where even lower latency is crucial. The usage depends on the needs, however, in most cases the ",(0,r.yg)("inlineCode",{parentName:"p"},"'classic'")," mode is enough to achieve a satisfying viewing experience."),(0,r.yg)("h3",{id:"v4141"},"v.4.14.1"),(0,r.yg)("p",null,"Version 4.14.x added support for all major desktop and Android browsers."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Desktop Windows/Mac/Linux: Chrome, Edge Chromium (80+), Firefox, Safari, Chromium-based browsers"),(0,r.yg)("li",{parentName:"ul"},"Android: Chrome, Firefox, Chromium-based browsers")),(0,r.yg)("p",null,"For unsupported platforms/browsers the player is doing automatic fallback to ",(0,r.yg)("inlineCode",{parentName:"p"},"'classic'")," mode."),(0,r.yg)("h3",{id:"v4231"},"v.4.23.1"),(0,r.yg)("p",null,"Version 4.23.1 added support of ",(0,r.yg)("inlineCode",{parentName:"p"},"'balancedadaptive'")," latency control mode on iOS."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Desktop Windows/Mac/Linux: Chrome, Edge Chromium (80+), Firefox, Safari, Chromium-based browsers"),(0,r.yg)("li",{parentName:"ul"},"Android: Chrome, Firefox, Chromium-based browsers, WebViews"),(0,r.yg)("li",{parentName:"ul"},"iOS: Safari, Chrome, Firefox, WebViews and other supported browsers",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"'balancedadaptive'")," mode only"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"'fastadaptive'")," mode configuration will automatically fall back to ",(0,r.yg)("inlineCode",{parentName:"li"},"'balancedadaptive'")," mode")))),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"Accessing latency control modes is possible via ",(0,r.yg)("inlineCode",{parentName:"p"},"playback.latencyControlMode")," in the player configuration."),(0,r.yg)("p",null,"Parameter name: ",(0,r.yg)("inlineCode",{parentName:"p"},"config.playback.latencyControlMode"),(0,r.yg)("br",{parentName:"p"}),"\n","Values: ",(0,r.yg)("inlineCode",{parentName:"p"},"'classic'"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"'balancedadaptive'"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"'fastadaptive'")),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"var config = {\n    'playback': {\n        ...\n        'latencyControlMode' : 'classic',\n        ...\n    }\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"var config = {\n    'playback': {\n        ...\n        'latencyControlMode' : 'balancedadaptive',\n        ...\n    }\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"var config = {\n    'playback': {\n        ...\n        'latencyControlMode' : 'fastadaptive',\n        ...\n    }\n}\n")),(0,r.yg)("h2",{id:"latency-control-modes"},"Latency control modes"),(0,r.yg)("h3",{id:"classic-mode"},(0,r.yg)("inlineCode",{parentName:"h3"},"'classic'")," mode"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"default mode"),(0,r.yg)("li",{parentName:"ul"},"well-established and reliable option for a variety of use cases"),(0,r.yg)("li",{parentName:"ul"},"based on threshold values that can be customized via ",(0,r.yg)("a",{parentName:"li",href:"#buffer-tweaks"},(0,r.yg)("inlineCode",{parentName:"a"},"tweaks.buffer"))," configuration")),(0,r.yg)("h3",{id:"balancedadaptive-mode"},(0,r.yg)("inlineCode",{parentName:"h3"},"'balancedadaptive'")," mode"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"added in version 4.14.x, iOS support added in 4.23.x"),(0,r.yg)("li",{parentName:"ul"},"latency control adapting to current stream and network conditions"),(0,r.yg)("li",{parentName:"ul"},"capable of achieving and maintaining lower playback latency"),(0,r.yg)("li",{parentName:"ul"},"lower operating points compared to ",(0,r.yg)("inlineCode",{parentName:"li"},"classic")," mode"),(0,r.yg)("li",{parentName:"ul"},"recommended to be used without custom ",(0,r.yg)("a",{parentName:"li",href:"#buffer-tweaks"},(0,r.yg)("inlineCode",{parentName:"a"},"tweaks.buffer"))," configuration")),(0,r.yg)("h3",{id:"fastadaptive-mode"},(0,r.yg)("inlineCode",{parentName:"h3"},"'fastadaptive'")," mode"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"added in version 4.14.x"),(0,r.yg)("li",{parentName:"ul"},"latency control adapting to current stream and network conditions"),(0,r.yg)("li",{parentName:"ul"},"capable of achieving and maintaining lower playback latency"),(0,r.yg)("li",{parentName:"ul"},"lower operating points compared to ",(0,r.yg)("inlineCode",{parentName:"li"},"balancedadaptive")," mode"),(0,r.yg)("li",{parentName:"ul"},"recommended to be used without custom ",(0,r.yg)("a",{parentName:"li",href:"#buffer-tweaks"},(0,r.yg)("inlineCode",{parentName:"a"},"tweaks.buffer"))," configuration")),(0,r.yg)("h2",{id:"buffer-tweaks"},"Buffer Tweaks"),(0,r.yg)("admonition",{title:"Important",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"It's recommended to use default settings. Feel free to ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"contact support")," for assistance and feedback.")),(0,r.yg)("p",null,"For stable low latency playback, default buffer settings are endorsed. These settings are internally set without passing a ",(0,r.yg)("inlineCode",{parentName:"p"},"tweaks.buffer")," object through the config. The default settings are:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"'tweaks' : {\n    'buffer': {\n        'min': 0.2,\n        'start': 0.5,\n        'target': 1.2,\n        'limit': 1.7,\n        'max': 8.0\n    }\n}\n")),(0,r.yg)("admonition",{title:"Unappropriate buffer tweaks values can negatively impact playback",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"It's crucial that when adjusting the buffer, values ascend in the correct order (",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"min")," < ",(0,r.yg)("inlineCode",{parentName:"strong"},"start")," < ",(0,r.yg)("inlineCode",{parentName:"strong"},"target")," < ",(0,r.yg)("inlineCode",{parentName:"strong"},"limit")," < ",(0,r.yg)("inlineCode",{parentName:"strong"},"max")),"). Additionally, ensure that the differences between ",(0,r.yg)("inlineCode",{parentName:"p"},"min")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"start"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"min")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"target"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"target")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"limit")," are significant enough. Values too close to each other (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"min"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"0.2")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"target"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"0.3"),") may disrupt the buffer's functioning.\nLower buffer settings may lead to unstable playback such as freezing or switching between buffering and resuming, which can depend on the stream, platform, and network conditions.")),(0,r.yg)("p",null,"Explanation of values:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"min")),": If buffer underrun occurs while playing and reaches this value, buffering initiates until the ",(0,r.yg)("inlineCode",{parentName:"p"},"start")," value is reached for playback to resume.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"start")),": Playback starts at this buffer value upon the play call.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"target")),": This value is aimed for if the buffer reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"limit")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"max"),". It ensures stable playback.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"limit")),": Smooth latency reduction occurs if this value is reached, moving towards ",(0,r.yg)("inlineCode",{parentName:"p"},"target"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"max")),": Absolute maximum buffer; upon reaching this value, a hard seek to ",(0,r.yg)("inlineCode",{parentName:"p"},"target")," is performed. It should be significantly higher than ",(0,r.yg)("inlineCode",{parentName:"p"},"limit"),"."))),(0,r.yg)("h3",{id:"buffer-tweaks-and-latency-control-modes"},"Buffer tweaks and latency control modes"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"tweaks.buffer")," settings primarily influence the behavior of the ",(0,r.yg)("inlineCode",{parentName:"p"},"'classic'")," mode. However, it's essential to note that while using the ",(0,r.yg)("inlineCode",{parentName:"p"},"'balancedadaptive'")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"'fastadaptive'"),"modes, the default ",(0,r.yg)("inlineCode",{parentName:"p"},"tweaks.buffer")," settings should be prioritized. The selection of ",(0,r.yg)("inlineCode",{parentName:"p"},"latencyControlMode")," and the ",(0,r.yg)("strong",{parentName:"p"},"default")," buffer tweaks should be emphasized for optimal performance and stability."))}m.isMDXComponent=!0}}]);