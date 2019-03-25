<template>
  <div class="comment-warpper">
    <cube-scroll>
      <CommentRating />
      <CommentList />
    </cube-scroll>
  </div>
</template>

<script>
import { INIT_RATINGS } from '../store/mutationTypes'
import CommentRating from './CommentRating'
import CommentList from './CommentList'
export default {
  name: 'Comment',
  components: {
    CommentRating,
    CommentList
  },
  mounted() {
    this.$store.dispatch(INIT_RATINGS)
  }
}
</script>

<style lang="stylus" scoped>
.comment-warpper
  height 100%
  width 100%
  display flex
  flex-direction column
</style>
