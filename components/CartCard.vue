<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()
const props = defineProps(['cartItem'])

let quantity = ref(props.cartItem.qty)
let msgInputQty = ref('')

const disablePlusBtn = computed(() => {
  return !props.cartItem.stockAfterCart ? true : false
})
const disableMinusBtn = computed(() => {
  return quantity.value<=1 ? true : false
})
function inputQtyOnChange() {
  if(!quantity.value){
    msgInputQty = 'Jumlah harus diisi'
    return
  }
  msgInputQty = ''
  setTimeout(() => {
    updateCart()
  }, 300);
}
function btnQtyOnClick(type) {
  let payload = props.cartItem
  if(type == 'increment' && !disablePlusBtn.value){
    quantity.value = parseInt(quantity.value)+1
    console.log(payload, 'inc')
    cartStore.increment(payload)
    return
  }
  if(type == 'decrement' && !disableMinusBtn.value){
    quantity.value = parseInt(quantity.value)-1
    cartStore.decrement(payload)
    return
  }
}
function removeCart() {
  cartStore.removeCart(props.cartItem)
}
const currencyUSD = (value) => {
  return 'USD ' + parseInt(value).toLocaleString('en-US')
}

</script>

<template>
  <div class="cart--card">
    <div class="flex justify-end btn--remove-item">
      <Button class="btn btn-flat text-white bg-negative" @click="removeCart">
        Hapus Item
      </Button>
    </div>
    <div class="flex nowrap item--wrapper">
      <div class="img-product--wrapper">
        <img :src="cartItem.thumbnail" :alt="cartItem.title">
      </div>
      <div>
        <div>
          <p class="text-capitalize text-subtitle-2">{{ cartItem.title }}</p>
        </div>
        <div class="text-capitalize text-secondary text-subtitle-2 category--wrapper">
          <span>{{ cartItem.category }}</span>
        </div>
        <div class="flex nowrap items-center text-body-2 price--wrapper">
          <div v-if="cartItem.discountPercent" class="discount--badge bg-primary-light-1 text-primary">{{ cartItem.discountPercent }}%</div>
          <s v-if="cartItem.priceDiscount" class="text-secondary price--discount">{{ currencyUSD(cartItem.price) }} <span class="mark-price"></span></s>
          <span class="text-weight-black text-body-1">{{ currencyUSD(cartItem.priceDiscount?cartItem.priceDiscount:cartItem.price) }}</span>
        </div>
      </div>
    </div>
    <div class="flex nowrap justify-between items-end qty-note--wrapper">
      <div class="sub-total--price text-weight-black">
        <!-- <span>Total: </span><span>{{ currencyUSD(cartItem.totalPriceDiscount?cartItem.totalPriceDiscount:cartItem.totalPrice) }}</span> -->
      </div>
      <div>
        <TextField v-model="quantity" :disabled="true" class="input-center input--qty" type="number" placeholder="0" @blur="updateCart" @input="inputQtyOnChange">
          <template #prepend-outer>
            <a :class="`text-h3 text-black ${disableMinusBtn?'link--disable':''}`" @click="btnQtyOnClick('decrement')">-</a>
          </template>
          <template #append-outer>
            <a :class="`text-h3 text-black ${disablePlusBtn?'link--disable':''}`" @click="btnQtyOnClick('increment')">+</a>
          </template>
        </TextField>
        <div class="text-center"><span class="text-caption text-negative">{{ msgInputQty }}</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart--card{
  max-width: 900px;
  min-width: 550px;
  width: 100%
}
  .item--wrapper{
    gap: 12px;
  }
  .img-product--wrapper{
    align-self: stretch;
    img{
      height: 90px;
      width: unset;
    }
  }
  .price--discount{ margin-right: 12px;}
  .category--wrapper{
    margin-top: 4px;
    margin-bottom: 21px;
  }
  .qty-note--wrapper{
    margin-top: 8px;
  }
  .btn--remove-item{
    margin-bottom: 8px;
    justify-content: flex-end;
  }
  .input--qty{
    max-width: 160px;
  }
  .sub-total--price{
    font-size: 18px;
    margin-right: 8px;
    span{
      margin-right: 8px;
    }
  }
</style>