"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[8981],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={id:"nanostream_ios_license_deployment",title:"License Deployment Information",sidebar_label:"License Deployment Information"},s=void 0,a={unversionedId:"nanostream/ios/nanostream_ios_license_deployment",id:"nanostream/ios/nanostream_ios_license_deployment",title:"License Deployment Information",description:"For temporary license keys, you need to ensure your app will be updated early enough before expiration.",source:"@site/docs/nanostream/ios/nanostream_ios_license_deployment.md",sourceDirName:"nanostream/ios",slug:"/nanostream/ios/nanostream_ios_license_deployment",permalink:"/docs/nanostream/ios/nanostream_ios_license_deployment",draft:!1,tags:[],version:"current",lastUpdatedAt:1694009609,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{id:"nanostream_ios_license_deployment",title:"License Deployment Information",sidebar_label:"License Deployment Information"},sidebar:"nanoStream Apps & SDKs",previous:{title:"iOS Streaming App in 5 Minutes",permalink:"/docs/nanostream/ios/bintu_ios_sample"},next:{title:"Binary Modules for Windows",permalink:"/docs/nanostream/windows/nanostream_windows_binaries"}},l={},c=[{value:"Sample code for iOS",id:"sample-code-for-ios",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For temporary license keys, you need to ensure your app will be updated early enough before expiration.\nTo avoid in-app expiration, you may load the license key from your server over a secure https connection.\nYou need to ensure the server connection is protected against 3rd party access"),(0,o.kt)("h2",{id:"sample-code-for-ios"},"Sample code for iOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'\nNSString * const kNSXLicenseKey = @"kNSXLicenseKey";\n\n@implementation NSXLicenseHelper\n\n-(void)downloadLicenseFromURL:(NSURL *)url handler:(void ()(NSString *license))completion\n{\n  if (!completion) {\n    return;\n  }\n  if (!url) {\n    completion(nil);\n  }\n\n  NSURLSessionConfiguration* sessionConfig = [NSURLSessionConfiguration defaultSessionConfiguration];\n\n  /* Create session, and optionally set a NSURLSessionDelegate. */\n  NSURLSession session = [NSURLSession sessionWithConfiguration:sessionConfig delegate:nil delegateQueue:nil];\n\n  NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:url];\n  request.HTTPMethod = @"GET";\n\n  /* Start a new Task */\n  NSURLSessionDataTask task = [session dataTaskWithRequest:request completionHandler:NSData *data, NSURLResponse *response, NSError *error {\n    if (error == nil) {\n      NSString *license = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n      if ([license hasPrefix:@"nlic:"]) {\n        [self saveLicense:license];\n        return completion(license);\n      }\n    }\n    return completion(nil);\n  }];\n\n  [task resume];\n}\n\n-(void)saveLicense:(NSString *)license\n{\n  [[NSUserDefaults standardUserDefaults] setObject:license forKey:kNSXLicenseKey];\n}\n\n-(NSString *)getSavedLicense\n{\n  return [[NSUserDefaults standardUserDefaults] stringForKey:kNSXLicenseKey];\n}\n\n')))}m.isMDXComponent=!0}}]);