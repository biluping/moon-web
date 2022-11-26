<template>
  <div>
    <Header class="moon-header mb20"></Header>
    <div class="body-container">
      <aside class="mr20">
        <SidebarEnv class="mb20"></SidebarEnv>
        <SidebarInfo class="mb20"></SidebarInfo>
        <SidebarManage></SidebarManage>
      </aside>
      <div class="config-table-wrapper">
        <ConfigTable class="mb40" v-for="key in Object.keys(config)" :id="key" :obj="config[key]"></ConfigTable>
      </div>
    </div>
  </div>
</template>·

<script lang="ts" setup>
import SidebarEnv from './sidebar/SidebarEnv.vue'
import SidebarInfo from './sidebar/SidebarInfo.vue'
import SidebarManage from './sidebar/SidebarManage.vue'
import Header from "./head/Header.vue";
import ConfigTable from "./body/ConfigTable.vue";
import {onMounted, reactive} from "vue";
import {getMoonConfig} from "../api/request";

let config = reactive<any>({})

onMounted(()=>{
  getMoonConfig("example").then(r=>{
    for(let key in r){
      config[key] = r[key]
    }
  })
})



</script>

<style scoped lang="less">
  .body-container{
    display: flex;
    padding: 0 20px;
  }

  .config-table-wrapper{
    flex-grow: 1;
  }
</style>