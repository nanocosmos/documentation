"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1121],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||y[m]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={id:"nanoplayer_feature_security_sts",title:"Secure playback with STS tokens"},i=void 0,l={unversionedId:"nanoplayer/nanoplayer_feature_security_sts",id:"nanoplayer/nanoplayer_feature_security_sts",title:"Secure playback with STS tokens",description:"Signing URLs",source:"@site/docs/nanoplayer/nanoplayer_feature_security_sts.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_security_sts",permalink:"/docs/nanoplayer/nanoplayer_feature_security_sts",draft:!1,tags:[],version:"current",lastUpdatedAt:1714646189,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{id:"nanoplayer_feature_security_sts",title:"Secure playback with STS tokens"}},s={},p=[{value:"Signing URLs",id:"signing-urls",level:2},{value:"Available Parameters",id:"available-parameters",level:3},{value:"Generate a token ...",id:"generate-a-token-",level:3},{value:"(a) ...with a Bintu stream name, custom tag, and an expiration date in the future",id:"a-with-a-bintu-stream-name-custom-tag-and-an-expiration-date-in-the-future",level:3},{value:"(b) ...with a Bintu orga hash, custom tag, and an expiration date in the future",id:"b-with-a-bintu-orga-hash-custom-tag-and-an-expiration-date-in-the-future",level:3},{value:"(c) ...with a client IP",id:"c-with-a-client-ip",level:3},{value:"(d) ...with a custom tag and a referer",id:"d-with-a-custom-tag-and-a-referer",level:3},{value:"Verifying playbacks",id:"verifying-playbacks",level:2},{value:"Integrating secure H5Live player configuration with STS token",id:"integrating-secure-h5live-player-configuration-with-sts-token",level:2},{value:"Update secure tokens during playback",id:"update-secure-tokens-during-playback",level:2},{value:"Using secure tokens for ABR",id:"using-secure-tokens-for-abr",level:2}],u={toc:p},c="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"signing-urls"},"Signing URLs"),(0,r.yg)("h3",{id:"available-parameters"},"Available Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"expires"),": Expiration date in seconds as ",(0,r.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix time format"),". The token will be only valid until the given expiration date. A token is only validated when a stream playback is started or a reconnect happens. So if there is no reconnect, the stream playback continues even if the token expires during the playback."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"referer"),": A domain name. Can be used to restrict a token to a specific domain, e.g. ",(0,r.yg)("inlineCode",{parentName:"li"},"demo.nanocosmos.de"),". Notice that wildcards (",(0,r.yg)("inlineCode",{parentName:"li"},"*"),") are currently not supported."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"tag"),": A tag is just a custom string which will be included into a token. It is a customer's responsibility to manage the tags included into the tokens. We do not store them anywhere on our side.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Sample use case: track which tokens were generated for a customer ID"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Bintu stream name"),": The stream name, which is managed by ",(0,r.yg)("a",{parentName:"li",href:"../cloud/bintu_api"},"Bintu"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Bintu orga hash"),": The hash of your ",(0,r.yg)("a",{parentName:"li",href:"../cloud/bintu_api"},"Bintu")," organization. It is possible to generate a token which is valid for all streams of an organization.")),(0,r.yg)("h3",{id:"generate-a-token-"},"Generate a token ..."),(0,r.yg)("admonition",{title:"Attention",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The expiration date time for the parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"expires")," is expected to be in ",(0,r.yg)("strong",{parentName:"p"},"SECONDS"),". Using milliseconds will lead to expiration dates far in the future and won't be accepted by the token generation API!")),(0,r.yg)("h3",{id:"a-with-a-bintu-stream-name-custom-tag-and-an-expiration-date-in-the-future"},"(a) ...with a Bintu stream name, custom tag, and an expiration date in the future"),(0,r.yg)("p",null,"Test data (additional):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Expires: 1591747200 = 06/10/2020 @ 12:00am (UTC) ",(0,r.yg)("strong",{parentName:"li"},"[expiration date and time in SECONDS in Unix time format and UTC; cannot be in the past or more than 365 days in the future]"))),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Request:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\\"streamname\\": \\"[your Bintu stream name]\\", \\"tag\\": \\"[your custom tag]\\", \\"expires\\": \\"1591747200\\"}"\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Response:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "h5live": {\n        "security": {\n            "expires": "1591747200",\n            "tag": "[your custom tag]",\n            "token": "[your token will be here]",\n            "options": "9"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"b-with-a-bintu-orga-hash-custom-tag-and-an-expiration-date-in-the-future"},"(b) ...with a Bintu orga hash, custom tag, and an expiration date in the future"),(0,r.yg)("p",null,"Test data (additional):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Expires: 1591747200 = 06/10/2020 @ 12:00am (UTC) ",(0,r.yg)("strong",{parentName:"li"},"[expiration date and time in SECONDS in Unix time format and UTC; cannot be in the past or more than 365 days in the future]"))),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Request:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\\"orga\\": \\"[your Bintu orga hash]\\", \\"tag\\": \\"[your custom tag]\\", \\"expires\\": \\"1591747200\\"}"\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Response:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "h5live": {\n        "security": {\n            "expires": "1591747200",\n            "tag": "[your custom tag]",\n            "token": "[your token will be here]",\n            "options": "25"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"c-with-a-client-ip"},"(c) ...with a client IP"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Request:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\\"streamname\\": \\"[your Bintu stream name]\\", \\"ip\\": \\"[your client ip]\\"}"\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Response:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "h5live": {\n        "security": {\n            "expires": "",\n            "tag": "",\n            "token": "[your token will be here]",\n            "options": "2"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"d-with-a-custom-tag-and-a-referer"},"(d) ...with a custom tag and a referer"),(0,r.yg)("p",null,"Test data (additional): "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Referer: ",(0,r.yg)("inlineCode",{parentName:"li"},"demo.nanocosmos.de [a valid referer is a domain name which meets the requirement below]"))),(0,r.yg)("p",null,"Referer requirements:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The full domain name may not exceed the length of 253 characters (including delimiting dots, but not a trailing dot) in its textual representation."),(0,r.yg)("li",{parentName:"ul"},"The domain name part may contain from 1 to 63 characters."),(0,r.yg)("li",{parentName:"ul"},"The domain name may contain: a-z | A-Z | 0-9, periods (.), and hyphens (-)."),(0,r.yg)("li",{parentName:"ul"},"The domain name may have a trailing period (.), the root domain."),(0,r.yg)("li",{parentName:"ul"},"The domain name should not start or end with a hyphen (-)."),(0,r.yg)("li",{parentName:"ul"},"The top-level domain (TLD) should not include digits only.")),(0,r.yg)("p",null,"Valid referers (examples):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"nanocosmos.de"),(0,r.yg)("li",{parentName:"ul"},"demo.nanocosmos.de"),(0,r.yg)("li",{parentName:"ul"},"demo-nanocosmos123.de")),(0,r.yg)("p",null,"Invalid referers (examples):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://demo.nanocosmos.de"},"https://demo.nanocosmos.de")," - Cannot include a protocol"),(0,r.yg)("li",{parentName:"ul"},"nanocosmos.de/nanoplayer - Cannot include a resource ID (\u201c/nanoplayer\u201d)"),(0,r.yg)("li",{parentName:"ul"},"nanocosmos - Must include a TLD")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Request"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\\"streamname\\": \\"[your Bintu stream name]\\", \\"tag\\": \\"[your custom tag]\\", \\"referer\\": \\"demo.nanocosmos.de\\"}"\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Response"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "h5live": {\n        "security": {\n            "expires": "",\n            "tag": "[your custom tag]",\n            "token": "[your token will be here]",\n            "options": "12"\n        }\n    }\n}\n')),(0,r.yg)("h2",{id:"verifying-playbacks"},"Verifying playbacks"),(0,r.yg)("p",null,"To test that a token works as expected you can either configure the token parameters in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/nanoplayer/nanoplayer_feature_stream_switching#single-stream-configuration"},"player configuration"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'"security": {\n    "expires": "[your expire date]",\n    "tag": "[your custom tag]",\n    "token": "[your token]",\n    "options": "[your option]"\n}\n')),(0,r.yg)("p",null,"or use URL parameters - you have to replace the highlighted parameter values with your specific values:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server.websocket=wss://bintu-splay.nanocosmos.de/h5live/authstream&h5live.server.hls=https://bintu-splay.nanocosmos.de/h5live/authhttp/playlist.m3u8&h5live.rtmp.url=rtmp://bintu-splay.nanocosmos.de/splay&h5live.rtmp.streamname=<b>[your Bintu stream name]</b>&h5live.security.expires=<b>[expires from response]</b>&h5live.security.tag=<b>[tag from response]</b>&h5live.security.token=<b>[token from response]</b>&h5live.security.options=<b>[options from response]</b>")),(0,r.yg)("admonition",{title:"Explanation",type:"info"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Step 2 (a): the URL hasn\u2019t expired yet, so the playback works for a particular stream."),(0,r.yg)("li",{parentName:"ul"},"Step 2 (b): the URL hasn\u2019t expired yet, so the playback works for all the stream for a particular Bintu orga hash."),(0,r.yg)("li",{parentName:"ul"},"Step 2 (c): the playback only works for a specified client ip."),(0,r.yg)("li",{parentName:"ul"},"Step 2 (d): the referrer is demo.nanocosmos.de, so the playback works."))),(0,r.yg)("p",null,"To verify that the playback doesn't work with an incorrect referrer,\ncopy the H5Live player code snippet to an ",(0,r.yg)("inlineCode",{parentName:"p"},".html")," file on a different domain.\nTry to playback the stream from the newly created web page."),(0,r.yg)("admonition",{title:"Explanation",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The referrer is not ",(0,r.yg)("inlineCode",{parentName:"p"},"demo.nanocosmos.de"),", so the playback doesn\u2019t work.")),(0,r.yg)("h2",{id:"integrating-secure-h5live-player-configuration-with-sts-token"},"Integrating secure H5Live player configuration with STS token"),(0,r.yg)("p",null,"Here are example code snippets to test the H5Live player with secure tokens."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Refer to the detailed example code in ",(0,r.yg)("a",{parentName:"p",href:"/docs/nanoplayer/nanoplayer_getting_started"},"Embedding H5Live player on your own web page")," and modify the relevant sections to include playback security.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<div id="playerDiv"></div>\n<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20200806"><\/script>\n<script>\nvar player;\nvar streamName = "XXXXX-YYYYY"; // your stream name (NOT the bintu stream ID)\nvar config = {\n    "source": {\n        "entries": [\n            {\n                "h5live": {\n                    "rtmp": {\n                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",\n                        "streamname": streamName\n                    },\n                    "server": {\n                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de/h5live/authstream",\n                        "hls": "https://bintu-h5live-secure.nanocosmos.de/h5live/authhttp/playlist.m3u8"\n                    },\n                    "security": {\n                        "expires": "[your expiry date]",\n                        "tag": "[your custom tag]",\n                        "token": "[your token]",\n                        "options": "[your option]"             \n                    }                    \n                }                \n            }\n        ]\n    },\n    "playback": {\n        "autoplay": true,\n        "automute": true,\n        "muted": true\n    },\n    "style": {\n        "displayMutedAutoplay": true\n    }\n};\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n    player = new NanoPlayer("playerDiv");\n    player.setup(config).then(function (config) {\n        console.log("setup success");\n        console.log("config: " + JSON.stringify(config, undefined, 4));\n    }, function (error) {\n        alert(error.message);\n    });\n});\n<\/script>\n')),(0,r.yg)("h2",{id:"update-secure-tokens-during-playback"},"Update secure tokens during playback"),(0,r.yg)("p",null,"It is also possible to update an expiring secure token for a client, with a new token, during the playback of the stream via the ",(0,r.yg)("a",{parentName:"p",href:"nanoplayer_update_source"},"updateSource")," method.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"updateSource")," method always expects a new source object as a parameter. As you may notice this object is similar to the structure of the config object you are using to set up the player."),(0,r.yg)("p",null,"If you are using the: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"nanoplayer_feature_stream_switching/#example-new-single-stream-configuration"},"new single / multi stream configuration notation"),":\nonly change the ",(0,r.yg)("inlineCode",{parentName:"li"},"security")," object inside the desired ",(0,r.yg)("inlineCode",{parentName:"li"},"entry")," object (e.g. for the first entry: ",(0,r.yg)("inlineCode",{parentName:"li"},"config.source.entries[0].h5live.security = { YOUR CHANGED SECURITY DETAILS FOR FIRST ENTRY }"),") "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"nanoplayer_feature_stream_switching/#example-old-single-stream-configuration-deprecated"},"old single configuration notation"),": only change the ",(0,r.yg)("inlineCode",{parentName:"li"},"security")," object inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"h5live")," object (",(0,r.yg)("inlineCode",{parentName:"li"},"config.source.h5live.security = { YOUR CHANGED SECURITY DETAILS }"),") ")),(0,r.yg)("p",null,"You can leave the rest of the stream information unchanged. After updating the local config object you need to call the ",(0,r.yg)("inlineCode",{parentName:"p"},"updateSource")," method with the new source (",(0,r.yg)("inlineCode",{parentName:"p"},"config.source"),") as a parameter to replace the existing source inside the player."),(0,r.yg)("p",null,"More detailed information can be found in the ",(0,r.yg)("a",{parentName:"p",href:"nanoplayer_api#nanoplayerupdatesourcesource-%E2%87%92-codepromiseltconfigerrorgtcode"},"nanoPlayer API")," or in the ",(0,r.yg)("a",{parentName:"p",href:"nanoplayer_api#NanoPlayer+updateSource"},"updateSource feature description"),"."),(0,r.yg)("h2",{id:"using-secure-tokens-for-abr"},"Using secure tokens for ABR"),(0,r.yg)("p",null,"If secure playback should be used for an ABR multi-stream configuration, a secure token has to be generated for ",(0,r.yg)("strong",{parentName:"p"},"each stream independently"),". That means that the ",(0,r.yg)("inlineCode",{parentName:"p"},"security")," object has to be set for each entry (e.g. for the first entry: ",(0,r.yg)("inlineCode",{parentName:"p"},"config.source.entries[0].h5live.security = { SECURITY DETAILS FOR FIRST ENTRY }"),"). The configuration of multiple streams/entries with ABR and secure tokens is described ",(0,r.yg)("a",{parentName:"p",href:"nanoplayer_feature_stream_switching#example-multi-stream-configuration-with-abr-and-playback-security"},"here"),"."),(0,r.yg)("admonition",{title:"Important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"E.g. for ",(0,r.yg)("strong",{parentName:"p"},"three streams")," the security object has to be configured ",(0,r.yg)("strong",{parentName:"p"},"three times")," with a ",(0,r.yg)("strong",{parentName:"p"},"separate token for each stream"),".")))}y.isMDXComponent=!0}}]);