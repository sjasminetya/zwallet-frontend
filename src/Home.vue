<template>
    <div>
        <Navbar/>
        <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <h1 class="text-jumbotron">Awesome App For Saving Time.</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <p v-set-font:small>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <button v-set-font:small type="submit" class="btn btn-try">Try It Free</button>
                        </div>
                    </div>
                </div>
            </div>

            <section class="why-choose-zwallet">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1><span class="why">Why</span> Choose Zwallet</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <p v-set-font:small class="text-main">We have some great features from the application and it’s totally free to use by all users around the world.</p>
                        </div>
                    </div>

                    <div class="row card-content">
                        <div class="col-lg-4 col-md-6">
                            <div class="card card-no-bg">
                                <img src="./assets/img-landing/phone.png" alt="Phone logo">
                                <h3>24/7 Support</h3>
                                <p v-set-font:small>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <img src="./assets/img-landing/lock.png" alt="lock logo">
                                <h3>Data Privacy</h3>
                                <p v-set-font:small>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card card-no-bg">
                                <img src="./assets/img-landing/download.png" alt="download logo">
                                <h3>Easy Download</h3>
                                <p v-set-font:small>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="logo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                            <img src="./assets/img-landing/microsoft.png" alt="Microsoft Logo">
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                            <img src="./assets/img-landing/dropbox.png" alt="Dropbox Logo">
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                            <img src="./assets/img-landing/hm.png" alt="H&M Logo">
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                            <img src="./assets/img-landing/airbnb.png" alt="Airbnb Logo">
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                            <img src="./assets/img-landing/canon.png" alt="Canon Logo">
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4 col-6">
                            <img src="./assets/img-landing/dell.png" alt="Dell Logo">
                        </div>
                    </div>
                </div>
            </section>

            <section class="money-has-been-transfered">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ml-auto">
                            <h6 class="btn btn-money">Rp. 390.736.500</h6>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-12">
                            <h1><span class="text-money">Money</span> has Been Transfered.</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <p v-set-font:small>That amount of money has been transfered from all users. We still counting and going strong!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-block">
                            <div class="image-phone">
                                <img src="./assets/img-landing/png-phone2.png" alt="phone" class="phone2">
                                <img src="./assets/img-landing/png-phone.png" alt="phone" class="phone">
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <h1>All The <span class="great">Great</span> Zwallet Features.</h1>

                            <div class="row">
                                <div class="col-lg-12 features-card">
                                    <div class="text-card">
                                        <h6><span class="number">1.</span> Small Fee</h6>
                                        <p v-set-font:small>We only charge 5% of every success transaction done in Zwallet app.</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 features-card">
                                    <div class="text-card">
                                        <h6><span class="number">2.</span> Data Secured</h6>
                                        <p v-set-font:small>All your data is secured properly in our system and it’s encrypted.</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 features-card">
                                    <div class="text-card">
                                        <h6><span class="number">3.</span> User Friendly</h6>
                                        <p v-set-font:small>Zwallet come up with modern and sleek design and not complicated.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="user">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>What Users are <span class="say">Saying.</span></h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <p v-set-font:small>We have some great features from the application and it’s totally free to use by all users around the world.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-8 card-user">
                            <div class="button">
                                <button type="submit" class="btn btn-arrow-left">
                                    <span><i class="fas fa-arrow-left"></i></span>
                                </button>
                                <button type="submit" class="btn btn-arrow-right">
                                    <span><i class="fas fa-arrow-right"></i></span>
                                </button>
                            </div>
                            <img src="./assets/img-landing/alex.png" alt="">
                            <h2>Alex Hansinburg</h2>
                            <p class="designer">Designer</p>

                            <div class="row">
                                <div class="col-lg-12">
                                    <p v-set-font:small>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        <Footer/>
    </div>
</template>

