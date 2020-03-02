import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    addLogin(state) {
      state.isLogin = true
    },
    clsLogin(state) {
      state.isLogin = false
    }
  },
  actions: {
    
  },
  modules: {
  }
})
