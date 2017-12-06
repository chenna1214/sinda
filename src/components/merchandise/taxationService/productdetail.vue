<template>
  <!-- 商品详情页 -->
  <div class="prodetail">
    <!-- 商品详情页：首页/财税服务 -->
    <div class="pro-top">
      <p>首页 / 财税服务</p>
    </div>
    <!-- 商品详情 -->
    <div class="pro-parciaular">
      <!-- 左边 -->
      <div class="par-img">
        <img src="../pc_images/pc_login.png" alt="">
      </div>
      <!-- 中间 -->
      <div class="par-infor">
        <div class="parinf-acting">代理记账（半年）</div>
        <div class="parinf-serve">6个月小规模企业代理记账服务</div>
        <div class="parinf-price">
          <div>市场价： <del>￥2000.00</del></div>
          <div class="parpri-price">价  格： <p>￥1200.00元</p></div>
        </div>
        <!-- 类型 -->
        <div class="parinf-mold">
          <div>类型：</div>
          <div class="parinf-chose">
            <div style="color: #2693d4;border-color: #2693d4;">代理记账（半年）</div>
            <div>代理记账+取票+取银行回单（半年）</div>
            <div>小规模记账（一年）</div>
          </div>
        </div>
        <!-- 地址 -->
        <div class="parinf-address">
          <div>地区：</div>
          <div class="parinf-detailed">北京-北京市-朝阳区</div>
        </div>
        <!-- 购买数量 -->
        <div class="parinf-num">
          购买数量：<input type="number" @change="addsubtract">
        </div>
        <!-- 立即购买，加入购物车 -->
        <div class="parinf-btn">
          <button style="color: #fff;border-color: #2693d4;background-color: #2693d4;">立即购买</button>
          <button>加入购物车</button>
        </div>
      </div>
      <!-- 右边 -->
      <div class="par-contact">
        <h1>顶级服务商</h1>
        <p>北京信达服务中心</p>
        <div>
          联系： <button class="parcon-btn" @click="refer">马上咨询</button>
        </div>
        <div class="parcon-a"><a href="#/merchandise/pc_shophp">查看服务商</a></div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="pro-adver">
      <img src="../pc_images/pc_detail_adver.png" alt="">
    </div>
    <!-- 服务内容，商品评价 -->
    <div class="pro-evaluate">
      <!-- 头 -->
      <div class="eva-top">
        <div class="evatop-one" v-on:click="fuwu">服务内容<!-- <span></span> --></div>
        <div class="evatop-two" v-on:click="shangpin">商品评价</div>
      </div>
      <!-- 身体 -->
      <div class="eva-body">
        <!-- 服务内容 -->
        <div class="eva-serve">
          <ul>
            <li>服务内容：</li>
            <li>1.整理原始票据</li>
            <li>2.记账</li>
            <li>3.装订凭证</li>
            <li>4.出报表</li>
            <li>5.月报、季度企业所得税、年度汇算清缴</li>
            <li>6.打印总帐、明晰账本</li>
          </ul>
        </div>
        <!-- 商品评价 -->
        <div class="eva-app" style="display: none;">
          <!-- 上 -->
          <div class="app-percent">
            <div class="per-left">
              <div class="per-good">
                <div>0%</div>
                <p>好评</p>
              </div>
              <div class="per-three">
                <div><p>好评（0%）</p><div></div></div>
                <div><p>中评（0%）</p><div></div></div>
                <div><p>差评（0%）</p><div></div></div>
              </div>
            </div>
            <div class="per-right">
              <div>客户印象</div>
              <div>暂无已添加的印象标签</div>
            </div>            
          </div>
          <!-- 中 -->
          <div class="app-fourapp">
            <div style="background-color: #2693d4;color: #fff;">全部评价（0）</div>
            <div>好评（0）</div>
            <div>中评（0）</div>
            <div>差评（0）</div>
          </div>
          <!-- 下 -->
          <div class="app-under">
            <div class="und-top">
              <div>评价</div>
              <div>满意度</div>
              <div>用户</div>
            </div>
            <div class="und-down">
              <!-- 评价 -->
              <div class="dow-estimate">
                <div class="dowest-pay">
                  价格包含养老、失业、医疗、工伤、生育、企业、个人缴纳费用1360元/月。
                  服务费为50元/月。（北京市-朝阳区）  2017-04-02
                </div>
                <div class="dowest-app">
                  服务很快
                </div>
              </div>
              <!-- 满意度 -->
              <div class="dow-satisfaction">
                <div class="dowsat-star"></div>
                <div class="dowsat-ye">
                  <div class="satye-prev">上一页</div>
                  <div class="satye-one">1</div>
                  <div class="satye-next">下一页</div>
                </div>
              </div>
              <!-- 用户 -->
              <div class="dow-user"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 点击马上咨询出现 -->
    <div class="pro-consult">
      <!-- 头 -->
      <div class="procon-top">
        <div class="contop-free">免费电话咨询</div>
        <div class="contop-x" @click="close">×</div>
      </div>
      <!-- 身体 -->
      <div class="procon-body">
        <!-- 点之前 -->
        <div class="conbod-one">
          <div class="bodone-line"></div>
          <div class="bodone-pot">
            <div style="color: #57d8c1;border-color: #57d8c1;">1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div class="bodone-cha">
            <div>输入手机号码</div>
            <div>您接听来电</div>
            <div>被叫方接听</div>
            <div>咨询结束</div>
          </div>
          <!-- 输入框 -->
          <div class="bodone-input">
            <!-- 手机号码 -->
            <div class="bodinp-tel">
              <input type="text" placeholder="请输入手机号码">
            </div>
            <!-- 图形验证码 -->
            <div class="bodinp-piccode">
              <div class="bodinp-graphcode">
                <input type="text" placeholder="请输入图形验证码">
              </div>
              <div class="bodinp-image">
                <img src="../pc_images/u8382.png" alt="">
              </div>
            </div>
            <!-- 验证码 -->
            <div class="bodinp-code">
              <div class="bodinp-chacode">
                <input type="text" placeholder="请输入验证码">
              </div>
              <div class="bodinp-getcode">
                <button>获取验证码</button>
              </div>
            </div>
            <!-- 开始免费咨询 -->
            <div class="bodinp-free">
              <button @click="transfer">开始免费咨询</button>
            </div>
            <!-- 免费 -->
            <div class="bodinp-down">
              本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！
            </div>
          </div>
        </div>
        <!-- 点之后 -->
        <div class="conbod-two">
          <div style="color: #aaa">本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！</div>
          <div style="color: #57d8c1;text-align: center;">正在为您接通电话</div>
          <div style="color: #57d8c1;text-align: center;">请您注意接听来电</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productdetail",
    // created() {
    //   this.ajax
    //     .post("http://115.182.107.203:8088/xinda/xinda-api/product/package/grid")
    //     .then(function(data) {
    //       var prodata = data.data.data;
    //       console.log(prodata);
    //     });
    // },
    data() {
      return {

      };
    },
    methods: {
      // 用的是dom操作，麻烦
      fuwu: function() {
        document.querySelector('.eva-serve').style.display = 'block';
        document.querySelector('.evatop-one').style.color = '#fff';
        document.querySelector('.evatop-one').style.backgroundColor = '#2693d4';
        document.querySelector('.eva-app').style.display = 'none';
        document.querySelector('.evatop-two').style.color = '#636363';
        document.querySelector('.evatop-two').style.backgroundColor = '#f7f7f7';
      },
      shangpin: function() {
        document.querySelector('.eva-app').style.display = 'block';
        document.querySelector('.evatop-two').style.color = '#fff';
        document.querySelector('.evatop-two').style.backgroundColor = '#2693d4';
        document.querySelector('.eva-serve').style.display = 'none';
        document.querySelector('.evatop-one').style.color = '#636363';
        document.querySelector('.evatop-one').style.backgroundColor = '#f7f7f7';
      },
      close: function () {
        document.querySelector('.pro-consult').style.display = 'none';
      },
      refer: function () {
        document.querySelector('.pro-consult').style.display = 'block';
        document.querySelector('.conbod-one').style.display = 'block';
        document.querySelector('.conbod-two').style.display = 'none';
      },
      transfer: function () {
        document.querySelector('.conbod-one').style.display = 'none';
        document.querySelector('.conbod-two').style.display = 'block';
      },
      addsubtract: function () {
        var parinfNum = document.querySelector('.parinf-num input').value;
        if(parinfNum <= 0){//变为0太慢了
          console.log(parinfNum=0)
          document.querySelector('.parinf-num input').value = 0;
        }
      }
    }
  };
