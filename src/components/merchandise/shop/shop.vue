<template>
  <div>
   <!-- 店铺 -->
    <div class="pctaxservices-body">
      <a class="pctaxservices-title">首页/店铺</a>
      <!-- 三级联动 -->
      <autourban @selected="selected" class="pcshop-auto" style="width:100% ;background: #f7f7f7;"></autourban>
      <el-row class="pcauto-wrap hidden-xs-only">
        <el-col :span="2"><div class="pcau-serv-classify">产品类型</div></el-col>
        <el-col :span="22"><ul class="pctax-servisenav clear">
          <!-- <li @click="goodFiltrate('')" class="pctax-svsnav-elem" :class='{"pxtax-clickst-1":(thePrTyCode=='')}' ><a href="javascript:void(0)">所有</a></li> -->

          <!-- <li @click="goodFiltrate(idx)" v-for="(producTy,idx) in producType" :key="producTy.name" :class='{"pxtax-clickst-1":thePrTyCode==(idx)}' class="pctax-svsnav-elem"><a class="pxtax-clickst-1a" href="javascript:void(0)">{{producTy.name}}</a></li> -->

          <li @click="goodFiltrate(idx,producTy)" v-for="(producTy,idx) in producTypeobj":key="idx" :class='{"pxtax-clickst-1":thePrTyCode==(idx)}' class="pctax-svsnav-elem"><a class="pxtax-clickst-1a" href="javascript:void(0)">{{producTy}}</a></li>

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
              <el-col :span="12" v-for="product in products" :key="product.providerName"  class="pcsp-shewp">
                <div class="pcsp-shelm clear">
                  <div class="pcsp-shell">
                    <div class="pcsp-imgwp">
                      <img :src="'http://115.182.107.203:8088/xinda/pic'+ product.providerImg"  alt="">
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
                    <p class="pcsp-elcnt">累计服务客户次数： {{product.orderNum}}</p>
                    <p v-if="showHideCode" class="pcsp-servs"><span class="pcsp-serv">{{ producTyname }}</span></p>
                    <div v-if="!showHideCode"  class="pcsp-servs"><span class="pcsp-serv" v-for="(productTyp ,idex) in turnTobj(product.productTypes)" :key="productTyp">{{ productTyp}}</span></div>
                    <div class="pcsp-enter" @click="toDetail(product.id)">进入店铺</div>
                  </div>
                </div>
                <!--  -->
                
                <!--  -->
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
    // upPage() {
    //   //点击向上一页翻页
    //   if (this.eachContent - 1 >= 0) {
    //     this.eachContent = this.eachContent - 1;
    //     if (!this.code) {
    //       this.ajaxProData(this.$route.query.code, this.eachContent);
    //     } else {
    //       this.ajaxProData(this.code, this.eachContent);
    //     }
    //     this.textColor = this.eachContent;
    //   }
    // },
    // downPage() {
    //   //点击向下一页翻页
    //   if (Number(this.eachContent) + 1 < this.page) {
    //     this.eachContent = Number(this.eachContent) + 1;
    //     if (!this.code) {
    //       this.ajaxProData(this.$route.query.code, this.eachContent);
    //     } else {
    //       this.ajaxProData(this.code, this.eachContent);
    //     }
    //     this.textColor = this.eachContent;
    //   }
    // },
    // pageClick(idxPage) {
    //   //点击某个页码进行翻页
    //   this.eachContent = idxPage;
    //   if (!this.code) {
    //     this.ajaxProData(this.$route.query.code, this.eachContent);
    //   } else {
    //     this.ajaxProData(this.code, this.eachContent);
    //   }
    //   this.textColor = idxPage;
    // },
    // ajaxProData(code, eachContent, thirdId,proSort) {
    //   //产品列表
    //   var that = this;
    //   this.ajax
    //     .post(
    //       "/xinda-api/product/package/grid",
    //       this.qs.stringify({
    //         productTypeCode: code,
    //         limit: 3,
    //         start: this.eachContent * 3,
    //         productId: thirdId,
    //         sort:proSort
    //       })
    //     )
    //     .then(function(data) {
    //       that.products = data.data.data;
    //       var page = Math.ceil(data.data.totalCount /3 );
    //       var pageCount = {};
    //       for (var i = 0; i < page; i++) {
    //         pageCount[i] = i + 1;
    //       }
    //       that.pageNum = pageCount;
    //       that.page = page;
    //       that.thirdBoxShow = thirdId;
    //     });
    // },







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
      // console.log('newObj==',newObj)
      return newObj;
    },
    // 向商品详情页面传数据
    toDetail(id) {
      this.$router.push({
        path: "/merchandise/productdetail",
        query: { id: id }
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
      // console.log(" this.thePrTyCode==", this.thePrTyCode);
    },
    // 商品排序方式
    ascendingOrder: function(sortindex) {
      this.sortindex = sortindex;
      this.getShops();
      // console.log("this.sortindex", this.sortindex);
    },
    // 获取商品
    getShops() {
      // console.log(' this.thePrTyCode==', this.thePrTyCode);
      var that = this;
      // 获取店铺列表信息
      this.ajax
        .post(
          "/xinda-api/provider/grid",
          this.qs.stringify({
            start: 0,
            limit: 6,
            productTypeCode: this.thePrTyCode,
            regionId: this.distCode,
            sort: this.sortindex
          })
        )
        .then(function(data) {
          // console.log('data.data.data=======',data.data.data);
          that.products = data.data.data;
        });
      this.products = that.products;
    },
  },
  // watch:{
  //   producTyname: function(){
  //   this.producTyname = producTyName;
  //     // // 商品
  //     this.thePrTyCode = thePrTyCo;
  //     if(this.thePrTyCode==0){
  //       this.showHideCode = 0;
  //     }else{
  //       this.showHideCode = 1;
  //     }
  //   }
  // },
  created() {
    // console.log(' this.thePrTyCode==', this.thePrTyCode);
    var that = this;
    // 获取 店铺列表信息
    this.ajax
      .post(
        "/xinda-api/provider/grid",
        this.qs.stringify({
          start: 0,
          limit: 6,
          productTypeCode: this.thePrTyCode,
          regionId: this.distCode,
          sort: this.sortindex
        })
      )
      .then(function(data) {
        console.log("data=======", data);
        that.products = data.data.data;
        console.log("that.products= ===", that.products);
      });
    this.products = that.products;
    // 获取 产品类型列表信息
    this.ajax.post("/xinda-api/product/style/list").then(function(data) {
      // 整理 产品类型数据
      console.log("data=======标题", data.data.data);
      var items = data.data.data;
      for (var i in items) {
        for (var j in items[i].itemList) {
          that.producType.push(items[i].itemList[j]);
        }
      }
      that.producType.unshift({ name: "所有", code: 0 });
      console.log("that.producType==", that.producType);
      var arr = [];
      for (var k = 0; k < that.producType.length; k++) {
        arr[that.producType[k].code] = that.producType[k].name;
      }
      for (var a = 0; a < arr.length; a++) {
        that.producTypeobj[a] = arr[a];
      }
      console.log("that.producTypeobj === ", that.producTypeobj);
    });
  },
  data() {
    return {
      producTyname: [],
      // producTyname: '',
      // 商品类型列表信息
      producType: [],
      producTypeobj: {},
      products: [],
      sortindex: 1,
      distCode: "",
      thePrTyCode: 0,
      //
      showHideCode: 0
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
          .pcsp-elcnt {
            line-height: 37px;
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