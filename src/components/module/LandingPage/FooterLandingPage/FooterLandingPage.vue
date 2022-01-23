<template>
  <div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>Zwallet</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <p v-set-font:small class="about">
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </p>
          </div>
        </div>

        <hr />

        <div class="row text-bottom d-flex justify-content-between">
          <p class="copyright">{{new Date().getFullYear()}} Zwallet. All right reserved.</p>
          <p class="email">adm.zwallet@gmail.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterLandingPage'
}
</script>

<style scoped>
@import './FooterLandingPage.css';
</style>
