"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[7734],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?t.createElement(g,i(i({ref:a},d),{},{components:n})):t.createElement(g,i({ref:a},d))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45972:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const o={id:"nanostream_android_developer_manual_sample",title:"Sample",sidebar_label:"Sample"},i=void 0,p={unversionedId:"nanostream/android/nanostream_android_developer_manual_sample",id:"nanostream/android/nanostream_android_developer_manual_sample",title:"Sample",description:"Quickstart",source:"@site/docs/nanostream/android/nanostream_android_developer_manual_sample.md",sourceDirName:"nanostream/android",slug:"/nanostream/android/nanostream_android_developer_manual_sample",permalink:"/docs/nanostream/android/nanostream_android_developer_manual_sample",draft:!1,tags:[],version:"current",lastUpdatedAt:1730716027,formattedLastUpdatedAt:"Nov 4, 2024",frontMatter:{id:"nanostream_android_developer_manual_sample",title:"Sample",sidebar_label:"Sample"},sidebar:"nanoStream Apps & SDKs",previous:{title:"Streaming Media",permalink:"/docs/nanostream/android/nanostream_android_developer_manual_streaming"},next:{title:"Developer Quickstart",permalink:"/docs/nanostream/ios/nanostream_ios_quick_start"}},l={},s=[{value:"Quickstart",id:"quickstart",level:2},{value:"Player Sample",id:"player-sample",level:2},{value:"Description",id:"description",level:3},{value:"Usage",id:"usage",level:3},{value:"About",id:"about",level:3},{value:"Streamer Sample",id:"streamer-sample",level:2},{value:"Description",id:"description-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"About",id:"about-1",level:3}],d={toc:s},m="wrapper";function c(e){let{components:a,...o}=e;return(0,r.yg)(m,(0,t.A)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"quickstart"},"Quickstart"),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"nanoStream SDK")," contains libraries for developing streaming apps for Android devices or for incorporating streaming capabilities in your existing Android applications."),(0,r.yg)("p",null,"Three samples are\xa0included\xa0to show\xa0the basic usage of the nanoStream SDK (Android-BasicStreamer, Android-StreamerSample and Android-Player). \xa0You will need to download and install the latest version of Android Studio. Visit the ",(0,r.yg)("a",{parentName:"p",href:"http://www.nanocosmos.de/v4/order/demo.php"},"Download Page"),"\xa0of Nanocosmos to download\xa0a trial version of\xa0the nanoStream SDK\xa0(version 4.3.0 supports \xa0Android API-Level from 16 up to 23). Contact Nanocosmos for obtaining a licence longer than the trial period."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Android-BasicStreamer"),": this sample contains a single java file that starts and stops a stream.\xa0How-to\xa0start running the sample."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Android-StreamerSample"),": this sample contains a single java file that starts and stops a stream and includes options for adjusting the quality of the stream."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Android-Player"),": this sample contains a single java file that starts and stops playing a stream from a remote source."),(0,r.yg)("h2",{id:"player-sample"},"Player Sample"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This sample shows the basic usage of the nanoStream Android SDK for player apps."),(0,r.yg)("h3",{id:"usage"},"Usage"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1: Unzip the sample project to the desired project path")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2: Copy the SDK libraries into the Android Studio project")),(0,r.yg)("p",null,"Before runnig the sample, six libraries have to copied from the SDK library folder:\nAdd the ",(0,r.yg)("inlineCode",{parentName:"p"},"net.nanocosmos.nanoStream.jar")," java component to the Android Studio project by copying ",(0,r.yg)("inlineCode",{parentName:"p"},"[SDK]/libs/net.nanocosmos.nanoStream.jar")," to the folder ",(0,r.yg)("inlineCode",{parentName:"p"},"[projectpath]/app/libs/net.nanocosmos.nanoStream.jar")),(0,r.yg)("p",null,"Add the nanoStream.so native components to the Android Studio project by copying the 5 folders ",(0,r.yg)("inlineCode",{parentName:"p"},"[SDK]/libs/[platform]/libRTMPStream.so")," to\n",(0,r.yg)("inlineCode",{parentName:"p"},"[projectpath]/app/src/main/jniLibs/[platform]/libRTMPStream.so")),(0,r.yg)("p",null,"Platforms are ",(0,r.yg)("inlineCode",{parentName:"p"},"armeabi"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"armeabi-v7a"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"arm64-v8a"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"x86"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"mips")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 3: Open the PlayerActivity.java in the Android Studio Code Editor"),"\nThe PlayerActivity contains the main application code. The location is:\n",(0,r.yg)("inlineCode",{parentName:"p"},"[projectpath]/app/src/main/java/net/nanocosmos/nanoStream/demo/player")),(0,r.yg)("p",null,"Your window should look like this:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Git-Android-Player",src:n(67696).A,width:"1546",height:"1038"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 4: Enter your license in the PlayerActivity")),(0,r.yg)("p",null,"Just replace the placeholder with your license key."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// TODO: REPLACE WITH YOUR LICENSE\nprivate String license = "--- ADD YOUR LICENSE HERE ---";\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 5: Enter your stream configuration in the MainActivity")),(0,r.yg)("p",null,"Replace the server url and the stream name with yours.\nThe server url usually has this pattern : ",(0,r.yg)("inlineCode",{parentName:"p"},"[Protocol]://[Adresse]/[Application]"),".\nWith the stream name your streaming server identifies each stream."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// TODO: REPLACE THE RTMP URL AND STREAM NAME\nprivate static final String strStreamUrl = "--- INSERT THE STREAMING SERVER URL ---";\nprivate static final String strStreamname = "--- INSERT THE STREAM NAME OR FILE NAME ---";\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 6: Connect an Android device, build and run the application")),(0,r.yg)("h3",{id:"about"},"About"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Version")," : nanoStream SDK 4.3.0"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Compatible with")," : Android API-Level from 16 up to 23"),(0,r.yg)("h2",{id:"streamer-sample"},"Streamer Sample"),(0,r.yg)("h3",{id:"description-1"},"Description"),(0,r.yg)("p",null,"This sample shows the basic usage of the nanoStream Android SDK for streaming apps."),(0,r.yg)("h3",{id:"usage-1"},"Usage"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1: Unzip the sample project to the desired project path")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2: Copy the SDK libraries into the Android Studio project")),(0,r.yg)("p",null,"Before runnig the sample, six libraries have to copied from the SDK library folder:\nAdd the ",(0,r.yg)("inlineCode",{parentName:"p"},"net.nanocosmos.nanoStream.jar")," java component to the Android Studio project by copying ",(0,r.yg)("inlineCode",{parentName:"p"},"[SDK]/libs/net.nanocosmos.nanoStream.jar")," to the folder",(0,r.yg)("inlineCode",{parentName:"p"},"[projectpath]/app/libs/net.nanocosmos.nanoStream.jar")),(0,r.yg)("p",null,"Add the nanoStream.so native components to the Android Studio project by copying the 5 folders ",(0,r.yg)("inlineCode",{parentName:"p"},"[SDK]/libs/[platform]/libRTMPStream.so")," to\n",(0,r.yg)("inlineCode",{parentName:"p"},"[projectpath]/app/src/main/jniLibs/[platform]/libRTMPStream.so")),(0,r.yg)("p",null,"Platforms are armeabi, armeabi-v7a, arm64-v8a, x86, mips"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 3: Open the MainActivity.java in the Android Studio Code Editor"),"\nThe MainActivity contains the main application code. The location is:\n","[projectpath]","/app/src/main/java/net/nanocosmos/nanoStream/demo/basicstreamer"),(0,r.yg)("p",null,"Your window should look like this:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Git-Android-Streamer",src:n(2814).A,width:"1544",height:"1040"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 4: Enter your license in the MainActivity")),(0,r.yg)("p",null,"Just replace the placeholder with your license key."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// TODO: REPLACE WITH YOUR LICENSE\nprivate String license = "--- ADD YOUR LICENSE HERE ---";\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 5: Enter your stream configuration in the MainActivity")),(0,r.yg)("p",null,"Replace the server url and the stream name with yours.\nThe server url usually has this pattern : ",(0,r.yg)("inlineCode",{parentName:"p"},"[Protocol]://[Adresse]/[Application]"),".\nWith the stream name your streaming server identifies each stream."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// TODO: REPLACE THE RTMP URL AND STREAM NAME\nprivate static final String strStreamUrl = "--- INSERT THE STREAMING SERVER URL ---";\nprivate static final String strStreamname = "--- INSERT THE STREAM NAME OR FILE NAME ---";\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 6: Connect an Android device, build and run the application")),(0,r.yg)("h3",{id:"about-1"},"About"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Version")," : nanoStream SDK 4.3.0"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Compatible with")," : Android API-Level from 16 up to 23"))}c.isMDXComponent=!0},67696:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/android_sample_player_studio-d48642d8af832861178e2b77d7b9ba5c.png"},2814:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/android_sample_streamer_studio-fe381faa0d36dbb4a567499b649f4ea6.png"}}]);