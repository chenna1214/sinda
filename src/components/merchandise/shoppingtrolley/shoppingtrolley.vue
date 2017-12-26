<template>
    <div>
        <div class="pctaxservices-body hidden-xs-only">
            <a class="pctaxservices-title">首页/购物车</a>
            <el-row>
                <el-col :span="24">
                    <div class="pcsp-all">全部商品( {{goodsnum}} ) </div>
                </el-col>
            </el-row>
            <div class="pcsh-table">
              <div class="pcsh-tabhd">
                <el-row>
                  <el-col :span="4">
                      <p class="pcsh-conm">公司</p>
                  </el-col>
                  <el-col :span="4">
                      <p class="pcsh-sergd">服务商品</p>
                  </el-col>
                  <el-col :span="3">
                      <p class="pcsh-unipr">单价</p>
                  </el-col>
                  <el-col :span="5">
                      <p class="pcsh-gsnum">数量</p>
                  </el-col>
                  <el-col :span="3">
                      <p class="pcsh-money">金额</p>
                  </el-col>
                  <el-col :span="5">
                      <p class="pcsh-act">操作</p>
                  </el-col>
                </el-row>
                <div class="pcsh-taelm" v-for="(shTrData,idx) in shTrDatas" :key="shTrData.providerName">
                  <p class="pcsh-conm">{{shTrData.providerName}}</p>
                  <el-row class="pcsh-ginfo">
                    <el-col :span="4">
                      <div class="pcsh-gimg" @click="toDetail(shTrData.serviceId)">
                        <img  :src="'http://115.182.107.203:8088/xinda/pic'+ shTrData.providerImg"  alt="">
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <p @click="toDetail(shTrData.serviceId)" class="pcsh-sergd">{{shTrData.serviceName}}</p>
                    </el-col>
                    <el-col :span="3">
                      <p class="pcsh-unipr">￥{{shTrData.unitPrice}}</p>
                    </el-col>
                    <el-col :span="5" class="pcsh-cot-w" >
                      <!-- 数字框 -->
                      <div class="pcsh-count clear">
                        <!-- 减法按钮 -->
                        <span @click="addGoodsbtn(shTrData.serviceId,-1,shTrData.buyNum)" class="pc-subbtn pc-combtn pointer">-</span>
                        <input @focus="fcsGoodipt(shTrData.serviceId,shTrData.buyNum)" @blur="blurGoodipt(shTrData.serviceId,shTrData.buyNum)" class="pcsh-ipt" type="number" min="1" step="1" v-model="shTrData.buyNum">
                        <!-- 加法按钮 -->
                        <span @click="addGoodsbtn(shTrData.serviceId,1,shTrData.buyNum)" class="pc-addbtn pc-combtn pointer">+</span>
                      </div>
                      
                    </el-col>
                    <el-col :span="3">
                      <p class="pcsh-money pcsh-mnyin">￥{{shTrData.totalPrice}}</p>
                    </el-col>
                    <el-col :span="5" class="pcsh-remv">
                      <p  @click="centerDialogVisible = true"  class="pcsh-act pointer">删除</p>
                      <el-dialog title="确定删除该产品吗" :visible.sync="centerDialogVisible" width="30%" center>
                        <div class="pcsh-pophd">信息</div>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="removeGoods(shTrData.serviceId)" type="primary" >确 定</el-button>
                          <el-button @click="centerDialogVisible = false">取 消</el-button>
                        </span>
                      </el-dialog>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
            <!-- 金额总计 -->
            <div class="pctl-pr-wp clear">
              <p class="pctl-price">金额总计<span class="pctl-prcin">￥{{tlPrice}}</span></p>
              <div class="pctl-prbtn">
                <router-link tag="div" class="pctl-prbnst1 pcgo-shop pointer" to="/merchandise/allProduct">继续购物</router-link>
                <!-- <router-link tag="div" @click="settleActs" class="pctl-prbnst1 pcsettle" to="/merchandise/goodsOrder">去结算</router-link> -->
                <div @click="settleActs" class="pctl-prbnst1 pcsettle pointer">去结算</div>
              </div>
            </div>
            <div class="pcpop-serw">
              <p class="pcpop-seti">热门服务</p>
              <div class="pcpop-serb">
                <el-row>
                  <el-col :span="6" v-for="(popservise,idx) in popservises" :key="popservise.serviceName">
                    <div class="pcpop-selm clear" @click="toDetail(popservise.id)">
                      <p class="pcpp-senm">{{popservise.serviceName}}</p>
                      <div class="pcpp-line"><span class="pcpp-lineh"></span><span class="pcpp-lineb"></span></div>
                      <p class="pcpp-sinfo">{{popservise.serviceInfo}}</p>
                      <p class="pcpp-sinfo">销量：</p>
                      <p class="pcpp-price">￥{{popservise.price}}</p>
                      <del class="pcpp-marpr"><span class="pcpp-marpw">原价：￥{{popservise.marketPrice}}</span></del> 
                      <p class="pcpp-more">查看详情>>></p>
                    </div>
                  </el-col>
                  
                </el-row>
              </div>
            </div>
        </div>


        <!-- 手机端 购物车 -->
        <div class="tel-shptro hidden-sm-and-up">
          <div v-if="goodsnum">
          <!-- 头部 -->
            <p class="tel-shhd">
              购物车里有<span class="tel-shdnum">{{goodsnum}}</span>件商品
            </p>

            <div class="tel-shbody">

              <!-- 财税服务 手机端商品列表 -->
              <ul class="tel-texbdy">
                <!-- 财税服务 手机端商品 -->       
                <li class="tel-texelm clear" v-for="(shTrData,idx) in shTrDatas" :key="shTrData.providerName">
                  <p class="tel-spconm">{{shTrData.providerName}}</p>
                  <!-- 左侧图片 -->
                  <div class="tel-teimg">
                    <img :src="'http://115.182.107.203:8088/xinda/pic'+ shTrData.providerImg" alt="" class="tel-imgin">
                    </div>
                    <!-- 右侧文字部分 -->
                    <div class="tel-tewor">
                    <p class="tel-tenmac clear"><span class="tel-tenm">{{shTrData.serviceName}}</span> <span @click="centerDialogVisible = true"  class="tel-act">删除订单</span>
                    </p>
                    <el-dialog title="确定删除该产品吗" :visible.sync="centerDialogVisible" width="30%" center>
                      <div class="pcsh-pophd">信息</div>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="removeGoods(shTrData.serviceId)" type="primary" >确 定</el-button>
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                      </span>
                    </el-dialog>
                    <p class="tel-spmony clear"><span class="tel-spmoin">￥{{shTrData.unitPrice}}&nbsp;</span><span class="tel-spyuan">&nbsp;元</span></p>
                    <div class="tel-buynum clear"><span class="tel-bynmw">购买数量：</span>
                      <span>

                        <div class="pcsh-count clear">
                          <!-- 减法按钮 -->
                          <span @click="addGoodsbtn(shTrData.serviceId,-1,shTrData.buyNum)" class="pc-subbtn pc-combtn pointer">-</span>
                          <input @focus="fcsGoodipt(shTrData.serviceId,shTrData.buyNum)" @blur="blurGoodipt(shTrData.serviceId,shTrData.buyNum)" class="pcsh-ipt" type="number" min="1" step="1" v-model="shTrData.buyNum">
                          <!-- 加法按钮 -->
                          <span @click="addGoodsbtn(shTrData.serviceId,1,shTrData.buyNum)" class="pc-addbtn pc-combtn pointer">+</span>
                        </div>

                      </span>
                    </div>
                    <div class="tel-earea">
                      <!-- <p>北京</p> -->
                      <!-- <i class="el-icon-location-outline"></i><span class="tel-earcon">{{shTrData.regionName.replace(/-/g,'  ').replace(/\S*/,'')}}</span> -->
                    </div>
                  </div>
                </li>
              </ul>
              </div>
              <div class="tel-shft clear">
                <div class="tel-shprc tel-inline">合计：<span class="telt-prcin">￥{{tlPrice+'.00'}}</span></div>
                <div  @click="settleActs" class="tel-settle tel-inline">去结算</div>
              </div>
        </div>

        <div v-if="!goodsnum" class="tel-blank">
          <div class="tel-blanki">
            <img src="../../images/companyIdstry/blank.png" alt="">
          </div>
          <p class="tel-blankw">购物车空空如也，去首页逛逛吧！</p>
          <router-link class="tel-blankb" tag="button" to="/merchandise/allProduct">去首页</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"; //显示数据
