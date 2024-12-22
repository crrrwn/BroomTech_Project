<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Product Catalog</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" class="bg-white overflow-hidden shadow rounded-lg">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-medium text-gray-900">{{ product.name }}</h3>
            <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
            <p class="mt-2 text-lg font-semibold text-gray-900">${{ product.price.toFixed(2) }}</p>
            <button @click="addToCart(product)" class="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { collection, getDocs } from 'firebase/firestore'
  import { db } from '@/config/firebase'
  
  const products = ref([])
  
  onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'products'))
    products.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
  
  const addToCart = (product) => {
    // Implement add to cart functionality
    console.log('Added to cart:', product)
  }
  </script>
  
  