<template>
    <div class="fixed bottom-4 right-4 z-50">
      <button @click="toggleChat" class="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors">
        <span v-if="!isChatOpen">🗨️ Chat Support</span>
        <span v-else>✕ Close Chat</span>
      </button>
  
      <div v-if="isChatOpen" class="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="bg-green-600 text-white p-4">
          <h3 class="text-lg font-semibold">Broom Express Support</h3>
        </div>
        <div class="h-96 overflow-y-auto p-4 bg-gray-100">
          <div v-for="(message, index) in chatHistory" :key="index" class="mb-4">
            <div v-if="message.role === 'user'" class="flex justify-end">
              <div class="bg-green-500 text-white p-2 rounded-lg max-w-[70%]">
                {{ message.content }}
              </div>
            </div>
            <div v-else class="flex justify-start">
              <div class="bg-white text-gray-800 p-2 rounded-lg max-w-[70%] shadow">
                {{ message.content }}
              </div>
            </div>
          </div>
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-white text-gray-800 p-2 rounded-lg max-w-[70%] shadow">
              Typing...
            </div>
          </div>
        </div>
        <div class="p-4 bg-white">
          <form @submit.prevent="sendMessage">
            <div class="flex items-center">
              <input
                v-model="userInput"
                type="text"
                placeholder="Type your message..."
                class="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              >
              <button
                type="submit"
                class="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'ChatSupport',
    setup() {
      const store = useStore()
      const isChatOpen = ref(false)
      const userInput = ref('')
  
      const chatHistory = computed(() => store.getters['support/getChatHistory'])
      const isLoading = computed(() => store.getters['support/isLoading'])
  
      const toggleChat = () => {
        isChatOpen.value = !isChatOpen.value
        if (!isChatOpen.value) {
          store.dispatch('support/clearChat')
        }
      }
  
      const sendMessage = () => {
        if (userInput.value.trim()) {
          store.dispatch('support/sendMessage', userInput.value)
          userInput.value = ''
        }
      }
  
      return {
        isChatOpen,
        userInput,
        chatHistory,
        isLoading,
        toggleChat,
        sendMessage
      }
    }
  }
  </script>
  
  