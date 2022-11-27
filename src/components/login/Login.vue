<template>
  <div class="container">
    <div class="win">
      <img src="../../assets/logo-login.png" alt="logo" class="login-logo" />
      <input type="text" class="login-input" placeholder="Username" v-model="username" />
      <input type="text" class="login-input" placeholder="Password" v-model="password" />
      <button class="login-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import {useRouter} from "vue-router";

  const router = useRouter();

  let username = ref<String>()
  let password = ref<String>()

  // 登陆
  function login(){
    if (username.value === 'luping.bi' && password.value === 'rabbit'){
      router.push({
        name: 'app'
      })
    } else {
      console.log("用户名密码错误")
    }
  }
</script>

<style scoped>

.container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background: linear-gradient(to right, #22d686, #24d3d3, #22d686, #24d3d3) !important;
}

.win{
  width: 556px;
  height: 355px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 10px;
}

.login-logo{
  width: 500px;
  margin: 30px 28px 0;
}

.login-input{
  display: block;
  width: 500px;
  height: 30px;
  margin: 20px auto;
  border: none;
  border-bottom: 1px #e7e7e7 solid;
  outline: none;
  font-size: 18px;
}

.login-btn{
  display: block;
  margin: 0 auto;
  width: 500px;
  height: 40px;
  border: none;
  background-color: #E8E9EC;
}

.login-btn:hover{
  background-color: #2D3B55;
  cursor: pointer;
  color: white;
}
</style>