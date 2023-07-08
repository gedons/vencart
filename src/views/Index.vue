<template>

      <!-- Features -->
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 mt-[-70px]">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">VenCart</h2>
        <p class="mt-4 text-gray-500">Vercart Commerce is a simple e-commerce platform that provides a provides a range of functionalities. It combines the power of Rest API, Tailwind CSS, and Vue.js to offer a seamless development experience.</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
        <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
      </div>
      </div>
  
      <!-- Products -->
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-[-100px]">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
  
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="(product, index) in products.slice(0, 8)" :key="product.id" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
              <img :src="product.thumbnail" :alt="product.thumbnail" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700 font-semibold hover:text-yellow-800">
                  <router-link :to="{name: 'ProductView', params:{id: product.id} }">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                  </router-link>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>

</template>
  
  <script setup>
  import { ref } from 'vue'
  import moment from 'moment'
  import store from "../store"
  import { computed } from "vue"
  import { useRoute, useRouter } from "vue-router"
 

  const currentYear = ref('');
  currentYear.value = moment().format('YYYY');

  //product variable to get all products from the store
  const products = computed(() => store.state.frontproducts.products);

  //Get Products
  store.dispatch("getProducts");
  
  const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

  </script>