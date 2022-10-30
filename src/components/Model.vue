<template>
    <div class="model">
        <div class="model-box">
            <div class="model-content">
                <div class="close" @click="closeHandle">
                    <img src="../assets/img/close.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Model',
  data () {
    return {

    }
  },
  methods: {
    closeHandle () {
      this.$store.commit('changeIsShowModel', false)
    }
  }

}
</script>
<style lang="scss" scoped>
.model {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    left: 0;
    top: 0;
    .model-box {
        width: 555px;
        height: 423px;
        background: url(../assets/img/login-box-bg.png);
        // 模态框居中
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        .model-content {
            width: 420px;
            margin: 0 auto;
            position: relative;
            .close {
                position: absolute;
                right: 8px;
                top: 15px;
                cursor: pointer;
            }
        }
    }
}
</style>
