import Vue from 'vue'
import Vuex from 'vuex'
import TestModule from '@/store/modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test: TestModule
  }
})
