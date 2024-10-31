"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[329],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),g=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=g(r),p=n,m=u["".concat(s,".").concat(p)]||u[p]||y[p]||l;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var g=2;g<l;g++)o[g]=r[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=r(58168),n=(r(96540),r(15680));const l={slug:"/analytics/api-error-codes",id:"analytics-api-error-codes",title:"Analytics API Error Codes",sidebar_label:"Error Code Definitions"},o=void 0,i={unversionedId:"cloud/analytics-api-error-codes",id:"cloud/analytics-api-error-codes",title:"Analytics API Error Codes",description:"In this table we provide an overview about all possible error codes that you could encounter using the nanoStream Analytics API.",source:"@site/docs/cloud/analytics-api-error-codes.md",sourceDirName:"cloud",slug:"/analytics/api-error-codes",permalink:"/docs/analytics/api-error-codes",draft:!1,tags:[],version:"current",lastUpdatedAt:1730387209,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{slug:"/analytics/api-error-codes",id:"analytics-api-error-codes",title:"Analytics API Error Codes",sidebar_label:"Error Code Definitions"},sidebar:"nanoStream Analytics",previous:{title:"Documentation",permalink:"/docs/analytics/api-docs"},next:{title:"Releases",permalink:"/docs/analytics/api-releases"}},s={},g=[{value:"Request Configuration Errors",id:"request-configuration-errors",level:2},{value:"Authentication Errors",id:"authentication-errors",level:2},{value:"Filter Errors",id:"filter-errors",level:2},{value:"Processing Errors",id:"processing-errors",level:2},{value:"Accessability Errors",id:"accessability-errors",level:2}],d={toc:g},u="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In this table we provide an overview about all possible error codes that you could encounter using the nanoStream Analytics API."),(0,n.yg)("h2",{id:"request-configuration-errors"},"Request Configuration Errors"),(0,n.yg)("p",null,"The following error codes will be send as a response to faulty request configurations."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Error Code"),(0,n.yg)("th",{parentName:"tr",align:null},"Short Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1001")),(0,n.yg)("td",{parentName:"tr",align:null},"Endpoint not found"),(0,n.yg)("td",{parentName:"tr",align:null},"The requested URL was not found on this server. This may happen if you are trying to access a wrong/unavailable URI endpoint. Please verify, that your request will be send to ",(0,n.yg)("strong",{parentName:"td"},"metrics.nanocosmos.de/api/v2/<path-of-your-desired-endpoint",">"),"."),(0,n.yg)("td",{parentName:"tr",align:null},"404")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1002")),(0,n.yg)("td",{parentName:"tr",align:null},"Param required"),(0,n.yg)("td",{parentName:"tr",align:null},"A parameter is required, but is missing in the request. The response body should contain more information about which parameter is missing."),(0,n.yg)("td",{parentName:"tr",align:null},"400")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1003")),(0,n.yg)("td",{parentName:"tr",align:null},"Wrong data type"),(0,n.yg)("td",{parentName:"tr",align:null},"Your request contains a value with an unexpected data type. Make sure you define the correct data type (e.g. numbers with/without quotes)."),(0,n.yg)("td",{parentName:"tr",align:null},"400")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1004")),(0,n.yg)("td",{parentName:"tr",align:null},"Invalid value"),(0,n.yg)("td",{parentName:"tr",align:null},"1 or more parameters you sent, have not passed validation. This happens, if you try to filter for non-existing countries or faulty time range references."),(0,n.yg)("td",{parentName:"tr",align:null},"400")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1005")),(0,n.yg)("td",{parentName:"tr",align:null},"Too many params"),(0,n.yg)("td",{parentName:"tr",align:null},"The route you are trying to access does have a maximum limit of parameters. Some routes do have a limit for stream names or tags filter. Please refer to our ",(0,n.yg)("a",{parentName:"td",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"API documentation")," to check if there are limitations to the used route."),(0,n.yg)("td",{parentName:"tr",align:null},"400")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1006")),(0,n.yg)("td",{parentName:"tr",align:null},"Invalid request body"),(0,n.yg)("td",{parentName:"tr",align:null},"The request body contains invalid/unexpected data or follows an unknown/falsy structure scheme."),(0,n.yg)("td",{parentName:"tr",align:null},"400")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1007")),(0,n.yg)("td",{parentName:"tr",align:null},"Missing props request body"),(0,n.yg)("td",{parentName:"tr",align:null},"The request body has missing properties. Check your request body content and compare it with the route requirements at our ",(0,n.yg)("a",{parentName:"td",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"API documentation")),(0,n.yg)("td",{parentName:"tr",align:null},"422")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1008")),(0,n.yg)("td",{parentName:"tr",align:null},"General request body issue"),(0,n.yg)("td",{parentName:"tr",align:null},"Found issues within the request body. These can be referred to format issues (e.g. stream names must be strings), issues with one or more stream names, that do not belong to your organization or issues regarding stream alert data access, while the stream was manually excluded from alert detection before."),(0,n.yg)("td",{parentName:"tr",align:null},"403")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1009")),(0,n.yg)("td",{parentName:"tr",align:null},"Invalid header"),(0,n.yg)("td",{parentName:"tr",align:null},"The given header is invalid and does follow our request scheme. Details can be found in the response statement."),(0,n.yg)("td",{parentName:"tr",align:null},"403")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"1010")),(0,n.yg)("td",{parentName:"tr",align:null},"Tag stream intersection issue"),(0,n.yg)("td",{parentName:"tr",align:null},"The intersection of multiple sets of streams, which are tagged with the respective tag, has resulted in an empty set of streams. Please use less or other tags for filtering."),(0,n.yg)("td",{parentName:"tr",align:null},"404")))),(0,n.yg)("p",null,"Learn to specify your request correctly by taking a look at our ",(0,n.yg)("a",{parentName:"p",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"API documentation"),"."),(0,n.yg)("h2",{id:"authentication-errors"},"Authentication Errors"),(0,n.yg)("p",null,"These error codes will be send as response, if the user authentication is not working properly."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Error Code"),(0,n.yg)("th",{parentName:"tr",align:null},"Short Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"2001")),(0,n.yg)("td",{parentName:"tr",align:null},"User not found"),(0,n.yg)("td",{parentName:"tr",align:null},"The used user account is not known to our systems."),(0,n.yg)("td",{parentName:"tr",align:null},"404")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"2002")),(0,n.yg)("td",{parentName:"tr",align:null},"Invalid user credentials"),(0,n.yg)("td",{parentName:"tr",align:null},"The provided email or/and password is/are incorrect."),(0,n.yg)("td",{parentName:"tr",align:null},"401")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"2011")),(0,n.yg)("td",{parentName:"tr",align:null},"Organization not found"),(0,n.yg)("td",{parentName:"tr",align:null},"The used organization is not known to our systems."),(0,n.yg)("td",{parentName:"tr",align:null},"404")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"2012")),(0,n.yg)("td",{parentName:"tr",align:null},"Organization is not enabled"),(0,n.yg)("td",{parentName:"tr",align:null},"The used organization is not enabled. Please ",(0,n.yg)("a",{parentName:"td",href:"https://www.nanocosmos.de/contact"},"contact us"),"! We will get in touch with you shortly."),(0,n.yg)("td",{parentName:"tr",align:null},"403")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"2021")),(0,n.yg)("td",{parentName:"tr",align:null},"API key not found"),(0,n.yg)("td",{parentName:"tr",align:null},"The provided API key is invalid or malformed."),(0,n.yg)("td",{parentName:"tr",align:null},"404")))),(0,n.yg)("h2",{id:"filter-errors"},"Filter Errors"),(0,n.yg)("p",null,"If the filter options are not used as intended, the user will be notified by these error codes."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Error Code"),(0,n.yg)("th",{parentName:"tr",align:null},"Short Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"3001")),(0,n.yg)("td",{parentName:"tr",align:null},"Stream not found"),(0,n.yg)("td",{parentName:"tr",align:null},"The provided stream name is not found on our servers. Please check for typos."),(0,n.yg)("td",{parentName:"tr",align:null},"404")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"3002")),(0,n.yg)("td",{parentName:"tr",align:null},"Tag not found"),(0,n.yg)("td",{parentName:"tr",align:null},"The given stream tag is not found on our servers. Please check for typos and varify if this tag actually exist, using the ",(0,n.yg)("a",{parentName:"td",href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/Tag%20Collection"},"bintu API"),"."),(0,n.yg)("td",{parentName:"tr",align:null},"404")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"3003")),(0,n.yg)("td",{parentName:"tr",align:null},"Country not found"),(0,n.yg)("td",{parentName:"tr",align:null},"The provided country/region is not known on our servers. Please check for typos."),(0,n.yg)("td",{parentName:"tr",align:null},"404")))),(0,n.yg)("h2",{id:"processing-errors"},"Processing Errors"),(0,n.yg)("p",null,"Processing errors may be encountered if something unexpected is happening on server side. The causes of this can be the results of a server maintenance, hotfixes or unexpect problems with ingest clients, etc.. If you encounter such errors, please submit a support ticket or ",(0,n.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact us")," directly."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Error Code"),(0,n.yg)("th",{parentName:"tr",align:null},"Short Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"4XXX")),(0,n.yg)("td",{parentName:"tr",align:null},"Internal Error"),(0,n.yg)("td",{parentName:"tr",align:null},"Something went wrong on our servers. Please try again later. If this issue persists, please do not hesitate to ",(0,n.yg)("a",{parentName:"td",href:"https://www.nanocosmos.de/contact"},"contact our support team")),(0,n.yg)("td",{parentName:"tr",align:null},"500")))),(0,n.yg)("h2",{id:"accessability-errors"},"Accessability Errors"),(0,n.yg)("p",null,"The following error codes do occur, if you cannot access metric data due to a problem with your login token or user permissions."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Error Code"),(0,n.yg)("th",{parentName:"tr",align:null},"Short Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"HTTP Code"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"5001")),(0,n.yg)("td",{parentName:"tr",align:null},"Access denied"),(0,n.yg)("td",{parentName:"tr",align:null},"You got no access to the content you requested."),(0,n.yg)("td",{parentName:"tr",align:null},"403")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"5002")),(0,n.yg)("td",{parentName:"tr",align:null},"Access level too low"),(0,n.yg)("td",{parentName:"tr",align:null},"Access denied: The user access level is too low. Reason could be your organisation access level or individual user role."),(0,n.yg)("td",{parentName:"tr",align:null},"403")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"5003")),(0,n.yg)("td",{parentName:"tr",align:null},"Access for Analytics Dashboard only"),(0,n.yg)("td",{parentName:"tr",align:null},"Access denied: This route does not support requests via API. Please consider using our ",(0,n.yg)("a",{parentName:"td",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"Analytics Dashboard")," to access further utilities and details about your live streams and audience!"),(0,n.yg)("td",{parentName:"tr",align:null},"403")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"5011")),(0,n.yg)("td",{parentName:"tr",align:null},"X-ACCESS-TOKEN error"),(0,n.yg)("td",{parentName:"tr",align:null},"The provided login token is invalid or malformed."),(0,n.yg)("td",{parentName:"tr",align:null},"401")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"10",(0,n.yg)("strong",{parentName:"td"},"5012")),(0,n.yg)("td",{parentName:"tr",align:null},"X-ACCESS-TOKEN missing"),(0,n.yg)("td",{parentName:"tr",align:null},"JWT token has not been set for the request. Please add to the request header field 'x-access-token' your JWT token."),(0,n.yg)("td",{parentName:"tr",align:null},"401")))))}y.isMDXComponent=!0}}]);