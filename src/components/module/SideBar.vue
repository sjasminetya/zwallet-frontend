<template>
  <div>
    <aside>
        <div class="main-menu">
            <router-link v-set-font:small to="/page/dashboard" class="menu">
                <span><i class="fas fa-th-large"></i></span>
                <div class="menu-sidebar">Dashboard</div>
            </router-link>

            <router-link v-set-font:small to="/page/search-receiver" class="menu">
                <span><i class="fas fa-arrow-up"></i></span>
                <div class="menu-sidebar">Transfer</div>
            </router-link>

            <div v-set-font:small class="menu">
                <span v-b-modal.modal-center><i class="fas fa-plus"></i></span>
                <div class="menu-sidebar" v-b-modal.modal-center>Top Up</div>
                <b-modal id="modal-center" title="Top Up saldo" @ok="goTopup" @show="resetModal" @hidden="resetModal">
                    <h6>Input amount</h6>
                    <b-form-input v-model="balance" placeholder="Input amount" type="number" required></b-form-input>
                    <h6>Input PIN</h6>
                    <PincodeInput v-model="pin" placeholder="0" :length="6" required/>
                </b-modal>
            </div>

            <router-link v-set-font:small to="/page/settings-profile" class="menu">
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
import PincodeInput from 'vue-pincode-input'
import { mapActions } from 'vuex'
export default {
  name: 'SideBar',
  components: {
    PincodeInput
  },
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
      this.topup(payload)
        .then(() => {
          this.$awn.success('success top up')
          this.userProfile()
        })
    },
    resetModal () {
      this.pin = ''
      this.balance = ''
    },
    goLogout () {
      this.logout()
        .then(() => {
          this.$awn.success('Success logout')
          this.$router.push('/auth/login')
        })
    }
  },
  mounted () {
    this.userProfile()
  }
}
</script>

<style scoped>
aside {
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    height: 710px;
    width: 280px;
    padding-top: 50px;

    position: relative;
}

aside .main-menu {
    display: flex;
    flex-direction: column;
}

aside .main-menu .menu {
    margin-bottom: 50px;
    display: flex;
    font-style: normal;
    font-weight: normal;
    line-height: 31px;
    list-style-type: none;

    color: #3a3d42;
}

aside .main-menu .menu span {
    margin-left: 40px;
}

aside .main-menu .menu .menu-sidebar,
aside .main-menu .menu h6 {
    color: #3a3d42;
    margin-left: 20px;
    padding-bottom: 20px;
}

aside .main-menu .menu .menu-sidebar:focus {
    outline: none;
}

aside .main-menu .menu-logout .menu {
    display: flex;
}

aside .main-menu .menu:hover {
    text-decoration: none;
}

aside .main-menu .menu-logout .menu .logout {
    margin-left: 20px;
    cursor: pointer;
}

aside .main-menu .menu a:hover {
    text-decoration: none;
    color: #3a3d42;
}

aside .main-menu .menu-logout {
    position: absolute;
    bottom: 0px;
}

@media (max-width: 1100px) {
    aside {
        margin-top: 20px;
        width: 100%;
        height: 150px;
    }

    aside .main-menu {
        display: flex;
        flex-direction: row;
    }

    aside .main-menu .menu-logout {
        right: 5%;
        top: 33%;
    }
}

@media (max-width: 992px) {
    aside {
        width: 100%;
        height: 180px;
    }

    aside .main-menu {
        display: flex;
        flex-direction: row;
    }

    aside .main-menu .menu-logout {
        left: 0%;
        top: 55%;
    }
}

@media (max-width: 768px) {
    aside {
        width: 100%;
        height: 200px;
    }

    aside .main-menu {
        display: flex;
        flex-direction: row;
    }

    aside .main-menu .menu .menu-sidebar,
    aside .main-menu .menu-logout .menu .logout {
        display: none;
    }

    aside .main-menu .menu span {
        margin-left: 85px;
    }

    aside .main-menu .menu-logout {
        left: 0px;
        bottom: 0px;
    }
}

@media (max-width: 576px) {
    aside {
        height: 150px;
    }

    aside .main-menu .menu span {
        margin-left: 70px;
    }

    aside .main-menu .menu-logout {
        margin-top: -33px;
        margin-left: 350px;
    }
}

@media (max-width: 520px) {
    aside .main-menu .menu span {
        margin-left: 60px;
    }

    aside .main-menu .menu-logout {
        margin-left: 340px;
    }
}

@media (max-width: 492px) {
    aside .main-menu .menu span {
        margin-left: 55px;
    }

    aside .main-menu .menu-logout {
        margin-left: 300px;
    }
}

@media (max-width: 461px) {
    aside .main-menu .menu-logout {
        margin-left: 270px;
    }
}

@media (max-width: 430px) {
    aside .main-menu .menu span {
        margin-left: 50px;
    }
}

@media (max-width: 415px) {
    aside {
        height: 100px;
    }

    aside .main-menu .menu {
        margin-top: -15px;
    }

    aside .main-menu .menu span {
        margin-left: 40px;
    }

    aside .main-menu .menu-logout {
        margin-top: -5px;
        margin-left: 260px;
    }
}

@media (max-width: 379px) {
    aside {
        height: 100px;
    }

    aside .main-menu .menu {
        margin-top: -15px;
    }

    aside .main-menu .menu span {
        margin-left: 44px;
    }

    aside .main-menu .menu-logout {
        margin-top: -6px;
        margin-left: 250px;
    }
}

@media (max-width: 367px) {
    aside .main-menu .menu span {
        margin-left: 42px;
    }

    aside .main-menu .menu-logout {
        margin-top: -6px;
        margin-left: 240px;
    }
}

@media (max-width: 351px) {
    aside .main-menu .menu span {
        margin-left: 40px;
    }

    aside .main-menu .menu-logout {
        margin-top: -6px;
        margin-left: 230px;
    }
}

@media (max-width: 331px) {
    aside .main-menu .menu span {
        margin-left: 35px;
    }

    aside .main-menu .menu-logout {
        margin-top: -6px;
        margin-left: 210px;
    }
}

@media (max-width: 325px) {
    aside {
        height: 100px;
    }

    aside .main-menu .menu {
        margin-top: -15px;
    }

    aside .main-menu .menu span {
        margin-left: 25px;
    }

    aside .main-menu .menu-logout {
        margin-top: -5px;
        margin-left: 200px;
    }
}
</style>
