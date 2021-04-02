import axios from 'axios'

export default {
  state: {
    users: null
    
  },
  getters: {
    users: state => state.users
  },
  mutations: {
    SET_USER: (state, users) => {
      state.users = users
    },
  },
  actions: {
    getOneUser: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/users')
      commit('SET_USER', res.data)
    },

   
  },

}