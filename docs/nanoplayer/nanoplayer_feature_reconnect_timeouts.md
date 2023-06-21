---
id: nanoplayer_feature_reconnect_timeouts
title: Reconnect and Timeouts
sidebar_label: Reconnect and Timeouts
---

## Reconnect on unexpected connection close

The **nanoStream H5Live Player** can use an internal reconnect in case the network connection is broke up.

Internal network reconnect is **supported on all platforms except iOS**. iOS media stream connections cannot be managed by the player, but by the browser and system.
For the supported platforms automatic network reconnect is handling two main cases:
* Initial connect failing
* Connection break up during streaming

The handling is optional and can be disabled. The reconnect is enabled by default with a suggested [configuration](#reconnect-configuration).

During a reconnect no [`onError`](./nanoplayer_api/#onerror) event is being fired. 
The reconnect will be notified by an [`onPause`](./nanoplayer_api/#onpause) event with [`reason`](./nanoplayer_api/#nanoplayerpausereason--codestringcode) 'reconnectionimminent'.

If the number of maximum consecutive reconnect attemps is exceeded, 
the player will fire an [`onError`](./nanoplayer_api/#onerror) event with the related [`errorcode`](./nanoplayer_api/#nanoplayererrorcode--codenumbercode) followed by an [`onPause`](./nanoplayer_api/#onpause) event. 


:::danger Important
The internal reconnect handles network connection break up only! It doesn't handle non network related stream break ups or pause reasons different then `normal`.
:::

:::caution Important
Reconnect is not supported on iOS!
:::

### Configuration {#reconnect-configuration}

The internal reconnect behaviour can be configured via `config.playback.reconnect` object during the initial `setup` call.

:::info note
You can find more information on how to configure the player in our [API documentation](./nanoplayer_api/#nanoplayerconfig--codeobjectcode).
:::

The reconnect object has multiple parameters to adjust the behaviour. The parameters are:

* `minDelay` (default: 2) - The minimum time between reconnect attempts in seconds. The lowest possible value is 1 sec.
* `maxDelay` (default: 10) - The maximum time between reconnect attempts in seconds.
* `delaySteps` (default: 10) - The number of steps till the maximum delay should reached.
* `maxRetries` (default: 10) - The maximum count of reconnect tries. If set to zero no reconnect will be done.

:::info note
Disable reconnect by setting `maxRetries` to 0.
:::

### Example

```javascript
var config = {
    "source": {
        ...
    },
    "playback" : {
        ...,
        "reconnect" : {
            "minDelay"   : 2,
            "maxDelay"   : 10,
            "delaySteps" : 10,
            "maxRetries" : 10
        }
    },
    "style" : {
        ...
    }
};
```

## Timeouts

:::caution Important
Applying custom timeout values should be handled with care.
:::

In case of a timeout, an [`onError`](./nanoplayer_api/#onerror) event is fired with a related [`errorcode`](./nanoplayer_api/#nanoplayererrorcode--codenumbercode), followed by an [`onPause`](./nanoplayer_api/#onpause) event.

Timeouts will be terminated by player state changes like playback starting / resuming or a externally triggered pause.

### Connection timeout

The connection time is the time between opening the connection and having it established. Is the connection established, the timeout will be cleared. The connection time is part of the `LOADING` phase.

The default value for `playback.timeouts.connecting` is **5 seconds**.
It can be changed to a value within a range (in seconds):

* min: 5
* max: 30


:::caution Note
The **connection timeout** value should **not** be **higher than** the **loading timeout** value.
:::

In case the connection timeout is expired, the player state is changing from `LOADING` to `PAUSED`.

### Loading timeout

The loading time starts with a `play` call and includes the time it takes to establish the connection (`playback.timeouts.connecting`) and receiving media data over the connection until the playback has started successfully. Related events are [`onLoading`](./nanoplayer_api/#onloading) and [`onPlay`](./nanoplayer_api/#onplay). The timeout will be cleared if the `PLAYING` state has been entered indecated by the [`onPlay`](./nanoplayer_api/#onplay) event.

The default value for `playback.timeouts.loading` is **20 seconds**.
It can be changed to a value within a range (in seconds):

* min: 10
* max: 60

In case the loading timeout is expired, the player state is changing from `LOADING` to `PAUSED`.

### Buffering timeout

The buffering time starts if the player state changes from `PLAYING` to `BUFFERING` in case not enough media data for playback is being received. Related events are [`onStartBuffering`](./nanoplayer_api/#onstartbuffering) and [`onStopBuffering`](./nanoplayer_api/#onstopbuffering). The timeout will be cleared if the playback resumes indecated by the [`onStopBuffering`](./nanoplayer_api/#onstopbuffering) event.

The default value for `playback.timeouts.buffering` is **20 seconds**.
It can be changed to a value within a range (in seconds):

* min: 10
* max: 60

In case the buffering timeout is expired, the player state is changing from `BUFFERING` to `PAUSED`.

### Example

```javascript
// with default values:
var config = {
    "source": {
        ...
    },
    "playback" : {
        ...,
        "timeouts" : {
            "connecting" : 5,
            "loading"    : 20,
            "buffering"  : 20
        }
    },
    "style" : {
        ...
    }
};
```