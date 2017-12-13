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
                      <el-input-number class="pcsh-count" v-model="Data.buyNum" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-col>
                    <el-col :span="3">
                      <p class="pcsh-money pcsh-mnyin">￥800</p>
                    </el-col>
                    <el-col :span="5">
                      <p class="pcsh-act">删除</p>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
        </div>
        <el-input-number :min="1" :max="10" label="描述文字"></el-input-number>
        
    </div>
</template>

<script>
// import {mapActions} from 'vuex'//改变数据
export default {
  name: "shoppingtrolley",
  methods: {
    // ...mapActions(['setNum']),
    // toDetail(id){
    //   this.$router.push({path:'/merchandise/productdetail',query:{id:id}});
    // },
    handleChange(value) {
      console.log(value);
    },
    gouwuche: function() {
      var that = this;
      // this.ajax.post("/xinda-api/cart/list")
      //   .then(function(data) {
      //     console.log('购物车===',data.data.data);
      //     that.goodsnum = data.data.data.length;
      //   });
    }
  },
  created() {
    var that = this;
    // 获取购物城商品数目
    this.ajax.post("/xinda-api/cart/list").then(function(data) {
      console.log("购物车===", data.data.data);
      that.shTrDatas = data.data.data;
      // 商品数目
      that.goodsnum = that.shTrDatas.length;
    });
  },
  data() {
    return {
      goodsnum: "",
      num1: 1,
      shTrDatas: []
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
</style>

<style lang='less'>
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