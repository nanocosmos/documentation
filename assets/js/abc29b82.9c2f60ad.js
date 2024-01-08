"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[2070],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},v="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),v=s(i),u=a,m=v["".concat(l,".").concat(u)]||v[u]||p[u]||o;return i?n.createElement(m,r(r({ref:t},d),{},{components:i})):n.createElement(m,r({ref:t},d))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[v]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},86069:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const o={id:"nanostream_webrtc_device_selection",title:"Device Selection",sidebar_label:"Device Selection"},r=void 0,c={unversionedId:"webrtc/nanostream_webrtc_device_selection",id:"webrtc/nanostream_webrtc_device_selection",title:"Device Selection",description:"Device Enumeration & Pre-selection Filtering API",source:"@site/docs/webrtc/nanostream_webrtc_device_selection.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_device_selection",permalink:"/docs/webrtc/nanostream_webrtc_device_selection",draft:!1,tags:[],version:"current",lastUpdatedAt:1704708501,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"nanostream_webrtc_device_selection",title:"Device Selection",sidebar_label:"Device Selection"},sidebar:"nanoStream Webcaster",previous:{title:"Quality Settings",permalink:"/docs/webrtc/nanostream_webrtc_quality"},next:{title:"Audio-Only / Video-Only",permalink:"/docs/webrtc/nanostream_webrtc_audio_video_only"}},l={},s=[{value:"Device Enumeration &amp; Pre-selection Filtering API",id:"device-enumeration--pre-selection-filtering-api",level:2},{value:"\u2014 <code>getAvailableMediaDevices</code>:",id:"-getavailablemediadevices",level:3},{value:"\u2014 <code>filterDevices</code>:",id:"-filterdevices",level:3},{value:"Device Permissions",id:"device-permissions",level:2},{value:"Examples",id:"examples",level:2},{value:"1) Showing a dropdown menu",id:"1-showing-a-dropdown-menu",level:3},{value:"2) Setting selected MediaDevice IDs programmatically",id:"2-setting-selected-mediadevice-ids-programmatically",level:3},{value:"On Using MediaStream injection vs Device selection",id:"on-using-mediastream-injection-vs-device-selection",level:2}],d={toc:s},v="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(v,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"device-enumeration--pre-selection-filtering-api"},"Device Enumeration & Pre-selection Filtering API"),(0,a.kt)("p",null,"The browsers native WebRTC API gives you the possibility to present all currently attached audio and video devices available for input recording and streaming ingest."),(0,a.kt)("p",null,"The nanoStream Webcaster Client API exports the following utility functions \u2014among others\u2014  under the namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"DeviceUtils"),":"),(0,a.kt)("h3",{id:"-getavailablemediadevices"},"\u2014 ",(0,a.kt)("inlineCode",{parentName:"h3"},"getAvailableMediaDevices"),":"),(0,a.kt)("p",null,"This function wraps the native WebRTC API for convenience. You also retrieve an equivalent list by directly using the platform support. See ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo"},"MediaDeviceInfo")," interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function getAvailableMediaDevices(): Promise<MediaDeviceInfo[]>\n")),(0,a.kt)("h3",{id:"-filterdevices"},"\u2014 ",(0,a.kt)("inlineCode",{parentName:"h3"},"filterDevices"),":"),(0,a.kt)("p",null,'A convenience function to filter out specific kinds of devices. By default "input" only, since you only can select these for your streaming application obviously.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function filterDevices(\n    devices: MediaDeviceInfo[],\n    deviceKinds: MediaDeviceKind[] = ['audioinput', 'videoinput'],\n    groupId?: string,\n    deviceId?: string\n): MediaDeviceInfo[]\n")),(0,a.kt)("h2",{id:"device-permissions"},"Device Permissions"),(0,a.kt)("p",null,"Please notice that the device obtained by the native enumeration interface from the platform \u2014either directly via the Media Stream Web API or indirectly via the preceding utilities\u2014 only include devices which the user have granted permissions in the current context, via the browsers interactive user prompt, or via general page presets. For example, a browser may reject device permissions for a specific page, type of page, and either 'audio' or 'video' input types, and store these as user preferences."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See the standard ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},"MediaDevices: getUserMedia()"),", for default way to query/prompt for device usage. "),(0,a.kt)("p",{parentName:"admonition"},"Also see the more generic permissions related novel standard: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API"},"Permissions API")," ")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"1-showing-a-dropdown-menu"},"1) Showing a dropdown menu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h2>MediaDevices:</h2>\n<div id="devices"></div>\n')),(0,a.kt)("p",null,"This example shows how to use the information gathered from devices API, and render it as a basic select menu. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Derived to your existing applications UX, or UI frameworks and methodology in use,\nthis may (potentially heavily) differ, but generally the same concepts from basic HTML and vanilla Javascript\nshould apply.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"DeviceUtils.getAvailableMediaDevices().then(devices => {\n\n    const videoDevices = DeviceUtils.filterDevices(devices, ['videoinput']);\n    const audioDevices = DeviceUtils.filterDevices(devices, ['audioinput']);\n\n    console.debug('Available devices:', devices);\n\n    const devicesDiv = document.querySelector('#devices')\n\n    const videoDevicesSelect = createDevicesDropdown(videoDevices);\n    const audioDevicesSelect = createDevicesDropdown(audioDevices);\n\n    const videoDevicesLabel = document.createElement('label');\n    videoDevicesLabel.innerText = 'video devices: ';\n    const audioDevicesLabel = document.createElement('label');\n    audioDevicesLabel.innerText = 'audio devices: ';\n\n    devicesDiv.appendChild(videoDevicesLabel);\n    devicesDiv.appendChild(videoDevicesSelect);\n    devicesDiv.appendChild(document.createElement('br'));\n    devicesDiv.appendChild(audioDevicesLabel);\n    devicesDiv.appendChild(audioDevicesSelect);\n});\n\nfunction createDevicesDropdown(devices) {\n    // Create a select element\n    const selectElement = document.createElement('select');\n\n    devices.forEach(device => {\n        const optionElement = document.createElement('option');\n        optionElement.value = device.deviceId;\n        optionElement.textContent = `${device.label || 'Unknown Device'} - id: ${device.deviceId}` ;\n        selectElement.appendChild(optionElement);\n    });\n\n    return selectElement;\n}\n")),(0,a.kt)("h3",{id:"2-setting-selected-mediadevice-ids-programmatically"},"2) Setting selected MediaDevice IDs programmatically"),(0,a.kt)("p",null,"A typical configuration may look like below."),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"audioDeviceId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"videoDeviceId")," fields. They are both optional i.e. nullable (e.g. empty string)."),(0,a.kt)("p",null,"These can be set to any Device-ID string value which you would get from the devices list above (",(0,a.kt)("inlineCode",{parentName:"p"},"MediaDeviceInfo#deviceId")," property)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let initConfig = {\n    inputCfg: {\n        mediaStreamCfg: {\n            audioDeviceId: '<audio-input-device-ID>',\n            videoDeviceId: '<video-input-device-ID>',\n            maxFramerate: 30,\n            resolution: [1280, 720],\n        },\n        broadcastCfg: {\n            maxAudioBitrateBps: 128000,\n            maxVideoBitrateBps: 8000000,\n        }\n    },\n    previewVideoElId: 'preview',\n};\n")),(0,a.kt)("h2",{id:"on-using-mediastream-injection-vs-device-selection"},"On Using MediaStream injection vs Device selection"),(0,a.kt)("p",null,"TBC"))}p.isMDXComponent=!0}}]);