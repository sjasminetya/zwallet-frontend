<template>
  <div>
    <aside>
      <div class="main-menu">
        <router-link v-set-font:small to="/page/dashboard" v-bind:class="activeClass('/page/dashboard')">
          <span><i class="fas fa-th-large"></i></span>
          <div class="menu-sidebar">Dashboard</div>
        </router-link>

        <router-link v-set-font:small to="/page/search-receiver" v-bind:class="activeClass('/page/search-receiver')">
          <span><i class="fas fa-arrow-up"></i></span>
          <div class="menu-sidebar">Transfer</div>
        </router-link>

        <router-link v-set-font:small to="/page/top-up" v-bind:class="activeClass('/page/top-up')">
          <span><i class="fas fa-plus"></i></span>
          <div class="menu-sidebar">Top Up</div>
        </router-link>

        <router-link v-set-font:small to="/page/settings-profile" v-bind:class="activeClass('/page/settings-profile')">
          <span><i class="far fa-user"></i></span>
          <div class="menu-sidebar">Profile</div>
        </router-link>

        <div class="menu-logout" @click.prevent="goLogout">
          <div class="menu">
            <span><i class="fas fa-sign-out-alt"></i></span>
            <div class="logout">Logout</div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SideBar',
  data () {
    return {
      pin: '',
      balance: ''
    }
  },
  methods: {
    ...mapActions(['userProfile', 'topup', 'logout']),
    goTopup () {
      const payload = {
        pin: this.pin,
        balance: this.balance
      }
      this.topup(payload).then(() => {
        this.$awn.success('success top up')
        this.userProfile()
      })
    },
    resetModal () {
      this.pin = ''
      this.balance = ''
    },
    goLogout () {
      this.logout().then(() => {
        this.$awn.success('Success logout')
        this.$router.push('/auth/login')
      })
    },
    activeClass: function (path) {
      return {
        active: this.$router.currentRoute.path === path,
        menu: this.$router.currentRoute.path !== path
      }
    }
  },
  mounted () {
    this.userProfile()
    console.log(this.$router.currentRoute.path)
  }
}
</script>

<style scoped>
@import './SideBar.css';
</style>
