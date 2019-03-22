<template>
  <div id="app">
    <Header @popShow="handlePop" />
    <transition name="fade">
      <HeaderPop v-show="isPop" @popHide="handlePop" :seller="seller" />
    </transition>
    <Tab />
    <ShopCart />
  </div>
</template>

<script>
import { store } from './store'
import Header from './components/Header.vue'
import HeaderPop from './components/HeaderPop'
import Tab from './components/Tab'
import ShopCart from './components/ShopCart'

export default {
  name: 'app',
  store,
  components: {
    Header,
    Tab,
    HeaderPop,
    ShopCart
  },
  data () {
    return {
      seller: {},
      isPop: false
    }
  },
  methods: {
    handlePop () {
      this.isPop = !this.isPop
    }
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter
  opacity 0
.fade-enter-active
  transition opacity  .6s
.fade-enter-to
  opacity 0.8
.fade-leave
  opacity 0.8
.fade-leave-active
  transition opacity .6s
.fade-leave-to
  opacity 0
</style>
