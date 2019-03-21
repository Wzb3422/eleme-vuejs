<template>
  <div class="nav-bar">
    <cube-scroll
    ref="scroll"
    :data="computedGoodsName"
    />
  </div>
</template>

<script>
export default {
  name: 'FoodNavBar',
  props: {
    goods: Array
  },
  data() {
    return {
    }
  },
  computed: {
    computedGoodsName() {
      let ret = []
      this.goods.map(item => {
        ret.push(item.name)
      })
      return ret
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-bar
  width 80px
  height 437px
.nav-bar >>> .cube-scroll-item
  padding 0 12px
  width 56px
  height 54px
  background #f3f5f7
  font-size 12px
  line-height 14px
  display flex
  justify-content center
  align-items center
  white-space normal
  color rgb(77, 85, 93)
</style>
