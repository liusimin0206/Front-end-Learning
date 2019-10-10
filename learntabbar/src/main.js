import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tabBar from './components/tabBar/tabBar'

Vue.config.productionTip = false

new Vue({
  router,
  components: {
    tabBar,
  },
  render: h => h(App)
}).$mount('#app')
