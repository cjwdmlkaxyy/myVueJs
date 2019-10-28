import Vue from "vue";
import Router from "vue-router";
import Login from "./components/user/login";
import Frame from './components/frame';
import Dashboard from './components/home/dashboard';
import NewsClass from './components/news/news-class.component';
import CommentMgt from './components/news/comments-management.component';
import NewsPublish from './components/news/news-publish.component';
import SlideShow from './components/news/slideshow.component';
import NewsMgt from './components/news/news-management.component'

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
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
      redirect: 'Dashboard',
      children: [
        // {path: '/', redirect: 'Dashboard'},
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/newsClass',
          component: NewsClass
        },
        {
          path: '/commentsMgt',
          component: CommentMgt
        },
        {
          path: '/newsPublish',
          component: NewsPublish
        },
        {
          path: '/slideShow',
          component: SlideShow
        },
        {
          path: '/newsMgt',
          component: NewsMgt
        }
      ]
    }
  ]
});
