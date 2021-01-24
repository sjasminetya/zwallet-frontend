<template>
    <div>
        <div class="container">
            <section class="main-container">
                <SideBar/>
                <main>
                    <div class="personal-main">
                        <h6 class="personal-info">Personal Information</h6>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <p class="text-personal">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                                <router-link to="#">Edit your personal info</router-link>
                            </div>
                        </div>

                        <div class="content-personal">

                            <div class="first-name">
                                <p>First Name</p>
                                <h6>{{profile.firstName}}</h6>
                                <!-- <router-link to="/profile/update-firstname" class="edit-firstname">Edit</router-link> -->
                            </div>

                            <div class="last-name">
                                <p>Last Name</p>
                                <h6>{{profile.lastName}}</h6>
                                <!-- <router-link to="/profile/update-lastname" class="edit-lastname">Edit</router-link> -->
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
                                <router-link to="/profile/add-phone-number" class="add-number">Add</router-link>
                                <router-link to="/profile/manage-phone-number" class="manage-number">Manage</router-link>
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
export default {
  name: 'PersonalInformation',
  components: {
    SideBar
  },
  methods: {
    ...mapActions(['userProfile'])
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
    font-size: 18px;
    line-height: 25px;
    margin-top: 3%;
    margin-left: 3%;

    color: #3A3D42;
}

main .text-personal,
main a {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    margin-top: 6%;
    margin-left: 6%;

    color: #7A7886;
}

main a {
    color: #6379F4;
}

main a:hover {
    color: #6379F4;
    text-decoration: none;
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
    top: 75%;
    right: 18%;
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

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 77%;
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

    main .content-personal .phone-number .add-number {
        left: 75%;
    }

    main .content-personal .phone-number .manage-number {
        left: 80%;
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
        width: 650px;
    }

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 70%;
    }

    main .content-personal .phone-number .add-number {
        left: 68%;
    }

    main .content-personal .phone-number .manage-number {
        left: 75%;
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
}

@media (max-width: 763px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 450px;
    }

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 67%;
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
        top: 71%;
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

@media (max-width: 456px) {
    main .content-personal .first-name,
    main .content-personal .last-name,
    main .content-personal .verified-email,
    main .content-personal .phone-number {
        width: 380px;
    }

    main .content-personal .phone-number .add-number {
        left: 50%;
    }

    main .content-personal .phone-number .manage-number {
        left: 65%;
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

    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 70%;
    }
}

@media (max-width: 360px) {
    main .content-personal .phone-number .add-number,
    main .content-personal .phone-number .manage-number {
        top: 73%;
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
