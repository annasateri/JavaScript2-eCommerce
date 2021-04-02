import axios from '@/axios'    
import jwt_decode from 'jwt-decode'


export default {
  state: {
    loggedIn: false,
    userToken: null,
    user: null,
    oneUser: null
    
  },
  getters: {
    loggedIn: state => state.loggedIn,
    user: state => state.user,
    oneUser: state => state.oneUser
  },
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        const user = jwt_decode(token)
        console.log(user)
        state.userToken = token
        state.loggedIn = true
      } else {
        state.userToken = null
        state.loggedIn = false
      }

    },
    CHECK_USER: state => {
      try {
        let token = localStorage.getItem('token')
        let jwtDecode = jwt_decode(token)
        let user = jwtDecode.user
        console.log(state)
        console.log(user)
        if(token) {
          state.user = user
          state.userToken = token
          state.loggedIn = true
        } else {
          state.user = null
          state.userToken = null
          state.loggedIn = false
        }
      }
      catch(err) {
        console.log(err)
      }
    },
    GET_ONE_USER: (state, user) => {
      state.oneUser = user
    }

  },
  actions: {
    register: async ({dispatch}, _user) => {
      const user = {
        email: _user.email,
        password: _user.password
      }
      await axios.post('/users/register', _user)
      dispatch('login', {user})
    },
    login: ({commit}, payload) => {

      console.log(payload)
      // console.log(commit)
      axios.post('/users/login', payload)
        .then(res => {
          if(res.status === 200) {
            
            localStorage.setItem('token', res.data.token)
            commit('SET_USER', res.data.token)
          }
        })
    },
    getOneUser: async ({commit}, id) => {
      const res = await axios.get('http://localhost:9999/api/users/' + id)
      commit('GET_ONE_USER', res.data)
    },
    checkUser: ({commit}) => {
      commit('CHECK_USER')
    },
    logout: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        localStorage.removeItem('token')
        commit('SET_USER', null)
      }
    }

  }

}