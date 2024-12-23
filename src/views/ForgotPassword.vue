<template>
    <div class="min-h-screen flex items-center justify-center bg-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
            Reset your password
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required v-model="email"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address">
            </div>
          </div>
  
          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Reset Password
            </button>
          </div>
        </form>
        <div class="text-center">
          <router-link to="/login" class="font-medium text-green-600 hover:text-green-500">
            Remember your password? Log in
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'ForgotPassword',
    setup() {
      const store = useStore()
      const router = useRouter()
  
      const email = ref('')
  
      const handleSubmit = async () => {
        try {
          await store.dispatch('auth/forgotPassword', email.value)
          alert('Password reset instructions have been sent to your email.')
          router.push('/login')
        } catch (error) {
          console.error('Password reset request failed', error)
        }
      }
  
      return {
        email,
        handleSubmit
      }
    }
  }
  </script>
  
  