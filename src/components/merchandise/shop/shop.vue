<template>
  <div>
    <div class="hidden-xs-only">
<!-- 店铺 -->
      <div class="pctaxservices-body">
        <a class="pctaxservices-title">首页/店铺</a>
        <!-- 三级联动 -->
        <autourban @selected="selected" class="pcshop-auto" style="width:100% ;background: #f7f7f7;"></autourban>
        <el-row class="pcauto-wrap hidden-xs-only">
          <el-col :span="2"><div class="pcau-serv-classify">产品类型</div></el-col>
          <el-col :span="22" class="pctax-servisenavw"><ul class="pctax-servisenav clear">
            <li @click="goodFiltrate(idx,producTy)" v-for="(producTy,idx) in producTypeobj" :key="idx" :class='{"pxtax-clickst-1":thePrTyCode==(idx)}' class="pctax-svsnav-elem"><a class="pxtax-clickst-1a" href="javascript:void(0)">{{producTy}}</a></li>
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
                <!-- pc端 单个元素 -->
                <el-col :span="12" v-for="product in products" :key="product.providerName"  class="pcsp-shewp">
                  <div class="pcsp-shelm clear">
                    <div class="pcsp-shell">
                      <div class="pcsp-imgwp">
                        <img :src="imgCreatedUrl+ product.providerImg"  alt="">
                      </div>
                      <p class="pcsp-gdser"><span class="pcsp-gsico"></span><span class="pcsp-gswd">金牌服务商</span></p>
                    </div>

                    <div class="pcsp-shelr">
                      <p class="pcsp-shenm">{{product.providerName}}</p>
                      <p class="pcsp-elrpt">
                        <span class="pcsh-repu">信誉</span>
                        <span :class='{"pcs-redje":product.goodJudge>0}' class="pcsh-jewel pcs-blkje"></span>
                        <span :class='{"pcs-redje":product.goodJudge>1}' class="pcsh-jewel pcs-blkje"></span>
                        <span :class='{"pcs-redje":product.goodJudge>2}' class="pcsh-jewel pcs-blkje"></span>
                        <span :class='{"pcs-redje":product.goodJudge>3}' class="pcsh-jewel pcs-blkje"></span>
                        <span :class='{"pcs-redje":product.goodJudge>4}' class="pcsh-jewel pcs-blkje"></span>
                      </p>
                      <p class="pcsp-eladr">{{product.regionName}}</p>
                      <p class="pcsp-elcnt">累计服务客户次数： {{product.orderNum}} <span class="pcsp-favor">好评率：100%</span></p>
                      <p v-if="showHideCode" class="pcsp-servs"><span class="pcsp-serv">{{ producTyname }}</span></p>
                      <div v-if="!showHideCode"  class="pcsp-servs"><span class="pcsp-serv" v-for="(productTyp ,idex) in turnTobj(product.productTypes)" :key="productTyp">{{ productTyp}}</span></div>
                      <div class="pcsp-enter" @click="toDetail(product.id)">进入店铺</div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <!--  -->
          <div class="pcsh-pgnm clear">
            <input class="pcsh-prpg" @click="prPage()" type="button" value="上一页">
            <span @click="choosePage(idx)" :class='{"pcsh-psty":code=idx}' v-for="(pageN,idx) in pageNum" :key="pageN">{{pageN}}</span>
            <input type="button" value="下一页">
          </div>
          <!--  -->
      </div>
    </div>

    <!-- 店铺列表手机端 -->
      <div class="hidden-sm-and-up" v-if="telDis==telIf">
        
          <div class="tel-texhd">
          <ul class="tel-txhin clear">
            <li @click="ascendingOrder(1)" :class='{"pxtax-clickst-1":sortindex==1}' class="pccn-ghcora">综合排序</li>
            <li @click="ascendingOrder(3)" :class='{"pxtax-clickst-1":sortindex==3}' class="pccn-ghrise">接单数<span class="pccn-ghico"></span></li>
          </ul>
        </div>
        <!-- 财税服务 手机端商品列表 -->
        <ul class="tel-texbdy">
          <!-- 财税服务 手机端商品 -->       
          <li   v-for="product in products" :key="product.providerName" class="tel-texelm clear">
            <!-- 左侧图片 -->
            <router-link tag="button" :to="{path: '/merchandise/pc_shophp',query: { id: product.id }}" class="tel-teimg">
              <img :src="imgCreatedUrl+ product.providerImg" alt="" class="tel-imgin">            
            </router-link>
            <!-- 右侧文字部分 -->
            <div class="tel-tewor">
              <p class="tel-tenm">{{product.providerName}}</p>
              <div class="tel-earea">
                <i class="el-icon-location-outline"></i><span class="tel-earcon">{{product.regionName.replace(/-/g,'  ').replace(/\S*/,'')}}</span>
              </div>
              <div class="tel-shcus">
                <p class="tel-cusnum">累计服务客户数量：<span>{{product.orderNum}}</span></p>
                <p class="tel-sfavor">好评率：<span class="tel-sfarate">100%</span></p>
              </div>
            </div>
          </li>
        </ul>


      </div>
   </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
