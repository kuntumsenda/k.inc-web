<template>
  <div>
    <section class="section__top_page">
      <div class="container">
        <div>
          <h2>About</h2>
          <p><span class="text-h6 font-bold text-primary">Business to Business (B2B)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe illo dignissimos cumque tempore nulla iure corrupti quas? Optio officiis inventore animi. Exercitationem obcaecati magnam quas quae reprehenderit, sunt aliquid!</p>
          <p><span class="text-h6 font-bold text-primary">Business to Customer (B2C)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe illo dignissimos cumque tempore nulla iure corrupti quas? Optio officiis inventore animi. Exercitationem obcaecati magnam quas quae reprehenderit, sunt aliquid!</p>
        </div>
        <div class="right__side">
          <img src="@/assets/images/illustration/dealls.png">
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.section__top_page{
  padding-bottom: 120px;
  overflow-x: hidden;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}
h2{
  margin-bottom: 32px;
}
p{
  &:not(:last-child){
    margin-bottom: 16px;
  }
}
@media screen and (min-width: map-get($breakpoints, md)) {
  p{
    max-width: 500px;
  }
}
.right__side{
  max-height: 420px;
  img{
    max-width: 500px;
    object-fit: cover;
    border-radius: 0 240px 0 240px
  }
}
</style>