import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import Products from './modules/products/Products'
import Product from './modules/products/Product'
import Users from './modules/users/Users'
import User from './modules/users/User'
import Cart from './modules/cart/Cart'
import Orders from './modules/orders/Orders'
import Order from './modules/orders/Order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {
  
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Products,
    Product,
    Users,
    User,
    Cart,
    Orders,
    Order
  }
})
