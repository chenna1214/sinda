<template>
  <div>
    <!-- 注册 -->
    <div class="register">
      <div class="centent">
        <div class="left">
          <!-- 提示错误信息的盒子 -->
          <div class="anError" v-if="show">
            <!-- 小红点 -->
            <p>一</p>
            <!-- 提示的错误信息 -->
            <p class="wrongTip">{{error}}</p>
          </div>
          <input class="box" type="text" placeholder="请输入手机号码" v-model="phone" @blur="numbers">
          <div class="verify">
            <input class="boxI" type="text" placeholder="请输入验证码">
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl"> 
            </div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder="请输入短信验证码">
            <button @click="gain">点击获取</button>
          </div>
          <v-distpicker class="register-android-wheel" province="省" city="市" area="区"></v-distpicker>
          <input class="setPass" type="password" placeholder="请设置密码" v-model="pass" @blur="passwor">
          <button class="immediately" @click="iregister">立即注册</button>
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
var md5 = require('md5');
export default {
  name: 'register',
  data () {
    return {
      phone:'',
      show:false,
      error:'',
      pass:'',
      imgUrl:'http://115.182.107.203:8088/xinda/xinda-api/ajaxAuthcode'

    }
  },
  methods:{
      now:function(){

      },
      //验证码图片点击时更换
      imgReflash: function() {
        this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
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
          //手机号不填写时隐藏
          this.show=false;
            return;            
        }
      },
      //设置密码格式是否正确
      passwor:function(){
        if(this.pass){
          if(!/^[0-9A-Za-z]{8,20}$/.test(this.pass)){
            this.error="请设置8-20位密码";
            this.show=true;
            return;
          }else{
            this.show=false;     
          }
        }else{
          //密码不填写时隐藏
          this.show=false;
          return;
        }
      },
      //点击获取按钮
      gain:function(){

      },
      //立即注册按钮
      iregister(){
        this.ajax.post('/xinda/xinda-api/register/register',
        this.qs.stringify({
          cellphone:this.phone,
          smsType:1,
          // validCode:
        }))
      }
    }
}
</script>

<style scoped lang='less'>
  .anError{
    width: 283px;
    height: 25px;
    border: 1px solid #fcaeae;
    margin-bottom: 20px;
    background: #fffef5;
    display: flex;
    p:nth-child(1){
      background: #f33e3e;
      color: #fff;
      border: 1px solid #f33e3e;
      border-radius: 50%;
      height: 15px;
      line-height: 16px;
      margin: 4px 0 0 20px;
      width: 15px;
    }
    .wrongTip{
      color: #ea2b2b;
      padding: 0 20px;
      font-size: 14px;
      margin-top: 3px;
    }
  }
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
      img{
        width: 87px;
        height: 37px;
        margin-left: 18px;
      }
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
