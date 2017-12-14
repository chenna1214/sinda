<template>
    <div>
        <div @click="gouwuche" class="pctaxservices-body">
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
                <div class="pcsh-taelm" v-for="shTrData in shTrDatas" :key="shTrData.providerName">
                  <p class="pcsh-conm">{{shTrData.providerName}}</p>
                  <el-row class="pcsh-ginfo">
                    <el-col :span="4">
                      <div class="pcsh-gimg">
                        <img  :src="'http://115.182.107.203:8088/xinda/pic'+ shTrData.providerImg"  alt="">
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <p class="pcsh-sergd">{{shTrData.serviceName}}</p>
                    </el-col>
                    <el-col :span="3">
                      <p class="pcsh-unipr">￥{{shTrData.unitPrice}}</p>
                    </el-col>
                    <el-col :span="5" class="pcsh-cot-w">
                      <el-input-number class="pcsh-count" v-model="shTrData.buyNum" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-col>
                    <el-col :span="3">
                      <p class="pcsh-money pcsh-mnyin">￥{{shTrData.unitPrice*shTrData.buyNum}}</p>
                    </el-col>
                    <el-col :span="5">
                      <p class="pcsh-act">删除</p>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
            <!-- 金额总计 -->
            <div class="pctl-pr-wp clear">
              <p class="pctl-price">金额总计<span class="pctl-prcin">￥{{tlPrice}}</span></p>
              <div class="pctl-prbtn">
                <router-link tag="div" class="pctl-prbnst1 pcgo-shop" to="/merchandise/allProduct">继续购物</router-link>
                <router-link tag="div" @click="settleActs" class="pctl-prbnst1 pcsettle" to="/merchandise/goodsOrder">去结算</router-link>
                <!-- <input @click="settleActs" class="pcsettle" type="button" value="去结算"> -->
              </div>
            </div>
            <div class="pcpop-serw">
              <p class="pcpop-seti">热门服务</p>
              <div class="pcpop-serb">
                <el-row>
                  <el-col :span="6">
                    <div class="pcpop-selm clear">
                      <p class="pcpp-senm">商标快速注册通道（5小时balaba）</p>
                      <div class="pcpp-line"><span class="pcpp-lineh"></span><span class="pcpp-lineb"></span></div>
                      <p class="pcpp-sinfo">工作日内5小时（5小时balaba）</p>
                      <p class="pcpp-sinfo">销量：</p>
                      <p class="pcpp-price">￥1400.00</p>
                      <del class="pcpp-marpr"><span class="pcpp-marpw">原价：￥2000.00</span></del> 
                      <p class="pcpp-more">查看详情>>></p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {mapActions} from 'vuex'//改变数据
export default {
  name: "shoppingtrolley",
  methods: {
    // toDetail(id){
    //   this.$router.push({path:'/merchandise/productdetail',query:{id:id}});
    // },
    handleChange(value) {
      console.log(value);
      console.log('that.goodsnum==',this.goodsnum)
    },
    gouwuche: function() {
      var that = this;
    },
    // 结算
    settleActs: function() {
      this.ajax.post("/xinda-api/cart/submit").then(function(data) {
        // console.log("提交结算",data)
      });
    }
  },
  created() {
    var that = this;
    // 获取购物城商品数目
    this.ajax.post("/xinda-api/cart/list").then(function(data) {
      that.shTrDatas = data.data.data;
      for(var i=0;i<that.shTrDatas.length;i++){
        // 商品数量
        console.log('that.shTrDatas[i]==',that.shTrDatas[i].price)
        that.goodsnum += that.shTrDatas[i].buyNum;
        // 总价
        that.tlPrice += that.shTrDatas[i].unitPrice*that.shTrDatas[i].buyNum;
      }
    });
    this.goodsnum = that.goodsnum
    this.shTrDatas = that.shTrDatas;
    // 推荐相关接口  热门服务 2.4.2
    this.ajax
      .post("/xinda-api/recommend/list")
      .then(function(data) {
        console.log(data.data.data)
      });
    // 总价
    // console.log('this.shTrDatas===',this.shTrDatas);
  },
  data() {
    return {
      goodsnum: 0,
      num1: 1,
      shTrDatas: [],
      tlPrice: 0
    };
  },
  components: {}
};
</script>

<style scoped lang='less'>
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
    .pctl-prbnst1{
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
  margin-top: 54px;
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
      .pcpp-line{
        position: relative;
        height: 10px;
        .pcpp-lineh{
          position: absolute;
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #2693d4;
          border-radius: 3px;
        }
        .pcpp-lineb{
          position: absolute;          
          top: 2px;
          display: inline-block;
          width: 160px;
          height: 1px;
          background:linear-gradient(left, #2693d4,#fff);
        }
      }
      .pcpp-sinfo{
        line-height: 25px;
        color: #676767;
        font-size: 13px;
      }
      .pcpp-price{
        margin-top: 2.5px;
        font-size: 35px;
        color: #2693d4;
        font-weight: 700;
      }
      .pcpp-marpr{
        line-height: 38px;
        display: inline-block;        
        color: #6b433b;
        .pcpp-marpw{
          color: #686868;
        }
      }
      .pcpp-more{
        line-height: 38px;        
        float: right;
        display: inline-block;
        color: #74b3df;
        font-size: 13px;
      }
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

// 计数器
.pcsh-count {
  margin: 0 auto;
  width: 69px;
  height: 20px;
  .el-input-number__decrease,
  .el-input-number__increase {
    width: 18px;
    height: 20px;
    background: #bcbebd;
    border-radius: 0;
    i {
      color: #202020;
      position: absolute;
      top: 3px;
      left: 2px;
    }
  }
  .el-input {
    width: 69px;
    line-height: 20px;
    .el-input__inner {
      padding: 0 18px;
      height: 20px;
      border: 0;
    }
  }
}
</style>