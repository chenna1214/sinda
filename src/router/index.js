import Vue from 'vue'
import Router from 'vue-router'
//非登录、注册、忘记密码网页
import merchandise from '../components/merchandise/merchandise'
import allProduct from '../components/merchandise/allProduct/allProduct.vue'
import taxationService from '../components/merchandise/taxationService/taxationService.vue'
import productdetail from '../components/merchandise/taxationService/productdetail.vue'
import companyIndustry from '../components/merchandise/companyIndustry/companyIndustry.vue'
import joinUs from '../components/merchandise/joinUs/joinUs.vue'
import shop from '../components/merchandise/shop/shop.vue'
import pc_shophp from '../components/merchandise/shop/pc_shophp.vue'
//登录、注册、忘记密码网页
import userData from '../components/userData/userData.vue'
import login from '../components/userData/login.vue'
import register from '../components/userData/register.vue'
import forgetPassword from '../components/userData/forgetPassword.vue'
// 会员中心网页
import membercenter from '../components/merchandise/membercenter/membercenter.vue'
import member from '../components/merchandise/memberCenter/member.vue'
// import changepwd from '../components/merchandise/memberCenter/changepwd.vue'
// import haveevalua from '../components/merchandise/memberCenter/haveevalua.vue'
import memaccount from '../components/merchandise/memberCenter/memaccount.vue'
// import toevaluate from '../components/merchandise/memberCenter/toevaluate.vue'
import userevalua from '../components/merchandise/memberCenter/userevalua.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/userData',//登录、注册、忘记密码网页
        name: 'userData',
        component: userData,
        children:[
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
        path: '/merchandise',//非登录、注册、忘记密码网页
        name: 'merchandise',
        component: merchandise,
        children:[
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
                path: 'companyIndustry',//公司工商
                name: 'companyIndustry',
                component: companyIndustry
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
                path: 'pc_shophp',//店铺首页
                name: 'pc_shophp',
                component: pc_shophp
              },
              {
                path: 'membercenter',//会员中心网页，公共
                name: 'membercenter',
                component: membercenter,
                children:[
                  {
                    path: 'member',//会员中心
                    name: 'member',
                    component: member
                  },
                  {
                    path: 'userevalua',//用户评价
                    name: 'userevalua',
                    component: userevalua
                  },
                  {
                    path: 'memaccount',//账户设置
                    name: 'memaccount',
                    component: memaccount
                  },
                ]
              },
        ]
      },
    ]
  })
  