<template>
  <div class="container">
    <Header class="moon-header mb20"></Header>
    <div class="body-container">
      <aside>
        <SidebarEnv class="sidebarEnv mb20"></SidebarEnv>
        <SidebarInfo></SidebarInfo>
      </aside>
      <main>

      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SidebarEnv from './sidebar/SidebarEnv.vue'
import SidebarInfo from './sidebar/SidebarInfo.vue'
import Header from "./head/Header.vue";
</script>

<style scoped lang="less">
  .body-container{
    display: flex;
    padding: 20px 20px;
  }
</style>