<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  variant: {
    type: String,
    default: 'standart'
  },
  color: {
    type: String,
    default: ''
  },
  disable: {
    type: Boolean,
    default: false
  }
})
defineEmits(['click'])
</script>
<template>
  <button :class="`btn text-white`" :type="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn{
  cursor: pointer;
  font-size: $fontBody;
  padding: 8px 16px;
  min-height: 40px;
  border: none;
  border-radius: $radiusDefault;
  font-weight: map-get($map: $fontWeight, $key: medium);
  background: map-get($map: $colors, $key: black);
  &.disabled{
    background: map-get($map: $colors, $key: grey-1);
    color: map-get($map: $colors, $key: grey-2);
  }
}
.round{
  border-radius: 40px;
}
</style>