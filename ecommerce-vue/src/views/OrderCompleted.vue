<template>
  <div class="container shadow-2 text-center mt-5">
    <div class="orderText">
    <img class="thankYou" :src="thankYouImg">
    <p class="title">FOR YOUR ORDER<br>AT</p>
  <img class="logotype mb-4" :src="logoFrontPage">
  <p>We hope you enjoy your purchase!<br>You will soon receive an<br>order confirmation sent to your email.<br>Get <b>15% OFF</b> your next order, use code: <b>THANKYOU15</b></p>
  <a href="#">www.jewelryofsweden.com</a>
  </div>

    <div class="imgOrder">
        <img class="orderimgcompleted" :src="orderImg">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            logoFrontPage: require('../assets/images/imgFrontpage/LogoFrontpage.png'),
            orderImg: require('../assets/images/imgFrontpage/orderImg.png'),
            thankYouImg: require('../assets/images/imgFrontpage/thankYou.png')
        }
    }

}
</script>

<style scoped>

    .container {
        display: flex;
        padding: 3rem;
        width: 60%;
    }

    .logotype {
        width: 60%;
    }

    .orderimgcompleted {
        width: 100%;
    }

    a {
        color: #ada79a;
        text-decoration: underline;
    }
    
    a:hover {
        color: #000;
        text-decoration: none;
    }

    .thankYou {
        width: 60%;
    }

    .title {
        font-size: 25pt;
    }

</style>