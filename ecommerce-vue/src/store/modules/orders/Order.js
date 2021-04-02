import axios from '@/axios'

export default {
  state: {
    newOrder: null
    
  },
  getters: {
    newOrder: state => state.newOrder,

  },
  mutations: {
    NEW_ORDER: (state, newOrder) => {
      state.newOrder = newOrder
    }

  },
  actions: {
    newOrders: async ({commit}, data) => {
      const newOrder = {
          userId: data.user._id,
          email: data.user.email,
          cart: data.cart,
          totalPrice: data.totalPrice
      }
      await axios.post('/orders', newOrder)
      commit('NEW_ORDER', newOrder)
    }
  }
}