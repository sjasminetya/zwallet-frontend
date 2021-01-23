<template>
    <div>
        <footer class="py-2">
            <div class="left-copyright">
                <h6>2020 Zwallet. All right reserved</h6>
            </div>

            <div class="right-number ml-5">
                <h6>+62 5637 8882 9901</h6>
            </div>

            <div class="right-contact ml-5">
                <h6>contact@zwallet.com</h6>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
    background: #6379F4;
    height: 68px;
    width: 100%;
    color: #fff;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

@media (max-width: 614px) {
    footer {
        display: flex;
        flex-direction: column;
        height: 90px;
    }

    footer .left-copyright {
        margin-left: 60px;
    }
}

@media (max-width: 382px) {
    footer .left-copyright,
    footer .right-number,
    footer .right-contact {
        margin-left: 0px !important;
    }
}

</style>
