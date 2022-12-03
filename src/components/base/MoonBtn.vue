<template>
  <button v-if="type !== 'icon'" class="btn" :class="[type, {'tab-active': typeActive}]">
    <i v-if="props.icon !== ''" :class="[props.icon]"></i>
    <slot>按钮</slot>
  </button>
  <i v-else :class="[type, icon]"></i>
</template>

<script lang="ts" setup>

  let props = defineProps({
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'normal'
    },
    typeActive: {
      type: Boolean,
      default: false
    }
  })

</script>

<style scoped>
  .btn{
    height: 30px;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid rgba(166, 164, 164, 0.5);
    border-radius: 4px;
  }

  .btn:hover, .icon:hover{
    cursor: pointer;
  }

  .btn > i {
    font-size: 12px;
    margin-right: 5px;
  }
  
  .normal:hover, .tab:hover{
    background-color: rgba(211, 210, 210, 0.2);
  }
  
  .normal:active{
    background-color: #e6e6e6;
  }

  .green{
    background-color: #74b666;
    color: white;
  }

  .green:hover{
    background-color: #62a254;
  }

  .green:active{
    background-color: #569348;
  }

  .blue{
    background-color: #4678b2;
    color: white;
  }

  .blue:hover{
    background-color: #3c71af;
  }

  .blue:active{
    background-color: #316aad;
  }

  .tab {
    border: none;
  }

  .tab-active{
    border: 1px solid transparent;
    border-bottom: 3px solid #356b82;
    border-radius: 0;
  }

</style>