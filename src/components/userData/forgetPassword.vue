<template>
  <div>
  <!-- 忘记密码 -->
    <div class="forget">
      <div class="centent">
        <div class="left">
          <!-- 提示错误信息的盒子 -->
          <div class="anError" v-if="show">
            <!-- 小红点 -->
            <p>一</p>
            <!-- 提示的错误信息 -->
            <p class="wrongTip">{{error}}</p>
          </div>
          <input class="box" type="number" placeholder="请输入手机号码" v-model="phone">
          <div class="verify">
            <input class="import" type="text" placeholder="请输入验证码" v-model="imgCode">
            <!-- 验证码获取接口 -->
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl">
            </div>
          </div>
          <div class="acquire">
            <input class="import" type="text" placeholder="请输入短信验证码" v-model="smsNumber">
            <div @click="getCode">
              <button v-show="get" class="getblue">点击获取</button>
              <button v-show="getNew" class="getgray">重新获取{{count}}</button>
            </div>
          </div>
          <input class="security" type="text" placeholder="请输入新密码(8-20位数字或字母)" v-model="newPass">
          <input class="security" type="text" placeholder="请再次确认密码" v-model="confirmPass">
          <button class="affirm" @click="Cchange">确认修改</button>
        </div>
        <p class="division"></p>
        <!-- 中间分割线 -->
        <div class="registersecond">
          <span>想起密码来了？</span><br>
          <a class="dl" href="#/userData/login">返回登录>></a>
          <img src="../merchandise/pc_images/pc_login.png" alt="">
        </div>
      </div>
      <!-- 注册成功弹出框 -->
      <div class="tanchu">
        <el-dialog title="" :visible.sync="centerDialogVisible" width="40%">
          <!-- <p>返回结果</p> -->
          <div class="ping">
            <img src="../merchandise/pc_images/chenggong.jpg" alt="">
            <h3>恭喜您，修改成功！</h3>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false"><a href="#/userData/login">立即登录</a></el-button>
          </span>
        </el-dialog>
      </div>
    </div>
   </div>

</template>

<script>
import {mapActions} from 'vuex'
var md5 = require('md5');
export default {
  name: 'forgetPassword',
  data () {
    return {
      centerDialogVisible: false,
      show:false,
      error:'',
      imgUrl:'/xinda-api/ajaxAuthcode',
      //点击获取
      count:'60',
      getNew:false,
      get:true,
      phone:'',
      imgCode:'',
      smsNumber:'',

      ceshi: false,

      newPass:'',
      confirmPass:'',
      

    }
  },
    created(){
      this.setTitle('忘记密码')
    },
  methods:{
    ...mapActions(['setTitle']),
    //验证码图片点击更换
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    //点击获取短信验证码
    getCode:function(){
      if(this.phone){//手机号有输入时
        if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){//手机号匹配错误
          this.error="请输入正确的手机号码";
          this.show=true;
          return;
          
        }else{ //手机号匹配正确
          this.show=false;
        }
        if(this.imgCode){//验证码有输入时
          //图片验证码匹配
          this.ajax.post('/xinda-api/register/sendsms',this.qs.stringify({
            cellphone: this.phone,
            smsType:2,
            imgCode: this.imgCode,
          })).then(data =>{
            console.log(data,data.data.status);
            if (data.data.status == 1) { //图片验证码输入正确
              this.get = false;
              this.getNew = true;
              this.show=false;
              this.ceshi = true;
              var that = this;
              var dic = setInterval(function() {
                that.count--;
                if (that.count == 1){
                  clearInterval(dic);
                  that.get = true;
                  that.getNew = false;
                }
              },1000)
            }else{ //图片验证码输入错误
              console.log( data.data.msg);
              this.error= data.data.msg;
              this.show=true;
              this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
              return;
            }
          });
          }else{//验证码为空时
            console.log('验证码现在是空的');
            this.error="验证码不能为空";
            this.show=true;
            return;
          }
      }else{ //手机号为空时
        this.show=true;
        this.error="手机号码不能为空";        
        return;
      }
    },
    //确认修改按钮
    Cchange: function(){
      if(this.ceshi == true){
        if(this.smsNumber){
          if(/^\d{6}$/.test(this.smsNumber)){//短信验证码
            this.show=false;
            // 判断密码
            if(this.newPass){
              if(/^\d{8,20}$/.test(this.newPass)){
                this.show=false;
                if(this.newPass != this.confirmPass){
                  this.show=true;
                  this.error = "两次输入密码不一致";
                  return;
                }else{
                  this.show=false;
                  this.ajax.post('/xinda-api/register/findpas',this.qs.stringify({
                    cellphone: this.phone,					
                    smsType:2,
                    validCode:111111,
                    password:md5(this.newPass),
                  })).then(data =>{
                    console.log(data,data.data.status);
                    if(data.data.status != 1){
                      this.show = true;
                      this.error = data.data.msg;
                      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
                      return;
                    }else{//全部正确之后
                      this.show = false;
                      // location.href='#/userData/login';//登录界面
                      this.centerDialogVisible = true;                      
                    }
                  })
                }
              }else{
                this.show=true;
                this.error="请设置8-20位任意数字/字母";
              }
            }else{
              this.show=true;
              this.error="请您的密码";
            }
          }else{
            this.show=true;
            this.error="短信验证码错误";        
            return;
          }
        }else{
          this.show=true;
          this.error="请填写短信验证码";        
          return;
        }
      }else{
        console.log('没有进来')
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .tanchu{
    title{
      font-size: 12px;

    }
    button{
      width: 118px;
      margin-left: 30px;
    }
    h3{
      margin: 15px 0 0 37px;
      font-size: 19px;
    }
    .ping{
      display: flex;
    }
    a{
      color: #fff;
      text-decoration: none;
    }
    img{
      width: 76px;
      height: 62px;
      margin-left: 40px;
    }
  }
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
  .forget{
    width: 100%;
    height: 708px;
    border: 1px solid #f5f5f5;
    background: #f5f5f5;
    .centent{
      width: 1200px;
      height: 500px;        
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
    .getblue{
      width: 98px;
      height: 37px;
      border: 1px solid #2693d4;
      border-radius: 3px;
      background-color: #fff;
      color: #2693d4;
    }
    .getgray{
      width: 98px;
      height: 37px;
      border: 1px solid #aaa;
      border-radius: 3px;
      background-color: #aaa;
      color: #fff;
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
