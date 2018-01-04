<template>
  <!-- 账户设置 -->
  <div class="hidden-sm-and-up accountset" v-if="telDis==telIf">
    <!-- 头部 -->
    <div class="weacctop">
      <div @click="comeback"><span></span></div>
      <div class="we-acctop">账户设置</div>
    </div>
    <!-- 账户设置 -->
    <div class="weacc">
      <div class="we-accset">
        <div class="we-account">账户设置</div>
        <span></span>
      </div>
      <!-- 具体内容 -->
      <div class="set-account" :key="settings.id">
        <!-- 当前头像 -->
        <div class="set-current">
          <div>当前头像：</div>
          <div class="cur-image">
            <img src="../pc_images/we_avater.png" alt="">
          </div>
        </div>
        <!-- 姓名 -->
        <div class="set-name">
          <div>姓名：</div>
          <div class="name-input">
            <input type="text" placeholder="请输入姓名" v-model="items.test" ref="test" v-on:blur="namblur" :class="boxstyle">
          </div>
          <!-- 出错时出现 -->
          <div class="nam-error" v-show="namer" >
            <div class="set-error">×</div>
            <div>请输入您的姓名</div>
          </div>
        </div>
        <!-- 性别 -->
        <div class="set-sex">
          <div>性别：</div>
          <div class="sex-input">
            <el-radio v-model="radio" label="1" class="male" checked>男</el-radio>
            <el-radio v-model="radio" label="2" class="female">女</el-radio>
          </div>
        </div>
        <!-- 邮箱 -->
        <div class="set-email">
          <div>邮箱：</div>
          <div class="email-input">
            <input type="email" placeholder="请输入邮箱地址" v-model="set.email" ref="email" v-on:blur="emablur" :class="tboxstyle">
          </div>
          <!-- 出错时出现 -->
          <div class="ema-error" v-show="emaer">
            <div class="set-error">×</div>
            <div>请填写邮箱地址</div>
          </div>
          <div class="emat-error" v-show="emaert">
            <div class="set-error">×</div>
            <div>请填写正确的邮箱地址</div>
          </div>
        </div>
        <!-- 所在地区 -->
        <div class="set-area">
          <div>所在地区：</div>
          <!-- 三级联动 -->
          <div class="set-ssq">
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
          </div>
          <!-- 未选择时出现 -->
          <div class="are-error" v-show="areer">
            <div class="set-error">×</div>
            <div>请选择所在地区</div>
          </div>
        </div>
        <!-- 保存 -->
        <div class="set-save" @click="save">保存</div>
      </div>
      <!-- 点击保存出现 -->
      <div class="sucess" v-show="keep">操作成功</div>
    </div>
    <!-- 修改密码 -->
    <div class="weset">
      <div class="we-set">
        <div class="we-setting">修改密码</div>
        <span></span>
      </div>
      <!-- 具体内容 -->
      <div class="set-change">
        <div class="oldpwd">
          旧密码：<input type="password" v-model="oldpwd">
          <p v-show="olderr">× 旧密码错误</p>
        </div>
        <div class="newpwd">
          新密码：<input type="password" v-model="newpwd">
          <p v-show="newerr">× 密码不能为空</p>
        </div>
        <div class="pwdagain">
          再次输入新密码：<input type="password" v-model="newpwda">
          <p v-show="agaerr">× 两次密码输入不一致</p>
        </div>
        <!-- 保存 -->
        <div class="cha-save" @click="chasave">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
