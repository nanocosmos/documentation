---
id: nanoplayer_release_latest
title: Latest Release
sidebar_label: Latest
---

# **NanoPlayer - Release Overview**

## Please find more about the **MOQ playback mode** feature in our [documentation](https://docs.nanocosmos.net/docs/nanoplayer/nanoplayer_feature_moq/)

## For easy-to-use migration follow our [guide](https://docs.nanocosmos.net/docs/nanoplayer/nanoplayer_v5_migration_guide)

## **[5.0.9]**

### **Release Notes**

This release focuses on stability improvements and fixes for iOS playback behavior and stream quality handling.
The playback resume behavior after background suspension has been improved for MSE playback, fixing an issue where playback could get stuck when resuming in muted mode if the session was never unmuted, particularly on iOS 26.4.
In addition, HLS playback in iOS WebViews has been improved to ensure fallback playback when MSE/MOQ playback is not possible.
This release also fixes an issue with incorrect `group.startQuality` selection when the configured quality was not available in the active rendition set.

### **Changelog**

### **Fixed**

- issue in MSE playback where playback could get stuck when resuming in muted mode if the session was never unmuted, after being suspended in background state, particularly on iOS 26.4
- ensured HLS playback in iOS WebViews as fallback when MSE/MOQ playback is not possible
- incorrect `group.startQuality` matching when the configured quality was not included in the available group renditions

### **Release Package 5.0.9**

- [5.0.9](https://files.nanocosmos.de/index.php/s/PCgA6oTnQnb4ake)
- [latest 5.x](https://files.nanocosmos.de/index.php/s/y4e2axW7s8qEtJb)
- [latest](https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP)
