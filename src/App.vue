<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/login"></router-link>
    </div>-->
    <router-view />
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  html, body {
    margin:0;
    padding: 0;
  }
  html, body, #app, .frame, .frame > section{
    height: 100%;
  }
  .el-main {
    text-align: initial !important;
  }
</style>
