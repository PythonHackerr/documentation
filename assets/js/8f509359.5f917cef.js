"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),u=o,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i={sidebar_position:2,title:"Geofences",id:"geofences"},c=void 0,l={unversionedId:"geofences",id:"geofences",isDocsHomePage:!1,title:"Geofences",description:"Geofences represent custom regions or places monitored in your project. Depending on your use case, a geofence might represent a retail store, a neighborhood, and so on.",source:"@site/docs/geofences.mdx",sourceDirName:".",slug:"/geofences",permalink:"/documentation/geofences",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/geofences.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Geofences",id:"geofences"},sidebar:"defaultSidebar",previous:{title:"Documentation",permalink:"/documentation/"},next:{title:"Places",permalink:"/documentation/places"}},s=[{value:"How it works",id:"how-it-works",children:[]},{value:"Create geofences",id:"create-geofences",children:[{value:"Dashboard",id:"dashboard",children:[]},{value:"CSV import",id:"csv-import",children:[]},{value:"API",id:"api",children:[]},{value:"Geofence sync",id:"geofence-sync",children:[]}]},{value:"Confidence and accuracy",id:"confidence-and-accuracy",children:[]},{value:"Stop detection",id:"stop-detection",children:[]},{value:"Buffer Entries and Exits",id:"buffer-entries-and-exits",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Geofences represent custom regions or places monitored in your project. Depending on your use case, a geofence might represent a retail store, a neighborhood, and so on."),(0,r.kt)("p",null,"Radar geofencing is more powerful than native iOS or Android geofencing, with cross-platform support for unlimited geofences, polygon geofences, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isochrone_map"},"isochrone")," (time-based) geofences, temporary geofences, and stop detection."),(0,r.kt)("img",{className:"hero-image",src:"https://images.ctfassets.net/f2vbu16fzuly/5b6qGAs7VRRl01TtCPwFbJ/1e7309fabb7a978c6fd81e55befd91d0/geofences.svg"}),(0,r.kt)("p",null,"Geofences provides the following user context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "geofences": [\n    {\n      "tag": "store",\n      "externalId": "123",\n      "description": "Store #123",\n      "metadata": {\n        "parking": false\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Geofences also provides the following events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user.entered_geofence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user.exited_geofence"))),(0,r.kt)("p",null,"You can receive events client-side via the ",(0,r.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or server-side via ",(0,r.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),", including webhooks."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"#create-geofences"},"create geofences")," via the dashboard, CSV import, the API, nightly sync, or integrations."),(0,r.kt)("p",null,"Alternatively, if you don't have your own custom place data, Radar can detect when a user visits a place even if you haven't set up a geofence for that place. Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/places"},"Places"),"."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Geofencing works in the foreground and in the background. All event generation happens server-side. This allows Radar geofencing to be more powerful than native iOS or Android geofencing, with cross-platform support for unlimited geofences, polygon geofences, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isochrone_map"},"isochrone")," (time-based) geofences, temporary geofences, and stop detection."),(0,r.kt)("p",null,"Radar generates a geofence entry event if a user enters a geofence (if ",(0,r.kt)("a",{parentName:"p",href:"#stop-detection"},"stop detection")," is off) or stops in a geofence (if ",(0,r.kt)("a",{parentName:"p",href:"#stop-detection"},"stop detection")," is on) with sufficient confidence, then a geofence exit event when the user leaves the geofence with sufficient confidence. A device must exit a geofence before a subsequent entry into that same geofence."),(0,r.kt)("h2",{id:"create-geofences"},"Create geofences"),(0,r.kt)("p",null,"You can create geofences via the dashboard, CSV import, the API, nightly sync, or integrations. You can create geofences in the ",(0,r.kt)("em",{parentName:"p"},"Test")," environment for development and testing, and in the ",(0,r.kt)("em",{parentName:"p"},"Live")," environment for production."),(0,r.kt)("p",null,"You specify the metadata for geofences when you create them, including the ",(0,r.kt)("em",{parentName:"p"},"tag")," (an optional group for the geofence, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"), ",(0,r.kt)("em",{parentName:"p"},"external ID")," (an optional external ID for the geofence that maps to your internal database, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"123"),"), and ",(0,r.kt)("em",{parentName:"p"},"description")," (a display name for the geofence, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Store #123"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geofences should be uniquely referenced by tag and external ID, assigned by you when a geofence is created. To disable or update metadata for a geofence, re-import the geofence with the same tag and external ID.")),(0,r.kt)("h3",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"To create a geofence via the dashboard, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/geofences"},"Geofences page")," and click the ",(0,r.kt)("em",{parentName:"p"},"New")," button. Optionally search for an address or place, then enter a description, optional tag, optional external ID, and optional metadata. Choose ",(0,r.kt)("em",{parentName:"p"},"circle")," to create a circle geofence, ",(0,r.kt)("em",{parentName:"p"},"polygon")," to create a polygon geofence, or ",(0,r.kt)("em",{parentName:"p"},"isochrone")," to create an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isochrone_map"},"isochrone")," (time-based) geofence. Click ",(0,r.kt)("em",{parentName:"p"},"Create")," to create the geofence."),(0,r.kt)("h3",{id:"csv-import"},"CSV import"),(0,r.kt)("p",null,"To create geofences via CSV import, go to the ",(0,r.kt)("a",{parentName:"p",href:"/geofences"},"Geofences page")," and click the ",(0,r.kt)("em",{parentName:"p"},"Import")," button. Then, select a CSV to upload."),(0,r.kt)("p",null,"The CSV must have 8 columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description")),": A display name for the geofence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"tag")),": A group for the geofence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"externalId"))," (optional, but recommended): An external ID for the geofence that maps to your internal database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"type")),": The type of geofence geometry. ",(0,r.kt)("inlineCode",{parentName:"li"},"polygon"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"circle"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"isochrone")," are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"radius"))," (required for type ",(0,r.kt)("inlineCode",{parentName:"li"},"circle")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"isochrone"),"): The radius in meters for type ",(0,r.kt)("inlineCode",{parentName:"li"},"circle"),", a number between ",(0,r.kt)("inlineCode",{parentName:"li"},"10")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"10000"),". The travel duration in minutes and ",(0,r.kt)("a",{parentName:"li",href:"/api#routing"},"travel mode")," for type ",(0,r.kt)("inlineCode",{parentName:"li"},"isochrone"),", a string in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"duration|mode")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"15|car")," for 15 minutes driving). Ignored for type ",(0,r.kt)("inlineCode",{parentName:"li"},"polygon"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"coordinates")),": A JSON string representing a center in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"[longitude,latitude]")," for type ",(0,r.kt)("inlineCode",{parentName:"li"},"circle"),". A JSON string representing a closed ring of between 4 and 10,000 coordinates in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"[[longitude0, latitude0],[longitude1,latitude1],[longitude2,latitude2],...,[longitude0,latitude0]]")," for type ",(0,r.kt)("inlineCode",{parentName:"li"},"polygon"),". A JSON string representing a destination in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"[longitude,latitude]")," for type ",(0,r.kt)("inlineCode",{parentName:"li"},"isochrone"),". ",(0,r.kt)("strong",{parentName:"li"},"Note that longitude comes before latitude, a GeoJSON convention.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"enabled")),": If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the geofence will generate events. If ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", the geofence will not generate events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"metadata")),": A set of custom key-value pairs for the geofence. A JSON string representing a dictionary with up to 16 keys and values of type string, boolean, or number.")),(0,r.kt)("p",null,"Headers for the columns should be omitted. In other words, the first row of the CSV should correspond to the first geofence."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If a geofence with the specified tag and external ID already exists, it will be updated. If not, it will be created.")),(0,r.kt)("p",null,"For example, to import a circle geofence representing a store and a polygon geofence representing a neighborhood, you could use the following CSV:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Store #123",store,123,circle,50,"[-73.975363,40.783826]",true,"{""parking"":false}"\n"SoHo",neighborhood,soho,polygon,,"[[-73.996973,40.725660],[-73.998282,40.726294],[-74.001072,40.727660],[-74.002853,40.728603],[-74.003282,40.727936],[-74.003840,40.726310],[-74.004226,40.725351],[-74.004998,40.723530],[-74.005191,40.722993],[-74.005556,40.722115],[-74.004462,40.721334],[-74.001908,40.719496],[-73.999827,40.718016],[-73.997467,40.720863],[-73.997016,40.722212],[-73.996501,40.723497],[-73.995750,40.724278],[-73.995128,40.725107],[-73.996973,40.725660]]",true,\n"15 minutes driving to Disney World","car-15",disney,isochrone,15|car,"[-81.563874,28.385233]",true,"{""type"":""resort""}"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Again, note that longitude comes before latitude, a GeoJSON convention.")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"You can also create geofences programmatically via the ",(0,r.kt)("a",{parentName:"p",href:"/api"},"API"),". You can create a geofence via ",(0,r.kt)("span",{className:"badge badge--info"},"POST")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/geofences"),", or upsert a geofence based on tag and external ID via ",(0,r.kt)("span",{className:"badge badge--warning"},"PUT")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/geofences/:tag/:externalId"),"."),(0,r.kt)("p",null,"For example, to upsert a geofence representing a store via the ",(0,r.kt)("a",{parentName:"p",href:"/api"},"API"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://api.radar.io/v1/geofences/store/123 \\\n    -H "Authorization: prj_live_sk_8ca5fdbe82ab7d49a1ca5c3f" \\\n    -X PUT \\\n    -d "description=Store #123" \\\n    -d "type=circle" \\\n    -d "coordinates=[-73.975363,40.783826]" \\\n    -d "radius=100"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Again, note that longitude comes before latitude, a GeoJSON convention.")),(0,r.kt)("h3",{id:"geofence-sync"},"Geofence sync"),(0,r.kt)("p",null,"Finally, you can sync geofences nightly from a CSV."),(0,r.kt)("p",null,"On the Radar ",(0,r.kt)("a",{parentName:"p",href:"/integrations"},"Integrations page")," under ",(0,r.kt)("em",{parentName:"p"},"Geofence Sync"),", set ",(0,r.kt)("em",{parentName:"p"},"Enabled")," to ",(0,r.kt)("em",{parentName:"p"},"Yes"),". Enter a ",(0,r.kt)("em",{parentName:"p"},"Notification Email")," to receive success and failure confirmation emails. Then, choose a ",(0,r.kt)("em",{parentName:"p"},"Protocol"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose ",(0,r.kt)("em",{parentName:"li"},"HTTP")," for geofence CSVs at public HTTP or HTTPS URLs. Enter the URLs of the geofence CSVs."),(0,r.kt)("li",{parentName:"ul"},"Or, choose ",(0,r.kt)("em",{parentName:"li"},"AWS S3")," for geofence CSVs in a private S3 bucket. Enter an S3 bucket region, S3 bucket name, and the S3 object keys of the geofence CSVs. Finally, enter the AWS access key ID and secret access key of an IAM user with ",(0,r.kt)("inlineCode",{parentName:"li"},"GetObject")," permissions for the specified S3 bucket and objects.")),(0,r.kt)("p",null,"Note that you can set separate CSVs for the ",(0,r.kt)("em",{parentName:"p"},"Test")," and ",(0,r.kt)("em",{parentName:"p"},"Live")," environments."),(0,r.kt)("p",null,"The geofence sync CSV format is the same as the ",(0,r.kt)("a",{parentName:"p",href:"/geofences#csv-import"},"geofence import CSV format"),"."),(0,r.kt)("p",null,"When you click ",(0,r.kt)("em",{parentName:"p"},"Save and Sync"),", Radar will attempt a one-time sync and send an email on success or failure. Radar will then attempt syncs nightly."),(0,r.kt)("h2",{id:"confidence-and-accuracy"},"Confidence and accuracy"),(0,r.kt)("p",null,"All geofence events have confidence levels. Confidence levels range from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (low) to ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," (high). Confidence is a function of the accuracy of the location reported by the device and the geometry of the geofence."),(0,r.kt)("p",null,"Confidence will be high when the user, taking into account the accuracy of the location reported by the device, is completely inside the geofence. Confidence will be medium when the user is mostly inside the geofence. Confidence will be low when the user is only partially inside the geofence."),(0,r.kt)("p",null,"The smaller the geofence and the less accurate the location reported by the device, the lower the confidence. You can create geofences as small as a 10 meter radius for circles and 1,000 square meters for polygons."),(0,r.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/cszDUh5NBGi6lBpslnH67/cc29547e9e38cee37d325814a6f4f589/confidence.png",className:"hero-image"}),(0,r.kt)("p",null,"You may decide to ignore some events based on confidence levels."),(0,r.kt)("h2",{id:"stop-detection"},"Stop detection"),(0,r.kt)("p",null,"When ",(0,r.kt)("em",{parentName:"p"},"Geofence Stop Detection")," is on, Radar can understand the difference between a user walking or driving through a geofence and stopping in a geofence, and will only generate a geofence entry event when a user stops in a geofence (i.e., when ",(0,r.kt)("inlineCode",{parentName:"p"},"stopped")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," based on ",(0,r.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options")," or when ",(0,r.kt)("inlineCode",{parentName:"p"},"foreground")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("p",null,"Turn on ",(0,r.kt)("em",{parentName:"p"},"Geofence Stop Detection")," at a project level on the ",(0,r.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/settings"},"Settings page"),", under ",(0,r.kt)("em",{parentName:"p"},"Geofences"),"."),(0,r.kt)("h2",{id:"buffer-entries-and-exits"},"Buffer Entries and Exits"),(0,r.kt)("p",null,"When ",(0,r.kt)("em",{parentName:"p"},"Buffer Entries")," is on, Radar will use the accuracy of the location reported to determine overlap with the geofence boundary to generate a geofence entry event. See the ",(0,r.kt)("a",{parentName:"p",href:"/geofences#confidence-and-accuracy"},"confidence and accuracy")," for more on this detection logic. When off, the location reported will need to fall within the boundaries of the geofence to trigger the entry event."),(0,r.kt)("p",null,"When ",(0,r.kt)("em",{parentName:"p"},"Buffer Exits")," is on, Radar will use the accuracy of the location reported as a buffering distance from geofence edge before generating a geofence exit event. This buffering minimizes premature exit detection.  When off, the first location reported falling outside the boundaries of a geofence will trigger the exit event."))}d.isMDXComponent=!0}}]);