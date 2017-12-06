<template>
  <div>
   <!-- 登录 -->
    <div class="login">
      <div class="login-centent">
        <div class="loginleft">
          <input class="field" type="text" placeholder="请输入手机号码" v-model="aa" @blur="cc">
          <input class="field" type="text" placeholder="请输入密码">
          <div>
            <input class="import" type="text" placeholder="请输入验证码">
            <div class="verify">
              <img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">
            </div>
          </div>
          <a href="#/userData/forgetPassword">忘记密码?</a><br>
          <button class="logining">立即登录</button>
        </div>
        <!-- 中间分割线 -->        
        <p></p>
        <div class="loginright">
          <span>还没有账号？</span><br>
          <a href="#/userData/register">立即注册>></a>
          <img src="../merchandise/pc_images/pc_login.png" alt="">
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      aa:''
    }
  },
  methods:{
    cc:function(){
      console.log(this.aa);
    }
  }
}
</script>

<style scoped lang='less'>
  .login {
    width: 100%;
    height: 708px;
    border: 1px solid #f5f5f5;
    background: #f5f5f5;
  }
  .login-centent{
    width: 1200px;
    height: 435px;        
    margin: 52px auto 0;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    p{
      width: 1px;
      height: 260px;
      background-color: #cbcbcb;
      margin-top: 82px;
    }
  }
  .loginleft{
    width: 283px;
    height: 258px;
    margin-top: 50px;
    div{
      display: flex;
      justify-content: space-around;
      .verify{
        width: 85px;
        height: 35px;
        padding-left: 10px;
        background-color: pink;
      }
      .import {
        width: 174px;
        height: 35px;
        border: 1px solid #cbcbcb;
        margin-bottom: 24px;
        border-radius: 3px;
        padding: 0 0 0 20px;
        font-size: 15px;
      }
    }
    .field {
      width: 260px;
      height: 35px;
      border: 1px solid #cbcbcb;
      margin-bottom: 24px;
      border-radius: 3px;
      padding: 0 0 0 20px;
      font-size: 15px;
    }
    a {
      margin-left: 210px;
      font-size: 14px;
      color: #2693d4;
      text-decoration: none;
    }
    .logining{
      width: 280px;
      height: 35px;
      margin-top: 23px;
      border: 1px solid #2693d4;
      color: #2693d4;
      border-radius: 3px;
      background-color: #fff;
      font-size: 15px;      
    }
  }
  .loginright{
    width: 283px;
    height: 258px;
    margin-top: 40px;
    span{
      display: block;
    }
    a{
      font-size: 16px;
      color: #2693d4;
      text-decoration: none;
    }
    img{
      margin-left: -15px;
      margin-top: 18px;
    }
  }
  
</style>
