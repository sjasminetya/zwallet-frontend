<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="manage-phone-number-main">

                        <h6 class="manage-phone-number">Manage Phone Number</h6>

                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <p class="text-manage-phone-number">You can only delete the phone number and then you must add another phone number.</p>
                            </div>
                        </div>

                        <div class="content-manage-phone-number">

                            <div class="manage-number mb-5">
                                <div class="primary">
                                    <p>Primary</p>
                                    <h6>{{profile.phoneNumber}}</h6>
                                </div>
                            </div>

                            <div class="manage-number" v-for="(data, index) in number" :key="index">
                                <div class="primary">
                                    <p>Secondary</p>
                                    <h6>{{data.phoneNumber}}</h6>
                                </div>
                                <div @click="deleteNumber(data.id)" class="icon-trash">
                                    <i class="fas fa-trash"></i>
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
import SideBar from '../../components/module/SideBar'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ManagePhoneNumber',
  components: {
    SideBar
  },
  methods: {
    ...mapActions(['getPhoneNumber', 'userProfile', 'deletePhoneNumber']),
    ...mapMutations(['remove_number']),
    deleteNumber (id) {
      this.deletePhoneNumber(id)
        .then(() => {
          this.$awn.success('success delete')
          this.remove_number()
          this.getPhoneNumber()
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  computed: {
    ...mapGetters(['number', 'profile'])
  },
  mounted () {
    this.getPhoneNumber()
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
    overflow: auto; /* scrollbar */
    -ms-overflow-style: none;  /* scrollbar */
    scrollbar-width: none; /* scrollbar */
}

main::-webkit-scrollbar {
    display: none;
}

main .manage-phone-number-main .manage-phone-number {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin-top: 3%;
    margin-left: 3%;

    color: #3A3D42;
}

main .manage-phone-number-main .text-manage-phone-number {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    margin-top: 6%;
    margin-left: 6%;
    margin-bottom: 15%;
    color: #7A7886;
}

main .manage-phone-number-main .content-manage-phone-number {
    display: flex;
    flex-direction: column;
}

main .manage-phone-number-main .content-manage-phone-number h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #514F5B;
}

main .manage-phone-number-main .content-manage-phone-number p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #7A7886;
}

main .manage-phone-number-main .content-manage-phone-number .manage-number {
    display: flex;

    width: 760px;
    height: 92px;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 0%;
    padding-left: 3%;
    padding-top: 1.5%;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

main .manage-phone-number-main .content-manage-phone-number .manage-number .primary {
    display: flex;
    flex-direction: column;
}

main .manage-phone-number-main .content-manage-phone-number .manage-number .icon-trash {
    cursor: pointer;
    float: right;
    margin-left: 500px;
    padding-top: .3em;
    line-height: 3em;

    color: #BBBBBE;
}

@media (max-width: 1300px) {
    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 650px;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number span {
        left: 80%;
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

    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 880px;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number span {
        left: 88%;
    }
}

@media (max-width: 992px) {
    main .manage-phone-number-main .manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .text-manage-phone-number {
        margin-left: 3%;
        margin-top: 5%;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        margin-top: -5%;
        width: 650px;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number span {
        left: 85%;
    }
}

@media (max-width: 768px) {
    main .manage-phone-number-main .manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .text-manage-phone-number {
        margin-top: 5%;
        margin-left: 3%;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 480px;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number span {
        left: 80%;
    }
}

@media (max-width: 576px) {
    main .manage-phone-number-main .manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .text-manage-phone-number {
        margin-top: 10%;
        top: 2%;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 420px;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number span {
        left: 75%;
    }
}

@media (max-width: 447px) {
    main .manage-phone-number-main .manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .text-manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .text-manage-phone-number {
        top: 2%;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 370px;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number span {
        left: 75%;
    }
}

@media (max-width: 397px) {
    main .manage-phone-number-main .manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .text-manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 350px;
    }
}

/* Galaxy Note 3/Galaxy S5/Iphone(6/7/8)/Iphone X */
@media (max-width: 379px) {
    main .manage-phone-number-main .manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .text-manage-phone-number {
        margin-top: 10%;
    }

    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 310px;
    }
}

/* iphone 4/5/SE */
@media (max-width: 331px) {
    main .manage-phone-number-main .content-manage-phone-number .manage-number {
        width: 250px;
    }
}
</style>
