<template>
  <div>
   <!-- 财税服务 pc端-->
    <div class="pctaxservices-body  hidden-xs-only">
      <a class="pctaxservices-title">首页/财税服务</a>
      <el-row>
        <el-col :span="19">
          <div>
            <el-row class="pcauto-wrap hidden-xs-only">
              <el-col :span="3"><div class="pcau-serv-classify">服务分类</div></el-col>
              <el-col :span="21">
                <ul class="pctax-servisenav clear pcSecBox"><!-- 二级标题 -->
                  <a class="pcSecTil" v-for="(eachSec,index) in secBox" :key="eachSec.name" @click="secTilShow(eachSec.code)" :class="{changeColr:change==eachSec.code}">{{eachSec.name}}</a>
                </ul>
              </el-col>
            </el-row>
            <el-row class="pcauto-wrap hidden-xs-only">
              <el-col :span="3"><div class="pcau-serv-classify">类型</div></el-col>
              <el-col :span="21"><!-- 三级标题 -->
                  <div class="pctax-servisenav clear pcSecBox">
                    <a v-for="(thirdName) in reallyThird" :key="thirdName.name"  class="pcSecTil" @click="thirdClick(thirdName.id)" :class="{changeColr:thirdId==thirdName.id}">{{thirdName.name}}</a>
                  </div>
              </el-col>
            </el-row>
            <!-- 三级联动 -->
            <autourban @selected="selected"></autourban>
          </div>
          <!-- 财税服务 商品列表 -->
          <div class="pccny-gds">
            <ul class="pccn-ghead clear">
              <li @click="synthetical()" :class='{"pxtax-clickst-1":proSort==-10}' class="pccn-ghcora">综合排序</li>
              <li @click="ascendingOrder()" :class='{"pxtax-clickst-1":proSort==3}' >价格<span class="pccn-ghico"></span></li>
            </ul>
            <!-- 商品列表下方 -->
            <div class="pccny-g-wr">
              <ul class="pccn-tblti clear">
                <li class="pccn-tbltg">商品</li>
                <li class="pccn-tbltm">价格</li>
              </ul>
              <!-- 商品列表 -->
              <ul class="pccn-tbody clear">
                <!-- 单个元素 -->
                <li v-for="(product,idx) in products" :key="product.serviceInfo" class="pccn-tbelm clear">
                  <!-- 元素左侧 -->
                  <div class="pccn-tbell">
                    <div class="pccn-teimg" @click="toDetail(product.id)" >
                      <img :src="imgCreatedUrl+ product.providerImg">
                    </div>
                    <div class="pccn-tewor">
                      <p @click="toDetail(product.id)" class="pccn-tenm">
                        {{product.serviceName}}
                      </p>
                      <p class="pccn-epmit">{{product.serviceInfo}}</p>
                      <p class="pccn-earea">{{product.providerName}}</p>
                      <p class="pccn-earea">{{product.regionName}}</p>
                    </div>
                  </div>
                  <!-- 元素右侧 -->
                  <div class="pccn-tbelr">
                    <p class="pccn-elprc">￥ {{product.price}}</p>
                    <a href="#/merchandise/shoppingtrolley" class="pccn-ebyim pccn-btn1s" @click="togoodsOrder(product.id)">立即购买</a>
                    <a href="javascript:void(0)" @click="addToCart(product.id)" class="pccn-eadsp pccn-btn1s"> 加入购物车</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 页码 -->
          <div>
            <div class="pageBox clear">
              <button class="pc-probtn" @click="upPage()">上一页</button>
              <span v-for="(eachPage,idxPage) in pageNum" :key="idxPage" class="pcPage" @click="pageClick(idxPage)" :class="{pageColor:textColor==idxPage}">{{eachPage}}</span>
              <button @click="downPage()">下一页</button>
            </div>
          </div>
            
          
        </el-col>
        <el-col :span="5" class="hidden-xs-only">
           <!-- 财税服务右侧栏 -->
            <servicePart v-show="taxRightSide==this.$route.query.code"></servicePart>
            <!-- 公司工商右侧栏 -->
            <company v-show="CompanyRightSide==this.$route.query.code"></company>
        </el-col>
      </el-row>
    </div>
   

   <!-- 财税服务 手机端-->
   <div class="hidden-sm-and-up" v-if="telDis==telIf">
     <div class="tel-texhd">
        <ul class="tel-txhin clear">
          <li @click="synthetical()" :class='{"pxtax-clickst-1":proSort==-10}' class="pccn-ghcora">综合排序</li>
          <li @click="ascendingOrder()" :class='{"pxtax-clickst-1":proSort==3}' >价格<span class="pccn-ghico"></span></li>
        </ul>
     </div>
     <!-- 财税服务 手机端商品列表 -->
     <ul class="tel-texbdy">
      <!-- 财税服务 手机端商品 -->       
       <li  v-for="(product,idx) in products" :key="product.serviceInfo" class="tel-texelm clear" :class="{lastMessage:idx==totalCount}">
         <!-- 左侧图片 -->
         <div class="tel-teimg" @click="toDetail(product.id)" >
           <img :src="imgCreatedUrl+ product.providerImg" alt="" class="tel-imgin">
          </div>
          <!-- 右侧文字部分 -->
          <div class="tel-tewor">
            <p class="tel-tenm">{{product.serviceName}}</p>
            <div class="tel-elinfo">{{product.serviceInfo}}</div>
            <div class="tel-earea">
              <i class="el-icon-location-outline"></i><span class="tel-earcon">{{product.regionName.replace(/-/g,'  ').replace(/\S*/,'')}}</span>
              <div class="tel-monywr">
                <span class="tel-temoney">￥ {{product.price}}&nbsp;</span><span class="tel-teyuan">&nbsp;元</span>
              </div>
            </div>
          </div>
       </li>
     </ul>
   </div>
    
   </div>
