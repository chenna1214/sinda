<template>
  <div>
   <!-- 登录 -->
    <div class="login">
      <div class="login-centent">
        <div class="loginleft">
          <!-- 提示错误信息的盒子 -->
          <div class="anError" v-if="show">
            <!-- 小红点 -->
            <p>一</p>
            <!-- 提示的错误信息 -->
            <p class="wrongTip">{{error}}</p>
          </div>
          <input class="field" type="text" placeholder="请输入手机号码" v-model="phone" @blur="numbers">
          <input class="field" type="password" placeholder="请输入密码" v-model="pass" @blur="passwor">
          <div>
            <input class="import" type="text" placeholder="请输入验证码">
            <div class="verify">
              <img src="http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode" alt="">
            </div>
          </div>
          <a href="#/userData/forgetPassword">忘记密码?</a><br>
          <button class="logining"  @click="now">立即登录</button>
        </div>
        <!-- 中间分割线 -->
        <p class="longString"></p>
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
        phone:'',
        error:'',
        show:false,
        pass:'',

      }
    },
    methods:{
      now:function(){

      },
      //检验手机号是否正确
      numbers:function (){
        if(this.phone){
           if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
              this.error="请输入正确的手机号码";
              this.show=true;
              return;
            }else{
              this.show=false;           
            }
        }else{
            //提示手机号不能为空
            this.error="手机号码不能为空";
            this.show=true;
              return;            
        }
      },
      //检验密码是否正确
      passwor:function(){
        if(this.pass){
           if(!/^[0-9A-Za-z]{8,20}$/.test(this.pass)){
              this.error="请输入正确的密码";
              this.show=true;
              return;              
            }else{
              this.show=false;     
            }
        }else{
            //提示密码不能为空
            this.error="密码不能为空";
            this.show=true;
            return;
        }
      },
      // now:function(){
      //     this.ajax.post('/xinda-api/sso/login',{
      //       loginId: 12345678901,
      //       password:'46f94c8de14fb36680850768ff1b7f2a', 
      //       imgCode:'gb4n'
      //     }).then(function(data){
      //       if(data.status=='1'){
      //           location.href=''
      //       }else{

      //       }
      //     })
      // }
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
    .longString{
      width: 1px;
      height: 260px;
      background-color: #cbcbcb;
      margin-top: 82px;
    }
  }
  .anError{
    width: 283px;
    height: 25px;
    border: 1px solid #fcaeae;
    margin-bottom: 20px;
    background: #fffef5;
    p:nth-child(1){
      background: #f33e3e;
      color: #fff;
      border: 1px solid #f33e3e;
      border-radius: 50%;
      height: 15px;
      line-height: 16px;
      margin: 4px 0 0 20px;
    }
    .wrongTip{
      color: #ea2b2b;
      padding: 0 20px;
      font-size: 14px;
      margin-top: 3px;
    }
  }
  .loginleft{
    width: 283px;
    height: 258px;
    margin-top: 50px;
    div{
      display: flex;
      .verify{
        img{
          width: 80px;
          height: 36px;
          margin-left: 7px;
        }
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
