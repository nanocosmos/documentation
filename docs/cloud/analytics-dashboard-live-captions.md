---
slug: /analytics/dashboard/live-captions
id: analytics-dashboard-live-captions
title: Analytics Dashboard
sidebar_label: Live Captions
---

# Live Captions

The Live Captions page provides usage analytics for the live captioning and transcription service. It gives you an overview of transcription session uptime, language distribution, and per-stream usage — for up to 92 days of historical data. All widgets support CSV export.

:::info
Live Captions must be enabled for your organization before data appears here. To learn how to set up and configure Live Captions, see the [Live Captions setup guide](/docs/dashboard/live_captions).
:::

## Uptime Usage

A bar chart showing the total uptime hours of live caption sessions over the selected time range. Each bar represents a time period, and the aggregate total is shown in the top-right corner of the widget.

Uptime is measured from the start to the end of a transcription session. Partial or real-time usage is not reflected until the session ends.

Click on any bar to open a detailed breakdown for that time period.

<img src={require('../assets/analytics/analytics-live-captions-uptime-usage.png').default} width="100%" />

*Screenshot: Uptime Usage*

<img src={require('../assets/analytics/analytics-live-captions-uptime-usage-zoom.png').default} width="100%" />

*Screenshot: Uptime Usage — zoomed view*

## Source Language

A pie chart showing the distribution of transcription session uptime by **source language** — the spoken language of the stream that the ASR (Automatic Speech Recognition) engine transcribes. Each slice shows the percentage and total uptime in a readable format (e.g., 2h 15m 30s), sorted by uptime descending.

Click on any slice to drill down into a per-stream uptime breakdown for the selected language.

<img src={require('../assets/analytics/analytics-live-captions-source-language.png').default} width="100%" />

*Screenshot: Source Language*

<img src={require('../assets/analytics/analytics-live-captions-source-language-zoom.png').default} width="100%" />

*Screenshot: Source Language — zoomed view*

## Target Language

A pie chart showing the distribution of transcription session uptime by **target language** — the language captions are translated into and displayed to viewers (e.g., `en`, `de`, `fr`). Since a single stream can output captions in multiple target languages simultaneously, each language is tracked independently. Sorted by uptime descending.

Click on any slice to drill down into a per-stream uptime breakdown for the selected language.

<img src={require('../assets/analytics/analytics-live-captions-target-language.png').default} width="100%" />

*Screenshot: Target Language*

<img src={require('../assets/analytics/analytics-live-captions-target-language-zoom.png').default} width="100%" />

*Screenshot: Target Language — zoomed view*

## Uptime Usage by Stream

A paginated table listing uptime duration per stream name.

| Column | Description |
|---|---|
| Stream name | The name of the stream |
| Duration (Hours) | Total uptime of live caption sessions for this stream |

You can search by stream name and sort by either column. The footer shows the total number of streams found.

<img src={require('../assets/analytics/analytics-live-captions-usage-by-stream.png').default} width="100%" />

*Screenshot: Uptime Usage by Stream*
