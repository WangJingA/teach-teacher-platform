<template>
  <div class="main">
    <el-row gutter="20">
        <el-col :span="12">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>课程大纲编辑</span>
                <el-button type="primary" class="add-topic-button" @click="addTopic()">添加课程章节节点</el-button>
              </div>
            </template>
            <div class="summary-tree">
                <div class="course-title">
                  <h3>《软件工程》 课程教学大纲</h3>
                </div>
                <div class="course-info">
                  <p><span style="font-weight: bold;margin-bottom: 20px">课程属性</span>：自建课</p>
                  <p><span style="font-weight: bold;margin-bottom: 20px">课程性质</span>：必修课</p>
                  <p><span style="font-weight: bold;margin-bottom: 20px">课程学分</span>：4</p>
                  <p><span style="font-weight: bold;margin-bottom: 20px">开课单位</span>：信息与通信工程学院</p>
                  <!-- 课程简介-->
                  <div class="course-generation">
                    <p style="font-weight: bold;margin-bottom: 10px">课程简介</p>
                    <el-input type="textarea" placeholder="请输入课程简介" rows="6" v-model="summary.courseGeneration"></el-input>
                  </div>
                  <!-- 课程章节-->
                  <div class="course-topic-section"
                       v-for="(courseTopic,index) in topic.topicSection" :key="index"

                  >
                    <div class="topic-template" v-if="topic.topicSection[index].topicTitle != ''">
                      <div style="text-align: center">
                        <h2>{{courseTopic.topicTitle}}</h2>
                      </div>
                      <p>
                        <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px"
                              v-if="topic.topicSection[index].teachDestination != ''"
                        >教学目的和要求</span>
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{courseTopic.teachDestination}}
                      </p>
                      <p>
                        <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px"
                              v-if="topic.topicSection[index].topicDiffer != ''"
                        >教学重点和难点</span>
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{courseTopic.topicDiffer}}
                      </p>
                      <p>
                        <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px"
                              v-if="topic.topicSection[index].topicTitle != ''"
                        >教学内容</span>
                      </p>
                      <div v-for="(courseContent,key) in courseTopic.content">
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{courseContent.contentTitle}}
                      </div>
                      <div v-for="(content,con) in courseContent.contentInfo">
                        <p v-if="content.info != ''">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{con+1}}.{{content.info}}</p>
                      </div>
                      </div>
                      <el-button type="primary" class="delete-section" @click="delSection(index)">删除章节</el-button>
                      <el-button type="primary" class="update-section" @click="updateSection(index)">修改章节</el-button>
                    </div>

                  </div>
                </div>
            </div>
          </el-card>
        </el-col>
      <!-- 编辑同时预览--->
        <el-col :span="12">
          <el-card>
            <div class="summary-display">
              <div class="summary-tree">
                <div class="course-title">
                  <h3>《软件工程》 课程教学大纲</h3>
                </div>
                <div class="course-info">
                  <p><span style="font-weight: bold;margin-bottom: 20px">课程属性</span>：自建课</p>
                  <p><span style="font-weight: bold;margin-bottom: 20px">课程性质</span>：必修课</p>
                  <p><span style="font-weight: bold;margin-bottom: 20px">课程学分</span>：4</p>
                  <p><span style="font-weight: bold;margin-bottom: 20px">开课单位</span>：信息与通信工程学院</p>
                  <div class="course-generation">
                    <p style="font-weight: bold;margin-bottom: 10px">课程简介</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{summary.courseGeneration}}</p>
                  </div>
                  <!-- 课程章节-->
                  <div class="course-topic-section"
                       v-for="(courseTopic,index) in topic.topicSection" :key="index"

                  >
                    <div class="topic-template" v-if="topic.topicSection[index].topicTitle != ''">
                      <div style="text-align: center">
                        <h2>{{courseTopic.topicTitle}}</h2>
                      </div>
                      <p>
                        <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px"
                              v-if="topic.topicSection[index].teachDestination != ''"
                        >教学目的和要求</span>
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{courseTopic.teachDestination}}
                      </p>
                      <p>
                        <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px"
                              v-if="topic.topicSection[index].topicDiffer != ''"
                        >教学重点和难点</span>
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{courseTopic.topicDiffer}}
                      </p>
                      <p>
                        <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px"
                              v-if="topic.topicSection[index].topicTitle != ''"
                        >教学内容</span>
                      </p>
                      <div v-for="(courseContent,key) in courseTopic.content">
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{courseContent.contentTitle}}
                        </div>
                        <div v-for="(content,con) in courseContent.contentInfo">
                          <p v-if="content.info != ''">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{con+1}}.{{content.info}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>
  <!-- 课程大纲章节编辑-->
  <div>
    <el-dialog v-model="summary.addTopicVisible" title="<<课程章节编辑>>">
      <!-- 编辑模板,编辑按这个格式编辑-->
      <span class="template-title">编辑模板展示,请按照模板编辑</span>
      <div class="topic-template">
        <div style="text-align: center">
          <h2>第一章 软件工程</h2></div>
          <p>
            <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px">教学目的和要求</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解软件工程的基本知识，软件生产的三个阶段，软件危机产生的形式，
            软件工程的七个特点，理解软件工程的特点和定义。
          </p>
          <p>
            <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px">教学重点和难点</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;掌握软件工程危机，掌握软件工程七条基本原理。
          </p>
        <p>
          <span style="font-weight: bold;font-size: 20px;margin-bottom: 20px">教学内容</span>
        </p>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一.软件
        </div>
        <div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二.软件工程</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.软件发展</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.软件危机</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.软件工程基本原理</p>
        </div>
      </div>
      <span class="template-title">内容编辑</span>
      <div class="content-edit">
        <div>
          <p class="topic-title">章节标题：</p>
          <el-input type="text" v-model="topicEdit.topicTitle" placeholder="请输入章节标题" class="topic-input"></el-input>
        </div>
        <p class="topic-title">教学目的和要求</p>
        <el-input type="textarea"
                  rows="6" v-model="topicEdit.teachDestination"
                  placeholder="请输入教学目的和要求"
                  style="width: 34%;margin-left: 36%"
        >
        </el-input>
        <p class="topic-title">教学重点和难点</p>
        <el-input type="textarea"
                  rows="6" v-model="topicEdit.topicDiffer"
                  placeholder="请输入教学重点和难点"
                  style="width: 34%;margin-left: 36%"
        >
        </el-input>
        <p class="topic-title">教学内容</p>
        <div id="addCourseContent" v-for="(content,key) in topicEdit.content">
        <p class="topic-title">标题</p>
        <el-input type="text" v-model="topicEdit.content[key].contentTitle" placeholder="请输入章节标题" class="topic-input"></el-input>

        <p class="topic-title">内容</p>
          <div id="addContent" v-for="(info,index) in topicEdit.content[key].contentInfo" :key="index">
              <el-input type="text" v-model="topicEdit.content[key].contentInfo[index].info" placeholder="请输入内容" class="topic-input"></el-input>
              <el-button type="primary" class="del-content" v-if="index != 0" @click="deleteContent(key,index)">删除内容节点</el-button>
          </div>
              <el-button type="primary" class="add-content" @click="addContent(key)">增加内容节点</el-button>
              <el-button type="primary" class="add-content" v-if="key != 0" @click="deleteCourseContent(key)">删除教学内容节点</el-button>
        </div>
        <el-button type="primary" class="add-course-content" @click="addCourseContent">增加教学内容</el-button>
      </div>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="summary.addTopicVisible = false">取消</el-button>
        <el-button type="primary" @click="sumbitTopic">
          提交编辑
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {ElMessage, ElMessageBox, ElNotification} from "element-plus";

//弹出框关闭前提示
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}
const summary = reactive({
  courseGeneration:'',
  topic:[],
  addTopicVisible:false
})
//课程大纲编辑的章节大纲
const topic = reactive({
   topicSection:[{
     topicTitle:'',
     teachDestination:'',
     topicDiffer:'',
     content:[{
       contentTitle:'',
       contentInfo:[{
         info:''
       }]
     }]
   }]
})
//section 节点
const topicEdit = reactive({
  topicTitle:'',
  teachDestination:'',
  topicDiffer:'',
  content:[{
    contentTitle:'',
    contentInfo:[{
      info:''
    }]
  }]
})

