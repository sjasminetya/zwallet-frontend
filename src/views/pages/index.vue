<template>
    <div>
        <Navbar/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'
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
