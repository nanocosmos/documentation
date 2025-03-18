"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["3708"],{38105:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>t});var s=JSON.parse('{"id":"nanoplayer/nanoplayer_feature_latency_control_modes","title":"Latency Control Modes","description":"Click PLAY button to start","source":"@site/docs/nanoplayer/nanoplayer_feature_latency_control_modes.md","sourceDirName":"nanoplayer","slug":"/nanoplayer/nanoplayer_feature_latency_control_modes","permalink":"/docs/nanoplayer/nanoplayer_feature_latency_control_modes","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1742310768000,"frontMatter":{"id":"nanoplayer_feature_latency_control_modes","title":"Latency Control Modes","sidebar_label":"Latency control modes"},"sidebar":"H5Live Player","previous":{"title":"Fast playback start","permalink":"/docs/nanoplayer/nanoplayer_feature_fast_start"},"next":{"title":"Stream group configuration","permalink":"/docs/nanoplayer/nanoplayer_feature_stream_group_configuration"}}'),i=a("85893"),r=a("50065");let o={id:"nanoplayer_feature_latency_control_modes",title:"Latency Control Modes",sidebar_label:"Latency control modes"},t=void 0,l={},d=[{value:"Supported platforms and browsers",id:"supported-platforms-and-browsers",level:2},{value:"v.4.14.1",id:"v4141",level:3},{value:"v.4.23.1",id:"v4231",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2},{value:"Latency control modes",id:"latency-control-modes",level:2},{value:"<code>&#39;classic&#39;</code> mode",id:"classic-mode",level:3},{value:"<code>&#39;balancedadaptive&#39;</code> mode",id:"balancedadaptive-mode",level:3},{value:"<code>&#39;fastadaptive&#39;</code> mode",id:"fastadaptive-mode",level:3},{value:"Buffer Tweaks",id:"buffer-tweaks",level:2},{value:"Buffer tweaks and latency control modes",id:"buffer-tweaks-and-latency-control-modes",level:3}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{class:"video-wrap",children:(0,i.jsx)("div",{class:"video-container",children:(0,i.jsx)("iframe",{src:"https://www.youtube.com/embed/65qfMRSSPjU",frameborder:"0",allowfullscreen:!0})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsxs)(n.strong,{children:["Click ",(0,i.jsx)(n.code,{children:"PLAY"})," button to start"]})})}),"\n",(0,i.jsxs)(n.p,{children:["Introduced in ",(0,i.jsx)(n.strong,{children:"nanoStream H5Live Player Version 4.14.x"}),", two new latency control modes have been added, targeting especially lowest latency use cases like live auctioning.\nThe latency control mode can be selected via the added ",(0,i.jsx)(n.code,{children:"playback.latencyControlMode"})," configuration parameter.\nThe established latency control mode is available as the ",(0,i.jsx)(n.code,{children:"'classic'"})," option which remains to be the default mode.\nIn addition the new latency control modes ",(0,i.jsx)(n.code,{children:"'balancedadaptive'"})," and ",(0,i.jsx)(n.code,{children:"'fastadaptive'"})," have been added. According to the current stream and network conditions they can adjust the latency adaptively. This allows to achieve a lower latency while keeping the playback experience smooth."]}),"\n",(0,i.jsx)(n.h2,{id:"supported-platforms-and-browsers",children:"Supported platforms and browsers"}),"\n",(0,i.jsxs)(n.p,{children:["This feature is particularly helpful in i.e. live auctioning, where even lower latency is crucial. The usage depends on the needs, however, in most cases the ",(0,i.jsx)(n.code,{children:"'classic'"})," mode is enough to achieve a satisfying viewing experience."]}),"\n",(0,i.jsx)(n.h3,{id:"v4141",children:"v.4.14.1"}),"\n",(0,i.jsx)(n.p,{children:"Version 4.14.x added support for all major desktop and Android browsers."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Desktop Windows/Mac/Linux: Chrome, Edge Chromium (80+), Firefox, Safari, Chromium-based browsers"}),"\n",(0,i.jsx)(n.li,{children:"Android: Chrome, Firefox, Chromium-based browsers"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For unsupported platforms/browsers the player is doing automatic fallback to ",(0,i.jsx)(n.code,{children:"'classic'"})," mode."]}),"\n",(0,i.jsx)(n.h3,{id:"v4231",children:"v.4.23.1"}),"\n",(0,i.jsxs)(n.p,{children:["Version 4.23.1 added support of ",(0,i.jsx)(n.code,{children:"'balancedadaptive'"})," latency control mode on iOS."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Desktop Windows/Mac/Linux: Chrome, Edge Chromium (80+), Firefox, Safari, Chromium-based browsers"}),"\n",(0,i.jsx)(n.li,{children:"Android: Chrome, Firefox, Chromium-based browsers, WebViews"}),"\n",(0,i.jsxs)(n.li,{children:["iOS: Safari, Chrome, Firefox, WebViews and other supported browsers","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'balancedadaptive'"})," mode only"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'fastadaptive'"})," mode configuration will automatically fall back to ",(0,i.jsx)(n.code,{children:"'balancedadaptive'"})," mode"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Accessing latency control modes is possible via ",(0,i.jsx)(n.code,{children:"playback.latencyControlMode"})," in the player configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["Parameter name: ",(0,i.jsx)(n.code,{children:"config.playback.latencyControlMode"}),(0,i.jsx)(n.br,{}),"\n","Values: ",(0,i.jsx)(n.code,{children:"'classic'"}),", ",(0,i.jsx)(n.code,{children:"'balancedadaptive'"}),", ",(0,i.jsx)(n.code,{children:"'fastadaptive'"})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var config = {\n    'playback': {\n        ...\n        'latencyControlMode' : 'classic',\n        ...\n    }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var config = {\n    'playback': {\n        ...\n        'latencyControlMode' : 'balancedadaptive',\n        ...\n    }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var config = {\n    'playback': {\n        ...\n        'latencyControlMode' : 'fastadaptive',\n        ...\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"latency-control-modes",children:"Latency control modes"}),"\n",(0,i.jsxs)(n.h3,{id:"classic-mode",children:[(0,i.jsx)(n.code,{children:"'classic'"})," mode"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"default mode"}),"\n",(0,i.jsx)(n.li,{children:"well-established and reliable option for a variety of use cases"}),"\n",(0,i.jsxs)(n.li,{children:["based on threshold values that can be customized via ",(0,i.jsx)(n.a,{href:"#buffer-tweaks",children:(0,i.jsx)(n.code,{children:"tweaks.buffer"})})," configuration"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"balancedadaptive-mode",children:[(0,i.jsx)(n.code,{children:"'balancedadaptive'"})," mode"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"added in version 4.14.x, iOS support added in 4.23.x"}),"\n",(0,i.jsx)(n.li,{children:"latency control adapting to current stream and network conditions"}),"\n",(0,i.jsx)(n.li,{children:"capable of achieving and maintaining lower playback latency"}),"\n",(0,i.jsxs)(n.li,{children:["lower operating points compared to ",(0,i.jsx)(n.code,{children:"classic"})," mode"]}),"\n",(0,i.jsxs)(n.li,{children:["recommended to be used without custom ",(0,i.jsx)(n.a,{href:"#buffer-tweaks",children:(0,i.jsx)(n.code,{children:"tweaks.buffer"})})," configuration"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"fastadaptive-mode",children:[(0,i.jsx)(n.code,{children:"'fastadaptive'"})," mode"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"added in version 4.14.x"}),"\n",(0,i.jsx)(n.li,{children:"latency control adapting to current stream and network conditions"}),"\n",(0,i.jsx)(n.li,{children:"capable of achieving and maintaining lower playback latency"}),"\n",(0,i.jsxs)(n.li,{children:["lower operating points compared to ",(0,i.jsx)(n.code,{children:"balancedadaptive"})," mode"]}),"\n",(0,i.jsxs)(n.li,{children:["recommended to be used without custom ",(0,i.jsx)(n.a,{href:"#buffer-tweaks",children:(0,i.jsx)(n.code,{children:"tweaks.buffer"})})," configuration"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"buffer-tweaks",children:"Buffer Tweaks"}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(n.p,{children:["It's recommended to use default settings. Feel free to ",(0,i.jsx)(n.a,{href:"https://www.nanocosmos.de/support",children:"contact support"})," for assistance and feedback."]})}),"\n",(0,i.jsxs)(n.p,{children:["For stable low latency playback, default buffer settings are endorsed. These settings are internally set without passing a ",(0,i.jsx)(n.code,{children:"tweaks.buffer"})," object through the config. The default settings are:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"'tweaks' : {\n    'buffer': {\n        'min': 0.2,\n        'start': 0.5,\n        'target': 1.2,\n        'limit': 1.7,\n        'max': 8.0\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Unappropriate buffer tweaks values can negatively impact playback",type:"caution",children:(0,i.jsxs)(n.p,{children:["It's crucial that when adjusting the buffer, values ascend in the correct order (",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"min"})," < ",(0,i.jsx)(n.code,{children:"start"})," < ",(0,i.jsx)(n.code,{children:"target"})," < ",(0,i.jsx)(n.code,{children:"limit"})," < ",(0,i.jsx)(n.code,{children:"max"})]}),"). Additionally, ensure that the differences between ",(0,i.jsx)(n.code,{children:"min"})," & ",(0,i.jsx)(n.code,{children:"start"}),", ",(0,i.jsx)(n.code,{children:"min"})," & ",(0,i.jsx)(n.code,{children:"target"}),", ",(0,i.jsx)(n.code,{children:"target"})," & ",(0,i.jsx)(n.code,{children:"limit"})," are significant enough. Values too close to each other (e.g., ",(0,i.jsx)(n.code,{children:"min"}),": ",(0,i.jsx)(n.code,{children:"0.2"})," & ",(0,i.jsx)(n.code,{children:"target"}),": ",(0,i.jsx)(n.code,{children:"0.3"}),") may disrupt the buffer's functioning.\nLower buffer settings may lead to unstable playback such as freezing or switching between buffering and resuming, which can depend on the stream, platform, and network conditions."]})}),"\n",(0,i.jsx)(n.p,{children:"Explanation of values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"min"})}),": If buffer underrun occurs while playing and reaches this value, buffering initiates until the ",(0,i.jsx)(n.code,{children:"start"})," value is reached for playback to resume."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"start"})}),": Playback starts at this buffer value upon the play call."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"target"})}),": This value is aimed for if the buffer reaches ",(0,i.jsx)(n.code,{children:"limit"})," or ",(0,i.jsx)(n.code,{children:"max"}),". It ensures stable playback."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"limit"})}),": Smooth latency reduction occurs if this value is reached, moving towards ",(0,i.jsx)(n.code,{children:"target"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"max"})}),": Absolute maximum buffer; upon reaching this value, a hard seek to ",(0,i.jsx)(n.code,{children:"target"})," is performed. It should be significantly higher than ",(0,i.jsx)(n.code,{children:"limit"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"buffer-tweaks-and-latency-control-modes",children:"Buffer tweaks and latency control modes"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"tweaks.buffer"})," settings primarily influence the behavior of the ",(0,i.jsx)(n.code,{children:"'classic'"})," mode. However, it's essential to note that while using the ",(0,i.jsx)(n.code,{children:"'balancedadaptive'"})," and ",(0,i.jsx)(n.code,{children:"'fastadaptive'"}),"modes, the default ",(0,i.jsx)(n.code,{children:"tweaks.buffer"})," settings should be prioritized. The selection of ",(0,i.jsx)(n.code,{children:"latencyControlMode"})," and the ",(0,i.jsx)(n.strong,{children:"default"})," buffer tweaks should be emphasized for optimal performance and stability."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return o}});var s=a(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);