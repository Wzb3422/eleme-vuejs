<template>
  <div class="shop-cart-warpper">
    <div class="shop-cart-logo">
      <div class="iconfont" :class="{active: isActive}">
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
      差20元起送
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ShopCart',
  computed: {
    ...{
      isEnough() {
        return true
      },
      isActive() {
        if ( this.totalPrice === 0 )
          return false
        else
          return true
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
      deliveryPrice: state => state.seller.deliveryPrice
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
</style>
