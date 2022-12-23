<template>
  <div>
    <MoonHeader class="moon-header mb20"></MoonHeader>
    <div class="body-container">
      <aside class="mr20">
        <SidebarEnv class="mb20"></SidebarEnv>
        <SidebarInfo class="mb20"></SidebarInfo>
        <SidebarManage></SidebarManage>
      </aside>
      <div class="config-table-wrapper">
        <ConfigTable class="mb40" v-for="nameSpace in nameSpaceList" :id="nameSpace"></ConfigTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import SidebarEnv from '../../components/sidebar/SidebarEnv.vue'
  import SidebarInfo from '../../components/sidebar/SidebarInfo.vue'
  import SidebarManage from '../../components/sidebar/SidebarManage.vue'
  import MoonHeader from "../../components/head/MoonHeader.vue";
  import ConfigTable from "../../components/body/ConfigTable.vue";
  import {onMounted, reactive} from "vue";
  import {getNameSpaceList} from "../../api/request";
  import {useRoute} from "vue-router";

  let nameSpaceList = reactive<Array<String>>([])
  let appid = useRoute().params.appid;

  onMounted(() => {
    getData()
  })

  function getData(){
    getNameSpaceList(appid as string).then(r => {
      nameSpaceList.push(...r)
    })
  }

</script>

<style scoped lang="less">
.body-container {
  display: flex;
  padding: 0 20px;
}

.config-table-wrapper {
  flex-grow: 1;
}
</style>