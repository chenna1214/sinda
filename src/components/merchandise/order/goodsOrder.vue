<template>
    <div>
       <div class="pcOrderIn">
           <p class="pcOrdHead">首页/支付</p>
           <!-- 栏目标题 -->
            <p class="pcOrdCol">订单详情</p>
            <div class="pcOrdLine"></div>
            <p v-show="orderTip" class="pcOrdHead">您目前没有订单</p>
                <div class="pcOrdListOut" v-for="(order,index) in orderList" :key="index">
                    <el-row class="pcOrdListBox"><!-- 订单数据 -->
                        <el-col :sm="8" :md="8" :lg="8">
                            <span class="pcOrdListTil pcOrdListLoc">订单编号：</span>
                            <span class="pcOrdListData">{{order.businessOrder.businessNo}}</span>
                            </el-col>
                            <el-col :sm="8" :md="8" :lg="8">
                            <span class="pcOrdListTil pcOrdListLoc">创建时间：</span>
                            <span class="pcOrdListTil">{{order.businessOrder.createTime}}</span>
                            </el-col>
                            <el-col :sm="8" :md="8" :lg="8">
                                <div class="pcOrdMenu">
                                    <span class="pcOrdListTil pcOrdListLoc">订单金额：</span>
                                    <span class="pcOrdListData">{{order.businessOrder.totalPrice}}</span>
                                    <span class="pcOrdListTil">元</span>
                                    <p class="pcOrdListDei" @click="orderDetail()">订单明细</p>
                                </div>
                            </el-col>
                    </el-row>
                    <el-row class="pcOrdListBox" v-for="(goodsList,index) in order.serviceOrderList" :key="index" v-show="isShow"><!-- 订单表的详情 -->
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">服务名称：</span>
                            <span class="pcOrdListTil">{{goodsList.serviceName}}</span>
                        </el-col>
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">单价：</span>
                            <span class="pcOrdListData">{{goodsList.unitPrice}}</span>
                        </el-col>
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">数量：</span>
                            <span class="pcOrdListData">{{goodsList.buyNum}}</span>
                        </el-col>
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">服务总额：</span>
                            <span class="pcOrdListData">{{goodsList.totalPrice}}</span>
                        </el-col>
                    </el-row>
                </div>
                <!-- 支付方式 -->
                <p class="pcOrdCol">支付方式</p>
                <div class="pcOrdLine"></div>
                  <el-radio-group v-model="radio">
                    <p class="pcOrdPayTil">非网银支付</p>
                    <div class="pcPayImg">     
                        <el-radio :label="1" class="pcPayBtn">
                          <span></span>
                        </el-radio>
                    </div>
                    <p class="pcOrdPayTil">平台支付</p>
                    <div class="pcWechat">
                        <el-radio :label="2" class="pcPayBtn">
                          <span></span>
                        </el-radio>
                    </div>
                    <div class="pcBabyPay">
                        <el-radio :label="3" class="pcPayBtn">
                          <span></span>
                        </el-radio>
                    </div><br>
                    <span class="pcAutoPay">自助转账</span>
                    <span class="pcPayInfo">因限额不能支付时，建议使用自助转账</span>
                    <div class="pcAutoImg">
                        <el-radio :label="4" class="pcPayBtn">
                          <span></span>
                        </el-radio>
                    </div>
                    <p class="pcTip">注：转账时请将订单编号备注在付款信息里：转账完成后，请通知客服。</p>
                 </el-radio-group>
                <div class="pcAllPayBox">
                    <span class="pcAllPay" v-for="(order,index) in orderList" :key="index">￥{{order.businessOrder.totalPrice}}</span>
                    <span class="pcMoney">金额总计</span><br>
                    <button class="pcAllPayBtn" @click='payWay()'>去结算</button>
                </div>
                  <!-- 微信支付弹出框 -->
                  <el-dialog
                      title="微信支付"
                      :visible.sync="dialogVisibleChat"
                      width="30%"
                      v-show="payBoxShow==radio+8"
                      class="pcChatBox"
                      custom-class="nopadding fontColor"
                    >
                      <div class="pcErCode">
                        <img src="../../images/goodsOrder/ercode.png">
                      </div>
                      <p>扫码支付</p>
                      <el-button @click="paySuccess()" class="pcOthPayBtn">已完成支付</el-button>
                      <el-button @click="payFail()" class="pcOthPayBtn">支付遇到问题</el-button>
                      <p @click="pcReselection()" class="pcReSelect">返回重新选择支付方式</p>
                    </el-dialog>


                    <!-- 其它方式支付弹出框  -->
                    <el-dialog
                      :visible.sync="dialogVisible"
                      width="30%"
                      v-show="payBoxShow==radio"
                      custom-class="nopadding fontColor"
                      class="pcChatBox"
                    >
                      <p slot="title" class="pcOthPayTil">支付反馈</p>
                      <p class="pcOthPayTip">请您在新打开的页面上完成订单付款</p><br>
                      <p>根据您的支付情况，选择下步操作</p><br>
                          <el-button @click="paySuccess()" class="pcOthPayBtn">已完成支付</el-button>
                          <el-button @click="payFail()" class="pcOthPayBtn">支付遇到问题</el-button>
                          <p @click="pcReselection()" class="pcReSelect">返回重新选择支付方式</p>
                    </el-dialog>
       </div>
    </div>
