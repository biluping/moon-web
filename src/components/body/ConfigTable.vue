<template>
  <main>
    <div class="container">
      <div class="config-info-btn h50">
        <div class="bold">
          <slot></slot>
        </div>
        <div>
          <MoonBtn class="mr5" icon="iconfont icon-icon_fabu" @click="publishConfig" type="green">发布</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-huitui">回滚</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-lishijilu">发布历史</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-shouquan">授权</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-shiyanhuaxue">灰度</MoonBtn>
        </div>
      </div>

      <div class="config-info-btn h50">
        <div class="btn-tab">
          <MoonBtn class="mr5" icon="iconfont icon-biaoge" type="tab" type-active>表格</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-text" type="tab">文本</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-exchange" type="tab">更改历史</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-cloud-machine" type="tab">实例列表</MoonBtn>
        </div>

        <div class="btn-config">
          <MoonBtn class="mr5" icon="iconfont icon-filter">过滤配置</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-sync">同步配置</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-huitui">撤销配置</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-bijiaofenxi">比较配置</MoonBtn>
          <MoonBtn class="mr5" icon="iconfont icon-add1" type="blue" @click="showDialog = true">新增配置</MoonBtn>
        </div>
      </div>

      <div class="config-table">
        <table>
          <tr>
            <th style="width: 8%">发布状态</th>
            <th style="width: 15%">Key</th>
            <th style="width: 30%">Value</th>
            <th style="width: 13%">备注</th>
            <th style="width: 10%">最后修改人</th>
            <th style="width: 16%">发布修改时间</th>
            <th style="width: 8%">操作</th>
          </tr>

          <tr v-for="config in configList">
            <td style="width: 8%" class="publish-status">
              <MoonTag v-if="config.isPublish">已发布</MoonTag>
              <MoonTag v-else color="orange">未发布</MoonTag>
            </td>
            <td style="width: 15%">{{config.key}}</td>
            <td style="width: 30%" class="config-val">{{config.value}}</td>
            <td style="width: 13%">待开发</td>
            <td style="width: 10%">待开发</td>
            <td style="width: 16%">{{config.updateTime}}</td>
            <td style="width: 8%">
              <MoonBtn type="icon" icon="iconfont icon-tianxie" style="margin-right: 20%" @click="openDialogWithEditData(config.key, config.value)"></MoonBtn>
              <MoonBtn type="icon" icon="iconfont icon-cuowu" @click="delConfig(config.key)"></MoonBtn>
            </td>
          </tr>

        </table>
      </div>
    </div>

    <MoonDialog float v-if="showDialog" :title="isEdit ? '编辑配置' : '新增配置'" @closeDialog="closeDialog">
      <MoonInput :label-width="200" class="mb20" :disabled="isEdit" v-model="tmpConfig.key">key</MoonInput>
      <MoonInput :label-width="200" class="mb20" v-model="tmpConfig.value">value</MoonInput>
      <MoonBtn style="margin-left: 220px;" type="blue" @click="submit">提交</MoonBtn>
    </MoonDialog>
  </main>
</template>

<script setup lang="ts">
  import MoonBtn from '../base/MoonBtn.vue'
  import MoonDialog from '../base/MoonDialog.vue'
  import MoonInput from '../base/MoonInput.vue'
  import MoonTag from '../base/MoonTag.vue'
  import {onMounted, reactive, ref} from "vue";
  import {getConfig, saveConfig, delConfig as delConfigApi, publishConfig as publishConfigApi} from "../../api/request";

  let props = defineProps({
    id:{
      type: Number,
      required: true
    },
  })

  let showDialog = ref(false)
  let tmpConfig = reactive<MoonConfig>({key: "", value:""})
  let isEdit = ref(false)
  let configList = reactive<Array<MoonConfigVo>>([])

  onMounted(()=>{
    getInitData()
  })

  // 初始化配置数据
  function getInitData(){
    getConfig(props.id).then(res => {
      configList.length = 0
      configList.push(...res)
    })
  }

  // 关闭dialog
  function closeDialog(){
    showDialog.value = false
    tmpConfig.key = ""
    tmpConfig.value = ""
  }

  // 打开dialog，并设置属性值
  function openDialogWithEditData(key:string, value:string){
    isEdit.value = true
    tmpConfig.key = key
    tmpConfig.value = value
    showDialog.value = true
  }

  // 添加配置
  function submit(){
    if(tmpConfig.key !== '' && tmpConfig.value !== ''){
      saveConfig(props.id, tmpConfig).then(res => {
        getInitData()
        closeDialog()
      })
    }
  }

  // 删除配置
  function delConfig(key:string){
    delConfigApi(props.id, key).then(res => {
      getInitData()
    })
  }

  // 发布配置
  function publishConfig(){
    let waitPublishKey = []
    for (let config of configList) {
      if (!config.isPublish){
        waitPublishKey.push(config.key)
      }
    }
    if (waitPublishKey.length > 0){
      publishConfigApi(props.id, waitPublishKey).then(res => {
        getInitData()
      })
    }
  }

</script>

<style lang="less" scoped>
  .container{
    background-color: #fff;
    color: #7a7777;
    min-width: 863px;
  }

  .config-info-btn{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    padding: 0 20px;
    border: 1px solid #e7e7e7;
  }

  .config-info-btn:first-child{
    border-bottom: none;
  }

  table{
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  td, th {
    border: 1px solid #e7e7e7;
  }

  th{
    border-top: none;
    height: 40px;
    font-size: 13px;
  }

  td{
    height: 30px;
    box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
    font-size: 12px;
  }

  .publish-status{
    font-size: 10px;
  }

  .config-val {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>