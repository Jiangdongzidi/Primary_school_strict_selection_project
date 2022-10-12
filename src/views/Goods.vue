<template>
    <div>
      <Nav :is-show="false"></Nav>
      <SubNav :sub-nav-data="navData"></SubNav>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import SubNav from '@/components/SubNav.vue'
import { getGoodsFun } from '../api/detail-api'
export default {
  components: {
    Nav,
    SubNav
  },
  data () {
    return {
      navData: [
        {
          link: '#',
          name: '首页'
        },
        {
          link: '#',
          name: '精品推荐'
        }
      ],
      parmas: {
        dis: 0,
        type: 0,
        min: 0,
        max: 0,
        keyword: ''
      }
    }
  },
  created () {
    // 获取参数name
    const name = this.$route.query.name
    // 面包屑的名字更新
    this.navData[1].name = name
    // 搜索框-进行数据请求
    this.getRequest()
  },
  methods: {
    async getRequest () {
      const res = await getGoodsFun(this.parmas)
      console.log('res', res)
    }
  }

}
</script>
<style>

</style>