<script>
import Navbar from './components/module/landingPage/NavbarLandingPage'
import Footer from './components/module/landingPage/FooterLandingPage'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.jumbotron {
    background-image: url('./assets/img-landing/bg-landing-page.png');
    background-repeat: no-repeat;
    height: 800px;
    margin-top: -75px;
    margin-bottom: 0px;
}

.jumbotron .text-jumbotron {
    margin-top: 20%;

    font-style: normal;
    font-weight: 800;
    font-size: 68px;
    line-height: 102px;
    text-align: center;

    color: #FFFFFF;
}

.jumbotron p {
    margin-top: 5%;
    font-style: normal;
    font-weight: normal;
    text-align: center;

    color: #FFFFFF;
}

.jumbotron .btn-try {
    width: 173px;
    height: 57px;
    margin-top: 3%;
    margin-left: 43%;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    color: #6379F4;

    background: #FFFFFF;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
}

section h1, .why {
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 93px;
    margin-top: 10%;
    color: #3A3D42;

    text-align: center;
}

section p {
    font-style: normal;
    font-weight: normal;
    line-height: 31px;
    text-align: center;

    color: #3A3D42;
}

section.why-choose-zwallet,
section.money-has-been-transfered,
section.user  {
    min-height: 600px;
    background: #FFFFFF;
}

section.why-choose-zwallet .why,
section.money-has-been-transfered .text-money,
section.features .great,
section.user .say {
    color: #6379F4;
}

section.why-choose-zwallet p.text-main {
    margin-top: 3%;
}

section.why-choose-zwallet .card {
    display: flex;
    flex-direction: column;

    width: 366px;
    height: 344px;
    margin-top: 15%;

    background: #FFFFFF;
    box-shadow: 0px 4px 250px rgba(172, 172, 172, 0.15);
    border-radius: 25px;
    border: none;
}

section.why-choose-zwallet .card.card-no-bg {
    background: none;
    box-shadow: none;
    border-radius: none;
    border: none;
    margin-bottom: 80px;
}

section.why-choose-zwallet .card img {
    max-width: 100%;
    height: auto;
    object-fit: contain;

    margin-top: 5%;
}

section.why-choose-zwallet .card h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    margin-top: 5%;

    color: #3A3D42;
}

section.why-choose-zwallet .card p {
    margin-top: 5%;
    color: rgba(58, 61, 66, 0.9);
}

section.logo {
    min-height: 300px;
}

section.logo img {
    margin-top: 60%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

section.money-has-been-transfered .btn-money {
    width: 720px;
    height: 170px;

    font-style: normal;
    font-weight: 800;
    font-size: 68px;
    line-height: 102px;
    text-align: center;
    padding-top: 25px;
    margin-top: 10%;
    margin-left: 18%;

    color: #6379F4;

    background: rgba(71, 58, 209, 0.06);
    border-radius: 85px;
}

section.money-has-been-transfered h1 {
    margin-top: 5%;
}

section.money-has-been-transfered p {
    margin-top: 3%;
}

section.features {
    min-height: 1000px;
}

section.features h1 {
    margin-top: 20%;
}

section.features .image-phone {
    display: flex;
    position: relative;
    margin-top: 20%;
}

section.features .image-phone img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

section.features .image-phone .phone2 {
    position: absolute;
    left: -42%;
    transform: matrix(0.97, -0.15, 0.15, 0.97, 0, 0);
}

section.features .image-phone .phone {
    position: absolute;
    top: 38px;
    left: -15%;
    transform: matrix(0.97, 0.10, -0.10, 0.97, 0, 0);

}

section.features h1 {
    text-align: left;
}

section.features .features-card {
    width: 620px;
    height: 127px;
    margin-top: 5%;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

section.features .features-card .text-card {
    display: flex;
    flex-direction: column;
    margin-top: 4%;
}

section.features .features-card h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 31px;

    color: #3A3D42;
}

section.features .features-card .number {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 31px;

    color: #6379F4;
}

section.features .features-card p {
    font-style: normal;
    font-weight: normal;
    line-height: 31px;
    text-align: left;

    color: rgba(58, 61, 66, 0.9);
}

section.user .card-user{
    width: 800px;
    height: 496px;
    background: #FFFFFF;
    box-shadow: 0px 5px 70px rgba(197, 197, 197, 0.15);
    border-radius: 30px;
    margin: 5% auto;
    position: relative;
}

section.user .card-user img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
}

