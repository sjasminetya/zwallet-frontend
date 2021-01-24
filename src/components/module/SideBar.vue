<template>
  <div>
    <aside>
        <div class="main-menu">
            <div class="menu">
                <span><i class="fas fa-th-large"></i></span>
                <router-link to="/page/dashboard" class="dashboard">Dashboard</router-link>
            </div>

            <div class="menu">
                <span><i class="fas fa-arrow-up"></i></span>
                <router-link to="/page/search-receiver">Transfer</router-link>
            </div>

            <div class="menu">
                <span><i class="fas fa-plus"></i></span>
                <router-link to="/transfer/top-up">Top Up</router-link>
            </div>

            <div class="menu">
                <span><i class="far fa-user"></i></span>
                <router-link to="/profile/update-profile">Profile</router-link>
            </div>

            <div class="menu-logout">
                <div class="menu">
                    <span><i class="fas fa-sign-out-alt"></i></span>
                    <a class="logout" @click.prevent="goLogout">Logout</a>
                </div>
            </div>
        </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
aside {
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    height: 710px;
    width: 280px;
    padding-top: 50px;

    position: relative;
}

aside .main-menu {
    display: flex;
    flex-direction: column;
}

aside .main-menu .menu {
    margin-bottom: 50px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    list-style-type: none;

    color: #3a3d42;
}

aside .main-menu .menu span {
    margin-left: 40px;
}

aside .main-menu .menu a {
    color: #3a3d42;
    margin-left: 20px;
    padding-bottom: 70px;
}

aside .main-menu .menu a:hover {
    text-decoration: none;
    color: #3a3d42;
}

aside .main-menu .menu-logout {
    position: absolute;
    bottom: 0px;
}

@media (max-width: 1100px) {
    aside {
        margin-top: 20px;
        width: 100%;
        height: 150px;
    }

    aside .main-menu {
        display: flex;
        flex-direction: row;
    }

    aside .main-menu .menu-logout {
        right: 5%;
        top: 33%;
    }
}

@media (max-width: 992px) {
    aside {
        width: 100%;
        height: 180px;
    }

    aside .main-menu {
        display: flex;
        flex-direction: row;
    }

    aside .main-menu .menu-logout {
        left: 1%;
        top: 55%;
    }
}

@media (max-width: 768px) {
    aside {
        width: 100%;
        height: 200px;
    }

    aside .main-menu {
        display: flex;
        flex-direction: row;
    }

    aside .main-menu .menu a {
        margin-left: 10px;
    }

    aside .main-menu .menu span {
        margin-left: 15px;
    }

    aside .main-menu .menu-logout {
        left: 30px;
        bottom: 0px;
    }
}

@media (max-width: 576px) {
    aside {
        height: 150px;
    }

    aside .main-menu .menu a {
        display: none;
    }

    aside .main-menu .menu span {
        margin-left: 70px;
    }

    aside .main-menu .menu-logout {
        margin-top: -30px;
        margin-left: 299px;
    }
}

@media (max-width: 461px) {
    aside .main-menu .menu span {
        margin-left: 55px;
    }

    aside .main-menu .menu-logout {
        margin-left: 270px;
    }
}

@media (max-width: 415px) {
    aside {
        height: 100px;
    }

    aside .main-menu .menu {
        margin-top: -15px;
    }

    aside .main-menu .menu a {
        display: none;
    }

    aside .main-menu .menu span {
        margin-left: 40px;
    }

    aside .main-menu .menu-logout {
        margin-top: -5px;
        margin-left: 260px;
    }
}

@media (max-width: 393px) {
    aside .main-menu .menu span {
        margin-left: 30px;
    }
}

@media (max-width: 379px) {
    aside {
        height: 100px;
    }

    aside .main-menu .menu {
        margin-top: -15px;
    }

    aside .main-menu .menu a {
        display: none;
    }

    aside .main-menu .menu span {
        margin-left: 30px;
    }

    aside .main-menu .menu-logout {
        margin-top: -5px;
        margin-left: 215px;
    }
}

@media (max-width: 325px) {
    aside {
        height: 100px;
    }

    aside .main-menu .menu {
        margin-top: -15px;
    }

    aside .main-menu .menu a {
        display: none;
    }

    aside .main-menu .menu span {
        margin-left: 25px;
    }

    aside .main-menu .menu-logout {
        margin-top: -5px;
        margin-left: 200px;
    }
}
</style>
