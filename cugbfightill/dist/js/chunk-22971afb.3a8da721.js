(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22971afb"],{"01e4":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"update"},[r("a-form-model",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-col":{span:5},"wrapper-col":{span:12}}},[r("a-form-model-item",{attrs:{label:"姓名",prop:"userName"}},[r("a-input",{attrs:{placeholder:"您的姓名"},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}},[r("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-model-item",{attrs:{label:"学号",prop:"userId"}},[r("a-input",{attrs:{placeholder:"您的学号",prefix:"ID"},model:{value:t.form.userId,callback:function(e){t.$set(t.form,"userId",e)},expression:"form.userId"}})],1),r("a-form-model-item",{attrs:{label:"健康码",prop:"userPic"}},[r("a-upload",{attrs:{name:"file",accept:"image/*","list-type":"picture",beforeUpload:t.beforeUpload,fileList:t.fileList},on:{change:t.handleChange}},[r("a-button",[t._v("上传附件")]),r("span",{staticClass:"uploadtips",on:{click:function(t){t.stopPropagation()}}},[t._v("支持png、jpg、jpeg格式，最大不超过2M。 ")])],1)],1),r("a-form-model-item",{attrs:{label:"行程码",prop:"routePic"}},[r("a-upload",{attrs:{name:"file",accept:"image/*","list-type":"picture",beforeUpload:t.beforeUpload1,fileList:t.fileList1},on:{change:function(e){return t.handleChange(e,1)}}},[r("a-button",[t._v("上传附件")]),r("span",{staticClass:"uploadtips",on:{click:function(t){t.stopPropagation()}}},[t._v("支持png、jpg、jpeg格式，最大不超过2M。 ")])],1)],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:6}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.storeUserMessage}},[t._v(" 确认 ")]),r("a-button",{staticStyle:{"margin-left":"10px"},on:{click:t.resetForm}},[t._v(" 重置 ")])],1)],1)],1)},o=[];r("fb6a"),r("b0c0"),r("4d63"),r("ac1f"),r("25f0");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return a(t)||c(t)||s(t)||u()}var l={data:function(){return{fileList:[],fileList1:[],form:{userName:"",userId:"",userPic:"",routePic:""},rules:{userName:[{required:!0,message:"Please input name",trigger:"blur"}],userId:[{required:!0,message:"Please input userId",trigger:"blur"}],userPic:[{required:!0,message:"Please upload picture",trigger:"blur"}],routePic:[{required:!0,message:"Please upload picture",trigger:"blur"}]}}},methods:{handleChange:function(t,e){if(1===e){var r=f(t.fileList);r=r.slice(-1),this.fileList1=r}else{var n=f(t.fileList);n=n.slice(-1),this.fileList=n}},beforeUpload:function(t){var e=this,r=new RegExp(/^.*?\.(jpg|jpeg|png)$/,"i");r.test(t.name)?t.size>2097152&&(t.status="error"):t.status="error";var n=new FileReader;return n.readAsDataURL(t),n.onload=function(){e.form.userPic=n.result},!1},beforeUpload1:function(t){var e=this,r=new RegExp(/^.*?\.(jpg|jpeg|png)$/,"i");r.test(t.name)?t.size>2097152&&(t.status="error"):t.status="error";var n=new FileReader;return n.readAsDataURL(t),n.onload=function(){e.form.routePic=n.result},!1},storePicture:function(t){localStorage.setItem("jianKangMa",t)},storePicture1:function(t){localStorage.setItem("xingChenMa",t)},storeUserInfo:function(t,e){localStorage.setItem("_name",t),localStorage.setItem("_id",e)},storeUserMessage:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return!1;t.storePicture(t.form.userPic),t.storePicture1(t.form.routePic),t.storeUserInfo(t.form.userName,t.form.userId),t.$router.push("/"),t.$emit("refresh")}))},resetForm:function(){this.$refs.form.resetFields()}}},d=l,p=(r("9526"),r("2877")),g=Object(p["a"])(d,n,o,!1,null,"59a99fd3",null);e["default"]=g.exports},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"0606":function(t,e,r){},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),a=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"4d63":function(t,e,r){var n=r("83ab"),o=r("da84"),i=r("94ca"),a=r("7156"),c=r("9bf2").f,s=r("241c").f,u=r("44e7"),f=r("ad6d"),l=r("9f7f"),d=r("6eeb"),p=r("d039"),g=r("69f3").set,v=r("2626"),b=r("b622"),m=b("match"),y=o.RegExp,h=y.prototype,S=/a/g,x=/a/g,w=new y(S)!==S,P=l.UNSUPPORTED_Y,L=n&&i("RegExp",!w||P||p((function(){return x[m]=!1,y(S)!=S||y(x)==x||"/a/i"!=y(S,"i")})));if(L){var A=function(t,e){var r,n=this instanceof A,o=u(t),i=void 0===e;if(!n&&o&&t.constructor===A&&i)return t;w?o&&!i&&(t=t.source):t instanceof A&&(i&&(e=f.call(t)),t=t.source),P&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var c=a(w?new y(t,e):y(t,e),n?this:h,A);return P&&r&&g(c,{sticky:r}),c},O=function(t){t in A||c(A,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},E=s(y),I=0;while(E.length>I)O(E[I++]);h.constructor=A,A.prototype=h,d(o,"RegExp",A)}v("RegExp")},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,p,g=o(t),v="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,y=void 0!==m,h=u(g),S=0;if(y&&(m=n(m,b>2?arguments[2]:void 0,2)),void 0==h||v==Array&&a(h))for(e=c(g.length),r=new v(e);e>S;S++)p=y?m(g[S],S):g[S],s(r,S,p);else for(l=h.call(g),d=l.next,r=new v;!(f=d.call(l)).done;S++)p=y?i(l,m,[f.value,S],!0):f.value,s(r,S,p);return r.length=S,r}},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,a,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e5383"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},9263:function(t,e,r){"use strict";var n=r("ad6d"),o=r("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],l=s||f||u;l&&(c=function(t){var e,r,o,c,l=this,d=u&&l.sticky,p=n.call(l),g=l.source,v=0,b=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(g="(?: "+g+")",b=" "+b,v++),r=new RegExp("^(?:"+g+")",p)),f&&(r=new RegExp("^"+g+"$(?!\\s)",p)),s&&(e=l.lastIndex),o=i.call(d?r:l,b),d?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=l.lastIndex,l.lastIndex+=o[0].length):l.lastIndex=0:s&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),f&&o&&o.length>1&&a.call(o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),t.exports=c},9526:function(t,e,r){"use strict";var n=r("0606"),o=r.n(n);o.a},"9f7f":function(t,e,r){"use strict";var n=r("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),g=r("825a"),v=r("7b0b"),b=r("fc6a"),m=r("c04e"),y=r("5c6c"),h=r("7c73"),S=r("df75"),x=r("241c"),w=r("057f"),P=r("7418"),L=r("06cf"),A=r("9bf2"),O=r("d1e7"),E=r("9112"),I=r("6eeb"),R=r("5692"),C=r("f772"),j=r("d012"),T=r("90e3"),N=r("b622"),U=r("e5383"),M=r("746f"),k=r("d44e"),_=r("69f3"),$=r("b727").forEach,D=C("hidden"),F="Symbol",V="prototype",G=N("toPrimitive"),q=_.set,B=_.getterFor(F),H=Object[V],J=o.Symbol,K=i("JSON","stringify"),Y=L.f,z=A.f,Q=w.f,W=O.f,X=R("symbols"),Z=R("op-symbols"),tt=R("string-to-symbol-registry"),et=R("symbol-to-string-registry"),rt=R("wks"),nt=o.QObject,ot=!nt||!nt[V]||!nt[V].findChild,it=c&&f((function(){return 7!=h(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(H,e);n&&delete H[e],z(t,e,r),n&&t!==H&&z(H,e,n)}:z,at=function(t,e){var r=X[t]=h(J[V]);return q(r,{type:F,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},st=function(t,e,r){t===H&&st(Z,e,r),g(t);var n=m(e,!0);return g(r),l(X,n)?(r.enumerable?(l(t,D)&&t[D][n]&&(t[D][n]=!1),r=h(r,{enumerable:y(0,!1)})):(l(t,D)||z(t,D,y(1,{})),t[D][n]=!0),it(t,n,r)):z(t,n,r)},ut=function(t,e){g(t);var r=b(e),n=S(r).concat(gt(r));return $(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?h(t):ut(h(t),e)},lt=function(t){var e=m(t,!0),r=W.call(this,e);return!(this===H&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,D)&&this[D][e])||r)},dt=function(t,e){var r=b(t),n=m(e,!0);if(r!==H||!l(X,n)||l(Z,n)){var o=Y(r,n);return!o||!l(X,n)||l(r,D)&&r[D][n]||(o.enumerable=!0),o}},pt=function(t){var e=Q(b(t)),r=[];return $(e,(function(t){l(X,t)||l(j,t)||r.push(t)})),r},gt=function(t){var e=t===H,r=Q(e?Z:b(t)),n=[];return $(r,(function(t){!l(X,t)||e&&!l(H,t)||n.push(X[t])})),n};if(s||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===H&&r.call(Z,t),l(this,D)&&l(this[D],e)&&(this[D][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(H,e,{configurable:!0,set:r}),at(e,t)},I(J[V],"toString",(function(){return B(this).tag})),I(J,"withoutSetter",(function(t){return at(T(t),t)})),O.f=lt,A.f=st,L.f=dt,x.f=w.f=pt,P.f=gt,U.f=function(t){return at(N(t),t)},c&&(z(J[V],"description",{configurable:!0,get:function(){return B(this).description}}),a||I(H,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:J}),$(S(rt),(function(t){M(t)})),n({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=J(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:f((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(v(t))}}),K){var vt=!s||f((function(){var t=J();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,K.apply(null,o)}})}J[V][G]||E(J[V],G,J[V].valueOf),k(J,F),j[D]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},ac1f:function(t,e,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var r=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:s,l=i(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,f,l)}))}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(p,g,v,b){for(var m,y,h=i(p),S=o(h),x=n(g,v,3),w=a(S.length),P=0,L=b||c,A=e?L(p,w):r?L(p,0):void 0;w>P;P++)if((d||P in S)&&(m=S[P],y=x(m,P,h),t))if(e)A[P]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return P;case 2:s.call(A,m)}else if(f)return!1;return l?-1:u||f?f:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),f=i.values;for(var l in o){var d=n[l],p=d&&d.prototype;if(p){if(p[s]!==f)try{a(p,s,f)}catch(v){p[s]=f}if(p[u]||a(p,u,l),o[l])for(var g in i)if(p[g]!==i[g])try{a(p,g,i[g])}catch(v){p[g]=i[g]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var g=p.toString,v="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=g.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e5383:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),g=d("slice",{ACCESSORS:!0,0:0,1:2}),v=f("species"),b=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var r,n,f,l=s(this),d=c(l.length),p=a(t,d),g=a(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,p,g);for(n=new(void 0===r?Array:r)(m(g-p,0)),f=0;p<g;p++,f++)p in l&&u(n,f,l[p]);return n.length=f,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-22971afb.3a8da721.js.map