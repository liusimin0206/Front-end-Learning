import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// axios({
//   url:
//     "http://localhost:8080/XingKaiHu1/jsonServlet?bottleidjs=DXSDC01-91&timejs=20180710"
// })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
axios({
  method: "post",
  url: "http://localhost:8080/XingKaiHu1/insertServlet",
  data: [
    {
      name: "1",
      password: "2"
    },
    {
      name: "我爱",
      我啊: "ss2"
    }
  ]
}).then(res => {
  console.log(res.data);
});
