<template>
  <div class="container">考试管理</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ElNotification} from "element-plus";

onMounted(()=>{
  ElNotification({
    title:'加载考试资源成功',
    type:"success",
    message:'loaded exam resource success'
  })
})
</script>

<style scoped>

</style>
