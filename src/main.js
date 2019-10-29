import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui' ;
import echarts from 'echarts';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
/******全局样式*****/
import './assets/styles/public-style.scss'
/*******theme*******/
import './assets/styles/theme.scss'
/******引入fa fa-icon******/
import 'font-awesome/css/font-awesome.min.css'
/******引入全局可用的方法**********/
import PublicFun from './components/publicFunc'



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(PublicFun);
Vue.use(mavonEditor);
// Vue.use(echarts);
Vue.prototype.$echarts = echarts;

// 添加路由守卫
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login') {
    const useInfos = JSON.parse(sessionStorage.getItem('Login_UserInfos')) ? true : false;
    if (useInfos) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