import autourban from "../taxationService/autourban";
import {Row,Col} from 'element-ui';
export default {
  name: "shop",
  methods: {
    selected(code) {
      this.distCode = code;
      console.log("code===", code);
    },
    // 将字符串转化为可以用于v-for的对象
    turnTobj(str) {
      var arr = str.split(",");
      var newObj = {};
      for (var i in arr) {
        newObj[i] = arr[i];
      }
      return newObj;
    },
    // 向商品详情页面传数据
    toDetail(sid) {
      this.$router.push({
        path: "/merchandise/pc_shophp",
        query: { id: sid }
      });
    },
    // 商品筛选（产品类型）
    goodFiltrate(thePrTyCo, producTyName) {
      this.producTyname = producTyName;
      // 商品
      this.thePrTyCode = thePrTyCo;
      if (this.thePrTyCode == 0) {
        this.showHideCode = 0;
      } else {
        this.showHideCode = 1;
      }
      this.getShops();
    },
    // 商品排序方式
    ascendingOrder: function(sortindex) {
      this.sortindex = sortindex;
      this.getShops();
    },
    // 获取商品
    getShops() {
      var that = this;
      // 获取店铺列表信息
      this.ajax
        .post(
          "/xinda-api/provider/grid",
          this.qs.stringify({
            start: 0,
            limit: 2,
            productTypeCode: this.thePrTyCode,
            regionId: this.distCode,
            sort: this.sortindex
          })
        )
        .then(function(data) {
          that.products = data.data.data;
        });
      this.products = that.products;
    },
    // 上一页
    prPage() {
      if (this.startIdx > 0) {
        this.startIdx = this.startIdx + 2;
        this.code--;
      }
    },
    // 下一页
    nextPage() {
      if (this.startIdx < 2 * (this.page - 1)) {
        this.startIdx = this.startIdx - 2;
        this.code++;
      }
    },
    // 点击选择页面
    choosePage(pageIndex) {
      this.code = pageIndex;
    }
  },
  created() {
    var that = this;
    // 获取 店铺列表信息
    this.ajax
      .post(
        "/xinda-api/provider/grid",
        this.qs.stringify({
          start: this.startIdx,
          limit: 6,
          productTypeCode: this.thePrTyCode,
          regionId: this.distCode,
          sort: this.sortindex
        })
      )
      .then(function(data) {
        that.products = data.data.data;
        // 总页数
        that.page = Math.ceil(data.data.totalCount / 2);
        var pageObj = {};
        for (var i = 1; i <= that.page; i++) {
          pageObj[i] = i;
        }
        that.pageNum = pageObj;
      });
    this.products = that.products;
    // 获取 产品类型列表信息
    this.ajax.post("/xinda-api/product/style/list").then(function(data) {
      // 整理 产品类型数据
      var items = data.data.data;
      for (var i in items) {
        for (var j in items[i].itemList) {
          that.producType.push(items[i].itemList[j]);
        }
      }
      that.producType.unshift({ name: "所有", code: 0 });
      var arr = [];
      for (var k = 0; k < that.producType.length; k++) {
        arr[that.producType[k].code] = that.producType[k].name;
      }
      for (var a = 0; a < arr.length; a++) {
        that.producTypeobj[a] = arr[a];
      }
    });
  },
  data() {
    return {
      pcDis:0,//电脑端显示
      telDis:1,//手机端显示
      telIf:Vue.telApear,//根据分辨率获取不同值
      producTyname: [],
      // 商品类型列表信息
      producType: [],
      producTypeobj: {},
      products: [],
      sortindex: 1,
      distCode: "",
      thePrTyCode: 0,
      //
      showHideCode: 0,
      startIdx: 0,
      pageNum: {}, //页数
      page: 1, //每类数据分的总页数
      code: 0,
      imgCreatedUrl,
    };
  },
  components: { autourban, [Row.name]:Row,
    [Col.name]:Col }
};
</script>



