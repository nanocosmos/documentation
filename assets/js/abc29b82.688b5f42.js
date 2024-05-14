"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6078],{15680:(e,i,n)=>{n.d(i,{xA:()=>d,yg:()=>m});var t=n(96540);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var i=t.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},d=function(e){var i=s(e.components);return t.createElement(l.Provider,{value:i},e.children)},v="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),v=s(n),u=a,m=v["".concat(l,".").concat(u)]||v[u]||p[u]||o;return n?t.createElement(m,r(r({ref:i},d),{},{components:n})):t.createElement(m,r({ref:i},d))}));function m(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in i)hasOwnProperty.call(i,l)&&(c[l]=i[l]);c.originalType=e,c[v]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10376:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=n(58168),a=(n(96540),n(15680));const o={id:"nanostream_webrtc_device_selection",title:"Device Selection",sidebar_label:"Device Selection"},r=void 0,c={unversionedId:"webrtc/nanostream_webrtc_device_selection",id:"webrtc/nanostream_webrtc_device_selection",title:"Device Selection",description:"Device Enumeration & Pre-selection Filtering API",source:"@site/docs/webrtc/nanostream_webrtc_device_selection.md",sourceDirName:"webrtc",slug:"/webrtc/nanostream_webrtc_device_selection",permalink:"/docs/webrtc/nanostream_webrtc_device_selection",draft:!1,tags:[],version:"current",lastUpdatedAt:1715695199,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{id:"nanostream_webrtc_device_selection",title:"Device Selection",sidebar_label:"Device Selection"},sidebar:"nanoStream Webcaster",previous:{title:"Quality Settings",permalink:"/docs/webrtc/nanostream_webrtc_quality"},next:{title:"Audio-Only / Video-Only",permalink:"/docs/webrtc/nanostream_webrtc_audio_video_only"}},l={},s=[{value:"Device Enumeration &amp; Pre-selection Filtering API",id:"device-enumeration--pre-selection-filtering-api",level:2},{value:"\u2014 <code>getAvailableMediaDevices</code>:",id:"-getavailablemediadevices",level:3},{value:"\u2014 <code>filterDevices</code>:",id:"-filterdevices",level:3},{value:"Device Permissions",id:"device-permissions",level:2},{value:"Examples",id:"examples",level:2},{value:"1) Showing a dropdown menu",id:"1-showing-a-dropdown-menu",level:3},{value:"2) Setting selected MediaDevice IDs programmatically",id:"2-setting-selected-mediadevice-ids-programmatically",level:3},{value:"On Using MediaStream injection vs Device selection",id:"on-using-mediastream-injection-vs-device-selection",level:2}],d={toc:s},v="wrapper";function p(e){let{components:i,...n}=e;return(0,a.yg)(v,(0,t.A)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"device-enumeration--pre-selection-filtering-api"},"Device Enumeration & Pre-selection Filtering API"),(0,a.yg)("p",null,"The browsers native WebRTC API gives you the possibility to present all currently attached audio and video devices available for input recording and streaming ingest."),(0,a.yg)("p",null,"The nanoStream Webcaster Client API exports the following utility functions \u2014among others\u2014  under the namespace ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceUtils"),":"),(0,a.yg)("h3",{id:"-getavailablemediadevices"},"\u2014 ",(0,a.yg)("inlineCode",{parentName:"h3"},"getAvailableMediaDevices"),":"),(0,a.yg)("p",null,"This function wraps the native WebRTC API for convenience. You also retrieve an equivalent list by directly using the platform support. See ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo"},"MediaDeviceInfo")," interface."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"async function getAvailableMediaDevices(): Promise<MediaDeviceInfo[]>\n")),(0,a.yg)("h3",{id:"-filterdevices"},"\u2014 ",(0,a.yg)("inlineCode",{parentName:"h3"},"filterDevices"),":"),(0,a.yg)("p",null,'A convenience function to filter out specific kinds of devices. By default "input" only, since you only can select these for your streaming application obviously.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function filterDevices(\n    devices: MediaDeviceInfo[],\n    deviceKinds: MediaDeviceKind[] = ['audioinput', 'videoinput'],\n    groupId?: string,\n    deviceId?: string\n): MediaDeviceInfo[]\n")),(0,a.yg)("h2",{id:"device-permissions"},"Device Permissions"),(0,a.yg)("p",null,"Please notice that the device obtained by the native enumeration interface from the platform \u2014either directly via the Media Stream Web API or indirectly via the preceding utilities\u2014 only include devices which the user have granted permissions in the current context, via the browsers interactive user prompt, or via general page presets. For example, a browser may reject device permissions for a specific page, type of page, and either 'audio' or 'video' input types, and store these as user preferences."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"See the standard ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},"MediaDevices: getUserMedia()"),", for default way to query/prompt for device usage. "),(0,a.yg)("p",{parentName:"admonition"},"Also see the more generic permissions related novel standard: ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API"},"Permissions API")," ")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("h3",{id:"1-showing-a-dropdown-menu"},"1) Showing a dropdown menu"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<h2>MediaDevices:</h2>\n<div id="devices"></div>\n')),(0,a.yg)("p",null,"This example shows how to use the information gathered from devices API, and render it as a basic select menu. "),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Derived to your existing applications UX, or UI frameworks and methodology in use,\nthis may (potentially heavily) differ, but generally the same concepts from basic HTML and vanilla Javascript\nshould apply.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"DeviceUtils.getAvailableMediaDevices().then(devices => {\n\n    const videoDevices = DeviceUtils.filterDevices(devices, ['videoinput']);\n    const audioDevices = DeviceUtils.filterDevices(devices, ['audioinput']);\n\n    console.debug('Available devices:', devices);\n\n    const devicesDiv = document.querySelector('#devices')\n\n    const videoDevicesSelect = createDevicesDropdown(videoDevices);\n    const audioDevicesSelect = createDevicesDropdown(audioDevices);\n\n    const videoDevicesLabel = document.createElement('label');\n    videoDevicesLabel.innerText = 'video devices: ';\n    const audioDevicesLabel = document.createElement('label');\n    audioDevicesLabel.innerText = 'audio devices: ';\n\n    devicesDiv.appendChild(videoDevicesLabel);\n    devicesDiv.appendChild(videoDevicesSelect);\n    devicesDiv.appendChild(document.createElement('br'));\n    devicesDiv.appendChild(audioDevicesLabel);\n    devicesDiv.appendChild(audioDevicesSelect);\n});\n\nfunction createDevicesDropdown(devices) {\n    // Create a select element\n    const selectElement = document.createElement('select');\n\n    devices.forEach(device => {\n        const optionElement = document.createElement('option');\n        optionElement.value = device.deviceId;\n        optionElement.textContent = `${device.label || 'Unknown Device'} - id: ${device.deviceId}` ;\n        selectElement.appendChild(optionElement);\n    });\n\n    return selectElement;\n}\n")),(0,a.yg)("h3",{id:"2-setting-selected-mediadevice-ids-programmatically"},"2) Setting selected MediaDevice IDs programmatically"),(0,a.yg)("p",null,"A typical configuration may look like below."),(0,a.yg)("p",null,"Notice the ",(0,a.yg)("inlineCode",{parentName:"p"},"audioDeviceId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"videoDeviceId")," fields. They are both optional i.e. nullable (e.g. empty string)."),(0,a.yg)("p",null,"These can be set to any Device-ID string value which you would get from the devices list above (",(0,a.yg)("inlineCode",{parentName:"p"},"MediaDeviceInfo#deviceId")," property)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"let initConfig = {\n    inputCfg: {\n        mediaStreamCfg: {\n            audioDeviceId: '<audio-input-device-ID>',\n            videoDeviceId: '<video-input-device-ID>',\n            maxFramerate: 30,\n            resolution: [1280, 720],\n        },\n        broadcastCfg: {\n            maxAudioBitrateBps: 128000,\n            maxVideoBitrateBps: 8000000,\n        }\n    },\n    previewVideoElId: 'preview',\n};\n")),(0,a.yg)("h2",{id:"on-using-mediastream-injection-vs-device-selection"},"On Using MediaStream injection vs Device selection"),(0,a.yg)("p",null,"TBC"))}p.isMDXComponent=!0}}]);