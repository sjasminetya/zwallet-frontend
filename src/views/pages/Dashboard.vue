<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="main-top">
                        <h6 class="balance">Balance</h6>
                        <h1>Rp. {{changeRupiah(profile.saldo)}}</h1>
                        <h6 class="number">{{profile.phoneNumber}}</h6>

                        <div class="button-right">
                            <button type="submit" class="btn">
                                <router-link to="/page/search-receiver"><i class="fas fa-arrow-up"></i>Transfer</router-link>
                            </button>
                            <b-button v-b-modal.modal-1 class="btn topup"><i class="fas fa-plus"></i>Top Up</b-button>
                            <b-modal id="modal-1" title="Top Up saldo" @ok="goTopup" @show="resetModal" @hidden="resetModal">
                                <h6>Input amount</h6>
                                <b-form-input v-model="balance" placeholder="Input amount" type="number" required></b-form-input>
                                <h6>Input PIN</h6>
                                <PincodeInput v-model="pin" placeholder="0" :length="6" required/>
                            </b-modal>
                        </div>
                    </div>

                    <div class="section-main">
                        <div class="main-bottom">
                            <span class="arrow-down"><i class="fas fa-arrow-down"></i></span>
                                <h6 class="income">Income</h6>
                                <h4 class="income-rupiah">Rp {{changeRupiah(profile.income)}}</h4>

                                <span class="arrow-up"><i class="fas fa-arrow-up"></i></span>
                                <h6 class="expense">Expense</h6>
                                <h4 class="expense-rupiah">Rp {{changeRupiah(profile.expense)}}</h4>

                                <div class="chart">

                                    <h6>+Rp65.000</h6>

                                    <img src="../../assets/img-main/chart.png" class="chart1" alt="chart">
                                    <img src="../../assets/img-main/chart-1.png" class="chart2" alt="chart">
                                    <img src="../../assets/img-main/chart-2.png" class="chart3" alt="chart">
                                    <img src="../../assets/img-main/chart-3.png" class="chart4" alt="chart">

                                    <img src="../../assets/img-main/ellipse.png" class="ellipse" alt="ellipse">

                                    <img src="../../assets/img-main/chart-4.png" class="chart5" alt="chart">
                                    <img src="../../assets/img-main/chart-5.png" class="chart6" alt="chart">
                                    <img src="../../assets/img-main/chart-6.png" class="chart7" alt="chart">

                                    <div class="day">
                                        <h6 class="sat">Sat</h6>
                                        <h6 class="sun">Sun</h6>
                                        <h6 class="mon">Mon</h6>
                                        <h6 class="tue">Tue</h6>
                                        <h6 class="wed">Wed</h6>
                                        <h6 class="thu">Thu</h6>
                                        <h6 class="fri">Fri</h6>
                                    </div>

                                </div>

                        </div>

                        <div class="main-right">
                            <div class="history-main">
                                <h6 class="transaction">Transaction History</h6>
                                <router-link to="/page/transaction-history">See all</router-link>

                                <div class="content-history" v-for="(data, index) in transactionHistory" :key="index">
                                    <div class="history">
                                        <div class="user-img">
                                            <img :src="data.image" alt="user profile">
                                        </div>

                                        <div class="text">
                                            <h6 class="name">{{data.firstName}} {{data.lastName}}</h6>
                                            <p class="transfer">{{data.notes}}</p>
                                        </div>

                                        <p class="amount">- Rp {{changeRupiah(data.amount)}}</p>
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
import PincodeInput from 'vue-pincode-input'
import { mapActions, mapGetters } from 'vuex'
import SideBar from '../../components/module/SideBar'
export default {
  name: 'Dashboard',
  components: {
    SideBar,
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
    changeRupiah (saldo) {
      // eslint-disable-next-line no-useless-escape
      return saldo.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.')
    }
  },
  computed: {
    ...mapGetters(['profile', 'transactionHistory'])
  },
  mounted () {
    this.userProfile()
    this.getTransactionHistory()
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
    background: #6379F4;
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
    font-size: 18px;
    line-height: 31px;

    color: #E0E0E0;
}

main .main-top h1 {
    padding-top: 3px;
    padding-left: 30px;

    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    color: #FFFFFF;
}

main .main-top h6.number {
    padding-top: 5px;
    padding-left: 30px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    color: #E0E0E0;
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
    font-size: 18px;
    line-height: 25px;

    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
}

main .main-top .button-right button:focus {
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    box-shadow: none;
    border: 1px solid #FFFFFF;
}

main .main-top .button-right button a {
    color: #fff;
    text-decoration: none;
}

main .main-top .button-right button i{
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

    height: 500px;
    width: 400px;
    position: relative;
}

main .section-main .main-bottom span.arrow-down {
    color: #1EC15F;
    font-size: 30px;
    position: absolute;
    top: 10%;
    left: 10%;
}

main .section-main .main-bottom span.arrow-up {
    color: #FF5B37;
    font-size: 30px;
    position: absolute;
    top: 10%;
    left: 60%;
}

main .section-main .main-bottom .income {
    position: absolute;
    left: 10%;
    top: 25%;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #6A6A6A;
}

main .section-main .main-bottom .income-rupiah {
    position: absolute;
    left: 10%;
    top: 35%;

    font-style: normal;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

main .section-main .main-bottom .expense {
    position: absolute;
    left: 60%;
    top: 25%;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #6A6A6A;
}

main .section-main .main-bottom .expense-rupiah {
    position: absolute;
    left: 60%;
    top: 35%;

    font-style: normal;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

main .section-main .main-bottom .chart h6 {
    margin-top: 210px;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-align: center;

    color: #1EC15F;
}

main .section-main .main-bottom .chart .chart1 {
    position: absolute;
    left: 18%;
    top: 47%;
}

main .section-main .main-bottom .chart .chart2 {
    position: absolute;
    left: 28%;
    top: 72%;
}

main .section-main .main-bottom .chart .chart3 {
    position: absolute;
    left: 38%;
    top: 62%;
}

main .section-main .main-bottom .chart .chart4 {
    position: absolute;
    left: 48%;
    top: 55%;
}

main .section-main .main-bottom .chart .ellipse {
    position: absolute;
    left: 46%;
    top: 50%;
}

main .section-main .main-bottom .chart .chart5 {
    position: absolute;
    left: 58%;
    top: 64%;
}

main .section-main .main-bottom .chart .chart6 {
    position: absolute;
    left: 68%;
    top: 52%;
}

main .section-main .main-bottom .chart .chart7 {
    position: absolute;
    left: 78%;
    top: 61%;
}

main .section-main .main-bottom .chart .day h6{
    display: flex;
    margin-top: 30px;
    position: relative;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #8F8F8F;
}

main .section-main .main-bottom .chart .day .sat {
    position: absolute;
    left: 18%;
    top: 87%;
}

main .section-main .main-bottom .chart .day .sun {
    position: absolute;
    left: 28%;
    top: 87%;
}

main .section-main .main-bottom .chart .day .mon {
    position: absolute;
    left: 38%;
    top: 87%;
}

main .section-main .main-bottom .chart .day .tue {
    position: absolute;
    left: 48%;
    top: 87%;
}

main .section-main .main-bottom .chart .day .wed {
    position: absolute;
    left: 58%;
    top: 87%;
}

main .section-main .main-bottom .chart .day .thu {
    position: absolute;
    left: 68%;
    top: 87%;
}

main .section-main .main-bottom .chart .day .fri {
    position: absolute;
    left: 78%;
    top: 87%;
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

main .section-main .main-right .transaction {
    position: absolute;
    left: 10%;
    top: 10%;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
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

    color: #6379F4;
}

main .section-main .main-right .content-history {
    display: flex;
    flex-direction: column;
}

main .section-main .main-right .history {
    display: flex;
    flex-direction: row;
    padding: 20px;
    padding-left: 40px;
}

main .section-main .main-right .history .user-img img{
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

    color: #4D4B57;
}

main .section-main .main-right .history .text .transfer {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #7A7886;
}

main .section-main .main-right .history .amount {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: right;

    color: #FF5B37;
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
        margin-left: 0px;
    }

    main .section-main .main-right {
        margin-right: 0px;
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

    main .main-top .button-right button{
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

    main .main-top .button-right button{
        margin-left: 10px;
    }
}

@media (max-width: 332px) {
    main .main-top .button-right {
        margin-left: 5px;
    }

    main .main-top .button-right button{
        width: 130px;
    }
}
</style>
