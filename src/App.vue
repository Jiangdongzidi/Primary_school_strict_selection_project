<template>
  <div id="app">
    <!-- <router-link to="/home">home</router-link> -->
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <!-- <Model v-show="isShowModel"></Model> -->
    <Model v-show="$store.state.isShowModel"></Model>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Model from './components/Model.vue'

export default {
  components: {
    Header,
    Footer,
    Model
  },
  data () {
    return {
      // isShowModel: false
    }
  }
}
</script>

<style lang="scss">
  html{
    // font-size: 10px;
    font-size: 14px;
    font-family: SourceHanSansSC-Light;
  }
  p{
    // 根元素的1.2倍，相当于12px
    // font-size: 1.2rem;
  }
  a{
    text-decoration: none;
  }

</style>