export default {
  name: "shoppingtrolley",
  methods: {
    // 数字框获取焦点事件
    fcsGoodipt(goodId, buyNum) {
      var that = this;
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({ id: goodId, num: 0 - buyNum })
        )
        .then(function(data) {
          // buyNum++;
          that.getGoods();
        });
    },
    // 数字框失去焦点事件
    blurGoodipt(goodId, buyNum) {
      var that = this;
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({ id: goodId, num: buyNum })
        )
        .then(function(data) {
          // buyNum++;
          that.getGoods();
        });
    },
    // 添加（减少）购物车商品
    addGoodsbtn(goodId, numb, buyNum) {
      var that = this;
      if (numb == 1 && buyNum > 0) {
        this.ajax
          .post(
            "/xinda-api/cart/add",
            this.qs.stringify({ id: goodId, num: 1 })
          )
          .then(function(data) {
            // buyNum++;
            that.getGoods();
          });
      } else if (numb == -1 && buyNum > 1) {
        this.ajax
          .post(
            "/xinda-api/cart/add",
            this.qs.stringify({ id: goodId, num: -1 })
          )
          .then(function(data) {
            // buyNum++;
            that.getGoods();
          });
      }
    },

    ...mapActions(["setNum"]),
    toDetail(id) {
      this.$router.push({
        path: "/merchandise/productdetail",
        query: { id: id }
      });
    },
    // 获取购物车商品
    getGoods() {
      var that = this;
      // 获取购物城商品数目
      this.ajax.post("/xinda-api/cart/list").then(function(data) {
        that.shTrDatas = data.data.data;
        console.log("购物车==", data.data.data);
        that.tlPrice = 0;
        for (var i = 0; i < that.shTrDatas.length; i++) {
          // 商品数量
          that.goodsnum += that.shTrDatas[i].buyNum;
          // 总价
          that.tlPrice += that.shTrDatas[i].totalPrice;
        }
      });
    },

    // -------------------
    //删除商品
    removeGoods: function(id) {
      this.centerDialogVisible = false;
      var that = this;
      this.ajax
        .post("/xinda-api/cart/del", this.qs.stringify({ id: id }))
        .then(function(data) {
          // 重新获取数据
          that.getGoods();
        });
    },
    // 结算
    settleActs: function() {
      //等待数据加载成功---------------
      const loading = this.$loading({
        lock: true,
        text: " （￣▽￣）马上就好（￣▽￣） ",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
      // --------------------------
      var that = this;
      this.ajax.post("/xinda-api/cart/submit").then(function(data) {
        // console.log("提交结算", data.data.data);
        that.order = data.data.data;
        that.$router.push({
          path: "/merchandise/goodsOrder",
          query: { data: that.order }
        });
      });
    }
  },
  watch: {
    // buynumber
  },
  created() {
    var that = this;
    // 获取购物城商品数目
    this.ajax.post("/xinda-api/cart/list").then(function(data) {
      that.shTrDatas = data.data.data;
      // console.log("data.data.data==", data.data.data);
      // that.buynumber = that.shTrDatas[that.idx].buyNum;
      for (var i = 0; i < that.shTrDatas.length; i++) {
        // 商品数量
        console.log("that.shTrDatas[i]==", that.shTrDatas[i]);

        // 加减数初始值
        that.goodsnum += that.shTrDatas[i].buyNum;
        // 总价
        that.tlPrice += that.shTrDatas[i].totalPrice;
      }
    });
    this.goodsnum = that.goodsnum;
    this.shTrDatas = that.shTrDatas;
    // 推荐相关接口  热门服务 2.4.2
    this.ajax.post("/xinda-api/recommend/list").then(function(data) {
      that.popservises = data.data.data.product;
      // console.log('that.popservises===',that.popservises)
    });
    // this.ajax.post("/xinda-api/cart/submit").then(function(data) {
    //     console.log('data=======',data)
    //     console.log("提交结算",data.data.data)
    //     that.order = data.data.data
    //   });
  },
  data() {
    return {
      // 加载
      fullscreenLoading: false,
      goodsnum: 0,
      num1: 1,
      shTrDatas: [],
      tlPrice: 0,
      popservises: [],
      order: "",
      oldvalue: 1,
      // value: ''
      centerDialogVisible: false,
      numid: "",
      buynumber: 0,
      idx: 0
      // 获取焦点
    };
  },
  components: {}
};
</script>