//添加课程章节按钮函数
const addTopic = ()=>{
  summary.addTopicVisible = true
}
//提交章节编辑
const sumbitTopic = () =>{
  //判断标题，教学目的，教学难点是否为空
  if(topicEdit.topicTitle == '' || topicEdit.topicDiffer == '' || topicEdit.teachDestination == ''){
    ElMessage.warning({
      message:'标题，教学目的，教学难点不能为空'
    })
    return
  }
  //具有教学内容但没有教学标题，提示标题不能为空
  topicEdit.content.forEach((info)=>{
    info.contentInfo.forEach((content)=>{
      if (content.info != '' && info.contentTitle == ''){
        ElMessage.warning({
          message:'教学内容存在，标题不能为空'
        })
        summary.addTopicVisible = true
        return
      }
    })
  })
  //拼接topic章节
    topic.topicSection.push(topicEdit)
    // topicEdit.topicDiffer = ''
    // topicEdit.topicTitle = ''
    // topicEdit.teachDestination = ''
    // topicEdit.content = []
    summary.addTopicVisible = false
}
//addContent 增加内容
const addContent = (key:number) =>{
  let content = { info:''}
  topicEdit.content[key].contentInfo.push(content)
  console.log(topicEdit.content[key].contentInfo)
}
//deleteContent 删除内容节点
const deleteContent = (key:number,index:number) =>{
  topicEdit.content[key].contentInfo.splice(index)
}
//addCourseContent 增加教学内容节点
const  addCourseContent = () =>{
    let content = {
      contentTitle:'',
      contentInfo:[{
        info:''
      }]
    };
    topicEdit.content.push(content)
}
//deleteCourseContent 删除教学内容节点
const deleteCourseContent = (key:number) =>{
  topicEdit.content.splice(key)
}
//删除章节节点
const delSection = (index:number) =>{
  topic.topicSection.splice(index)
}

