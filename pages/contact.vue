<template>
  <div>
    <section class="section__top_page">
      <img class="accent__bg1" src="@/assets/images/illustration/contact.png">
      <img class="accent__bg2" src="@/assets/images/illustration/email.png">
      <div class="container">
        <h2>Get in Touch</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias provident fugiat rerum incidunt omnis eum ducimus doloribus, hic debitis delectus? A nam voluptatem sint, eligendi fugit distinctio! Vitae, nemo doloribus.</p>
        <div class="input_email__wrapper">
          <TextField></TextField>
          <Button variant="round" class="bg-primary">Contact Us</Button>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.section__top_page{
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
h2{
  margin-bottom: 32px;
}
p{
  max-width: 350px;
}
.input_email__wrapper{
  padding: 8px 12px;
  display: flex;
  flex-wrap: nowrap;
  border: 1.5px solid map-get($map: $colors, $key: primary);
  border-radius: 50px;
  margin-top: 20px;
}
.accent__bg1{
  position: absolute;
  right: 0;
  bottom: 0;
}
.accent__bg2{
  position: absolute;
  left: -120px;
  top: 50%;
  transform: translateY(-50%);
}
</style>