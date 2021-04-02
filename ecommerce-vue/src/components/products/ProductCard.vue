<template>
<div>
    <router-link :to="'/product/details/' + product._id" class="col">
        <div id="pointer" class="card shadow-0">
            <div class="bg-image hover-zoom">
                <img :src="require('@/assets/images/imgProducts/' + product.img)" class="card-img-top"/>
            </div>
    
                <div class="card-body shadow-1">
                    <p class="card-text shopTitle">{{ product.title }} | {{ product.description }}</p>
                    <p class="priceText">{{ product.price }} SEK</p>
                </div>

        </div>
    </router-link>
    <div class="justify-content-center">
        <button class="btn-quickAdd btn btn-floating btn-lg font-weight-bold" @click="total(); addToCart({product, quantity, amount});"><i class="fas fa-plus"></i></button>
    </div>
</div>

</template>

<script>

import { mapActions } from 'vuex'

export default {
    props: ['product', 'id'],
    data() {
        return {
            quantity: 1,
            amount: 0
        }
    },
    methods: {
        ...mapActions(['addToCart']),

        total() {
            let amounts = this.product.price * this.quantity
            this.amount = amounts
        }
    }
}
</script>

<style scoped>

    .card-text, .priceText {
        margin: 0;
    }
    .card-body {
        padding: 0.4rem;
        background: linear-gradient(90deg, rgba(230,221,200,0.33610538942139356) 0%, rgba(196,190,177,0.3333042689732143) 100%);
        color: #000;
        border-radius: 10px;
    }
    #pointer {
        cursor: pointer;
    }
    .btn-quickAdd {
        color: #ada79a;
    }
    .shopTitle {
        font-size: 13pt;
        font-weight: 500;
    }

</style>