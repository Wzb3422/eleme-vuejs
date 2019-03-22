import Vue from 'vue'
import Vuex from 'vuex'
import { getSeller } from '../api'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    seller: {}
  },
  mutations: {
    initHeader(state, payload) {
      state.seller = payload
    }
  },
  actions: {
    initHeader(context) {
      getSeller()
        .then(data => {
          context.commit('initHeader', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
