<template>
  <div>
    <Header class="moon-header mb20"></Header>
    <div class="body-container">
      <aside class="mr20">
        <SidebarEnv class="mb20"></SidebarEnv>
        <SidebarInfo class="mb20"></SidebarInfo>
        <SidebarManage></SidebarManage>
      </aside>
      <ConfigTable class="config-table"></ConfigTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SidebarEnv from './sidebar/SidebarEnv.vue'
import SidebarInfo from './sidebar/SidebarInfo.vue'
import SidebarManage from './sidebar/SidebarManage.vue'
import Header from "./head/Header.vue";
import ConfigTable from "./body/ConfigTable.vue";
</script>

<style scoped lang="less">
  .body-container{
    display: flex;
    padding: 0 20px;
  }

  aside{
    //width: 200px;
  }

  .config-table{
    flex-grow: 1;
  }
</style>