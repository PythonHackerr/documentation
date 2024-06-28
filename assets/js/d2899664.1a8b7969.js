"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3358],{3919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){a.d(t,{C:function(){return i},Z:function(){return l}});var n=a(2263),r=a(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,p=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(o)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+d:d}(i,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2924:function(e,t,a){var n=a(7294).createContext(void 0);t.Z=n},5350:function(e,t,a){var n=a(7294),r=a(2924);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3148:function(e,t,a){a.d(t,{Z:function(){return M}});var n=a(7462),r=a(7294),i=a(6010),l=a(4544),o=a(195),s=a(7594),p=a.n(s),d=a(3583),m=a(4973),c="codeBlockContainer_2gih",u="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",k="codeBlock_6upA",g="copyButton_2e3i",f="codeBlockLines_xlV7",N=a(941),b=a(8084),y=/{([\d,-]+)}/,C=["js","jsBlock","jsx","python","html"],v={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},w=["highlight-next-line","highlight-start","highlight-end"],A=function(e){void 0===e&&(e=C);var t=e.map((function(e){var t=v[e],a=t.start,n=t.end;return"(?:"+a+"\\s*("+w.join("|")+")\\s*"+n+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function M(e){var t=e.children,a=e.className,s=e.metastring,C=e.title,v=(0,b.usePluginData)("radar-version-injector").radarGitHubReleases,w=(0,N.LU)().prism,M=(0,r.useState)(!1),F=M[0],S=M[1],I=(0,r.useState)(!1),B=I[0],x=I[1];(0,r.useEffect)((function(){x(!0)}),[]);var E=(0,N.bc)(s)||C,G=(0,r.useRef)(null),K=[],T=(0,d.Z)(),H=Array.isArray(t)?t.join(""):t;if(s&&y.test(s)){var D=s.match(y)[1];K=p()(D).filter((function(e){return e>0}))}var R=null==a?void 0:a.replace(/language-/,"");!R&&w.defaultLanguage&&(R=w.defaultLanguage),v&&Object.keys(v).forEach((function(e){H=H.replace(new RegExp("\\$"+e+"\\$","g"),v[e])}));var L=H.replace(/\n$/,"");if(0===K.length&&void 0!==R){for(var J,j="",U=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}}(R),O=H.replace(/\n$/,"").split("\n"),q=0;q<O.length;){var z=q+1,Q=O[q].match(U);if(null!==Q){switch(Q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":j+=z+",";break;case"highlight-start":J=z;break;case"highlight-end":j+=J+"-"+(z-1)+","}O.splice(q,1)}else q+=1}K=p()(j),L=O.join("\n")}var Z=function(){(0,o.Z)(L),S(!0),setTimeout((function(){return S(!1)}),2e3)};return r.createElement(l.ZP,(0,n.Z)({},l.lG,{key:String(B),theme:T,code:L,language:R}),(function(e){var t=e.className,a=e.style,l=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.createElement("div",{className:c},E&&r.createElement("div",{style:a,className:h},E),r.createElement("div",{className:(0,i.Z)(u,R)},r.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,k,"thin-scrollbar"),style:a},r.createElement("code",{className:f},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=o({line:e,key:t});return K.includes(t+1)&&(a.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,n.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},s({token:e,key:t})))})))})))),r.createElement("button",{ref:G,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(g,"clean-btn"),onClick:Z},F?r.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},3710:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var n=a(7462),r=a(3366),i=a(7294),l=a(3905),o=a(3148),s=function(e){var t=e.query,a=e.alt,n=e.imgTag,r=e.hideSnippet,l="https://api.radar.io/maps/static?"+t,s=l+"&publishableKey=prj_live_pk_...",p='<img src="'+s+'" alt="'+a+'" />',d=n?"html":"text",m=!Boolean(r);return i.createElement("div",null,m&&i.createElement(o.Z,{className:d},n?p:s),i.createElement("img",{src:l+"&publishableKey=org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947",alt:a}))},p=(a(4996),{title:"Static Maps"}),d=void 0,m={unversionedId:"maps/static-maps",id:"maps/static-maps",isDocsHomePage:!1,title:"Static Maps",description:"The Radar Static Maps API generates standalone images of Radar Maps that can be easily embedded anywhere an image can be used. These images can be created without the use of Javascript or any additional mapping libraries.",source:"@site/docs/maps/static-maps.mdx",sourceDirName:"maps",slug:"/maps/static-maps",permalink:"/documentation/maps/static-maps",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/static-maps.mdx",tags:[],version:"current",frontMatter:{title:"Static Maps"},sidebar:"defaultSidebar",previous:{title:"Maps",permalink:"/documentation/maps/maps"},next:{title:"Autocomplete",permalink:"/documentation/maps/autocomplete"}},c=[{value:"How it works",id:"how-it-works",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Markers",id:"markers",children:[]},{value:"Paths",id:"paths",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Embedding a Radar Static Map using HTML",id:"embedding-a-radar-static-map-using-html",children:[]},{value:"Autofitting map bounds to markers or paths",id:"autofitting-map-bounds-to-markers-or-paths",children:[]},{value:"Using a custom marker image",id:"using-a-custom-marker-image",children:[]},{value:"Rendering a route",id:"rendering-a-route",children:[]},{value:"Images for high resolution device",id:"images-for-high-resolution-device",children:[]}]},{value:"Coverage",id:"coverage",children:[]},{value:"Support",id:"support",children:[]}],u={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Radar Static Maps API generates standalone images of Radar Maps that can be easily embedded anywhere an image can be used. These images can be created without the use of Javascript or any additional mapping libraries."),(0,l.kt)("p",null,"For example, here's a Radar Static Map displaying a marker for Radar HQ:"),(0,l.kt)(s,{query:"width=910&height=320&center=40.73430,-73.99110&zoom=15&style=radar-default-v1&scale=2&markers=color:0x000257|40.73430,-73.99110",alt:"Radar static map over New York City",imgTag:!0,mdxType:"StaticMap"}),(0,l.kt)("h2",{id:"how-it-works"},"How it works"),(0,l.kt)("p",null,"To generate an image with Radar's Static Maps API, simply make an HTTP request with your desired map size, location, and any markers (map pins) for highlighting important features."),(0,l.kt)("p",null,"Static Map images can be used inline with HTML ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," tags by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," attribute to the Static Maps endpoint."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h4",{id:"definition"},"Definition"),(0,l.kt)("span",{className:"badge badge--success"},"GET")," ",(0,l.kt)("code",null,"https://api.radar.io/maps/static  "),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("div",{className:"full-width-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:null},"none (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The width of the image in pixels as a number between ",(0,l.kt)("inlineCode",{parentName:"td"},"100")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"2048"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:null},"none (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The height of the image in pixels as a number between ",(0,l.kt)("inlineCode",{parentName:"td"},"100")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"2048"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"center")),(0,l.kt)("td",{parentName:"tr",align:null},"none (required, unless markers are provided)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The coordinates specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"latitude,longitude")," format for the center of the map. If ",(0,l.kt)("inlineCode",{parentName:"td"},"center")," is not provided then the map will be centered to visibly fit all markers in view.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"zoom")),(0,l.kt)("td",{parentName:"tr",align:null},"none (required, unless markers are provided)"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"zoom")," position of the map which is a number between ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"23"),". If ",(0,l.kt)("inlineCode",{parentName:"td"},"zoom")," is not provided then the map will fit the view to the markers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scale")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The scale or resolution of the map as a number between ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"3"),". This is useful for high-density displays and will affect the width and height parameters by returning an image that is the product of the width/height and scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"radar-default-v1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"radar-default-v1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"radar-light-v1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"radar-dark-v1")),(0,l.kt)("td",{parentName:"tr",align:null},"The style of the map. See ",(0,l.kt)("a",{parentName:"td",href:"https://radar.com/documentation/maps/maps#styles"},"map styles")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"markers")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"For rendering markers on the map. See ",(0,l.kt)("a",{parentName:"td",href:"#markers"},"markers")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"For rendering paths on the map. See ",(0,l.kt)("a",{parentName:"td",href:"#paths"},"paths")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"publishableKey")),(0,l.kt)("td",{parentName:"tr",align:null},"none (required)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Your Radar publishable API key."))))),(0,l.kt)("h3",{id:"markers"},"Markers"),(0,l.kt)("p",null,"Adding markers (or map pins) to your static images can be useful for highlighting important features on your map. The Static Maps endpoint accepts a ",(0,l.kt)("inlineCode",{parentName:"p"},"markers")," parameter that can be configured for rendering one, or many markers on the map."),(0,l.kt)("p",null,"Each markers parameter is made up of optional ",(0,l.kt)("inlineCode",{parentName:"p"},"markerStyle")," sections, and one or more ",(0,l.kt)("inlineCode",{parentName:"p"},"markerLocations"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"markers=markerStyle|markerLocation1|markerLocation2|...\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"markerLocation")," are specified in the following format ",(0,l.kt)("inlineCode",{parentName:"p"},"latitude,longitude")," and are pipe separated."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"markerStyle")," are specified in the following format ",(0,l.kt)("inlineCode",{parentName:"p"},"optionName:optionValue")," and are pipe separated. ",(0,l.kt)("em",{parentName:"p"},"markerStyle")," have the following options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," (string, optional): The color of the image specified as a hex in the following format ",(0,l.kt)("inlineCode",{parentName:"li"},"0xFFFFFF")," or a ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/named-color"},"standard color"),". The default value if color is not specified is ",(0,l.kt)("inlineCode",{parentName:"li"},"0x000257"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size")," (string, optional): By specifying ",(0,l.kt)("inlineCode",{parentName:"li"},"size:small")," as an option, you can render a scaled down version of the marker."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"icon")," (string, optional): The marker image to use. Can be a URL to valid SVG or PNG file. The default marker image will be used if not provided.")),(0,l.kt)("p",null,"For instance, to apply a single marker styling to multiple pins:"),(0,l.kt)(s,{query:"width=900&height=600&style=radar-light-v1&scale=2&markers=color:0x000257|40.73430,-73.99110|40.706436,-73.997271",alt:"Radar Static Map over New York City",mdxType:"StaticMap"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"Additionally, if you want more than one marker style in an image, you can provide multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"markers")," parameters in the request.\n",(0,l.kt)("inlineCode",{parentName:"p"},"markers=markerStyle1|markerLocation1|...&markers=markerStyle2|markerLocation2|...")),(0,l.kt)("p",null,"An example request with two different styles is defined below."),(0,l.kt)(s,{query:"width=900&height=600&center=37.80176,-122.42376&zoom=13&style=radar-dark-v1&scale=2&markers=color:0xD1F3E0|size:small|37.808387,-122.409673&markers=color:0xBFD1FF|37.822503,-122.478923",alt:"Radar Static Map over San Francisco",mdxType:"StaticMap"}),(0,l.kt)("h3",{id:"paths"},"Paths"),(0,l.kt)("p",null,"Paths lines can be added to higlight routes or connect items on your map. The ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," parameter can be configured for rendering a connected list of coordinates or an encoded polyline."),(0,l.kt)("p",null,"Each paths parameter is made up of optional ",(0,l.kt)("inlineCode",{parentName:"p"},"pathStyle")," sections, an encoded polyline, or one or more ",(0,l.kt)("inlineCode",{parentName:"p"},"pathLocations"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"path=pathStyle|pathLocation1|pathLocation2|...\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"pathLocation")," are specified in the following format ",(0,l.kt)("inlineCode",{parentName:"p"},"latitude,longitude")," and are pipe separated. Locations must come ",(0,l.kt)("em",{parentName:"p"},"after")," the style options."),(0,l.kt)("p",null,"The locations can also be provided via encoded polyline by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"enc:")," as the option (or ",(0,l.kt)("inlineCode",{parentName:"p"},"enc6:")," for a polyline with 6 decimals precision)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"path=pathStyle|enc:g{rwFnlrbMkArDENGRiCfIEJCJHFpA|@VPHFDOBGdC_IFQDO|BiHHUJBb@FxARLBH@\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"pathStyle")," are specified in the following format ",(0,l.kt)("inlineCode",{parentName:"p"},"optionName:optionValue")," and are pipe separated. ",(0,l.kt)("em",{parentName:"p"},"pathStyle")," have the following options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stroke")," (string, optional): The color of the path specified as a hex in the following format ",(0,l.kt)("inlineCode",{parentName:"li"},"0xFFFFFF")," or a ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/named-color"},"standard color"),". The default value if color is not specified is ",(0,l.kt)("inlineCode",{parentName:"li"},"0x000257"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"width")," (number, optional): The width of the path in pixels. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"border")," (string, optional): The color of the path border as a hex in the following format ",(0,l.kt)("inlineCode",{parentName:"li"},"0xFFFFFF")," or a ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/named-color"},"standard color"),". The default value if color is not specified is ",(0,l.kt)("inlineCode",{parentName:"li"},"white"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"borderWidth")," (number, optional): The width of the border in pixels. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"2"),".")),(0,l.kt)(s,{query:"width=900&height=600&style=radar-light-v1&scale=2&path=stroke:0xFF0000|width:3|border:0xFFFFFF|borderwidth:2|40.72508219091827,-73.99710317462564|40.72786608720213,-73.99480170726147|40.731220024434066,-73.99183635508086|40.73289692965673,-73.99117247026444|40.73497623343911,-73.99072988038682|40.73588171638792,-73.98949062872913|40.73708900781568,-73.99024303152117|40.74030834450895,-73.98931359277834|40.74175028854742,-73.98935785176594|40.7455729656383,-73.98860544897387|40.74879189172239,-73.98803008213306|40.75207771805478,-73.98749897427983|40.75368704313985,-73.98718916136541&path=|stroke:0x000257|width:3|border:0xFFFFFF|borderwidth:2|40.755749689929615,-74.00614255328324|40.75061628432047,-74.00834272086787|40.74848280436839,-74.00763866724067|40.7463492559649,-74.0079906940545|40.73881461553785,-74.0098388348253|40.73334646594802,-74.01019086163912|40.72554357194073,-74.01115893537623|40.71854019575176,-74.01274305603714|40.712470007009586,-74.01441518340147|40.70800039341367,-74.01538325713858|40.70499824571482,-74.01679136439253",alt:"Radar Static Map with multiple paths",mdxType:"StaticMap"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"embedding-a-radar-static-map-using-html"},"Embedding a Radar Static Map using HTML"),(0,l.kt)("p",null,"Radar Static Maps can easily be embedded into ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," using the element's ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," attribute. For instance, if we wanted an image of a map with the following attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width"),": 900"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height"),": 600"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"center"),": 43.64259,-79.387087"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"zoom"),": 13"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"radar-default-v1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scale"),": 2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"marker"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"color: ",(0,l.kt)("inlineCode",{parentName:"li"},"0x000257")),(0,l.kt)("li",{parentName:"ul"},"location: 43.64259,-79.387087")))),(0,l.kt)("p",null,"We can specify these options as query parameters in the image ",(0,l.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,l.kt)(s,{query:"width=900&height=600&center=43.64259,-79.387087&zoom=13&style=radar-default-v1&scale=2&markers=color:0x000257|43.64259,-79.387087",alt:"Radar Static Map centered around the CN Tower",mdxType:"StaticMap"}),(0,l.kt)("h3",{id:"autofitting-map-bounds-to-markers-or-paths"},"Autofitting map bounds to markers or paths"),(0,l.kt)("p",null,"When markers or paths are included as part of the Static Image request, you have the option for the ",(0,l.kt)("inlineCode",{parentName:"p"},"center")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zoom")," to automatically be determined based on the items' locations."),(0,l.kt)("p",null,"By omitting the ",(0,l.kt)("inlineCode",{parentName:"p"},"center")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zoom")," parameters, the map's position will be calculated to ensure all markers and paths are visible."),(0,l.kt)(s,{query:"width=900&height=600&style=radar-default-v1&scale=2&markers=color:0xFF428E|40.781196,-73.974075|40.782938,-73.959041&markers=color:0xE2052C|size:small|40.779344,-73.962486|40.76144,-73.977597|40.753664,-73.981905&path=stroke:0x000257|width:3|border:white|borderwidth:2|enc:qwwwF|cqbMIG@CBIMKIEeBiAKIKGeBkAIGMIs@e@q@c@IGKGeBgAKGMIcBiAECECKIGEw@g@c@YKGKIcBiAMIKGIGa@Wy@i@AAIGIEgBkAGESMAAi@]u@g@QKSOiAs@[UOKKGeBeASKHW[EEGOSEKIOEQAMOa@W]WQYQMIKKKKIMUg@COGc@GUIYU]W]]g@MSGGGCGAIAGEGKEKIKIIGGEKEOEOEKEIGIGEQKKEMIQKMIKGCYAOIMCIAG?G@G@K@I?GAI?GMQ?GM_@EUCOCQ?MAK?S?U?K@K@I@I@IBI@IBGBKBGBGDKDIDK@EBIHQDOBSBQ?O?Q?MAOAMAMEOIUEMKSIQGMS]EGMKSMc@UKEWGIESKUMOMSSQWMSKUMYM_@KYKUIWKSEKIMKMGIMMMKWOSMQGQI@G@IF_@QO[SSSMMGEEMCOAS@QD[RaAb@yAJWQKSMkBoAGEKGiBmAIEIGgBkAKGIGiBmAIGMGa@YgAs@IGGEgBkAKGKImAw@]UOKUOk@_@[SIEWQCCCCMGFSj@gB",alt:"Radar Static Map over New York City museums",mdxType:"StaticMap"}),(0,l.kt)("h3",{id:"using-a-custom-marker-image"},"Using a custom marker image"),(0,l.kt)("p",null,"To use a custom marker image, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"icon:")," option as a URL that resolves to a valid ",(0,l.kt)("inlineCode",{parentName:"p"},".png")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".svg")," file."),(0,l.kt)("p",null,"Note: images will be capped at 64 x 64 pixels."),(0,l.kt)(s,{query:"width=900&height=600&style=radar-default-v1&scale=2&markers=icon:https://radar.com/static/image/logo.png|40.73430,-73.99110",alt:"Radar Static Map with custom marker images",mdxType:"StaticMap"}),(0,l.kt)("h3",{id:"rendering-a-route"},"Rendering a route"),(0,l.kt)("p",null,"Radar ",(0,l.kt)("a",{parentName:"p",href:"/documentation/api#routing"},"Routing API")," responses include the shape of the route in either the polyine or LineString format. Both of these formats are supported for rendering a path, which can be used to plot the route in a static image."),(0,l.kt)(s,{query:"width=900&height=600&style=radar-light-v1&scale=2&markers=size:small|icon:https://radar.com/static/image/maps/map-pin-origin@3x.png|40.70425,-73.9865&markers=size:small|icon:https://radar.com/static/image/maps/map-pin-destination@3x.png|40.73412,-73.99128&path=borderwidth:2|border:0xFFFFFF|width:3|stroke:0x000257|enc:g{rwFnlrbMkArDENGRiCfIEJCJHFpA|@VPHFDOBGdC_IFQDO|BiHHUJBb@FxARLBH@l@HbANB?LDJF@@vAfAJHHF|AnAHFHHhA|@RNJJ|@r@LJJFHHh@`@p@h@JJJF~ApAJHFFzAlADDHFJHbAx@^XJHHHrB~ADDBBJFl@f@@@ZVb@%08Av@LJVRBURsAN}@BQ@K?AN_AFWDUPq@BMBKj@wBBMDMh@sBBMBMTy@Pu@BIDQPDd@NnATtBh@`@Ll@NJBD@`Cl@HBFBjBj@D@JBHBTFx@TJDVFTF`@LZAnA`@JBJDlDfALDLD~@`@fAd@hAf@JFHDjBbAJD@@LFj@ZJFVLZQtA}@ZUHGJKHKV]HKFIHIFGJIHGLILGjAg@t|Aks@H?JCJCRIFEHCHCH?FAF@F@HBFDFHDHBJ@L@JALAJCHEFEHE@C@C@I@I?I@G@I@KAc@AeACy@AG?I@KBODIBGBOF}@b@OFBgA?IM?Q?_@Ai@Cs@AI?I@K?yCKK?MAsAC_@AG?IAmBEI?[A",alt:"Radar Static Map with route",mdxType:"StaticMap"}),(0,l.kt)("h3",{id:"images-for-high-resolution-device"},"Images for high resolution device"),(0,l.kt)("p",null,"When embedding images on high resolution devices, images may look blurry (low resolution) or be too small if the image is not scaled to match the device's pixel ratio. "),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"scale")," parameter can be used to increase the resolution of an image, while keeping the same map area visible. For example an image with ",(0,l.kt)("inlineCode",{parentName:"p"},"scale=2")," will return an image that is two times the size, but at the same zoom/area."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://api.radar.io/maps/static?width=200&height=200&center=40.71297,-74.00183&zoom=12&style=radar-default-v1&scale=2&publishableKey=prj_live_pk_...\n")),(0,l.kt)("table",{className:"full-width-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{fontWeight:100}},"200x200 @ 1x scale"),(0,l.kt)("th",{style:{fontWeight:100}},"200x200 @ 2x scale"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)(s,{query:"width=200&height=200&center=40.71297,-74.00183&zoom=12&style=radar-default-v1&scale=1",alt:"Radar Static Map over New York City",hideSnippet:!0,mdxType:"StaticMap"})),(0,l.kt)("td",null,(0,l.kt)(s,{query:"width=200&height=200&center=40.71297,-74.00183&zoom=12&style=radar-default-v1&scale=2",alt:"Radar Static Map over New York City",hideSnippet:!0,mdxType:"StaticMap"}))))),(0,l.kt)("h2",{id:"coverage"},"Coverage"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://radar.com/documentation/maps/maps#coverage"},"Maps coverage")," for more details."),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("p",null,"Have questions? We're here to help! Contact us at ",(0,l.kt)("a",{parentName:"p",href:"https://radar.com/support"},"radar.com/support"),"."))}h.isMDXComponent=!0}}]);