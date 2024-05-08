"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5171],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(f,i(i({ref:e},p),{},{components:a})):n.createElement(f,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(t,e,a){var n=a(7294);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},1395:function(t,e,a){a.d(e,{Z:function(){return s}});var n=a(7294),r=a(944),o=a(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=function(t){var e,a=t.lazy,s=t.block,u=t.defaultValue,p=t.values,d=t.groupId,c=t.className,m=n.Children.toArray(t.children),f=null!=p?p:m.map((function(t){return{value:t.props.value,label:t.props.label}})),g=null!=u?u:null==(e=m.find((function(t){return t.props.default})))?void 0:e.props.value,k=(0,r.Z)(),h=k.tabGroupChoices,N=k.setTabGroupChoices,v=(0,n.useState)(g),b=v[0],y=v[1],P=[];if(null!=d){var A=h[d];null!=A&&A!==b&&f.some((function(t){return t.value===A}))&&y(A)}var I=function(t){var e=t.currentTarget,a=P.indexOf(e),n=f[a].value;y(n),null!=d&&(N(d,n),setTimeout((function(){var t,a,n,r,o,i,s,u;(t=e.getBoundingClientRect(),a=t.top,n=t.left,r=t.bottom,o=t.right,i=window,s=i.innerHeight,u=i.innerWidth,a>=0&&o<=u&&r<=s&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},w=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=P.indexOf(t.target)+1;a=P[n]||P[0];break;case"ArrowLeft":var r=P.indexOf(t.target)-1;a=P[r]||P[P.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},c)},f.map((function(t){var e=t.value,a=t.label;return n.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":b===e}),key:e,ref:function(t){return P.push(t)},onKeyDown:w,onFocus:I,onClick:I},null!=a?a:e)}))),a?(0,n.cloneElement)(m.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},9443:function(t,e,a){var n=(0,a(7294).createContext)(void 0);e.Z=n},944:function(t,e,a){var n=a(7294),r=a(9443);e.Z=function(){var t=(0,n.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t}},970:function(t,e,a){a.d(e,{Z:function(){return u}});var n=a(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",l="alertTip_1W6d",s="alertSuccess_7EZp",u=function(t){var e=t.children,a=t.alertType;return"warning"===a?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},e):"info"===a?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},e):"tip"===a?n.createElement("div",{className:"alert "+r+" "+l,role:"alert"},e):"success"===a?n.createElement("div",{className:"alert "+r+" "+s,role:"alert"},e):null}},4470:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=(a(1395),a(8215),a(970),{sidebar_position:10,title:"Migrating from Google Maps"}),l=void 0,s={unversionedId:"tutorials/migrate-from-google-maps",id:"tutorials/migrate-from-google-maps",isDocsHomePage:!1,title:"Migrating from Google Maps",description:"Migrating from Google Maps to the Radar Maps Platform is simple, and usually involves just a few lines of code. Find the Google Maps offerings used in your application below and learn about the corresponding cost-effective, developer-friendly Radar alternative.",source:"@site/docs/tutorials/migrate-from-google-maps.mdx",sourceDirName:"tutorials",slug:"/tutorials/migrate-from-google-maps",permalink:"/documentation/tutorials/migrate-from-google-maps",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/tutorials/migrate-from-google-maps.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Migrating from Google Maps"},sidebar:"defaultSidebar",previous:{title:"Logging and analyzing where conversions occur",permalink:"/documentation/tutorials/logging-and-analyzing-where-conversions-occur"},next:{title:"Waypoint",permalink:"/documentation/waypoint"}},u=[{value:"Maps",id:"maps",children:[]},{value:"Places",id:"places",children:[]},{value:"Routes",id:"routes",children:[]},{value:"Support",id:"support",children:[]}],p={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Migrating from Google Maps to the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/maps/overview"},"Radar Maps Platform")," is simple, and usually involves just a few lines of code. Find the Google Maps offerings used in your application below and learn about the corresponding cost-effective, developer-friendly Radar alternative."),(0,o.kt)("h3",{id:"maps"},"Maps"),(0,o.kt)("p",null,"Google's maps offering is used for rendering maps in applications. Radar provides vector ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/maps/maps"},"base maps")," with beautiful out-of-the-box styles as an alternative. Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/maps/maps-explorer/maps"},"maps explorer")," in the dashboard to see them in action."),(0,o.kt)("div",{className:"full-width-table"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Google Maps Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Radar Feature"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dynamic Maps"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/maps/maps"},"Dynamic Maps"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Static Maps"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/maps/static-maps"},"Static Maps")))))),(0,o.kt)("h3",{id:"places"},"Places"),(0,o.kt)("p",null,"Google's Places APIs enable finding and geocoding locations such as addresses and points of interest. Radar's ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/maps/geocoding"},"Geocoding and Search APIs")," provide fully featured geocoding, autocomplete, address validation, and geolocation APIs as an alternative."),(0,o.kt)("div",{className:"full-width-table"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Google Maps API"),(0,o.kt)("th",{parentName:"tr",align:null},"Radar API"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Geocoding API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#forward-geocode"},"Forward Geocoding API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reverse Geocoding API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#reverse-geocode"},"Reverse Geocoding API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#ip-geocode"},"IP Geocoding API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Autocomplete API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#autocomplete"},"Autocomplete API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Place Autocomplete UI"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/maps/autocomplete"},"Autocomplete Component"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Address Validation API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#validate-an-address"},"Address Validation API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Nearby Search API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#search-places"},"Places Search API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Current Place API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#context"},"Context API")))))),(0,o.kt)("h3",{id:"routes"},"Routes"),(0,o.kt)("p",null,"Google's Routes APIs are used to calculate routes between locations or snap to roads. Radar's ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/maps/routing"},"routing APIs")," provide a suite of distance, matrix, directions, route match, and optimize APIs to power these use cases and more."),(0,o.kt)("div",{className:"full-width-table"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Google Maps API"),(0,o.kt)("th",{parentName:"tr",align:null},"Radar API"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Distance Matrix API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#matrix"},"Distance Matrix API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Directions API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#directions"},"Directions API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Snap to Roads API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#route-match"},"Route Matching API"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Speed Limits API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#route-match"},"Route Matching API"),", with ",(0,o.kt)("inlineCode",{parentName:"td"},"speedLimit")," included in the ",(0,o.kt)("inlineCode",{parentName:"td"},"roadAttributes")," parameter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compute Routes API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/documentation/api#matrix"},"Matrix API"),", ",(0,o.kt)("a",{parentName:"td",href:"/documentation/api#directions"},"Directions API"),", or ",(0,o.kt)("a",{parentName:"td",href:"/documentation/api#optimize-route"},"Route Optimization API")))))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions or feedback on migrating from Google Maps to Radar? Let us know! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}d.isMDXComponent=!0},6010:function(t,e,a){function n(t){var e,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(r&&(r+=" "),r+=e);return r}a.d(e,{Z:function(){return r}})}}]);