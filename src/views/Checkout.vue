<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-white">Checkout</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Order Summary</h2>
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-700 text-white">
                  <th class="py-2 px-4 text-left">Product</th>
                  <th class="py-2 px-4 text-left">Quantity</th>
                  <th class="py-2 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id" class="border-b border-gray-700 text-white">
                  <td class="py-4 px-4">{{ item.name }}</td>
                  <td class="py-4 px-4">{{ item.quantity }}</td>
                  <td class="py-4 px-4">${{ (item.price * item.quantity).toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-white text-xl font-bold mb-4">
            Total: ${{ cartTotal.toFixed(2) }}
          </div>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Shipping Information</h2>
          <form @submit.prevent="placeOrder" class="space-y-4">
            <div>
              <label for="name" class="block text-white mb-2">Full Name</label>
              <input type="text" id="name" v-model="shippingInfo.name" required class="w-full bg-gray-700 text-white rounded px-3 py-2">
            </div>
            <div>
              <label for="address" class="block text-white mb-2">Address</label>
              <input type="text" id="address" v-model="shippingInfo.address" required class="w-full bg-gray-700 text-white rounded px-3 py-2">
            </div>
            <div>
              <label for="city" class="block text-white mb-2">City</label>
              <input type="text" id="city" v-model="shippingInfo.city" required class="w-full bg-gray-700 text-white rounded px-3 py-2">
            </div>
            <div>
              <label for="zipCode" class="block text-white mb-2">ZIP Code</label>
              <input type="text" id="zipCode" v-model="shippingInfo.zipCode" required class="w-full bg-gray-700 text-white rounded px-3 py-2">
            </div>
            <div>
              <label for="phone" class="block text-white mb-2">Phone Number</label>
              <input type="tel" id="phone" v-model="shippingInfo.phone" required class="w-full bg-gray-700 text-white rounded px-3 py-2">
            </div>
            
            <div>
              <label for="paymentMethod" class="block text-white mb-2">Payment Method</label>
              <select id="paymentMethod" v-model="selectedPaymentMethod" required class="w-full bg-gray-700 text-white rounded px-3 py-2">
                <option value="">Select a payment method</option>
                <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
                  {{ method.name }}
                </option>
              </select>
            </div>
            
            <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'CheckoutPage',
    setup() {
      const store = useStore()
      const router = useRouter()
  
      const cart = computed(() => store.state.products.cart)
      const cartTotal = computed(() => store.getters['products/cartTotal'])
      const paymentMethods = computed(() => store.getters['payments/getPaymentMethods'])
  
      const shippingInfo = ref({
        name: '',
        address: '',
        city: '',
        zipCode: '',
        phone: ''
      })
  
      const selectedPaymentMethod = ref('')
  
      const placeOrder = async () => {
        try {
          const transaction = await store.dispatch('payments/processPayment', {
            paymentMethod: selectedPaymentMethod.value,
            amount: cartTotal.value
          })
          
          console.log('Order placed:', { 
            cart: cart.value, 
            shippingInfo: shippingInfo.value, 
            total: cartTotal.value,
            paymentMethod: selectedPaymentMethod.value,
            transaction
          })
          
          router.push('/order-confirmation')
        } catch (error) {
          console.error('Error processing payment:', error)
          // Handle error (e.g., show error message to user)
        }
      }
  
      return {
        cart,
        cartTotal,
        shippingInfo,
        paymentMethods,
        selectedPaymentMethod,
        placeOrder
      }
    }
  }
  </script>
  
  