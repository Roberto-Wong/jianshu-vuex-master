// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import ArticleList from './components/ArticleList.vue'
import Topic from './components/Topic.vue'
import TopicArticle from './components/TopicArticle.vue'
import Bonus from './components/Bonus.vue'
import Download from './components/Download.vue'
import Login from './components/Login.vue'
// import Pagination from './components/Pagination.vue'
import writeArticle from './components/WriteArticle.vue'
// import StrapPager from './components/StrapPager.vue'

// import router from './router'

import store from '../vuex/store'

Vue.use(VueRouter)
Vue.use(ElementUI)
// Vue.use(VueResource)

/* 路由配置 */
const router = new VueRouter({
  routes: [{
    path: '/home',
    component: Home,
    children: [{
      path: 'article/:type',
      component: ArticleList
    }]
  }, {
    path: '/topic',
    component: Topic,
    children: [{
      path: 'topic_article/:type',
      component: TopicArticle
    }]
  }, {
    path: '/article/:id',
    component: Article
  }, {
    path: '/bonus',
    component: Bonus
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/download',
    component: Download
  }, {
    path: '/write',
    component: writeArticle
  }, {
    path: '/*',
    redirect: '/home/article/hot'
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
