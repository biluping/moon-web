<template>
  <div>
    <ul>
      <li class="list-box-header">
        <div>应用信息</div>
        <div class="icon-wrapper">
          <i class="iconfont icon-tianxie"></i>
          <i class="iconfont icon-star1"></i>
        </div>
      </li>
      <li class="info">
        <table>
          <tr>
            <td class="info-name">AppId:</td>
            <td class="info-value">apollo-demo</td>
          </tr>
          <tr>
            <td class="info-name">应用名称:</td>
            <td class="info-value">apollo-demo</td>
          </tr>
          <tr>
            <td class="info-name">部门:</td>
            <td class="info-value">demo部门(demo)</td>
          </tr>
          <tr>
            <td class="info-name">负责人:</td>
            <td class="info-value">apollo(apollo)</td>
          </tr>
          <tr>
            <td class="info-name">邮箱:</td>
            <td class="info-value">apollo@acme.com</td>
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
  ul{
    border: 1px solid #b6b2b1;
    border-radius: 3px;
    background-color: #fff;
  }

  .list-box-header {
    box-sizing: border-box;
    padding: 0 17px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d5d5d7;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #7a7777;
  }

  .icon-wrapper{
    color: black;
    font-weight: bold;
  }

  .icon-wrapper>i:first-child {
    margin-right: 10px;
  }

  .info{
    padding: 15px 10px;
  }

  .info-name{
    text-align: right;
    color: #726f6f;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
  }

  .info-value{
    padding: 5px 7px;
    border-bottom: 1px dotted #675f5f;
    color: #675f5f;
    font-size: 12px;
  }
</style>