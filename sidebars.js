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
    {
      "type": "category",
      "label": "Security Features",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "cloud/security",
        "cloud/guardian",
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
            "cloud-frontend-v3/Dashboard_Thumbnail",
            "cloud-frontend-v3/Dashboard_Secure",
            "cloud-frontend-v3/Dashboard_nanoPlayer"
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
    "nanoplayer/nanoplayer_introduction",
    "nanoplayer/nanoplayer_getting_started",
    "nanoplayer/nanoplayer_supported_browsers",
    "nanoplayer/nanoplayer_player_metrics",
    "nanoplayer/nanoplayer_iframe",
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
  ],
  "nanoStream Webcaster": [
    "webrtc/nanostream_webrtc_introduction",
    "webrtc/nanostream_webrtc_getting_started",
    "webrtc/nanostream_webrtc_demos",
    "webrtc/nanostream_webrtc_support",
    {
      "type": "category",
      "label": "Features",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "webrtc/nanostream_webcaster_input_sources",
        "webrtc/nanostream_webrtc_multiple_webcasts",
        "webrtc/nanostream_webrtc_quality",
        "webrtc/nanostream_webrtc_device_selection",
        "webrtc/nanostream_webrtc_audio_video_only",
        "webrtc/nanostream_webrtc_stats_and_metrics",
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
  "nanoStream Apps & SDKs": [
    {
      "type": "category",
      "label": "nanoStream Apps & SDKs",
      "collapsible": false,
      "collapsed": false,
      "items": [
        "nanostream/nanostream",
      ]
    },
    {
      "type": "category",
      "label": "Android",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "nanostream/android/nanostream_android_getting_started",
        "nanostream/android/nanostream_android_developer_manual_playback",
        "nanostream/android/nanostream_android_developer_manual_streaming",
        "nanostream/android/nanostream_android_developer_manual_sample"
      ]
    },
    {
      "type": "category",
      "label": "iOS",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "nanostream/ios/nanostream_ios_quick_start",
        "nanostream/ios/nanostream-ios-step-by-step",
        "nanostream/ios/nanostream_ios_sdk",
        "nanostream/ios/bintu_ios_sdk",
        "nanostream/ios/bintu_ios_sample",
        "nanostream/ios/nanostream_ios_license_deployment"
      ]
    },
    {
      "type": "category",
      "label": "Windows",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "nanostream/windows/nanostream_windows_binaries",
        "nanostream/windows/nanostream_windows_developer_manual",
        "nanostream/windows/nanostream_windows_language_integration",
        "nanostream/windows/nanostream_windows_license_help",
        "nanostream/windows/nanostream_encoder_plugin_api"
      ]
    },
    {
      "type": "category",
      "label": "Direct Show",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "nanostream/directshow/index",
        "nanostream/directshow/nanostream_directshow_h264",
        "nanostream/directshow/nanostream_directshow_rtmp",
        "nanostream/directshow/directshow_rtmp_writer",
        "nanostream/directshow/nanostream_directshow_rtsp",
        "nanostream/directshow/nanostream_directshow_udp_streaming",
        "nanostream/directshow/nanostream_directshow_video_filter"
      ]
    },
  ],
  "nanoStream Analytics": [
    "cloud/analytics",
    "cloud/worldmap",
    "cloud/analytics-zoom",
    {
      "type": "category",
      "label": "Stream Health Monitoring",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "cloud/alerting",
        "cloud/troubleshooting",
      ]
    },
    "cloud/analytics-guardian",
    "cloud/analytics-api",

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
