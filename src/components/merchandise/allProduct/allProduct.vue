<template>
  <div>
    <div class="pcAllProduct">
      <!-- 全部产品--轮播左边的导航 -->
        <el-row v-for="(rDataObj,idx) in rDataObjs" :key="rDataObj.id">
          <el-col :sm="4" :md="4" :lg="4">
              <div class="pcAllProductHeaderInner" @mouseover="pcNavOver(idx)" @mouseleave="pcNavLeave(idx)"  :class="{pcNavEventAft:idx==index}">
                <img :src="pcNavImg[idx-1]" class="pcAllProductHeader-taxImg">
                  <div class="pcAllProductHeader-taxText">
                    <span>{{rDataObj.name}}</span><br>
                    <span v-for="secondTil in rDataObj.itemList" :key="secondTil.id">{{secondTil.name}}</span>
                  </div>
              </div>
          </el-col>
          <el-col :sm="{span:20,offset:4}" :md="{span:20,offset:4}" :lg="{span:20,offset:4}">
            <div class="pcAllProTil" v-show="idx==index"  @mouseover="pcNavOver(idx)" @mouseleave="pcNavLeave(idx)">  
               <div class="pcNavSec" v-for="secondTil in rDataObj.itemList" :key="secondTil.id">{{secondTil.name}}>
                <div class="pcNavTidBox"><span class="pcNavSpan" v-for="thirdTil in secondTil.itemList" :key="thirdTil.id">|{{thirdTil.name}}</span></div>
               </div>
            </div>
          </el-col>
      </el-row>
<!-- 全部产品--轮播图片 -->
<el-col :sm="20" :md="20" :lg="{span:20,offset:4}" class="pcAllProCarousel">
    <el-carousel trigger="click" height="400px">
     <el-carousel-item v-for="carouselImg in carouselList" :key="carouselImg.id">
       <img v-bind:src="carouselImg.id" class="pcCarouselImg">
      </el-carousel-item>
    </el-carousel>
  </el-col>
<!-- 明星产品推荐标题 -->
  <el-row>
    <el-col>
      <p class="pcAllProColumn">明星产品推荐</p>
      <div class="pcAllProLine"></div>
    </el-col>
  </el-row>
<!-- 明星产品推荐文章列表 -->
 <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox">
    <el-col :sm="6" :md="6" :lg="6" v-for="star in starList" :key="star.id">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn starBox">
          <img :src="'src/components/images/allProduct/'+star.img" class="starImg">
          <p class="pcCreateServieceNameP">{{star.til}}</p>
          <p class="starInfo" >{{star.info}}</p>
          <span class="pcCreatemarketPrice">{{star.money}}</span>
          <span class="pcCreateunit" >{{star.unit}}</span>
        </div>
      </div>
    </el-col>
  </el-row>
<!-- 初创企业必备标题 -->
  <el-row>
    <el-col>
      <p class="pcAllProColumn">初创企业必备</p>
      <div class="pcAllProLine"></div>
    </el-col>
  </el-row>
<!-- 初创企业必备文章列表 -->
 <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox">
    <el-col :sm="6" :md="6" :lg="6"  v-for="product in products" :key="product.serviceName">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn">
          <img class="pcCreateImg" :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg">
          <p class="pcCreateServieceNameP">{{product.serviceName}}</p>
          <p class="pcoCreateServiceInfoP" >{{product.serviceInfo}}</p>
            <span class="pcCreatemarketPrice">￥{{product.marketPrice}}</span>
            <span class="pcCreateunit" >{{product.unit}}</span>
            <button class="pcCreateDetail">查看详情</button>
        </div>
      </div>
    </el-col>
  </el-row>
  <!-- 知识产权标题 -->
  <el-row>
    <el-col>
      <p class="pcAllProColumn">知识产权</p>
      <div class="pcAllProLine"></div>
    </el-col>
  </el-row>
  <!-- 知识产权图片列表 -->
  <el-row>
    <el-col :sm="8" :md="8" :lg="8">
      <img src="../../images/allProduct/k1.png" class="pcKnoImg">
    </el-col>
    <el-col :sm="16" :md="16" :lg="16">
      <div class="pcKnoLeftBox">
        <img src="../../images/allProduct/k2.png" alt="">
        <img src="../../images/allProduct/k3.png" alt="">
        <img src="../../images/allProduct/k4.png" alt="">
      </div>
    </el-col>
  </el-row>
  <!-- 通栏图片 -->
  <img src="../../images/allProduct/u100.png" alt="" class="pcAd">

