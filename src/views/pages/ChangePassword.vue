<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="change-password-main">

                        <h6 class="change-password">Change Password</h6>

                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <p class="text-change-password">You must enter your current password and then type your new password twice.</p>
                            </div>
                        </div>

                        <div class="content-change-password">

                            <form @submit.prevent="updatePassword">
                                <div class="form-input">
                                    <span><i class="fas fa-lock"></i></span>
                                    <input v-model.trim="$v.password.$model" :type="[showPassword ? 'password' : 'text']" :class="{ 'is-invalid': validationStatus($v.password) }" class="form-control" placeholder="New password">
                                    <span class="span-eye" @click="showPassword = !showPassword"><i class="far" :class="[showPassword ? 'fa-eye-slash' : 'fa-eye']" id="eye"></i></span>
                                    <div class="invalid-feedback" v-if="!$v.password.required">Field is required.</div>
                                    <div class="invalid-feedback" v-if="!$v.password.minLength">Field must have at least {{ $v.password.$params.minLength.min }} characters.</div>
                                </div>

                                <div class="form-input">
                                    <span><i class="fas fa-lock"></i></span>
                                    <input v-model.trim="$v.repeatPassword.$model" :type="[showPassword ? 'password' : 'text']" :class="{ 'is-invalid': validationStatus($v.repeatPassword) }" class="form-control" placeholder="Repeat New password">
                                    <span class="span-eye" @click="showPassword = !showPassword"><i class="far" :class="[showPassword ? 'fa-eye-slash' : 'fa-eye']" id="eye"></i></span>
                                    <div class="invalid-feedback" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
                                </div>

                                <div class="text-center mb-3">
                                    <Button type="submit" name="Change Password"/>
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
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import SideBar from '../../components/module/SideBar'
export default {
  name: 'ChangePassword',
  components: {
    SideBar,
    Button
  },
  data () {
    return {
      password: '',
      repeatPassword: '',
      showPassword: false
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    ...mapActions(['userProfile', 'updateProfile']),
    ...mapMutations(['togglePassword']),
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    updatePassword () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return

      const payload = {
        password: this.password
      }
      this.updateProfile(payload)
        .then(() => {
          this.$awn.success('Success Update password')
          this.$router.push('/page/personal-info')
        })
    }
  },
  computed: {
    ...mapGetters(['profile'])
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

main .change-password-main .change-password {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin-top: 3%;
    margin-left: 3%;

    color: #3A3D42;
}

main .change-password-main .text-change-password {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    margin-top: 6%;
    margin-left: 6%;
    margin-bottom: 15%;

    color: #7A7886;
}

main .change-password-main .content-change-password {
    display: flex;
    flex-direction: column;
}

main .change-password-main .content-change-password form {
    margin: 20px auto;
}

main .change-password-main .content-change-password .form-input {
    position: relative;
}

main .change-password-main .content-change-password .form-input input {
    width: 431px;
    height: 40px;
    margin-bottom: 60px;
    border-radius: 0;
    border-color: rgba(169, 169, 169, 0.6) !important;
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    outline: none;
    background: white;
    padding-left: 45px;
    box-shadow: none !important;
}

main .change-password-main .content-change-password .form-input .form-control.is-invalid {
    border-bottom: 2px solid red !important;
}

main .change-password-main .content-change-password .form-input .form-control.is-invalid:focus {
    border-bottom: 2px solid red !important;
    box-shadow: none !important;
}

main .change-password-main .content-change-password .form-input .invalid-feedback,
main .change-password-main .content-change-password .form-input .invalid-feedback-password {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  color: red;
  margin: 0;
  padding-top: 0;
  font-size: 12px;
}

main .change-password-main .content-change-password .form-input .toggle-password {
    position: absolute;
    top: 20px;
    left: 390px;
    opacity: 1;
}

main .change-password-main .content-change-password .form-input span {
    position: absolute;
    top: 8px;
    padding-left: 5px;
    color: rgba(169, 169, 169, 0.6);
}

main .change-password-main .content-change-password .form-input span.span-eye {
    left: 370px;
    cursor: pointer;
}

main .change-password-main .content-change-password .form-input span.span-eye:active {
    color: #000;
}

main .change-password-main .content-change-password button[type="submit"] {

    width: 433px;
    height: 57px;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    background: #DADADA;
    border-radius: 12px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;

    color: #88888F;
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
    main .change-password-main .text-change-password {
        margin-left: 3%;
        margin-top: 2%;
    }
}

@media (max-width: 768px) {
    main .change-password-main .text-change-password {
        margin-left: 3%;
    }
}

@media (max-width: 576px) {
    main .change-password-main .text-change-password {
        top: 2%;
    }
}

@media (max-width: 460px) {
    main .change-password-main .content-change-password .form-input input {
        width: 300px;
    }

    main .change-password-main .content-change-password .form-input span {
        left: 5px;
    }

    main .change-password-main .content-change-password .form-input span.span-eye {
        left: 250px;
    }
}

@media (max-width: 332px) {
    main .change-password-main .content-change-password .form-input input {
        width: 250px;
    }

    main .change-password-main .content-change-password .form-input span.span-eye {
        left: 220px;
    }
}
</style>
