"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7877],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>h});var o=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(i),u=r,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||n;return i?o.createElement(h,a(a({ref:t},c),{},{components:i})):o.createElement(h,a({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var m=2;m<n;m++)a[m]=i[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},78832:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=i(58168),r=(i(96540),i(15680));const n={},a=void 0,l={unversionedId:"nanostream/directshow/directshow_overlay_mixing",id:"nanostream/directshow/directshow_overlay_mixing",title:"directshow_overlay_mixing",description:"nanocosmos Video Mixer / Overlay",source:"@site/docs/nanostream/directshow/directshow_overlay_mixing.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/directshow_overlay_mixing",permalink:"/docs/nanostream/directshow/directshow_overlay_mixing",draft:!1,tags:[],version:"current",lastUpdatedAt:1731523817,formattedLastUpdatedAt:"Nov 13, 2024",frontMatter:{}},s={},m=[{value:"nanocosmos Video Mixer / Overlay",id:"nanocosmos-video-mixer--overlay",level:2},{value:"General Information",id:"general-information",level:3},{value:"Requirements:",id:"requirements",level:3},{value:"Usage of Video Mixer:",id:"usage-of-video-mixer",level:3},{value:"Picture-in-Picture: This example shows how to display one video source within another video source.",id:"picture-in-picture-this-example-shows-how-to-display-one-video-source-within-another-video-source",level:4},{value:"Left/Right: Example showing how to mix two video sources side by side (left/right)",id:"leftright-example-showing-how-to-mix-two-video-sources-side-by-side-leftright",level:4},{value:"Usage of Text/Bitmap Overlay:",id:"usage-of-textbitmap-overlay",level:3},{value:"Text Overlay:",id:"text-overlay",level:4},{value:"Picture Overlay:",id:"picture-overlay",level:4}],c={toc:m},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(p,(0,o.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"nanocosmos-video-mixer--overlay"},"nanocosmos Video Mixer / Overlay"),(0,r.yg)("h3",{id:"general-information"},"General Information"),(0,r.yg)("p",null,"nanoStream 2.0 supports a video mixing of 2 input video signals and text and bitmap overlay functions. Both functions can be used from within nanoStream plugin applications or by using DirectShow filter setups."),(0,r.yg)("h3",{id:"requirements"},"Requirements:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Nanocosmos Video Mixer DirectShow Filter (for video mixing)"),(0,r.yg)("li",{parentName:"ul"},"Nanocosmos Text/Bitmap Overlay Filter (for text or image overlay)"),(0,r.yg)("li",{parentName:"ul"},"nanoStream Plugins (optional)"),(0,r.yg)("li",{parentName:"ul"},"Video mixing and text/image overlay can be used independently.")),(0,r.yg)("h3",{id:"usage-of-video-mixer"},"Usage of Video Mixer:"),(0,r.yg)("p",null,"Use the IVideoPlacement Interface of the VideoMixer 2 filter:"),(0,r.yg)("h4",{id:"picture-in-picture-this-example-shows-how-to-display-one-video-source-within-another-video-source"},"Picture-in-Picture: This example shows how to display one video source within another video source."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// specify how both capture sources should be mixed\nCComPtr<IVideoPlacement> api ;\nm_pVideoMixer->QueryInterface(IID_IVideoPlacement, reinterpret_cast<void**>(&api));\nif (api) {\n    api->SetVideoFrameDuration((REFERENCE_TIME)(10000000LL / m_VideoFrameRate) );\n    api->SetOutputSize(width, height);\n    RECT rc = {0,0, width, height};\n    api->SetVideoPosition(0, &rc);            // specify display area for first capture source\n    // target area picture-in-picture: right top corner of picture 1\n    RECT rcTarget = {width * 7/10, height*1/20, width * 9/20, height * 3/10};\n    api->SetVideoPosition(1, &rcTarget);     // specify display area for second capture source\n}\n")),(0,r.yg)("h4",{id:"leftright-example-showing-how-to-mix-two-video-sources-side-by-side-leftright"},"Left/Right: Example showing how to mix two video sources side by side (left/right)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// specify how both capture sources should be mixed\nCComPtr<IVideoPlacement> api ;\nm_pVideoMixer->QueryInterface(IID_IVideoPlacement, reinterpret_cast<void**>(&api));\nif (api) {\n    api->SetVideoFrameDuration((REFERENCE_TIME)(10000000LL / videoFrameRate));\n    api->SetOutputSize(videoWidth, videoHeight);\n    RECT left = {0, 0, videoWidth / 2, videoHeight};\n    api->SetVideoPosition(0, &left);    // specify display area for first capture source\n    RECT right = {videoWidth / 2, 0, videoWidth, videoHeight};\n    api->SetVideoPosition(1, &right);   // specify display area for second capture source\n}\n")),(0,r.yg)("h3",{id:"usage-of-textbitmap-overlay"},"Usage of Text/Bitmap Overlay:"),(0,r.yg)("h4",{id:"text-overlay"},"Text Overlay:"),(0,r.yg)("p",null,"The text to overlay can either be copied directly to the item text buffer or can be specified by the path to a file, containing the overlay text. The text within that file is then loaded by the overlay filter."),(0,r.yg)("p",null,"Use the INanoTextOverlay interface of the overlay filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'CComQIPtr<INanoTextOverlay, &IID_INanoTextOverlay> m_pTextOverlay;\nm_pTextOverlay = m_pOverlayFilter;\nif(m_pTextOverlay) {\n    // you can add more than one item to the overlay filter, for the sake of simplicity we add only one item here\n    overlay_item_t item;\n    // if we draw text text overlay filter uses only top/left coords.\n    // width/height of the text it determined from font params\n    item.output_rect.left       = videoWidth * 1/20;\n    item.output_rect.top       = videoHeight * 1/20;\n    item.output_rect.bottom = videoHeight * 19/20;\n    item.output_rect.right     = videoWidth * 19/20;\n    item.back_color                 = COLORREF(0x00000000);\n    item.text_color             = COLORREF(0x000099FF);\n    item.alpha                  = 0.5;           // the opacity of the overlay text\n    // (if skip color is equal to back_color then text will be drawn without background color)\n    item.skip_color = COLORREF(0x00000000);\n\n    CString text = _T("Text Overlay");  // the text that should be overlayed\n    item.use_filename = false;                  // assign true, if text specifies a path to a file,\n                                                                // containing text\n    wcscpy(item.text, text.GetBuffer());\n    item.speed                  = -2.0; //speed of string moving\n\n    // set font properties\n    item.font.lfHeight      = -8;\n    item.font.lfWidth               = 0;\n    item.font.lfEscapement  = 0;\n    item.font.lfOrientation = 0;\n    item.font.lfWeight      = FW_BOLD;\n    item.font.lfItalic              = 0;\n    item.font.lfUnderline       = 0;\n    item.font.lfStrikeOut       = 0;\n    item.font.lfCharSet     = 0;\n    item.font.lfOutPrecision    = 3;\n    item.font.lfClipPrecision   = 2;\n    item.font.lfQuality     = DEFAULT_QUALITY;\n    item.font.lfPitchAndFamily  = DEFAULT_PITCH|FF_DONTCARE;\n\n    TCHAR fontName[100] = _T("Arial");\n    _tccpy(item.font.lfFaceName, fontName);         // face name of the font\n\n    m_pTextOverlay->AddItem(&item, NULL);       // add the item to the overlay filter\n}\n')),(0,r.yg)("h4",{id:"picture-overlay"},"Picture Overlay:"),(0,r.yg)("p",null,"The image to overlay is not loaded by the overlay filter. The image data has to be loaded beforehand. In this example the class CImage is used."),(0,r.yg)("p",null,"Use the INanoTextOverlay interface of the overlay filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'CComQIPtr<INanoTextOverlay, &IID_INanoTextOverlay> m_pPicOverlay;\nm_pPicOverlay = m_pOverlayFilter;\nif(m_pPicOverlay) {\n    overlay_item_t item;\n    item.output_rect.left       = videoWidth * 1/20;\n    item.output_rect.top       = videoHeight * 1/20;\n    item.output_rect.bottom = videoHeight * 19/20;\n    item.output_rect.right     = videoWidth * 19/20;\n    item.alpha                  = 0.5;\n\n    CString imagePath = _T("C:\\temp\\my_image.bmp"); // path to the image - .png and .jpg\n                                                                                        // is also possible\n    CImage image;\n    m_Image.Load(imagePath .GetBuffer());\n    item.image.data          = m_Image.GetBits();\n    item.image.width     = m_Image.GetWidth();\n    item.image.height    = m_Image.GetHeight();\n    item.image.pitch             = m_Image.GetPitch();\n    item.use_image       = true;\n    item.use_image_alpha = false; // assign true for using the alpha value of png images\n\n    m_pPicOverlay->AddItem(&item, NULL);    // add the item to the overlay filter\n}\n')),(0,r.yg)("p",null,"If the alpha values of a png picture should be used ",(0,r.yg)("strong",{parentName:"p"},"item.use_image_alpha")," has to be set to true."))}d.isMDXComponent=!0}}]);