<!-- 推荐服务商标题 -->
  <el-row>
    <el-col class="pcRecTilBox">
       <span class="pcAllProColumn" :class="{pcRecCliAft:pcSerSty==index}" v-for='(pcSerCli,index) in pcSerCliList' :key='pcSerCli' @click='pcSerClick(index)'>{{pcSerCli}}</span>
      <div class="pcAllProLine"></div>
    </el-col>
  </el-row>
<!-- 推荐服务商文章列表 -->
 <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox"  v-show='pcSer==index'>
    <el-col :sm="5" :md="5" :lg="5" v-for="pcRecommend in pcRecommends" :key="pcRecommend.id">
      <div class="pcAllProStarOut">
        <!-- <div class="pcAllProStarIn"> -->
        <div class="pcSerBox">
          <div class="pcSerIcon pcSerLoc">
            <img class="pcCreateImg" :src="'http://115.182.107.203:8088/xinda/pic'+pcRecommend.providerImg">
          </div>
          
          <p class="pcCreateServieceNameP pcSerLoc">{{pcRecommend.providerName}}</p>
          <p class="pcoCreateServiceInfoP pcSerLoc">服务指数：8.9分</p>
          <p class="pcoCreateServiceInfoP pcSerLoc">提供的服务</p>
          <div class="pcRecoBox pcSerLoc"><button v-for="(serNam) in pcRecommend.serviceName" :key="serNam" class="pcRecoBtn pcShowAll">{{serNam}}</button></div>
        </div>
      </div>
    </el-col>
  </el-row>

<!-- 推荐服务文章列表 -->
 <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox"  v-show='pcSer!==index'>
    <el-col :sm="6" :md="6" :lg="6"  v-for="product in products" :key="product.serviceName">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn">
          <img class="pcCreateImg pcSerLoc" :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg">
          <p class="pcCreateServieceNameP">{{product.serviceName}}</p>
          <p class="pcoCreateServiceInfoP" >{{product.serviceInfo}}</p>
            <span class="pcCreatemarketPrice">￥{{product.marketPrice}}</span>
            <span class="pcCreateunit" >{{product.unit}}</span>
            <button class="pcCreateDetail">查看详情</button>
        </div>
      </div>
    </el-col>
  </el-row>


  <!-- 合作伙伴必备标题 -->
  <el-row>
    <el-col>
      <p class="pcAllProColumn">合作伙伴</p>
      <div class="pcAllProLine"></div>
    </el-col>
  </el-row>
  <img src="../../images/allProduct/u246.png" class="pcFri">


    </div>
  </div>
</template>

