// 路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 1. 创建路由组件
// 2. 将路由与组件进行映射

import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/user', component: User },
      { path: '/mall', component: Mall },
      { path: '/page1', component: PageOne },
      { path: '/page2', component: PageTwo },
    ]
  },

]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router