<template>
  <div>
   <!-- 店铺 -->
    <div class="pctaxservices-body">
      <a class="pctaxservices-title">首页/店铺</a>
      <!-- 三级联动 -->
      <autourban class="pcshop-auto" style="width:100% ;background: #f7f7f7;"></autourban>
      <el-row class="pcauto-wrap hidden-xs-only">
        <el-col :span="2"><div class="pcau-serv-classify">产品类型</div></el-col>
        <el-col :span="22"><ul class="pctax-servisenav clear">
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">所有</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">专利申请</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">版权保护</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">商标注册</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">代理记账</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">公司注册</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">企业社保</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">公司变更</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">税务代办</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">个人社保</a></li>
          <li class="pctax-svsnav-elem"><a href="javascript:void(0)">审计报告</a></li>
        </ul></el-col>
      </el-row>
    </div>
    <div>
    </div>
    <router-view/>
   </div>
</template>

<script>
import autourban from '../taxationService/autourban';

export default {
  name: "shop",
  data() {
    return {};
  },
  components: {autourban}

};
</script>

<style lang="less">
  .pcshop-auto{
    background: #f7f7f7;
    .el-col-3{
      width: 8.31%;
    }
    .el-col-21 {
      width: 91.69%;
    }
  }
</style>

<style scoped lang='less'>
.pctaxservices-body {
  max-width: 1200px;
  margin: 0 auto;
  .pctaxservices-title {
    display: inline-block;
    margin-top: 19px;
    font-size: 13px;
    color: #696969;
    line-height: 27px;
  }
  // 服务分类内容
  .pctax-servisenav{
    height: 44px;
    li{
      margin:9px 0 0 15px;
      float: left;
      width: 80px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 2px;
    }
  }
  // 公司工商单行
  .pcauto-wrap{
    background: #f7f7f7;
    // 行名称
    .pcau-serv-classify{
      text-align: center;
      height: 44px;
      line-height: 44px;          
      border: 1px solid #ccc;
      border-top: 0;
    }
    // 行内容
    .pctax-servisenav{
      height: 44px;
      font-size: 13px;
      border: 1px solid #ccc;
      border-top: 0;
      border-left: 0;
      li{
        width: 80;
        height: 25px;
        border-radius: 2px;
        a{
          color: #626262;
        }
      }
      .pctax-svsnav-eleml{
        width: 106px;        
      }
      li:hover{
        background: #2693d4;
        a{
          color: #fff;
        }
      }
    }
  }
}
</style>
