<template>
  <div>
   <!-- 店铺 -->
    <div class="company hidden-xs-only" :key="products.id">
       <!-- 企业logo -->
      <div class="com-logo">
        <!-- 图 -->
        <div class="comlogo-image">
          <img :src="'http://115.182.107.203:8088/xinda/pic'+products.providerImg" alt="">
        </div>
        <!-- 字 -->
        <div class="comlogo-character">
          <div class="comlogo-name">{{products.name}}</div>
          <div>服务地址：<div class="comlogo-address">{{products.regionName}}</div></div>
        </div>
      </div>
      <!-- 身体部位 公司介绍-->
      <div class="com-introduction">
        <!-- 左边 -->
        <div class="comint-left">
          <!-- 上 -->
          <div class="comintleft-top">
            <div class="comlefttop-introduce">公司介绍</div>
            <div class="comlefttop-definite">
              {{products.providerInfo}}
            </div>
          </div>
          <!-- 下 -->
          <div class="comintleft-down">
            <!-- 1 -->
            <div>
              <div>
                <img src="../pc_images/pc_homepage.png" alt="">
              </div>
              <div>平台担保</div>
            </div>
            <!-- 2 -->
            <div>
              <div>
                <img src="../pc_images/pc_homepage1.png" alt="">
              </div>
              <div>优质服务</div>
            </div>
            <!-- 3 -->
            <div>
              <div>
                <img src="../pc_images/pc_homepage2.png" alt="">
              </div>
              <div>过程监督</div>
            </div>
            <!-- 4 -->
            <div>
              <div>
                <img src="../pc_images/pc_homepage3.png" alt="">
              </div>
              <div>增值服务</div>
            </div>
          </div>
        </div>
        <!-- 右边 -->
        <div class="comint-right">
          <!-- 头 -->
          <div class="comintright-top">
            <!-- 上 -->
            <div class="comright-up">
              <div @click="serve" :class="astyle">服务产品</div>
              <div @click="service" :class="bstyle">客服</div>
              <div @click="certificate" :class="cstyle">资质证书</div>
            </div>
            <!-- 下 -->
            <div class="comright-under">
              <!-- 服务产品 -->
              <div class="comright-serveproduct" v-show="rightserve">
                <div>
                  <!-- 外层盒子 -->
                  <div v-for="service in services" :key="service.id">
                    <!-- 内层盒子 -->
                    <div>
                      <div class="comrightser-top">{{service.serviceName}}</div>
                      <!-- 线 -->
                      <div class="comrightser-line">
                        <div class="comrightline-dot"></div>
                        <div class="comrightline-line"></div>
                      </div>
                      <!-- 质量认证 -->
                      <div class="comrightser-quality">{{service.serviceInfo}}</div>
                      <!-- 销量 -->
                      <div class="comrightser-sales">销量</div>
                      <!-- 现价 -->
                      <div class="comrightser-present">￥ {{service.price}}.00</div>
                      <!-- 原价 -->
                      <div class="comrightser-original">原价：
                        <del>￥ {{service.marketPrice}}.00</del>
                        <a href="javascript:void(0)" @click="proDetail(service.id)">查看详情>></a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 尾 -->
                <div class="comintright-down">
                  <div>首页</div>
                  <div>上一页</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>...</div>
                  <div>下一页</div>
                  <div>尾页</div>
                </div>
              </div>
                <!-- 客服 -->
              <div class="comright-service" v-show="rightservice">
                <div>工作时间：{{products.workTime}}</div>
                <div>
                  <div>QQ咨询：{{products.qq}}</div>
                </div>
                <div>
                  <div>微信咨询：{{products.weixin}}</div>
                </div>
                <div>
                  <div>邮箱：{{products.email}}</div>
                </div>
              </div>
              <!-- 资质证书 -->
              <div class="comright-certificate" v-show="rightcertificate">
                <img src="../pc_images/u4652.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 微信端店铺首页 -->
    <div class="hidden-sm-and-up" :key="products.id">
      <!-- 公司具体信息 -->
      <div class="wecompany">
        <div class="wec-logo">
          <img :src="'http://115.182.107.203:8088/xinda/pic'+products.providerImg" alt="">
        </div>
        <div class="wec-name">{{products.name}}</div>
        <div class="wec-mes">{{products.providerInfo}}</div>
      </div>
      <!-- 所有服务 -->
      <div class="weallser">
        <div class="wea-allser">
          <div class="wea-all">所有服务</div>
          <span></span>
        </div>
        <!-- 具体信息 -->
        <div class="wea-detail">
          <div class="wea-box" v-for="service in services" :key="service.id">
            <div class="wea-img" @click="proDetail(service.id)">
              <img :src="'http://115.182.107.203:8088/xinda/pic'+service.providerImg" alt="">
            </div>
            <div class="wea-mes">
              <div class="wea-name">{{service.serviceName}}</div>
              <div class="wea-infor">{{service.serviceInfo}}</div>
              <div class="wea-area">
                <div class="wea-baidu">
                  <div class="wea-icon"><img src="../pc_images/we-ditu.png" alt=""></div>
                  <div class="wea-addshi">北京市</div>
                  <div class="wea-addqu">朝阳区</div>
                </div>
                <div class="wea-price">
                  <div class="wea-buynum">￥{{service.price}}.00</div>
                  <div class="wea-yuan">元</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pc_shophp',
  watch:{//监听服务商的id，根据服务商的id获取最新的服务商数据
    $route:function(){
    this.getService()
    }
  },
  created () {
    // console.log('this.$route.query.id ==',this.$route.query.id);
    var that = this;
    this.getService()
    // 服务产品
    this.ajax.post('/xinda-api/recommend/list',
    this.qs.stringify({
      // start: 0,
      // limit: 8,
      // productTypeCode: "1",
      // // productId: '3e2987b535946edd2e5f686e42b67454',
      // // providerId: "8a82f52b674543e298d2e5f685946e6e",
      // sort: 2,
    })).then(function (data) {
      var sData = data.data.data;
      that.services = sData.product;
      console.log('fuwu==',that.services);
    });
  },
  data () {
    return {
      services: [],
      products: [],
      rightserve: true,
      rightservice: false,
      rightcertificate: false,
      astyle: 'changes',
      bstyle: 'changes',
      cstyle: 'changes',
    }
  },
  methods: {
    // 点查看详情去商品详情页
    getService(){
       var that = this;
    // 公司介绍
    that.ajax.post('/xinda-api/provider/detail',
    that.qs.stringify({
      id: this.$route.query.id
    })).then(function (data) {
      var rData = data.data.data;
      that.products = rData;
      // console.log('rData==',rData)
    });

    },
    proDetail (id) {
      this.$router.push({
        path: '/merchandise/productdetail',
        query: {id: id}
      });
    },
    serve: function () {
      this.rightserve = true;
      this.rightservice = false;
      this.rightcertificate = false;
      this.astyle = 'change';
      this.bstyle = 'changes';
      this.cstyle = 'changes';
    }, 
    service: function () {
      this.rightserve = false;
      this.rightservice = true;
      this.rightcertificate = false;
      this.astyle = 'changes';
      this.bstyle = 'change';
      this.cstyle = 'changes';
    },
    certificate: function () {
      this.rightserve = false;
      this.rightservice = false;
      this.rightcertificate = true;
      this.astyle = 'changes';
      this.bstyle = 'changes';
      this.cstyle = 'change';
    },
  }
}
</script>

