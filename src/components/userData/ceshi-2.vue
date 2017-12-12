<template>
  <div class="hello">
    <!-- <h3>这是注册页面</h3>
    <a href="#/LoginRegister/login">登录</a> -->
    <div class="vacancy"></div><br>
    <div class="register">
      <div class="registerI">
        <div class="registerfirst">
          <input class="box" @blur="onBlur" v-model="phone" type="tel" placeholder=" 请输入手机号">
          <p class="boxtel" v-show="boxTC">*您输入的手机号不正确</p>
          <div class="verify">
            <input class="boxI" type="text" v-model="imgCode" placeholder=" 请输入验证码">
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl" alt="">
            </div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder=" 请输入验证码">
            <button @click="getCode">点击获取</button>
          </div>
          <v-distpicker class="register-android-wheel" province="省" city="市" area="区"></v-distpicker>
          <input class="boxII" type="password" @blur="onBlurI" v-model="boxPasw" placeholder=" 请设置密码">
          <p class="boxpas" v-show="boxPC">*您输入的密码不正确</p>
          <button class="boxIII" @click="iregister">立即注册</button>
          <p>注册及同意遵守
            <a class="agreement" href="">《服务协议》</a>
          </p>
        </div>
        <p class="division"></p>
        <!-- 中间分割线 -->
        <div class="registersecond">
          <span>已有账号？</span><br>
          <a class="dl" href="#/LoginRegister/login">立即登录>></a>
          <img src="../assets/pc/u7967.jpg" alt="">
        </div>
      </div>
    </div><br>
    <div class="bottom"></div>
  </div>
</template>
<script>
import LRhead from "../components/sinda_LoginRegister_header";
import VDistpicker from "v-distpicker";
import { mapActions } from "vuex";
var md5 = require("md5");
export default {
  data() {
    return {
      imgUrl: "/xinda-api/ajaxAuthcode",
      imgCode: "",
      phone: "",
      boxTC: false,
      boxPasw: "",
      boxPC: false,
    };
  },
  methods: {
    ...mapActions(["setNum", "setloginState"]),
    //验证码图片点击时更换
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    //点击获取按钮
    getCode: function() {
      this.setNum(0);
      this.ajax
        .post(
          "/xinda-api/register/sendsms",
          this.qs.stringify({
            cellphone: this.phone,
            smsType: 1,
            imgCode: this.imgCode
          })
        )
        .then(data => {
          console.log(data);
        });
    },
    //input请设置密码
    onBlurI: function() {
      if (/^([a-zA-Z]\w){6,20}$/.test(this.boxPasw)) {
      } else {
        this.boxPC = true;
      }
    },
    //立即注册按钮
    iregister() {
      this.ajax.post(
        "/xinda-api/register/register",
        this.qs.stringify({
          cellphone: this.phone,
          smsType: 1,
          validCode: this.imgCode,
          password:md5(this.boxPasw),
          regionId:110010
        })
        .then(data => {
          console.log(data.data.msg,data.data.status);
        })
      );
    }
  },
  created: function() {
    this.setloginState("注册");
  },
  components: { LRhead, VDistpicker }
};
</script>
