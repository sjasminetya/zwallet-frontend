<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="confirmation-main">

                        <img class="success" src="../../assets/img-main/success.png" alt="Transfer Succes">

                        <h6 v-set-font:small class="confirmation-transfer">Transfer Success</h6>

                        <div class="content-confirmation">

                            <div class="amount">
                                <div class="text-amount">
                                    <p>Amount</p>
                                    <h6>Rp. {{changeRupiah(dataTransfer.amount)}}</h6>
                                </div>
                            </div>

                            <div class="balance-left">
                                <div class="text-balance">
                                    <p>Balance Left</p>
                                    <h6>Rp. {{changeRupiah(profile.saldo)}}</h6>
                                </div>
                            </div>

                            <div class="date-time">
                                <div class="text-date-time">
                                    <p>Date & Time</p>
                                    <h6>{{transferDate(dataTransfer.date_time)}}</h6>
                                </div>
                            </div>

                            <div class="notes">
                                <div class="text-notes">
                                    <p>Notes</p>
                                    <h6>{{dataTransfer.notes}}</h6>
                                </div>
                            </div>

                            <p v-set-font:small class="transfer-to">Transfer To</p>

                            <div class="name-samuel">
                                <div class="user-img">
                                    <img :src="transferToFriend.image" alt="user profile">
                                </div>

                                <div class="text-samuel">
                                    <h6 v-set-font:uppercase>{{transferToFriend.firstName}} {{transferToFriend.lastName}}</h6>
                                    <p>{{transferToFriend.phoneNumber}}</p>
                                </div>
                            </div>

                            <div class="button-success">
                                <div class="text-center mr-3">
                                    <button v-set-font:small type="submit" @click.prevent="download" class="btn btn-download">
                                        <img src="../../assets/img-main/download-button.png" alt="download button">
                                        <p class="download">Download PDF</p>
                                    </button>
                                    <button v-set-font:small type="submit" @click.prevent="goHome" class="btn btn-back">Back to Home</button>
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
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
import SideBar from '../../components/module/SideBar'
const pdfMake = require('pdfmake/build/pdfmake.js')
const pdfFonts = require('pdfmake/build/vfs_fonts.js')
pdfMake.vfs = pdfFonts.pdfMake.vfs
export default {
  name: 'Success',
  components: {
    SideBar
  },
  methods: {
    ...mapActions(['userProfile', 'profileFriends']),
    friends () {
      const id = this.$route.query.id
      this.profileFriends(id)
    },
    transferDate (date) {
      return moment(date).format('lll')
    },
    goHome () {
      this.$router.push('/page/dashboard')
    },
    changeRupiah (saldo) {
      return new Intl.NumberFormat(['ban', 'id']).format(saldo)
    },
    download () {
      const doc = {
        content: [
          { text: 'Transaction Success', style: 'header', margin: [0, 10, 0, 0] },
          { text: 'Amount', style: 'judul', margin: [0, 40, 0, 0] },
          { text: 'Rp ' + this.changeRupiah(this.dataTransfer.amount), style: 'isi' },
          { text: 'Balance Left', style: 'judul', margin: [0, 40, 0, 0] },
          { text: 'Rp ' + this.changeRupiah(this.profile.saldo), style: 'isi' },
          { text: 'Date & Time', style: 'judul', margin: [0, 40, 0, 0] },
          { text: this.transferDate(this.dataTransfer.date_time), style: 'isi' },
          { text: 'Notes', style: 'judul', margin: [0, 40, 0, 0] },
          { text: this.dataTransfer.notes, style: 'isi' },
          { text: 'Transfer To', style: 'judul', margin: [0, 40, 0, 0] },
          { image: 'data', width: 60, height: 60 },
          { text: this.transferToFriend.firstName + ' ' + this.transferToFriend.lastName, style: 'isi', margin: [80, -50, 0, 0] },
          { text: this.transferToFriend.phoneNumber, style: 'isi', margin: [80, 0, 0, 0] }
        ],
        images: {
          data: this.transferToFriend.image
        },
        footer: {
          columns: [
            { text: 'Zwallet Team', style: 'footer' }
          ]
        },
        styles: {
          isi: {
            fontSize: 18,
            bold: true
          },
          header: {
            fontSize: 22,
            bold: true,
            color: 'royalblue',
            alignment: 'center'
          },
          footer: {
            fontSize: 22,
            bold: true,
            color: 'royalblue',
            alignment: 'center'
          },
          judul: {
            fontSize: 14
          },
          image: {
            borderRadius: 10,
            objectFit: 'cover'
          }
        }
      }
      pdfMake.createPdf(doc).download('success.pdf')
    }
  },
  computed: {
    ...mapGetters(['profile', 'transferToFriend', 'dataTransfer'])
  },
  mounted () {
    this.userProfile()
    this.friends()
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

    height: 820px;
    width: 800px;
    position: relative;
}

main .confirmation-main img.success {
    padding-left: 350px;
    padding-top: 20px;
}

main .confirmation-transfer {
    padding-left: 310px;
    padding-top: 20px;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;

    color: #3A3D42;
}

main .content-confirmation {
    display: flex;
    flex-direction: column;
    position: relative;
}

main .content-confirmation .user-img img{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 15%;
    margin-left: 10%;
}

main .content-confirmation h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #514F5B;
}

