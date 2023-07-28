<template>
  <div className="container">练习分析</div>
</template>

<script setup>
import {ElNotification} from "element-plus";

ElNotification({
  title: '练习分析完毕',
  type: 'success',
  message: 'practice paper analysis completed'
})
</script>

<style scoped>

</style>
