<template>
  <div>
    <ul>
      <li class="list-box-header">
        环境列表
        <i class="iconfont icon-help-fill icon-class"></i>
      </li>
      <li class="env-active">
        DEV
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
  ul > li{
    border: 1px solid #d5d4d4;
    line-height: 40px;
    height: 40px;
    border-radius: 3px;
    padding: 0 20px;

    .icon-class{
      float: right;
      font-size: 20px;
    }
  }

  .env-active{
    background-color: #5589C5;
    color: #fff;
  }

  .list-box-header {
    background-color: #fff;
    color: #595858;
    border-bottom: 0;
    line-height: 50px;
    height: 50px;
  }

  .info{
    font-size: 10px;
    line-height: 2;
    height: auto;
    background-color: #fff;
  }
</style>