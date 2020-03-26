import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueWait from 'vue-wait'

Vue.use(VueWait)
Vue.config.productionTip = false
const wait = new VueWait({ useVuex: true })
new Vue({
  router,
  store,
  wait,
  render: h => h(App)
}).$mount('#app')
