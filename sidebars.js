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
    {
      "type": "category",
      "label": "Dashboard",
      "collapsible": true,
      "collapsed": true,
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
            "cloud-frontend-v3/Dashboard_Secure",
            "cloud-frontend-v3/Dashboard_nanoPlayer"
          ]
        }
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
    "webrtc/nanostream_webrtc_demos"
  ]
};

module.exports = sidebars;
