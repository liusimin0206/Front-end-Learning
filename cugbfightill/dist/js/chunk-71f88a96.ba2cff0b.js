(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71f88a96"],{"7dac":function(t,e,i){},"81b3":function(t,e,i){"use strict";var s=i("7dac"),n=i.n(s);n.a},9586:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"result"},[i("div",{staticClass:"header"},[i("div",{staticClass:"pic"}),i("div",{staticClass:"title"},[t._v(t._s(t.title))])]),i("div",{staticClass:"container"},[i("a-collapse",{attrs:{"expand-icon-position":"right",bordered:!1},scopedSlots:t._u([{key:"expandIcon",fn:function(t){return[i("a-icon",{attrs:{type:"down",rotate:t.isActive?180:0}})]}}]),model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},[i("a-collapse-panel",{key:"1",staticClass:"subtitle",attrs:{header:"基本信息"}},t._l(t.basicInfor,(function(e,s){return i("ul",{key:s,staticClass:"content"},[i("li",[t._v(t._s(e))])])})),0),i("a-collapse-panel",{key:"2",staticClass:"subtitle",attrs:{header:"申请信息"}},t._l(t.applicationInfor,(function(e,s){return i("ul",{key:s,staticClass:"content"},["string"===e.type?i("li",[t._v(t._s(e.content))]):t._e(),"jiankangbao"===e.type?i("li",[i("el-image",{staticStyle:{width:"100px",height:"200px"},attrs:{src:e.content,fit:"cover"},on:{click:function(e){t.showViewer2=!0}}}),t.showViewer2?i("el-image-viewer",{attrs:{"on-close":t.closeViewer,"url-list":[e.content]}}):t._e()],1):t._e(),"daoshizhengming"===e.type?i("li",[i("el-image",{staticStyle:{width:"100px",height:"50px"},attrs:{src:e.content,fit:"cover"},on:{click:function(e){t.showViewer1=!0}}}),t.showViewer1?i("el-image-viewer",{attrs:{"on-close":t.closeViewer,"url-list":[e.content]}}):t._e()],1):t._e()])})),0),i("a-collapse-panel",{key:"3",staticClass:"subtitle vinfo",attrs:{header:"审核信息"}},[i("div",{staticClass:"passIcons"},[i("a-icon",{staticClass:"passiconitem",attrs:{type:"check-circle",theme:"filled"}}),i("div",{staticClass:"heightLine"}),i("a-icon",{staticClass:"passiconitem",attrs:{type:"check-circle",theme:"filled"}}),i("div",{staticClass:"heightLine"}),i("a-icon",{staticClass:"passiconitem",attrs:{type:"check-circle",theme:"filled"}})],1),i("div",{staticClass:"vresults"},[i("div",{staticClass:"item"},[i("div",{staticClass:"tit"},[t._v("辅导员 [吕菲菲-2020020010]")]),i("div",{staticClass:"text"},[t._v("通过 "+t._s(t.dateString)+" "+t._s(t.time))]),i("div",{staticClass:"text"},[t._v("审核意见")])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tit"},[t._v("学院")]),i("div",{staticClass:"text"},[t._v("通过")]),i("div",{staticClass:"text"},[t._v("审核意见：")])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tit"},[t._v("学工处")]),i("div",{staticClass:"text"},[t._v("通过")]),i("div",{staticClass:"text"},[t._v("审核意见：")])])])])],1)],1),i("div",{staticClass:"bottom"}),i("div",{staticClass:"vover"},[t._v("审核完成")])])},n=[],a=(i("a15b"),i("b0c0"),i("848f")),c=i("4e01"),o={data:function(){return{dateString:"",time:"",date:void 0,title:"".concat(a["a"].name,"-在校生离校申请表"),basicInfor:["学号：".concat(a["a"].id),"姓名：".concat(a["a"].name),"学院：信息工程学院","年级：2019","导师：王建业"],applicationInfor:[],activeKey:["2","3"],url1:i("29df"),url2:i("4714"),url4:i("e4f6"),showViewer1:!1,showViewer2:!1}},components:{ElImageViewer:c["a"]},methods:{closeViewer:function(){this.showViewer1=!1,this.showViewer2=!1},date2timeStr:function(t){function e(t){t=String(t);while(t.length<2)t="0"+t;return t}return[e(t.getHours()),e(t.getMinutes()),e(t.getSeconds())].join(":")}},created:function(){this.date=new Date,this.date.setMinutes(this.date.getMinutes()-11),this.time=this.date2timeStr(this.date),this.dateString=this.$route.query.date,this.url2=localStorage.getItem("jianKangMa")||i("4714"),this.url3=localStorage.getItem("xingChenMa")||i("4714"),this.url4=localStorage.getItem("shenpibiao")||i("e4f6"),this.applicationInfor=[{type:"string",content:"联系电话：18310621826"},{type:"string",content:"北京健康宝绿码："},{type:"jiankangbao",content:this.url2},{type:"string",content:"出发时间：".concat(this.dateString)},{type:"string",content:"目的地：江西省，南昌市，红谷滩小区301"},{type:"string",content:"行程安排（交通工具及车次/航班）：火车D737"},{type:"string",content:"是否告知导师/辅导员离校相关信息，并取得导师同意：是"},{type:"string",content:"是否告知家长离校相关信息，并取得家长同意：是"},{type:"string",content:"离校原因：回家探亲"},{type:"string",content:"宿舍楼：学19楼"},{type:"string",content:"宿舍号：537"},{type:"string",content:"离校类型：离校且离京"},{type:"string",content:"预计返校时间：2022-02-20"},{type:"string",content:" 导师/家长知情同意证明："},{type:"jiankangbao",content:this.url4},{type:"string",content:"我承诺对上述填写信息的真实性负责：是"},{type:"string",content:"出行时间是否超过一周：是"},{type:"string",content:"请上传“通信大数据行程卡”截图："},{type:"jiankangbao",content:this.url3}]}},l=o,r=(i("81b3"),i("2877")),d=Object(r["a"])(l,s,n,!1,null,"9d55813e",null);e["default"]=d.exports},e4f6:function(t,e,i){t.exports=i.p+"img/临时进出校审批表2.ced69389.png"}}]);
//# sourceMappingURL=chunk-71f88a96.ba2cff0b.js.map