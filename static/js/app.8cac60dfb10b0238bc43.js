webpackJsonp([0],[,,function(t,e,s){"use strict";var n=s(1),i=s(39),a=s(12),r=s.n(a),o=s(15),c=s.n(o),l=s(16),d=s.n(l),p=s(11),u=s.n(p),f=s(14),v=s.n(f),m=s(9),h=s.n(m),w=s(10),g=s.n(w),C=s(13),I=s.n(C);n.a.use(i.a),e.a=new i.a({routes:[{path:"/ofo",components:{header:r.a,swipe:c.a,swipeList:d.a,footer:u.a},beforeEnter:function(t,e,s){[].forEach.call(document.getElementsByTagName("li"),function(t){t.className=""}),s()}},{path:"/ofo/about",components:{header:r.a,footer:u.a,aboutContent:h.a}},{path:"/ofo/share",components:{header:r.a,shareContent:v.a,footer:u.a}},{path:"/ofo/job",components:{header:r.a,footer:u.a,jobContent:I.a}},{path:"/ofo/download",components:{header:r.a,footer:u.a,downloadContent:g.a}}],scrollBehavior:function(t,e,s){return console.log(t,e,s),{x:0,y:0}},mode:"history"})},,,function(t,e,s){s(34);var n=s(0)(s(43),s(22),null,null);t.exports=n.exports},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAYAAAA+s9J6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNWZiYWZlMS0zNmE5LTQ1M2UtOWFiYi04ZTliMmFmZWFhNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEI3NzBCN0FCMzlDMTFFNjgyQTREOEQ0RUUxMzI0OTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEI3NzBCNzlCMzlDMTFFNjgyQTREOEQ0RUUxMzI0OTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNWZiYWZlMS0zNmE5LTQ1M2UtOWFiYi04ZTliMmFmZWFhNjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjVmYmFmZTEtMzZhOS00NTNlLTlhYmItOGU5YjJhZmVhYTY0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"},function(t,e,s){var n=s(0)(s(41),s(24),null,null);t.exports=n.exports},function(t,e,s){var n=s(0)(s(42),s(19),null,null);t.exports=n.exports},function(t,e,s){s(32);var n=s(0)(s(44),s(20),null,null);t.exports=n.exports},function(t,e,s){s(31);var n=s(0)(s(45),s(18),null,null);t.exports=n.exports},function(t,e,s){s(33);var n=s(0)(s(46),s(21),null,null);t.exports=n.exports},function(t,e,s){s(35);var n=s(0)(s(47),s(23),null,null);t.exports=n.exports},function(t,e,s){s(30);var n=s(0)(s(48),s(17),null,null);t.exports=n.exports},function(t,e,s){s(37);var n=s(0)(s(49),s(26),null,null);t.exports=n.exports},function(t,e,s){s(36);var n=s(0)(s(50),s(25),null,null);t.exports=n.exports},function(t,e,s){s(38);var n=s(0)(s(51),s(27),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"banner"},[t._m(0),t._v(" "),s("img",{attrs:{src:t.src}})]),t._v(" "),s("div",{staticClass:"jobEmail"},[s("div",{staticClass:"jobContainer"},t._l(t.docs,function(e){return s("div",{staticClass:"jobList"},[s("h3",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.data1))]),t._v(" "),s("p",[t._v(t._s(e.data2))]),t._v(" "),s("p",[t._v(t._s(e.data3))])])})),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{attrs:{id:"jobH3"}},[t._v("一些人等着被世界改变"),s("br"),t._v("而我们已经在"),s("br"),t._v("改变世界")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"email"},[s("div",[t._v("更多职位")]),t._v(" "),s("p",[t._v("联系方式：hr@ofo.so")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"banner"},[s("h3",{attrs:{id:"download"}},[t._v("ofo 共享单车 APP")]),t._v(" "),s("p",[t._v("全新 1.8 版本，邀您共享")]),t._v(" "),s("img",{attrs:{src:t.src}})]),t._v(" "),s("div",{staticClass:"teach"},[s("h3",[t._v("使用方法")]),t._v(" "),s("div",{staticClass:"step"},t._l(t.docs,function(e){return s("div",{staticClass:"container"},[s("img",{attrs:{src:e.src}}),t._v(" "),s("h3",{domProps:{innerHTML:t._s(e.h3)}}),t._v(" "),s("p",{domProps:{innerHTML:t._s(e.p)}})])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"banner"},[t._m(0),t._v(" "),s("img",{attrs:{src:t.src}})]),t._v(" "),s("div",t._l(t.docs,function(e){return s("div",{staticClass:"mar"},[s("h3",[t._v(t._s(e.h3))]),t._v(" "),s("p",{staticClass:"word"},[t._v(t._s(e.p1))]),t._v(" "),s("p",{staticClass:"word"},[t._v(t._s(e.p2))]),t._v(" "),s("p",{staticClass:"word"},[t._v(t._s(e.p3))]),t._v(" "),s("p",{staticClass:"word"},[t._v(t._s(e.p4))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{attrs:{id:"about"}},[t._v("ofo 共享单车首创“单车共享”模式"),s("br"),t._v("是全球第一个无桩共享单车平台")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"address"},[s("div",{staticClass:"data"},[s("img",{attrs:{src:t.src}}),t._v(" "),s("p",[t._v("4001 507 507（周一至周日：7:00 - 24:00）")]),t._v(" "),s("p",[t._v("北京市海淀区北四环西路58号理想国际大厦11层")])]),t._v(" "),s("div",{staticClass:"link"},[s("a",{attrs:{id:"github",href:"https://github.com/rianran1993/ofo",target:"_blank"}}),t._v(" "),s("a",{attrs:{id:"wechat",href:"javascript:;"},on:{mouseover:t.show,mouseleave:t.hide}})])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"company"},[s("p",[t._v("Copyright © 2017 ofo Inc. 保留所有权利。京公网安备 11010802022978号   |   公共事务邮箱  gr@ofo.so    商务合作邮箱  bdinchina@ofo.so")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view",{attrs:{name:"header"}}),t._v(" "),s("router-view",{attrs:{name:"swipe"}}),t._v(" "),s("router-view",{attrs:{name:"swipeList"}}),t._v(" "),s("router-view",{attrs:{name:"shareContent"}}),t._v(" "),s("router-view",{attrs:{name:"aboutContent"}}),t._v(" "),s("router-view",{attrs:{name:"downloadContent"}}),t._v(" "),s("router-view",{attrs:{name:"jobContent"}}),t._v(" "),s("router-view",{attrs:{name:"footer"}}),t._v(" "),s("div",{staticClass:"clearFloat"})],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"col",attrs:{id:"nav"}},[n("router-link",{staticClass:"logo",attrs:{to:"/ofo",tag:"div"}},[n("img",{attrs:{src:s(6)}})]),t._v(" "),n("div",{staticClass:"nav-item"},[n("ul",t._l(t.navItems,function(e){return n("li",{on:{mouseover:function(e){t.addClass(e)},mouseleave:function(e){t.rmClass(e)},click:function(s){t.toLink(e.link,s)}}},[t._v("\n                    "+t._s(e.text)+"\n                ")])}))])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swipe"},[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgArr,function(t){return s("swiper-slide",{key:t.src},[s("img",{attrs:{src:t.src}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"banner"},[s("h1",[t._v("城市大共享计划")]),t._v(" "),s("img",{attrs:{src:t.src}})]),t._v(" "),s("div",{staticClass:"introduce"},[t._m(0),t._v(" "),s("div",{staticClass:"pic mar1"},[s("img",{attrs:{src:t.src2}}),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text mar1"},[s("p",[t._v("ofo 共享单车以开放平台和共享精神")]),t._v(" "),s("p",[t._v("接纳每一颗热衷共享的种子")]),t._v(" "),s("p",[t._v("一同繁衍它的“城市大共享计划”")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ad"},[s("h3",[t._v("连接单车"),s("br"),t._v("但不生产单车")]),t._v(" "),s("p",{staticClass:"word"},[t._v("ofo，不断连接更多优秀的单车品牌与生产商，接入更多产品线来满足用户的多元需求，共同提供城市出行服务。")]),t._v(" "),s("p",{staticClass:"word"},[t._v("同时，ofo 欢迎用户共享自己的单车，加入“城市大共享计划”，以 1 换 N ，提升闲置单车的使用效率。")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgArr,function(t){return s("swiper-slide",[s("img",{attrs:{src:t.src}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)],1)},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=s(4),s(29)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=[{h3:"在校园",p1:"ofo 萌起校园，直至 2016 年 10 月，已来到全国22座城市、200 多所高校，累计提供超过 4000 万次共享单车",p2:"出行服务， 目前已成为中国规模最大的校园交通代步解决方案，为广大高校师生提供便捷经济、绿色低碳、",p3:"更高效率的校园共享单车服务。",p4:""},{h3:"在城市",p1:"低效率的出行状况已经无法满足快节奏的城市生活，两点一线的生活半径和不断加速的城市改造，",p2:"让外来人融不进来，也让原住民忘了城市本来的样子，",p3:"正因如此，ofo 共享单车怀揣“随时随地有车骑”的朴素愿景来到城市，试图满足人们短途代步的需求，",p4:"更用这辆单车，重新丈量人们经过的每一条路线，找寻与城市的全新连接方式。"},{h3:"在未来",p1:"ofo 以开放平台和共享精神，欢迎用户共享自己的单车加入 ofo，以互联网创新模式调动城市单车存量市场，",p2:"提高自行车使用效率，为城市节约更多空间；",p3:"在未来， ofo 希望不生产自行车，只连接自行车，让人们在全世界的每一个角落都可以通过 ofo 解锁自行车，",p4:"随时随地有车骑，满足短途代步的需求。"}];e.default={name:"shareContent",data:function(){return{src:"../../ofo/static/img/about.jpg",docs:n}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=[{src:"../../ofo/static/img/steps1.jpg",h3:"<em>①</em>获取密码",p:"点击【马上用车】，<br>输入车牌号即可获得解锁密码"},{src:"../../ofo/static/img/steps2.jpg",h3:"<em>②</em>拨轮锁开锁",p:"拨动密码盘，使密码对准锁身黄色标准线<br>按下圆形按钮，成功"},{src:"../../ofo/static/img/steps3.jpg",h3:"<em>③</em>如何停放",p:"结束使用后，锁车、复位密码<br>将车停放至道路两旁安全、、区域，方便他人取用"}];e.default={name:"shareContent",data:function(){return{src:"../../ofo/static/img/download.jpg",docs:n}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header",data:function(){return{src:"../../ofo/static/img/footer_logo.png"}},methods:{show:function(){this.src="../../ofo/static/img/wx-qrcode.jpg"},hide:function(){this.src="../../ofo/static/img/footer_logo.png"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),i=[{text:"首页",link:"/ofo"},{text:"关于我们",link:"/ofo/about"},{text:"大共享",link:"/ofo/share"},{text:"下载APP",link:"/ofo/download"},{text:"加入我们",link:"/ofo/job"}];e.default={name:"header",data:function(){return{navItems:i,navIn:"nav-out"}},methods:{toLink:function(t,e){[].forEach.call(document.getElementsByTagName("li"),function(t){t.className=""}),e.target.className="selected",n.a.push(t||"/")},addClass:function(t){t.target.className.match(new RegExp("(\\s|^)selected(\\s|$)"))||(t.target.className=" "),t.target.className.match(new RegExp("(\\s|^)nav-in(\\s|$)"))||(t.target.className+=" nav-in")},rmClass:function(t){t.target.className.match(new RegExp("(\\s|^)selected(\\s|$)"))||(t.target.className=" "),t.target.className.match(new RegExp("(\\s|^)nav-out(\\s|$)"))||(t.target.className+=" nav-out")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=[{title:"产品设计",data1:"产品经理"},{title:"技术研发",data1:"后端工程师",data2:"硬件工程师",data3:"嵌入式软件工程师"},{title:"品牌公关",data1:"PR经理"},{title:"市场运营",data1:"策略运营",data2:"用户运营"}];e.default={name:"shareContent",data:function(){return{src:"../../ofo/static/img/job.jpg",docs:n}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"shareContent",data:function(){return{src:"../../ofo/static/img/share1.jpg",src2:"../../ofo/static/img/share2.jpg"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=(s.n(n),[{src:"../../ofo/static/img/home_bg.jpg"},{src:"../../ofo/static/img/home_bg2.jpg"},{src:"../../ofo/static/img/home_bg3.jpg"},{src:"../../ofo/static/img/home_bg4.jpg"}]);e.default={name:"swipe",components:{swiper:n.swiper,swiperSlide:n.swiperSlide},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationClickable:!0,autoplay:5e3,height:911,width:1920},imgArr:i}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=(s.n(n),[{src:"../../ofo/static/img/share_img.png"},{src:"../../ofo/static/img/event_img.png"},{src:"../../ofo/static/img/family_img.png"},{src:"../../ofo/static/img/active_img.jpg"}]);e.default={name:"swipeList",components:{swiper:n.swiper,swiperSlide:n.swiperSlide},data:function(){return{swiperOption:{slidesPerView:4,spaceBetween:10},imgArr:i}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),i=s(5),a=s.n(i),r=s(2);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})}],[52]);
//# sourceMappingURL=app.8cac60dfb10b0238bc43.js.map