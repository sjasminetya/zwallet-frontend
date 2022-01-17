<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 col-md-7 d-none d-sm-block background-container">
          <h1>Zwallet</h1>

          <div class="login-image">
            <img
              src="../../assets/img-auth/login-phone.png"
              alt="phone"
              class="img-responsive login-phone"
            />
          </div>

          <div class="content">
            <h2>App that Covering Banking Needs.</h2>
            <p>
              Zwallet is an application that focussing in banking needs for all
              users<br />in the world. Always updated and always following world
              trends.<br />
              5000+ users registered in Zwallet everyday with worldwide<br />users
              coverage.
            </p>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 form-container">
          <div class="col-lg-10 col-md-12 col-sm-9 col-xs-12 form-box">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.container-fluid {
  font-size: 16px;
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
}

.background-container {
  background-image: url("../../assets/img-auth/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.background-container h1 {
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  font-style: normal;
  padding: 50px 0 0 169px;
}

.background-container .content {
  margin-top: 40px;
  padding-left: 169px;
  margin-bottom: 70px;
}

.background-container h2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  padding-bottom: 30px;
}

.background-container p {
  font-weight: normal;
  line-height: 23px;
  font-style: normal;
  font-size: 16px;
}

.background-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.background-container .login-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-container .login-image .login-phone {
  width: 700px;
}

.background-container .phone {
  position: absolute;
  left: 250px;
  top: 120px;
}

.background-container .phone2 {
  position: absolute;
  left: 95px;
  top: 120px;
}

.form-container {
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.form-box {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1300px) {
  .background-container h1 {
    padding-left: 120px;
  }

  .background-container .content {
    padding-left: 120px;
  }
}

@media (max-width: 1100px) {
  .background-container h1 {
    padding-left: 50px;
  }

  .background-container .content {
    padding-left: 50px;
  }
}

@media (max-width: 768px) {
  .background-container h1 {
    padding-left: 120px;
  }

  .background-container .content {
    padding-left: 120px;
  }
}

@media (max-width: 663px) {
  .background-container h1 {
    padding-left: 90px;
  }

  .background-container .content {
    padding-left: 90px;
  }
}

@media (max-width: 622px) {
  .background-container h1 {
    padding-left: 50px;
  }

  .background-container .content {
    padding-left: 50px;
  }
}
</style>
