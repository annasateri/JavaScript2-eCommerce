<template>

<div class="container my-5">

  <!--Section: Content-->
  <section class="dark-grey-text text-center mb-5">
    
        <!-- Table -->
    <div class="card">
      <div class="card-body">
        <table class="table table-responsive-md mb-0">
          <thead>
            <tr>
              <th>
                <strong><i class="fas fa-gem"></i></strong>
              </th>
              <th>
                <strong>EMAIL</strong>
              </th>
              <th>
                <strong>ID</strong>
              </th>
              <th>
                <strong>PRICE</strong>
              </th>
            </tr>
          </thead>
          <tbody>
              <order-card v-for="order in userOrder" :key="order._id" :order="order" />
          </tbody>
        </table>
      </div>
    </div>
    <!-- Table -->

	</section>
  <!--Section: Content-->


</div>

</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import OrderCard from './OrderCard.vue'

export default {
  components: {
    OrderCard
  },
  methods: {
    ...mapActions(['findUserOrder', 'checkUser', 'getOrders'])
    
  },
  computed: {
    ...mapGetters(['oneUser', 'orders', 'user', 'userOrder'])
  },
  mounted() {
    this.findUserOrder(this.user._id)
    this.checkUser()
  }
}

</script>

<style>

</style>