<template>
  <div class="hidden-xs-only"><!-- 头部 -->
    <el-row>
    <el-col><div class="pcHeader">
      <el-row>
        <div class="pcHeaderTopContent"><!-- 上半部分内容 -->
<el-col :sm="5" :md="5" :lg="6">
<div class="pcHeaderLeft"><!-- 上半部分内容--左边 -->
<img src="../../images/icon/sindaTextIcon.png" alt="信达" class="pcHeaderLeftsindaTextIcon">
<div class="pcHeaderCityBox">
  <p class="pcHeaderCityText">北京市</p>
  <a href="" class="pcHeaderChangeCityText">[切换城市]</a>
</div>
  </div>
  </el-col>
<el-col :sm="19" :md="14" :lg="12">
  <div><!-- 上半部分内容--中间 -->
<span class="pcHeaderChangeCityText pcHeaderMiddleProductText">产品|</span>
<span class="pcHeaderCityText">服务商</span><br>
<input type="text" name="" id="" class="pcHeaderSearchInput" placeholder="搜索您需要的服务或服务商">
<img src="../../images/icon/serchIcon.png" alt="" class="pcHeaderMiddleSearchImg" align="absmiddle">
<p class="pcHeaderMiddleHotServiceText">热门服务：社保开户  公司注册</p>
  </div>
  </el-col>
<el-col :md="5" :lg="6" class="pcHeaderRightBox hidden-sm-and-down"><!-- 上半部分内容--右边 -->
 <img src="../../images/icon/pcHeadertelIcon.png" alt="">
  </el-col>
  </div>
      </el-row>
      <el-row class="pcHeaderBottom" type="flex" justify="center"><!-- 头部下半部分 -->
        <el-col :sm="4" :md="4" :lg="{span:4,offset:1}"><a href="#/merchandise/allProduct" class="pcHeaderBottomLink">全部产品</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/taxationService" class="pcHeaderBottomLink">财税服务</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/companyIndustry" class="pcHeaderBottomLink">公司工商</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/joinUs" class="pcHeaderBottomLink">加盟我们</a></el-col>
        <el-col :sm="7" :md="7" :lg="7"><a href="#/merchandise/shop" class="pcHeaderBottomLink">店铺</a></el-col>
      </el-row>
    </div></el-col>
    </el-row>
   </div>
</template>

<script>
export default {
  name: "pcHeader",
  data() {
    return {};
  }
};
var pcHeaderLink =document.querySelectorAll('.pcHeaderBottomLink');
</script>

<style scoped lang='less'>
// 如何引用公共less
.pcHeader {
  max-width: 1200px;
  margin: 0 auto;
  height: 148px;
}
.pcHeaderTopContent{
margin-top: 24px;
display: flex;
align-items: center;
}
//头部的左边内容
.pcHeaderLeft {
  display: flex;
  align-items: center;
}
.pcHeaderLeftsindaTextIcon{
  width:41%;
  height: 19%;
}
.pcHeaderCityBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 61px;
  margin-left: 20px;
}
.pcHeaderCityText {
  font-size: 12px;
  display: inline-block;
}
.pcHeaderChangeCityText {
  display: inline-block;
  color: #2794d5;
  font-size: 12px;
  text-decoration: none;
}
//头部的中间内容
.pcHeaderSearchInput {
  width: 78%;
  height: 37px;
  border: 2px solid #2693d4;
  padding-left: 10px;
}
.pcHeaderMiddleHotServiceText {
  font-size: 11px;
  color: #c7c7c7;
  margin-top: 7px;
}
.pcHeaderMiddleProductText {
  margin-bottom: 5px;
}
.pcHeaderMiddleSearchImg {
  margin-left: -6px;
  padding-top: 2px;

}
//头部的右边内容
.pcHeaderRightBox {
  display: flex;
  justify-content: flex-end;
  img{
  width: 57%;
  height: 15%;
  }
}
//头部下半部分
.pcHeaderBottom{
  margin-top: 8px;
  .pcHeaderBottomLink{
    font-size: 17px;
    text-decoration: none;
    color: #414141;
  }
}
</style>
