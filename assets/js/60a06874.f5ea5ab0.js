"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"nanoplayer_update_source",title:"Update Source",sidebar_label:"Update Source"},i=void 0,s={unversionedId:"nanoplayer/nanoplayer_update_source",id:"nanoplayer/nanoplayer_update_source",title:"Update Source",description:"The nanoStream H5Live Player updateSource API lets you replace the exisiting source (config.source) with a new source.",source:"@site/docs/nanoplayer/nanoplayer_update_source.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_update_source",permalink:"/docs/nanoplayer/nanoplayer_update_source",draft:!1,tags:[],version:"current",lastUpdatedAt:1696845431,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"nanoplayer_update_source",title:"Update Source",sidebar_label:"Update Source"}},l={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"Source Object Parameter",id:"source-object-parameter",level:3},{value:"updateSource API",id:"updatesource-api",level:2},{value:"updateSource Events",id:"updatesource-events",level:2},{value:"Start Event",id:"start-event",level:3},{value:"Completion Events",id:"completion-events",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The nanoStream H5Live Player updateSource API lets you replace the exisiting source (",(0,r.kt)("inlineCode",{parentName:"p"},"config.source"),") with a new source."),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To start using the update source feature make sure you're using the minimum required nanoStream H5Live Player version ",(0,r.kt)("strong",{parentName:"p"},"4.0"))),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"With the nanoStream H5Live Player ",(0,r.kt)("strong",{parentName:"p"},"version >= 4.0")," you only need to provide a new ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," object as a parameter. In case a stream is currently playing and a stream of the new source should play immediately a stream switch will be initialized with the switch options that are set directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.source.options.switch")," object. If an errror occurs in this case the playback is interrupted and an error is thrown. "),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The new source will always replace the previous source even in case of an error!")),(0,r.kt)("h3",{id:"source-object-parameter"},"Source Object Parameter"),(0,r.kt)("p",null,"The updateSource method ",(0,r.kt)("strong",{parentName:"p"},"always")," expects a new source object as a parameter. "),(0,r.kt)("p",null,"As you may notice this object is similar to the structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," object you are using to set up the player. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example single stream source:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var source = {\n    "entries": [ // array of \'entry\' objects\n        {\n            "index": 0,\n            "label": "high",\n            "tag": "this is a single entry high quality stream",\n            "info": {\n                "bitrate": 1200,\n                "width": 1280,\n                "height": 720,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY0"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        }\n    ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example multi stream source object with ABR:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var source = {\n    "entries": [ // array of \'entry\' objects\n        {\n            "index": 0,\n            "label": "high",\n            "tag": "this is a high quality stream",\n            "info": {\n                "bitrate": 1200,\n                "width": 1280,\n                "height": 720,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY0"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        },\n        {\n            "index": 1,\n            "label": "medium",\n            "tag": "this is a medium quality stream",\n            "info": {\n                "bitrate": 800,\n                "width": 864,\n                "height": 480,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY1"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        },\n        {\n            "index": 2,\n            "label": "low",\n            "tag": "this is a low quality stream",\n            "info": {\n                "bitrate": 400,\n                "width": 426,\n                "height": 240,\n                "framerate": 15\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY2"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        }\n    ],\n    "options": {\n        "adaption": {\n            "rule": "deviationOfMean" // enable ABR\n        },\n        "switch": {\n            \'method\': \'server\',\n            \'pauseOnError\': false,\n            \'forcePlay\': true,\n            \'fastStart\': false,\n            \'timeout\': 10,\n        }\n    },\n    "startIndex": 2 // lowest\n}\n')),(0,r.kt)("h2",{id:"updatesource-api"},"updateSource API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example updateSource call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var source = {\n    "entries": [ // array of \'entry\' objects\n        {\n            "index": 0,\n            "label": "high",\n            "tag": "this is a single entry high quality stream",\n            "info": {\n                "bitrate": 1200,\n                "width": 1280,\n                "height": 720,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY0"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        }\n    ]\n}\n\n// player instance\nplayer.updateSource(source).then(function(config) {\n    console.log(\'update source ok with config: \' + JSON.stringify(config));\n}, function(error) {\n    console.log(error);\n});\n')),(0,r.kt)("h2",{id:"updatesource-events"},"updateSource Events"),(0,r.kt)("p",null,"With the release of the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateSource")," method there are also ",(0,r.kt)("strong",{parentName:"p"},"4")," events you should keep in mind:"),(0,r.kt)("h3",{id:"start-event"},"Start Event"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceInit"},"onUpdateSourceInit")),": This event signals an initialized update source request. This always ",(0,r.kt)("strong",{parentName:"li"},"only")," a start event! Another completion event will follow.")),(0,r.kt)("h3",{id:"completion-events"},"Completion Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/nanoplayer/nanoplayer_api#onupdatesourcesuccess"},"onUpdateSourceSuccess")),": This event signals a successful update source request and fires if the source is updated. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceSuccess"},"onUpdateSourceFail")),": This event signals a failed update source request. Fired if an error occurs during the source update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceAbort"},"onUpdateSourceAbort")),": This event signals an aborted update source request. Possible reasons are an equal source (",(0,r.kt)("strong",{parentName:"li"},"'equalsource'"),"), a superseding (",(0,r.kt)("strong",{parentName:"li"},"'superseded'"),") or the time difference between two following ",(0,r.kt)("inlineCode",{parentName:"li"},"updateSource")," calls that is too small  (",(0,r.kt)("strong",{parentName:"li"},"'frequency'"),"). ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Also, keep in mind...")," there will be an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onStreamInfo"},"onStreamInfo"))," event indicating that the first image of the new stream is getting played out."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Note:")," "),(0,r.kt)("p",{parentName:"admonition"},"You can find more specific information on all player events ",(0,r.kt)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceInit"},"here"),".")))}m.isMDXComponent=!0}}]);