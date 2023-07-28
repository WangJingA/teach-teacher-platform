<template>
  <div class="container">课程文件管理</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ElNotification} from "element-plus";

onMounted(()=>{
  ElNotification({
    title:'已加载所有课件',
    type:"success",
    message:  'loaded all course file already'
  })
})
</script>

<style scoped>

</style>
