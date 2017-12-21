<template>
  <div>
   <!-- 登录 -->
    <div class="login">
      <div class="login-centent">
        <div class="loginleft">
          <!-- 提示错误信息的盒子 -->
          <div class="anError" v-if="showE">
            <!-- 小红点 -->
            <p>一</p>
            <!-- 提示的错误信息 -->
            <p class="wrongTip">{{error}}</p>
          </div>
          <!-- 手机号码 -->
          <div class="fleBox">
            <input class="field" type="number" placeholder="请输入手机号码" v-model="phone" @focus="Zphone" @blur="Cphone">
            <div class="yeahGreen" v-show="showYphone"></div>
            <div class="yeahing" v-show="yphone">
              <p class="yeahP">请输入11位中国大陆手机号</p>
            </div>
            <div class="erping" v-show="ephone">
              <div class="erImg"></div>
              <p class="errP">{{Ephone}}</p>
            </div>
          </div>

          <!-- 输入密码 -->
          <div class="fleBox">
            <div class="eyeBox">
              <input :type="pwType" class="field" placeholder="请输入密码" v-model="setPass" @focus="Zmi" @blur="Cmi">
              <!-- 小眼睛 -->
              <img :src="logImg" class="eyes" alt="" @click="showHidden">
            </div>
            <div class="yeahing" v-show="ymi">
              <p id = "miJian">• 长度为6-20个字符</p>
              <p id = "miJian">• 支持数字，大小写字母</p>
              <p id = "miJian">• 不允许有空格</p>
            </div>
            <!-- 设置密码错误提示信息 -->
            <div class="erping" v-show="emi">
              <div class="erImg"></div>
              <p class="errP">{{Emi}}</p>
            </div>
            <div class="yeahGreen" v-show="showYMi"></div>
          </div>

          <!-- 验证码 -->
          <div class="verify">
            <input class="import field" type="text" placeholder="请输入验证码" v-model="imgCode" @focus="Zyan" @blur="Cyan">
            <div class="verify" @click="imgReflash">
              <img :src="imgUrl">
            </div>
            <div class="yeahGreen" v-show="showYYan"></div>            
            <div class="yeahing" v-show="yyan">
              <p>请输入四位图片验证码</p>
            </div>
            <div class="erping" v-show="eyan">
              <div class="erImg"></div>
              <p class="errP">{{Eyan}}</p>
            </div>
          </div>

          <!-- 忘记密码 -->
          <a href="#/userData/forgetPassword">忘记密码?</a><br>

          <!-- 立即登录跳转 -->
          <button class="logining" @click="now">立即登录</button>
        </div>
        <!-- 中间分割线 -->
        <p class="longString"></p>
        <!-- 右侧内容 -->
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
import { mapActions } from "vuex"; //改变数据
var md5 = require("md5");
const eye = [
  require("../merchandise/pc_images/mpp.png"),
  require("../merchandise/pc_images/mppNone.png")
];
export default {
  name: "login",
  created() {
    this.setTitle("欢迎登录");
  },
  data() {
    return {
      error: "",
      show: true,
      imgUrl: "/xinda-api/ajaxAuthcode",
      showE: false,
      // 手机号码
      phone: "",
      ephone: false,
      Ephone: "",
      showYphone: false,
      yphone: false,
      // 验证码
      imgCode: "",
      eyan: false,
      Eyan: "",
      yyan: false,
      showYYan: false,
      // 密码
      setPass: "",
      emi: false,
      Emi: "",
      ymi: false,
      showYMi: false,

      pwType: 'password',
      logImg: eye[0],


    };
  },
  methods: {
    //验证码图片点击切换
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },

    ...mapActions(["setName", "setTitle"]), //获得用户名

    // 密码小眼睛点击事件
    showHidden: function() {
      this.pwType = this.pwType === "password" ? "text" : "password";
      if (this.pwType === "password") { 
        // 密码
        this.logImg = eye[0];
      } else {
        // 明码
        this.logImg = eye[1];
      }
    },
    //获得焦点事件............................................
    //手机号码
    Zphone: function() {
      this.ephone = false;
      this.yphone = true;
      this.showYphone = false;
    },
    // 密码
    Zmi: function() {
      this.emi = false;
      this.ymi = true;
      this.showYMi = false;
    },
    // 图片验证码
    Zyan: function() {
      this.eyan = false;
      this.yyan = true;
      this.showYYan = false;
    },

    // 失去焦点事件...........................................
    // 手机号码
    Cphone: function() {
      var phoneStyle = /^1[3|4|5|7|8]\d{9}$/;
      if (this.phone) {
        if (!phoneStyle.test(this.phone)) {
          this.yphone = false;
          this.ephone = true;
          this.Ephone = "请输入正确的手机号码";
          this.showYphone = false;
        } else {
          this.ephone = false;
          this.yphone = false;
          this.showYphone = true;
        }
      } else {
        this.yphone = false;
        this.showYphone = false;
      }
    },
    // 密码
    Cmi: function() {
      this.ymi = false;
      if (this.setPass) {
        if (!/^[0-9A-Za-z]{6,20}$/.test(this.setPass)) {
          console.log("输入错误");
          this.ymi = false;
          this.emi = true;
          this.Emi = "请输入8-20位数字或大小写字母";
          this.showYMi = false;
        } else {
          this.emi = false;
          this.showYMi = true;
        }
      } else {
        this.ymi = false;
        this.showYMi = false;
      }
    },
    // 验证码
    Cyan: function() {
      this.yyan = false;
      var imgCodeStyle = /^[A-Za-z0-9]{4}$/;
      if (this.imgCode) {
        if (!imgCodeStyle.test(this.imgCode)) {
          this.yyan = false;
          this.eyan = true;
          this.Eyan = "请输入正确的短信验证码";
          this.showYYan = false;
        } else {
          this.eyan = false;
          this.showYYan = true;
        }
      } else {
        this.yyan = false;
        this.showYYan = false;
      }
    },
    //立即登录
    now: function() {
      // 判断手机号
      if (this.phone) {
        //手机号有输入时
        if (!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)) {
          //手机号匹配错误
          this.Ephone = "请输入正确的手机号码";
          this.ephone = true;
        } else {
          //手机号匹配正确
          this.ephone = false;
          this.emi == false;
        }
      } else {
        //手机号为空时
        this.ephone = true;
        this.Ephone = "手机号码不能为空";
      }

      //检验密码是否正确
      if (this.setPass) {
        this.emi = false;
      } else {
        //密码为空时
        this.Emi = "请输入您的账号密码";
        this.emi = true;
      }
      //验证码本地检验
      if (this.imgCode) {
        if (!/^[0-9A-Za-z]{4}$/.test(this.imgCode)) {
          this.Eyan = "请输入正确的短信验证码";
          this.eyan = true;
        } else {
          this.eyan = false;
        }
      } else {
        this.Eyan = "验证码不能为空";
        this.eyan = true;
      }
      if (this.ephone == false && this.eyan == false && this.emi == false) {
        //验证码接口检验
        this.ajax
          .post(
            "/xinda-api/sso/login",
            this.qs.stringify({
              loginId: this.phone,
              password: md5(this.setPass),
              imgCode: this.imgCode
            })
          )
          .then(data => {
            console.log("验证码接口返回", data, data.data.status, data.data.msg);
            if (data.data.status == "1") {
              console.log("等于  1");
              location.href = "#/merchandise/allProduct";
              this.showE = false;
              this.setName(this.phone); //获得用户名
              sessionStorage.setItem("userName", this.phone);
            } else {
              console.log("不等于  1");
              this.error = data.data.msg;
              this.showE = true;
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
              this.showYphone = false;
              this.showYYan = false;
              this.showYYan = false;
            }
          });
      }
    }
  }
};
</script>

