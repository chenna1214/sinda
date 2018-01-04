<template>
  <div>
    <!-- 注册 -->
    <div class="register">
      <!-- 手机端样式 -->
      <!-- 顶部 -->
      <div class="hidden-sm-and-up" v-if="telDis==telIf">

        <div class="graTop ">
          <div @click="back">
            <span></span>
          </div>
          <p>注册</p>
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
              <input class="box" type="number" placeholder="请输入手机号码" v-model="phone" >
            </div>

            <!-- 验证码 -->
            <div class="verify" style="font-size: 0;">
              <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgCode">
              <div class="verifyI" @click="imgReflash">
                <img :src="imgUrl">
              </div>
            </div>

            <!-- 短信验证码 -->
            <div class="acquire" style="font-size: 0;">
              <input class="boxI" type="text" placeholder="请输入短信验证码" v-model="smsNumber">
              <div class = "spanStyle boxII">
                <span v-show = "showCCC" @click="getCodeS" class="getblue">获取验证码</span>
                <span v-show = "!showCCC" class="getgray">重新获取{{count}}s</span>
              </div>
            </div>

            <!-- 三级联动 -->
            <div class="sanji" style="font-size: 0;">
              <dist class="sjlinkage" @selected="selected"></dist>
            </div>

            <!-- 密码 -->
            <div class="fleBox" style="font-size: 0;">
              <!-- 设置密码 -->
              <div class="eyeBox">
                <input :type="pwType" class="box" placeholder="请设置密码（6-20位）" v-model="setPass">
                <img :src="logImg" class="eyes" alt="" @click="showHidden">
              </div>
            </div>
            <button class="immediately" @click="iregisterS">立即注册</button>

          </div>

      </div>

    <div class="hidden-xs-only">

      <!-- pc端样式 -->
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
              <div class="yeahing hidden-xs-only" v-show="yphone">
                <p class="yeahP">请输入11位中国大陆手机号</p>
              </div>
              <div class="erping" v-show="ephone">
                <div class="erImg"></div>
                <p class="errP">{{Ephone}}</p>
              </div>
            </div>

            <!-- 验证码 -->
            <div class="verify">
              <input class="boxI box" type="text" placeholder="请输入验证码" v-model="imgCode" @focus="Zyan" @blur="Cyan">
              <div class="verifyI" @click="imgReflash">
                <img :src="imgUrl">
              </div>
              <div class="yeahGreen" v-show="showYYan"></div>            
              <div class="yeahing hidden-xs-only" v-show="yyan">
                <p>请输入四位图片验证码</p>
              </div>
              <div class="erping hidden-xs-only" v-show="eyan">
                <div class="erImg"></div>
                <p class="errP">{{Eyan}}</p>
              </div>
            </div>

            <!-- 短信验证码 -->
            <div class="acquire">
              <input class="boxI box" type="text" placeholder="请输入短信验证码" v-model="smsNumber" @focus="Zduan" @blur="Cduan">
              <div class = "spanStyle">
                <span v-show = "show" @click="getCode" class="getblue">获取验证码</span>
                <span v-show = "!show" class="getgray">重新获取{{count}}s</span>
              </div>
              <div class="yeahGreen" v-show="showYDuan"></div>                        
              <div class="yeahing hidden-xs-only" v-show="yduan">
                <p>请输入六位短信验证码</p>
              </div>
              <div class="erping hidden-xs-only" v-show="eduan">
                <div class="erImg"></div>
                <p class="errP">{{Eduan}}</p>
              </div>
            </div>

            <!-- 三级联动 -->
            <div class="fleBox">
              <dist class="linkage" @selected="selected"></dist>
              <!-- 三级联动错误提示 -->
              <div class="erping hidden-xs-only" v-show="esan">
                <div class="erImg"></div>
                <p class="errP">{{Esan}}</p>
              </div>
            </div>

            <!-- 密码 -->
            <div class="fleBox">
              <!-- 设置密码 -->
              <div class="eyeBox">
                <input :type="pwType" class="box" placeholder="请设置密码（6-20位）" v-model="setPass" @focus="Zmi" @blur="Cmi">
                <img :src="logImg" class="eyes" alt="" @click="showHidden">
              </div>
              <div class = "yeahing hidden-xs-only" v-show="ymi">
                <p id = "miJian">• 长度为6-20个字符</p>
                <p id = "miJian">• 支持数字，大小写字母</p>
                <p id = "miJian">• 不允许有空格</p>
              </div>
              <div class="yeahGreen" v-show="showYMi"></div>            
              <!-- 设置密码错误提示信息 -->
              <div class="erping hidden-xs-only" v-show="emi">
                <div class="erImg"></div>
                <p class="errP">{{Emi}}</p>
              </div>
            </div>
            
            <button class="immediately" @click="iregister">立即注册</button>
            <p>注册及同意遵守
              <a class="agreement" href="">《服务协议》</a>
            </p>
          </div>
        </el-col>
        
        <el-col :span="0.5" style="padding: 0" class="hidden-xs-only">          
          <!-- 中间分割线 -->
          <p class="division"></p>
        </el-col>

        <el-col :sm="10" :md="10" :lg="10" class="hidden-xs-only">
          <div class="registersecond">
            <span>已有账号？</span><br>
            <a class="dl" href="#/userData/login">立即登录>></a>
            <img src="../merchandise/pc_images/pc_login.png" alt="">
          </div>
        </el-col>

      </el-row>

    </div>
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
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
import dist from "./distoicker";
import { Row, Col, Dialog,Button} from "element-ui";
import { mapActions } from "vuex";
var md5 = require("md5");
const eye = [
  require("../merchandise/pc_images/mpp.png"),
  require("../merchandise/pc_images/mppNone.png")
];
export default {
  name: "register",
   components: {
     dist,
    [Row.name]: Row,
    [Col.name]: Col,
    [Dialog.name]: Dialog,
    [Button.name]: Button,
  },
  created() {
    this.setTitle("欢迎注册");
  },
  data() {
    return {
      pcDis:0,//电脑端显示
      telDis:1,//手机端显示
      telIf:Vue.telApear,//根据分辨率获取不同值
      centerDialogVisible: false,
      phone: "",
      showE: false,
      show: true,
      error: "",
      imgUrl: "/xinda-api/ajaxAuthcode",
      imgCode: "",

      //点击获取
      count: "",
      timer: null,
      // 手机号码
      ephone: false,
      Ephone: "",
      yphone: false,
      showYphone: false,
      // 验证码
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
      // 三级联动
      esan: false,
      Esan: "",
      // 密码
      setPass: "",
      emi: false,
      Emi: "",
      ymi: false,
      showYMi: false,
      // 小眼睛
      pwType: "password",
      logImg: eye[0],

      // 手机端
      showES: false,
      errorWeb: "",
      showCCC: true
    };
  },
  methods: {
    // 打印区号
    quhao: function() {
      console.log(this.area);
    },

    // 不同网页传参
    ...mapActions(["setTitle"]),

    //三级联动
    selected(code) {
      this.distCode = code;
    },

     // 手机端返回小三角
    back: function(){
      location.href='#/userData/login';//登录界面
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

    //获得焦点事件............................................
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
      var smsNumberStyle = /^[0-9]{6}$/;
      if (this.smsNumber) {
        if (!smsNumberStyle.test(this.smsNumber)) {
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
    //验证码图片点击更换
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
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
              smsType: 1,
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

    //手机点击获取短信验证码
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
          this.showES = false;
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
              smsType: 1,
              imgCode: this.imgCode
            })
          )
          .then(data => {
            console.log(data, data.data.status);
            if (data.data.status == 1) {
              this.showES = false;
              //图片验证码输入正确
              this.get = false;
              this.getNew = true;
              const TIME_COUNT = 60;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.showCCC = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.showCCC = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000);
              }
            } else {
              console.log(data.data.msg);
              this.errorWeb = data.data.msg;
              this.showES = true;
              //图片验证码输入错误
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

    //pc立即注册按钮
    iregister: function() {
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
      // 判断省市区
      if (this.distCode) {
        this.esan = false;
      } else {
        this.esan = true;
        this.Esan = "请选择您所在区域";
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
      // 当全部正确之后开始注册接口
      if (
        this.ephone == false &&
        this.eyan == false &&
        this.eduan == false &&
        this.esan == false &&
        this.emi == false
      ) {
        this.ajax
          .post(
            "/xinda-api/register/register",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 1,
              validCode: 111111,
              password: md5(this.setPass),
              regionId: this.area
            })
          )
          .then(data => {
            console.log(data, data.data.status);
            if (data.data.status == -2) {
              this.showYphone = false;
              this.showYYan = false;
              this.showYDuan = false;
              this.showYMi = false;
              this.showE = true;
              this.error = data.data.msg;
              this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
              return;
            } else if (data.data.status == 1) {
              //全部正确之后
              this.showE = false;
              // location.href='#/userData/login';//登录界面
              this.centerDialogVisible = true;
            }
          });
      }
    },

    //手机立即注册按钮
    iregisterS: function() {
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
          this.shoeES = false;
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
      // 判断省市区
      if (this.distCode) {
        this.showES = false;
      } else {
        this.errorWeb = "请选择您所在的省市区";
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
      // 当全部正确之后开始注册接口
      if (
        this.ephone == false &&
        this.eyan == false &&
        this.eduan == false &&
        this.esan == false &&
        this.emi == false
      ) {
        this.ajax
          .post(
            "/xinda-api/register/register",
            this.qs.stringify({
              cellphone: this.phone,
              smsType: 1,
              validCode: 111111,
              password: md5(this.setPass),
              regionId: this.area
            })
          )
          .then(data => {
            console.log(data, data.data.status);
            if (data.data.status == -2) {
              this.showES = true;
              this.errorWeb = data.data.msg;
              this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
            } else if (data.data.status == 1) {
              //全部正确之后
              this.showES = false;
              location.href = "#/userData/login"; //登录界面
              // this.centerDialogVisible = true;
            }
          });
      }
    }
  },
  // components: { dist }
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
@media all and (min-width: 768px) {
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
  .erping {
    display: flex;
    div {
      margin: 10px 0 0 4px;
    }
    .errP {
      margin: 9px 0 0 5px;
      color: #e00202;
      font-size: 0.5rem;
    }
  }
  .fleBox {
    display: flex;
  }
  .ephone {
    display: flex;
  }
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
  .register {
    height: 654px;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    .centent {
      max-width: 1200px;
      height: 500px;
      margin: 52px auto 0;
      display: flex;
      background-color: #fff;
    }
    .left {
      margin: 50px 0 0 12%;
      > p {
        font-size: 14px;
        margin: 15px 0 0 43px;
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
    margin: 82px auto 0;
  }

  .verify {
    display: flex;
    // align-items: center;
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
    .spanStyle {
      cursor: pointer;
      margin-left: 5px;
    }
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
  .boxI {
    width: 154px;
  }
  .immediately {
    cursor: pointer;
    width: 280px;
    height: 35px;
    margin-top: 15px;
    border: 1px solid #2693d4;
    color: #2693d4;
    border-radius: 3px;
    background-color: #fff;
  }
  .bottom {
    padding-bottom: 150px;
  }
  select {
    width: 91px;
    height: 35px;
    margin-bottom: 20px;
    border-radius: 3px;
    border: 1px solid #cbcbcb;
    margin-right: 3px;
  }
  .eyeBox {
    position: relative;
    padding-bottom: 5px;
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
  .centent {
    width: 5.47rem;
    margin: 0 auto;
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
  .sanji {
    margin-top: 0.32rem;
    width: 5.47rem;
    display: flex;
    justify-content: space-between;
    select {
      width: 1.62rem;
      height: 0.73rem;
      font-size: 0.28rem;
      border: 1px solid #cbcbcb;
      border-radius: 0.03rem;
    }
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
  .immediately {
    width: 5.47rem;
    height: 0.75rem;
    background: #2693d4;
    color: #fff;
    font-size: 0.3rem;
    margin-top: 1rem;
    border: 1px solid #2693d4;
    border-radius: 0.03rem;
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
}
</style>
<style lang='less'>
.centent .sanji .sjlinkage {
  width: 5.5rem;
  height: 0.77rem;
  font-size: 0.1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.32rem;
  select {
    option {
      font-size: 0.1rem;
    }
  }
  .province,
  .city,
  .area {
    font-size: 0.25rem;
    height: 0.75rem;
    width: 1.69rem;
    margin-bottom: 26px;
  }
}
</style>