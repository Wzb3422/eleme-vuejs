<template>
  <div class="header-warpper" v-if="seller.supports">
    <div class="blur"></div>
    <div class="header-content">
      <img :src="seller.avatar" alt="">
      <div class="header-text">
        <div class="title">
          <img class="brand" src="../assets/img/png/brand@2x.png" alt="">
          <div class="shop-name">{{ seller.name }}</div>
        </div>
        <div class="deliver">{{ deliveryTimeText }}</div>
        <div class="discount">
          <img class="decrease" src="../assets/img/png/decrease_1@2x.png" alt="">
          <div class="discount-text">{{ discountDesc }}</div>
        </div>
      </div>
    </div>
    <div class="tags-pop iconfont" @click="popShow">{{ supportNum }}个&#xe622;</div>
    <div class="bar">
      <img src="../assets/img/png/bulletin@2x.png" alt="">
      <div class="bulletin">{{ seller.bulletin }}</div>
      <div class="iconfont">&#xe622;</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { INIT_HEADER } from '../store/mutationTypes'
export default {
  name: 'Header',
  computed: {
    ...{ // localState
      deliveryTimeText() {
        return `${this.seller.description}/预计${this.seller.deliveryTime}分钟送达`
      },
      discountDesc() {
        return this.seller.supports[0].description
      },
      supportNum() {
        return this.seller.supports.length
      }
    },
    ...mapState({
      seller: state => state.seller
    })
  },
  mounted() {
    this.$store.dispatch(INIT_HEADER)
  },
  methods: {
    popShow () {
      this.$emit('popShow')
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-warpper
  height 134px
  width 100%
  position relative
  background rgba(7, 17, 27, 0.5)
  overflow hidden
  .blur
    position absolute
    top 0
    left 0
    z-index -1
    height 100%
    width 100%
    filter blur(20px)
    background url('http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg')
  .header-content
    display flex
    align-items center
    position absolute
    top 24px
    left 24px
    height 64px
    img
      height 100%
      border-radius 4px
      margin-right 16px
    .header-text
      height 60px
      display flex
      flex-direction column
      .title
        height 18px
        .brand
          width 30px
          height 18px
          margin-right 6px
          float left
        .shop-name
          float left
          height 18px
          font-size 16px
          color #fff
          font-weight bold
          line-height 18px
      .deliver
        margin-top 8px
        height 12px
        font-size 12px
        color #fff
        font-weight 200
        line-height 12px
        margin-bottom 10px
      .discount
        height 12px
        .decrease
          height 12px
          width 12px
          margin-right 4px
          float left
        .discount-text
          float left
          font-size 10px
          color #fff
          font-weight 200
          line-height 12px
  .tags-pop
    box-sizing border-box
    padding 7px 8px
    font-size 10px
    color #fff
    font-weight 200
    line-height 12px
    border-radius 14px
    background rgba(0, 0, 0, 0.2)
    position absolute
    right 12px
    bottom 43px
  .bar
    position absolute
    bottom 0
    box-sizing border-box
    padding 0 12px
    height 28px
    width 100%
    display flex
    align-items center
    font-size 10px
    color #fff
    font-weight 200
    line-height 28px
    background rgba(7, 17, 27, 0.2)
    img
      height 12px
      width 22px
      margin-right 4px
    .bulletin
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
