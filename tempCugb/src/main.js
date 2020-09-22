import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import "./assets/css/reset.css";
import "./assets/css/global.css";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
