<template>
    <div>
        <Nav :is-show="false"></Nav>
        detail
    </div>
</template>
<script>
// import axios from 'axios'
import request from '../axios/request'
// import { detailApi } from '../api/detail-api.js'
import Nav from '../components/Nav.vue'
export default {
  // 数据
  data () {
    return {
      nav: [], // 面包屑导航
      productInfo: {}, // 商品详情
      themYouCanBuy: [] // 还可以兑换的商品
    }
  },
  // 创建声明周期
  created () {
    // axios.get('http://www.520it.com:8081/cms/products/124').then((res) => {
    //   console.log(res)
    //   this.nav = res.data.nav
    //   this.productInfo = res.data.data.productInfo
    //   this.themYouCanBuy = res.data.data.themYouCanBuy
    // })

    request.get('http://www.520it.com:8081/cms/products/124').then(res => {
      console.log(res)
      this.nav = res.data.nav
      this.productInfo = res.data.productInfo
      this.themYouCanBuy = res.data.themYouCanBuy
    })

    // detailApi.getDetailFun(124).then(res => {
    //   console.log(res)
    // })
  },
  components: {
    Nav
  }

}
</script>
<style>

</style>
