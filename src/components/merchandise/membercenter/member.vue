<template>
  <div>
    <!-- pc端 -->
    <div class="hidden-xs-only">
      <!-- 我的订单 -->
        <div class="mai-head">
          <div>我的订单</div>
        </div>
        <div class="mai-body">
          <!-- 订单号 -->
          <div class="ordernum">
            <div class="transcode">订单号 ：</div>
            <div class="seekcode">
              <input type="text" placeholder="请输入订单号搜索" v-model="searchVal">
            </div>
            <div class="searchBtn" @click="searchClick()">搜索</div>
          </div>
          <!-- 创建时间 -->
          <div class="creatime">
            <div class="createdate">创建时间 ：</div>
            <div class="schedule">
              <input type="date" v-model="stime" @blur="start"> 至 <input type="date" v-model="etime" @blur="end">
            </div>
          </div>
          <!-- 商品名称 -->
          <div class="goodsname">
            <!-- 头 -->
            <div class="gname-top">
              <div class="gna-pro">商品名称</div>
              <div>单价</div>
              <div>数量</div>
              <div>总金额</div>
              <div>订单状态</div>
              <div>订单操作</div>
            </div>
            <!-- 订单 -->
            <div class="indent">
              <!-- 大订单 -->
              <div v-for="(product,proIdx) in products" :key="product.id" >
                <!-- 订单号(头部) -->
                <div class="indent-top">
                  <div>
                    <div>订单号:</div>
                    <div>{{product.businessNo}}</div>
                  </div>
                  <div>
                    <div>下单时间:</div>
                    <div>{{product.gdate}}</div>
                  </div>
                </div>
                <!-- 具体信息 -->
                <div class="ind-detail">
                  <!-- 左侧 -->
                  <div class="det-left" v-for="subitem in (product.subItem)" :key="subitem.id" :class="orderstyle">
                    <!-- 商品 -->
                    <div>
                      <div class="comname">
                        <!-- <div class="indname-img">
                          <img :src="'http://115.182.107.203:8088/xinda/pic'">
                        </div> -->
                        <div class="indname-cha">
                          <div class="indcha-one">{{subitem.providerName}}</div>
                          <div class="indcha-two">{{subitem.serviceName}}</div>
                        </div>
                      </div>
                      <div class="ind-unit">￥{{subitem.unitPrice}}.00</div>
                      <div class="ind-quant">{{subitem.buyNum}}</div>
                      <div class="ind-total">￥{{subitem.totalPrice}}.00</div>
                      <div class="ind-status">等待买家付款</div>
                    </div>
                  </div>
                  <!-- 付款、删除订单按钮 -->
                  <div class="det-right">
                    <router-link :to="{path:'/merchandise/goodsOrder',query:{data:product.businessNo}}" class="ind-pay" tag='span'>付款</router-link>
                    <span class="ind-delete" @click="cancel(product.businessNo,proIdx)">删除订单</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 页码 -->
         <pageSet class="mai-tail" :total="total" :pageNum="pagen" :currentPage="eachContent" @numc="pageChange" @upPage='upPage' @downPage='downPage'></pageSet>
        <!-- 确定删除吗 -->
        <div class="mai-sure" v-show="sure" :class="xstyle">
          <div class="mai-mess">
            <div>信息</div>
            <div class="maimess-x" @click="mesx">×</div>
          </div>
          <div class="maimes-no">
            <div>确定要删除该订单吗</div>
            <div>                       
              <div class="mai-confirm" @click="maisure">确定</div>
              <div class="mai-undo" @click="mesx">取消</div>
            </div>
          </div>
        </div>
      </div>
     
   </div>
</template>

