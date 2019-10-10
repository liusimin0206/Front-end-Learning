import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

axios({
  url: "https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=18310511830"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
