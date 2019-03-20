<template>
  <div id="app">
    <Header :seller="seller" @popShow="handlePop" />
    <transition name="fade">
      <HeaderPop v-show="isPop" @popHide="handlePop" :seller="seller" />
    </transition>
    <Tab />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HeaderPop from './components/HeaderPop'
import Tab from './components/Tab'
import {
  getSeller
} from '../src/api'

export default {
  name: 'app',
  components: {
    Header,
    Tab,
    HeaderPop
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
  },
  mounted () {
    getSeller()
      .then(data => {
      this.seller = data
      })
      .catch(err => {
        console.log(err)
      })
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
