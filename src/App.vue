<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  },
  created () {
    this.interceptorRequest()
    this.interceptorResponse()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
}

#app {
  background: #E5E5E5;
}
</style>
