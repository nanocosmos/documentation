"use strict";(self.webpackChunknanocosomos_documentation=self.webpackChunknanocosomos_documentation||[]).push([["8112"],{44253:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"cloud/userroles","title":"Role-Based Access Control (RBAC)","description":"With the Bintu API v1.23.0.0 we introduced a role-based access control system in Q3/2024.","source":"@site/docs/cloud/user_roles.md","sourceDirName":"cloud","slug":"/user_roles","permalink":"/docs/user_roles","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1738353363000,"frontMatter":{"slug":"/user_roles","id":"userroles","title":"Role-Based Access Control (RBAC)","sidebar_label":"Role-Based Access Control (RBAC)"},"sidebar":"nanoStream Cloud","previous":{"title":"nanoStream Guardian","permalink":"/docs/cloud/guardian"},"next":{"title":"Overview","permalink":"/docs/cloud-frontend-v3/Dashboard_Overview"}}'),i=s("85893"),l=s("50065");let d={slug:"/user_roles",id:"userroles",title:"Role-Based Access Control (RBAC)",sidebar_label:"Role-Based Access Control (RBAC)"},a=void 0,t={},o=[{value:"Concept and Benefits",id:"concept-and-benefits",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"1. Understanding Role Assignments",id:"1-understanding-role-assignments",level:3},{value:"2. Evaluate and Assign Roles",id:"2-evaluate-and-assign-roles",level:3},{value:"3. Monitor and Enforce Access Control",id:"3-monitor-and-enforce-access-control",level:3},{value:"User Roles in nanoStream Cloud",id:"user-roles-in-nanostream-cloud",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Bintu API Endpoints",id:"bintu-api-endpoints",level:3},{value:"Token API Endpoints",id:"token-api-endpoints",level:3},{value:"High-level Permission Overview",id:"high-level-permission-overview",level:2},{value:"API Access",id:"api-access",level:3},{value:"Webhook Management",id:"webhook-management",level:3},{value:"User Management",id:"user-management",level:3},{value:"Stream Management",id:"stream-management",level:3},{value:"Tag Management",id:"tag-management",level:3},{value:"Playback &amp; Monitoring",id:"playback--monitoring",level:3}];function c(n){let e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.admonition,{title:"Bintu API v1.23.0.0",type:"info",children:(0,i.jsxs)(e.p,{children:["With the ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Bintu API v1.23.0.0"})})," we introduced a role-based access control system in Q3/2024."]})}),"\n",(0,i.jsx)(e.h2,{id:"concept-and-benefits",children:"Concept and Benefits"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Enhanced Security"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Ensuring Appropriate Permissions"}),": RBAC ensures that users and API access tokens are granted only the permissions needed for their tasks, minimizing potential security risks. This improves your account security and protects your organization's operations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Easy to Administer"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Simplified User Management"}),": RBAC allows administrators to assign roles to users rather than managing individual permissions. By assigning predefined roles based on job functions, tasks, or responsibilities, administrators can easily grant access to resources by simply choosing the appropriate role for a user."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Centralized Permission Management"}),": By managing permissions at the role level, rather than at the individual user level, RBAC reduces the number of decisions and changes an administrator must make. This centralized approach minimizes errors and inconsistencies in access controls."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Improved Visibility/Overview of User Permissions"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Clear Permission Structures"}),": RBAC provides a clear structure of roles and their associated permissions. This makes it easier for administrators to understand who has access to what resources and why, facilitating audits and compliance checks."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Simplified Reporting and Auditing"}),": Since roles aggregate multiple permissions, generating reports on user access becomes more straightforward. This visibility is crucial for maintaining security, identifying potential issues, and demonstrating compliance with regulations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(e.admonition,{title:"User Roles Update: No Action Needed",type:"caution",children:(0,i.jsxs)(e.p,{children:["With the ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Bintu API v1.23.0.0"})})," release introducing user roles, all users will retain their current permissions, now equivalent to the ",(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})," role. Therefore, ",(0,i.jsx)(e.strong,{children:"no immediate action is required"})," from organizations."]})}),"\n",(0,i.jsx)(e.p,{children:"Implementing Role-Based Access Control (RBAC) in your organization is a straightforward process that enhances security and simplifies user management. The following guide will walk you through the initial steps to configure user roles and manage permissions effectively."}),"\n",(0,i.jsx)(e.h3,{id:"1-understanding-role-assignments",children:"1. Understanding Role Assignments"}),"\n",(0,i.jsx)(e.p,{children:"Before assigning roles, familiarize yourself with:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Begin by reviewing the ",(0,i.jsx)(e.a,{href:"#user-roles-in-nanostream-cloud",children:"predefined roles in nanoStream Cloud"})," to understand the basic access levels and permissions available. For an in-depth look at the permissions associated with each role, check out the ",(0,i.jsx)(e.a,{href:"#high-level-permission-overview",children:"High-level Permission Overview"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Learn how to manage roles within the dashboard by following the dedicated Features & Function ",(0,i.jsx)(e.a,{href:"./cloud-frontend-v3/Dashboard_User_Roles",children:"User Management"})," page."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-evaluate-and-assign-roles",children:"2. Evaluate and Assign Roles"}),"\n",(0,i.jsx)(e.p,{children:"Assess the responsibilities of each user within your organization and assign the appropriate role:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Determine the level of access each user needs based on their job functions."}),"\n",(0,i.jsxs)(e.li,{children:["Use the ",(0,i.jsx)(e.a,{href:"./cloud-frontend-v3/Dashboard_User_Roles",children:"nanoStream Cloud Dashboard"})," or the ",(0,i.jsx)(e.a,{href:"https://doc.pages.nanocosmos.de/bintuapi-docs",children:"Bintu API"})," to assign roles to users."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-monitor-and-enforce-access-control",children:"3. Monitor and Enforce Access Control"}),"\n",(0,i.jsx)(e.p,{children:"It\u2019s important to monitor user access and enforce RBAC policies consistently:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Consider replacing static API keys with user-bound and expiring API tokens for enhanced security."}),"\n",(0,i.jsx)(e.li,{children:"Regularly review the permissions and roles assigned to users to ensure they align with current responsibilities and security requirements."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"user-roles-in-nanostream-cloud",children:"User Roles in nanoStream Cloud"}),"\n",(0,i.jsx)(e.admonition,{title:"User Roles Update: No Action Needed",type:"caution",children:(0,i.jsxs)(e.p,{children:["With the ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Bintu API v1.23.0.0"})})," release introducing user roles, all users will retain their current permissions, now equivalent to the ",(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})," role. Therefore, ",(0,i.jsx)(e.strong,{children:"no immediate action is required"})," from organizations."]})}),"\n",(0,i.jsx)(e.admonition,{title:"nanoStream Cloud Dashboard Instructions",type:"info",children:(0,i.jsxs)(e.p,{children:["To learn more about user management using the dashboard, ",(0,i.jsx)(e.a,{href:"/docs/cloud-frontend-v3/Dashboard_User_Roles",children:"click here"}),"."]})}),"\n",(0,i.jsxs)(e.p,{children:["Three predefined roles are available to manage user permissions within an organization: ",(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"}),", ",(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})," and ",(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"}),". Each role grants specific access rights tailored to different needs."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"User Role"}),(0,i.jsx)(e.th,{children:"Responsibility"}),(0,i.jsx)(e.th,{children:"Access Level"}),(0,i.jsx)(e.th,{children:"Permissions"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.td,{children:"The Administrator"}),(0,i.jsx)(e.td,{children:"Highest"}),(0,i.jsxs)(e.td,{children:["Has full control over all functions within the organization, including managing user roles and issuing new tokens to disable existing ones. ",(0,i.jsxs)(e.strong,{children:["Is the ",(0,i.jsx)(e.em,{children:"only"})," role with access to user management and the API Key."]})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})}),(0,i.jsx)(e.td,{children:"The Operator"}),(0,i.jsx)(e.td,{children:"High"}),(0,i.jsx)(e.td,{children:"Can perform all tasks related to stream management and operations, expect for changes that could disrupt operations, such as deleting or stopping streams or changing critical settings."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"})}),(0,i.jsx)(e.td,{children:"The Observer"}),(0,i.jsx)(e.td,{children:"Low"}),(0,i.jsx)(e.td,{children:"Has read-only access to basic information such as stream configuration, stream states, metrics and alerts."})]})]})]}),"\n",(0,i.jsx)(e.admonition,{title:"More Info",type:"info",children:(0,i.jsxs)(e.p,{children:["For a detailed overview of each role's permissions, refer to the ",(0,i.jsx)(e.a,{href:"#high-level-permission-overview",children:"High-level Permission Overview"}),"."]})}),"\n",(0,i.jsx)(e.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,i.jsx)(e.h3,{id:"bintu-api-endpoints",children:"Bintu API Endpoints"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Operation"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Route"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Description"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Access Level"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Dedicated docs"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"PUT"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"/user/permission"})}),(0,i.jsx)(e.td,{children:"Update the user role of a user in your organization"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#tag/User/paths/~1user~1permission/put",children:"More info"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"PUT"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"/user/tokenkey"})}),(0,i.jsxs)(e.td,{children:["Renew a user ",(0,i.jsx)(e.code,{children:"tokenkey"})," to invalidate previously created API tokens"]}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#tag/User/paths/~1user~1tokenkey/put",children:"More info"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"GET"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"/permission"})}),(0,i.jsx)(e.td,{children:"Get the available endpoint valids for a given permission (by name)"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/getPermissionProfileByName",children:"More info"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"GET"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"/permission/list"})}),(0,i.jsx)(e.td,{children:"List available roles and the associated permissions for your organization"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"}),", ",(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})]}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/Permission%20List",children:"More info"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"GET"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"/user"})}),(0,i.jsx)(e.td,{children:"Displays the permission of users and an internal identifier (enhanced existing endpoint)"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"}),", ",(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})]}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/User%20Info",children:"More info"})})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"token-api-endpoints",children:"Token API Endpoints"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Operation"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Route"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Description"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Access Level"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Dedicated docs"})})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"POST"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"/bintu/token"})}),(0,i.jsx)(e.td,{children:"Create an API token for the Bintu services"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Create%20a%20token%20for%20the%20bintu%20services",children:"More info"})})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"high-level-permission-overview",children:"High-level Permission Overview"}),"\n",(0,i.jsx)(e.h3,{id:"api-access",children:"API Access"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Capability"}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Get API Key"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Get Player Key"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-readonly",children:"\u2713"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Get User API Token"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-readonly",children:"\u2713"})})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"webhook-management",children:"Webhook Management"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Capability"}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"})})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Set Custom Webhook"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]})})]}),"\n",(0,i.jsx)(e.h3,{id:"user-management",children:"User Management"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Capability"}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Get Users"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Create User"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Invite User"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Edit User"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Reset User API Tokens"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Delete User"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"stream-management",children:"Stream Management"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Capability"}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Get Streams"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-readonly",children:"\u2713"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Create Stream"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Stop stream"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Lock stream"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Unlock stream"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Delete stream"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"tag-management",children:"Tag Management"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Capability"}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Get Tags"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-readonly",children:"\u2713"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Create Tag"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Edit Tag"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Delete Tag"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"}),(0,i.jsx)(e.td,{children:"\u2014"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"playback--monitoring",children:"Playback & Monitoring"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Capability"}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-admin",children:"nanoAdmin"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-user",children:"nanoUser"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.span,{className:"role role-readonly",children:"nanoReadOnly"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Create Playback Token"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Get Metrics and Alerts"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-admin",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-user",children:"\u2713"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.span,{className:"role-readonly",children:"\u2713"})})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return d}});var r=s(67294);let i={},l=r.createContext(i);function d(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);