import axios from 'axios'

export default {
    state: {
        product: null
      },
      getters: {
        product: state => state.product
      },
      mutations: {
          GET_ONE_PRODUCT: (state, product) => {
          state.product = product
        }
      },
      actions: {
        getProduct: async ({commit}, _id) => {
          const res = await axios.get('http://localhost:9999/api/products/' + _id)
          commit('GET_ONE_PRODUCT', res.data)
        }
      }
    }