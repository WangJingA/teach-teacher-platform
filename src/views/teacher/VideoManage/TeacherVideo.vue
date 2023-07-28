<template>
<div class="container">课程视频管理</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ElNotification} from "element-plus";

onMounted(()=>{
  ElNotification({
    title:'课程视频资源加载成功',
    type:'success',
    message:'loaded course video success'
  })
})
</script>

<style scoped>

</style>
