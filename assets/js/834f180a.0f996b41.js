"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"nanostream_ios_quick_start",title:"Developer Quickstart",sidebar_label:"Developer Quickstart"},o=void 0,s={unversionedId:"nanostream/ios/nanostream_ios_quick_start",id:"nanostream/ios/nanostream_ios_quick_start",title:"Developer Quickstart",description:"The documentation is updated for nanoStream SDK v.4.10.0.0.",source:"@site/docs/nanostream/ios/nanostream_ios_quick_start.md",sourceDirName:"nanostream/ios",slug:"/nanostream/ios/nanostream_ios_quick_start",permalink:"/docs/nanostream/ios/nanostream_ios_quick_start",draft:!1,tags:[],version:"current",lastUpdatedAt:1697149113,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"nanostream_ios_quick_start",title:"Developer Quickstart",sidebar_label:"Developer Quickstart"},sidebar:"nanoStream Apps & SDKs",previous:{title:"Sample",permalink:"/docs/nanostream/android/nanostream_android_developer_manual_sample"},next:{title:"Getting started",permalink:"/docs/nanostream/ios/nanostream-ios-step-by-step"}},l={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Check library version",id:"check-library-version",level:2},{value:"Initialize the nanoStream module",id:"initialize-the-nanostream-module",level:2},{value:"Start a stream",id:"start-a-stream",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The documentation is updated for nanoStream SDK v.4.10.0.0."),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This documentation is about the ",(0,a.kt)("a",{parentName:"p",href:"http://www.nanocosmos.de/v4/en/products/live_video_streaming.html"},"nanoStream Live Video Streaming")," SDK for iOS and can be used by software developers to integrate nanoStream Live Video Encoding into custom apps."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Apple Mac with MacOS 10.9 or higher with ",(0,a.kt)("inlineCode",{parentName:"li"},"Xcode")," 6 or higher"),(0,a.kt)("li",{parentName:"ul"},"Apple iPhone with iOS 7 or later (min. iOS 8.1 recommended)")),(0,a.kt)("h2",{id:"check-library-version"},"Check library version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},'int version = [nanostreamAVC getVersion];\nif (version != NANOSTREAM_AVC_VERSION) {\n  // Handle header and library version mismatch\n}\n\nnanostreamAVCSettings *nAVCSettings = [[nanostreamAVCSettings alloc] init];\n\n// Set the RTMP URL, you want to stream to\n[nAVCSettings setUrl:@"rtmp://localhost/live"];\n[nAVCSettings setStreamId:@"myStream"];\n\n// Set the video settings\n[nAVCSettings setVideoResolution:Resolution640x480];\n[nAVCSettings setVideoBitrate:512];\n[nAVCSettings setKeyFramerate:60];\n[nAVCSettings setOrientation:AVCaptureVideoOrientationLandscapeRight];\n[nAVCSettings setCropMode:NoCrop];\n[nAVCSettings setFramerate:30];\n[nAVCSettings setH264Level:Baseline30];\n\n// Set the audio settings\n[nAVCSettings setInitialVolume:1.0];\n[nAVCSettings setAudioMonoStereo:Stereo];\n[nAVCSettings setAudioSamplerate:44100.0f];\n')),(0,a.kt)("h2",{id:"initialize-the-nanostream-module"},"Initialize the nanoStream module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},'// nAVC is a property of the controller class in this example\nself.nAVC = [[nanostreamAVC alloc] initWithSettings:nAVCSettings\n                                      eventListener:self];\n\n// Set the license key (required for streaming)\n[self.nAVC setLicense:@"nlic:1.2:LiveEnc:1.1:LvApp=1.....288"];\n\n// Implement the nanostreamEventListener protocol method \n// to display a preview in the previewView\n- (void)didUpdatePreviewLayer:(CALayer*)layer {\n\n    // UI View is modified, main queue required\n    dispatch_async(dispatch_get_main_queue(), ^{\n        if (self.previewView.layer.sublayers.count > 0) {\n            self.previewView.layer.sublayers = nil;\n        }\n        layer.bounds = CGRectZero;\n        [layer setFrame:self.previewView.bounds];\n        [(AVCaptureVideoPreviewLayer*)layer setVideoGravity:AVLayerVideoGravityResizeAspectFill];\n        [self.previewView.layer addSublayer:layer];\n    });\n}\n')),(0,a.kt)("h2",{id:"start-a-stream"},"Start a stream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},"// Start broadcast asynchronously with completion handler\n[self.nAVC start: ^(NSXError error) {\n    dispatch_async(dispatch_get_main_queue(), ^{\n        if (error == NSXErrorNone) {\n            // Handle succesful stream start\n        } else {\n            // Handle failure\n        }\n    });\n}];\n")))}m.isMDXComponent=!0}}]);