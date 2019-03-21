<template>
  <div class="nav-bar">
    <cube-scroll
    ref="scroll"
    :data="goodsNames"
    :options="options" />
      <!-- <div class="nav-bar-item" v-for="item in goods" :key="item.name">
        <div class="item-name">{{ item.name }}</div>
      </div> -->
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
      options: {},
      goodsNames: ['热销榜','热销榜','热销榜','热销榜','热销榜','热销榜','热销榜','热销榜','热销榜','热销榜']
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-bar
  width 80px
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
