"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[5674],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=g(a),d=r,y=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var g=2;g<i;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const i={id:"nanoplayer_feature_stream_group_configuration",title:"Stream group configuration",sidebar_label:"Stream group configuration"},o=void 0,p={unversionedId:"nanoplayer/nanoplayer_feature_stream_group_configuration",id:"nanoplayer/nanoplayer_feature_stream_group_configuration",title:"Stream group configuration",description:"Using stream group configuration with standard nanoStream Cloud",source:"@site/docs/nanoplayer/nanoplayer_feature_stream_group_configuration.md",sourceDirName:"nanoplayer",slug:"/nanoplayer/nanoplayer_feature_stream_group_configuration",permalink:"/docs/nanoplayer/nanoplayer_feature_stream_group_configuration",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"nanoplayer_feature_stream_group_configuration",title:"Stream group configuration",sidebar_label:"Stream group configuration"},sidebar:"H5Live Player",previous:{title:"Latency control modes",permalink:"/docs/nanoplayer/nanoplayer_feature_latency_control_modes"},next:{title:"Secure playback with H5Live",permalink:"/docs/nanoplayer/nanoplayer_token_security"}},l={},g=[{value:"Using stream group configuration with standard nanoStream Cloud",id:"using-stream-group-configuration-with-standard-nanostream-cloud",level:2},{value:"Adding the <code>stream group</code> to the config",id:"adding-the-stream-group-to-the-config",level:3},{value:"JSON representation",id:"json-representation",level:3},{value:"Config example with stream group",id:"config-example-with-stream-group",level:3},{value:"Player Embed with stream group configuration",id:"player-embed-with-stream-group-configuration",level:2},{value:"<code>&#39;group.startQuality&#39;</code> parameter",id:"groupstartquality-parameter",level:3},{value:"Examples of <code>startQuality</code> to <code>startIndex</code> mapping:",id:"examples-of-startquality-to-startindex-mapping",level:3}],u={toc:g},m="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"using-stream-group-configuration-with-standard-nanostream-cloud"},"Using stream group configuration with standard nanoStream Cloud"),(0,r.yg)("p",null,"Introduced in ",(0,r.yg)("strong",{parentName:"p"},"nanoStream H5Live Player Version 4.18.0"),", part of nanoStream Cloud 2022, ",(0,r.yg)("em",{parentName:"p"},"bintu stream group")," makes the configuration easier, particularly in case of more than one stream. While the configuration via entries requires passing ",(0,r.yg)("inlineCode",{parentName:"p"},"rtmp.streamname")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"bintu.streamid")," value for each entry in the source object, the stream group feature allows to pass once the ",(0,r.yg)("inlineCode",{parentName:"p"},"group.id")," to have available all entries included in the stream group. Due to ",(0,r.yg)("inlineCode",{parentName:"p"},"group.id")," response from the Bintu API being decoded to deliver expected entries, this solution makes a shorter and easier configuration."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The stream group supports both: standard and secure stream playback.")),(0,r.yg)("h3",{id:"adding-the-stream-group-to-the-config"},"Adding the ",(0,r.yg)("inlineCode",{parentName:"h3"},"stream group")," to the config"),(0,r.yg)("p",null,"Find the stream group id in the ",(0,r.yg)("inlineCode",{parentName:"p"},"stream")," object in the Cloud Dashboard or in the ",(0,r.yg)("inlineCode",{parentName:"p"},"/stream/{id}")," response from the Bintu API. Pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"group")," object with nested ",(0,r.yg)("inlineCode",{parentName:"p"},"'id' : 'your_stream_group_id'")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"source"),". ",(0,r.yg)("br",null),"\nIn case of a secure stream group, add ",(0,r.yg)("inlineCode",{parentName:"p"},"security")," with JSON Web Token (JWT) ",(0,r.yg)("inlineCode",{parentName:"p"},"'jwtoken' : 'your_token'"),". Find more information about the security with ",(0,r.yg)("a",{parentName:"p",href:"./nanoplayer_security_jwt"},"JSON Web Token here"),".\nAdding ",(0,r.yg)("inlineCode",{parentName:"p"},"'apiurl'")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"'startQuality'")," is optional."),(0,r.yg)("h3",{id:"json-representation"},"JSON representation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"'config': {\n    'source': {\n        'group': {\n            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your stream group id\n            'security': { // required for secure group playback\n                'jwtoken': 'xxx' // your security token if applicable\n            },\n            'apiurl': 'https://bintu.nanocosmos.de', // optional\n            'startQuality': 'medium' // optional\n        },\n        ...\n    },\n    ...\n}\n")),(0,r.yg)("h3",{id:"config-example-with-stream-group"},"Config example with stream group"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'var config = {\n    "source": {\n        "group": {\n            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id\n            "security": {   // required for secure group playback\n                "jwtoken": "xxx" // your security token if applicable\n            },\n            "startQuality": "medium" // optional\n        },\n        ...\n    },\n    ...\n};\n')),(0,r.yg)("h2",{id:"player-embed-with-stream-group-configuration"},"Player Embed with stream group configuration"),(0,r.yg)("p",null,"For Player Embed the stream group feature is available since embed v1.3.1. It is necessary to configure it via URL parameters: ",(0,r.yg)("inlineCode",{parentName:"p"},"group.id"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"group.security.jwtoken"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"group.startQuality"),"."),(0,r.yg)("h3",{id:"groupstartquality-parameter"},(0,r.yg)("inlineCode",{parentName:"h3"},"'group.startQuality'")," parameter"),(0,r.yg)("p",null,"New parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"'group.startQuality'")," is an enhanced version of ",(0,r.yg)("inlineCode",{parentName:"p"},"'config.source.startIndex'"),", designed particularly for the stream group feature where the number of streams might be unknown at the time of configuration. Instead of passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"startIndex")," that is mapped with the stream index, ",(0,r.yg)("inlineCode",{parentName:"p"},"startQuality")," is based on the range of streams within given quality. Streams assigned to the ",(0,r.yg)("inlineCode",{parentName:"p"},"startQuality")," vary depending on the total number of available entries."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"group.startQuality")," values:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"high")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"medium-high")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"medium")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"medium-low")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"low"))),(0,r.yg)("p",null,"Regardless of the amount of streams, the values will always be mapped to a start index and thus result in a valid configuration."),(0,r.yg)("h3",{id:"examples-of-startquality-to-startindex-mapping"},"Examples of ",(0,r.yg)("inlineCode",{parentName:"h3"},"startQuality")," to ",(0,r.yg)("inlineCode",{parentName:"h3"},"startIndex")," mapping:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"number of streams"),(0,r.yg)("th",{parentName:"tr",align:"center"},"high"),(0,r.yg)("th",{parentName:"tr",align:"center"},"medium-high"),(0,r.yg)("th",{parentName:"tr",align:"center"},"medium"),(0,r.yg)("th",{parentName:"tr",align:"center"},"medium-low"),(0,r.yg)("th",{parentName:"tr",align:"center"},"low"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"4"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"5"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4")))))}s.isMDXComponent=!0}}]);