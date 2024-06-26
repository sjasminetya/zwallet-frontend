<template>
  <div>
    <div class="container">
      <section class="main-container">
        <SideBar />
        <main>
          <div class="search-main">
            <div class="text-main">
              <h6 v-set-font:small class="search-receiver">Search Receiver</h6>
            </div>

            <div class="search-box">
              <span><i class="fas fa-search"></i></span>
              <input
                type="text"
                v-model="search"
                @keyup.enter="searchingName"
                class="search"
                placeholder="Search receiver here"
              />
            </div>

            <div id="search-content">
              <div v-if="!search">
                <div
                  class="content-search"
                  v-for="data in friends"
                  :key="data.id"
                >
                  <div @click="goPage(data.id)" class="search">
                    <div class="search-img">
                      <img :src="data.image" alt="user" />
                    </div>

                    <div class="text-content">
                      <h6 v-set-font:small v-set-font:uppercase>
                        {{ data.firstName }} {{ data.lastName }}
                      </h6>
                      <p>{{ data.phoneNumber }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="search">
                <div
                  class="content-search"
                  v-for="data in searching"
                  :key="data.id"
                >
                  <div @click="goPage(data.id)" class="search">
                    <div class="search-img">
                      <img :src="data.image" alt="user" />
                    </div>

                    <div class="text-content">
                      <h6 v-set-font:small v-set-font:uppercase>
                        {{ data.firstName }} {{ data.lastName }}
                      </h6>
                      <p>{{ data.phoneNumber }}</p>
                    </div>
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
import { mapActions, mapGetters } from 'vuex'
import SideBar from '../../components/module/SideBar/SideBar.vue'
export default {
  name: 'SearchReceiver',
  components: {
    SideBar
  },
  data () {
    return {
      search: '',
      searching: '',
      sort: true
    }
  },
  methods: {
    ...mapActions(['userFriends', 'searchName']),
    async searchingName () {
      this.searching = await this.searchName(this.search)
    },
    goPage (id) {
      this.$router.push({ path: '/page/input-amount', query: { id: id } })
    }
  },
  watch: {
    search () {
      this.searchingName()
    }
  },
  computed: {
    ...mapGetters(['friends'])
  },
  mounted () {
    this.userFriends()
    this.searchingName()

    const scrollFriends = document.querySelector('#search-content')
    scrollFriends.addEventListener('scroll', (e) => {
      if (
        scrollFriends.scrollTop + scrollFriends.clientHeight >=
        scrollFriends.scrollHeight
      ) {
        this.userFriends()
      }
    })
    this.userFriends()
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

  min-height: 100vh;
  width: 800px;
  position: relative;
  overflow: auto;
}

main .text-main {
  display: flex;
}

main .text-main .search-receiver {
  padding-left: 30px;
  padding-top: 50px;

  font-style: normal;
  font-weight: bold;
  line-height: 25px;

  color: #3a3d42;
}

main .search-box {
  position: relative;
}

main .search-box input {
  width: 750px;
  height: 54px;
  background: rgba(58, 61, 66, 0.1);
  border-radius: 12px;
  border: none;
  margin-top: 3%;
  margin-left: 3%;
  padding-left: 45px;
}

main .search-box input:focus {
  outline: none;
}

main .search-box span {
  color: #a9a9a9;
  margin-left: 5%;
  position: absolute;
  top: 50%;
}

main .content-search {
  display: flex;
  flex-direction: column;
}

main .content-search .search-img img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-top: 10%;
  margin-left: 10%;
  border-radius: 10px;
}

main .content-search h6 {
  font-weight: bold;
  text-transform: uppercase;
  color: #4d4b57;
}

main .content-search p {
  font-size: 16px;

  color: #7a7886;
}

main .content-search .search {
  display: flex;
  width: 700px;
  height: 110px;
  margin-left: 3%;
  margin-top: 3%;
  overflow: auto;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: none;
}

main .content-search .search .text-content {
  display: flex;
  flex-direction: column;
  text-align: left;

  margin-left: 5%;
  margin-top: 3%;
}

main .content-search button.page-link {
  display: inline-block;
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}

@media (max-width: 1300px) {
  main {
    width: 800px;
  }
}

@media (max-width: 1182px) {
  main .search-box input {
    width: 580px;
  }

  main .content-search .search {
    width: 550px;
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

  main .search-box input {
    width: 880px;
  }

  main .content-search .search {
    width: 850px;
  }
}

@media (max-width: 992px) {
  main .search-box input {
    width: 650px;
  }

  main .content-search .search {
    width: 650px;
  }
}

@media (max-width: 768px) {
  main .search-box input {
    width: 650px;
  }

  main .content-search .search {
    width: 650px;
  }
}

@media (max-width: 765px) {
  main .search-box input {
    width: 450px;
  }

  main .content-search .search {
    width: 450px;
  }
}

@media (max-width: 576px) {
  main .search-box input {
    width: 500px;
  }

  main .content-search .search {
    width: 480px;
  }

  main .content-search .search .text-content {
    margin-top: 6%;
  }
}

@media (max-width: 570px) {
  main .search-box input {
    width: 470px;
    margin-left: 5%;
  }

  main .content-search .search {
    width: 470px;
    margin-left: 5%;
  }

  main .search-box span {
    margin-left: 40px;
    top: 48%;
  }
}

@media (max-width: 563px) {
  main .search-box span {
    margin-left: 40px;
    top: 48%;
  }
}

@media (max-width: 532px) {
  main .search-box input {
    width: 450px;
  }

  main .content-search .search {
    width: 450px;
  }
}

@media (max-width: 508px) {
  main .search-box input {
    width: 410px;
  }

  main .content-search .search {
    width: 410px;
  }
}

@media (max-width: 473px) {
  main .search-box input {
    width: 380px;
  }

  main .content-search .search {
    width: 380px;
  }
}

@media (max-width: 457px) {
  main .search-box input {
    width: 360px;
  }

  main .content-search .search {
    width: 360px;
  }
}

@media (max-width: 437px) {
  main .content-search .search .text-content {
    margin-top: 6%;
  }
}

@media (max-width: 426px) {
  main .search-box input {
    width: 340px;
  }

  main .content-search .search {
    width: 340px;
  }
}

@media (max-width: 416px) {
  main .search-box input {
    width: 320px;
  }

  main .content-search .search {
    width: 320px;
  }
}

@media (max-width: 394px) {
  main .search-box input {
    width: 330px;
  }

  main .content-search .search {
    width: 330px;
  }
}

@media (max-width: 381px) {
  main .search-box input {
    width: 330px;
  }

  main .content-search .search {
    width: 330px;
  }
}

@media (max-width: 379px) {
  main .search-box input {
    width: 300px;
  }

  main .content-search .search {
    width: 300px;
  }

  main .content-search .search .text-content {
    margin-top: 6%;
  }
}

@media (max-width: 358px) {
  main .search-box input {
    width: 290px;
  }

  main .content-search .search {
    width: 270px;
  }
}

@media (max-width: 339px) {
  main .search-box input {
    width: 270px;
  }

  main .content-search .search {
    width: 250px;
  }
}

@media (max-width: 327px) {
  main .search-box input {
    width: 250px;
  }

  main .content-search .search {
    width: 230px;
  }
}

@media (max-width: 320px) {
  main .search-box input {
    width: 260px;
  }

  main .content-search .search {
    width: 260px;
  }
}
</style>
