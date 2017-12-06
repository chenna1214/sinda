<template>
  <div>
  <!-- 忘记密码 -->
    <div class="forget">
      <div class="centent">
        <div class="left">
          <input class="box" type="text" placeholder="请输入手机号码">
          <div class="verify">
            <input class="import" type="text" placeholder="请输入验证码">
            <div class="verifyI"></div>
          </div>
          <div class="acquire">
            <input class="import" type="text" placeholder="请输入验证码">
            <button>点击获取</button>
          </div>
          <input class="security" type="text" placeholder="请输入新密码">
          <input class="security" type="text" placeholder="请再次确认密码">
          <button class="affirm">确认修改</button>
        </div>
        <p class="division"></p>
        <!-- 中间分割线 -->
        <div class="registersecond">
          <span>想起密码来了？</span><br>
          <a class="dl" href="#/userData/login">返回登录>></a>
          <img src="../merchandise/pc_images/pc_login.png" alt="">
        </div>
      </div>
    </div>





   </div>
</template>

<script>
export default {
  name: 'forgetPassword',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang='less'>
  .forget{
    width: 100%;
    height: 708px;
    border: 1px solid #f5f5f5;
    background: #f5f5f5;
    .centent{
      width: 1200px;
      height: 435px;        
      margin: 52px auto 0;
      display: flex;
      justify-content: space-around;
      background-color: #fff;
      .left{
        width: 283px;
        height: 258px;
        margin-top: 50px;
      }
      .import{
        width: 154px;
        height: 35px;
        border: 1px solid #cbcbcb;
        margin-bottom: 20px;
        border-radius: 3px;
        padding: 0 0 0 20px;
        font-size: 15px;
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
      font-size: 15px;
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
    font-size: 15px;
  }

  .security {
    width: 260px;
    height: 35px;
    margin-bottom: 27px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    padding: 0 0 0 20px;
    font-size: 15px;
    
  }
  .affirm {
    width: 280px;
    height: 35px;
    border: 1px solid #2693d4;
    color: #2693d4;
    border-radius: 3px;
    background-color: #fff;
    font-size: 15px;
  }
  // input::-ms-input-placeholder{text-align: center;} 
  // input::-webkit-input-placeholder{text-align: center;} 
</style>
