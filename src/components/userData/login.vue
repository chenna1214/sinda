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
          <input class="field" type="text" placeholder="请输入手机号码" v-model="phone">
          <input class="field" type="password" placeholder="请输入密码" v-model="pass">
          <div>
            <input class="import" type="text" placeholder="请输入验证码" v-model="imgCode">
            <div class="verify" @click="imgReflash">
              <img :src="imgUrl">
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
import {mapActions} from 'vuex'//改变数据


  var md5 = require('md5');
  export default {
    name: 'login',
    created(){
      this.setTitle('登录')
    },
    data () {
      return {
        phone:'',
        error:'',
        show:false,
        pass:'',//验证码
        imgCode:'',
        imgUrl:'/xinda-api/ajaxAuthcode',

      }
    },
    methods:{
      //验证码图片点击切换
      imgReflash: function() {
        this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
      },
      ...mapActions(['setName','setTitle']),//获得用户名
      //立即登录按钮动态
      now:function(){
        //检验手机号是否正确
        if(this.phone){
          if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){  //手机号输入错误
            this.error="请输入正确的手机号码";
            this.show=true;
            return;
          }else{   //手机号输入正确
            this.show=false;
          }
        }else{  //手机号为空
          this.error="手机号码不能为空";
          this.show=true;
          return;
        }
        //检验密码是否正确
        if(this.pass){
           if(!/^[0-9A-Za-z]{8,20}$/.test(this.pass)){ //密码错误时
              this.error="请输入正确的密码";
              this.show=true;
              return;
            }else{ //密码正确时
              this.show=false;
            }
        }else{//密码为空时
          this.error="密码不能为空";
          this.show=true;
          return;
        }
        //验证码本地检验
        if(this.imgCode){
          if(!/^[0-9A-Za-z]{4}$/.test(this.imgCode)){
            this.error="验证码输入错误";
            this.show=true;
            return;
          }else{
            this.show=false;
            //验证码接口检验
            this.ajax.post('/xinda-api/sso/login',this.qs.stringify({
              loginId: this.phone,
              password: md5(this.pass), 
              imgCode: this.imgCode,
            })).then(data => {
              console.log('验证码接口返回',data,data.data.status,data.data.msg);
              if(data.data.status=='1'){
                location.href='#/merchandise/allProduct';
                this.show=false;
                this.setName(this.phone);//获得用户名
                sessionStorage.setItem('userName',this.phone)

              }else{
                this.error = data.data.msg;
                this.show=true;
                return;
              }
            })
          }
        }else{
          this.error="验证码不能为空";
          this.show=true;
          return;
        }
      },
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
