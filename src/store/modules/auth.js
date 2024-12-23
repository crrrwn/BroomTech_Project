const state = {
    user: null,
    isLoggedIn: false
  }
  
  const mutations = {
    SET_USER(state, user) {
      state.user = user
      state.isLoggedIn = !!user
    }
  }
  
  const actions = {
    async register({ commit }, userData) {
      // In a real application, you would make an API call here
      console.log('Registering user:', userData)
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      commit('SET_USER', { ...userData, id: Date.now() })
    },
  
    async login({ commit }, credentials) {
      // In a real application, you would make an API call here
      console.log('Logging in user:', credentials)
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      commit('SET_USER', { id: Date.now(), name: 'John Doe', email: credentials.email })
    },
  
    async logout({ commit }) {
      // In a real application, you would make an API call here
      console.log('Logging out user')
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      commit('SET_USER', null)
    },
  
    async forgotPassword(_, email) {
      // In a real application, you would make an API call here
      console.log('Requesting password reset for:', email)
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  