<script>
import {getGoodsAllData} from "./memberPublic.js";
import pageSet from "../../pagePublic";
export default {
  name: "changepwd",
  created() {
    getGoodsAllData(this);
  },
  data() {
    return {
      xstyle: "trans",
      orderstyle: "transf",
      sure: true,
      // 订单
      gDatas: [],
      products: [], //订单
      griDatas: [],
      proIdx: "",
      // input框里的时间
      stime: "",
      etime: "",
      business: "",
      searchVal: "", //搜索框的value值
      orderNum: "", //搜索后让匹配搜索内容的订单出现或消失
      pageNum: {}, //页数
      eachContent: 1, //每页内容
      page: "", //每类数据分的总页数
      textColor: 0, //控制页码被选中后的动态样式的初始值
      total: 0,
      pagen: 5
    };
  },
  watch: {
    searchVal: function() {
      if (!this.searchVal) {
        this.orderNum = "";
        getGoodsAllData(this);
      }
    }
  },
  methods: {
    pageChange(n) {
      //点击某个页码进行翻页
      this.eachContent = n;
      getGoodsAllData(this);
    },
    upPage() {
      //点击向上一页翻页
      if (Number(this.eachContent) - 2 >= 0) {
        this.eachContent = Number(this.eachContent) - 1;
        getGoodsAllData(this);
      }
    },
    downPage() {
      //点击向下一页翻页
      if (Number(this.eachContent) < Math.ceil(this.total / this.pagen)) {
        this.eachContent = Number(this.eachContent) + 1;
        getGoodsAllData(this);
      }
    },
    searchClick() {
      //搜索订单的按钮
      for (var key in this.products) {
        if (key.indexOf(this.searchVal) != -1) {
          this.orderNum = key;
          getGoodsAllData(this);
        }
      }
      if (!this.searchVal) {
        this.orderNum = "";
        getGoodsAllData(this);
      }
    },
    // 删除按钮
    cancel: function(code, proIdx) {
      this.proIdx = proIdx;
      var that = this;
      this.xstyle = "transf";
      // 业务订单
      this.ajax.post("/xinda-api/business-order/grid").then(function(data) {
        var griDatas = data.data.data;
        var reallyId = "";
        for (var key in griDatas) {
          if (griDatas[key].businessNo == code) {
            reallyId = griDatas[key].id;
          }
        }
        that.business = reallyId;
      });
    },
    // 取消按钮
    mesx: function() {
      this.xstyle = "trans";
    },
    // 确定按钮
    maisure: function() {
      var that = this;
      that.ajax
        .post(
          "/xinda-api/business-order/del",
          that.qs.stringify({
            id: that.business
          })
        )
        .then(function(data) {
          delete that.products[that.proIdx];
          that.xstyle = "trans";
        });
    },

    // input框的开始结束时间
    start: function() {
      localStorage.setItem("st", this.stime);
    },
    end: function() {
      localStorage.setItem("et", this.etime);
      // // input框的时间
    }
  },
  components: {
    pageSet
  }
};
</script>

