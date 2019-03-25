<template>
  <div class="star-warpper">
    <div class="star-name">{{ name }}</div>
    <div class="stars">
      <div class="star" :class="`star-${item}`" v-for="(item, index) of starClasses" :key="index"></div>
    </div>
    <div class="star-rate">{{ score }}</div>
  </div>
</template>

<script>
export default {
  name: 'CommentStar',
  props: {
    score: {
      type: Number
    },
    name: {
      type: String
    }
  },
  computed: {
    starClasses() {
      let ret = []
      const full = Math.floor(this.score)
      for (let i = 0; i < full; i++) {
        ret.push('on')
      }
      const half = this.score % 1 >= 0.5 ? 1 : 0
      if (half === 1) {
        ret.push('half')
      }
      let off = 5 - full - half
      for (let j = 0; j < off; j++) {
        ret.push('off')
      }
      console.log(ret)
      return ret
    }
  }
}
</script>

<style lang="stylus" scoped>
.star-warpper
  width 100%
  box-sizing border-box
  padding 0 24px 0 24px
  height 18px
  font-size 12px
  line-height 18px
  display flex
  margin 6px 0
  .star-name
    margin-right 10px
  .stars
    font-size 16px
    .star
      height 15 px
      width 15px
      background-size: contain !important
      float left
      margin 0 2px
    .star-off
      background url('../assets/img/png/star24_off@2x.png')
    .star-half
      background url('../assets/img/png/star24_half@2x.png')
    .star-on
      background url('../assets/img/png/star24_on@2x.png')
  .star-rate
    margin-left 10px
    color #fc9153
</style>
