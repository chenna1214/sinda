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
          <input type="date" v-model="time"> 至 <input type="date" v-model="time">
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
          <div v-for="gData in gDatas" :key="gData.id" :class="orderstyle">
            <!-- 订单号(头部) -->
            <div class="indent-top">
              <div>
                <div>订单号：</div>
                <div>{{gData.businessNo}}</div>
              </div>
              <div>
                <div>下单时间：</div>
                <div>{{gDatas.gdate}}</div>
              </div>
            </div>
            <!-- 具体信息 -->
            <div class="ind-detail">
              <!-- 左侧 -->
              <div class="det-left" v-for="pData in pDatas" :key="pData.id">
                <!-- 商品 -->
                <div :key="orderMess.id">
                  <div class="comname">
                    <div class="indname-img">
                      <img :src="'http://115.182.107.203:8088/xinda/pic'+pData.propic" alt="">
                    </div>
                    <div class="indname-cha">
                      <div class="indcha-one">{{pData.providerName}}</div>
                      <div class="indcha-two">{{pData.serviceName}}</div>
                    </div>
                  </div>
                  <div class="ind-unit">￥{{pData.unitPrice}}.00</div>
                  <div class="ind-quant">{{pData.buyNum}}</div>
                  <div class="ind-total">￥{{pData.totalPrice}}.00</div>
                  <div class="ind-status">等待买家付款</div>
                </div>
              </div>
            </div>
            <!-- 右侧付款/删除 -->
            <div class="det-right">
              <!-- 付款 -->
              <router-link :to="{path:'/merchandise/goodsOrder',query:{data:gData.businessNo}}" class="ind-pay">付款</router-link>
              <!-- 删除订单 -->
              <div class="ind-delete" @click="cancel">删除订单</div>
            </div>
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
        <div>确定删除该订单吗</div>
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
    var readId = localStorage.getItem('id');//订单号
    // console.log('readId==',readId)    

    // 从购物车获得的信息（购物车里的内容）
    this.ajax.post('/xinda-api/cart/list').then(function (data) {
      var pData = data.data.data;
      that.pDatas = pData;
      for (var i = 0; i < that.pDatas.length; i++) {
        that.pDatas[i].propic = that.pDatas[i].providerImg;
        console.log('mingc==',that.pDatas[i]);
      }
    });

    this.ajax.post('/xinda-api/business-order/detail',
    this.qs.stringify({
      businessNo: readId,
    })).then(function (data) {
      // 订单号以及时间
      var ordernum = data.data.data.businessOrder;
      that.ordernums = ordernum;
      // 时间戳转化为时间函数
      var orderDate = new Date(that.ordernums.createTime);
      var year = orderDate.getFullYear();
      var month = orderDate.getMonth() + 1;
      var date = orderDate.getDate();
      var hour = orderDate.getHours();
      var minute = orderDate.getMinutes();
      var second = orderDate.getSeconds();
      var NowDate = [year, month, date].join('-') + ' ' + hour + ':' + minute + ':' + second;
      that.ordernums.date = NowDate;
      // console.log(orderDate)//object
      // console.log('ordernums==',that.ordernums);

      // 时间
      var creatime = [year, month, date].join('-');
      localStorage.setItem('time',creatime);
    });

    // // input框的时间
    // var time = creTime;
    // console.log('time==',time)

    // 不同的订单号
    var creTime = localStorage.getItem('time');
    this.ajax.post('/xinda-api/business-order/grid',
    this.qs.stringify({
      businessNo: readId,
      startTime: creTime,
      endTime: creTime,
      start: 0,
    })).then(function (data) {
      var gData = data.data.data;
      that.gDatas = gData;
      for (var i = 0; i < that.gDatas.length; i++) {
        console.log('data====',that.gDatas[i].id)
        // 时间戳转化为时间函数
        var gDate = new Date(that.gDatas[i].createTime);
        var gyear = gDate.getFullYear();
        var gmonth = gDate.getMonth() + 1;
        var gdate = gDate.getDate();
        var ghour = gDate.getHours();
        var gminute = gDate.getMinutes();
        var gsecond = gDate.getSeconds();
        var gNowDate = [gyear, gmonth, gdate].join('-') + ' ' + ghour + ':' + gminute + ':' + gsecond;
        that.gDatas.gdate = gNowDate;
        // console.log(gyear,gDate)
        localStorage.setItem('gId',that.gDatas[i].id)
      }
    });

  },
  data () {
    return {
      xstyle: 'trans',
      orderstyle: 'transf',
      sure: true,
      // 订单号
      ordernums: [],
      // 商品具体信息
      orderMess: [],
      pDatas: [],//放入图片等
      gDatas:[],

      // input框里的时间
      time: '',
    }
  },
  methods: {
    // 删除按钮
    cancel: function () {
      this.xstyle = 'transf';
    },
    // 取消按钮
    mesx: function () {
      this.xstyle = 'trans';
    },
    // 确定按钮
    maisure: function () {
      this.orderstyle = 'trans';
      this.xstyle = 'trans';
      var delId = localStorage.getItem('gId');
      console.log('delId==',delId)
      this.ajax.post('/xinda-api/ business-order/del',
      this.qs.stringify({
        id: delId,
      })).then (function (data) {
        console.log(data)
      });
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
      width: 58%;
      height: 40px;
      font-size: 16px;
      margin-top: 2%;
      display: flex;
      justify-content: space-between;
      .transcode{
        width: 16%;
        line-height: 40px;
      }
      .seekcode{
        width: 56%;
        input{
          width: 96%;
          height: 91%;
          font-size: 16px;
        }
      }
      .seek{
        width: 19%;
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
      width: 60%;
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
            width: 85%;
            display: flex;
            flex-wrap: wrap;
            // 左侧
            .det-left{
              width: 100%;
              border-bottom: 1px solid #e8e8e8;
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
                    font-size: 12px;
                    color: #828282;
                    line-height: 25px;
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

          }
          // 右侧付款/删除
          .det-right{
            width: 13%;
            display: flex;
            flex-wrap: wrap;
            // align-content: center;
            .ind-pay{
              width: 67%;
              height: 33px;
              display: block;
              text-align: center;
              line-height: 33px;
              color: #419bd7;
              text-decoration: none;
              margin: 0 auto;
              border: 1px solid #2693d4;
              border-radius: 6px;
              cursor: pointer;
            }
            .ind-delete{
              width: 67%;
              height: 33px;
              line-height: 33px;
              text-align: center;
              margin: 0 auto;
              margin-top: 5%;
              color: #ff4649;
              cursor: pointer;
            }
          }
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
    margin-top: -28%;
    margin-left: 18%;
    overflow: hidden;
    position: absolute;
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
