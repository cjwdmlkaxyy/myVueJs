<template>
    <div class="frame">
        <el-container>
            <el-header class="flex flex-justifyContent-between frame-header">
                <div class="header-left">
                    <div class="log" v-show="isCollaps"><img src="../assets/logo1.png"></div>
                    <span class="color-white" style="margin: 0 20px;"><strong>CUIT&nbsp;&nbsp;</strong>校园服务平台管理系统</span>
                    <el-tooltip effect="dark" content="点击这里可以展开和收起侧栏菜单" placement="right-start">
                        <el-button style="font-weight: bold;" type="text" size="mini" @click="targgetNav"
                                   icon="el-icon-menu" >切换菜单
                        </el-button>
                    </el-tooltip>
                </div>
                <div class="header-right">
                    <div class="switch-theme">
                        <i class="fa fa-moon-o"></i>
                        <el-switch v-model="switchTheme"
                                   active-value="light"
                                   inactive-value="dark"
                                   @change="saveTheme"
                        ></el-switch>
                        <i class="fa fa-sun-o"></i>
                    </div>
                    <span class="color-white" style="width: 160px;">{{nowTime}}</span>
                    <div class="header-picture">
                        <img src="../assets/head-portrait.jpg">
                    </div>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            chen<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <i class="el-icon-bell"></i>通知
                                <el-badge class="mark" :value="12"></el-badge>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <i class="c-icon-user"></i>
                                <el-button type="text" @click="logout">退出登录</el-button>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <el-aside class="frame-aside">
                    <div class="logo" v-show="!isCollaps"><img src="../assets/logo1.png" alt="logo"></div>
                    <el-menu class="el-menu-vertical-demo" background-color="#4f5254" text-color="#fff"
                             :collapse="isCollaps"
                             active-text-color="#33a0d7"
                             :unique-opened="true"
                             style="border: none;"
                             :default-active="activeRouterIdx"
                             :router="true"
                    >
                        <el-menu-item index="/dashboard">
                            <i class="fa fa-home"></i>
                            <span>首页</span>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="fa fa-newspaper-o"></i>
                                <span>新闻资讯</span>
                            </template>
                            <el-menu-item index="/newsPublish">新闻发布</el-menu-item>
                            <el-menu-item index="/newsMgt">新闻管理</el-menu-item>
                            <el-menu-item index="/newsClass">新闻分类</el-menu-item>
                            <el-menu-item index="/commentsMgt">评论管理</el-menu-item>
                            <el-menu-item index="/slideshow">轮播图管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="fa fa-users"></i>
                                <span>用户</span>
                            </template>
                            <el-menu-item>用户管理</el-menu-item>
                            <el-menu-item>角色与权限</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
  export default {
    name: "frame.vue",
    data() {
      return {
        isCollaps: false,
        nowTime: null,
        switchTheme: localStorage.getItem('Frame_Theme') ? localStorage.getItem('Frame_Theme') : 'light'
      }
    },
    computed: {
        activeRouterIdx: function() {
            console.log(this.$route.path)
            return this.$route.path;
        }
    },
    methods: {
      targgetNav() {
        if (this.isCollaps) {
          this.isCollaps = false;
        } else {
          this.isCollaps = true;
        }
      },
      logout() {
        this.tips('注销成功', 'success');
        sessionStorage.removeItem('Login_UserInfos');
        this.$router.push('/login');
      },
      saveTheme(e) {
        localStorage.setItem('Frame_Theme', e);
        this.changeTheme();
      },
      changeTheme() {
        const theme = this.switchTheme;
        const body = document.getElementsByTagName('body')[0];
        body.setAttribute('data-theme-style', theme); // 设置data-theme-style 属性
      }
    },
    created() { // 页面加载完之前执行

    },
    mounted() { // 页面加载完之后执行
      setInterval(() => {
        this.nowTime = this.showTime();
      }, 1000);
      // 设置默认的主题颜色
      this.changeTheme();
    },
    watch: {
      switchTheme(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "../assets/styles/base";
    @keyframes bg {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 100% 0;
        }
    }
    @keyframes boxShow {
        0% {
            box-shadow: 0 0 0px 0px #7b7b7b;
        }
        100% {
            box-shadow: 0 0 25px 10px #7b7b7b;
        }
    }


    .el-main {
        background-color: #eef3f8;
        color: #333;
        text-align: center;
        height: 100%;
    }
    .header-left{
        display: flex;

        .log {
            display: flex;
            align-items: center;
        }
        .log img{
            width: 30px;
            height: 30px;
            border: 0;
        }
    }
    .header-right {
        display: flex;
        align-items: center;
        .header-picture {
            display: flex;
            align-items: center;
            margin: 0 10px;
        }
        .header-picture img{
            width: 30px;
            height: 30px;
            border-radius: 6px;
        }
    }
    .frame-header {
        overflow: hidden;
        height: 50px !important;
        color: $fontColor2;
        line-height: 50px;
        background-color: $baseColor1;
        background-image: linear-gradient(120deg, $baseColor1 10%, #7bbdbc 80%);
        background-size: 200% 100%;
        animation: bg 10s ease-in-out infinite alternate;
    }
    .frame-aside {
        background-color: $baseColor2;
        color: #333;
        width: auto !important;
        .fa{
            font-size: 18px;
            margin-right: 8px;
        }
        .logo {
            width: 100%;
            text-align: center;
            padding: 35px 0;
            img {
                width: 40%;
                border-radius: 50%;
                animation: boxShow 2.5s linear infinite alternate;
            }
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .switch-theme {
        padding-right: 20px;
        display: flex;
        justify-content: center;

        i {
            font-size: 26px;
        }
        i.fa-moon-o {
            color: #005da0;
        }
        i.fa-sun-o {
            color: #d8d821;
        }
        .el-switch {
            margin: auto 8px;
        }
    }
</style>
