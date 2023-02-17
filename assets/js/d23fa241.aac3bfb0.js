"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2223],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(944),i=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=function(e){var t,a=e.lazy,l=e.block,p=e.defaultValue,d=e.values,u=e.groupId,c=e.className,m=n.Children.toArray(e.children),h=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=(0,r.Z)(),g=k.tabGroupChoices,v=k.setTabGroupChoices,b=(0,n.useState)(f),y=b[0],N=b[1],T=[];if(null!=u){var w=g[u];null!=w&&w!==y&&h.some((function(e){return e.value===w}))&&N(w)}var O=function(e){var t=e.currentTarget,a=T.indexOf(t),n=h[a].value;N(n),null!=u&&(v(u,n),setTimeout((function(){var e,a,n,r,i,o,l,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,p=o.innerWidth,a>=0&&i<=p&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.target)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.target)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},c)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:O,onClick:O},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},970:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r="alert_19nB",i="alertWarning_1tiz",o="alertInfo_1EfW",s="alertSuccess_7EZp",l=function(e){var t=e.children,a=e.alertType;return"warning"===a?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===a?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"success"===a?n.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},1511:function(e,t,a){var n=a(7294),r=a(944);t.Z=function(){var e=(0,r.Z)(),t=e.tabGroupChoices,a=e.setTabGroupChoices;return(0,n.useEffect)((function(){t.ios||a("ios","swift"),t.android||a("android","kotlin")}),[]),""}},1535:function(e,t,a){var n=a(7294),r=a(944);t.Z=function(e){e.test;var t=e.groupId,a=e.value,i=e.children,o=(0,r.Z)(),s=o.tabGroupChoices,l=(o.setTabGroupChoices,s[t]);return null!=t&&l==a?n.createElement("span",null,i):""}},3604:function(e,t,a){var n=a(7294),r=a(944);t.Z=function(e){e.groupId;var t=e.children,a=(0,r.Z)();a.tabGroupChoices,a.setTabGroupChoices;return n.createElement("span",null,t)}},4315:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(970),s=a(1395),l=a(8215),p=(a(3604),a(1535),a(1511)),d={sidebar_position:7,title:"Trip Tracking",id:"trip-tracking"},u=void 0,c={unversionedId:"trip-tracking",id:"trip-tracking",isDocsHomePage:!1,title:"Trip Tracking",description:"See docs for iOS and Android SDK versions older than v3.5.9 here.",source:"@site/docs/trip-tracking.mdx",sourceDirName:".",slug:"/trip-tracking",permalink:"/documentation/trip-tracking",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/trip-tracking.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Trip Tracking",id:"trip-tracking"},sidebar:"defaultSidebar",previous:{title:"Beacons",permalink:"/documentation/beacons"},next:{title:"Overview",permalink:"/documentation/sdk"}},m=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Radar SDK Setup",id:"radar-sdk-setup",children:[]},{value:"Starting trips",id:"starting-trips",children:[]},{value:"Updating trips",id:"updating-trips",children:[]},{value:"Ending trips",id:"ending-trips",children:[]},{value:"Trip events",id:"trip-events",children:[]},{value:"Delay detection",id:"delay-detection",children:[]},{value:"Display live trips and ETAs",id:"display-live-trips-and-etas",children:[{value:"In the Radar trip tracking dashboard",id:"in-the-radar-trip-tracking-dashboard",children:[]},{value:"In your own UI",id:"in-your-own-ui",children:[]}]},{value:"Analytics",id:"analytics",children:[{value:"How to filter your data",id:"how-to-filter-your-data",children:[]},{value:"Trips overview",id:"trips-overview",children:[]},{value:"By Destination table",id:"by-destination-table",children:[]},{value:"Calculations",id:"calculations",children:[]},{value:"Data retention settings and frequency of updates",id:"data-retention-settings-and-frequency-of-updates",children:[]}]},{value:"Pickup app",id:"pickup-app",children:[{value:"How customers use the Pickup app",id:"how-customers-use-the-pickup-app",children:[]}]},{value:"Support",id:"support",children:[]}],h={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"See docs for iOS and Android SDK versions older than v3.5.9 ",(0,i.kt)("a",{href:"/trip-tracking-3.5.8"},"here"),"."),(0,i.kt)(p.Z,{mdxType:"DefaultContextValues"}),(0,i.kt)("p",null,"Use our industry-leading ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," to build experiences for curbside and in-store pickup, delivery tracking, and more."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"Want to get started quickly? Follow these three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create geofences.")," Import ",(0,i.kt)("a",{parentName:"p",href:"/geofences"},"geofences")," for your locations or register via ",(0,i.kt)("a",{parentName:"p",href:"/api#upsert-a-geofence"},"API"),". Depending on your use case, a geofence might represent a store, restaurant, delivery location, and so on.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Integrate the Radar SDK into your app.")," Integrate the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),' into your app or website. When an order starts or the user taps "I\'m on my way," start a trip with custom metadata (like order ID, license plate, or car model). Complete the trip when the order finishes.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Display live trips or trigger workflows with ETAs.")," Display live ETAs on the trip tracking dashboard, available on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.io/pricing"},"Enterprise")," plan. Or, display live ETAs in your own UI by polling the ",(0,i.kt)("a",{parentName:"p",href:"/api#list-trips"},"list trips API")," or listening for ",(0,i.kt)("a",{parentName:"p",href:"/trip-tracking#trip-events"},"trip events")," available through the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," events listener or server-side via ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),"."))),(0,i.kt)("h2",{id:"radar-sdk-setup"},"Radar SDK Setup"),(0,i.kt)("p",null,"Integrate the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," into your app or website as instructed in the SDK docs. Be sure to ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios#identify-user"},"identify the user")," with an external user ID for trip tracking."),(0,i.kt)("h2",{id:"starting-trips"},"Starting trips"),(0,i.kt)("p",null,'When an order starts or the user taps "I\'m on my way," start a trip with trip options (an external ID for this trip, a destination geofence, a travel mode, and custom metadata), and tracking options that will be used to track for the duration of the trip.'),(0,i.kt)(s.Z,{groupId:"trip-tracking",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let tripOptions = RadarTripOptions(externalId: "299", destinationGeofenceTag: "store", destinationGeofenceExternalId: "123")\ntripOptions.mode = .car\ntripOptions.metadata = [\n  "Customer Name": "Jacob Pena",\n  "Car Model": "Green Honda Civic"\n]\n\nRadar.startTrip(options: tripOptions, trackingOptions: .presetContinuous) { (status: RadarStatus, trip: RadarTrip?, events: [RadarEvent]?) in\n  if status == .success {\n    // do something\n  } else {\n    // handle error\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'RadarTripOptions *tripOptions = [[RadarTripOptions alloc] initWithExternalId:@"299"];\ntripOptions.destinationGeofenceTag = @"store";\ntripOptions.destinationGeofenceExternalId = @"123";\ntripOptions.mode = RadarRouteModeCar;\nNSMutableDictionary *metadataDict = [NSMutableDictionary new];\nmetadataDict[@"Customer Name"] = @"Jacob Pena";\nmetadataDict[@"Car Model"] = @"Green Honda Civic";\ntripOptions.metadata = metadataDict;\n\n[Radar startTripWithOptions:tripOptions trackingOptions:RadarTrackingOptions.presetContinuous\n          completionHandler:^(RadarStatus status, RadarTrip * _Nullable trip, NSArray<RadarEvent *> * _Nullable events) {\n  if (status == RadarStatusSuccess) {\n    // do something\n  } else {\n    // handle error\n  }\n}];\n'))),(0,i.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tripExternalId = "299"\nval destinationGeofenceExternalId = "123"\nval destinationGeofenceTag = "store"\nval tripMetadata = JSONObject()\ntripMetadata.put("Customer Name","Jacob Pena")\ntripMetadata.put("Car Model","Green Honda Civic")\nval routeMode = Radar.RadarRouteMode.CAR\nval tripOptions = RadarTripOptions(tripExternalId, tripMetadata, destinationGeofenceTag, destinationGeofenceExternalId, routeMode)\n\nRadar.startTrip(tripOptions, RadarTrackingOptions.CONTINUOUS) { status, trip, events ->\n  if (status == Radar.RadarStatus.SUCCESS) {\n    // do something\n  } else {\n    // handle error\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final JSONObject tripOptionsMetadata = new JSONObject();\ntripOptionsMetadata.put("Customer Name","Jacob Pena");\ntripOptionsMetadata.put("Car Model","Green Honda Civic");\nfinal JSONObject tripOptionsJson = new JSONObject();\ntripOptionsJson.put("externalId","299");\ntripOptionsJson.put("destinationGeofenceTag","store");\ntripOptionsJson.put("destinationGeofenceExternalId","123");\ntripOptionsJson.put("mode",Radar.RadarRouteMode.CAR);\ntripOptionsJson.put("metadata",tripOptionsMetadata);\nRadarTripOptions tripOptions = RadarTripOptions.fromJson(tripOptionsJson);\n\nRadar.startTrip(tripOptions, RadarTrackingOptions.CONTINUOUS, new Radar.RadarTripCallback() {\n  @Override\n    public void onComplete(@NonNull Radar.RadarStatus status, @Nullable RadarTrip trip, @Nullable RadarEvent[] events) {\n      if (status == Radar.RadarStatus.SUCCESS) {\n        // do something\n      } else {\n        // handle error\n      }\n    }\n  }\n);\n')))),(0,i.kt)("h2",{id:"updating-trips"},"Updating trips"),(0,i.kt)("p",null,"As trips progress you can pass updates about the trip. This is commonly used to capture additional metadata as the trip progresses (i.e. in a pickup use case, car info provided on arrival), but can also be used to progress the trip status manually. The trip tracking dashboard, available on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.io/pricing"},"Enterprise"),", can receive notifications when trip metadata changes occur."),(0,i.kt)(s.Z,{groupId:"trip-tracking",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let tripOptions = Radar.getTripOptions()\ntripOptions.metadata = [\n"Parking Spot": "1",\n]\n\nRadar.updateTrip(options: tripOptions, status: RadarTripStatus.ARRIVED) { status, trip, events ->\n  if (status == Radar.RadarStatus.SUCCESS) {\n    // do something\n  } else {\n    // handle error\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'RadarTripOptions tripOptions = [Radar getTripOptions];\nNSMutableDictionary *tripMetadata = [tripOptions.metadata mutableCopy];\ntripMetadata[@"Parking Spot"] = @"1";\ntripOptions.metadata = tripMetadata;\n\n[Radar updateTripWithOptions:tripOptions status:RadarTripStatusArrived\n       completionHandler:^(RadarStatus status, RadarTrip * _Nullable trip, NSArray<RadarEvent *> * _Nullable events) {\n  if (status == RadarStatusSuccess) {\n    // do something\n  } else {\n    // handle error\n  }\n}];\n'))),(0,i.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'var tripOptions = Radar.getTripOptions()\nvar tripMetadata = tripOptions?.metadata\ntripMetadata?.put("Parking Spot","1")\ntripOptions?.metadata = tripMetadata\n\nRadar.updateTrip(tripOptions, RadarTrip.RadarTripStatus.ARRIVED) { status, trip, events ->\n  if (status == Radar.RadarStatus.SUCCESS) {\n    // do something\n  } else {\n    // handle error\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RadarTripOptions tripOptions = Radar.getTripOptions();\nJSONObject tripMetadata = tripOptions.getMetadata();\ntripMetadata.put("Spot Number","1");\ntripOptions.setMetadata(tripMetadata);\nRadar.updateTrip(tripOptions, RadarTrip.RadarTripStatus.ARRIVED, new Radar.RadarTripCallback() {\n    @Override\n    public void onComplete(Radar.RadarStatus radarStatus, RadarTrip radarTrip, RadarEvent[] radarEvents) {\n        // do something with status, trip, events\n    }\n});\n')))),(0,i.kt)("h2",{id:"ending-trips"},"Ending trips"),(0,i.kt)("p",null,"When the order is cancelled or picked up, stop the trip. This can be done either via the SDK or through Radar ",(0,i.kt)("a",{parentName:"p",href:"/api#stop-or-restart-trip"},"APIs"),". Tracking will stop after the trip ends if it was disabled before trip start. Otherwise, tracking will continue with the tracking options used before trip start."),(0,i.kt)("p",null,"The Radar settings page also allows for trip expiration based on a set number of hours after trip start. For organizations on the Radar ",(0,i.kt)("a",{parentName:"p",href:"https://radar.io/pricing"},"Enterprise")," plan, there is the ability to also automatically complete trips based on a configurable ETA following destination arrival."),(0,i.kt)(s.Z,{groupId:"trip-tracking",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// trip complete\nRadar.completeTrip()\n\n// trip cancelled\nRadar.cancelTrip()\n\n"))),(0,i.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"// trip complete\n[Radar completeTrip];\n\n// Order cancelled\n[Radar cancelTrip];\n"))),(0,i.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n// trip complete\nRadar.completeTrip { status, trip, events ->\n    // do something with status, trip, events\n}\n\n// trip cancelled\nRadar.cancelTrip { status, trip, events ->\n    // do something with status, trip, events\n}\n"))),(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// trip complete\nRadar.completeTrip(new Radar.RadarTripCallback() {\n    @Override\n    public void onComplete(Radar.RadarStatus radarStatus, RadarTrip radarTrip, RadarEvent[] radarEvents) {\n    // do something with status, trip, events\n    }\n});\n// trip cancelled\nRadar.cancelTrip(new Radar.RadarTripCallback() {\n    @Override\n    public void onComplete(Radar.RadarStatus radarStatus, RadarTrip radarTrip, RadarEvent[] radarEvents) {\n    // do something with status, trip, events\n    }\n});\n")))),(0,i.kt)("h2",{id:"trip-events"},"Trip events"),(0,i.kt)("p",null,"Radar calculates ETAs and generates events when trips are updated:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.started_trip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.updated_trip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.approaching_trip_destination")," (configurable ETA threshold)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.arrived_at_trip_destination")," (destination geofence entered)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.stopped_trip"))),(0,i.kt)("p",null,"ETAs are calculated based on travel mode using the same routing engine that powers our ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),"."),(0,i.kt)("p",null,"You can receive events client-side via the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or server-side via ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),", including webhooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [\n    {\n      "_id": "56db1f4613012711002229f6",\n      "type": "user.updated_trip",\n      "createdAt": "2020-08-20T10:30:55.837Z",\n      "live": true,\n      "trip": {\n        "_id": "5f3e50491c2b7d005c81f5d9",\n        "live": true,\n        "externalId": "299",\n        "metadata": {\n          "Customer Name": "Jacob Pena",\n          "Car Model": "Green Honda Civic"\n        },\n        "mode": "car",\n        "destinationGeofenceTag": "store",\n        "destinationGeofenceExternalId": "123",\n        "destinationLocation": {\n          "coordinates": [\n            -105.061198,\n            39.779366\n          ],\n          "type": "Point"\n        },\n        "eta": {\n          "duration": 5.5,\n          "distance": 1331\n        },\n        "createdAt": "2020-08-20T10:27:55.830Z",\n        "updatedAt": "2020-08-20T10:30:55.837Z",\n        "status": "started"\n      },\n    },\n  ],\n  "user": {\n    "_id": "56db1f4613012711002229f4",\n    "live": true,\n    "userId": "1",\n    "deviceId": "C305F2DB-56DC-404F-B6C1-BC52F0B680D8",\n    ...\n  }\n}\n')),(0,i.kt)("h2",{id:"delay-detection"},"Delay detection"),(0,i.kt)("p",null,"Delay detection identifies trips at risk of being delayed or incomplete. To enable this feature, configure a ",(0,i.kt)("em",{parentName:"p"},"Delay Threshold")," on the  ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings#trips-settings"},"Settings page")," under ",(0,i.kt)("em",{parentName:"p"},"Trips"),". Make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledArrivalAt")," is set for each trip. A trip will be marked as delayed when the predicted delay exceeds the threshold."),(0,i.kt)("p",null,"Delay information is captured in the trip's ",(0,i.kt)("inlineCode",{parentName:"p"},"delay")," field. The ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledArrivalTimeDelay")," is the predicted arrival delay from the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledArrivalAt")," time in minutes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"delayed")," flag is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledArrivalTimeDelay")," exceeds the delay threshold."),(0,i.kt)("h2",{id:"display-live-trips-and-etas"},"Display live trips and ETAs"),(0,i.kt)("h3",{id:"in-the-radar-trip-tracking-dashboard"},"In the Radar trip tracking dashboard"),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"The trip tracking dashboard is available on the "," ",(0,i.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,i.kt)("p",null,"The Radar trip tracking dashboard displays active trips for a specific destination geofence, including ID, custom metadata, and ETA."),(0,i.kt)("p",null,"Ask your customer success manager for a distribution of the app specific to your organization."),(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/38fY5fD4H47UGa4KZXHLib/989305812e9b35a741141b1fd9c3befa/tablet-view.gif",className:"hero-image"}),(0,i.kt)("h3",{id:"in-your-own-ui"},"In your own UI"),(0,i.kt)("p",null,"Poll the ",(0,i.kt)("a",{parentName:"p",href:"/api#list-trips"},"list trips API")," to retrieve active trips for a specific destination geofence, including ID, custom metadata, and ETA. For example, you might poll the list trips API from an internal dashboard."),(0,i.kt)("p",null,"Or, listen for ",(0,i.kt)("a",{parentName:"p",href:"/trip-tracking#trip-events"},"trip events")," sent to a webhook. From there, forward trip information, including ID, custom metadata, and ETA, to other systems. For example, you might set up a webhook that sends ETA to an order management or kitchen display system."),(0,i.kt)("h2",{id:"analytics"},"Analytics"),(0,i.kt)("p",null,"Radar offers analytics on trip data and location opt-in rates from ",(0,i.kt)("a",{parentName:"p",href:"/api#users"},"users")," in your project. ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/analytics"},"Analytics")," on trip data can be found on the Analytics page and grouped under the Trips tab. Analytics on location permission opt-in rates is grouped under the Permissions tab. Read more about Permissions\xa0",(0,i.kt)("a",{parentName:"p",href:"/faqs#location-permissions"},"here"),"."),(0,i.kt)("h3",{id:"how-to-filter-your-data"},"How to filter your data"),(0,i.kt)("p",null,"The Filters button at the top of the page offers ways to look at more granular views of your trip data. The filters will apply to the statistics cards and graphs as well as the data in the By Destination table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Date Range:")," A date range can be selected from the drop-down date picker. Make sure that the date in the left-hand box falls before the date in the right-hand box. When accessing the Analytics page, the default date range encompasses all trip data in your project, meaning that you'll see a default range from the date of your earliest trip to yesterday. All trip analytics are updated nightly and trip analytics from today will not be shown in the Analytics page until tomorrow."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destination Geofence Tag:"),' Each geofence has a geofence tag. You can find the tag to a specific geofence in the "Tag" column on the Geofences page in the sidebar, or you can navigate to the trips page in the sidebar and click on the external ID listed under "Destination", which will show the details of the destination geofence. This field can be used alone or in tandem with the Destination Geofence External ID field.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destination Geofence External ID"),': Each geofence has an external ID. You can find the external ID for a specific geofence in the "External ID" column on the Geofences page in the sidebar, or you can navigate to the Trips page and click on the external ID listed under "Destination". This field can be used alone or in tandem with the Destination Geofence Tag field.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Travel Mode:")," Select a specific mode of travel to filter all trip data in the Analytics view to only a specific mode. If there is no mode selected, all trip data, regardless of travel mode, will be shown."),(0,i.kt)("p",null,"Trip analytics apply to the environment in which you view the metrics. For example, when viewing the metrics in the test environment, the metrics only include trip data from the test environment."),(0,i.kt)("h3",{id:"trips-overview"},"Trips overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Median wait time")),": the median duration between the moment when a user arrives at a destination (",(0,i.kt)("inlineCode",{parentName:"li"},"user.arrived_at_trip_destination"),") and the moment when the trip is marked complete (",(0,i.kt)("inlineCode",{parentName:"li"},"completed"),"). This statistic omits trips which are missing an arrival timestamp."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Number of trips")),": the total count of all live trips for a specific project which have a status of ",(0,i.kt)("inlineCode",{parentName:"li"},"completed"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Median trip time")),": the median duration between the moment when the user starts a trip (",(0,i.kt)("inlineCode",{parentName:"li"},"user.started_trip"),") and the moment when they arrive at the destination (",(0,i.kt)("inlineCode",{parentName:"li"},"user.arrived_at_trip_destination"),"). This statistic omits trips which are missing an arrival timestamp."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Repeat customers")),": the total number of your users who have completed more than one trip.")),(0,i.kt)("p",null,"The graphs for each card show the change over time in each statistic. The time windows of each graph are automatically determined by the dates set in the Filters button. To see data grouped by hour, set the date range to encompass 2 days or fewer. To see data grouped by day, set the date range to encompass 21 days or fewer. To see data grouped by weeks, set the date range to encompass 60 days or fewer. To see data grouped by month, the date range must encompass more than 60 days of data."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number of Days"),(0,i.kt)("th",{parentName:"tr",align:null},"Time Grouping"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"21"),(0,i.kt)("td",{parentName:"tr",align:null},"Day")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"60"),(0,i.kt)("td",{parentName:"tr",align:null},"Week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"60+"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")))),(0,i.kt)("h3",{id:"by-destination-table"},"By Destination table"),(0,i.kt)("p",null,"The By Destination table groups your trip data by individual destination geofence and allows you to identify your ",(0,i.kt)("strong",{parentName:"p"},"slowest and fastest stores")," by wait time as well as your ",(0,i.kt)("strong",{parentName:"p"},"most popular stores")," by the number of trips made to the store."),(0,i.kt)("p",null,"By default, the By Destination table is sorted alphabetically based on the Destination column. To toggle the sort order of the column, click the column header."),(0,i.kt)("p",null,"The table has 6 sortable headers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Destination")),": the description of the individual destination geofence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Tag")),": the geofence tag associated with the unique geofence destination listed in the destination column. Clicking on a tag filters the entire Analytics page for only geofences that contain that tag."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Geofence ID")),": the geofence ID of the unique geofence destination listed in the destination column."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Wait Time")),": the median wait time of all qualifying trips to that destination, given the filters applied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Trips Completed")),": the number of completed trips to that destination, given the filters applied."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Trip Time")),": the median trip time of all qualifying trips to that destination, given the filters applied.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"By Destination table filter box:")," The text box in the By Destination table on the Analytics page also allows you to filter only the data in the table. You can filter by Destination, Tag, or Geofence ID. (The filters set in text box only apply to data in the By Destination table and do not apply to the overall trip metrics at the top of the page.)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Additional options in the table:")," On the right side of each row, there is an icon with three dots that allows viewers to select additional options. Clicking on this icon offers two actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Filter by destination")),": This will filter the entire analytics page to only include this single destination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"View destination")),": This will bring you to the destination geofence's detail page.")),(0,i.kt)("h3",{id:"calculations"},"Calculations"),(0,i.kt)("p",null,"Wait time and trip time are only calculated for trips that have a status of ",(0,i.kt)("inlineCode",{parentName:"p"},"completed")," and have timestamp entries for ",(0,i.kt)("inlineCode",{parentName:"p"},"started_at"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"arrived_at"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"completed_at"),". Reminder that all trip analytics are updated nightly and trip analytics from today will not be shown in the Analytics page until tomorrow."),(0,i.kt)("h3",{id:"data-retention-settings-and-frequency-of-updates"},"Data retention settings and frequency of updates"),(0,i.kt)("p",null,"Data retention settings (a setting on the ",(0,i.kt)("em",{parentName:"p"},"project")," level) apply to the data in Analytics as well. The default data retention settings for trip data is 90 days."),(0,i.kt)("p",null,"Median wait time, trip count, and median trip duration metrics are all updated nightly, so all calculations do not include the current day's data."),(0,i.kt)("p",null,"If your project does not have any past trips, you will not see any data in the analytics section of your dashboard. Take your first trip to see the statistics populate!"),(0,i.kt)("h2",{id:"pickup-app"},"Pickup app"),(0,i.kt)("p",null,"The Pickup app is a pre-built web app that allows customers to let a store associate know when they're on their way and when they\u2019ve arrived, eliminating the need for customer phone calls or constantly checking the parking lot. The app requires no software engineering work from your team and can be customized with your brand's color scheme and logo."),(0,i.kt)("h3",{id:"how-customers-use-the-pickup-app"},"How customers use the Pickup app"),(0,i.kt)("p",null,"Customers receive a link to the Pickup app upon placing their pickup order. Clicking the link takes the customer to the web app in their browser."),(0,i.kt)("p",null,"When the customer begins their journey, they enter their vehicle make and model in a text box and begin their trip. Vehicle information populates our in-store dashboard directly alongside the customer's name and order number so that store employees can find their customers quickly."),(0,i.kt)("p",null,"The Pickup app allows customers to press a button when they reach different states of a trip:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start:"),' To start the trip from the app, customers enter their car information and then click "I\'m on my way". The in-store dashboard will now show employees that the customer has ',(0,i.kt)("inlineCode",{parentName:"li"},"started")," their trip."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Arrival:"),' When the customer arrives at their destination, the customer clicks "I\'ve arrived". The in-store dashboard will now show employees that the customer has ',(0,i.kt)("inlineCode",{parentName:"li"},"arrived"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Completion:")," After the customer receives their order, they can mark the trip ",(0,i.kt)("inlineCode",{parentName:"li"},"complete"),". The trip can also be marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"complete")," by the store employee.")),(0,i.kt)("p",null,"The Pickup app is available to enterprise customers. For more information, contact your customer success manager or reach out to our sales team."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}f.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);