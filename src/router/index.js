import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/auth/Auth.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Index from '../views/pages/index.vue'
import Dashboard from '../views/pages/Dashboard.vue'
import SearchReceiver from '../views/pages/SearchReceiver.vue'
import History from '../views/pages/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/page',
    name: 'Index',
    component: Index,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'search-receiver',
        name: 'SearchReceiver',
        component: SearchReceiver
      },
      {
        path: 'transaction-history',
        name: 'History',
        component: History
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
