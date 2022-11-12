<template>
  <div>
    <ul>
      <li>
        <i class="iconfont icon-app"></i>
        <span>管理应用</span>
      </li>
      <li>
        <i class="iconfont icon-lock-fill"></i>
        <span>管理密钥</span>
      </li>
      <li>
        <i class="iconfont icon-add1 bold"></i>
        <span>添加集群</span>
      </li>
      <li>
        <i class="iconfont icon-add1 bold"></i>
        <span>添加 Namespace</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
  ul {
    border: 1px solid #b6b2b1;
    border-radius: 3px;
    background-color: #fff;
  }

  li{
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    color: #7a7777;
    border-bottom: 1px solid #d5d5d7;
  }

  ul>li:last-child{
    border-bottom: none;
  }

  i {
    margin-right: 20px;
  }
</style>