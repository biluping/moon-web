<template>
  <div :class="[{'inline-block': props.inline}]">
    <div id="label" :style="{width: props.labelWidth+'px'}">
      <slot></slot>
    </div>
    <input id="input" :disabled="disabled" type="text" :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script setup>

  let props = defineProps({
    modelValue: {
      type: String
    },
    labelWidth: {
      type: Number,
      default: 0
    },
    inline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })

</script>

<style lang="less">

  #input {
    width: 200px;
    height: 30px;
    margin-left: 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    padding-left: 10px;
    outline: 0;
  }

  #input:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
  }

  #label{
    display: inline-block;
    text-align: right;
  }
</style>