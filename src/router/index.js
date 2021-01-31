import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Auth from '../views/auth/Auth.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import SendEmailReset from '../views/auth/SendEmailReset.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import Index from '../views/pages/index.vue'
import Dashboard from '../views/pages/Dashboard.vue'
import SearchReceiver from '../views/pages/SearchReceiver.vue'
import History from '../views/pages/History.vue'
import InputAmount from '../views/pages/InputAmount.vue'
import Success from '../views/pages/Success.vue'
import SettingsProfile from '../views/pages/SettingsProfile.vue'
import PersonalInformation from '../views/pages/PersonalInformation.vue'
import ManagePhoneNumber from '../views/pages/ManagePhoneNumber.vue'
import ChangePassword from '../views/pages/ChangePassword.vue'
import ChangePin from '../views/pages/ChangePin.vue'

import store from '../store/index'

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
        component: Login,
        meta: { requiresVisitor: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: { requiresVisitor: true }
      },
      {
        path: 'send-email-reset-password',
        name: 'SendEmailReset',
        component: SendEmailReset,
        meta: { requiresVisitor: true }
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: { requiresVisitor: true }
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
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: 'search-receiver',
        name: 'SearchReceiver',
        component: SearchReceiver,
        meta: { requiresAuth: true }
      },
      {
        path: 'transaction-history',
        name: 'History',
        component: History,
        meta: { requiresAuth: true }
      },
      {
        path: 'input-amount',
        name: 'InputAmount',
        component: InputAmount,
        meta: { requiresAuth: true }
      },
      {
        path: 'success',
        name: 'Success',
        component: Success,
        meta: { requiresAuth: true }
      },
      {
        path: 'settings-profile',
        name: 'SettingsProfile',
        component: SettingsProfile,
        meta: { requiresAuth: true }
      },
      {
        path: 'personal-info',
        name: 'PersonalInformation',
        component: PersonalInformation,
        meta: { requiresAuth: true }
      },
      {
        path: 'manage-phone-number',
        name: 'ManagePhoneNumber',
        component: ManagePhoneNumber,
        meta: { requiresAuth: true }
      },
      {
        path: 'change-password',
        name: 'ChangePassword',
        component: ChangePassword,
        meta: { requiresAuth: true }
      },
      {
        path: 'change-pin',
        name: 'ChangePin',
        component: ChangePin,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/page/dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
