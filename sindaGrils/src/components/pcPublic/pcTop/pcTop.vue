<template>
<div class="pcTopOutter">
  <el-row>
    <el-col>
      <div class="pcTop hidden-xs-only"><!-- 最顶部 -->
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div>
            <p class="pcTopBlackText pcWelcomeText">欢迎来到信达！</p>
            <a href="#/userData/login"  class="pcTopBlueText">登录</a>
            <a href="#/userData/register"  class="pcTopBlueText pcTopRegisterText">快速注册</a>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div class="pcTopRight">
            <img src="../../images/pcTop/shoppingcarIcon.png" alt="购物车" class="pcShoppingcarIcon">
            <p class="pcTopBlackText">购物车</p>
            <p class="pcTopBlueText">0</p>
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
export default {
  name: "pcTop",
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
.pcTopRegisterText{
  margin-left: 24px;
}
.pcTopServiceEntryText{
  margin-left: 10px;
}
.pcTopRight {
  display: flex;
  justify-content: flex-end;
  line-height: 35px;
  img{
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
</style>
