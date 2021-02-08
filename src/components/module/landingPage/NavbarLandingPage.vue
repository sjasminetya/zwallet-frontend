<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand text-zwallet" href="#">Zwallet</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <div v-set-font:small class="btn btn-login" @click.prevent="goLogin">Login</div>
                        <div v-set-font:small class="btn btn-sign-up" @click.prevent="goRegister">Sign Up</div>
                    </div>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'NavbarLandingPage',
  methods: {
    goLogin () {
      this.$router.push('/auth/login')
    },
    goRegister () {
      this.$router.push('/auth/register')
    }
  }
}
</script>

<style scoped>
nav .navbar-brand {
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;

    color: #FFFFFF !important;
}

nav .btn {
    margin-top: 10px;
    margin-right: 15px;
}

nav .btn-login {
    width: 120px;
    height: 48px;
    padding-top: 10px;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    text-align: center;

    color: #FFFFFF;

    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    transition: .3s;
}

nav .btn-login:hover {
    color: #FFFFFF;
    transform: scale(1.05);
}

nav .btn-sign-up {
    width: 120px;
    height: 48px;
    padding-top: 10px;

    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    text-align: center;

    color: #6379F4;

    background: #FFFFFF;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    transition: .3s;
}

nav .btn-sign-up:hover {
    color: #6379F4;
    transform: scale(1.05);
}

@media (max-width: 980px) {
    .navbar {
        background: #6379F4 !important;
    }
}

@media (max-width: 768px) {
    nav .navbar-brand {
        color: #FFFFFF;
    }

    nav.navbar-light {
        background: #6379F4;
    }

    nav .navbar-nav {
        display: flex;
        flex-direction: row;
    }

    nav .btn {
        margin: auto;
        margin-left: 50px;
    }
}

@media (max-width: 495px) {
    nav .btn {
        margin: auto;
        margin-left: 20px;
    }
}
</style>
