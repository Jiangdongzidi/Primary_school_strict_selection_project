<template>
    <div class="home">
        <!-- 2、使用属性实现 -->
    <Nav :is-show="true">
        <!-- 1、使用插槽 -->
      <!-- <img slot="banner" src="../assets/img/banner.f559b49d.png" alt=""> -->
    </Nav>
    <div class="list-content">
      <!-- 精品 -->
      <List :list-data="recommend"></List>
      <!-- 热门 -->
      <List :list-data="hot">
        <img slot="left-img" src="../assets/img/hot.png" alt="">
        <img slot="banner" src="../assets/img/ad.4c6b6225.png" alt="">
      </List>
    </div>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import List from '@/components/List.vue'
import { getRecommendFun, getHotFun } from '../api/detail-api'
export default {
  data () {
    return {
      banner: [],
      recommend: [],
      hot: []
    }
  },
  components: {
    Nav,
    List
  },
  async created () {
    // 获取首页数据
    this.getRequest()
  },
  methods: {
    async getRequest () {
      // 精品
      const recommendData = await getRecommendFun()
      this.recommend = recommendData.data
      console.log('recommendData.data', recommendData.data)

      // 热门
      const hotData = await getHotFun()
      this.hot = hotData.data
      console.log('hotData.data', hotData.data)
    }

  }
}
</script>
<style lang="scss" scoped>
  .home {
    .list-content{
      background: #F5F5F5;
      padding-top: 33px;
    }
  }

</style>
