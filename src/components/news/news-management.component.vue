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
        <Toolbar></Toolbar>
      </el-row>
      <el-row style="padding-top: 20px;">
        <el-table class="table" :data="tableData" style="width: 100%;">
          <el-table-column fixed="left" label="#" width="50"></el-table-column>
          <el-table-column label="标题" width="490"></el-table-column>
          <el-table-column label="作者" width="120"></el-table-column>
          <el-table-column label="分类" width="120"></el-table-column>
          <el-table-column label="状态" width="120"></el-table-column>
          <el-table-column label="发布时间" width="120"></el-table-column>
          <el-table-column label="阅读数" width="120"></el-table-column>
          <el-table-column label="点赞数" width="120"></el-table-column>
          <el-table-column label="操作" width="120"></el-table-column>
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
