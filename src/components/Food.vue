<template>
  <div class="food-warpper">
    <FoodNavBar :goods="goods"/>
    <FoodList @add="onAdd"/>
  </div>
</template>

<script>
import FoodNavBar from './FoodNavBar'
import FoodList from './FoodList'
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
    FoodNavBar,
    FoodList
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
  },
  methods: {
    onAdd(itemInfo) {
      console.log(itemInfo.price)
    }
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
