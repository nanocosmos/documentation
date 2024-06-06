"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[251],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>s});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var y=n.createContext({}),d=function(e){var a=n.useContext(y),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(y.Provider,{value:a},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,s=m["".concat(y,".").concat(u)]||m[u]||o[u]||l;return t?n.createElement(s,g(g({ref:a},p),{},{components:t})):n.createElement(s,g({ref:a},p))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=u;var i={};for(var y in a)hasOwnProperty.call(a,y)&&(i[y]=a[y]);i.originalType=e,i[m]="string"==typeof e?e:r,g[1]=i;for(var d=2;d<l;d++)g[d]=t[d];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5163:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=t(58168),r=(t(96540),t(15680));const l={id:"nanostream_android_developer_manual_playback",title:"RTM Playback",sidebar_label:"Playback"},g=void 0,i={unversionedId:"nanostream/android/nanostream_android_developer_manual_playback",id:"nanostream/android/nanostream_android_developer_manual_playback",title:"RTM Playback",description:"Description and Features",source:"@site/docs/nanostream/android/nanostream_android_developer_manual_playback.md",sourceDirName:"nanostream/android",slug:"/nanostream/android/nanostream_android_developer_manual_playback",permalink:"/docs/nanostream/android/nanostream_android_developer_manual_playback",draft:!1,tags:[],version:"current",lastUpdatedAt:1717712187,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"nanostream_android_developer_manual_playback",title:"RTM Playback",sidebar_label:"Playback"},sidebar:"nanoStream Apps & SDKs",previous:{title:"Getting started",permalink:"/docs/nanostream/android/nanostream_android_getting_started"},next:{title:"Streaming Media",permalink:"/docs/nanostream/android/nanostream_android_developer_manual_streaming"}},y={},d=[{value:"Description and Features",id:"description-and-features",level:3},{value:"License",id:"license",level:3},{value:"Interface",id:"interface",level:3},{value:"Package name",id:"package-name",level:4},{value:"Declaration",id:"declaration",level:4},{value:"Function Life Cycle",id:"function-life-cycle",level:4},{value:"Creating an Instance",id:"creating-an-instance",level:3},{value:"Configuration and Settings",id:"configuration-and-settings",level:3},{value:"PlayerSettings:",id:"playersettings",level:3},{value:"Player State",id:"player-state",level:3},{value:"Event Notification",id:"event-notification",level:3},{value:"Status Events",id:"status-events",level:3},{value:"Results and Error Events",id:"results-and-error-events",level:3},{value:"Audio / Video Format",id:"audio--video-format",level:3},{value:"Implementation Example",id:"implementation-example",level:3}],p={toc:d},m="wrapper";function o(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"description-and-features"},"Description and Features"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"RTMP")," Playback Component enables application developers to add playback of RTMP live and on demand streams to their apps."),(0,r.yg)("p",null,"Supported codecs are ",(0,r.yg)("inlineCode",{parentName:"p"},"H.264")," Video, ",(0,r.yg)("inlineCode",{parentName:"p"},"AAC")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"MP3")," Audio."),(0,r.yg)("p",null,"Video streams are decoded and rendered on a Surface that is hold by the application, usually connected to a ",(0,r.yg)("inlineCode",{parentName:"p"},"SurfaceView"),"."),(0,r.yg)("p",null,"Audio streams are decoded and rendered to system audio using the Android AudioSession/AudioTrack API."),(0,r.yg)("p",null,"The interface and usage are similar to the Android MediaPlayer. The Android MediaPlayerControl interface is implemented to enable control through an ",(0,r.yg)("inlineCode",{parentName:"p"},"android.widget.MediaController")," instance."),(0,r.yg)("h3",{id:"license"},"License"),(0,r.yg)("p",null,"The playback component requires a special feature flag to be enabled in your nanoStream license key. It not necessarily included in nanoStream Android SDK licenses."),(0,r.yg)("h3",{id:"interface"},"Interface"),(0,r.yg)("h4",{id:"package-name"},"Package name"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"net.nanocosmos.nanoStream.streamer")),(0,r.yg)("h4",{id:"declaration"},"Declaration"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"public abstract class NanostreamPlayer implements MediaPlayercontrol, Surfaceholder.Callback")),(0,r.yg)("h4",{id:"function-life-cycle"},"Function Life Cycle"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Instance Handling"),(0,r.yg)("th",{parentName:"tr",align:null},"Initialization"),(0,r.yg)("th",{parentName:"tr",align:null},"Capabilities"),(0,r.yg)("th",{parentName:"tr",align:null},"Queries"),(0,r.yg)("th",{parentName:"tr",align:null},"Playback Control"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported by RTMP Player"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"createNanostreamPlayer"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"setSettings"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"setPlayerEventListener"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"canPrepare"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"canPrepareAsync"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"canPause"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"canSeekBackward"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"canSeekForward"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"getState"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"isPlaying"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"getCurrentPosition"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"getDuration"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"prepare"),(0,r.yg)("td",{parentName:"tr",align:null},"no")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"prepareAsync"),(0,r.yg)("td",{parentName:"tr",align:null},"no")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"start"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"pause"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"seekTo"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"stop"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"start"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"stop"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"close"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"release"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes")))),(0,r.yg)("h3",{id:"creating-an-instance"},"Creating an Instance"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"NanostreamPlayer")," instances can be created through the static factory function ",(0,r.yg)("inlineCode",{parentName:"p"},"createNanostreamPlayer")," at the top level ",(0,r.yg)("inlineCode",{parentName:"p"},"nanoStream class"),". NanostreamPlayer is designed to support multiple player instances. The number of parallel instances can be limited by system resources such as codec,surfaces,memory, network connections and bandwidth."),(0,r.yg)("h3",{id:"configuration-and-settings"},"Configuration and Settings"),(0,r.yg)("p",null,"Initial player settings are wrapped by the ",(0,r.yg)("inlineCode",{parentName:"p"},"NanostreamPlayer.PlayerSettings")," class. The settings can be applied by calling ",(0,r.yg)("inlineCode",{parentName:"p"},"NanostreamPlayer.setSettings"),"."),(0,r.yg)("h3",{id:"playersettings"},"PlayerSettings:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Setting"),(0,r.yg)("th",{parentName:"tr",align:null},"Functions"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Values"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"License"),(0,r.yg)("td",{parentName:"tr",align:null},"getLicense/setLicense"),(0,r.yg)("td",{parentName:"tr",align:null},"nanoStream license key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Url"),(0,r.yg)("td",{parentName:"tr",align:null},"getUrl/setUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"RTMP url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stream Name"),(0,r.yg)("td",{parentName:"tr",align:null},"getStreamname/setStreamname"),(0,r.yg)("td",{parentName:"tr",align:null},"RTMP stream name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"User Name"),(0,r.yg)("td",{parentName:"tr",align:null},"getUsername/setUsername"),(0,r.yg)("td",{parentName:"tr",align:null},"User name if RTMP authentication is required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Password"),(0,r.yg)("td",{parentName:"tr",align:null},"getPassword/setPassword\tPassword if RTMP authentication is required"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"empty"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Buffer Time"),(0,r.yg)("td",{parentName:"tr",align:null},"getBufferTimeMs/setBufferTimeMs"),(0,r.yg)("td",{parentName:"tr",align:null},"Length of the stream buffer in milliseconds"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"2000ms/2s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Frame Dropping Mode"),(0,r.yg)("td",{parentName:"tr",align:null},"getFrameDroppingMode/setFrameDroppingMode"),(0,r.yg)("td",{parentName:"tr",align:null},"Configuration of the dropping mode regarding different droppable frame types"),(0,r.yg)("td",{parentName:"tr",align:null},"FrameDroppingMode"),(0,r.yg)("td",{parentName:"tr",align:null},"DROP_NO_FRAMES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stream Playback"),(0,r.yg)("td",{parentName:"tr",align:null},"getVideoPlayback/getAudioPlayback/setStreamPlayback"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable stream types to be decoded and played"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"video:true, audio:true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TrackTimout"),(0,r.yg)("td",{parentName:"tr",align:null},"getTrackTimeout/setTrackTimeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Timeout to waiting for Track info"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"10000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EndlessMode"),(0,r.yg)("td",{parentName:"tr",align:null},"getEndlessMode/setEndlessMode"),(0,r.yg)("td",{parentName:"tr",align:null},"Reopen the stream until stop call"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("h3",{id:"player-state"},"Player State"),(0,r.yg)("p",null,"The player stat can be queried through the ",(0,r.yg)("inlineCode",{parentName:"p"},"getState()")," function"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n*\n* The different states of the player instance.\n*\n*/\npublic enum PlayerState\n{\n    IDLE, INITIALIZED, PREPARED, STARTED, PAUSED, SEEKING, BUFFERING, RECONNECTING, PLAYBACKCOMPLETED, STOPPING, STOPPED;\n}\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported by RTMP Player"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.IDLE"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial state. Player has not yet been initialized or has been closed."),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.INITIALIZED"),(0,r.yg)("td",{parentName:"tr",align:null},"Player has been initialized with license and settings."),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.PREPARED"),(0,r.yg)("td",{parentName:"tr",align:null},"Player has been prepared and is ready to start."),(0,r.yg)("td",{parentName:"tr",align:null},"no")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STARTED"),(0,r.yg)("td",{parentName:"tr",align:null},"Playback has been started."),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.PAUSED"),(0,r.yg)("td",{parentName:"tr",align:null},"Playback has been paused."),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.SEEKING"),(0,r.yg)("td",{parentName:"tr",align:null},"Player is Seeking"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.BUFFERING"),(0,r.yg)("td",{parentName:"tr",align:null},"Player is buffering stream data."),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.RECONNECTING"),(0,r.yg)("td",{parentName:"tr",align:null},"Player is performing a reconnect"),(0,r.yg)("td",{parentName:"tr",align:null},"no")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.PLAYBACKCOMPLETED"),(0,r.yg)("td",{parentName:"tr",align:null},"Playback has ended due to end of stream."),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPING"),(0,r.yg)("td",{parentName:"tr",align:null},"Player is stopping"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED"),(0,r.yg)("td",{parentName:"tr",align:null},"Player is stopped"),(0,r.yg)("td",{parentName:"tr",align:null},"yes")))),(0,r.yg)("h3",{id:"event-notification"},"Event Notification"),(0,r.yg)("p",null,"Event notifications can be received through the ",(0,r.yg)("inlineCode",{parentName:"p"},"NanostreamPlayer.PlayerEventListener")," interface. Derive your listener from this interface and add it to the player by calling ",(0,r.yg)("inlineCode",{parentName:"p"},"setPlayerEventListener()"),"."),(0,r.yg)("h3",{id:"status-events"},"Status Events"),(0,r.yg)("p",null,"Event Type : ",(0,r.yg)("inlineCode",{parentName:"p"},"TYPE_RTMP_STATUS")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Event Code"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Corresponding State"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_STARTED"),(0,r.yg)("td",{parentName:"tr",align:null},"Playback has been started."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STARTED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_STOPPING"),(0,r.yg)("td",{parentName:"tr",align:null},"Playback will stop."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_STOPPED"),(0,r.yg)("td",{parentName:"tr",align:null},"Playback has been stopped."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_ERROR_CONNECT"),(0,r.yg)("td",{parentName:"tr",align:null},"The connect to the stream url failed."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_BUFFERING"),(0,r.yg)("td",{parentName:"tr",align:null},"Player is buffering stream data"),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.BUFFERING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_PLAYBACKCOMPLETED"),(0,r.yg)("td",{parentName:"tr",align:null},"Playback has ended due to end of stream."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.PLAYBACKCOMPLETED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_NOT_FOUND"),(0,r.yg)("td",{parentName:"tr",align:null},"The specified stream could not be found."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_SEEKING"),(0,r.yg)("td",{parentName:"tr",align:null},"The Stream is seeking."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.SEEKING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_PAUSED"),(0,r.yg)("td",{parentName:"tr",align:null},"The Stream is paused"),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.PAUSED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_VIDEO_FORMAT_AVAILABLE"),(0,r.yg)("td",{parentName:"tr",align:null},"The Stream has a MediaFormat for the Video Track"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NanostreamEvent.CODE_STREAM_AUDIO_FORMAT_AVAILABLE"),(0,r.yg)("td",{parentName:"tr",align:null},"The Stream has a MediaFormat for the Audio Track"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"results-and-error-events"},"Results and Error Events"),(0,r.yg)("p",null,"Event Type : ",(0,r.yg)("inlineCode",{parentName:"p"},"TYPENANORESULTS")," Event Codes : Values of type nanoResults"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Event Code"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Corresponding State"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_NOT_INITIALIZED"),(0,r.yg)("td",{parentName:"tr",align:null},"The RTMP library has not been initialized properly."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_ALLOCATEDATA_FAILED_RTMP_SRC"),(0,r.yg)("td",{parentName:"tr",align:null},"Memory allocation failed."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_LICENSE_INVALID"),(0,r.yg)("td",{parentName:"tr",align:null},"License check failed - License invalid."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_LICENSE_INVALID_RTMP_SRC"),(0,r.yg)("td",{parentName:"tr",align:null},"License check failed - RTMP playback is not included."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_LICENSE_EXPIRED"),(0,r.yg)("td",{parentName:"tr",align:null},"License check failed - The license period has ended."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_TCP_CONNECT_FAILED"),(0,r.yg)("td",{parentName:"tr",align:null},"TCP connect failed."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_HANDSHAKE_FAILED"),(0,r.yg)("td",{parentName:"tr",align:null},"RTMP handshake failed."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_CONNECT_FAILED"),(0,r.yg)("td",{parentName:"tr",align:null},"RTMP connect failed."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_AUTH_FAILED"),(0,r.yg)("td",{parentName:"tr",align:null},"RTMP authentication is required and failed."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_APP_INVALID"),(0,r.yg)("td",{parentName:"tr",align:null},"The application part of the url is invalid and has been rejected."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_STATUS_PLAY_STREAM_NOT_FOUND"),(0,r.yg)("td",{parentName:"tr",align:null},"The stream name could not be found."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.STOPPED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_STATUS_PLAY_STREAM_SEEK"),(0,r.yg)("td",{parentName:"tr",align:null},"The player is seeking."),(0,r.yg)("td",{parentName:"tr",align:null},"PlayerState.SEEKING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_SEEK_NOT_AVAILABLE"),(0,r.yg)("td",{parentName:"tr",align:null},"The stream can not seek."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nanoResults.N_RTMP_SEEK_FAILED"),(0,r.yg)("td",{parentName:"tr",align:null},"The stream can not seek."),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"audio--video-format"},"Audio / Video Format"),(0,r.yg)("p",null,"After the ",(0,r.yg)("inlineCode",{parentName:"p"},"NanostreamEvent.CODE_STREAM_AUDIO/VIDEO_FORMAT_AVAILABLE")," event, you can get the MediaFormat Object with the ",(0,r.yg)("inlineCode",{parentName:"p"},"getAudio/VideoFormat()"),(0,r.yg)("sup",{parentName:"p",id:"fnref-(2)"},(0,r.yg)("a",{parentName:"sup",href:"#fn-(2)",className:"footnote-ref"},"(2)"))," function call.\nWe added two custom Fields for the Video MediaFormat:\n","\xa0"," ","\xa0"," ",(0,r.yg)("inlineCode",{parentName:"p"},"NanostreamPlayer.KEY_ASPECT_RATIO_WIDTH"),"\n","\xa0"," ","\xa0"," ",(0,r.yg)("inlineCode",{parentName:"p"},"NanostreamPlayer.KEY_ASPECT_RATIO_HEIGHT"),"\nWith these custom fields you can get the aspect ratio width and height."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"MediaFormat videoFormat = mPlayer.getVideoFormat();\n\nint aspectRatioWidth = videoFormat.getInteger(NanostreamPlayer.KEY_ASPECT_RATIO_WIDTH);\nint aspectRatioHeight = videoFormat.getInteger(NanostreamPlayer.KEY_ASPECT_RATIO_HEIGHT);\n")),(0,r.yg)("h3",{id:"implementation-example"},"Implementation Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class PlayerActivity extends Activity implements PlayerEventListener, SurfaceHolder.Callback {\n    ...\n    private NanostreamPlayer mPlayer = null;\n    private String license = "YOUR LICENSE CODE";\n\n    private String strStreamUrl = "rtmp://192.168.1.100/vod";\n    private String strStreamname = "mp4:file.mp4";\n\n    private LinearLayout root;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        root = new LinearLayout(this);\n        root.setOrientation(LinearLayout.VERTICAL);\n        root.setLayoutParams(containerParams);\n        root.setBackgroundColor(Color.BLACK);\n\n        ...\n\n        mPlayer = nanoStream.createNanostreamPlayer();\n\n        PlayerSettings settings = mPlayer.new PlayerSettings();\n\n        settings.setLicense(license);\n        settings.setUrl(strStreamUrl);\n        settings.setStreamname(strStreamname);\n        settings.setAuthUsername("");\n        settings.setAuthPassword("");\n        settings.setBufferTimeMs(2000);\n\n        mPlayer.setSettings(settings);\n        mPlayer.setPlayerEventListener(this);\n\n        ...\n        // we need a surface Callback for the application\n        LinearLayout.LayoutParams surfaceParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.FILL_PARENT, ViewGroup.LayoutParams.FILL_PARENT, 0.5F);\n        surfaceParams.gravity = Gravity.CENTER;\n        surfaceParams.weight = 0.5f;\n\n        SurfaceView surfaceView = new SurfaceView(this);\n        surfaceView.setLayoutParams(surfaceParams);\n        surfaceView.getHolder.addCallback(this);\n\n        root.addView(surfaceView);\n        setContentView(root);\n    }\n\n    ...\n\n    @Override\n    public void onPlayerEvent(NanostreamEvent event, NanostreamPlayer instance) {\n        final String msg = event.GetDescription();\n        Log.d(this.getClass().getName(), event.GetDescription());\n    }\n\n    @Override\n    public void surfaceCreated(SurfaceHolder holder) {\n        mPlayer.surfaceCreated(holder);\n\n        try {\n            if (!mPlayer.getState().equals(PlayerState.STARTED)) {\n                mPlayer.start();\n            }\n        } catch (IllegalStateException e) {\n            e.printStackTrace();\n        }\n    }\n\n    @Override\n    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {\n        mPlayer.surfaceChanged(holder, format, width, height);\n    }\n\n    @Override\n    public void surfaceDestroyed(SurfaceHolder holder) {\n        mPlayer.surfaceDestroyed(holder);\n    }\n}\n')))}o.isMDXComponent=!0}}]);