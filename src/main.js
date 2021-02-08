import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAWN from 'vue-awesome-notifications'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('vue-awesome-notifications/dist/styles/style.css')

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAWN)

Vue.directive('set-font', {
  bind: function (el, binding) {
    if (binding.arg === 'large') {
      el.style.fontSize = '40px'
    } else if (binding.arg === 'small') {
      el.style.fontSize = '18px'
    } else {
      el.style.fontSize = '16px'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
