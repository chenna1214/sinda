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
    <div class="pcsp-body">
      <!-- 财税服务 商品列表 -->
        <div class="pccny-gds">
          <ul class="pccn-ghead clear">
            <li @click="ascendingOrder(1)" :class='{"pxtax-clickst-1":sortindex==1}' class="pccn-ghcora">综合排序</li>
            <li @click="ascendingOrder(2)" :class='{"pxtax-clickst-1":sortindex==2}' class="pccn-ghrise">价格<span class="pccn-ghico"></span></li>
            <li @click="ascendingOrder(3)" :class='{"pxtax-clickst-1":sortindex==3}' class="pccn-ghrise">接单数<span class="pccn-ghico"></span></li>
          </ul>
          <div class="pcsp-shops">
            <el-row>
              <el-col :span="12"  class="pcsp-shewp">
                <div class="pcsp-shelm clear">
                  <div class="pcsp-shell">
                    <div class="pcsp-imgwp">
                    </div>
                    <p class="pcsp-gdser"><span class="pcsp-gsico"></span><span class="pcsp-gswd">金牌服务商</span></p>
                  </div>

                  <div class="pcsp-shelr">
                    <p class="pcsp-shenm">信达北京服务中心</p>
                    <p class="pcsp-elrpt">信誉
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </p>
                    <p class="pcsp-eladr">北京-北京市-朝阳区</p>
                    <p class="pcsp-elcnt">累计服务客户次数： 8270</p>
                    <p class="pcsp-servs"><span class="pcsp-serv">税务代办</span></p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
    </div>
    <router-view/>
   </div>
</template>

<script>
import autourban from "../taxationService/autourban";

export default {
  name: "shop",
  methods: {
    // 商品排序方式
    ascendingOrder: function(sortindex) {
      this.sortindex = sortindex;
      var that = this;
      this.ajax
        .post(
          "/xinda-api/provider/grid",
          this.qs.stringify({
            start: 0,
            limit: 6,
            productTypeCode: 10,
            regionId: 110102,
            sort: 1
          })
        )
        .then(function(data) {
          that.products = data.data.data;
        });
      this.products = that.products;
    }
  },
  data() {
    return {
      sortindex: 1
    };
  },
  components: { autourban }
};
</script>



<style scoped lang='less'>
// 点击样式
.pxtax-clickst-1 {
  background: #2693d4;
  color: #fff;
  .pxtax-clickst-1a {
    color: #fff;
  }
}
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
  .pctax-servisenav {
    height: 44px;
    li {
      margin: 9px 0 0 15px;
      float: left;
      width: 80px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 2px;
    }
  }
  // 公司工商单行
  .pcauto-wrap {
    background: #f7f7f7;
    // 行名称
    .pcau-serv-classify {
      text-align: center;
      height: 44px;
      line-height: 44px;
      border: 1px solid #ccc;
      border-top: 0;
    }
    // 行内容
    .pctax-servisenav {
      height: 44px;
      font-size: 13px;
      border: 1px solid #ccc;
      border-top: 0;
      border-left: 0;
      li {
        width: 80;
        height: 25px;
        border-radius: 2px;
        a {
          color: #626262;
        }
      }
      .pctax-svsnav-eleml {
        width: 106px;
      }
      li:hover {
        background: #2693d4;
        a {
          color: #fff;
        }
      }
    }
  }
}

.pccny-gds {
  // max-width: 1200px;
  // margin: 0 auto;
  margin-top: 25px;
  border: 1px solid #ccc;
}
// 排序方式选项
.pccn-ghead {
  height: 43px;
  background: #f7f7f7;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  li {
    float: left;
    height: 43px;
    width: 107px;
    text-align: center;
    line-height: 43px;
    .pccn-ghico {
      margin-left: 5px;
      display: inline-block;
      width: 12px;
      height: 12px;
      background: url(../../images/companyIdstry/cpnyIndus.png) -2px -457px;
    }
  }
}

// 店铺列表
.pcsp-body {
  max-width: 1200px;
  margin: 0 auto;
  .pcsp-shops {
    padding-top: 12px;
    .pcsp-shewp {
      .pcsp-shelm {
        margin: 0 14px 15px;
        min-height: 250px;
        border: 1px solid #e9e9e9;
        // 单个元素左侧
        .pcsp-shell {
          width: 35.1%;
          float: left;          
          .pcsp-imgwp {
            margin: 132px 43px 28px 35px;
            width: 124px;
            height: 30px;
          }
          .pcsp-gdser{
            position: relative;
            font-size: 13px;
            color: #676767;
            .pcsp-gsico{
              display: inline-block;
              margin-left: 47px;
              width: 28px;
              height: 32px;
              background: transparent url('../../images/companyIdstry/m_xbt.png') -66px -75px;
            }
            .pcsp-gswd{
              position: absolute;
              top: 6px;
              left: 83px;
            }
          }
        }
        // 单个元素右侧
        .pcsp-shelr{
          padding-top: 13.5px;
          float: left;
          font-size: 13px;
          color: #676767;
          .pcsp-shenm{
            line-height: 38px;
          }
          .pcsp-elrpt{
            line-height: 21px;
          }
          .pcsp-eladr{
            line-height: 21px;            
          }
          .pcsp-elcnt{
            line-height: 37px;
          }
          .pcsp-servs{
            .pcsp-serv{
              width: 71px;
              background: #2693d4;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>


<style lang="less">
.pcshop-auto {
  background: #f7f7f7;
  .el-col-3 {
    width: 8.31%;
  }
  .el-col-21 {
    width: 91.69%;
  }
}
</style>