<template>
  <!-- 未注册 -->
  <div class="hidden-sm-and-up unregis">
    <!-- 头像 -->
    <div class="weavatar">
      <img src="../pc_images/we-people.png" alt="">
    </div>
    <!-- 登录注册 -->
    <div class="wereglog">
      <router-link tag="div" :to="{path: '/userData/register'}" class="we-regis">注册</router-link>
      <router-link tag="div" :to="{path: '/userData/login'}" class="we-login">登录</router-link>
    </div>
    <!-- 我的订单，账户设置 -->
    <div class="weorderset">
      <!-- 我的订单 -->
      <router-link tag="div" :to="{path: '/userData/login'}" class="we-myorder">
        <div>
          <div class="myo-img">
            <img src="../pc_images/we-myorder.png" alt="">
          </div>
          <div class="myo-order">我的订单</div>
        </div>
        <span class="myo-arrow"></span>
      </router-link>
      <!-- 账户设置 -->
      <router-link tag="div" :to="{path: '/userData/login'}" class="we-setting">
        <div>
          <div class="set-img">
            <img src="../pc_images/we-setting.png" alt="">
          </div>
          <div class="set-setting">账户设置</div>
        </div>
        <span class="set-arrow"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "unregistered",
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped lang='less'>
  @media all and (max-width: 767px){
    .unregis{
      background-color: #f8f8f8;
      overflow: hidden;
    }
    // 头像
    .weavatar{
      width: 2rem;
      height: 2rem;
      background-color: #fff;
      border-radius: 50%;
      margin: 0 auto;
      margin-top: 2.8rem;
      overflow: hidden;
      img{
        width: 1.4rem;
        height: 1.4rem;
        display: block;
        margin: 0 auto;
        margin-top: 12%;
      }
    }
    // 登录注册
    .wereglog{
      width: 46.27%;
      height: 0.59rem;
      margin: 0 auto;
      margin-top: 0.25rem;
      margin-bottom: 1.63rem;
      display: flex;
      justify-content: space-between;
      >div{
        width: 45%;
        background-color: #2693d4;
        color: #fff;
        font-size: 0.29rem;
        text-align: center;
        line-height: 0.59rem;
        border-radius: 5px;
      }
    }
    // 我的订单，账户设置
    .weorderset{
      width: 65%;
      height: 1.85rem;
      margin: 0 auto;
      margin-bottom: 4.58rem;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      >div{
        width: 100%;
        height: 0.75rem;
        font-size: 0.3rem;
        color: #9c9c9c;
        background-color: #e9e9e9;
        border-radius: 1px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        span{
          width: 0.16rem;
          height: 0.16rem;
          border-right: 2px solid #adadad;
          border-top: 2px solid #adadad;
          transform: rotate(45deg);
        }
        >div{
          width: 80%;
          display: flex;
          // 我的订单
          .myo-img{
            width: 0.39rem;
            height: 0.39rem;
            img{
              width: 0.39rem;
              height: 0.39rem;
              display: block;
            }
          }
          .myo-order{
            margin-left: 0.46rem;
          }
          // 账户设置
          .set-img{
            width: 0.39rem;
            height: 0.39rem;
            img{
            width: 0.39rem;
            height: 0.39rem;
              display: block;
            }
          }
          .set-setting{
            margin-left: 0.46rem;
          }
        }
      }
    }
  } 
</style>
