---
id: nanoplayer_feature_stream_switching
title: Stream switching and ABR
sidebar_label: Stream switching and ABR
---

## Multi stream configuration, integrated ABR and stream switching features

The **nanoStream H5Live Player Version 4.3** is introducing new features related to stream switching and integrated adaptive bitrate playback enabling automatic and application/viewer controlled stream switching either separately or in combination.
One potential combined use case is a video quality selection offering options auto, high, medium, low to the viewer.

:::caution Important
 To start using the stream switching feature make sure you're using the minimum required nanoStream H5Live Player version **4.3** !
:::

----

## Configuration changes

### Stream configuration

Whether you want to configure a [single stream](#single-stream-configuration) or [multiple streams](#multi-stream-configuration) you need to configure them inside the `config.source.entries` object during the initial `setup` call.

:::info
You can find more information on how to configure the player in our [API documentation](./nanoplayer_api#nanoplayerconfig--codeobjectcode).
:::

### ABR stream group configuration

Please find more information about stream group configuration [here](./nanoplayer_feature_stream_group_configuration).

### Single Stream configuration {#single-stream-configuration}

The [old pattern](#example-old-single-stream-configuration-deprecated) to configure a single stream is **deprecated** with this version! Please follow this [new example](#example-new-single-stream-configuration) to configure a single stream.

#### Example OLD single stream configuration (DEPRECATED) {#example-old-single-stream-configuration-deprecated}

```js showLineNumbers
var config = {
    "source" : {
        "h5live": {
            "rtmp": {
                "url": "rtmp://bintu-play.nanocosmos.de/play",
                "streamname": "XXXXX-YYYYY"
            },
            "server": {
                "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
            },
            "token": "",
            "security": {}
        }
    },
    "playback": {
        ...
    },
    "style": {
        ...
    }
};
```

#### Example single stream configuration {#example-new-single-stream-configuration}

```js showLineNumbers
var config = {
    "source" : {
        "entries": [
            {
                "index": 0,
                "label": "high",
                "tag": "this is a high quality stream",
                "info": {
                    "bitrate": 1200,
                    "width": 1280,
                    "height": 720,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-play.nanocosmos.de/play",
                        "streamname": "XXXXX-YYYYY"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                    },
                    "token": "",
                    "security": {}
                },
                "bintu": {}
            }
        ]
    },
    "playback": {
        ...
    },
    "style": {
        ...
    }
};
```

### Multi stream configuration {#multi-stream-configuration}

You can configure a list of multiple streams inside the `config.source.entries` object.
Depending on the intended use case these can be:

- multi-bitrate renditions of the same content

- multiple streams of different content.

:::tip note
The nanoStream transcoding service allows a single stream to be delivered in different multi-bitrate qualities eg. high (original) transcoded in medium and low quality.
:::

The entries need to be ordered by bitrate with **index zero** holding the **highest bitrate**.
The initial stream/rendition can be selected by assigning `config.source.startIndex` to the index of an entry.

:::caution Important
Multi stream configuration is **required** for both the integrated **ABR** and also the **switchStream** feature!
:::

#### Example multi stream configuration (with ABR)

```js showLineNumbers
var config = {
    "source" : {
        "entries": [ // array of 'entry' objects
            {
                "index": 0,
                "label": "high",
                "tag": "this is a high quality stream",
                "info": {
                    "bitrate": 1200,
                    "width": 1280,
                    "height": 720,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-play.nanocosmos.de/play",
                        "streamname": "XXXXX-YYYY0"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                    },
                    "token": "",
                    "security": {}
                },
                "bintu": {}
            },
            {
                "index": 1,
                "label": "medium",
                "tag": "this is a medium quality stream",
                "info": {
                    "bitrate": 800,
                    "width": 864,
                    "height": 480,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-play.nanocosmos.de/play",
                        "streamname": "XXXXX-YYYY1"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                    },
                    "token": "",
                    "security": {}
                },
                "bintu": {}
            },
            {
                "index": 2,
                "label": "low",
                "tag": "this is a low quality stream",
                "info": {
                    "bitrate": 400,
                    "width": 426,
                    "height": 240,
                    "framerate": 15
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-play.nanocosmos.de/play",
                        "streamname": "XXXXX-YYYY2"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                    },
                    "token": "",
                    "security": {}
                },
                "bintu": {}
            }
        ],
        "options": {
            "adaption": {
                "rule": "deviationOfMean2" // enable ABR
            },
            "switch": {
                'method': 'server',
                'pauseOnError': false,
                'forcePlay': true,
                'fastStart': false,
                'timeout': 10,
            }
        },
        "startIndex": 2 // lowest
    },
    "playback": {
        ...
    },
    "style": {
        ...
    }
};
```

:::info Note
 In case you either provide an invalid `startIndex` or don't provide one at all the player starts the stream with index 0. <br/>
The player will set the default adaption rule none if no adaption rule is passed. You can still switch between your pre-configured entries manually with the switchStream API.
:::

#### Example multi stream configuration (with ABR) and playback security

```js showLineNumbers
var config = {
    "source" : {
        "entries": [ // array of 'entry' objects
            {
                "index": 0,
                "label": "high",
                "tag": "this is a high quality stream",
                "info": {
                    "bitrate": 1200,
                    "width": 1280,
                    "height": 720,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",
                        "streamname": "XXXXX-YYYY0"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de:443/h5live/authstream/stream.mp4",
                        "hls": "https://bintu-h5live-secure.nanocosmos.de:443/h5live/authhttp/playlist.m3u8",
                        "progressive": "https://bintu-h5live-secure.nanocosmos.de:443/h5live/authhttp/stream.mp4"
                    },
                    "token": "",
                    // security for streamname XXXXX-YYYY0 here
                    "security": {
                        "token": "TOKEN_HERE",
                        "expires": "EXPIRES_HERE",
                        "options": "OPTIONS_HERE",
                        "tag": "TAG_HERE"
                    }
                },
                "bintu": {}
            },
            {
                "index": 1,
                "label": "medium",
                "tag": "this is a medium quality stream",
                "info": {
                    "bitrate": 800,
                    "width": 864,
                    "height": 480,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",
                        "streamname": "XXXXX-YYYY1"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de:443/h5live/authstream/stream.mp4",
                        "hls": "https://bintu-h5live-secure.nanocosmos.de:443/h5live/authhttp/playlist.m3u8",
                        "progressive": "https://bintu-h5live-secure.nanocosmos.de:443/h5live/authhttp/stream.mp4"
                    },
                    "token": "",
                    // security for streamname XXXXX-YYYY1 here
                    "security": {
                        "token": "TOKEN_HERE",
                        "expires": "EXPIRES_HERE",
                        "options": "OPTIONS_HERE",
                        "tag": "TAG_HERE"
                    }
                },
                "bintu": {}
            },
            {
                "index": 2,
                "label": "low",
                "tag": "this is a low quality stream",
                "info": {
                    "bitrate": 400,
                    "width": 426,
                    "height": 240,
                    "framerate": 15
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",
                        "streamname": "XXXXX-YYYY2"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de:443/h5live/authstream/stream.mp4",
                        "hls": "https://bintu-h5live-secure.nanocosmos.de:443/h5live/authhttp/playlist.m3u8",
                        "progressive": "https://bintu-h5live-secure.nanocosmos.de:443/h5live/authhttp/stream.mp4"
                    },
                    "token": "",
                    // security for streamname XXXXX-YYYY2 here
                    "security": {
                        "token": "TOKEN_HERE",
                        "expires": "EXPIRES_HERE",
                        "options": "OPTIONS_HERE",
                        "tag": "TAG_HERE"
                    }
                },
                "bintu": {}
            }
        ],
        "options": {
            "adaption": {
                "rule": "deviationOfMean2" // enable ABR
            },
            "switch": {
                'method': 'server',
                'pauseOnError': false,
                'forcePlay': true,
                'fastStart': false,
                'timeout': 10,
            }
        },
        "startIndex": 2 // lowest
    },
    "playback": {
        ...
    },
    "style": {
        ...
    }
};
```

#### Example bintu multi stream configuration (with ABR)

```js showLineNumbers
var config = {
    "source" : {
        "entries": [ // array of 'entry' objects
            {
                "index": 0,
                "label": "high",
                "tag": "this is a high quality stream",
                "info": {
                    "bitrate": 1200,
                    "width": 1280,
                    "height": 720,
                    "framerate": 30
                },
                "hls": "",
                "bintu": {
                    "streamid": "XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY0"
                }
            },
            {
                "index": 1,
                "label": "medium",
                "tag": "this is a medium quality stream",
                "info": {
                    "bitrate": 800,
                    "width": 864,
                    "height": 480,
                    "framerate": 30
                },
                "hls": "",
                "bintu": {
                    "streamid": "XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY1"
                }
            },
            {
                "index": 2,
                "label": "low",
                "tag": "this is a low quality stream",
                "info": {
                    "bitrate": 400,
                    "width": 426,
                    "height": 240,
                    "framerate": 15
                },
                "hls": "",
                "bintu": {
                    "streamid": "XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY2"
                }
            }
        ],
        "options": {
            "adaption": {
                "rule": "deviationOfMean2" // enable ABR
            },
            "switch": {
                'method': 'server',
                'pauseOnError': false,
                'forcePlay': true,
                'fastStart': false,
                'timeout': 10,
            }
        },
        "startIndex": 2 // lowest
    },
    "playback": {
        ...
    },
    "style": {
        ...
    }
};
```

#### Example bintu multi stream configuration (with ABR) and playback security

```js showLineNumbers
var config = {
    "source" : {
        "entries": [ // array of 'entry' objects
            {
                "index": 0,
                "label": "high",
                "tag": "this is a high quality stream",
                "info": {
                    "bitrate": 1200,
                    "width": 1280,
                    "height": 720,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    // security for bintu streamid XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY0 here
                    "security": {
                        "token": "TOKEN_HERE",
                        "expires": "EXPIRES_HERE",
                        "options": "OPTIONS_HERE",
                        "tag": "TAG_HERE"
                    }
                },
                "bintu": {
                    "streamid": "XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY0"
                }
            },
            {
                "index": 1,
                "label": "medium",
                "tag": "this is a medium quality stream",
                "info": {
                    "bitrate": 800,
                    "width": 864,
                    "height": 480,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    // security for bintu streamid XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY1 here
                    "security": {
                        "token": "TOKEN_HERE",
                        "expires": "EXPIRES_HERE",
                        "options": "OPTIONS_HERE",
                        "tag": "TAG_HERE"
                    }
                },
                "bintu": {
                    "streamid": "XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY1"
                }
            },
            {
                "index": 2,
                "label": "low",
                "tag": "this is a low quality stream",
                "info": {
                    "bitrate": 400,
                    "width": 426,
                    "height": 240,
                    "framerate": 15
                },
                "hls": "",
                "h5live": {
                    // security for bintu streamid XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY2 here
                    "security": {
                        "token": "TOKEN_HERE",
                        "expires": "EXPIRES_HERE",
                        "options": "OPTIONS_HERE",
                        "tag": "TAG_HERE"
                    }
                },
                "bintu": {
                    "streamid": "XXXXXXXX-XXXX-XXXX-XXXX-YYYYYYYYYYY2"
                }
            }
        ],
        "options": {
            "adaption": {
                "rule": "deviationOfMean2" // enable ABR
            },
            "switch": {
                'method': 'server',
                'pauseOnError': false,
                'forcePlay': true,
                'fastStart': false,
                'timeout': 10,
            }
        },
        "startIndex": 2 // lowest
    },
    "playback": {
        ...
    },
    "style": {
        ...
    }
};
```

### Switch options

There are multiple possible switch options that can be set directly over the `config.source.options.switch` object.

**Possible options**:

- `method`:
  - The preferred switching method
  - Possible values are **'server'** (default) and **'client'**
- `pauseOnError`:
  - If set the player stops in case an error occurs during the process of stream switching
  - Possible values are **false** (default) and **true**
- `forcePlay`:
  - If set the player starts the playback even though the player is in `paused` state
  - Possible values are **false** and **true** (default)
- `timeout`:
  - The maximal time to wait in **seconds** before running into a timeout
  - If the time limit is reached the **error 4006** will be thrown inside the [`onSwitchStreamFail`](./nanoplayer_api#onswitchstreamfail) event
  - The default value is **10** seconds and the possible range is between **5** and **30** seconds
- `tag`:
  - This custom field can be any **string** you like and will be returned in all of the switchStream completion events. ([`onSwitchStreamSuccess`](./nanoplayer_api#onswitchstreamsuccess), [`onSwitchStreamFail`](./nanoplayer_api#onswitchstreamfail) and [`onSwitchStreamAbort`](./nanoplayer_api#onswitchstreamabort))

:::info
You can find more specific information on the possible options [here](./nanoplayer_api#nanoplayerupdatesourcesource---codepromiseltconfigerrorgtcode).
:::

## Automatic bitrate adaption (ABR)

The nanoStream H5Live Player automatic bitrate adaption (ABR) feature decides which quality to play, to accommodate your users' network situation and avoid bufferings and frame drops.

### How to use

The following steps are required to setup the nanoStream H5Live Player with automatic bitrate adaption:

- Configuration of two or more streams in `config.source.entries`
  - ordered by bitrate with **index zero** holding the **highest bitrate**
- The order is determined by the `index` property, **not** by the position in the list
- Selecting the initial stream/rendition by assigning the index to `config.source.startIndex`
- Assigning an adaption rule other than `none` to `config.source.options.adaption.rule`
- Currently available adaption rules are:
  - `none` - Manual switching
  - `deviationOfMean` - Buffer based bitrate adaption rule
  - `deviationOfMean2` - Enhanced buffer based bitrate adaption rule (added in v4.5)

To choose the right quality to start with highly depends on the available qualities and the use case. <br/> A very common way is to not start with the highest (eg. medium/low) quality. Therefore there is an **intial switch up** mechanism that switches to a higher quality until the matching quality for the present bandwidth is found.

:::info
This happens **only** on the initialization of the player and won't happen if you chose to start with the highest quality (index 0) by default.
:::

### Advanced ABR settings

#### Quality Omission

The ABR Stream Omission allows users to:

- Specify an arbitrary subset of streams to be omitted from automatic bitrate adaptation
- Maintain full flexibility in manual stream selection
- Provide precise control over stream quality ranges

Potential use case:

- omit high or low quality depending on expected bandwith conditions e.g. mobile vs desktop

Configuration:

- **`source.options.adaption.omitRenditions`**

  - **Type**: Array of strings or numbers
  - **Possible Values**:
    - Quality strings
      - `"high"`
      - `"medium-high"`
      - `"medium"`
      - `"medium-low"`
      - `"low"`
    - Numeric Indices:
      - integer between `0` (typically corresponds to highest quality) and `config.source.entries.length - 1`

Index Mapping:

- The stream index mapping ensures consistent and predictable stream selection across different stream configurations

| Number of Streams | high | medium-high | medium | medium-low | low |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 2 | 0 | 0 | 1 | 1 | 1 |
| 3 | 0 | 1 | 1 | 1 | 2 |
| 4 | 0 | 1 | 2 | 2 | 3 |
| 5 | 0 | 1 | 2 | 3 | 4 |

Examples:

- qualities

```javascript
var config = {
    "source": {
        "group": {
            "id": 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd',
            "startQuality": 'low'
        },
        "options": {
            "adaption": {
                // Omit highest quality from ABR
                "omitRenditions": ["high"]
            }
        }
    }
};
```

- indexes

```javascript
var config = {
    "source": {
        "entries": [
            ...
        ],
        "options": {
            "adaption": {
                "rule": "deviationOfMean2"
                // Omit highest rendition (highest quality, "high")
                "omitRenditions": [0]
            }
        },
        "startIndex" : 2
    }
};
```

#### Quality Down Switch Adjustment

The `downStep` parameter specifies the minimum number of quality steps included in an ABR (Adaptive Bitrate) down switch, applicable only when the `adaption.rule` is set to `'deviationOfMean'` or `'deviationOfMean2'`.

Configuration:

- **`source.options.adaption.downStep`**

  - **Type**: Number
  - **Possible Values**:
    - integer between `1` (default) and `config.source.entries.length - 1`

### Example multi stream configuration (with ABR)

```js showLineNumbers
var config = {
    "source" : {
        "entries": [ // array of 'entry' objects
            {
                "index": 0,
                "label": "high",
                "tag": "this is a high quality stream",
                "info": {
                    "bitrate": 1200,
                    "width": 1280,
                    "height": 720,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-play.nanocosmos.de/play",
                        "streamname": "XXXXX-YYYY0"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                    },
                    "token": "",
                    "security": {}
                },
                "bintu": {}
            },
            {
                "index": 1,
                "label": "medium",
                "tag": "this is a medium quality stream",
                "info": {
                    "bitrate": 800,
                    "width": 864,
                    "height": 480,
                    "framerate": 30
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-play.nanocosmos.de/play",
                        "streamname": "XXXXX-YYYY1"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                    },
                    "token": "",
                    "security": {}
                },
                "bintu": {}
            },
            {
                "index": 2,
                "label": "low",
                "tag": "this is a low quality stream",
                "info": {
                    "bitrate": 400,
                    "width": 426,
                    "height": 240,
                    "framerate": 15
                },
                "hls": "",
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-play.nanocosmos.de/play",
                        "streamname": "XXXXX-YYYY2"
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                    },
                    "token": "",
                    "security": {}
                },
                "bintu": {}
            }
        ],
        "options": {
            "adaption": {
                "rule": "deviationOfMean2" // enable ABR
            },
            "switch": {
                'method': 'server',
                'pauseOnError': false,
                'forcePlay': true,
                'fastStart': false,
                'timeout': 10,
            }
        },
        "startIndex": 2 // lowest
    },
    "playback": {
        ...
    },
    "style": {
        ...
    }
};
```

:::info
In case you either provide an invalid `startIndex` or don't provide one at all the player starts the stream with index 0. <br/>
The player will set the default adaption rule none if no adaption rule is passed. You can still switch between your pre-configured entries manually with the switchStream API.
:::

## switchStream API

The `switchStream` feature enables the application/viewer to perform stream switches on the pre-configured stream list by referencing the index property of the target stream entry.

:::info
You can find more information on the switchStream API in our [API documentation](./nanoplayer_api#nanoplayerswitchstreamindex-⇒-codepromiseltconfigerrorgtcode).
:::

### How to use

- Configuration of two or more streams in `config.source.entries`
- Selecting the initial stream by assigning the index to `config.source.startIndex`
- Assigning the adaption rule `none` to `config.source.options.adaption.rule`
- Applying switches by calling `switchStream(index)` with the index of the target stream entry
- Listening to related event notifications
  - onSwitchStreamInit
  - onSwitchStreamSuccess
  - onSwitchStreamAbort
  - onSwitchStreamFail

:::caution
Manual switching via switchStream API will disable any further ABR controlled behavior. Use the [setAdaption API](#setadaption-api) to again reinitialize the automatic adaption. You can read more on how to combine automatic and manual switching [here](#combined-abr-and-manual-switching).
:::

**Example switchStream call:**

```js showLineNumbers
player.switchStream(1).then(function (config) {
    console.log('switch stream initialized with config: ' + JSON.stringify(config));
}, function (error) {
    console.log(error);
});
```

:::info
The switchStream API returns a promise that is rejected if the provided `index` parameter is out of range.
:::

### switchStream events

With the release of the `switchStream` API there are also **4** new events you should listen to:

#### Start Event

- **[onSwitchStreamInit](./nanoplayer_api#onswitchstreaminit)**: This event signals an initialized switch stream request. This is **only** a start event that will be followed by one of the completion events.

#### Completion Events

- **[onSwitchStreamSuccess](nanoplayer_api#onswitchstreamsuccess)**: This event signals a successful switch stream request and fires if the stream was switched.
- **[onSwitchStreamFail](nanoplayer_api#onswitchstreamfail)**: This event signals a failed switch stream request. Fired if an error occurs during the stream switch.
- **[onSwitchStreamAbort](nanoplayer_api#onswitchstreamabort)**: This event signals an aborted switch stream request. Possible reasons are an equal source (**'equalsource'**), a superseding (**'superseded'**) or the time difference between two following `switchStream` calls that is too small  (**'frequency'**).

<br/>

:::tip Also, keep in mind...
...there will be an [`onStreamInfo`](./nanoplayer_api#onstreaminfo) event indicating that the first image of the new stream is getting played out.
:::

### Difference switchStream API / updateSource API

The switchStream API allows to only choose between the pre-configured stream list (`config.source.entries`) by referencing the index of the entry while the updateSource API replaces the entire source (`config.source`) with a new source.

:::info
 Click here to get more information on the [updateSource API](./nanoplayer_update_source)
:::

## setAdaption API {#setadaption-api}

The `setAdaption` feature enables the application/viewer to change the adaption rule eg. from manually controlled to automatic switching behavior.

Currently available adaption rules are:

- `none` - Manual switching
- `deviationOfMean` - Buffer based bitrate adaption rule
- `deviationOfMean2` - Enhanced buffer based bitrate adaption rule (added in v4.5)

:::note
You can find more information on the setAdaption API in our [API documentation](./nanoplayer_api#nanoplayersetadaptionadaption).
:::

### Example to set automatic adaption

```js showLineNumbers
// Player instance of NanoPlayer
var adaption = {
    "rule": "deviationOfMean2"
}

player.setAdaption(adaption);
```

### Combined ABR and manual switching {#combined-abr-and-manual-switching}

In case the nanoStream H5Live Player is configured to use ABR and a manual switch gets initialized via the switchStream API the automatic adaption is stopped. From this moment on the switching behavior is manually controlled.

To again reinitialize the automatic adaption use the [setAdaption API](#setadaption-api) with the name of the rule you want to set (eg. `deviationOfMean2`).
