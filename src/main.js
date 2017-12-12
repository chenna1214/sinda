import Vue from 'vue'
import sinda from './sinda'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'
import qs from 'qs'
import Distpicker from 'v-distpicker'

// 三级联动
Vue.component('v-distpicker', Distpicker)
Vue.prototype.ajax = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.qs = qs;



new Vue({
  el: '#sinda',
  router,
  store,
  template: '<sinda/>',
  components: { sinda }
})


