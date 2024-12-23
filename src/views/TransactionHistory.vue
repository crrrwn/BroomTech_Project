<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-white">Transaction History</h1>
      
      <div v-if="transactions.length === 0" class="text-center text-white">
        <p>No transactions found.</p>
      </div>
      
      <div v-else class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-700 text-white">
              <th class="py-2 px-4 text-left">Date</th>
              <th class="py-2 px-4 text-left">Amount</th>
              <th class="py-2 px-4 text-left">Payment Method</th>
              <th class="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id" class="border-b border-gray-700 text-white">
              <td class="py-4 px-4">{{ formatDate(transaction.date) }}</td>
              <td class="py-4 px-4">${{ transaction.amount.toFixed(2) }}</td>
              <td class="py-4 px-4">{{ getPaymentMethodName(transaction.paymentMethod) }}</td>
              <td class="py-4 px-4">
                <span :class="{'text-green-500': transaction.status === 'completed', 'text-yellow-500': transaction.status === 'pending', 'text-red-500': transaction.status === 'failed'}">
                  {{ transaction.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'TransactionHistoryPage',
    setup() {
      const store = useStore()
  
      const transactions = computed(() => store.getters['payments/getTransactions'])
      const paymentMethods = computed(() => store.getters['payments/getPaymentMethods'])
  
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }
  
      const getPaymentMethodName = (methodId) => {
        const method = paymentMethods.value.find(m => m.id === methodId)
        return method ? method.name : 'Unknown'
      }
  
      return {
        transactions,
        formatDate,
        getPaymentMethodName
      }
    }
  }
  </script>
  
  