<style scoped lang='less'>
@media all and (min-width: 768px) {
  // 点击样式
  .pxtax-clickst-1 {
    background: #2693d4;
    color: #fff;
    a {
      color: #fff;
    }
    .pxtax-clickst-1a {
      color: #fff !important;
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
    .pctax-servisenavw{
      border-left: 1px solid #ccc;
        
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
      min-height: 44px;
      border: 1px solid #ccc;
      border-top: 0;
      // 行名称
      .pcau-serv-classify {
        text-align: center;
        min-height: 44px;
        line-height: 44px;
      }
      // 行内容
      .pctax-servisenav {
        min-height: 44px;
        font-size: 13px;
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
              margin: 92px 48px 68px 35px;
              width: 124px;
              height: 30px;
            }
            .pcsp-gdser {
              position: relative;
              font-size: 13px;
              color: #676767;
              .pcsp-gsico {
                display: inline-block;
                margin-left: 47px;
                width: 28px;
                height: 32px;
                background: transparent
                  url("../../images/companyIdstry/m_xbt.png") -66px -75px;
              }
              .pcsp-gswd {
                position: absolute;
                top: 6px;
                left: 83px;
              }
            }
          }
          // 单个元素右侧
          .pcsp-shelr {
            width: 64.9%;
            padding-top: 13.5px;
            float: left;
            font-size: 13px;
            color: #676767;
            .pcsp-shenm {
              line-height: 38px;
            }
            // 信誉评价
            .pcsp-elrpt {
              overflow: hidden;
              line-height: 21px;
              // 小钻石
              span {
                float: left;
                display: inline-block;
              }
              .pcsh-repu {
                margin-right: 11px;
              }
              .pcsh-jewel {
                margin-right: 7px;
                width: 16px;
                height: 15px;
                background: lightcoral;
              }
              // 红钻石
              .pcs-redje {
                background: url("../../images/companyIdstry/m_xbt.png") !important;
              }
              // 黑钻石
              .pcs-blkje {
                background: url("../../images/companyIdstry/m_xbt.png") -20px 0;
              }
            }
            .pcsp-eladr {
              line-height: 21px;
            }
            // 服务客户次数
            .pcsp-elcnt {
              line-height: 37px;
              .pcsp-favor {
                margin-left: 2%;
                display: inline-block;
                width: 41.66%;
                line-height: 16px;
                text-align: right;
                border-left: 1px solid #a3a3a3;
              }
            }
            .pcsp-servs {
              max-width: 320px;
              height: 65px;
              .pcsp-serv {
                margin: 0 5px 5px 0;
                display: inline-block;
                width: 71px;
                height: 22px;
                line-height: 22px;
                color: #fff;
                text-align: center;
                background: #2693d4;
                border-radius: 3px;
              }
            }
            .pcsp-enter {
              width: 102px;
              height: 33px;
              color: #ffdcd6;
              text-align: center;
              line-height: 33px;
              background: #ff591b;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }

  .pcsh-pgnm {
    margin: 62px auto;
    max-width: 190px;
    color: #ccc;
    font-size: 14px;
    input {
      float: left;
      width: 68px;
      height: 36px;
      color: #ccc;
      background: #fff;
      border: 1px solid #ccc;
    }
    .pcsh-prpg {
      margin-right: 6px;
    }
    span {
      margin-right: 6px;
      float: left;
      width: 37px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      display: inline-block;
      color: #ccc;
      background: #fff;
      border: 1px solid #ccc;
    }
    .pcsh-psty {
      color: #2592d5;
      border: 1px solid #2592d5;
    }
  }
}

// 点击样式
.pxtax-clickst-1 {
  background: #2693d4;
  color: #fff;
  .pxtax-clickst-1a {
    color: #fff;
  }
}

@media all and (max-width: 767px) {
  .tel-texhd {
    width: 100%;
    // 头部ul
    .tel-txhin {
      margin: 0.401rem auto 0.15rem;
      width: 3.6rem;
      height: 0.6rem;
      overflow: hidden;
      border: 1px solid #2693d4;
      border-radius: 4px;
      li {
        font-size: 0.28rem;
        float: left;
        width: 1.8rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
      }
    }
  }
  // 商品列表块
  .tel-texbdy {
    width: 100%;
    padding-left: 3.27%;
    .tel-texelm {
      width: 100%;
      padding-top: 0.17rem;
      min-height: 2rem;
      border-bottom: 1px solid #cfcfcf;
      // 左侧图片
      .tel-teimg {
        background: #fff;
        margin: 0.08rem 0.24rem 0 0;
        float: left;
        width: 1.67rem;
        height: 1.67rem;
        border: 2px solid #e3e3e3;
        .tel-imgin {
          width: 100%;
        }
      }
      .tel-tewor {
        display: inline-block;
        float: left;
        padding-right: 5.45%;
        width: 62%;
        .tel-tenm {
          color: #000;
          font-size: 0.28rem;
          line-height: 0.5rem;
        }
        .tel-earea {
          line-height: 0.3rem;          
          .tel-earcon {
            line-height: 0.3rem;
            font-size: 0.16rem;
            color: #676767;
          }
        }
        .el-icon-location-outline {
          font-size: 0.16rem;
        }
        .tel-shcus {
          line-height: 0.49rem;
          font-size: 0.22rem;
          margin-top: 0.2rem;
          p {
            line-height: 0.49rem;
            display: inline-block;
            span {
              color: #f00;
            }
          }
          .tel-sfavor {
            padding-left: 3%;
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
    width: 8.5%;
  }
  .el-col-21 {
    width: 91.5%;
  }
}
</style>