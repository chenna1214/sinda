import Vue from 'vue'
import Router from 'vue-router'
// //非登录、注册、忘记密码网页
const merchandise = () => import('../components/merchandise/merchandise')
const allProduct = () => import('../components/merchandise/allProduct/allProduct.vue')
const taxationService = () => import('../components/merchandise/taxationService/taxationService.vue')
const productdetail = () => import('../components/merchandise/taxationService/productdetail.vue')
const joinUs = () => import('../components/merchandise/joinUs/joinUs.vue')
const shop = () => import('../components/merchandise/shop/shop.vue')
const failurePay = () => import('../components/merchandise/order/failurePay.vue')
const paySuccess = () => import('../components/merchandise/order/paySuccess.vue')
const pc_shophp = () => import('../components/merchandise/shop/pc_shophp.vue')
const goodsOrder = () => import('../components/merchandise/order/goodsOrder.vue')
const shoppingtrolley = () => import('../components/merchandise/shoppingtrolley/shoppingtrolley.vue')
// //登录、注册、忘记密码网页
const userData = () => import('../components/userData/userData.vue')
const login = () => import('../components/userData/login.vue')
const register = () => import('../components/userData/register.vue')
const forgetPassword = () => import('../components/userData/forgetPassword.vue')
// // 会员中心网页
const membercenter = () => import('../components/merchandise/membercenter/membercenter.vue')
const member = () => import('../components/merchandise/membercenter/member.vue')
const accountpwd = () => import('../components/merchandise/membercenter/accountpwd.vue')
const toevaluate = () => import('../components/merchandise/membercenter/toevaluate.vue')
const userevalua = () => import('../components/merchandise/membercenter/userevalua.vue') 
// //  微信端
const unregistered = () => import('../components/merchandise/my/unregistered.vue')
const havelogined = () => import('../components/merchandise/my/havelogined.vue')
const myorder = () => import('../components/merchandise/my/myorder.vue')
const accountset = () => import('../components/merchandise/my/accountset.vue')
// //银联支付
const pay = () => import('../components/merchandise/order/pay')
// //支付宝支付
const Alipay = () => import('../components/merchandise/order/Alipay')
// //手机端的全部产品的导航
const navShow = () => import('../components/merchandise/allProduct/navShow.vue')
// //分页组件
const pagePublic = () => import('../components/pagePublic')
//手机端我的订单
const myOrderTel = () => import('../components/merchandise/membercenter/myOrderTel.vue')

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
          path: 'taxationServer',//公司工商
          name: 'taxationServer',
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
          path:'navShow',//手机端点击全部服务跳转到此页，此页内容是展示导航栏的链接
          name:'navShow',
          component:navShow
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
          path: 'unregistered',//微信-我的（未注册）
          name: 'unregistered',
          component: unregistered
        },
        {
          path: 'havelogined',//微信-我的（已登录）
          name: 'havelogined',
          component: havelogined
        },
        {
          path: 'myorder',//微信-我的订单
          name: 'myorder',
          component: myorder
        },
        {
          path: 'accountset',//微信-账户设置
          name: 'accountset',
          component: accountset
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
      path:'/pagePublic',//手机端点击全部服务跳转到此页，此页内容是展示导航栏的链接
      name:'pagePublic',
      component:pagePublic
    },
    {
      path:'/myOrderTel',//手机端我的订单
      name:'myOrderTel',
      component:myOrderTel
    }
    
  ]
})
            
