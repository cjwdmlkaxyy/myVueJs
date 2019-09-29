import Vue from "vue";
import Router from "vue-router";
import Login from "./components/user/login";
import Frame from './components/frame';
import Dashboard from './components/home/dashboard'

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      redirect: "login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: '/',
      name: 'Frame',
      component: Frame,
      children: [
        {path: '/', redirect: 'Dashboard'},
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
});
