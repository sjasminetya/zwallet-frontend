import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAWN from 'vue-awesome-notifications'
import titleMixin from './mixins/titleMixin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('vue-awesome-notifications/dist/styles/style.css')

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAWN)
Vue.mixin(titleMixin)

Vue.directive('set-font', {
  bind: function (el, binding) {
    if (binding.arg === 'large') {
      el.style.fontSize = '40px'
    } else if (binding.arg === 'medium') {
      el.style.fontSize = '22px'
    } else if (binding.arg === 'small') {
      el.style.fontSize = '18px'
    } else {
      el.style.fontSize = '16px'
    }

    if (binding.arg === 'capitalize') {
      el.style.textTransform = 'capitalize'
    } else if (binding.arg === 'uppercase') {
      el.style.textTransform = 'uppercase'
    } else {
      el.style.textTransform = 'normal'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
