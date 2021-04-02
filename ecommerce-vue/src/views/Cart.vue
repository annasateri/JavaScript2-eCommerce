<template>
<div class="text-center mt-5">
  <img class="title" :src="shoppingBag">

  <cartbody />
  
</div>
</template>

<script>

import Cartbody from '../components/cart/Cartbody'

export default {
  data() {
    return {
      shoppingBag: require('../assets/images/imgFrontpage/shoppingBag.png')
    }
  },
    components: {
        Cartbody
    }
}
</script>

<style scoped>

  .title {
    width: 30%;
  }

</style>