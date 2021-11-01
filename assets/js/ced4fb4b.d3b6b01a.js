"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3674],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},462:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={sidebar_position:7,sidebar_label:"Capacitor",title:"Capacitor Plugin",id:"capacitor",description:"Documentation for Capacitor Plugin"},s=void 0,l={unversionedId:"sdk/capacitor",id:"sdk/capacitor",isDocsHomePage:!1,title:"Capacitor Plugin",description:"Documentation for Capacitor Plugin",source:"@site/docs/sdk/capacitor.mdx",sourceDirName:"sdk",slug:"/sdk/capacitor",permalink:"/documentation/sdk/capacitor",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/sdk/capacitor.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Capacitor",title:"Capacitor Plugin",id:"capacitor",description:"Documentation for Capacitor Plugin"},sidebar:"defaultSidebar",previous:{title:"Cordova",permalink:"/documentation/sdk/cordova"},next:{title:"Flutter",permalink:"/documentation/sdk/flutter"}},p=[{value:"Install",id:"install",children:[]},{value:"Integrate",id:"integrate",children:[{value:"Import module",id:"import-module",children:[]},{value:"Identify user",id:"identify-user",children:[]},{value:"Request permissions",id:"request-permissions",children:[]},{value:"Foreground tracking",id:"foreground-tracking",children:[]},{value:"Background tracking",id:"background-tracking",children:[]},{value:"Mock tracking",id:"mock-tracking",children:[]},{value:"Trip tracking",id:"trip-tracking",children:[]},{value:"Manual tracking",id:"manual-tracking",children:[]},{value:"Other APIs",id:"other-apis",children:[]}]},{value:"Support",id:"support",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the documentation for the Capacitor plugin. Before integrating, read the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"native SDK documentation")," to familiarize yourself with the platform."),(0,i.kt)("p",null,"See the source on GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/capacitor-radar"},"here"),". Or, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"capacitor-radar")," package on npm ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/capacitor-radar"},"here"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Install the package from npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save capacitor-radar\n")),(0,i.kt)("p",null,"Then, update dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx cap sync\n")),(0,i.kt)("p",null,"If successful, you will see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\u2714 Updating Android plugins\n  Found 1 Capacitor plugin for android:\n    capacitor-radar\n\u2714 update android\n...\n\u2714 Updating iOS plugins\n  Found 1 Capacitor plugin for ios:\n    capacitor-radar\n\u2714 Updating iOS native dependencies with "pod install" (may take several minutes)\n\u2714 update ios\n')),(0,i.kt)("p",null,"Before writing any JavaScript, you must integrate the Radar SDK with your iOS and Android apps by following the ",(0,i.kt)("em",{parentName:"p"},"Configure project")," steps in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios#configure-xcode-project"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android#configure-android-studio-project"},"Android SDK documentation"),"."),(0,i.kt)("p",null,"On iOS, you must add location usage descriptions and background modes to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist"),". Initialize the SDK in ",(0,i.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"AppDelegate.swift"),", passing in your Radar publishable API key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"import Capacitor\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    Radar.initialize(publishableKey: publishableKey)\n\n    return true\n  }\n\n}\n")),(0,i.kt)("p",null,"On Android, you must add the Google Play Services library to your project, then add the SDK to your project, preferably using Gradle. Finally, initialize the SDK and the plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate()")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),", passing in your Radar publishable API key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import android.os.Bundle;\n\nimport com.getcapacitor.BridgeActivity;\nimport io.radar.sdk.Radar;\n\npublic class MainActivity extends BridgeActivity {\n\n  @Override\n  public void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    Radar.initialize(this, publishableKey);\n  }\n\n}\n")),(0,i.kt)("h2",{id:"integrate"},"Integrate"),(0,i.kt)("h3",{id:"import-module"},"Import module"),(0,i.kt)("p",null,"First, import the module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Radar } from 'capacitor-radar';\n")),(0,i.kt)("h3",{id:"identify-user"},"Identify user"),(0,i.kt)("p",null,"To identify the user when logged in, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setUserId(userId);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," is a stable unique ID for the user."),(0,i.kt)("p",null,"To set an optional dictionary of custom metadata for the user, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setMetadata(metadata);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is a JSON object with up to 16 keys and values of type string, boolean, or number."),(0,i.kt)("p",null,"Finally, to set an optional description for the user, displayed in the dashboard, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setDescription(description);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," is a string."),(0,i.kt)("p",null,"You only need to call these functions once, as these settings will be persisted across app sessions."),(0,i.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"request-permissions"},"Request permissions"),(0,i.kt)("p",null,"Before tracking the user's location, the user must have granted location permissions for the app."),(0,i.kt)("p",null,"To determine the whether user has granted location permissions for the app, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getLocationPermissionsStatus().then((result) => {\n  // do something with result.status\n});\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"result.status")," will be a string, one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRANTED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DENIED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNKNOWN"))),(0,i.kt)("p",null,"To request location permissions for the app, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.requestLocationPermissions({ background });\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"background")," is a boolean indicating whether to request background location permissions or foreground location permissions."),(0,i.kt)("p",null,"Learn about platform-specific permissions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"foreground-tracking"},"Foreground tracking"),(0,i.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can track the user's location."),(0,i.kt)("p",null,"To track the user's location in the foreground, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce().then((result) => {\n  // do something with result.location, result.events, result.user.geofences\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"err")," will be a string, one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PUBLISHABLE_KEY")),": SDK not initialized"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PERMISSIONS")),": location permissions not granted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_LOCATION")),": location services error or timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_NETWORK")),": network error or timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_BAD_REQUEST")),": bad request (missing or invalid params)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_UNAUTHORIZED")),": unauthorized (invalid API key)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PAYMENT_REQUIRED")),": payment required (organization disabled or usage exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_FORBIDDEN")),": forbidden (insufficient permissions or no beta access)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_NOT_FOUND")),": not found"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_RATE_LIMIT")),": too many requests (",(0,i.kt)("a",{parentName:"li",href:"/api#track"},"rate limit")," exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_SERVER")),": internal server error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_UNKNOWN")),": unknown error")),(0,i.kt)("p",null,"Learn about platform-specific implementations of this function in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"background-tracking"},"Background tracking"),(0,i.kt)("p",null,"On iOS and Android, once you have initialized the SDK and the user has granted permissions, you can start tracking the user's location in the background."),(0,i.kt)("p",null,"For background tracking, the SDK supports custom tracking options as well as three presets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"EFFICIENT")),": A low frequency of location updates and lowest battery usage. On Android, avoids Android vitals bad behavior thresholds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RESPONSIVE")),": A medium frequency of location updates and low battery usage. Suitable for most consumer use cases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"CONTINUOUS")),': A high frequency of location updates and higher battery usage. Suitable for on-demand use cases (e.g., delivery tracking) and some consumer use cases (e.g., order ahead, "mall mode").')),(0,i.kt)("p",null,"Learn about platform-specific implementations of these presets in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("p",null,"To start tracking the user's location in the background, call one of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.startTrackingEfficient();\n\nRadar.startTrackingResponsive();\n\nRadar.startTrackingContinuous();\n")),(0,i.kt)("p",null,"You only need to call these methods once, as these settings will be persisted across app sessions."),(0,i.kt)("p",null,"Though we recommend using presets for most use cases, you can customize the tracking options. See the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options reference"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.startTrackingCustom({\n  options: {\n    desiredStoppedUpdateInterval: 180,\n    desiredMovingUpdateInterval: 60,\n    desiredSyncInterval: 50,\n    desiredAccuracy: 'high',\n    stopDuration: 140,\n    stopDistance: 70,\n    sync: 'all',\n    replay: 'none',\n    showBlueBar: true\n  }\n});\n")),(0,i.kt)("p",null,"To stop tracking the user's location in the background (e.g., when the user logs out), call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.stopTracking();\n")),(0,i.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("p",null,"To listen for events, location updates, and errors, you can add event listeners:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.addListener('clientLocation', (result) => {\n  // do something with result.location, result.stopped, result.source\n});\n\nRadar.addListener('location', (result) => {\n  // do something with result.location, result.user\n});\n\nRadar.addListener('events', (result) => {\n  // do something with result.events, result.user\n});\n\nRadar.addListener('error', (result) => {\n  // do something with result.err\n});\n")),(0,i.kt)("p",null,"Add event listeners outside of your view lifecycle if you want them to work when the app is in the background."),(0,i.kt)("h3",{id:"mock-tracking"},"Mock tracking"),(0,i.kt)("p",null,"On iOS and Android, you can simulate a sequence of location updates for testing. For example, to simulate a sequence of 10 location updates every 3 seconds by car from an ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"destination"),", we can call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.mockTracking({\n  origin: {\n    latitude: 40.714708,\n    longitude: -74.035807\n  },\n  destination: {\n    latitude: 40.717410,\n    longitude: -74.053334\n  },\n  mode: 'car',\n  steps: 10,\n  interval: 3\n});\n")),(0,i.kt)("h3",{id:"trip-tracking"},"Trip tracking"),(0,i.kt)("p",null,"On iOS and Android, to start a trip to a destination, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.startTrip({\n  options: {\n    externalId: '299',\n    destinationGeofenceTag: 'store',\n    destinationGeofenceExternalId: '123',\n    mode: 'car'\n  }\n}).then((result) => {\n  // do something with result.status\n});\nRadar.startTrackingContinuous();\n")),(0,i.kt)("p",null,"Later, to complete the trip and stop tracking, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.completeTrip().then((result) => {\n  // do something with result.status\n});\nRadar.stopTracking();\n")),(0,i.kt)("p",null,"Or, to cancel the trip and stop tracking, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.cancelTrip().then((result) => {\n  // do something with result.status\n});\nRadar.stopTracking();\n")),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/trip-tracking"},"trip tracking"),"."),(0,i.kt)("h3",{id:"manual-tracking"},"Manual tracking"),(0,i.kt)("p",null,"You can manually update the user's location by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce({\n  latitude: 39.2904,\n  longitude: -76.6122,\n  accuracy: 65\n}, (result) => {\n  // do something with result.status, result.location, result.events, result.user\n});\n")),(0,i.kt)("p",null,"Learn about platform-specific implementation of this function in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"other-apis"},"Other APIs"),(0,i.kt)("p",null,"The Capacitor plugin also exposes APIs for anonymous context, geocoding, search, and distance."),(0,i.kt)("h4",{id:"get-location"},"Get location"),(0,i.kt)("p",null,"Get a single location update without sending it to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getLocation((result) => {\n  // do something with result.status, result.location\n});\n")),(0,i.kt)("h4",{id:"context"},"Context"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#context"},"context API"),", get context for a location without sending device or user identifiers to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getContext({\n  latitude: 40.783826,\n  longitude: -73.975363,\n  accuracy: 65\n}, (result) => {\n  // do something with result.status, result.context\n});\n")),(0,i.kt)("h4",{id:"geocoding"},"Geocoding"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocoding API"),", geocode an address, converting address to coordinates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.geocode({\n  query: '20 jay st brooklyn ny'\n}, (result) => {\n  // do something with result.status, result.addresses\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#reverse-geocode"},"reverse geocoding API"),", reverse geocode a location, converting coordinates to address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.reverseGeocode({\n  latitude: 40.783826,\n  longitude: -73.975363\n}, (result) => {\n  // do something with result.status, result.addresses\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API"),", geocode the device's current IP address, converting IP address to city, state, and country:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.ipGeocode((result) => {\n  // do something with result.status, result.address\n});\n")),(0,i.kt)("h4",{id:"search"},"Search"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#autocomplete"},"autocomplete API"),", autocomplete partial addresses and place names, sorted by relevance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.autocomplete({\n  query: 'brooklyn roasting',\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  limit: 10\n}, (result) => {\n  // do something with result.status, result.addresses\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API"),", search for geofences near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchGeofences({\n  radius: 1000,\n  tags: ['venue'],\n  limit: 10\n}, (result) => {\n  // do something with result.status, result.geofences\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-places"},"places search API"),", search for places near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchPlaces({\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  radius: 1000,\n  chains: ['starbucks'],\n  limit: 10\n}, (result) => {\n  // do something with result.status, result.places\n});\n")),(0,i.kt)("h4",{id:"distance"},"Distance"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),", calculate the travel distance and duration from an origin to a destination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getDistance({\n  origin: {\n    latitude: 40.78382,\n    longitude: -73.97536\n  },\n  destination: {\n    latitude: 40.70390,\n    longitude: -73.98670\n  },\n  modes: [\n    'foot',\n    'car'\n  ],\n  units: 'imperial'\n}, (result) => {\n  // do something with result.status, result.routes\n});\n")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.io"},"support@radar.io"),"."))}c.isMDXComponent=!0}}]);