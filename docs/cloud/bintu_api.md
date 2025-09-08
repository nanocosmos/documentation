---
id: bintu_api
title: Bintu API
sidebar_label: Bintu API
---

## What is bintu?

Bintu is the stream management dashboard and API for nanoStream Cloud and CDN. By using bintu, you can create and manage your live streams, to enable ultra-low-latency live streaming at a global scale.

You can manage your streams via the dashboard or the REST API:

<article className="margin-vert--lg">
  <Columns className="list_ZO3j" >
    <Card className="col col--6 margin-horiz--md" href="https://dashboard.nanostream.cloud/">
      <Card.Header title="Installation">Dashboard</Card.Header>
      <Card.Body className="padding-vert--md">The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities.</Card.Body>
    </Card>
    <Card className="col col--6 margin-horiz--md" href="https://doc.pages.nanocosmos.de/bintuapi-docs/">
      <Card.Header title="Configuration">Bintu API</Card.Header>
      <Card.Body className="padding-vert--md">bintu.live is a stream management platform used by nanoStream for end to end live streaming services. bintu live can be used to create, manage, group and tag live streams.</Card.Body>
    </Card>
  </Columns>
</article>

## What do I need?

:::info Before starting
To begin, please sign in using your nanoStream Cloud/Bintu account credentials. <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::

You need a bintu account, based on our trial or a paid plan. 
You also need a live encoder, currently based on RTMP, SRT, WHIP applications or WebRTC in the browser.
Live playback will be supported by using our built-in nanoPlayer which you can easily embed into your own applications.

* [Homepage: Overview and Plans](https://www.nanocosmos.de/cloud)
* [Introduction](cloud_introduction)
* [Getting Started with bintu](cloud_getting_started)

## bintu REST API 

- API Entry point: https://bintu.nanocosmos.de/
- Documentation: https://doc.pages.nanocosmos.de/bintuapi-docs/

## Examples

### Get latest live stream

#### CURL command line 

```shell
curl -X GET "https://bintu.nanocosmos.de/stream?quantity=1" \
-H 'content-type: application/json' \
-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' 
```

#### Javascript

```js
    fetch("https:bintu.nanocosmos.de/stream?quantity=1", {
        "headers": { "x-bintu-apikey": BINTU_API_KEY }, "method": "GET",
    }).then((response) => response.json())
```

### Create MBR/ABR Stream including live transcoding

#### CURL command line

```shell
curl 'https://bintu.nanocosmos.de/stream' \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-bintu-apikey: YOUR_BINTU_API_KEY' 
  --data-raw '{"transcodes":[{"profile":"vtrans2-852x480x800x25","tags":[]},{"profile":"vtrans2-640x360x400x25","tags":[]}]}' \
```

#### Javascript

```js
    fetch("https://bintu.nanocosmos.de/stream", {
        "headers": { "x-bintu-apikey": BINTU_API_KEY }, "method": "POST",
        "body": JSON.stringify({"transcodes":[{"profile":"vtrans2-852x480x800x25","tags":[]},{"profile":"vtrans2-640x360x400x25","tags":[]}]}),
    })
```


:::info Questions?
For business related questions reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de. <br/>
**For technical questions you can use our [support form](https://www.nanocosmos.de/support).**
:::
