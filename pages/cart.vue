<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()

</script>
<template>
  <div class="container section__top_page">
    <section v-if="!cartStore.totalItem" class="cart-empty--wrapper">
      <div class="empty-cart--illust">
        <img src="@/assets/images/illustration/empty-cart.png" alt="">
      </div>
      <h3 class="font-bolder font-family-1">Keranjang Belanja Kosong</h3>
      <p class="text-secondary">Yuk, isi dengan barang - barang kebutuhanmu</p>
      <Button class="bg-primary" @click="$router.push('/products')">Mulai Belanja</Button>
    </section>
    <div v-else class="cart--wrapper flex nowrap justify-between">
      <section class="section--lis-cart">
        <h3>Keranjang</h3>
        <div v-for="(item, index) in cartStore.productsInCart" :key="item.id">
          <hr v-if="index == 0" class="line--space-product">
          <CartCard :cartItem="item" />
          <hr class="line--space-product">
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  position: relative;
}
.cart-empty--wrapper{
  padding: 30px 0;
  text-align: center;
  p{
    margin: 10px 0 20px;
  }
}
.empty-cart--illust{
  max-width: 300px;
  margin: 0 auto;
}
.cart--wrapper{
  max-width: 1000px;
  min-height: calc(100vh - 120px);
  margin: 0 auto;
  h3{
    margin-bottom: 16px;
  }
}
.line--space-product{
  margin-top: 16px;
  border-width: 3px;
  border-color: #364a5161
}
.summary-cart--container{
  max-width: 350px;
  width: 100%;
  padding-top: 45px;
  h4{ margin-bottom: 20px; }
}
.section--lis-cart{
  max-height: calc(100vh - 160px);
  min-height: 57vh;
  overflow-y: auto;
  padding-right: 20px;
  &::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
  }
  &::-webkit-scrollbar{
    width: 10px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #5253583c;
    border-radius: 10px;
    background-image: -webkit-linear-gradient(0deg, gba(255, 255, 255, 0.5) 25%, transparent 25%, transparent 50%,rgba(255, 255, 255, 0.5) 50%,
  rgba(255, 255, 255, 0.5) 75%, transparent 75%, transparent)
  }
}
.section--summary-cart{
  padding: 16px;
  border-radius: 8px;
}
.total-discount--wrapper{
  padding: 10px 0 20px;
}
.price-checkout--wrapper{
  padding: 20px 0 30px;
}
.btn--checkout{
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>