<template>
    <div>
        <!-- 2、使用属性实现 -->
    <Nav :is-show="true">
        <!-- 1、使用插槽 -->
      <!-- <img slot="banner" src="../assets/img/banner.f559b49d.png" alt=""> -->
    </Nav>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>
<style>

</style>
