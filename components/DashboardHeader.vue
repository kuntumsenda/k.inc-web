
<script setup lang="ts">
defineEmits(['logout'])
</script>

<template>
  <header>
    <div class="dashboard__container header__wrapper">
      <div class="right__side">
        <Button @click="$emit('logout')">Logout</Button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  width: calc(100% - 250px);
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
}
.header__wrapper{
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid map-get($map: $colors, $key: grey-1);
}
.logo__wrapper{
  width: 100px;
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
  width: 100px;
  display: flex;
  justify-content: flex-end;
}
</style>