"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5878],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4120:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i={title:"Olo"},l=void 0,c={unversionedId:"integrations/olo",id:"integrations/olo",isDocsHomePage:!1,title:"Olo",description:"Radar can start and stop trips for customer arrival tracking when orders are placed, fired, cancelled, or closed in Olo.",source:"@site/docs/integrations/olo.mdx",sourceDirName:"integrations",slug:"/integrations/olo",permalink:"/documentation/integrations/olo",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/integrations/olo.mdx",tags:[],version:"current",frontMatter:{title:"Olo"},sidebar:"defaultSidebar",previous:{title:"Brandify",permalink:"/documentation/integrations/brandify"},next:{title:"Toolkit",permalink:"/documentation/toolkit"}},p=[{value:"Configuration",id:"configuration",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Radar can ",(0,o.kt)("a",{parentName:"p",href:"/trip-tracking"},"start and stop trips")," for customer arrival tracking when orders are placed, fired, cancelled, or closed in ",(0,o.kt)("a",{parentName:"p",href:"https://www.olo.com"},"Olo"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Ask your Olo account manager to enable a Radar webhook. When order events are triggered in Olo, Olo will call the Radar webhook. Copy your brand ID and secret key from Olo."),(0,o.kt)("p",null,"Then, on the Radar ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/integrations"},"Integrations page")," under ",(0,o.kt)("em",{parentName:"p"},"Olo"),", set ",(0,o.kt)("em",{parentName:"p"},"Enabled")," to ",(0,o.kt)("em",{parentName:"p"},"Yes")," and paste your brand ID and secret key. Enter a destination geofence tag (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"restaurant"),") and optionally map fields from the Olo webhook body to Radar trip metadata. Select the Olo order events that should trigger trip start and trip stop events."),(0,o.kt)("p",null,"Finally, on the Radar ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard/geofences"},"Geofences page"),", ",(0,o.kt)("a",{parentName:"p",href:"/geofences"},"import geofences")," for your restaurants. For tag, use the specified destination geofence tag. For external ID, use the store number from Olo."),(0,o.kt)("p",null,"Based on your settings, Radar will start and stop trips when orders are placed, fired, cancelled, or closed in Olo. You will need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.startTracking()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.stopTracking()")," to start and stop location tracking in your app when a trip is in progress, but you will not need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.startTrip()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.stopTrip()")," when the integration is enabled."),(0,o.kt)("p",null,"Assuming the customer has granted location permissions and assuming location tracking has been started in your app, Radar will generate location-based ",(0,o.kt)("inlineCode",{parentName:"p"},"user.approaching_trip_destination")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user.arrived_at_trip_destination")," events and calculate live ETAs to the restaurant for each order. Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/trip-tracking"},"Trip Tracking"),"."))}d.isMDXComponent=!0}}]);