<template>
  <div>
    <MoonHeader></MoonHeader>
    <MoonDialog title="创建应用" class="mt20">
      <MoonInput :label-width="200" class="mb20" v-model="appid">appId</MoonInput>
      <MoonInput :label-width="200" class="mb20" v-model="host">host</MoonInput>
      <MoonBtn class="btn" type="blue" @click="submit">提交</MoonBtn>
    </MoonDialog>
  </div>
</template>

<script setup lang="ts">
  import MoonHeader from '../../components/head/MoonHeader.vue'
  import MoonBtn from '../../components/base/MoonBtn.vue'
  import MoonInput from '../../components/base/MoonInput.vue'
  import MoonDialog from '../../components/base/MoonDialog.vue'
  import {ref} from "vue";
  import {createOrUpdateApp} from "../../api/request";
  import {useRouter} from "vue-router";

  let appid = ref("")
  let host = ref("")

  const router = useRouter();

  function submit(){
    if (appid.value === '' || host.value === ''){
      return
    }
    createOrUpdateApp(appid.value, host.value).then(res => {
      router.push({name: 'app'})
    })
  }

</script>

<style lang="less" scoped>

  .btn {
    margin-left: 220px;
  }
</style>