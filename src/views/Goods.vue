<template>
    <div>
      <Nav :is-show="false"></Nav>
      <SubNav :sub-nav-data="navData"></SubNav>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import SubNav from '@/components/SubNav.vue'
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
      ]
    }
  },
  created () {
    const name = this.$route.query.name
    // console.log(name)
    this.navData[1].name = name
  }

}
</script>
<style>

</style>
