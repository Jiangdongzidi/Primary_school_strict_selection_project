<template>
    <div id="detail">
        <Nav :is-show="false"></Nav>
        <div class="main">
          <SubNav :sub-nav-data="nav"></SubNav>
          <main>
            <!-- 整一行 -->
            <div class="content">
              <!-- 商品详情 -->
              <!-- <img :src="imgUrl + productInfo.coverImg" alt=""> -->
              <!-- <img :src="productInfo.coverImg | formatImgUrl" alt=""> -->
              <div class="left">
                <dl>
                  <dt>
                     <img :src="productInfo.coverImg | formatImgUrl" alt="">
                  </dt>
                  <dd>
                    <ul>
                      <!-- 实现鼠标移入后，改变图片的显示 -->
                      <li v-for="item, index in productInfo.imgAltas"
                        :key="index"
                        @mouseenter="bigImgUrlHandle(index)"
                        :style=" {opacity: currentImgIndex === index  ? 1: 0.5}">
                        <img :src="item.src | formatImgUrl" alt="">
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div class="right">
                <h3 class="title">{{productInfo.seriesTitle}}</h3>
                <p class="sub-title">{{productInfo.seriesSubTitle}}</p>
                <p class="coin">{{productInfo.coin}}积分</p>
                <dl class="parameter" v-for="item,index in productInfo.parameterJson"
                  :key="index"
                 >
                  <dt>{{item.title}}</dt>
                  <dd>
                    <span v-for="it in item.parameters"
                      :key="it.id"
                      :class="it.currentActivate ? 'itemActive' : ''"
                      @click="asideClickHandle(it.id)">
                      {{it.title}}
                    </span>
                  </dd>
                </dl>
                <p class="count"><span>数量</span>*礼品库存{{productInfo.stock}}件</p>
                <p class="step">
                  <!-- 方法一 -->
                  <!-- <span @click="stepHandleFun1">-</span><span>{{stepNum}}</span><span @click="stepHandleFun2">+</span> -->
                  <!-- 方法二 -->
                  <span @click="stepHandleFun(-1)">-</span><span>{{stepNum}}</span><span @click="stepHandleFun(1)">+</span>
                </p>
                <div class="btn">
                  <button>加入购物车</button>
                  <button>立即兑换</button>
                </div>
                <div class="like">
                  <img src="../assets/img/love.png" alt="">
                  <span>喜欢{{productInfo.like}}</span>
                  <div class="img-box">
                    <div>
                      <img src="../assets/img/wx.png" alt="">
                      <img src="../assets/img/wx.5584e874.png" alt="">
                    </div>
                    <div>
                      <img src="../assets/img/qq.png" alt="">
                    </div>
                    <div>
                      <img src="../assets/img/wb.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside>
              <!-- 侧边 -->
              <h3>你还可以兑换</h3>
              <dl v-for="item in themYouCanBuy" :key = "item.id" @click="asideClickHandle(item.id)">
                <dt>
                  <!-- 注意：此项目返回的图片地址是相对路径，所以按照item.img，不能正确显示图片。需要加工 -->
                  <!-- <img :src="'https://sc.wolfcode.cn' + item.img" alt=""> -->
                  <!-- <img :src="imgUrl + item.img" alt=""> -->
                  <!-- vue 过滤器（管道实现）： 过滤参数 | 过滤函数 -->
                  <img :src="item.img | formatImgUrl" alt="">
                </dt>
                <dd>
                  <p>{{item.name}}</p>
                  <p><span>{{item.coin}}</span> 积分</p>
                </dd>
              </dl>
            </aside>
          </main>
          <!-- 商品详情图与常见问题 -->
          <div class="tabs">
            <ul class="tabs-title">
              <li :class="tabsBool ? 'tabs-active' : ''" @click="tabsBool = true">商品详情</li>
              <li :class="!tabsBool ? 'tabs-active' : ''" @click="tabsBool = false">联系我们</li>
            </ul>
            <ul class="tabs-content">
              <li v-if="tabsBool" v-html="productInfo.description"></li>
              <!-- string对象 -->
              <li v-else>
                <dl>
                  <dt>兑换后运费如何收取？</dt>
                  <dd>商城内大部分实物产品均可包邮，也支持上门自提。虚拟产品则无需运费，可在兑换后直接使用。</dd>
                  <dd>（注：新疆，西藏，内蒙古，青海，海南，宁夏暂不支持包邮，在此地区兑换商品需提前与客服确认运费。）</dd>
                </dl>
                <dl>
                  <dt>兑换后运费如何收取？</dt>
                  <dd>商城内大部分实物产品均可包邮，也支持上门自提。虚拟产品则无需运费，可在兑换后直接使用。</dd>
                  <dd>（注：新疆，西藏，内蒙古，青海，海南，宁夏暂不支持包邮，在此地区兑换商品需提前与客服确认运费。）</dd>
                </dl>
                <dl>
                  <dt>兑换后运费如何收取？</dt>
                  <dd>商城内大部分实物产品均可包邮，也支持上门自提。虚拟产品则无需运费，可在兑换后直接使用。</dd>
                  <dd>（注：新疆，西藏，内蒙古，青海，海南，宁夏暂不支持包邮，在此地区兑换商品需提前与客服确认运费。）</dd>
                </dl>
                <dl>
                  <dt>联系我们</dt>
                  <dd><a href="http://www.wolfcode.cn">www.wolfcode.cn</a></dd>
                  <dd>微信公众号搜索“叩丁狼”</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
