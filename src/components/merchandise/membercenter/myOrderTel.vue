<template>
<!-- 手机端--我的订单 -->
  <div class="myOrderBox">
      <div class="telMyOrder">
        <p>我的订单</p>
      </div>
    <div class="myOrderBoxIn">
      <a class="back" href="#/merchandise/allProduct"></a>
      <div  v-for="(product,proIdx) in products" :key="product.id">
        <div class="headerBox moneyBox paddingStyle">
          <p class="fontSize">订单号：{{product.businessNo}}</p>
          <p class="fontSize">等待买家付款</p>
        </div>
        <el-row>
          <div class="message paddingStyle">
            <el-col :xs='6'>
              <div class="imgBox">
                <img src="../../images/icon/logo.png" class="orderImg">
              </div>
            </el-col>
            <el-col :xs='{span:17,offset:1}'>
              <div>
                <p class="serviceName">{{product.serviceName}}</p>
                <p class="time">{{product.gdate}}</p>
                <div class="singalPrice">
                  <p class="unitPrice">{{product.unitPrice}}</p>
                  <p class="unit">元</p>
                  <p class="buyNum">x{{product.buyNum}}</p>
                </div>
              </div>
            </el-col>
          </div>
        </el-row>
        <el-row class="moneyBox paddingStyle">
          <el-col :xs='5'>
            <div class="totalBox">
              <p class="totalText">合计:</p>
              <p class="totalPrice">￥{{product.totalPrice}}</p>
            </div>
          </el-col>
          <el-col :xs='{span:13,offset:6}'>
            <div class="delBox">
              <p class="totalPrice"  @click="cancel(product.businessNo,proIdx)">删除订单</p>
              <router-link :to="{path:'/merchandise/goodsOrder',query:{data:product.businessNo}}" class="payBtn" tag='span'>付款</router-link>
              <!-- <button class="payBtn">付款</button> -->
            </div>
          </el-col>
        </el-row>
      </div>
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
export default {
  name: "myOrderTel",
  data() {
    return {
      products: [], //订单
      proIdx: "",
      xstyle: "trans",
      sure: true,
    };
  },
  created() {
    getGoodsAllData(this);
  },
  methods: {
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
    }
  }
};
</script>

<style scoped lang="less">
.trans {
  display: none;
}
.trasf {
  display: block;
}
// 确定删除吗
.mai-sure {
  width: 49%;
  border: 1px solid #bbb;
  background-color: #fff;
  left: 25%;
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
.myOrderBoxIn {
  margin-top: -0.25rem;
}
.paddingStyle {
  background: #f8f8f8;
  padding-left: 0.22rem;
  padding-right: 0.22rem;
}
.moneyBox {
  background: white;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.imgBox {
  display: flex;
  justify-content: center;
}
.message {
  display: flex;
  align-items: center;
  background: #f8f8f8;
  padding-top: 0.45rem;
  padding-bottom: 0.45rem;
}
.payBtn {
  border: 1px solid #2693d4;
  background: #2693d4;
  font-size: 0.23rem;
  color: white;
  width: 16.2%;
  text-align: center;
}
.delBox {
  display: flex;
  justify-content: flex-end;
}
.totalBox {
  display: flex;
}
.myOrderBox {
  background: #f8f8f8;
}
.telMyOrder {
  padding-top: 0.22rem;
  padding-bottom: 0.22rem;
  background: #e5e5e5;

  p {
    font-size: 0.29rem;
    text-align: center;
  }
}
.back {
  position: absolute;
  z-index: 10;
  margin-top: -0.6rem;
  font-size: 0.27rem;
  margin-left: 0.1rem;
  cursor: pointer;
  text-decoration: none;
  color: black;

}
.fontSize {
  font-size: 0.23rem;
}
.headerBox {
  display: flex;
  justify-content: space-between;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  margin-top: 0.25rem;
}
.orderImg {
  width: 100%;
  border: 1px solid #e3e3e3;
}
.time {
  font-size: 0.18rem;
}
.serviceName {
  font-size: 0.26rem;
  margin-bottom: 0.15rem;
}
.unitPrice {
  font-size: 0.23rem;
  color: red;
}
.unit {
  font-size: 0.14rem;
}
.buyNum {
  font-size: 0.23rem;
}
.singalPrice {
  margin-top: -0.51rem;
  p {
    display: inline-block;
  }
}
.totalText {
  font-size: 0.23rem;
  display: inline-block;
}
.totalPrice {
  font-size: 0.23rem;
  color: red;
  display: inline-block;
  margin-right: 9.3%;
}
</style>

