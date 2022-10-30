import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowModel: false
  },
  getters: {
  },
  mutations: {
    // 改变模态框的显示 打开/关闭
    changeIsShowModel (state, payload) {
      state.isShowModel = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
