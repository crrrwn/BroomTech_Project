<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Welcome to BROOM</h1>
      <p class="text-xl text-gray-700">Your one-stop shop for essential products and quick deliveries.</p>
      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <router-link to="/products" class="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Browse Products</h2>
          <p class="text-gray-600">Explore our wide range of essential products from local stores.</p>
        </router-link>
        <router-link to="/orders" class="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Manage Orders</h2>
          <p class="text-gray-600">View and track your current and past orders.</p>
        </router-link>
        <router-link to="/delivery-tracking" class="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Track Deliveries</h2>
          <p class="text-gray-600">Real-time tracking of your deliveries.</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional logic needed for this component
  </script>
  
  