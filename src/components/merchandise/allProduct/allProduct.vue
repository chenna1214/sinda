<template>
  <div>
   <!-- 全部产品 -->
<div class="pcAllProduct">
<el-row>
  <el-col :sm="4" :md="4" :lg="4"><div class="pcAllProductHeaderLeft">
    <div class="pcAllProductHeaderInner">
      <div class="pcAllProductHeader-taxImg"></div>
      <div class="pcAllProductHeader-taxText">
        <span>财税服务</span><br>
        <span>代理记账</span>
        <span>税务代办</span><br>
        <span>审计报告</span>
      </div>
    </div>

        <div class="pcAllProductHeaderInner">
      <div class="pcAllProductHeader-companyImg"></div>
      <div class="pcAllProductHeader-taxText">
        <span>公司工商</span><br>
        <span>公司注册</span>
        <span>公司变更</span><br>
      </div>
    </div>

        <div class="pcAllProductHeaderInner">
      <div class="pcAllProductHeader-kownlegdeImg"></div>
      <div class="pcAllProductHeader-taxText">
        <span>知识产权</span><br>
        <span>专利申请</span>
        <span>商标注册</span><br>
        <span>版权保护</span>
      </div>
    </div>

        <div class="pcAllProductHeaderInner">
      <div class="pcAllProductHeader-agentImg"></div>
      <div class="pcAllProductHeader-taxText">
        <span>社保代理</span><br>
        <span>企业社保</span>
        <span>个人社保</span><br>
      </div>
    </div>

  </div></el-col>
  <el-col :sm="20" :md="20" :lg="20"><div class="pcAllProductHeaderCarousel"></div></el-col>
</el-row>
</div>
   </div>
</template>

<script>
export default {
  name: "allProduct",
  // mounted() {
  //   console.log(1);
  // },
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
.pcAllProduct {
  max-width: 1200px;
  margin: 0 auto;
}
.pcAllProductHeaderLeft {
  background: #212121;
  height: 400px;
}
.pcAllProductHeaderCarousel {
  background: green;
  height: 400px;
}
.pcAllProductHeaderInner {
  display: flex;
  justify-content: center;
  padding-top: 17px;
  padding-bottom: 20px;
  cursor: pointer;
}
.pcAllProductHeader-taxImg {
  background: url(../../images/allProduct/allproductheader.png) 0 0 no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-companyImg {
  background: url(../../images/allProduct/allproductheader.png) 0 -57px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-kownlegdeImg {
  background: url(../../images/allProduct/allproductheader.png) 0 -100px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-agentImg {
  background: url(../../images/allProduct/allproductheader.png) 0 -164px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-taxText {
  margin-left: 9px;
  span {
    color: white;
    font-size: 12px;
  }
  span:nth-child(1) {
    font-size: 15px;
  }
}
</style>
