<template>
  <div>
   <!-- 登录、注册、忘记密码头部 -->
    <div class="welcome">
     <!-- 信达图标 -->
     <div class="logo"></div>
     <!-- 竖线 -->
     <div class="virgule"></div>
     <!-- 欢迎登录 -->
     <p>欢迎登录</p>
   </div>
   <router-view/>
   </div>
</template>

<script>
  var md5 = require('md5');
export default {
  name: 'userData',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang='less'>
  .welcome{
    width: 1200px;
    height: 97px;
    margin: 0 auto;
    display: flex;
    .logo{
      width: 125px;
      height: 56px;
      background-image: url("../merchandise/pc_images/login_logo.png");
      margin: 21px 38px 20px 12px;      
    }
    .virgule{
      width: 1px;
      height: 47px;
      background: #b4b4b4;
      margin-top: 25px;
    }
    p{
      font-size: 18px;
      color: #2a2a2a;
      margin: 39px 0 21px 26px;
    }
  }
</style>




