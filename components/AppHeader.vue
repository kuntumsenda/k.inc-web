
<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()
const route = useRoute()
const menuWeb = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Product', href: '/products' },
  { text: 'Contact', href: '/contact' }
]
function handleScroll(){
  if(window.scrollY > 40) {
    document.getElementById('header').classList.add('bg-white')
  }else{
    document.getElementById('header').classList.remove('bg-white')
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
   
onUnmounted(() => {
  window.removeEventListener(handleScroll)
}) 
</script>

<template>
  <header id="header">
    <div class="container header__wrapper">
      <div class="logo__wrapper">
        <img src="@/assets/images/logo/logo.png" alt="k .inC">
      </div>
      <nav class="nav">
        <ul class="list_nav__wrapper">
          <li v-for="(menu, index) in menuWeb" :key="index"><NuxtLink :to="menu.href">{{ menu.text }}</NuxtLink></li>
        </ul>
      </nav>
      <div class="right__side">
        <NuxtLink to="/cart" class="icon__wrapper">
          <img src="@/assets/images/icon/cart.svg" alt="cart">
          <span v-if="cartStore.totalItem" class="badge bg-primary text-white font-bold">{{ cartStore.totalItem }}</span>
        </NuxtLink>
        <Button v-if="!$route.path.includes('login')" @click="$router.push('/login')">Login</Button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-transition: background-color .3s ease-out;
  -moz-transition: background-color .3s ease-out;
  -o-transition: background-color .3s ease-out;
  transition: background-color .3s ease-out;
}
.header__wrapper{
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid map-get($map: $colors, $key: grey-1);
}
.logo__wrapper{
  width: 140px;
  img{
    width: 80px;
  }
}
.list_nav__wrapper{
  display: flex;
  align-items: center;
  gap: 32px;
}
li{
  list-style: none;
}
.right__side{
  width: 140px;
  display: flex;
  justify-content: space-between;
}
.icon__wrapper{
  align-self: center;
  position: relative;
}
.badge{
  font-size: 11px;
  border-radius: 50%;
  padding: 2px 6px;
  position: absolute;
  left: 20px;
  top: -8px;
  z-index: 10;
}
</style>