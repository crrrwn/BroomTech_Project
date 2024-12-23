import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../components/OrderPage.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../components/BlogPage.vue')
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import('../components/PagesPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router