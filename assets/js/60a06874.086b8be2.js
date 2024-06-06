"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4997],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),y=r,d=c["".concat(l,".").concat(y)]||c[y]||m[y]||o;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},54729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={id:"nanoplayer_update_source",title:"Update Source",sidebar_label:"Update Source"},i=void 0,s={unversionedId:"nanoplayer/nanoplayer_update_source",id:"nanoplayer/nanoplayer_update_source",title:"Update Source",description:"The nanoStream H5Live Player updateSource API lets you replace the exisiting source (config.source) with a new source.",source:"@site/docs/nanoplayer/nanoplayer_update_source.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_update_source",permalink:"/docs/nanoplayer/nanoplayer_update_source",draft:!1,tags:[],version:"current",lastUpdatedAt:1717712187,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"nanoplayer_update_source",title:"Update Source",sidebar_label:"Update Source"}},l={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"Source Object Parameter",id:"source-object-parameter",level:3},{value:"updateSource API",id:"updatesource-api",level:2},{value:"updateSource Events",id:"updatesource-events",level:2},{value:"Start Event",id:"start-event",level:3},{value:"Completion Events",id:"completion-events",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The nanoStream H5Live Player updateSource API lets you replace the exisiting source (",(0,r.yg)("inlineCode",{parentName:"p"},"config.source"),") with a new source."),(0,r.yg)("admonition",{title:"Important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"To start using the update source feature make sure you're using the minimum required nanoStream H5Live Player version ",(0,r.yg)("strong",{parentName:"p"},"4.0"))),(0,r.yg)("h2",{id:"how-to-use"},"How to use"),(0,r.yg)("p",null,"With the nanoStream H5Live Player ",(0,r.yg)("strong",{parentName:"p"},"version >= 4.0")," you only need to provide a new ",(0,r.yg)("inlineCode",{parentName:"p"},"source")," object as a parameter. In case a stream is currently playing and a stream of the new source should play immediately a stream switch will be initialized with the switch options that are set directly in the ",(0,r.yg)("inlineCode",{parentName:"p"},"config.source.options.switch")," object. If an errror occurs in this case the playback is interrupted and an error is thrown. "),(0,r.yg)("admonition",{title:"Important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The new source will always replace the previous source even in case of an error!")),(0,r.yg)("h3",{id:"source-object-parameter"},"Source Object Parameter"),(0,r.yg)("p",null,"The updateSource method ",(0,r.yg)("strong",{parentName:"p"},"always")," expects a new source object as a parameter. "),(0,r.yg)("p",null,"As you may notice this object is similar to the structure of the ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," object you are using to set up the player. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example single stream source:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'var source = {\n    "entries": [ // array of \'entry\' objects\n        {\n            "index": 0,\n            "label": "high",\n            "tag": "this is a single entry high quality stream",\n            "info": {\n                "bitrate": 1200,\n                "width": 1280,\n                "height": 720,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY0"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        }\n    ]\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example multi stream source object with ABR:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'var source = {\n    "entries": [ // array of \'entry\' objects\n        {\n            "index": 0,\n            "label": "high",\n            "tag": "this is a high quality stream",\n            "info": {\n                "bitrate": 1200,\n                "width": 1280,\n                "height": 720,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY0"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        },\n        {\n            "index": 1,\n            "label": "medium",\n            "tag": "this is a medium quality stream",\n            "info": {\n                "bitrate": 800,\n                "width": 864,\n                "height": 480,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY1"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        },\n        {\n            "index": 2,\n            "label": "low",\n            "tag": "this is a low quality stream",\n            "info": {\n                "bitrate": 400,\n                "width": 426,\n                "height": 240,\n                "framerate": 15\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY2"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        }\n    ],\n    "options": {\n        "adaption": {\n            "rule": "deviationOfMean" // enable ABR\n        },\n        "switch": {\n            \'method\': \'server\',\n            \'pauseOnError\': false,\n            \'forcePlay\': true,\n            \'fastStart\': false,\n            \'timeout\': 10,\n        }\n    },\n    "startIndex": 2 // lowest\n}\n')),(0,r.yg)("h2",{id:"updatesource-api"},"updateSource API"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example updateSource call:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'var source = {\n    "entries": [ // array of \'entry\' objects\n        {\n            "index": 0,\n            "label": "high",\n            "tag": "this is a single entry high quality stream",\n            "info": {\n                "bitrate": 1200,\n                "width": 1280,\n                "height": 720,\n                "framerate": 30\n            },\n            "hls": "",\n            "h5live": {\n                "rtmp": {\n                    "url": "rtmp://bintu-play.nanocosmos.de/play",\n                    "streamname": "XXXXX-YYYY0"\n                },\n                "server": {\n                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                },\n                "token": "",\n                "security": {}\n            },\n            "bintu": {}\n        }\n    ]\n}\n\n// player instance\nplayer.updateSource(source).then(function(config) {\n    console.log(\'update source ok with config: \' + JSON.stringify(config));\n}, function(error) {\n    console.log(error);\n});\n')),(0,r.yg)("h2",{id:"updatesource-events"},"updateSource Events"),(0,r.yg)("p",null,"With the release of the ",(0,r.yg)("inlineCode",{parentName:"p"},"updateSource")," method there are also ",(0,r.yg)("strong",{parentName:"p"},"4")," events you should keep in mind:"),(0,r.yg)("h3",{id:"start-event"},"Start Event"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceInit"},"onUpdateSourceInit")),": This event signals an initialized update source request. This always ",(0,r.yg)("strong",{parentName:"li"},"only")," a start event! Another completion event will follow.")),(0,r.yg)("h3",{id:"completion-events"},"Completion Events"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"/docs/nanoplayer/nanoplayer_api#onupdatesourcesuccess"},"onUpdateSourceSuccess")),": This event signals a successful update source request and fires if the source is updated. "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceSuccess"},"onUpdateSourceFail")),": This event signals a failed update source request. Fired if an error occurs during the source update."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceAbort"},"onUpdateSourceAbort")),": This event signals an aborted update source request. Possible reasons are an equal source (",(0,r.yg)("strong",{parentName:"li"},"'equalsource'"),"), a superseding (",(0,r.yg)("strong",{parentName:"li"},"'superseded'"),") or the time difference between two following ",(0,r.yg)("inlineCode",{parentName:"li"},"updateSource")," calls that is too small  (",(0,r.yg)("strong",{parentName:"li"},"'frequency'"),"). ")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Also, keep in mind...")," there will be an ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"./nanoplayer_api#NanoPlayer..event_onStreamInfo"},"onStreamInfo"))," event indicating that the first image of the new stream is getting played out."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"mdxAdmonitionTitle"},"Note:")," "),(0,r.yg)("p",{parentName:"admonition"},"You can find more specific information on all player events ",(0,r.yg)("a",{parentName:"p",href:"./nanoplayer_api#NanoPlayer..event_onUpdateSourceInit"},"here"),".")))}m.isMDXComponent=!0}}]);