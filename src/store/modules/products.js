const state = {
    products: [],
    categories: ['Groceries', 'Pharmacy', 'Home Essentials', 'Electronics', 'Personal Care'],
    loading: false,
    error: null,
    cart: []
  }
  
  const mutations = {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    UPDATE_CART_ITEM_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  }
  
  const actions = {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      try {
        // In a real application, you would make an API call here
        // For now, we'll use dummy data
        const dummyProducts = [
          { id: 1, name: 'Milk', category: 'Groceries', price: 2.99, rating: 4.5, image: '/placeholder.svg?height=200&width=200' },
          { id: 2, name: 'Bread', category: 'Groceries', price: 1.99, rating: 4.2, image: '/placeholder.svg?height=200&width=200' },
          { id: 3, name: 'Aspirin', category: 'Pharmacy', price: 5.99, rating: 4.8, image: '/placeholder.svg?height=200&width=200' },
          { id: 4, name: 'Toothpaste', category: 'Personal Care', price: 3.49, rating: 4.0, image: '/placeholder.svg?height=200&width=200' },
          { id: 5, name: 'Light Bulb', category: 'Home Essentials', price: 1.49, rating: 4.3, image: '/placeholder.svg?height=200&width=200' },
          { id: 6, name: 'USB Cable', category: 'Electronics', price: 7.99, rating: 4.1, image: '/placeholder.svg?height=200&width=200' },
        ]
        commit('SET_PRODUCTS', dummyProducts)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateCartItemQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_CART_ITEM_QUANTITY', { productId, quantity })
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    }
  }
  
  const getters = {
    filteredProducts: (state) => (search, category, minPrice, maxPrice, minRating) => {
      return state.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === '' || product.category === category
        const matchesPrice = (minPrice === '' || product.price >= minPrice) && (maxPrice === '' || product.price <= maxPrice)
        const matchesRating = product.rating >= minRating
        return matchesSearch && matchesCategory && matchesPrice && matchesRating
      })
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
  
  