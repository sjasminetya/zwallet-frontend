<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Footer, Navbar } from '../../components/module'
export default {
  name: 'Index',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
</style>
