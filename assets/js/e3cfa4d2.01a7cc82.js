"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7825],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,b=p["".concat(l,".").concat(m)]||p[m]||g[m]||o;return t?a.createElement(b,s(s({ref:n},u),{},{components:t})):a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={id:"nanostream_webrtc_secure_ingest",title:"Secure ingest with Webcaster",sidebar_label:"Secure ingest with Webcaster"},s=void 0,i={unversionedId:"webrtc-v5/nanostream_webrtc_secure_ingest",id:"webrtc-v5/nanostream_webrtc_secure_ingest",title:"Secure ingest with Webcaster",description:"We enable secure ingest with the Webcaster by using JWT (JSON Web Token).",source:"@site/docs/webrtc-v5/nanostream_webrtc_secure_ingest.md",sourceDirName:"webrtc-v5",slug:"/webrtc-v5/nanostream_webrtc_secure_ingest",permalink:"/docs/webrtc-v5/nanostream_webrtc_secure_ingest",draft:!1,tags:[],version:"current",lastUpdatedAt:1711640284,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"nanostream_webrtc_secure_ingest",title:"Secure ingest with Webcaster",sidebar_label:"Secure ingest with Webcaster"},sidebar:"nanoStream Webcaster V5",previous:{title:"Support",permalink:"/docs/webrtc-v5/nanostream_webrtc_support"},next:{title:"Screen Sharing",permalink:"/docs/webrtc-v5/nanostream_webrtc_screen_sharing"}},l={},c=[{value:"What is JWT?",id:"what-is-jwt",level:2},{value:"About Webcaster and web tokens",id:"about-webcaster-and-web-tokens",level:2},{value:"Creating web tokens for the Webcaster",id:"creating-web-tokens-for-the-webcaster",level:2},{value:"Nanocosmos Token Creator",id:"nanocosmos-token-creator",level:2},{value:"Using web tokens with the Webcaster",id:"using-web-tokens-with-the-webcaster",level:2},{value:"1. Create a bintu stream",id:"1-create-a-bintu-stream",level:3},{value:"2. Create a web token",id:"2-create-a-web-token",level:3},{value:"3. Use the web token in the Webcaster",id:"3-use-the-web-token-in-the-webcaster",level:3},{value:"Verify a web token",id:"verify-a-web-token",level:2},{value:"Parsing information from a web token",id:"parsing-information-from-a-web-token",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"We enable secure ingest with the Webcaster by using ",(0,r.yg)("strong",{parentName:"p"},"JWT (JSON Web Token)"),"."),(0,r.yg)("h2",{id:"what-is-jwt"},"What is JWT?"),(0,r.yg)("p",null,"JWT is an open standard for securely transmitting information between two parties.\nIt simplifies the workflow and increases security for your end users in a simple way."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about JWT ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"click here"),".")),(0,r.yg)("h2",{id:"about-webcaster-and-web-tokens"},"About Webcaster and web tokens"),(0,r.yg)("p",null,"By using web tokens you can now omit the Bintu API key when using the Webcaster.",(0,r.yg)("br",null),"\nAlso the tokens will contain ingest information, so your customers will not need to see RTMP ingest urls\nand RTMP ingest stream names.\nThe Webcaster API can now utilize web tokens for signing in to the servers and for sharing ingest information.\nYou can pass the tokens in the two following API calls:",(0,r.yg)("br",null)),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./nanostream_webrtc_api#rtcusersigninoptions"},"signIn(config)")," - for authorizing with the Webcaster server"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./nanostream_webrtc_api#rtcuserstartbroadcastconfig"},"startBroadcast(config)")," - for starting the Webcast & passing ingest information")),(0,r.yg)("p",null,"Please see the following workflow on how to get started."),(0,r.yg)("h2",{id:"creating-web-tokens-for-the-webcaster"},"Creating web tokens for the Webcaster"),(0,r.yg)("admonition",{title:"Before starting",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,r.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.yg)("p",null,"In order to create a web token for the Webcaster you will need the following data:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"your bintu API key"),(0,r.yg)("li",{parentName:"ul"},"a RTMP stream name"),(0,r.yg)("li",{parentName:"ul"},"an RTMP ingest url"),(0,r.yg)("li",{parentName:"ul"},"an expiration date (this is optional, a web token will expire after 1 week by default)")),(0,r.yg)("p",null,"You can create web tokens by calling the REST interface of the ",(0,r.yg)("strong",{parentName:"p"},"nanocosmos Cloud Token Service (CTS)")," endpoint of the Webcaster.\nYou will need a Bintu API key for creating tokens."),(0,r.yg)("h2",{id:"nanocosmos-token-creator"},"Nanocosmos Token Creator"),(0,r.yg)("p",null,"Feel free to create web token through our ",(0,r.yg)("a",{parentName:"p",href:"https://bintu-helpers.nanocosmos.de/webcaster-helper"},"Webcaster Token Creator\n")," and test the feature immediately. All you need to get started is a bintu API key."),(0,r.yg)("h2",{id:"using-web-tokens-with-the-webcaster"},"Using web tokens with the Webcaster"),(0,r.yg)("h3",{id:"1-create-a-bintu-stream"},"1. Create a bintu stream"),(0,r.yg)("p",null,"Create a bintu stream either through the ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/"},"nanoStream Cloud Dashboard")," or with help of the bintu REST API."),(0,r.yg)("p",null,"Find a ",(0,r.yg)("strong",{parentName:"p"},"CURL")," example below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"}," curl --request POST \\\n    --url 'https://bintu.nanocosmos.de/stream' \\\n    --header 'content-type: application/json' \\\n    --header 'x-bintu-apikey: YOUR-APIKEY'\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"CURL")," response: ",(0,r.yg)("br",null),"\nThe response will contain the ingest information for the created stream. You will need this information in order to create the web token."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- ingest.rtmp.url\n- ingest.rtmp.streamname\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'// response from CURL command\n\n{\n    ...\n    "ingest":{\n      "rtmp":{\n         "url":"rtmp://bintu-stream.nanocosmos.de:1935/live",\n         "streamname":"XXXXX-YyyYY"\n      }\n    },\n    ...\n}\n')),(0,r.yg)("h3",{id:"2-create-a-web-token"},"2. Create a web token"),(0,r.yg)("p",null,"Use the data (",(0,r.yg)("inlineCode",{parentName:"p"},"ingest RTMP url")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ingest RTMP streamname"),") from the previously created stream to create a web token."),(0,r.yg)("p",null,"Find a ",(0,r.yg)("strong",{parentName:"p"},"CURL")," example below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url 'https://cts.nanocosmos.de/webcaster' \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/json' \\\n  --header 'x-bintu-apikey: YOUR-APIKEY' \\\n  --data '{\n    \"streamname\": \"YOUR_RTMP_STREAMNAME\",\n    \"ingesturl\": \"YOUR_RTMP_INGEST_URL\"\n  }'\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"CURL")," response: ",(0,r.yg)("br",null),"\nThe token will be contained in ",(0,r.yg)("inlineCode",{parentName:"p"},"data.token")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "token": "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuYW5vY29zbW9zIiwiZXhwIjoxMjM0NTY3ODksIm5iZiI6MTIzNDU2Nzg5LCJpbmdlc3R1cmwiOiJydG1wOi8vYmludHUtc3RyZWFtLm5hbm9jb3Ntb3MuZGU6MTkzNS9saXZlIiwic3RyZWFtbmFtZSI6ImFiYy1kZWYiLCJpYXQiOjE2MzU4NzEwOTN9.0BrnTUmu0A8yrcVHXj4OZU23sKpAHIQekALgW5jnZAo"\n    }\n}\n')),(0,r.yg)("h3",{id:"3-use-the-web-token-in-the-webcaster"},"3. Use the web token in the Webcaster"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"var yourJWT = 'YOUR_JWT'; // obtain the web token by the previous step\n\n// 1) the JWT is used for signing into the server\n\nrtcuser.signIn({\n  server: 'wss://bintu-webrtc.nanocosmos.de/p/webrtcws',\n  jwt: yourJWT\n});\n\n...\n\n// 2) pass the web token on startBroadcast()\n\nrtcuser.startBroadcast({jwt: yourJWT });\n")),(0,r.yg)("h2",{id:"verify-a-web-token"},"Verify a web token"),(0,r.yg)("p",null,"You can verify a web token by passing it when calling the verification url:"),(0,r.yg)("p",null,"Find a ",(0,r.yg)("strong",{parentName:"p"},"CURL")," example below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\ \n--url https://cts.nanocosmos.de/webcaster/verify \\ \n--header 'content-type: application/json' \\ \n--data '{\"token\": \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ...\"}'\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"CURL")," response: ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},'"success": true')," indicates token validity."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": {\n        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."\n    }\n}\n')),(0,r.yg)("h2",{id:"parsing-information-from-a-web-token"},"Parsing information from a web token"),(0,r.yg)("p",null,"If you want to read the public information contained in a web token you can do that by decoding the token.",(0,r.yg)("br",null),"\nThe token has its payload encoded in base64."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Example for decoding the JWT token"',title:'"Example',for:!0,decoding:!0,the:!0,JWT:!0,'token"':!0},"var yourJWT = 'YOUR_JWT';\n\nvar base64Url = yourJWT.split('.')[1];\nvar base64 = base64Url.replace('-', '+').replace('_', '/');\n\nconsole.log(JSON.parse(atob(base64)));\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Example console.log"',title:'"Example','console.log"':!0},'{\n  exp: 1636648020,\n  iat: 1635434867,\n  ingesturl: "YOUR_RTMP_INGEST_URL",\n  iss: "nanocosmos",\n  nbf: 1635434867,\n  streamname: "YOUR_RTMP_STREAMNAME",\n}\n')))}g.isMDXComponent=!0}}]);