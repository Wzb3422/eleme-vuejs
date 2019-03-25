import Vue from 'vue'
import Vuex from 'vuex'
import { getSeller, getGoods } from '../api'
import { INIT_HEADER, INIT_GOODS } from './mutationTypes'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    seller: [],
    goods: [],
    cart: []
  },
  mutations: {
    initHeader(state, payload) {
      state.seller = payload
    },
    initGoods(state, payload) {
      state.goods = payload
    },
    addItem(state, { name, price }) {
      let newState = state.cart
      newState.push({ name, price })
      state.cart = newState
      console.log(state.cart)
      console.log(state.cart.length)
    },
    delItem(state, { name }) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].name === name) {
          state.cart.splice(i, 1)
          console.log(state.cart)
          break
        }
      }
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