<style scoped lang='less'>
.pageBtn {
  width: 100px;
}
.pcPage {
  font-size: 16px;
  width: 36px;
  display: inline-block;
  text-align: center;
}
.pageColor {
  //页码被选中后的样式
  color: #2693d4;
  font-size: 16px;
}
.trans {
  display: none;
}
.trasf {
  display: block;
}
// 右侧头部
.mai-head {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #e9e9e9;
  > div {
    width: 13%;
    color: #52a3da;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    margin-left: 3%;
    border-bottom: 2px solid #2693d4;
  }
}
// 右侧身体
.mai-body {
  width: 100%;
  // 订单号
  .ordernum {
    width: 62%;
    height: 40px;
    font-size: 14px;
    margin-top: 2%;
    display: flex;
    > div {
      margin-left: 1%;
    }
    .transcode {
      width: 16%;
      line-height: 40px;
    }
    .seekcode {
      width: 56%;
      input {
        width: 96%;
        height: 91%;
        font-size: 14px;
      }
    }
    .searchBtn {
      width: 11%;
      text-align: center;
      line-height: 40px;
      color: #51a4d8;
      border: 1px solid #2693d4;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  // 创建时间
  .creatime {
    width: 75%;
    font-size: 14px;
    margin-top: 3%;
    display: flex;
    .createdate {
      line-height: 40px;
    }
    .schedule {
      margin-left: 4%;
      input {
        height: 85%;
      }
    }
  }
  // 商品名称
  .goodsname {
    margin-top: 4%;
    // 头
    .gname-top {
      width: 100%;
      background-color: #f7f7f7;
      display: flex;
      justify-content: space-around;
      > div {
        width: 13%;
        line-height: 40px;
        font-weight: bold;
        text-align: center;
      }
      .gna-pro {
        width: 28%;
      }
    }
    // 订单
    .indent {
      // 大订单
      > div {
        width: 100%;
        margin-top: 2%;
        border: 1px solid #e8e8e8;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // 订单号(头部)
        .indent-top {
          width: 100%;
          background-color: #f7f7f7;
          border-bottom: 1px solid #e8e8e8;
          display: flex;
          > div {
            margin-left: 3%;
            display: flex;
            > div {
              line-height: 40px;
              color: #3e3e3e;
            }
          }
        }
        // 具体信息
        .ind-detail {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          // 左侧
          .det-left {
            width: 87%;
            // 商品
            > div {
              display: flex;
              border-bottom: 1px solid #e8e8e8;
              > div {
                width: 17%;
                text-align: center;
                line-height: 72px;
              }
              .comname {
                width: 33%;
                display: flex;
                .indname-img {
                  width: 22%;
                  height: 59px;
                  margin: 3% 6% 3% 4%;
                  border: 1px solid #e9e9e9;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .indname-cha {
                  width: 65%;
                  font-size: 12px;
                  color: #828282;
                  line-height: 25px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  > div {
                    margin-top: 5%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }
                }
              }
              .ind-unit {
                color: #3e3e3e;
              }
              .ind-quant {
                color: #828282;
                border-right: 1px solid #e8e8e8;
              }
              .ind-total {
                color: #2692d3;
                border-right: 1px solid #e8e8e8;
              }
              .ind-status {
                color: #53a4d9;
                border-right: 1px solid #e8e8e8;
              }
            }
          }
          // 右侧付款/删除
          .det-right {
            margin-top: -72px;
            width: 13%;
            display: flex;
            flex-wrap: wrap;
            margin-left: 87%;
            .ind-pay {
              width: 67%;
              height: 27px;
              display: block;
              text-align: center;
              line-height: 27px;
              color: #419bd7;
              text-decoration: none;
              margin: 0 auto;
              border: 1px solid #2693d4;
              border-radius: 6px;
              cursor: pointer;
            }
            .ind-delete {
              width: 67%;
              height: 27px;
              line-height: 27px;
              text-align: center;
              margin: 0 auto;
              color: #ff4649;
              cursor: pointer;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
// 右侧尾部
.mai-tail {
  width: 30%;
  margin: 0 auto;
  margin-top: 4%;
  margin-bottom: 4%;
  display: flex;
  justify-content: space-around;
  > div {
    width: 19%;
    border: 1px solid #ccc;
    padding: 3% 6% 3% 6%;
    color: #ccc;
  }
}
// 确定删除吗
.mai-sure {
  width: 28%;
  border: 1px solid #bbb;
  background-color: #fff;
  left: 50%;
  top: 50%;
  z-index: 25;
  overflow: hidden;
  position: fixed;
  > div {
    width: 100%;
  }
  .mai-mess {
    font-size: 20px;
    line-height: 38px;
    background-color: #bbb;
    display: flex;
    justify-content: space-between;
    > div {
      &:nth-child(1) {
        margin-left: 4%;
      }
    }
    .maimess-x {
      width: 10%;
      font-size: 33px;
      text-align: center;
      background-color: #777;
      cursor: pointer;
    }
  }
  .maimes-no {
    > div {
      font-size: 18px;
      margin-top: 11%;
      margin-bottom: 4%;
      display: flex;
      justify-content: space-around;
      > div {
        width: 28%;
        font-size: 16px;
        line-height: 34px;
        border-radius: 7px;
        text-align: center;
        cursor: pointer;
      }
      .mai-confirm {
        color: #fff;
        background-color: #2692d3;
      }
      .mai-undo {
        color: #333;
        border: 1px solid #333;
      }
    }
  }
}
</style>
