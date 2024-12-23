<template>
  <div class="min-h-screen bg-[#1a1a1a] text-white">
    <nav class="bg-[#1a1a1a] fixed w-full top-0 z-50 border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center">
              <span class="text-2xl font-bold text-white">Broom</span>
              <button class="ml-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                <span class="mr-1">📍</span>
                Location
              </button>
            </router-link>
          </div>

          <div class="hidden md:block">
            <div class="flex items-center space-x-8">
              <router-link v-for="item in navigation" 
                :key="item.name" 
                :to="item.href"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <button class="relative">
              <span class="text-2xl">🛒</span>
              <span class="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </button>
            <div v-if="isLoggedIn" class="flex items-center space-x-2">
              <div class="h-8 w-8 bg-green-600 rounded-full"></div>
              <div class="hidden md:block">
                <div class="text-sm">Hi, {{ user.name }}</div>
                <button @click="logout" class="text-xs text-gray-400 hover:text-white">Logout</button>
              </div>
            </div>
            <div v-else class="space-x-2">
              <router-link to="/login" class="text-gray-300 hover:text-white transition-colors">Login</router-link>
              <router-link to="/register" class="text-gray-300 hover:text-white transition-colors">Register</router-link>
            </div>
          </div>

          <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-300">
              {{ mobileMenuOpen ? '✕' : '☰' }}
            </button>
          </div>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="block px-3 py-2 text-gray-300 hover:text-white"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div v-if="isLoggedIn">
          <div class="px-3 py-2 text-gray-300">Hi, {{ user.name }}</div>
          <button @click="logout" class="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">Logout</button>
        </div>
        <div v-else>
          <router-link to="/login" class="block px-3 py-2 text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Login</router-link>
          <router-link to="/register" class="block px-3 py-2 text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Register</router-link>
        </div>
      </div>
    </nav>

    <router-view class="pt-16"></router-view>
    <ChatSupport />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ChatSupport from './components/ChatSupport.vue'

export default {
  name: 'App',
  components: {
    ChatSupport
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const mobileMenuOpen = ref(false)

    const navigation = [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'Transaction History', href: '/transaction-history' },
      { name: 'Help', href: '/help' }
    ]

    const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
    const user = computed(() => store.state.auth.user)

    const logout = () => {
      store.dispatch('auth/logout')
      router.push('/')
    }

    return {
      mobileMenuOpen,
      navigation,
      isLoggedIn,
      user,
      logout
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>

