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
        <ConfigTable class="mb40" v-for="key in Object.keys(config)" :id="key" :obj="config[key]" @openDialog="openDialog"></ConfigTable>
      </div>
    </div>
    <MoonDialog title="新增/编辑配置" float @closeDialog="closeDialog" v-if="showDialog">
      <MoonInput :label-width="200" class="mb20" v-model="addConfigDto.key" :disabled="isEdit">key</MoonInput>
      <MoonInput :label-width="200" class="mb20" v-model="addConfigDto.value">value</MoonInput>
      <MoonBtn style="margin-left: 220px;" type="blue" @click="addConfig">提交</MoonBtn>
    </MoonDialog>
  </div>
</template>

<script lang="ts" setup>
import SidebarEnv from '../../components/sidebar/SidebarEnv.vue'
import SidebarInfo from '../../components/sidebar/SidebarInfo.vue'
import SidebarManage from '../../components/sidebar/SidebarManage.vue'
import MoonHeader from "../../components/head/MoonHeader.vue";
import ConfigTable from "../../components/body/ConfigTable.vue";
import MoonDialog from "../../components/base/MoonDialog.vue";
import MoonInput from "../../components/base/MoonInput.vue"
import MoonBtn from "../../components/base/MoonBtn.vue"
import {onMounted, reactive, ref} from "vue";
import {getMoonConfig, saveConfig} from "../../api/request";

let props = defineProps({
  appid: {
    type: String,
    default: ''
  },
});

let config = reactive<any>({})
let showDialog = ref(false)
let isEdit = ref(false)
let addConfigDto = reactive<MoonConfig>({
  key: "",
  value: ""
})

function getData(){
  getMoonConfig(props.appid).then(r => {
    for (let key in r) {
      config[key] = r[key]
    }
  })
}

// 关闭遮照
function closeDialog(){
  showDialog.value = false
  addConfigDto.key = ''
  addConfigDto.value = ''
}

onMounted(() => {
  getData()
})

function addConfig(){
  saveConfig(props.appid, addConfigDto).then(res => {
    getData()
    showDialog.value = false
  })
}

function openDialog(event:string, key:string, value:string){
  showDialog.value = true
  if (event === "edit"){
    isEdit.value = true
    addConfigDto.key = key
    addConfigDto.value = value
  }
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