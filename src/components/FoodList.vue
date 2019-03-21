<template>
  <div class="food-list">
    <div class="title">热销榜</div>
    <div class="food-item">
      <div class="icon">
        <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114" alt="">
      </div>
      <div class="content">
        <div class="food-item-name">皮蛋瘦肉粥</div>
        <div class="food-item-desc">咸粥</div>
        <div class="food-item-extra">
          <span>月售999份</span>
          <span>好评率99%</span>
        </div>
        <div class="price">
          <span>$10</span>
          <div class="iconfont">&#xe659;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
        height 12px
        line-height 12px
        color rgb(153, 153, 153)
        font-size 12px
        margin-bottom 8px
      .food-item-extra
        height 10px
        line-height 10px
        font-size 12px
        color rgb(153, 153, 153)
        span:first-child
          padding-right 12px
      .price
        margin-top 6px
        span
          font-size 14px
          color rgb(240, 20, 20)
        div
          float right
          height 22px
          width 22px
          font-size 22px
          color rgb(0 ,160, 220)
</style>
