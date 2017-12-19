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
          <!-- 手机号码 -->
          <div class="fleBox">
            <input class="box" type="number" placeholder="请输入手机号码" v-model="phone">
            <div class="erping" v-show="ephone">
              <div class="erImg"></div>
              <p>{{Ephone}}</p>
            </div>
          </div>
          <!-- 验证码 -->
          <div class="verify">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgCode">
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl">
            </div>
            <div class="erping" v-show="eyan">
              <div class="erImg"></div>
              <p>{{Eyan}}</p>
            </div>
          </div>
          <!-- 短信验证码 -->
          <div class="acquire">
            <input class="boxI" type="text" placeholder="请输入短信验证码" v-model="smsNumber">
            <div @click="getCode" style="margin-left: 9px">
              <button v-show="get" class="getblue">点击获取</button>
              <button v-show="getNew" class="getgray" disabled>重新获取{{count}}</button>
            </div>
            <div class="erping" v-show="eduan">
              <div class="erImg"></div>
              <p>{{Eduan}}</p>
            </div>
          </div>
          <!-- 三级联动 -->
          <div class="fleBox">
            <select name="" id="" @change="proChange" v-model="province">
              <option value="0">省</option>
              <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
            </select>
            <select name="" id="" @change="cityChange" v-model="city">
              <option value="0">市</option>
              <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
            </select>
            <select name="" id="" v-model="area" @change="quhao">
              <option value="">区</option>
              <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>
            </select>
            <!-- 三级联动错误提示 -->
            <div class="erping" v-show="esan">
              <div class="erImg"></div>
              <p>{{Esan}}</p>
            </div>
          </div>
          <div class="fleBox">
            <!-- 设置密码 -->
            <input class="setPass" type="password" placeholder="请设置密码（6-20位）" v-model="setPass">
            <!-- 设置密码错误提示信息 -->
            <div class="erping" v-show="emi">
              <div class="erImg"></div>
              <p>{{Emi}}</p>
            </div>
          </div>
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
    <button @click="ceshian">测试专用按钮</button>
    <!-- 注册成功弹出框 -->
    <div class="tanchu">
      <el-dialog title="" :visible.sync="centerDialogVisible" width="40%">
        <div class="ping">
          <img src="../merchandise/pc_images/chenggong.jpg" alt="">
          <h3>恭喜您，注册成功！</h3>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"><a href="#/userData/login">立即登录</a></el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import dist from '../../districts/districts'
