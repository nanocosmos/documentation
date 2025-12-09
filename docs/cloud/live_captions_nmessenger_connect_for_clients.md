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

## Choose your integration method

### Quick start: Embed player with captions

This method allows you to embed a player with captions directly into your web page or application by using an `<iframe>` element.

It doesn't require any additional changes to your page, everything is configurable via URL query parameters.

[Jump to: Embed player with captions](#embed-player-with-captions)

### Build a custom integration

This method allows you to integrate live captions into your web player or application by using the **nanoStream Messenger** JavaScript library. 

It provides a flexible way to customize the caption display and integrate it with your existing player.

[Jump to: Custom integration](#custom-integration)

---

## Embed player with captions

We have created a reference implementation for embedding live captions into your web page or application using an `<iframe>` element, which you can use as a starting point before reaching for your own custom implementation.

To enable live captions in the embedded player, you'll need:

1. **Stream ID/name** - Your video stream identifier
2. **Caption channel** - The caption channel name (you'll receive this from us)
3. **Security token** - A JWT token for secure playback & captions delivery

The embed player is available at:

```
https://bintu-nmessenger.autodevops-prod.nanostream.cloud/client/embed/nanoplayer.html
```

These parameters are required to be put in a URL query string to configure the embedded player:

- `group.id=<STREAM_ID_OR_NAME>`
- `caption.channel=<CAPTION_CHANNEL>`
- `caption.token=<SECURITY_TOKEN>`
- `group.security.jwtoken=<SECURITY_TOKEN>`

:::tip
Here you can find more information about the security token and how to generate it: [Secure Playback & Secure Token](../dashboard/secure_playback)

The same security token can be used for both playback and captions delivery. 
The restrictions set on the secure token (stream name, stream group, domain etc.) will be applied to both playback and captions.
:::

:::warning Security best practice
Generate JWTs server-side and use short-lived tokens.
Avoid hard-coding long-lived tokens in public code, your playback system.
:::

The code snippet below demonstrates how to embed the live captions into your web page or application using an `<iframe>` element:

```html
<iframe
  src="https://bintu-nmessenger.autodevops-prod.nanostream.cloud/client/embed/nanoplayer.html?group.id=<STREAM_ID_OR_NAME>&caption.channel=<CAPTION_CHANNEL>&caption.token=<SECURITY_TOKEN>&group.security.jwtoken=<SECURITY_TOKEN>"
  width="100%"
  height="720"
  frameborder="0"
  allowfullscreen>
</iframe>
```

Replace `<STREAM_ID_OR_NAME>`, `<CAPTION_CHANNEL>`, and `<SECURITY_TOKEN>` with your actual values.

<details>

<summary>Example with real data of a demo stream</summary>

:::warning
The token included in the example expires on 2026-12-08.
:::

```html
<iframe
  src="https://bintu-nmessenger.autodevops-prod.nanostream.cloud/client/embed/nanoplayer.html?group.id=nNCcf-ZexY6&caption.channel=nNCcf-ZexY6-de-de&caption.token=eyJhbGciOiJFZERTQSIsImtpZCI6Im5hbm9feDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzcGxheSIsImV4cCI6MTc5NjczMDg0MSwiaWF0IjoxNzY1MTk4NDkzLCJpc3MiOiJuYW5vY29zbW9zIiwibmJmIjoxNzY1MTk4NDkzLCJzdHJlYW1zIjpbIm5OQ2NmLVpleFk2Il0sInN1YiI6IjU4ODYyNTFjLTJmM2UtNGQ3YS1hYWQ4LWQ3YWU1ZDBhNTdhMCJ9._EFR028lTwF2wt1F46LU4byJiWNb3qmuDJkS9Z_Yf2lEn0a9lUWXytZR05P3tbg_wtohyu9N9clTRxT8tYxqDA&group.security.jwtoken=eyJhbGciOiJFZERTQSIsImtpZCI6Im5hbm9feDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzcGxheSIsImV4cCI6MTc5NjczMDg0MSwiaWF0IjoxNzY1MTk4NDkzLCJpc3MiOiJuYW5vY29zbW9zIiwibmJmIjoxNzY1MTk4NDkzLCJzdHJlYW1zIjpbIm5OQ2NmLVpleFk2Il0sInN1YiI6IjU4ODYyNTFjLTJmM2UtNGQ3YS1hYWQ4LWQ3YWU1ZDBhNTdhMCJ9._EFR028lTwF2wt1F46LU4byJiWNb3qmuDJkS9Z_Yf2lEn0a9lUWXytZR05P3tbg_wtohyu9N9clTRxT8tYxqDA"
  width="100%"
  height="720"
  frameborder="0"
  allowfullscreen>
</iframe>

```

</details>

### That's it!

Once you've created your `iframe` URL with the parameters above and integrated it into your web page or application, you're ready to enjoy live captions! The captions will automatically appear over your video stream, no additional code or configuration is needed.

**What happens automatically:**
- [x] Connection to caption server is established
- [x] Captions appear as text overlay at the bottom of the video
- [x] Captions update in real-time as transcription happens
- [x] Reconnection is handled automatically if connection drops

## Custom integration

This section provides instructions for integrating live captions into your custom player or application.

To integrate the captions, we'll use the **nanoStream Messenger** JavaScript library which takes care of delivering the captions over WebSocket.

### 1. Load the Caption Library

Include the [nanoStream Messenger](https://bintu-nmessenger.autodevops-prod.nanostream.cloud/nmessenger.js) JavaScript library in your HTML page or application:

```html
<script src="https://bintu-nmessenger.autodevops-prod.nanostream.cloud/client/nmessenger.js"></script>
```

:::warning
Make sure the script tag loads **before** you try to use `NanoMessenger` in your code. The safest approach is to initialize inside a `DOMContentLoaded` event listener in a separate script tag:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // Your caption initialization code here
  const messenger = new NanoMessenger(/* ... */);
});
```
:::

This library handles the WebSocket connection to the caption channel and outputs live text to the caption overlay element.

### 2. Create a Caption Overlay

Add a container element (e.g. `<div>`) in your player page or application where the captions will be displayed:

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

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // Step 1: Create the messenger client
  const messenger = new NanoMessenger(
    "bintu-nmessenger.autodevops-prod.nanostream.cloud", // server
    443,                                                 // port
    { overlayDiv: "caption-text" }                       // options
  );

  // Step 2: Connect to your caption channel
  messenger.connect(
    "your-caption-token",      // authentication token
    null,                      // user (optional)
    "your-caption-channel",    // channel ID
    () => {                    // on success callback
      console.log("Captions connected");
    },
    (error) => {               // on error callback
      console.error("Caption connection failed:", error);
    }
  );
});
```

**Replace these values:**
- `your-caption-token` - Your secure JWT token
- `your-caption-channel` - Your caption channel ID (you'll receive this from us)

:::warning Security best practice
Generate JWTs server-side and use short-lived tokens.
Avoid hard-coding long-lived tokens in public code, your playback system.
:::

:::note
Make sure the `overlayDiv` name in the options matches the ID of the element you want to use as the caption overlay. 

For example, if you want to use an element with the ID `caption-overlay`, set the `overlayDiv` option to `"caption-overlay"`.
:::

### 4. Display Captions
Once connected, the Messenger library automatically writes incoming captions into the target element.

When a caption like `"Hello world"` arrives, your HTML will automatically update:

```html
<div id="caption-text">Hello world</div>
```

No additional code needed &mdash; the library manages everything.

### That's it!

With the above integration steps completed, you're ready to receive the live captions from your stream.

**What happens automatically:**
- [x] Connection to caption server is established
- [x] Captions appear in the specified target element
- [x] Captions update in real-time as transcription happens
- [x] Reconnection is handled automatically if connection drops

### Use the Reference Implementation (Optional)

If you prefer a ready-to-use solution:

- Use the iframe caption player provided as a reference implementation or embed the example HTML snippet in your system.
- If you want a custom UI, you can still use the same Messenger library &mdash; just style the overlay `<div>` as you like.

That’s it &mdash; load the library, create an overlay, initialize Messenger with channel, token and captions will appear.

The `receive-captions.html` example below demonstrates how to use the reference implementation. It uses the same URL query parameters as the iframe caption player described in the [Embed player with captions](#embed-player-with-captions) section.

 :::tip
 For a complete end-to-end example, see this [interactive CodePen](https://codepen.io/pen?template=jEqXyrN) that integrates our [nanoStream H5Live Player (nanoPlayer)](../nanoplayer/nanoplayer_introduction) with live stream captions delivered via NanoMessenger.
 :::

<details>
<summary>See receive-captions.html</summary>

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

## Troubleshooting

### Captions not appearing

**Check these common issues:**

1. **Is the caption channel correct?**
   - Verify your `channel` or `caption.channel` parameter matches the channel ID we provided
2. **Is the token valid?**
   - JWT tokens expire &mdash; check if your token is still valid
   - Tokens are case-sensitive
   - In case of embed player method: check if the token is passed in both `caption.token` and `group.security.jwtoken`

3. **Is the overlay element present?**
   - For custom integration: Verify the element with ID `caption-text` (or your custom ID) exists in your HTML

4. **Check browser console**
   - Open browser developer tools (F12) and check for error messages

---

### Connection keeps dropping

The automatically reconnect feature is enabled by default, you don't need to do anything.
If captions disconnect frequently:

1. **Check network connectivity** - Test your internet connection
2. **Verify server availability** - Contact support if the issue persists

---

### "NanoMessenger is not defined" error

**For custom integration only:**

This means you're trying to use the library before it has loaded. Make sure you initialize inside `DOMContentLoaded`:

```javascript
// ✅ Correct
document.addEventListener("DOMContentLoaded", function() {
  const messenger = new NanoMessenger(...);
});

// ❌ Incorrect - runs before library loads
const messenger = new NanoMessenger(...);
```

## Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Verify all parameters (channel ID, tokens, stream ID)
3. Check browser console for error messages
4. Contact our support team:
   - [Support contact form](https://www.nanocosmos.net/support/)
   - Include: error messages, browser console logs, and your configuration
