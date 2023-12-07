"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=i,f=c["".concat(d,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const o={id:"faq_adv_codec_config",title:"Advanced Codec Configuration Questions",sidebar_label:"Advanced Codec Configuration"},r=void 0,l={unversionedId:"faq/faq_adv_codec_config",id:"faq/faq_adv_codec_config",title:"Advanced Codec Configuration Questions",description:"Questions Overview",source:"@site/docs/faq/faq_adv_codec_config.md",sourceDirName:"faq",slug:"/faq/faq_adv_codec_config",permalink:"/docs/faq/faq_adv_codec_config",draft:!1,tags:[],version:"current",lastUpdatedAt:1701953705,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"faq_adv_codec_config",title:"Advanced Codec Configuration Questions",sidebar_label:"Advanced Codec Configuration"}},d={},m=[{value:"Questions Overview",id:"questions-overview",level:2},{value:"How to achieve the optimal H.264 quality?",id:"how-to-achieve-the-optimal-h264-quality",level:2},{value:"Choosing appropriate video stream settings",id:"choosing-appropriate-video-stream-settings",level:4},{value:"Improving quality through higher coding efficiency",id:"improving-quality-through-higher-coding-efficiency",level:4},{value:"H.264 profile and entropy coding mode",id:"h264-profile-and-entropy-coding-mode",level:5},{value:"H.264 profile and frame types",id:"h264-profile-and-frame-types",level:5},{value:"Number of reference frames",id:"number-of-reference-frames",level:5},{value:"H.264 quality/speed setting",id:"h264-qualityspeed-setting",level:5},{value:"Deblocking Filter",id:"deblocking-filter",level:5},{value:"How do the H.264 rate control mode and minimum/maximum quantization settings interact?",id:"how-do-the-h264-rate-control-mode-and-minimummaximum-quantization-settings-interact",level:2},{value:"Rate Control Mode",id:"rate-control-mode",level:4},{value:"Minimum and Maximum Quantization",id:"minimum-and-maximum-quantization",level:5}],s={toc:m},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"questions-overview"},"Questions Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-achieve-the-optimal-h264-quality"},"How to achieve the optimal H.264 quality?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-do-the-h264-rate-control-mode-and-minimummaximum-quantization-settings-interact"},"How do the H.264 rate control mode and minimum/maximum quantization settings interact?"))),(0,i.kt)("h2",{id:"how-to-achieve-the-optimal-h264-quality"},"How to achieve the optimal H.264 quality?"),(0,i.kt)("h4",{id:"choosing-appropriate-video-stream-settings"},"Choosing appropriate video stream settings"),(0,i.kt)("p",null,"First of all the video quality is determined by the relation of video resolution and frame rate and the configured video bitrate. Especially in lower bitrate scenarios it might be indicated to choose a lower resolution and frame rate to get an acceptable video quality."),(0,i.kt)("h4",{id:"improving-quality-through-higher-coding-efficiency"},"Improving quality through higher coding efficiency"),(0,i.kt)("p",null,"Nearly all options to increase coding efficiency require additional computation and therefore result in a higher cpu load."),(0,i.kt)("h5",{id:"h264-profile-and-entropy-coding-mode"},"H.264 profile and entropy coding mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"H.264")," Baseline profile supports a sub-set of H264, like no b-frame and lower complexity encoding modes (CAVLC).\n",(0,i.kt)("inlineCode",{parentName:"p"},"H.264 Main and High profiles")," in addition provide a more efficient encoding in forms of B-Frames, and entropy coding mode called ",(0,i.kt)("inlineCode",{parentName:"p"},"CABAC"),". If your application allows to use these profiles, choosing ",(0,i.kt)("inlineCode",{parentName:"p"},"CABAC")," can significantly increase coding efficiency and quality."),(0,i.kt)("h5",{id:"h264-profile-and-frame-types"},"H.264 profile and frame types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"H.264 Baseline profile")," only supports coding ",(0,i.kt)("inlineCode",{parentName:"p"},"frame types I and P"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"H.264 Main and High profiles")," in addition support ",(0,i.kt)("inlineCode",{parentName:"p"},"B frames")," which allow a much more efficient compression."),(0,i.kt)("p",null,"The key frame distance also called GOP Size (Group of pictures) determines how many ",(0,i.kt)("inlineCode",{parentName:"p"},"P or B frames")," are encoded between ",(0,i.kt)("inlineCode",{parentName:"p"},"I/key frames"),". Commonly used are key frame distances between ",(0,i.kt)("inlineCode",{parentName:"p"},"2 and 5 seconds"),", at ",(0,i.kt)("inlineCode",{parentName:"p"},"25 frames")," per second ",(0,i.kt)("inlineCode",{parentName:"p"},"50-250 frames"),". We recommend 2 seconds."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"P frame distance")," determines how many ",(0,i.kt)("inlineCode",{parentName:"p"},"B frames")," are encoded between ",(0,i.kt)("inlineCode",{parentName:"p"},"I and P frames"),". Commonly used are P frame distances between ",(0,i.kt)("inlineCode",{parentName:"p"},"2 and 4"),"."),(0,i.kt)("admonition",{title:"p frame distance",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A P frame distance setting of X may result in ",(0,i.kt)("inlineCode",{parentName:"p"},"X-1 B frames")," encoded between I and P frames.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IDR Frame Distance")),(0,i.kt)("p",null,"IDR frames are points in the video stream where a decoder can start instant decoding e.g. after a seek, because the following frames have no references pointing to frames before the IDR frame. This is not necessarily true for \u201cnormal\u201d I frames. The IDR frame distance determines how many I frames are encoded between IDR frames.\n",(0,i.kt)("inlineCode",{parentName:"p"},"IDR frame distance 1"),": Every GOP starts with an IDR frame "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IDR frame distance 2"),": Every second GOP starts with an I instead of IDR frame"),(0,i.kt)("admonition",{title:"recommendation",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We recommend using IDR frame distance 1.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Frame Distance Modes")),(0,i.kt)("p",null,"nanocosmos ",(0,i.kt)("inlineCode",{parentName:"p"},"H.264 Encoder")," and other encoders support two frame distance modes. This mode determines if ",(0,i.kt)("inlineCode",{parentName:"p"},"H.264 I and P frame distance settings")," are applied as variable/maximum or fix/constant values. In variable mode the encoder can decide which frame type to use based on how efficient the encoding will be, and e.g. switch from ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," on a scene cut. Multiple bitrate streams often require constant frame distances."),(0,i.kt)("admonition",{title:"GOP Structure Examples (decoding order)",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"IDR=1, I=5, P=1) ",(0,i.kt)("br",null),"\nIDR P P P P IDR P P P P IDR P P P P"),(0,i.kt)("p",{parentName:"admonition"},"IDR=2, I=5, P=1) ",(0,i.kt)("br",null),"\nIDR P P P P I P P P P IDR P P P P"),(0,i.kt)("p",{parentName:"admonition"},"IDR=1, I=5, P=2) ",(0,i.kt)("br",null),"\nIDR P B P B IDR P B P B IDR P B P B"),(0,i.kt)("p",{parentName:"admonition"},"IDR=1, I=5, P=4) ",(0,i.kt)("br",null),"\nIDR P B B B IDR P B B B IDR P B B B")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the N/M notation I=N and P=M.")),(0,i.kt)("h5",{id:"number-of-reference-frames"},"Number of reference frames"),(0,i.kt)("p",null,"During the encoding of P and B frames a defined number of frames is used to find most matching areas and reduce the amount of data needed to encode the difference to it. These frames are called reference frames. A higher number of reference frames will increase the chance to find a better match and result in a higher efficiency. The number of reference frames is not directly related to the GOP structure. Commonly used values are between 1 and 4."),(0,i.kt)("h5",{id:"h264-qualityspeed-setting"},"H.264 quality/speed setting"),(0,i.kt)("p",null,"The H.264 quality/speed setting is implicitely controlling advanced H.264 encoding parameters like block types, search range and search algorithms used. The goal is to provide an easy to use parameter allowing to balance video quality and performance, to not overload the encoder machine CPU. "),(0,i.kt)("p",null,"Dependent on the encoder vendor and brand, there are different configurations available."),(0,i.kt)("p",null,'For open-source based encoders like ffmpeg and OBS, the quality/speed tradeoff setting is called preset and as options like ultrafast, veryfast, fast, slow. We recommend "veryfast".'),(0,i.kt)("p",null,"For nanoStream Encoders, the parameter range is from 0 (maximum speed) to 6 (maximum quality). nanoStream API is using the value 3 (balanced) as a default."),(0,i.kt)("admonition",{title:"Example for SD video with limiting factor bandwidth ",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"H264Profile: Main"),(0,i.kt)("li",{parentName:"ul"},"H264Level: 30"),(0,i.kt)("li",{parentName:"ul"},"H264IFrameDistance: 50-100"),(0,i.kt)("li",{parentName:"ul"},"H264PFrameDistance: 1 (low latency)"),(0,i.kt)("li",{parentName:"ul"},"H264VlcMode: CABAC"))),(0,i.kt)("admonition",{title:"Example for HD video with limiting factor performance",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"H264Profile: Baseline or High"),(0,i.kt)("li",{parentName:"ul"},"H264Level: 31"),(0,i.kt)("li",{parentName:"ul"},"H264IFrameDistance: 50-100"),(0,i.kt)("li",{parentName:"ul"},"H264PFrameDistance: 1 (low latency)"),(0,i.kt)("li",{parentName:"ul"},"H264VlcMode: CAVLC"))),(0,i.kt)("h5",{id:"deblocking-filter"},"Deblocking Filter"),(0,i.kt)("p",null,"The H.264 Deblocking Filter is an important tool to reduce annoying blocking artefacts by video filtering. It is working on the encoding and decoding path. nanoStream API and DirectShow encoder have the deblocking filter enabled with values ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha: 2")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"beta: 2")," by default."),(0,i.kt)("h2",{id:"how-do-the-h264-rate-control-mode-and-minimummaximum-quantization-settings-interact"},"How do the H.264 rate control mode and minimum/maximum quantization settings interact?"),(0,i.kt)("h4",{id:"rate-control-mode"},"Rate Control Mode"),(0,i.kt)("p",null,"The Rate Control Mode determines the strictness/tolerance that is used by the bitrate control. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Constant bitrate (CBR) is trying to keep the bitrate constant over time"),(0,i.kt)("li",{parentName:"ul"},"Variable bitrate (VBR) will allow variations of the bitrate dependent on the content complexity")),(0,i.kt)("p",null,"There is a range of options between strict CBR and VBR, as both options have tradeoffs.\nCBR is usually used in live streaming, as any network as limits of possible bandwidth.\nVBR us more used in live recording and VOD playback, as this can use larger buffers to allow bandwidth variations.\nSome encoders have options like ABR (average bitrate)\nWe recommend using CBR for live streaming."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CBR Strict 1")," is the most strict setting. Tolerance is increasing from ",(0,i.kt)("inlineCode",{parentName:"p"},"Constant Bitrate "),"(CBR) to ",(0,i.kt)("inlineCode",{parentName:"p"},"Average Bitrate")," (ABR) to ",(0,i.kt)("inlineCode",{parentName:"p"},"Variable Bitrate")," (VBR). nanoStream API is using the CBR Stream setting as a default."),(0,i.kt)("admonition",{title:"Values",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"0 = Auto (CBR Stream)\n1 = CBR Strict 1\n2 = CBR Strict 2\n3 = CBR Stream\n4 = ABR 1\n5 = ABR 2\n6 = VBR")),(0,i.kt)("admonition",{title:"recommendation",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"CBR Stream")," is recommended for most streaming applications and is the default mode.\n",(0,i.kt)("inlineCode",{parentName:"p"},"VBR")," is recommended for local file recording and fast video scene changes and transitions.")),(0,i.kt)("h5",{id:"minimum-and-maximum-quantization"},"Minimum and Maximum Quantization"),(0,i.kt)("p",null,"The bitrate is controlled through the quantization value that is adjusted for every frame according to the configured bitrate and settings for minimum and maximum quantization. By default nanoStream is calculating a suitable minimum quantization for the configured resolution, framerate and bitrate. So in most cases there is no need to override this setting normally. Setting up a minimum quantization helps the bitrate control to avoid overruns especially when changing back from static scenes with low complexity to scenes with higher complexity. The minimum quantization can be configured with the option ",(0,i.kt)("inlineCode",{parentName:"p"},"'H264MinimumQuant'"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"0=auto(1)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1-51 = custom value")," Setting an explicit value (1) will decrease the bitrate drop during static scenes, but might increase short term bitrate overrun when changing back to more complex scenes."))}p.isMDXComponent=!0}}]);