<template>
  <div id="app">
    <Header :seller="seller" />
    <Tab />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Tab from './components/Tab'

export default {
  name: 'app',
  components: {
    Header,
    Tab
  },
  data () {
    return {
      seller: {}
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
<style lang="stylus">
</style>
