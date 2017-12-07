<template>
  <div>
  <!-- 注册 -->
    <div class="register">
      <div class="centent">
        <div class="left">
          <input class="box" type="text" placeholder="请输入手机号码">
          <div class="verify">
            <input class="boxI" type="text" placeholder="请输入验证码">
            <div class="verifyI"></div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder="请输入短信验证码">
            <button>点击获取</button>
          </div>
          <v-distpicker class="register-android-wheel" province="省" city="市" area="区"></v-distpicker>
          <input class="setPass" type="password" placeholder="请设置密码">
          <button class="immediately">立即注册</button>
          <p>注册及同意遵守
            <a class="agreement" href="">《服务协议》</a>
          </p>
        </div>
        <p class="division"></p>
        <!-- 中间分割线 -->
        <div class="registersecond">
          <span>已有账号？</span><br>
          <a class="dl" href="#/userData/login">立即登录>></a>
          <img src="../merchandise/pc_images/pc_login.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang='less'>
  .register{
    width: 100%;
    height: 654px;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    .centent{
      width: 1200px;
      height: 435px;        
      margin: 52px auto 0;
      display: flex;
      justify-content: space-around;
      background-color: #fff;
    }
    .left{
      width: 283px;
      height: 258px;
      margin-top: 50px;
      p {
        margin-top: 5px;
        text-align: center;
        font-size: 14px;
        a {
          font-size: 14px;
          color: #2693d4;
          text-decoration: none;
        }
      }
    }
  }
  .division {
    width: 1px;
    height: 260px;
    background-color: #cbcbcb;
    margin-top: 82px;
  }

  .verify {
    display: flex;
    justify-content: space-around;

    .verifyI {
      width: 85px;
      height: 35px;
      padding-left: 10px;
      background-color: pink;
    }
  }
  .acquire {
    display: flex;
    justify-content: space-around;
    button {
      width: 98px;
      height: 35px;
      border: 1px solid #2693d4;
      border-radius: 3px;
      background-color: #fff;
      color: #2693d4;
    }
  }
  .registersecond {
    width: 283px;
    height: 258px;
    margin-top: 40px;
    span {
      display: block;
    }
    a {
      font-size: 16px;
      color: #2693d4;
      text-decoration: none;
    }
    img {
      margin-left: -15px;
      margin-top: 18px;
    }
  }
  .box {
    width: 260px;
    height: 35px;
    border: 1px solid #cbcbcb;
    margin-bottom: 20px;
    border-radius: 3px;
    padding: 0 0 0 20px;
  }
  .boxI {
    width: 154px;
    height: 35px;
    border: 1px solid #cbcbcb;
    margin-bottom: 20px;
    padding: 0 0 0 20px;
    border-radius: 3px;
  }
  .setPass {
    width: 260px;
    height: 35px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    padding: 0 0 0 20px;    
  }
  .immediately{
    width: 280px;
    height: 35px;
    margin-top: 27px;
    border: 1px solid #2693d4;
    color: #2693d4;
    border-radius: 3px;
    background-color: #fff;
  }
  .bottom {
    padding-bottom: 150px;
  }


</style>
