---
id: nanoplayer_release_latest_v4
title: Latest Release v4
sidebar_label: Latest v4
---

## **[4.31.2]**

### **Release Notes**

This release focuses on stability improvements and fixes for iOS playback behavior and stream quality handling. The playback resume behavior after background suspension has been improved for MSE playback, fixing an issue where playback could get stuck when resuming in muted mode if the session was never unmuted, particularly on iOS 26.4. This release also fixes an issue with incorrect `group.startQuality` selection when the configured quality was not available in the active rendition set.

### **Changelog**

### Fixed

- issue in MSE playback where playback could get stuck when resuming in muted mode if the session was never unmuted, after being suspended in background state, particularly on iOS 26.4
- incorrect `group.startQuality` matching when the configured quality was not included in the available group renditions

### **Release Package 4.31.2**

- [4.31.2](https://files.nanocosmos.de/index.php/s/xqMEX9nFtzxgQAn)
- [latest 4.x](https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6)
- [latest](https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP)
