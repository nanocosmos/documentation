"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1275],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={id:"migration_guide_v6",title:"Migration Guide",sidebar_label:"Migration Guide From v5 To v6"},i="Migration Guide: nanoStream Webcaster v5 to v6",s={unversionedId:"webrtc/migration_guide_v6",id:"webrtc/migration_guide_v6",title:"Migration Guide",description:"This guide provides step-by-step instructions on how to migrate your application from nanoStream Webcaster version 5 to the new and improved version 6.",source:"@site/docs/webrtc/migration_guide_v6.md",sourceDirName:"webrtc",slug:"/webrtc/migration_guide_v6",permalink:"/docs/webrtc/migration_guide_v6",draft:!1,tags:[],version:"current",lastUpdatedAt:1717712187,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"migration_guide_v6",title:"Migration Guide",sidebar_label:"Migration Guide From v5 To v6"},sidebar:"nanoStream Webcaster",previous:{title:"Webcaster",permalink:"/docs/webrtc/nanostream_webrtc_api"},next:{title:"WHIP Ingest",permalink:"/docs/webrtc/nanostream_webrtc_whip_ingest"}},c={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:'<a id="Introduction"></a>Introduction',id:"introduction",level:2},{value:'<a id="Motivation"></a>Motivation for Migration',id:"motivation-for-migration",level:2},{value:'<a id="Semantics"></a>New Semantics: From Event-Based to Promise-Based Code',id:"new-semantics-from-event-based-to-promise-based-code",level:2},{value:'<a id="Documentation"></a>Documentation',id:"documentation",level:2},{value:'<a id="Steps"></a>Migration Steps',id:"migration-steps",level:2},{value:'<a id="Conclusion"></a>Conclusion',id:"conclusion",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"migration-guide-nanostream-webcaster-v5-to-v6"},"Migration Guide: nanoStream Webcaster v5 to v6"),(0,a.yg)("p",null,"This guide provides step-by-step instructions on how to migrate your application from nanoStream Webcaster version 5 to the new and improved version 6."),(0,a.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#Introduction"},"Introduction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#Motivation"},"Motivation")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#Semantics"},"New Semantics")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#Documentation"},"Documentation")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#Steps"},"Migration Steps")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#Conclusion"},"Conclusion"))),(0,a.yg)("h2",{id:"introduction"},(0,a.yg)("a",{id:"Introduction"}),"Introduction"),(0,a.yg)("p",null,"nanoStream Webcaster is a JavaScript client library designed for low latency live streaming. It operates in the browser and uses WebRTC for broadcasting, ingesting streams into the nanoStream Cloud. The new version 6 brings a host of improvements and new features that make it easier to use, more robust, and more efficient."),(0,a.yg)("h2",{id:"motivation-for-migration"},(0,a.yg)("a",{id:"Motivation"}),"Motivation for Migration"),(0,a.yg)("p",null,"Here are some compelling reasons to migrate to nanoStream Webcaster v6:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Easier to Use"),": The new version has been designed with simplicity in mind. It offers a more intuitive interface and streamlined functions, making it easier for developers to use.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Write Less Code"),": With v6, you can achieve the same results with less effort. This makes your application more efficient and easier to maintain. The new configuration options in the library have a flatter structure that simplifies coding, ultimately leading to less code being written.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"More Robust"),": The new version is more robust than its predecessor. It offers improved error handling and stability, ensuring your live streams run smoothly. Because the standardized WHIP protocol is now used for negotiation of connections into the cloud, it addresses stream start issues caused by the proprietary WebSocket based protocol in version 5.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"New Features"),": v6 introduces a range of new features that will enhance your live streaming capabilities. These features will roll out progressively, offering new possibilities for your application.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Easier Integration of MediaStreams"),": The new version simplifies the integration of MediaStreams, making it easier to use custom devices and virtual sources.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Exposes TypeScript Definitions"),": For TypeScript users, v6 exposes TypeScript definitions, making it easier to integrate with TypeScript projects and benefit from features like static typing and IntelliSense. This also means that the API contract is directly specified by the source code inherently, and therefore documents itself. Further the reference docs we ship with the library are generated by leveraging this."))),(0,a.yg)("h2",{id:"new-semantics-from-event-based-to-promise-based-code"},(0,a.yg)("a",{id:"Semantics"}),"New Semantics: From Event-Based to Promise-Based Code"),(0,a.yg)("p",null,"In nanoStream Webcaster v6, we have made a significant change in the way the library handles asynchronous operations. We have moved away from the event-based model used in v5 and adopted a promise-based model. This change affects how you write and structure your code when using the nanoStream Webcaster."),(0,a.yg)("p",null,"In the previous version (v5), the library used an event-based model. This means that when you called a method on the client, it would trigger an event when it completed. Your code would then handle these events to determine whether the operation was successful or if an error occurred."),(0,a.yg)("p",null,"In version 6, we have switched to a promise-based model. Now, each client method returns a Promise. This Promise resolves when the operation is successful and rejects when an error occurs. This approach aligns with modern JavaScript practices and makes it easier to handle asynchronous operations. This also means that you can call any promise-returning method using the async/await pattern that comes with modern JS runtimes. In this scenario,  you can use a try/catch clause to handle errors. This is not a feature specific to this library, but a general language idiom coming with native runtime support nowadays."),(0,a.yg)("p",null,"To adapt your code for v6, you'll need to change your client method calls. Instead of attaching event listeners, you'll need to handle the returned promise."),(0,a.yg)("p",null,"Here's an general example of how to adapt your code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// v5: Event-based\nclient.on('BroadcastSuccess', () => {\n    console.log('Broadcast started');\n});\nclient.on('BroadcastError', (error) => {\n    console.error('An error occurred:', error);\n});\n\nclient.startBroadcast();\n\n// v6: Promise-based\nclient.startBroadcast()\n    .then(() => {\n        console.log('Broadcast started');\n    })\n    .catch((error) => {\n        console.error('An error occurred:', error);\n    });\n")),(0,a.yg)("admonition",{title:"Remember...",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can also use async/await (as with any Promise-returning function), to avoid having to use closure scopes, or any callbacks at all. Clearly, both is functionally equivalent, and one or the other can be used interchangeably at any moment, depending on what fits better in your given context.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// v6: Promise-based with async/await\n(async () => {\n\n    try {\n        await client.startBroadcast();\n        console.log('Broadcast started');\n    } catch (error) {\n        console.error('An error occurred:', error);\n    }   \n\n})();\n")),(0,a.yg)("p",null,"This new promise-based model makes your code more robust and easier to understand, helping you build better live streaming applications with nanoStream Webcaster v6."),(0,a.yg)("h2",{id:"documentation"},(0,a.yg)("a",{id:"Documentation"}),"Documentation"),(0,a.yg)("p",null,"Please find the documentation for v6 of the Webcaster API below:"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html"},"https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html")),(0,a.yg)("h2",{id:"migration-steps"},(0,a.yg)("a",{id:"Steps"}),"Migration Steps"),(0,a.yg)("p",null,"Follow these steps to migrate your application from nanoStream Webcaster v5 to v6:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Update the Library Reference"),": Replace the reference to the v5 library in your HTML file with the v6 library.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n    <script src="path_to/nanostream.webcaster.js"><\/script>\n    </head>\n    <body>\n        \x3c!--create a video element four previewing your MediaStream--\x3e\n        <video id="preview" muted autoplay playsinline></video>\n    </body>\n</html>\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Update the Initialization Code"),": Update the initialization code to use the new v6 syntax. Refer to the v6 documentation for the new initialization syntax.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const { Webcaster, HelperUtils, DeviceUtils } = window.WebcasterApiV6;\nlet client;\n\n// Config for the NanoWebcaster library\nlet initConfig = {\n    inputCfg: {\n        // Either you create a MediaStream and pass a reference here (see in next section),\n        // or let the client create one for you by omitting the property:\n        mediaStream: null,\n        mediaStreamCfg: {\n            maxFramerate: 30,\n            resolution: [1280, 720],\n            audioVideoOnly: false,\n            audioConstraints: {\n                autoGainControl: true,\n                channelCount: 2,\n                echoCancellation: true,\n                noiseSuppression: true\n            },\n        },\n        broadcastCfg: {\n            transcodeAudioBitrateBps: HelperUtils.kbps(128),\n            maxAudioBitrateBps: HelperUtils.kbps(128),\n            maxVideoBitrateBps: HelperUtils.kbps(2000),\n            maxEncodingFramerate: 30,\n        }\n    },\n    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n    streamName: 'YOUR_STREAM_NAME',\n    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n    previewVideoElId: 'preview',\n};\n\n// do the initialization in DOMContentLoaded, if you can not guarantee otherwise\n// that the JavaScript code will execute only after the DOM has fully loaded.\ndocument.addEventListener('DOMContentLoaded', async () => {\n    // pass the config when instantiating the client\n    client = window.client = new Webcaster(initConfig);\n\n    client.setup().then(() => {\n        console.log('Webcaster.setup done');\n    });\n}\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Creating a MediaStream from a Selection of Audio & Video Devices"))),(0,a.yg)("p",null,"You pass device ids with the initConfig in order to create a MediaStream from connected devices that\nyou have selected beforehand.\nIn order to do so, you can utilize our DeviceUtils helper functions. Please find a sample below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const { Webcaster, HelperUtils, DeviceUtils } = window.WebcasterApiV6;\nlet client;\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n\n    let devices = await DeviceUtils.getAvailableMediaDevices();\n    let videoDevices = DeviceUtils.filterDevices(devices, ['videoinput']);\n    let audioDevices = DeviceUtils.filterDevices(devices, ['audioinput']);\n    let videoDeviceId = videoDevices[0]?.deviceId; // we select the first video device from the list\n    let audioDeviceId = audioDevices[0]?.deviceId; // we select the first audio device from the list\n\n    let initConfig = {\n        inputCfg: {\n            mediaStream: null,\n            mediaStreamCfg: {\n                audioDeviceId: audioDeviceId,\n                videoDeviceId: videoDeviceId,\n                maxFramerate: 30,\n                resolution: [1280, 720],\n                audioVideoOnly: false,\n                audioConstraints: {\n                    autoGainControl: true,\n                    channelCount: 2,\n                    echoCancellation: true,\n                    noiseSuppression: true\n                },\n            },\n            broadcastCfg: {\n                transcodeAudioBitrateBps: HelperUtils.kbps(128),\n                maxAudioBitrateBps: HelperUtils.kbps(128),\n                maxVideoBitrateBps: HelperUtils.kbps(2000),\n                maxEncodingFramerate: 30,\n            }\n        },\n        ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n        streamName: 'YOUR_STREAM_NAME',\n        serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n        previewVideoElId: 'preview',\n    };\n\n    // pass the config when instantiating the client\n    client = window.client = new Webcaster(initConfig);\n\n    client.setup().then(() => {\n        console.log('Webcaster.setup done');\n    });\n\n});\n\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Creating Custom MediaStreams with Native Browser JavaScript"))),(0,a.yg)("p",null,"In nanoStream Webcaster v6, you have the ability to create custom MediaStreams using native browser JavaScript and pass them to the Webcaster on initialization. Here's how you can do it:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// do the initialization in DOMContentLoaded, if you can not guarantee otherwise\n// that our JavaScript code will execute only after the DOM has fully loaded.\ndocument.addEventListener('DOMContentLoaded', async () => {\n    let stream;\n\n    try {\n        // create your audio/video stream from camera or microphone sources:\n        stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });\n        // or create a screen share:\n        /*\n        // First create two MediaStreams and access the regarding MediaStreamTracks\n        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });\n        const videoStream = await navigator.mediaDevices.getDisplayMedia({ video: true });\n        const audioTrack = audioStream.getAudioTracks()[0];\n        const videoTrack = videoStream.getVideoTracks()[0];\n        // Then construct a new MediaStream from a MediaStreamTrack for video (screen share)\n        // and a MediaStreamTrack for audio (microphone).\n        stream = new MediaStream([audioTrack, videoTrack]);\n        */\n    } catch(error) {\n        alert('Error creating stream:', error);\n        return;\n    }\n\n    let initConfig = {\n        inputCfg: {\n            // Use the just created stream\n            mediaStream: stream,\n            broadcastCfg: {\n                transcodeAudioBitrateBps: HelperUtils.kbps(128),\n                maxAudioBitrateBps: HelperUtils.kbps(128),\n                maxVideoBitrateBps: HelperUtils.kbps(2000),\n                maxEncodingFramerate: 30,\n            }\n        }\n        ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',\n        streamName: 'YOUR_STREAM_NAME',\n        serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',\n        previewVideoElId: 'preview',\n    };\n\n    // pass your config when instantiating the client\n    client = window.client = new Webcaster(initConfig);\n\n    client.setup().then(() => {\n        console.log('Webcaster.setup done');\n    });\n}\n\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Connect your UI"),": Update your code to trigger v6 methods through your UI.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<body>\n    \x3c!--create a video element four previewing your MediaStream--\x3e\n    <video id=\"preview\" muted autoplay playsinline></video>\n    \x3c!--create UI elements for calling client methods--\x3e\n    <button onclick=\"startPreview()\">startPreview</button>\n    <button onclick=\"startBroadcast()\">startBroadcast</button>\n    <button onclick=\"stopBroadcast()\">stopBroadcast</button>\n    <button onclick=\"dispose()\">dispose</button>\n    <button onclick=\"recover()\">recover</button>\n    <button onclick=\"setMuted()\">setMuted</button>\n</body>\n\n<script>\n    function assertCreated() {\n        if (!client) {\n            alert('Create client instance first');\n            return false;\n        }\n        return true;\n    }\n\n    let startPreview = async () => {\n        if (!assertCreated()) return;\n        try {\n            await client.startPreview();\n        } catch (err) {\n            console.error('Error starting preview:', err);\n        }\n    };\n\n    let startBroadcast = async () => {\n        if (!assertCreated()) return;\n        try {\n            await client.startBroadcast();\n        } catch (err) {\n            console.error('Error starting broadcast:', err);\n        }\n    };\n\n    let stopBroadcast = async () => {\n        if (!assertCreated()) return;\n        try {\n            await client.stopBroadcast();\n        } catch (err) {\n            console.error('Error stopping broadcast:', err);\n        }\n    };\n\n    let dispose = async () => {\n        if (!assertCreated()) return;\n        try {\n            await client.dispose();\n        } catch (err) {\n            console.error('Error disposing client:', err);\n        } finally {\n            client = null;\n        }\n    };\n\n    let recover = async () => {\n        if (!assertCreated()) return;\n        try {\n            await client.recover();\n        } catch (err) {\n            console.error('Error recovering client:', err);\n        }\n    };\n\n    let setMuted = async () => {\n        if (!assertCreated()) return;\n        try {\n            await client.setMuted({\n                audio: true,\n                video: true\n            });\n        } catch (err) {\n            console.error('Error recovering client:', err);\n        }\n    }\n<\/script>\n")),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Update Error Handling"),": Review your error handling code to ensure it is compatible with the new error handling in v6.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"client.onError = (err) => {\n    console.error('Webcaster.onError:', err);\n};\n")),(0,a.yg)("ol",{start:7},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Listen For State Events"),": Update your code to listen to the new v6 events about Webcaster state.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"client.onStateChange = () => {\n    console.log('Webcaster.onStateChange:', client.getUpstreamStatus());\n};\n\nclient.onMetrics = (metrics) => {\n    console.log('Webcaster.onMetrics:', metrics);\n};\n")),(0,a.yg)("ol",{start:8},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Test Your Application"),": Thoroughly test your application to ensure it works correctly with the new v6 library.")),(0,a.yg)("h2",{id:"conclusion"},(0,a.yg)("a",{id:"Conclusion"}),"Conclusion"),(0,a.yg)("p",null,"Migrating to nanoStream Webcaster v6 offers numerous benefits and enhancements. While the migration process requires some effort, the payoff in terms of improved usability, efficiency, and robustness makes it a worthwhile investment. Happy streaming!"))}p.isMDXComponent=!0}}]);