<template>
    <div class="container mx-auto px-4 py-8">
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-8 text-center">
        <h1 class="text-3xl font-bold mb-4 text-white">Order Confirmation</h1>
        <p class="text-green-500 text-xl mb-4">Thank you for your order!</p>
        <p class="text-white mb-8">Your order has been received and is being processed.</p>
        <router-link to="/" class="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors">
          Return to Home
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderConfirmation'
  }
  </script>
  
  