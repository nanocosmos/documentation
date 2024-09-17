"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4410],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,m=p["".concat(s,".").concat(g)]||p[g]||y[g]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},62878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={slug:"/analytics/api-docs",id:"analytics-api-docs",title:"Analytics API Docs",sidebar_label:"Documentation"},o=void 0,l={unversionedId:"cloud/analytics-api-docs",id:"cloud/analytics-api-docs",title:"Analytics API Docs",description:"Technical Developer Documentation",source:"@site/docs/cloud/analytics-api-documentation.md",sourceDirName:"cloud",slug:"/analytics/api-docs",permalink:"/docs/analytics/api-docs",draft:!1,tags:[],version:"current",lastUpdatedAt:1726579045,formattedLastUpdatedAt:"Sep 17, 2024",frontMatter:{slug:"/analytics/api-docs",id:"analytics-api-docs",title:"Analytics API Docs",sidebar_label:"Documentation"},sidebar:"nanoStream Analytics",previous:{title:"API",permalink:"/docs/analytics/api"},next:{title:"Error Code Definitions",permalink:"/docs/analytics/api-error-codes"}},s={},c=[{value:"Technical Developer Documentation",id:"technical-developer-documentation",level:2},{value:"General Details",id:"general-details",level:2},{value:"Rate Limit",id:"rate-limit",level:3},{value:"API Categories",id:"api-categories",level:2},{value:"Usage Metrics",id:"usage-metrics",level:3},{value:"H5Live Metrics",id:"h5live-metrics",level:3},{value:"Webcaster Metrics",id:"webcaster-metrics",level:3},{value:"Viewer Metrics",id:"viewer-metrics",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Alerting",id:"alerting",level:3},{value:"Successful Playback Start Ratio",id:"successful-playback-start-ratio",level:3},{value:"How To Use",id:"how-to-use",level:4},{value:"General Details",id:"general-details-1",level:4},{value:"API Details",id:"api-details",level:4},{value:"Example Use Case",id:"example-use-case",level:4},{value:"Filtering",id:"filtering",level:3}],u={toc:c},p="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"technical-developer-documentation"},"Technical Developer Documentation"),(0,n.yg)("p",null,"For API route specifications please refer to our ",(0,n.yg)("a",{className:"badge-inText",href:"https://metrics.nanocosmos.de/api/doc/v2/"},"technical API documentation. \u2699\ufe0f")),(0,n.yg)("h2",{id:"general-details"},"General Details"),(0,n.yg)("h3",{id:"rate-limit"},"Rate Limit"),(0,n.yg)("p",null,"This API limits the number of requests to ",(0,n.yg)("strong",{parentName:"p"},"1 request per second")," but allows a temporary ",(0,n.yg)("strong",{parentName:"p"},"burst rate of up to 30 requests per second")," to be processed immediately without delay. If the rate limit is exceeded, you will receive a 502 (Bad Gateway) or 504 (Gateway Timeout) HTTP error code from Nginx."),(0,n.yg)("h2",{id:"api-categories"},"API Categories"),(0,n.yg)("h3",{id:"usage-metrics"},"Usage Metrics"),(0,n.yg)("p",null,"These routes provide a detailed overview of your organisation's traffic volume in a specified time frame."),(0,n.yg)("h3",{id:"h5live-metrics"},"H5Live Metrics"),(0,n.yg)("p",null,"H5Live metrics routes offer a wide spectrum of information about everything connected to the H5Live player. "),(0,n.yg)("h3",{id:"webcaster-metrics"},"Webcaster Metrics"),(0,n.yg)("p",null,"To get more information about the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_introduction"},"nanoStream Webcaster")," usage in practice and it's benefits regarding additional meta data for ingest metrics, consider taking a look at these routes."),(0,n.yg)("h3",{id:"viewer-metrics"},"Viewer Metrics"),(0,n.yg)("p",null,"Viewer metrics let you analyze the experience of your audiences."),(0,n.yg)("h3",{id:"monitoring"},"Monitoring"),(0,n.yg)("p",null,"Being able to monitor your live streams is a great idea to observe live performances and be always up-to-date about your streaming ."),(0,n.yg)("h3",{id:"alerting"},"Alerting"),(0,n.yg)("p",null,"The alerting routes provide an overview of either your current and historical alerts, recommended actions and their potential causes. For more details about Alerting, please refer to our ",(0,n.yg)("a",{parentName:"p",href:"https://docs.nanocosmos.de/docs/analytics/features/monitoring"},"Stream Health Monitoring Guide"),"."),(0,n.yg)("h3",{id:"successful-playback-start-ratio"},"Successful Playback Start Ratio"),(0,n.yg)("p",null,"This ratio determines the relation between all occuring playback initializations that ",(0,n.yg)("strong",{parentName:"p"},"DO NOT")," terminate with an error ",(0,n.yg)("strong",{parentName:"p"},"within the first 30 seconds")," after the playback starts and the total number of playback initializations. Terminations after pausing or subsequently restarting the playback are not taken into account."),(0,n.yg)("div",{style:{display:"flex",justifyContent:"center"},className:"inline-math"},"SPSR = (100 - failed playback starts) * 100 / all playbacks"),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"SPSR"),' = "Successful Playback Start Ratio"'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"PSE"),' = "Playback Start Error"'))),(0,n.yg)("h4",{id:"how-to-use"},"How To Use"),(0,n.yg)("h4",{id:"general-details-1"},"General Details"),(0,n.yg)("p",null,"The services of nanoStream Analytics determine the ",(0,n.yg)("strong",{parentName:"p"},"SPSR")," and ",(0,n.yg)("strong",{parentName:"p"},"PSE")," based on the player metrics data for every minute with a ",(0,n.yg)("strong",{parentName:"p"},"5 minute delay")," to the current minute.\nEither the calculated ",(0,n.yg)("strong",{parentName:"p"},"ratios and errors")," are based on your ",(0,n.yg)("strong",{parentName:"p"},"organisation"),", ",(0,n.yg)("strong",{parentName:"p"},"stream"),", ",(0,n.yg)("strong",{parentName:"p"},"tag")," or ",(0,n.yg)("strong",{parentName:"p"},"country")," of choice and offer different ",(0,n.yg)("strong",{parentName:"p"},"breakdown terms"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Stream & Country (depends on the route)"),(0,n.yg)("li",{parentName:"ul"},"Browser"),(0,n.yg)("li",{parentName:"ul"},"Browser Version"),(0,n.yg)("li",{parentName:"ul"},"Referrer"),(0,n.yg)("li",{parentName:"ul"},"OS"),(0,n.yg)("li",{parentName:"ul"},"OS Version"),(0,n.yg)("li",{parentName:"ul"},"Player Version"),(0,n.yg)("li",{parentName:"ul"},"City"),(0,n.yg)("li",{parentName:"ul"},"IP"),(0,n.yg)("li",{parentName:"ul"},"Initial ABR Profile"),(0,n.yg)("li",{parentName:"ul"},"Media Playback API"),(0,n.yg)("li",{parentName:"ul"},"Fast Start")),(0,n.yg)("h4",{id:"api-details"},"API Details"),(0,n.yg)("p",null,"Basically the API routes are divided in 2 groups: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://metrics.nanocosmos.de/api/doc/v2/#tag/Playback-start-success"},"SPSR API Routes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://metrics.nanocosmos.de/api/doc/v2/#tag/Playback-start-errors"},"PSE API Routes"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"SPSR")," returns 3 metric values:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Total count of errors"),(0,n.yg)("li",{parentName:"ul"},"Total count of playback starts"),(0,n.yg)("li",{parentName:"ul"},"Proportion in percent of playback starts to sum of playback starts from all buckets")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"PSE")," returns a break down of:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The found error codes & error messages (usually error code and message is 1:1 linked) occurred at playback start (refers to total count of errors of the SPSR metric)")),(0,n.yg)("h4",{id:"example-use-case"},"Example Use Case"),(0,n.yg)("u",null,"Problem"),":",(0,n.yg)("p",null,"A high number of errors can be observed since yesterday morning.",(0,n.yg)("br",null),"\nThe assumption is made that this was caused by the h5live player version upgrade.",(0,n.yg)("br",null),"\nProblem is particularly present in brazil and needs validation whether this affects a large number of clients.",(0,n.yg)("br",null),"\nThe ",(0,n.yg)("strong",{parentName:"p"},"SPSR")," & ",(0,n.yg)("strong",{parentName:"p"},"PSE")," API routes can possibly reveal more insights about this incident."),(0,n.yg)("u",null,"How to investigate"),":",(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Get an overview of the SPSR with a timeseries with selected time interval 'hour':",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"li"},"/api/v2/playback/start/success/ratio/timeseries?from=2024-04-09T00%3A00&to=2024-04-11T00%3A00&interval=hour")," "),(0,n.yg)("li",{parentName:"ol"},"The response shows a ",(0,n.yg)("strong",{parentName:"li"},"slight SPSR drop")," for 2 consecutive hours"),(0,n.yg)("li",{parentName:"ol"},"Take this time range and check if a certain country is responsible for the drop:",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"li"},"/api/v2/playback/start/success/ratio/world?from=2024-04-10T19%3A00&to=2024-04-10T21%3A00")),(0,n.yg)("li",{parentName:"ol"},"Found some countries with quite ",(0,n.yg)("strong",{parentName:"li"},"low SPSR")," but for the most, the playback start count / proportion is not quite high, compared to the playback start count of all countries, so they affect the ",(0,n.yg)("strong",{parentName:"li"},"average SPSR")," not significantly"),(0,n.yg)("li",{parentName:"ol"},"To get a better view of the data repeat the request with the added URL parameter ",(0,n.yg)("inlineCode",{parentName:"li"},"&format=csv")),(0,n.yg)("li",{parentName:"ol"},"The generated .csv file can be used in Excel to obtain a compact table which offers the option of quick sorting of the countries (for example for playback starts)"),(0,n.yg)("li",{parentName:"ol"},"In this case Brazil shows an ",(0,n.yg)("strong",{parentName:"li"},"inconspicuous SPSR"),", means the customer ",(0,n.yg)("strong",{parentName:"li"},"assertion can't be confirmed"),", maybe they refer rather to errors after the 30 seconds after playback start, which is not considered in the SPSR metrics"),(0,n.yg)("li",{parentName:"ol"},"To get an idea why the SPSR is low for the selected time range, breakdown the data for a country with both qualities low SPSR and a fairly high count of playback starts / proportion: as an example Armenia would fulfill both criteria"),(0,n.yg)("li",{parentName:"ol"},"Get the IP breakdown of the error codes for Armenia:",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"li"},"/api/v2/playback/start/errors/countries/ip?from=2024-04-10T19%3A00&to=2024-04-10T21%3A00&countries=AM")),(0,n.yg)("li",{parentName:"ol"},"The response exhibits that almost all errors were generated by one IP, which means it is ",(0,n.yg)("strong",{parentName:"li"},"not a general problem"))),(0,n.yg)("h3",{id:"filtering"},"Filtering"),(0,n.yg)("p",null,"The filtering section lets you discover your available filter options to refine your requests, so you can get the information that is needed."))}y.isMDXComponent=!0}}]);