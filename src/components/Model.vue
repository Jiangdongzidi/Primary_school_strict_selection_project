<template>
    <div class="model">
        <!-- 单独模态框 -->
        <div class="box" @click="closeHandle"></div>

                <!-- 事件类型：冒泡事件与捕获事件 -->
                <div class="model-box">
                    <div class="model-content">
                        <div class="close" @click="closeHandle">
                            <img src="../assets/img/close.png" alt="">
                        </div>
                        <div class="login">
                            <form action="#">
                                <div class="title">
                                <span>手机登录</span>
                                <span>|</span>
                                <span>微信登录</span>
                                </div>
                                <div class="phone">
                                    <!-- 正则表达式 -->
                                    <input type="text" placeholder="请输入手机号码" v-model="phoneNum" required>
                                </div>
                                <slide-verify
                                    :l="42"
                                    :r="20"
                                    :w="362"
                                    :h="140"
                                    @success="onSuccess"
                                    @fail="onFail"
                                    @refresh="onRefresh"
                                    :style="{ width: '100%' }"
                                    class="slide-box"
                                    ref="slideBlock"
                                    :slider-text="msg"
                                    >
                                </slide-verify>
                                <div class="btn">
                                    <button @click="loginHandle">登录</button>
                                </div>
                            </form>
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
      msg: '向右滑动',
      phoneNum: ''
    }
  },
  methods: {
    closeHandle () {
      this.$store.commit('changeIsShowModel', false)
    },
    // 拼图成功
    onSuccess (times) {
      const ms = (times / 1000).toFixed(1)
      this.msg = 'login success, 耗时 ' + ms + 's'
    },
    // 拼图失败
    onFail () {
      this.onRefresh() // 重新刷新拼图
    },
    // 拼图刷新
    onRefresh () {
      this.msg = '再试一次'
    },
    loginHandle () {
      const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      console.log(reg)
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
            .login {
                margin: 0 auto;
                padding: 42px 20px 34px;
                width: 420px;
                box-sizing: border-box;
                .title {
                    text-align: center;
                    font-size: 16px;
                    line-height: 23px;
                }
                .phone {
                    width: 100%;
                    height: 50px;
                    margin: 10px 0;
                    input {
                    width: 100%;
                    height: 100%;
                    }
                }
                .slide-box {
                    width: 100%;
                    position: relative;
                    box-sizing: border-box;
                    canvas {
                    position: absolute;
                    left: 0;
                    top: -120px;
                    display: none;
                    width: 100%;
                    box-sizing: border-box;
                    }
                    .slide-verify-block {
                    width: 85px;
                    height: 136px;
                    }
                    .slide-verify-refresh-icon {
                    top: -120px;
                    display: none;
                    }
                    &:hover {
                    canvas {
                        display: block;
                    }
                    .slide-verify-refresh-icon {
                        display: block;
                    }
                    }
                }
                        }
                    }
    }
}
</style>
