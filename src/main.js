import Vue from 'vue'
import App from './App.vue'
import { router } from './routers/router'
import store from './store/store'
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
