<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="history-main">
                        <h6 class="transaction">Transaction History</h6>
                        <p class="text-transaction">your transaction history after transfer to your friends</p>

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
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item" :class="[getPagination.prevPage == null ? 'disabled' : '']"><a class="page-link" href="#" @click.prevent="getTransactionHistory(parseInt(getPagination.currentPage) - 1)">Previous</a></li>
                            <li v-for="noPage in getPagination.totalPage" :key="noPage" :class="[getPagination.currentPage == noPage ? 'active' : '']" class="page-item"><a class="page-link" href="#" @click.prevent="getTransactionHistory(noPage)">{{noPage}}</a></li>
                            <li class="page-item" :class="[getPagination.nextPage == null ? 'disabled' : '']"><a class="page-link" href="#" @click.prevent="getTransactionHistory(parseInt(getPagination.currentPage) + 1)">Next</a></li>
                        </ul>
                    </nav>
                </main>
            </section>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SideBar from '../../components/module/SideBar'
export default {
  name: 'History',
  components: {
    SideBar
  },
  methods: {
    ...mapActions(['getTransactionHistory']),
    changeRupiah (saldo) {
      // eslint-disable-next-line no-useless-escape
      return saldo.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.')
    }
  },
  computed: {
    ...mapGetters(['transactionHistory', 'getPagination'])
  },
  mounted () {
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
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    margin-left: 10px;

    height: 710px;
    width: 800px;
    position: relative;
    overflow: auto; /* scrollbar */
    -ms-overflow-style: none;  /* scrollbar */
    scrollbar-width: none; /* scrollbar */
}

main::-webkit-scrollbar {
    display: none;
}

main .transaction {
    position: absolute;
    margin-left: 10%;
    top: 10%;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

main p.text-transaction {
    margin-top: -50px;
    margin-left: 10%;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;

    color: #7A7886;
}

main p.this-month {
    position: absolute;
    left: 10%;
    top: 58%;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;

    color: #7A7886;
}

main .history-main {
    padding-top: 20%;
}

main .content-history {
    display: flex;
    flex-direction: column;
}

main .history {
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    padding-left: 20px;
    margin-left: 10%;
    margin-top: 2%;
    width: 600px;
    height: 110px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    border: none;
}

main .history .user-img img{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
}

main .history .content {
    border: 2px solid red;
    display: flex;
    flex-direction: column;
}

main .history .text {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

main .history .text .name {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #4D4B57;
}

main .history .text .transfer {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #7A7886;
}

main .history .amount {

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: right;

    color: #FF5B37;
}

@media (max-width: 1300px) {
    main {
        width: 800px;
    }
}

@media (max-width: 1198px) {
    main p.text-transaction {
        margin-top: -20px;
    }

    main .history {
        width: 500px;
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

    main p.text-transaction {
        margin-top: -80px;
    }

    main .history {
        width: 750px;
    }
}

@media (max-width: 986px) {
    main .transaction {
        top: 10%;
    }

    main p.text-transaction {
        margin-top: -30px;
    }

    main .history {
        width: 550px;
    }
}

@media (max-width: 768px) {
    main .transaction {
        top: 10%;
    }

    main p.text-transaction {
        margin-top: 20px;
    }

    main .history {
        width: 400px;
    }

    main .history .text {
        left: 30%;
    }

    main .amount {
        left: 72%;
    }
}

@media (max-width: 564px) {
    main .history {
        padding-left: 30px;
    }
}

@media (max-width: 496px) {
    main .transaction,
    main p.text-transaction,
    main .history {
        margin-left: 5%;
    }

    main .history {
        width: 400px;
    }
}

@media (max-width: 462px) {
    main .history {
        width: 350px;
    }
}

@media (max-width: 424px) {
    main p.text-transaction {
        margin-top: 30px;
    }
}

@media (max-width: 411px) {
    main .history {
        width: 300px;
        padding-left: 10px;
    }

    main .transaction {
        top: 5%;
    }
}

@media (max-width: 379px) {
    main .history .amount  {
        left: 20%;
    }
}

@media (max-width: 354px) {
    main .history {
        width: 280px;
        height: 130px;
    }
}

@media (max-width: 338px) {
    main .history {
        width: 250px;
    }
}
</style>
