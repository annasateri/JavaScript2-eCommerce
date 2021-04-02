import axios from 'axios'

export default {
    state: {
        products: [],
      },
      getters: {
        products: state => state.products
      },
      mutations: {
          GET_PRODUCTS (state) {
            axios.get('http://localhost:9999/api/products')
            .then(res => {
              state.products = res.data
            })
        }
      },
      actions: {
        getProducts: ({commit}) => {
          commit('GET_PRODUCTS')
        }
      }
}