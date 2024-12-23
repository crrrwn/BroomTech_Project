<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-white">Help Center</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-800 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-white mb-2">{{ faq.question }}</h3>
              <p class="text-gray-300">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Resources</h2>
          <ul class="space-y-2">
            <li v-for="(resource, index) in resources" :key="index">
              <a :href="resource.link" class="text-green-500 hover:text-green-400 transition-colors">
                {{ resource.title }}
              </a>
            </li>
          </ul>
          
          <h2 class="text-2xl font-bold my-4 text-white">Contact Us</h2>
          <p class="text-gray-300 mb-2">If you need further assistance, please don't hesitate to contact us:</p>
          <ul class="text-gray-300">
            <li>Email: support@broomexpress.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Hours: Monday - Friday, 9am - 5pm EST</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelpPage',
    setup() {
      const faqs = [
        {
          question: "How do I place an order?",
          answer: "To place an order, simply browse our product catalog, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, mobile wallets, and cash on delivery for your convenience."
        },
        {
          question: "How long does delivery take?",
          answer: "Delivery times vary depending on your location and the items ordered. Typically, orders are delivered within 1-3 business days."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, once your order is shipped, you'll receive a tracking number via email. You can use this to track your package on our website."
        },
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Please refer to our Returns & Refunds page for more details."
        }
      ]
  
      const resources = [
        { title: "User Guide", link: "/user-guide" },
        { title: "Returns & Refunds", link: "/returns" },
        { title: "Privacy Policy", link: "/privacy" },
        { title: "Terms of Service", link: "/terms" }
      ]
  
      return {
        faqs,
        resources
      }
    }
  }
  </script>
  
  