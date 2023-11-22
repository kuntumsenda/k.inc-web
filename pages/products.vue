<script setup>
  import { useProductStore } from "~/store/product"
  
  const axios = useNuxtApp().$axios
  const productStore = useProductStore()

  const dataNotFound = ref(false)
  const isLoading = ref(false)

  onMounted(() =>{
    fetchDataProduct()
  })
  async function fetchDataProduct() {
    dataNotFound.value = false
    isLoading.value = true
    try{
      const res = await axios.get('https://dummyjson.com/products')
      productStore.setProducts(res.data.products)
      if(res.data.products.length === 0) dataNotFound.value = true
      isLoading.value = false
    }catch(err){
      dataNotFound.value = true
      isLoading.value = false
    }
  }
  const productList = []
</script>
<template>
  <div>
    <section class="section__top_page">
      <div class="product--grid container">
        <div class="item--grid" v-for="product in productStore.products " :key="product.id">
          <Product :product="product"/>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.section__top_page{
  padding-bottom: 60px;
  overflow-x: hidden;
}
.section--products-popular{
  margin-bottom: 40px;
}
.title--product-popular{
  margin-bottom: 16px;
  justify-content: center;
  a:hover{ text-decoration: underline; display: none; }
}
@media screen and (min-width: map-get($breakpoints, md)) {
  .title--product-popular{
    justify-content: space-between;
    margin-bottom: 24px;
    a{ display: block; }
  }
}
.filter--label{
  display: none;
}
.filter--product-popular{
  margin: 0 16px;
  .material-symbols-outlined{
    font-size: 24px;
    margin-left: 0;
  }
}
@media screen and (min-width: map-get($breakpoints, md)) {
  .filter--label{
    display: block;
  }
  .filter--product-popular{
  .material-symbols-outlined{
    font-size: 28px;
    margin-left: 12px;
  }
}
}
.filter--product-popular{
  position: relative;
}
.content--dropdown{
  select{
    width: 100%;
  }
  p{ 
    margin-bottom: 4px;
  }
}
.list--filter{
  padding: 8px 0;
}
.btn--apply-filter{
  width: 100%;
  margin-top: 16px;
}
.product--grid{
  margin: 0 -15px;
  min-height: 1px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  row-gap: 24px;
  .item--grid{
    padding-left: 15px;
    padding-right: 15px;
    min-height: 1px;
    width: 50.0%;
  }
}
@media screen and (min-width: map-get($breakpoints, md)) {
  .product--grid{
  margin: 0 -8px;
  row-gap: 12px;
    .item--grid{
      padding-left: 8px;
      padding-right: 8px;
      width: 25.0%;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, md)) {
  .product--grid{
  margin: 0 -15px;
  row-gap: 24px;
    .item--grid{
      padding-left: 15px;
      padding-right: 15px;
      width: 20.0%;
    }
  }
}

</style>
