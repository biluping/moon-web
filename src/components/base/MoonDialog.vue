<template>
  <div>
    <div :class="{mask: props.float}" @click="closeDialog">
      <div :class="['container', {'dialog-float': props.float}]" @click.stop="1+1">
        <div class="title">{{props.title}}</div>

        <main>
          <slot></slot>
        </main>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref, watchEffect} from "vue";

  let props = defineProps({
    title:{
      type: String,
      default: '请填写title'
    },
    float: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['closeDialog'])

  function closeDialog(){
    emit('closeDialog')
  }
</script>

<style lang="less" scoped>
  .container {
    width: 850px;
    background-color: #fff;
    padding-bottom: 20px;
    border: 1px solid rgba(180, 175, 175, 0.5);
    border-radius: 3px;
    margin: 0 auto;
  }

  .mask {
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .dialog-float {
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
  }


  .title {
    line-height: 3;
    padding-left: 20px;
    border-bottom: solid rgba(121, 121, 121, 0.2) 1px;
  }

  main {
    margin-top: 30px;
  }
</style>