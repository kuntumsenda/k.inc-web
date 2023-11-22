<template>
  <footer class="text-white bg-brown">
    <div v-if="!$route.path.includes('dashboard')" class="footer_top__wrapper container">
      <div class="flex footer_top__left">
        <div class="text-subtitle-2 text-white">
          <p class="text-subtitle-1 font-bold font-family-2 text-brown-1">PRODUCT</p>
          <p>MOISTURIZING</p>
          <p>TONER</p>
          <p>FACIAL WASH</p>
          <p>CLEANSER</p>
        </div>
        <div class="text-subtitle-2 text-white">
          <p class="text-subtitle-1 font-bold font-family-2 text-brown-1">COMPANY</p>
          <p>ABOUT</p>
        </div>
      </div>
    </div>
    <hr class="container divider" />
    <div class="footer_bottom__wrapper container">
      <div class="flex items-center text-subtitle-2">
        <p>&copy; Copyright</p>
        <p>K .inC</p>
        <hr style="width: 12px; margin: 0 8px" />
        <p>SkinCare Product</p>
      </div>
      <div>
        <a href="/" class="text-subtitle-2 text-white">Privacy & Policy</a>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.container{
  padding-left: 12px;
  padding-right: 12px;
}
.divider{
  border-color: map-get($map: $colors, $key: brown-1);
  margin: 0 12px;
}
@media screen and (min-width: map-get($breakpoints, sm)) {
  .container{
    padding-left: 32px;
    padding-right: 32px;
  }
  .divider{
    margin: 0 32px;
  }
}
.footer_top__wrapper{
  padding-top: 40px;
  padding-bottom: 40px;
  p:not(:last-child){
    padding-bottom: 12px;
  }
}
@media screen and (min-width: map-get($breakpoints, sm)) {
  .footer_top__wrapper{
    padding-top: 64px;
    padding-bottom: 64px;
  }
}
.footer_top__left{
  flex-wrap: wrap;
  column-gap: 64px;
  row-gap: 20px;
}
.footer_bottom__wrapper{
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}
@media screen and (min-width: map-get($breakpoints, sm)) {
  .footer_bottom__wrapper{
    padding-top: 32px;
    padding-bottom: 32px;
  }
}
</style>