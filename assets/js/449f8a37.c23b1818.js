"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1017],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const i={id:"nanostream_directshow_udp_streaming",title:"UDP/TS Streaming",sidebar_label:"UDP/TS Streaming"},o=void 0,l={unversionedId:"nanostream/directshow/nanostream_directshow_udp_streaming",id:"nanostream/directshow/nanostream_directshow_udp_streaming",title:"UDP/TS Streaming",description:"nanocosmos UDP/TS Network Writer and Reader Filter",source:"@site/docs/nanostream/directshow/nanostream_directshow_udp_streaming.md",sourceDirName:"nanostream/directshow",slug:"/nanostream/directshow/nanostream_directshow_udp_streaming",permalink:"/docs/nanostream/directshow/nanostream_directshow_udp_streaming",draft:!1,tags:[],version:"current",lastUpdatedAt:1728286796,formattedLastUpdatedAt:"Oct 7, 2024",frontMatter:{id:"nanostream_directshow_udp_streaming",title:"UDP/TS Streaming",sidebar_label:"UDP/TS Streaming"},sidebar:"nanoStream Apps & SDKs",previous:{title:"RTSP",permalink:"/docs/nanostream/directshow/nanostream_directshow_rtsp"},next:{title:"Video Filter",permalink:"/docs/nanostream/directshow/nanostream_directshow_video_filter"}},s={},u=[{value:"nanocosmos UDP/TS Network Writer and Reader Filter",id:"nanocosmos-udpts-network-writer-and-reader-filter",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Modules",id:"modules",level:3},{value:"DirectShow Connectivity",id:"directshow-connectivity",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Configuration through the Property Page",id:"configuration-through-the-property-page",level:4},{value:"Configuration through COM Interface",id:"configuration-through-com-interface",level:4},{value:"Header Files",id:"header-files",level:5},{value:"COM Interfaces",id:"com-interfaces",level:5},{value:"Setting up the stream URL",id:"setting-up-the-stream-url",level:5},{value:"Setting the license to unlock the filter",id:"setting-the-license-to-unlock-the-filter",level:5},{value:"INetSource and INetSink Interfaces",id:"inetsource-and-inetsink-interfaces",level:5},{value:"Network Source Filter Timeout Settings",id:"network-source-filter-timeout-settings",level:5},{value:"Network Source Filter File Dump Settings",id:"network-source-filter-file-dump-settings",level:4},{value:"Debug-Log Configuration Registry Settings",id:"debug-log-configuration-registry-settings",level:4},{value:"Keys:",id:"keys",level:5},{value:"File name",id:"file-name",level:5},{value:"Logging level",id:"logging-level",level:5}],p={toc:u},d="wrapper";function g(e){let{components:t,...i}=e;return(0,a.yg)(d,(0,r.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"nanocosmos-udpts-network-writer-and-reader-filter"},"nanocosmos UDP/TS Network Writer and Reader Filter"),(0,a.yg)("h3",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"DirectShow filters for UDP/TS Streaming"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Supported Architectures: Microsoft DirectShow, Vista, 7, 8, 10, Server"),(0,a.yg)("li",{parentName:"ul"},"Supported Protocols: UDP Unicast and Multicast"),(0,a.yg)("li",{parentName:"ul"},"Supported Video Codecs: H.264 and MPEG-2 Video"),(0,a.yg)("li",{parentName:"ul"},"Supported Audio Codecs: AAC and MPEG Audio"),(0,a.yg)("li",{parentName:"ul"},"Supported Payload: MPEG Transport Stream (A/V Interleaved) or Video Elementary Stream (Video only)")),(0,a.yg)("h3",{id:"modules"},"Modules"),(0,a.yg)("p",null,"UDP Network Source Filter: ",(0,a.yg)("inlineCode",{parentName:"p"},"nanoNetSource.ax"),"\nUDP Network Writer Filter: ",(0,a.yg)("inlineCode",{parentName:"p"},"nanoNetSink.ax")),(0,a.yg)("h3",{id:"directshow-connectivity"},"DirectShow Connectivity"),(0,a.yg)("p",null,"The DirectShow pins are accepting connections matching the following media types:"),(0,a.yg)("p",null,"  Video Major Types:\nMEDIATYPE_Video\nSubtypes:\nH.264: MEDIASUBTYPE_H264,  FourCC: 0x34363248\nH.264: MEDIASUBTYPE_h264,  FourCC: 0x34363268\nMPEG-2: MEDIASUBTYPE_MPEG2_VIDEO\nFormats:\nFORMAT_MPEG2_VIDEO\nFORMAT_NONE"),(0,a.yg)("p",null,"  Audio Major Types:\nMEDIATYPE_Audio\nSubtypes:\nAAC: MEDIASUBTYPE_AAC,  FourCC: 0x000000FF\nMPEG-1 Audio: MEDIASUBTYPE_MPEG1AudioPayload\nMPEG-2 Audio: MEDIASUBTYPE_MPEG2_AUDIO\nFormats:\nAAC, MPEG Audio: \tFORMAT_WaveFormatEx  "),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("h4",{id:"configuration-through-the-property-page"},"Configuration through the Property Page"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Source Properties",src:n(76915).A,width:"318",height:"442"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Interface"),": Desired network interface or Any"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Address"),": Local IP address or ",(0,a.yg)("inlineCode",{parentName:"p"},"0.0.0.0")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Port"),": Network port number"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Mode"),": Transport Stream (default) or Elementary Stream"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Stream State"),": Indicates the current stream state (online/offline)"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Input Stream Mediatype"),": Display of the current video format if online"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Source Properties",src:n(87813).A,width:"333",height:"294"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Interface"),": Desired network interface or Any"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Address"),": Hostname or IP address of the receiving machine or multicast address"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Port"),": Network port number"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Mode"),": Transport Stream (default) or Elementary Stream"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"UDP Packet Size"),": Should not exceed MTU size. By default 1316 bytes (7 TS packets)"),(0,a.yg)("h4",{id:"configuration-through-com-interface"},"Configuration through COM Interface"),(0,a.yg)("h5",{id:"header-files"},"Header Files"),(0,a.yg)("p",null,"Network Source Filter:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"NetSourceGuids.h  "),(0,a.yg)("li",{parentName:"ul"},"NetSourceOptions.h  "),(0,a.yg)("li",{parentName:"ul"},"bsMediaParams.h  "),(0,a.yg)("li",{parentName:"ul"},"ICodecProp.h  "),(0,a.yg)("li",{parentName:"ul"},"CommonProps.h  ")),(0,a.yg)("p",null,"Network Writer Filter:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"NetWriterGuids.h    "),(0,a.yg)("li",{parentName:"ul"},"NetWriterOptions.h  "),(0,a.yg)("li",{parentName:"ul"},"ICodecProp.h  "),(0,a.yg)("li",{parentName:"ul"},"CommonProps.h  ")),(0,a.yg)("h5",{id:"com-interfaces"},"COM Interfaces"),(0,a.yg)("p",null,"Network Source Filter:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"INetSource  "),(0,a.yg)("li",{parentName:"ul"},"ICodecProp  "),(0,a.yg)("li",{parentName:"ul"},"IFileSourceFilter  "),(0,a.yg)("li",{parentName:"ul"},"ICodecAPI  "),(0,a.yg)("li",{parentName:"ul"},"IBaseFilter  "),(0,a.yg)("li",{parentName:"ul"},"ISpecifyPropertyPages  ")),(0,a.yg)("p",null,"Network Writer Filter:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"INetSink  "),(0,a.yg)("li",{parentName:"ul"},"ICodecProp  "),(0,a.yg)("li",{parentName:"ul"},"IFileSinkFilter  "),(0,a.yg)("li",{parentName:"ul"},"ICodecAPI  "),(0,a.yg)("li",{parentName:"ul"},"IBaseFilter  "),(0,a.yg)("li",{parentName:"ul"},"ISpecifyPropertyPages  ")),(0,a.yg)("h5",{id:"setting-up-the-stream-url"},"Setting up the stream URL"),(0,a.yg)("p",null,"The streaming url can be set by using standard DirectShow interfaces ",(0,a.yg)("strong",{parentName:"p"},"IFileSourceFilter")," (Reader) and ",(0,a.yg)("strong",{parentName:"p"},"IFileSinkFilter")," (Writer)\nor the custom interfaces ",(0,a.yg)("strong",{parentName:"p"},"INetSource")," (Reader) and ",(0,a.yg)("strong",{parentName:"p"},"INetSink")," (Writer)."),(0,a.yg)("p",null,"URL Format: ",(0,a.yg)("inlineCode",{parentName:"p"},"udp:%%//%% [ hostnameorIP:port ]")),(0,a.yg)("p",null,"Examples:  "),(0,a.yg)("p",null,"Given two machines with different IP addresses, the sender ",(0,a.yg)("inlineCode",{parentName:"p"},"192.168.1.51")," and the receiver ",(0,a.yg)("inlineCode",{parentName:"p"},"192.168.1.52"),"  "),(0,a.yg)("p",null,"For a ",(0,a.yg)("strong",{parentName:"p"},"UDP unicast")," stream the Network Writer needs to be set up\nto the destination IP address of the receiver, ",(0,a.yg)("inlineCode",{parentName:"p"},"udp:%%//%%192.168.1.52:1234"),".",(0,a.yg)("br",{parentName:"p"}),"\n","On the receiver side the Network Source is set up to the local IP address,\n",(0,a.yg)("inlineCode",{parentName:"p"},"udp:%%//%%192.168.1.52:1234")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"udp:%%//%%0.0.0.0:1234"),".  "),(0,a.yg)("p",null,"For a ",(0,a.yg)("strong",{parentName:"p"},"UDP multicast")," stream the sender and receiver are set up to the same multicast address, e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"udp:%%//%%225.0.0.40:1234"),".  "),(0,a.yg)("h5",{id:"setting-the-license-to-unlock-the-filter"},"Setting the license to unlock the filter"),(0,a.yg)("p",null,"The filter can be unlocked either through a license key entry in the windows registry or by setting the license key through COM interface ",(0,a.yg)("inlineCode",{parentName:"p"},"ICodecProp::SetProperty")," with the property ",(0,a.yg)("inlineCode",{parentName:"p"},"IID_nanoPeg_LicenseString")," as first parameter. The second license parameter has to be a wide/unicode string!"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "ICodecProp.h" // ICodecProp interface\n#include "CommonProps.h" // IID_nanoPeg_LicenseString property id\n\nconst wchar_t* strwLicense = L"nlic:....";\n\n// Query ICodeProp interface from IBaseFilter instance\nCComQIPtr <ICodecProp> pCodecProp = m_pBaseFilter;\n\nif (pCodecProp)\n{\n    pCodecProp->SetProperty(&IID_nanoPeg_LicenseString, strwLicense);\n}\nelse\n{\n    // Handle error\n}\n')),(0,a.yg)("h5",{id:"inetsource-and-inetsink-interfaces"},"INetSource and INetSink Interfaces"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"INetSource")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"INetSink")," interfaces provide additional functions for getting and setting configuration properties like network interface, hostname, port, operational mode (Transport Stream or Elementary Stream) and the current streaming state.  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Interface declared in NetSourceOptions.h  \n// IID defined in NetSourceGuids.h  \n// {7899B7E7-F8D4-4076-BE9D-D03D51413756}  \ninterface INetSource : public IUnknown\n{\n    virtual STDMETHODIMP SetPort(int port) = 0;\n    virtual STDMETHODIMP SetNetworkInterface(const wchar_t* net_interface) = 0;\n    virtual STDMETHODIMP SetServerAddress(const wchar_t* address) = 0;\n    virtual STDMETHODIMP GetPort(int* port) = 0;\n    virtual STDMETHODIMP GetNetworkInterface(BSTR* net_interface) = 0;\n    virtual STDMETHODIMP GetServerAddress(wchar_t* address, int size) = 0;\n    virtual STDMETHODIMP GetMode(net_source_mode_t* mode) = 0;\n    virtual STDMETHODIMP SetMode(net_source_mode_t mode) = 0;\n    virtual STDMETHODIMP GetStreamingState(net_source_state_t* state) = 0;\n    virtual STDMETHODIMP GetElemetaryStreamProperties(BS::params_t* params, int pin) = 0;\n    virtual STDMETHODIMP GetNumOfAvailableInterface(int* count) = 0;\n    virtual STDMETHODIMP GetAvailableInterface(BSTR* nif, int n) = 0;\n    virtual STDMETHODIMP InitInput() = 0;\n};\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"// Interface declared in NetWriterOptions.h  \n// IID defined in NetWriterGuids.h  \n// {A4F3C2AC-18F7-4113-92FD-4042BD7279AC}\ninterface INetSink : public IUnknown\n{\n    virtual STDMETHODIMP SetDest(const wchar_t* dest, int port) = 0;\n    virtual STDMETHODIMP SetMode(net_sink_mode_t mode) = 0;\n    virtual STDMETHODIMP GetDest(const wchar_t* dest, int size, int* port) = 0;\n    virtual STDMETHODIMP GetMode(net_sink_mode_t* mode) = 0;\n    virtual STDMETHODIMP GetNumOfAvailableInterface(int* count) = 0;\n    virtual STDMETHODIMP GetAvailableInterface(BSTR* nif, int n) = 0;\n    virtual STDMETHODIMP GetNetInterface(BSTR* nif) = 0;\n    virtual STDMETHODIMP SetNetInterface(BSTR nif) = 0;\n};\n")),(0,a.yg)("h5",{id:"network-source-filter-timeout-settings"},"Network Source Filter Timeout Settings"),(0,a.yg)("p",null,"Timeout settings can be configured through the standard DirectShow COM interface ICodecAPI or in the Windows Registry.  "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Load Timeout")," in ms\nThe load timeout leads to loading being aborted after the configured  timespan if no stream input was received during ",(0,a.yg)("inlineCode",{parentName:"li"},"IFileSourceFilter::Load"),".  ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"Registry Key: HKCU\\SOFTWARE\\nanocosmos\\nNetSource  \nValue Name: TimeoutLoad  \nValue Type: REG_DWORD  \nDefault Value: 10000  \n\nICodecAPI interface parameter defined in NetSourceGuids.h  \nGet/Set input timeout during load in ms  \nVARIANT_TYPE: VT_I4, VARIANT::intVal  \ndefault value: 10000 ms  \n{CDC0C5AF-1666-4b46-8C7A-48EFF1C7E965}  \nDEFINE_GUID(PROPID_nanoNSTimeoutLoad,  \n0xcdc0c5af, 0x1666, 0x4b46, 0x8c, 0x7a, 0x48, 0xef, 0xf1, 0xc7, 0xe9, 0x65);  \n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Input Timeout")," in ms\nThe input timeout leads to the filtergraph being stopped if no stream input was received for the configured time, e.g. because the stream was stopped at the sender.  ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"Registry Key: HKCU\\SOFTWARE\\nanocosmos\\nNetSource  \nValue Name: TimeoutInput  \nValue Type: REG_DWORD  \nDefault Value: 5000  \n\nICodecAPI interface parameter defined in NetSourceGuids.h  \nGet/Set input timeout during streaming in ms  \nVARIANT_TYPE: VT_I4, VARIANT::intVal  \ndefault value: 5000 ms  \n{454B2E50-C50F-41f6-BF96-BF84016780C6}  \nDEFINE_GUID(PROPID_nanoNSTimeoutInput,  \n0x454b2e50, 0xc50f, 0x41f6, 0xbf, 0x96, 0xbf, 0x84, 0x1, 0x67, 0x80, 0xc6);  \n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Output Timeout")," in ms\nThe output timeout leads to the filtergraph being stopped if no MediaSamples were delivered for the configured time.  ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"Registry Key: HKCU\\SOFTWARE\\nanocosmos\\nNetSource  \nValue Name: TimeoutOutput  \nValue Type: REG_DWORD  \nDefault Value: 5000  \n\nICodecAPI interface parameter defined in NetSourceGuids.h  \nGet/Set output timeout during streaming in ms  \nVARIANT_TYPE: VT_I4, VARIANT::intVal  \ndefault value: 5000 ms  \n{D75ED01E-D608-436d-BCE7-DBC4AC71A29D}  \nDEFINE_GUID(PROPID_nanoNSTimeoutOutput,  \n0xd75ed01e, 0xd608, 0x436d, 0xbc, 0xe7, 0xdb, 0xc4, 0xac, 0x71, 0xa2, 0x9d);  \n")),(0,a.yg)("h4",{id:"network-source-filter-file-dump-settings"},"Network Source Filter File Dump Settings"),(0,a.yg)("p",null,"The file dump allows to record the udp input stream to a file.\nIt is intended to be used for diagnosis purposes only.\nIt is supported for a single Network Source Filter instance only.\nSettings can be configured through the Windows Registry.\nRegistry settings are loaded at creation time of an instance.\nThe file dump is started and stopped when the filtergraph is started and stopped.  "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Enable File Dump"),"\nEnable/disable dump file writing")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"Registry Key: HKCU\\SOFTWARE\\nanocosmos\\nNetSource  \nValue Name: FileDumpEnable\nValue Type: REG_DWORD  \nValid Values:   0 - disable, 1 - enable\nDefault Value: 0 - disable  \n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Dump File Name"),"\nFull file path to the output file.\nThe destination folder must already exist.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"Registry Key: HKCU\\SOFTWARE\\nanocosmos\\nNetSource  \nValue Name:     FileDumpFilename  \nValue Type:     REG_SZ / String  \nValid Values:   A valid output file name  \n")),(0,a.yg)("h4",{id:"debug-log-configuration-registry-settings"},"Debug-Log Configuration Registry Settings"),(0,a.yg)("h5",{id:"keys"},"Keys:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\nanoNetSource.ax  \n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HKEY_CURRENT_USER\\Software\\DebugNano\\nanoNetSink.ax  \n")),(0,a.yg)("h5",{id:"file-name"},"File name"),(0,a.yg)("p",null,"Sets the output file name. The folder must already exist.\nValue name: \tLogToFile\nValue type: \tREG_SZ / String\nValid values:\ta valid output file name to enable file logging or an empty string"),(0,a.yg)("h5",{id:"logging-level"},"Logging level"),(0,a.yg)("p",null,"A higher value increases the amount of logging messages sent, and messages get more detailed.\nValue name: \tTRACE\nValue type: \tREG_DWORD\nValid values:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 - minimal logging"),(0,a.yg)("li",{parentName:"ul"},"\u2026"),(0,a.yg)("li",{parentName:"ul"},"9 - maximal logging")))}g.isMDXComponent=!0},76915:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/directshow_udp_ts_streaming_source-1ad4f4134b6f319827a021be88711c02.jpg"},87813:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/directshow_udp_ts_streaming_writer-b06a8bbd01cabd2ca1ecfca55e12dc7f.jpg"}}]);