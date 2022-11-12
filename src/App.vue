<script setup lang="ts">
import SidebarInfo from './components/sidebar/SidebarInfo.vue'
import SidebarEnv from './components/sidebar/SidebarEnv.vue'
import AppBody from './components/AppBody.vue'
import SidebarManage from "./components/sidebar/SidebarManage.vue";
import ConfigTable from "./components/body/ConfigTable.vue";
import MoonBtn from "./components/btn/MoonBtn.vue";
</script>

<template>
  <ConfigTable></ConfigTable>
<!--  <MoonBtn></MoonBtn>-->
</template>

<style lang="less">
 body {
   font-family: 'Open Sans', sans-serif;
 }
</style>
