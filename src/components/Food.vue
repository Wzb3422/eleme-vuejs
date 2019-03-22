<template>
  <div class="food-warpper">
    <FoodNavBar />
    <FoodList/>
  </div>
</template>

<script>
import FoodNavBar from './FoodNavBar'
import FoodList from './FoodList'
import { INIT_GOODS } from '../store/mutationTypes'
export default {
  name: 'Food',
  data() {
    return {
      goods: []
    }
  },
  components: {
    FoodNavBar,
    FoodList
  },
  mounted() {
    this.$store.dispatch(INIT_GOODS)
  }
}
</script>

<style lang="stylus" scoped>
.food-warpper
  height 100%
  width 100%
  display flex
  overflow hidden
.food-warpper >>> .food-list
  flex 1
</style>
