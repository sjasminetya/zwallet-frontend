<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="personal-main">
                        <h6 v-set-font:small class="personal-info">Personal Information</h6>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <p class="text-personal">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                                <div v-b-modal.modal-1 class="edit">Edit your personal info</div>
                                <b-modal id="modal-1" title="Edit personal info" @ok="update" @show="resetModal" @hidden="resetModal">
                                    <form>
                                        <div class="form-group">
                                            <label for="firstName">First Name</label>
                                            <input type="text" v-model="firstName" class="form-control" id="firstName">
                                        </div>
                                        <div class="form-group">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" v-model="lastName" class="form-control" id="lastName" >
                                        </div>
                                    </form>
                                </b-modal>
                            </div>
                        </div>

                        <div class="content-personal">

                            <div class="first-name">
                                <p>First Name</p>
                                <h6 v-set-font:medium v-set-font:capitalize>{{profile.firstName}}</h6>
                            </div>

                            <div class="last-name">
                                <p>Last Name</p>
                                <h6 v-set-font:medium v-set-font:capitalize>{{profile.lastName}}</h6>
                            </div>

                            <div class="verified-email">
                                <p>Verified E-mail</p>
                                <h6>{{profile.email}}</h6>
                            </div>

                            <div class="phone-number">
                                <div class="phone">
                                    <p>Phone Number</p>
                                    <h6>{{profile.phoneNumber}}</h6>
                                </div>
                                <div v-b-modal.modal-2 class="add-number">Add</div>
                                <b-modal id="modal-2" title="add another phone number" @ok="addNumber" @show="resetModal" @hidden="resetModal">
                                    <form>
                                        <div class="form-group">
                                            <label for="phoneNumber">Phone Number</label>
                                            <input v-model.trim="$v.phoneNumber.$model" :class="{ 'is-invalid': validationStatus($v.phoneNumber) }" type="number" placeHolder="Enter your phone number" class="form-control"/>
                                            <div class="invalid-feedback" v-if="!$v.phoneNumber.maxLength">phone number must have at most {{ $v.phoneNumber.$params.maxLength.max }} number.</div>
                                        </div>
                                    </form>
                                </b-modal>
                                <router-link to="/page/manage-phone-number" class="manage-number">Manage</router-link>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    </div>
</template>

<script>
import SideBar from '../../components/module/SideBar'
import { mapActions, mapGetters } from 'vuex'
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'PersonalInformation',
  components: {
    SideBar
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  },
  validations: {
    phoneNumber: { required, maxLength: maxLength(12) }
  },
  methods: {
    ...mapActions(['userProfile', 'updateProfile', 'addPhoneNumber']),
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    update () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName
      }
      this.updateProfile(payload)
        .then(() => {
          this.$awn.success('success update')
          this.userProfile()
        })
        .catch(err => {
          console.log(err)
        })
    },
    addNumber () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return

      const payload = {
        phoneNumber: this.phoneNumber
      }
      this.addPhoneNumber(payload)
        .then((res) => {
          this.$awn.success('success add phone number')
          this.$router.push('/page/manage-phone-number')
        })
    },
    resetModal () {
      this.firstName = ''
      this.lastName = ''
      this.phoneNumber = ''
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

    height: 710px;
    width: 800px;
    position: relative;
}

main .personal-info {
    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    margin-top: 3%;
    margin-left: 3%;

    color: #3A3D42;
}

main .text-personal,
main .edit {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    margin-top: 6%;
    margin-left: 6%;

    color: #7A7886;
}

main .edit {
    color: #6379F4;
}

main .edit:hover {
    color: #6379F4;
    text-decoration: none;
}

main .edit:focus {
    outline: none;
}

main .content-personal {
    display: flex;
    flex-direction: column;
}

main .content-personal h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #514F5B;
}

main .content-personal p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #7A7886;
}