<style scoped lang='less'>
  @media all and (min-width: 768px){
    .change{
      background-color: #efefff;
    }
    .changes{
      background-color: #aaa;
    }
    .company{
      width: 84%;
      margin: 0 auto;
      // 企业logo
      .com-logo{
        width: 100%;
        border-bottom:1px solid #e9e9e9;
        margin-top: 2%;
        display: flex;
        // 图
        .comlogo-image{
          width: 140px;
          height: 140px;
          border:1px solid #e9e9e9;
          border-radius: 50%;
          margin-bottom: 2%;
          img{
            width: 100%;
            height: 100%;    
            border-radius: 50%;
          }
        }
        // 字
        .comlogo-character{
          margin-left: 3%;
          >div{
            line-height: 50px;
            display: flex;
            color: #676767;
            font-size: 18px;
          }
          .comlogo-name{
            font-size: 35px;
            color: #000;
            font-weight: bold;
            line-height: 70px;
          }
        }
      }
      // 身体部位 公司介绍
      .com-introduction{
        width: 100%;
        margin-top: 1%;
        margin-bottom: 5%;
        display: flex;
        // 左边
        .comint-left{
          width: 30%;
          // 上
          .comintleft-top{
            border: 1px solid #e9e9e9;
            >div{
              width: 96%;
              margin: 0 auto;
            }
            .comlefttop-introduce{
              font-size: 23px;
              line-height: 53px;
              color: #000;
            }
            .comlefttop-definite{
              font-size: 16px;
              line-height: 30px;
              margin-bottom: 5%;
              text-indent: 2em;
              color: #676767;
            }
          }
          // 下
          .comintleft-down{
            margin: 4% 0 10% 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            >div{
              width: 40%;
              margin-top: 6%;
              >div{
                width: 45%;
                margin: 0 auto;
                margin-top: 4%;
                text-align: center;
                img{
                  display: block;
                  margin: 0 auto;
                }
              }
            }
          }
        }
        // 右边
        .comint-right{
          width:69%;
          margin-left: 1%;
          // 头
          .comintright-top{
            width: 100%;
            // 上
            .comright-up{
              width: 100%;
              display: flex;
              line-height: 42px;
              font-size: 20px;
              background-color: #aaa;
              border-bottom: 2px solid #aaa;
              >div{
                width: 12%;
                text-align: center;
                cursor: pointer;
              }
            }
            // 下
            .comright-under{
              width: 100%;
              border-top: none;
              overflow: hidden;
              border: 1px solid #e9e9e9; 
              // 服务产品
              .comright-serveproduct{
                width: 100%;
                >div{
                  width: 100%;
                  display: flex;
                  flex-wrap: wrap;
                  border: 1px solid #e9e9e9; 
                  // justify-content: space-around;
                  // 外层盒子
                  >div{
                    width: 30%;
                    border: 1px solid #e9e9e9;
                    margin-top: 3%;
                    margin-bottom: 2%;
                    margin-left: 2%;
                    // 内层盒子
                    >div{
                      width: 92%;
                      margin: 0 auto;
                      .comrightser-top{
                        font-size: 17px;
                        line-height: 40px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                      }
                      // 线
                      .comrightser-line{
                        width: 70%;
                        display: flex;
                        .comrightline-dot{
                          width: 6px;
                          height: 6px;
                          background-color: #2693d4;
                          border-radius: 50%;
                        }
                        .comrightline-line{
                          width: 100%;
                          height: 2px;
                          margin-top: 2px;
                          background: linear-gradient(left,#2693d4,#fff);
                        }
                      }
                      // 质量认证
                      .comrightser-quality{
                        font-size: 14px;
                        color: #666;
                        line-height: 25px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                      }
                      // 销量
                      .comrightser-sales{
                        font-size: 14px;
                        color: #666;
                        line-height: 25px;
                      }
                      // 现价
                      .comrightser-present{
                        font-size: 38px;
                        font-weight: bold;
                        line-height: 60px;
                        color: #2693d4;
                      }
                      // 原价
                      .comrightser-original{
                        font-size: 14px;
                        line-height: 25px;
                        color: #676767;
                        margin-bottom: 3%;
                        >a{
                          text-decoration: none;
                          font-size: 14px;
                          line-height: 30px;
                          color: #2693d4;
                          margin-left: 5%;
                        }
                      }
                    }
                  }
                }
                // 尾
                .comintright-down{
                  width: 80%;
                  margin: 0 auto;
                  border: none;
                  justify-content: space-between;
                  >div{
                    width: 8%;
                    line-height: 32px;
                    text-align: center;
                    margin-left: 0;
                    cursor: pointer;
                  }
                }
              }
              // 客服
              .comright-service{
                width: 94%;
                font-size: 23px;
                font-weight: bold;
                line-height: 40px;
                margin: 0 auto;
                margin-top: 4%;
                margin-bottom: 30%;
                >div{
                  display: flex;
                }
              }
              // 资质证书
              .comright-certificate{
                width: 31%;
                margin: 0 auto;
                margin-top: 5%;
                margin-bottom: 5%;
                img{
                  width: 100%;
                  height: 100%;
                  display: block;
                }
                // width: 20%;
                // padding: 9% 0 10% 20%;
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 767px){
    // 公司具体信息
    .wecompany{
      width: 96%;
      margin: 0 auto;
      .wec-logo{
        width: 100%;
        margin-top: 0.64rem;
        img{
          width: 0.77rem;
          height: 0.83rem;
          display: block;
          margin: 0 auto;
          border-radius: 50%;
          border: 1px solid #e9e9e9;
        }
      }
      .wec-name{
        width: 100%;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        line-height: 0.55rem;
      }
      .wec-mes{
        width: 100%;
        font-size: 0.3rem;
        line-height: 0.56rem;
        margin-top: 0.7rem;
        margin-bottom: 0.7rem;
      }
    }
    // 所有服务
    .weallser{
      width: 100%;
      margin-bottom: 7%;
      .wea-allser{
        width: 100%;
        font-size: 0.28rem;
        border-bottom: 2px solid #2693d4;
        .wea-all{
          width: 1.72rem;
          text-align: center;
          line-height: 0.52rem;
          margin-top: 0.2rem;
        }
        span{
          width: 0;
          height: 0;
          display: inline-block;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #2693d4;
          border-bottom: 4px solid transparent;
          transform: rotate(180deg);
          // margin-top: -0.1rem;
          margin-left: 0.8rem;
          position: absolute;
        }
      }
      // 具体信息
      .wea-detail{
        width: 98%;
        margin-top: 0.18rem;
        margin-left: 2%;
        margin-bottom: 1.6rem;
        .wea-box{
          width: 100%;
          border-bottom: 1px solid #cfcfcf;
          display: flex;
          .wea-img{
            // width: 8.3rem;
            // height: 8.3rem;
            border: 2px solid #e3e3e3;
            margin-top: 0.25rem;
            margin-bottom: 0.21rem;
            img{
              width: 1.66rem;
              height: 1.66rem;
              display: block;
            }
          }
          .wea-mes{
            width: 74%;
            height: 1.7rem;
            margin-left: 0.23rem;
            margin-top: 0.25rem;
            display: flex;
            flex-wrap: wrap;
            align-content: space-around; 
            .wea-name{
              font-size: 0.29rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .wea-infor{
              width: 100%;
              font-size: 0.24rem;
              line-height: 0.4rem;
              margin-top: 0.12rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .wea-area{
              width: 94%;
              margin-top: 0.12rem;
              display:flex;
              justify-content: space-between;
              .wea-baidu{
                display: flex;
                align-items: center;
                .wea-icon{
                  width: 0.15rem;
                  height: 0.21rem;
                  img{
                    width: 100%;
                    height: 100%;
                    display: block;
                  }
                }
                .wea-addshi{
                  font-size: 0.14rem;
                  margin-left: 0.1rem;
                }
                .wea-addqu{
                  font-size: 0.14rem;
                  margin-left: 0.2rem;
                }
              }
              .wea-price{
                display: flex;
                .wea-buynum{
                  font-size: 0.24rem;
                  color: #ff1515;
                  font-weight: bold;
                  margin-right: 0.17rem;
                }
                .wea-yuan{
                  font-size: 0.16rem;
                  line-height: 0.4rem;
                }
              }
            }
          }
        }
      }
    }
  } 
  // span
  @media all and (max-width: 767px) and (min-width: 680px){
    span{
      margin-top: -0.08rem;
    }
  }
  @media all and (max-width: 680px) and (min-width: 490px){
    span{
      margin-top: -0.1rem;
    }
  }
  @media all and (max-width: 490px) and (min-width: 380px){
    span{
      margin-top: -0.14rem;
    }
  }
  @media all and (max-width: 380px){
    span{
      margin-top: -0.18rem;
    }
  } 
</style>
