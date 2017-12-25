<template>
  <div>
    <!-- 注册 -->
    <div class="register">

      <!-- 手机端样式 -->
      <!-- 顶部 -->
      <div class="hidden-sm-and-up">
        <div class="graTop ">
          <span></span>
          <div>注册</div>
        </div>

        <div class="centent">
          <!-- 手机号码 -->
          <div class="fleBox">
            <input class="box" type="number" placeholder="请输入手机号码" v-model="phone" @focus="Zphone" @blur="Cphone">
          </div>

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
import { mapActions } from "vuex";
import dist from "../../districts/districts";
var md5 = require("md5");
const eye = [
  require("../merchandise/pc_images/mpp.png"),
  require("../merchandise/pc_images/mppNone.png")
];
export default {
  name: "register",
  created() {
    this.setTitle("欢迎注册");
  },
  data() {
    return {
      centerDialogVisible: false,
      phone: "",
      showE: false,
      show: true,
      error: "",
      imgUrl: "/xinda-api/ajaxAuthcode",
      imgCode: "",
      //三级联动
      provinces: dist[100000],
      citys: [],
      areas: [],
      province: "0",
      city: "0",
      area: "",

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
      logImg: eye[0]
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
    proChange() {
      this.citys = dist[this.province];
    },
    cityChange() {
      this.areas = dist[this.city];
    },
    selected(data) {
      this.distCode = data.area.code;
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
      var setPassStyle = /^[0-9A-Za-z]{6,20}$/;
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

    //点击获取短信验证码
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

    //立即注册按钮
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
      if (this.area) {
        this.esan = false;
      } else {
        this.esan = true;
        this.Esan = "请选择您所在区域";
      }
      // 判断密码
      if (this.setPass) {
        if (/^\d{6,20}$/.test(this.setPass)) {
          this.emi = false;
        } else {
          this.emi = true;
          this.Emi = "请设置6-20位任意数字/字母";
        }
      } else {
        this.emi = true;
        this.Emi = "请您的密码";
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
    // border: 1px solid red;
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
  // .graTop {
  //   display: none;
  // }
}
@media all and (max-width: 767px) {
  .graTop {
    height: 3.6rem;
    background: #e5e5e5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > span {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      border-left: 2px solid #838383;
      border-top: 2px solid #838383;
      transform: rotate(-45deg);
    }
    div {
      width: 88%;
      text-align: center;
      line-height: 3.6rem;
      font-size: 1.5rem;
    }
  }
  .box {
    width: 26.35rem;
    height: 3.65rem;
    border: 1px solid #cbcbcb;
    margin-top: 3.6rem;
    border-radius: 3px;
    padding: 0 0 0 1rem;
    font-size: 1.45rem;
  }
  .boxI {
    width: 26.35rem;
    height: 3.65rem;
    border: 1px solid #cbcbcb;
    margin-top: 3.6rem;
    border-radius: 3px;
    padding: 0 0 0 1rem;
    font-size: 1.45rem;
  }
  .centent {
    width: 27.35rem;
    margin: 0 auto;
    border: 1px solid blue;
  }
}
// @media screen and (min-width: 480px) and (max-width: 639px) {
//   .graTop {
//     display: block;
//     height: 77px;
//     background: #e5e5e5;
//     width: 100%;
//     display: flex;
//     > div {
//       width: 20px;
//       height: 20px;
//       border-left: 2px solid #838383;
//       border-top: 2px solid #838383;
//       transform: rotate(-45deg);
//       color: #fff;
//       position: relative;
//       left: 32px;
//       top: 28px;
//     }
//     p {
//       line-height: 77px;
//       margin-left: 42%;
//       font-size: 30px;
//     }
//   }
// }
// @media screen and (min-width: 280px) and (max-width: 479px) {
// }
</style>