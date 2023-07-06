---
id: live-recording-vod
title: Live Recording and VOD
sidebar_label: Live Recording and VOD
---

:::info Live Recording and VOD will require a business upgrade
Please reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de
:::

If enabled, by default all incoming streams will be recorded for later 
playback (video on demand, VOD). You can choose to either record the live stream or do a live stream without recording:

Ingest URL without recording, live only - default, if VOD is not enabled for your account:
- `rtmp://bintu-stream.nanocosmos.de/live/STREAM`

Ingest URL with live streaming and recording the incoming upstream for later playback:
- `rtmp://bintu-stream.nanocosmos.de/rec/STREAM`

The bintu system saves the recording in different world regions,based on their ingest location.
We have these regional storages available:

- `-eu-` Europe and default
- `-us-` North America
- `-au-` Australia/Oceania

As an example, if your ingest was in EU, you will get this playback URL:

https://bintu-vod-eu.nanocosmos.de/XXXXX/XXXXX-12345.mp4

for North America:

https://bintu-vod-us.nanocosmos.de/XXXXX/XXXXX-12345.mp4

for Australia:

https://bintu-vod-au.nanocosmos.de/XXXXX/XXXXX-12345.mp4

Depending on your location, from which you want to access a VOD, you might need to replace your default URL with the region where the VOD was recorded.
