<template>
<div class="container z-depth-1 p-5 my-5">

  <!-- Section: Block Content -->
  <section>

    <!-- Shopping Cart table -->
    <div class="table-responsive">
      <table class="table product-table table-cart-v-1">
        <!-- Table head -->
        <thead>
          <tr>
            <th></th>
            <th class="font-weight-bold">
              <strong>Product</strong>
            </th>
            <th class="font-weight-bold">
              <strong>Description</strong>
            </th>
            <th class="font-weight-bold">
              <strong>Quantity</strong>
            </th>
            <!-- <th></th> -->
            <th class="font-weight-bold">
              <strong>Price</strong>
            </th>
            <th></th>
          </tr>
        </thead>
        <!-- Table head -->
        <!-- Table body -->
        <tbody>

            <cart-product v-for="item in cart" :key="item._id" :item="item"/>

          <!-- Fourth row -->
          <tr>
            <td colspan="3"></td>
            <td>
              <h4 class="mt-2">
                <strong>Total</strong>
              </h4>
            </td>
            <td class="text-right">
              <h4 class="mt-2">
                <strong>{{ totalAmount }} SEK</strong>
              </h4>
            </td>
            <td colspan="3" class="text-right">
              <button type="button" class="btn btn-rounded px-4 btnColor" @click="completed">Complete purchase
                <i class="fas fa-angle-right right"></i>
              </button>
            </td>
          </tr>
          <!-- Fourth row -->
        </tbody>
        <!-- Table body -->
      </table>
    </div>
    <!-- Shopping Cart table -->

  </section>
  <!-- Section: Block Content -->

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import CartProduct from './CartProduct'

export default {
    components: {
        CartProduct
    },
    methods: {
        completed() {
          if(!this.loggedIn) {
            console.log('err')
          } else {
            if(this.cart.length > 0) {
              console.log('success')
              let order = {
                totalPrice: this.totalAmount,
                cart: this.cart,
                user: this.user
              }
              console.log(order)
              this.newOrders(order)
              this.$router.push({name: 'OrderCompleted'})
              this.clearCart()
            } else {
              console.log('err')
            }
          }
        },
        ...mapActions(['newOrders', 'checkUser', 'clearCart'])
    },
    computed: {
        ...mapGetters(['cart', 'totalAmount', 'newOrder', 'loggedIn', 'user'])
    }, 
    created() {
      this.checkUser()
    }
}

</script>

<style scoped>
.btnColor {
  background-color: #ada79a;
  color: #fff;
}

.btnColor:hover {
  background-color: #fff;
  color: #ada79a;
}


</style>