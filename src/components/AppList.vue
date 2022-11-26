<template>
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
          <button class="btn"><i class="iconfont icon-add"></i>创建应用</button>
        </div>
        <div class="table-box">
          <table>
            <tbody>
            <tr>
              <th>Appid</th>
              <th>应用名称</th>
              <th>部门</th>
              <th>负责人</th>
              <th>邮箱</th>
            </tr>
            <tr>
              <td>moon-demo</td>
              <td>moon-demo</td>
              <td>demo部门(demo)</td>
              <td>moon</td>
              <td>moon@acme.com</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
  main{
    background-color: #fff;
    display: flex;
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