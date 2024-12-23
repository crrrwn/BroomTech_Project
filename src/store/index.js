import { createStore } from 'vuex'
import auth from './modules/auth'
import products from './modules/products'
import payments from './modules/payments'

export default createStore({
  modules: {
    auth,
    products,
    payments
  }
})

