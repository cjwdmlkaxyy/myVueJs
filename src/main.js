import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui' ;
import Echarts from 'echarts';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css'
/******全局样式*****/
import './assets/styles/public-style.scss'
/******引入fa fa-icon******/
import 'font-awesome/css/font-awesome.min.css'
/******引入全局可用的方法**********/
import PublicFun from './components/publicFunc'



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(PublicFun);
Vue.use(Echarts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
