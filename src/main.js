import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
