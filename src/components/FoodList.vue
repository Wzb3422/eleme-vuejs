<template>
  <div class="food-list">
    <cube-scroll
      nestMode="native"
    >
      <div v-for="(item, index) of goods" :key="item.name">
        <div class="title">{{ item.name }}</div>
        <div class="food-item" v-for="(innerItem, innerIndex) of item.foods" :key="innerItem.name">
          <div class="icon">
            <img :src="innerItem.icon" alt="">
          </div>
          <div class="content">
            <div class="food-item-name">{{ innerItem.name }}</div>
            <div class="food-item-desc" v-if="innerItem.description != ''">{{ innerItem.description }}</div>
            <div class="food-item-extra">
              <span>月售{{ innerItem.sellCount }}份</span>
              <span>好评率{{ innerItem.rating }}%</span>
            </div>
            <div class="price">
              <span>${{ innerItem.price }}</span>
              <div class="iconfont addIcon" @click="changeItem(index, innerIndex, 'add')">&#xe659;</div>
              <div class="iconfont minusIcon" @click="changeItem(index, innerIndex, 'del')">&#xe621;</div>
            </div>
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ADD_ITEM, DEL_ITEM } from '../store/mutationTypes'
export default {
  name: 'FoodList',
  data() {
    return {
      isClicking: true
    }
  },
  methods: {
    // 条件判断加异步执行解决click加倍的问题
    changeItem(index, innerIndex, type) {
      if (this.isClicking) {
        this.isClicking = false
        setTimeout(() => {
          const itemInfo = this.goods[index].foods[innerIndex]
          console.log('add')
          const mutationType = type === 'add' ? ADD_ITEM : DEL_ITEM
          this.$store.commit(mutationType, itemInfo)
          this.isClicking = true
        }, 1)
      }
    }
  },
  computed: mapState({
      goods: state => state.goods
    })
}
</script>

<style lang="stylus" scoped>
.food-list
  .title
    box-sizing border-box
    height 26px
    width 100%
    padding-left 14px
    background #f3f5f7
    border-left 2px solid #d9dde1
    color rgb(102, 102, 102)
    font-size 12px
    line-height 26px
  .food-item
    box-sizing border-box
    display flex
    width 100%
    height 114px
    padding 18px
    .icon
      width 57px
      height 100%
      margin-right 10px
      img
        width 100%
    .content
      flex 1
      display flex
      flex-direction column
      .food-item-name
        height 14px
        font-size 14px
        line-height 14px
        margin 2px 0 8px 0
      .food-item-desc
        height 14px
        line-height 14px
        color rgb(153, 153, 153)
        font-size 12px
        width 190px
        margin-bottom 6px
        text-overflow ellipsis
      .food-item-extra
        height 10px
        line-height 10px
        font-size 12px
        color rgb(153, 153, 153)
        span:first-child
          padding-right 12px
      .price
        margin-top 6px
        width 100%
        position relative
        span
          font-size 14px
          color rgb(240, 20, 20)
        .addIcon
          float right
          height 22px
          width 22px
          font-size 22px
          color rgb(0 ,160, 220)
        .minusIcon
          position absolute
          right 40px // transition property
          top 0
          height 22px
          width 22px
          font-size 22px
          float right
          color rgb(0 ,160, 220)
</style>