<style scoped lang='less'>
// 去掉input框数字形式的上下小箭头
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.erping {
  display: flex;
  div {
    margin: 10px 0 0 4px;
  }
  .errP {
    margin: 9px 0 0 5px;
    color: #e00202;
    font-size: 10px;
  }
}
.yeahing {
  p {
    font-size: 11px;
    color: #999;
    margin: 10px 0 0 9px;
  }
  #miJian {
    line-height: 0.9;
  }
}
.erImg {
  // 红色的X号
  width: 15px;
  height: 15px;
  background-image: url("../merchandise/pc_images/tishi.png");
  background-position: -5px -7px;
}
.yeahGreen {
  //绿色小对号
  background-image: url("../merchandise/pc_images/tishi.png");
  background-position: -5px 22px;
  width: 15px;
  height: 15px;
  margin: 10px 0 0 5px;
  line-height: 30px;
}
.login {
  width: 100%;
  height: 708px;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
}
.login-centent {
  width: 1200px;
  height: 435px;
  margin: 52px auto 0;
  display: flex;
  background-color: #fff;
  // 中间分割线
  .longString {
    width: 1px;
    height: 260px;
    background-color: #cbcbcb;
    margin-top: 82px;
  }
}
// 顶部错误盒子
.anError {
  width: 283px;
  height: 25px;
  border: 1px solid #fcaeae;
  margin-bottom: 20px;
  background: #fffef5;
  p:nth-child(1) {
    background: #f33e3e;
    color: #fff;
    border: 1px solid #f33e3e;
    border-radius: 50%;
    height: 15px;
    line-height: 16px;
    margin: 4px 0 0 20px;
  }
  .wrongTip {
    color: #ea2b2b;
    padding: 0 20px;
    font-size: 14px;
    margin-top: 3px;
  }
}
.loginleft {
  height: 270px;
  width: 500px;
  margin-top: 50px;
  margin-left: 100px;
  > div {
    display: flex;
    .verify {
      cursor:pointer;
      img {
        width: 80px;
        height: 36px;
        margin-left: 7px;
      }
    }
    .import {
      width: 174px;
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
  // 立即登录
  .logining {
    cursor:pointer;
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
.loginright {
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
  .fleBox {
    display: flex;
  }
}
.eyeBox {
  position: relative;
  .eyes{
    cursor:pointer;    
    position: absolute;
    right: 0px;
    top: 1px;
    padding: 10px 8px;
  }
}
</style>
