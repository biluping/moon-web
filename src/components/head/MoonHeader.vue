<template>
  <header>
    <div class="header-left">
      <img class="logo" src="../../assets/moon-logo.png" alt="logo"/>
    </div>
    <div class="header-right">
      <div><i class="iconfont icon-user-fill"></i>moon(moon)</div>
      <div><i class="iconfont icon-setting-filling"></i>管理员工具</div>
      <div><i class="iconfont icon-language"></i>Language</div>
      <div><i class="iconfont icon-help-fill"></i>帮助</div>
      <div>
        <input class="head-input" type="text" placeholder="搜索 Appid、应用名、配置项 Key">
      </div>
    </div>
  </header>

</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
header {
  height: 50px;
  min-width: 900px;
  background-color: #fff;
  display: flex;
  white-space: nowrap;
  color: #777777;

  .header-left{
    .logo {
      height: 30px;
      padding-left: 33px;
      padding-top: 10px;
    }
  }

  .header-right{
    flex-grow: 1;
    display: flex;
    flex-direction: row-reverse;

    div{
      line-height: 50px;
      padding: 0 15px;
      font-size: 14px;

      i{
       margin-right: 8px;
      }

      .head-input{
        box-sizing: border-box;
        width: 300px;
        height: 35px;
        border: 1px solid #aaaaaa;
        border-radius: 3px;
        padding-left: 10px;
      }

      .head-input:focus{
        outline: 0;
      }
    }

  }
}
</style>