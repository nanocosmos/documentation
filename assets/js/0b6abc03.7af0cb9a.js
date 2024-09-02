"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[484],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>g});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),u=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=t,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return r?a.createElement(g,s(s({ref:n},d),{},{components:r})):a.createElement(g,s({ref:n},d))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:t,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79023:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(58168),t=(r(96540),r(15680));const i={id:"nanoplayer_feature_source_defaults",title:"Source defaults",sidebar_label:"Source defaults"},s=void 0,o={unversionedId:"nanoplayer/nanoplayer_feature_source_defaults",id:"nanoplayer/nanoplayer_feature_source_defaults",title:"Source defaults",description:"Using source defaults with standard nanoStream Cloud",source:"@site/docs/nanoplayer/nanoplayer_feature_source_defaults.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_source_defaults",permalink:"/docs/nanoplayer/nanoplayer_feature_source_defaults",draft:!1,tags:[],version:"current",lastUpdatedAt:1725278726,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"nanoplayer_feature_source_defaults",title:"Source defaults",sidebar_label:"Source defaults"},sidebar:"H5Live Player",previous:{title:"Media Error Recovery",permalink:"/docs/nanoplayer/nanoplayer_feature_media_error_recovery"},next:{title:"Video Access and Processing",permalink:"/docs/nanoplayer/nanoplayer_feature_video_access_and_processing"}},l={},u=[{value:"Using source defaults with standard nanoStream Cloud",id:"using-source-defaults-with-standard-nanostream-cloud",level:2},{value:"Adding the <code>defaults.service</code> to the config",id:"adding-the-defaultsservice-to-the-config",level:3},{value:"Config example with service defaults",id:"config-example-with-service-defaults",level:4},{value:"Config example without service defaults",id:"config-example-without-service-defaults",level:4},{value:"Using source defaults in combination with custom server or RTMP urls",id:"using-source-defaults-in-combination-with-custom-server-or-rtmp-urls",level:4},{value:"Config example using service defaults and custom RTMP urls",id:"config-example-using-service-defaults-and-custom-rtmp-urls",level:4},{value:"Config example using service defaults and custom server urls",id:"config-example-using-service-defaults-and-custom-server-urls",level:4},{value:"Applying a custom h5live server domain",id:"applying-a-custom-h5live-server-domain",level:2},{value:"Config example using service defaults, custom h5live server domain and RTMP streamname",id:"config-example-using-service-defaults-custom-h5live-server-domain-and-rtmp-streamname",level:4},{value:"Config example using custom h5live server domain and bintu stream id:",id:"config-example-using-custom-h5live-server-domain-and-bintu-stream-id",level:4}],d={toc:u},c="wrapper";function p(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"using-source-defaults-with-standard-nanostream-cloud"},"Using source defaults with standard nanoStream Cloud"),(0,t.yg)("p",null,"Introduced in ",(0,t.yg)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.13.0"),", source defaults make the configuration easier. In prior versions the configuration via RTMP url and stream name required the definition of ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.server")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.rtmp.url"),". If ",(0,t.yg)("inlineCode",{parentName:"p"},"source.defaults.service")," is set, the ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.server")," object and the ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.rtmp.url")," in each entry can be omitted now. In this case defaults will be applied internally. Values for ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.server")," and/or ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.rtmp.url")," that are defined explicitly in a stream entry have priority.   "),(0,t.yg)("p",null,"Assign ",(0,t.yg)("inlineCode",{parentName:"p"},"'bintu'")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"defaults.service")," for using the standard nanoStream Cloud.  "),(0,t.yg)("p",null,"The source defaults support both: standard and secure stream playback. "),(0,t.yg)("p",null,"Additionally, it is not mutually exclusive with custom server/rtmp - setting the defaults service does not overwrite explicitly defined values for ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.server")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.rtmp.url"),". In a nutshell, in case some value is missing in i.e. ",(0,t.yg)("inlineCode",{parentName:"p"},"h5live.server")," object, the default one is used in this place but without interfering with other parameters that were given."),(0,t.yg)("h3",{id:"adding-the-defaultsservice-to-the-config"},"Adding the ",(0,t.yg)("inlineCode",{parentName:"h3"},"defaults.service")," to the config"),(0,t.yg)("p",null,"At the moment the available service is ",(0,t.yg)("inlineCode",{parentName:"p"},"'bintu'")," for using the standard nanoStream Cloud. Pass the ",(0,t.yg)("inlineCode",{parentName:"p"},"defaults")," object with nested ",(0,t.yg)("inlineCode",{parentName:"p"},"'service' : 'bintu'")," in the ",(0,t.yg)("inlineCode",{parentName:"p"},"source")," and that's all you need to do:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"'config': {\n    'source': {\n        'defaults': {\n            'service': 'bintu'\n        },\n        ...\n    },\n    ...\n}\n")),(0,t.yg)("h4",{id:"config-example-with-service-defaults"},"Config example with service defaults"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript",metastring:"{4} showLineNumbers","{4}":!0,showLineNumbers:!0},'var config = {\n        "source": {\n            "defaults": {\n                "service": "bintu"\n            },\n            "entries": [\n                    {\n                        "h5live": {\n                             // your rtmp streamname\n                            "rtmp": {\n                                "streamname": "XXXXX-YYYYY"\n                            }\n                        }\n                    }\n            ]\n        }\n    };\n')),(0,t.yg)("h4",{id:"config-example-without-service-defaults"},"Config example without service defaults"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},'var config = {\n        "source": {\n            "entries": [\n                    {\n                        "h5live": {\n                             // your rtmp stream\n                            "rtmp": {\n                                "url": "rtmp://bintu-play.nanocosmos.de/play",\n                                "streamname": "XXXXX-YYYYY"\n                            },\n                            "server": {\n                                "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",\n                                "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",\n                                "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"\n                            }\n                        }\n                    }\n            ]\n        }\n    };\n')),(0,t.yg)("h4",{id:"using-source-defaults-in-combination-with-custom-server-or-rtmp-urls"},"Using source defaults in combination with custom server or RTMP urls"),(0,t.yg)("p",null,"Of course it is possible. The service works like a simplified backup for your configuration.\nDefault service fills up gaps for params that were not given, however, it doesn't overwrite already passed values of your i.e. server or rtmp."),(0,t.yg)("h4",{id:"config-example-using-service-defaults-and-custom-rtmp-urls"},"Config example using service defaults and custom RTMP urls"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript",metastring:"{11-12} showLineNumbers","{11-12}":!0,showLineNumbers:!0},'var config = {\n        "source": {\n            "defaults": {\n                "service": "bintu"\n            },\n            "entries": [\n                    {\n                        "h5live": {\n                             // your rtmp stream\n                            "rtmp": {\n                                "url": "rtmp://[your_path]",\n                                "streamname": "XXXXX-YYYYY"\n                            }\n                        }\n                    }\n            ]\n        }\n    };\n')),(0,t.yg)("h4",{id:"config-example-using-service-defaults-and-custom-server-urls"},"Config example using service defaults and custom server urls"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript",metastring:"{4,14-16} showLineNumbers","{4,14-16}":!0,showLineNumbers:!0},'var config = {\n        "source": {\n            "defaults": {\n                "service": "bintu"\n            },\n            "entries": [\n                    {\n                        "h5live": {\n                             // your rtmp stream\n                            "rtmp": {\n                                "streamname": "XXXXX-YYYYY"\n                             },\n                            "server": {\n                                "websocket": "wss://[your_path]",\n                                "hls": "https://[your_path]",\n                                "progressive": "https://[your_path]"\n                            }\n                        }\n                    }\n            ]\n        }\n    };\n')),(0,t.yg)("h2",{id:"applying-a-custom-h5live-server-domain"},"Applying a custom h5live server domain"),(0,t.yg)("p",null,"Introduced in ",(0,t.yg)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.16.0")," the general h5live server domain makes the ",(0,t.yg)("inlineCode",{parentName:"p"},"source.defaults")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"bintu.streamid")," configuration more flexible. These configurations are using standard geo-loadbalanced domains by default. Due to the fact, that general server domain has the highest priority, it will override (modify) all h5live server domains. To use it, it is necessary to add ",(0,t.yg)("inlineCode",{parentName:"p"},"config.source.general.serverDomain")," with its value, i.e ",(0,t.yg)("inlineCode",{parentName:"p"},"bintu-play-eu.nanocosmos.de"),". Please find the list here: ",(0,t.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/cloud/support#geo-region-override"},"nanoStream Cloud Public Standard and geo-loadbalanced URLs"),"."),(0,t.yg)("h4",{id:"config-example-using-service-defaults-custom-h5live-server-domain-and-rtmp-streamname"},"Config example using service defaults, custom h5live server domain and RTMP streamname"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},'var config = {\n        "source": {\n            "defaults": {\n                "service": "bintu"\n            },\n            "general": {\n                "serverDomain": "bintu-play-eu.nanocosmos.de"\n            },\n            "entries": [\n                {\n                    "h5live": {\n                        // your rtmp stream\n                        "rtmp": {\n                            "streamname": "XXXXX-YYYYY"\n                        }\n                    }\n                }\n            ]\n        }\n    };\n')),(0,t.yg)("h4",{id:"config-example-using-custom-h5live-server-domain-and-bintu-stream-id"},"Config example using custom h5live server domain and bintu stream id:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'var config = {\n        "source": {\n            "general": {\n                "serverDomain": "bintu-play-eu.nanocosmos.de"\n            },\n            "entries": [\n                {\n                    // your bintu stream id\n                    "bintu": {\n                        "streamid": "XXXX-YYYY-ZZZZ-AAAA-BBBB"\n                    }\n                }\n            ]\n        }\n    };\n')),(0,t.yg)("admonition",{title:"More about the player configuration",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"Please check examples on how to configure the player at the ",(0,t.yg)("a",{parentName:"p",href:"./nanoplayer_getting_started"},"Getting started")," section.")))}p.isMDXComponent=!0}}]);