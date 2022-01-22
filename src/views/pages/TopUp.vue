<template>
  <div>
    <div class="container">
      <section class="main-container">
        <sidebar />
        <main>
          <div class="top-up-main">
            <h6 class="how-top-up">How to Top Up</h6>

            <div class="content-top-up">
              <div class="how-one">
                <h6>1</h6>
                <p>Go to the nearest ATM or you can use E-Banking.</p>
              </div>

              <div class="how-two">
                <h6>2</h6>
                <p>Type your security number on the ATM or E-Banking.</p>
              </div>

              <div class="how-three">
                <h6>3</h6>
                <p>Select “Transfer” in the menu</p>
              </div>

              <div class="how-four">
                <h6>4</h6>
                <p>
                  Type the virtual account number that we provide you at the
                  top.
                </p>
              </div>

              <div class="how-five">
                <h6>5</h6>
                <p>Type the amount of the money you want to top up.</p>
              </div>

              <div class="how-six">
                <h6>6</h6>
                <p>Read the summary details</p>
              </div>

              <div class="how-seven">
                <h6>7</h6>
                <p>Press transfer / top up</p>
              </div>

              <div class="how-eight">
                <h6>8</h6>
                <p>You can see your money in Zwallet within 3 hours.</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import { Sidebar } from '../../components/module'
export default {
  name: 'TopUp',
  components: {
    Sidebar
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
}

main .how-top-up {
  padding-left: 30px;
  padding-top: 30px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  color: #3a3d42;
}

main .content-top-up {
  display: flex;
  flex-direction: column;
  position: relative;
}

main .content-top-up h6 {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  color: #6379f4;
}

main .content-top-up p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  padding-left: 5%;

  color: #7a7886;
}

main .content-top-up .how-one,
main .content-top-up .how-two,
main .content-top-up .how-three,
main .content-top-up .how-four,
main .content-top-up .how-five,
main .content-top-up .how-six,
main .content-top-up .how-seven,
main .content-top-up .how-eight {
  display: flex;
  width: 760px;
  height: 80px;
  margin-left: 2%;
  margin-top: 3%;
  padding-left: 5%;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

main .content-top-up .how-one p,
main .content-top-up .how-two p,
main .content-top-up .how-three p,
main .content-top-up .how-four p,
main .content-top-up .how-five p,
main .content-top-up .how-six p,
main .content-top-up .how-seven p,
main .content-top-up .how-eight p,
main .content-top-up .how-one h6,
main .content-top-up .how-two h6,
main .content-top-up .how-three h6,
main .content-top-up .how-four h6,
main .content-top-up .how-five h6,
main .content-top-up .how-six h6,
main .content-top-up .how-seven h6,
main .content-top-up .how-eight h6 {
  margin-bottom: 0px;
}

</style>
