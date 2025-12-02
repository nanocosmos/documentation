---
id: nanoplayer_release_latest_v4
title: Latest Release v4
sidebar_label: Latest v4
---

## **[4.31.1]**

### **Release Notes**  

This release includes fixes for fast-start buffer management and hls playback error recovery. Fast-start buffer requests are now prevented during playback to avoid unnecessary buffering. Furthermore, it resolves an issue that caused a black screen during error recovery in HLS playback mode.

### **Changelog**

### Fixed

- prevent fast-start buffer from being requested by updateSource while in the playing state.
- an issue causing a black screen during error recovery in HLS playback mode.

### **Release Package**

- [4.31.1](https://files.nanocosmos.de/index.php/s/C64L5SyarMLdjH2)
- [latest 4.x](https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6)
- [latest](https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP)
