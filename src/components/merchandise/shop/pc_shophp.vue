<template>
  <div>
   <!-- 店铺 -->
    <!-- <div class="company" v-for="product in products" :key="product.id">
      {{product.providerName}}
      <div class="com_logo"></div>
      <div class="com-character"></div>
    </div> -->
    <!-- <div class="introduction"></div> -->
    <!-- <div class="serving"></div> -->
    <!-- <router-view/> -->
    <div class="company">
       <!-- 企业logo -->
      <div class="com-logo">
        <!-- 图 -->
        <div class="comlogo-image">
          <img src="../pc_images/pc_logo.png" alt="">
        </div>
        <!-- 字 -->
        <div class="comlogo-character">
          <div class="comlogo-name">信达北京服务中心</div>
          <div>服务地址：<div class="comlogo-address">北京市-朝阳区</div></div>
        </div>
      </div>
      <!-- 身体部位 公司介绍-->
      <div class="com-introduction">
        <!-- 左边 -->
        <div class="comint-left">
          <!-- 上 -->
          <div class="comintleft-top">
            <div class="comlefttop-introduce">公司介绍</div>
            <div class="comlefttop-definite">为给客户提供更加标准化的体验，信达北京服务中心采用自营模式，
              打造一站式企业服务平台，帮助企业快速解决发展遇到的问题，提供工商注册，
              财税服务，知识产权，人事外包，证件办理等全方位企业解决方案，为你的企业发展保驾护航。
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
                  <div>
                    <!-- 内层盒子 -->
                    <div>
                      <div class="comrightser-top">企业公积金销户</div>
                      <!-- 线 -->
                      <div class="comrightser-line">
                        <div class="comrightline-dot"></div>
                        <div class="comrightline-line"></div>
                      </div>
                      <!-- 质量认证 -->
                      <div class="comrightser-quality">质量认证</div>
                      <!-- 销量 -->
                      <div class="comrightser-sales">销量</div>
                      <!-- 现价 -->
                      <div class="comrightser-present">￥ 1200.00</div>
                      <!-- 原价 -->
                      <div class="comrightser-original">原价：
                        <del>￥ 1800.00</del>
                        <a href="#/merchandise/productdetail">查看详情>></a>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
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
                <div>工作时间：周一到周五</div>
                <div>
                  <div>QQ咨询：</div>
                  <div>
                    <img src="../pc_images/u4644.png" alt="">
                  </div>
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
  </div>
</template>

<script>
export default {
  name: 'pc_shophp',
  // created () {
  //   var that = this;
  //   this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/provider/grid').then(function(data){
  //     var rData = data.data.data;
  //     that.products = rData;
  //     console.log(rData);
  //   });
  // },
  data () {
    return {
      // products: [],
      rightserve: true,
      rightservice: false,
      rightcertificate: false,
      astyle: 'changes',
      bstyle: 'changes',
      cstyle: 'changes',
    }
  },
  methods: {
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
            border: 1px solid #e9e9e9;
            border-top: none;
            overflow: hidden;
            // 服务产品
            .comright-serveproduct{
              width: 100%;
              >div{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                // 外层盒子
                >div{
                  width: 30%;
                  border: 1px solid #e9e9e9;
                  margin-top: 3%;
                  margin-bottom: 2%;
                  // 内层盒子
                  >div{
                    width: 92%;
                    margin: 0 auto;
                    .comrightser-top{
                      font-size: 17px;
                    line-height: 40px;
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
                        font-size: 18px;
                        line-height: 30px;
                        color: #2693d4;
                        margin-left: 13%;
                      }
                    }
                  }
                }
              }
              // 尾
              .comintright-down{
                width: 80%;
                margin: 0 auto;
                >div{
                  width: 8%;
                  line-height: 32px;
                  text-align: center;
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
</style>
