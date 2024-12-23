const state = {
  transactions: [],
  paymentMethods: [
    { id: 'credit', name: 'Credit Card' },
    { id: 'debit', name: 'Debit Card' },
    { id: 'mobile', name: 'Mobile Wallet' },
    { id: 'cod', name: 'Cash on Delivery' }
  ]
}

const mutations = {
  ADD_TRANSACTION(state, transaction) {
    state.transactions.unshift(transaction)
  }
}

const actions = {
  async processPayment({ commit }, { paymentMethod, amount }) {
    // In a real application, you would integrate with a payment gateway here
    const transaction = {
      id: Date.now(),
      date: new Date().toISOString(),
      amount,
      paymentMethod,
      status: 'completed'
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    commit('ADD_TRANSACTION', transaction)
    commit('products/CLEAR_CART', null, { root: true })

    return transaction
  }
}

const getters = {
  getTransactions: (state) => state.transactions,
  getPaymentMethods: (state) => state.paymentMethods
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

