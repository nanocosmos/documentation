---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Releases
sidebar_label: Latest
---

# Changelog

## 2.34.2 - Domain Migration & API Endpoint Update

#### New Base URLs

-  **Analytics API:** `https://metrics-api.nanostream.cloud` (without `/api` at the end)
   -  the domain has changed from `metrics.nanocosmos.de` to `metrics-api.nanostream.cloud`
   -  all endpoint paths now start directly with `/v2/` instead of `/api/v2/`
   -  example: `https://metrics.nanocosmos.de/api/v2/h5live/playtime/timeseries` is now `https://metrics-api.nanostream.cloud/v2/h5live/playtime/timeseries`

-  **Analytics Dashboard:** `https://metrics.nanostream.cloud`
   - the domain has changed from `metrics.nanocosmos.de` to `https://metrics.nanostream.cloud`
   - the URL `https://metrics.nanocosmos.de` (using /api/v2 ...) is still support, but is now deprecated

#### API Documentation

-  API documentation is now available at: `https://api.nanostream.cloud/docs/analytics/v2/`
-  the previous URL `https://metrics.nanocosmos.de/api/doc/v2/` redirects to the new location

