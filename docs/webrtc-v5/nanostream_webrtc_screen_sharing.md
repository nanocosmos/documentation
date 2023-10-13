---
id: nanostream_webrtc_screen_sharing
title: Screen Sharing
sidebar_label: Screen Sharing
---

The nanoStream Webcaster supports screen sharing!

Instead of a web camera you can use a screen or a window, depending on the browser used, as a live video source.

## Supported Browsers

Screen sharing is currently available for desktop browsers:

  * Google Chrome
  * Firefox
  * Safari 13+

Screen sharing is a built-in feature in modern desktop browsers. For early Google Chrome versions, a certified browser extension was required due to Google security policy. Starting from Google Chrome 72+, however, screen share is supported without the need to install the browser extention.

## Setup Screen Sharing

Screen sharing is enabled by setting video source to `screen` in the configuration object passed to [startPreview(config)](./nanostream_webrtc_api#rtcuserstartpreviewconfig). Note that the default video source's value is `camera`.

```js
// to enable Screen Sharing, we pass "screen" as a source to the video device configuration

var videoDeviceConfig = {
  source: 'screen'
};

var audioDeviceConfig = {
  device: 0 // we select the first available audio device
};

var config = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};
 
user.startPreview(config);
```
