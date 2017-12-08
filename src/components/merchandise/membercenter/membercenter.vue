<template>
  <div>
   <!-- 会员中心头部 -->
    <div class="membercenter">
      <!-- 首页 / 个人主页 -->
      <div class="member-top">首页 / 个人主页</div>
      <!-- 主体 -->
      <div class="member-main">
        <!-- 左 -->
        <div class="main-left">
          <!-- 头像 -->
          <div class="mai-avatar">
            <div class="ava-img"></div>
            <div class="ava-phone">13100000000</div>
          </div>
          <!-- 三个点击事件 -->
          <div class="mai-three">
            <!-- 我的订单 -->
            <router-link tag="div" :to="{path:'/merchandise/membercenter/member'}" class="pc-myorder" active-class="active">
              <div class="ord-img"></div>
              <div class="ord-cha">我的订单</div>
            </router-link>
            <!-- 用户评价 -->
            <router-link tag="div" :to="{path: '/merchandise/membercenter/userevalua'}" class="pc-user" active-class="active">
              <div class="use-img"></div>
              <div class="use-cha">用户评价</div>
            </router-link>
            <!-- 账户设置 -->
            <router-link tag="div" :to="{path: '/merchandise/membercenter/accountpwd'}" class="pc-accset" active-class="active">
              <div class="acc-img"></div>
              <div class="acc-cha">账户设置</div>
            </router-link>
          </div>
        </div>
        <!-- 右 -->
        <div class="main-right">
          <router-view></router-view>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'membercenter',
  data () {
    return {
      active: true,
    }
  },
}
</script>

<style scoped lang='less'>
  .active{
    background-color: #e9e9e9;
  }
  .membercenter{
    width: 78%;
    margin: 0 auto;
    .member-top{
      width: 100%;
      font-size: 14px;
      color: #696969;
      line-height: 27px;
    }
    .member-main{
      width: 100%;
      margin-top: 2%;
      margin-bottom: 5%;
      display: flex;
      // 左
      .main-left{
        width: 25%;
        // 头像
        .mai-avatar{
          width: 100%;
          overflow: hidden;
          background-color: #e9e9e9;
          .ava-img{
            width: 150px;
            height: 147px;
            background: url(../pc_images/code.png) no-repeat 0 -518px;
            margin: 0 auto;
            margin-top: 3%;
          }
          .ava-phone{
            font-size: 20px;
            color: #000;
            line-height: 44px;
            text-align: center;
          }
        }
        // 三个点击事件
        .mai-three{
          width: 100%;
          height: 400px;
          margin-top: 10%;
          background-color: #f7f7f7;
          >div{
            width: 100%;
            font-size: 24px;
            line-height: 48px;
            color: #000;
            text-decoration: none;
            display: flex;
            cursor: pointer;
            &:hover{
              background-color: #e9e9e9;
            }
            >div{
              margin: 2% 0 2% 4%;
            }
            // 我的订单
            .ord-img{
              width: 48px;
              height:48px;
              background: url(../pc_images/code.png)no-repeat -551px -377px;
            }
            // 用户评价
            .use-img{
              width: 48px;
              height:48px;
              background: url(../pc_images/code.png)no-repeat -548px -455px;
            }
            // 账户设置
            .acc-img{
              width: 48px;
              height:48px;
              background: url(../pc_images/code.png)no-repeat -545px -546px;
            }
          }
        }
      }
      // 右
      .main-right{
        width: 74%;
        margin-left: 1%;
      }
    }
  }
</style>
