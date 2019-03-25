<template>
  <div class="comment-warpper">
    <cube-scroll>
      <CommentRating />
    </cube-scroll>
  </div>
</template>

<script>
import CommentRating from './CommentRating'
export default {
  name: 'Comment',
  components: {
    CommentRating
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
