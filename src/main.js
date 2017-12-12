import Vue from 'vue'
import sinda from './sinda'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import qs from 'qs'

import axios from 'axios'
import Distpicker from 'v-distpicker'

// 三级联动
Vue.component('v-distpicker', Distpicker)
Vue.prototype.ajax = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;
Vue.use(ElementUI);



new Vue({
  el: '#sinda',
  router,
  template: '<sinda/>',
  components: { sinda }
})


