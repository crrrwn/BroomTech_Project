const state = {
    chatHistory: [],
    isLoading: false,
  }
  
  const mutations = {
    ADD_MESSAGE(state, message) {
      state.chatHistory.push(message)
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading
    },
    CLEAR_CHAT(state) {
      state.chatHistory = []
    },
  }
  
  const actions = {
    async sendMessage({ commit }, userMessage) {
      commit('ADD_MESSAGE', { role: 'user', content: userMessage })
      commit('SET_LOADING', true)
  
      try {
        // Simulate AI response
        const aiResponse = `Thank you for your message: "${userMessage}". How can I assist you further?`
        commit('ADD_MESSAGE', { role: 'assistant', content: aiResponse })
      } catch (error) {
        console.error('Error generating AI response:', error)
        commit('ADD_MESSAGE', { role: 'assistant', content: "I'm sorry, I'm having trouble responding right now. Please try again later." })
      } finally {
        commit('SET_LOADING', false)
      }
    },
    clearChat({ commit }) {
      commit('CLEAR_CHAT')
    },
  }
  
  const getters = {
    getChatHistory: (state) => state.chatHistory,
    isLoading: (state) => state.isLoading,
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  }
  
  