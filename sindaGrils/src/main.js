import Vue from 'vue'
import sinda from './sinda'
import router from './router'

Vue.config.productionTip = false


new Vue({
  el: '#sinda',
  router,
  template: '<sinda/>',
  components: { sinda }
})


