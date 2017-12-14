<template>
<div class="pcTopOutter">
  <el-row>
    <el-col>
      <div class="pcTop hidden-xs-only"><!-- 最顶部 -->
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div>
            <!-- 显示登录后的用户姓名？问题：2.3.6.退出登录接口怎么用 -->
            <p class="pcTopBlackText pcWelcomeText">欢迎<span class="pcUserName">{{getName}}</span>来到信达！</p>
            <a href="#/userData/login"  class="pcTopBlueText" v-show="showLog">登录</a>
            <span class="pcTopBlueText" v-show="showExit" @click="logOff()">退出登录</span>
            <a href="#/userData/register"  class="pcTopBlueText pcTopRegisterText">快速注册</a>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div class="pcTopRight">
            <img src="../../images/pcTop/shoppingcarIcon.png" alt="购物车" class="pcShoppingcarIcon">
            <p class="pcTopBlackText">购物车</p>
            <!-- <p class="pcTopBlueText">{{carNum}}</p> -->
            <p class="pcTopBlueText">{{getNum}}</p>
            <p class="pcTopBlackText">件</p>
            <p class="pcTopBlueText pcTopServiceEntryText">服务商入口</p>
          </div>
        </el-col>
      </div>
    </el-col>
   </el-row>


   
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "pcTop",
  data() {
    return {
      // pcUserName: "", //显示登录后的用户姓名
      showExit: false, //控制退出登录文字出现或消失的初始值
      showLog: true ////控制登录文字出现或消失的初始值
    };
  },
  created() {
    var that = this;
    this.ajax.post("/xinda-api/sso/login-info").then(data => {
      //显示登录后的用户姓名？问题：未登录时无法获得用户名
      // var loginR=data.data.data;
      // that.pcUserName = loginR.loginId;
      // // console.log("loginR.status==", data.data.status);
      // if(data.data.status==1){
      //   this.showExit=true;
      //   this.showLog=false;
      // }
    });
  },
  methods: {
    logOff() {
      this.ajax.post("/xinda-api/sso/logout").then(data => {
        console.log("logOff==", data);
      });
    }
  },
  computed: {
    ...mapGetters(["getNum"]),
    ...mapGetters(["getName"])
  }
};
</script>

<style scoped lang='less'>
.pcTopRegisterText {
  margin-left: 24px;
}
.pcTopServiceEntryText {
  margin-left: 10px;
}
.pcTopRight {
  display: flex;
  justify-content: flex-end;
  line-height: 35px;
  img {
    margin-top: 10px;
    margin-right: 2px;
  }
}
.pcTopOutter {
  background: #f2f2f2;
}
.pcTop {
  align-items: center;
  background: #f2f2f2;
  height: 35px;
  margin: 0 auto;
  max-width: 1200px;
}
.pcTopBlackText {
  font-size: 12px;
  display: inline-block;
}
.pcTopBlueText {
  display: inline-block;
  color: #2794d5;
  font-size: 12px;
  text-decoration: none;
}
.pcShoppingcarIcon {
  width: 21px;
  height: 17px;
}
.pcUserName {
  color: #2794d5;
  font-size: 16px;
}
</style>
