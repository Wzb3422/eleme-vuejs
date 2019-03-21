<template>
  <div class="food-warpper">
    <FoodNavBar :goods="goods"/>
    <div class="food-item-list"></div>
  </div>
</template>

<script>
import FoodNavBar from './FoodNavBar'
import {
  getGoods
} from '../api'
export default {
  name: 'Food',
  data() {
    return {
      goods: []
    }
  },
  components: {
    FoodNavBar
  },
  mounted() {
    getGoods()
      .then(data => {
        this.goods = data
        // console.log(this.goods)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
.food-warpper
  height 100%
  width 100%
  display flex
  overflow hidden
  
  .food-item-list
    flex 1
</style>
