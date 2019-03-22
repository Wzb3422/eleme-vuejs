import Vue from 'vue'
import Vuex from 'vuex'
import { getSeller, getGoods } from '../api'
import { INIT_HEADER, INIT_GOODS } from './mutationTypes'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    seller: [],
    goods: []
  },
  mutations: {
    initHeader(state, payload) {
      state.seller = payload
    },
    initGoods(state, payload) {
      state.goods = payload
    }
  },
  actions: {
    initHeader({ commit }) {
      getSeller()
        .then(data => {
          commit(INIT_HEADER, data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    initGoods({ commit }) {
      getGoods()
        .then(data => {
          commit(INIT_GOODS, data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})