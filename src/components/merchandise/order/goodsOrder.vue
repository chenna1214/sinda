<template>
    <div>
       <div class="pcOrderIn">
           <p class="pcOrdHead">首页/支付</p>
           <!-- 栏目标题 -->
            <p class="pcOrdCol">订单详情</p>
            <div class="pcOrdLine"></div>
                <div class="pcOrdListOut">
                    <el-row class="pcOrdListBox"><!-- 订单表的表头 -->
                        <el-col :sm="8" :md="8" :lg="8">
                            <span class="pcOrdListTil pcOrdListLoc">订单编号：</span>
                            <span class="pcOrdListData">S6272827272727211</span>
                            </el-col>
                            <el-col :sm="8" :md="8" :lg="8">
                            <span class="pcOrdListTil pcOrdListLoc">创建时间：</span>
                            <span class="pcOrdListTil">2017-07-01 01：12：21</span>
                            </el-col>
                            <el-col :sm="8" :md="8" :lg="8">
                                <div class="pcOrdMenu">
                                    <span class="pcOrdListTil pcOrdListLoc">订单金额：</span>
                                    <span class="pcOrdListData">￥2000.00</span>
                                    <span class="pcOrdListTil">元</span>
                                    <p class="pcOrdListDei">订单明细</p>
                                </div>
                            </el-col>
                    </el-row>


                    <el-row class="pcOrdListBox"><!-- 订单表的详情 -->
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">服务名称：</span>
                            <span class="pcOrdListTil">注册分公司</span>
                        </el-col>
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">单价：</span>
                            <span class="pcOrdListData">￥2000.00元</span>
                        </el-col>
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">数量</span>
                            <span class="pcOrdListData">1</span>
                        </el-col>
                        <el-col :sm="6" :md="6" :lg="6">
                            <span class="pcOrdListTil pcOrdListLoc">服务总额</span>
                            <span class="pcOrdListData">￥2000.00元</span>
                        </el-col>
                    </el-row>
                </div>
                <!-- 支付方式 -->
                <el-radio-group v-model="radio">
                  <p class="pcOrdCol">支付方式</p>
                  <div class="pcOrdLine"></div>
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
                    <span class="pcAllPay">￥８００.00</span>
                    <span class="pcMoney">金额总计</span><br>
                    <button class="pcAllPayBtn" @click='payWay()'>去结算</button>
                </div>







       </div>
    </div>
</template>

<script>
export default {
  name: "goodsOrder",
  created() {
    var that = this; //this是指main.js中的new Vue
    this.ajax.post('/xinda-api/business-order/detail',{businessNo:'S1704040001075133085'}).then(data=>{//订单数据
     
        
      })
  },
  data() {
    return {
      payLink:'',
      radio: 1
    };
  },
  methods: {
    payWay: function() {
      if (this.radio == 1) {
        //非网银支付，是银联支付
        this.ajax
          .post("/xinda-api/pay/china-pay", {
            businessNo: "S1704040001075133085"
          })
          .then(data => {
            // this.payLink='https://www.baidu.com/';
            // window.open("http://115.182.107.203:8088/xinda/xinda-api/pay/china-pay");         
          });

      }
      if (this.radio == 2) {//微信网页支付
          this.ajax
          .post("/xinda-api/pay/weixin-pay", {
            businessNo: "S1704040001075133085"
          })
          .then(data => {

          });
      }
      if (this.radio == 3) {//支付宝

           this.ajax
          .post("/xinda-api/pay/ali-pay", {
            businessNo: "S1704040001075133085"
          })
          .then(data => {

          });
      }
      if (this.radio == 4) {//未找到银行支付
      

      }
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
</style>