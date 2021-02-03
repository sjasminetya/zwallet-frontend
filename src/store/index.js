import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    password: '',
    user: {},
    id: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    userLogin: [],
    transactionHistory: [],
    userFriends: [],
    searchName: [],
    profileFriends: [],
    transfer: [],
    topup: [],
    phoneNumber: [],
    pagination: []
  },
  plugins: [createPersistedState()],
  mutations: {
    togglePassword (state) {
      state.password = document.getElementById('password')
      if (state.password.type === 'password') {
        state.password.type = 'text'
      } else {
        state.password.type = 'password'
      }
    },
    set_user (state, payload) {
      state.user = payload
      state.id = payload.id
      state.token = payload.token
    },
    set_user_login (state, payload) {
      state.userLogin = payload
    },
    set_transaction_history (state, payload) {
      state.transactionHistory = payload
    },
    set_user_friends (state, payload) {
      state.userFriends = payload
    },
    set_search_name (state, payload) {
      state.searchName = payload
    },
    set_profile_friends (state, payload) {
      state.profileFriends = payload
    },
    set_transfer (state, payload) {
      state.transfer = payload
    },
    set_topup (state, payload) {
      state.topup = payload
    },
    set_phone_number (state, payload) {
      state.phoneNumber = payload
    },
    set_pagination (state, payload) {
      state.pagination = payload
    },
    remove_token (state) {
      state.token = null
    },
    remove (state) {
      state.id = null
      state.user = {}
      state.userLogin = []
      state.transactionHistory = []
      state.userFriends = []
      state.searchName = []
      state.profileFriends = []
      state.transfer = []
      state.topup = []
      state.phoneNumber = []
      state.pagination = []
    },
    remove_number (state) {
      state.phoneNumber = []
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_API}/users/login`, payload)
          .then(res => {
            const result = res.data.result
            localStorage.setItem('id', result.id)
            localStorage.setItem('token', result.token)
            context.commit('set_user', result)
            resolve(result)
          })
      })
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_API}/users/register`, payload)
          .then(res => {
            const result = res.data.result.message
            context.commit('set_user', result)
            resolve(result)
          })
      })
    },
    sendEmailResetPassword (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_API}/users/send-email`, payload)
          .then(res => {
            const result = res.data.result.message
            context.commit('set_user', result)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    resetPassword (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_URL_API}/users/reset/${payload.id}`, payload)
          .then(res => {
            const result = res.data.result.message
            console.log(result)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logout (context) {
      localStorage.removeItem('id')
      localStorage.removeItem('token')
      context.commit('remove_token')
      context.commit('remove')
    },
    userProfile (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_API}/users/${localStorage.getItem('id')}`, payload)
          .then(res => {
            const result = res.data.result[0]
            context.commit('set_user_login', result)
            resolve(result)
            console.log('user login', result)
          })
      })
    },
    getTransactionHistory (context, noPage = 1) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_API}/transfer/transaction-history/${localStorage.getItem('id')}?page=${noPage}&limit=4`)
          .then(res => {
            const result = res.data.result
            context.commit('set_transaction_history', result.transaction)
            context.commit('set_pagination', result.pagination)
            resolve(result)
            console.log('transaction history', result.transaction)
            console.log('pagination', result.pagination)
          })
      })
    },
    userFriends (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_API}/users/${localStorage.getItem('id')}/friends`, payload)
          .then(res => {
            const result = res.data.result
            context.commit('set_user_friends', result)
            resolve(result)
            console.log('user friends', result)
          })
      })
    },
    searchName (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_API}/users?name=${payload}`)
          .then(res => {
            const result = res.data.result
            context.commit('set_search_name', result)
            resolve(result)
            console.log('search name', result)
          })
      })
    },
    profileFriends (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_API}/users/${payload}`)
          .then(res => {
            const result = res.data.result[0]
            context.commit('set_profile_friends', result)
            resolve(result)
            console.log('profile friends', result)
          })
      })
    },
    transfer (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_API}/transfer`, payload)
          .then(res => {
            const result = res.data.result.message
            context.commit('set_transfer', result)
            resolve(result)
            console.log('transfer', result)
          })
      })
    },
    topup (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_API}/topup`, payload)
          .then(res => {
            const result = res.data.result.message
            context.commit('set_topup', result)
            resolve(result)
            console.log('topup', result)
          })
      })
    },
    updateProfile (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_URL_API}/users/${localStorage.getItem('id')}`, payload)
          .then(res => {
            console.log('data update', res.data.result.message)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    addPhoneNumber (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_API}/phone-number`, payload)
          .then(res => {
            const result = res.data.result.message
            context.commit('set_phone_number', result)
            console.log('add phone number', result)
            resolve(result)
          })
      })
    },
    getPhoneNumber (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_API}/phone-number/user/${localStorage.getItem('id')}`, payload)
          .then(res => {
            const result = res.data.result
            resolve(result)
            context.commit('set_phone_number', result)
            console.log('get number', result)
          })
      })
    },
    deletePhoneNumber (context, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_URL_API}/phone-number/${payload}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        if (response.data.statusCode === 200) {
          if (response.data.result.message === 'Please check your email for activation account') {
            Swal.fire({
              icon: 'success',
              title: 'Success register, check your email to confirmation',
              showConfirmButton: false,
              timer: 2000
            })
            router.push('/auth/login')
          }
        }
        return response
      }, function (error) {
        console.log(error.response)
        if (error.response.data.statusCode === 400) {
          if (error.response.data.err.error === 'Email already exists') {
            Swal.fire({
              icon: 'error',
              title: 'email already exists',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.err.error === 'pin wrong') {
            Swal.fire({
              icon: 'error',
              title: 'PIN wrong',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.err.error === 'you must create pin') {
            Swal.fire({
              icon: 'error',
              title: 'You must create PIN',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.err.error === 'you must update your PIN') {
            Swal.fire({
              icon: 'error',
              title: 'You must create pin',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.err.error === 'email not found') {
            Swal.fire({
              icon: 'error',
              title: 'email not found',
              showConfirmButton: false,
              timer: 2000
            })
          }
        } else if (error.response.data.statusCode === 401) {
          if (error.response.data.err.error === 'Please confirm your email to login!') {
            Swal.fire({
              icon: 'error',
              title: 'Please confirm your email to login!',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.err.error === 'token expired') {
            localStorage.removeItem('id')
            localStorage.removeItem('token')
            context.commit('remove_token')
            context.commit('remove')
            router.push('/auth/login')
          } else if (error.response.data.err.error === 'invalid token') {
            localStorage.removeItem('id')
            localStorage.removeItem('token')
            context.commit('remove_token')
            context.commit('remove')
            router.push('/auth/login')
          } else if (error.response.data.err.error === 'Login failed, wrong password') {
            Swal.fire({
              icon: 'error',
              title: 'Wrong password',
              showConfirmButton: false,
              timer: 2000
            })
          }
        } else if (error.response.data.statusCode === 404) {
          if (error.response.data.err.error === 'FAILED your balance is not enough! please top up') {
            Swal.fire({
              icon: 'error',
              title: 'Your balance is not enough! please top up',
              showConfirmButton: false,
              timer: 2000
            })
          }
        } else if (error.response.data.error.status === 500) {
          if (error.response.data.error.message === 'File too large') {
            Swal.fire({
              icon: 'error',
              title: 'File too large',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.error.message === 'type file not supported') {
            Swal.fire({
              icon: 'error',
              title: 'Type file not supported',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }
        return Promise.reject(error)
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    profile (state) {
      return state.userLogin
    },
    transactionHistory (state) {
      return state.transactionHistory
    },
    friends (state) {
      return state.userFriends
    },
    transferToFriend (state) {
      return state.profileFriends
    },
    number (state) {
      return state.phoneNumber
    },
    getPagination (state) {
      return state.pagination
    },
    dataTransfer (state) {
      return state.transfer
    }
  },
  modules: {
  }
})
