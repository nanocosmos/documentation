---
slug: /analytics/dashboard-releases/history
id: analytics-dashboard-releases-history
title: Dashboard Release - History
sidebar_label: History
---

# Changelog

## 2.29 Cloud Optimizations

- internal system optimizations

## 2.28 - Alert manager UI

-  added `max frame delay` metric to troubleshooting :arrow_right: ingest
-  added an error notification via Toast for issues that occur while parsing app states from a URL

## 2.27 - Alerting Adjustments & Authentication Improvement

-  Adjustments to Troubleshooting/Alerting Section:

   -  fixed an issue when switching between a Stream Time Ratio - alert and a Continuous Restart - alert and no data was shown in the charts
   -  general ingest stream information in the alert table now supports multiple ingest connection details to provide more insights of stream behavior
   -  new details "country name" and "connection ID" are available for alerts
   -  new performance intervals were added to the graph for "Stream Time Ratio" alerts, supporting issues with ratios constantly above 1
   -  improved "Stream Time Ratio" graph annotations, which now indicate whether the alert ended due to stream termination or stream recovery

-  Improvements regarding Login process:
   -  users do not need to re-authenticate via login credentials each time the Analytics Dashboard tab is closed anymore
   -  (e.g.: opening the Analytics Dashboard within a new tab while authentication took place recently, no extra manual login is required)

## 2.26 - Alert Guiding / Publishes finding

-  added new alert guide feature for troubleshooting, which provides a way to find more details about past & current alerts for ingest specific issues
   -  Troubleshooting ingest section has now 2 tabs (publishes / alerts)
   -  it is now possible to redirect to any alert directly from the Cloud Dashboard and see detailed information about occurrences, possible causes and issue solving recommendations
-  adjusted and improved troubleshooting publishes determination in to provide a significant performance boost for search and analysis

## 2.25 - Public world map API routes

-  improved world map interface
-  added support for world map to use with mobile devices
-  added widgets for playtime break downs on the h5live view
   -  H5Live playtime per browser
   -  H5Live playtime per os

## 2.24 - Alerting service & Error response improvement

:::info Release Version Differentiation
With the introduction of version 2.25 we made versioning of our API and the Analytics Dashboard independant from each other. This release contained no changes for the Analytics Dashboard service and as a consequence this service remains at version 2.24 for now.
:::

-  use toasts for error messages
-  improved troubleshooting fine time range slider to automatically keep the maximal selected time range duration at 12 hours

**NOTE: Changelog for previous versions can be found in the [API changelog](/analytics/api-releases/history)**