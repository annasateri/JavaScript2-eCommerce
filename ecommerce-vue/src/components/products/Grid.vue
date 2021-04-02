<template>
<div class="d-flex justify-content-center p-5">
  <div class="container text-center row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">

<product-card v-for="product in products" :key="product._id" :product="product"/>



  </div>
</div>
</template>

<script>

import ProductCard from './ProductCard'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  components: {
      ProductCard
  },
  methods: {
      ...mapActions(['getProducts'])
  },
  computed: {
      ...mapGetters(['products'])
  },
  mounted() {
      this.getProducts()
  }
}

</script>

<style>
</style>