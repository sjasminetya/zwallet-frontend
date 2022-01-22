<template>
  <div>
    <footer>
      <div class="container d-flex justify-content-between align-items-center">
        <div class="left-copyright ">
          <h6>{{ new Date().getFullYear() }} Zwallet. All right reserved</h6>
        </div>

        <!-- <div class="right-number ml-5">
        <h6>+62 5637 8882 9901</h6>
      </div> -->

        <div class="right-contact">
          <h6>adm.zwallet@gmail.com</h6>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
@import "./Footer.css";
</style>
