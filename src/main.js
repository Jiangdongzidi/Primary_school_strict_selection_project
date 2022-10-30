import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SlideVerify from 'vue-monoplasty-slide-verify'
// 全局格式化代码
import 'reset-css'
Vue.config.productionTip = false
Vue.use(SlideVerify)
// 设置图片前缀
Vue.prototype.imgUrl = 'https://sc.wolfcode.cn'
// 全局过滤器
Vue.filter('imgUrlFormat', (path) => {
  return 'https://sc.wolfcode.cn' + path
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
