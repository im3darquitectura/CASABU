TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "id": "Menu_39261683_2A84_F469_418B_5C3960C9EA08",
   "opacity": 0.4,
   "class": "Menu",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "label": "1. 360  Acceso - CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "label": "2. 360  HALL ACCESO - CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "label": "4. 360 COMEDOR",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "label": "5. 360  COCINA - CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "label": "6. 360  HALL PISO 1",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "label": "7. 360  SALON TV",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "label": "9. 360 BAÑO SOCIAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "label": "10. 360  OFICINA- CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "label": "11. 360  HALL PISO 2",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "label": "12. 360 HAB 1",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "label": "13. 360 HAB 2",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "label": "14. 360 PPAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "label": "16. 360  TERRAZA - CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "label": "18. 360  PUENTE - CASA BU ",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "label": "19. 360  baño PPAL- CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "label": "20. 360  CAVA- CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "label": "21.   HALL HABITACIONES 2 - CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "label": "22.   HAB HUESP 01 - CASA BU",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 18)",
     "label": "23.   HAB HUESP 02 - CASA BU",
     "class": "MenuItem"
    }
   ],
   "rollOverBackgroundColor": "#000000"
  },
  "id": "panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_24906F2F_2A83_B4B9_4190_3612FAB0D1EE",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F, this.camera_38E9F991_2A84_FC69_41BA_41912993490C); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 3.68,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.07
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC_t.jpg",
  "label": "1. 360  Acceso - CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "gyroscopeEnabled": true,
  "touchControlMode": "drag_acceleration",
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "buttonCardboardView": {
   "minWidth": 1,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "width": "17.15%",
   "paddingRight": 0,
   "height": "76.75%",
   "mode": "push",
   "maxWidth": 70,
   "paddingBottom": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": false,
   "paddingLeft": 0,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "data": {
    "name": "IconButton8475"
   },
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "minHeight": 1,
   "maxHeight": 70,
   "borderRadius": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "gyroscopeVerticalDraggingEnabled": false,
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "id": "panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_25B57C77_2A8C_94A9_41C4_DEFBEF681909",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_FB582BA1_F763_070A_41E1_F559909EF3C0, this.camera_38FC59AB_2A84_FFB9_41B5_1C8F040E5859); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 39.35,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_2529E4F8_2A8D_75A7_41C2_59ADBBA4F897",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC, this.camera_380399CD_2A84_FFF9_41BF_CB0001A68E5E); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 142.1,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3A03DAC2_2A8F_BDEB_41B8_23B2E2399722",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F, this.camera_3819D9DC_2A84_FF9F_41B9_FEDBD69212DD); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -63.65,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3A7E8DE3_2A8C_97A9_41B4_323C77D3A5CB",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F, this.camera_38F5A9BB_2A84_FF99_4195_90E8F4776980); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.05,
        "yaw": -86.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 21.92
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_t.jpg",
  "label": "2. 360  HALL ACCESO - CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_FB582BA1_F763_070A_41E1_F559909EF3C0",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_FB5BFBA1_F763_070A_41ED_F8C8254077C4",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355, this.camera_3E5048C6_2A84_FDEB_41B2_696C735CEC73); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 1.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3A97E713_2A8C_F469_41BD_57943AAC2016",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7, this.camera_3E4648B6_2A84_FDAB_41C4_A27364E678A2); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 83.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.32
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3A0D7B0E_2A8F_9C7B_41C4_0FEE1DDA1553",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F, this.camera_3E34C897_2A84_FC69_4186_9C3CF96E8630); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -147.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.06
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FB582BA1_F763_070A_41E1_F559909EF3C0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_t.jpg",
  "label": "4. 360 COMEDOR",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0.38
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3A59A29C_2A8D_6D9F_41C2_653D82CA9DC1",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_FB582BA1_F763_070A_41E1_F559909EF3C0, this.camera_382C3A0D_2A84_FC79_41C0_793320173234); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -89.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.19
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7_t.jpg",
  "label": "5. 360  COCINA - CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_E76B1544_F763_030A_41CA_D0C701AAF62F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E76B0544_F763_030A_41C1_C9B4A9907DB9",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5A77520D_544A_BADE_4199_90ABE5B58F93, this.camera_3EBBB79C_2A84_F39F_4191_D18EF287180A); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 106.68,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.57
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E76B5544_F763_030A_41DB_4E63421B449E",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F, this.camera_3EA9677D_2A84_F499_41B3_260C6DA92C51); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -173.69,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E76B4545_F763_030A_41D6_1EE3D5005DE7",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA, this.camera_3EC767D8_2A84_F3E7_41C3_0E56EFED2030); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -3.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.69
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E76AA545_F763_030A_4190_1F221D04BAF0",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5F68DEC5_55C7_A959_419A_659F55329946, this.camera_3E9FD75E_2A84_F49B_41C4_A3E49A25E2C1); this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -60.64,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.7
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E76A9545_F763_030A_4192_602299A33A17",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_444A0311_544B_DAC6_41AE_0F85CC868859, this.camera_3EB507B7_2A84_F3A9_41C4_A550ABE8561B); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 167.97,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.31
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_t.jpg",
  "label": "6. 360  HALL PISO 1",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 39.42,
   "class": "PanoramaCameraPosition",
   "pitch": -5.67
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_5A77520D_544A_BADE_4199_90ABE5B58F93",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5A77520D_544A_BADE_4199_90ABE5B58F93_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5A77720D_544A_BADE_41CC_DF4465274666",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F, this.camera_3957D6F1_2A84_F5A9_41B9_4A56D1B79314); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -153.6,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5A77520D_544A_BADE_4199_90ABE5B58F93_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5A77520D_544A_BADE_4199_90ABE5B58F93_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5A77520D_544A_BADE_4199_90ABE5B58F93.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5A77520D_544A_BADE_4199_90ABE5B58F93_t.jpg",
  "label": "7. 360  SALON TV",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5A77520D_544A_BADE_4199_90ABE5B58F93_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 19.39,
   "class": "PanoramaCameraPosition",
   "pitch": -2.05
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_444A0311_544B_DAC6_41AE_0F85CC868859",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_444A0311_544B_DAC6_41AE_0F85CC868859_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_444A7311_544B_DAC6_41C2_11904D6F2AD4",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F, this.camera_3E6238D6_2A84_FDEB_41BA_403E620C5680); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -131.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_444A0311_544B_DAC6_41AE_0F85CC868859_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.82
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_444A0311_544B_DAC6_41AE_0F85CC868859_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_444A0311_544B_DAC6_41AE_0F85CC868859.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_444A0311_544B_DAC6_41AE_0F85CC868859_t.jpg",
  "label": "9. 360 BA\u00d1O SOCIAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_444A0311_544B_DAC6_41AE_0F85CC868859_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -60.26,
   "class": "PanoramaCameraPosition",
   "pitch": 3.17
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_F828314A_F761_031E_41E7_44C1AD2F1595",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F, this.camera_383A0A1D_2A84_FC99_41C1_2CBC58898A81); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 58.44,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.57
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA_t.jpg",
  "label": "10. 360  OFICINA- CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E5B96F8A_F75F_7F1E_41E8_76AB9E497FCA",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F, this.camera_3EFC2829_2A84_FCB9_4180_8AAD5EBBB675); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.22,
        "yaw": 89.09,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.28
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E5B95F8A_F75F_7F1E_41A3_F749AF78D1EF",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07, this.camera_3E199868_2A84_FCA7_41B2_FC7746950B9F); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.57,
        "yaw": -37.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.34
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E5B8AF8A_F75F_7F1E_419B_DB0E4480C52E",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7, this.camera_3E0E0849_2A84_FCF9_41C2_C433CE6E0EC9); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": -126.46,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.83
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E5B89F8A_F75F_7F1E_41EE_6FBE5FC9452B",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5B034BF6_544A_494A_41C4_6303A319DFB5, this.camera_3E3AA887_2A84_FC69_41C1_16DEF0FAEFB5); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.56,
        "yaw": 174.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.09
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_E5B8EF8B_F75F_7F1E_41E1_5E240F98978A",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3, this.camera_3E2B7878_2A84_FCA7_41BC_E144B7A101E3); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.58,
        "yaw": 73.01,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.08
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_t.jpg",
  "label": "11. 360  HALL PISO 2",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -92.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0.58
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_5B034BF6_544A_494A_41C4_6303A319DFB5",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5B034BF6_544A_494A_41C4_6303A319DFB5_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5B035BF6_544A_494A_41C1_8C59083C7AA3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F, this.camera_38306A2C_2A84_FCBF_41B5_CFDFAA765C76); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.58,
        "yaw": -13.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5B034BF6_544A_494A_41C4_6303A319DFB5_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.33
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5B034BF6_544A_494A_41C4_6303A319DFB5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5B034BF6_544A_494A_41C4_6303A319DFB5.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5B034BF6_544A_494A_41C4_6303A319DFB5_t.jpg",
  "label": "12. 360 HAB 1",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5B034BF6_544A_494A_41C4_6303A319DFB5_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 177.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0.21
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5B7F1761_5456_5949_41CC_DEB482A3C7B2",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F, this.camera_3ED127FA_2A84_F39B_41C2_EB62E4F75303); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": 15.73,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.83
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7_t.jpg",
  "label": "13. 360 HAB 2",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -147.83,
   "class": "PanoramaCameraPosition",
   "pitch": 2.1
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_58C4FE3E_5456_4B3A_41D0_356495C5231E",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F, this.camera_3973C72F_2A84_F4B9_4199_021001A49D83); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": 161.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.83
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_58C48E3E_5456_4B3A_41BF_0EDA39051700",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29, this.camera_3961E710_2A84_F467_41B0_8CCB5C37202C); this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": 147.88,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.58
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_t.jpg",
  "label": "14. 360 PPAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -36.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0.7
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_FB6945DD_F763_033A_41D0_55BBA26009F0",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_FB582BA1_F763_070A_41E1_F559909EF3C0, this.camera_3EE32809_2A84_FC79_41BC_B2B29901E0DB); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -168.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355_t.jpg",
  "label": "16. 360  TERRAZA - CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_389C8EBA_2A84_B59B_41B6_F80EB169EF6C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88, this.camera_3E7D48E5_2A84_FDA9_41B3_8CC098F6A726); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 89.84,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.31
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_39EDE114_2A85_6C6F_41C0_2C60E32277F0",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F, this.camera_3F8F3904_2A84_FC6F_41B6_236A4BEC7290); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -98.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.69
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_t.jpg",
  "label": "18. 360  PUENTE - CASA BU ",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5A9927BB_545A_5939_41B2_14C4340D3B21",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07, this.camera_3E8DF73F_2A84_F499_41AD_D0CB4B837337); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": 136.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.08
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29_t.jpg",
  "label": "19. 360  ba\u00f1o PPAL- CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_5F68DEC5_55C7_A959_419A_659F55329946",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5F68DEC5_55C7_A959_419A_659F55329946_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_58B1703E_55C0_992B_41CF_D674D29E3A35",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F, this.camera_38E659A1_2A84_FFA9_41C2_37779AC61AE3); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 163.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5F68DEC5_55C7_A959_419A_659F55329946_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.95
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5F68DEC5_55C7_A959_419A_659F55329946_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5F68DEC5_55C7_A959_419A_659F55329946.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5F68DEC5_55C7_A959_419A_659F55329946_t.jpg",
  "label": "20. 360  CAVA- CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5F68DEC5_55C7_A959_419A_659F55329946_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5B3A9FAC_545A_49DF_41B9_BDE2ADA07D64",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3, this.camera_38DFC962_2A84_FCAB_41B7_2865A88C68A6); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 0.16,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5B3A8FAC_545A_49DF_41AA_9F5925759982",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB, this.camera_38C55953_2A84_FCE9_41B0_0AF9E0F9AE3E); this.mainPlayList.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 81.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.57
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5B3AAFAC_545A_49DF_41D0_723F68DFB1E1",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491, this.camera_38D18972_2A84_FCAB_41A6_A741DE467DAF); this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 179.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.32
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_t.jpg",
  "label": "21.   HALL HABITACIONES 2 - CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 179.76,
   "class": "PanoramaCameraPosition",
   "pitch": -2.4
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_58CA5A89_545B_CBC6_41BA_30D8B3BFDB46",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88, this.camera_3945E6D1_2A84_F5E9_41C0_9FAB3E19D1D3); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 177.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491_t.jpg",
  "label": "22.   HAB HUESP 01 - CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -2.91,
   "class": "PanoramaCameraPosition",
   "pitch": -1.59
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
  "id": "panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_5B62764B_545A_5B5A_41A9_57196779CB19",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88, this.camera_3817D9EE_2A84_FFBB_41A7_CEC9C8FBF5CE); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": -158.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.08
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB_t.jpg",
  "label": "23.   HAB HUESP 02 - CASA BU",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_FB582BA1_F763_070A_41E1_F559909EF3C0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_5A77520D_544A_BADE_4199_90ABE5B58F93",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5A77520D_544A_BADE_4199_90ABE5B58F93_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_444A0311_544B_DAC6_41AE_0F85CC868859",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_444A0311_544B_DAC6_41AE_0F85CC868859_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_5B034BF6_544A_494A_41C4_6303A319DFB5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B034BF6_544A_494A_41C4_6303A319DFB5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_5F68DEC5_55C7_A959_419A_659F55329946",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5F68DEC5_55C7_A959_419A_659F55329946_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_20177F28_2A83_94A7_4196_B7D2DA6307EC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_200C89FD_2A83_BF99_41A3_7F5A6554035F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_FB582BA1_F763_070A_41E1_F559909EF3C0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB582BA1_F763_070A_41E1_F559909EF3C0_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_20126FDC_2A83_F39F_419F_6EC54E21BDF7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E76B1544_F763_030A_41CA_D0C701AAF62F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_5A77520D_544A_BADE_4199_90ABE5B58F93",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5A77520D_544A_BADE_4199_90ABE5B58F93_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_444A0311_544B_DAC6_41AE_0F85CC868859",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_444A0311_544B_DAC6_41AE_0F85CC868859_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F828214A_F761_031E_41E4_8A5A2A11C4EA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E5B90F8A_F75F_7F1E_41E2_9AB7EED0EF7F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "media": "this.panorama_5B034BF6_544A_494A_41C4_6303A319DFB5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B034BF6_544A_494A_41C4_6303A319DFB5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
    "media": "this.panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B7F6761_5456_5949_41CB_3742E8EA40C7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
    "media": "this.panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58C4EE3E_5456_4B3A_41AD_EBB1C7DD0C07_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
    "media": "this.panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB6EB5DD_F763_033A_41E2_E5AE8F55E355_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
    "media": "this.panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_214FB484_2A83_B46F_41C4_8A7AA1A1C3E3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
    "media": "this.panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5A9947B5_545A_59C9_41D3_E2A8901BAC29_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)",
    "media": "this.panorama_5F68DEC5_55C7_A959_419A_659F55329946",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5F68DEC5_55C7_A959_419A_659F55329946_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 17)",
    "media": "this.panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B3AEFAC_545A_49DF_41CE_8F46B7868E88_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 17, 18)",
    "media": "this.panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_58CA2A89_545B_CBC6_41D1_38DE35F3C491_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 18, 0)",
    "media": "this.panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B62564B_545A_5B5A_41CF_2032D87AEFAB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_39261683_2A84_F469_418B_5C3960C9EA08",
 {
  "id": "camera_3945E6D1_2A84_F5E9_41C0_9FAB3E19D1D3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -0.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3957D6F1_2A84_F5A9_41B9_4A56D1B79314",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -73.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3961E710_2A84_F467_41B0_8CCB5C37202C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -43.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3973C72F_2A84_F4B9_4199_021001A49D83",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 142.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E8DF73F_2A84_F499_41AD_D0CB4B837337",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -32.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E9FD75E_2A84_F49B_41C4_A3E49A25E2C1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -16.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3EA9677D_2A84_F499_41B3_260C6DA92C51",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 116.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3EBBB79C_2A84_F39F_4191_D18EF287180A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 26.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3EB507B7_2A84_F3A9_41C4_A550ABE8561B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 48.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3EC767D8_2A84_F3E7_41C3_0E56EFED2030",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -121.56,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3ED127FA_2A84_F39B_41C2_EB62E4F75303",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 53.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3EE32809_2A84_FC79_41BC_B2B29901E0DB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -178.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3EFC2829_2A84_FCB9_4180_8AAD5EBBB675",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 93.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E0E0849_2A84_FCF9_41C2_C433CE6E0EC9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -164.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E199868_2A84_FCA7_41B2_FC7746950B9F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -18.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E2B7878_2A84_FCA7_41BC_E144B7A101E3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 81.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E3AA887_2A84_FC69_41C1_16DEF0FAEFB5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 166.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E34C897_2A84_FC69_4186_9C3CF96E8630",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -140.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E4648B6_2A84_FDAB_41C4_A27364E678A2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 90.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E5048C6_2A84_FDEB_41B2_696C735CEC73",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 11.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E6238D6_2A84_FDEB_41BA_403E620C5680",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -12.03,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3E7D48E5_2A84_FDA9_41B3_8CC098F6A726",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -179.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3F8F3904_2A84_FC6F_41B6_236A4BEC7290",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -106.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38C55953_2A84_FCE9_41B0_0AF9E0F9AE3E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 21.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38DFC962_2A84_FCAB_41B7_2865A88C68A6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -90.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38D18972_2A84_FCAB_41A6_A741DE467DAF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -2.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38E9F991_2A84_FC69_41BA_41912993490C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -37.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38E659A1_2A84_FFA9_41C2_37779AC61AE3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 119.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38FC59AB_2A84_FFB9_41B5_1C8F040E5859",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 32.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38F5A9BB_2A84_FF99_4195_90E8F4776980",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -90.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_380399CD_2A84_FFF9_41BF_CB0001A68E5E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -176.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3819D9DC_2A84_FF9F_41B9_FEDBD69212DD",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 6.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_3817D9EE_2A84_FFBB_41A7_CEC9C8FBF5CE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -98.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_382C3A0D_2A84_FC79_41C0_793320173234",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -96.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_383A0A1D_2A84_FC99_41C1_2CBC58898A81",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 176.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_38306A2C_2A84_FCBF_41B5_CFDFAA765C76",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -5.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "class": "Photo",
  "height": 80,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 0.7,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 9,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "minWidth": 100,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "height": "100%",
  "toolTipBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "playbackBarHeadHeight": 15,
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "toolTipPaddingRight": 14,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "minWidth": 1,
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.48%",
      "paddingRight": 0,
      "toolTipFontColor": "#FFFFFF",
      "height": "76.75%",
      "mode": "toggle",
      "toolTipTextShadowBlurRadius": 3,
      "maxWidth": 70,
      "toolTip": "Full Screen",
      "toolTipTextShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "paddingLeft": 0,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon fullscreen"
      },
      "toolTipTextShadowHorizontalLength": 0,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "minHeight": 1,
      "maxHeight": 70,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     },
     {
      "minWidth": 1,
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.15%",
      "paddingRight": 0,
      "toolTipFontColor": "#FFFFFF",
      "height": "76.75%",
      "mode": "toggle",
      "toolTipTextShadowBlurRadius": 3,
      "maxWidth": 70,
      "toolTip": "Audio On/Off",
      "toolTipTextShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "paddingLeft": 0,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon audio"
      },
      "toolTipTextShadowHorizontalLength": 0,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "minHeight": 1,
      "maxHeight": 70,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingRight": 0,
    "height": "100%",
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "shadow": false,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "propagateClick": false,
    "horizontalAlign": "right",
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "data": {
     "name": "-Hide buttons"
    },
    "layout": "horizontal",
    "creationPolicy": "delayed",
    "minHeight": 1,
    "contentOpaque": false,
    "borderSize": 0,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "minWidth": 265,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "paddingRight": 0,
  "width": "22.545%",
  "overflow": "visible",
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "class": "Container",
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "top": "89%",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "data": {
   "name": "--Settings Button Set"
  },
  "horizontalAlign": "right",
  "creationPolicy": "delayed",
  "minHeight": 50,
  "contentOpaque": false,
  "borderSize": 0,
  "borderRadius": 5,
  "layout": "horizontal",
  "right": 25,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "minWidth": 300,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "paddingRight": 0,
  "height": "25%",
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "top",
  "class": "Container",
  "top": "3.5%",
  "propagateClick": false,
  "horizontalAlign": "left",
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "data": {
   "name": "--Stickers Container"
  },
  "layout": "vertical",
  "creationPolicy": "delayed",
  "minHeight": 120,
  "contentOpaque": false,
  "borderSize": 0,
  "left": "2.14%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingTop": 0
 },
 {
  "itemLabelHorizontalAlign": "center",
  "itemBorderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelPosition": "bottom",
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailScaleMode": "fit_outside",
  "paddingRight": 15,
  "itemLabelFontStyle": "normal",
  "scrollBarColor": "#52B7EF",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "maxWidth": 150,
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailShadow": false,
  "scrollBarOpacity": 1,
  "scrollBarMargin": 4,
  "selectedItemBackgroundColor": [],
  "shadow": false,
  "itemThumbnailWidth": 80,
  "itemLabelTextDecoration": "none",
  "itemBackgroundOpacity": 0,
  "rollOverItemLabelTextDecoration": "underline",
  "itemBackgroundColor": [],
  "itemLabelFontWeight": "normal",
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailBorderRadius": 50,
  "itemVerticalAlign": "middle",
  "minHeight": 1,
  "borderSize": 0,
  "itemBackgroundColorDirection": "vertical",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontStyle": "italic",
  "itemThumbnailOpacity": 1,
  "backgroundColorDirection": "vertical",
  "selectedItemBorderSize": 0,
  "scrollBarWidth": 7,
  "paddingTop": 20,
  "gap": 10,
  "minWidth": 1,
  "itemPaddingRight": 3,
  "selectedItemLabelFontSize": 12,
  "itemPaddingBottom": 3,
  "selectedItemBackgroundOpacity": 0,
  "selectedItemLabelTextDecoration": "underline",
  "height": "82.127%",
  "itemBackgroundColorRatios": [],
  "selectedItemBackgroundColorRatios": [],
  "itemPaddingTop": 3,
  "paddingBottom": 20,
  "paddingLeft": 15,
  "class": "ThumbnailList",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "verticalAlign": "top",
  "selectedItemBorderRadius": 0,
  "itemThumbnailHeight": 80,
  "itemLabelGap": 9,
  "itemLabelFontFamily": "Arial",
  "itemMode": "normal",
  "itemLabelFontSize": 12,
  "visible": false,
  "top": "3.5%",
  "propagateClick": false,
  "horizontalAlign": "left",
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "scrollBarVisible": "rollOver",
  "itemHorizontalAlign": "center",
  "layout": "vertical",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemThumbnailShadow": true,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemLabelFontColor": "#FFFFFF",
  "itemOpacity": 1,
  "data": {
   "name": "-ThumbnailList"
  },
  "borderRadius": 3,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "right": "2%",
  "selectedItemThumbnailShadowOpacity": 0.73,
  "backgroundOpacity": 0.25
 },
 {
  "children": [
   {
    "gap": 10,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 0,
    "height": "55.435%",
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "shadow": false,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "propagateClick": false,
    "horizontalAlign": "left",
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "data": {
     "name": "Container Content"
    },
    "layout": "horizontal",
    "creationPolicy": "delayed",
    "minHeight": 1,
    "contentOpaque": false,
    "borderSize": 0,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingRight": 0,
  "height": 92,
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "bottom",
  "class": "Container",
  "propagateClick": false,
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "data": {
   "name": "-Discover Container"
  },
  "horizontalAlign": "left",
  "creationPolicy": "delayed",
  "minHeight": 1,
  "contentOpaque": false,
  "borderSize": 0,
  "left": "2%",
  "layout": "vertical",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingTop": 0
 },
 {
  "minWidth": 1,
  "width": "5%",
  "paddingRight": 0,
  "height": "5%",
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "maxWidth": 485,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "verticalAlign": "middle",
  "top": "0.98%",
  "paddingLeft": 0,
  "propagateClick": false,
  "horizontalAlign": "center",
  "data": {
   "name": "Image21736"
  },
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "minHeight": 1,
  "maxHeight": 265,
  "borderRadius": 0,
  "borderSize": 0,
  "right": "0.6%",
  "backgroundOpacity": 0,
  "paddingTop": 0
 }
], 
 "scripts": {
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
 },
 "gap": 10,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "mobileMipmappingEnabled": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "vrPolyfillScale": 0.85,
 "paddingBottom": 0,
 "shadow": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Player",
 "propagateClick": false,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "layout": "absolute",
 "creationPolicy": "delayed",
 "minHeight": 20,
 "contentOpaque": false,
 "borderSize": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "paddingTop": 0
})