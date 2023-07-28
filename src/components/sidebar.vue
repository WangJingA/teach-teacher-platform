<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                                v-permiss="item.permiss"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';

const items = [
    {
        icon: 'Odometer',
        index: '/dashboard',
        title: '系统首页',
        permiss: '1',
    },
    {
        icon: 'Calendar',
        index: '1',
        title: '表格相关',
        permiss: '2',
        subs: [
            {
                index: '/table',
                title: '常用表格',
                permiss: '2',
            },
            {
                index: '/import',
                title: '导入Excel',
                permiss: '2',
            },
            {
                index: '/export',
                title: '导出Excel',
                permiss: '2',
            },
        ],
    },
    {
        icon: 'DocumentCopy',
        index: '/tabs',
        title: 'tab选项卡',
        permiss: '3',
    },
    {
        icon: 'Edit',
        index: '3',
        title: '表单相关',
        permiss: '4',
        subs: [
            {
                index: '/form',
                title: '基本表单',
                permiss: '5',
            },
            {
                index: '/upload',
                title: '文件上传',
                permiss: '6',
            },
            {
                index: '4',
                title: '三级菜单',
                permiss: '7',
                subs: [
                    {
                        index: '/editor',
                        title: '富文本编辑器',
                        permiss: '8',
                    },
                    {
                        index: '/markdown',
                        title: 'markdown编辑器',
                        permiss: '9',
                    },
                ],
            },
        ],
    },
    {
        icon: 'Setting',
        index: '/icon',
        title: '自定义图标',
        permiss: '10',
    },
    {
        icon: 'PieChart',
        index: '/charts',
        title: 'schart图表',
        permiss: '11',
    },
    {
        icon: 'Warning',
        index: '/permission',
        title: '权限管理',
        permiss: '13',
    },
    {
        icon: 'CoffeeCup',
        index: '/donate',
        title: '支持作者',
        permiss: '14',
    },
  {
    icon: 'CoffeeCup',
    index: '/TeacherHomePage',
    title: '首页',
    permiss: 'teacher-home-page',
  },
  {
    icon: 'CoffeeCup',
    index: '/TeacherClass',
    title: '班级管理',
    permiss: 'teacher-class',
    subs:[
      {
        icon: 'CoffeeCup',
        index: '/TeacherClass',
        title: '班级列表',
        permiss: 'teacher-class'
      },
      {
        icon: 'CoffeeCup',
        index: '/TeacherClassDetail',
        title: '班级详情',
        permiss: 'teacher-class-detail'
      },
      {
        icon: 'CoffeeCup',
        index: '/TeacherClassStudent',
        title: '班级学生列表',
        permiss: 'teacher-class-student'
      },
    ]
  },
  {
    icon: 'CoffeeCup',
    index: '/TeacherCourse',
    title: '课程管理',
    permiss: 'teacher-course',
    subs: [
      {
        icon: 'CoffeeCup',
        index: '/TeacherCourse',
        title: '课程列表',
        permiss: 'teacher-course',
      },
      {
        icon: 'CoffeeCup',
        index: '/TeacherCreateCourse',
        title: '创建课程',
        permiss: 'teacher-create-course'
      },
      {
        icon: 'CoffeeCup',
        index: '/TeacherCourseSummary',
        title: '课程大纲',
        permiss: 'teacher-course-summary',
      },

      {
        icon: 'CoffeeCup',
        index: '/TeacherFile',
        title: '课件管理',
        permiss: 'teacher-file',
      },
      {
        icon: 'CoffeeCup',
        index: '/TeacherVideo',
        title: '视频管理',
        permiss: 'teacher-video',
      },
      {
        icon: 'CoffeeCup',
        index: '/TeacherCoursePractice',
        title: '课程练习',
        permiss: 'teacher-course-practice',
      },
      {
        icon: 'CoffeeCup',
        index: '/TeacherExam',
        title: '课程考试',
        permiss: 'teacher-exam',
      },
    ]
  },
  {
    icon: 'CoffeeCup',
    index: '/QuestionList',
    title: '题库管理',
    permiss: 'teacher-question',
    subs: [
      {
        icon: 'CoffeeCup',
        index: '/QuestionList',
        title: '题目列表',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/CreateRadioQuestion',
        title: '单选题创编',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/FillInBlanksQuestion',
        title: '填空题创编',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/MultipleChoiceQuestions',
        title: '多选题创编',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/ShortAnswerQuestion',
        title: '简答题创编',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/TrueOrFalseQuestion',
        title: '判断题创编',
        permiss: 'teacher-question',
      },
    ]
  },
  {
    icon: 'CoffeeCup',
    index: '/GroupScrollManage',
    title: '卷库管理',
    permiss: 'teacher-question',
    subs:[
      {
        icon: 'CoffeeCup',
        index: '/ExamList',
        title: '考试组卷',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/PracticeList',
        title: '练习组卷',
        permiss: 'teacher-question',
      },
    ]
  },
  {
    icon: 'CoffeeCup',
    index: '/AnswerManage',
    title: '答卷管理',
    permiss: 'teacher-question',
    subs:[
      {
        icon: 'CoffeeCup',
        index: '/CorrectList',
        title: '批改列表',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/CorrectComplete',
        title: '批改完成',
        permiss: 'teacher-question',
      },
    ]
  },
  {
    icon: 'CoffeeCup',
    index: '/AnalysisManage',
    title: '分析管理',
    permiss: 'teacher-question',
    subs:[
      {
        icon: 'CoffeeCup',
        index: '/ExamAnalysis',
        title: '考试分析',
        permiss: 'teacher-question',
      },
      {
        icon: 'CoffeeCup',
        index: '/PracticeAnalysis',
        title: '练习分析',
        permiss: 'teacher-question',
      },
    ]
  },
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
/deep/ .el-menu-item{
  font-size: 18px;
}
/deep/.el-sub-menu__title{
  font-size: 18px;
}
</style>
