<template>
  <div>
   <!-- 我的订单 -->
   <!-- 右侧头部 -->
    <div class="mai-head">
      <div>我的订单</div>
    </div>
    <!-- 右侧身体 -->
    <div class="mai-body">
      <!-- 订单号 -->
      <div class="ordernum">
        <div class="transcode">订单号 ：</div>
        <div class="seekcode">
          <input type="text" placeholder="请输入订单号搜索">
        </div>
        <div class="seek">搜索</div>
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
        <div class="indent" :class="orderstyle">
          <!-- 大订单 -->
          <div v-for="product in products" :key="product.id">
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
            <div class="ind-detail" v-for="subitem in (product.subItem)" :key="subitem.id">
              <!-- 左侧 -->
              <div class="det-left">
                <!-- 商品 -->
                <div>
                  <div class="comname">
                    <div class="indname-img">
                      <img :src="'http://115.182.107.203:8088/xinda/pic'" alt="">
                    </div>
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

              <!-- 右侧付款/删除 -->
              <div class="det-right">
                <!-- 付款 -->
                <router-link :to="{path:'/merchandise/goodsOrder',query:{data:subitem.businessNo}}" class="ind-pay">付款</router-link>
                <!-- 删除订单 -->
                <div class="ind-delete" @click="cancel">删除订单</div>
              </div>
              <!-- 支付完成：已付款 -->



            </div>
            <!-- 右侧付款/删除 -->
            <!-- <div class="det-right"> -->
              <!-- 付款 -->
              <!-- <router-link :to="{path:'/merchandise/goodsOrder',query:{data:gData.businessNo}}" class="ind-pay">付款</router-link> -->
              <!-- 删除订单 -->
              <!-- <div class="ind-delete" @click="cancel">删除订单</div> -->
            <!-- </div> -->
            <!-- 支付完成：已付款 -->
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧尾部 -->
    <div class="mai-tail">
      <div>上一页</div>
      <div style="color: #2494d4;border-color: #2494d4;width: 3%;">1</div>
      <div>下一页</div>
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
</template>

<script>
export default {
  name: 'changepwd',
  created () {
    var that = this;  
    // 订单号及其之下的信息
    // var creTime = localStorage.getItem('time');
    this.ajax.post('/xinda-api/service-order/grid').then(function (data) {
      var Data = data.data.data;
      // that.gDatas = Data;
      var business = {};//定义空对象
      for (var i in Data) {
        // 不同订单号下的商品
        var businessNo = Data[i].businessNo;//让gData里的订单号等于businessNo
        if (!business[businessNo]) {//business里没有businessNo
          business[businessNo] = Data[i];//让business[businessNo]等于gData[i]
          // console.log(business[businessNo])
          business[businessNo].subItem = [];//给对象business[businessNo]里定义一个新的属性
        }
        business[businessNo].subItem.push(Data[i]);//将gData[i]放入新属性里
        that.products = business;
        // console.log('b===',that.products[businessNo].subItem);
        // console.log('c===',that.products[businessNo].subItem.length);

        // 时间戳转化为时间函数
        var gDate = new Date(that.products[businessNo].createTime);
        var gyear = gDate.getFullYear();
        var gmonth = gDate.getMonth() + 1;
        var gdate = gDate.getDate();
        var ghour = gDate.getHours();
        var gminute = gDate.getMinutes();
        var gsecond = gDate.getSeconds();
        var gNowDate = [gyear, gmonth, gdate].join('-') + ' ' + ghour + ':' + gminute + ':' + gsecond;
        that.products[businessNo].gdate = gNowDate;
      }
    });


    // 业务订单接口---删除按钮id 
    this.ajax.post('/xinda-api/business-order/grid').then(function (data) {
      console.log(data.data.data)
    });

  },
  data () {
    return {
      xstyle: 'trans',
      orderstyle: 'transf',
      sure: true,
      // 订单
      // gDatas:[],
      products:[],

      // input框里的时间
      stime: '',
      etime: '',
    }
  },
  methods: {
    // 删除按钮
    cancel: function () {
      this.xstyle = 'transf';
      var delId = localStorage.getItem('gId');
      console.log('delId==',delId,localStorage.getItem('gId'))
    },
    // 取消按钮
    mesx: function () {
      this.xstyle = 'trans';
    },
    // 确定按钮
    maisure: function () {
      // var delId = localStorage.getItem('gId');
      // console.log('delId==',this.delId,localStorage.getItem('gId'))
      var that = this;
      this.ajax.post('/xinda-api/business-order/del',
      this.qs.stringify({
        id: delId,
      })).then (function (data) {
        if(data.data.status == 1){
          that.orderstyle = 'trans';
          that.xstyle = 'trans';
        }else{
          that.orderstyle = 'transf';
          that.xstyle = 'trans';
        }
        console.log(data.data)
      });
    },

    // input框的开始结束时间
    start: function () {
      // console.log('stime==',this.stime)
      localStorage.setItem('st',this.stime)
    },
    end: function () {
      // console.log('etime==',this.etime)
      localStorage.setItem('et',this.etime)
      // // input框的时间
      // var sTime = localStorage.getItem('st')
      // var eTime = localStorage.getItem('et')
      // console.log(sTime)
    },
  }
}
</script>