<script>
export default {
  name: "allProduct",
  created() {
    var that = this; //this是指main.js中的new Vue
    this.ajax //获取全部产品的轮播左边的导航栏
      .post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list")
      .then(function(data) {
        var rData = data.data.data;
        var rDataObj = {};
        for (var Key in rData) {
          rDataObj[rData[Key].code] = rData[Key];
        }
        that.rDataObjs = rDataObj;
      });
    this.ajax //初创企业必备
      .post("http://115.182.107.203:8088/xinda/xinda-api/recommend/list")
      .then(function(data) {
        var pcCreateData = data.data.data;
        that.products = pcCreateData.product;
      });

    this.ajax //推荐服务商
      .post(
        "http://115.182.107.203:8088/xinda/xinda-api/product/package/search-grid"
      )
      .then(function(data) {
        var recommendR = data.data.data;
        var preServer = [];
        var myArray = [];
        for (var i in recommendR) {
          //循环recommendR的每个对象
          // var newReco1Obj = newReco1[i].serviceName;
          preServer.push(recommendR[i].serviceName); //将recommendR中的每个对象放入preServer数组中
          var j = Number(i) + 1; //为了整除好用，因此这样
          if (j % 4 == 0) {
            //如果j被4整除进行如下操作
            recommendR[i].serviceName = preServer; //每隔4个对象的首位对象的serviceName被重新赋值成preServer，此时preServer中已经有4个serviceName
            preServer = []; //清空preServer
            myArray.push(recommendR[i]); //将每隔4个对象的首位对象加入数组myArray中
          }
        }
        that.pcRecommends = myArray;
      });
  },
  mounted() {},
  data() {
    return {
      index: -1, //轮播图左边导航mouseover\mouseleave事件的变量
      pcSer: -1, //推荐服务商的标题click的变量
      pcSerCliList: ["推荐服务商", "推荐服务"],
      pcSerSty: 0,
      rDataObjs: {},
      products: [], //初创企业必备
      pcRecommends: [], //推荐服务商
      pcCompanyRegisterList: [], //公司工商三级标题
      pcAllProTilName: [], //轮播图左边的所有二级标题
      carouselList: [
        //轮播图片
        { id: "src/components/images/allProduct/1.png" },
        { id: "src/components/images/allProduct/2.jpg" },
        { id: "src/components/images/allProduct/3.png" }
      ],
      pcNavImg: [
        "src/components/images/allProduct/icon1.png",
        "src/components/images/allProduct/icon2.png",
        "src/components/images/allProduct/icon3.png",
        "src/components/images/allProduct/icon4.png"
      ],
      starList: [//明星产品推荐文章列表
        {
          id:'1',
          img: "star1.png",
          til: "标准五险一金",
          info: "定制化社保代理，定制化代缴服务",
          money: '20',
          unit: '元/人/月'
        },
        {
          id:'2',
          img: "star2.png",
          til: "内资有限公司注册",
          info: "一键完成注册，快速开办公司",
          money: '600',
          unit: '元/次'
        },
        {
          id:'3',
          img: "star3.png",
          til: "小规模代理记账/年",
          info: "专业会计报税，高效、便捷、贴心",
          money: '3000',
          unit: '元/年'
        },
        {
          id:'4',
          img: "star3.png",
          til: "国内普通商标注册",
          info: "次日提交商标申请，最快保护品牌价值",
          money: '1000',
          unit: '元/次'
        }
      ]
    };
  },
  methods: {
    pcNavOver: function(index) {
      this.index = index;
    },
    pcNavLeave: function() {
      this.index = -1;
    },
    pcSerClick: function(index) {
      this.pcSer = index;
      this.pcSerSty = index;
      if (index == 0) {
        this.pcSer = -1;
      }
    }
  }
};
</script>

