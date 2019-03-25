<template>
  <div class="shop-cart-warpper">
    <div class="shop-cart-logo">
      <div class="iconfont" :class="{active: isActive}" @click="popList">
        &#xe60e;
      </div>
    </div>
    <div class="price"  :class="{active: isActive}">
      ${{ totalPrice }}
    </div>
    <div class="desc">
      另需派送费{{ deliveryPrice }}元
    </div>
    <div class="pay" :class="isEnough ? 'enough' : 'notEnough'">
      {{ payText }}
    </div>
    <transition name="list">
      <div class="item-list" :class="{animated: isPop, 	zoomIn: isPop, faster: isPop}" v-show="isPop">
        <div class="list-title">
          <span>购物车</span>
          <span>清空</span>
        </div>
        <div class="list-item">
          <div class="list-item-name">葱花饼</div>
          <div class="iconfont">&#xe659;</div>
          <div class="list-item-count">1</div>
          <div class="iconfont">&#xe621;</div>
          <div class="list-item-price">$9</div>
        </div>
      </div>
    </transition>
    <transition name="list">
      <div class="cart-pop-mask" v-show="isPop"></div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ShopCart',
  data() {
    return {
      isPop: false
    }
  },
  methods: {
    popList() {
      this.isPop = !this.isPop
    }
  },
  computed: {
    ...{
      isEnough() {
        if (this.totalPrice >= 20) {
          return true
        } else {
          return false
        }
      },
      isActive() {
        if (this.totalPrice === 0) {
          return false
        } else {
          return true
        }
      },
      payText() {
        if (this.isEnough === false) {
          return `还差${20 - this.totalPrice}元起送`
        } else {
          return '去结算'
        }
      },
      itemList() {
        let ret = [] // 返回值是一个对象数组
        let searchedNames = []
        for (let i = 0; i < this.cart.length; i++) {
          // 判断该项的name是否在searchedNames中
          let isExist = false
          this.cart[i].name
        }
      }
    },
    ...mapState({
      totalPrice(state) {
        let ret = 0
        state.cart.map(item => {
          ret += item.price
        })
        return ret
      },
      deliveryPrice: state => state.seller.deliveryPrice,
      cart: state => state.cart
    })
  }
}
</script>

<style lang="stylus" scoped>
.shop-cart-warpper
  position fixed
  bottom 0
  width 100%
  height 48px
  background #141d27
  color rgb(153, 153, 153)
  .shop-cart-logo
    position relative
    left 13px
    bottom 10px
    border-radius 100%
    height 56px
    width 56px
    background #141d27
    .iconfont
      height 44px
      width 44px
      border-radius 100%
      background rgb(51, 51, 51)
      position relative
      top 6px
      left 6px
      text-align center
      line-height 44px
      font-size 26px
    .active
      background #00a0dc
  .price
    height 24px
    position absolute
    left 88px
    top 16px
    font-family PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif,Droid Sans Fallback
    font-weight  700
  .active
      color #fff
  .desc
    height 24px
    margin-top 12px
    padding-left 12px
    position absolute
    top 0
    left 120px
    font-size 10px
    line-height 24px
    border-left 1px solid rgba(255, 255, 255, 0.1)
  .pay
    float left
    height 100%
    width 105px
    background rgb(51, 51, 51)
    position absolute
    right 0
    top 0
    font-size 12px
    text-align center
    line-height 48px
    &.enough
      background #00B43C
      color #fff
  .item-list
    width 100%
    position fixed
    bottom 48px
    left 0
    right 0
    z-index -1
    .list-title
      width 100%
      height 40px
      line-height 40px
      font-size 14px
      color #333333
      box-sizing border-box
      padding 0 18px
      background #f3f5f7
      span:last-child
        color #00a0dc
        font-size 12px
        float right
    .list-item
      height 48px
      width 100%
      box-sizing border-box
      padding 0 12px 0 18px
      background #fff
      z-index 0
      div
        float right
      .list-item-name
        color #333333
        font-size 14px
        line-height 48px
        float left
      .iconfont
        color rgb(0 ,160, 220)
        height 24px
        width 24px
        font-size 20px
        margin 12px 8px
        line-height 24px
        text-align center
      .list-item-count, .list-item-price
        margin 16px 0
      .list-item-price
        margin-right 5px
        color #f01414
        font-size 16px
  .cart-pop-mask
    position fixed
    top 0
    left 0
    bottom 48px
    right 0
    background rgb(7, 17, 27, 0.6)
    opacity 0.66
    z-index -2
    &.list-enter
      opacity 0
    &.list-enter-active
      transition opacity .5s
    &.list-enter-to
      opacity 0.66
</style>
