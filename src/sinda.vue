<template>
  <div id="sinda">
    <div id="ContentBox">
      <!-- 最顶部 -->
      <div class="pcTopOutter">
        <el-row>
          <el-col>
            <div class="pcTop hidden-xs-only">
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
                  <img src="./components/images/pcTop/shoppingcarIcon.png" alt="购物车" class="pcShoppingcarIcon">
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

      <!-- 路由视图 -->
      <router-view/>

      <!-- 最底部 -->
      <div class="pcBottom hidden-xs-only">
      ©Copyright 2016 北京信达科技有限公司 京ICP备 16011621号
      </div>

    </div>
   </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
import { mapGetters, mapActions } from "vuex";
import { logOff } from "./components/exitPublic.js";
import { Row, Col } from "element-ui";

export default {
  name: "sinda",
  methods: {
    ...mapActions(["setName", "gainNum"]),
    logOff() {
      //退出登录按钮
      logOff(this);
    }
  },
  computed: {
    ...mapGetters(["getNum", "getName"])
  },
  created() {
    if (!this.getNum) {
      this.gainNum();
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style lang='less'>
//注册  三级联动样式
.register-android-wheel {
  select {
    height: 35px;
    width: 90px;
    font-size: 0.9rem;
    margin-bottom: 26px;
  }
}
.nopadding .el-dialog__header {
  //订单详情支付弹出框的标头
  padding-left: 15px;
  background: #e0e0e0;
}
.fontColor .el-dialog__body {
  color: black;
}
.pcChoosedCity {
  //网页头部---点击被选择城市后，字的颜色变蓝
  color: #2693d4;
}
#ContentBox {
  display: none;
}
//首页最顶部
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
//首页最底部
.pcBottom {
  background:#ccc;
  height:45px;
  text-align: center;
  line-height: 45px;
  font-size: 13px;
}
</style>
