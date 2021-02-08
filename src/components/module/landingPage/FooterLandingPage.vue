<template>
    <div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Zwallet</h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <p v-set-font:small class="about">Simplify financial needs and saving much time in banking needs with one single app.</p>
                    </div>
                </div>

                <hr>

                <div class="row text-bottom">
                    <div class="col-lg-7">
                        <p class="copyright">2020 Zwallet. All right reserved.</p>
                    </div>
                    <div class="col-lg-3">
                        <p class="number">+62 5637 8882 9901</p>
                    </div>
                    <div class="col-lg-2">
                        <p class="email">contact@zwallet.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'FooterLandingPage'
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 438px;
    background: #6379F4;
}

footer h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    margin-top: 5%;

    color: #FFFFFF;
}

footer p.about {
    font-style: normal;
    font-weight: normal;
    line-height: 31px;
    margin-top: 3%;

    color: rgba(239, 239, 239, 0.75);
}

footer hr {
    margin-top: 5%;
    border: 1px solid rgba(255, 255, 255, 0.6);
}

footer .text-bottom {
    margin-top: 3%;
    color: #FFFFFF;
}

@media (max-width: 768px) {
    footer hr {
        margin-top: 20%;
    }

    footer .text-bottom {
        margin-top: 3%;
    }
}
</style>