import dist from '../../../districts/districts';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
var md5 = require('md5');
export default {
  name: 'memaccount',
  data () {
    return {
      pcDis:0,//电脑端显示
      telDis:1,//手机端显示
      telIf:Vue.telApear,//根据分辨率获取不同值
      settings: [],
      accstyle: 'set',
      chastyle: 'sets',
      // 三级联动
      provinces:dist[100000],
      citys:[],
      areas:[],
      province:'0',
      city:'0',
      area:'',
      // 姓名
      items: {
        test: '',
      },
      namer: false,
      // 性别
      radio: '1',
      // 邮箱
      set: {
        email: '',
      },
      emaer: false,
      emaert: false,
      // 地区
      areer: false,
      // 框的颜色
      boxstyle: 'box',
      tboxstyle: 'box',

      // 密码
        // 旧密码
      oldpwd: '',
      olderr: false,
        // 新密码
      newpwd: '',
      newerr: '',
        // 再次输入密码
      newpwda: '',
      agaerr: false,
      // 微信页
      sData: [],
      keep: false,
    }
    components: {}
  },

  watch:{
    // 姓名 
    items: {
      handler: function (val,oldval) {
        // console.log(this.$refs.test.value);
      },
      deep: true,
    },
    // 邮箱
    set:{
      handler: function (email,oldemail) {
        // console.log(this.$refs.email.value)
      },
      deep: true,
    },
    // 旧密码
    pwd:{
      handler: function (oldpwd,oldcode) {
        // console.log(this.$refs.oldpwd.value)
      },
      deep: true,
    },
    // 新密码
    npwd:{
      handler: function (newpwd,newcode) {
        // console.log(this.$refs.newpwd.value)
      },
      deep: true,
    },
    // 再次输入新密码
    npwda:{
      handler: function (newpwda,newcode) {
        // console.log(this.$refs.newpwda.value)
      },
      deep: true,
    },
  },

  created(){
    // 获取登录信息,看是否已登录
    this.ajax.post('/xinda-api/sso/login-info').then(function (data) {
        console.log(data.data.data)
      });
  },
  
  methods: {
    // 点击箭头回到上一页
    comeback: function (){
      window.history.back(-1);
    },
    // ---------------账户设置-----------------------------
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

    setacc: function () {
      this.accstyle = 'set';
      this.chastyle = 'sets';
      this.setone = true;
      this.settwo = false;
    },
    setcha: function () {
      this.accstyle = 'sets';
      this.chastyle = 'set';
      this.setone = false;
      this.settwo = true;
    },

    // 账户设置输入框的验证
      // 姓名
    namblur () {
      if (!this.$refs.test.value) {
        this.namer = true;
        this.boxstyle = 'boxs';
      }else {
        this.namer = false;
        this.boxstyle = 'box';
      }
    },
      // 邮箱
    emablur () {
      if (!this.$refs.email.value) {//未填入
        this.emaer = true;
        this.emaert = false;
        this.tboxstyle = 'boxs';
      }else {//不为空
        var ema = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        // var ema = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
        if(ema.test(this.$refs.email.value)){//符合
          this.emaer = false;
          this.emaert = false;
          this.tboxstyle = 'box';
        }else {//不符合
          this.emaert = true;
          this.emaer = false;
          this.tboxstyle = 'boxs';
        }
      }
    },
    // 保存
    save () {
      // console.log('email ==',this.$refs.email.value)
      // console.log('gender ==',this.radio)
      // console.log('name ==',this.$refs.test.value); 
      // console.log('area ==',this.area)
      if (!this.$refs.test.value) {//未填入姓名
        this.namer = true;
        this.boxstyle = 'boxs';
      }else {//填入姓名
        this.namer = false;
        this.boxstyle = 'box';
        if (!this.$refs.email.value) {//未填入邮箱
          this.emaer = true;
          this.emaert = false;
          this.tboxstyle = 'boxs';
        }else {//邮箱地址填入
          var ema = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          if(!ema.test(this.$refs.email.value)){//不符合
            this.emaert = true;
            this.emaer = false;
            this.tboxstyle = 'boxs';
          }else {//符合(正确的邮箱地址)
            this.emaer = false;
            this.emaert = false;
            this.tboxstyle = 'box';
            if (!this.area) {//未选择地区
              this.areer = true;
            }else {//选择地区
              this.areer = false;
              // -----所有都正确后：
              var that = this;
              this.ajax.post('/xinda-api/member/update-info',
              this.qs.stringify({
                name: this.$refs.test.value,
                gender: this.radio,
                email: this.$refs.email.value,
                regionId: this.area,
              })).then(function (data) {
                var sData = data.data;
                if(sData.status == 1){
                  that.keep = true;
                  setInterval((function () {
                    that.keep = false;
                  }),3000);
                }
                console.log(data.data)
              });
            }
          }
        }
      }
    },



    // ---------------修改密码-----------------------------
    chasave () {
      // console.log(this.pwd.oldpwd)
      if (this.newpwd == '') {//新密码为空
        this.newerr = true;
      }else {//新密码不为空
        this.newerr = false;
        if (this.newpwd != this.newpwda) {//两次密码输入不一致
          this.agaerr = true;
          this.newpwda = '';
        }else {//两次密码输入一致
          this.agaerr = false;
          // 修改密码
          var that = this;
          this.ajax.post('/xinda-api/sso/change-pwd',
          this.qs.stringify({
            oldPwd: md5(this.oldpwd),
            newPwd: md5(this.newpwd),
          })).then(data=>{
            console.log(data.data)
            console.log(this.newpwd)
            console.log(this.newpwda)
            if (data.data.status == -1) {
              this.olderr = true;
            }else if (data.data.status == 1) {
              this.olderr = false;
              that.keep = true;
              setInterval((function () {
                that.keep = false;
              }),3000);
            }
          })
        }
      }
    },
  }
}
</script>


