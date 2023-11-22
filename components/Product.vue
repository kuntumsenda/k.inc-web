
<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()
defineProps(['product'])
function addToCart(item) {
  if(!item.stock || !item.stockAfterCart){
    return false
  }
  let payload = item
  payload['qty'] = payload.qty?payload.qty:1
  cartStore.addCart(payload)
}
const currencyUSD = (value) => {
  return 'USD ' + parseInt(value).toLocaleString('en-US')
}

</script>
<template>
  <div class="product--wrapper">
    <div class="product-img--wrapper">
      <img v-if="product.thumbnail" :src="product.thumbnail" :alt="product.title">
      <img v-else src="@/assets/images/illustration/no-img.jpg">
    </div>
    <div class="product-content--wrapper">
      <div class="text-capitalize text-secondary text-subtitle-2 text-ellipsis-2 category-product">
        <span>{{ product.category }}</span>
      </div>
      <p :class="`text--stock text-subtitle-2 font-medium ${product.stockAfterCart?'text-positive':'text-grey-1'}`">{{ product.stockAfterCart?'In Stock':'Out of Stock' }}</p>
      <div class="title--product"><p class="text-ellipsis-2 text-black font-bold text-capitalize">{{ product.title }}</p></div>
      <div class="price--product font-bold flex nowrap items-end"><span>{{ currencyUSD(product.price) }}</span></div>
      <div :class="`price-regular--product flex nowrap items-center text-subtitle-2 ${!product.discountPercentage?'no-discount':''}`">
        <div v-if="product.discountPercentage" class="discount--badge bg-secondary text-primary">{{ product.discountPercentage }}%</div>
      </div>
      <div>
        <Button :class="`${!product.stockAfterCart?'btn--disable':''} full-width`" @click="addToCart(product)">
          <span>{{product.stockAfterCart ? 'Add To Cart' : 'Sold Out'}}</span>
        </Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product--wrapper{
  border: 1px solid var(--NN300,#BFC9D9);
  border-radius: 12px;
  &:hover{
    box-shadow: 0 1px 4px rgba(141,150,170,0.4);
  }
}
.product-img--wrapper{
  height: 200px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid var(--NN300,#BFC9D9);
  position: relative;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 200px;
    border-radius: 12px 12px 0 0;
    padding: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.product-content--wrapper{
  padding: 0 24px 24px;
}
.text--stock{
  margin: 4px 0;
}
.title--product{
  margin-bottom: 4px;
  min-height: 50.67px;
}
.price--product{
  margin-top: 12px;
  margin-bottom: 8px;
  gap: 8px;
}
.price-regular--product{
  margin-bottom: 20px;
}
.btn--add-cart{ gap: 8px }
.no-discount{ height: 24.67px;}
</style>