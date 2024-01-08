"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"bintu_ios_sdk",title:"bintu.live client SDK",sidebar_label:"bintu.live client SDK"},i=void 0,s={unversionedId:"nanostream/ios/bintu_ios_sdk",id:"nanostream/ios/bintu_ios_sdk",title:"bintu.live client SDK",description:"(c) 2016-2019 nanocosmos gmbh",source:"@site/docs/nanostream/ios/bintu_ios_sdk.md",sourceDirName:"nanostream/ios",slug:"/nanostream/ios/bintu_ios_sdk",permalink:"/docs/nanostream/ios/bintu_ios_sdk",draft:!1,tags:[],version:"current",lastUpdatedAt:1704708501,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"bintu_ios_sdk",title:"bintu.live client SDK",sidebar_label:"bintu.live client SDK"},sidebar:"nanoStream Apps & SDKs",previous:{title:"SDK for iOS",permalink:"/docs/nanostream/ios/nanostream_ios_sdk"},next:{title:"iOS Streaming App in 5 Minutes",permalink:"/docs/nanostream/ios/bintu_ios_sample"}},l={},c=[{value:"LEGAL NOTICE",id:"legal-notice",level:2},{value:"Importing the Bintu.framework",id:"importing-the-bintuframework",level:2},{value:"Bintu.live platform connection",id:"bintulive-platform-connection",level:2},{value:"Strip simulator architectur slices",id:"strip-simulator-architectur-slices",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"(c) 2016-2019 nanocosmos gmbh\n",(0,a.kt)("a",{parentName:"p",href:"http://www.nanocosmos.de"},"http://www.nanocosmos.de")),(0,a.kt)("p",null,"Version 0.2.1"),(0,a.kt)("p",null,"The bintu.live client SDK is used to generate and access live stream URLs from the bintu.live service from nanoStream Cloud\nto be used in combination with the nanoStream SDKs for live video encoding and broadcast."),(0,a.kt)("h2",{id:"legal-notice"},"LEGAL NOTICE"),(0,a.kt)("p",null,"This material is subject to the terms and conditions defined in\nseparate license conditions ('LICENSE.txt')\nAll information contained herein is, and remains the property\nof nanocosmos GmbH and its suppliers if any. The intellectual and technical concepts\ncontained herein are proprietary to nanocosmos GmbH, and are protected by trade secret\nor copyright law. Dissemination of this information or reproduction of this material\nis strictly forbidden unless prior written permission is obtained from nanocosmos."),(0,a.kt)("h2",{id:"importing-the-bintuframework"},"Importing the Bintu.framework"),(0,a.kt)("p",null,'Open your Xcode project and go to the "General" tab of your application target. Drag the ',(0,a.kt)("inlineCode",{parentName:"p"},"Bintu.framework"),' file to the section "Embedded Binaries" of your application target. Check "Copy items if needed" when asked.'),(0,a.kt)("p",null,"After embedding and linking it, you can import the SDK anywhere you need it with the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#import <Bintu/Bintu.h>\n")),(0,a.kt)("h2",{id:"bintulive-platform-connection"},"Bintu.live platform connection"),(0,a.kt)("p",null,"Our Bintu.live connection component (Bintu.framework) consists of an entry point API client class ",(0,a.kt)("inlineCode",{parentName:"p"},"BNTAPIClient")," which you use to make calls to our streaming platform. There are other class, like ",(0,a.kt)("inlineCode",{parentName:"p"},"BNTStreamInfo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BNTRTMPInfo")," which mainly hold the configuration you receive from the ",(0,a.kt)("inlineCode",{parentName:"p"},"BNTAPIClient"),"."),(0,a.kt)("p",null,"In general, if you want to interface with our streaming platform, you construct an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BNTAPIClient")," with its main constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BNTAPIClient *client = [BNTAPIClient initWithAPIKey:apiKey];\n")),(0,a.kt)("p",null,"Once you have an instance, you can create new streams with it, receive information about a previously created stream or list all streams that are present on your account."),(0,a.kt)("p",null,"Lets step through these in detail:"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"createStream")," call you create a new stream. You would use this in your broadcaster app. In the completion block of this method, you get an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"BNTStreamInfo")," which exposes an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"BNTRTMPIngest")," which holds the configuration you need to stream to bintu.live."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[client createStreamWithCompletion:^(BNTStreamInfo *stream, NSError *err) {\n    self.streamID = stream.id;\n    self.streamURL = stream.ingest.rtmpInfo.url;\n    self.streamName = stream.ingest.rtmpInfo.streamName;\n}];\n")),(0,a.kt)("p",null,"With the",(0,a.kt)("inlineCode",{parentName:"p"},"getStreamWithID")," call you can receive information about a previously created stream. In most cases, you would take the stream ID you get while creating a stream and store it on your own server somewhere. If anyone wants to view a stream, you send that ID to the player app. Then you can receive that stream's playout information.\nFor example, if you want to play the stream via HLS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[client getStreamWithID:@"<a long id>" andCompletion:^(BNTStreamInfo *stream, NSError *err) {\n    BNTHLSPlayout *playout = [stream.hlsPlayouts firstObject];\n    self.hlsURL = playout.url;\n}];\n')),(0,a.kt)("p",null,"You can also list all streams on your account with the ",(0,a.kt)("inlineCode",{parentName:"p"},"getStreams")," call. For example, you can bypass your server, get all streams on the player and let the user select the one they want to see. Or you just play the first one that is live, like shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[client getStreamsWithCompletion:^(NSArray *streams, NSError *err) {\n    for (BNTStreamInfo *stream in streams) {\n        if (stream.state == BNTStreamStateLive) {\n            // play stream!\n        }\n    }\n}];\n")),(0,a.kt)("p",null,"But this example can be made simpler. There is also the ",(0,a.kt)("inlineCode",{parentName:"p"},"getStreamsWithState")," call (added in version 0.2.0 of the Bintu.framework) which allows you filter the streams by state directly on the server, resulting in quicker load times. The above example can be implemented like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[client getStreamsWithState:BNTStreamStateLive completion:^(NSArray *streams, NSError *err) {\n    // all objects in streams have state = live\n    BNTStreamInfo *stream = [streams firstObject];\n    if (stream) {\n        // play stream!\n    }  \n}];\n")),(0,a.kt)("p",null,"That was a basic overview of our bintu.live component."),(0,a.kt)("h2",{id:"strip-simulator-architectur-slices"},"Strip simulator architectur slices"),(0,a.kt)("p",null,"Xcode 6 and sometimes higher versions contain a bug where an app containing an embedded framework cannot be submitted to the app store when the framework contains simulator architectures (see ",(0,a.kt)("a",{parentName:"p",href:"http://www.openradar.me/radar?id=6409498411401216"},"here"),")."),(0,a.kt)("p",null,"On the other hand, including the simulator architectures in the framework is necessary for anyone that wants to test their app (and also the bintu.live connector) on the simulator."),(0,a.kt)("p",null,"The workaround is that Bintu.framework contains a script (",(0,a.kt)("inlineCode",{parentName:"p"},"strip-frameworks.sh"),") which removes the simulator architectures from the framework just before submitting to the app store."),(0,a.kt)("p",null,'For this to work correctly, you need to add a "Run Script Phase" to your Xcode app target. This phase has to come after the "Embed Frameworks" phase otherwise it will not work.'),(0,a.kt)("p",null,'The "Run Script" phase should contain following line:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/Bintu.framework/strip-frameworks.sh"\n')),(0,a.kt)("p",null,"This should be all that is needed to work around the Xcode bug."))}u.isMDXComponent=!0}}]);