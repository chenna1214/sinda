<template>
  <div>
   <!-- 登录 -->
    <div class="login">

      <!-- 手机端样式 -->
      <div class="hidden-sm-and-up">
        <div class="graTop ">
          <div @click="back">
            <span></span>
          </div>
          <p>登录</p>
        </div>

        <div class="centent">

          <!-- 提示错误信息的盒子 -->
          <div class="anError" v-if="showES">
            <div class="errImg"></div>
            <!-- 提示的错误信息 -->
            <p class="wrongTip">{{errorWeb}}</p>
          </div>

          <!-- 手机号码 -->
          <div class="fleBox" style="font-size: 0;">
            <input class="box" type="number" placeholder="请输入手机号码" v-model="phone">
          </div>

          <!-- 输入密码 -->
          <div class="fleBox" style="font-size: 0;">
            <div class="eyeBox">
              <input :type="pwType" class="box" placeholder="请输入密码" v-model="setPass">
              <!-- 小眼睛 -->
              <img :src="logImg" class="eyes" alt="" @click="showHidden">
            </div>
          </div>

          <!-- 验证码 -->
          <div class="verify" style="font-size: 0;">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgCode">
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl">
            </div>
          </div>

        <div style="font-size: 0;" class="forgetPass">
          <a href="#/userData/forgetPassword">忘记密码？</a>
        </div>

          <!-- 立即登录跳转 -->
          <button class="logining" @click="nowS">立即登录</button>
        </div>

        <div class="SloginB" >
          <div class="slo-why">还没有信达账号么？</div>
          <router-link tag="div" :to="{path: '/userData/register'}" class="slo-btn">立即注册</router-link>
        </div>

      </div>

      <!-- pc端样式 -->
      <div class="hidden-xs-only">
        <el-row type="flex" class="login-centent" justify="center" :gutter="20" style="margin: 52px auto 0">
          <el-col class="hidden-xs-only" :sm="13" :md="13" :lg="13">
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
              <a href="#/userData/forgetPassword" id="forgetPass" st>忘记密码?</a><br>

              <!-- 立即登录跳转 -->
              <button class="logining" @click="now">立即登录</button>
            </div>
          </el-col>

          <el-col :span="0.5" style="padding: 0" class="hidden-xs-only">
            <!-- 中间分割线 -->
            <p class="longString"></p>
          </el-col>

          <el-col :sm="10" :md="10" :lg="10" class="hidden-xs-only">
            <!-- 右侧内容 -->
            <div class="loginright">
              <span>还没有账号？</span><br>
              <a href="#/userData/register">立即注册>></a>
              <img src="../merchandise/pc_images/pc_login.png" alt="">
            </div>
          </el-col>
            
        </el-row>
      </div>

    </div>
  
  </div>
</template>

