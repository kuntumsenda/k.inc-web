import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
  state: () => ({
    productsInCart: []
  }),
  getters:{
    totalItem(){
      if(!this.productsInCart.length) return 0
      let qty = 0
      this.productsInCart.forEach((item, index) => {
        qty += item.qty
      })
      return qty
    }
  },
  actions: {
    addCart(payload) {
      const isAnyProductInCart = this.productsInCart.find(item => item.id === payload.id)
      if(!isAnyProductInCart){
        this.addNewList(payload)
      }else{ 
        this.increment(payload)
      }
    },
    addNewList(payload){
      let item = payload
      item['totalPrice'] = item.price*payload.qty
      this.productsInCart.push(item)
    },
    increment(payload){
      const item = this.productsInCart.find(item => item.id === payload.id)
      item.qty++
      item.totalPrice = item.price*item.qty
      console.log(item.qty)
    },
    decrement(payload){
      const item = this.productsInCart.find(item => item.id === payload.id)
      item.qty--
      item.totalPrice = item.price*item.qty
    },
    removeCart(id){
      const index = this.productsInCart.findIndex(item => item.id === id)
      this.productsInCart.splice(index, 1)
    }
  },
})