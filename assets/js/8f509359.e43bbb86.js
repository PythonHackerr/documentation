"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,g=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",l="alertTip_1W6d",s="alertSuccess_7EZp",p=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"tip"===n?a.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},1135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(970),l={title:"Geofences"},s=void 0,p={unversionedId:"geofences",id:"geofences",isDocsHomePage:!1,title:"Geofences",description:"Geofences represent custom regions or places monitored in your project. Depending on your use case, a geofence might represent a retail store, a neighborhood, and so on.",source:"@site/docs/geofences.mdx",sourceDirName:".",slug:"/geofences",permalink:"/documentation/geofences",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/geofences.mdx",tags:[],version:"current",frontMatter:{title:"Geofences"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/documentation/geofencing/overview"},next:{title:"Trips",permalink:"/documentation/trip-tracking"}},d=[{value:"Quickstart",id:"quickstart",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Create geofences",id:"create-geofences",children:[{value:"Dashboard",id:"dashboard",children:[]},{value:"CSV import",id:"csv-import",children:[]},{value:"API",id:"api",children:[]},{value:"Geofence sync",id:"geofence-sync",children:[]}]},{value:"Confidence and accuracy",id:"confidence-and-accuracy",children:[]},{value:"Stop detection",id:"stop-detection",children:[]},{value:"Buffer entries and exits",id:"buffer-entries-and-exits",children:[]},{value:"Operating hours",id:"operating-hours",children:[]},{value:"Dwell events",id:"dwell-events",children:[]}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Geofences represent custom regions or places monitored in your project. Depending on your use case, a geofence might represent a retail store, a neighborhood, and so on."),(0,o.kt)("p",null,"Radar geofencing is more powerful than native iOS or Android geofencing, with cross-platform support for unlimited geofences, polygon geofences, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isochrone_map"},"isochrone")," (time-based) geofences, temporary geofences, and stop detection."),(0,o.kt)("img",{className:"hero-image--small",src:"https://images.ctfassets.net/f2vbu16fzuly/7g93fYMsIya1BRo9js96h9/fd5624ec2d3db9305ca9564f59374fe4/geofences_event.svg"}),(0,o.kt)("p",null,"Geofences provides the following user context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "geofences": [\n    {\n      "tag": "store",\n      "externalId": "123",\n      "description": "Store #123",\n      "metadata": {\n        "parking": false\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Geofences also provides the following events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.entered_geofence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.exited_geofence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.dwelled_in_geofence"))),(0,o.kt)("p",null,"You can receive events client-side via the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or server-side via ",(0,o.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),", including webhooks."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"#create-geofences"},"create geofences")," via the dashboard, CSV import, the API, nightly sync, or integrations."),(0,o.kt)("p",null,"Alternatively, if you don't have your own custom place data, Radar can detect when a user visits a place even if you haven't set up a geofence for that place. Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/places"},"Places"),"."),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,o.kt)("p",null,"Then, ",(0,o.kt)("a",{parentName:"p",href:"#create-a-geofence"},"create geofences"),"."),(0,o.kt)("p",null,"From there, ",(0,o.kt)("a",{parentName:"p",href:"/documentation/sdk"},"integrate the SDK")," and call ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.startTracking()"),", depending on your use case. Radar will generate an entry event on the first location update inside of a geofence."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Geofencing works in the foreground and in the background. All event generation happens server-side. This allows Radar geofencing to be more powerful than native iOS or Android geofencing, with cross-platform support for unlimited geofences, polygon geofences, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isochrone_map"},"isochrone")," (time-based) geofences, temporary geofences, and stop detection."),(0,o.kt)("p",null,"Radar generates a geofence entry event if a user enters a geofence (if ",(0,o.kt)("a",{parentName:"p",href:"#stop-detection"},"stop detection")," is off) or stops in a geofence (if ",(0,o.kt)("a",{parentName:"p",href:"#stop-detection"},"stop detection")," is on) with sufficient confidence, then a geofence exit event when the user leaves the geofence with sufficient confidence. A device must exit a geofence before a subsequent entry into that same geofence."),(0,o.kt)("h2",{id:"create-geofences"},"Create geofences"),(0,o.kt)("p",null,"You can create geofences via the dashboard, CSV import, the API, nightly sync, or integrations. You can create geofences in the ",(0,o.kt)("em",{parentName:"p"},"Test")," environment for development and testing, and in the ",(0,o.kt)("em",{parentName:"p"},"Live")," environment for production."),(0,o.kt)("p",null,"You specify the metadata for geofences when you create them, including the ",(0,o.kt)("em",{parentName:"p"},"tag")," (a group for the geofence, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"), ",(0,o.kt)("em",{parentName:"p"},"external ID")," (an external ID for the geofence that maps to your internal database, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"123"),"), and ",(0,o.kt)("em",{parentName:"p"},"description")," (a display name for the geofence, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Store #123"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Geofences should be uniquely referenced by tag and external ID, assigned by you when a geofence is created. To disable or update metadata for a geofence, re-import the geofence with the same tag and external ID.")),(0,o.kt)("h3",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"To create a geofence via the dashboard, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofencing/geofences/new"},"Geofences page")," and click the ",(0,o.kt)("em",{parentName:"p"},"Create")," button. Optionally search for an address or place, then enter a description, tag, external ID, and optional metadata. Choose ",(0,o.kt)("em",{parentName:"p"},"circle")," to create a circle geofence, ",(0,o.kt)("em",{parentName:"p"},"polygon")," to create a polygon geofence, or ",(0,o.kt)("em",{parentName:"p"},"isochrone")," to create an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isochrone_map"},"isochrone")," (time-based) geofence. Click ",(0,o.kt)("em",{parentName:"p"},"Create")," to create the geofence."),(0,o.kt)("h3",{id:"csv-import"},"CSV import"),(0,o.kt)("p",null,"To create geofences via CSV import, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofencing/geofences#import"},"Geofences page")," and click the ",(0,o.kt)("em",{parentName:"p"},"Import")," button. Then, select a CSV to upload."),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Headers are required as the first row of the CSV."),(0,o.kt)("p",null,"The CSV may have the following columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))," (string, required): A description for the geofence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"type"))," (string, required): The type of geofence geometry. ",(0,o.kt)("inlineCode",{parentName:"li"},"polygon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"circle"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"isochrone")," are supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"tag"))," (string, required): A group for the geofence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"externalId"))," (string, required): An external ID for the geofence that maps to your internal database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"coordinates"))," (array, required if ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"placeId")," are not included): An array or JSON string representing a center for type ",(0,o.kt)("inlineCode",{parentName:"li"},"circle")," or a destination for type ",(0,o.kt)("inlineCode",{parentName:"li"},"isochrone")," in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"[longitude,latitude]"),". A two-dimensional array or JSON string representing a closed ring of between 4 and 2,000 coordinates in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"[[longitude0, latitude0],[longitude1,latitude1],[longitude2,latitude2],...,[longitude0,latitude0]]")," for type ",(0,o.kt)("inlineCode",{parentName:"li"},"polygon"),". ",(0,o.kt)("strong",{parentName:"li"},"Note that longitude comes before latitude, a GeoJSON convention.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"address"))," (string, required if ",(0,o.kt)("inlineCode",{parentName:"li"},"coordinates")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"placeId")," are not included): An address to search for, and if found, will represent the center for type ",(0,o.kt)("inlineCode",{parentName:"li"},"circle")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"isochrone"),". If ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"coordinates")," are both provided, they must be nearby, and ",(0,o.kt)("inlineCode",{parentName:"li"},"coordinates")," will take precedent. Ignored for type ",(0,o.kt)("inlineCode",{parentName:"li"},"polygon"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"radius"))," (number, required for type ",(0,o.kt)("inlineCode",{parentName:"li"},"circle")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"isochrone"),"): The radius in meters for type ",(0,o.kt)("inlineCode",{parentName:"li"},"circle"),", a number between ",(0,o.kt)("inlineCode",{parentName:"li"},"10")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"10000"),". The travel duration in minutes for type ",(0,o.kt)("inlineCode",{parentName:"li"},"isochrone"),". Ignored for type ",(0,o.kt)("inlineCode",{parentName:"li"},"polygon"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"mode"))," (required for type ",(0,o.kt)("inlineCode",{parentName:"li"},"isochrone"),"): the ",(0,o.kt)("a",{parentName:"li",href:"/api#routing"},"travel mode")," for type ",(0,o.kt)("inlineCode",{parentName:"li"},"isochrone"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"enabled"))," (boolean, optional): If ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", the geofence will generate events. If ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", the geofence will not generate events. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"metadata"))," (dictionary, optional): An optional set of custom key-value pairs for the geofence. A dictionary or JSON string with up to 16 keys and values of type string, boolean, or number. ",(0,o.kt)("strong",{parentName:"li"},"Cannot be used with ",(0,o.kt)("inlineCode",{parentName:"strong"},"metadata.{key}")," columns.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"metadata.{key}"))," (string, optional): Instead of converting ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata")," to stringified JSON, use columns of this format to add a key-value pairs to ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata"),". For example, the column header ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata.pickup-mode")," with a value of ",(0,o.kt)("inlineCode",{parentName:"li"},'"drive-thru"')," will resolve to ",(0,o.kt)("inlineCode",{parentName:"li"},'{ pickup-mode: "drive-thru" }'),". Avoid using spaces and commas for keys. ",(0,o.kt)("strong",{parentName:"li"},"Cannot be used with the ",(0,o.kt)("inlineCode",{parentName:"strong"},"metadata")," column.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"operatingHours"))," (dictionary, optional): An optional set of key-value pairs restricting the ",(0,o.kt)("a",{parentName:"li",href:"/geofences#operating-hours"},"operating hours of the geofence"),". Each key is a day of the week (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"Sunday"),") or the three letter abbreviation of the day (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"Sun"),"), case insensitive. Each value is a list of pairs, where a pair indicates one opening and closing time for that day. For example, a restaurant only open for lunch and dinner on Sundays would be ",(0,o.kt)("inlineCode",{parentName:"li"},'{ Sunday: [["11:00", "14:00"], ["19:00", "22:00"]] }'),". Accepted time formats include ",(0,o.kt)("inlineCode",{parentName:"li"},"h:mm aa")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"12:45 AM"),") and ",(0,o.kt)("inlineCode",{parentName:"li"},"HH:mm")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"00:45"),"). If neither ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours")," nor ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours.{day}")," is provided, the geofence will always be open. ",(0,o.kt)("strong",{parentName:"li"},"Cannot be used with ",(0,o.kt)("inlineCode",{parentName:"strong"},"operatingHours.{day}")," columns.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"operatingHours.{day}"))," (string, optional): Instead of converting ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours")," to stringified JSON, use columns of this format to add a key-value pairs to ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours"),". For example, the column header ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours.sunday")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours.sun"),") with a value of ",(0,o.kt)("inlineCode",{parentName:"li"},'"[["11:00", "14:00"], ["19:00", "22:00"]]"')," will resolve to ",(0,o.kt)("inlineCode",{parentName:"li"},'{ Sunday: [["11:00", "14:00"], ["19:00", "22:00"]] }'),". If neither ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours")," nor ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours.{day}")," is provided, the geofence will always be open. ",(0,o.kt)("strong",{parentName:"li"},"Cannot be used with the ",(0,o.kt)("inlineCode",{parentName:"strong"},"operatingHours")," column.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"stopDetection"))," (boolean, optional): The ",(0,o.kt)("a",{parentName:"li",href:"/geofences#stop-detection"},"stop detection")," setting for the geofence. Overrides the project-level stop detection setting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"disableAfter"))," (datetime, optional): Use to create temporary geofences. If set, the geofence will be disabled after the specified datetime. ",(0,o.kt)("inlineCode",{parentName:"li"},"disableAfter")," operates independently of ",(0,o.kt)("inlineCode",{parentName:"li"},"operatingHours"),". A date or valid ISO date string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"deleteAfter"))," (datetime, optional): Use to create temporary geofences. If set, the geofence will be deleted after the specified datetime. A date or valid ISO date string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"userId"))," (string, optional): An optional user restriction for the geofence. If set, the geofence will only generate events for the specified user. If not set, the geofence will generate events for all users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ip"))," (string, optional): An optional IP address restriction for the geofence. A string of comma-separated IP address ranges, each of which could be a single IP (",(0,o.kt)("inlineCode",{parentName:"li"},"8.8.8.8"),"), wildcard notation (",(0,o.kt)("inlineCode",{parentName:"li"},"8.8.8.*"),"), or CIDR notation (",(0,o.kt)("inlineCode",{parentName:"li"},"8.8.8.8/24"),"). If set, the geofence will only generate events for requests from the specified IP address. If not set, the geofence will generate events for all requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"dwellThreshold"))," (number, optional): An optional field to trigger dwell events. If set and ",(0,o.kt)("inlineCode",{parentName:"li"},"user.dwelled_in_geofence")," is enabled in settings, an event is triggered when a user dwells in the geofence longer than the threshold (in minutes). For example, a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"10")," would result in a dwell event on the next track call after a user has occupied a geofence for 10 minutes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"placeId"))," (string, required if ",(0,o.kt)("inlineCode",{parentName:"li"},"coordinates")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," are not included): For ",(0,o.kt)("a",{parentName:"li",href:"/dashboard#place-matching"},"place matching"),", an optional ",(0,o.kt)("inlineCode",{parentName:"li"},"_id")," of the Radar ",(0,o.kt)("a",{parentName:"li",href:"/places"},"place")," to match to the geofence. If a place was matched, the geometry of the place will override the geometry of the geofence.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If a geofence with the specified tag and external ID already exists, it will be updated. If not, it will be created.")),(0,o.kt)("p",null,"For example, to import a circle geofence representing a store and a polygon geofence representing a neighborhood, you could use the following CSV:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'description,tag,externalId,type,radius,mode,coordinates,address,enabled,metadata,stopDetection,disableAfter,deleteAfter,userId,operatingHours\n"Store #123",store,123,circle,50,,"[-73.975363,40.783826]",,true,"{""parking"":false}",,,,,\n"SoHo",neighborhood,soho,polygon,,,"[[-73.996973,40.725660],[-73.998282,40.726294],[-74.001072,40.727660],[-74.002853,40.728603],[-74.003282,40.727936],[-74.003840,40.726310],[-74.004226,40.725351],[-74.004998,40.723530],[-74.005191,40.722993],[-74.005556,40.722115],[-74.004462,40.721334],[-74.001908,40.719496],[-73.999827,40.718016],[-73.997467,40.720863],[-73.997016,40.722212],[-73.996501,40.723497],[-73.995750,40.724278],[-73.995128,40.725107],[-73.996973,40.725660]]",,true,,,,,,\n"15 minutes driving to Disney World","car-15",disney,isochrone,15,car,"[-81.563874,28.385233]",,true,"{""type"":""resort""}",,,,,\n"Madison Square Garden from address",stadium,msg,circle,200,,,"4 Pennsylvania Plaza, New York, NY 10001",true,,,,,,\n"Disable in 2028 and delete in 2029",new-years,2027,circle,50,,"[-73.9877313,40.7579787]",,true,,,"2028-01-01T00:01:00-05:00","Jan 1, 2029",,\n"Delivery #123 for user #456",delivery,123,circle,50,,"[-73.9934387,40.7505045]",,true,,,,,456,\n"Restaurant #789 open for Sunday breakfast and dinner",restaurant,789,circle,50,,"[-73.9934387,40.7505045]",,true,,,,,,"{""Sun"":[[""09:00"",""14:00""], [""17:00"",""22:00""]]}"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Again, note that longitude comes before latitude, a GeoJSON convention.")),(0,o.kt)("p",null,"You can find a history of past imports on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofences/imports"},"Geofences import history page"),"."),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("p",null,"You can also create geofences programmatically via the ",(0,o.kt)("a",{parentName:"p",href:"/api#upsert-a-geofence"},"API"),". You can create a geofence via ",(0,o.kt)("span",{className:"badge badge--info"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/geofences"),", or upsert a geofence based on tag and external ID via ",(0,o.kt)("span",{className:"badge badge--warning"},"PUT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/geofences/:tag/:externalId"),"."),(0,o.kt)("p",null,"For example, to upsert a geofence representing a store via the ",(0,o.kt)("a",{parentName:"p",href:"/api#upsert-a-geofence"},"API"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://api.radar.io/v1/geofences/store/123 \\\n    -H "Authorization: prj_live_sk_..." \\\n    -X PUT \\\n    -d "description=Store #123" \\\n    -d "type=circle" \\\n    -d "coordinates=[-73.975363,40.783826]" \\\n    -d "radius=100"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Again, note that longitude comes before latitude, a GeoJSON convention.")),(0,o.kt)("h3",{id:"geofence-sync"},"Geofence sync"),(0,o.kt)("p",null,"Finally, you can sync geofences nightly from a CSV."),(0,o.kt)("p",null,"On the Radar ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"Integrations page")," under ",(0,o.kt)("em",{parentName:"p"},"Geofence Sync"),", set ",(0,o.kt)("em",{parentName:"p"},"Enabled")," to ",(0,o.kt)("em",{parentName:"p"},"Yes"),". Enter a ",(0,o.kt)("em",{parentName:"p"},"Notification Email")," to receive success and failure confirmation emails. Then, choose a ",(0,o.kt)("em",{parentName:"p"},"Protocol"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("em",{parentName:"li"},"HTTP")," for geofence CSVs at public HTTP or HTTPS URLs. Enter the URLs of the geofence CSVs."),(0,o.kt)("li",{parentName:"ul"},"Or, choose ",(0,o.kt)("em",{parentName:"li"},"AWS S3")," for geofence CSVs in a private S3 bucket. Enter an S3 bucket region, S3 bucket name, and the S3 object keys of the geofence CSVs. Finally, enter the AWS access key ID and secret access key of an IAM user with ",(0,o.kt)("inlineCode",{parentName:"li"},"GetObject")," permissions for the specified S3 bucket and objects.")),(0,o.kt)("p",null,"Note that you can set separate CSVs for the ",(0,o.kt)("em",{parentName:"p"},"Test")," and ",(0,o.kt)("em",{parentName:"p"},"Live")," environments."),(0,o.kt)("p",null,"The geofence sync CSV format is the same as the ",(0,o.kt)("a",{parentName:"p",href:"/geofences#csv-import"},"geofence import CSV format"),"."),(0,o.kt)("p",null,"When you click ",(0,o.kt)("em",{parentName:"p"},"Save and Sync"),", Radar will attempt a one-time sync and send an email on success or failure. Radar will then attempt syncs nightly."),(0,o.kt)("h2",{id:"confidence-and-accuracy"},"Confidence and accuracy"),(0,o.kt)("p",null,"All geofence events have confidence levels. Confidence levels range from ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," (low) to ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," (high). Confidence is a function of the accuracy of the location reported by the device and the geometry of the geofence."),(0,o.kt)("p",null,"Confidence will be high when the user, taking into account the accuracy of the location reported by the device, is completely inside the geofence. Confidence will be medium when the user is mostly inside the geofence. Confidence will be low when the user is only partially inside the geofence."),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/cszDUh5NBGi6lBpslnH67/cc29547e9e38cee37d325814a6f4f589/confidence.png",className:"hero-image"}),(0,o.kt)("p",null,"The smaller the geofence and the less accurate the location reported by the device, the lower the confidence level. As a result, you may decide to ignore some events based on confidence levels."),(0,o.kt)("h2",{id:"stop-detection"},"Stop detection"),(0,o.kt)("p",null,"When ",(0,o.kt)("em",{parentName:"p"},"Geofence stop detection")," is on, Radar can understand the difference between a user walking or driving through a geofence and stopping in a geofence, and will only generate a geofence entry event when a user stops in a geofence (i.e., when ",(0,o.kt)("inlineCode",{parentName:"p"},"stopped")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," based on ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options")," or when ",(0,o.kt)("inlineCode",{parentName:"p"},"foreground")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,o.kt)("p",null,"You can enable this setting at a project level on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings#geofences-settings"},"Settings page"),", or at a geofence level when you ",(0,o.kt)("a",{parentName:"p",href:"#create-geofences"},"create geofences"),"."),(0,o.kt)("h2",{id:"buffer-entries-and-exits"},"Buffer entries and exits"),(0,o.kt)("p",null,"Use ",(0,o.kt)("em",{parentName:"p"},"Buffer entries")," to more aggressively enter geofences and reduce the likelihood of missed entry events. When ",(0,o.kt)("em",{parentName:"p"},"Buffer Entries")," is off, Radar will only generate an entry event if the location reported by the device is inside the geofence boundary. However, when ",(0,o.kt)("em",{parentName:"p"},"Buffer Entries")," is on, Radar will generate an entry event if the device is within X meters of the geofence, where X is the accuracy reported by the device. For example, if the device reports a location accurate to within 50 meters, Radar will generate an entry event if the location is within 50 meters of the geofence boundary."),(0,o.kt)("p",null,"Use ",(0,o.kt)("em",{parentName:"p"},"Buffer exits")," to more conservatively exit geofences and reduce the jumpiness of exit events. When ",(0,o.kt)("em",{parentName:"p"},"Buffer Exits")," is off, Radar will generate an exit event if the location reported by the device is outside the geofence boundary. However, when ",(0,o.kt)("em",{parentName:"p"},"Buffer Exits")," is on, Radar will only generate an exit event if the device is more than X meters outside of the geofence, where X is the accuracy reported by the device. For example, if the device reports a location accurate to within 50 meters, Radar will only generate an entry event if the location is more than 50 meters outside of the geofence boundary."),(0,o.kt)("p",null,"You can enable these settings at a project level at a project level on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings#geofences-settings"},"Settings page"),"."),(0,o.kt)("h2",{id:"operating-hours"},"Operating hours"),(0,o.kt)("p",null,"When ",(0,o.kt)("em",{parentName:"p"},"Operating Hours")," are set on a geofence, Radar will indicate whether a user entered, exited, or dwelled in the geofence during its operating hours. Radar will add a boolean flag ",(0,o.kt)("inlineCode",{parentName:"p"},"currentlyOperating")," to all geofence event payloads."),(0,o.kt)("p",null,"Radar can also restrict geofence events from being generated outside of operating hours. Restrict event generation to only operating hours at the project level on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings#geofences-settings"},"Settings page"),"."),(0,o.kt)("p",null,"Operating hours can be set on individual geofences via ",(0,o.kt)("a",{parentName:"p",href:"/geofences#csv-import"},"CSV import"),", the ",(0,o.kt)("a",{parentName:"p",href:"/api#upsert-a-geofence"},"API"),", or in the ",(0,o.kt)("em",{parentName:"p"},"Advanced")," section of the geofence create and edit pages."),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/2NBWd8m5bdREs2U0YEwlOI/658e8683aab80223b0ab50a055dc4136/operating-hours.png",className:"hero-image"}),(0,o.kt)("h2",{id:"dwell-events"},"Dwell events"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"user.dwelled_in_geofence")," is enabled, Radar can trigger dwell events after a device remains inside of a geofence boundary for more than a specific threshold. Radar will generate a dwell event after the first location reported by the device beyond the specified threshold."),(0,o.kt)("p",null,"You can enable this event at the project level on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings#geofences-settings"},"Settings page"),"."))}m.isMDXComponent=!0}}]);