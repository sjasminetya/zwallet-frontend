<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="change-pin-main">

                        <h6 v-set-font:small class="change-pin">Change PIN</h6>

                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <p class="text-change-pin">Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                            </div>
                        </div>

                        <div class="content-change-pin">

                            <form @submit.prevent="update" class="digit-group">
                                <PincodeInput v-model="pin" placeholder="0" :length="6" required/>
                                <div class="text-center mb-5">
                                    <Button v-set-font:small type="submit" name="Confirm"/>
                                </div>
                            </form>

                        </div>
                    </div>
                </main>
            </section>
        </div>
    </div>
</template>

<script>
import Button from '../../components/base/Button'
import PincodeInput from 'vue-pincode-input'
import SideBar from '../../components/module/SideBar'
import { mapActions } from 'vuex'
export default {
  name: 'ChangePin',
  components: {
    SideBar,
    PincodeInput,
    Button
  },
  data () {
    return {
      pin: ''
    }
  },
  methods: {
    ...mapActions(['updateProfile']),
    update () {
      const payload = {
        pin: this.pin
      }
      this.updateProfile(payload)
        .then(() => {
          this.$awn.success('success update')
          this.$router.push('/page/settings-profile')
        })
    }
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

    height: 710px;
    width: 800px;
    position: relative;
}

main .change-pin-main {
    display: flex;
    flex-direction: column;
    position: relative;
}

main .change-pin-main .change-pin {
    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    margin-top: 3%;
    margin-left: 3%;

    color: #3A3D42;
}

main .change-pin-main .text-change-pin {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    margin-top: 6%;
    margin-left: 6%;
    margin-bottom: 15%;

    color: #7A7886;
}

main .change-pin-main .content-change-pin {
    display: flex;
    flex-direction: column;
}

main .change-pin-main .content-change-pin form {
    margin: 30px auto;
}

main .change-pin-main .content-change-pin .digit-group input {
    display: flex;
    flex-direction: column;

    width: 45px;
    height: 55px;
    margin-left: 20px;
    margin-bottom: 10px;
    float: left;
    background-color: #fff;

    border: 1px solid rgba(169, 169, 169, 0.6);
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;
}

main .change-pin-main .content-change-pin .digit-group input:hover {
    border: 1px solid #6379F4;
    outline: none;
}

main .change-pin-main .content-change-pin .digit-group input:focus {
    border: 1px solid #6379F4;
    outline: none;
}

main .change-pin-main .content-change-pin button[type="submit"] {

    width: 433px;
    height: 57px;
    margin-top: 20%;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;

    background: #DADADA;
    border-radius: 12px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);

    color: #88888F;
}

footer {
    position: relative;
    bottom: 0;

    background: #6379F4;
    height: 68px;
    width: 100%;
    color: #fff;

    margin-top: 30px;
}

footer .left-copyright {
    position: absolute;
    left: 10%;
    top: 37%;
}

footer .right-number {
    position: absolute;
    left: 65%;
    top: 37%;
}

footer .right-contact {
    position: absolute;
    left: 78%;
    top: 37%;
}

@media (max-width: 1300px) {
    main {
        width: 100%;
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
}

@media (max-width: 992px) {
    main .change-pin-main .text-change-pin {
        margin-left: 3%;
        margin-top: 2%;
    }
}

@media (max-width: 768px) {
    main .change-pin-main .text-change-pin {
        margin-left: 3%;
    }
}

@media (max-width: 576px) {
    main .change-pin-main .text-change-pin {
        top: 2%;
    }
}

@media (max-width: 430px) {
    main .change-pin-main .text-change-pin {
        top: 5%;
    }

    main .change-pin-main .content-change-pin .digit-group input {
        margin-bottom: 5px;
    }

    main .change-pin-main .content-change-pin button[type="submit"] {
        width: 100%;
        margin-top: 10px;
    }
}

@media (max-width: 377px) {
    main .change-pin-main .text-change-pin {
        top: 5%;
    }

    main .change-pin-main .content-change-pin .digit-group input {
        margin-bottom: 5px;
    }

    main .change-pin-main .content-change-pin button[type="submit"] {
        width: 100%;
        margin-top: 10px;
    }
}
</style>
