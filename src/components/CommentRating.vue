<template>
  <div class="comment-rating-warpper">
    <div class="rating-left">
      <div class="rating-left-scroe">{{ sellerInfo.score }}</div>
      <div class="rating-left-text">综合评分</div>
      <div class="rating-left-compare">高于周边商家{{ sellerInfo.rankRate }}</div>
    </div>
    <div class="rating-right">
      <CommentStar :score="item.score" :name="item.name" v-for="item of stars" :key="item.name"/>
      <div class="deliver">
        <span>送达时间</span>
        <span>38分钟</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CommentStar from './CommentStar'
export default {
  name: 'CommentRating',
  components: {
    CommentStar
  },
  computed: {
    ...{
      stars() {
        let { score, serviceScore } = this.sellerInfo
        return [{
          score,
          name: '服务态度'
        }, {
          score: serviceScore,
          name: '商品评价'
        }]
      }
    },
    ...mapState({
      sellerInfo: state => state.seller
    })
  }
}
</script>

<style lang="stylus" scoped>
.comment-rating-warpper
  width 100%
  height 82px
  padding 18px 0
  display flex
  .rating-left
    height 100%
    width 136px
    display flex
    flex-direction column
    align-items center
    border-right 1px solid #d9dde1
    .rating-left-scroe
      font-size 24px
      color rgb(255, 153, 0)
      line-height 28px
      margin 6px 0
    .rating-left-text
      font-size 12px
      color rgb(7, 17, 27)
      line-height 12px
      margin-bottom 8px
    .rating-left-compare
      font-size 10px
      color #999999
      line-height 10px
  .rating-right
    flex 1
    .deliver
      padding-left 24px
      span
        font-size 12px
      span:last-child
        margin-left 10px
        color #999999
</style>
