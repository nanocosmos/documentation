"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8572],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>h});var o=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||n;return i?o.createElement(h,a(a({ref:t},c),{},{components:i})):o.createElement(h,a({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<n;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},82218:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=i(58168),r=(i(96540),i(15680));const n={id:"nanostream_directshow_video_filter",title:"Video Filter",sidebar_label:"Video Filter"},a=void 0,l={unversionedId:"nanostream/directshow/nanostream_directshow_video_filter",id:"nanostream/directshow/nanostream_directshow_video_filter",title:"Video Filter",description:"How to use the Screen Capture DirectShow filter",source:"@site/docs/nanostream/directshow/nanostream_directshow_video_filter.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/nanostream_directshow_video_filter",permalink:"/docs/nanostream/directshow/nanostream_directshow_video_filter",draft:!1,tags:[],version:"current",lastUpdatedAt:1728286796,formattedLastUpdatedAt:"Oct 7, 2024",frontMatter:{id:"nanostream_directshow_video_filter",title:"Video Filter",sidebar_label:"Video Filter"},sidebar:"nanoStream Apps & SDKs",previous:{title:"UDP/TS Streaming",permalink:"/docs/nanostream/directshow/nanostream_directshow_udp_streaming"}},s={},d=[{value:"How to use the Screen Capture DirectShow filter",id:"how-to-use-the-screen-capture-directshow-filter",level:2},{value:"Capture Modes",id:"capture-modes",level:3},{value:"Screen Capture - Single Window",id:"screen-capture---single-window",level:3},{value:"Region Capture",id:"region-capture",level:3},{value:"Video Mixer / Picture-in-Picture",id:"video-mixer--picture-in-picture",level:2},{value:"Requirements:",id:"requirements",level:4},{value:"Picture-in-picture mode for 2 video inputs",id:"picture-in-picture-mode-for-2-video-inputs",level:3},{value:"nanocosmos Video Mixer / Overlay",id:"nanocosmos-video-mixer--overlay",level:2},{value:"General Information",id:"general-information",level:3},{value:"Requirements:",id:"requirements-1",level:3},{value:"Usage of Video Mixer:",id:"usage-of-video-mixer",level:3},{value:"Picture-in-Picture: This example shows how to display one video source within another video source.",id:"picture-in-picture-this-example-shows-how-to-display-one-video-source-within-another-video-source",level:4},{value:"Left/Right: Example showing how to mix two video sources side by side (left/right)",id:"leftright-example-showing-how-to-mix-two-video-sources-side-by-side-leftright",level:4},{value:"Usage of Text/Bitmap Overlay:",id:"usage-of-textbitmap-overlay",level:3},{value:"Text Overlay:",id:"text-overlay",level:4},{value:"Picture Overlay:",id:"picture-overlay",level:4}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"how-to-use-the-screen-capture-directshow-filter"},"How to use the Screen Capture DirectShow filter"),(0,r.yg)("h3",{id:"capture-modes"},"Capture Modes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mouse Follow"),(0,r.yg)("li",{parentName:"ul"},"Region"),(0,r.yg)("li",{parentName:"ul"},"Screen"),(0,r.yg)("li",{parentName:"ul"},"Window Handle")),(0,r.yg)("h3",{id:"screen-capture---single-window"},"Screen Capture - Single Window"),(0,r.yg)("p",null,"It is possible to capture a single window instead of the entire screen. The content of the window is captured even if the window is partially or completely in the background. You need to enter the Window handle or Window class name into the field."),(0,r.yg)("p",null,"At the moment there are two modes for capturing a single window:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Auto Size: adjusts the output size depending on the size of the window to capture, before the directshow graph is started"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Auto Size",src:i(39766).A,width:"900",height:"498"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fullscreen: the output size is equivalent to the screen size, the window size is not scaled, the window can be resized while the graph is running and one can see the whole window at all times"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Fullscreen",src:i(43599).A,width:"900",height:"507"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Scaling example: if you need to downscale a full screen capture, use the additional ",(0,r.yg)("inlineCode",{parentName:"p"},"Resize/Scale")," functionality in the encoder or add a resizer/scaler filter to the DirectShow filter graph"))),(0,r.yg)("h3",{id:"region-capture"},"Region Capture"),(0,r.yg)("p",null,"If the output of the region area seems to be different from the specified region, check if Windows display zoom is enabled:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Zoom",src:i(34583).A,width:"732",height:"672"})),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"video-mixer--picture-in-picture"},"Video Mixer / Picture-in-Picture"),(0,r.yg)("p",null,"This document describes the DirectShow filter configuration for the nanocosmos Video Mixer 2."),(0,r.yg)("p",null,"See also the nanoStream API for the VideoMixer."),(0,r.yg)("h4",{id:"requirements"},"Requirements:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"DirectShow architecture / C++"),(0,r.yg)("li",{parentName:"ul"},"Nanocosmos Video Mixer 2 Filter")),(0,r.yg)("h3",{id:"picture-in-picture-mode-for-2-video-inputs"},"Picture-in-picture mode for 2 video inputs"),(0,r.yg)("p",null,"This short C++ example code shows how to configure the Video Mixer to show video 2 in the right top corner of video 1."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// {0ED06AB0-B2F3-421b-BA63-2E591C932802}\nstatic const GUID CLSID_nanoVideoMixer2 = { 0xed06ab0, 0xb2f3, 0x421b, { 0xba, 0x63, 0x2e, 0x59, 0x1c, 0x93, 0x28, 0x2 } };\n\n// {2140722A-9F1E-4ac7-8A81-CF77CA6DD683}\nstatic const GUID IID_IVideoPlacement = { 0x2140722a, 0x9f1e, 0x4ac7, { 0x8a, 0x81, 0xcf, 0x77, 0xca, 0x6d, 0xd6, 0x83 } };\n\nCComPtr<IBaseFilter> m_pVideoMixer;\nm_pVideoMixer.CoCreateInstance(CLSID_nanoVideoMixer2);\n\n// target area picture-in-picture: right top corner of picture 1\nRECT rcTarget = {m_VideoWidth * 7/10, m_VideoHeight*1/20,\nm_VideoWidth * 9/20, m_VideoHeight * 3/10};\n\nCComQIPtr <IVideoPlacement> api = m_pVideoMixer;        \nif (api){\n    api->SetVideoFrameDuration( (REFERENCE_TIME)(10000000LL / m_VideoFrameRate) );\n    api->SetOutputSize(m_VideoWidth, m_VideoHeight);\n    RECT rc = {0,0, m_VideoWidth, m_VideoHeight};\n    api->SetVideoPosition(0, &rc);\n    api->SetVideoPosition(1, &rcTarget);\n    return 0;\n}\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"nanocosmos-video-mixer--overlay"},"nanocosmos Video Mixer / Overlay"),(0,r.yg)("h3",{id:"general-information"},"General Information"),(0,r.yg)("p",null,"nanoStream 2.0 supports a video mixing of 2 input video signals and text and bitmap overlay functions. Both functions can be used from within nanoStream plugin applications or by using DirectShow filter setups."),(0,r.yg)("h3",{id:"requirements-1"},"Requirements:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Nanocosmos Video Mixer DirectShow Filter (for video mixing)"),(0,r.yg)("li",{parentName:"ul"},"Nanocosmos Text/Bitmap Overlay Filter (for text or image overlay)"),(0,r.yg)("li",{parentName:"ul"},"nanoStream Plugins (optional)"),(0,r.yg)("li",{parentName:"ul"},"Video mixing and text/image overlay can be used independently.")),(0,r.yg)("h3",{id:"usage-of-video-mixer"},"Usage of Video Mixer:"),(0,r.yg)("p",null,"Use the IVideoPlacement Interface of the VideoMixer 2 filter:"),(0,r.yg)("h4",{id:"picture-in-picture-this-example-shows-how-to-display-one-video-source-within-another-video-source"},"Picture-in-Picture: This example shows how to display one video source within another video source."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// specify how both capture sources should be mixed\nCComPtr<IVideoPlacement> api ;\nm_pVideoMixer->QueryInterface(IID_IVideoPlacement, reinterpret_cast<void**>(&api));\nif (api) {\n    api->SetVideoFrameDuration((REFERENCE_TIME)(10000000LL / m_VideoFrameRate) );\n    api->SetOutputSize(width, height);\n    RECT rc = {0,0, width, height};\n    api->SetVideoPosition(0, &rc);            // specify display area for first capture source\n    // target area picture-in-picture: right top corner of picture 1\n    RECT rcTarget = {width * 7/10, height*1/20, width * 9/20, height * 3/10};\n    api->SetVideoPosition(1, &rcTarget);     // specify display area for second capture source\n}\n")),(0,r.yg)("h4",{id:"leftright-example-showing-how-to-mix-two-video-sources-side-by-side-leftright"},"Left/Right: Example showing how to mix two video sources side by side (left/right)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// specify how both capture sources should be mixed\nCComPtr<IVideoPlacement> api ;\nm_pVideoMixer->QueryInterface(IID_IVideoPlacement, reinterpret_cast<void**>(&api));\nif (api) {\n    api->SetVideoFrameDuration((REFERENCE_TIME)(10000000LL / videoFrameRate));\n    api->SetOutputSize(videoWidth, videoHeight);\n    RECT left = {0, 0, videoWidth / 2, videoHeight};\n    api->SetVideoPosition(0, &left);    // specify display area for first capture source\n    RECT right = {videoWidth / 2, 0, videoWidth, videoHeight};\n    api->SetVideoPosition(1, &right);   // specify display area for second capture source\n}\n")),(0,r.yg)("h3",{id:"usage-of-textbitmap-overlay"},"Usage of Text/Bitmap Overlay:"),(0,r.yg)("h4",{id:"text-overlay"},"Text Overlay:"),(0,r.yg)("p",null,"The text to overlay can either be copied directly to the item text buffer or can be specified by the path to a file, containing the overlay text. The text within that file is then loaded by the overlay filter."),(0,r.yg)("p",null,"Use the INanoTextOverlay interface of the overlay filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'CComQIPtr<INanoTextOverlay, &IID_INanoTextOverlay> m_pTextOverlay;\nm_pTextOverlay = m_pOverlayFilter;\nif(m_pTextOverlay) {\n    // you can add more than one item to the overlay filter, for the sake of simplicity we add only one item here\n    overlay_item_t item;\n    // if we draw text text overlay filter uses only top/left coords.\n    // width/height of the text it determined from font params\n    item.output_rect.left       = videoWidth * 1/20;\n    item.output_rect.top       = videoHeight * 1/20;\n    item.output_rect.bottom = videoHeight * 19/20;\n    item.output_rect.right     = videoWidth * 19/20;\n    item.back_color                 = COLORREF(0x00000000);\n    item.text_color             = COLORREF(0x000099FF);\n    item.alpha                  = 0.5;           // the opacity of the overlay text\n    // (if skip color is equal to back_color then text will be drawn without background color)\n    item.skip_color = COLORREF(0x00000000);\n\n    CString text = _T("Text Overlay");  // the text that should be overlayed\n    item.use_filename = false;                  // assign true, if text specifies a path to a file,\n                                                                // containing text\n    wcscpy(item.text, text.GetBuffer());\n    item.speed                  = -2.0; //speed of string moving\n\n    // set font properties\n    item.font.lfHeight      = -8;\n    item.font.lfWidth               = 0;\n    item.font.lfEscapement  = 0;\n    item.font.lfOrientation = 0;\n    item.font.lfWeight      = FW_BOLD;\n    item.font.lfItalic              = 0;\n    item.font.lfUnderline       = 0;\n    item.font.lfStrikeOut       = 0;\n    item.font.lfCharSet     = 0;\n    item.font.lfOutPrecision    = 3;\n    item.font.lfClipPrecision   = 2;\n    item.font.lfQuality     = DEFAULT_QUALITY;\n    item.font.lfPitchAndFamily  = DEFAULT_PITCH|FF_DONTCARE;\n\n    TCHAR fontName[100] = _T("Arial");\n    _tccpy(item.font.lfFaceName, fontName);         // face name of the font\n\n    m_pTextOverlay->AddItem(&item, NULL);       // add the item to the overlay filter\n}\n')),(0,r.yg)("h4",{id:"picture-overlay"},"Picture Overlay:"),(0,r.yg)("p",null,"The image to overlay is not loaded by the overlay filter. The image data has to be loaded beforehand. In this example the class CImage is used."),(0,r.yg)("p",null,"Use the INanoTextOverlay interface of the overlay filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'CComQIPtr<INanoTextOverlay, &IID_INanoTextOverlay> m_pPicOverlay;\nm_pPicOverlay = m_pOverlayFilter;\nif(m_pPicOverlay) {\n    overlay_item_t item;\n    item.output_rect.left       = videoWidth * 1/20;\n    item.output_rect.top       = videoHeight * 1/20;\n    item.output_rect.bottom = videoHeight * 19/20;\n    item.output_rect.right     = videoWidth * 19/20;\n    item.alpha                  = 0.5;\n\n    CString imagePath = _T("C:\\temp\\my_image.bmp"); // path to the image - .png and .jpg\n                                                                                        // is also possible\n    CImage image;\n    m_Image.Load(imagePath .GetBuffer());\n    item.image.data          = m_Image.GetBits();\n    item.image.width     = m_Image.GetWidth();\n    item.image.height    = m_Image.GetHeight();\n    item.image.pitch             = m_Image.GetPitch();\n    item.use_image       = true;\n    item.use_image_alpha = false; // assign true for using the alpha value of png images\n\n    m_pPicOverlay->AddItem(&item, NULL);    // add the item to the overlay filter\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"}," If the alpha values of a png picture should be used ",(0,r.yg)("strong",{parentName:"p"},"item.use_image_alpha")," has to be set to true.")))}u.isMDXComponent=!0},34583:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/directshow_screen_capture_region-408a357c936ae605788bd0e92ea174db.jpg"},39766:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/directshow_screen_capture_single_autosize-ef93b73e52229adfe7d04905fc7133d0.jpg"},43599:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/directshow_screen_capture_single_fullscreen-9ca89c8328f4786a96256c91afae45ee.jpg"}}]);