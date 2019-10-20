<template>
  <div class="c-main">
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
        <el-breadcrumb-item>发布新闻</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <div class="mainBody">
      <el-row class="pageTile">
        <span>发布新闻</span>
        <span>发布校园新闻资讯</span>
      </el-row>
      <el-row class="form">
        <el-form ref="ruleForm" label-width="70px">
          <el-form-item label="标题" prop="name">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-upload list-type="picture-card" action="https://jsonplaceholder.typeicode.com/posts/"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="分类">
            <el-select placeholder="请选择" v-model="newsTypeModel">
              <el-option v-for="item in newsType"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input type="textarea" :row="2" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <mavon-editor v-model="handbook" ref=md style="height: 400px;"
                          @change="getHtmlContent"
                          @imgAdd="imgAdd"
                          @imgDel="imgDel"></mavon-editor>
          </el-form-item>
          <el-form-item label="选项">
            <el-checkbox :checked="true">允许评论</el-checkbox>
            <el-checkbox style="margin-left: 25px;">置顶</el-checkbox>
          </el-form-item>
          <el-form-item label="">
            <el-button type="warning">模拟</el-button>
            <el-button type="primary">发布资讯</el-button>
            <el-button type="success">保存草稿</el-button>
            <el-button type="danger">取消</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
    
</template>

<script>
  export default {
    name: "news-publish",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        newsType: [
          {label: '失物招领', value: 'lostAndFound'},
          {label: '重要消息', value: 'important'},
        ],
        newsTypeModel: null,
        markdownOption: {
          bold: true, // 粗体
        },
        handbook: ""
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      getHtmlContent(render) {
        console.log(render);
      },
      imgAdd(fileName, file) {
        console.log(fileName);
        console.log(file);
      },
      imgDel(fileName) {
        console.log(fileName)
      }
    }
  };
</script>

<style scoped>
  .form {
    padding: 20px 0;
    margin-top: 20px;
  }

</style>
