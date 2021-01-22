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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
