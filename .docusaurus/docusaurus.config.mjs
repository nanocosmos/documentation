/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "nanocosmos Docs",
  "tagline": "nanocosmos Developer Documentation",
  "favicon": "img/favicon.ico",
  "url": "https://docs.nanocosmos.de",
  "baseUrl": "/",
  "organizationName": "nanocosmos",
  "projectName": "docs",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/annamatic/Desktop/docs/sidebars.js",
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "/Users/annamatic/Desktop/docs/src/css/custom.css"
        },
        "gtag": {
          "trackingID": "G-D55K07W445",
          "anonymizeIP": true
        }
      }
    ]
  ],
  "themeConfig": {
    "image": "img/social-card.jpg",
    "navbar": {
      "style": "primary",
      "logo": {
        "alt": "nanocosmos Logo",
        "src": "img/logo.svg",
        "href": "https://docs.nanocosmos.de",
        "target": "_self"
      },
      "items": [
        {
          "type": "doc",
          "docId": "cloud/cloud_overview",
          "sidebarid": "nanoStream Cloud",
          "position": "left",
          "label": "nanoStream Cloud"
        },
        {
          "type": "doc",
          "docId": "nanoplayer/nanoplayer_introduction",
          "sidebarid": "H5Live Player",
          "position": "left",
          "label": "H5Live Player"
        },
        {
          "type": "doc",
          "docId": "webrtc/nanostream_webrtc_introduction",
          "sidebarid": "Webcaster",
          "position": "left",
          "label": "Webcaster"
        },
        {
          "type": "doc",
          "docId": "cloud/analytics",
          "sidebarid": "Analytics",
          "position": "left",
          "label": "Analytics"
        },
        {
          "type": "doc",
          "docId": "faq/faq",
          "sidebarid": "FAQ",
          "position": "left",
          "label": "FAQ"
        },
        {
          "type": "doc",
          "docId": "samples/samples",
          "sidebarid": "Samples",
          "position": "left",
          "label": "Samples"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "logo": {
        "alt": "nanocosmos Logo",
        "src": "img/logo.svg",
        "href": "https://www.nanocosmos.de/",
        "width": 160,
        "target": "_self"
      },
      "links": [
        {
          "title": "nanoStream Cloud",
          "items": [
            {
              "label": "nanoStream Cloud Dashboard",
              "href": "https://dashboard.nanostream.cloud/"
            },
            {
              "label": "Overview",
              "href": "https://info.nanocosmos.de/"
            },
            {
              "label": "Use Cases",
              "href": "https://info.nanocosmos.de/interactivelivestreaming/"
            },
            {
              "label": "Pricing",
              "href": "https://www.nanocosmos.de/buy"
            },
            {
              "label": "Free Trial",
              "href": "https://info.nanocosmos.de/free-trial/"
            },
            {
              "label": "Career",
              "href": "https://www.nanocosmos.de/blog/jobs/"
            }
          ]
        },
        {
          "title": "Resources",
          "items": [
            {
              "label": "Blog",
              "href": "https://www.nanocosmos.de/blog/"
            },
            {
              "label": "LinkedIn",
              "href": "https://www.facebook.com/nanocosmos.net/"
            },
            {
              "label": "YouTube",
              "href": "https://www.youtube.com/@nanocosmos"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/nanocosmos/docs"
            }
          ]
        },
        {
          "title": "Contact",
          "items": [
            {
              "label": "Website",
              "href": "https://info.nanocosmos.de/"
            },
            {
              "label": "Contact",
              "href": "https://www.nanocosmos.de/contact"
            },
            {
              "label": "Support",
              "href": "https://www.nanocosmos.de/support"
            },
            {
              "label": "Imprint",
              "href": "https://www.nanocosmos.de/terms"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023. nanocosmos GmbH - Docs Version: Thu, 06 Jul 2023 09:14:31 GMT"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "respectPrefersColorScheme": true,
      "disableSwitch": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
