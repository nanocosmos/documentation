"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7604],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={id:"nanoplayer_getting_started",title:"Getting started",sidebar_label:"Getting started"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_getting_started",id:"nanoplayer/nanoplayer_getting_started",title:"Getting started",description:"Embedding H5Live player on your own web page",source:"@site/docs/nanoplayer/nanoplayer_getting_started.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_getting_started",permalink:"/docs/nanoplayer/nanoplayer_getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"nanoplayer_getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"H5Live Player",previous:{title:"Introduction",permalink:"/docs/nanoplayer/nanoplayer_introduction"},next:{title:"Supported Browsers",permalink:"/docs/nanoplayer/nanoplayer_supported_browsers"}},p={},s=[{value:"Embedding H5Live player on your own web page",id:"embedding-h5live-player-on-your-own-web-page",level:2},{value:"Option 1: Configuration with bintu stream group",id:"option-1-configuration-with-bintu-stream_group",level:3},{value:"Option 2: Simple configuration with RTMP streamname",id:"option-2-simple-configuration-with-RTMP-streamname",level:3},{value:"Option 3: Custom configuration with RTMP streamname",id:"option-3-custom-configuration-with-RTMP-streamname",level:3},{value:"Option 4: Configuration with bintu stream id",id:"option-4-configuration-with-bintu-stream-id",level:3},{value:"Frameworks",id:"frameworks",level:2},{value:"Vue.js",id:"vuejs",level:3},{value:"React.js",id:"reactjs",level:3},{value:"Configuration steps",id:"configuration-steps",level:3},{value:"Wordpress",id:"wordpress",level:2}],m={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"embedding-h5live-player-on-your-own-web-page"},"Embedding H5Live player on your own web page"),(0,r.kt)("p",null,"There are a few options when it comes to implementing H5Live player on your web page depending on your needs, we will walk you through each of them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basically, there are 4 options for configuration:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#option-1-configuration-with-bintu-stream_group"},(0,r.kt)("strong",{parentName:"a"},"Configuration with bintu stream group (since v4.18.0)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#option-2-simple-configuration-with-RTMP-streamname"},(0,r.kt)("strong",{parentName:"a"},"Simple configuration with RTMP streamname (since v4.13.0)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#option-3-custom-configuration-with-RTMP-streamname"},(0,r.kt)("strong",{parentName:"a"},"Custom configuration with RTMP streamname"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#option-4-configuration-with-bintu-stream-id"},(0,r.kt)("strong",{parentName:"a"},"Configuration with bintu stream id")))),(0,r.kt)("h3",{id:"option-1-configuration-with-bintu-stream_group"},"Option 1: Configuration with bintu stream group"),(0,r.kt)("p",null,"Bintu stream group configuration was introduced in ",(0,r.kt)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.18.0")," and is available a single and multiple streams. It is the easiest player configuration available especially for ABR setup.\nFor more than one stream it is necessary to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"'startIndex'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'group.startQuality'"),". "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More information about stream group configuration, can be found in the feature description: ",(0,r.kt)("a",{parentName:"p",href:"./nanoplayer_feature_stream_group_configuration"},"Stream group configuration"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="nanoplayer.html" live',title:'"nanoplayer.html"',live:!0},"<div id='playerDiv'></div>\n<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.18.0.min.js'><\/script>\n<script>\nvar player;\nvar config = {\n   'source': {\n        'group': {\n            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your streamgroup id\n            'security': {\n                'jwtoken': 'xxx' // your security token if applicable\n            },\n            'apiurl': 'https://bintu.nanocosmos.de', // optional\n            'startQuality': 'medium' // optional\n        },\n         \"options\": {\n            \"adaption\": {\n                \"rule\": \"deviationOfMean2\" // enable ABR\n            },\n            \"switch\": {\n                'method': 'server',\n                'pauseOnError': false,\n                'forcePlay': true,\n                'fastStart': false,\n                'timeout': 10,\n            }\n        },\n    },\n    'playback': {\n        'autoplay': true,\n        'automute': true,\n        'muted': false\n    }\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n    player = new NanoPlayer('playerDiv');\n    player.setup(config).then(function (config) {\n        console.log('setup success');\n        console.log('config: ' + JSON.stringify(config, undefined, 4));\n    }, function (error) {\n        alert(error.message);\n    });\n});\n<\/script>\n")),(0,r.kt)("h3",{id:"option-2-simple-configuration-with-RTMP-streamname"},"Option 2: Simple configuration with RTMP streamname"),(0,r.kt)("p",null,"Using source defaults with standard nanoStream Cloud was introduced in ",(0,r.kt)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.13.0"),". By passing ",(0,r.kt)("inlineCode",{parentName:"p"},"defaults.service")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"'bintu'"),", the bintu defaults values for ",(0,r.kt)("inlineCode",{parentName:"p"},"h5live.server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"h5live.rtmp.url")," will be applied which means that adding it on your side is not needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="nanoplayer.html"',title:'"nanoplayer.html"'},"<div id='playerDiv'></div>\n<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n<script>\nvar player;\nvar config = {\n   'source': {\n            'defaults': {\n                'service': 'bintu'\n            },\n            'entries': [\n                    {\n                        'h5live': {\n                            'rtmp': {\n                                'streamname': 'XXXXX-YYYYY' // your rtmp streamname\n                            }\n                        }\n                    }\n            ]\n        },\n    'playback': {\n        'autoplay': true,\n        'automute': true,\n        'muted': false\n    },\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n    player = new NanoPlayer('playerDiv');\n    player.setup(config).then(function (config) {\n        console.log('setup success');\n        console.log('config: ' + JSON.stringify(config, undefined, 4));\n    }, function (error) {\n        alert(error.message);\n    });\n});\n<\/script>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The configuration with ",(0,r.kt)("inlineCode",{parentName:"p"},"source.defaults.service")," allows for combinations with custom server or RTMP urls. More examples and full documentation of the source defaults feature can be found here: ",(0,r.kt)("a",{parentName:"p",href:"./nanoplayer_feature_source_defaults"},"Source defaults"),".")),(0,r.kt)("h3",{id:"option-3-custom-configuration-with-RTMP-streamname"},"Option 3: Custom configuration with RTMP streamname"),(0,r.kt)("p",null,"In most cases the simple RTMP configuration is sufficient but in case of enhanced flexibility needed or usage of older version of nanoplayer (until 4.13.0), this is a recommended configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="nanoplayer.html"',title:'"nanoplayer.html"'},"<div id='playerDiv'></div>\n<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n<script>\nvar player;\nvar streamName = 'XXXXX-YYYYY'; // your bintu stream name (not the stream ID)\nvar config = {\n    'source': {\n        'entries': [\n            {\n                'h5live': {\n                    'rtmp': {\n                        'url': 'rtmp://bintu-play.nanocosmos.de:80/play',\n                        'streamname': streamName\n                    },\n                    'server': {\n                        'websocket': 'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',\n                        'hls': 'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',\n                        'progressive': 'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4'\n                    }\n                }\n            }\n        ]\n    },\n    'playback': {\n        'autoplay': true,\n        'automute': true,\n        'muted': false\n    },\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n    player = new NanoPlayer('playerDiv');\n    player.setup(config).then(function (config) {\n        console.log('setup success');\n        console.log('config: ' + JSON.stringify(config, undefined, 4));\n    }, function (error) {\n        alert(error.message);\n    });\n});\n<\/script>\n")),(0,r.kt)("h3",{id:"option-4-configuration-with-bintu-stream-id"},"Option 4: Configuration with bintu stream id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<div id='playerDiv'></div>\n<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n<script>\nvar player;\nvar streamId = '1111-2222-3333-4444-5555'; // your bintu stream ID (not the stream name)\nvar config = {\n    'source': {\n        'entries': [\n            {\n                'bintu': {\n                    'streamid': streamId\n                }\n            }\n        ]\n    },\n    'playback': {\n        'autoplay': true,\n        'automute': true,\n        'muted': false\n    }\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n    player = new NanoPlayer('playerDiv');\n    player.setup(config).then(function (config) {\n        console.log('setup success');\n        console.log('config: ' + JSON.stringify(config, undefined, 4));\n    }, function (error) {\n        alert(error.message);\n    });\n});\n<\/script>\n")),(0,r.kt)("h2",{id:"frameworks"},"Frameworks"),(0,r.kt)("h3",{id:"vuejs"},"Vue.js"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Useful link:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nanocosmos/nanoplayer-vuejs-sample"},"GitHub repository"))),(0,r.kt)("p",null,"Embedding the H5LivePlayer in your Vue.js project is simple:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"nanoplayer.4.min.js")," script within your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n")),(0,r.kt)("p",{parentName:"li"},"Example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<!DOCTYPE html>\n<html>\n<head>\n    <meta charset='utf-8'>\n    <meta name='viewport' content='width=device-width,initial-scale=1.0'>\n    <title>h5-live-player</title>\n    <script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n</head>\n<body>\n    <div id='app'></div>\n</body>\n</html>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new Vue Component with a simple div as a placeholder that will contain player the content."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<div id='playerDiv'></div>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a new variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"data() method")," inside your component"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"}," export default {\n     data() {\n         return {\n             'config': {\n                 'source': {\n                     'defaults': {\n                         'service': 'bintu'\n                     },\n                     'entries': [\n                         {\n                             'h5live': {\n                                 'rtmp': {\n                                     'streamname': 'XXXXX-YYYYY' // your rtmp streamname\n                                 }\n                             }\n                         }\n                     ]\n                 },\n                 'playback': {\n                     'autoplay': true,\n                     'automute': true,\n                     'muted': false\n                 }\n             }\n         }\n     }\n }\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Instantiate the NanoPlayer inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"mounted()")," lifecycle hook"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default {\n    data() { ... },\n    mounted: function(){\n        var nanoPlayer = new window.NanoPlayer('playerDiv');\n        nanoPlayer.setup(this.config).then(function (config) {\n            console.log('setup success');\n            console.log('config: ' + JSON.stringify(config, undefined, 4));\n        }, function (error) {\n            alert(error.message);\n        });\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},"Now you should see the player running in your browser's window."))),(0,r.kt)("h3",{id:"reactjs"},"React.js"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Useful links:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanocosmos/nanoplayer-react-sample.git"},"GitHub repository"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://demo.nanocosmos.de/nanoplayer/react/"},"Sample app")))),(0,r.kt)("h3",{id:"configuration-steps"},"Configuration steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import your minified nanoplayer version within your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<script  src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n")),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<!DOCTYPE html>\n<html>\n<head>\n    <meta charset='utf-8' />\n    <meta name='viewport' content='width=device-width, initial-scale=1' />\n    <script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n    <title>H5Live Player</title>\n</head>\n<body>\n    <div id='root'></div>\n</body>\n</html>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a React Component with a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," tag, to create an entry point for the player"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<div id='playerDiv' />\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," object to your ",(0,r.kt)("inlineCode",{parentName:"p"},"state")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let config = {\n    'source': {\n        'defaults': {\n            'service': 'bintu'\n        },\n        'entries': [\n                {\n                    'h5live': {\n                        'rtmp': {\n                            'streamname': 'XXXXX-YYYYY' // your rtmp streamname\n                        }\n                    }\n                }\n        ]\n    },\n    'playback': {\n        'autoplay': true,\n        'automute': true,\n        'muted': false\n    }\n};\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup the player"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function setupNanoplayer(config) {\n    var nanoPlayer = new window.NanoPlayer('playerDiv');\n\n    nanoPlayer.setup(config).then(function (config) {\n        console.log('setup success');\n        console.log('config: ' + JSON.stringify(config, undefined, 4));\n    }, function (error) {\n        alert(error.message);\n    });\n};\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you are using React Hooks, initialize the setup like this:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n    setupNanoplayer(config);\n}, [])\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you are not using React Hooks, initialize the setup like this:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n    setupNanoplayer(this.state.config);\n}\n")))),(0,r.kt)("h2",{id:"wordpress"},"Wordpress"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a block and choose Custom HTML")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Embed the Player"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It is important to add a wrapper around the ",(0,r.kt)("inlineCode",{parentName:"li"},"playerDiv")," element, otherwise you won't see the nanoStream H5Live Player")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'><\/script>\n<div style='width: 480px; height: 360px; overflow: hidden; position: absolute; margin: 0; padding: 0;'>\n<div id='playerDiv'></div>\n</div>\n\n<script>\n        var player;\n        var streamName = 'XXXXX-YYYYY'; // your bintu stream name (not the stream ID)\n        var config = {\n            'source': {\n                'defaults': {\n                    'service': 'bintu'\n                },\n                'entries': [\n                    {\n                        'h5live': {\n                            'rtmp': {\n                                'streamname': 'XXXXX-YYYYY' // your rtmp streamname\n                            }\n                        }\n                    }\n                ]\n            },\n            'playback': {\n                'autoplay': true,\n                'automute': true,\n                'muted': false\n            }\n        };\n        player = new NanoPlayer('playerDiv');\n        player.setup(config).then(function (config) {\n            console.log('setup success');\n            console.log('config: ' + JSON.stringify(config, undefined, 4));\n        }, function (error) {\n            alert(error.message);\n        });\n<\/script>\n")))),(0,r.kt)("admonition",{title:"More Information",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Find a product overview and live demo ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/h5live"},"here"),". ",(0,r.kt)("br",null),"\nOur API documentation can be found ",(0,r.kt)("a",{parentName:"p",href:"./nanoplayer_api"},"here"),".")),(0,r.kt)("admonition",{title:"Questions?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For business related questions reach out to our dedicated sales team via the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"For technical questions you can use our ",(0,r.kt)("a",{parentName:"strong",href:"https://www.nanocosmos.de/support"},"support form"),"."))))}c.isMDXComponent=!0}}]);