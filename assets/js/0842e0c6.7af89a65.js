"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[3970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={id:"network-diagnostics-mtr",title:"Network Diagnostics MTR",sidebar_label:"Network Diagnostics MTR"},s=void 0,i={unversionedId:"cloud/network-diagnostics-mtr",id:"cloud/network-diagnostics-mtr",title:"Network Diagnostics MTR",description:"MTR is a powerful tool which enables administrators to diagnose and isolate networking errors and provide reports of network status to upstream providers. MTR represents an evolution of the traceroute command by providing a greater data sample, as if augmenting traceroute with ping output. This document provides an in depth overview of MTR, the data it generates, and how to interpret and draw conclusions based on the data provided by it.",source:"@site/docs/cloud/network-diagnostics-mtr.md",sourceDirName:"cloud",slug:"/cloud/network-diagnostics-mtr",permalink:"/docs/cloud/network-diagnostics-mtr",draft:!1,tags:[],version:"current",lastUpdatedAt:1694427420,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"network-diagnostics-mtr",title:"Network Diagnostics MTR",sidebar_label:"Network Diagnostics MTR"}},l={},p=[{value:"Network Diagnostics Background",id:"network-diagnostics-background",level:2},{value:"Install MTR",id:"install-mtr",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Generate an MTR Report",id:"generate-an-mtr-report",level:2},{value:"Use MTR on Unix-based Systems",id:"use-mtr-on-unix-based-systems",level:3},{value:"Use MTR on Windows Systems",id:"use-mtr-on-windows-systems",level:3},{value:"Read MTR Reports",id:"read-mtr-reports",level:2},{value:"Analyze MTR Reports",id:"analyze-mtr-reports",level:2},{value:"Verify Packet Loss",id:"verify-packet-loss",level:3},{value:"Network Latency",id:"network-latency",level:3},{value:"Common MTR Reports",id:"common-mtr-reports",level:2},{value:"Destination Host Networking Improperly Configured",id:"destination-host-networking-improperly-configured",level:3},{value:"Residential or Business Router",id:"residential-or-business-router",level:3},{value:"An ISP Router Is Not Configured Properly",id:"an-isp-router-is-not-configured-properly",level:3},{value:"ICMP Rate Limiting",id:"icmp-rate-limiting",level:3},{value:"Timeouts",id:"timeouts",level:3},{value:"Advanced MTR techniques",id:"advanced-mtr-techniques",level:2},{value:"Resolve Routing and Networking Issues Identified in your MTR report",id:"resolve-routing-and-networking-issues-identified-in-your-mtr-report",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.bitwizard.nl/mtr/"},"MTR")," is a powerful tool which enables administrators to diagnose and isolate networking errors and provide reports of network status to upstream providers. MTR represents an evolution of the ",(0,a.kt)("inlineCode",{parentName:"p"},"traceroute")," command by providing a greater data sample, as if augmenting ",(0,a.kt)("inlineCode",{parentName:"p"},"traceroute")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," output. This document provides an in depth overview of MTR, the data it generates, and how to interpret and draw conclusions based on the data provided by it."),(0,a.kt)("p",null,"For a basic overview of network diagnostic techniques, see our introduction to ",(0,a.kt)("a",{parentName:"p",href:"/docs/cloud/network-diagnostics#network-diagnostics"},"network diagnostics"),". If you are having general issues with your system, read our overview of general ",(0,a.kt)("a",{parentName:"p",href:"./support"},"system diagnostics"),"."),(0,a.kt)("h2",{id:"network-diagnostics-background"},"Network Diagnostics Background"),(0,a.kt)("p",null,"For a simple overview, check ",(0,a.kt)("a",{parentName:"p",href:"./network-diagnostics"},"this document about network diagnostics"),".\nNetworking diagnostic tools including ",(0,a.kt)("inlineCode",{parentName:"p"},"ping"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"traceroute"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"mtr")," use Internet Control Message Protocol (ICMP) packets to test contention and traffic between two points on the Internet. When a user pings a host on the Internet, a series of ICMP packets are sent to the host, which responds by sending packets in return. The user's client is then able to compute the round trip time between two points on the Internet."),(0,a.kt)("p",null,'In contrast, tools such as traceroute and MTR send ICMP packets with incrementally increasing TTLs in order to view the route or series of hops that the packet makes between the origin and its destination. The TTL, or time to live, controls how many hops a packet will make before "dying" and returning to the host. By sending a series of packets and causing them to return after one hop, then two, then three, MTR is able to assemble the route that traffic takes between hosts on the Internet.'),(0,a.kt)("p",null,"Rather than provide a simple outline of the route that traffic takes across the Internet, MTR collects additional information regarding the state, connection, and responsiveness of the intermediate hosts. Because of this additional information, MTR can provide a complete overview of the connection between two hosts on the Internet. The following sections outline how to install the MTR software and how to interpret the results provided by this tool."),(0,a.kt)("h2",{id:"install-mtr"},"Install MTR"),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debian/Ubuntu")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt upgrade\napt install mtr-tiny\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CentOS/RHEL/Fedora")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum update\nyum install mtr\n")),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,'For Windows there is a port of MTR called "WinMTR". You can download this application from the ',(0,a.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/winmtr/"},"WinMTR upstream"),"."),(0,a.kt)("h3",{id:"macos"},"macOS"),(0,a.kt)("p",null,"Install MTR on macOS with either ",(0,a.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," or ",(0,a.kt)("a",{parentName:"p",href:"http://www.macports.org/"},"MacPorts"),". To install MTR with Homebrew, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install mtr\n")),(0,a.kt)("p",null,"To install MTR with MacPorts, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"port install mtr\n")),(0,a.kt)("h2",{id:"generate-an-mtr-report"},"Generate an MTR Report"),(0,a.kt)("p",null,"Because MTR provides an image of the route traffic takes from one host to another, it is essentially a directional tool. The route taken between two points on the Internet can vary a great deal based on location and the routers that are located upstream. For this reason it is a good idea to collect MTR reports in both directions for all hosts that are experiencing connectivity issues."),(0,a.kt)("p",null,"Customer Support will often request MTR reports both ",(0,a.kt)("strong",{parentName:"p"},"to")," and ",(0,a.kt)("strong",{parentName:"p"},"from")," your host if you are experiencing networking issues. This is because, from time to time, MTR reports will not detect errors from one direction when there is still packet loss from the opposite direction."),(0,a.kt)("p",null,"When referring to MTR reports, this document refers to the host running ",(0,a.kt)("inlineCode",{parentName:"p"},"mtr")," as the ",(0,a.kt)("strong",{parentName:"p"},"source host")," and the host targeted by the query as the ",(0,a.kt)("strong",{parentName:"p"},"destination host"),"."),(0,a.kt)("h3",{id:"use-mtr-on-unix-based-systems"},"Use MTR on Unix-based Systems"),(0,a.kt)("p",null,"Generate MTR reports using the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mtr -rw [destination_host]\n")),(0,a.kt)("p",null,"For example, to test the route and connection quality of traffic to the destination host ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mtr -rw example.com\n")),(0,a.kt)("p",null,"An MTR report can be run from your local computer. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"google.com")," with the internet host name you would like to check:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mtr -rw google.com\n")),(0,a.kt)("p",null,"If you have a way to login to a remote computer, you can also check the reverse connection to the IP address of your home network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mtr -rw 198.51.100.0\n")),(0,a.kt)("p",null," If you don't know your home IP address, use ",(0,a.kt)("a",{parentName:"p",href:"http://whatismyip.com/"},"WhatIsMyIP.com"),"."),(0,a.kt)("p",null,"If no packet loss is detected, a support technician may ask you to run a faster interval:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mtr -rwc 50 -i 0.2 -rw google.com\n")),(0,a.kt)("p",null,"On some systems, using this flag may require administrative privileges:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mtr -rwc 50 -i 0.2 -rw google.com\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," option flag generates the report (short for ",(0,a.kt)("inlineCode",{parentName:"p"},"--report"),")."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," option flag uses the long-version of the hostname so our technicians and you can see the full hostname of each hop (short for ",(0,a.kt)("inlineCode",{parentName:"p"},"--report-wide"),")."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," option flag sets how many packets are sent and recorded in the report. When not used, the default will generally be 10, but for faster intervals you may want to set it to 50 or 100. The report can take longer to finish when doing this."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," option flag runs the report at a faster rate to reveal packet loss that can occur only during network congestion. This flag instructs MTR to send one packet every ",(0,a.kt)("em",{parentName:"p"},"n")," seconds. The default is 1 second, so setting it to a few tenths of a second (0.1, 0.2, etc.) is generally helpful.")),(0,a.kt)("h3",{id:"use-mtr-on-windows-systems"},"Use MTR on Windows Systems"),(0,a.kt)("p",null,"Running MTR on Windows uses a GUI. Open WinMTR, type the destination host in the box as prompted, and select the start option to begin generating report data. "),(0,a.kt)("h2",{id:"read-mtr-reports"},"Read MTR Reports"),(0,a.kt)("p",null,"Because MTR reports contain a great deal of information, they can be difficult to interpret at first. The following example is a report from a local connection to ",(0,a.kt)("inlineCode",{parentName:"p"},"google.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mtr --report google.com\nHOST: example                       Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. inner-cake                    0.0%    10    2.8   2.1   1.9   2.8   0.3\n    2. outer-cake                    0.0%    10    3.2   2.6   2.4   3.2   0.3\n    3. 68.85.118.13                  0.0%    10    9.8  12.2   8.7  18.2   3.0\n    4. be-30-crs01.audubon.nj.panjd  0.0%    10   10.8  12.2  10.1  16.6   1.7\n    5. pos-0-12-0-0-ar01.plainfield  0.0%    10   13.4  14.6  12.6  21.6   2.6\n    6. pos-0-4-0-0-pe01.111eighthav  0.0%    10   16.5  16.2  14.5  19.3   1.3\n    7. as15169-3.111eighthave.ny.ib  0.0%    10   16.0  17.1  14.2  27.7   3.9\n    8. 72.14.238.232                 0.0%    10   19.1  22.0  13.9  43.3  11.1\n    9. lga15s02-in-f104.1e100.net    0.0%    10   15.6  16.9  15.2  20.6   1.7\n")),(0,a.kt)("p",null,"The report was generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"mtr --report google.com"),". This uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"report")," option, which sends 10 packets to the host ",(0,a.kt)("inlineCode",{parentName:"p"},"google.com")," and generates a report. Without the ",(0,a.kt)("inlineCode",{parentName:"p"},"--report")," option, ",(0,a.kt)("inlineCode",{parentName:"p"},"mtr")," will run continuously in an interactive environment. The interactive mode reflects current round trip times to each host. In most cases, the ",(0,a.kt)("inlineCode",{parentName:"p"},"--report")," mode provides sufficient data in a useful format."),(0,a.kt)("p",null,"Each numbered line in the report represents a ",(0,a.kt)("strong",{parentName:"p"},"hop"),'. Hops are the Internet nodes that packets pass through to get to their destination. The names for the hosts (e.g. "inner-cake" and "outer-cake" in the example) are determined by reverse DNS lookups. If you want to omit the rDNS lookups you can use the ',(0,a.kt)("inlineCode",{parentName:"p"},"--no-dns")," option, which produces output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"% mtr --no-dns --report google.com\nHOST: deleuze                       Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 192.168.1.1                   0.0%    10    2.2   2.2   2.0   2.7   0.2\n    2. 68.85.118.13                  0.0%    10    8.6  11.0   8.4  17.8   3.0\n    3. 68.86.210.126                 0.0%    10    9.1  12.1   8.5  24.3   5.2\n    4. 68.86.208.22                  0.0%    10   12.2  15.1  11.7  23.4   4.4\n    5. 75.149.230.194                0.0%    10   15.0  20.1  15.0  33.8   5.6\n    6. 72.14.238.232                 0.0%    10   15.6  18.7  14.1  32.8   5.9\n    7. 209.85.241.148                0.0%    10   16.3  16.9  14.7  21.2   2.2\n    8. 66.249.91.104                 0.0%    10   22.2  18.6  14.2  36.0   6.5\n")),(0,a.kt)("p",null,"Beyond simply seeing the path between servers that packets take to reach their host, MTR provides valuable statistics regarding the durability of that connection in the seven columns that follow. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Loss%")," column shows the percentage of packet loss at each hop. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Snt")," column counts the number of packets sent. The ",(0,a.kt)("inlineCode",{parentName:"p"},"--report")," option will send 10 packets unless specified with ",(0,a.kt)("inlineCode",{parentName:"p"},"--report-cycles=[number-of-packets]"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"[number-of-packets]")," represents the total number of packets that you want to send to the remote host."),(0,a.kt)("p",null,"The next four columns ",(0,a.kt)("inlineCode",{parentName:"p"},"Last"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Avg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Best"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Wrst")," are all measurements of latency in milliseconds (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ms"),"). ",(0,a.kt)("inlineCode",{parentName:"p"},"Last")," is the latency of the last packet sent, ",(0,a.kt)("inlineCode",{parentName:"p"},"Avg")," is average latency of all packets, while ",(0,a.kt)("inlineCode",{parentName:"p"},"Best")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Wrst")," display the best (shortest) and worst (longest) round trip time for a packet to this host. In most cases, the average (",(0,a.kt)("inlineCode",{parentName:"p"},"Avg"),") column should be the focus of your attention."),(0,a.kt)("p",null,"The final column, ",(0,a.kt)("inlineCode",{parentName:"p"},"StDev"),", provides the standard deviation of the latencies to each host. The higher the standard deviation, the greater the difference is between measurements of latency. Standard deviation allows you to assess if the mean (average) provided represents the true center of the data set, or has been skewed by some sort of phenomena or measurement error. If the standard deviation is high, the latency measurements were inconsistent. After averaging the latencies of the 10 packets sent, the average looks normal but may in fact not represent the data very well. If the standard deviation is high, take a look at the best and worst latency measurements to make sure the average is a good representation of the actual latency and not the result of too much fluctuation."),(0,a.kt)("p",null,"In most circumstances, you may think of the MTR output in three major sections. Depending on configurations, the first 2 or 3 hops often represent the source host's ISP, while the last 2 or 3 hops represent the destination host's ISP. The hops in between are the routers the packet traverses to reach its destination."),(0,a.kt)("p",null,"For example, if MTR is run from your home PC, the first 2 or 3 hops belong to your ISP. The last 3 hops belong to the data center where the service resides. Any hops in the middle are intermediate hops. When running MTR locally, if you see an abnormality in the first few hops near the source, contact your local service provider or investigate your local networking configuration. Conversely, if you see abnormalities near the destination you may want to contact the operator of the destination server or network support for that machine. Unfortunately, in cases where there are problems on the intermediate hops, both service providers will have limited ability to address the issue."),(0,a.kt)("h2",{id:"analyze-mtr-reports"},"Analyze MTR Reports"),(0,a.kt)("h3",{id:"verify-packet-loss"},"Verify Packet Loss"),(0,a.kt)("p",null,"When analyzing MTR output, you are looking for two things: loss and latency. If you see a percentage of loss at any particular hop, that may be an indication that there is a problem with that particular router. However, it is common practice among some service providers to rate limit the ICMP traffic that MTR uses. This can give the illusion of packet loss when there is in fact no loss. To determine if the loss you're seeing is real or due to rate limiting, take a look at the subsequent hop. If that hop shows a loss of 0.0%, then you are likely seeing ICMP rate limiting and not actual loss:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: example                       Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                50.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. 72.14.233.56                  0.0%    10    7.2   8.3   7.1  16.4   2.9\n    6. 209.85.254.247                0.0%    10   39.1  39.4  39.1  39.7   0.2\n    7. 64.233.174.46                 0.0%    10   39.6  40.4  39.4  46.9   2.3\n    8. gw-in-f147.1e100.net          0.0%    10   39.6  40.5  39.5  46.7   2.2\n")),(0,a.kt)("p",null,"In this case, the loss reported between hops 1 and 2 is likely due to rate limiting on the second hop. Although traffic to the remaining eight hops all touch the second hop, there is no packet loss. If the loss continues for more than one hop, than it is possible that there is some packet loss or routing issues. Remember that rate limiting and loss can happen concurrently. In this case, take the lowest percentage of loss in a sequence as the actual loss:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                     Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                   0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                  0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                60.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        60.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. 72.14.233.56                  50.0%   10    7.2   8.3   7.1  16.4   2.9\n    6. 209.85.254.247                40.0%   10   39.1  39.4  39.1  39.7   0.2\n    7. 64.233.174.46                 40.0%   10   39.6  40.4  39.4  46.9   2.3\n    8. gw-in-f147.1e100.net          40.0%   10   39.6  40.5  39.5  46.7   2.2\n")),(0,a.kt)("p",null,"In this case, there is 60% loss between hops 2 and 3 as well as between hops 3 and 4. You can assume that the third and fourth hop is likely losing some amount of traffic because no subsequent host reports zero loss. However, some of the loss is due to rate limiting as several of the final hops are only experiencing 40% loss. When different amounts of loss are reported, always trust the reports from later hops."),(0,a.kt)("p",null,"Some loss can also be explained by problems in the return route. Packets will reach their destination without error, but have a hard time making the return trip. For this reason it is often best to collect MTR reports in both directions when you're experiencing an issue."),(0,a.kt)("p",null,"Resist the temptation to investigate or report all incidences of packet loss in your connections. The Internet protocols are designed to be resilient to some network degradation, and the routes that data takes across the Internet can fluctuate in response to load, brief maintenance events, and other routing issues. If your MTR report shows small amounts of loss in the neighborhood of 10%, there is no cause for real concern as the application layer will compensate for the loss which is likely transient."),(0,a.kt)("h3",{id:"network-latency"},"Network Latency"),(0,a.kt)("p",null,"In addition to helping you assess packet loss, MTR will also help assess the latency of a connection between your host and the target host. By virtue of physical constraints, latency always increases with the number of hops in a route. However, the increases should be consistent and linear. Unfortunately, latency is often relative and very dependent on the quality of both host's connections and their physical distance. When evaluating MTR reports for potentially problematic connections, consider earlier fully functional reports as context in addition to known connection speeds between other hosts in a given area."),(0,a.kt)("p",null,"The connection quality may also affect the amount of latency you experience for a particular route. Predictably, dial-up connections will have much higher latency than cable modem connections to the same destination. The following MTR report shows a high latency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                     Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                 0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10  388.0 360.4 342.1 396.7   0.2\n    5. 72.14.233.56                  0.0%    10  390.6 360.4 342.1 396.7   0.2\n    6. 209.85.254.247                0.0%    10  391.6 360.4 342.1 396.7   0.4\n    7. 64.233.174.46                 0.0%    10  391.8 360.4 342.1 396.7   2.1\n    8. gw-in-f147.1e100.net          0.0%    10  392.0 360.4 342.1 396.7   1.2\n")),(0,a.kt)("p",null,"The amount of latency jumps significantly between hops 3 and 4 and remains high. This may point to a network latency issue as round trip times remain high after the fourth hop. From this report, it is impossible to determine the cause although a saturated peering session, a poorly configured router, or a congested link are frequent causes."),(0,a.kt)("p",null,"Unfortunately, high latency does not always mean a problem with the current route. A report like the one above means that despite some sort of issue with the 4th hop, traffic is still reaching the destination host ",(0,a.kt)("em",{parentName:"p"},"and")," returning to the source host. Latency could be caused by a problem with the return route as well. The return route will not be seen in your MTR report, and packets can take completely different routes to and from a particular destination."),(0,a.kt)("p",null,"In the above example, while there is a large jump in latency between hosts 3 and 4 the latency does not increase unusually in any subsequent hops. From this it is logical to assume that there is some issue with the 4th router."),(0,a.kt)("p",null,"ICMP rate limiting can also create the appearance of latency, similar to the way that it can create the appearance of packet loss:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                     Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                 0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. 72.14.233.56                  0.0%    10  254.2 250.3 230.1 263.4   2.9\n    6. 209.85.254.247                0.0%    10   39.1  39.4  39.1  39.7   0.2\n    7. 64.233.174.46                 0.0%    10   39.6  40.4  39.4  46.9   2.3\n    8. gw-in-f147.1e100.net          0.0%    10   39.6  40.5  39.5  46.7   2.2\n")),(0,a.kt)("p",null,"At first glance, the latency between hops 4 and 5 draws attention. However after the fifth hop, the latency drops drastically. The actual latency measured here is about 40ms. In cases like this, MTR draws attention to an issue which does not affect the service. Consider the latency to the final hop when evaluating an MTR report."),(0,a.kt)("h2",{id:"common-mtr-reports"},"Common MTR Reports"),(0,a.kt)("p",null,"Some networking issues are novel and require escalation to the operators of the upstream networks. However, there are a selection of common MTR reports that describe common networking issues. If you're experiencing some sort of networking issue and want to diagnose your problem, consider the following examples."),(0,a.kt)("h3",{id:"destination-host-networking-improperly-configured"},"Destination Host Networking Improperly Configured"),(0,a.kt)("p",null,"In the next example, it appears that there is 100% loss to the destination host because of an incorrectly configured router. At first glance it appears that the packets are not reaching the host but this is not the case."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                     Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                 0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. 72.14.233.56                  0.0%    10    7.2   8.3   7.1  16.4   2.9\n    6. 209.85.254.247                0.0%    10   39.1  39.4  39.1  39.7   0.2\n    7. 64.233.174.46                 0.0%    10   39.6  40.4  39.4  46.9   2.3\n    8. gw-in-f147.1e100.net         100.0    10    0.0   0.0   0.0   0.0   0.0\n")),(0,a.kt)("p",null,"The traffic does reach the destination host. However, the MTR report shows loss because the destination host is not sending a reply. This may be the result of improperly configured networking or firewall (iptables) rules that cause the host to drop ICMP packets."),(0,a.kt)("p",null,"The way you can tell that the loss is due to a misconfigured host is to look at the hop which shows 100% loss. From previous reports, you see that this is the final hop and that MTR does not try additional hops. While it is difficult to isolate this issue without a baseline measurement, these kinds of errors are quite common."),(0,a.kt)("h3",{id:"residential-or-business-router"},"Residential or Business Router"),(0,a.kt)("p",null,"Residential gateways sometimes cause misleading reports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"% mtr --no-dns --report google.com\nHOST: deleuze                       Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 192.168.1.1                   0.0%    10    2.2   2.2   2.0   2.7   0.2\n    2. ???                          100.0    10    8.6  11.0   8.4  17.8   3.0\n    3. 68.86.210.126                 0.0%    10    9.1  12.1   8.5  24.3   5.2\n    4. 68.86.208.22                  0.0%    10   12.2  15.1  11.7  23.4   4.4\n    5. 68.85.192.86                  0.0%    10   17.2  14.8  13.2  17.2   1.3\n    6. 75.149.230.194                0.0%    10   15.0  20.1  15.0  33.8   5.6\n    7. 72.14.238.232                 0.0%    10   15.6  18.7  14.1  32.8   5.9\n    8. 209.85.241.148                0.0%    10   16.3  16.9  14.7  21.2   2.2\n    9. 66.249.91.104                 0.0%    10   22.2  18.6  14.2  36.0   6.5\n")),(0,a.kt)("p",null,"The 100% loss reported at the second hop does not indicate that there is a problem. You can see that there is no loss on subsequent hops."),(0,a.kt)("h3",{id:"an-isp-router-is-not-configured-properly"},"An ISP Router Is Not Configured Properly"),(0,a.kt)("p",null,"Sometimes a router on the route your packet takes is incorrectly configured and your packets may never reach their destination:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                   Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                 0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. ???                           0.0%    10    0.0   0.0   0.0   0.0   0.0\n    6. ???                           0.0%    10    0.0   0.0   0.0   0.0   0.0\n    7. ???                           0.0%    10    0.0   0.0   0.0   0.0   0.0\n    8. ???                           0.0%    10    0.0   0.0   0.0   0.0   0.0\n")),(0,a.kt)("p",null,"The question marks appear when there is no additional route information. Sometimes, a poorly configured router will send packets in a loop. You can see that in the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                   Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                 0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. 12.34.56.78                   0.0%    10    0.0   0.0   0.0   0.0   0.0\n    6. 12.34.56.78                   0.0%    10    0.0   0.0   0.0   0.0   0.0\n    7. 12.34.56.79                   0.0%    10    0.0   0.0   0.0   0.0   0.0\n    8. ???                           0.0%    10    0.0   0.0   0.0   0.0   0.0\n    9. ???                           0.0%    10    0.0   0.0   0.0   0.0   0.0\n")),(0,a.kt)("p",null,"These reports show that the router at hop 4 is not properly configured. When these situations occur, the only way to resolve the issue is to contact the network administrator's team of operators at the source host."),(0,a.kt)("h3",{id:"icmp-rate-limiting"},"ICMP Rate Limiting"),(0,a.kt)("p",null,"ICMP rate limiting can cause apparent packet loss. When there is packet loss to one hop that doesn't persist to subsequent hops, the loss is caused by ICMP limiting. See the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                   Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                 0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. 72.14.233.56                 60.0%    10   27.2  25.3  23.1  26.4   2.9\n    6. 209.85.254.247                0.0%    10   39.1  39.4  39.1  39.7   0.2\n    7. 64.233.174.46                 0.0%    10   39.6  40.4  39.4  46.9   2.3\n    8. gw-in-f147.1e100.net          0.0%    10   39.6  40.5  39.5  46.7   2.2\n")),(0,a.kt)("p",null,"This report does not show a cause for concern. Rate limiting is a common practice and it reduces congestion to prioritize more important traffic."),(0,a.kt)("h3",{id:"timeouts"},"Timeouts"),(0,a.kt)("p",null,"Timeouts can happen for various reasons. Some routers will discard ICMP and absent replies will be shown on the output as timeouts (",(0,a.kt)("inlineCode",{parentName:"p"},"???"),"). Alternatively there may be a problem with the return route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@localhost:~# mtr --report www.google.com\nHOST: localhost                   Loss%   Snt   Last   Avg  Best  Wrst StDev\n    1. 63.247.74.43                  0.0%    10    0.3   0.6   0.3   1.2   0.3\n    2. 63.247.64.157                 0.0%    10    0.4   1.0   0.4   6.1   1.8\n    3. 209.51.130.213                0.0%    10    0.8   2.7   0.8  19.0   5.7\n    4. aix.pr1.atl.google.com        0.0%    10    6.7   6.8   6.7   6.9   0.1\n    5. ???                           0.0%    10    7.2   8.3   7.1  16.4   2.9\n    6. ???                           0.0%    10   39.1  39.4  39.1  39.7   0.2\n    7. 64.233.174.46                 0.0%    10   39.6  40.4  39.4  46.9   2.3\n    8. gw-in-f147.1e100.net          0.0%    10   39.6  40.5  39.5  46.7   2.2\n")),(0,a.kt)("p",null,"Timeouts are not necessarily an indication of packet loss. Packets still reach their destination without significant packet loss or latency. Timeouts may be attributable to routers dropping packets for QoS (quality of service) purposes or there may be some issue with return routes causing the timeouts. This is another false positive."),(0,a.kt)("h2",{id:"advanced-mtr-techniques"},"Advanced MTR techniques"),(0,a.kt)("p",null,"Newer versions of MTR are capable of running in TCP mode on a specified TCP port, instead of the ICMP (ping) protocol. In some instances network degradation will only affect certain ports or misconfigured firewall rules on a router may block a certain protocol. Running MTR over a certain port can show packet loss where the default ICMP report may not."),(0,a.kt)("p",null,"Running MTR in TCP mode will require sudo privileges on most machines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mtr -P 80 -i 0.5 -rwc 50 example.com\nsudo mtr -P 22 -i 0.5 -rwc 50 example.com\n")),(0,a.kt)("h2",{id:"resolve-routing-and-networking-issues-identified-in-your-mtr-report"},"Resolve Routing and Networking Issues Identified in your MTR report"),(0,a.kt)("p",null,"A majority of routing issues displayed by MTR reports are temporary. Most issues will clear up by themselves within 24 hours. In most cases, by the time you are able to notice a problem with a route, the Internet service provider's monitoring has already reported the problem and administrators are working to fix the issue. In cases where you are experiencing degraded service for an extended period of time, you may choose to alert a provider of the issues you're experiencing. When contacting a service provider, send MTR reports and any other relevant data you may have. Without usable data, providers have no way to verify or fix problems."),(0,a.kt)("p",null,"While routing errors and issues account for a percentage of network-related slowness, they are by no means the only cause of degraded performance. Network congestion, particularly over long distances during peak times, can become severe. Trans-Atlantic and trans-Pacific traffic can be quite variable and are subject to general network congestion. In these cases, it is recommended that you position hosts and resources as geographically close to their targeted audience as possible."),(0,a.kt)("p",null,"If you are experiencing connectivity issues and are unable to interpret your MTR report, open a support ticket. Include the output of your report and our technicians can help analyze your issue."))}u.isMDXComponent=!0}}]);