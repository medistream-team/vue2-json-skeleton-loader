(function(e){function t(t){for(var s,o,r=t[0],c=t[1],d=t[2],l=0,p=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},i=[];function o(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-0b65ffb6":"b013156c","chunk-2d0a3577":"6d7c8e42","chunk-2d0a43df":"edc4989f","chunk-2d0aa90c":"07c7ea69","chunk-2d0aab07":"4bc4e88a","chunk-2d0abc00":"1469fd22","chunk-2d0ae937":"3c41d683","chunk-2d0aeb45":"0ec15d50","chunk-2d0af08c":"01a6d3c6","chunk-2d0afa49":"b4e48d94","chunk-2d0b2762":"4a6f4bb1","chunk-2d0b6187":"00337985","chunk-2d0ba136":"12d1142c","chunk-2d0bb267":"77d06824","chunk-2d0bcec1":"86feb86e","chunk-2d0bdf38":"3ddb9e3f","chunk-2d0bff92":"55de1f52","chunk-2d0c0494":"5adc358b","chunk-2d0c0a09":"0c66081a","chunk-2d0c4313":"bf31e4d3","chunk-2d0c46d1":"6ac88c30","chunk-2d0c512b":"899f04c9","chunk-2d0cf16e":"ca888ecf","chunk-2d0d056d":"b0eb18bb","chunk-2d0d0645":"40459d42","chunk-2d0d2f22":"3ee31235","chunk-2d0d61fd":"a4ed14e0","chunk-2d0d7e63":"2ea8c91e","chunk-2d0e1b57":"71c91d9f","chunk-2d0e1fbe":"cbdee0aa","chunk-2d0e22d6":"a86c6457","chunk-2d0e542a":"02a326d7","chunk-2d0e57ec":"c147ec55","chunk-2d0e6553":"f5e48f57","chunk-2d0e6c86":"e50be0c0","chunk-2d0ea098":"ae6d826a","chunk-2d0f0a11":"631d5885","chunk-2d208ac5":"8cbdecb5","chunk-2d209408":"7f232250","chunk-2d20f745":"221e7d58","chunk-2d20ff23":"d9a0988d","chunk-2d2138c7":"24ea1d8b","chunk-2d216f3b":"fa4e018c","chunk-2d217e5b":"5bc6713d","chunk-2d21b84a":"ee0eb6f0","chunk-2d21dcd2":"cb55af11","chunk-2d21f327":"f28acdef","chunk-2d2214b3":"3a990375","chunk-2d221799":"9b6ea1f4","chunk-2d221814":"58381938","chunk-2d221a34":"87ff53be","chunk-2d22502a":"d00f7b1c","chunk-2d226775":"655c4b65","chunk-2d229411":"02f133ef","chunk-2d2295e9":"8eaff5ce","chunk-2d22c171":"d2dd748f","chunk-2d22c2b8":"5a2624eb","chunk-2d22ca58":"d5ac07ae","chunk-2d2311f7":"f859bdaf","chunk-2d237ee7":"80a733f8","chunk-2d238465":"197b0da9","chunk-30597b4a":"5f5ecd55","chunk-7532b3ea":"52ca9e9b","chunk-e13e4362":"8cb669bc"}[e]+".js"}function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,s){n=a[e]=[t,s]}));t.push(n[2]=s);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(e);var d=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"000f":function(e,t,n){"use strict";n("a012")},"518d":function(e,t,n){e.exports=n.p+"img/symbol.fb942c25.svg"},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e._m(0),t("section",{staticClass:"example-hero"},[t("div",[t("VSkeletonLoader",{attrs:{options:{primaryColor:"#ccc",secondaryColor:"#ddd",defaultSizes:{box:100,circle:100}},content:e._f("jsonParse")(e.textInput)}}),t("MonacoEditor",{staticClass:"editor",attrs:{language:"javascript"},model:{value:e.textInput,callback:function(t){e.textInput=t},expression:"textInput"}})],1)]),t("Readme"),t("div",{staticClass:"section"},[t("div",{staticClass:"contain"},[t("h2",[e._v("Examples")]),t("h3",[e._v("Text with thumbnail")]),t("div",{staticClass:"group"},[t("VSkeletonLoader",{staticClass:"sk",attrs:{content:e._f("jsonParse")(e.textInput1)}}),t("MonacoEditor",{staticClass:"editor",attrs:{language:"javascript"},model:{value:e.textInput1,callback:function(t){e.textInput1=t},expression:"textInput1"}})],1),t("h3",[e._v("Text with avatar")]),t("div",{staticClass:"group"},[t("VSkeletonLoader",{staticClass:"sk",attrs:{content:e._f("jsonParse")(e.textInput2)}}),t("MonacoEditor",{staticClass:"editor",attrs:{language:"javascript"},model:{value:e.textInput2,callback:function(t){e.textInput2=t},expression:"textInput2"}})],1),t("h3",[e._v("Text with figure")]),t("div",{staticClass:"group"},[t("VSkeletonLoader",{staticClass:"sk",attrs:{content:e._f("jsonParse")(e.textInput3)}}),t("MonacoEditor",{staticClass:"editor",attrs:{language:"javascript"},model:{value:e.textInput3,callback:function(t){e.textInput3=t},expression:"textInput3"}})],1),t("div",{staticClass:"group"},[t("VSkeletonLoader",{staticClass:"sk",attrs:{content:e._f("jsonParse")(e.textInput4)}}),t("MonacoEditor",{staticClass:"editor",attrs:{language:"javascript"},model:{value:e.textInput4,callback:function(t){e.textInput4=t},expression:"textInput4"}})],1)])]),t("div",{staticClass:"section section-3"},[t("div",{staticClass:"contain"},[t("h2",[e._v("Properties (options)")]),t("h3",[e._v("Disable animation")]),t("div",{staticClass:"view"},[t("VSkeletonLoader",{attrs:{options:{animate:!1,defaultSizes:{box:70,circle:70,title:25,text:15}},content:e.textInput5}}),t("code",[e._v(e._s('<v-skeleton-loader :options="{animate: false}" />'))])],1),t("h3",[e._v("Animation speed")]),t("div",{staticClass:"view"},[t("VSkeletonLoader",{attrs:{options:{speed:"0.5s",defaultSizes:{box:70,circle:70,title:25,text:15}},content:e.textInput5}}),t("code",[e._v(e._s("<v-skeleton-loader :options=\"{speed: '0.5s'}\" />"))])],1),t("h3",[e._v("Radius")]),t("div",{staticClass:"view"},[t("VSkeletonLoader",{attrs:{options:{radius:15,defaultSizes:{box:70,circle:70,title:25,text:15}},content:e.textInput5}}),t("code",[e._v(e._s('<v-skeleton-loader :options="{radius: 15}" />'))])],1),t("h3",[e._v("Colors")]),t("div",{staticClass:"view"},[t("VSkeletonLoader",{attrs:{options:{primaryColor:"#ffb0b0",secondaryColor:"#4c8bf5",defaultSizes:{box:70,circle:70,title:25,text:15}},content:e.textInput5}}),t("code",[e._v(e._s("<v-skeleton-loader :options=\"{primaryColor: '#ffb0b0', secondaryColor: '#4c8bf5'}\" />"))])],1)])]),t("Footer")],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"heading"},[t("img",{attrs:{src:n("518d"),alt:"Vue Skeleton Loader"}}),t("h1",[e._v("Vue Skeleton Loader")]),t("h2",[e._v(" A loader component that can be designed with simple markup. - "),t("a",{attrs:{href:"https://github.com/medistream-team/v-skeleton-loader",target:"_blank"}},[e._v("GitHub")])])])}],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"v-skeleton-loader",class:{animation:e.assignedOptions.animate}},e._l(e.$options.filters.forceToNestedArray(e.content),(function(n,s){return t("div",{key:s,staticClass:"row"},e._l(n,(function(n,s){return t("div",{key:s,staticClass:"col",style:{"flex-grow":(()=>n.indexOf("box")>-1||n.indexOf("circle")>-1?0:1)()}},["blank"===n?[e._m(0,!0)]:e._e(),n.includes("title")?[t("span",{staticClass:"elements"},[t("span",{staticClass:"element title",style:{height:e.assignedOptions.defaultSizes.title+"px",borderRadius:e.assignedOptions.radius+"px",backgroundColor:e.assignedOptions.primaryColor,"--secondaryColor":e.assignedOptions.secondaryColor,"--speed":e.assignedOptions.speed}})])]:e._e(),n.includes("text")?[t("span",{staticClass:"elements"},e._l(e.parseTextChildren(n),(function(n,s){return t("span",{key:s,staticClass:"element text",style:{height:e.assignedOptions.defaultSizes.text+"px",borderRadius:e.assignedOptions.radius+"px",backgroundColor:e.assignedOptions.primaryColor,"--secondaryColor":e.assignedOptions.secondaryColor,"--speed":e.assignedOptions.speed}})})),0)]:e._e(),n.includes("box")?[t("span",{staticClass:"elements"},[t("span",{staticClass:"element box",style:{width:(()=>e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).split(":")[1].split("/")[0]+"px":e.assignedOptions.defaultSizes.box+"px":e.parseBoxSize(n).split(":")[1]+"px")(),height:(()=>e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).split(":")[1].split("/")[1]+"px":e.assignedOptions.defaultSizes.box+"px":e.parseBoxSize(n).split(":")[1]+"px")(),borderRadius:e.assignedOptions.radius+"px",backgroundColor:e.assignedOptions.primaryColor,"--secondaryColor":e.assignedOptions.secondaryColor,"--speed":e.assignedOptions.speed}})])]:e._e(),n.includes("circle")?[t("span",{staticClass:"elements"},[t("span",{staticClass:"element circle",style:{width:(()=>e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).split(":")[1].split("/")[0]+"px":e.assignedOptions.defaultSizes.circle+"px":e.parseBoxSize(n).split(":")[1]+"px")(),height:(()=>e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).includes("/")?e.parseBoxSize(n).split(":")[1].split("/")[1]+"px":e.assignedOptions.defaultSizes.circle+"px":e.parseBoxSize(n).split(":")[1]+"px")(),borderRadius:e.assignedOptions.circleRadius+"%",backgroundColor:e.assignedOptions.primaryColor,"--secondaryColor":e.assignedOptions.secondaryColor,"--speed":e.assignedOptions.speed}})])]:e._e()],2)})),0)})),0)},r=[function(){var e=this,t=e._self._c;return t("span",{staticClass:"elements"},[t("span",{staticClass:"element blank"})])}],c=(n("14d9"),{name:"VSkeletonLoader",props:{content:{type:Array,default:function(){return["box","text:2"]}},options:{type:Object}},data(){return{defaultOptions:{radius:3,primaryColor:"#ddd",secondaryColor:"rgba(255, 255, 255, 0.5)",animate:!0,speed:"1.5s",defaultSizes:{box:50,circle:50,title:20,text:10}}}},computed:{assignedOptions:function(){const e=this.options||{},t=this.defaultOptions;let n={radius:e["radius"]||t.radius,primaryColor:e["primaryColor"]||t.primaryColor,secondaryColor:e["secondaryColor"]||t.secondaryColor,animate:void 0!==e["animate"]?e["animate"]:t.animate,speed:e["speed"]||t.speed,defaultSizes:{box:e["defaultSizes"]&&e["defaultSizes"]["box"]?e["defaultSizes"]["box"]:t.defaultSizes.box,circle:e["defaultSizes"]&&e["defaultSizes"]["circle"]?e["defaultSizes"]["circle"]:t.defaultSizes.circle,title:e["defaultSizes"]&&e["defaultSizes"]["title"]?e["defaultSizes"]["title"]:t.defaultSizes.title,text:e["defaultSizes"]&&e["defaultSizes"]["text"]?e["defaultSizes"]["text"]:t.defaultSizes.text}};return n}},filters:{forceToNestedArray:function(e){return Array.isArray(e)&&!Array.isArray(e[0])?[e]:e}},methods:{parseTextChildren:function(e){if(e.includes(":")){const t=e.split(":")[0],n=e.split(":")[1];let s=[];for(let e=0;e<n;e++)s.push(t);return s}return e},parseBoxSize:function(e){return e.includes(":")?e:e+":"+this.assignedOptions.defaultSizes.box},parseCircleSize:function(e){return e.includes(":")?e:e+":"+this.assignedOptions.defaultSizes.circle}}}),d=c,l=(n("bc6d"),n("2877")),u=Object(l["a"])(d,o,r,!1,null,null,null),p=u.exports,f=function(){var e=this;e._self._c;return e._m(0)},h=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"readmeContainer"},[t("div",{staticClass:"title"},[t("h2",[e._v("Getting Started")]),t("h3",[e._v("Installation")])]),t("div",{staticClass:"codeBorder"},[t("div",{staticClass:"codePadding"},[t("code",[e._v("npm i "),t("span",[e._v("v-skeleton-loader")])])])]),t("div",{staticClass:"codeBorder"},[t("div",{staticClass:"codePadding"},[t("code",[e._v("import "),t("span",[e._v("VSkeletonLoader")]),e._v(" from "),t("span",[e._v("'v-skeleton-loader'")]),t("br"),t("span",[e._v("Vue.use")]),e._v("("),t("span",[e._v("VSkeletonLoader")]),e._v(")")])])])])}],b={name:"Readme"},x=b,k=(n("000f"),Object(l["a"])(x,f,h,!1,null,null,null)),v=k.exports,m=function(){var e=this;e._self._c;return e._m(0)},g=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("p",[e._v(" Copyright © 2022. Built by INTEGRATION Corp."),t("br"),e._v(" This project is distributed under MIT license. ")])])}],C=(n("5866"),{}),S=Object(l["a"])(C,m,g,!1,null,null,null),_=S.exports,y=n("059c"),O={name:"App",components:{VSkeletonLoader:p,Readme:v,Footer:_,MonacoEditor:y["a"]},data(){return{textInput:'[\n  ["box", "title + text:3"],\n  ["text:2"]\n]',textInput1:JSON.stringify([["box","text:2"]],null,2),textInput2:JSON.stringify([["circle","text:2"]],null,2),textInput3:JSON.stringify([["box:120/90","title + text:3"]],null,2),textInput4:JSON.stringify([["box:90/120","title + text:5"]],null,2),textInput5:[["box","text:3"]]}},filters:{jsonParse:function(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return[]}}}},z=O,I=(n("586a"),Object(l["a"])(z,a,i,!1,null,null,null)),j=I.exports,w={install(e,t={}){e.component(t.componentName||"VSkeletonLoader",p)}};s["a"].config.productionTip=!1,s["a"].use(w),new s["a"]({render:e=>e(j)}).$mount("#app")},5866:function(e,t,n){"use strict";n("c827")},"586a":function(e,t,n){"use strict";n("a5a5")},"5c12":function(e,t,n){},a012:function(e,t,n){},a5a5:function(e,t,n){},bc6d:function(e,t,n){"use strict";n("5c12")},c827:function(e,t,n){}});
//# sourceMappingURL=app.2df4667a.js.map