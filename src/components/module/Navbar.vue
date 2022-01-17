<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <div class="container">
                <div class="text-zwallet">
                    <h2>Zwallet</h2>
                </div>

                <div class="navbar-nav ml-auto">

                    <div class="nav-right">
                        <div class="user-img">
                            <img class="navbar-brand" :src="profile.image" alt="man">
                        </div>

                        <div class="name-phone">
                            <h5 v-set-font:small v-set-font:capitalize>{{profile.firstName}} {{profile.lastName}}</h5>
                            <h6 class="number-phone">{{profile.phoneNumber}}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
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
nav {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    color: #000;
    height: 130px;
}

nav .text-zwallet {
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;

    color: #6379F4;
}

nav .nav-right {
    display: flex;
}

nav .nav-right .user-img img{
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
}

nav .nav-right .name-phone {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding-top: 6px;
}

nav .nav-right span {
    margin-left: 30px;
    margin-top: 15px;
}

@media (max-width: 768px) {
    nav .text-zwallet {
        margin-left: 20px;
    }
}

@media (max-width: 425px) {
    nav .text-zwallet {
        margin-left: 160px;
    }

    nav .nav-right {
        margin-right: 50px;
    }
}

@media (max-width: 415px) {
    nav .text-zwallet {
        margin-left: 130px;
    }
}

@media (max-width: 394px) {
    nav {
        height: 160px;
    }
}

@media (max-width: 379px) {
    nav .nav-right {
        margin-right: 75px;
    }
}

@media (max-width: 347px) {
    nav .nav-right {
        margin-right: 60px;
    }
}

@media (max-width: 325px) {
    nav .text-zwallet {
        margin-left: 100px;
    }

    nav .nav-right {
        margin-right: 10px;
    }
}
</style>
