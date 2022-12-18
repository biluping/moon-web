<template>
<!-- 防止父组件的样式作用到子组件 -->
  <main>
    <div :class="['container', props.color]">
      <slot>tag</slot>
    </div>
  </main>
</template>

<script lang="ts" setup>

  let props = defineProps({
    color: {
      type: String,
      default: 'grey'
    }
  })

</script>

<style scoped>
  .container{
    display: inline-block;
    padding:2px 10px;
    white-space: nowrap;
  }

  .grey{
    background-color: #a4a4a4;
    color: white;
  }

  .orange{
    background-color: orange;
    color: white;
  }

</style>