</template>

<script>
// 三级联动模块
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
import autourban from "./autourban";
import { mapActions } from "vuex"; //改变数据
import servicePart from "./servicePart.vue"; //引用财税服务右侧栏组件
import company from "./company";
import {Row,Col} from 'element-ui';

export default {
  name: "taxationService",
  methods: {
    region(){
      var that = this;
      var newdata = [];
      if (that.distCode) {
        for (var i in that.products) {
          if (that.products[i].regionId == that.distCode) {
            newdata.push(that.products[i]);
          }
        }
        that.products = newdata;
      }
      // console.log("newdata==", that.products);
    },
    selected(code) {
      this.distCode = code;
      this.region();
    },

    upPage() {
      //点击向上一页翻页
      if (this.eachContent - 1 >= 0) {
        this.eachContent = this.eachContent - 1;
        if (!this.code) {
          this.ajaxProData(this.$route.query.code, this.eachContent);
        } else {
          this.ajaxProData(this.code, this.eachContent);
        }
        this.textColor = this.eachContent;
      }
      this.region();
    },
    downPage() {
      //点击向下一页翻页
      if (Number(this.eachContent) + 1 < this.page) {
        this.eachContent = Number(this.eachContent) + 1;
        if (!this.code) {
          this.ajaxProData(this.$route.query.code, this.eachContent);
        } else {
          this.ajaxProData(this.code, this.eachContent);
        }
        this.textColor = this.eachContent;
      }
      this.region();
    },
    pageClick(idxPage) {
      //点击某个页码进行翻页
      this.eachContent = idxPage;
      if (!this.code) {
        this.ajaxProData(this.$route.query.code, this.eachContent);
      } else {
        this.ajaxProData(this.code, this.eachContent);
      }
      this.textColor = idxPage;
    },
    ajaxProData(code, eachContent, thirdId, proSort) {
      //产品列表
      var that = this;
      var params = {
        productTypeCode: code,
        start: this.eachContent * 3,
        sort: proSort
        // regionId: this.distCode,
      };
      if (window.screen.availWidth >= 768) {
        params.limit = 3;
      } else {
        delete params.limit;
      }
      if (thirdId != -1) {
        params.productId = thirdId;
      }
      this.ajax
        .post("/xinda-api/product/package/grid", this.qs.stringify(params))
        .then(function(data) {
          that.products = data.data.data;
          that.thirdBoxShow = thirdId;
          var page = Math.ceil(data.data.totalCount / 3);
          var pageCount = {};
          for (var i = 0; i < page; i++) {
            pageCount[i] = i + 1;
          }
          that.pageNum = pageCount;
          that.page = page;
          that.totalCount = data.data.totalCount - 1; //从服务器请求的信息总条数
          // that.region();
        });
    },
    ...mapActions(["gainNum"]),
    toDetail(id) {
      this.$router.push({
        path: "/merchandise/productdetail",
        query: { id: id }
      });
    },
    //立即购买按钮
    togoodsOrder(goodsId) {
      var that = this;
      this.shoppingCarNum(goodsId);
    },
    // 加入购物车按钮
    addToCart: function(itsid) {
      this.shoppingCarNum(itsid);
    },
    //购物车计算购买种类
    shoppingCarNum(itsid) {
      var that = this;
      this.ajax
        .post("/xinda-api/cart/add", this.qs.stringify({ id: itsid }))
        .then(function(data) {
          //查询购物车数量
          that.gainNum();
        });
    },
    secTilShow(code) {
      //点击请求二级标题---我们需要把三级样式清除
      this.thirdId = -1;
      this.change = code;
      //渲染二级标题列表
      for (var key in this.secBox) {
        if (this.secBox[key].code == code) {
          this.reallyThird = this.secBox[key].itemList;
          break;
        }
      }
      this.ajaxProData(this.change);
    },
    thirdClick(thirId) {
      //点击请求三级标题
      this.thirdId = thirId;
      this.ajaxProData(0, this.eachContent, thirId);
    },
    // 商品价格降序
    ascendingOrder: function() {
      this.proSort = 3;
      this.ajaxProData(this.change, this.eachContent, this.thirdId, 3);
    },
    //综合排序
    synthetical() {
      this.proSort = -10;
      this.ajaxProData(this.change, this.eachContent, this.thirdId);
    },
    initTypes() {
      for (var key in this.types) {
        //一级对象
        var oneObj = this.types[key];
        for (var id in oneObj.itemList) {
          var twoObj = oneObj.itemList[id];
          if (this.$route.query.code) {
            var code = this.$route.query.code;
            //二级标题传参
            if (twoObj.code == code) {
              //发现二级标题
              //渲染二级标题列表
              this.secBox = oneObj.itemList;
              //触发二级类型点击事件
              this.secTilShow(code);
              //结束循环
              return;
            }
          } else {
            //三级标题传参---传入的是id
            var detailId = this.$route.query.thirdId;
            for (var idx in twoObj.itemList) {
              var threeObj = twoObj.itemList[idx];
              if (threeObj.id == detailId) {
                //发现三级标题
                //渲染二级标题列表
                this.secBox = oneObj.itemList;
                //触发二级类型点击事件---不能触发二级的数据请求，只改样式就ok
                // this.secTilShow(twoObj.code);
                this.change = twoObj.code;
                //渲染三级标题列表
                this.reallyThird = twoObj.itemList;
                //触发三级类型点击事件
                this.thirdClick(threeObj.id);
                //结束循环
                return;
              }
            }
          }
        }
      }
    }
  },
  watch: {
    $route: function() {
      this.initTypes();
    }
  },
  created() {
    var that = this;
    this.ajax //获取头部导航
      .post("/xinda-api/product/style/list")
      .then(function(data) {
        that.types = data.data.data;
        that.initTypes();
        that.region();
      });

    if (this.$route.query.code) {
      this.ajaxProData(this.$route.query.code, 0, this.$route.query.thirdId);
    } else {
      this.ajaxProData(0, 0, this.$route.query.thirdId);
    }
  },
  data() {
    return {
      pcDis:0,//电脑端显示
      telDis:1,//手机端显示
      telIf:Vue.telApear,//根据分辨率获取不同值
      taxRightSide: 3, //财税服务右侧栏
      CompanyRightSide: 5, //公司工商右侧栏
      products: [],
      // sortindex: 2,
      idx: "",
      distCode: "",
      sencodTitle: [],
      thirdTitle: [], //三级标题
      ThirdShow: "",
      index: "",
      secBox: [], //二级标题
      change: 0, //二级被选中的code
      thirdId: false, //三级被选中的id
      pageNum: {}, //页数
      eachContent: 0, //每页内容
      page: "", //每类数据分的总页数
      textColor: 0, //控制页码被选中后的动态样式的初始值
      codeArr: [], //存产品类型请求参数
      firstShowCode: { first: 1 },
      code: "",
      thirdBoxShow: "",
      reallyThird: "",
      types: [], //产品类型原始数据
      proSort: -10, //排序请求参数sort
      totalCount: "", //从服务器获取信息总条数
      imgCreatedUrl,//图片服务器路径
    };
  },
  components: { autourban, servicePart, company,[Row.name]:Row,
    [Col.name]:Col }
};
</script>

