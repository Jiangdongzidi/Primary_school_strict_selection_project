<template>
    <div>
        <dl class="item" @click="itemClickHanble(item.id)">
            <dt>
                <!-- 全局变量 -->
                <!-- <img class="big-img" :src="imgUrl + item.coverImg" alt=""> -->
                <!-- 全局过滤器 -->
                <img class="big-img" :src="item.coverImg | imgUrlFormat" alt="">
                <img v-show="item.isHotSale" class="small-img" src="../assets/img/section_hot.png" alt="">
                <img v-show="item.isLatest" class="small-img" src="../assets/img/section_new.png" alt="">
            </dt>
            <dd class="title">{{item.name}}</dd>
            <dd class="jifen">{{item.coin}}</dd>
            <dd class="btn">立即兑换</dd>
        </dl>
    </div>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    itemClickHanble (id) {
    //   console.log('id', id)
    // 页面跳转
      this.$router.push('/detail?id=' + id)
    }
  }

}
</script>
<style lang="scss" scoped>
.item {
    width: 285px;
    height: 412px;
    text-align: center;
    background-color: #fff;
    padding-bottom: 78px;
    // 过渡样式
    transition: transform 0.5s;
    cursor: pointer;
    &:hover {
        // 位置变换1、定位2、变换+过渡
        // position: relative;
        // top: -10px;
        // 变换样式
        transform: translate3d(0, -10px, 0);
        .btn{
            color: #fff;
            background: #0a328e;
        }
    }
    dt {
        position: relative;
        .big-img {
            width: 285px;
            height: 330px;
        }
        .small-img {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .title {
        font-size: 18px;
        color: #333;
        margin: 22px 0 16px;
    }
    .jifen{
        font-size: 18px;
        font-weight: bold;
        color: #FD604D;
    }
    .btn{
        width: 100px;
        height: 36px;
        border: 1px solid #0a328e;
        text-align: center;
        line-height: 36px;
        margin: 20px auto 0;
        font-size: 18px;
        color: #0a328e;
        // transition: background 0.5s, color 0.5s;
        transition: all 0.5s;
    }
}
</style>
