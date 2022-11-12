<template>
  <button class="btn" :class="[type]">
    <i :class="[props.icon]"></i>
    <slot>按钮</slot>
  </button>
</template>

<script lang="ts" setup>

  let props = defineProps({
    icon: {
      type: String,
      default: 'iconfont icon-lock-fill'
    },
    type: {
      type: String,
      default: 'normal'
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

  i {
    font-size: 12px;
    margin-right: 5px;
  }
  
  .normal:hover{
    background-color: rgba(211, 210, 210, 0.2);
    cursor: pointer;
  }
  
  .normal:active{
    background-color: #e6e6e6;
  }

  .primary{
    background-color: #74b666;
    color: white;
  }

  .primary:hover{
    background-color: #62a254;
    cursor: pointer;
  }

  .primary:active{
    background-color: #569348;
  }
</style>