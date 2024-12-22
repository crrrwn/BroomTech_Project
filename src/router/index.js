import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductCatalog from '@/components/ProductCatalog.vue'
import OrderManagement from '@/components/OrderManagement.vue'
import DeliveryTracking from '@/components/DeliveryTracking.vue'
import CustomerSupport from '@/components/CustomerSupport.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'
import UserRegistration from '@/components/UserRegistration.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductCatalog
  },
  {
    path: '/orders',
    name: 'Orders',
    component: OrderManagement
  },
  {
    path: '/delivery-tracking',
    name: 'DeliveryTracking',
    component: DeliveryTracking
  },
  {
    path: '/support',
    name: 'CustomerSupport',
    component: CustomerSupport
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/register',
    name: 'Register',
    component: UserRegistration
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

