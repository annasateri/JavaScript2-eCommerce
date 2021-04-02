import axios from '@/axios'

export default {
  state: {
    orders: [],
    userOrder: null
    
  },
  getters: {
    orders: state => state.orders,
    userOrder: state => state.userOrder
  },
  mutations: {
    SET_ORDERS: (state, orders) => {
      state.orders = orders.reverse()
    },
    GET_ONE_ORDER: (state, result) => {
        state.userOrder = result.reverse()
    }

  },
  actions: {
    getOrders: async ({commit}) => {
      const res = await axios.get('/orders')
      commit('SET_ORDERS', res.data)
    },
    findUserOrder: async ({commit}, id) => {
        const res = await axios.get('/orders')
        const result = await res.data.filter(order => order.userId === id)
        commit('GET_ONE_ORDER', result)
    }
  }
}