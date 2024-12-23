<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-white">Shopping Cart</h1>
      
      <div v-if="cart.length === 0" class="text-center text-white">
        <p>Your cart is empty.</p>
        <router-link to="/products" class="text-green-500 hover:text-green-400">Continue Shopping</router-link>
      </div>
      
      <div v-else>
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-700 text-white">
                <th class="py-2 px-4 text-left">Product</th>
                <th class="py-2 px-4 text-left">Price</th>
                <th class="py-2 px-4 text-left">Quantity</th>
                <th class="py-2 px-4 text-left">Total</th>
                <th class="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id" class="border-b border-gray-700 text-white">
                <td class="py-4 px-4">
                  <div class="flex items-center">
                    <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded mr-4">
                    <span>{{ item.name }}</span>
                  </div>
                </td>
                <td class="py-4 px-4">${{ item.price.toFixed(2) }}</td>
                <td class="py-4 px-4">
                  <input 
                    type="number" 
                    v-model.number="item.quantity" 
                    @input="updateQuantity(item.id, $event.target.value)"
                    min="1" 
                    class="w-16 bg-gray-700 text-white rounded px-2 py-1"
                  >
                </td>
                <td class="py-4 px-4">${{ (item.price * item.quantity).toFixed(2) }}</td>
                <td class="py-4 px-4">
                  <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-400">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="flex justify-between items-center mb-8">
          <router-link to="/products" class="text-green-500 hover:text-green-400">Continue Shopping</router-link>
          <div class="text-white">
            <span class="text-xl font-bold">Total: ${{ cartTotal.toFixed(2) }}</span>
          </div>
        </div>
        
        <div class="text-right">
          <router-link to="/checkout" class="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors">
            Proceed to Checkout
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'ShoppingCart',
    setup() {
      const store = useStore()
  
      const cart = computed(() => store.state.products.cart)
      const cartTotal = computed(() => store.getters['products/cartTotal'])
  
      const updateQuantity = (productId, quantity) => {
        store.dispatch('products/updateCartItemQuantity', { productId, quantity: parseInt(quantity) })
      }
  
      const removeFromCart = (productId) => {
        store.dispatch('products/removeFromCart', productId)
      }
  
      return {
        cart,
        cartTotal,
        updateQuantity,
        removeFromCart
      }
    }
  }
  </script>
  
  