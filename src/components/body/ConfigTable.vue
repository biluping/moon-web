<template>
  <main>
    <div class="container">
      <div class="config-info-btn h50">
        <div class="bold">{{id}}</div>
        <div>
          <MoonBtn class="mr5" icon="iconfont icon-icon_fabu" type="green" @click="publishConfig">发布</MoonBtn>
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
          <MoonBtn class="mr5" icon="iconfont icon-add1" type="blue" @click="openDialog">新增配置</MoonBtn>
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

          <tr v-for="key in Object.keys(props.obj)" id="key">
            <td style="width: 8%" class="publish-status">
              <MoonTag v-if="obj[key].isPublish">已发布</MoonTag>
              <MoonTag v-else color="orange">未发布</MoonTag>
            </td>
            <td style="width: 15%">{{key}}</td>
            <td style="width: 30%" class="config-val">{{obj[key].value}}</td>
            <td style="width: 13%">待开发</td>
            <td style="width: 10%">待开发</td>
            <td style="width: 16%">{{obj[key].updateTime}}</td>
            <td style="width: 8%">
              <MoonBtn type="icon" icon="iconfont icon-tianxie" style="margin-right: 20%" @click="edit(key, obj[key].value)"></MoonBtn>
              <MoonBtn type="icon" icon="iconfont icon-cuowu" @click="delConfig(obj[key].appid, key)"></MoonBtn>
            </td>
          </tr>

        </table>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import MoonBtn from '../base/MoonBtn.vue'
  import MoonTag from '../base/MoonTag.vue'
  import {delConfig as delConfigApi, publishConfig as publishConfigApi} from "../../api/request";

  let props = defineProps({
    id:{
      type: String,
      default: 'application'
    },
    obj: {
      type: Object,
      default: {}
    }
  })

  const emit = defineEmits(['openDialog'])

  function openDialog(){
    emit('openDialog', "create", null)
  }

  function edit(key:string, value:string){
    emit('openDialog', "edit", key, value)
  }

  // 删除配置
  function delConfig(appid:string, key:string){
    delConfigApi(appid, key).then(res => {
      delete props.obj[key]
    })
  }

  // 发布配置
  function publishConfig(){
    let list:Array<string> = []
    let appid = ""
    for(let key of Object.keys(props.obj)){
      if (!props.obj[key].isPublish){
        list.push(key)
        appid = props.obj[key].appid
      }
    }
    if (list.length > 0){
      publishConfigApi(appid, list).then(res => {
        list.forEach(k => {
          props.obj[k].isPublish = true
        })
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