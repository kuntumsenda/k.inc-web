import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  getters:{
  },
  actions: {
    setProducts(payload) {
      this.products = payload.map(item => ({
        ...item,
        stockAfterCart: item.stock
      }))
    }
  },
})