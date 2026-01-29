---
id: guardian
title: nanoStream Guardian
sidebar_label: nanoStream Guardian
description: nanoStream Guardian is a security extension of nanoStream Cloud, designed to **instantly block unwanted viewers, domains, or entire IP ranges** from accessing your live streams.
---


nanoStream Guardian is a security extension of **nanoStream Cloud**, designed to **instantly block unwanted viewers, domains, or entire IP ranges** from accessing your live streams.
With just a single API call or directly from your Analytics Dashboard, you can **prevent illegal restreaming, unauthorized embedding, malicious attacks, or suspicious traffic spikes**.

The Guardian acts as an additional, real-time protection layer that complements your existing secure playback and token workflow.

:::warning Prerequisites
To use nanoStream Guardian, you need an active nanoStream Cloud/Bintu account (trial or paid). If you are just getting started:

- Create an account via **[Sign Up](https://dashboard.nanostream.cloud/auth?signup)**  
- Follow the **[Getting Started Guide](/docs/dashboard/getting_started)**  
- Or reach out to our sales team via the **[contact form](https://www.nanocosmos.de/contact)** or by email via *sales(at)nanocosmos.de*
:::

<div class="video-wrap">
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/hVbkifac1uo" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

*Tutorial: Instantly protect your live streams by blocking IP addresses with nanoStream Guardian.*

## Why use nanoStream Guardian?

nanoStream Guardian provides **reactive security**, allowing you to respond immediately when suspicious or abusive activity appears in your analytics.

With Guardian, you can:

- **Block individual IP addresses** showing unauthorized or malicious behavior
- **Block full IP ranges (CIDR masks)** when attacks originate from networks or cloud providers
- **Block referrer domains** that illegally embed your stream on external sites
- Benefit from **fast propagation** (new connections blocked within max. **6 minutes**)
- Use automatic **24-hour expiry** for IP blocks (referrers stay blocked until removed)
- Apply the rules **organization-wide** without additional configuration

This makes Guardian especially useful for:

- Protecting against **illegal rebroadcasting / restreaming**
- Stopping **DDoS-like spikes** or unusual bursts of traffic
- Securing **premium events**, ticketed content, and private access sessions
- Handling **abusive users** or bots in real time

:::tip What is a CIDR Mask?
CIDR masks allow blocking large ranges of IP addresses (useful for cloud-hosted VPNs or datacenter-based attacks).
Example: Blocking `255.255.255.0/24` covers all **256 IPs** from `255.255.255.*`.
:::

## How to Use nanoStream Guardian

You can interact with the Guardian through:
1. **Analytics Dashboard** (UI-based control, great for operators)
2. **Guardian API** (automation, backend integration, workflows at scale)


## Guardian in the Analytics Dashboard

The **Analytics Dashboard**, available at [metrics.nanocosmos.de](http://metrics.nanocosmos.de), provides a real-time overview of viewer activity, allowing operators to detect anomalies and react within seconds. It is ideal for production teams, monitoring centers, and live event operations that require **immediate situational awareness**.

| Tab | URL | Description |
| --- | --- | ----------- |
| Guardian | [metrics.nanocosmos.de/streamGuard](https://metrics.nanocosmos.de/streamGuard) | The Guardian tab is your central control panel for managing all active and historical security actions. This area is perfect for technical operators who must enforce security rules on the fly. |
| Breakdown |  [metrics.nanocosmos.de/breakdown](https://metrics.nanocosmos.de/breakdown) | The Breakdown tab helps you detect suspicious patterns. From here, you can block IPs directly with a single click, enabling rapid mitigation during critical moments. |

:::tip Learn More
For a detailed walkthrough of analytics workflows and Guardian controls, visit the [Analytics Guardian Guide](/docs/analytics/guardian).
:::

## Guardian API

The API provides full programmatic control—ideal for automation, backend systems, or large-scale operations.

**API base URL:** https://guardian.nanostream.cloud/  

### Supported Block Types

| Block Type | Example | Effect | Duration |
|-----------|---------|--------|----------|
| Single IP | `103.13.113.1` | Blocks one viewer | 24h |
| CIDR Mask | `103.13.113.0/24` | Blocks *all* addresses in a subnet | 24h |
| Referrer Domain | `bad-stream-site.com` | Blocks entire domain from using H5Live playback | Until manually unblocked |

### Block a single IP (24h)

```js title="guardian/block_single_ip.sh"
curl --location 'https://guardian.nanostream.cloud/ip' \
--header 'Content-Type: application/json' \
--header 'X-BINTU-APIKEY: BINTU_API_KEY' \
--data '{
    "ip": "103.13.113.1",
    "type": "deny",
    "tag": "Blocking malicious user IP"
}'
```

### Block a CIDR Mask

```js title="guardian/block_cidr_mask.sh"
curl --location 'https://guardian.nanostream.cloud/ip' \
--header 'Content-Type: application/json' \
--header 'X-BINTU-APIKEY: BINTU_API_KEY' \
--data '{
    "ip": "103.13.113.0/24",
    "type": "deny",
    "tag": "Blocking suspicious subnet"
}'
```

### Block a Referrer Domain

```js title="guardian/block_referrer_domain.sh"
curl --location 'https://guardian.nanostream.cloud/referrer' \
--header 'Content-Type: application/json' \
--header 'X-BINTU-APIKEY: BINTU_API_KEY' \
--data '{
    "domain": "all-good-streams.com",
    "info": "Domain replicating 3 streams on 24/02",
    "type": "deny"
}'
```

## How Blocking Works Internally

Guardian applies security rules with minimal disruption:
- Blocks apply **organization-wide**
- New incoming connections from blocked IPs are denied within **≤ 6 minutes**
- IP blocks expire automatically after 24 hours
- Referrer blocks persist until explicitly removed
- Existing sessions from a blocked IP remain active until the viewer disconnects
- Blocks are logged and visible in the Analytics Dashboard

This design ensures:
- complete transparency
- non-interference with ongoing sessions
- immediate protection against new connection attempts

## Best Practices

Here are recommended strategies to help you get the most out of nanoStream Guardian in combination with the rest of the nanoStream Cloud security stack:


### Use Guardian as a Real-Time Defense Layer
Guardian is ideal for situations where suspicious activity appears unexpectedly during a live event. Examples include:
- A single IP suddenly initiates hundreds of connections
- Automated reconnect attempts from the same viewer
- Anomalous traffic during high-value streams
A quick IP or CIDR block stops unauthorized activity immediately without disrupting legitimate viewers.

### Combine Guardian with JWT Secure Playback
Guardian acts as a reactive shield, while JWT protects streams proactively. Together, they create a layered security model:
- JWT ensures that only authorized viewers can access your content
- Guardian blocks malicious or abusive behavior even if someone gains access
This combination offers strong protection for premium, ticketed, or compliance-sensitive content.

### Monitor Analytics for Early Threat Detection
Use the Breakdown tab in the analytics dashboard to detect anomalies early:
- Unusual geographic spikes
- Repeated connection attempts
- High viewer numbers from single IPs or unknown referrers
- Unexpected embeds
Active monitoring helps you address issues before they become critical.

### Use CIDR Blocks Against Network-Based Attacks
If suspicious traffic originates from VPNs, datacenters, or proxy networks, blocking a single IP is not enough.
CIDR masks like `/24` or `/20` allow you to:
- Suppress larger subnet ranges
- Neutralize clusters of malicious actors
- Stop automated scraping or restreaming services
This is especially effective against botnets or cloud-hosted attackers.

### Automate Blocking Through Backend Workflows
Integrating Guardian into your backend ensures continuous protection without manual intervention.
Common automation triggers:
- Multiple concurrent sessions from the same viewer
- Token sharing detected by your authentication system
- Suspicious behavior flagged by your paywall or monitoring service
Automation ensures fast, consistent security responses.

### Keep Your Block List Organized Using Tags
Tags make it easy to understand the reason behind each block, e.g.:
- `"tag": "suspected restreaming"`
- `"tag": "VPN subnet"`
- `"tag": "DDoS spike during event"`
- `"tag": "repeated reconnects"`

Clear tagging is essential for team collaboration and incident reviews.