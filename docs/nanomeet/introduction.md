---
id: introduction
title: nanoMeet
sidebar_label: Introduction
---

&copy; 2021 [nanocosmos](https://info.nanocosmos.de/).

## About the nanoMeet documentation

The following provided content is divided into three parts:

- [User Guide](./samples): Online samples for immediate use with all provided features and functions.
- [User/Developer Guide](./source-code): Source code of our samples that can be copied easily.
- [Developer Guide](./api): The documentation of our web API which provides all features and functions of nanoMeet.

## What is nanoMeet?

nanoMeet is a browser-based live video and collaboration platform connected to nanoStream Cloud, for interactive live streaming.
It allows you to create your own branded video meeting rooms in the browser to engage and interact with your audience. 
nanoMeet is based on a custom version of [Jitsi Meet](https://github.com/jitsi/jitsi-meet) and integrated into [nanoStream Cloud](https://info.nanocosmos.de).

![Screenhot: nanoMeet Meeting](../assets/nanomeet/nanomeet-ui.jpg)
*Screenshot: nanoMeet Meeting*

### Key features

With nanoMeet you can create, host and broadcast online video meetings and events on your own web page using your own coporate design and interact with a large audience.

- Host online video meetings embedded on your own web page
- Web-browser based applications and web services
- Live streaming integration into nanoStream Cloud
- Enable audience interaction with large audiences (1000s of participants anywhere in the world)
- Invite participants with secure tokens
- nanoMeet web API and code examples for easy white-label integration into custom branded environments
- „Watch party“: Watch a live stream together in a video meeting

### Example applications

There are various usecases for nanoMeet:

- Town hall meetings e.g. company webcasts
- Podium discussions e.g. expert sessions
- Interviews and announcements with Q&A e.g. press briefings
- Live events e.g. music, comedy, …
- Education e.g.remote learning
- Watchparties e.g. watch a live stream together and discuss

![nanoMeet Infographic](../assets/nanomeet/nanomeet-infografik.jpg)
*Screenshot: nanoMeet Infographic*

## What is part of nanoMeet?

- Web services for 24/7 usage anywhere in the world
- Sample pages to set up and use nanoMeet rooms
- Web API with code snippets/example implementations
- Live Streaming: Integration into nanoStream Cloud (Bintu)


### Requirements

nanoMeet is part of [nanoStream Cloud](https://bintu-cloud-frontend.nanocosmos.de). 
You need a nanoStream Cloud/Bintu account with nanoMeet enabled.

:::info before getting started
If you do not have an account or nanoMeet enabled yet, please contact our sales team for a personal demo via [contact form](https://www.nanocosmos.de/nanomeet/?demo&utm_source=nanoMeet_Docs&utm_medium=nanocosmos&utm_campaign=nanoMeet&utm_content=CTA_Requirements) or sales(at)nanocosmos.de.
To check if your organisation enables nanoMeet, check your [organisation overview](https://dashboard.nanostream.cloud/organisation).

![nanoMeet enabled](../assets/nanomeet/enable-nanomeet.jpg)
:::



### Contents 

Enabling **nanoMeet** for your organisation gives you access to create, use and broadcast nanoMeet rooms. 
For that you can either use our samples that utilize our nanoMeet web API, copy the source code or create your own code using our documentation.


1. **nanoMeet Token Creator (Online Sample)** - *Create a room and secure invite token* <br/>
   You can create a secure token with moderator rights to join and invite people into a nanoMeet room.

:::tip Online Samples: nanoMeet Token creator
Available as [online web page](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME) and [source code](source-code#nanomeet-token-creator-source-code) to integrate.
:::

![Screenshot: nanoMeet Token Creator](../assets/nanomeet/nanomeet-helper.jpg)
*Screenshot: nanoMeet Token Creator*

2. **nanoMeet sample (Online Sample)** - *Host nanoMeet meetings* <br/>
   You can use nanoMeet with a valid secure token. Using this sample in a moderator role lets you invite people, set up security options and start a broadcast incl. recording.

:::tip Online Samples: nanoMeet Sample
Available as [online web page](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=YOUR-INVITE-TOKEN) and [source code](source-code#nanomeet-sample-source-code) to integrate.
:::

![Screenshot: nanoMeet Meeting](../assets/nanomeet/nanomeet-meeting.jpg)
*Screenshot: nanoMeet Meeting*

3. **nanoMeet Web API** - *All nanoMeet functions* <br/>
This nanomeet.js file lets you access all nanoMeet functions and procedures.

:::tip nanoMeet API
Find the nanoMeet API documentation [here](./api).
:::

### Usage

To use nanoMeet you can either use our online samples, copy our sample code or write your own code.


- **nanoMeet Samples**:
Read the section [nanoMeet Samples](./samples) to get further instructions.

- **nanoMeet samples source code code**:
Find the source code of our samples [here](./source-code).

- **nanoMeet Web API**:
Read our [developers documentation](./api) 


### Customization

You are able to customize your nanoMeet room using your own branding! Read more [here](./getting-started#customize-a-nanomeet-room).


### Roles

There are two main Roles

- **Moderator**: Is able to create invite tokens for participants and moderators, start live streams and customize the nanoMeet room.
- **Participant**: Is able to join a nanoMeet room.

## Support

:::caution Do you need assistance using nanomeet?
Please use [our support contact form](https://www.nanocosmos.de/support) for further assistance.
:::


