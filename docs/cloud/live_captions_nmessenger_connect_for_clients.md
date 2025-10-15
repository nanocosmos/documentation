---
id: live_captions_retrieve
title: Retrieve Live Captions in Your Playback System
sidebar_label: Retrieve Captions
---

Implement the following steps to **connect, authenticate, and display live captions** provided by our transcription service in your web player or application.

:::info
This guide assumes **Live Captions** are already enabled for your organization.  
If you still need to enable the feature, please contact our **[Sales team](https://www.nanocosmos.net/contact/)** or send an email to sales(at)nanocosmos.net.
:::

### 1. Load the Caption Library

Include the [nanoStream Messenger](https://bintu-nmessenger.autodevops-prod.nanostream.cloud/nmessenger.js) JavaScript library in your HTML page or application:

```html
<script src="https://bintu-nmessenger.autodevops-prod.nanostream.cloud/client/nmessenger.js"></script>
```

This library handles the WebSocket connection to the caption channel and outputs live text.

### 2. Create a Caption Overlay
Add a `<div>` in your player page or application where the captions will be written:

```html
<div id="caption-text" class="overlay-text"></div>
```

This element will act as the container for live captions.

#### 2.1 Optional styling
Adjust to your UI as needed:


```html
<style>
  .overlay-text {
    position: absolute;
    left: 0; right: 0; bottom: 5%;
    margin: 0 auto;
    padding: 0.5rem 0.75rem;
    max-width: 80%;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    text-align: center;
    background: rgba(0,0,0,0.55);
    color: #fff;
    border-radius: 6px;
    pointer-events: none;
    z-index: 9999;
  }
</style>
```

### 3. Initialize the Messenger Client
After loading the library, create a new Messenger object and configure it with your channel and secure token:

```html
<script>
  const messenger = new NanoMessenger({
    channel: "your-caption-channel-id",
    token: "your-secure-caption-token",
    target: "caption-text" // the ID of the div where captions should appear
  });

  messenger.connect();
</script>
```

**Parameters**

- **channel**: The caption channel you receive from us.

- **token**: Your secure JWT token (required for authentication).

- **target**: The id of the element where the text should be displayed.

:::tip Security best practice
Generate JWTs server-side and use short-lived tokens.
Avoid hard-coding long-lived tokens in public code, your playback system.
:::

### 4. Display Captions
Once connected, the Messenger library automatically writes incoming captions into the target element.

Example when a caption `Hello world` arrives:
```html
<div id="caption-text" class="overlay-text">Hello world</div>
```

No extra rendering logic is required.

### 5. Use the Reference Implementation (Optional)
If you prefer a ready-to-use solution:

- Use the iframe caption player provided as a reference implementation or embed the example HTML snippet in your system.
- If you want a custom UI, you can still use the same Messenger library — just style the overlay `<div>` as you like.

That’s it — load the library, create an overlay, initialize Messenger with channel, token and captions will appear.

 <details>
 <summary> See receive-captions.html </summary>

 ```html 
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Your player</title>
    <link rel="stylesheet" href="https://bintu-nmessenger.autodevops-prod.nanostream.cloud/client/nmessenger.css" />
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
        font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      }
      #playerDiv {
        width: 100vw;
        height: 100vh;
        position: relative;
        background: #000;
      }
      /* Messenger target div */
      #captionText {
        display: inline-block;
        padding: 10px 16px;
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.55);
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.4;
        max-width: 80%;
        word-break: break-word;
        -webkit-backdrop-filter: blur(6px);
        backdrop-filter: blur(6px);
      }
    </style>
  </head>
  <body>
    <div id="playerDiv">
      <!-- nmessenger writes messages here -->
      <div class="overlayText">
        <div id="captionText" aria-live="polite" role="log"></div>
      </div>
    </div>
    <script src="https://bintu-nmessenger.autodevops-prod.nanostream.cloud/client/nmessenger.js"></script>
    <script>
      function nmessengerMain(options = {}) {
        const CAPTION_SERVER = "bintu-nmessenger.autodevops-prod.nanostream.cloud";
        const CAPTION_PORT = 443;
        const params = new URLSearchParams(window.location.search);
        const channel = params.get("caption.channel");
        if (!channel) {
          console.info("caption.channel not specified. Not initializing caption.");
          return;
        }
        const token = params.get("caption.token");
        messenger = new NanoMessenger(CAPTION_SERVER, CAPTION_PORT, options);
        messenger.connect(
          token,
          null,
          channel,
          () => {
            console.info("connect success");
            messenger.receiveMessage({ user: "system", text: "<receiving messages>" });
          },
          (err) => {
            console.error("Error:", err);
            messenger.receiveMessage({ user: "system", text: "Connection error" });
          }
        );
      }
      document.addEventListener("DOMContentLoaded", function () {
        const captionOptions = {
          overlayDiv: "captionText",
        };
        nmessengerMain(captionOptions);
      });
    </script>
  </body>
</html>
```

</details>