</template>

<script>
import {Row,Col,RadioGroup, Radio} from 'element-ui';

export default {
  name: "goodsOrder",
    components:{
    [Row.name]:Row,
    [Col.name]:Col,
    [RadioGroup.name]:RadioGroup,
    [Radio.name]:Radio
  },
  created() {
    if (this.$route.query.data == undefined) {
      this.orderTip = true;
    }
    var that = this; //this是指main.js中的new Vue
    console.log('this.$route.query.data',this.$route.query.data);
    this.ajax
      .post(
        "/xinda-api/business-order/detail",
        this.qs.stringify({
          businessNo: this.$route.query.data
        })
      )
      .then(data => {
        console.log('data.data.data',data.data.data);
        //订单数据
        that.orderList.push(data.data.data);
        // 订单号传到我的订单
        localStorage.setItem("id", this.$route.query.data);
      });
  },
  data() {
    return {
      radio: 1,
      payBoxShow: "",
      dialogVisible: false,
      dialogVisibleChat: false,
      orderList: [], //订单明细
      isShow: false, //控制订单明细下拉框的出现或消失的初始值
      orderTip: false //系统提示用户是否有订单的初始值
    };
  },
  methods: {
    payWay: function() {
      if (this.radio == 1) {
        //非网银支付，是银联支付
        this.dialogVisible = true;
        this.payBoxShow = 1;
        this.ajax
          .post(
            "/xinda-api/pay/china-pay",
            this.qs.stringify({
              businessNo: this.$route.query.data
            })
          )
          .then(data => {
            sessionStorage.setItem("Unionpay", data.data);
            // window.open("/#/pay");
            this.$router.push({path:'/pay'});
          });
      }
      if (this.radio == 2) {
        //微信网页支付
        this.dialogVisibleChat = true;
        this.payBoxShow = 10;
        this.ajax
          .post(
            "/xinda-api/pay/weixin-pay",
            this.qs.stringify({
              businessNo: this.$route.query.data
            })
          )
          .then(data => {});
      }
      if (this.radio == 3) {
        //支付宝
        this.dialogVisible = true;
        this.payBoxShow = 3;
        this.ajax
          .post(
            "/xinda-api/pay/ali-pay",
            this.qs.stringify({
              businessNo: this.$route.query.data
            })
          )
          .then(data => {
            sessionStorage.setItem("Alipay", data.data);
            // window.open("/#/Alipay");
            this.$router.push({path:'/Alipay'});
          });
      }
      if (this.radio == 4) {
        //未找到银行支付
        this.dialogVisible = true;
        this.payBoxShow = 4;
      }
      this.payBoxShow = "";
    },
    paySuccess() {
      //支付成功
      this.dialogVisible = false;
      window.open("http://localhost:8080/#/merchandise/paySuccess", "_self");
    },
    payFail() {
      //支付失败
      this.dialogVisible = false;
      window.open("http://localhost:8080/#/merchandise/failurePay", "_self");
    },
    pcReselection() {
      //返回重新选择支付方式
      this.dialogVisible = false;
      this.dialogVisibleChat = false;
    },
    orderDetail() {
      //点击控制订单明细下拉框的出现或消失
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped lang='less'>
.pcOrderIn {
  margin: 0 auto;
  max-width: 1200px;
}
.pcOrdHead {
  font-size: 13px;
  margin-top: 25px;
}
//栏目标题
.pcOrdCol {
  font-size: 13px;
  color: #3e9bd7;
  margin-top: 25px;
}
.pcOrdLine {
  height: 1px;
  background: #bcbdbd;
}
//订单表
.pcOrdListOut {
  margin-top: 36px;
  border-bottom: 1px solid #b6b6b6;
}
.pcOrdListBox {
  background: #f7f7f7;
  border: 1px solid #b6b6b6;
  height: 73px;
  border-bottom: none;
}
.pcOrdListTil {
  color: #646464;
  font-size: 13px;
  line-height: 73px;
}
.pcOrdListData {
  color: #71afdd;
  font-size: 13px;
  line-height: 73px;
}
.pcOrdListDei {
  color: red;
  margin-top: -52px;
  margin-left: 86px;
  font-size: 13px;
  line-height: 73px;
  position: absolute;
}
.pcOrdListLoc {
  margin-left: 36px;
}
//支付方式
.pcOrdPayTil {
  font-size: 13px;
  margin-top: 43px;
  margin-bottom: 30px;
}
.pcPayBtn {
  margin-left: 10px;
  margin-top: 25px;
}
.pcPayImg {
  background: url(../../images/goodsOrder/bank.png);
  height: 56px;
  display: inline-block;
  width: 215px;
}
.pcWechat {
  background: url(../../images/goodsOrder/weChat.png);
  height: 56px;
  display: inline-block;
  width: 215px;
}
.pcBabyPay {
  background: url(../../images/goodsOrder/babyPay.png);
  height: 56px;
  display: inline-block;
  width: 215px;
}
.pcAutoPay {
  font-size: 14px;
  margin-top: 43px;
  margin-bottom: 30px;
  display: inline-block;
}
.pcPayInfo {
  font-size: 11px;
  margin-top: 43px;
  margin-bottom: 30px;
  display: inline-block;
}
.pcAutoImg {
  background: url(../../images/goodsOrder/autoPay.png);
  height: 85px;
  display: inline-block;
  width: 447px;
  display: block;
}
.pcTip {
  font-size: 11px;
  color: red;
}
.pcMoney {
  font-size: 13px;
  float: right;
}
.pcAllPay {
  font-size: 19px;
  color: #2693d4;
  float: right;
  margin-top: -7px;
}
.pcAllPayBtn {
  font-size: 14px;
  color: #2693d4;
  border: 1px solid #2693d4;
  border-radius: 3px;
  background: white;
  width: 101px;
  height: 26px;
  float: right;
  margin-top: 3px;
}
.pcAllPayBox {
  margin-bottom: 161px;
  margin-top: 85px;
}
// 其它方式支付弹出框
.pcOthPayTip {
  font-size: 18px;
}
.pcReSelect {
  color: #2693d4;
  margin-top: 20px;
}
.pcOthPayBtn {
  color: #2693d4;
  border: 1px solid #2693d4;
}
.pcOthPayTil {
  height: 30px;
  line-height: 30px;
}
//微信支付弹出框
.pcChatBox {
  text-align: center;
}
.pcErCode {
  display: flex;
  justify-content: center;
  img {
    width: 150px;
    height: 150px;
  }
}
</style>