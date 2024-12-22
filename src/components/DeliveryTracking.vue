<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Delivery Tracking</h1>
      <div v-if="currentOrder" class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Order #{{ currentOrder.id }}
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Estimated delivery time: {{ currentOrder.estimatedDeliveryTime }}
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Status
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ currentOrder.status }}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Current Location
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ currentOrder.currentLocation }}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Delivery Person
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ currentOrder.deliveryPerson.name }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div v-else class="text-center text-gray-500">
        No active deliveries found.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { doc, onSnapshot } from 'firebase/firestore'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { db } from '@/config/firebase'
  
  const currentOrder = ref(null)
  
  onMounted(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
          const userData = doc.data()
          if (userData && userData.currentOrderId) {
            onSnapshot(doc(db, 'orders', userData.currentOrderId), (orderDoc) => {
              currentOrder.value = { id: orderDoc.id, ...orderDoc.data() }
            })
          } else {
            currentOrder.value = null
          }
        })
  
        return () => unsubscribe()
      }
    })
  })
  </script>
  
  