<style scoped lang='less'>
@media all and (min-width: 768px) {
  .pointer {
    cursor: pointer;
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
    // 全部产品
    .pcsp-all {
      margin-top: 11px;
      padding-left: 65px;
      color: #3e9bd6;
      font-size: 13px;
      line-height: 31px;
    }
    .pcsh-table {
      padding-top: 18px;
      line-height: 29px;
      font-size: 13px;
      color: #686868;
      border-top: 1px solid #bdbdbd;
      // 公司名
      .pcsh-conm {
        padding-left: 65px;
      }
      // 服务商品
      .pcsh-sergd {
      }
      //单价
      .pcsh-unipr {
        padding-left: 35px;
      }
      // 数量
      .pcsh-gsnum {
        text-align: center;
      }
      // 金额
      .pcsh-money {
        text-align: right;
      }
      .pcsh-act {
        padding-right: 32px;
        text-align: right;
      }
      .pcsh-taelm {
        line-height: 76px;
        .pcsh-ginfo {
          background: #f7f7f7;
          // 图片
          .pcsh-gimg {
            padding: 16px 0 19px 31px;
            width: 41px;
            height: 41px;
          }
          .pcsh-mnyin {
            color: #50a2da;
          }
          .pcsh-cot-w {
            height: 76px;
            overflow: hidden;
            text-align: center;
          }
        }
      }
    }
  }

  // 金额总计

  .pctl-pr-wp {
    padding: 11px 21px 0 0;
    .pctl-price {
      text-align: right;
      font-size: 14px;
      color: #676767;
      line-height: 47px;
      .pctl-prcin {
        color: #2793d3;
        font-size: 22px;
      }
    }
    .pctl-prbtn {
      float: right;
      max-width: 215px;
      .pctl-prbnst1 {
        display: inline-block;
        text-align: center;
        width: 99px;
        height: 24px;
        line-height: 24px;
        color: #76b1dd;
        border: 1px solid #2693d4;
        border-radius: 3px;
        background: #fff;
      }
    }
  }

  .pcpop-serw {
    margin: 54px 0 99px;
    .pcpop-seti {
      padding-left: 65px;
      color: #76b1dd;
      font-size: 13px;
      line-height: 31px;
      border-bottom: 1px solid #bdbdbd;
    }
    .pcpop-serb {
      padding: 34px 10px 0 17px;
      .pcpop-selm {
        overflow: hidden;
        padding: 10px 19px 0 14px;
        margin-right: 26px;
        min-height: 189px;
        border: 1px solid #b6b6b6;
        .pcpp-senm {
          overflow: hidden;
          font-size: 17px;
          color: #000;
          height: 38px;
          line-height: 38px;
        }
        .pcpp-line {
          position: relative;
          height: 10px;
          .pcpp-lineh {
            position: absolute;
            display: inline-block;
            width: 6px;
            height: 6px;
            background: #2693d4;
            border-radius: 3px;
          }
          .pcpp-lineb {
            position: absolute;
            top: 2px;
            display: inline-block;
            width: 160px;
            height: 1px;
            background: linear-gradient(left, #2693d4, #fff);
          }
        }
        .pcpp-sinfo {
          overflow: hidden;
          height: 25px;
          line-height: 25px;
          color: #676767;
          font-size: 13px;
        }
        .pcpp-price {
          margin-top: 2.5px;
          font-size: 35px;
          color: #2693d4;
          font-weight: 700;
        }
        .pcpp-marpr {
          line-height: 38px;
          display: inline-block;
          color: #6b433b;
          .pcpp-marpw {
            color: #686868;
          }
        }
        .pcpp-more {
          line-height: 38px;
          float: right;
          display: inline-block;
          color: #74b3df;
          font-size: 13px;
        }
      }
    }
  }
  // 计数器 pc
  .pcsh-count {
    margin: 30px auto;
    overflow: hidden;
    width: 69px;
    height: 20px;
    input.pcsh-ipt {
      display: inline-block;
      float: left;
      width: 33px;
      height: 20px;
      text-align: center;
      color: #565656;
      border: 0;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
    .pc-combtn {
      background: #bdbdbd;
      width: 18px;
      height: 20px;
      float: left;
      line-height: 18px;
      color: #202020;
      font-size: 25px;
      text-align: center;
      display: inline-block;
    }
  }
}

// 手机端
@media all and (max-width: 767px) {
  .tel-shptro {
    height: 12.58rem;
  }
  // 购物车 头部全部商品数目
  .tel-shhd {
    position: fixed;
    top: 0;
    padding-left: 3.06%;
    width: 96.94%;
    color: #4b4b4b;
    font-size: 0.22rem;
    font-weight: 400;
    line-height: 0.77rem;
    background: #e5e5e5;
    .tel-shdnum {
      color: #f00;
    }
  }
  // 购物车主体
  .tel-shbody {
    margin-top: 0.77rem;
    .tel-texhd {
      width: 100%;
    }
    // 商品列表块
    .tel-texbdy {
      width: 96.73%;
      padding-left: 3.27%;
      .tel-texelm {
        width: 100%;
        padding-top: 0.004rem;
        min-height: 2.55rem;
        border-bottom: 1px solid #cfcfcf;
        // 元素顶部 公司名
        .tel-spconm {
          width: 100%;
          line-height: 0.63rem;
          font-size: 0.28rem;
          font-weight: 500;
          color: #000;
        }
        // 左侧图片
        .tel-teimg {
          margin: 0.08rem 0.24rem 0 0;
          float: left;
          // width: 22.64%;
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
          .tel-tenmac {
            .tel-tenm {
              float: left;
              display: inline-block;
              max-width: 76.52%;
              color: #000;
              font-size: 0.28rem;
              font-weight: 300;
              line-height: 0.5rem;
            }
            // 删除订单
            .tel-act {
              float: right;
              display: inline-block;
              margin-top: 0.06rem;
              max-width: 23.48%;
              float: right;
              line-height: 0.43rem;
              font-size: 0.22rem;
              font-weight: 400;
              color: #f00;
            }
          }
          .tel-buynum {
            height: 0.33rem;
            line-height: 0.33rem;
            font-size: 0.16rem;
            color: #000;
            .tel-bynmw {
              float: left;
              display: inline-block;
              line-height: 0.33rem;
            }
          }
          // 价格
          .tel-spmony {
            line-height: 0.63rem;
            .tel-spmoin {
              float: left;
              font-size: 0.26rem;
              font-weight: 700;
              color: #f00;
            }
            .tel-spyuan {
              float: left;
              font-size: 0.16rem;
            }
          }
          .tel-earea {
            font-size: 0.16rem;
            .tel-earcon {
              line-height: 0.45rem;
            }
          }
        }
      }
    }
  }
  // 底部
  .tel-shft {
    position: fixed;
    bottom: 0.84rem;
    width: 100%;
    height: 1.1rem;
    line-height: 1.1rem;
    .tel-inline {
      float: left;
      font-size: 0.28rem;
      display: inline-block;
    }
    .tel-shprc {
      padding-left: 4%;
      width: 61%;
      background: #e5e5e5;
      .telt-prcin {
        color: #f00;
      }
    }
    .tel-settle {
      width: 35%;
      text-align: center;
      color: #fff;
      background: #fb2d2d;
    }
  }
  // 计数器 手机
  .pcsh-count {
    margin: 0.03rem 0 0 0.02rem;
    display: inline-block;
    overflow: hidden;
    width: 69px;
    height: 20px;
    input.pcsh-ipt {
      display: inline-block;
      float: left;
      width: 33px;
      height: 20px;
      text-align: center;
      color: #565656;
      border: 0;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
    .pc-combtn {
      background: #bdbdbd;
      width: 18px;
      height: 20px;
      float: left;
      line-height: 18px;
      color: #202020;
      font-size: 25px;
      text-align: center;
      display: inline-block;
    }
  }
}

// 购物车为空

.tel-blank {
  position: absolute;
  width: 100%;
  top: 0;
  height: 13rem;
  background: #f8fff8;
  .tel-blankw {
    width: 55%;
    margin: 0.46rem auto 0;
    font-size: 0.27rem;
    color: #2693d4;
  }
  .tel-blankb {
    display: block;
    margin: 0.975rem auto 0;
    width: 33.46%;
    height: 0.85rem;
    font-size: 0.28rem;
    color: #fff;
    background: #2693d4;
    border: 0;
    border-radius: 4px;
  }
  .tel-blanki {
    margin: 2.52rem auto 0;
    width: 3.36rem;
    height: 3.36rem;
    img {
      width: 100%;
    }
  }
}
</style>

<style lang='less'>
.clear::after {
  content: "";
  display: block;
  clear: both;
}

li {
  list-style: none;
}

@media all and (min-width: 768px) {
  // 计数器
  // .pcsh-count {
  //   margin: 0 auto;
  //   width: 69px;
  //   height: 20px;
  //   .el-input-number__decrease,
  //   .el-input-number__increase {
  //     width: 18px;
  //     height: 20px;
  //     background: #bcbebd;
  //     border-radius: 0;
  //     i {
  //       color: #202020;
  //       position: absolute;
  //       top: 3px;
  //       left: 2px;
  //     }
  //   }

  //   .el-input {
  //     width: 69px;
  //     line-height: 20px;
  //     .el-input__inner {
  //       padding: 0 18px;
  //       height: 20px;
  //       border: 0;
  //     }
  //   }
  // }

  // 删除部分
  .pcsh-remv {
    // 弹出框
    .el-dialog--center {
      position: relative;
      width: 22% !important;
      overflow: hidden;
      .el-dialog__header {
        margin-top: 85px;
        line-height: 60px;
        padding: 0;
      }
      .el-dialog__body {
        position: absolute;
        top: 0;
        width: 96%;
        padding: 0 0 0 4%;
        line-height: 50px;
        color: #000;
        font-weight: 700;
        background: #bbb;
      }
      .el-dialog__footer {
        padding: 0;
        line-height: 100px;
        .el-button {
          width: 30%;
          height: 45px;
        }
      }
    }
    .el-dialog__headerbtn {
      z-index: 10;
    }
  }
}

@media all and (max-width: 767px) {
  // 计数器
}
</style>