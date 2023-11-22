import { useProductStore } from '~/store/product'
import { useCartStore } from '~/store/cart'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      productStore: useProductStore(),
      cartStore: useCartStore()
    }
  }
})