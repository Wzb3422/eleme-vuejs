<template>
  <div class="list-warpper">
    <div class="splitter"></div>
    <div class="list-filters">
      <div class="filter all">全部</div>
      <div class="filter satisfied">满意</div>
      <div class="filter notSatisfied">不满意</div>
    </div>
    <div class="content">
      <div class="iconfont" :class="{hasContent: isActive}" @click="clickContent">&#xe619;</div>
      <div>只看有内容的评价</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    clickContent() {
      this.isActive = !this.isActive
      console.log('click') // 两次点击问题
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-warpper
  width 100%
  .splitter
    height 18px
    width 100%
    background #F3F5F7
  .list-filters
    width 100%
    height 64px
    box-sizing border-box
    padding 18px
    border-bottom 1px solid #eee
    .filter
      height 100%
      line-height 28px
      font-size 12px
      text-align center
      width 60px
      margin-right 15px
      float left
      color #666
      &.all
        color #fff
        background #00a0dc
      &.satisfied
        background rgba(0, 160, 220, 0.2)
      &.notSatisfied
        background #ccc
  .content
    width 100%
    box-sizing border-box
    height 46px
    padding 12px 18px
    border-bottom 1px solid #eee
    font-size 12px
    div
      float left
      height 100%
      line-height 22px
    .iconfont
      margin-right 10px
      font-size 20px
      color #00b43c
</style>
