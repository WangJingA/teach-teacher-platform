<template>
  <div class="container">课程练习</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ElNotification} from "element-plus";

onMounted(()=>{
  ElNotification({
    title:'加载课程练习成功',
    message:'loaded course practice success',
    type:'success'
  })
})
</script>

<style scoped>

</style>
