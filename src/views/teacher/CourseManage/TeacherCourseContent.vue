<template>
  <div class="container">
    <el-container>
      <el-header>
        <el-menu>
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
          >
            <router-link to="TeacherCourseSummary">
              <el-menu-item index="1">课程大纲</el-menu-item>
            </router-link>
            <router-link to="TeacherFile">
              <el-menu-item index="2">课程文件</el-menu-item>
            </router-link>
            <router-link to="TeacherVideo">
              <el-menu-item index="3">课程视频</el-menu-item>
            </router-link>
            <router-link to="TeacherExam">
              <el-menu-item index="4">课程考试</el-menu-item>
            </router-link>
            <router-link to="TeacherCoursePractice">
              <el-menu-item index="5">课程练习</el-menu-item>
            </router-link>
            <router-link to="TeacherCreateExam">
              <el-menu-item index="6">创建考试</el-menu-item>
            </router-link>
            <router-link to="TeacherCreatePractice">
              <el-menu-item index="7">创建练习</el-menu-item>
            </router-link>
            <router-link to="TeacherCourseDetail">
              <el-menu-item index="8">课程详情</el-menu-item>
            </router-link>
          </el-menu>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-demo{
  font-size: 20px;
}
/deep/ .el-menu-item{
  font-size: 20px;
}
</style>