</script>

<style scoped lang='less'>
button{
  cursor: pointer;
}
//  商品详情页：首页/财税服务的样式
.prodetail {
  width: 78%;
  margin: 0 auto;
}
.pro-top {
  font-size: 14px;
  color: #696969;
  line-height: 27px;
}
// 商品详情的样式
.pro-parciaular {
  width: 100%;
  height: 20%;
  margin-top: 2%;
  display: flex;
  .par-img {
    width: 30%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 中间
  .par-infor {
    width: 44%;
    margin-left: 2%;
    .parinf-acting{
      font-size: 22px;
      font-weight: bold;
    }
    .parinf-serve{
      font-size: 14px;
      line-height: 30px;
      color: #555;
    }
    .parinf-price{
      width: 100%;
      height: 18%;
      margin-top: 2%;
      background-color: #eee;
      >div{
        width: 96%;
        height: 50%;   
        font-size: 18px;
        color: #aaa; 
        margin: 0 auto;      
      }
      .parpri-price{
        display: flex;
        >p{
          color: #f00;
          font-weight: bold;
        }
      }
    }
    // 类型
    .parinf-mold{
      width: 96%;
      height: 34%;
      font-size: 14px;
      margin: 0 auto;
      margin-top: 1.5%;
      display: flex;
      .parinf-chose{
        margin-left: 7%;
        >div{
          line-height: 35px;
          border: 1px solid #ccc;
          text-align: center;
          margin-bottom: 2%;
          &:hover{
            color: #2693d4;
            border-color: #2693d4;
          }
        }
      }
    }
    // 地址
    .parinf-address{
      width: 96%;
      margin: 0 auto;
      font-size: 14px;
      display: flex;
      >div{
        line-height: 30px;
      }
      .parinf-detailed{
        margin-left: 7%;
      }
    }
    // 购买数量
    .parinf-num{
      width: 96%;
      margin: 0 auto;
      font-size: 14px;
      >input{
        height: 28px;
        margin-left: 2%;
      }
    }
    // 立即购买，加入购物车
    .parinf-btn{
      margin-top: 3%;
      >button{
        width: 25%;
        line-height: 38px;
        margin-left: 15%;
        border: 1px solid #ccc;
        border-radius: 6px;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
  .par-contact {
    width: 20%;
    height: 50%;
    margin-left: 4%;
    border: 1px solid #2693d4;
    h1 {
      text-align: center;
      line-height: 46px;
    }
    p {
      color: #666;
      text-align: center;
      line-height: 35px;
    }
    div {
      width: 73%;
      margin-left: 20%;
      button {
        width: 50%;
        height: 34px;
        color: #75b2df;
        border: 1px solid #2693d4;
        background-color: #fff;
        border-radius: 10px;
        margin-left: 8%;
      }
    }
    .parcon-a{
      width: 40%;
      line-height: 40px;
      background-color: #2693d4;
      border-radius: 13px;
      margin: 6% 0 6% 28%;
      a {
        width: 100%;
        // height: 41px;
        padding: 6%;
        text-decoration: none;
        font-size: 17px;
        color: #fff;
      }
    }
  }
}
// 广告的样式
.pro-adver {
  width: 100%;
  height: 5%;
  margin-top: 4%;
  img {
    width: 100%;
    height: 100%;
  }
}
// 服务内容和商品评价的样式
.pro-evaluate {
  width: 100%;
  height: 68%;
  border: 1px solid #ccc;
  margin-top: 1%;
  .eva-top {
    width: 100%;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ccc;
    display: flex;
    div {
      width: 12%;
      color: #636363;
      text-align: center;
      line-height: 44px;
      cursor: pointer;
    }
    .evatop-one {
      background-color: #2693d4;
      color: #fff;
      // span{
      //   width: 0;
      //   height: 0;
      //   border-left: 6px solid transparent;
      //   border-top: 6px solid #2693d4;
      //   border-right: 6px solid transparent;
      //   border-bottom: 6px solid transparent;
      // }
    }
  }
  // 服务内容
  .eva-serve {
    margin-bottom: 10%;
    ul {
      margin-left: 3%;
      margin-top: 2%;
      li {
        list-style: none;
        color: #686868;
        line-height: 40px;
      }
    }
  }
  // 上
  .app-percent{
    width: 90%;
    height: 20%;
    padding: 2% 0 2% 2%;
    display: flex;
    >div{
      display: flex;
    }
    .per-left{
      width: 60%;
      border-right: 1px solid #bbb;
      .per-good{
        display: flex;
        color: #2693d4;
        align-items: flex-end;
        div{
          font-size: 76px;
          font-weight: bold;
        }
    }

    }
    .per-three{
      width: 55%;
      >div{
        width: 83%;
        height: 20px;
        margin: 2% 0 4% 0;
        padding: 0 0 0 10%;
        >p{
          width: 33%;
        }
        >div{
          width: 63%;
          height: 20px;
          background-color: #ccc;
          margin-left: 37%;
          margin-top: -7%;
        }
      }
    }
    .per-right{
      width: 22%;
      height: 20%;
      margin-top: 2%;
      margin-left: 3%;
      >div{
        height: 25px;
        &:nth-child(2){
          margin-top: 18%;
          margin-left: -26%;
        }
      }
    }
  }
  // 中
  .app-fourapp{
    width: 100%;
    height: 20%;
    background-color: #f7f7f7;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    >div{
      width: 15%;
      line-height: 50px;
      text-align: center;
      &:hover{
        background-color: #2693d4;
        color: #fff;
      }
    }
  }
  // 下
  .app-under{
    width: 96%;
    margin: 0 auto;
    margin-top: 1%;
    margin-bottom: 5%;
    border-left: 1px solid #ccc;
    .und-top{
      width: 98%;
      margin: 0 auto;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-around;
      >div{
        height: 30px;
      }
    }
    .und-down{
      width: 98%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      >div{
        width: 30%;
      }
      .dow-estimate{
        margin-top: 2%;
        .dowest-pay{
          line-height: 30px;
          font-size: 13px;
          color: #ccc;
        }
        .dowest-app{
          line-height: 40px;
        }
      }
      .dow-satisfaction{
        .dowsat-star{
          width: 19%;
          height: 11px;
          background: url(../pc_images/code.png) -559px -1130px;
          margin-left: 18%;
          margin-top: 14%;
        }
        .dowsat-ye{
          display: flex;
          width: 50%;
          margin-top: 24%;
          .satye-prev{
            width: 42%;
            height: 31px;
            text-align: center;
            line-height: 31px;
            border: 1px solid #ccc;
          }
          .satye-one{
            width: 21%;
            border: 1px solid #2693d4;
            color: #2693d4;
            text-align: center;
            line-height: 30px;
            margin: 0 4% 0 4%;
          }
          .satye-next{
            width: 42%;
            height: 31px;
            text-align: center;
            line-height: 31px;
            border: 1px solid #ccc;
          }
        }
      }
      .dow-user{
        width: 16%;
        height: 98px;
        background: url(../pc_images/login_logo.png) no-repeat 0 -113px ;
        margin-top: 4%;
      }
    }
  }
}
// 点击马上咨询
.pro-consult{
  width: 48%;
  height: 94%;
  border-bottom: 1px solid #aaa;
  box-shadow: 2px 1px 2px 1px #aaa;
  background-color: #fff;
  position: absolute;
  margin-top: -63%;
  margin-left: 25%;
  display: none;
  // 头
  .procon-top{
    width: 100%;
    height: 10%;
    display: flex;
    background-color: #eee;
    justify-content: space-between;
    .contop-free{
      width: 20%;
      height: 100%;
      line-height: 40px;
      text-align: center;
    }
    .contop-x{
      width: 5%;
      font-size: 24px;
      text-align: center;
      line-height: 40px;
      background-color: #aaa;
      cursor: pointer;
    }
  }
  // 身体
  .procon-body{
    width: 100%;
    height: 80%;
    // 一
    .conbod-one{
      width: 100%;
      .bodone-line{
        width: 80%;
        height: 5px;
        margin: 0 auto;
        margin-top: 5%;
        background-color: #ddd;
      }
      .bodone-pot{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: -1.5%;
        >div{
          width: 3%;
          font-size: 14px;
          color: #777;
          text-align: center;
          border: 1px solid #777;
          border-radius: 50%;
          background-color: #fff;
        }
      }
      .bodone-cha{
        width: 87%;
        display: flex;
        justify-content: space-between;
        margin-left: 5%;
        margin-top: 1%;
      }
      .bodone-input{
        width:70%;
        margin: 0 auto;
        margin-top: 3%;
        margin-bottom: 5%;
        >div{
          width: 50%;
          margin: 0 auto;
          margin-top: 3%;
        }
        .bodinp-tel{
          input{
            width: 100%;
            height: 34px;
            border: 1px solid #aaa;
            border-radius: 4px;
          }
        }
        .bodinp-piccode{
          display: flex;
          justify-content: space-between;
          .bodinp-graphcode{
            width: 60%;
            height: 34px;
            input{
              width: 100%;
              height: 100%;
              border: 1px solid #aaa;
              border-radius: 4px;
            }
          }
          .bodinp-image{
            width: 34%;
            height: 34px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 4px;
            }
          }
        }
        .bodinp-code{
          display: flex;
          justify-content: space-between;
          .bodinp-chacode{
            width: 60%;
            height: 34px;
            input{
              width: 100%;
              height: 100%;
              border: 1px solid #aaa;
              border-radius: 4px;
            }
          }
          .bodinp-getcode{
            width: 34%;
            height: 34px;
            button{
              width: 100%;
              height: 100%;
              border: none;
              border-radius: 4px;
            }
          }
        }
        .bodinp-free{
          button{
            width: 100%;
            height: 34px;
            color: #fff;
            font-size: 16px;
            border: none;
            background-color: #57d8c1;
            border-radius: 4px;
          }
        }
        .bodinp-down{
          width: 80%;
          font-size: 13px;
          color: #888;
          text-align: center;
        }
      }
    }
    // 二
    .conbod-two{
      width: 80%;
      margin: 0 auto;
      display: none;
      >div{
        font-size: 30px;
        margin-top: 7%;
      }
    }
  }
}
</style>
