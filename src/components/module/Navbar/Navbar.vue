<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
      <div class="container">
        <div class="text-zwallet">
          <h2>Zwallet</h2>
        </div>

        <div class="navbar-nav ml-auto">
          <div class="nav-right">
            <div class="user-img">
              <img class="navbar-brand" :src="profile.image" alt="man" />
            </div>

            <div class="name-phone">
              <h5 v-set-font:small v-set-font:capitalize>
                {{ profile.firstName }} {{ profile.lastName }}
              </h5>
              <h6 class="number-phone">{{ profile.phoneNumber }}</h6>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['userProfile'])
  },
  computed: {
    ...mapGetters(['profile'])
  },
  mounted () {
    this.userProfile()
  }
}
</script>

<style scoped>
@import "./Navbar.css";
</style>
