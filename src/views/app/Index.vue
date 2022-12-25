<template>
  <div>
    <MoonHeader class="mb20"></MoonHeader>
    <main>
      <aside>
        <ul>
          <li><i class="iconfont icon-application"></i>我的应用</li>
          <li><i class="iconfont icon-star"></i>收藏的应用</li>
          <li><i class="iconfont icon-eye-fill"></i>最近浏览的应用</li>
          <li><i class="iconfont icon-document"></i>公共 Namespace</li>
        </ul>
      </aside>

      <div class="main-body">
        <div class="body-container">
          <div class="btn-box">
            <button class="btn" @click="$router.push({name: 'appCreate'})"><i class="iconfont icon-add"></i>创建应用</button>
          </div>
          <div class="table-box">
            <table>
              <tbody>
              <tr>
                <th>appid</th>
                <th>描述</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
              <tr v-for="(app, index) in appList" :id="app.appid" @click="$router.push({name: 'config', params: {appid: app.appid}})">
                <td>{{app.appid}}</td>
                <td>{{ app.describe }}</td>
                <td>{{app.createTime}}</td>
                <td>
                  <MoonBtn type="icon" icon="iconfont icon-tianxie" style="margin-right: 20%" @click.stop="editApp(index)"></MoonBtn>
                  <MoonBtn type="icon" icon="iconfont icon-cuowu" @click.stop="delApp(app.appid)"></MoonBtn>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </main>
    <MoonDialog title="编辑应用" float @closeDialog="closeDialog" v-if="showDialog">
      <MoonInput :label-width="200" class="mb20" v-model="modifyApp.appid" disabled>AppId</MoonInput>
      <MoonInput :label-width="200" class="mb20" v-model="modifyApp.describe">描述</MoonInput>
      <MoonBtn style="margin-left: 220px;" type="blue" @click="submit">提交</MoonBtn>
    </MoonDialog>
  </div>
</template>

<script setup lang="ts">
  import MoonHeader from '../../components/head/MoonHeader.vue'
  import MoonDialog from '../../components/base/MoonDialog.vue'
  import MoonBtn from '../../components/base/MoonBtn.vue'
  import MoonInput from '../../components/base/MoonInput.vue'
  import {onMounted, reactive, ref} from "vue";
  import {getAppList as getAppListApi, delApp as delAppApi, createOrUpdateApp} from "../../api/request";

  let appList = reactive<Array<MoonApp>>([])
  let modifyApp = reactive<MoonApp>({appid: '', describe: '', createTime: ''})
  let showDialog = ref(false)

  // 获取app
  function getAppList(){
    getAppListApi().then(res=>{
      appList.length = 0
      appList.push(...res)
    })
  }

  // 删除app
  function delApp(appid: string){
    delAppApi(appid).then(res=>{
      getAppList()
    })
  }

  // 编辑app
  function editApp(index: number){
    showDialog.value = true
    modifyApp.appid = appList[index].appid
    modifyApp.describe = appList[index].describe
  }

  // 保存编辑结果
  function submit(){
    if (modifyApp.appid === '' || modifyApp.describe === ''){
      return
    }
    createOrUpdateApp(modifyApp.appid, modifyApp.describe).then(res => {
      getAppList()
      closeDialog()
      modifyApp.appid = ''
      modifyApp.describe = ''
    })
  }

  // 关闭遮照
  function closeDialog(){
    showDialog.value = false
    modifyApp.appid = ''
    modifyApp.describe = ''
  }

  //  初始化
  onMounted(()=>{
    getAppList()
  })

</script>

<style lang="less" scoped>

main{
  background-color: #fff;
  display: flex;
  color: #777777;
  padding-bottom: 20px;
}

aside{
  width: 15%;
  border-right: 1px solid #DDDEE5;
  padding-bottom: 40px;

  ul{
    li{
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 40px;

      i{
        margin-right: 10px;
      }
    }

    li:hover{
      background-color: #F2F6FC;
      cursor: pointer;
    }
  }
}

.main-body{
  width: 85%;

  .body-container{
    width: 92%;
    margin-left: 4%;

    .btn-box{
      width: 100%;
      margin: 15px 0;
      display: flex;
      flex-direction: row-reverse;

      .btn{
        width: 103px;
        height: 34px;
        font-size: 14px;
        background-color: #337ab7;
        border: 0;
        color: white;
        border-radius: 3px;

        i{
          color: white;
          font-weight: bold;
          font-size: 16px;
          margin-right: 3px;
        }
      }

      .btn:hover{
        cursor: pointer;
        background-color: #286090;
      }
    }

    .table-box{
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .09);
      padding: 20px 20px;

      table{
        width: 100%;
        border-collapse: collapse;
        box-sizing: border-box;

        tr:not(:first-of-type):hover{
          background-color: #f5f5f5;
        }

        th{
          line-height: 50px;
        }

        td{
          text-align: center;
          line-height: 50px;
        }

        th,td{
          border-bottom: 1px solid rgba(170,170,170,.2);
        }
      }
    }

  }
}

</style>