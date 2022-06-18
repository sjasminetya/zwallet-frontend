<template>
  <div>
    <div class="container">
      <section class="main-container">
        <SideBar />
        <main>
          <div class="section-profile">
            <div class="user-img">
              <img :src="profile.image" alt="user profile" />
            </div>
            <input type="file" ref="file" id="file" @change="update" />
            <label for="file" class="text-edit">
              <h5>Edit</h5>
            </label>

            <div class="name-phone-profile">
              <h6 v-set-font:small v-set-font:capitalize>
                {{ profile.firstName }} {{ profile.lastName }}
              </h6>
              <p>{{ profile.phoneNumber }}</p>
            </div>
          </div>

          <div class="button-profile">
            <div class="btn btn-personal">
              <router-link to="/page/personal-info"
                >Personal Information<i class="fas fa-arrow-right"></i
              ></router-link>
            </div>

            <div class="btn btn-change-password">
              <router-link to="/page/change-password"
                >Change Password<i class="fas fa-arrow-right"></i
              ></router-link>
            </div>

            <div class="btn btn-change-pin">
              <router-link to="/page/change-pin"
                >Change PIN<i class="fas fa-arrow-right"></i
              ></router-link>
            </div>

            <div class="btn btn-logout">
              <div @click.prevent="goLogout">Logout</div>
            </div>
          </div>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/module/SideBar/SideBar.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SettingsProfile',
  components: {
    SideBar
  },
  data () {
    return {
      image: ''
    }
  },
  methods: {
    ...mapActions(['userProfile', 'updateProfile', 'logout']),
    update () {
      this.image = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('image', this.image)
      this.updateProfile(formData)
        .then(() => {
          this.$awn.success('success update image')
          this.userProfile()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goLogout () {
      this.logout().then(() => {
        this.$awn.success('Success logout')
        this.$router.push('/auth/login')
      })
    }
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
.main-container {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 0;
  margin-top: 30px;
}

main {
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  margin-left: 10px;
  min-height: 100vh;
  width: 800px;
  position: relative;
}

main .section-profile {
  display: flex;
  flex-direction: column;
}

main .section-profile .user-img img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 5%;
  margin-left: 45%;
}

main .section-profile input {
  display: none;
}

main .section-profile .text-edit span {
  position: absolute;
  top: 22%;
  left: 47%;
  color: #000;
  cursor: pointer;
}

main .section-profile .text-edit h5 {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  text-align: center;

  color: #7a7886;
  margin-top: 2%;
  margin-left: 30px;
  margin-bottom: 3%;
}

main .section-profile .name-phone-profile {
  display: flex;
  flex-direction: column;
}

main .section-profile .name-phone-profile h6 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;

  color: #4d4b57;
}

main .section-profile .name-phone-profile p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  text-align: center;

  color: #7a7886;
}

main .button-profile {
  display: flex;
  flex-direction: column;
  position: relative;
}

main .button-profile .btn-personal,
main .button-profile .btn-change-password,
main .button-profile .btn-change-pin,
main .button-profile .btn-logout {
  width: 433px;
  height: 64px;
  margin: 15px auto;
  padding-top: 15px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #4d4b57;

  background: #e5e8ed;
  border-radius: 10px;
}

main .button-profile .btn-personal a,
main .button-profile .btn-change-password a,
main .button-profile .btn-change-pin a,
main .button-profile .btn-logout a {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #4d4b57;
  margin-left: -55%;
}

main .button-profile .btn-change-password a {
  margin-left: -60%;
}

main .button-profile .btn-change-pin a {
  margin-left: -69%;
}

main .button-profile .btn-logout a {
  margin-left: -81%;
}

main .button-profile .btn-personal a:hover,
main .button-profile .btn-change-password a:hover,
main .button-profile .btn-change-pin a:hover,
main .button-profile .btn-logout a:hover {
  text-decoration: none;
}

main .button-profile .btn-personal i {
  position: absolute;
  right: 28%;
  top: 11%;
}

main .button-profile .btn-change-password i {
  position: absolute;
  right: 28%;
  top: 36%;
}

main .button-profile .btn-change-pin i {
  position: absolute;
  right: 28%;
  top: 60%;
}

@media (max-width: 1300px) {
  main {
    width: 100%;
  }
}

@media (max-width: 1199px) {
  main .section-profile .text-edit span {
    top: 21%;
  }
}

@media (max-width: 1100px) {
  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  main {
    width: 100%;
    margin: 10px auto;
  }

  main .section-profile .text-edit span {
    top: 23.5%;
  }

  main .button-profile .btn-personal i,
  main .button-profile .btn-change-password i,
  main .button-profile .btn-change-pin i {
    left: 65%;
  }
}

@media (max-width: 992px) {
  main .section-profile .text-edit span {
    top: 21.5%;
    left: 46%;
  }

  main .button-profile .btn-personal i,
  main .button-profile .btn-change-password i,
  main .button-profile .btn-change-pin i {
    right: 0%;
  }
}

@media (max-width: 987px) {
  main .button-profile .btn-personal i,
  main .button-profile .btn-change-password i,
  main .button-profile .btn-change-pin i {
    right: 10%;
  }
}

@media (max-width: 768px) {
  main .section-profile .text-edit span {
    top: 19%;
  }
}

@media (max-width: 755px) {
  main .button-profile .btn-personal i,
  main .button-profile .btn-change-password i,
  main .button-profile .btn-change-pin i {
    right: 0%;
  }
}

@media (max-width: 442px) {
  main .section-profile .text-edit span {
    top: 18%;
    left: 44%;
  }

  main .button-profile .btn-personal,
  main .button-profile .btn-change-password,
  main .button-profile .btn-change-pin,
  main .button-profile .btn-logout {
    width: 380px;
    margin: 15px 10px;
  }

  main .button-profile .btn-personal a,
  main .button-profile .btn-change-password a,
  main .button-profile .btn-change-pin a,
  main .button-profile .btn-logout a {
    margin-left: -150px;
  }

  main .button-profile .btn-change-password a {
    margin-left: -180px;
  }

  main .button-profile .btn-change-pin a {
    margin-left: -230px;
  }

  main .button-profile .btn-logout a {
    margin-left: -260px;
  }
}

@media (max-width: 415px) {
  main .section-profile .user-img img {
    margin-left: 35%;
  }

  main .section-profile .text-edit span {
    top: 18%;
    left: 44%;
  }

  main .button-profile .btn-personal,
  main .button-profile .btn-change-password,
  main .button-profile .btn-change-pin,
  main .button-profile .btn-logout {
    width: 350px;
    margin: 15px 10px;
  }

  main .button-profile .btn-personal a,
  main .button-profile .btn-change-password a,
  main .button-profile .btn-change-pin a,
  main .button-profile .btn-logout a {
    margin-left: -150px;
  }

  main .button-profile .btn-change-password a {
    margin-left: -180px;
  }

  main .button-profile .btn-change-pin a {
    margin-left: -230px;
  }

  main .button-profile .btn-logout a {
    margin-left: -260px;
  }
}

@media (max-width: 379px) {
  main .button-profile .btn-personal,
  main .button-profile .btn-change-password,
  main .button-profile .btn-change-pin,
  main .button-profile .btn-logout {
    width: 310px;
    margin: 15px 10px;
  }

  main .button-profile .btn-personal a,
  main .button-profile .btn-change-password a,
  main .button-profile .btn-change-pin a,
  main .button-profile .btn-logout a {
    margin-left: -130px;
  }

  main .button-profile .btn-change-password a {
    margin-left: -150px;
  }

  main .button-profile .btn-change-pin a {
    margin-left: -200px;
  }

  main .button-profile .btn-logout a {
    margin-left: -230px;
  }
}

@media (max-width: 348px) {
  main .section-profile .text-edit span {
    top: 17.5%;
    left: 44%;
  }

  main .button-profile .btn-personal,
  main .button-profile .btn-change-password,
  main .button-profile .btn-change-pin,
  main .button-profile .btn-logout {
    width: 285px;
    margin: 15px 10px;
  }

  main .button-profile .btn-personal a,
  main .button-profile .btn-change-password a,
  main .button-profile .btn-change-pin a,
  main .button-profile .btn-logout a {
    margin-left: -100px;
  }

  main .button-profile .btn-change-password a {
    margin-left: -120px;
  }

  main .button-profile .btn-change-pin a {
    margin-left: -170px;
  }

  main .button-profile .btn-logout a {
    margin-left: -200px;
  }
}

@media (max-width: 320px) {
  main .section-profile .user-img img {
    margin-left: 32%;
  }

  main .button-profile .btn-personal,
  main .button-profile .btn-change-password,
  main .button-profile .btn-change-pin,
  main .button-profile .btn-logout {
    width: 270px;
  }
}
</style>
