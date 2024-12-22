<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Customer Support</h1>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            How can we help you?
          </h3>
          <div class="mt-2 max-w-xl text-sm text-gray-500">
            <p>Choose a topic or start a chat with our AI assistant.</p>
          </div>
          <div class="mt-5">
            <div class="space-y-4">
              <button
                v-for="topic in supportTopics"
                :key="topic"
                @click="selectTopic(topic)"
                class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {{ topic }}
              </button>
            </div>
          </div>
          <div class="mt-6">
            <button
              @click="startChat"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Chat with AI Assistant
            </button>
          </div>
        </div>
      </div>
      <div v-if="showChat" class="mt-6 bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Chat with AI Assistant
          </h3>
          <div class="mt-2 max-w-xl text-sm text-gray-500">
            <p>Type your message below to start chatting.</p>
          </div>
          <div class="mt-5">
            <div class="flex flex-col space-y-4">
              <div v-for="(message, index) in chatMessages" :key="index" :class="[
                'p-2 rounded-lg',
                message.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
              ]">
                {{ message.text }}
              </div>
            </div>
            <div class="mt-4">
              <form @submit.prevent="sendMessage" class="flex">
                <input
                  v-model="userMessage"
                  type="text"
                  class="flex-1 rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const supportTopics = ['Order Issues', 'Product Information', 'Delivery Inquiries', 'Account Help']
  const showChat = ref(false)
  const chatMessages = ref([])
  const userMessage = ref('')
  
  const selectTopic = (topic) => {
    console.log('Selected topic:', topic)
    // Implement topic selection logic
  }
  
  const startChat = () => {
    showChat.value = true
    chatMessages.value = [
      { sender: 'ai', text: 'Hello! How can I assist you today?' }
    ]
  }
  
  const sendMessage = () => {
    if (userMessage.value.trim()) {
      chatMessages.value.push({ sender: 'user', text: userMessage.value })
      // Here you would typically send the message to your AI service and get a response
      // For this example, we'll just echo the user's message
      setTimeout(() => {
        chatMessages.value.push({ sender: 'ai', text: `You said: ${userMessage.value}` })
      }, 1000)
      userMessage.value = ''
    }
  }
  </script>
  
  