webpackJsonp([1,6],{22:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={getApi:function(e){return window.location.origin+"/readapi?uri="+e}}},43:function(e,t,o){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.nSetItems=t.zSetDatePointer=t.zSetAticles=void 0;var n=o(28),r=i(n),a=function(e){return e+="",e.length<2?"0"+e:e};t.zSetAticles=function(e,t,o){var i=e.dispatch;i(r.ZHIHU_SET_ARTICLES,t,o)},t.zSetDatePointer=function(e,t){var o=e.dispatch;o(r.ZHIHU_SET_DATE_POINTER,{value:t.getFullYear()+a(t.getMonth()+1)+a(t.getDate()),format:t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+a(t.getDate())})},t.nSetItems=function(e,t){var o=e.dispatch;o(r.NEWS_SET_ITEMS,t)}},101:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(21),r=i(n),a=o(40),s=i(a),l=o(22),c=i(l);r["default"].use(s["default"]);var u={key:"4516fa7241760c857ac2296f32e2174c"},d={get:"http://v.juhe.cn/toutiao/index"};t["default"]={get:function(e,t){setTimeout(function(){r["default"].http.get(c["default"].getApi(d.get+"?key="+u.key+"&type="+e)).then(function(e){var o=e.data;0!==o.error_code?console.log("请求错误code:"+o.error_code+",错误提示:"+o.reason):t(o)})},100)}}},213:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(27),n=o(6);t["default"]={props:{data:{type:Object,required:!0}},data:function(){return{cloudSrc:i.WAIT_IMG}},components:{Flexbox:n.Flexbox,FlexboxItem:n.FlexboxItem},methods:{openDialog:function(){this.$dispatch("open-dialog",this.data.url)}}}},214:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(432),r=i(n),a=o(6);t["default"]={props:{articles:{type:Array,required:!0},date:{type:String,"default":function(){return""}}},components:{covArticle:r["default"],Divider:a.Divider,Flexbox:a.Flexbox,FlexboxItem:a.FlexboxItem}}},215:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(31),r=i(n),a=o(433),s=i(a),l=o(43),c=o(6),u=o(101),d=i(u);t["default"]={vuex:{getters:{items:function(e){var t=e.News;return t.items}},actions:{nSetItems:l.nSetItems}},data:function(){return{dialogurl:"",showDialog:!1}},components:{covArticles:s["default"],Scroller:c.Scroller,Spinner:c.Spinner,Dialog:c.Dialog},created:function(){this.loadData(),this.dialogHeight=600},methods:{loadData:function(){var e=this;d["default"].get("top",function(t){var o=t.result.data,i=[],n=!0,a=!1,s=void 0;try{for(var l,c=(0,r["default"])(o);!(n=(l=c.next()).done);n=!0){var u=l.value;i.push({title:u.title,type:u.type,img:u.thumbnail_pic_s,url:u.url,date:u.date.split(" ")[1]})}}catch(d){a=!0,s=d}finally{try{!n&&c["return"]&&c["return"]()}finally{if(a)throw s}}e.nSetItems(i)})}},events:{"open-dialog":function(e){this.dialogurl=e,this.showDialog=!0}}}},264:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".vux-flexbox{width:98%}.g-news{font-size:12px}.dialog-article .weui_dialog{width:98%}.vux-close{position:relative;display:inline-block;vertical-align:middle;width:30px;height:30px;overflow:hidden;color:#ccc}.vux-close:after,.vux-close:before{content:'';position:absolute;height:1px;width:100%;top:50%;left:0;background:#98979d}.vux-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vux-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}","",{version:3,sources:["/./src/views/news/index.vue"],names:[],mappings:"AAAA,aAAa,SAAS,CAAC,QAAQ,cAAc,CAAC,6BAA6B,SAAS,CAAC,WAAW,kBAAkB,qBAAqB,sBAAsB,WAAW,YAAY,gBAAgB,UAAU,CAAC,mCAAqC,WAAW,kBAAkB,WAAW,WAAW,QAAQ,OAAO,kBAAkB,CAAC,kBAAmB,gCAAgC,uBAAuB,CAAC,iBAAkB,iCAAiC,wBAAwB,CAAC",file:"index.vue",sourcesContent:[".vux-flexbox{width:98%}.g-news{font-size:12px}.dialog-article .weui_dialog{width:98%}.vux-close{position:relative;display:inline-block;vertical-align:middle;width:30px;height:30px;overflow:hidden;color:#ccc}.vux-close::before,.vux-close::after{content:'';position:absolute;height:1px;width:100%;top:50%;left:0;background:#98979d}.vux-close::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vux-close::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}"],sourceRoot:"webpack://"}])},271:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,"img[_v-e086521e]{width:100px}.vux-flex-row[_v-e086521e]{color:#737272;padding:.4rem .2rem;border-bottom:1px solid #efebeb}.time[_v-e086521e]{color:#9c9b9b;margin:0 .2rem}","",{version:3,sources:["/./src/views/news/article.vue"],names:[],mappings:"AAuCA,iBAAiB,WAAa,CAAC,AAC/B,2BACE,cAAe,AACf,oBAAqB,AACrB,+BAAiC,CAClC,AACD,mBACE,cAAe,AACf,cAAiB,CAClB",file:"article.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nimg[_v-e086521e]{width: 100px;}\n.vux-flex-row[_v-e086521e]{\n  color: #737272;\n  padding: .4rem .2rem;\n  border-bottom: 1px solid #efebeb;\n}\n.time[_v-e086521e]{\n  color: #9c9b9b;\n  margin: 0 0.2rem;\n}\n"],sourceRoot:"webpack://"}])},309:function(e,t,o){var i=o(264);"string"==typeof i&&(i=[[e.id,i,""]]);o(5)(i,{});i.locals&&(e.exports=i.locals)},336:function(e,t,o){var i=o(271);"string"==typeof i&&(i=[[e.id,i,""]]);o(5)(i,{});i.locals&&(e.exports=i.locals)},421:function(e,t){e.exports=' <div class=item__list> <cov-article v-for="data in articles" :data=data></cov-article> </div> '},422:function(e,t){e.exports=' <div> <div class="g-wrap g-news"> <div class=list-container> <cov-articles :articles=value v-for="(key, value) of items"></cov-articles> </div> </div> <dialog :show.sync=showDialog class=dialog-article :scroll=true> <span class=vux-close @click="showDialog=false"></span> <div class=img-box v-bind:style="{ height:dialogHeight + \'px\'}"> <iframe :src=dialogurl frameborder=0 v-bind:style="{ height:dialogHeight + \'px\'}" width=100%></iframe> </div> </dialog> </div> '},426:function(e,t){e.exports=' <flexbox :gutter=0 _v-e086521e=""> <flexbox-item :span=3/10 _v-e086521e=""><img :src=data.img alt="" @click=openDialog(url) _v-e086521e=""></flexbox-item> <flexbox-item :span=6/10 @click=openDialog() _v-e086521e=""> <p _v-e086521e=""><span class=time _v-e086521e="">-&nbsp;{{data.date}}&nbsp;-</span></p> <p _v-e086521e="">{{data.title}}</p> </flexbox-item> </flexbox> '},432:function(e,t,o){var i,n;o(336),i=o(213),n=o(426),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},433:function(e,t,o){var i,n;i=o(214),n=o(421),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},434:function(e,t,o){var i,n;o(309),i=o(215),n=o(422),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}});
//# sourceMappingURL=1.43265ec747c2ee24e8ed.js.map