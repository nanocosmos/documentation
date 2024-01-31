"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[586],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=d(a),c=n,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return a?r.createElement(k,o(o({ref:e},u),{},{components:a})):r.createElement(k,o({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50485:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={id:"analytics-api-error-codes",title:"Analytics API Error Codes",sidebar_label:"Error Code Definitions"},o=void 0,i={unversionedId:"cloud/analytics-api-error-codes",id:"cloud/analytics-api-error-codes",title:"Analytics API Error Codes",description:"In this table we provide an overview about all possible error codes that you could encounter using the nanoStream Analytics API.",source:"@site/docs/cloud/analytics-api-error-codes.md",sourceDirName:"cloud",slug:"/cloud/analytics-api-error-codes",permalink:"/docs/cloud/analytics-api-error-codes",draft:!1,tags:[],version:"current",lastUpdatedAt:1706702766,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{id:"analytics-api-error-codes",title:"Analytics API Error Codes",sidebar_label:"Error Code Definitions"},sidebar:"nanoStream Analytics",previous:{title:"Documentation",permalink:"/docs/cloud/analytics-api-docs"},next:{title:"Releases",permalink:"/docs/analytics/features/api/releases"}},s={},d=[{value:"Request Configuration Errors",id:"request-configuration-errors",level:2},{value:"Authentication Errors",id:"authentication-errors",level:2},{value:"Filter Errors",id:"filter-errors",level:2},{value:"Processing Errors",id:"processing-errors",level:2},{value:"Accessability Errors",id:"accessability-errors",level:2}],u={toc:d},p="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this table we provide an overview about all possible error codes that you could encounter using the nanoStream Analytics API."),(0,n.kt)("h2",{id:"request-configuration-errors"},"Request Configuration Errors"),(0,n.kt)("p",null,"The following error codes will be send as a response to faulty request configurations."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Short Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1001")),(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint not found"),(0,n.kt)("td",{parentName:"tr",align:null},"The requested URL was not found on this server. This may happen if you are trying to access a wrong/unavailable URI endpoint. Please verify, that your request will be send to ",(0,n.kt)("strong",{parentName:"td"},"metrics.nanocosmos.de/api/v2/<path-of-your-desired-endpoint",">"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"404")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1002")),(0,n.kt)("td",{parentName:"tr",align:null},"Param required"),(0,n.kt)("td",{parentName:"tr",align:null},"A parameter is required, but is missing in the request. The response body should contain more information about which parameter is missing."),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1003")),(0,n.kt)("td",{parentName:"tr",align:null},"Wrong data type"),(0,n.kt)("td",{parentName:"tr",align:null},"Your request contains a value with an unexpected data type. Make sure you define the correct data type (e.g. numbers with/without quotes)."),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1004")),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid value"),(0,n.kt)("td",{parentName:"tr",align:null},"1 or more parameters you sent, have not passed validation. This happens, if you try to filter for non-existing countries or faulty time range references."),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1005")),(0,n.kt)("td",{parentName:"tr",align:null},"Too many params"),(0,n.kt)("td",{parentName:"tr",align:null},"The route you are trying to access does have a maximum limit of parameters. Some routes do have a limit for stream names or tags filter. Please refer to our ",(0,n.kt)("a",{parentName:"td",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"API documentation")," to check if there are limitations to the used route."),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1006")),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid request body"),(0,n.kt)("td",{parentName:"tr",align:null},"The request body contains invalid/unexpected data or follows an unknown/falsy structure scheme."),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1007")),(0,n.kt)("td",{parentName:"tr",align:null},"Missing props request body"),(0,n.kt)("td",{parentName:"tr",align:null},"The request body has missing properties. Check your request body content and compare it with the route requirements at our ",(0,n.kt)("a",{parentName:"td",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"API documentation")),(0,n.kt)("td",{parentName:"tr",align:null},"422")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1008")),(0,n.kt)("td",{parentName:"tr",align:null},"General request body issue"),(0,n.kt)("td",{parentName:"tr",align:null},"Found issues within the request body. These can be referred to format issues (e.g. stream names must be strings), issues with one or more stream names, that do not belong to your organization or issues regarding stream alert data access, while the stream was manually excluded from alert detection before."),(0,n.kt)("td",{parentName:"tr",align:null},"403")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1009")),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid header"),(0,n.kt)("td",{parentName:"tr",align:null},"The given header is invalid and does follow our request scheme. Details can be found in the response statement."),(0,n.kt)("td",{parentName:"tr",align:null},"403")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"1010")),(0,n.kt)("td",{parentName:"tr",align:null},"Tag stream intersection issue"),(0,n.kt)("td",{parentName:"tr",align:null},"The intersection of multiple sets of streams, which are tagged with the respective tag, has resulted in an empty set of streams. Please use less or other tags for filtering."),(0,n.kt)("td",{parentName:"tr",align:null},"404")))),(0,n.kt)("p",null,"Learn to specify your request correctly by taking a look at our ",(0,n.kt)("a",{parentName:"p",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"API documentation"),"."),(0,n.kt)("h2",{id:"authentication-errors"},"Authentication Errors"),(0,n.kt)("p",null,"These error codes will be send as response, if the user authentication is not working properly."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Short Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"2001")),(0,n.kt)("td",{parentName:"tr",align:null},"User not found"),(0,n.kt)("td",{parentName:"tr",align:null},"The used user account is not known to our systems."),(0,n.kt)("td",{parentName:"tr",align:null},"404")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"2002")),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid user credentials"),(0,n.kt)("td",{parentName:"tr",align:null},"The provided email or/and password is/are incorrect."),(0,n.kt)("td",{parentName:"tr",align:null},"401")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"2011")),(0,n.kt)("td",{parentName:"tr",align:null},"Organization not found"),(0,n.kt)("td",{parentName:"tr",align:null},"The used organization is not known to our systems."),(0,n.kt)("td",{parentName:"tr",align:null},"404")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"2012")),(0,n.kt)("td",{parentName:"tr",align:null},"Organization is not enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"The used organization is not enabled. Please ",(0,n.kt)("a",{parentName:"td",href:"https://www.nanocosmos.de/contact"},"contact us"),"! We will get in touch with you shortly."),(0,n.kt)("td",{parentName:"tr",align:null},"403")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"2021")),(0,n.kt)("td",{parentName:"tr",align:null},"API key not found"),(0,n.kt)("td",{parentName:"tr",align:null},"The provided API key is invalid or malformed."),(0,n.kt)("td",{parentName:"tr",align:null},"404")))),(0,n.kt)("h2",{id:"filter-errors"},"Filter Errors"),(0,n.kt)("p",null,"If the filter options are not used as intended, the user will be notified by these error codes."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Short Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"3001")),(0,n.kt)("td",{parentName:"tr",align:null},"Stream not found"),(0,n.kt)("td",{parentName:"tr",align:null},"The provided stream name is not found on our servers. Please check for typos."),(0,n.kt)("td",{parentName:"tr",align:null},"404")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"3002")),(0,n.kt)("td",{parentName:"tr",align:null},"Tag not found"),(0,n.kt)("td",{parentName:"tr",align:null},"The given stream tag is not found on our servers. Please check for typos and varify if this tag actually exist, using the ",(0,n.kt)("a",{parentName:"td",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/Tag%20Collection"},"bintu API"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"404")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"3003")),(0,n.kt)("td",{parentName:"tr",align:null},"Country not found"),(0,n.kt)("td",{parentName:"tr",align:null},"The provided country/region is not known on our servers. Please check for typos."),(0,n.kt)("td",{parentName:"tr",align:null},"404")))),(0,n.kt)("h2",{id:"processing-errors"},"Processing Errors"),(0,n.kt)("p",null,"Processing errors may be encountered if something unexpected is happening on server side. The causes of this can be the results of a server maintenance, hotfixes or unexpect problems with ingest clients, etc.. If you encounter such errors, please submit a support ticket or ",(0,n.kt)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact us")," directly."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Short Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"4XXX")),(0,n.kt)("td",{parentName:"tr",align:null},"Internal Error"),(0,n.kt)("td",{parentName:"tr",align:null},"Something went wrong on our servers. Please try again later. If this issue persists, please do not hesitate to ",(0,n.kt)("a",{parentName:"td",href:"https://www.nanocosmos.de/contact"},"contact our support team")),(0,n.kt)("td",{parentName:"tr",align:null},"500")))),(0,n.kt)("h2",{id:"accessability-errors"},"Accessability Errors"),(0,n.kt)("p",null,"The following error codes do occur, if you cannot access metric data due to a problem with your login token or user permissions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Short Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"5001")),(0,n.kt)("td",{parentName:"tr",align:null},"Access denied"),(0,n.kt)("td",{parentName:"tr",align:null},"You got no access to the content you requested."),(0,n.kt)("td",{parentName:"tr",align:null},"403")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"5002")),(0,n.kt)("td",{parentName:"tr",align:null},"Access level too low"),(0,n.kt)("td",{parentName:"tr",align:null},"Access denied: The user access level is too low. Reason could be your organisation access level or individual user role."),(0,n.kt)("td",{parentName:"tr",align:null},"403")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"5003")),(0,n.kt)("td",{parentName:"tr",align:null},"Access for Analytics Dashboard only"),(0,n.kt)("td",{parentName:"tr",align:null},"Access denied: This route does not support requests via API. Please consider using our ",(0,n.kt)("a",{parentName:"td",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"Analytics Dashboard")," to access further utilities and details about your live streams and audience!"),(0,n.kt)("td",{parentName:"tr",align:null},"403")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"5011")),(0,n.kt)("td",{parentName:"tr",align:null},"X-ACCESS-TOKEN error"),(0,n.kt)("td",{parentName:"tr",align:null},"The provided login token is invalid or malformed."),(0,n.kt)("td",{parentName:"tr",align:null},"401")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10",(0,n.kt)("strong",{parentName:"td"},"5012")),(0,n.kt)("td",{parentName:"tr",align:null},"X-ACCESS-TOKEN missing"),(0,n.kt)("td",{parentName:"tr",align:null},"JWT token has not been set for the request. Please add to the request header field 'x-access-token' your JWT token."),(0,n.kt)("td",{parentName:"tr",align:null},"401")))))}m.isMDXComponent=!0}}]);