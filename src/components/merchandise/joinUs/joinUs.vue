<template>
  <div class="joinUsOut"><!-- 加盟我们 -->
    <div class="joinAdImg"><!-- 头部广告 -->
      <div class="joinAdIn">
        <p>加盟我们</p>
        <p>只做有价值的平台</p>
      </div>
    </div>
    <div class="pcjoinUsIn">
      <div class="pcSerPeo"><!-- 服务商 -->
        <img src="../../images/joinUs/serPeo.png" class="pcSerPeoImg">
        <p class="pcGetCNTex">服务商加盟</p>
        <p class="pcWebAdr">www.xinda.com</p>
        <p>信达提供线上精准营销方案、帮助服务商快捷、低成本的获取有效客户，为传统优质服务商插上互联网的翅膀，助力企业腾飞。</p>
      </div>
    </div>
    <div class="pcGetBox"><!-- 你将获得 -->
    <div class="pcGetTilBox">
      <img src="../../images/joinUs/getTil.png" class="pcGetTilImg">
    </div>
      <p class="pcGetENTex">YOU WILL RECEIVE</p>
      <p class="pcGetCNTex">你将获得</p>
      <p class="pcWebAdr">www.xinda.com</p>

    </div>
   </div>
</template>

<script>
export default {
  name: "joinUs",
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
//公共样式
.pcGetENTex {
  font-size: 20px;
}
.pcGetCNTex {
  font-size: 28px;
  color: red;
  margin-top: -39.5%;
}
.pcWebAdr {
  font-size: 8px;
  color: #585858;
  margin-top: 0.5%;
}
//头部
.pcjoinUsIn {
  max-width: 1200px;
  margin: 0 auto;
}
.joinAdImg {
  width: 100%;
  height: 338px;
  background: url(../../images/joinUs/joinAd.png) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    font-size: 29px;
  }
  p:nth-child(2) {
    color: #817b7c;
    margin-top: 3.5%;
  }
}
.joinAdIn {
  margin-top: 6.83%;
}
//服务商
.pcSerPeo {
  height: 531px;
  .pcSerPeoImg {
    margin-left: 24.3%;
  }
  p {
    text-align: center;
  }
  p:nth-child(4) {
    font-size: 20px;
    margin-top: 4%;
    font-weight: bold;
  }
}
//你将获得
.pcGetBox {
  border: 1px solid #000;
  background: #edf0f3;
  height: 566px;
  p {
    text-align: center;
  }
  p:nth-child(2) {
    margin-top: -8%;
  }
  p:nth-child(3){
    margin-top: 3.5%;
  }
}
.pcGetTilBox {
  display: flex;
  justify-content: center;
  .pcGetTilImg {
    margin-top: 5%;
  }
}
</style>
