<template>
    <div class="header">
        <div class="header-box">
            <div class="left">欢迎来到钉扣狼积分商城</div>
            <div class="right">
                <ul>
                    <li></li>
                    <li><img src="../assets/img/userImg.f8bbec5e.png" alt=""> 用户名：--</li>
                    <li>我的鸡腿：--</li>
                    <li>获取鸡腿</li>
                    <li><a href="https://www.wolfcode.cn/new/portal/index.html">叩丁狼官网</a></li>
                    <li @click="loginHandle">登录</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    loginHandle () {
    //   this.$store.state.isShowModel = true  // 不建议这样做
    // 建议使用mutations实现
      this.$store.commit('changeIsShowModel', true)
    }
  }
}
</script>
<style lang="scss">
.header {
    background-color: #242B39;
    .header-box{
        width: 1200px;
        height: 40px;
        margin: 0 auto;
        // background-color: antiquewhite;
        // 布局居中
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        // color: #78859F;
        color: #fff;
        // .left{
        //     // float: left;
        // }
        .right{
            ul{
                display: flex;
                li{
                    padding: 0 10px;
                    img{
                        width: 23px;
                        height: 23px;
                        border-radius: 50%;
                        // 图片垂直居中
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                    // &:last-child 表示父级的最后一个孩子
                    &:last-child {
                        width: 105px;
                        height: 40px;
                        background-color: #0A328E;
                        // 文字垂直居中
                        text-align: center;
                        cursor: pointer;
                    }
                    a{
                        color: #fff;
                    }
                }
            }
        }
    }
}

</style>
