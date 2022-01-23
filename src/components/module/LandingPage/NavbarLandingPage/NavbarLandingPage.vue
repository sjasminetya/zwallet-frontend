<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand text-zwallet" href="#">Zwallet</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <div
              v-set-font:small
              class="btn btn-login"
              @click.prevent="goLogin"
            >
              Login
            </div>
            <div
              v-set-font:small
              class="btn btn-sign-up"
              @click.prevent="goRegister"
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarLandingPage',
  methods: {
    goLogin () {
      this.$router.push('/auth/login')
    },
    goRegister () {
      this.$router.push('/auth/register')
    }
  }
}
</script>

<style scoped>
@import './NavbarLandingPage.css';
</style>
