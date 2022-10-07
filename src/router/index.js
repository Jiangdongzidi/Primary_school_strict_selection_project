import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirce: '/detail'
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/home',
    // 使用懒加载（组件）
    component: () => import('../views/Home.vue')
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
  routes
})

export default router