//修改章节节点
const updateSection = (index:number)=>{

}
onMounted(()=>{
  ElNotification({
    title:'请开始你的编辑',
    type:"success",
    message:  'please start your course summary edit'
  })
})
</script>

<style scoped>
.main{
  width: 100%;

  background-color: #ffffff;
}
.el-col{

  height: 100%;
}
.summary-tree{
  font-size: 20px;
  margin: 3%;
}
.course-title{
  font-size: 30px;
  text-align: center;
}
.course-info{
  left: 0;
  font-size: 20px;
}
.course-generation{
  margin-top: 20px;
  left: 0;
}
.topic-input{
  width: 34%;
  height: 40px;
  margin-left: 36%;
  margin-top: 10px;
}
.add-topic-button{
  width: 220px;
  height: 40px;
  margin-left: 40%;
}
.topic-template{
  left: 30px;
  font-size: 20px;
  border: gray 1px dashed;
}
.template-title{
  font-size: 20px;
  margin-bottom: 10px;
}
.content-edit{
  left: 100px;
  font-size: 20px;
  //border: gray 1px dashed;
}
.topic-title{
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 36%;
}
.el-dialog{
  height: 1024px;
}
.add-course-content{
  width: 250px;
  margin-left: 40%;
  height: 40px;
  margin-top: 20px;
}
.add-content{
  width: 140px;
  height: 40px;
  margin-top: 20px;
  margin-left: 45%;
}
.del-content{
  margin-left: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.course-topic-section{
  margin-top: 30px;
}
.delete-section{
  height: 30px;
  width: 150px;
  margin-left: 30%;
}
.update-section{
  height: 30px;
  width: 150px;
  margin-left: 2%;
}
</style>
