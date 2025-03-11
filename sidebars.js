/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
  "nanoStream Cloud": [
    "cloud/cloud_overview",
    "cloud/cloud_introduction",
    "cloud/cloud_getting_started",
    "cloud/live_encoding",
    "cloud/srt_ingest",
    "cloud/live-recording-vod",
    "cloud/live_processing",
    {
      "type": "category",
      "label": "Security Features",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "cloud/security",
        "cloud/guardian",
        "cloud/userroles",
      ]
    },
    {
      "type": "category",
      "label": "Cloud Dashboard",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "cloud-frontend-v3/Dashboard_Overview",
        "cloud-frontend-v3/Dashboard_Getting_Started",
        {
          "type": "category",
          "label": "Features & Functions",
          "collapsible": true,
          "collapsed": false,
          "items": [
            "cloud-frontend-v3/Dashboard_Start_Streaming",
            "cloud-frontend-v3/Dashboard_Stream_Overview",
            "cloud-frontend-v3/Dashboard_ABR_Transcoding",
            "cloud-frontend-v3/Dashboard_Live_Processing",
            "cloud-frontend-v3/Dashboard_Secure",
            "cloud-frontend-v3/Dashboard_nanoPlayer",
            "cloud-frontend-v3/Dashboard_User_Roles"
          ]
        },
        {
          "type": "category",
          "label": "Analytics",
          "collapsible": true,
          "collapsed": false,
          "items": [
            "cloud-frontend-v3/Dashboard_Metrics",
            "cloud-frontend-v3/Dashboard_Alerting",
          ]
        },
      ]
    },
    {
      "type": "category",
      "label": "REST API",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "cloud/bintu_api",
        "cloud/bintu_custom_webhooks",
        "cloud/bintu_stream_tags"
      ]
    },
    {
      "type": "category",
      "label": "Support",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "cloud/network-diagnostics",
        "cloud/support",
      ]
    },
  ],
  "H5Live Player": [
    {
      "type": "category",
      "label": "nanoStream H5Live Player",
      "collapsible": false,
      "collapsed": false,
      "link": { "type": "doc", "id": "nanoplayer/nanoplayer_introduction" },
      "items": [
        "nanoplayer/nanoplayer_getting_started",
        "nanoplayer/nanoplayer_supported_browsers",
        "nanoplayer/nanoplayer_player_metrics",
        "nanoplayer/nanoplayer_iframe",
        "nanoplayer/nanoplayer_webview",
        {
          "type": "category",
          "label": "Features",
          "collapsible": true,
          "collapsed": false,
          "items": [
            "nanoplayer/nanoplayer_autoplay",
            "nanoplayer/nanoplayer_feature_fast_start",
            "nanoplayer/nanoplayer_feature_latency_control_modes",
            "nanoplayer/nanoplayer_feature_stream_group_configuration",
            "nanoplayer/nanoplayer_token_security",
            "nanoplayer/nanoplayer_feature_stream_switching",
            "nanoplayer/nanoplayer_feature_fullscreen_api",
            "nanoplayer/nanoplayer_feature_customization",
            "nanoplayer/nanoplayer_feature_reconnect_timeouts",
            "nanoplayer/nanoplayer_feature_media_error_recovery",
            "nanoplayer/nanoplayer_feature_source_defaults",
            "nanoplayer/nanoplayer_feature_video_access_and_processing"
          ]
        },
        {
          "type": "category",
          "label": "Releases",
          "collapsible": false,
          "collapsed": false,
          "items": [
            "nanoplayer/nanoplayer_release_latest",
            "nanoplayer/nanoplayer_release_history"
          ]
        },
        {
          "type": "category",
          "label": "API",
          "collapsible": false,
          "collapsed": false,
          "items": [
            "nanoplayer/nanoplayer_api",
            "nanoplayer/nanoplayer_api_errors",
          ]
        },
        {
          "type": "category",
          "label": "Other",
          "collapsible": false,
          "collapsed": false,
          "items": [
            "nanoplayer/nanoplayer_faq",
            "nanoplayer/nanoplayer_blogposts"
          ]
        }
      ]
    }
  ],
  "nanoStream Webcaster": [
    {
      "type": "category",
      "label": "nanoStream Webcaster",
      "collapsible": false,
      "collapsed": false,
      "link": { "type": "doc", "id": "webrtc/nanostream_webrtc_introduction", },
      "items": [
        "webrtc/nanostream_webrtc_getting_started",
        "webrtc/nanostream_webrtc_demos",
        "webrtc/nanostream_webrtc_support",
        {
          "type": "category",
          "label": "Features",
          "collapsible": true,
          "collapsed": false,
          "items": [
            "webrtc/nanostream_webrtc_input_sources",
            "webrtc/nanostream_webrtc_multiple_webcasts",
            "webrtc/nanostream_webrtc_quality",
            "webrtc/nanostream_webrtc_device_selection",
            "webrtc/nanostream_webrtc_audio_video_only",
            "webrtc/nanostream_webrtc_stats_and_metrics",
            "webrtc/nanostream_webrtc_speech_music",
            "webrtc/nanostream_webrtc_reconnect"
          ]
        },
        {
          "type": "category",
          "label": "Releases",
          "collapsible": false,
          "collapsed": false,
          "items": [
            "webrtc/nanostream_webrtc_release_latest",
            "webrtc/nanostream_webrtc_release_history"
          ]
        },
        {
          "type": "category",
          "label": "API",
          "collapsible": false,
          "collapsed": false,
          "items": [
            "webrtc/nanostream_webrtc_api",
            "webrtc/migration_guide_v6"
          ]
        },
        {
          "type": "category",
          "label": "Other",
          "collapsible": false,
          "collapsed": false,
          "items": [
            "webrtc/nanostream_webrtc_whip_ingest",
            "webrtc/nanostream_webrtc_faq"
          ]
        }
      ]
    }
  ],
  "nanoStream Webcaster V5": [
    "webrtc-v5/nanostream_webrtc_introduction",
    "webrtc-v5/nanostream_webrtc_getting_started",
    "webrtc-v5/nanostream_webrtc_demos",
    "webrtc-v5/nanostream_webrtc_support",
    {
      "type": "category",
      "label": "Features",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "webrtc-v5/nanostream_webrtc_secure_ingest",
        "webrtc-v5/nanostream_webrtc_screen_sharing",
        "webrtc-v5/nanostream_webrtc_multiple_webcasts",
        "webrtc-v5/nanostream_webrtc_quality",
        "webrtc-v5/nanostream_webrtc_device_selection",
        "webrtc-v5/nanostream_webrtc_audio_video_only",
        "webrtc-v5/nanostream_webrtc_speech_music",
        "webrtc-v5/nanostream_webrtc_set_mediastream",
        "webrtc-v5/nanostream_webrtc_stats_and_metrics",
        "webrtc-v5/nanostream_webrtc_reconnect"
      ]
    },
    {
      "type": "category",
      "label": "API",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "webrtc-v5/nanostream_webrtc_api"
      ]
    },
  ],
  "nanoStream Analytics": [
    {
      "type": "category",
      "label": "nanoStream Analytics",
      "collapsible": false,
      "collapsed": false,
      "link": { "type": "doc", "id": "cloud/analytics-introduction" },
      "items": [
        {
          "type": "category",
          "label": "Analytics Dashboard",
          "link": {
            "type": 'generated-index',
            "title": 'Analytics Dashboard',
            "description": 'Engage with our important and easy to use analytical tools, available inside our dedicated Analytics Dashboard!',
            "slug": '/analytics/dashboard',
            "keywords": ['features, list, utilities, dashboard, analytics, product, tool, toolset, analytical']
          },
          "collapsible": false,
          "collapsed": false,
          "items": [
            "cloud/worldmap",
            "cloud/analytics-zoom",
            "cloud/analytics-guardian",
            {
              "type": "category",
              "label": "Stream Health Monitoring",
              "collapsible": false,
              "collapsed": false,
              "link": {
                "type": 'generated-index',
                "title": 'Stream Health Monitoring',
                "description": 'Make your stream performance observable and learn how to deal with different situtations, which affect the overall quality of your live streams!',
                "slug": '/analytics/monitoring',
                "keywords": ['stream', 'health', 'monitoring']
              },
              "items": [
                "cloud/alerting",
                "cloud/troubleshooting",
              ]
            }
          ],
        },
        {
          "type": "category",
          "label": "API",
          "collapsible": false,
          "collapsed": false,
          "link": {
            "type": 'generated-index',
            "title": 'Analytics API',
            "description": 'Learn about these important nanoStream Analytics features!',
            "slug": '/analytics/api',
            "keywords": ['api', 'request', 'query', 'analytics']
          },
          "items": [
            "cloud/analytics-api-docs",
            "cloud/analytics-api-error-codes",
            {
              "type": "category",
              "label": "Releases",
              "collapsible": false,
              "collapsed": false,
              "link": {
                "type": 'generated-index',
                "title": 'API Releases',
                "description": 'Check out the latest nanoStream Analytics updates and learn more about the newest dashboard and API features & improvements!',
                "slug": '/analytics/api-releases',
                "keywords": ['releases', 'version']
              },
              "items": [
                "cloud/analytics-api-releases-latest",
                "cloud/analytics-api-releases-history",
              ]
            },
          ]
        },
      ]
    },
  ],
  "FAQ": [
    "faq/faq",
    // "faq/faq_devices_support",
    // "faq/faq_adv_codec_config",
    // "faq/faq_purchase_and_license",
    {
      "type": "category",
      "label": "H5Live Player",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "faq/faq_h5live_player_general",
        "faq/faq_h5live_player_adjust_style",
      ]
    },
    {
      "type": "category",
      "label": "Webcaster",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "faq/faq_WebRTC_general",
        "faq/faq_WebRTC_devices",
      ]
    },
    {
      "type": "category",
      "label": "Video Tutorials",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "cloud-frontend/How_to_Setup_Low_Latency_Stream",
        "cloud/analytics_for_low_latency_streams",
        "cloud/how_to_setup_streamgroups",
        "nanoplayer/nanoplayer_tutorial_how_to_setup_latency_modes",
        "cloud/how_to_setup_ingest_security",
        "nanoplayer/nanoplayer_tutorial_how_to_setup_player_security",
        "cloud/defend_against_misuse_with_nanostream_guardian"
      ]
    }
  ],
  // "Samples": [
  //   "samples/samples",
  // ],
};

module.exports = sidebars;
