import Vue from 'vue'
import Vuex from 'vuex'

import {reqHomeData} from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:[]

  },
  mutations: {
  inc(state,msg ){
    state.msg = msg
  }
  },
  actions: {
    async getHomeData ({commit}) {
      const result = await reqHomeData();
      if (result.code === 0) {
        commit(inc,result.data.data)
      }
    }
  },
  getters: {},
  modules: {

  }

})
