(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{225:function(n,t,e){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var i=e(306),s=i.prepareRequestOptions;i.prepareRequestOptions=function(n,t){t.cancelToken&&"object"===r(t.cancelToken)&&(n.cancelToken=t.cancelToken),s(n,t),t.method&&"string"==typeof t.method&&(n.method=t.method)},n.exports=i},252:function(n,t,e){"use strict";var r=e(305),i=e.n(r),s=e(57),a=e.n(s),o=e(292),c=e.n(o),d=e(15);i.a.getPatcher().patch("request",a.a);var p=Object(d.generateRemoteUrl)("dav"),u=i.a.createClient(p);c()(p).pathname;t.a=u},294:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var r="\n\t<oc:fileid />\n\t<d:getlastmodified />\n\t<d:getetag />\n\t<d:getcontenttype />\n\t<d:getcontentlength />\n\t<nc:has-preview />\n\t<oc:favorite />\n\t<d:resourcetype />";'<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(r,"\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")},296:function(n,t,e){var r=e(151),i=e(679);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);n.exports=i.locals||{}},297:function(n,t,e){var r=e(151),i=e(681);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);n.exports=i.locals||{}},298:function(n,t,e){var r=e(151),i=e(683);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);n.exports=i.locals||{}},322:function(n,t){},323:function(n,t){},332:function(n,t){},333:function(n,t){},353:function(n,t){},355:function(n,t){},356:function(n,t){},359:function(n,t){},360:function(n,t){},365:function(n,t){},366:function(n,t){},373:function(n,t){},376:function(n,t){},382:function(n,t){},385:function(n,t){},677:function(n,t,e){var r={"./af":390,"./af.js":390,"./ar":391,"./ar-dz":392,"./ar-dz.js":392,"./ar-kw":393,"./ar-kw.js":393,"./ar-ly":394,"./ar-ly.js":394,"./ar-ma":395,"./ar-ma.js":395,"./ar-sa":396,"./ar-sa.js":396,"./ar-tn":397,"./ar-tn.js":397,"./ar.js":391,"./az":398,"./az.js":398,"./be":399,"./be.js":399,"./bg":400,"./bg.js":400,"./bm":401,"./bm.js":401,"./bn":402,"./bn-bd":403,"./bn-bd.js":403,"./bn.js":402,"./bo":404,"./bo.js":404,"./br":405,"./br.js":405,"./bs":406,"./bs.js":406,"./ca":407,"./ca.js":407,"./cs":408,"./cs.js":408,"./cv":409,"./cv.js":409,"./cy":410,"./cy.js":410,"./da":411,"./da.js":411,"./de":412,"./de-at":413,"./de-at.js":413,"./de-ch":414,"./de-ch.js":414,"./de.js":412,"./dv":415,"./dv.js":415,"./el":416,"./el.js":416,"./en-au":417,"./en-au.js":417,"./en-ca":418,"./en-ca.js":418,"./en-gb":419,"./en-gb.js":419,"./en-ie":420,"./en-ie.js":420,"./en-il":421,"./en-il.js":421,"./en-in":422,"./en-in.js":422,"./en-nz":423,"./en-nz.js":423,"./en-sg":424,"./en-sg.js":424,"./eo":425,"./eo.js":425,"./es":426,"./es-do":427,"./es-do.js":427,"./es-mx":428,"./es-mx.js":428,"./es-us":429,"./es-us.js":429,"./es.js":426,"./et":430,"./et.js":430,"./eu":431,"./eu.js":431,"./fa":432,"./fa.js":432,"./fi":433,"./fi.js":433,"./fil":434,"./fil.js":434,"./fo":435,"./fo.js":435,"./fr":436,"./fr-ca":437,"./fr-ca.js":437,"./fr-ch":438,"./fr-ch.js":438,"./fr.js":436,"./fy":439,"./fy.js":439,"./ga":440,"./ga.js":440,"./gd":441,"./gd.js":441,"./gl":442,"./gl.js":442,"./gom-deva":443,"./gom-deva.js":443,"./gom-latn":444,"./gom-latn.js":444,"./gu":445,"./gu.js":445,"./he":446,"./he.js":446,"./hi":447,"./hi.js":447,"./hr":448,"./hr.js":448,"./hu":449,"./hu.js":449,"./hy-am":450,"./hy-am.js":450,"./id":451,"./id.js":451,"./is":452,"./is.js":452,"./it":453,"./it-ch":454,"./it-ch.js":454,"./it.js":453,"./ja":455,"./ja.js":455,"./jv":456,"./jv.js":456,"./ka":457,"./ka.js":457,"./kk":458,"./kk.js":458,"./km":459,"./km.js":459,"./kn":460,"./kn.js":460,"./ko":461,"./ko.js":461,"./ku":462,"./ku.js":462,"./ky":463,"./ky.js":463,"./lb":464,"./lb.js":464,"./lo":465,"./lo.js":465,"./lt":466,"./lt.js":466,"./lv":467,"./lv.js":467,"./me":468,"./me.js":468,"./mi":469,"./mi.js":469,"./mk":470,"./mk.js":470,"./ml":471,"./ml.js":471,"./mn":472,"./mn.js":472,"./mr":473,"./mr.js":473,"./ms":474,"./ms-my":475,"./ms-my.js":475,"./ms.js":474,"./mt":476,"./mt.js":476,"./my":477,"./my.js":477,"./nb":478,"./nb.js":478,"./ne":479,"./ne.js":479,"./nl":480,"./nl-be":481,"./nl-be.js":481,"./nl.js":480,"./nn":482,"./nn.js":482,"./oc-lnc":483,"./oc-lnc.js":483,"./pa-in":484,"./pa-in.js":484,"./pl":485,"./pl.js":485,"./pt":486,"./pt-br":487,"./pt-br.js":487,"./pt.js":486,"./ro":488,"./ro.js":488,"./ru":489,"./ru.js":489,"./sd":490,"./sd.js":490,"./se":491,"./se.js":491,"./si":492,"./si.js":492,"./sk":493,"./sk.js":493,"./sl":494,"./sl.js":494,"./sq":495,"./sq.js":495,"./sr":496,"./sr-cyrl":497,"./sr-cyrl.js":497,"./sr.js":496,"./ss":498,"./ss.js":498,"./sv":499,"./sv.js":499,"./sw":500,"./sw.js":500,"./ta":501,"./ta.js":501,"./te":502,"./te.js":502,"./tet":503,"./tet.js":503,"./tg":504,"./tg.js":504,"./th":505,"./th.js":505,"./tk":506,"./tk.js":506,"./tl-ph":507,"./tl-ph.js":507,"./tlh":508,"./tlh.js":508,"./tr":509,"./tr.js":509,"./tzl":510,"./tzl.js":510,"./tzm":511,"./tzm-latn":512,"./tzm-latn.js":512,"./tzm.js":511,"./ug-cn":513,"./ug-cn.js":513,"./uk":514,"./uk.js":514,"./ur":515,"./ur.js":515,"./uz":516,"./uz-latn":517,"./uz-latn.js":517,"./uz.js":516,"./vi":518,"./vi.js":518,"./x-pseudo":519,"./x-pseudo.js":519,"./yo":520,"./yo.js":520,"./zh-cn":521,"./zh-cn.js":521,"./zh-hk":522,"./zh-hk.js":522,"./zh-mo":523,"./zh-mo.js":523,"./zh-tw":524,"./zh-tw.js":524};function i(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=s,n.exports=i,i.id=677},678:function(n,t,e){"use strict";var r=e(296);e.n(r).a},679:function(n,t,e){"use strict";e.r(t);var r=e(86),i=e.n(r)()(!0);i.push([n.i,".grid-title[data-v-3f8ebca0]{grid-column:1/8;padding:48px 0 12px 0;margin:0}.grid-title span[data-v-3f8ebca0]{font-weight:normal}.grid-title.first-title[data-v-3f8ebca0]{padding:0 0 12px 0}\n","",{version:3,sources:["webpack://src/components/SeparatorVirtualGrid.vue"],names:[],mappings:"AA6CA,6BACC,eAAgB,CAChB,qBAAsB,CACtB,QAAS,CAHV,kCAKE,kBAAmB,CALrB,yCAQE,kBAAmB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid-title {\n\tgrid-column: 1/8;\n\tpadding: 48px 0 12px 0;\n\tmargin: 0;\n\tspan {\n\t\tfont-weight: normal;\n\t}\n\t&.first-title {\n\t\tpadding: 0 0 12px 0;\n\t}\n}\n"],sourceRoot:""}]),t.default=i},680:function(n,t,e){"use strict";var r=e(297);e.n(r).a},681:function(n,t,e){"use strict";e.r(t);var r=e(86),i=e.n(r)()(!0);i.push([n.i,".loader{display:grid;height:60px}\n","",{version:3,sources:["webpack://src/components/Loader.vue"],names:[],mappings:"AAqCA,QACC,YAAa,CACb,WAAY",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n\tdisplay: grid;\n\theight: 60px;\n}\n"],sourceRoot:""}]),t.default=i},682:function(n,t,e){"use strict";var r=e(298);e.n(r).a},683:function(n,t,e){"use strict";e.r(t);var r=e(86),i=e.n(r)()(!0);i.push([n.i,"@media (min-width: 0px) and (max-width: 400px){.grid-container[data-v-9d03db3c]{padding:0px 8px 256px 8px}}@media (min-width: 400px) and (max-width: 700px){.grid-container[data-v-9d03db3c]{padding:0px 8px 256px 8px}}@media (min-width: 700px) and (max-width: 1024px){.grid-container[data-v-9d03db3c]{padding:0px 44px 256px 44px}}@media (min-width: 1024px) and (max-width: 1280px){.grid-container[data-v-9d03db3c]{padding:0px 44px 256px 44px}}@media (min-width: 1280px) and (max-width: 1440px){.grid-container[data-v-9d03db3c]{padding:0px 66px 256px 66px}}@media (min-width: 1440px) and (max-width: 1600px){.grid-container[data-v-9d03db3c]{padding:0px 66px 256px 66px}}@media (min-width: 1600px) and (max-width: 2048px){.grid-container[data-v-9d03db3c]{padding:0px 66px 256px 66px}}@media (min-width: 2048px) and (max-width: 2560px){.grid-container[data-v-9d03db3c]{padding:0px 88px 256px 88px}}@media (min-width: 2560px) and (max-width: 3440px){.grid-container[data-v-9d03db3c]{padding:0px 88px 256px 88px}}@media (min-width: 3440px){.grid-container[data-v-9d03db3c]{padding:0px 88px 256px 88px}}\n","",{version:3,sources:["webpack://src/views/Timeline.vue"],names:[],mappings:"AAqTC,+CACC,iCACC,yBAAkD,CAClD,CAHF,iDACC,iCACC,yBAAkD,CAClD,CAHF,kDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,2BACC,iCACC,2BAAkD,CAClD",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$previous: 0;\n@each $size, $config in get('sizes') {\n\t$marginTop: map-get($config, 'marginTop');\n\t$marginW: map-get($config, 'marginW');\n\t// if this is the last entry, only use min-width\n\t$rule: '(min-width: #{$previous}px) and (max-width: #{$size}px)';\n\t@if $size == 'max' {\n\t\t$rule: '(min-width: #{$previous}px)';\n\t}\n\t@media #{$rule} {\n\t\t.grid-container {\n\t\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t\t}\n\t}\n\t$previous: $size;\n}\n"],sourceRoot:""}]),t.default=i},687:function(n,t,e){"use strict";e.r(t);var r=e(221),i=e(58),s=e(32),a=e(22),o=e(87),c=e(252),d=e(294),p=e(304);function u(n,t,e,r,i,s,a){try{var o=n[s](a),c=o.value}catch(n){return void e(n)}o.done?t(c):Promise.resolve(c).then(r,i)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var s=n.apply(t,e);function a(n){u(s,r,i,a,o,"next",n)}function o(n){u(s,r,i,a,o,"throw",n)}a(void 0)}))}}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var m=function(){return f.apply(this,arguments)};function f(){return(f=l(regeneratorRuntime.mark((function n(){var t,e,r,i,u,l,m=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=m.length>0&&void 0!==m[0]&&m[0],e=m.length>1&&void 0!==m[1]?m[1]:{},e=Object.assign({},{page:0,perPage:10*p.sizes.max.count,mimesType:o.a},e),r="/files/".concat(Object(a.getCurrentUser)().uid),i=e.mimesType.reduce((function(n,t){return"".concat(n,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(t,"</d:literal>\n\t\t</d:eq>\n\t")}),""),u=t?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",e=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(d.a,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(r,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(u,"\n\t\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t\t<oc:owner-id/>\n\t\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t\t<d:literal>").concat(Object(a.getCurrentUser)().uid,"</d:literal>\n\t\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(e.perPage,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(e.page*e.perPage,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},e),n.next=9,c.a.getDirectoryContents("",e);case 9:return l=n.sent,n.abrupt("return",l.data.map((function(n){return Object(s.b)(n)})).map((function(n){return Object.assign({},n,{filename:n.filename.replace(r,"")})})));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var h=e(299),g=e(300),j={name:"SeparatorVirtualGrid",inheritAttrs:!1,props:{item:{type:Object,required:!0}}},v=(e(678),e(40)),C=Object(v.a)(j,(function(){var n=this.$createElement,t=this._self._c||n;return t("h2",{staticClass:"grid-title",style:{height:this.item.height+"px"}},[this._v("\n\t"+this._s(this.item.injected.month)+"\n\t"),t("span",[this._v(this._s(this.item.injected.year))])])}),[],!1,null,"3f8ebca0",null).exports,x=e(261),b=e.n(x),y=e(301),A={name:"Loader"},w=(e(680),Object(v.a)(A,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"loader"},[this._t("icon",[t("span",{staticClass:"icon-loading"})])],2)}),[],!1,null,null,null).exports),k=e(246),D=e(303);function O(n,t,e,r,i,s,a){try{var o=n[s](a),c=o.value}catch(n){return void e(n)}o.done?t(c):Promise.resolve(c).then(r,i)}function z(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var s=n.apply(t,e);function a(n){O(s,r,i,a,o,"next",n)}function o(n){O(s,r,i,a,o,"throw",n)}a(void 0)}))}}function $(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function _(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?$(Object(e),!0).forEach((function(t){q(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):$(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function q(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var B={name:"Timeline",components:{EmptyContent:h.a,VirtualGrid:b.a,Navigation:y.a},mixins:[D.a],props:{loading:{type:Boolean,required:!0},onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:function(){return o.a}},rootTitle:{type:String,required:!0},path:{type:String,default:""}},data:function(){return{cancelRequest:null,done:!1,error:null,page:0,lastSection:"",loaderComponent:w}},computed:_(_({},Object(i.c)(["files","timeline"])),{},{fileList:function(){var n=this;return this.timeline.map((function(t){return n.files[t]}))},contentList:function(){var n=this;return this.fileList.flatMap((function(t,e){var r,i=[],s=n.getFormatedDate(t.lastmod,"YYYY MMMM");return s!==n.getFormatedDate(null===(r=n.timeline[e-1])||void 0===r?void 0:r.lastmod,"YYYY MMMM")&&n.lastSection!==s&&(i.push({id:"title-".concat(e),injected:{year:n.getFormatedDate(t.lastmod,"YYYY"),month:n.getFormatedDate(t.lastmod,"MMMM")},height:90,columnSpan:0,newRow:!0,renderComponent:C}),n.lastSection=s),i.push({id:"img-".concat(t.fileid),injected:_(_({},t),{},{list:n.fileList,loadMore:n.getContent}),width:256,height:256,columnSpan:1,renderComponent:g.a}),i}))},isEmpty:function(){return 0===this.fileList.length}}),watch:{onlyFavorites:function(){var n=this;return z(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.resetState(),n.getContent();case 2:case"end":return t.stop()}}),t)})))()},mimesType:function(){var n=this;return z(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.resetState(),n.getContent();case 2:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){this.getContent()},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Changed view"),this.resetState()},methods:{getContent:function(n){var t=this;return z(regeneratorRuntime.mark((function e(){var r,i,s,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.done){e.next=2;break}return e.abrupt("return",Promise.resolve(!0));case 2:return t.cancelRequest&&t.cancelRequest("Changed view"),0===t.timeline.length&&t.$emit("update:loading",!0),r=Object(k.a)(m),i=r.request,s=r.cancel,t.cancelRequest=s,a=5*t.gridConfig.count,e.prev=7,e.next=10,i(t.onlyFavorites,{page:t.page,perPage:a,mimesType:t.mimesType});case 10:if((o=e.sent).length!==a&&(t.done=!0),t.$store.dispatch("updateTimeline",o),t.$store.dispatch("appendFiles",o),t.page+=1,!n){e.next=17;break}return e.abrupt("return",Promise.resolve(o));case 17:return e.abrupt("return",Promise.resolve(!1));case 20:return e.prev=20,e.t0=e.catch(7),e.t0.response&&e.t0.response.status&&(404===e.t0.response.status?(t.error=404,setTimeout((function(){t.$router.push({name:t.$route.name})}),3e3)):t.error=e.t0),console.error("Error fetching timeline",e.t0),e.abrupt("return",Promise.resolve(!0));case 25:return e.prev=25,t.$emit("update:loading",!1),t.cancelRequest=null,e.finish(25);case 29:case"end":return e.stop()}}),e,null,[[7,20,25,29]])})))()},resetState:function(){this.$store.dispatch("resetTimeline"),this.done=!1,this.error=null,this.page=0,this.lastSection="",this.$emit("update:loading",!0),this.$refs.virtualgrid.resetGrid()},getFormatedDate:function(n,t){return r(n).format(t)}}},S=(e(682),Object(v.a)(B,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return 404===n.error?e("EmptyContent",{attrs:{"illustration-name":"folder"}},[n._v("\n\t"+n._s(n.t("photos","This folder does not exists"))+"\n")]):n.error?e("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():e("div",[n.isEmpty?e("Navigation",{key:"navigation",attrs:{basename:n.path,filename:"/","root-title":n.rootTitle}}):n._e(),n._v(" "),n.isEmpty?e("EmptyContent",{attrs:{"illustration-name":"empty"}},[n._v("\n\t\t"+n._s(n.t("photos","No photos in here"))+"\n\t")]):n._e(),n._v(" "),e("div",{staticClass:"grid-container"},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"update-function":n.getContent,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap},"update-trigger-margin":700,loader:n.loaderComponent}})],1)],1)}),[],!1,null,"9d03db3c",null));t.default=S.exports}}]);
//# sourceMappingURL=photos-5.js.map?v=0c43f740e3d9ac61b644