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
          <input class="box" type="number" placeholder="请输入手机号码" v-model="phone">
           <!-- @blur="numbers" -->
          <div class="verify">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgCode">
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl">
            </div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder="请输入短信验证码" v-model="smsNumber">
            <div @click="getCode">
              <button v-show="get" class="getblue">点击获取</button>
              <button v-show="getNew" class="getgray">重新获取{{count}}</button>
            </div>
          </div>
          <select name="" id="" @change="proChange" v-model="province">
            <option value="0">省</option>
            <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
          </select>
          <select name="" id="" @change="cityChange" v-model="city">
            <option value="0">市</option>
            <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
          </select>
          <select name="" id="" v-model="area">
            <option value="">区</option>
            <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>            
          </select>
          <input class="setPass" type="password" placeholder="请设置密码" v-model="setPass" @blur="passwor">
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


import dist from '../../districts/districts'
var md5 = require('md5');
export default {
  name: 'register',
  data () {
    return {
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
    }
  },
  methods:{
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
            smsType:1,
            imgCode: this.imgCode,
          })).then(data =>{
            console.log(data,data.data.status);
            if (data.data.status == 1) { //图片验证码输入正确
              // console.log('图片验证码输入正确');
              this.get = false;
              this.getNew = true;
              this.show=false;
              var that = this;
              var dic = setInterval(function() {
                that.count--;
                if (that.count == 1){
                  clearInterval(dic);
                  this.get = true;
                  this.getNew = false;
                }
              },1000)``
            }else{ //图片验证码输入错误
              // console.log('验证码输入错误');
              this.error="验证码输入错误";
              this.show=true;
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

    //立即注册按钮
    iregister(){  
      // console.log(this.area),
      this.ajax.post('/xinda-api/register/register',
      this.qs.stringify({
        cellphone: this.phone,
        smsType:1,
        validCode: 111111,
        password:md5(this.setPass),
        regionId:this.area,
      }))
      .then(data => {
        console.log('注册提交',data.data.msg,data.data.status);
      })
      
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



  }
}
    //点击获取短信验证码可以多次点击，要修改
    //省市区接口提交的地区编号
    //17806253629
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
      height: 500px;        
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
  }


</style>