<style scoped lang='less'>
  .trans{
    display: none;
  }
  .trasf{
    display: block;
  }
  // 右侧头部
  .mai-head{
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #e9e9e9;
    >div{
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
  .mai-body{
    width: 100%;
    // 订单号
    .ordernum{
      width: 62%;
      height: 40px;
      font-size: 14px;
      margin-top: 2%;
      display: flex;
      >div{
        margin-left: 1%;
      }
      .transcode{
        width: 16%;
        line-height: 40px;
      }
      .seekcode{
        width: 56%;
        input{
          width: 96%;
          height: 91%;
          font-size: 14px;
        }
      }
      .seek{
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
    .creatime{
      width: 75%;
      font-size: 14px;
      margin-top: 3%;
      display: flex;
      .createdate{
        line-height: 40px;
      }
      .schedule{
        margin-left: 4%;
        input{
          height: 85%;
        }
      }
    }
    // 商品名称
    .goodsname{
      margin-top: 4%;
      // 头
      .gname-top{
        width: 100%;
        background-color: #f7f7f7;
        display: flex;
        justify-content: space-around;
        >div{
          width: 13%;
          line-height: 40px;
          font-weight: bold;
          text-align: center;
        }
        .gna-pro{
          width: 28%;
        }
      }
      // 订单
      .indent{
        // 大订单
        >div{
          width: 100%;
          margin-top: 2%;
          border: 1px solid #e8e8e8;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          // 订单号(头部) 
          .indent-top{
            width: 100%;
            background-color: #f7f7f7;
            border-bottom: 1px solid #e8e8e8;
            display: flex;
            >div{
              margin-left: 3%;
              display: flex;
              >div{
                line-height: 40px;
                color: #3e3e3e;
              }
            }
          }
          // 具体信息
          .ind-detail{
            width: 100%;
            border-bottom: 1px solid #e8e8e8;
            display: flex;
            // width: 85%;
            // flex-wrap: wrap;
            // 左侧
            .det-left{
              width: 100%;
              // 商品
              >div{
                display: flex;
                
                >div{
                  width: 17%;
                  text-align: center;
                  line-height: 72px;
                }
                .comname{
                  width: 33%;
                  display: flex;
                  .indname-img{
                    width: 22%;
                    height: 59px;
                    margin: 3% 6% 3% 4%;
                    border: 1px solid #e9e9e9;
                    img{
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .indname-cha{
                    width: 65%;
                    font-size: 12px;
                    color: #828282;
                    line-height: 25px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    >div{
                      margin-top: 5%;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      overflow: hidden;
                    }
                  }
                }
                .ind-unit{
                  color: #3e3e3e;
                }
                .ind-quant{
                  color: #828282;
                  border-right: 1px solid #e8e8e8;
                }
                .ind-total{
                  color: #2692d3;
                  border-right: 1px solid #e8e8e8;
                }
                .ind-status{
                  color: #53a4d9;
                  border-right: 1px solid #e8e8e8;
                }
              }
            }
            // 右侧付款/删除
            .det-right{
              width: 13%;
              display: flex;
              flex-wrap: wrap;
              align-content: space-around;
              .ind-pay{
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
              .ind-delete{
                width: 67%;
                height: 27px;
                line-height: 27px;
                text-align: center;
                margin: 0 auto;
                color: #ff4649;
                cursor: pointer;
              }
            }
          }
          // // 右侧付款/删除
          // .det-right{
          //   width: 13%;
          //   display: flex;
          //   flex-wrap: wrap;
          //   // align-content: center;
          //   .ind-pay{
          //     width: 67%;
          //     height: 33px;
          //     display: block;
          //     text-align: center;
          //     line-height: 33px;
          //     color: #419bd7;
          //     text-decoration: none;
          //     margin: 0 auto;
          //     border: 1px solid #2693d4;
          //     border-radius: 6px;
          //     cursor: pointer;
          //   }
          //   .ind-delete{
          //     width: 67%;
          //     height: 33px;
          //     line-height: 33px;
          //     text-align: center;
          //     margin: 0 auto;
          //     margin-top: 5%;
          //     color: #ff4649;
          //     cursor: pointer;
          //   }
          // }
        }
      }
    }
  }
  // 右侧尾部
  .mai-tail{
    width: 30%;
    margin: 0 auto;
    margin-top: 4%;
    margin-bottom: 4%;
    display: flex;
    justify-content: space-around;
    >div{
      width: 19%;
      border: 1px solid #ccc;
      padding: 3% 6% 3% 6%;
      color: #ccc;
    }
  }
  // 确定删除吗
  .mai-sure{
    width: 28%;
    border: 1px solid #bbb;
    background-color: #fff;
    left: 50%;
    top: 50%;
    z-index: 25;
    overflow: hidden;
    position: fixed;
    >div{
      width:100%;
    }
    .mai-mess{
      font-size: 20px;
      line-height: 38px;
      background-color: #bbb;
      display: flex;
      justify-content: space-between;
      >div{
        &:nth-child(1){
          margin-left: 4%;
        }
      }
      .maimess-x{
        width: 10%;
        font-size: 33px;
        text-align: center;
        background-color: #777;
        cursor: pointer;
      }
    }
    .maimes-no{
      >div{
        font-size: 18px;
        margin-top: 11%;
        margin-bottom: 4%;
        display: flex;
        justify-content: space-around;
        >div{
          width: 28%;
          font-size: 16px;
          line-height: 34px;
          border-radius: 7px;
          text-align: center;
          cursor: pointer;
        }
        .mai-confirm{
          color: #fff;
          background-color: #2692d3;
        }
        .mai-undo{
          color: #333;
          border: 1px solid #333;
        }
      }
    }
  }
</style>
