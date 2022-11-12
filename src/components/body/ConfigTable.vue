<template>
  <div class="container">
    <div class="config-info h50">
      <div class="bold">application</div>
      <div>
        <MoonBtn class="mr5" icon="iconfont icon-icon_fabu" type="primary">发布</MoonBtn>
        <MoonBtn class="mr5" icon="iconfont icon-huitui">回滚</MoonBtn>
        <MoonBtn class="mr5" icon="iconfont icon-lishijilu">发布历史</MoonBtn>
        <MoonBtn class="mr5" icon="iconfont icon-shouquan">授权</MoonBtn>
        <MoonBtn class="mr5" icon="iconfont icon-shiyanhuaxue">灰度</MoonBtn>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
  import MoonBtn from '../btn/MoonBtn.vue'
</script>

<style lang="less" scoped>
  .container{
    background-color: #fff;
    color: #7a7777;
  }

  .config-info{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    padding: 0 20px;
  }

  .h50{
    height: 50px;
  }
</style>