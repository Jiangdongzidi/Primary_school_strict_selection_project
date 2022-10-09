<template>
    <div class="sub-nav">
        <ul>
            <li v-for="(item, index) in subNavData" :key = "index">{{item.name}}
                 <!--方法二： <span v-if="当前li下标 !== 最后一个下标">/</span> -->
                 <span v-if="index !== subNavData.length - 1">/</span></li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['subNavData']

}
</script>
<style lang="scss" scoped>
.sub-nav{
    ul{
        display: flex;
        li{
            font-size: 16px;
            color: #999999;
            line-height: 23px;
            span{
                padding: 0 10px;
            }
            &:last-child{
                color: #333333;
                // 解决面包屑导航，最后一个没有 /，方法一
                // span{
                //     display: none;
                // }
            }
        }
    }
}
</style>
