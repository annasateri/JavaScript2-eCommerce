<template>
  <div class="container text-center mt-5">
    <img class ="ordersImg" :src="ordersImg">
  <order-body />
  </div>
</template>

<script>

import OrderBody from '../components/orders/OrderBody'

export default {
  data() {
    return {
      ordersImg: require('../assets/images/imgFrontpage/Orders.png')
    }
  },
  components: {
    OrderBody
  }
}
</script>

<style scoped>

  .ordersImg {
    width: 30%;
  }

</style>