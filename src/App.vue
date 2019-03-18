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
import axios from 'axios'
import Header from './components/Header.vue'
import HeaderPop from './components/HeaderPop'
import Tab from './components/Tab'

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
    const _this = this
    axios.get('/api/seller')
      .then((res) => {
        _this.seller = res.data
        console.log(_this.seller)
      })
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter
  opacity 0
.fade-enter-active
  transition opacity  1s
.fade-enter-to
  opacity 0.8
.fade-leave
  opacity 0.8
.fade-leave-active
  transition opacity 1s
.fade-leave-to
  opacity 0
</style>
