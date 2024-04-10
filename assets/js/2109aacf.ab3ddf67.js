"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6584],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=l,c=m["".concat(p,".").concat(d)]||m[d]||y[d]||o;return a?n.createElement(c,r(r({ref:t},u),{},{components:a})):n.createElement(c,r({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(58168),l=(a(96540),a(15680));const o={id:"bintu_custom_webhooks",title:"Bintu custom web hooks",sidebar_label:"Bintu custom web hooks"},r=void 0,i={unversionedId:"cloud/bintu_custom_webhooks",id:"cloud/bintu_custom_webhooks",title:"Bintu custom web hooks",description:"It's possible to use a custom web hook for custom based authentication.",source:"@site/docs/cloud/bintu_custom_webhooks.md",sourceDirName:"cloud",slug:"/cloud/bintu_custom_webhooks",permalink:"/docs/cloud/bintu_custom_webhooks",draft:!1,tags:[],version:"current",lastUpdatedAt:1712739692,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"bintu_custom_webhooks",title:"Bintu custom web hooks",sidebar_label:"Bintu custom web hooks"},sidebar:"nanoStream Cloud",previous:{title:"Bintu API",permalink:"/docs/cloud/bintu_api"},next:{title:"Bintu Stream Tags",permalink:"/docs/cloud/bintu_stream_tags"}},p={},s=[{value:"API",id:"api",level:2},{value:"Custom data",id:"custom-data",level:2},{value:"Example for publish",id:"example-for-publish",level:2},{value:"Example for play",id:"example-for-play",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Available Parameters per Webhook",id:"available-parameters-per-webhook",level:2}],u={toc:s},m="wrapper";function y(e){let{components:t,...a}=e;return(0,l.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"It's possible to use a custom web hook for custom based authentication. "),(0,l.yg)("admonition",{title:"Note",type:"info"},(0,l.yg)("p",{parentName:"admonition"},"Using web hooks is the recommended way to protect your ingest workflow. Ask us for account upgrades to help with implementations or hosting")),(0,l.yg)("admonition",{title:"Recommendation",type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Using web hooks for playback is not recommended and not always enabled. Use nanoPlayer Token Security instead.")),(0,l.yg)("h2",{id:"api"},"API"),(0,l.yg)("p",null,"Set the custom web hook via this api call (linux notation): "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT \\\nhttps://bintu.nanocosmos.de/organisation/webhook \\\n-H 'content-type: application/json' \\\n-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' \\\n-d '{\n    \"webhook\": \"https://your-custom-server.com/hook\"\n}'\n")),(0,l.yg)("admonition",{title:"Notes",type:"info"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"The custom api call will be called from bintu for each on","_","play, on","_","publish, on","_","play","_","done, on","_","publish","_","done and on","_","publish","_","update webhook. "),(0,l.yg)("li",{parentName:"ul"},"It's a blocking api call. You need to ensure quick response times. Long response times from the customer api server will create a delay for the time required to start a playout or publish. "),(0,l.yg)("li",{parentName:"ul"},"The customer api hook needs to reply with http status code 200, otherwise the bintu api will reject this stream and it's not possible to publish or play the stream. "),(0,l.yg)("li",{parentName:"ul"},"The custom api server should response with 200 to accept a stream and with 403 to reject a stream."))),(0,l.yg)("p",null,"Bintu will send a POST request with header ",(0,l.yg)("inlineCode",{parentName:"p"},"Content-Type: application/x-www-form-urlencoded")," and body will contain url encoded form data as in the following example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"call=publish&name=CD6xx-123456&type=live&app=live&addr=xxx.yyy.zzz.aaa&clientid=123456\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"For the publish","_","done webhook, the request body also contains the keys bytes","_","in and bytes","_","out. The unit of the values is byte.")),(0,l.yg)("h2",{id:"custom-data"},"Custom data"),(0,l.yg)("p",null,"Its possible to amend this body with custom fields/data by adding the data as query parameter to the stream-name."),(0,l.yg)("h2",{id:"example-for-publish"},"Example for publish"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"rtmp://bintu-stream.nanocosmos.de:80/live/CD6xx-123456?foo=bar&batz=12345")),(0,l.yg)("p",null,"This stream name will result in the request body below:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"foo=bar&batz=12345&call=publish&name=CD6xx-123456&type=live&app=live&tcurl=rtmp%3A%2F%2Fbintu-stream.nanocosmos.de%3A1935%2Flive\n&addr=xxx.yyy.zzz.aaa&clientid=123456    \n")),(0,l.yg)("h2",{id:"example-for-play"},"Example for play"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play.nanocosmos.de&h5live.rtmp.url=rtmp://bintu-play.nanocosmos.de/play&h5live.rtmp.streamname=CD6xx-123456?test%3D123")),(0,l.yg)("p",null,"Which will result in the request body below:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"test=123&call=play&name=CD6xx-123456&start=0&duration=0&reset=0&app=play&addr=xxx.yyy.zzz.aaa&clientid=123456    \n")),(0,l.yg)("admonition",{title:"Note",type:"info"},(0,l.yg)("p",{parentName:"admonition"},"You might need to url encode your parameters, e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"test=123")," needs to be url encoded: ",(0,l.yg)("inlineCode",{parentName:"p"},"test%3D123"))),(0,l.yg)("h2",{id:"parameters"},"Parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"call"),": 'play","_","done',  Webhook play, publish, play","_","done, publish","_","done, update","_","publish"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"name"),": 'YYstV-BVPq4', stream name"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"bytes","_","in"),": '575', Bytes, received by rtmp server"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"bytes","_","out"),": '8516372', Bytes sent by rtmp server"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"addr"),": '17.31.43.214', Client IP Addr"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"clientid"),": '9466245' internal client id (displayed in log and stat)"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"time"),": '46807', number of seconds since play/publish call"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"timestamp"),": '46805903', timestamp of the last audio/video packet sent to the client")),(0,l.yg)("h2",{id:"available-parameters-per-webhook"},"Available Parameters per Webhook"),(0,l.yg)("p",null,"Webhook play:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"call"),(0,l.yg)("li",{parentName:"ul"},"name"),(0,l.yg)("li",{parentName:"ul"},"start"),(0,l.yg)("li",{parentName:"ul"},"duration"),(0,l.yg)("li",{parentName:"ul"},"app"),(0,l.yg)("li",{parentName:"ul"},"addr"),(0,l.yg)("li",{parentName:"ul"},"clientid")),(0,l.yg)("p",null,"Webhook play","_","done:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"call"),(0,l.yg)("li",{parentName:"ul"},"name"),(0,l.yg)("li",{parentName:"ul"},"bytes","_","in"),(0,l.yg)("li",{parentName:"ul"},"bytes","_","out"),(0,l.yg)("li",{parentName:"ul"},"app"),(0,l.yg)("li",{parentName:"ul"},"addr"),(0,l.yg)("li",{parentName:"ul"},"clientid")),(0,l.yg)("p",null,"Webhook publish:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"call"),(0,l.yg)("li",{parentName:"ul"},"name"),(0,l.yg)("li",{parentName:"ul"},"app"),(0,l.yg)("li",{parentName:"ul"},"addr"),(0,l.yg)("li",{parentName:"ul"},"clientid")),(0,l.yg)("p",null,"Webhook publish","_","done:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"call"),(0,l.yg)("li",{parentName:"ul"},"name"),(0,l.yg)("li",{parentName:"ul"},"bytes","_","in"),(0,l.yg)("li",{parentName:"ul"},"bytes","_","out"),(0,l.yg)("li",{parentName:"ul"},"app"),(0,l.yg)("li",{parentName:"ul"},"addr"),(0,l.yg)("li",{parentName:"ul"},"clientid")),(0,l.yg)("p",null,"Webhook update","_","publish:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"call"),(0,l.yg)("li",{parentName:"ul"},"time"),(0,l.yg)("li",{parentName:"ul"},"timestamp"),(0,l.yg)("li",{parentName:"ul"},"name"),(0,l.yg)("li",{parentName:"ul"},"app"),(0,l.yg)("li",{parentName:"ul"},"addr"),(0,l.yg)("li",{parentName:"ul"},"clientid")))}y.isMDXComponent=!0}}]);