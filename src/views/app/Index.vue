<template>
  <div>
    <MoonHeader class="mb40"></MoonHeader>
    <AppList :app-list="appList"></AppList>
  </div>
</template>

<script setup lang="ts">
  import MoonHeader from '../../components/head/MoonHeader.vue'
  import AppList from '../../components/body/AppList.vue'
  import {reactive} from "vue";
  import {getAppList} from "../../api/request";

  let appList = reactive<Array<Object>>([])
  getAppList().then(res=>{
    appList.push(...res)
    console.log(appList)
  })
</script>