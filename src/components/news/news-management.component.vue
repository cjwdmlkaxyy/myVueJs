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
    </div>
  </div>
</template>

<script>
import Toolbar from '../public-component/toolbar.vue';

  export default {
    name: "news-management",
    components: {
      Toolbar
    }
  };
</script>

<style scoped>

</style>
