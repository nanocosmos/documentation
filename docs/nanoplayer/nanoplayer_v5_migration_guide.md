# Migration Guide to Version 5.x

## Overview
MOQ builds on modern browser APIs such as **WebTransport**, **WebCodecs**, and **WebAudio/Canvas**, providing a new workflow optimized for  interactive live streaming at scale.

## nanoPlayer v5 Browser Compatibility  
- **Google Chrome, Microsoft Edge and other Chromium-based browsers (Opera, Brave, Samsung Internet, etc.)**
  - Chromium version 60 and higher
- **Mozilla Firefox**
  - Version 55 and higher
- **Apple Safari (macOS/iOS/iPadOS)**
  - Version 11 and higher
- **Microsoft Edge (Trident)**
  - Version 15 and higher
- **Microsoft Internet Explorer**
  - no longer supported in nanoPlayer v5
  - Version 11 supported in nanoPlayer v4

## MOQ Mode Browser Compatibility
- **Google Chrome, Microsoft Edge and other Chromium-based browsers (Opera, Brave, Samsung Internet, etc.)**
  - Supported in Chromium version 110 and higher
- **Mozilla Firefox**
  - Supported in version 130 and higher on Windows and macOS.
- **Apple Safari (macOS/iOS/iPadOS)**:
  - No official support at the time (Safari/WebKit 18). Experimental feature flags already exist, but not completely working yet.

## New Configuration Options

### `config.playback.enableMediaOverQuic`
- **Description:** Enables MoQ playback with automatic MSE fallback for unsupported browsers
- **Type:** Boolean
- **Default:** `true`

### `config.playback.enableQuicConnectionProbe`
- **Description:** Probes the connection in MoQ playback to determine optimal playback technology
- **Type:** Boolean  
- **Default:** `true`

### `config.playback.volume`
- **Description:** Sets the player's initial volume
- **Type:** Number (0.0 - 1.0)
- **Default:** `1.0`

## Breaking Changes

### 1. Removed Legacy Playback Technologies
- **Native HLS** (iOS versions below 10)
- **Flash Player**

**Migration Path:** To continue using these technologies, remain on version 4.x

### 2. Changed Default Values

#### `config.playback.latencyControlMode`
- from `"classic"` to `"balancedadaptive"`

#### `config.playback.automute`
- from `false` to `true`

#### `config.playback.faststart`
- from `false` to `true`

#### `config.source.startIndex`
- from `0/highest` to `n-1/lowest`

#### `config.source.options.adaption.rule`
- from `"none"` to `"deviationOfMean2"`
- enabling ABR playback if more than one stream/entry is available

### 3. Canvas vs Video Element
MoQ playback mode now uses `<canvas>` instead of HTML5 `<video>` element.

**Migration Options:**
- Disable MoQ by setting `enableMediaOverQuic: false` to use MSE playback
- Remain on version 4.x if video element dependency cannot be changed

### 4. Removed Scaling Modes
The following scaling modes have been removed:
- `resize`
- `original`

