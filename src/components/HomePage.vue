<template>
    <div class="pt-16">
      <!-- Hero Section -->
      <div class="relative overflow-hidden bg-[#1a1a1a] py-24 sm:py-32">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-4xl sm:text-6xl font-bold mb-4">
                <span class="text-green-500">Broom</span>
                <span class="text-yellow-500">Express</span>
              </h1>
              <p class="text-xl text-gray-300 mb-8">
                Discover restaurants and Essential Goods that deliver near you
              </p>
              
              <div class="relative mb-8">
                <input
                  type="text"
                  placeholder="Search for Restaurant"
                  class="w-full px-6 py-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button class="absolute right-2 top-2 bottom-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Search
                </button>
              </div>
  
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
                  <span class="text-2xl">📚</span>
                  <span>Wide Map</span>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
                  <span class="text-2xl">📦</span>
                  <span>Easiest Order</span>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
                  <span class="text-2xl">🚚</span>
                  <span>Most Delivery</span>
                </div>
              </div>
            </div>
            
            <div class="hidden lg:block">
              <img src="/placeholder.svg?height=400&width=400" alt="Delivery Illustration" class="w-full" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Categories Section -->
      <div class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Categories</h2>
            <p class="text-gray-600">
              Browse our top categories here to discover different food and essential goods.
            </p>
          </div>
  
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="category in categories" :key="category.name" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div class="w-20 h-20 mx-auto mb-4 text-4xl">
                {{ category.icon }}
              </div>
              <h3 class="text-xl font-semibold text-gray-900">{{ category.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        categories: [
          { name: 'Foods', icon: '🍽️' },
          { name: 'Groceries', icon: '🛒' },
          { name: 'Pharmacy', icon: '💊' }
        ]
      }
    }
  }
  </script>