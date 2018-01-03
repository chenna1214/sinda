// import Vue from 'vue'
// import Router from 'vue-router'
//非登录、注册、忘记密码网页
const merchandise = () => import(/* webpackChunkName: "merchandise" */ '../components/merchandise/merchandise')
const allProduct = () => import(/* webpackChunkName: "merchandise" */ '../components/merchandise/allProduct/allProduct.vue')
const taxationService = () => import(/* webpackChunkName: "taxationService" */ '../components/merchandise/taxationService/taxationService.vue')
const productdetail = () => import(/* webpackChunkName: "productdetail" */ '../components/merchandise/taxationService/productdetail.vue')
const joinUs = () => import(/* webpackChunkName: "joinUs" */ '../components/merchandise/joinUs/joinUs.vue')
const shop = () => import(/* webpackChunkName: "shop" */ '../components/merchandise/shop/shop.vue')
const failurePay = () => import(/* webpackChunkName: "failurePay" */ '../components/merchandise/order/failurePay.vue')
const paySuccess = () => import(/* webpackChunkName: "paySuccess" */ '../components/merchandise/order/paySuccess.vue')
const pc_shophp = () => import(/* webpackChunkName: "pc_shophp" */ '../components/merchandise/shop/pc_shophp.vue')
const goodsOrder = () => import(/* webpackChunkName: "goodsOrder" */ '../components/merchandise/order/goodsOrder.vue')
const shoppingtrolley = () => import(/* webpackChunkName: "shoppingtrolley" */ '../components/merchandise/shoppingtrolley/shoppingtrolley.vue')
//登录、注册、忘记密码网页
const userData = () => import(/* webpackChunkName: "userData" */ '../components/userData/userData.vue')
const login = () => import(/* webpackChunkName: "login" */ '../components/userData/login.vue')
const register = () => import(/* webpackChunkName: "register" */ '../components/userData/register.vue')
const forgetPassword = () => import(/* webpackChunkName: "forgetPassword" */ '../components/userData/forgetPassword.vue')
// 会员中心网页
const membercenter = () => import(/* webpackChunkName: "membercenter" */ '../components/merchandise/membercenter/membercenter.vue')
const member = () => import(/* webpackChunkName: "member" */ '../components/merchandise/membercenter/member.vue')
const accountpwd = () => import(/* webpackChunkName: "accountpwd" */ '../components/merchandise/membercenter/accountpwd.vue')
const toevaluate = () => import(/* webpackChunkName: "toevaluate" */ '../components/merchandise/membercenter/toevaluate.vue')
const userevalua = () => import(/* webpackChunkName: "userevalua" */ '../components/merchandise/membercenter/userevalua.vue')
//微信端
const unregistered = () => import(/* webpackChunkName: "unregistered" */ '../components/merchandise/my/unregistered.vue')
const havelogined = () => import(/* webpackChunkName: "havelogined" */ '../components/merchandise/my/havelogined.vue')
const accountset = () => import(/* webpackChunkName: "accountset" */ '../components/merchandise/my/accountset.vue')
//银联支付
const pay = () => import(/* webpackChunkName: "pay" */ '../components/merchandise/order/pay')
//支付宝支付
const Alipay = () => import(/* webpackChunkName: "Alipay" */ '../components/merchandise/order/Alipay')
//手机端的全部产品的导航
const navShow = () => import(/* webpackChunkName: "navShow" */ '../components/merchandise/allProduct/navShow.vue')
//分页组件
const lopagePublicgin = () => import(/* webpackChunkName: "pagePublic" */ '../components/pagePublic')
//手机端我的订单
const myOrderTel = () => import(/* webpackChunkName: "myOrderTel" */ '../components/merchandise/membercenter/myOrderTel.vue')
const pagePublic = () => import(/* webpackChunkName: "pagePublic" */ '../components/pagePublic.vue')
Vue.use(VueRouter)
export default new VueRouter({
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
    },
    
  ]
})
            
