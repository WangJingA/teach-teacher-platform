import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/table.vue'),
            },
            {
                path: '/charts',
                name: 'basecharts',
                meta: {
                    title: '图表',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '表单',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
            {
                path: '/tabs',
                name: 'tabs',
                meta: {
                    title: 'tab标签',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
            },
            {
                path: '/donate',
                name: 'donate',
                meta: {
                    title: '鼓励作者',
                    permiss: '14',
                },
                component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
            },
            {
                path: '/permission',
                name: 'permission',
                meta: {
                    title: '权限管理',
                    permiss: '13',
                },
                component: () => import(/* webpackChunkName: "permission" */ '../views/permission.vue'),
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传插件',
                    permiss: '6',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
            },
            {
                path: '/icon',
                name: 'icon',
                meta: {
                    title: '自定义图标',
                    permiss: '10',
                },
                component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
            },
            {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器',
                    permiss: '9',
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/markdown.vue'),
            },
            {
                path: '/export',
                name: 'export',
                meta: {
                    title: '导出Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
            },
            {
                path: '/import',
                name: 'import',
                meta: {
                    title: '导入Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/import.vue'),
            },
            {
                path:'/TeacherHomePage',
                name:'TeacherHomePage',
                meta:{
                    title: '教师首页',
                },
                component:() => import('../views/teacher/TeacherHomePage.vue')
            },
            {
                path:'/TeacherClass',
                name:'TeacherClass',
                meta:{
                    title: '教师班级管理',
                },
                children:[
                    {
                    path:'/TeacherClass',
                    name:'TeacherClass',
                    meta:{
                        title: '班级列表',
                    },
                    component:() => import('../views/teacher/ClassManage/TeacherClass.vue')
                    },
                    {
                        path:'/TeacherClassDetail',
                        name:'TeacherClassDetail',
                        meta:{
                            title: '班级详情',
                        },
                        component:() => import('../views/teacher/ClassManage/TeacherClassDetail.vue')
                    },
                    {
                        path:'/TeacherClassStudent',
                        name:'TeacherClassStudent',
                        meta:{
                            title: '班级学生',
                        },
                        component:() => import('../views/teacher/ClassManage/TeacherClassStudent.vue')
                    },
                    {
                        path:'/TeacherCreateCourse',
                        name:'TeacherCreateCourse',
                        meta:{
                            title: '课程创建',
                        },
                        component:() => import('../views/teacher/CourseManage/TeacherCreateCourse.vue')
                    },
                ]
            },
            {
                path:'/TeacherCourse',
                name:'TeacherCourse',
                meta:{
                    title: '课程管理',
                },
                component:() => import('../views/teacher/CourseManage/TeacherCourse.vue'),
            },
            {
                path:'/TeacherCourse',
                name:'TeacherCourse',
                meta:{
                    title: '教师课程',
                },
                component:() => import('../views/teacher/CourseManage/TeacherCourse.vue'),
            },
            //课程内容创编
            {
                path:'/TeacherCourseContent',
                name:'TeacherCourseContent',
                meta:{
                    title: '课程内容',
                },
                component:() => import('../views/teacher/CourseManage/TeacherCourseContent.vue'),
                children:[

                    {
                        path:'/TeacherCoursePractice',
                        name:'TeacherCoursePractice',
                        meta:{
                            title: '课程练习',
                        },
                        component:() => import('../views/teacher/PracticeManage/TeacherCoursePractice.vue')
                    },
                    {
                        path:'/TeacherExam',
                        name:'TeacherExam',
                        meta:{
                            title: '课程考试管理',
                        },
                        component:() => import('../views/teacher/ExamManage/TeacherExam.vue')
                    },
                    {
                        path:'/TeacherFile',
                        name:'TeacherFile',
                        meta:{
                            title: '课件管理',
                        },
                        component:() => import('../views/teacher/FileManage/TeacherFile.vue')
                    },
                    {
                        path:'/TeacherVideo',
                        name:'TeacherVideo',
                        meta:{
                            title: '课程视频',
                        },
                        component:() => import('../views/teacher/VideoManage/TeacherVideo.vue')
                    },
                    {
                        path:'/TeacherCourseSummary',
                        name:'TeacherCourseSummary',
                        meta:{
                            title: '课程大纲',
                        },
                        component:() => import('../views/teacher/CourseManage/TeacherCourseSummary.vue')
                    },
                    {
                        path:'/TeacherCourseDetail',
                        name:'TeacherCourseDetail',
                        meta:{
                            title: '课程详情',
                        },
                        component:() => import('../views/teacher/CourseManage/TeacherCourseDetail.vue')
                    },
                    {
                        path:'/TeacherCreatePractice',
                        name:'TeacherCreatePractice',
                        meta:{
                            title: '创建练习',
                        },
                        component:() => import('../views/teacher/PracticeManage/TeacherCreatePractice.vue')
                    },
                    {
                        path:'/TeacherCreateExam',
                        name:'TeacherCreateExam',
                        meta:{
                            title: '创建考试',
                        },
                        component:() => import('../views/teacher/ExamManage/TeacherCreateExam.vue')
                    },
                ]
            },
            //教师题目创编
            {
                path:'/Question',
                name:'Question',
                meta:{
                    title: '题目创编',
                },

                children:[
                    {
                        path:'/QuestionList',
                        name:'QuestionList',
                        meta:{
                            title: '问题列表',
                        },
                        component:() => import('../views/teacher/QuestionManage/QuestionList.vue')
                    },
                    {
                        path:'/CreateRadioQuestion',
                        name:'CreateRadioQuestion',
                        meta:{
                            title: '单选题创编',
                        },
                        component:() => import('../views/teacher/QuestionManage/CreateRadioQuestion.vue')
                    },
                    {
                        path:'/FillInBlanksQuestion',
                        name:'FillInBlanksQuestion',
                        meta:{
                            title: '填空题创编',
                        },
                        component:() => import('../views/teacher/QuestionManage/FillInBlanksQuestion.vue')
                    },
                    {
                        path:'/MultipleChoiceQuestions',
                        name:'MultipleChoiceQuestions',
                        meta:{
                            title: '多选题创编',
                        },
                        component:() => import('../views/teacher/QuestionManage/MultipleChoiceQuestions.vue')
                    },
                    {
                        path:'/ShortAnswerQuestion',
                        name:'ShortAnswerQuestion',
                        meta:{
                            title: '简答题创编',
                        },
                        component:() => import('../views/teacher/QuestionManage/ShortAnswerQuestion.vue')
                    },
                    {
                        path:'/TrueOrFalseQuestion',
                        name:'TrueOrFalseQuestion',
                        meta:{
                            title: '判断题创编',
                        },
                        component:() => import('../views/teacher/QuestionManage/TrueOrFalseQuestion.vue')
                    },
                ]
            },
            //教师组卷管理
            {
                path:'/GroupScroll',
                name:'GroupScroll',
                meta:{
                    title: '组卷管理',
                },
                children:[
                    {
                        path:'/ExamList',
                        name:'ExamList',
                        meta:{
                            title: '考试组卷',
                        },
                        component:() => import('../views/teacher/GroupScrollManage/ExamList.vue')
                    },
                    {
                        path:'/PracticeList',
                        name:'PracticeList',
                        meta:{
                            title: '练习组卷',
                        },
                        component:() => import('../views/teacher/GroupScrollManage/PracticeList.vue')
                    },
                ]
            },
            //教师答卷分析
            {
                path:'/AnalysisManage',
                name:'AnalysisManage',
                meta:{
                    title: '分析管理',
                },
                children:[
                    {
                        path:'/ExamAnalysis',
                        name:'ExamAnalysis',
                        meta:{
                            title: '试卷分析',
                        },
                        component:() => import('../views/teacher/AnalysisManage/ExamAnalysis.vue')
                    },
                    {
                        path:'/PracticeAnalysis',
                        name:'PracticeAnalysis',
                        meta:{
                            title: '练习卷分析',
                        },
                        component:() => import('../views/teacher/AnalysisManage/PracticeAnalysis.vue')
                    },
                ]
            },
            //教师答卷管理
            {
                path:'/AnswerManage',
                name:'AnswerManage',
                meta:{
                    title: '答卷管理',
                },
                children:[
                    {
                        path:'/CorrectComplete',
                        name:'CorrectComplete',
                        meta:{
                            title: '批改完成',
                        },
                        component:() => import('../views/teacher/AnswerManage/CorrectComplete.vue')
                    },
                    {
                        path:'/CorrectList',
                        name:'CorrectList',
                        meta:{
                            title: '批改列表',
                        },
                        component:() => import('../views/teacher/AnswerManage/CorrectList.vue')
                    },
                ]
            },
            //教师组卷管理
            {
                path:'/GroupScrollManage',
                name:'GroupScrollManage',
                meta:{
                    title: '组卷管理',
                },
                children:[
                    {
                        path:'/ExamList',
                        name:'ExamList',
                        meta:{
                            title: '考试组卷',
                        },
                        component:() => import('../views/teacher/GroupScrollManage/ExamList.vue')
                    },
                    {
                        path:'/PracticeList',
                        name:'PracticeList',
                        meta:{
                            title: '练习创编',
                        },
                        component:() => import('../views/teacher/GroupScrollManage/PracticeList.vue')
                    },
                ]
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    }
    // else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    //     // 如果没有权限，则进入403
    //     next('/403');
    // }
    else {
        next();
    }
});

export default router;
