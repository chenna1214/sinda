import Vue from 'vue'
import sinda from './sinda'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios';
Vue.prototype.ajax=axios;

Vue.config.productionTip = false
Vue.use(ElementUI);



new Vue({
  el: '#sinda',
  router,
  template: '<sinda/>',
  components: { sinda }
})


