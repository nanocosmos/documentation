---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Releases
sidebar_label: Latest
---

# Changelog

## 2.34.0 - Live Captions & Inactive Ingest Alerts

#### ABR switches

-  API route for worldmap's ABR switches metric now reports breakdown by correct quality levels

#### Added API routes for live caption usage

-  added API routes for live captions analytics:
   -  `/v2/captions/usage/stream/uptime` (GET) -> uptime usage breakdown by stream name with CSV export
   -  `/v2/captions/usage/language/source` (GET) -> source language breakdown with CSV export
   -  `/v2/captions/usage/language/target` (GET) -> target language breakdown with CSV export
   -  `/v2/captions/usage/timeseries` (GET) -> uptime usage timeseries with CSV export

#### Misuse Detection — MOQ Support

-  added MOQ protocol support to IP misuse and JWT misuse detection controllers