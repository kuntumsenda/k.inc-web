<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String,
  variant: {
    type: String,
    default: 'standart'
  },
  placeholder: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  disable: {
    type: Boolean,
    default: false
  },
  required:{
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['blur', 'focus', 'keyup.enter', 'update:modelValue'])
function onFocus(e) {
  document.getElementById(`input-control-${props.id}`).classList.add('input__focus')
  emit('focus', e.target.value)
}
function onblur(e) {
  document.getElementById(`input-control-${props.id}`).classList.remove('input__focus')
  emit('blur', e.target.value)
}
</script>

<template>
  <div :class="`input__wrapper ${variant===undefined?'input_standart':'input_'+variant} ${color? `bg-${color}`: ''} ${disable? 'input--disable':''}`">
    <div class="prepend_outer__wrapper"><slot name="prepend-outer"></slot></div>
    <div :id="`input-control-${id}`" class="input__control">
      <div class="prepend_inner__wrapper"><slot name="prepend-inner"></slot></div>
      <input
        :id="id"
        :value="modelValue"
        :type="type"
        :variant="variant"
        :placeholder="placeholder"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="onblur"
        @keyup.enter="$emit('keyup.enter')"
        @focus="onFocus"        
      />
      <div class="append_inner__wrapper"><slot name="append-inner"></slot></div>
    </div>
    <div class="append_outer__wrapper"><slot name="append-outer"></slot></div>
  </div>
</template>

<style lang="scss" scoped>
input{
  border-style: none;
  background-color: transparent;
  font-size: $fontBody;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder{
    color: #0000003b;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.input__wrapper{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.input_standart{
  .input__control { 
    border-bottom: 1px solid #00000045; 
    border-radius: 0;
    transition: border-color 2s;
    &.input__focus{
      border-width: 2px;
      border-image: linear-gradient(to right, map-get($colors, primary), map-get($colors, primary));
      border-image-slice: 1;
    }
  }
}
.input_plain{
  border: none;
}
.input-outline{
  .input__control { border: 1px  solid #00000045; }
}
.input__control{
  padding-left: 12px;
  padding-right: 12px;
  min-height: 36px;
  padding-top: 4px;
  border-radius: 4px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
}
.prepend_inner__wrapper, .append_inner__wrapper{
  opacity: .5;
}
.prepend_inner__wrapper, .prepend_outer__wrapper{
  margin-right: 8px;
}
.prepend_outer__wrapper, .append_outer__wrapper{
  margin-top: 4px;
}
.append_inner__wrapper, .append_outer__wrapper{
  margin-left: 8px;
}
</style>