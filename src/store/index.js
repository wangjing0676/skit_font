import Vue from 'vue'
import Vuex from 'vuex'
import createLoadingPlugin from 'utils/vuex-loading'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  plugins: [createLoadingPlugin()],
  state: {
    direction: 'forward',
    showTabar: localStorage.active || -1
  },
  getters: {
    userData (state, getters) {
      return state.user.user
      // return getters['user/user']
    }
    // vuex 全局getters引入局部
    // token () {
    //   return store.getters['user/token']
    // }
  },
  mutations: {
    updateDirection (state, direction) {
      state.direction = direction
    },
    updateTabar(state,showTabar) {
      state.showTabar = showTabar
    }
  },
  actions: {

  },
  modules
})
