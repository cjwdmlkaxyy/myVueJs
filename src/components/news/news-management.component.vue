<template>
  <div class="c-main">
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
        <el-breadcrumb-item>新闻管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <div class="mainBody">
      <el-row class="pageTile">
        <span>新闻管理</span>
        <span>校园新闻资讯的管理</span>
      </el-row>
      <el-row class="fun-bnt">
        <Toolbar :chart-btn="true" @searchFun="searchFunc($event)"></Toolbar>
      </el-row>
      <el-row style="padding-top: 20px;">
        <el-table class="table" :data="tableData" style="width: 100%;">
          <el-table-column fixed="left" label="#" min-width="50"></el-table-column>
          <el-table-column label="标题" min-width="500"></el-table-column>
          <el-table-column label="作者" min-width="120"></el-table-column>
          <el-table-column label="分类" min-width="120"></el-table-column>
          <el-table-column label="状态" min-width="120"></el-table-column>
          <el-table-column label="发布时间" min-width="120"></el-table-column>
          <el-table-column label="阅读数" min-width="120"></el-table-column>
          <el-table-column label="点赞数" min-width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" min-width="120"></el-table-column>
        </el-table>
      </el-row>
    </div>
  </div>
</template>

<script>
import Toolbar from '../public-component/toolbar.vue';

  export default {
    name: "news-management",
    components: {
      Toolbar
    },
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      searchFunc(e) {
        console.log("received search click message", e);
      }
    }
  };
</script>

<style scoped>
  .fun-bnt {
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
</style>
