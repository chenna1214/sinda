<template>
  <div>
  <!-- 忘记密码 -->
    <div class="forget">

      <!-- 手机端样式 -->
      <div class="hidden-sm-and-up">
        <div class="graTop ">
          <div @click="back">
            <span></span>
          </div>
          <p>忘记密码</p>
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

          <!-- 验证码 -->
          <div class="verify" style="font-size: 0;">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgCode">
            <!-- 验证码获取接口 -->
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl">
            </div>
          </div>

          <!-- 短信验证码 -->
          <div class="acquire" style="font-size: 0;">
            <input class="boxI" type="text" placeholder="请输入短信验证码" v-model="smsNumber">
            <div class = "spanStyle boxII">
              <span v-show = "show" @click="getCodeS" class="getblue">获取验证码</span>
              <span v-show = "!show" class="getgray">重新获取{{count}}s</span>
            </div>
          </div>

          <!-- 密码 -->
          <div class="fleBox" style="font-size: 0;">
            <!-- 设置密码 -->
            <div class="eyeBox">
              <input class="box" :type="pwType" placeholder="请设置密码（6-20位）" v-model="setPass">
              <!-- 小眼睛 -->
              <img :src="logImg" class="eyes" alt="" @click="showHidden">
            </div>
          </div>

          <!-- 确认密码 -->
          <div class="fleBox" style="font-size: 0;">
            <!-- 设置密码 -->
            <div class="eyeBox">
              <input :type="pwTypeT" class="box"  placeholder="请再次确认密码" v-model="quePass" @blur="Cque">
              <!-- 小眼睛 -->
              <img :src="logImgT" class="eyes" alt="" @click="showHiddenT">
            </div>
          </div>
          <!-- 确认修改 -->
          <button class="affirm" @click="CchangeS">确认修改</button>
        </div>

      </div>

      <!-- pc端样式 -->
      <div class="hidden-xs-only">
        <el-row type="flex" class="centent" justify="center" :gutter="20" style="margin: 52px auto 0">
          <el-col class="hidden-xs-only" :sm="13" :md="13" :lg="13">
            <div class="left">
              <!-- 提示错误信息的盒子 -->
              <div class="anError" v-if="showE">
                <!-- 小红点 -->
                <p>一</p>
                <!-- 提示的错误信息 -->
                <p class="wrongTip">{{error}}</p>
              </div>

              <!-- 手机号码 -->
              <div class="fleBox">
                <input class="box" type="number" placeholder="请输入手机号码" v-model="phone" @focus="Zphone" @blur="Cphone">
                <div class="yeahGreen" v-show="showYphone"></div>
                <div class="yeahing" v-show="yphone">
                  <p class="yeahP">请输入11位中国大陆手机号</p>
                </div>
                <div class="erping" v-show="ephone">
                  <div class="erImg"></div>
                  <p class="errP">{{Ephone}}</p>
                </div>
              </div>                                               

              <!-- 验证码 -->
              <div class="verify">
                <input class="import" type="text" placeholder="请输入验证码" v-model="imgCode" @focus="Zyan" @blur="Cyan">
                <!-- 验证码获取接口 -->
                <div class="verifyI" @click="imgReflash">
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

              <!-- 短信验证码 -->
              <div class="acquire">
                <input class="import" type="text" placeholder="请输入短信验证码" v-model="smsNumber" @focus="Zduan" @blur="Cduan">
                <div class = "spanStyle">
                  <span v-show = "show" @click="getCode" class="getblue">获取验证码</span>
                  <span v-show = "!show" class="getgray">重新获取{{count}}s</span>
                </div>
                <div class="yeahGreen" v-show="showYDuan"></div>                        
                <div class="yeahing" v-show="yduan">
                  <p>请输入六位短信验证码</p>
                </div>
                <div class="erping" v-show="eduan">
                  <div class="erImg"></div>
                  <p class="errP">{{Eduan}}</p>
                </div>
              </div>

              <!-- 密码 -->
              <div class="fleBox">
                <!-- 设置密码 -->
                <div class="eyeBox">
                  <input class="setPass" :type="pwType" placeholder="请设置密码（6-20位）" v-model="setPass" @focus="Zmi" @blur="Cmi">
                  <!-- 小眼睛 -->
                  <img :src="logImg" class="eyes" alt="" @click="showHidden">
                </div>
                <div class="yeahing" v-show="ymi">
                  <p id = "miJian">• 长度为6-20个字符</p>
                  <p id = "miJian">• 支持数字，大小写字母</p>
                  <p id = "miJian">• 不允许有空格</p>
                </div>
                <div class="yeahGreen" v-show="showYMi"></div>            
                <!-- 设置密码错误提示信息 -->
                <div class="erping" v-show="emi">
                  <div class="erImg"></div>
                  <p class="errP">{{Emi}}</p>
                </div>
              </div>

              <!-- 确认密码 -->
              <div class="fleBox">
                <!-- 设置密码 -->
                <div class="eyeBox">
                  <input :type="pwTypeT" class="setPass"  placeholder="请再次确认密码" v-model="quePass" @blur="Cque">
                  <!-- 小眼睛 -->
                  <img :src="logImgT" class="eyes" alt="" @click="showHiddenT">
                </div>
                <div class="yeahGreen" v-show="showYQue"></div>            
                <!-- 设置密码错误提示信息 -->
                <div class="erping" v-show="eque">
                  <div class="erImg"></div>
                  <p class="errP">{{Eque}}</p>
                </div>
              </div>
              <!-- 确认修改 -->
              <button class="affirm" @click="Cchange">确认修改</button>
            </div>
          </el-col>        

          <el-col :span="0.5" style="padding: 0" class="hidden-xs-only">
            <!-- 中间分割线 -->
            <p class="division"></p>
          </el-col>                

          <el-col :sm="10" :md="10" :lg="10" class="hidden-xs-only">
            <!-- 右侧内容 -->
            <div class="registersecond">
              <span>想起密码来了？</span><br>
              <a class="dl" href="#/userData/login">返回登录>></a>
              <img src="../merchandise/pc_images/pc_login.png" alt="">
            </div>
          </el-col>

        </el-row>
      </div>

      <!-- 修改密码成功弹出框 -->
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
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
import { mapActions } from "vuex";
import { Row, Col, Dialog,Button} from "element-ui";
var md5 = require("md5");
const eye = [
  require("../merchandise/pc_images/mpp.png"),
  require("../merchandise/pc_images/mppNone.png")
];
const eyes = [
  require("../merchandise/pc_images/mpp.png"),
  require("../merchandise/pc_images/mppNone.png")
];
export default {
  name: "forgetPassword",
    components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Dialog.name]: Dialog,
    [Button.name]: Button,
  },
  data() {
    return {
      // 计时器
      centerDialogVisible: false,

      show: true,
      showE: false,
      error: "",
      imgUrl: "/xinda-api/ajaxAuthcode",
      // 点击获取
      count: "",
      getNew: false,
      get: true,
      timer: null,
      // 手机号码
      phone: "",
      ephone: false,
      Ephone: "",
      yphone: false,
      showYphone: false,
      // 验证码
      imgCode: "",
      eyan: false,
      Eyan: "",
      yyan: false,
      showYYan: false,
      // 短信验证码
      smsNumber: "",
      eduan: false,
      Eduan: "",
      yduan: false,
      showYDuan: false,
      // 密码
      pass: "",
      emi: false,
      Emi: "",
      showYMi: false,
      ymi: false,
      // 确认密码
      quePass: "",
      setPass: "",
      eque: false,
      Eque: "",
      showYQue: false,

      pwType: "password",
      pwTypeT: "password",
      logImg: eye[0],
      logImgT: eyes[0],

      showES: false,
      errorWeb: ""
    };
  },
  created() {
    this.setTitle("忘记密码");
  },
  methods: {
    ...mapActions(["setTitle"]),

    //验证码图片点击更换
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },

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
    // 密码小眼睛点击事件
    showHiddenT: function() {
      this.pwTypeT = this.pwTypeT === "password" ? "text" : "password";
      if (this.pwTypeT === "password") {
        // 密码
        this.logImgT = eye[0];
      } else {
        // 明码
        this.logImgT = eye[1];
      }
    },

    // 手机端返回小三角
    back: function() {
      location.href = "#/userData/login"; //登录界面
    },

    // 获得焦点事件.......................................
    //手机号码
    Zphone: function() {
      this.ephone = false;
      this.yphone = true;
      this.showYphone = false;
    },
    // 图片验证码
    Zyan: function() {
      this.eyan = false;
      this.yyan = true;
      this.showYYan = false;
    },
    // 短信验证码
    Zduan: function() {
      this.eduan = false;
      this.yduan = true;
      this.showYDuan = false;
    },
    // 密码
    Zmi: function() {
      this.emi = false;
      this.ymi = true;
      this.showYMi = false;
    },
    // 失去焦点事件.........................................
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
    // 短信验证码
    Cduan: function() {
      this.yduan = false;
      if (this.smsNumber) {
        if (!/^[0-9]{6}$/.test(this.smsNumber)) {
          this.yduan = false;
          this.eduan = true;
          this.Eduan = "请输入正确的短信验证码";
          this.showYDuan = false;
        } else {
          this.eduan = false;
          this.showYDuan = true;
        }
      } else {
        this.yduan = false;
        this.showYDuan = false;
      }
    },
    // 密码
    Cmi: function() {
      this.ymi = false;
      var setPassStyle = /^\w{6,20}$/;
      if (this.setPass) {
        if (!setPassStyle.test(this.setPass)) {
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
    // 确认密码
    Cque: function() {
      if (this.quePass) {
        if (this.setPass != this.quePass) {
          this.eque = true;
          this.Eque = "您的两次输入密码不一致，请重新输入";
          this.showYQue = false;
        } else {
          this.eque = false;
          this.showYQue = true;
        }
      } else {
        this.eque = false;
        this.showYQue = false;
      }
    },

    //pc点击获取短信验证码
    getCode: function() {
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
        }
      } else {
        //手机号为空时
        this.ephone = true;
        this.Ephone = "手机号码不能为空";
      }
      // 判断验证码
      if (this.imgCode) {
        //验证码有输入时
        //图片验证码匹配
        this.ajax
          .post(
            "/xinda-api/register/sendsms",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 2,
              imgCode: this.imgCode
            })
          )
          .then(data => {
            console.log(data, data.data.status);
            if (data.data.status == 1) {
              //图片验证码输入正确
              this.get = false;
              this.getNew = true;
              this.eyan = false;
              const TIME_COUNT = 60;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000);
              }
            } else {
              //图片验证码输入错误
              console.log(data.data.msg);
              this.Eyan = data.data.msg;
              this.eyan = true;
              this.showYYan = false;
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
            }
          });
      } else {
        //验证码为空时
        this.Eyan = "验证码不能为空";
        this.eyan = true;
      }
    },

    //手机端点击获取短信验证码
    getCodeS: function() {
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
        }
      } else {
        //手机号为空时
        this.errorWeb = "手机号不能为空";
        this.showES = true;
        return;
      }
      // 判断验证码
      if (this.imgCode) {
        //验证码有输入时
        //图片验证码匹配
        this.ajax
          .post(
            "/xinda-api/register/sendsms",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 2,
              imgCode: this.imgCode
            })
          )
          .then(data => {
            console.log(data, data.data.status);
            if (data.data.status == 1) {
              //图片验证码输入正确
              this.get = false;
              this.getNew = true;
              this.showES = false;
              const TIME_COUNT = 60;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000);
              }
            } else {
              //图片验证码输入错误
              console.log(data.data.msg);
              this.errorWeb = data.data.msg;
              this.showES = true;
              this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
            }
          });
      } else {
        //验证码为空时
        this.errorWeb = "验证码不能为空";
        this.showES = true;
        return;
      }
    },

    //pc确认修改按钮
    Cchange: function() {
      // 判断手机号
      if (this.phone) {
        if (!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)) {
          //手机号匹配错误
          this.ephone = true;
          this.Ephone = "手机号码格式不正确";
        } else {
          //手机号匹配正确
          this.ephone = false;
        }
      } else {
        this.ephone = true;
        this.Ephone = "请输入手机号码";
      }

      // 图片验证码
      if (this.imgCode) {
        if (/^[A-z0-9]{4}$/.test(this.imgCode)) {
          this.eyan = false;
        } else {
          this.eyan = true;
          this.Eyan = "验证码格式不正确";
        }
      } else {
        this.eyan = true;
        this.Eyan = "请输入验证码";
      }
      //短信验证码判断
      if (this.smsNumber) {
        if (/^\d{6}$/.test(this.smsNumber)) {
          this.eduan = false;
        } else {
          this.eduan = true;
          this.Eduan = "短信验证码错误";
        }
      } else {
        this.eduan = true;
        this.Eduan = "请输入6位数字手机验证码";
      }
      // 判断密码
      if (this.setPass) {
        if (/^\w{6,20}$/.test(this.setPass)) {
          this.emi = false;
        } else {
          this.emi = true;
          this.Emi = "请设置6-20位任意数字/字母";
        }
      } else {
        this.emi = true;
        this.Emi = "请设置您的密码";
      }
      // 确认密码
      if (this.quePass) {
        if (this.setPass != this.quePass) {
          this.eque = true;
          this.Eque = "您的两次输入密码不一致，请重新输入";
          this.showYQue = false;
        } else {
          this.eque = false;
          this.showYQue = true;
        }
      } else {
        this.eque = true;
        this.Eque = "请设置您的密码";
        this.showYQue = false;
      }

      if (
        this.ephone == false &&
        this.eyan == false &&
        this.eduan == false &&
        this.eque == false &&
        this.emi == false
      ) {
        this.ajax
          .post(
            "/xinda-api/register/findpas",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 2,
              validCode: 111111,
              password: md5(this.setPass)
            })
          )
          .then(data => {
            console.log(data, data.data.status);
            if (data.data.status != 1) {
              this.showE = true;
              this.error = data.data.msg;
              this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
              this.showYphone = false;
              this.showYYan = false;
              this.showYDuan = false;
              this.showYMi = false;
              this.showYQue = false;
              return;
            } else {
              //全部正确之后
              this.showE = false;
              // location.href='#/userData/login';//登录界面
              this.centerDialogVisible = true;
            }
          });
      }
    },

    //手机端确认修改按钮
    CchangeS: function() {
      // 判断手机号
      if (this.phone) {
        if (!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)) {
          //手机号匹配错误
          this.errorWeb = "请输入正确的手机号码";
          this.showES = true;
          return;
        } else {
          //手机号匹配正确
          this.showES = false;
        }
      } else {
        this.errorWeb = "手机号不能为空";
        this.showES = true;
        return;
      }

      // 图片验证码
      if (this.imgCode) {
        if (/^[A-z0-9]{4}$/.test(this.imgCode)) {
          this.showES = false;
        } else {
          this.errorWeb = "验证码错误";
          this.showES = true;
          return;
        }
      } else {
        this.errorWeb = "请输入验证码";
        this.showES = true;
        return;
      }
      //短信验证码判断
      if (this.smsNumber) {
        if (/^\d{6}$/.test(this.smsNumber)) {
          this.showES = false;
        } else {
          this.errorWeb = "短信验证码错误";
          this.showES = true;
          return;
        }
      } else {
        this.errorWeb = "请输入6位数字手机验证码";
        this.showES = true;
        return;
      }
      // 判断密码
      if (this.setPass) {
        if (/^\w{6,20}$/.test(this.setPass)) {
          this.showES = false;
        } else {
          this.errorWeb = "请设置6-20位任意数字/字母";
          this.showES = true;
          return;
        }
      } else {
        this.errorWeb = "请设置您的密码";
        this.showES = true;
        return;
      }
      // 确认密码
      if (this.quePass) {
        if (this.setPass != this.quePass) {
          this.errorWeb = "请两次输入密码不一致，请重新输入";
          this.showES = true;
          return;
        } else {
          this.showES = false;
        }
      } else {
        this.errorWeb = "请两次输入密码不一致，请重新输入";
        this.showES = true;
        return;
      }

      if (
        this.ephone == false &&
        this.eyan == false &&
        this.eduan == false &&
        this.eque == false &&
        this.emi == false
      ) {
        this.ajax
          .post(
            "/xinda-api/register/findpas",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 2,
              validCode: 111111,
              password: md5(this.setPass)
            })
          )
          .then(data => {
            console.log(data, data.data.status);
            if (data.data.status != 1) {
              this.showES = true;
              this.errorWeb = data.data.msg;
              this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
              return;
            } else {
              //全部正确之后
              this.showES = false;
              location.href = "#/userData/login"; //登录界面
              // this.centerDialogVisible = true;
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
  .tanchu {
    title {
      font-size: 12px;
    }
    button {
      width: 118px;
      margin-left: 30px;
    }
    h3 {
      margin: 15px 0 0 37px;
      font-size: 19px;
    }
    .ping {
      display: flex;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    img {
      width: 76px;
      height: 62px;
      margin-left: 40px;
    }
  }
  .anError {
    width: 283px;
    height: 25px;
    border: 1px solid #fcaeae;
    margin-bottom: 20px;
    background: #fffef5;
    display: flex;
    p:nth-child(1) {
      background: #f33e3e;
      color: #fff;
      border: 1px solid #f33e3e;
      border-radius: 50%;
      height: 15px;
      line-height: 16px;
      margin: 4px 0 0 20px;
      width: 15px;
    }
    .wrongTip {
      color: #ea2b2b;
      padding: 0 20px;
      font-size: 14px;
      margin-top: 3px;
    }
  }
  .forget {
    width: 100%;
    height: 708px;
    border: 1px solid #f5f5f5;
    background: #f5f5f5;
    .centent {
      max-width: 1200px;
      height: 500px;
      margin: 52px auto 0;
      display: flex;
      background-color: #fff;
      .left {
        margin: 50px 0 0 12%;
      }
      .import {
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
  .setPass {
    width: 260px;
    height: 35px;
    border: 1px solid #cbcbcb;
    margin-bottom: 20px;
    border-radius: 3px;
    padding: 0 0 0 20px;
    font-size: 15px;
  }
  .division {
    width: 1px;
    height: 260px;
    background-color: #cbcbcb;
    margin-top: 82px;
  }
  .verify {
    display: flex;
    .verifyI {
      cursor: pointer;
      img {
        width: 87px;
        height: 37px;
        margin-left: 18px;
      }
    }
  }
  .acquire {
    display: flex;
    .getblue {
      display: block;
      text-align: center;
      line-height: 35px;
      width: 98px;
      height: 35px;
      border: 1px solid #2693d4;
      border-radius: 3px;
      background-color: #fff;
      color: #2693d4;
      font-size: 13px;
    }
    .getgray {
      font-size: 13px;
      display: block;
      text-align: center;
      line-height: 35px;
      width: 98px;
      height: 35px;
      border: 1px solid #aaa;
      border-radius: 3px;
      background-color: #aaa;
      color: #fff;
    }
  }
  .registersecond {
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
  }
  .box {
    width: 260px;
    height: 35px;
    border: 1px solid #cbcbcb;
    margin-bottom: 20px;
    border-radius: 3px;
    padding: 0 0 0 20px;
    font-size: 15px;
    margin-top: 0;
  }
  .affirm {
    cursor: pointer;
    width: 280px;
    height: 35px;
    border: 1px solid #2693d4;
    color: #2693d4;
    border-radius: 3px;
    background-color: #fff;
    font-size: 15px;
  }
  .fleBox {
    display: flex;
  }
  .erImg {
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
  .spanStyle {
    cursor: pointer;
    margin-left: 5px;
  }
  .eyeBox {
    position: relative;
    padding-bottom: 5px;
    .eyes {
      cursor: pointer;
      position: absolute;
      right: 0px;
      top: 1px;
      padding: 9px 6px;
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
  .centent {
    width: 5.47rem;
    margin: 0 auto;
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
  .eyeBox {
    position: relative;
    img {
      position: absolute;
      width: 0.42rem;
      height: 0.35rem;
      right: 0.2rem;
      top: 0.25rem;
    }
  }
  .affirm {
    width: 5.47rem;
    height: 0.75rem;
    background: #2693d4;
    color: #fff;
    font-size: 0.3rem;
    margin-top: 1rem;
    border: 1px solid #2693d4;
    border-radius: 0.03rem;
  }
  .acquire {
    display: flex;
    font-size: 0.28rem;
    justify-content: space-between;
    .getblue {
      display: block;
      text-align: center;
      line-height: 0.82rem;
      width: 2.3rem;
      height: 0.73rem;
      border: 1px solid #2693d4;
      border-radius: 3px;
      background-color: #2693d4;
      color: #fff;
      font-size: 0.28rem;
    }
    .getgray {
      font-size: 0.28rem;
      display: block;
      text-align: center;
      line-height: 0.82rem;
      width: 2.3rem;
      height: 0.73rem;
      border: 1px solid #aaa;
      border-radius: 0.03rem;
      background-color: #aaa;
      color: #fff;
    }
  }
}
</style>