<style scoped lang='less'>
.pcCarouselImg {
  padding-bottom: 40%;
  width: 100%;
}
.pcAllProduct {
  max-width: 1200px;
  margin: 0 auto;
}
.pcAllProductHeaderInner {
  padding-top: 10px;
  padding-bottom: 11px;
  cursor: pointer;
  background: #212121;
  display: flex;
  height: 79px;
}
.pcNavEventAft {
  background: #2693d4;
}
.pcNavCompanyH {
  height: 47px;
}
.pcAllProductHeader-taxText {
  padding-left: 5px;
  span {
    color: white;
    font-size: 12px;
    width: 51px;
    display: inline-block;
  }
  span:nth-child(1) {
    font-size: 15px;
    width: 60px;
  }
}
//全部产品--轮播左边的导航
.pcAllProductHeader-taxImg {
  width: 26px;
  height: 26px;
  margin-left: 10%;
  margin-top: 5px;
}
.pcAllProTil {
  margin-top: -100px;
  padding-top: 10px;
  padding-bottom: 6px;
  min-height: 84px;
  height: auto;
  background-color: rgba(152, 171, 196, 0.5);
  z-index: 10;
  position: absolute;
  width: 83.33333%;
  margin-left: -1px;
}
.pcNavTidBox {
  margin-top: -17px;
  margin-left: 70px;
}
.pcNavSpan {
  color: white;
  font-size: 13px;
  margin-bottom: 10px;
  display: inline-block;
}
.pcNavSec {
  color: white;
  font-size: 13px;
  margin-left: 10px;
}
.pcAllProCarousel {
  margin-top: -400px;
}
.pcAllProLine {
  height: 2px;
  background: #2693d4;
}
// 全部产品栏目及栏目文章列表公共样式
.pcAllProStarBox {
  margin-top: 48px;
}
.pcRecCliPre {
  color: black;
}
.pcRecCliAft {
  color: #2693d4;
}
// .pcRecCliSty{
//   color: #2693d4;
// }
.pcAllProColumn {
  font-size: 15px;
  margin-top: 53px;
  margin-right: 10px;
  display: inline-block;
}
.pcAllProStarOut {
  height: 382px;
  border: 1px solid #e8e8e8;
  padding: 8px;
}
.pcAllProStarIn {
  height: 382px;
  background: #fafafa;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pcSerBox{
  height: 382px;
  background: #fafafa;
  text-align: center;
}
.pcSerIcon{
   display: flex;
  justify-content: center;
}
//初创企业必备
.pcCreateServieceNameP {
  //服务名
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
.pcoCreateServiceInfoP {
  //服务介绍
  // margin:0 auto;
  font-size: 11px;
  padding-left: 16px;
  padding-right: 16px;
  // margin-top:16px;
}
.pcCreatemarketPrice {
  //服务市场价格
  font-size: 23px;
  color: #2693d4;
  text-align: center;
}
.pcCreateunit {
  font-size: 14px;
  margin-top: 8px;
  margin-left: 20px;
}
.pcCreateDetail {
  max-width: 157px;
  max-height: 44px;
  width: 56%;
  height: 16%;
  border: 2px solid #2693d4;
  border-radius: 6px;
  background: white;
  color: #2693d4;
}
.pcCreateImg {
  width: 131px;
  height: 53px;
  margin-top: 30px;
}
//推荐服务
.pcRecoBtn {
  font-size: 13px;
  width: 29.6%;
  height: 29px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  margin-left: 5%;
  margin-bottom: 5%;
  background: #ffecb7;
  border: 1px solid #ffecb7;
 
}
.pcSerLoc{
  margin-bottom: 30px;
}
.pcShowAll:hover {
  text-overflow: inherit;
  overflow: visible;
  white-space: normal;
  width: 80px;
  height: 60px;
  background: #fcf3da;
  font-size: 6px;
}
.pcRecoBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 16%;
  height: 24%;
  position: absolute;
}
//中间通栏图片
.pcAd {
  width: 100.2%;
  height: 12.75%;
}
//知识产权图片列表
.pcKnoImg {
  width: 81.75%;
  height: 120.5%;
  margin-top: 37px;
  margin-bottom: 22px;
}
.pcKnoLeftBox {
  margin-top: 37px;
  margin-bottom: 22px;
  img {
    width: 51%;
    height: 28.75%;
  }
  img:nth-child(1) {
    margin-left: -44px;
  }
  img:nth-child(2) {
    margin-left: 22px;
  }
  img:nth-child(3) {
    width: 105.5%;
    height: 28.75%;
    margin-top: 22px;
    margin-left: -44px;
  }
}
//合作伙伴必备标题
.pcFri {
  width: 100%;
  height: 12.25%;
  margin-top: 42px;
  margin-bottom: 100px;
}
//明星产品推荐文章列表
.starImg {
  // background: url(../../images/allProduct/star.png) 0 0 no-repeat;
  width: 48.33%;
  height: 32.33%;
}
.starInfo{
  font-size: 14px;
  color: #656565;
}
.starBox{
  p{
    width:90%;
    padding-left: 8%;
    padding-right:8%;
  }
  span{
    text-align: center;
  }
}
</style>
