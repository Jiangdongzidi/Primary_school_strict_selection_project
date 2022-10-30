<template>
    <div class="nav">
        <!-- 横跨满屏的背景颜色 -->
        <div :class="[!isShow ? 'wrap' : '']">
            <!-- 内容居中 -->
            <div class="nav-box">
                <!-- 添加logout的方法二：使用动态添加类的方法。 -->
                <div :class="['left', !isShow ? 'logo' : 'home-logo']">
                    <!-- 添加logo的方法一：使用v-if和v-else -->
                    <!-- <img v-if="isShow" src="../assets/img/logo1.png" alt=""> -->
                    <!-- <img v-else src="../assets/img/logo2.png" alt=""> -->
                    <h1>叩丁严选</h1>
                </div>
                <div class="center">
                    <ul>
                        <li>
                            <router-link :class="[$route.path == '/home' ? 'active-home' : '']" to="/home">首页</router-link>
                        </li>
                        <li>
                            <router-link :class="[$route.path == '/goods' ? 'active' : '']" to="/goods">全部商品</router-link>
                        </li>
                        <li>
                            <router-link :class="[$route.path == '/user' ? 'active' : '']" to="/user">个人中心</router-link>
                        </li>
                        <li>
                            <router-link :class="[$route.path == '/order' ? 'active' : '']" to="/order">我的订单</router-link>
                        </li>
                        <li>
                            <router-link :class="[$route.path == '/free' ? 'active' : '']" to="/free">专属福利</router-link>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="search">
                        <input type="text" placeholder="请输入搜索内容" v-model.trim = "val" @keypress.enter="searchHandle">
                    </div>
                    <div class="btn" @click="searchHandle">
                        <img src="../assets/img/search.png" alt="">
                    </div>
                </div>
            </div>
        </div>
       <!-- 巨幕 -->
       <div class="banner" v-if="isShow">
         <img src="../assets/img/banner.f559b49d.png" alt="">
       </div>
    </div>
</template>
<script>
export default {
  props: ['isShow'],
  data () {
    return {
      val: ''
    }
  },
  methods: {
    searchHandle () {
      // 数据请求
      if (this.val.length === 0) {
        alert('搜索内容不能为空！')
      }
      //   if (this.$route.path === '/goods') {

      //   }
      this.$router.push('/goods?name=全部礼品&keyword=' + this.val)
    }
  }

}
</script>
<style lang="scss">
.nav{
    // width: 1200px;
    // margin: 0 auto;
    .wrap {
        background-color: #242b39;
        border-top: 1px solid #313a4b;
    }
    .nav-box {
        width: 1200px;
        margin: 0 auto;
        // background-color: #f00;
        display: flex;
        height: 73px;
        padding: 13px 0;
        .left{
            width: 257px;
            height: 73px;
            h1{
                // 首行缩进
                text-indent: -9999px;
            }
        }
        .home-logo{
            background: url(../assets/img/logo1.png) no-repeat center;
        }
        .logo{
            background: url(../assets/img/logo2.png) no-repeat center;
        }
        // 导航
        .center{
            padding-left: 93px;
            padding-right: 86px;
            ul{
                display: flex;
                width: 500px;
                justify-content: space-between;
                line-height: 73px;
                li{
                    a{
                        color: #78859f;
                    }
                    .active-home{
                        color: #0A328E;
                        font-weight: 700;
                    }
                    .active{
                        color: #fff;
                        font-weight: 700;
                    }
                }
            }
        }
        .right {
            display: flex;
            padding-top: 13px;
            .search{
                width: 214px;
                height: 40px;
                border: 1px solid #DEDEDE;
                // 设置盒子模型的方法
                box-sizing: border-box;
                border-radius: 20px 0 0 20px;
                overflow: hidden;
                border-right: 0;
                input{
                    width: 100%;
                    height: 38px;
                    border: 0;
                    outline: 0;
                    padding: 0;
                    text-indent: 20px;
                    // background-color: #242B39;
                }
            }
            .btn{
                width: 50px;
                height: 40px;
                border-radius: 0 20px 20px 0;
                background-color: #0A328E;
                text-align: center;
                // 设置行高，图片也有间距，所以设置40px，图片会偏下一点点
                // line-height: 40px;
                line-height: 38px;
                img{
                    vertical-align: middle;
                }
            }
        }
    }
    .banner {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 30px;
        img{
            width: 100%;
        }
    }
}

</style>
