<template>
  <div>
    <div class="heading mb-4">
      <h2>Reset Your Password In Here</h2>
      <p>To reset your password, you must type your new password and your password will be updated.</p>
    </div>

    <form @submit.prevent="updatePassword">
      <div class="form-input">
        <span><i class="fas fa-lock"></i></span>
        <input v-model.trim="$v.password.$model" :type="[showPassword ? 'password' : 'text']" :class="{ 'is-invalid': validationStatus($v.password) }" class="form-control" placeholder="New password"/>
        <span class="span-eye" @click="showPassword = !showPassword"><i class="far" :class="[showPassword ? 'fa-eye-slash' : 'fa-eye']" id="eye"></i></span>
        <div class="invalid-feedback" v-if="!$v.password.required">Field is required.</div>
        <div class="invalid-feedback" v-if="!$v.password.minLength"> Field must have at least {{ $v.password.$params.minLength.min }} characters.</div>
      </div>

      <div class="text-center mb-3">
        <Button type="submit" name="Confirm" />
      </div>
    </form>
  </div>
</template>

<script>
import Button from '../../components/base/Button'
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  name: 'ResetPassword',
  components: {
    Button
  },
  data () {
    return {
      password: '',
      showPassword: false,
      id: this.$route.params.id
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    ...mapActions(['resetPassword']),
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    updatePassword () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return
      const payload = {
        id: this.id,
        password: this.password
      }
      this.resetPassword(payload)
        .then(() => {
          this.$awn.success('Success reset password, please login')
          this.$router.push('/auth/login')
        })
    }
  }
}
</script>

<style scoped>
.form-box h2 {
  margin-top: 100px;

  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  font-style: normal;

  color: #3a3d42;
}

.form-box p {
  font-style: normal;
  font-weight: normal;
  line-height: 30px;

  color: rgba(58, 61, 66, 0.6);
}

.form-box .form-input {
  position: relative;
}

.form-box .form-input input {
    width: 100%;
    height: 40px;
    margin-bottom: 60px;
    border: none;
    border-radius: 0;
    border-color: rgba(169, 169, 169, 0.6) !important;
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    outline: none;
    background: white;
    padding-left: 45px;
    box-shadow: none !important;
}

.form-box .form-input .is-invalid {
  border-bottom: 2px solid red !important;
}

.form-box .form-input .is-invalid:focus {
    border-bottom: 2px solid red !important;
    box-shadow: none !important;
}

.form-box .form-input .invalid-feedback {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  color: red;
  margin: 0;
  padding-top: 0;
  font-size: 12px;
}

.form-box .form-input span {
    position: absolute;
    top: 8px;
    padding-left: 5px;
    color: rgba(169, 169, 169, 0.6);
}

.form-box .form-input span.span-eye {
    left: 370px;
    cursor: pointer;
}

.form-box .form-input span.span-eye:active {
    color: #000;
}

@media (max-width: 1300px) {
  .form-box .form-input span.span-eye {
      left: 350px;
  }
}

@media (max-width: 1226px) {
  .form-box .form-input span.span-eye {
      left: 320px;
  }
}

@media (max-width: 1144px) {
  .form-box .form-input span.span-eye {
      left: 290px;
  }
}

@media (max-width: 1058px) {
  .form-box .form-input span.span-eye {
      left: 240px;
  }
}

@media (max-width: 760px) {
  .form-box .form-input span.span-eye {
      left: 450px;
  }
}

@media (max-width: 692px) {
  .form-box .form-input span.span-eye {
      left: 420px;
  }
}

@media (max-width: 642px) {
  .form-box .form-input span.span-eye {
      left: 390px;
  }
}

@media (max-width: 606px) {
  .form-box .form-input span.span-eye {
      left: 360px;
  }
}

@media (max-width: 570px) {
  .form-box .heading {
    margin-top: -10%;
  }

  .form-box .form-input span.span-eye {
      left: 460px;
  }
}

@media (max-width: 542px) {
  .form-box .form-input span.span-eye {
      left: 420px;
  }
}

@media (max-width: 502px) {
  .form-box .form-input span.span-eye {
      left: 390px;
  }
}

@media (max-width: 474px) {
  .form-box .form-input span.span-eye {
      left: 350px;
  }
}

@media (max-width: 436px) {
  .form-box .form-input span.span-eye {
      left: 310px;
  }
}

@media (max-width: 394px) {
  .form-box .form-input span.span-eye {
      left: 270px;
  }
}

@media (max-width: 354px) {
  .form-box .form-input span.span-eye {
      left: 230px;
  }
}
</style>
