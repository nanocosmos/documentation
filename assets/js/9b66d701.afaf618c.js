"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([[6864],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,y=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return t?o.createElement(y,i(i({ref:n},c),{},{components:t})):o.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(58168),a=(t(96540),t(15680));const r={id:"source-code",title:"nanoMeet Sample Code Snippets",sidebar_label:"Source Code"},i=void 0,s={unversionedId:"nanomeet/source-code",id:"nanomeet/source-code",title:"nanoMeet Sample Code Snippets",description:"To create your own token helper you can use our way of implementation. Find here working code snippets and use our approach to create new nanoMeet rooms or use the nanoMeet web API to do it on your own.",source:"@site/docs/nanomeet/source-code.md",sourceDirName:"nanomeet",slug:"/nanomeet/source-code",permalink:"/docs/nanomeet/source-code",draft:!1,tags:[],version:"current",lastUpdatedAt:1723574953,formattedLastUpdatedAt:"Aug 13, 2024",frontMatter:{id:"source-code",title:"nanoMeet Sample Code Snippets",sidebar_label:"Source Code"}},l={},d=[{value:"Github Repository",id:"github-repository",level:2},{value:"nanoMeet Token Creator Source Code",id:"nanomeet-token-creator-source-code",level:2},{value:"nanoMeet Sample Source Code",id:"nanomeet-sample-source-code",level:2}],c={toc:d},p="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,o.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"To create your own token helper you can use our way of implementation. Find here working code snippets and use our approach to create new nanoMeet rooms or use the ",(0,a.yg)("a",{parentName:"p",href:"./api"},"nanoMeet web API")," to do it on your own."),(0,a.yg)("admonition",{title:"samples",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can find online samples ",(0,a.yg)("a",{parentName:"p",href:"./samples"},"here"),".")),(0,a.yg)("p",null,"nanoMeet is part of ",(0,a.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"nanoStream Cloud"),".\nYou need a nanoStream Cloud/Bintu account with nanoMeet enabled."),(0,a.yg)("admonition",{title:"before getting started",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"If you do not have an account or nanoMeet enabled yet, please contact our sales team for a personal demo via ",(0,a.yg)("a",{parentName:"p",href:"https://www.nanocosmos.de/nanomeet/?demo&utm_source=nanoMeet_Docs&utm_medium=nanocosmos&utm_campaign=nanoMeet&utm_content=CTA_Requirements"},"contact form")," or sales(at)nanocosmos.de.\nTo check if your organisation enables nanoMeet, check your ",(0,a.yg)("a",{parentName:"p",href:"https://dashboard.nanostream.cloud/organisation"},"organisation overview"),"."),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("img",{alt:"nanoMeet enabled",src:t(68511).A,width:"671",height:"49"}))),(0,a.yg)("h2",{id:"github-repository"},"Github Repository"),(0,a.yg)("p",null,"Find our project on Github ",(0,a.yg)("a",{href:"https://github.com/nanostream/nanomeet-frontend",target:"_blank"},"here"),"."),(0,a.yg)("h2",{id:"nanomeet-token-creator-source-code"},"nanoMeet Token Creator Source Code"),(0,a.yg)("p",null,"The following code lets you create a secure token with moderator rights with which you can join and invite people in to a nanoMeet room."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script src="https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/js/nanomeet.js"><\/script>\n<div id="apikey-input">\n    <p>Insert the API Key from your <a target="blank"\n            href="https://bintu-cloud-frontend.nanocosmos.de/organisation">nanoStream Cloud/Bintu\n            Organisation</a>.</p>\n    <input type="text" id="apikey" placeholder="Type in API Key" onchange="onAPIKeyChanged()" />\n</div>\n\n<div id="room-input">\n    <p>Choose a name for your nanoMeet-room </p>\n    <input type="text" id="roomname" placeholder="Type in room name" onchange="onRoomNameChanged()" />\n</div>\n\n<div id="server-input">\n    <p>Choose a location where you want to host your nanoMeet-room.</p>\n    <select value="eu" id="server" onchange="onServerChange(this)">\n        <option value="eu">EU</option>\n        <option value="us">US</option>\n    </select>\n</div>\n\n<div id="date-input">\n    <p>Choose the time frame where the secure token should be valid.</p>\n    <label for="nbf">Not before date</label>\n    <input type="datetime-local" id="nbf" name="not-before" value="" min="" max="">\n    <label for="exp">Expiration date</label>\n    <input type="datetime-local" id="exp" name="expiration" value="" min="" max="">\n</div>\n\n<div style="display: none;" class="response-wrapper">\n    <p>You created a new nanoMeet room:</p>\n    <p>Part of it is the creation of a nanoStream Cloud live stream incl. ABR Playback.<br />\n        Click/Copy the link below to see\n        the stream overview in the nanoStream Cloud, including playout URLs and code snippet, to share with\n        larger audiences.</p>\n    <div id="full-stream-overview">nanoStream Live Stream Overview</div>\n    <p>Click/Copy the link below to open your nanoMeet room.</p>\n    <div id="initial-invite-link">Open nanoMeet room</div>\n</div>\n\n<button onClick="cancel()">Cancel</button>\n<button onClick="createNanoMeet()">Create</button>\n\n<script>\n\n    // Validate API Key\n    const validate = (apikey) => {\n        nanoMeet.validateAPIKey(apikey).then((success) => {\n            console.log("Valid nanoStream Cloud API key...")\n        }).catch((error) => {\n            console.log("Invalid nanoStream Cloud / bintu API key")\n        });\n    }\n\n    // Create new nanoMeet room\n    const createNanoMeet = () => {\n        var streamname, streamData, cloudDashboardLink;\n\n        // 1. create nanoStream Cloud live streams (including ABR)\n        nanoMeet.createNanoStreams(apikey)\n            .then((success) => {\n                let setup = {\n                    exp: exp.value,     // Customized expiration value\n                    nbf: nbf.value,     // Customized not before value\n                    room: roomname,     // Customized room name\n                    moderator: true,    // Moderator or participant\n                    server: `nanomeet-${serverInput}.nanocosmos.de`,     // Server Location\n                    streamname: success.data.streamInfo.ingest.rtmp.streamname // Passthrough streamname\n                }\n                cloudDashboardLink = success.data.cloudDashboardLink // Link to access the stream informations via dashboard\n\n                // 2. Create nanoMeet room with customized set up\n                nanoMeet.createNanoMeetRoom(apikey, setup)\n                    .then((success) => {\n                        streamOverview = cloudDashboardLink;\n                        success.data.cloudDashboardLink = streamOverview\n\n                        const inviteLink = `https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=${success.data.token}`;\n                        document.getElementsByClassName("response-wrapper")[0].style.display = "block";\n                        document.getElementById("initial-invite-link").innerHTML = `<a class="link" href=${inviteLink} target="_blank">Open nanoMeet room</a>`;\n                        document.getElementById("full-stream-overview").innerHTML = `<a class="link" href=${streamOverview} target="_blank">Full stream overview</a>`;\n                    }).catch((error) => {\n                        console.log(error)\n                    })\n\n            }).catch((error) => {\n                console.log(error)\n            })\n    }\n\n    let nanoMeet = new window.NanoMeet(); // Instance of the nanoMeet web API\n\n    let apikeyInput = document.getElementById("apikey");\n    let roomNameInput = document.getElementById("roomname");\n    let serverInput = document.getElementById("server").value;\n    let nbfInput = document.getElementById("nbf");\n    let expInput = document.getElementById("exp");\n\n    // Date set up\n    let today = new Date().toISOString().slice(0, 16); // Todays date\n    let expDate = new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().slice(0, 16); // Default 2 weeks from today\n    let maxTime = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 16); // Token can\'t be longer valid as a year\n\n    nbf.value = today;\n    nbf.min = today;\n    nbf.max = maxTime;\n\n    exp.value = expDate;\n    exp.min = today;\n    exp.max = maxTime\n\n    // Helper method to update the nanoMeet player based on changed input value\n    const onAPIKeyChanged = () => {\n        apikey = document.getElementById("apikey").value;\n        validate(apikey);\n    }\n\n    // Helper method to update the room name based on changed input value\n    const onRoomNameChanged = () => {\n        roomname = roomNameInput.value;\n    }\n\n    // Helper method to update the server based on changed input value\n    const onServerChange = (setServer) => {\n        serverInput = setServer.value;\n    }\n\n<\/script>\n')),(0,a.yg)("h2",{id:"nanomeet-sample-source-code"},"nanoMeet Sample Source Code"),(0,a.yg)("p",null,"The following code lets you use nanoMeet with a valid secure token. Using this sample in a moderator role lets you invite people, set up security options and start a broadcast incl. recording."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script src="https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/js/nanomeet.js"><\/script>\n<div id="invite-section">\n    <p>Insert invite token</p>\n    <input type="text" id="token" placeholder="Type in token" onchange="onInviteTokenChange()" />\n</div>\n\n<div style="display: none;" id="moderator-access">\n    <div id="invite-token-input">\n        <p>Create Invite Token</p>\n        <label for="nbf">Not before date</label>\n        <input type="datetime-local" id="nbf" name="not-before" value="" min="" max="">\n        <label for="exp">Expiration date</label>\n        <input type="datetime-local" id="exp" name="expiration" value="" min="" max="">\n        <input type="checkbox" id="moderator" name="moderator">\n        <label for="moderator">is Moderator</label>\n        <button onClick="createInviteToken()">Create Invite Token</button>\n    </div>\n    <div id="invited">\n        <div id="invite-link-url"></div>\n    </div>\n    <hr />\n    <div id="security-section">\n        <p>Security Settings</p>\n        <input type="checkbox" id="lobby" name="lobby" onclick="toggleLobby()">\n        <label for="lobby">Enable Lobby</label>\n        <input type="text" id="password" placeholder="Type in password" />\n        <button onClick="changePassword()">Set password</button>\n    </div>\n    <hr />\n    <div id="broadcast-section">\n        <p>Broadcast Settings</p>\n        <input type="checkbox" id="vod" name="vod" checked>\n        <label for="vod">Live Stream Recording</label>\n        <button onClick="startBroadcast()">Start Stream</button>\n        <button onClick="stopBroadcast()">Stop Stream</button>\n        <div id="broadcasted">\n            <div id="live-playout-url"></div>\n            <div id="vod-playout-url"></div>\n        </div>\n        <div id="play-section"></div>\n    </div>\n\n    <div id="nanoMeet-wrapper">\n        <div id="nanoStream-meet"></div>\n    </div>\n</div>\n\n<script>\n    let nanoMeetIdentifier = "nanoStream-meet" // ID of the nanoMeet div\n    let nanoMeet = new window.NanoMeet(); // Instance of the nanoMeet web API\n    var roomUrl = "https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html" // URL to the nanoMeet room creator \n\n    let tokenInput = document.getElementById("token");\n    // Date set up\n    let today = new Date().toISOString().slice(0, 16); // Todays date\n    let expDate = new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().slice(0, 16); // Default 2 weeks from today\n    let maxTime = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 16); // Token can\'t be longer valid as a year\n\n    nbf.value = today;\n    nbf.min = today;\n    nbf.max = maxTime;\n\n    exp.value = expDate;\n    exp.min = today;\n    exp.max = maxTime\n\n    // Initializes the nanoMeet player\n    const init = (token, id) => {\n\n        nanoMeet.init({ token, id })\n            .then((success) => {\n                if (success.data.moderator) {\n                    document.getElementById("moderator-access").style.display = "block";\n                }\n                if (!success.data.moderator) {\n                    document.getElementById("moderator-access").style.display = "none";\n                }\n                console.log(`Init nanoMeet. Moderator: ${success.data.moderator}`);\n            }).catch((error) => {\n                document.getElementById("moderator-access").style.display = "none";\n                console.log(error);\n            });\n    }\n\n    // Creates invite token for the nanoMeet room\n    const createInviteToken = () => {\n        let moderator = document.getElementById("moderator").checked\n        let expDate = exp.value;\n        let nbfDate = nbf.value;\n        nanoMeet.createInviteToken(token, { moderator, exp: expDate, nbf: nbfDate })\n            .then((success) => {\n                var inviteUrl = `https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=${success.data.token}`;\n                document.getElementById("invite-link-url").innerHTML = `<a class="link" href=${inviteUrl} target="_blank">${moderator ? "Moderator" : "Participant"} Invite Link</a>`;\n                console.log("Invite token result", success.data.token);\n            }).catch((error) => {\n                console.log(error);\n            });\n    }\n\n    // Starts the broadcast\n    const startBroadcast = () => {\n        let isVOD = document.getElementById("vod").checked;\n        nanoMeet.startBroadcast(isVOD)\n            .then((success) => {\n                document.getElementById("live-playout-url").innerHTML = `<a class="link" href=${success.data.playback.live} target="_blank">Live Playout URL</a>`;\n\n                if (isVOD) {\n                    document.getElementById("vod-playout-url").innerHTML = `<a class="link" href=${success.data.playback.vod} target="_blank">VOD Playout URL</a>`;\n\n                } else {\n                    document.getElementById("vod-playout-url").innerHTML = "";\n                }\n                console.log(`Started nanoStream Cloud live stream`, success.data);\n            }).catch((error) => {\n                console.log(error);\n            })\n    }\n\n    // Stops the broadcast\n    const stopBroadcast = () => {\n        nanoMeet.stopBroadcast()\n            .then((success) => {\n                console.log("Stopped nanoStream Cloud live stream.");\n            }).catch((error) => {\n                console.log(error);\n            })\n    }\n\n    // Helper method to update the nanoMeet player based on changed input value\n    const onInviteTokenChange = () => {\n        token = document.getElementById("token").value;\n        if (token) {\n            init(token, nanoMeetIdentifier);\n        }\n    }\n\n    // Helper method to open in new tab\n    const openInNew = (link) => {\n        window.open(link, \'_target\');\n    }\n\n    // Changes the password of the nanoMeet room\n    const changePassword = (e) => {\n        let password = document.getElementById("password").value;\n        nanoMeet.setPassword(password)\n            .then((success) => {\n                document.getElementById("lobby").value = success.data.lobby\n                console.log(success.data);\n            }).catch((error) => {\n                console.log(error);\n            })\n    }\n\n    // Toggles the lobby of the nanoMeet room\n    const toggleLobby = (e) => {\n        let lobbyOn = document.getElementById("lobby").checked\n        nanoMeet.setLobby(lobbyOn)\n            .then((success) => {\n                document.getElementById("password").value = success.data.password\n                console.log(success.data);\n            }).catch((error) => {\n                console.log(error);\n            })\n    }\n\n<\/script>\n')))}m.isMDXComponent=!0},68511:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/enable-nanomeet-13febcf2a92a10ff578709f6bf7d7864.jpg"}}]);