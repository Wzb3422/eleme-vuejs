<template>
  <div class="tab-warpper">
    <cube-tab-bar
      v-model="selectedLabel"
      :data="tabs"
      :showSlider="true"
      ref="tabBar"
      @click="tabClick"
    >
    </cube-tab-bar>

    <cube-slide
      :loop=false
      :auto-play=false
      :show-dots=false
      :initialIndex=index
      :options=slideOptions
      @change=onSwiperChange
      @scroll=onScrollChange
    >
      <cube-slide-item>
        <Food />
      </cube-slide-item>
      <cube-slide-item>
        <Comment />
      </cube-slide-item>
      <cube-slide-item>
        <Shop />
      </cube-slide-item>
    </cube-slide>

  </div>
</template>

<script>
import Food from './Food'
import Comment from './Comment'
import Shop from './Shop'
export default {
  name: 'Tab',
  components: {
    Food,
    Comment,
    Shop
  },
  data () {
    return {
      selectedLabel: '商品',
      tabs: [{
        label: '商品'
      }, {
        label: '评论'
      }, {
        label: '商家'
      }],
      index: 0,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  methods: {
    tabClick(label) {
      console.log(label)
      switch (label) {
        case '商品':
          this.index = 0
          break
        case '评论':
          this.index = 1
          break
        case '商家':
          this.index = 2
          break
        default:
          return null
      }
      this.selectedLabel = label
    },
    onSwiperChange(index) {
      console.log(index)
      this.selectedLabel = this.tabs[index].label
    },
    onScrollChange(pos) {
      this.$refs.tabBar.$el.lastChild.style.transform = `translateX(${-pos.x / 375 * 125}px) translateZ(0px)`
    }
  }
}
</script>

<style lang="stylus" scoped>

.tab-warpper >>> .cube-tab-bar
  height 40px
.tab-warpper >>> .cube-tab
  padding 12px 0
  font-size 16px
  font-weight 200
  color rgb(240, 20, 20)
.tab-warpper >>> .cube-tab-bar-slider
  background rgb(240, 20, 20)
.tab-warpper >>> .cube-slide
  flex 1
.tab-warpper
  position fixed
  top 134px
  right 0
  left 0
  bottom 0
  display flex
  flex-direction column
  overflow hidden
</style>
