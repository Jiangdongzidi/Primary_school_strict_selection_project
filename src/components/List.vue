<template>
    <div class="list">
        <div class="list-box">
            <div class="title">
                <div class="l">
                    <slot name="left-img">
                        <img src="../assets/img/jingpin.png" alt="">
                    </slot>
                    <h3>{{listData.name}}</h3>
                </div>
                <div class="r" @click="clickHandle(listData.name)">更多 <img src="../assets/img/arrow.png" alt=""></div>
            </div>
            <div class="content">
                <div class="banner">
                    <slot name="banner"></slot>
                </div>
                    <ListItem class="item" v-for="(item, index) in listData.data.records" :key="index" :item="item"></ListItem>
                    <!-- <ListItem class="item" v-for="(item, index) in 4" :key="index" :item="item"></ListItem> -->
            </div>
        </div>
    </div>
</template>
<script>
import ListItem from '../components/ListItem.vue'
export default {
  props: ['listData'],
  components: { ListItem },
  data () {
    return {}
  },
  methods: {
    clickHandle (name) {
      this.$router.push('/goods?name=' + name)
    }
  }
}
</script>
<style lang="scss" scoped>
    .list{
        width: 1200px;
        margin: 0 auto;
        .list-box{
            .title{
                display: flex;
                justify-content: space-between;
                padding: 22px 0;
                .l{
                    display: flex;
                    align-items: center;
                    font-size: 30px;
                    font-weight: bold;
                    color: #242b39;
                    img{
                        width: 40px;
                        height: 36px;
                        margin-right: 10px;
                    }
                }
                .r{
                    display: flex;
                    align-items: center;
                    color: #666;
                    font-size: 16px;
                    cursor: pointer;
                    img{
                        margin-left: 5px;
                    }
                }
            }
            .content{
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;
                .item{
                    margin-right: 20px;
                    margin-bottom: 20px;
                    &:nth-child(4n) {
                        // 4n 4的倍数
                        margin-right: 0;
                    }
                }
            }
        }
    }

</style>
