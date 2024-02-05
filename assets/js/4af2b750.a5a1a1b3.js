"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5228],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>m});var i=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),v=d(n),p=r,m=v["".concat(s,".").concat(p)]||v[p]||u[p]||a;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[v]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(45072),r=(n(11504),n(95788));const a={id:"nanostream_webrtc_device_selection",title:"Device Selection",sidebar_label:"Device Selection"},o=void 0,c={unversionedId:"webrtc-v5/nanostream_webrtc_device_selection",id:"webrtc-v5/nanostream_webrtc_device_selection",title:"Device Selection",description:"The Webcaster API gives you the possibility to present all currently attached audio and video devices to your users.",source:"@site/docs/webrtc-v5/nanostream_webrtc_device_selection.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_device_selection",permalink:"/docs/webrtc-v5/nanostream_webrtc_device_selection",draft:!1,tags:[],version:"current",lastUpdatedAt:1707150098,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"nanostream_webrtc_device_selection",title:"Device Selection",sidebar_label:"Device Selection"},sidebar:"nanoStream Webcaster V5",previous:{title:"Quality Settings",permalink:"/docs/webrtc-v5/nanostream_webrtc_quality"},next:{title:"Audio- / Video-Only",permalink:"/docs/webrtc-v5/nanostream_webrtc_audio_video_only"}},s={},d=[{value:"Preparation",id:"preparation",level:2},{value:"Request and render devices",id:"request-and-render-devices",level:2},{value:"Start the preview",id:"start-the-preview",level:2}],l={toc:d},v="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(v,(0,i.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Webcaster API gives you the possibility to present all currently attached audio and video devices to your users.\nThe API call to requrest the device list is ",(0,r.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusergetdevices"},"getDevices()"),"."),(0,r.yg)("p",null,"You will receive the list of devices in the ",(0,r.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#receiveddevicelist"},"ReceivedDeviceList")," event. After that you can show this list to the user, so he can choose which devices he wants to be used for the Webcast."),(0,r.yg)("h2",{id:"preparation"},"Preparation"),(0,r.yg)("p",null,"We will need two ",(0,r.yg)("inlineCode",{parentName:"p"},"<select>")," tags in our HTML document, in order to display the attached audio & video devices in your HTML document. Also we will add a button to trigger the ",(0,r.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcuserstartpreviewconfig"},"startPreview(previewConfig)")," call after we made our device selection in the UI and a video element to show the preview in."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'// in your html body\n<video id="video-preview" autoplay playsinline muted></video>\n\n<select id="audio-device-list"></select>\n<select id="video-device-list"></select>\n\n<button id="start-preview-button" type="button">start preview</button>\n')),(0,r.yg)("p",null,"Also we will create a Javascript function that populates above device selection lists later on."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// adds options to a select element\nvar createSelectOptions = function (elementId, devices) {\n\n  var selectOptions = document.getElementById(elementId).options;\n\n  // Add all devices by id and index\n  for (var device of devices) {\n    selectOptions[selectOptions.length] = new Option(device.id, device.index);\n  }\n\n};\n")),(0,r.yg)("h2",{id:"request-and-render-devices"},"Request and render devices"),(0,r.yg)("p",null,"Next we will create an instance of the Webcaster API and request attached devices with the ",(0,r.yg)("a",{parentName:"p",href:"./nanostream_webrtc_api#rtcusergetdevices"},"getDevices()")," call."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// create an instance of the API\nvar user = new window.nanowebrtc.user();\n\nuser.on('ReceivedDeviceList', function(event) {\n\n  // device lists are arrays, received in event.data.devices\n  var audioDevices = event.data.devices.audiodevices;\n  var videoDevices = event.data.devices.videodevices;\n\n  createSelectOptions('audio-device-list', audioDevices);\n  createSelectOptions('video-device-list', videoDevices);\n\n});\n\n// request device list, will fire 'ReceivedDeviceList' event\nuser.getDevices();\n")),(0,r.yg)("h2",{id:"start-the-preview"},"Start the preview"),(0,r.yg)("p",null,"Once a user has selected audio and video devices from the lists, the preview can be started."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// we will trigger the preview once the 'start-preview-button' has been clicked.\ndocument.getElementById('start-preview-button').addEventListener('click', function() {\n\n  // get the index of the selected audio device\n  var audioDeviceList = document.getElementById('audio-device-list');\n  var audioDeviceIndex = audioDeviceList.options[audioDeviceList.selectedIndex].value;\n\n  // get the index of the selected video device\n  var videoDeviceList = document.getElementById('video-device-list');\n  var videoDeviceIndex = videoDeviceList.options[videoDeviceList.selectedIndex].value;\n\n  var previewConfig = {\n      audioDeviceConfig: {device: audioDeviceIndex},\n      videoDeviceConfig: {device: videoDeviceIndex},\n      elementId: 'video-preview'\n  };\n\n  user.startPreview(previewConfig);\n\n});\n")))}u.isMDXComponent=!0}}]);