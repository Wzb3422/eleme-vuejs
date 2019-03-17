<template>
  <div id="app">
    <Header :seller="this.seller" />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      seller: {}
    }
  },
  mounted () {
    axios.get('/api/seller')
      .then((res) => {
        this.seller = res.data
        console.log(this.seller)
      })
    console.log(this.seller)
  }
}
</script>
<style lang="stylus">
</style>
