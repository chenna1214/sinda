<template>
  <div>
    <div class="hidden-xs-only">
      <!-- 账户设置 -->
      <!-- 头部 -->
      <div class="set-head">
        <div @click="setacc" :class="accstyle">账户设置</div>
        <div @click="setcha" :class="chastyle">修改密码</div>
      </div>
      <!-- 主体 -->
      <div class="set-body">
        <!-- 账户设置 -->
        <div class="set-account" v-show="setone" :key="settings.id">
          <!-- 当前头像 -->
          <div class="set-current">
            <div>当前头像：</div>
            <div class="cur-image"></div>
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

        <!-- 修改密码 -->
        <div class="set-change" v-show="settwo">
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
  </div>
</template>

<script>
import dist from '../../../districts/districts';
var md5 = require('md5');
export default {
  name: 'memaccount',
  data () {
    return {
      settings: [],
      accstyle: 'set',
      chastyle: 'sets',
      setone: true,
      settwo: false,
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
              this.ajax.post('/xinda-api/member/update-info',
              this.qs.stringify({
                name: this.$refs.test.value,
                gender: this.radio,
                email: this.$refs.email.value,
                regionId: this.area,
              })).then(function (data) {
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
            }
          })
        }
      }
    },
  }
}
</script>

<style scoped lang='less'>
  @media all and (min-width: 768px){
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
    .set-head {
      width: 100%;
      height: 40px;
      border-bottom: 2px solid #e9e9e9;
      display: flex;
      > div {
        width: 13%;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
        margin-left: 3%;
        cursor: pointer;
      }
    }
    // 主体
    .set-body {
      width: 100%;
      // 账户设置
      .set-account {
        width: 100%;
        > div {
          margin-top: 3%;
          display: flex;
          > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:nth-child(1) {
              width: 10%;
            }
            > div {
              color: #f00;
            }
            .set-error {
              width: 12px;
              height: 12px;
              text-align: center;
              line-height: 12px;
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
              height: 32px;
            }
          }
          .are-error {
            width: 14%;
            height: 35px;
            margin-left: 3%;
          }
        }
        // 当前头像
        .set-current {
          width: 100%;
          align-items: center;
          .cur-image {
            width: 12%;
            height: 100px;
            background: url(../pc_images/login_logo.png) no-repeat 0 -113px;
          }
        }
        // 姓名
        .set-name {
          width: 100%;
          align-items: center;
          .name-input {
            width: 27%;
            height: 35px;
            input {
              width: 98%;
              height: 90%;
            }
          }
          .nam-error {
            width: 14%;
            height: 35px;
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
            height: 35px;
            input {
              width: 98%;
              height: 90%;
            }
          }
          .ema-error {
            width: 14%;
            height: 35px;
            margin-left: 3%;
          }
          .emat-error {
            width: 20%;
            height: 35px;
            margin-left: 3%;
          }
        }
        // 保存
        .set-save {
          width: 12%;
          font-size: 19px;
          color: #5caedf;
          line-height: 40px;
          border: 1px solid #2693d4;
          border-radius: 6px;
          margin-left: 13%;
          justify-content: center;
          cursor: pointer;
        }
      }
      // 修改密码
      .set-change {
        width: 100%;
        > div {
          width: 70%;
          margin-top: 3%;
          display: flex;
          input {
            width: 40%;
            height: 35px;
            display: inline-block;
          }
          p{
            width: 27%;
            color: #f00;
            line-height: 39px;
            margin-left: 2%;
          }
        }
        // 旧密码
        .oldpwd {
          margin-left: 7%;
        }
        // 新密码
        .newpwd {
          margin-left: 7%;
        }
        // 再次输入新密码
        .pwdagain {
        }
        // 保存
        .cha-save {
          width: 12%;
          font-size: 19px;
          color: #5caedf;
          line-height: 40px;
          border: 1px solid #2693d4;
          border-radius: 6px;
          margin-left: 18%;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  } 
</style>
