<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Order Management</h1>
      <div v-if="orders.length === 0" class="text-center text-gray-500">
        No orders found.
      </div>
      <div v-else class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li v-for="order in orders" :key="order.id">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-indigo-600 truncate">
                  Order #{{ order.id }}
                </p>
                <div class="ml-2 flex-shrink-0 flex">
                  <p :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  ]">
                    {{ order.status }}
                  </p>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center text-sm text-gray-500">
                    {{ order.items.length }} items
                  </p>
                  <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    Total: ${{ order.total.toFixed(2) }}
                  </p>
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <p>
                    Ordered on {{ new Date(order.createdAt).toLocaleDateString() }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { collection, query, where, getDocs } from 'firebase/firestore'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { db } from '@/config/firebase'
  
  const orders = ref([])
  
  onMounted(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, 'orders'), where('userId', '==', user.uid))
        const querySnapshot = await getDocs(q)
        orders.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      }
    })
  })
  </script>
  
  