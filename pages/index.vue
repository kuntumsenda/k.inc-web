<template>
  <div>
    <section class="section__banner section__top_page">
      <img src="@/assets/images/illustration/glow.png" class="accent__glow1">
      <div class="container">
        <img src="@/assets/images/illustration/img-1.png" class="img__banner1">
        <div class="text__top_banner">
          <h1 class="title__banner">
            Healthy Skin is Happy Skin
          </h1>
          <div class="font-family-2">
            <p class="text-h3 font-bolder">20</p>
            <p class="text-h3 font-bolder">23</p>
          </div>
        </div>
        <div class="text__end_banner">
          <div class="quote_banner__wrapper">
            <p class="text-h4 font-family-2 font-bolder">82%</p>
            <p>Browse our exquisite collection of skincare essentials and start your journey to flawless. radiant skin today</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section__dua">
      <div class="container">
        <h2>Experience the Radiance Today!</h2>
        <div>
          <a href="/" class="text-h6 link__shop_now">SHOP NOW</a>
          <p>Don't let dull skin hold you back from feeling your best. It's time to indulge in the luxury of Radiant Skin and unlock your true beauty potential.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section__banner{
  background-image: url('@/assets/images/bg/bg-1.png');
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
}
@media screen and (min-width: map-get($breakpoints, xl)) {
  .section__banner{
    min-height: 1024px;
  }
}
.text__top_banner{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  p{
    line-height: .8 !important;
  }
}
.title__banner{
  position: relative;
  max-width: 600px;
}
.text__end_banner{
  display: flex;
  justify-content: flex-end;
  margin-top: calc(100vh - 85vh);
  padding-bottom: 20px;
  position: relative;
  z-index: 10;
}
@media screen and (min-width: map-get($breakpoints, sm)) {
  .text__end_banner{
    margin-top: calc(100vh - 445px);
  }
}
@media screen and (min-height: 1024px) {
  .text__end_banner{
    margin-top: calc(1024px - 445px);
  }
}
@media screen and (min-width: map-get($breakpoints, xl)) {
  .text__end_banner{
    margin-top: calc(1024px - 445px) !important;
  }
}

.quote_banner__wrapper{
  max-width: 290px;
}
.img__banner1{
  position: absolute;
  width: 600px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
@media screen and (min-width: map-get($breakpoints, sm)) {
  .img__banner1{
    transform: translate(0, -50%);
    right: 12%;
  }
}
@media screen and (min-width: map-get($breakpoints, lg)) {
  .img__banner1{
    top: -90px;
    transform: translate(0, 0);
  }
}
@media screen and (min-width: map-get($breakpoints, xl)) {
  .img__banner1{
    width: 900px;
    top: 0;
  }
}
.accent__glow1{
  position: absolute;
  top: 12vh;
  right: 10vw;
}
.section__dua{
  .container{
    max-width: 880px;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 40px;
    column-gap: 20px;
  }
  h2{
    max-width: 350px;
  }
  p{
    max-width: 300px;
    margin-top: 60px;
  }
}
.link__shop_now{
  display: flex;
  align-items: center;
  text-align: center;
  width: 110px;
  height: 110px;
  padding: 32px;
  border-radius: 50%;
  background: map-get($map: $colors, $key: primary);
}
</style>

