---
id: nanoplayer_feature_MOQ
title: Media Over QUIC (MOQ)
sidebar_label: Media Over QUIC (MOQ)
---

## Using the MOQ feature with nanoStream Cloud

Introduced in **nanoStream H5Live Player Version 5.0**, the **Media Over QUIC (MOQ)** feature adds support for next-generation transport protocols based on QUIC.
MOQ is designed specifically for **real-time media streaming** and enables lower latency, higher reliability, and improved playback quality under unstable or changing network conditions.

MOQ builds on modern browser APIs such as **WebTransport**, **WebCodecs**, and **WebAudio/Canvas**, providing a new workflow optimized for live and interactive streaming at scale.

## MOQ Benefits
- **Ultra-low latency** for real-time interactivity (Q&A, betting, auctions).
- **Improved stability**: playback is more resilient on unstable or fluctuating networks.
- **Stream prioritization**: efficient bandwidth use for video, audio, and data.
- **Future-ready**: based on QUIC/HTTP/3, modernizing transport compared to TCP, HLS, or DASH.
- **Reduced packet loss impact** (independent stream retransmissions).
- **Smoother adaptive bitrate playback** under mobile/roaming conditions.

Read more about MOQ in this [blog article](https://www.nanocosmos.de/blog/2025/01/MoQ-media-over-quic/).

---

## Browser Support

MOQ depends on **WebTransport** and **WebCodecs** APIs in modern browsers:

- **Google Chrome, Microsoft Edge and other Chromium-based browsers (Opera, Brave, Samsung Internet, etc.)**: Supported in Chromium version 110 and higher.
- **Mozilla Firefox**: Supported in version 130 and higher on Windows and macOS.
- **Apple Safari (macOS/iOS/iPadOS)**: No official support at the time (v18). Experimental feature flags already exist, but not completely working yet.

---

## Migration Notes

Check out the [nanoplayer v5 migration guide](./nanoplayer/nanoplayer_v5_migration_guide) for details on compatibility, fallback handling, and best practices.

## Configuration for MOQ

MOQ playback can be controlled via new configuration settings.

```javascript
'config': {
    ...
    'playback': {
        // Enabling or disabling MOQ (Media over QUIC) playback
        'enableMediaOverQuic': true, // default: true

        // Probing WebTransport/QUIC connectivity during player setup
        'enableQuicConnectionProbe': true, // default: true
    },
    ...
}
```

* If enableMediaOverQuic is set to true and the browser supports it, MOQ will be used.
* If MOQ is not available or the connection probe fails, the player will fall back to WebSocket/MSE playback.
