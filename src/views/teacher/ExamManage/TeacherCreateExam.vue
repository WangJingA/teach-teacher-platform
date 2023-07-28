<template>
<div class="container">创建考试</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ElNotification} from "element-plus";

onMounted(()=>{
  ElNotification({
    title:'请开始你的编辑',
    type:"success",
    message:  'please start your course summary edit'
  })
})
</script>

<style scoped>

</style>
