import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/detail/:id',
    // 使用懒加载（组件）
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/goods',
    component: () => import('../views/Goods.vue')
  },
  {
    path: '/user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/free',
    component: () => import('../views/Free.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
