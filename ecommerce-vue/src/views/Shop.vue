<template>
  <div>
      <div class="container mt-5 text-center">
          <img class="shopProducts" :src="shopProducts">
      </div>

      <grid />

  </div>
</template>

<script>

import Grid from '../components/products/Grid'

export default {
    data() {
        return {
            shopProducts: require('../assets/images/imgProducts/shopProducts.png')
        }
    },
    components: {
        Grid
    }
}
</script>

<style scoped>

    .shopProducts {
        width: 30%;
    }

</style>