<style scoped lang='less'>
@media all and (min-width: 768px) {
  // 财税服务框架
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
      background: #f7f7f7;
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
      // 点击样式
      .pxtax-clickst-1 {
        background: #2693d4;
      }
    }
    // 财税服务单行
    .pcauto-wrap {
      // 行名称
      .pcau-serv-classify {
        background: #f7f7f7;
        text-align: center;
        height: 44px;
        line-height: 44px;
        border: 1px solid #ccc;
        border-bottom: 0;
      }
      // 行内容
      .pctax-servisenav {
        height: 44px;
        font-size: 13px;
        border: 1px solid #ccc;
        border-bottom: 0;
        border-left: 0;
      }
    }
  }
  .pcSecTil {
    color: #626262;
    margin-left: 3%;
  }
  .pcSecBox {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .changeColr {
    color: #2693d4;
  }
  .pcPage {
    font-size: 14px;
    width: 36px;
    display: inline-block;
    text-align: center;
    margin-right: 6px;
    width: 37px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border: 1px solid #ccc;
    
  }
  .pageColor {
    //页码被选中后的样式
    font-size: 14px;
    color: #2592d5;
    border: 1px solid #2592d5;
  }
  .pageBox {
    display: flex!important;
    justify-content: center!important;
    display: inline-block;
    padding: 30px 0 20px 0;
    text-align: center;
    button{
    width: 68px;
    height: 36px;
    color: #ccc;
    background: #fff;
    border: 1px solid #ccc;
    }
    .pc-probtn{
      margin-right: 7px;
    }
  }
  .active {
    background: blue;
  }

  // 商品列表
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
  .pccny-g-wr {
    padding: 0 8px;
    .pccn-tblti {
      li {
        width: 89px;
        text-align: center;
        height: 50px;
        line-height: 50px;
      }
      .pccn-tbltg {
        float: left;
      }
      .pccn-tbltm {
        float: right;
      }
    }
  }

  // 商品列表
  .pccn-tbody {
    .pccn-tbelm {
      padding: 11px 0 12px 0;
      border-top: 1px solid #eaeaea;
      // 商品图片
      .pccn-teimg {
        float: left;
        margin-right: 12px;
        width: 98px;
        height: 98px;
        border: 1px solid #ccc;
        img {
          width: 100%;
        }
      }
      // 商品文字
      .pccn-tewor {
        float: left;
        .pccn-tenm {
          display: block;
          margin-bottom: 11px;
          line-height: 20px;
          color: #000;
          font-weight: 700;
        }
        & > p {
          color: #676767;
          font-size: 13px;
          line-height: 36px;
        }
        .pccn-earea {
          display: inline-block;
        }
      }
      .pccn-tbell {
        float: left;
        max-width: 660px;
        overflow: hidden;
      }
      .pccn-tbelr {
        float: right;
        width: 192px;
        // 商品价格块
        .pccn-elprc {
          margin-bottom: 22px;
          font-size: 25px;
          color: #fd0100;
          text-align: center;
          font-weight: 300;
          line-height: 50px;
        }
        .pccn-btn1s {
          display: inline-block;
          width: 89px;
          height: 29px;
          background: #2693d4;
          color: #d5e8f6;
          text-align: center;
          line-height: 29px;
          border-radius: 1px;
        }
        .pccn-ebyim {
          margin-right: 9px;
        }
      }
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
  .lastMessage {
    margin-bottom: 0.8rem;
  }
  .tel-texhd {
    width: 100%;
    // 头部ul
    .tel-txhin {
      margin: 0.401rem auto 0.15rem;
      width: 47.73%;
      height: 0.6rem;
      overflow: hidden;
      border: 1px solid #2693d4;
      border-radius: 4px;
      li {
        font-size: 0.28rem;
        float: left;
        width: 50%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
      }
    }
  }
  // 商品列表块
  .tel-texbdy {
    width: 100%;
    padding-bottom: 1rem;
    padding-left: 3.27%;
    .tel-texelm {
      width: 100%;
      padding-top: 0.17rem;
      min-height: 2rem;
      border-bottom: 1px solid #cfcfcf;
      // 左侧图片
      .tel-teimg {
        margin: 0.08rem 0.24rem 0 0;
        float: left;
        width: 22.64%;
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
        .tel-elinfo {
          font-size: 0.22rem;
          line-height: 0.41rem;
          font-weight: 400;
        }
        .tel-earea {
          line-height: 0.61rem;
        }
        .el-icon-location-outline {
          font-size: 0.16rem;
        }
        .tel-earcon {
          line-height: 0.61rem;
          font-size: 0.16rem;
          color: #676767;
        }
        // 价格
        .tel-monywr {
          display: inline-block;
          float: right;
          .tel-temoney {
            line-height: 0.61rem;
            font-size: 0.26rem;
            color: #ff1416;
            font-weight: 700;
          }
          .tel-teyuan {
            margin-right: 0.1rem;
            font-size: 0.16rem;
          }
        }
      }
    }
  }
}
// 翻页
.tel-pagBox {
  height: 1.6rem;
  line-height: 1.6rem;
  width: 20%;
  margin: 0 auto;
  i {
    font-size: 0.4rem;
  }
}
</style>