section.user .card-user h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    margin-top: 3%;

    color: #373C46;
}

section.user .card-user p.designer {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 33px;
    text-align: center;

    color: #56585B;
}

section.user .card-user p.user-word {
    margin-top: 3%;
    font-style: normal;
    font-weight: normal;
    line-height: 33px;
    text-align: center;

    color: #676A71;
}

section.user .btn-arrow-left,
section.user .btn-arrow-right {
    width: 60px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 5px 70px rgba(149, 148, 148, 0.15);
    border-radius: 20px;
}

section.user .btn-arrow-left,
section.user .btn-arrow-right {
    position: absolute;
    top: 50%;
}

section.user .btn-arrow-left {
    position: absolute;
    right: 110%;
}

section.user .btn-arrow-right {
    position: absolute;
    left: 110%;
}

@media (max-width: 1300px) {
    section.why-choose-zwallet .card {
        width: 100%;
    }

    section.money-has-been-transfered .btn-money {
        width: 720px;
        margin-left: 20%;
    }

    section.user .btn-arrow-left {
        right: 105%;
    }

    section.user .btn-arrow-right {
        left: 105%;
    }
}

@media (max-width: 1100px) {
    section.money-has-been-transfered .btn-money {
        width: 720px;
        margin-left: 15%;
    }

    section.user .btn-arrow-left {
        right: 100%;
    }

    section.user .btn-arrow-right {
        left: 100%;
    }
}

@media (max-width: 992px) {
    section.money-has-been-transfered .btn-money {
        width: 520px;

        font-size: 40px;
        padding-top: 25px;
        margin-left: 10%;

    }

    section.user .btn-arrow-left {
        top: 35%;
        right: 90%;
    }

    section.user .btn-arrow-right {
        top: 35%;
        left: 90%;
    }
}

@media (max-width: 768px) {
    .jumbotron {
        margin-top: 0px;
    }

    .jumbotron .btn-try {
        margin-left: 30%;
    }

    section.why-choose-zwallet .card {
        width: 366px;
        margin: 10px auto;
    }

    section.money-has-been-transfered .btn-money {
        width: 520px;

        font-size: 40px;
        padding-top: 25px;
        margin-left: 0%;

    }
}

@media (max-width: 576px) {
    section.money-has-been-transfered .btn-money {
        width: 420px;
        margin-left: 10%;
    }

    section.user .btn-arrow-left {
        top: 35%;
        right: 86%;
    }

    section.user .btn-arrow-right {
        top: 35%;
        left: 86%;
    }
}

@media (max-width: 495px) {
    .jumbotron .btn-try {
        margin-left: 25%;
    }

    section.logo img {
        margin-top: 0;
    }

    section.money-has-been-transfered .btn-money {
        width: 320px;
        height: 100px;
        font-size: 30px;
        padding-top: 0px;
        margin-left: 7%;
    }

    section.features .features-card {
        margin-left: 10px;
        width: 400px;
    }

    section.user .btn-arrow-left {
        right: 80%;
    }

    section.user .btn-arrow-right {
        left: 80%;
    }
}

@media (max-width: 383px) {
    .jumbotron .text-jumbotron {
        font-size: 40px;
    }

    section.user .btn-arrow-left {
        right: 80%;
    }

    section.user .btn-arrow-right {
        left: 80%;
    }

    section h1, .why {
        font-size: 40px;
    }

    section.money-has-been-transfered .text-money {
        font-size: 40px;
    }

    section.money-has-been-transfered .btn-money {
        margin-left: 0%;
    }

    section.why-choose-zwallet .card {
        width: 100%;
        margin: 0;
    }
}
</style>
