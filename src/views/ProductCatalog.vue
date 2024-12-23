<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-white">Product Catalog</h1>
      
      <!-- Search and Filter Section -->
      <div class="mb-8 bg-gray-800 p-4 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <input v-model="search" type="text" placeholder="Search products" class="bg-gray-700 text-white rounded-md px-4 py-2 w-full">
          <select v-model="selectedCategory" class="bg-gray-700 text-white rounded-md px-4 py-2 w-full">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <input v-model.number="minPrice" type="number" placeholder="Min Price" class="bg-gray-700 text-white rounded-md px-4 py-2 w-full">
          <input v-model.number="maxPrice" type="number" placeholder="Max Price" class="bg-gray-700 text-white rounded-md px-4 py-2 w-full">
          <select v-model.number="minRating" class="bg-gray-700 text-white rounded-md px-4 py-2 w-full">
            <option value="0">All Ratings</option>
            <option value="3">3+ Stars</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>
        </div>
      </div>
  
      <!-- Product Grid -->
      <div v-if="loading" class="text-center text-white">Loading products...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="product in filteredProducts" :key="product.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-white mb-2">{{ product.name }}</h3>
            <p class="text-gray-400 mb-2">{{ product.category }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-green-500 font-bold">${{ product.price.toFixed(2) }}</span>
              <span class="text-yellow-500">★ {{ product.rating.toFixed(1) }}</span>
            </div>
            <button @click="addToCart(product)" class="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'ProductCatalog',
    setup() {
      const store = useStore()
      const router = useRouter()
  
      const search = ref('')
      const selectedCategory = ref('')
      const minPrice = ref('')
      const maxPrice = ref('')
      const minRating = ref(0)
  
      const loading = computed(() => store.state.products.loading)
      const error = computed(() => store.state.products.error)
      const categories = computed(() => store.state.products.categories)
  
      const filteredProducts = computed(() => 
        store.getters['products/filteredProducts'](
          search.value,
          selectedCategory.value,
          minPrice.value,
          maxPrice.value,
          minRating.value
        )
      )
  
      onMounted(() => {
        store.dispatch('products/fetchProducts')
      })
  
      const addToCart = (product) => {
        store.dispatch('products/addToCart', product)
        router.push('/cart')
      }
  
      return {
        search,
        selectedCategory,
        minPrice,
        maxPrice,
        minRating,
        loading,
        error,
        categories,
        filteredProducts,
        addToCart
      }
    }
  }
  </script>
  
  