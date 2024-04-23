(()=>{var e,t={3676:(e,t,r)=>{"use strict";r.r(t);var l=r(9196);const n=window.wp.blocks;var a=r(444);const o=(0,l.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},(0,l.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,l.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}));var i=r(2911),s=r(3849),c=r.n(s);const u=window.wp.blockEditor;var m=r(5736),p=r(4333);r(9578);const d=(0,p.withInstanceId)((({className:e,headingLevel:t,onChange:r,heading:n,instanceId:a})=>{const o=`h${t}`;return(0,l.createElement)(o,{className:e},(0,l.createElement)("label",{className:"screen-reader-text",htmlFor:`block-title-${a}`},(0,m.__)("Block title","woocommerce")),(0,l.createElement)(u.PlainText,{id:`block-title-${a}`,className:"wc-block-editor-components-title",value:n,onChange:r,style:{backgroundColor:"transparent"}}))})),y=window.wp.components,g=window.wc.wcBlocksData,f=window.wp.data;var w=r(9307),b=r(9127),h=r.n(b);const _=(0,w.createContext)("page"),v=(_.Provider,(e,t,r)=>{const l=(0,w.useContext)(_);r=r||l;const n=(0,f.useSelect)((l=>l(g.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:a}=(0,f.useDispatch)(g.QUERY_STATE_STORE_KEY);return[n,(0,w.useCallback)((t=>{a(r,e,t)}),[r,e,a])]}),k=window.wc.wcSettings,E=window.wc.blocksComponents,S=e=>"boolean"==typeof e,C=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function N(e,t){return C(e)&&t in e}const O=e=>N(e,"count")&&N(e,"description")&&N(e,"id")&&N(e,"name")&&N(e,"parent")&&N(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,x=e=>N(e,"attribute")&&N(e,"operator")&&N(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every((e=>"string"==typeof e)),A=e=>Array.isArray(e)&&e.every(x),L=window.wp.url,j=(0,k.getSettingWithCoercion)("isRenderingPhpTemplate",!1,S);function T(e){j?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}r(1753);const F=({children:e})=>(0,l.createElement)("div",{className:"wc-block-filter-title-placeholder"},e);r(7924);const B=(0,k.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(l=t)&&l.attribute_name?{id:parseInt(l.attribute_id,10),name:l.attribute_name,taxonomy:"pa_"+l.attribute_name,label:l.attribute_label}:null;var l;return r&&r.id&&e.push(r),e}),[]),P=window.wc.priceFormat;var R=r(6860);const Q=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?(0,m.sprintf)(/* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
(0,m.__)("Between %1$s and %2$s","woocommerce"),(0,P.formatPrice)(e),(0,P.formatPrice)(t)):Number.isFinite(e)?(0,m.sprintf)(/* translators: %s min price */ /* translators: %s min price */
(0,m.__)("From %s","woocommerce"),(0,P.formatPrice)(e)):(0,m.sprintf)(/* translators: %s max price */ /* translators: %s max price */
(0,m.__)("Up to %s","woocommerce"),(0,P.formatPrice)(t)),$=({type:e,name:t,prefix:r="",removeCallback:n=(()=>null),showLabel:a=!0,displayStyle:o})=>{const s=r?(0,l.createElement)(l.Fragment,null,r," ",t):t,c=(0,m.sprintf)(/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */ /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
(0,m.__)("Remove %s filter","woocommerce"),t);return(0,l.createElement)("li",{className:"wc-block-active-filters__list-item",key:e+":"+t},a&&(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},e+": "),"chips"===o?(0,l.createElement)(E.RemovableChip,{element:"span",text:s,onRemove:n,radius:"large",ariaLabel:c}):(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-name"},(0,l.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:n},(0,l.createElement)(i.Z,{className:"wc-block-components-chip__remove-icon",icon:R.Z,size:16}),(0,l.createElement)(E.Label,{screenReaderLabel:c})),s))},M=(...e)=>{if(!window)return;const t=window.location.href,r=(0,L.getQueryArgs)(t),l=(0,L.removeQueryArgs)(t,...Object.keys(r));e.forEach((e=>{if("string"==typeof e)return delete r[e];if("object"==typeof e){const t=Object.keys(e)[0],l=r[t].toString().split(",");r[t]=l.filter((r=>r!==e[t])).join(",")}}));const n=Object.fromEntries(Object.entries(r).filter((([,e])=>e)));T((0,L.addQueryArgs)(l,n))},W=["min_price","max_price","rating_filter","filter_","query_type_"],I=e=>{let t=!1;for(let r=0;W.length>r;r++){const l=W[r];if(l===e.substring(0,l.length)){t=!0;break}}return t};function D(e){const t=(0,w.useRef)(e);return h()(e,t.current)||(t.current=e),t.current}const V=window.wp.htmlEntities;var z=r(4167);const Y=({attributeObject:e,slugs:t=[],operator:r="in",displayStyle:n,isLoadingCallback:a})=>{const{results:o,isLoading:i}=(e=>{const{namespace:t,resourceName:r,resourceValues:l=[],query:n={},shouldSelect:a=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const o=(0,w.useRef)({results:[],isLoading:!0}),i=D(n),s=D(l),c=(()=>{const[,e]=(0,w.useState)();return(0,w.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,f.useSelect)((e=>{if(!a)return null;const l=e(g.COLLECTIONS_STORE_KEY),n=[t,r,i,s],o=l.getCollectionError(...n);if(o){if(!(o instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");c(o)}return{results:l.getCollection(...n),isLoading:!l.hasFinishedResolution("getCollection",n)}}),[t,r,s,i,a]);return null!==u&&(o.current=u),o.current})({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[e.id]}),[s,c]=v("attributes",[]);if((0,w.useEffect)((()=>{a(i)}),[i,a]),!(Array.isArray(o)&&(u=o,Array.isArray(u)&&u.every(O))&&A(s)))return null;var u;const p=e.label,d=(0,k.getSettingWithCoercion)("isRenderingPhpTemplate",!1,S);return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},p,":"),(0,l.createElement)("ul",null,t.map(((t,a)=>{const u=o.find((e=>e.slug===t));if(!u)return null;let y="";return a>0&&"and"===r&&(y=(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},(0,m.__)("All","woocommerce"))),$({type:p,name:(0,V.decodeEntities)(u.name||t),prefix:y,isLoading:i,removeCallback:()=>{const r=s.find((({attribute:t})=>t===`pa_${e.name}`));1===(null==r?void 0:r.slug.length)?M(`query_type_${e.name}`,`filter_${e.name}`):M({[`filter_${e.name}`]:t}),d||((e=[],t,r,l="")=>{const n=e.filter((e=>e.attribute===r.taxonomy)),a=n.length?n[0]:null;if(!(a&&a.slug&&Array.isArray(a.slug)&&a.slug.includes(l)))return;const o=a.slug.filter((e=>e!==l)),i=e.filter((e=>e.attribute!==r.taxonomy));o.length>0&&(a.slug=o.sort(),i.push(a)),t((0,z.DY)(i).asc("attribute"))})(s,c,e,t)},showLabel:!1,displayStyle:n})}))))},q=({displayStyle:e,isLoading:t})=>t?(0,l.createElement)(l.Fragment,null,[...Array("list"===e?2:3)].map(((t,r)=>(0,l.createElement)("li",{className:"list"===e?"show-loading-state-list":"show-loading-state-chips",key:r},(0,l.createElement)("span",{className:"show-loading-state__inner"}))))):null,G=(0,w.createContext)({}),U=({attributes:e,isEditor:t=!1})=>{const r=(()=>{const{wrapper:e}=(0,w.useContext)(G);return t=>{e&&e.current&&(e.current.hidden=!t)}})(),n=function(){const e=(0,w.useRef)(!1);return(0,w.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,w.useCallback)((()=>e.current),[])}()(),a=(0,k.getSettingWithCoercion)("isRenderingPhpTemplate",!1,S),[o,i]=(0,w.useState)(!0),s=(()=>{if(!window)return!1;const e=window.location.href,t=(0,L.getQueryArgs)(e),r=Object.keys(t);let l=!1;for(let e=0;r.length>e;e++){const t=r[e];if(I(t)){l=!0;break}}return l})()&&!t&&o,[u,p]=v("attributes",[]),[d,y]=v("stock_status",[]),[g,f]=v("min_price"),[b,h]=v("max_price"),[_,N]=v("rating"),O=(0,k.getSetting)("stockStatusOptions",[]),x=(0,k.getSetting)("attributes",[]),j=(0,w.useMemo)((()=>{if(s||0===d.length||(t=d,!Array.isArray(t)||!t.every((e=>["instock","outofstock","onbackorder"].includes(e))))||!(e=>C(e)&&Object.keys(e).every((e=>["instock","outofstock","onbackorder"].includes(e))))(O))return null;var t;const r=(0,m.__)("Stock Status","woocommerce");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),(0,l.createElement)("ul",null,d.map((t=>$({type:r,name:O[t],removeCallback:()=>{if(M({filter_stock_status:t}),!a){const e=d.filter((e=>e!==t));y(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[s,O,d,y,e.displayStyle,a]),P=(0,w.useMemo)((()=>s||!Number.isFinite(g)&&!Number.isFinite(b)?null:$({type:(0,m.__)("Price","woocommerce"),name:Q(g,b),removeCallback:()=>{M("max_price","min_price"),a||(f(void 0),h(void 0))},displayStyle:e.displayStyle})),[s,g,b,e.displayStyle,f,h,a]),R=(0,w.useMemo)((()=>!A(u)&&n||!u.length&&!(e=>{if(!window)return!1;const t=e.map((e=>`filter_${e.attribute_name}`)),r=window.location.href,l=(0,L.getQueryArgs)(r),n=Object.keys(l);let a=!1;for(let e=0;n.length>e;e++){const r=n[e];if(t.includes(r)){a=!0;break}}return a})(x)?(o&&i(!1),null):u.map((t=>{const r=(e=>{if(e)return B.find((t=>t.taxonomy===e))})(t.attribute);return r?(0,l.createElement)(Y,{attributeObject:r,displayStyle:e.displayStyle,slugs:t.slug,key:t.attribute,operator:t.operator,isLoadingCallback:i}):(o&&i(!1),null)}))),[u,n,x,o,e.displayStyle]);(0,w.useEffect)((()=>{var e;if(!a)return;if(_.length&&_.length>0)return;const t=null===("rating_filter",e=window?(0,L.getQueryArg)(window.location.href,"rating_filter"):null)||void 0===e?void 0:e.toString();t&&N(t.split(","))}),[a,_,N]);const W=(0,w.useMemo)((()=>{if(s||0===_.length||(t=_,!Array.isArray(t)||!t.every((e=>["1","2","3","4","5"].includes(e)))))return null;var t;const r=(0,m.__)("Rating","woocommerce");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),(0,l.createElement)("ul",null,_.map((t=>$({type:r,name:(0,m.sprintf)(/* translators: %s is referring to the average rating value */ /* translators: %s is referring to the average rating value */
(0,m.__)("Rated %s out of 5","woocommerce"),t),removeCallback:()=>{if(M({rating_filter:t}),!a){const e=_.filter((e=>e!==t));N(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[s,_,N,e.displayStyle,a]);if(!s&&!(u.length>0||d.length>0||_.length>0||Number.isFinite(g)||Number.isFinite(b))&&!t)return r(!1),null;const D=`h${e.headingLevel}`,V=(0,l.createElement)(D,{className:"wc-block-active-filters__title"},e.heading),z=s?(0,l.createElement)(F,null,V):V;if(!(0,k.getSettingWithCoercion)("hasFilterableProducts",!1,S))return r(!1),null;r(!0);const U=c()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===e.displayStyle,"wc-block-active-filters--loading":s});return(0,l.createElement)(l.Fragment,null,!t&&e.heading&&z,(0,l.createElement)("div",{className:"wc-block-active-filters"},(0,l.createElement)("ul",{className:U},t?(0,l.createElement)(l.Fragment,null,$({type:(0,m.__)("Size","woocommerce"),name:(0,m.__)("Small","woocommerce"),displayStyle:e.displayStyle}),$({type:(0,m.__)("Color","woocommerce"),name:(0,m.__)("Blue","woocommerce"),displayStyle:e.displayStyle})):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(q,{isLoading:s,displayStyle:e.displayStyle}),P,j,R,W)),s?(0,l.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):(0,l.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=(0,L.getQueryArgs)(e),r=(0,L.removeQueryArgs)(e,...Object.keys(t)),l=Object.fromEntries(Object.keys(t).filter((e=>!I(e))).map((e=>[e,t[e]])));T((0,L.addQueryArgs)(r,l))})(),a||(f(void 0),h(void 0),p([]),y([]),N([]))}},(0,l.createElement)(E.Label,{label:(0,m.__)("Clear All","woocommerce"),screenReaderLabel:(0,m.__)("Clear All Filters","woocommerce")}))))};r(3190);const K=({clientId:e,setAttributes:t,filterType:r,attributes:a})=>{const{replaceBlock:o}=(0,f.useDispatch)("core/block-editor"),{heading:i,headingLevel:s}=a;if((0,f.useSelect)((t=>{const{getBlockParentsByBlockName:r}=t("core/block-editor");return r(e,"woocommerce/filter-wrapper").length>0}),[e])||!r)return null;const c=[(0,l.createElement)(y.Button,{key:"convert",onClick:()=>{const l=[(0,n.createBlock)(`woocommerce/${r}`,{...a,heading:""})];i&&""!==i&&l.unshift((0,n.createBlock)("core/heading",{content:i,level:null!=s?s:2})),o(e,(0,n.createBlock)("woocommerce/filter-wrapper",{heading:i,filterType:r},[...l])),t({heading:"",lock:{remove:!0}})},variant:"primary"},(0,m.__)("Upgrade block","woocommerce"))];return(0,l.createElement)(u.Warning,{actions:c},(0,m.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woocommerce"))},H=(0,y.withSpokenMessages)((({attributes:e,setAttributes:t,clientId:r})=>{const{className:n,displayStyle:a,heading:o,headingLevel:i}=e,s=(0,u.useBlockProps)({className:n});return(0,l.createElement)("div",{...s},(0,l.createElement)(u.InspectorControls,{key:"inspector"},(0,l.createElement)(y.PanelBody,{title:(0,m.__)("Display Settings","woocommerce")},(0,l.createElement)(y.__experimentalToggleGroupControl,{label:(0,m.__)("Display Style","woocommerce"),value:a,onChange:e=>t({displayStyle:e}),className:"wc-block-active-filter__style-toggle"},(0,l.createElement)(y.__experimentalToggleGroupControlOption,{value:"list",label:(0,m.__)("List","woocommerce")}),(0,l.createElement)(y.__experimentalToggleGroupControlOption,{value:"chips",label:(0,m.__)("Chips","woocommerce")})))),(0,l.createElement)(K,{attributes:e,clientId:r,setAttributes:t,filterType:"active-filters"}),o&&(0,l.createElement)(d,{className:"wc-block-active-filters__title",headingLevel:i,heading:o,onChange:e=>t({heading:e})}),(0,l.createElement)(y.Disabled,null,(0,l.createElement)(U,{attributes:e,isEditor:!0})))})),J=JSON.parse('{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Filters Controls","description":"Display the currently active filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false},"lock":false},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),Z={heading:{type:"string",default:(0,m.__)("Active filters","woocommerce")}},X=[{attributes:{...J.attributes,...Z},save:({attributes:e})=>{const{className:t,displayStyle:r,heading:n,headingLevel:a}=e,o={"data-display-style":r,"data-heading":n,"data-heading-level":a};return(0,l.createElement)("div",{...u.useBlockProps.save({className:c()("is-loading",t)}),...o},(0,l.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))}}];(0,n.registerBlockType)(J,{icon:{src:(0,l.createElement)(i.Z,{icon:o,className:"wc-block-editor-components-block-icon"})},attributes:{...J.attributes,...Z},edit:H,save({attributes:e}){const{className:t}=e;return(0,l.createElement)("div",{...u.useBlockProps.save({className:c()("is-loading",t)})},(0,l.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))},deprecated:X})},1753:()=>{},3190:()=>{},7924:()=>{},9578:()=>{},9196:e=>{"use strict";e.exports=window.React},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function l(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,r,n,a)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],i=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(l.O).every((e=>l.O[e](r[s])))?r.splice(s--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=8918,(()=>{var e={8918:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,i,s]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(s)var u=s(l)}for(t&&t(r);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=l.O(void 0,[2869],(()=>l(3676)));n=l.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["active-filters"]=n})();