main .content-personal .first-name,
main .content-personal .last-name,
main .content-personal .verified-email {
    width: 750px;
    height: 92px;
    margin-top: 2%;
    margin-left: 2%;
    padding-left: 3%;
    padding-top: 1.5%;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

form span {
    position: absolute;
    top: 60px;
    padding-left: -100px !important;
}

form .is-invalid {
    border: 2px solid red !important;
}

form .is-invalid:focus {
    border: 2px solid red !important;
    box-shadow: none;
}

form .invalid-feedback {
  position: absolute;
  top: 72%;
  left: 3%;
  right: 0;
  color: red;
  margin: 0;
  padding-top: 0;
  font-size: 12px;
}

main .content-personal .phone-number {
    display: flex;

    width: 750px;
    height: 92px;
    margin-left: 2%;
    margin-top: 2%;
    padding-left: 3%;
    padding-top: 1.5%;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

main .content-personal .phone-number .phone {
    display: flex;
    flex-direction: column;
}

main .content-personal .phone-number .add-number,
main .content-personal .phone-number .manage-number {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #6379F4;
}

main .content-personal .phone-number .add-number,
main .content-personal .phone-number .manage-number {
    position: absolute;
    top: 83%;
    right: 18%;
}

main .content-personal .phone-number .add-number:focus {
    outline: none;
    border: none;
}

main .content-personal .phone-number .manage-number {
    right: 8%;
}

main .content-personal .phone-number a:hover,
main .content-personal a:hover {
    color: #6379F4;
    text-decoration: none;
}

@media (max-width: 1300px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 730px;
    }

    main .content-personal .phone-number .add-number {
        left: 70%;
    }

    main .content-personal .phone-number .manage-number {
        left: 75%;
    }
}

@media (max-width: 1198px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 600px;
    }

    main .content-personal .phone-number .add-number {
        left: 65%;
    }

    main .content-personal .phone-number .manage-number {
        left: 75%;
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

    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 880px;
    }

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 85%;
    }

    main .content-personal .phone-number .add-number {
        left: 78%;
    }

    main .content-personal .phone-number .manage-number {
        left: 85%;
    }
}

@media (max-width: 992px) {
    main .text-personal {
        margin-left: 3%;
        margin-top: 2%;
    }

    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 850px;
    }

    main .content-personal .phone-number .add-number {
        left: 73%;
    }

    main .content-personal .phone-number .manage-number {
        left: 80%;
    }
}

@media (max-width: 988px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 650px;
    }

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 78%;
    }

    main .content-personal .phone-number .add-number {
        left: 73%;
    }

    main .content-personal .phone-number .manage-number {
        left: 80%;
    }
}

@media (max-width: 776px) {
    main .content-personal .phone-number .add-number {
        position: absolute;
        right: 53%;
    }
}

@media (max-width: 768px) {
    main .text-personal {
        margin-left: 3%;
    }

    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 630px;
    }

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 79%;
    }
}

@media (max-width: 766px) {
    main .text-personal {
        margin-left: 3%;
    }

    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 480px;
    }

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 74%;
    }
}

@media (max-width: 763px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 450px;
    }

    main .content-personal .phone-number .add-number {
        left: 60%;
    }

    main .content-personal .phone-number .manage-number {
        left: 68%;
    }
}

@media (max-width: 576px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 470px;
    }
}

@media (max-width: 527px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 450px;
    }

    main .content-personal .phone-number .add-number {
        left: 60%;
    }

    main .content-personal .phone-number .manage-number {
        left: 70%;
    }
}

@media (max-width: 518px) {
    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 75%;
    }
}

@media (max-width: 500px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 410px;
    }
}

@media (max-width: 463px) {
    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 75%;
    }
}

@media (max-width: 456px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 380px;
    }

    main .content-personal .phone-number .add-number {
        left: 55%;
    }

    main .content-personal .phone-number .manage-number {
        left: 71%;
    }
}

@media (max-width: 451px) {
    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 73%;
    }
}

@media (max-width: 428px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 360px;
    }

    main .content-personal .phone-number a {
        left: 75%;
    }
}

@media (max-width: 379px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 320px;
    }

    main .content-personal h6 {
        font-size: 19px;
    }
}

@media (max-width: 365px) {
    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 75%;
    }
}

@media (max-width: 351px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 300px;
    }
}

@media (max-width: 343px) {
    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 74%;
    }
}

@media (max-width: 326px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 270px;
    }

    main .content-personal h6 {
        font-size: 16px;
    }
}
</style>