<script>
import { mapActions } from "vuex"; //改变数据
import { Row, Col } from "element-ui";
var md5 = require("md5");
const eye = [
  require("../merchandise/pc_images/mpp.png"),
  require("../merchandise/pc_images/mppNone.png")
];
export default {
  name: "login",
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  created() {
    this.setTitle("欢迎登录");
  },
  data() {
    return {
      error: "",
      show: true,
      showES: false,
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

      pwType: "password",
      logImg: eye[0],
      errorWeb: ""
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

    // 手机端返回小三角
    back: function() {
      location.href = "#/merchandise/allProduct"; //我的已登录界面
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
        if (!/^\w{6,20}$/.test(this.setPass)) {
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
    //pc立即登录
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
        if (!/^\w{6,20}$/.test(this.setPass)) {
          this.emi = true;
          this.Emi = "请输入8-20位数字或大小写字母";
        } else {
          this.emi = false;
        }
      } else {
        // 密码为空时
        this.Emi = "请输入您的账号密码";
        this.emi = true;
      }

      //验证码本地检验
      if (this.imgCode) {
        if (!/^[0-9A-Za-z]{4}$/.test(this.imgCode)) {
          this.Eyan = "请输入正确的图片验证码";
          this.eyan = true;
        } else {
          this.eyan = false;
        }
      } else {
        this.Eyan = "图片验证码不能为空";
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
              location.href = "#/merchandise/allProduct";
              this.showE = false;
              this.setName(this.phone); //获得用户名
              sessionStorage.setItem("userName", this.phone);
            } else {
              this.error = data.data.msg;
              this.showE = true;
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
              this.showYphone = false;
              this.showYYan = false;
              this.showYYan = false;
            }
          });
      }
    },
    //W-立即登录
    nowS: function() {
      // 判断手机号
      if (this.phone) {
        //手机号有输入时
        if (!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)) {
          //手机号匹配错误
          this.errorWeb = "请输入正确的手机号码";
          this.showES = true;
          return;
        } else {
          //手机号匹配正确
          this.ephone = false;
          this.emi == false;
        }
      } else {
        //手机号为空时
        this.errorWeb = "手机号码不能为空";
        this.showES = true;
        return;
      }

      //检验密码是否正确
      if (this.setPass) {
        this.emi = false;
      } else {
        //密码为空时
        this.errorWeb = "请输入您的账户密码";
        this.showES = true;
        return;
      }
      //验证码本地检验
      if (this.imgCode) {
        if (!/^[0-9A-Za-z]{4}$/.test(this.imgCode)) {
          this.errorWeb = "请输入正确的图片验证码";
          this.showES = true;
          return;
        } else {
          this.eyan = false;
        }
      } else {
        this.errorWeb = "图片验证码不能为空";
        this.showES = true;
        return;
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
              location.href = "#/merchandise/allProduct";
              this.showES = false;
              this.setName(this.phone); //获得用户名
              sessionStorage.setItem("userName", this.phone);
            } else {
              this.errorWeb = data.data.msg;
              this.showES = true;
              return;
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
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

@media all and (min-width: 768px) {
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
    max-width: 1200px;
    height: 500px;
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
    margin: 50px 0 0 12%;
    > div {
      display: flex;
      .verify {
        cursor: pointer;
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
      cursor: pointer;
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
    width: 37%;
    height: 350px;
    margin: 50px auto 0;
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
    .eyes {
      cursor: pointer;
      position: absolute;
      right: 0px;
      top: 1px;
      padding: 10px 8px;
    }
  }
}
@media all and (max-width: 767px) {
  .graTop {
    height: 0.78rem;
    background: #e5e5e5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > div {
      position: relative;
      width: 0.7rem;
      height: 0.75rem;
      > span {
        position: absolute;
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
        border-left: 2px solid #838383;
        border-top: 2px solid #838383;
        transform: rotate(-45deg);
        top: 0.28rem;
        left: 0.3rem;
      }
    }
    p {
      width: 88%;
      text-align: center;
      line-height: 0.72rem;
      font-size: 0.3rem;
    }
  }
  .anError {
    margin-top: 0.32rem;
    width: 5.47rem;
    height: 0.4rem;
    border: 0.01rem solid #fcaeae;
    background: #fffef5;
    display: flex;
    .errImg {
      width: 15px;
      height: 15px;
      background-image: url("../merchandise/pc_images/tishi.png");
      background-position: -5px -7px;
      margin: 0.05rem 0 0 0.2rem;
    }
    .wrongTip {
      color: #ea2b2b;
      padding: 0 0.2rem;
      font-size: 0.25rem;
      margin-top: 0.03rem;
      line-height: 0.4rem;
    }
  }
  .centent {
    width: 5.47rem;
    margin: 0 auto;
  }

  .eyeBox {
    position: relative;
    img {
      position: absolute;
      width: 0.42rem;
      height: 0.35rem;
      right: 0.2rem;
      top: 0.5rem;
    }
  }

  .box {
    width: 5.27rem;
    height: 0.73rem;
    border: 1px solid #cbcbcb;
    margin-top: 0.32rem;
    border-radius: 0.03rem;
    padding: 0 0 0 0.2rem;
    font-size: 0.29rem;
  }
  .boxI {
    width: 2.72rem;
    height: 0.73rem;
    border: 1px solid #cbcbcb;
    margin-top: 0.32rem;
    border-radius: 0.03rem;
    padding: 0 0 0 0.2rem;
    font-size: 0.29rem;
  }
  .boxII {
    margin-top: 0.32rem;
  }
  .verify {
    display: flex;
    justify-content: space-between;
    .verifyI {
      cursor: pointer;
      img {
        margin-top: 0.32rem;
        width: 2.34rem;
        height: 0.73rem;
      }
    }
  }
  .logining {
    width: 5.47rem;
    height: 0.75rem;
    background: #2693d4;
    color: #fff;
    font-size: 0.3rem;
    margin-top: 1rem;
    border: 1px solid #2693d4;
    border-radius: 0.03rem;
  }
  .forgetPass {
    margin: 0.4rem 0 0 0;
    overflow: hidden;
    > a {
      font-size: 0.3rem;
      color: #2693d4;
      text-decoration: none;
      float: right;
    }
  }
  .SloginB {
    width: 100%;
    height: 0.6rem;
    font-size: 0.24rem;
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    .slo-why {
      line-height: 0.6rem;
    }
    .slo-btn {
      width: 1.5rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      background-color: #2693d4;
    }
  }
}
</style>
