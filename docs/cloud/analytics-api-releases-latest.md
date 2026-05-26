---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Releases
sidebar_label: Latest
---

# Changelog

## 2.35.0 - Domain Migration & API Endpoint Update

#### New Base URLs

-  **Analytics API:** `https://metrics-api.nanostream.cloud` (no `/api` prefix required)
-  **Analytics Dashboard:** `https://metrics.nanostream.cloud`
-  the old URLs are still supported but are now deprecated

#### Removal of `/api` Prefix

-  the `/api` prefix has been removed from all analytics API endpoint paths
   -  example: `/api/v2/h5live/playtime/timeseries` is now `/v2/h5live/playtime/timeseries`

#### API Documentation

-  API documentation is now available at: `https://api.nanostream.cloud/docs/analytics/v2/`
-  the previous URL `https://metrics.nanocosmos.de/api/doc/v2/` redirects to the new location