main .content-confirmation p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #7A7886;
}

main .content-confirmation .amount,
main .content-confirmation .balance-left,
main .content-confirmation .date-time,
main .content-confirmation .notes,
main .content-confirmation .name-samuel {
    display: flex;
    width: 760px;
    height: 78px;
    margin-left: 2%;
    margin-top: 2%;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

main .content-confirmation .amount .text-amount,
main .content-confirmation .balance-left .text-balance,
main .content-confirmation .date-time .text-date-time,
main .content-confirmation .notes .text-notes,
main .content-confirmation .name-samuel .text-samuel {
    display: flex;
    flex-direction: column;

    margin-left: 3%;
    margin-top: 1%;
}

main .content-confirmation .transfer-to {
    margin-top: 500%;
    margin-left: 3%;
    margin-top: 2%;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;

    color: #3A3D42;
}

main .content-confirmation .button-success {
    display: flex;
    flex-direction: row;
}

main .content-confirmation .button-success .btn-download {
    position: absolute;
    top: 560px;
    left: 350px;

    width: 243px;
    height: 57px;

    background: rgba(99, 121, 244, 0.15);
    border-radius: 12px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;
}

main .content-confirmation .button-success .btn-download .download {
    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    color: #6379F4;
    text-align: center;

    margin-top: 5%;
}

main .content-confirmation .button-success .btn-download img {
    position: absolute;
    top: 16px;
    left: 15px;
}

main .content-confirmation .button-success .btn-back {
    position: absolute;
    top: 560px;
    left: 610px;

    width: 170px;
    height: 57px;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;

    background: #6379F4;
    border-radius: 12px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;

    color: #fff;
}

@media (max-width: 1300px) {
    main {
        width: 100%;
    }
}

@media (max-width: 1196px) {
    main .confirmation-main img.success {
        padding-left: 280px;
    }

    main .confirmation-transfer {
        padding-left: 250px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 600px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 160px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 430px;
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

    main .confirmation-main img.success {
        padding-left: 450px;
    }

    main .confirmation-transfer {
        padding-left: 410px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 880px;
        height: 82px;
    }

    main .content-confirmation .name-samuel {
        margin-top: 0%;
    }

    main .content-confirmation .button-success .btn-download {
        left: 445px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 700px;
    }
}

@media (max-width: 988px) {
    main .confirmation-main img.success {
        padding-left: 320px;
    }

    main .confirmation-transfer {
        padding-left: 280px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 650px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 245px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 500px;
    }
}

@media (max-width: 768px) {
    main .confirmation-main img.success {
        padding-left: 220px;
    }

    main .confirmation-transfer {
        padding-left: 180px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 480px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 74px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 320px;
    }
}

@media (max-width: 576px) {
    main .confirmation-main img.success {
        padding-left: 200px;
    }

    main .confirmation-transfer {
        padding-left: 160px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 500px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 245px;
        width: 57px;
        height: 57px;
    }

    main .content-confirmation .button-success .btn-download .download {
        display: none;
    }

    main .content-confirmation .button-success .btn-back {
        left: 330px;
    }
}

@media (max-width: 552px) {
    main .confirmation-main img.success {
        padding-left: 250px;
    }

    main .confirmation-transfer {
        padding-left: 220px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 480px;
    }
}

@media (max-width: 536px) {
    main .confirmation-main img.success {
        padding-left: 230px;
    }

    main .confirmation-transfer {
        padding-left: 190px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 460px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 200px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 300px;
    }
}

@media (max-width: 510px) {
    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 430px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 200px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 270px;
    }
}

@media (max-width: 474px) {
    main .confirmation-main img.success {
        padding-left: 190px;
    }

    main .confirmation-transfer {
        padding-left: 150px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 410px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 170px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 240px;
    }
}

@media (max-width: 460px) {
    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 380px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 140px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 210px;
    }
}

@media (max-width: 426px) {
    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 350px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 110px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 180px;
    }
}

@media (max-width: 415px) {
    main .confirmation-main img.success {
        padding-left: 150px;
    }

    main .confirmation-transfer {
        padding-left: 120px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 350px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 90px;
    }
}

@media (max-width: 394px) {
    main .confirmation-main img.success {
        padding-left: 150px;
    }

    main .confirmation-transfer {
        padding-left: 120px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 330px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 90px;
    }
}

@media (max-width: 382px) {
    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 300px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 60px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 130px;
    }
}

@media (max-width: 379px) {
    main .confirmation-main img.success {
        padding-left: 120px;
    }

    main .confirmation-transfer {
        padding-left: 85px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 310px;
    }
}

@media (max-width: 354px) {
    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 290px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 50px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 120px;
    }
}

@media (max-width: 336px) {
    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 270px;
    }

    main .content-confirmation .button-success .btn-download {
        left: 20px;
    }

    main .content-confirmation .button-success .btn-back {
        left: 90px;
    }
}

@media (max-width: 325px) {
    main .confirmation-main img.success {
        padding-left: 120px;
    }

    main .confirmation-transfer {
        padding-left: 85px;
    }

    main .content-confirmation .name-samuel,
    main .content-confirmation .amount,
    main .content-confirmation .balance-left,
    main .content-confirmation .date-time,
    main .content-confirmation .notes {
        width: 270px;
    }
}
</style>
