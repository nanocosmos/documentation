"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4124],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=s(n),g=r,d=y["".concat(p,".").concat(g)]||y[g]||m[g]||i;return n?t.createElement(d,l(l({ref:a},u),{},{components:n})):t.createElement(d,l({ref:a},u))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},96120:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const i={id:"nanoplayer_security_jwt",title:"Secure playback with JSON Web Token (JWT)"},l=void 0,o={unversionedId:"nanoplayer/nanoplayer_security_jwt",id:"nanoplayer/nanoplayer_security_jwt",title:"Secure playback with JSON Web Token (JWT)",description:"Since nanoStream H5Live Player Version 4.18.0 it is possible to use JSON Web Token (JWT) for a secure playback for all use cases. It can be applied with the entries configuration and with the group configuration. Contrary to the STS secure configuration, there can be single JWT token for all streams within the stream group. It is now easier than ever to use live transcoding and ABR with ultra-low-latency live streaming.",source:"@site/docs/nanoplayer/nanoplayer_security_jwt.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_security_jwt",permalink:"/docs/nanoplayer/nanoplayer_security_jwt",draft:!1,tags:[],version:"current",lastUpdatedAt:1712137628,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{id:"nanoplayer_security_jwt",title:"Secure playback with JSON Web Token (JWT)"}},p={},s=[{value:"How to create a JSON Web Token for secure playback in the Cloud Dashboard",id:"how-to-create-a-json-web-token-for-secure-playback-in-the-cloud-dashboard",level:2},{value:"How to create JSON Web Token for secure playback via API",id:"how-to-create-json-web-token-for-secure-playback-via-api",level:2},{value:"Request URL and method",id:"request-url-and-method",level:3},{value:"HTTP request header",id:"http-request-header",level:3},{value:"HTTP request body",id:"http-request-body",level:3},{value:"Stream group id, stream names or entire organisation",id:"stream-group-id-stream-names-or-entire-organisation",level:4},{value:"Time range restrictions",id:"time-range-restrictions",level:4},{value:"Web application domain name/referer restriction",id:"web-application-domain-namereferer-restriction",level:4},{value:"IP address restriction",id:"ip-address-restriction",level:4},{value:"Tag",id:"tag",level:4},{value:"User identifier",id:"user-identifier",level:4},{value:"Example of a complete JSON object",id:"example-of-a-complete-json-object",level:4},{value:"HTTP response",id:"http-response",level:3},{value:"HTTP response codes",id:"http-response-codes",level:4},{value:"How to verify JSON Web Token for secure playback via API",id:"how-to-verify-json-web-token-for-secure-playback-via-api",level:2},{value:"Request URL and method",id:"request-url-and-method-1",level:3},{value:"HTTP request header",id:"http-request-header-1",level:3},{value:"HTTP request body",id:"http-request-body-1",level:3},{value:"HTTP response",id:"http-response-1",level:3},{value:"HTTP response codes",id:"http-response-codes-1",level:4},{value:"How to integrate secure H5Live player configuration with JWT",id:"how-to-integrate-secure-h5live-player-configuration-with-jwt",level:2},{value:"JSON representation with stream group",id:"json-representation-with-stream-group",level:4},{value:"Config example with stream group configuration",id:"config-example-with-stream-group-configuration",level:4},{value:"Config example with entries configuration",id:"config-example-with-entries-configuration",level:4},{value:"On a web page",id:"on-a-web-page",level:3}],u={toc:s},y="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(y,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Since ",(0,r.yg)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.18.0")," it is possible to use JSON Web Token (JWT) for a secure playback for all use cases. It can be applied with the ",(0,r.yg)("inlineCode",{parentName:"p"},"entries")," configuration and with the ",(0,r.yg)("inlineCode",{parentName:"p"},"group")," configuration. Contrary to the STS secure configuration, there can be single JWT token for all streams within the stream group. It is now easier than ever to use live transcoding and ABR with ultra-low-latency live streaming."),(0,r.yg)("h2",{id:"how-to-create-a-json-web-token-for-secure-playback-in-the-cloud-dashboard"},"How to create a JSON Web Token for secure playback in the Cloud Dashboard"),(0,r.yg)("p",null,"Since version 3 of the nanoStream Cloud Dashboard it is supported to create JSON Web Token for secure playback.",(0,r.yg)("br",{parentName:"p"}),"\n","Dashboard URL: ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud"},"https://dashboard.nanostream.cloud")," "),(0,r.yg)("p",null,"There are 2 locations in the dashboard where tokens can be created "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"via the ",(0,r.yg)("inlineCode",{parentName:"li"},"Secure Playback Token")," item in the sidebar "),(0,r.yg)("li",{parentName:"ul"},"via the ",(0,r.yg)("inlineCode",{parentName:"li"},"Create new token")," button in the stream overview ")),(0,r.yg)("h2",{id:"how-to-create-json-web-token-for-secure-playback-via-api"},"How to create JSON Web Token for secure playback via API"),(0,r.yg)("h3",{id:"request-url-and-method"},"Request URL and method"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"URL : ",(0,r.yg)("inlineCode",{parentName:"li"},"https://token.nanostream.cloud/api/v1/splay")," "),(0,r.yg)("li",{parentName:"ul"},"Method: ",(0,r.yg)("inlineCode",{parentName:"li"},"POST"))),(0,r.yg)("h3",{id:"http-request-header"},"HTTP request header"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"content-type")," : ",(0,r.yg)("inlineCode",{parentName:"li"},"application/json")," "),(0,r.yg)("li",{parentName:"ul"},"Authentication via bintu API key or bintu token ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"X-BINTU-APIKEY")," : Your API key. Can be obtained from the nanoStream Cloud dashboard. "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"X-BINTU-TOKEN")," : Your bintu token. ")))),(0,r.yg)("h3",{id:"http-request-body"},"HTTP request body"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Format: JSON object containing the following fields ")),(0,r.yg)("h4",{id:"stream-group-id-stream-names-or-entire-organisation"},"Stream group id, stream names or entire organisation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"There are 3 options available for identifying the streams included in the token ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"One of the options must be included ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"a) Create token for an entire stream group "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"groupid")," "),(0,r.yg)("li",{parentName:"ul"},"Value: string, bintu streamgroup id "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"groupid": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd"')," "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"b) Create token for one or more stream names "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"streams")," "),(0,r.yg)("li",{parentName:"ul"},"Value: array, containing one or more stream names "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"streams": ["XXXXX-YYYY1","XXXXX-YYYY2","XXXXX-YYYY3"]')))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"c) Create token for all streams of your organisation "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"orgawide")," "),(0,r.yg)("li",{parentName:"ul"},"Value: boolean, true "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"orgawide": true')," ")))),(0,r.yg)("h4",{id:"time-range-restrictions"},"Time range restrictions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start time "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The parameter nbf stands for NotBefore and is the time in the future when the token becomes valid. It is not possible to use the token before this time is reached. "),(0,r.yg)("li",{parentName:"ul"},"optional "),(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"nbf")," "),(0,r.yg)("li",{parentName:"ul"},"Value: number, UNIX timestamp in seconds "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"nbf": 1686900000')," "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"End time "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"optional "),(0,r.yg)("li",{parentName:"ul"},"The parameter exp stands for expiration and is the time at which the token looses its validity. After the expiration, the token can no longer be used. "),(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"exp")," "),(0,r.yg)("li",{parentName:"ul"},"Value: number, UNIX timestamp in seconds "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"exp": 1686903652')," ")))),(0,r.yg)("h4",{id:"web-application-domain-namereferer-restriction"},"Web application domain name/referer restriction"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Web application domain ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"optional "),(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"domain")," "),(0,r.yg)("li",{parentName:"ul"},"Value: string, domain name "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"domain": "example.domain.com"'))))),(0,r.yg)("h4",{id:"ip-address-restriction"},"IP address restriction"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"IP address",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"optional "),(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"ip")),(0,r.yg)("li",{parentName:"ul"},"Value: string, IP address "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"ip": "123.45.67.89"')," ")))),(0,r.yg)("h4",{id:"tag"},"Tag"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tag ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"optional "),(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"tag")),(0,r.yg)("li",{parentName:"ul"},"Value: string, tag "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"tag": "table 7"')," ")))),(0,r.yg)("h4",{id:"user-identifier"},"User identifier"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"User ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"optional "),(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"user")),(0,r.yg)("li",{parentName:"ul"},"Value: string, user id, name or alias "),(0,r.yg)("li",{parentName:"ul"},"Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"user": "aaa-bbb-ccc-ddd"')," ")))),(0,r.yg)("h4",{id:"example-of-a-complete-json-object"},"Example of a complete JSON object"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "groupid": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd",\n  "exp": 1686903652,\n  "domain": "example.domain.com",\n  "ip": "123.45.67.89",\n  "tag": "table 7",\n  "user": "aaa-bbb-ccc-ddd"\n}\n')),(0,r.yg)("h3",{id:"http-response"},"HTTP response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Content type: ",(0,r.yg)("inlineCode",{parentName:"li"},"application/json; charset=utf-8")," ")),(0,r.yg)("h4",{id:"http-response-codes"},"HTTP response codes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"200"),": success ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"example body: ",(0,r.yg)("inlineCode",{parentName:"li"},'{"success": true,"data": {"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}}')," "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"400"),": parameter required ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"example body: ",(0,r.yg)("inlineCode",{parentName:"li"},'{"success": false,"errorCode": 1000,"message": "Parameter required: ..."}')," "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"403"),": forbidden ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"example body: ",(0,r.yg)("inlineCode",{parentName:"li"},'{"success": false,"errorCode": 1001,"message": "Provided APIKey is not valid"}'))))),(0,r.yg)("h2",{id:"how-to-verify-json-web-token-for-secure-playback-via-api"},"How to verify JSON Web Token for secure playback via API"),(0,r.yg)("h3",{id:"request-url-and-method-1"},"Request URL and method"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"URL : ",(0,r.yg)("inlineCode",{parentName:"li"},"https://token.nanostream.cloud/api/v1/splay/verify")," "),(0,r.yg)("li",{parentName:"ul"},"Method: ",(0,r.yg)("inlineCode",{parentName:"li"},"POST"))),(0,r.yg)("h3",{id:"http-request-header-1"},"HTTP request header"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"content-type")," : ",(0,r.yg)("inlineCode",{parentName:"li"},"application/json"))),(0,r.yg)("h3",{id:"http-request-body-1"},"HTTP request body"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Format: JSON object containing the following fields "),(0,r.yg)("li",{parentName:"ul"},"Token ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Key: ",(0,r.yg)("inlineCode",{parentName:"li"},"token")," "),(0,r.yg)("li",{parentName:"ul"},"Value: string, JSON Web Token"))),(0,r.yg)("li",{parentName:"ul"},"Example body: ",(0,r.yg)("inlineCode",{parentName:"li"},'{"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}'))),(0,r.yg)("h3",{id:"http-response-1"},"HTTP response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Content type: ",(0,r.yg)("inlineCode",{parentName:"li"},"application/json; charset=utf-8"))),(0,r.yg)("h4",{id:"http-response-codes-1"},"HTTP response codes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"200"),": success, valid token",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"example body: ",(0,r.yg)("inlineCode",{parentName:"li"},'{"success": true, "data": {"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}}')))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"403"),": error, invalid token",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"example body: ",(0,r.yg)("inlineCode",{parentName:"li"},'{"success": false, "errorCode": 1002,"message": "jwt expired"}'))))),(0,r.yg)("h2",{id:"how-to-integrate-secure-h5live-player-configuration-with-jwt"},"How to integrate secure H5Live player configuration with JWT"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Adding the secure ",(0,r.yg)("inlineCode",{parentName:"strong"},"stream group")," to the config")),(0,r.yg)("p",null,"While passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"group")," object with nested ",(0,r.yg)("inlineCode",{parentName:"p"},"'id' : 'your_stream_group_id'")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"source"),", in case of a secure stream group, add ",(0,r.yg)("inlineCode",{parentName:"p"},"security")," with JSON Web Token (JWT) ",(0,r.yg)("inlineCode",{parentName:"p"},"'jwtoken' : 'your_token'"),"."),(0,r.yg)("h4",{id:"json-representation-with-stream-group"},"JSON representation with stream group"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"'config': {\n    'source': {\n        'group': {\n            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your stream group id\n            'security': {\n                'jwtoken': 'xxx' // your JSON Web Token\n            },\n        },\n        ...\n    },\n    ...\n}\n")),(0,r.yg)("h4",{id:"config-example-with-stream-group-configuration"},"Config example with stream group configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'var config = {\n    "source": {\n        "group": {\n            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id\n            "security": {\n                "jwtoken": "xxx" // your JSON Web Token\n            },\n        },\n        ...\n    },\n    ...\n};\n')),(0,r.yg)("h4",{id:"config-example-with-entries-configuration"},"Config example with entries configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'var config = {\n    "source": {\n        "entries": [\n            {\n                "h5live": {\n                    "rtmp": {\n                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",\n                        "streamname": \'XXXXX-YYYYY\' // your streamname\n                    },\n                    "server": {\n                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de/h5live/authstream",\n                        "hls": "https://bintu-h5live-secure.nanocosmos.de/h5live/authhttp/playlist.m3u8"\n                    },\n                    "security": {\n                        "jwtoken": "xxx" // your JSON Web Token\n                    }                    \n                }                \n            }\n        ]\n        ...\n    },\n    ...\n};\n')),(0,r.yg)("p",null,"Here are example code snippets to test the H5Live player with secure tokens."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Refer to the detailed example code in ",(0,r.yg)("a",{parentName:"p",href:"./nanoplayer_getting_started"},"Embedding H5Live player on your own web page")," and modify the relevant sections to include playback security.")),(0,r.yg)("h3",{id:"on-a-web-page"},"On a web page"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<div id="playerDiv"></div>\n<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js"><\/script>\n<script>\nvar player;\nvar config = {\n    "source": {\n       "group": {\n            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id\n            "security": {\n                "jwtoken": "xxx" // your JSON Web Token\n            },\n        },\n    },\n    "playback": {\n        "autoplay": true,\n        "automute": true,\n        "muted": true\n    },\n    "style": {\n        "displayMutedAutoplay": true\n    }\n};\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n    player = new NanoPlayer("playerDiv");\n    player.setup(config).then(function (config) {\n        console.log("setup success");\n        console.log("config: " + JSON.stringify(config, undefined, 4));\n    }, function (error) {\n        alert(error.message);\n    });\n});\n<\/script>\n')))}m.isMDXComponent=!0}}]);