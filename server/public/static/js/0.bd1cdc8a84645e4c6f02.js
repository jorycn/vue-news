webpackJsonp([0,6],{9:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={getApi:function(e){return window.location.origin+"/readapi?uri="+e}}},25:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.wSetItems=t.nSetItems=t.zSetDatePointer=t.zSetAticles=void 0;var i=n(15),r=o(i),s=function(e){return e+="",e.length<2?"0"+e:e};t.zSetAticles=function(e,t,n){var o=e.dispatch;o(r.ZHIHU_SET_ARTICLES,t,n)},t.zSetDatePointer=function(e,t){var n=e.dispatch;n(r.ZHIHU_SET_DATE_POINTER,{value:t.getFullYear()+s(t.getMonth()+1)+s(t.getDate()),format:t.getFullYear()+"-"+s(t.getMonth()+1)+"-"+s(t.getDate())})},t.nSetItems=function(e,t){var n=e.dispatch;n(r.NEWS_SET_ITEMS,t)},t.wSetItems=function(e,t){var n=e.dispatch;n(r.WEIXIN_SET_ITEMS,t)}},43:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),r=o(i),s=n(30),a=o(s),u=n(9),l=o(u);r["default"].use(a["default"]);var c={getList:"http://news.at.zhihu.com/api/4/news/before/",show:"http://news-at.zhihu.com/api/4/news/"};t["default"]={getList:function(e,t){setTimeout(function(){var n=encodeURIComponent(c.getList+e);r["default"].http.get(l["default"].getApi(n)).then(function(e){t(e)})},100)},show:function(e,t){setTimeout(function(){var n=encodeURIComponent(c.show+e);r["default"].http.get(l["default"].getApi(n)).then(function(e){t(e)})},100)}}},220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(24),i=n(2);t["default"]={props:{data:{type:Object,required:!0}},data:function(){return{cloudSrc:o.WAIT_IMG}},components:{Flexbox:i.Flexbox,FlexboxItem:i.FlexboxItem},created:function(){var e=this;this.$covImg(this,this.data.img,function(t){e.cloudSrc=t})}}},221:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(445),r=o(i),s=n(2);t["default"]={props:{articles:{type:Array,required:!0},date:{type:String,"default":function(){return""}}},components:{covArticle:r["default"],Divider:s.Divider,Flexbox:s.Flexbox,FlexboxItem:s.FlexboxItem}}},222:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(27),r=o(i),s=n(446),a=o(s),u=n(25),l=n(2),c=n(43),d=o(c);t["default"]={vuex:{getters:{datePointer:function(e){var t=e.Zhihu;return t.datePointer},days:function(e){var t=e.Zhihu;return t.days}},actions:{zSetAticles:u.zSetAticles,zSetDatePointer:u.zSetDatePointer}},components:{covArticles:a["default"],Scroller:l.Scroller,Spinner:l.Spinner},created:function(){this.dataPointerCalc()},methods:{dataPointerCalc:function(e){if(this.datePointer.value){if(e){var t=new Date(this.datePointer.format);this.zSetDatePointer(new Date(t-864e5)),this.fetchList()}}else this.zSetDatePointer(new Date),this.fetchList()},fetchList:function(){var e=this;d["default"].getList(this.datePointer.value,function(t){var n=t.data,o=[],i=!0,s=!1,a=void 0;try{for(var u,l=(0,r["default"])(n.stories);!(i=(u=l.next()).done);i=!0){var c=u.value;o.push({type:"news",title:c.title,img:c.images[0],id:c.id})}}catch(d){s=!0,a=d}finally{try{!i&&l["return"]&&l["return"]()}finally{if(s)throw a}}e.zSetAticles(e.datePointer.format,o)})}}}},269:function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".item__list img{width:100%}","",{version:3,sources:["/./src/views/zhihu/articles.vue"],names:[],mappings:"AAAA,gBAAgB,UAAU,CAAC",file:"articles.vue",sourcesContent:[".item__list img{width:100%}"],sourceRoot:"webpack://"}])},273:function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".vux-flexbox{width:98%}","",{version:3,sources:["/./src/views/zhihu/index.vue"],names:[],mappings:"AAqEA,aAAa,SAAS,CAAC",file:"index.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vux-flexbox{width:98%}\n"],sourceRoot:"webpack://"}])},277:function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".vux-flex-row[_v-e0e990e4]{color:#888;padding:.4rem .2rem;border-bottom:1px solid #efebeb}.vux-flexbox .vux-flexbox-item[_v-e0e990e4]{padding:0 .2rem}","",{version:3,sources:["/./src/views/zhihu/article.vue"],names:[],mappings:"AAoCA,2BACE,WAAY,AACZ,oBAAqB,AACrB,+BAAiC,CAClC,AACD,4CACE,eAAiB,CAClB",file:"article.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vux-flex-row[_v-e0e990e4]{\n  color: #888;\n  padding: .4rem .2rem;\n  border-bottom: 1px solid #efebeb;\n}\n.vux-flexbox .vux-flexbox-item[_v-e0e990e4]{\n  padding:0 0.2rem;\n}\n"],sourceRoot:"webpack://"}])},315:function(e,t,n){var o=n(269);"string"==typeof o&&(o=[[e.id,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)},339:function(e,t,n){var o=n(273);"string"==typeof o&&(o=[[e.id,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)},343:function(e,t,n){var o=n(277);"string"==typeof o&&(o=[[e.id,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)},429:function(e,t){e.exports=' <divider>{{date}}</divider> <div class=item__list> <cov-article v-for="data in articles" :data=data></cov-article> </div> '},430:function(e,t){e.exports=' <div class=g-wrap> <div class=list-container> <cov-articles :articles=value.articles :date=value.date v-for="(key, value) of days"></cov-articles> </div> <div class=load @click=dataPointerCalc(true)>点击加载</div> </div> '},435:function(e,t){e.exports=' <flexbox :gutter=0 _v-e0e990e4=""> <flexbox-item :span=2/10 _v-e0e990e4=""><img :src=cloudSrc alt="" v-link="{\'name\': \'zhihu_show\', params: {id: data.id}}" _v-e0e990e4=""></flexbox-item> <flexbox-item :span=7/10 v-link="{\'name\': \'zhihu_show\', params: {id: data.id}}" _v-e0e990e4="">{{data.title}}</flexbox-item> </flexbox> '},445:function(e,t,n){var o,i;n(343),o=n(220),i=n(435),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},446:function(e,t,n){var o,i;n(315),o=n(221),i=n(429),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},447:function(e,t,n){var o,i;n(339),o=n(222),i=n(430),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});
//# sourceMappingURL=0.bd1cdc8a84645e4c6f02.js.map