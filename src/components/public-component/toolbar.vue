<template>
    <div>
        <el-button type="primary" @click="search">
            <i class="fa fa-search"></i>
        </el-button>
        <el-button type="primary">
            <i class="fa fa-refresh"></i>
        </el-button>
        <el-button type="primary">
            <i class="fa fa-plus"></i>
        </el-button>
        <el-button type="primary">
            <i class="fa fa-download"></i>
        </el-button>
        <el-button type="success" v-if="chartBtn">
            <i class="fa fa-bar-chart"></i>
        </el-button>
    </div>
</template>

<script>
  export default {
    name: "app-toolbar",
    props: {
      chartBtn: true,

    },
    methods: {
        search() {
          this.$emit('searchFun', 'click search');
        }
    }
  };
</script>

<style scoped>

</style>
