"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[4916],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,y=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const o={id:"Dashboard_Alerting",title:"Alerts and Advices",sidebar_label:"Alerts and Advices"},i="Analytics: Alerts and Advices",l={unversionedId:"cloud-frontend-v3/Dashboard_Alerting",id:"cloud-frontend-v3/Dashboard_Alerting",title:"Alerts and Advices",description:"With the release of version 3.7.1.0, the nanoStream Cloud Dashboard has enhanced its user interface in addition to the Analytics Dashboard.",source:"@site/docs/cloud-frontend-v3/Dashboard_Alerting.md",sourceDirName:"cloud-frontend-v3",slug:"/cloud-frontend-v3/Dashboard_Alerting",permalink:"/docs/cloud-frontend-v3/Dashboard_Alerting",draft:!1,tags:[],version:"current",lastUpdatedAt:1715695199,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{id:"Dashboard_Alerting",title:"Alerts and Advices",sidebar_label:"Alerts and Advices"},sidebar:"nanoStream Cloud",previous:{title:"Metrics",permalink:"/docs/cloud-frontend-v3/Dashboard_Metrics"},next:{title:"Bintu API",permalink:"/docs/cloud/bintu_api"}},s={},d=[{value:"General",id:"general",level:2},{value:"Alerts",id:"alerts",level:2},{value:"Alert Info",id:"alert-info",level:3},{value:"Responding to Alerts",id:"responding-to-alerts",level:3},{value:"Advices",id:"advices",level:2},{value:"Advice Info",id:"advice-info",level:3}],c={toc:d},p="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"analytics-alerts-and-advices"},"Analytics: Alerts and Advices"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"Analytics Enhancement from Version ",(0,r.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"3.7.1.0")),(0,r.yg)("p",{parentName:"admonition"},"With the release of version ",(0,r.yg)("inlineCode",{parentName:"p"},"3.7.1.0"),", the ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/"},"nanoStream Cloud Dashboard")," has enhanced its user interface in addition to the ",(0,r.yg)("a",{parentName:"p",href:"https://metrics.nanocosmos.de"},"Analytics Dashboard"),".")),(0,r.yg)("h2",{id:"general"},"General"),(0,r.yg)("p",null,"Alerts and advices are tools provided by nanoStream Cloud to give you real-time feedback and recommendations about your live streams. They provide invaluable insights into the performance of your live streams, potential issues, and even suggestions on how to enhance the viewer experience."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"All generated alerts and advices can be accessed in the nanoStream Cloud Dashboard ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/alerts"},"here"),".")),(0,r.yg)("admonition",{title:"Before starting",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To begin, please sign in using your nanoStream Cloud/Bintu account credentials. ",(0,r.yg)("br",null),"\nIf you have not created an account yet, you can ",(0,r.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/auth?signup"},"sign up")," or reach out to our dedicated sales team via the ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/contact"},"contact form")," or by sending an email to sales(at)nanocosmos.de.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Screenshot: Alerts and Advices",src:a(58690).A,width:"3456",height:"1890"}),"\n",(0,r.yg)("em",{parentName:"p"},"Screenshot: Alerts and Advices")),(0,r.yg)("p",null,'At the top of the "Alerts" page, you\'ll find a comparative analysis indicating the total number of alerts in relation to the number of streams you have. This helps gauge the overall health of your live streams at a glance.'),(0,r.yg)("p",null,"Below this, the health status of your live streams is depicted. If there are any alerts or advices associated with your streams, they'll be represented on a bar. This visual representation provides a quick insight into the number and type of alerts or advices you might have."),(0,r.yg)("p",null,"Further down, alerts and advices are categorized based on their severity levels. Each category can be expanded with a simple click, allowing you to delve deeper into the specifics of each alert or advice, helping you to address any concerns promptly."),(0,r.yg)("admonition",{title:"Details",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Both alerts and advices within the nanoStream Cloud are fortified with detailed attributes to offer a comprehensive understanding of the streaming scenario:"),(0,r.yg)("h4",{parentName:"admonition",id:"streaminfo"},"Streaminfo:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"City"),": Pinpoints the city from which the stream originates."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Country"),": Determines the country where the stream is broadcasted from."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"IP Address"),": Provides the specific IP address responsible for the stream's broadcast."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Provider"),": Indicates the service provider managing the stream."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Server"),": Specifies the server responsible for processing the stream."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Resolution"),": Gives insight into the stream's quality and dimensions.")),(0,r.yg)("p",{parentName:"admonition"},"In addition to the stream-specific details, there are specific ",(0,r.yg)("a",{parentName:"p",href:"#alert-info"},"alert informations")," and ",(0,r.yg)("a",{parentName:"p",href:"#advice-info"},"advice informations")," attributes that relay crucial information. These characteristics are elaborated upon in the tables below, offering a dual-layer of intelligence for optimal stream management.")),(0,r.yg)("h2",{id:"alerts"},"Alerts"),(0,r.yg)("p",null,"Alerts are immediate notifications generated when there's a potential issue or a noteworthy event related to your live streams."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Screenshot: Expanded Critical Alert",src:a(39784).A,width:"3456",height:"2958"}),"\n",(0,r.yg)("em",{parentName:"p"},"Screenshot: Expanded Critical Alerts")),(0,r.yg)("h3",{id:"alert-info"},"Alert Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Severity"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("span",{className:"badge badge-criticalAlert"},"Critical")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("span",{className:"badge badge-criticalAlert"},"Critical"),", ",(0,r.yg)("span",{className:"badge badge-moderateAlert"},"Moderate"),", ",(0,r.yg)("span",{className:"badge badge-minorAlert"},"Minor")," or ",(0,r.yg)("span",{className:"badge badge-adviceAlert"},"Advices"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Code"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"22001")),(0,r.yg)("td",{parentName:"tr",align:null},"A unique code for the alert type. By clicking on the button, you will be redirected to the ",(0,r.yg)("a",{parentName:"td",href:"/docs/analytics/alerting#alert-codes"},"analytics documentation"),", where you can learn what this specific error code means.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Type"),(0,r.yg)("td",{parentName:"tr",align:null},"Continuous Restarts"),(0,r.yg)("td",{parentName:"tr",align:null},"The nature of the alert.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Message"),(0,r.yg)("td",{parentName:"tr",align:null},"The ingest stream starts and stops continuously."),(0,r.yg)("td",{parentName:"tr",align:null},"A detailed description of the alert.")))),(0,r.yg)("h3",{id:"responding-to-alerts"},"Responding to Alerts"),(0,r.yg)("admonition",{title:"nanoStream Analytics Documentation",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To learn more about the ",(0,r.yg)("em",{parentName:"p"},"Alerts & Advices")," feature, you can visit our dedicated ",(0,r.yg)("a",{parentName:"p",href:"../analytics/alerting"},"alerts documentation")," as part of our analytics documentation. You will be able to understand how it works and how to proceed once you get an alert or advice.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Understand the Message"),":\nDetermine if the alert message is self-explanatory. Often, the alert might provide clear insights into the issue and potential remedies."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Refer to the Documentation"),":\nAlways consult the specific ",(0,r.yg)("a",{parentName:"p",href:"/docs/analytics/alerting#alert-codes"},"alert code description")," for a deeper understanding of the alert and the recommended corrective actions."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Troubleshoot the Alert"),":\nIf the problem persists or isn't evident, consider using our troubleshooting tools available on the ",(0,r.yg)("a",{parentName:"p",href:"https://metrics.nanocosmos.de/troubleshooting"},"Analytics Dashboard"),". "),(0,r.yg)("admonition",{title:"Troubleshooting",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The troubleshooting page on the ",(0,r.yg)("a",{parentName:"p",href:"https://metrics.nanocosmos.de/"},"Analytics Dashboard")," helps to investigate stream or user specific metrics across the streaming experience from stream ingest to the playout at the enduser. ",(0,r.yg)("br",null),"\nLearn more on how to troubleshoot ",(0,r.yg)("a",{parentName:"p",href:"../analytics/troubleshooting"},"here"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. Contact Support"),":\nIf challenges persist, we're here to help! ",(0,r.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/support"},"Create a new support request")," and ensure you attach all relevant data related to the alert. Our team will address your concerns promptly."),(0,r.yg)("h2",{id:"advices"},"Advices"),(0,r.yg)("p",null,"Advices provide recommendations and best practices to enhance the quality and viewer experience of your live streams."),(0,r.yg)("h3",{id:"advice-info"},"Advice Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Code"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"29001")),(0,r.yg)("td",{parentName:"tr",align:null},"A unique code for the advice type. Read more ",(0,r.yg)("a",{parentName:"td",href:"/docs/analytics/alerting#advice-codes"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Type"),(0,r.yg)("td",{parentName:"tr",align:null},"ABR Recommended"),(0,r.yg)("td",{parentName:"tr",align:null},"The nature of the advice.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Message"),(0,r.yg)("td",{parentName:"tr",align:null},"The ingest stream has a high bitrate. Consider using adaptive bitrate streams to ensure smooth playback for viewers with poor connections."),(0,r.yg)("td",{parentName:"tr",align:null},"A detailed description of the advice, providing actionable recommendations.")))))}g.isMDXComponent=!0},58690:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cf-alerts-page-fa6a95de991c2a03e1d6840d06f2712c.png"},39784:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cf-critical-alerts-492731298bbd4e2056b9da2fecf218cf.png"}}]);