<style scoped lang='less'>
  @media all and (max-width: 767px){
    .box {
      border: 1px solid #b0b0b0;
    }
    .boxs {
      border: 1px solid #f00;
    }
    .set {
      color: #349ad7;
      border-bottom: 2px solid #2693d4;
    }
    .sets {
      color: #111;
      border-bottom: none;
    }
    // 头部
    .weacctop {
      height: 0.72rem;
      background: #e5e5e5;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      >div{
        span {
          display: block;
          width: 0.16rem;
          height: 0.16rem;
          border-left: 2px solid #838383;
          border-top: 2px solid #838383;
          transform: rotate(-45deg);
          margin: 0 auto;
          margin-top: 0.3rem;
        }
        &:nth-child(1){
          width: 0.72rem;
          height: 0.72rem;
        }
      }
      .we-acctop {
        width: 88%;
        text-align: center;
        line-height: 0.72rem;
        font-size: 0.3rem;
      }
    }
    // 账户设置
    .weacc{  
      font-size: 0.29rem; 
      border-bottom: 6px solid #dfdfdf; 
      .we-accset{
        width: 100%;
        border-bottom: 2px solid #2693d4;
        .we-account{
          width: 1.72rem;
          text-align: center;
          line-height: 0.52rem;
          margin-top: 0.2rem;
        }
        span{
          width: 0;
          height: 0;
          display: inline-block;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #2693d4;
          border-bottom: 4px solid transparent;
          transform: rotate(180deg);
          margin-left: 0.8rem;
          position: absolute;
        }
      }
      .set-account {
        width: 100%;
        margin-bottom: 0.26rem;
        > div {
          margin-top: 3%;
          margin-left: 0.43rem;
          display: flex;
          > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:nth-child(1) {
              width: 20%;
            }
            > div {
              color: #f00;
            }
            >input{
              font-size: 0.14rem;
            }
            .set-error {
              width: 0.14rem;
              height: 0.14rem;
              text-align: center;
              line-height: 0.14rem;
              color: #fff;
              border-radius: 50%;
              background-color: #f00;
            }
          }
        }
        // 所在地区
        .set-area {
          width: 100%;
          .set-ssq {
            width: 50%;
            justify-content: space-between;
            select {
              width: 30%;
              height: 0.35rem;
              option{
                font-size: 0.14rem;
              }
            }
          }
          .are-error {
            width: 14%;
            height: 0.35rem;
            margin-left: 3%;
          }
        }
        // 当前头像
        .set-current {
          width: 100%;
          align-items: center;
          .cur-image {
            width: 0.96rem;
            height: 0.96rem;
            img{
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
        // 姓名
        .set-name {
          width: 100%;
          align-items: center;
          .name-input {
            width: 27%;
            height: 0.35rem;
            input {
              width: 98%;
              height: 90%;
              margin-top: 0;
            }
          }
          .nam-error {
            // width: 20%;
            height: 0.35rem;
            font-size: 0.18rem;
            margin-left: 3%;
          }
        }
        // 性别
        .set-sex {
          width: 100%;
          align-items: center;
          .sex-input {
            width: 10%;
            display: flex;
            > div {
              width: 40%;
            }
          }
        }
        // 邮箱
        .set-email {
          width: 100%;
          align-items: center;
          .email-input {
            width: 27%;
            height: 0.35rem;
            input {
              width: 98%;
              height: 90%;
              margin-top: 0;
            }
          }
          .ema-error {
            // width: 20%;
            font-size: 0.18rem;
            height: 0.35rem;
            margin-left: 3%;
          }
          .emat-error {
            // width: 27%;
            font-size: 0.18rem;
            height: 0.35rem;
            margin-left: 3%;
          }
        }
        // 保存
        .set-save {
          width: 12%;
          font-size: 0.19rem;
          color: #5caedf;
          line-height: 0.4rem;
          border: 1px solid #2693d4;
          border-radius: 6px;
          margin-left: 2rem;
          justify-content: center;
          cursor: pointer;
        }
      }
      .sucess{
        width: 2rem;
        height: 0.73rem;
        font-size: 0.3rem;
        color: #fff;
        text-align: center;
        line-height: 0.73rem;
        background-color: rgba(0,0,0,.3);
        left: 36%;
        top: 46%;
        z-index: 25;
        overflow: hidden;
        position: fixed;
      }
    }
    // 修改密码
    .weset{
      font-size: 0.29rem;
      border-bottom: 6px solid #dfdfdf; 
      margin-bottom: 1.38rem;
      .we-set{
        width: 100%;
        border-bottom: 2px solid #2693d4;
        .we-setting{
          width: 1.72rem;
          text-align: center;
          line-height: 0.52rem;
          margin-top: 0.2rem;
        }
        span{
          width: 0;
          height: 0;
          display: inline-block;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #2693d4;
          border-bottom: 4px solid transparent;
          transform: rotate(180deg);
          margin-left: 0.8rem;
          position: absolute;
        }
      }
      .set-change {
        width: 100%;
        margin-bottom: 0.68rem;
        > div {
          width: 90%;
          margin-top: 3%;
          margin-left: 0.43rem;
          display: flex;
          input {
            width: 38%;
            height: 0.35rem;
            border: 1px solid #b0b0b0;
            display: inline-block;
          }
          p{
            width: 20%;
            font-size: 0.16rem;
            color: #f00;
            line-height: 0.39rem;
            margin-left: 2%;
          }
        }
        // 旧密码
        .oldpwd {
          // margin-left: 7%;
          input{
            margin-left: 1.25rem;
          }
        }
        // 新密码
        .newpwd {
          // margin-left: 7%;
          input{
            margin-left: 1.25rem;
          }
        }
        // 再次输入新密码
        .pwdagain {
          input{
            margin-left: 0.1rem;
          }
          p{
            width: 20%;
            height: 0.39rem;
            font-size: 0.16rem;
            color: #f00;
            line-height: 0.2rem;
            margin-left: 2%;
          }
        }
        // 保存
        .cha-save {
          width: 12%;
          font-size: 0.19rem;
          color: #5caedf;
          line-height: 0.4rem;
          border: 1px solid #2693d4;
          border-radius: 6px;
          margin-left: 2rem;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  } 
  // span
  @media all and (max-width: 767px) and (min-width: 680px){
    .we-accset{
      span{
        margin-top: -0.08rem;
      }
    }
    .we-set{
      span{
        margin-top: -0.08rem;
      }
    }
  }
  @media all and (max-width: 680px) and (min-width: 490px){
    .we-accset{
      span{
        margin-top: -0.1rem;
      }
    }
    .we-set{
      span{
        margin-top: -0.1rem;
      }
    }
  }
  @media all and (max-width: 490px) and (min-width: 380px){
    .we-accset{
      span{
        margin-top: -0.14rem;
      }
    }
    .we-set{
      span{
        margin-top: -0.14rem;
      }
    }
  }
  @media all and (max-width: 380px){
    .we-accset{
      span{
        margin-top: -0.18rem;
      }
    }
    .we-set{
      span{
        margin-top: -0.18rem;
      }
    }
  }
</style>