var md5 = require('md5');
export default {
  name: 'register',
  created(){
    this.setTitle('欢迎注册')
  },
  data () {
    return {
      centerDialogVisible: false,
      phone:'',
      show:false,
      error:'',
      setPass:'',
      imgUrl:'/xinda-api/ajaxAuthcode',
      imgCode:'',
      //三级联动
      provinces:dist[100000],
      citys:[],
      areas:[],
      province:'0',
      city:'0',
      area:'',

      //点击获取
      count:'60',
      getNew:false,
      get:true,
      smsNumber:'',

      ceshi: false,

      eyan: false,
      Eyan:'',
      eduan:false,
      Eduan:'',
      esan: false,
      Esan:'',
      emi:false,
      Emi:'',
      ephone:false,
      Ephone:'',


    }
  },
  methods:{
    ceshian:function(){
      this.centerDialogVisible = true      
    },
    quhao:function(){
      console.log(this.area)
    },
    ...mapActions(['setTitle']),
    //三级联动
    proChange(){
      this.citys = dist[this.province];
    },
    cityChange(){
      this.areas = dist[this.city];
    },
    selected(data){
      this.distCode = data.area.code;
    },
    //验证码图片点击更换
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    //点击获取短信验证码
    getCode:function(){
      // 判断手机号
      if(this.phone){//手机号有输入时
        if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){//手机号匹配错误
          this.Ephone="请输入正确的手机号码";
          this.ephone=true;
        }else{ //手机号匹配正确
          this.ephone=false;
        }
      }else{ //手机号为空时
        this.ephone=true;
        this.Ephone="手机号码不能为空";        
        // return;
      }
      // 判断验证码
      if(this.imgCode){//验证码有输入时
        //图片验证码匹配
        this.ajax.post('/xinda-api/register/sendsms',this.qs.stringify({
          cellphone: this.phone,
          smsType:1,
          imgCode: this.imgCode,
        })).then(data =>{
          console.log(data,data.data.status);
          if (data.data.status == 1) { //图片验证码输入正确
            this.get = false;
            this.getNew = true;
            this.eyan=false;
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
            this.Eyan= data.data.msg;
            this.eyan=true;
            this.imgUrl = this.imgUrl + '?t' + new Date().getTime();
          }
        })
        }else{//验证码为空时
          this.Eyan="验证码不能为空";
          this.eyan=true;
        }
    },
    //立即注册按钮
    iregister: function(){
      // 判断手机号
      if(this.phone){
        if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){//手机号匹配错误
          this.ephone = true;
          this.Ephone = "手机号码格式不正确"
        }else{ //手机号匹配正确
          this.ephone = false;
        }
      }else{
        this.ephone = true;
        this.Ephone = "请输入手机号码";
      }

      // 图片验证码
      if(this.imgCode){
        if(/^[A-z0-9]{4}$/.test(this.imgCode)){
          this.eyan = false;   
          this.shuxue += 1;
        }else{
          this.eyan = true;          
          this.Eyan = '验证码格式不正确'
        }
      }else{
        this.eyan = true;
        this.Eyan = "请输入验证码";
      }
      console.log(this.shuxue);
      //短信验证码判断
      if(this.smsNumber){
        if(/^\d{6}$/.test(this.smsNumber)){
          this.eduan=false;
        }else{
          this.eduan=true;
          this.Eduan="短信验证码错误";
        }
      }else{
        this.eduan=true;
        this.Eduan="请输入短信验证码";        
      }
      // 判断省市区
      if(this.area){
        this.esan=false;
      }else{
        this.esan=true;
        this.Esan="请选择您所在区域"; 
      }
      // 判断密码
      if(this.setPass){
        if(/^\d{6,20}$/.test(this.setPass)){
          this.emi=false;
        }else{
          this.emi=true;
          this.Emi="请设置6-20位任意数字/字母";
        }
      }else{
        this.emi=true;
        this.Emi="请您的密码";
      }
      // 当全部正确之后开始注册接口
      if(this.ephone == false && this.eyan == false && this.eduan == false&& this.esan ==  false && this.emi == false){
        this.ajax.post('/xinda-api/register/register',this.qs.stringify({
          cellphone: this.phone,
          smsType:1,
          validCode:111111,
          password:md5(this.setPass), 
          regionId:this.area,
        })).then(data =>{
          console.log(data,data.data.status);
          if(data.data.status == -2 | data.data.status == -3){

            this.show = true;
            this.error = data.data.msg;
            this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
            return;
          }else if(data.data.status == 1){//全部正确之后
            this.show = false;
            // location.href='#/userData/login';//登录界面
            this.centerDialogVisible = true;
          }
        })

      }




    }
  }
}
</script>

<style scoped lang='less'>
  .erping{
    display: flex;
    div{
      margin: 10px 0 0 4px;
    }
    >p{
      margin: 9px 0 0 5px;
      color: #e00202;
      font-size: 10px;
    }
  }
    .fleBox{
      display: flex;
    }
      .erImg{
        width: 15px;
        height: 15px;
        background-image: url('../merchandise/pc_images/tishi.png');
        background-position: -5px -7px;
      } 
      .ephone{
        display: flex;
      }
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
  .register{
    width: 100%;
    height: 654px;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    .centent{
      width: 1200px;
      height: 500px;        
      margin: 52px auto 0;
      display: flex;
      // justify-content: space-around;
      background-color: #fff;
    }
    .left{
      width: 500px;
      margin-top: 50px;
      margin-left: 100px;
      >p{
        font-size: 14px;
        margin-left: 43px;
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
    // justify-content: space-around;
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
    // justify-content: space-around;
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
    margin: 50px 0 0 190px;
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
  select{
    width: 91px;
    height: 35px;
    margin-bottom: 20px;
    border-radius: 3px;
    border: 1px solid #cbcbcb;   
    margin-right: 3px; 
  }


</style>
