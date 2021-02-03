<template>
  <div>
    <div class="heading mb-4">
      <h2>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
      <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
    </div>

    <form @submit.prevent="sendEmail">
      <div class="form-input">
          <span><i class="fas fa-envelope"></i></span>
          <Input v-model.trim="$v.email.$model" :class="{ 'is-invalid': validationStatus($v.email) }" type="email" placeHolder="Enter your e-mail"/>
          <div class="invalid-feedback" v-if="!$v.email.required">Field is required.</div>
          <div class="invalid-feedback" v-if="!$v.email.email">invalid email</div>
      </div>

      <div class="text-center mb-3">
        <Button type="submit" name="Confirm"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  name: 'SendEmailReset',
  components: {
    Input,
    Button
  },
  data () {
    return {
      email: ''
    }
  },
  validations: {
    email: { required, email }
  },
  methods: {
    ...mapActions(['sendEmailResetPassword']),
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    sendEmail () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return

      const payload = {
        email: this.email
      }
      this.sendEmailResetPassword(payload)
        .then(() => {
          this.$awn.success(`An email has been sent to ${this.email}`)
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

    color: #3A3D42;
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

.form-box .form-input .is-invalid {
    border-bottom: 2px solid red;
}

.form-box .form-input .is-invalid:focus {
    border-bottom: 2px solid red;
    box-shadow: none;
}

.form-box .form-input .invalid-feedback,
.form-box .form-input .invalid-feedback-password {
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

@media (max-width: 568px) {
    .form-box .heading {
        margin-top: -10%;
    }
}

</style>
