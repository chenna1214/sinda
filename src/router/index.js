import Vue from 'vue'
import Router from 'vue-router'
//非登录、注册、忘记密码网页
import merchandise from '../components/merchandise/merchandise'
import allProduct from '../components/merchandise/allProduct/allProduct.vue'
import taxationService from '../components/merchandise/taxationService/taxationService.vue'
import productdetail from '../components/merchandise/taxationService/productdetail.vue'

import joinUs from '../components/merchandise/joinUs/joinUs.vue'
import shop from '../components/merchandise/shop/shop.vue'
import failurePay from '../components/merchandise/order/failurePay.vue'//支付失败
import paySuccess from '../components/merchandise/order/paySuccess.vue'//支付成功
import pc_shophp from '../components/merchandise/shop/pc_shophp.vue'
import goodsOrder from '../components/merchandise/order/goodsOrder.vue'//订单详情
import shoppingtrolley from '../components/merchandise/shoppingtrolley/shoppingtrolley.vue'//订单详情
//登录、注册、忘记密码网页
import userData from '../components/userData/userData.vue'
import login from '../components/userData/login.vue'
import register from '../components/userData/register.vue'
import forgetPassword from '../components/userData/forgetPassword.vue'
// 会员中心网页
import membercenter from '../components/merchandise/membercenter/membercenter.vue'
import member from '../components/merchandise/memberCenter/member.vue'
import accountpwd from '../components/merchandise/memberCenter/accountpwd.vue'
import toevaluate from '../components/merchandise/memberCenter/toevaluate.vue'
import userevalua from '../components/merchandise/memberCenter/userevalua.vue'  
//  微信端
import unregistered from '../components/merchandise/my/unregistered.vue'
import havelogined from '../components/merchandise/my/havelogined.vue'
//银联支付
import pay from '../components/merchandise/order/pay'
//支付宝支付
import Alipay from '../components/merchandise/order/Alipay'
//手机端的全部产品的导航
import navShow from '../components/merchandise/allProduct/navShow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userData',//登录、注册、忘记密码网页
      name: 'userData',
      component: userData,
      children: [
        {
          path: 'login',//登录
          name: 'login',
          component: login
        },
        {
          path: 'register',//注册
          name: 'register',
          component: register
        },
        {
          path: 'forgetPassword',//忘记密码
          name: 'forgetPassword',
          component: forgetPassword
        },
      ]
    },
    {
      path: '/merchandise',  //非登录、注册、忘记密码网页
      name: 'merchandise',
      component: merchandise,
      children: [
        {
          path: 'allProduct',//全部产品
          name: 'allProduct',
          component: allProduct
        },
        {
          path: 'taxationService',//财税服务
          name: 'taxationService',
          component: taxationService
        },
        {
          path: 'productdetail',//商品详情
          name: 'productdetail',
          component: productdetail
        },
     
        {
          path: 'joinUs',//加盟我们
          name: 'joinUs',
          component: joinUs
        },
        {
          path: 'shop',//店铺
          name: 'shop',
          component: shop
        },
        {
          path: 'failurePay',//支付失败
          name: 'failurePay',
          component: failurePay
        },
        {
          path: 'paySuccess',//支付成功
          name: 'paySuccess',
          component: paySuccess
        },
        {
          path: 'pc_shophp',//店铺首页
          name: 'pc_shophp',
          component: pc_shophp
        },
        {
          path: 'shoppingtrolley',//购物车
          name: 'shoppingtrolley',
          component: shoppingtrolley
        },
        {
          path: 'membercenter',//会员中心网页，公共
          redirect: 'membercenter/member',
          name: 'membercenter',
          component: membercenter,
          children: [
            {
              path: 'member',//会员中心
              name: 'member',
              component: member,

            },
            {
              path: 'userevalua',//用户评价
              name: 'userevalua',
              component: userevalua
            },

            {
              path: 'userevalua/toevaluate',//去评价
              name: 'toevaluate',
              component: toevaluate,
            },
            {
              path: 'accountpwd',//账户设置,修改密码
              name: 'accountpwd',
              component: accountpwd
            },
          ]
        },
        {
          path: 'goodsOrder',//订单
          name: 'goodsOrder',
          component: goodsOrder,
        },
        {
          path: 'unregistered',//我的（未注册）
          name: 'unregistered',
          component: unregistered
        },
        {
          path: 'havelogined',//我的（已登录）
          name: 'havelogined',
          component: havelogined
        },
      ]
    },
    {
      path:'/pay',//银联支付
      name:'pay',
      component:pay
    },
    {
      path:'/Alipay',//支付宝支付
      name:'Alipay',
      component:Alipay
    },
    {
      path:'/navShow',//手机端点击全部服务跳转到此页，此页内容是展示导航栏的链接
      name:'navShow',
      component:navShow
    },
    
  ]
})
            
