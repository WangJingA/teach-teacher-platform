<template>
  <div className="container">考试试卷分析</div>
</template>

<script setup>
import {ElNotification} from "element-plus";

ElNotification({
  title: '试卷分析完毕',
  type: 'success',
  message: 'test paper analysis completed'
})
</script>

<style scoped>

</style>