// import request from '../axios/request'
import { getDetailFun } from '../api/detail-api'
// import { getDetailFun } from '../api/detail-api'
import Nav from '../components/Nav.vue'
import SubNav from '@/components/SubNav.vue'
export default {
  // 数据
  data () {
    return {
      nav: [], // 面包屑导航
      productInfo: {}, // 商品详情
      themYouCanBuy: [], // 还可以兑换的商品
      currentImgIndex: 0, // 图片小图当前图片的下标
      stepNum: 1, // 选择购买商品的数量
      tabsBool: true
    }
  },
  // // 创建生命周期
  // created () {
  //   // axios.get('http://www.520it.com:8081/cms/products/124').then((res) => {
  //   //   console.log(res)
  //   //   this.nav = res.data.nav
  //   //   this.productInfo = res.data.data.productInfo
  //   //   this.themYouCanBuy = res.data.data.themYouCanBuy
  //   // })

  //   request.get('http://www.520it.com:8081/cms/products/124').then(res => {
  //     console.log(res)
  //     this.nav = res.data.nav
  //     this.productInfo = res.data.productInfo
  //     this.themYouCanBuy = res.data.themYouCanBuy
  //   })

  //   // const res = await getDetailFun(124)
  //   // console.log('异步操作同步化')
  //   // console.log(res)
  // },

  // 创建生命周期
  async created () {
    // axios.get('http://www.520it.com:8081/cms/products/124').then((res)=>{
    //   // console.log(res);
    //   this.nav = res.data.data.nav;
    //   this.productInfo = res.data.data.productInfo;
    //   this.themYouCanBuy = res.data.data.themYouCanBuy;
    // })

    // request.get('/products/124').then(res=>{
    //   console.log(res);
    //   this.nav = res.data.nav;
    //   this.productInfo = res.data.productInfo;
    //   this.themYouCanBuy = res.data.themYouCanBuy;
    // })

    // 异步操作同步化
    // getDetailFun(124).then((res) => {
    //   console.log(res);
    //   this.nav = res.data.nav;
    //   this.productInfo = res.data.productInfo;
    //   this.themYouCanBuy = res.data.themYouCanBuy;
    // });

    // async   await
    // const res = await getDetailFun(124);
    // console.log(res);
    // this.nav = res.data.nav;
    // this.productInfo = res.data.productInfo;
    // this.themYouCanBuy = res.data.themYouCanBuy;

    // 页面回滚
    document.documentElement.scrollTop = 0
    // 接受商品id
    const id = this.$route.query.id
    this.asideClickHandle(id)
  },
  components: {
    Nav,
    SubNav
  },
  methods: {
    async asideClickHandle (id) {
      const res = await getDetailFun(id)
      console.log(res)
      this.nav = res.data.nav
      this.productInfo = res.data.productInfo
      this.themYouCanBuy = res.data.themYouCanBuy
      // 初始化商品展示图下标
      this.currentImgIndex = 0
      // upload/    https://sc.wolfcode.cn/upload/
      this.productInfo.description = this.productInfo.description.replaceAll('upload/', 'https://sc.wolfcode.cn/upload/')
    },
    bigImgUrlHandle (index) {
      // 怎么知道鼠标是移入的那种照片
      // 获取展示图片的路径
      // console.log(this.productInfo.imgAltas[index].src)

      // 优化鼠标重复移入同一张图片
      if (this.currentImgIndex === index) return
      // 修改大图路径
      this.productInfo.coverImg = this.productInfo.imgAltas[index].src
      // 随着鼠标移入的改变，当前小图的下标也改变
      this.currentImgIndex = index
    },
    stepHandleFun1 () {
      if (this.stepNum <= 1) return
      this.stepNum--
    },
    stepHandleFun2 () {
      if (this.stepNum >= this.productInfo.stock) return
      this.stepNum++
    },
    stepHandleFun (num) {
      if ((this.stepNum <= 1 && num === -1) || (this.stepNum >= this.productInfo.stock && num === 1)) {
        return
      }
      this.stepNum += num
    }
  },
  filters: {
    // 过滤图片的路径格式
    formatImgUrl (path) {
      return 'https://sc.wolfcode.cn' + path
    }
  }

}
</script>
<style lang="scss" scoped>
#detail{
  .main{
    width: 1200px;
    margin: 0 auto;
    padding-top: 60px;
    main{
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      .content{
        width: 970px;
        display: flex;
        .left{
          width: 440px;
          margin-right: 30px;
          dl{
            dt{
              height: 440px;
              margin-bottom: 20px;
              img{
                width: 100%;
                height: 440px;
              }
            }
            dd{
              ul{
                display: flex;
                justify-content: space-between;
                li{
                  width: 100px;
                  height: 100px;
                  // opacity: 0.5;
                  img{
                    width: 100px;
                    height: 100px;
                  }
                }
              }
            }
          }
        }
        .right{
          width: 430px;
          h3{
            font-size: 28px;
            color: #000;
            margin-bottom: 15px;
          }
          .sub-title{
            font-size: 14px;
            color: #999;
            line-height: 20px;
            margin-bottom: 26px;
          }
          .coin{
            font-size: 28px;
            font-weight: bold;
            color: #fd604d;
            border-bottom: 1px solid #ECECEC;
            padding-bottom: 22px;
            margin-bottom: 20px;
          }
          dl{
            dt{
              font-size: 16px;
              color: #000;
              line-height: 23px;
              margin-bottom: 14px;
            }
            dd {
              display: flex;
              flex-wrap: wrap;
              span{
                border: 1px solid #D1D1D1;
                padding: 10px 16px;
                color: #D1D1D1;
                margin-right: 20px;
                margin-bottom: 12px;
                cursor: pointer;
              }
              .itemActive{
                border: 1px solid #0A328E;
                color: #0A328E;
              }
            }
          }
          .count{
            margin-top: 18px;
            line-height: 23px;
            font-size: 16px;
            color: #999;
            span{
              color: #000;
              margin-right: 7px;
            }
          }
          .step{
            margin-top: 15px;
            display: flex;
            span{
              border: 1px solid #D1D1D1;
              padding: 10px;
              color: #D1D1D1;
              cursor: pointer;
              &:nth-child(2) {
                border-left: none;
                border-right: none;
                padding: 10px 20px;
                cursor: default;
              }
            }
          }
          .btn {
            display: flex;
            margin-top: 24px;
            button {
              width: 150px;
              height: 46px;
              color: #fff;
              border: none;
              outline: none;
              background: #3dc36b;
              cursor: pointer;
              &:last-child{
                margin-left: 20px;
                background: #fd604d;
              }
            }
          }
          .like {
            display: flex;
            margin-top: 25px;
            align-items: center;
            span{
              font-size: 16px;
              color: #666;
              padding: 0 16px 0 12px;
            }
            .img-box{
              border-left: 1px solid #ececec;
              display: flex;
              div{
                position: relative;
                img{
                  width: 24px;
                  height: 24px;
                  margin-left: 20px;
                  cursor: pointer;
                  &:nth-child(2) {
                    position: absolute;
                    top: -110px;
                    left: -110px;
                    width: 100px;
                    height: 100px;
                    display: none;
                  }
                  &:nth-child(1):hover + :nth-child(2) {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
      aside{
        width: 228px;
        // height: 400px;
        // background-color: #f00;
        position: relative;
        padding-left: 20px;
        box-sizing: border-box;
        // 右侧有一条边框线，方法一使用::before（固定长度时使用）方法二：使用边框线
        border-left: 2px solid #ececec;
        // &::before{
        //   content:"";
        //   background-color: #ececec;
        //   width: 2px;
        //   height: 400px;
        //   // 这个容器属于内联元素,方法一：display。方法二：相对定位
        //   // display: block;
        //   position: absolute;
        //   left: -2px;
        //   top: 0;
        // }
        h3{
          font-size: 18px;
          color: #333;
          line-height: 20px;
          margin-bottom: 20px;
        }
        dl{
          display: flex;
          // 垂直对其
          align-items: center;
          // 改变鼠标表现效果
          cursor: pointer;
          margin-bottom: 20px;
          dt{
            width: 78px;
            margin-right: 10px;
            box-sizing: border-box;
            img{
              width: 100%;
              vertical-align: middle;
            }
            &:hover{
              border: 1px solid #0A328E;
            }
          }
          dd{
            p{
              color: #666;
              &:first-child{
                width: 110px;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-bottom: 10px;
                &:hover{
                  color: #0A328E;
                }
              }
              &:last-child{
                font-size: 18px;
                font-weight: bold;
                line-height: 20px;
                span{
                  color: #ff5e0f;
                }
              }
            }
          }
        }
      }
    }
    .tabs{
      margin-top: 52px;
      border-top: 1px solid #ececec;
      .tabs-title {
        display: flex;
        li{
          padding: 16px 24px;
          color: #999;
        }
        .tabs-active{
          background: #ececec;
          color: #000;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
