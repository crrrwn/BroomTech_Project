import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import LoginPage from '../views/Login.vue'
import RegisterPage from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ProductCatalog from '../views/ProductCatalog.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import CheckoutPage from '../views/Checkout.vue'
import OrderConfirmation from '../views/OrderConfirmation.vue'
import TransactionHistoryPage from '../views/TransactionHistory.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/products',
    name: 'ProductCatalog',
    component: ProductCatalog
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage
  },
  {
    path: '/order-confirmation',
    name: 'OrderConfirmation',
    component: OrderConfirmation
  },
  {
    path: '/transaction-history',
    name: 'TransactionHistory',
    component: TransactionHistoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

