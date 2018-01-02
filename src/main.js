import Vue from 'vue'
import sinda from './sinda'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import Distpicker from 'v-distpicker'
import 'element-ui/lib/theme-chalk/display.css';
import { RadioGroup, Radio } from 'element-ui';
Vue.use(Radio)
Vue.use(RadioGroup)
// 三级联动
Vue.component('v-distpicker', Distpicker)
Vue.prototype.ajax = axios;
Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.prototype.qs = qs;
/**
 * 持续调用只执行一次工具方法
 *  @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“去弹跳”了的函数
 */
Vue.prototype.debounce = function debounce(fn, delay) {
  // 定时器，用来 setTimeout
  var timer

  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  return function () {

    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this
    var args = arguments

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer)

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function () {
      fn.apply(this, args)
    }, delay)
  }
}
function setRem() {
  var _w = document.documentElement.clientWidth;
  if (_w < 768) {
    //屏幕可视区域宽高w3c下全兼容
    var _fontsize = (_w / 750) * 100;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = _fontsize + 'px';
  } else {
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = 16 + 'px';
  }
}
window.onresize = setRem;
setRem();

new Vue({
  el: '#sinda',
  router,
  store,
  template: '<sinda/>',
  screenWidth: document.documentElement.clientWidth,
  components: {
    sinda
  },
  watch: {
    screenWidth: function () {
      Vue.prototype.autoHtml();
    }
  }
})
var loadBox = document.getElementById('loadBox');//首页未加载完成前显示的动画
var ContentBox = document.getElementById('ContentBox');//vue实例化对象
var body=document.getElementsByTagName('body')
document.onreadystatechange = loadingChange;//当页面加载状态改变的时候执行这个方法
if (!sessionStorage.getItem("onlyOneTime")) {
  sessionStorage.setItem('onlyOneTime', 0)
}else{
  loadBox.style.display = 'none';
  ContentBox.style.display = 'block';
  body[0].style.background='#FFF';
}
function loadingChange() {
  if (sessionStorage.getItem("onlyOneTime") == 0) {
    if (document.readyState == "complete") { //当页面加载状态为完全结束时进入
      setTimeout(function () {
        body[0].style.background='#FFF';
        loadBox.style.display = 'none';
        ContentBox.style.display = 'block';
      }, 1200);
    }
  } 
} 
