<template>
<div class="pcTopOutter">
  <el-row>
    <el-col>
      <div class="pcTop hidden-xs-only"><!-- 最顶部 -->
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div>
            
            <p class="pcTopBlackText pcWelcomeText">欢迎<a href="#/merchandise/membercenter" class="pcUserName">{{getName}}</a>来到信达！</p>
            <a href="#/userData/login"  class="pcTopBlueText" v-show="!getName">登录</a>
            <span class="pcTopBlueText" v-show="getName" @click="logOff()">退出登录</span>
            <a href="#/userData/register"  class="pcTopBlueText pcTopRegisterText">快速注册</a>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div class="pcTopRight">
            <img src="../../images/pcTop/shoppingcarIcon.png" alt="购物车" class="pcShoppingcarIcon">
            <a href="#/merchandise/shoppingtrolley" class="pcTopBlackText">购物车</a>
            <p class="pcTopBlueText saveBuyNum">{{getNum}}</p>
            <p class="pcTopBlackText">件</p>
            <a class="pcorder" v-show="getName" href="#/merchandise/membercenter/member">我的订单</a>
            <a class="pcTopBlueText pcTopServiceEntryText" href="#/merchandise/pc_shophp">服务商入口</a>
          </div>
        </el-col>
      </div>
    </el-col>
   </el-row>


   
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "pcTop",
  data() {
    return {
      pcUserName: "" //退出登录后清空用户姓名
    };
  },
  methods: {
    ...mapActions(["setName", "gainNum"]),
    logOff() {
      sessionStorage.removeItem("userName");
      this.setName(this.pcUserName); 
        this.$message({
          type: "success",
          message: "您已成功退出登录!"
        })
    }
  },
  computed: {
    ...mapGetters(["getNum", "getName"])
  },
  created() {
    if (!this.getNum) {
      this.gainNum();
    }
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
  text-decoration: none;
  color: black;
}
.pcorder {
  font-size: 12px;
  margin-left: 1%;
  text-decoration: none;
  color: black;
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
  text-decoration: none;
}
</style>
