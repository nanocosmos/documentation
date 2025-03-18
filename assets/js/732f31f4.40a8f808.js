"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["4208"],{16920:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"faq/faq_adv_codec_config","title":"Advanced Codec Configuration Questions","description":"Questions Overview","source":"@site/docs/faq/faq_adv_codec_config.md","sourceDirName":"faq","slug":"/faq/faq_adv_codec_config","permalink":"/docs/faq/faq_adv_codec_config","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1742310768000,"frontMatter":{"id":"faq_adv_codec_config","title":"Advanced Codec Configuration Questions","sidebar_label":"Advanced Codec Configuration"}}'),a=i("85893"),o=i("50065");let r={id:"faq_adv_codec_config",title:"Advanced Codec Configuration Questions",sidebar_label:"Advanced Codec Configuration"},s=void 0,d={},c=[{value:"Questions Overview",id:"questions-overview",level:2},{value:"How to achieve the optimal H.264 quality?",id:"how-to-achieve-the-optimal-h264-quality",level:2},{value:"Choosing appropriate video stream settings",id:"choosing-appropriate-video-stream-settings",level:4},{value:"Improving quality through higher coding efficiency",id:"improving-quality-through-higher-coding-efficiency",level:4},{value:"H.264 profile and entropy coding mode",id:"h264-profile-and-entropy-coding-mode",level:5},{value:"H.264 profile and frame types",id:"h264-profile-and-frame-types",level:5},{value:"Number of reference frames",id:"number-of-reference-frames",level:5},{value:"H.264 quality/speed setting",id:"h264-qualityspeed-setting",level:5},{value:"Deblocking Filter",id:"deblocking-filter",level:5},{value:"How do the H.264 rate control mode and minimum/maximum quantization settings interact?",id:"how-do-the-h264-rate-control-mode-and-minimummaximum-quantization-settings-interact",level:2},{value:"Rate Control Mode",id:"rate-control-mode",level:4},{value:"Minimum and Maximum Quantization",id:"minimum-and-maximum-quantization",level:5}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"questions-overview",children:"Questions Overview"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#how-to-achieve-the-optimal-h264-quality",children:"How to achieve the optimal H.264 quality?"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#how-do-the-h264-rate-control-mode-and-minimummaximum-quantization-settings-interact",children:"How do the H.264 rate control mode and minimum/maximum quantization settings interact?"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-achieve-the-optimal-h264-quality",children:"How to achieve the optimal H.264 quality?"}),"\n",(0,a.jsx)(n.h4,{id:"choosing-appropriate-video-stream-settings",children:"Choosing appropriate video stream settings"}),"\n",(0,a.jsx)(n.p,{children:"First of all the video quality is determined by the relation of video resolution and frame rate and the configured video bitrate. Especially in lower bitrate scenarios it might be indicated to choose a lower resolution and frame rate to get an acceptable video quality."}),"\n",(0,a.jsx)(n.h4,{id:"improving-quality-through-higher-coding-efficiency",children:"Improving quality through higher coding efficiency"}),"\n",(0,a.jsx)(n.p,{children:"Nearly all options to increase coding efficiency require additional computation and therefore result in a higher cpu load."}),"\n",(0,a.jsx)(n.h5,{id:"h264-profile-and-entropy-coding-mode",children:"H.264 profile and entropy coding mode"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"H.264"})," Baseline profile supports a sub-set of H264, like no b-frame and lower complexity encoding modes (CAVLC).\n",(0,a.jsx)(n.code,{children:"H.264 Main and High profiles"})," in addition provide a more efficient encoding in forms of B-Frames, and entropy coding mode called ",(0,a.jsx)(n.code,{children:"CABAC"}),". If your application allows to use these profiles, choosing ",(0,a.jsx)(n.code,{children:"CABAC"})," can significantly increase coding efficiency and quality."]}),"\n",(0,a.jsx)(n.h5,{id:"h264-profile-and-frame-types",children:"H.264 profile and frame types"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"H.264 Baseline profile"})," only supports coding ",(0,a.jsx)(n.code,{children:"frame types I and P"}),".\n",(0,a.jsx)(n.code,{children:"H.264 Main and High profiles"})," in addition support ",(0,a.jsx)(n.code,{children:"B frames"})," which allow a much more efficient compression."]}),"\n",(0,a.jsxs)(n.p,{children:["The key frame distance also called GOP Size (Group of pictures) determines how many ",(0,a.jsx)(n.code,{children:"P or B frames"})," are encoded between ",(0,a.jsx)(n.code,{children:"I/key frames"}),". Commonly used are key frame distances between ",(0,a.jsx)(n.code,{children:"2 and 5 seconds"}),", at ",(0,a.jsx)(n.code,{children:"25 frames"})," per second ",(0,a.jsx)(n.code,{children:"50-250 frames"}),". We recommend 2 seconds."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"P frame distance"})," determines how many ",(0,a.jsx)(n.code,{children:"B frames"})," are encoded between ",(0,a.jsx)(n.code,{children:"I and P frames"}),". Commonly used are P frame distances between ",(0,a.jsx)(n.code,{children:"2 and 4"}),"."]}),"\n",(0,a.jsx)(n.admonition,{title:"p frame distance",type:"tip",children:(0,a.jsxs)(n.p,{children:["A P frame distance setting of X may result in ",(0,a.jsx)(n.code,{children:"X-1 B frames"})," encoded between I and P frames."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"IDR Frame Distance"})}),"\n",(0,a.jsxs)(n.p,{children:["IDR frames are points in the video stream where a decoder can start instant decoding e.g. after a seek, because the following frames have no references pointing to frames before the IDR frame. This is not necessarily true for \u201Cnormal\u201D I frames. The IDR frame distance determines how many I frames are encoded between IDR frames.\n",(0,a.jsx)(n.code,{children:"IDR frame distance 1"}),": Every GOP starts with an IDR frame"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"IDR frame distance 2"}),": Every second GOP starts with an I instead of IDR frame"]}),"\n",(0,a.jsx)(n.admonition,{title:"recommendation",type:"tip",children:(0,a.jsx)(n.p,{children:"We recommend using IDR frame distance 1."})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Frame Distance Modes"})}),"\n",(0,a.jsxs)(n.p,{children:["nanocosmos ",(0,a.jsx)(n.code,{children:"H.264 Encoder"})," and other encoders support two frame distance modes. This mode determines if ",(0,a.jsx)(n.code,{children:"H.264 I and P frame distance settings"})," are applied as variable/maximum or fix/constant values. In variable mode the encoder can decide which frame type to use based on how efficient the encoding will be, and e.g. switch from ",(0,a.jsx)(n.code,{children:"B"})," to ",(0,a.jsx)(n.code,{children:"I"})," or ",(0,a.jsx)(n.code,{children:"P"})," on a scene cut. Multiple bitrate streams often require constant frame distances."]}),"\n",(0,a.jsxs)(n.admonition,{title:"GOP Structure Examples (decoding order)",type:"note",children:[(0,a.jsxs)(n.p,{children:["IDR=1, I=5, P=1) ",(0,a.jsx)("br",{}),"\nIDR P P P P IDR P P P P IDR P P P P"]}),(0,a.jsxs)(n.p,{children:["IDR=2, I=5, P=1) ",(0,a.jsx)("br",{}),"\nIDR P P P P I P P P P IDR P P P P"]}),(0,a.jsxs)(n.p,{children:["IDR=1, I=5, P=2) ",(0,a.jsx)("br",{}),"\nIDR P B P B IDR P B P B IDR P B P B"]}),(0,a.jsxs)(n.p,{children:["IDR=1, I=5, P=4) ",(0,a.jsx)("br",{}),"\nIDR P B B B IDR P B B B IDR P B B B"]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"In the N/M notation I=N and P=M."})}),"\n",(0,a.jsx)(n.h5,{id:"number-of-reference-frames",children:"Number of reference frames"}),"\n",(0,a.jsx)(n.p,{children:"During the encoding of P and B frames a defined number of frames is used to find most matching areas and reduce the amount of data needed to encode the difference to it. These frames are called reference frames. A higher number of reference frames will increase the chance to find a better match and result in a higher efficiency. The number of reference frames is not directly related to the GOP structure. Commonly used values are between 1 and 4."}),"\n",(0,a.jsx)(n.h5,{id:"h264-qualityspeed-setting",children:"H.264 quality/speed setting"}),"\n",(0,a.jsx)(n.p,{children:"The H.264 quality/speed setting is implicitely controlling advanced H.264 encoding parameters like block types, search range and search algorithms used. The goal is to provide an easy to use parameter allowing to balance video quality and performance, to not overload the encoder machine CPU."}),"\n",(0,a.jsx)(n.p,{children:"Dependent on the encoder vendor and brand, there are different configurations available."}),"\n",(0,a.jsx)(n.p,{children:'For open-source based encoders like ffmpeg and OBS, the quality/speed tradeoff setting is called preset and as options like ultrafast, veryfast, fast, slow. We recommend "veryfast".'}),"\n",(0,a.jsx)(n.p,{children:"For nanoStream Encoders, the parameter range is from 0 (maximum speed) to 6 (maximum quality). nanoStream API is using the value 3 (balanced) as a default."}),"\n",(0,a.jsx)(n.admonition,{title:"Example for SD video with limiting factor bandwidth",type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"H264Profile: Main"}),"\n",(0,a.jsx)(n.li,{children:"H264Level: 30"}),"\n",(0,a.jsx)(n.li,{children:"H264IFrameDistance: 50-100"}),"\n",(0,a.jsx)(n.li,{children:"H264PFrameDistance: 1 (low latency)"}),"\n",(0,a.jsx)(n.li,{children:"H264VlcMode: CABAC"}),"\n"]})}),"\n",(0,a.jsx)(n.admonition,{title:"Example for HD video with limiting factor performance",type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"H264Profile: Baseline or High"}),"\n",(0,a.jsx)(n.li,{children:"H264Level: 31"}),"\n",(0,a.jsx)(n.li,{children:"H264IFrameDistance: 50-100"}),"\n",(0,a.jsx)(n.li,{children:"H264PFrameDistance: 1 (low latency)"}),"\n",(0,a.jsx)(n.li,{children:"H264VlcMode: CAVLC"}),"\n"]})}),"\n",(0,a.jsx)(n.h5,{id:"deblocking-filter",children:"Deblocking Filter"}),"\n",(0,a.jsxs)(n.p,{children:["The H.264 Deblocking Filter is an important tool to reduce annoying blocking artefacts by video filtering. It is working on the encoding and decoding path. nanoStream API and DirectShow encoder have the deblocking filter enabled with values ",(0,a.jsx)(n.code,{children:"alpha: 2"})," , ",(0,a.jsx)(n.code,{children:"beta: 2"})," by default."]}),"\n",(0,a.jsx)(n.h2,{id:"how-do-the-h264-rate-control-mode-and-minimummaximum-quantization-settings-interact",children:"How do the H.264 rate control mode and minimum/maximum quantization settings interact?"}),"\n",(0,a.jsx)(n.h4,{id:"rate-control-mode",children:"Rate Control Mode"}),"\n",(0,a.jsx)(n.p,{children:"The Rate Control Mode determines the strictness/tolerance that is used by the bitrate control."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Constant bitrate (CBR) is trying to keep the bitrate constant over time"}),"\n",(0,a.jsx)(n.li,{children:"Variable bitrate (VBR) will allow variations of the bitrate dependent on the content complexity"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"There is a range of options between strict CBR and VBR, as both options have tradeoffs.\nCBR is usually used in live streaming, as any network as limits of possible bandwidth.\nVBR us more used in live recording and VOD playback, as this can use larger buffers to allow bandwidth variations.\nSome encoders have options like ABR (average bitrate)\nWe recommend using CBR for live streaming."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CBR Strict 1"})," is the most strict setting. Tolerance is increasing from ",(0,a.jsx)(n.code,{children:"Constant Bitrate "}),"(CBR) to ",(0,a.jsx)(n.code,{children:"Average Bitrate"})," (ABR) to ",(0,a.jsx)(n.code,{children:"Variable Bitrate"})," (VBR). nanoStream API is using the CBR Stream setting as a default."]}),"\n",(0,a.jsx)(n.admonition,{title:"Values",type:"info",children:(0,a.jsx)(n.p,{children:"0 = Auto (CBR Stream)\n1 = CBR Strict 1\n2 = CBR Strict 2\n3 = CBR Stream\n4 = ABR 1\n5 = ABR 2\n6 = VBR"})}),"\n",(0,a.jsx)(n.admonition,{title:"recommendation",type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CBR Stream"})," is recommended for most streaming applications and is the default mode.\n",(0,a.jsx)(n.code,{children:"VBR"})," is recommended for local file recording and fast video scene changes and transitions."]})}),"\n",(0,a.jsx)(n.h5,{id:"minimum-and-maximum-quantization",children:"Minimum and Maximum Quantization"}),"\n",(0,a.jsxs)(n.p,{children:["The bitrate is controlled through the quantization value that is adjusted for every frame according to the configured bitrate and settings for minimum and maximum quantization. By default nanoStream is calculating a suitable minimum quantization for the configured resolution, framerate and bitrate. So in most cases there is no need to override this setting normally. Setting up a minimum quantization helps the bitrate control to avoid overruns especially when changing back from static scenes with low complexity to scenes with higher complexity. The minimum quantization can be configured with the option ",(0,a.jsx)(n.code,{children:"'H264MinimumQuant'"}),". ",(0,a.jsx)(n.code,{children:"0=auto(1)"}),", ",(0,a.jsx)(n.code,{children:"1-51 = custom value"})," Setting an explicit value (1) will decrease the bitrate drop during static scenes, but might increase short term bitrate overrun when changing back to more complex scenes."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return r}});var t=i(67294);let a={},o=t.createContext(a);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);