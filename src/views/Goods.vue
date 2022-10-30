<template>
    <div class="goods">
      <Nav :is-show="false"></Nav>
      <div class="goods-main">
        <SubNav :sub-nav-data="navData"></SubNav>
        <div class="banner">
          <img src="../assets/img/banner.4c6b6225.png" alt="">
        </div>
        <dl class="classify">
          <dt>排序：</dt>
          <dd v-for="item, index in option" :key="index">{{item.txt}}</dd>
        </dl>
        <dl class="classify">
          <dt>分类：</dt>
          <dd v-for="item,index in type" :key="index">{{item.val}}</dd>
        </dl>
        <div class="list">
          <ListItem class="list-item" v-for="item in goodsData" :key="item.id" :item="item"></ListItem>
        </div>
      </div>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import SubNav from '@/components/SubNav.vue'
import ListItem from '@/components/ListItem.vue'
import { getGoodsFun } from '../api/detail-api'
export default {
  components: {
    Nav,
    SubNav,
    ListItem
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
        did: 0,
        type: 0,
        min: 0,
        max: 10000,
        keyword: ''
      },
      option: [
        { min: 0, max: 0, txt: '全部' },
        { min: 0, max: 10000, txt: '我能兑换的' },
        { min: 0, max: 500, txt: '0-500个' },
        { min: 500, max: 1000, txt: '500-1000个' },
        { min: 1000, max: 1500, txt: '1000-1500个' },
        { min: 1500, max: 2500, txt: '1500-2500个' },
        { min: 2500, max: 6500, txt: '2500-6500个' },
        { min: 6500, max: 10000, txt: '6500-10000个' }
      ],
      type: [
        { type: 0, val: '全部' },
        { type: 1, val: '实物礼品' },
        { type: 2, val: '虚拟礼品' }
      ],
      goodsData: []
    }
  },
  created () {
    // 获取参数name
    const name = this.$route.query.name
    // 面包屑的名字更新
    this.navData[1].name = name || '全部商品'

    // 获取搜索关键字
    if (this.$route.query.keyword) {
      this.parmas.keyword = this.$route.query.keyword
    }
    // 搜索框-进行数据请求
    this.getRequest()
  },
  methods: {
    async getRequest () {
      const res = await getGoodsFun(this.parmas)
      console.log('res---', res)
      this.goodsData = res.data
    }
  }

}
</script>
<style lang="scss" scoped>
.goods{
  background: #f5f5f5;
  .goods-main{
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0 50px;
    .banner {
      padding: 20px 0;
    }
    .classify {
      display: flex;
      font-size: 16px;
      padding-bottom: 30px;
      dt {
      color: #333;
      font-weight: bold;
      }
      dd {
        color: #999;
        padding: 0 10px;
        cursor: pointer;
      }
      .active {
        color: #00329B;
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      .list-item {
        margin-right: 20px;
        margin-bottom: 20px;
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}

</style>
