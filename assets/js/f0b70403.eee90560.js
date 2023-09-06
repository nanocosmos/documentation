"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"api",title:"nanoMeet Web API",sidebar_label:"nanoMeet API"},l=void 0,i={unversionedId:"nanomeet/api",id:"nanomeet/api",title:"nanoMeet Web API",description:"&copy; 2021 nanocosmos.",source:"@site/docs/nanomeet/api.md",sourceDirName:"nanomeet",slug:"/nanomeet/api",permalink:"/docs/nanomeet/api",draft:!1,tags:[],version:"current",lastUpdatedAt:1694009609,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{id:"api",title:"nanoMeet Web API",sidebar_label:"nanoMeet API"}},p={},s=[{value:"NanoMeet",id:"nanomeet",level:2},{value:"Integration",id:"integration",level:3},{value:"new NanoMeet()",id:"new-nanomeet",level:3},{value:"nanoMeet.createNanoMeetRoom(apiKey, roomSetUp) =&gt; <code>Promise.&lt;success|error&gt;</code>",id:"nanomeetcreatenanomeetroomapikey-roomsetup--promisesuccesserror",level:3},{value:"nanoMeet.createInviteToken(token, tokenSetup) =&gt; <code>Promise.&lt;success|error&gt;</code>",id:"nanomeetcreateinvitetokentoken-tokensetup--promisesuccesserror",level:3},{value:"nanoMeet.init(config) =&gt; <code>Promise.&lt;(success|error)&gt;</code>",id:"nanomeetinitconfig--promisesuccesserror",level:3},{value:"nanoMeet.startBroadcast(isVOD) =&gt; <code>Promise.&lt;(success|error)&gt;</code>",id:"nanomeetstartbroadcastisvod--promisesuccesserror",level:3},{value:"nanoMeet.stopBroadcast() =&gt; <code>Promise.&lt;(success|error)&gt;</code>",id:"nanomeetstopbroadcast--promisesuccesserror",level:3},{value:"Support",id:"support",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\xa9"," 2021 ",(0,r.kt)("a",{parentName:"p",href:"https://info.nanocosmos.de/"},"nanocosmos"),"."),(0,r.kt)("p",null,"This guide will help you to integrate nanoMeet into your development environment.\nUse the nanoMeet web API to to provide secure video meetings and broadcast them around the world in 1 second."),(0,r.kt)("p",null,"We also provide the following online samples: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME"},"Token Creator")," - Click ",(0,r.kt)("a",{parentName:"p",href:"source-code#nanomeet-token-creator-source-code"},"here")," to find the code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=YOUR-INVITE-TOKEN"},"NanoMeet Sample")," - Click ",(0,r.kt)("a",{parentName:"p",href:"source-code#nanomeet-sample-source-code"},"here")," to find the code."))),(0,r.kt)("p",null,"nanoMeet is part of ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"nanoStream Cloud"),".\nYou need a nanoStream Cloud/Bintu account with nanoMeet enabled."),(0,r.kt)("admonition",{title:"before getting started",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you do not have an account or nanoMeet enabled yet, please contact our sales team for a personal demo via ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/nanomeet/?demo&utm_source=nanoMeet_Docs&utm_medium=nanocosmos&utm_campaign=nanoMeet&utm_content=CTA_Requirements"},"contact form")," or sales(at)nanocosmos.de.\nTo check if your organisation enables nanoMeet, check your ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"organisation overview"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"nanoMeet enabled",src:n(2486).Z,width:"671",height:"49"}))),(0,r.kt)("h2",{id:"nanomeet"},"NanoMeet"),(0,r.kt)("p",null,"NanoMeet Public Web API Class 1.0.0."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind:")," global class"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Version:")," 1.0.0."),(0,r.kt)("h3",{id:"integration"},"Integration"),(0,r.kt)("p",null,"To integrate nanoMeet in your web page you need to load our nanoMeet Web API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/js/nanomeet.js"><\/script>\n')),(0,r.kt)("h3",{id:"new-nanomeet"},"new NanoMeet()"),(0,r.kt)("p",null,"The instance of the NanoMeet web API. The source can be loaded via script tag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var nanoMeet = new NanoMeet();\n")),(0,r.kt)("h3",{id:"nanomeetcreatenanomeetroomapikey-roomsetup--promisesuccesserror"},"nanoMeet.createNanoMeetRoom(apiKey, roomSetUp) => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise.<success|error>")),(0,r.kt)("p",null,"Creates a secure token that is needed to initialize and use nanoMeet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind:")," Instance of the  ",(0,r.kt)("inlineCode",{parentName:"p"},"NanoMeet")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apiKey"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Your nanoStream Cloud/bintu API key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomSetUp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"The custom configuration for your custom nanoMeet room.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomSetUp.nbf"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The not before date for the secure token in ISO format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomSetUp.exp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The expiration date for the secure token in ISO format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomSetUp.streamname"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"A passthrough streamname.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomSetUp.server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The server URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomSetUp.room"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The room name. Valid Charset: a-z, A-Z, 0-9, _")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roomSetUp.moderator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If true the token gives the user permissions to create invite token, kick participants out and start the broadcast. Read ",(0,r.kt)("a",{parentName:"td",href:"introduction#roles"},"here")," about the different roles.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"roomSetUp")," Properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var roomSetUp = {\n    nbf: "2021-01-22T06:00:01.000Z",\n    exp: "2021-01-29T06:00:01.000Z",\n    streamname: "XXXXX-YYYYY",\n    room: "my_nanoMeet_room",\n    server: "nanomeet-eu.nanocosmos.de",\n    moderator: true\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Creation of a nanoMeet room\nnanoMeet.createNanoMeetRoom(apikey, roomSetUp)\n.then((success) => {\n    console.log("nanoMeet room:", success)\n}).catch((error) => {\n    console.log("Error in creating a nanoMeet room:", error)\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'data: {\n    expiration: "2021-01-29T06:00:01.000Z",\n  moderator: true,\n  notbefore: "2021-01-22T06:00:01.000Z",\n  room: "my_nanoMeet_room",\n  server: "nanomeet-eu.nanocosmos.de",\n  streamname: "XXXXX-YYYYY",\n  token: "SECURE-TOKEN" // secure token that needs to be provided when initializing nanoMeet on your webpage or creating an invite token\n}\n')),(0,r.kt)("h3",{id:"nanomeetcreateinvitetokentoken-tokensetup--promisesuccesserror"},"nanoMeet.createInviteToken(token, tokenSetup) => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise.<success|error>")),(0,r.kt)("p",null,"Creates an invite token for the nanoMeet room."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind:")," Instance of the  ",(0,r.kt)("inlineCode",{parentName:"p"},"NanoMeet")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"A valid token with moderator rights for the room.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenSetup.moderator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If true the token gives the user permissions to create invite token, kick participants out and start the broadcast. Read ",(0,r.kt)("a",{parentName:"td",href:"introduction#roles"},"here")," about the different roles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[tokenSetup.nbf]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The not before date for the secure token in ISO format. If it is not provided it will be the same as the date passed to the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[tokenSetup.exp]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The expiration date for the secure token in ISO format. If it is not provided it will be the same as the date passed to the token.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"tokenSetup")," Properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'tokenSetup: {\n  token: "SECURE-TOKEN",\n  moderator: false,\n  exp: "2021-01-29T06:00:01.000Z",\n  nbf: "2021-01-22T06:00:01.000Z",\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Creation of an invite token\nnanoMeet.createInviteToken(token, tokenSetup)\n.then((success) => {\n    console.log("Successful creation of a nanoMeet secure invite token:", success);\n}).catch((error) => {\n    console.log("Error in creating a nanoMeet invite token:", error);\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'data: {\n  moderator: false,\n  token: "SECURE-TOKEN", // secure token that needs to be provided to the invitee\n  inviteLink: "https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=token" // invite link to our nanoMeet sample\n}\n')),(0,r.kt)("h3",{id:"nanomeetinitconfig--promisesuccesserror"},"nanoMeet.init(config) => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise.<(success|error)>")),(0,r.kt)("p",null,"Initializes nanoMeet with the provided config object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind:")," Instance of the  ",(0,r.kt)("inlineCode",{parentName:"p"},"NanoMeet")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"The config object for nanoMeet including the secure token, id and styles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"A valid secure token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the div element the nanoMeet window will be embedded into.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[config.height]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the nanoMeet window. Default is 100%. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note:")," The height you initialized can not be updated after you set it in the config. For dynamic changes regarding the height use the ",(0,r.kt)("em",{parentName:"td"},"config.id")," selector (e.g. #nanoStream-meet { height: 500px; }).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[config.width]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the nanoMeet window. Default is 100%.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note:")," The width you initialized can not be updated after you set it in the config. For dynamic changes regarding the width use the ",(0,r.kt)("em",{parentName:"td"},"config.id")," selector (e.g. #nanoStream-meet { width: 500px; }).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[config.branding]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The branding URL that refers to a JSON file that brands nanoMeet. Default is nanocosmos branding. Read more ",(0,r.kt)("a",{parentName:"td",href:"getting-started#customize-a-nanomeet-room"},"here"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"config")," Properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'config: {\n  token: "SECURE-TOKEN",\n  id: "nanoStream-meet",\n  height: 500,\n  width: 500,\n  branding: "https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-branding.json"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Initialization of nanoMeet\nnanoMeet.init(config)\n    .then((success) => {\n    console.log("nanoMeet setted up:", success);\n}).catch((error) => {\n    console.log("Error setting up nanoMeet:", error);\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"data: {\n    moderator: true \n}\n")),(0,r.kt)("h3",{id:"nanomeetstartbroadcastisvod--promisesuccesserror"},"nanoMeet.startBroadcast(isVOD) => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise.<(success|error)>")),(0,r.kt)("p",null,"Starts a new broadcast. Can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"nanoMeet.init(config)")," method was called before."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind:")," Instance of the  ",(0,r.kt)("inlineCode",{parentName:"p"},"NanoMeet")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isVOD"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the live stream will be available as VOD after stopping.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Initialization of nanoMeet\nnanoMeet.startBroadcast(isVOD)\n    .then((success) => {\n    console.log("Starting broadcast of nanoMeet conference:", success);\n    console.log("Recording nanoMeet live stream:", isVOD);\n}).catch((error) => {\n    console.log("Error starting broadcast:", error);\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'data: {\n  playout: {\n    live: "https://demo.nanocosmos.de/nanoplayer/....",\n    vod: "https://bintu-vod.nanocosmos.de...."\n  }\n}\n')),(0,r.kt)("h3",{id:"nanomeetstopbroadcast--promisesuccesserror"},"nanoMeet.stopBroadcast() => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise.<(success|error)>")),(0,r.kt)("p",null,"Stops a running broadcast. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind:")," Instance of the  ",(0,r.kt)("inlineCode",{parentName:"p"},"NanoMeet")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Initialization of nanoMeet\nnanoMeet.stopBroadcast()\n    .then((success) => {\n    console.log("Stopped broadcast");\n}).catch((error) => {\n    console.log("Error in stopping broadcast.");\n});\n')),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("admonition",{title:"Do you need assistance using nanomeet?",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please use ",(0,r.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"our support contact form")," for further assistance.")))}c.isMDXComponent=!0},2486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-nanomeet-13febcf2a92a10ff578709f6bf7d7864.jpg"}}]);