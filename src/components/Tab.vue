<template>
  <div class="tab-warpper">
    <cube-tab-bar
      v-model="selectedLabel"
      :data="tabs"
      :showSlider="true"
      @click="clickHandler"
      @change="changeHandler"
    >
    </cube-tab-bar>

    <cube-tab-panels v-model="selectedLabel">
      <cube-tab-panel :label="'商品'">
        <Food />
      </cube-tab-panel>
      <cube-tab-panel :label="'评论'">
        <Comment />
      </cube-tab-panel>
      <cube-tab-panel :label="'商家'">
        <Shop />
      </cube-tab-panel>
    </cube-tab-panels>
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
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style lang="stylus" scoped>
.cube-tab-bar
  height 40px
.cube-tab-bar >>> .cube-tab
  padding 12px 0
  font-size 16px
  font-weight 200
  color rgb(240, 20, 20)
.cube-tab-bar >>> .cube-tab-bar-slider
  background rgb(240, 20, 20)
</style>
