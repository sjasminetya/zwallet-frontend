<template>
  <div>
    <div class="container">
      <section class="main-container">
        <Sidebar />
        <main>
          <div class="main-top">
            <h6 v-set-font:small class="balance">Balance</h6>
            <h1 v-set-font:large>Rp. {{ changeRupiah(profile.saldo) }}</h1>
            <h6 v-set-font:small class="number">{{ profile.phoneNumber }}</h6>

            <div class="button-right">
              <button v-set-font:small type="submit" class="btn">
                <router-link to="/page/search-receiver"
                  ><i class="fas fa-arrow-up"></i>Transfer</router-link
                >
              </button>
              <b-button v-set-font:small v-b-modal.modal-1 class="btn topup"
                ><i class="fas fa-plus"></i>Top Up</b-button
              >
              <b-modal
                id="modal-1"
                title="Top Up saldo"
                @ok="goTopup"
                @show="resetModal"
                @hidden="resetModal"
              >
                <h6>Input amount</h6>
                <b-form-input
                  v-model="balance"
                  placeholder="Input amount"
                  type="number"
                  required
                ></b-form-input>
                <h6>Input PIN</h6>
                <PincodeInput
                  v-model="pin"
                  placeholder="0"
                  :length="6"
                  required
                />
              </b-modal>
            </div>
          </div>

          <div class="section-main">
            <div class="main-bottom">
              <span class="arrow-down"><i class="fas fa-arrow-down"></i></span>
              <h6 class="income">Income</h6>
              <h4 v-set-font:small class="income-rupiah">
                Rp {{ changeRupiah(profile.income) }}
              </h4>

              <span class="arrow-up"><i class="fas fa-arrow-up"></i></span>
              <h6 class="expense">Expense</h6>
              <h4 v-set-font:small class="expense-rupiah">
                Rp {{ changeRupiah(profile.expense) }}
              </h4>
            </div>

            <div class="main-right">
              <div class="history-main">
                <h6 v-set-font:small class="transaction">
                  Transaction History
                </h6>
                <router-link to="/page/transaction-history"
                  >See all</router-link
                >

                <div v-if="transactionHistory.length === 0">
                  <h5 class="null">You don't have transaction</h5>
                </div>

                <div
                  class="content-history"
                  v-for="(data, index) in transactionHistory"
                  :key="index"
                >
                  <div class="history">
                    <div class="user-profile">
                      <div class="user-img">
                        <img :src="data.image" alt="user profile" />
                      </div>

                      <div class="text">
                        <h6 v-set-font:capitalize class="name">
                          {{ data.firstName }} {{ data.lastName }}
                        </h6>
                        <p class="transfer">{{ data.notes }}</p>
                      </div>
                    </div>
                    <p class="amount">- Rp {{ changeRupiah(data.amount) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import PincodeInput from 'vue-pincode-input'
import { mapActions, mapGetters } from 'vuex'
import { Sidebar } from '../../components/module'
export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    PincodeInput
  },
  data () {
    return {
      pin: '',
      balance: ''
    }
  },
  methods: {
    ...mapActions(['userProfile', 'getTransactionHistory', 'topup']),
    goTopup () {
      const payload = {
        pin: this.pin,
        balance: this.balance
      }
      this.topup(payload).then(() => {
        this.$awn.success('success top up')
        this.userProfile()
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
    ...mapGetters(['profile', 'transactionHistory'])
  },
  async mounted () {
    await this.userProfile()
    this.getTransactionHistory()

    if (this.profile.expense === 0) {
      Swal.fire(
        `Hi ${this.profile.username}`,
        'For a better experience exploring Zwallet, you must update the PIN. Click profile and then click update PIN, and try transfer.Thank you 💖'
      )
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
  display: flex;
  flex-direction: column;
}

main .main-top {
  background: #6379f4;
  border-radius: 20px;
  height: 190px;
  width: 800px;
  margin-left: 10px;
}

main .main-top h6.balance {
  padding-top: 20px;
  padding-left: 30px;

  font-style: normal;
  font-weight: normal;
  line-height: 31px;

  color: #e0e0e0;
}

main .main-top h1 {
  padding-top: 3px;
  padding-left: 30px;

  font-style: normal;
  font-weight: bold;
  line-height: 55px;
  color: #ffffff;
}

main .main-top h6.number {
  padding-top: 5px;
  padding-left: 30px;

  font-style: normal;
  font-weight: normal;
  line-height: 31px;

  color: #e0e0e0;
}

main .main-top .button-right {
  display: flex;
  flex-direction: column;
  margin-top: -140px;
  margin-left: 620px;
}

main .main-top .button-right button {
  width: 162px;
  height: 57px;
  margin-bottom: 20px;

  font-style: normal;
  font-weight: bold;
  line-height: 25px;

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
}

main .main-top .button-right button:focus {
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  box-shadow: none;
  border: 1px solid #ffffff;
}

main .main-top .button-right button a {
  color: #fff;
  text-decoration: none;
}

main .main-top .button-right button i {
  margin-right: 10px;
}

main .section-main {
  display: flex;
}

main .section-main .main-bottom {
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 10px;

  height: 200px;
  width: 420px;
  position: relative;
}

main .section-main .main-bottom span.arrow-down,
main .section-main .main-bottom span.arrow-up {
  color: #1ec15f;
  font-size: 30px;
  position: absolute;
  top: 23%;
  left: 10%;
}

main .section-main .main-bottom span.arrow-up {
  color: #ff5b37;
  left: 60%;
}

main .section-main .main-bottom .income,
main .section-main .main-bottom .expense {
  position: absolute;
  left: 10%;
  top: 45%;

  font-size: 14px;
  line-height: 19px;

  color: #6a6a6a;
}

main .section-main .main-bottom .income-rupiah,
main .section-main .main-bottom .expense-rupiah {
  position: absolute;
  left: 10%;
  top: 55%;

  font-weight: bold;
  line-height: 25px;

  color: #3a3d42;
}

main .section-main .main-bottom .expense,
main .section-main .main-bottom .expense-rupiah {
  position: absolute;
  left: 60%;
}

main .section-main .main-right {
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  margin-top: 20px;
  margin-left: 10px;

  height: 500px;
  width: 350px;
  position: relative;
  overflow: hidden;
}

main .section-main .main-right .history-main {
  padding-top: 20%;
}

main .section-main .main-right .history-main .null {
  padding-top: 50%;
  padding-left: 10%;
  color: #7a7c7e;
}

main .section-main .main-right .transaction {
  position: absolute;
  left: 10%;
  top: 10%;

  font-style: normal;
  font-weight: bold;
  line-height: 25px;

  color: #3a3d42;
}

main .section-main .main-right a {
  position: absolute;
  left: 80%;
  top: 10%;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-decoration: none;

  color: #6379f4;
}

main .section-main .main-right .content-history {
  display: flex;
  flex-direction: column;
}

main .section-main .main-right .history {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
}

main .user-profile {
  display: flex;
}

main .section-main .main-right .history .user-img img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 100%;
}

main .section-main .main-right .history .text {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

main .section-main .main-right .history .text .name {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  color: #4d4b57;
}

main .section-main .main-right .history .text .transfer {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  color: #7a7886;
}

main .section-main .main-right .history .amount {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  padding-right: 10px;
  color: #ff5b37;
}

@media (max-width: 1300px) {
  main .main-top {
    width: 800px;
  }
}

@media (max-width: 1199px) {
  main .section-main .main-right {
    margin-left: 20px;
  }
}

@media (max-width: 1100px) {
  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  main .main-top {
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
  }

  main .main-top .button-right {
    margin-left: 700px;
  }

  main .section-main .main-bottom {
    margin-left: 60px;
  }
}

@media (max-width: 992px) {
  main .main-top .button-right {
    margin-left: 500px;
  }

  main .section-main .main-bottom {
    width: 100%;
  }

  main .section-main .main-right {
    width: 100%;
  }
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
  }

  main .main-top .button-right {
    margin-left: 300px;
  }

  main .section-main {
    display: flex;
    flex-direction: column;
  }

  main .section-main .main-bottom {
    margin: 10px auto;
  }

  main .section-main .main-right {
    width: 100%;
    margin: 10px auto;
  }

  main .section-main .main-right .transaction {
    top: 10%;
    left: 10%;
  }

  main .section-main .main-right a {
    top: 10%;
    left: 80%;
  }

  main .section-main .main-right .amount,
  main .section-main .main-right .netflix-sub,
  main .section-main .main-right .christine-tf,
  main .section-main .main-right .adobe-sub {
    left: 72%;
  }
}

@media (max-width: 576px) {
  main .main-top .button-right {
    margin-left: 260px;
  }
}

@media (max-width: 553px) {
  main .main-top .button-right {
    margin-left: 320px;
  }
}

@media (max-width: 540px) {
  main .main-top .button-right {
    margin-left: 300px;
  }
}

@media (max-width: 494px) {
  main .main-top .button-right {
    margin-left: 280px;
  }
}

@media (max-width: 482px) {
  main .main-top .button-right {
    margin-left: 260px;
  }
}

@media (max-width: 461px) {
  main .main-top {
    height: 300px;
  }

  main .main-top .button-right {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 20px;
  }

  main .main-top .button-right button {
    width: 140px;
    margin-left: 35px;
  }
}

@media (max-width: 435px) {
  main .main-top .button-right {
    margin-left: 10px;
  }
}

@media (max-width: 415px) {
  main .main-top .button-right {
    margin-left: 0px;
  }
}

@media (max-width: 393px) {
  main .main-top .button-right {
    margin-left: -10px;
  }
}

@media (max-width: 379px) {
  main .main-top .button-right {
    margin-left: 3px;
  }

  main .main-top .button-right button {
    margin-left: 20px;
  }
}

@media (max-width: 367px) {
  main .main-top .button-right {
    margin-left: 15px;
  }

  main .main-top .button-right button {
    margin-left: 10px;
  }
}

@media (max-width: 353px) {
  main .main-top .button-right {
    margin-left: 15px;
  }

  main .main-top .button-right button {
    margin-left: 3px;
  }
}

@media (max-width: 339px) {
  main .main-top .button-right {
    margin-left: 15px;
  }

  main .main-top .button-right button {
    margin-left: 0px;
  }
}

@media (max-width: 332px) {
  main .main-top .button-right {
    margin-left: 5px;
  }

  main .main-top .button-right button {
    width: 130px;
  }
}
</style>
