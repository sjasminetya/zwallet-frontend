<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="transfer">
                        <h6 v-set-font:small class="transfer-money">Transfer Money</h6>

                        <div class="content-transfer">
                            <div class="transfer-friends">
                                <div class="user-img">
                                    <img :src="transferToFriend.image" alt="user profile">
                                </div>

                                <div class="text-friends">
                                    <h6 v-set-font:small>{{transferToFriend.firstName}} {{transferToFriend.lastName}}</h6>
                                    <p>{{transferToFriend.phoneNumber}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mt-5">
                                <h6 class="text-transfer">Type the amount you want to transfer and then press continue to the next steps.</h6>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mt-5 col-sm-6 col-6">
                                <div class="form-number">
                                    <input type="text" placeholder="0.00" class="amount" v-model="inputAmount">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-11 mt-3 col-12">
                                <h6 class="saldo">Rp.{{changeRupiah(profile.saldo)}} Available</h6>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mt-3 col-sm-6 col-6">
                                <div class="form-input">
                                    <img src="../../assets/img-transfer/add.png" alt="icon add">
                                    <input type="text" placeholder="Add some notes" v-model="notes">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-5 mt-3 col-sm-6 col-8">
                                <button v-b-modal.modal-1 type="submit" v-set-font:small class="btn btn-info btn-lg">Continue</button>
                                <b-modal id="modal-1" title="Input your PIN" @ok="transferMoney" @show="resetModal" @hidden="resetModal">
                                    <h6>Input PIN</h6>
                                    <PincodeInput v-model="pin" placeholder="0" :length="6" required/>
                                </b-modal>
                            </div>
                        </div>

                    </div>
                </main>
            </section>
        </div>
    </div>
</template>

<script>
import PincodeInput from 'vue-pincode-input'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import SideBar from '../../components/module/SideBar'
export default {
  name: 'InputAmount',
  components: {
    SideBar,
    PincodeInput
  },
  data () {
    return {
      receiverId: this.$route.query.id,
      senderId: localStorage.getItem('id'),
      inputAmount: '',
      notes: '',
      pin: ''
    }
  },
  methods: {
    ...mapActions(['profileFriends', 'userProfile', 'transfer']),
    ...mapMutations(['set_transfer']),
    friends () {
      const id = this.$route.query.id
      this.profileFriends(id)
    },
    transferMoney () {
      const payload = {
        receiverId: this.receiverId,
        senderId: this.senderId,
        amount: this.inputAmount,
        senderPin: this.pin,
        notes: this.notes,
        date_time: new Date()
      }
      this.transfer(payload)
        .then(() => {
          this.set_transfer(payload)
          this.$router.push({ path: '/page/success', query: { id: this.receiverId } })
          this.$awn.success(`Success transfer to ${this.transferToFriend.firstName}`)
        })
    },
    resetModal () {
      this.pin = ''
      this.balance = ''
    },
    changeRupiah (saldo) {
      return new Intl.NumberFormat(['ban', 'id']).format(saldo)
    }
  },
  computed: {
    ...mapGetters(['transferToFriend', 'profile'])
  },
  mounted () {
    this.friends()
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

main .transfer .text-transfer {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    padding-left: 30px;

    color: #7A7886;
}

main .transfer-money {
    padding-left: 30px;
    padding-top: 50px;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;

    color: #3A3D42;
}

main .content-transfer {
    display: flex;
    flex-direction: column;
    position: relative;
}

main .content-transfer .user-img img{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 40%;
    margin-left: 10%;
}

main .content-transfer h6 {
    font-style: normal;
    font-weight: bold;
    line-height: 25px;

    color: #4D4B57;
}

main .content-transfer p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #7A7886;
}

main .content-transfer .transfer-friends {
    display: flex;
    width: 760px;
    height: 110px;
    margin-left: 2%;
    margin-top: 3%;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    border: none;
}

main .content-transfer .transfer-friends .text-friends {
    display: flex;
    flex-direction: column;
    text-align: left;

    margin-left: 5%;
    margin-top: 3%;
}

main .transfer .form-number .amount {
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 56px;
    padding-left: 40%;

    color: #B5BDCC;
    width: 100%;
    height: 40px;
    margin-left: 60%;
    border: none;
    outline: none;
    background: white;
}

main .transfer .saldo {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    margin-left: 45%;

    color: #3A3D42;
}

main .transfer button[type="submit"] {
    width: 170px;
    height: 57px;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    margin-left: 190%;

    background: #6379F4;
    border-radius: 12px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;

    color: #fff;
}

.form-input input {
    width: 100%;
    height: 40px;
    margin-left: 60%;
    margin-bottom: 60px;
    border: none;
    border-radius: 0;
    border-color: rgba(169, 169, 169, 0.6) !important;
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    outline: none;
    background: white;
    padding-left: 45px;
}

.form-input img {
    position: absolute;
    top: 8px;
    padding-left: 250px;
    color: rgba(169, 169, 169, 0.6);
}

@media (max-width: 1300px) {
    main .content-transfer .transfer-friends {
        width: 750px;
    }
}

@media (max-width: 1196px) {
    main .content-transfer .transfer-friends {
        width: 600px;
    }

    main .transfer button[type="submit"] {
        margin-left: 160%;
    }
}

@media (max-width: 1193px) {
    .form-input img {
        padding-left: 200px;
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

    main .content-transfer .transfer-friends {
        width: 880px;
    }

    .form-input img {
        padding-left: 280px;
    }
}

@media (max-width: 992px) {
    main {
        width: 100%;
        margin: 10px auto;
    }

    main .content-transfer .transfer-friends {
        width: 650px;
    }

    .form-input img {
        padding-left: 200px;
    }
}

@media (max-width: 768px) {
    main .content-transfer .transfer-friends {
        width: 450px;
    }

    main .transfer button[type="submit"] {
        margin-left: 90%;
    }
}

@media (max-width: 731px) {
    .form-input img {
        padding-left: 150px;
    }
}

@media (max-width: 576px) {
    main .content-transfer .transfer-friends {
        width: 420px;
    }
}

@media (max-width: 531px) {
    .form-input input {
        width: 200px;
    }

    .form-input img {
        padding-left: 180px;
    }

    main .transfer button[type="submit"] {
        margin-left: 70%;
    }

    main .transfer .saldo {
        margin-left: 40%;
    }
}

@media (max-width: 512px) {
    .form-input img {
        padding-left: 140px;
    }
}

@media (max-width: 475px) {
    .form-input img {
        padding-left: 130px;
    }
}

@media (max-width: 457px) {
    main .content-transfer .transfer-friends {
        width: 395px;
    }
}

@media (max-width: 452px) {
    main .content-transfer .transfer-friends {
        width: 400px;
    }
}

@media (max-width: 437px) {
    main .content-transfer .transfer-friends {
        width: 380px;
    }
}

@media (max-width: 416px) {
    main .content-transfer .transfer-friends {
        width: 360px;
    }

    .form-input img {
        padding-left: 110px;
    }
}

@media (max-width: 394px) {
    main .content-transfer .transfer-friends {
        width: 330px;
    }
}

@media (max-width: 379px) {
    main .content-transfer .transfer-friends {
        width: 300px;
    }

    main .transfer .form-number .amount {
        margin-left: 60%;
        padding-left: 20%;
    }

    .form-input img {
        padding-left: 100px;
    }

    main .transfer .saldo {
        margin-left: 30%;
    }

    main .transfer button[type="submit"] {
        margin-left: 60%;
    }
}

@media (max-width: 360px) {
    main .transfer .form-number .amount {
        margin-left: 40%;
    }

    .form-input input {
        width: 200px;
        margin-left: 50%;
    }

    .form-input img {
        padding-left: 80px;
    }

    main .transfer button[type="submit"] {
        margin-left: 50%;
    }
}

@media (max-width: 327px) {
    main .content-transfer .transfer-friends {
        width: 280px;
    }

    .form-input img {
        padding-left: 70px;
    }
}

@media (max-width: 320px) {
    main .content-transfer .transfer-friends {
        width: 260px;
    }
}
</style>
