<template>
  <div>
   <!-- 财税服务 -->
    <div class="pctaxservices-body">
      <a class="pctaxservices-title">首页/财税服务</a>
      <el-row>
        <el-col :span="19">
          <div>
            <el-row class="pcauto-wrap hidden-xs-only">
              <el-col :span="3"><div class="pcau-serv-classify">服务分类</div></el-col>
              <el-col :span="21">
                <ul class="pctax-servisenav clear">
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">代理记账</a></li>
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">税务代办</a></li>
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">审计报告</a></li>
                </ul>
              </el-col>
            </el-row>
          <el-row class="pcauto-wrap hidden-xs-only">
            <el-col :span="3"><div class="pcau-serv-classify">类型</div></el-col>
            <el-col :span="21"><ul class="pctax-servisenav clear">
              <li class="pctax-svsnav-elem"><a href="javascript:void(0)">小规模记账</a></li>
              <li class="pctax-svsnav-elem pctax-svsnav-eleml"><a href="javascript:void(0)">一般纳税人记账</a></li>
            </ul></el-col>
          </el-row>
          <!-- 三级联动 -->
          <autourban></autourban>
          </div>
          <!-- 财税服务 商品列表 -->
          <div class="pccny-gds">
            <ul class="pccn-ghead clear">
              <li @click="sortMothod(0)" :class='{"pxtax-clickst-1":sortindex==0}' class="pccn-ghcora">综合排序</li>
              <li @click="sortMothod(1)" :class='{"pxtax-clickst-1":sortindex==1}' class="pccn-ghrise">价格<span class="pccn-ghico"></span></li>
            </ul>
            <!-- 商品列表下方 -->
            <div class="pccny-g-wr">
              <ul class="pccn-tblti clear">
                <li @click="descendingOrder" class="pccn-tbltg">商品</li>
                <li @click="ascendingOrder" class="pccn-tbltm">价格</li>
              </ul>
              <!-- 商品列表 -->
              <ul class="pccn-tbody clear">
                <!-- 单个元素 -->
                <li v-for="product in products" class="pccn-tbelm clear">
                  <!-- 元素左侧 -->
                  <div class="pccn-tbell">
                    <router-link class="pccn-teimg" tag="div" to="/merchandise/productdetail">
                      <img :src="'http://115.182.107.203:8088/xinda/pic'+ product.providerImg" alt="">
                    </router-link>
                    <div class="pccn-tewor">
                      <router-link class="pccn-tenm" to="/merchandise/productdetail">
                      {{product.serviceName}}
                      </router-link>
                      <p class="pccn-epmit">{{product.serviceInfo}}</p>
                      <p class="pccn-earea">{{product.providerName}}</p>
                      <p class="pccn-earea">{{product.regionName}}</p>
                    </div>
                  </div>
                  <!-- 元素右侧 -->
                  <div class="pccn-tbelr">
                    <p class="pccn-elprc">￥ {{product.price}}</p>
                    <router-link class="pccn-ebyim pccn-btn1s" to="/merchandise/productdetail">
                      立即购买
                    </router-link>
                    <router-link class="pccn-eadsp pccn-btn1s" to="">
                      加入购物车
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </el-col>
        <el-col :span="5" class="hidden-xs-only">
          <div class="pccopny-r-wrap">
            <ul class="pccopny-rintr">
              <li class="pccopny-rel1">
                <div class="pccopny-relim1"></div>
                <p class="pccopny-r-tit">平台担保</p>
              </li>
              <li class="pccopny-rel2">
                <div class="pccopny-relim2"></div>
                <p class="pccopny-r-tit">优质服务</p>
              </li>
              <li class="pccopny-rel3">
                <div class="pccopny-relim3"></div>
                <p class="pccopny-r-tit">过程监督</p>
              </li>
              <li class="pccopny-rel4">
                <div class="pccopny-relim4"></div>
                <p class="pccopny-r-tit">增值服务</p>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      
    </div>
   </div>
</template>

<script>
// 三级联动模块
import autourban from './autourban';

export default {
  name: "taxationService",
  methods:{
    sortMothod: function(sortindex){
      this.sortindex = sortindex;
    },
    // 升序
    ascendingOrder :function(){
      var that = this;
      this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/search-grid',
      this.qs.stringify({start:0,limit:8,searchName:'代理',sort:2})).then(
        function(data){
      that.products = data.data.data;
      })
      this.products = that.products;
      
    },
    // 降序
    descendingOrder :function(){
      var that = this;
      this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/search-grid',
      this.qs.stringify({start:0,limit:8,searchName:'代理',sort:3})).then(
        function(data){
      that.products = data.data.data;
      })
      this.products = that.products;
    }
  },
  created(){
    var that = this;
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/search-grid',
    this.qs.stringify({start:0,limit:8,searchName:'代理',sort:2})).then(
      function(data){
      that.products = data.data.data;
      // console.log("that.products===",data.data);
      // console.log("data==",data)
    })
      this.products = that.products;
  },
  data() {
    return {
      hideArea:true,
      products: [],
      sortindex: 0,
    };
  },
  components: {autourban}
};
</script>

<style scoped lang='less'>
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

// 右侧图标条
.pccopny-r-wrap {
  padding-left: 12px;
  .pccopny-rintr {
    max-width: 170px;
    padding: 0 37px 0 28px;
    border: 1px solid #ccc;
    li {
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      height: 148px;
      div {
        margin: 11px auto 5px;
        width: 108px;
        height: 108px;
      }
      p {
        font-size: 17px;
        color: #000;
        line-height: 26px;
        text-align: center;
      }
    }
    .pccopny-relim1 {
      background: url(../pc_images/code.png) 0 -726px;
    }
    .pccopny-relim2 {
      background: url(../pc_images/code.png) 0 -864px;
    }
    .pccopny-relim3 {
      background: url(../pc_images/code.png) 0 -995px;
    }
    .pccopny-relim4 {
      background: url(../pc_images/code.png) 0 -1140px;
    }
    .pccopny-rel4 {
      border: 0;
    }
  }
}
.active {
  background: blue;
}

// 点击样式
.pxtax-clickst-1 {
  background: #2693d4;
  color: #fff;
  .pxtax-clickst-1a {
    color: #fff;
  }
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
      img{
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
</style>
