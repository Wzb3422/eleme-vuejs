<template>
  <div class="header-pop-warpper" v-if="seller">
    <div class="pop-title">{{ seller.name }}</div>
    <div class="pop-stars iconfont">&#xe632;&#xe632;&#xe632;&#xe632;&#xe632;</div>
    <div class="pop-promo">
      <div class="pop-head">
        <div class="pop-bar"></div>
        <div class="pop-small-title">优惠信息</div>
        <div class="pop-bar"></div>
      </div>
      <div class="promo-body">
        <div class="promo-item" v-for="item of seller.supports" :key="item.type">
          <img class="promo-item-logo" :src="getTypeImg(item.type)" alt="">
          <div class="promo-item-text">{{ item.description }}</div>
        </div>
      </div>
    </div>
    <div class="pop-notice">
      <div class="pop-head">
        <div class="pop-bar"></div>
        <div class="pop-small-title">优惠信息</div>
        <div class="pop-bar"></div>
      </div>
      <div class="notice-body">
        {{ seller.bulletin }}
      </div>
    </div>
    <div class="iconfont cross" @click="popHide">&#xe604;</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPop',
  props: {
    seller: Object
  },
  methods: {
    popHide() {
      this.$emit('popHide')
    },
    getTypeImg(type) {
      switch (type) {
        case 1:
          return 'https://i.loli.net/2019/03/18/5c8f08b28abed.png'
        case 2:
          return 'https://i.loli.net/2019/03/18/5c8f08b292f1d.png'
        case 3:
          return 'https://i.loli.net/2019/03/18/5c8f08b2920d5.png'
        case 4:
          return 'https://i.loli.net/2019/03/18/5c8f08b29063d.png'
        default:
          return 'https://i.loli.net/2019/03/18/5c8f08b28f166.png'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-pop-warpper
  position absolute
  top 0
  left 0
  height 100%
  width 100%
  background rgb(7, 17, 27)
  opacity 0.8
  z-index 1
  display flex
  flex-direction column
  align-items center
  .pop-head
    display flex
    align-items center
    width 100%
    .pop-bar
      height 1px
      flex 1
      background rgba(255, 255, 255, 0.2)
    .pop-small-title
      font-size 10px
      font-weight 700
      line-height 14px
      margin 0 12px
      color #fff
  .pop-title
    margin-top 64px
    font-size 16px
    font-weight 700
    color #fff
    line-height 16px
  .pop-stars
    color #f90
    font-size 24px
    margin-top 16px
    letter-spacing 16px
  .pop-promo
    box-sizing border-box
    width 100%
    padding 0 9.6%
    margin-top 28px
    .promo-body
      box-sizing border-box
      padding 24px 12px 28px 12px
      .promo-item
        display flex
        align-items center
        margin-bottom 12px
        .promo-item-logo
          display block
          height 16px
          width 16px
          margin-right 6px
        .promo-item-text
          font-size 12px
          font-weight 400
          color #fff
          line-height 12px
  .pop-notice
    box-sizing border-box
    width 100%
    padding 0 9.6%
    .notice-body
      box-sizing border-box
      padding  0 12px
      margin-top 24px
      font-size 12px
      font-weight 200
      color #fff
      line-height 24px
  .cross
    font-size 32px
    color rgba(255, 255, 255, 0.5)
    position absolute
    bottom 32px
</style>
