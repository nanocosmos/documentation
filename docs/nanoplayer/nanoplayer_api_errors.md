---
id: nanoplayer_api_errors
title: NanoPlayer Error Codes & Handling
sidebar_label: NanoPlayer Error Codes & Handling
---

## General

In case something went wrong at setup, startup or playback an error will be thrown over the [`onError`](./nanoplayer_api#NanoPlayer..event_onError) event if registered with an error handler function over [`config.events.onError`](./nanoplayer_api/#NanoPlayer..config).

There are five error groups:

* [**General Player Errors**](#player-errors) `1000-1999`
* [**Stream Errors**](#stream-errors) `2000-2999`
* [**Media Element Errors**](#media-errors) `3000-3999`
* [**Network Connection and Security Errors**](#network-errors) `4000-4999`
* [**Setup Errors**](#setup-errors) `5000-5999`

Following some of the most frequent errors will be described.<br /> To see all errors please have a look at the possible [`errorcodes`](./nanoplayer_api/#NanoPlayer..errorcode).

## Player Errors

:::info
These errors have codes in a **range from 1000 to 1999**.
:::

1xxx codes represent general errors of the player on startup or playback.<br />
The most frequent errors here are `1005`, `1007`. `1008` and `1009`.

### 1005 Playback must be initialized by user gesture

This is related to autoplay. There are two possible scenarios for this error occurrence:

1. Unmuted playback is not able to start due to the browser policy
2. iOS low power mode

It is recommended to review the autoplay settings.<br />

Read more about how to configure [Autoplay](./nanoplayer_autoplay).

### 1007 Playback suspended by external reason

This is indicating a special condition on mobile devices when the playback has been stopped by an event in the browser or system on a mobile device.<br />

:::info
This is a non critical error.
:::

:::info
This error should not be handled by immediate replay,
instead the web application should monitor the document visibility state
and initiate a replay via `player.play()`, once it became `visible` again.
[https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState)
:::

This includes:

* Player tab going to background after a tab switch
* Browser application being minimized or closed
* Browser application being interrupted by the system, e.g. in case of an incoming call or device being locked

### 1008 Playback error. Only on iOS

An unexpected error occurred during playback on iOS. This error is recoverable. Read more about [Media Error Recovery](./nanoplayer_feature_media_error_recovery).

### 1009 Playback failed because the player was in visibility state 'hidden' at load start

This is related to a policy in some browsers, e.g. Chrome, Chromium based and Safari preventing media playback start in a background tab, a tab that did not have focus/visibility yet.

:::info
This error should not be handled by immediate replay,
instead the web application should monitor the document visibility state
and initiate a replay via `player.play()`, once it became `visible` again.
[https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState)
:::

## Stream Errors

:::info
These errors have codes in a **range from 2000 to 2999**.
:::

2xxx codes are related to fetching the media stream on the player side and the occurrence
of timeouts during loading or playback. It is about the availability of the stream on the player side,
which can be connected to the general availabilty of the stream, but as well to bad network conditions
on the player side.<br />
The most frequent errors here are `2001`, `2002`, `2003` and `2004`.

### 2001 The requested stream can not be found

No stream info and media data received.

### 2002 No media available

The stream was already playing, but media data stopped receiving.

### 2003 Not enough media data received

Stream info is received, but no media data was fetched.

### 2004 The source stream has been stopped

The stream was already playing, but the stream was unpublished.

## Media Errors

:::info
These errors have codes in a **range from 3000 to 3999**.
:::

3xxx codes are related to media playback errors in the system/browser playback components,
MediaElement and/or Media Source Extensions.<br />
The most present errors here are `3003`, `3100` for MSE playback and `3005`, `3101` for HLS playback. This errors can be recovered.
Read more about [Media Error Recovery](./nanoplayer_feature_media_error_recovery).

### 3003 An error occurred when decoding media

An receiving media data chunk couldn't be decoded.

### 3005 An error occurred while hls playback when decoding video

The receiving media data of the hls stream couldn't be decoded.

### 3100 The media source extension changed the state to 'ended'

The MSE stopped working.

### 3101 An error occurred while buffering on hls playback

The hls playback was interupted during media data buffering.

## Network Errors

:::info
These errors have codes in a **range from 4000 to 4899**.
:::

4xxx codes are related to network errors of the media stream connections.
Connect failures can be caused by bad network conditions, firewall issues
and in rare cases by overreacting ad blockers.

### 4001 Could not open connection. Timeout reached

The websocket server is not available or not present, a timeout for establishing the connection is reached.

### 4006 The source request was aborted by timeout

An [`updateSource`](./nanoplayer_api#NanoPlayer+updateSource) or a [`switchStream`](./nanoplayer_api#NanoPlayer+switchStream) request was run into a timeout.

### 4106 Maybe no network, wrong url or server down. Reconnect possible

The websocket server is not available or not present, establishing new connection is possible.

## Security Errors

:::info
These errors have codes in a **range from 4900 to 4999**.
:::

### 4901 The security service denied access. The authentication token is invalid

Unsuccesful authentication due to invalid token. Read more about [Secure playback with H5Live](./nanoplayer_token_security).

### 4903 The security service denied access. The url is expired or a token parameter is missing (expires, token, or options)

Unsuccesful authentication due to expired token or a missing token parameter. Read more about [Secure playback with H5Live](./nanoplayer_token_security).

## Setup Errors

:::info
These errors have codes in a **range from 5000 to 5999**.
:::

5xxx are related to errors during the setup/configuration stage, mainly configuration errors and insufficient browser capabilities.
In most cases it makes sense to check the configuration that has been used.

### 5001 "?javascript error?"

A javascript error occured during setup promise execution. Most often the is reason an 'undefined' error within the setup promise resolve or triggered events (e.g. [`onReady`](./nanoplayer_api/#NanoPlayer..event_onReady), [`onMute`](./nanoplayer_api/#NanoPlayer..event_onMute) or [`onVolumeChange`](./nanoplayer_api/#NanoPlayer..event_onVolumeChange)) during setup.<br />

Example:

* "undefined is not an object"

### 5002 This browser does not fully support HTML5 and H5Live

The used browser does not fully support HTML5 and H5Live.<br />

Supported browsers are:

* Chrome >=54 (Windows, MacOSX, Android)
* Firefox >=48 (Windows, MacOSX, Android)
* Microsoft Edge (Windows)
* Microsoft Internet Explorer 11 (at least Windows 8)
* Safari (MacOSX & at least iOS 10)

### 5004 The players source configuration is malformed or missing

This setup error occurres when one of the key parameters (ie `source` object, `group.id` or `rtmp.streamname`) in the config object is malformed, therefore not readable for config parsing, or missing.
Proper configuration examples can be found in [Getting started](./nanoplayer_getting_started).

## Error handling

In case of an error, the following choice is to either try to replay/reconnect, or do nothing.

There are 3 available scenarios depending on the error type:

1. Errors covered by internal recovery or reconnect workflow

a) Media element errors with available configuration for automatic recovery

* error codes: `1008`, `3003`, `3005`, `3100`, `3101`;

Those are media errors which have an automatic recovery workflow. In case of an error, the recovery will be triggered. The amount of recoveries is set within a time frame of 60 seconds and can be adjusted via player configuration. Read more about [Media Error Recovery](./nanoplayer_feature_media_error_recovery).

b) Network connection errors with available configuration for reconnection

* error codes: `4102`, `4103`, `4105`, `4106`, `4107`, `4108`, `4109`, `4111`, `4115`, `4500`, `4503`;

In case of initial connection failure or connection break up during streaming, there is an internal network reconnection workflow supported on all platforms except iOS. Read more about [Reconnect and Timeouts](./nanoplayer_feature_reconnect_timeouts).

2. Shouldn't be attempted to recover by retry

* error codes related to autoplay policies: `1005`, `1007`, `1009`;

* error codes related to network security: `49xx`-`4999`;
* error codes related to setup: `5001`-`5010`;

There are errors which should not be attempted to recover as it would be mutually exclusive with the fundation of particular errors. Most errors in this category are directly linked with the mobile usage (autoplay policies, low power mode, tab switching), as well as security errors group (error codes: `49xx`-`4999`) and setup errors (error codes: `5001`-`5010`).

Example 1: user is switching tabs on the phone and the application with running player is going to the background for a moment. In this situation, no one wants to have a running playback in the background tab. As a result the `1007` error (`Playback suspended by external reason`) is thrown and the playback should not be recovered while in the background tab. Therefore, the error recovery is not recommended for this error.

3. Errors for which replay can be attempted

Errors which are not a part of the internal automatic recovery or reconnect worfklow mentioned above (#1), nor are not suitable for the retry (#2) fall under the replay/reconnect attempt category.
However, it is strongly recommended that in this scenario:

* the number of consecutive replay attempts is limited and/or
* the time/interval between consecutive replay attempts is increasing with the number of attempts

### Most common errors that shouldn't be recovered by user due to internal automatic recovery or reconnection workflow

            1005, // Playback must be initialized by user gesture.
            1007, // Playback suspended by external reason.
            1008, // Playback error, only on iOS.
            1009, // Playback failed because the player was in visibility state 'hidden' at load start.
            3001, // A fetching process of the media aborted by user.
            3002, // An error occurred when downloading media.
            3003, // An error occurred when decoding media.
            3004, // The received audio/video is not supported.
            3005, // The receiving media data of the hls stream couldn't be decoded.
            3100, // The media source extension changed the state to 'ended'. NOT AVAILABLE FOR HLS PLAYBACK.
            3101, // An error occurred while buffering on hls playback
            3200, // An unspecific media error occurred.
            4003  // Maximum number of reconnection tries reached.

### Reconnect/replay event flow

For errors that meet the conditions of replay/reconnection, there is a recommended workflow.
Based on the last error code (stored in `onError` handler), the replay decision and following execution will take place (in `onPause` handler). The number of consecutive replay attempts should be limited.

### Example code snippet

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
    <div id="playerDiv"></div>
    <p>
        <input type="checkbox" id="enableReplay" checked>
        <label for="replay">enable replay</label>
    </p>
    <script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js"></script>
    <script>
        var player;
        var config = {
            "source": {
                "defaults": {
                    "service": "bintu"
                },
                "entries": [
                    {
                        "index": 0,
                        "label": "stream 1",
                        "tag": "",
                        "info": {
                            "bitrate": 1500,
                            "width": 1280,
                            "height": 720,
                            "framerate": 30
                        },
                        "h5live": {
                            "rtmp": {
                                "streamname": "XXXXX-YYYYY" // Enter your stream name
                            }
                        }
                    }
                ],
                "options": {
                    "adaption": {
                        "rule": "none"
                    }
                },
                "startIndex": 0
            },
            "playback": {
                "autoplay": true,
                "automute": true,
                "muted": false
            },
            "style": {
                "controls": true,
                "displayMutedAutoplay": false
            },
            // event callback functions
            "events": {
                "onPlay": onPlay,
                "onPause": onPause,
                "onError": onError,
                "onSwitchStreamSuccess": onSwitchStreamSuccess,
                "onUpdateSourceSuccess": onUpdateSourceSuccess
            }
        };

        var enableReplayCheckBox = document.getElementById("enableReplay");
        // last error
        var error = null;
        // current and maximum consecutive replay attempts 
        var playAttempts = 0, maxPlayAttempts = 10;
        var errorCodesNotReplay = [
            1005, // Playback must be initialized by user gesture.
            1007, // Playback suspended by external reason.
            1008, // Playback error, only on iOS.
            1009, // Playback failed because the player was in visibility state 'hidden' at load start.
            3001, // A fetching process of the media aborted by user.
            3002, // An error occurred when downloading media.
            3003, // An error occurred when decoding media.
            3004, // The received audio/video is not supported.
            3005, // The receiving media data of the hls stream couldn't be decoded.
            3100, // The media source extension changed the state to 'ended'. NOT AVAILABLE FOR HLS PLAYBACK.
            3101, // An error occurred while buffering on hls playback
            3200, // An unspecific media error occurred.
            4003  // Maximum number of reconnection tries reached.
        ];

        function resetPlayAttemps () {
            playAttempts = 0;
        }

        // playback started successfully
        function onPlay (e) {
            resetPlayAttemps();
        }

        // store error, pause will be fired immediately
        // error will be checked in pause handler
        function onError (e) {
            error = e.data;
            console.log("error code: " + error.code.toString());
            console.log("error message: " + error.message);
        }

        // check for error
        function onPause (e) {
            if (error !== null && e.reason !== 'normal') {
                console.log("paused after error " + error.code.toString());

                if (enableReplayCheckBox.checked) {
                    // shouldn't replay when error from errorCodesNotReplay occur or error from range: 4001-4999, 5001-5010
                    if (errorCodesNotReplay.indexOf(error.code) !== -1 || ((error.code >= 4001 && error.code <= 4999) || (error.code >= 5001 && error.code <= 5010))) {
                        doNotReplay();
                    } else {
                        doReplay();
                    }
                }
            }
            // reset error
            error = null;
        }

        function onSwitchStreamSuccess () {
            console.log("SwitchStreamSuccess");
            resetPlayAttemps();
        }

        function onUpdateSourceSuccess () {
            console.log("UpdateSourceSuccess");
            resetPlayAttemps();
        }

        function doNotReplay () {
            console.log("no replay scheduled");
        }

        function doReplay () {
            try {
                if (player && player.play) {
                    if (playAttempts < maxPlayAttempts) {
                        playAttempts++;
                        console.log("replay attempt " + playAttempts.toString());
                        player.play();
                    } else {
                        console.log('max replays reached');
                    }
                }
            } catch (err) { }
        }

        document.addEventListener('DOMContentLoaded', function () {
            player = new NanoPlayer("playerDiv");
            player.setup(config).then(function (config) {
                console.log("setup success");
                console.log("config: " + JSON.stringify(config, undefined, 4));
            }, function (error) {
                console.log("setup reject error code: " + error.code.toString());
                console.log("setup reject error message: " + error.message);
            });
        });
    </script>
</body>

</html>
```

## Startup Errors

#### since 4.28.0

These errors are not limited to specific error codes. Defined as "Startup Error" is any error that occures on a playback attempt within the initial loading phase including the first 30 seconds of playback. Tracking these errors helps identify potential issues that occur during the critical loading and startup phase, which are essential for user engagement and retention.

In addition to `data.code` and `data.message` the event object of a startup error event provides more detailed information about the loading and startup phase.
```js
// The playback object includes the current playback stats as the error occured.
data.playback = {
    bufferDelayCurrent: 'number', // seconds, always
    bitrateCurrent:     'number', // milliseconds, always
    framerateCurrent:   'number'  // milliseconds, always
}

// The state object includes all timestamps of the startup phase that have been reached before and as the error occurred.
// The time values are relative to load start at a playback attempt.
data.state  = {
    connected:             'number', // milliseconds, optional
    firstFragmentReceived: 'number', // milliseconds, optional
    firstFrameRendered:    'number', // milliseconds, optional
    playable:              'number', // milliseconds, optional
    playing:               'number', // milliseconds, optional
    error:                 'number'  // milliseconds, always
}
```
 Errors which occure after at least 30 seconds of playback won't have these two additional subobject in their `event.data` object.

### Event Object Examples

* 2003 error occured after loading timeout fired. There was no media data received but the connection was healty.

``` javascript
{
  "name": "Error",
  "data": {
    "code": 2003,
    "message": "Not enough media data received.",
    "playback": {
      "bufferDelayCurrent": 0,
      "bitrateCurrent": 0,
      "framerateCurrent": 0
    },
    "state": {
      "connected": 392,
      "error": 10004
    }
  },
  "player": "playerDiv",
  "id": "69537640939",
  "version": "4.28.0",
  "state": 4
}
```

* 1005 error occured immediately before playing. Media has already received and start buffer was reached.

``` javascript
{
  "name": "Error",
  "data": {
    "code": 1005,
    "message": "Playback must be initialized by user gesture.",
    "playback": {
      "bufferDelayCurrent": 1.6,
      "bitrateCurrent": 2781280,
      "framerateCurrent": 49
    },
    "state": {
      "connected": 430,
      "firstFragmentReceived": 461,
      "firstFrameRendered": 493,
      "playable": 493,
      "error": 682
    }
  },
  "player": "playerDiv",
  "id": "69537640939",
  "version": "4.28.0",
  "state": 4
}
```

* 3100 error occured after a successful playback start but within the first 30 seconds of playback. Every timestamp is present.

``` javascript
{
  "name": "Error",
  "data": {
    "code": 3100,
    "message": "The media source extension changed the state to 'ended'.",
    "playback": {
      "bufferDelayCurrent": 0.62,
      "bitrateCurrent": 1791984,
      "framerateCurrent": 28
    },
    "state": {
      "connected": 303,
      "firstFragmentReceived": 339,
      "firstFrameRendered": 352,
      "playable": 382,
      "playing": 496,
      "error": 23973
    }
  },
  "player": "playerDiv",
  "id": "69537640939",
  "version": "4.28.0",
  "state": 5
}
```
