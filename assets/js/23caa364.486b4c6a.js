"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[1295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"nanostream_android_getting_started",title:"Getting started",sidebar_label:"Getting started"},o=void 0,s={unversionedId:"nanostream/android/nanostream_android_getting_started",id:"nanostream/android/nanostream_android_getting_started",title:"Getting started",description:"Purpose",source:"@site/docs/nanostream/android/nanostream_android_getting_started.md",sourceDirName:"nanostream/android",slug:"/nanostream/android/nanostream_android_getting_started",permalink:"/docs/nanostream/android/nanostream_android_getting_started",draft:!1,tags:[],version:"current",lastUpdatedAt:1704708501,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"nanostream_android_getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"nanoStream Apps & SDKs",previous:{title:"Introduction",permalink:"/docs/nanostream/"},next:{title:"Playback",permalink:"/docs/nanostream/android/nanostream_android_developer_manual_playback"}},l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Required permissions:",id:"required-permissions",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Copy the SDK libraries into your Android Studio project",id:"copy-the-sdk-libraries-into-your-android-studio-project",level:3},{value:"Add the nanoStream to the gradle file",id:"add-the-nanostream-to-the-gradle-file",level:3},{value:"Check library version",id:"check-library-version",level:3},{value:"Initialize the library",id:"initialize-the-library",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"This documentation is about the nanoStream Live Video Streaming SDK for Android and can be used by software developers to integrate nanoStream Live Video Encoding into custom apps."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android 4.1+ (API Level 16)")),(0,r.kt)("h3",{id:"required-permissions"},"Required permissions:"),(0,r.kt)("p",null,"The nanoStream SDK for android does not request any permissions by itself.\nHowever, it needs a few permissions to work."),(0,r.kt)("p",null,"The needed permissions are :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android.permission.INTERNET")," - This is needed since the stream should be sent over a network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android.permission.RECORD_AUDIO")," - In case your stream is not video-only the app needs this permission to record audio data using the microphone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android.permission.RECORD_VIDEO")," - In case your stream is not audio-only the app needs this permission to record image data using the camera."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android.permission.WRITE_EXTERNAL_STORAGE")," - In case the encoded stream should be written on the phone's memory.")),(0,r.kt)("p",null,"How these permissions should be requested depends on the used version of android."),(0,r.kt)("p",null,"On devices with android versions prior to Android 6.0 the permissions are getting requested once per app installation. They just need to be configured within the ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file, so that the user can give the permission while installing the app."),(0,r.kt)("p",null,"On devices with android versions from 6.0 upwards the permissions should be requested at run time when needed. It can be checked whether a permission is already granted or not. Afterwards, the needed permissions can be requested. This will create a pop-up, which asks the user to grant the needed permissions. If you are working with our BinutStreamer-Sample, an example of this can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckAppPermission-Class"),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"copy-the-sdk-libraries-into-your-android-studio-project"},"Copy the SDK libraries into your Android Studio project"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.nanocosmos.nanoStream.jar")," java component to your Android Studio project by copying ",(0,r.kt)("inlineCode",{parentName:"p"},"[SDK]/libs/net.nanocosmos.nanoStream.jar")," to the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"[projectpath]/app/libs/net.nanocosmos.nanoStream.jar")," Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"nanoStream.so")," native components to the Android Studio project by copying the 5 folders ",(0,r.kt)("inlineCode",{parentName:"p"},"[SDK]/libs/[platform]/libRTMPStream.so")," to ","[projectpath]","/app/src/main/jniLibs/","[platform]","/libRTMPStream.so","`"),(0,r.kt)("p",null,"Platforms are armeabi, armeabi-v7a, arm64-v8a, x86, mips"),(0,r.kt)("h3",{id:"add-the-nanostream-to-the-gradle-file"},"Add the nanoStream to the gradle file"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file (Module:app) and add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"compile files('libs/net.nanocosmos.nanoStream.jar')\n")),(0,r.kt)("p",null,"to the dependencies section."),(0,r.kt)("h3",{id:"check-library-version"},"Check library version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String nanoStreamVersion = nanoStream.getVersion().fullVersion;\n")),(0,r.kt)("h3",{id:"initialize-the-library"},"Initialize the library"),(0,r.kt)("p",null,"Implement the interface ",(0,r.kt)("inlineCode",{parentName:"p"},"nanoStreamEventListener")," in your class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class StreamActivity extends Activity implements NanostreamEventListener {\n  // implement your class\n\n  private class NotificationRunable implements Runnable {\n     private NanostreamEvent m_event;\n\n     public NotificationRunable(NanostreamEvent event) {\n      m_event = event;\n     }\n\n     @Override\n     public void run() {\n       Toast.makeText(getApplicationContext(), m_event.GetDescription(), Toast.LENGTH_SHORT).show();\n     }\n   }\n\n  @Override\n  public void onNanostreamEvent(NanostreamEvent event) {\n    if (event.GetType() != NanostreamEvent.TYPE_RTMP_QUALITY) {\n      this.runOnUiThread(new NotificationRunable(event));\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"nanoStreamSettings object")," for the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  private String license = "--- add your nanoStream license here ---";\n  private String serverUrl = "rtmp://example.org/live";\n  private String streamName = "myStream";\n  private nanoStream streamLib = null;\n\n  void initStreamLib() {\n    if(null == streamLib) {\n      nanoStreamSettings nss = new nanoStreamSettings();\n      nss.setLicense(license);\n      nss.setLogSettings(logSettings);\n      nss.setStreamUrl(serverUrl);\n      nss.setStreamName(streamName);\n      nss.setEventListener(this);\n\n      try {\n        streamLib = new nanoStream(nss);\n      } catch (NanostreamException en) {\n        Toast.makeText(getApplicationContext(), en.toString(), Toast.LENGTH_LONG).show();\n      }\n\n      if(null != streamLib) {\n        try {\n          streamLib.init();\n        } catch (NanostreamException e) {\n          Toast.makeText(getApplicationContext(), e.toString(), Toast.LENGTH_LONG).show();\n        } catch (IllegalArgumentException e) {\n          e.printStackTrace();\n        }\n      }\n    }\n  }\n')),(0,r.kt)("p",null,"Start/Stop the Stream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void toggleStreaming(View clicked) {\n  if (null == streamLib) {\n    Toast.makeText(getApplicationContext(), "nanoStream failed to initialize", Toast.LENGTH_LONG).show();\n    return;\n  }\n\n  if (!streamLib.hasState(nanoStream.EncoderState.RUNNING)) {\n    Toast.makeText(getApplicationContext(), "Starting...", Toast.LENGTH_SHORT).show();\n\n    if (streamLib.hasState(nanoStream.EncoderState.STOPPED) || streamLib.hasState(nanoStream.EncoderState.CREATED)) {\n      try {\n        Logging.log(Logging.LogLevel.DEBUG, TAG, "toggleStreaming init nanoStream");\n        streamLib.init();\n      } catch (NanostreamException en) {\n        Toast.makeText(getApplicationContext(), en.toString(), Toast.LENGTH_LONG).show();\n        return;\n      }\n    }\n\n    try {\n      streamLib.start();\n    } catch (NanostreamException en) {\n      Toast.makeText(getApplicationContext(), en.toString(), Toast.LENGTH_LONG).show();\n      return;\n    }\n  } else {\n    Toast.makeText(getApplicationContext(), "Stopping...", Toast.LENGTH_SHORT).show();\n    streamLib.stop();\n  }\n}\n')))}c.isMDXComponent=!0}}]);