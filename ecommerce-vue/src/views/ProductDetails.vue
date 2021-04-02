<template>

<div class="container" v-if="product">
    <div class="card border-0 shadow-0">
        <div class="bg-image hover-zoom">
            <img :src="require('@/assets/images/imgProducts/' + product.img)" alt="" class="img-fluid z-depth-0">
        </div>
        <div class="card-body shadow-1 text-center">
            <div class="detailsText">
                {{ product.title }} | {{product.description}}
            </div>
                <div class="font-weight-bold">
                    {{product.price}} SEK
                </div>
        </div>
            <div class="AddToBag text-center mt-2">
                <button class="btn btn-white" @click="total(); addToCart({product, quantity, amount});">ADD TO BAG</button>
            </div>
    </div>
</div>

</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['id'],
    data() {
        return {
            quantity: 1,
            amount: 0
        }
    },
    methods: {
        ...mapActions(['getProduct', 'addToCart']),

        total() {
            let amounts = this.product.price * this.quantity
            this.amount = amounts
        }
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.getProduct(this.id)
    }
}
</script>

<style scoped>
    .card {
        width: 40%;
        margin: 2rem auto;
        border-radius: 10px;
        padding: 1rem;
        min-height: 50vh;
    }

        .card-body {
        padding: 0.4rem;
        background: linear-gradient(90deg, rgba(230,221,200,0.33610538942139356) 0%, rgba(196,190,177,0.3333042689732143) 100%);
        color: #000;
        border-radius: 10px;
        line-height: 2rem;
    }

    .btn {
        width: 30%;
        font-weight: 500;
        font-size: 12pt;
        color: #ada79a;
    }
    .btn:hover {
        background-color: #fff;
    }

</style>