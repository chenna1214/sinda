<template>
  <div>
    <div class="pcAllProduct">
      <!-- 手机端--选择城市 -->
      <div class="hidden-sm-and-up">
        <div class="telCompanyIconBox">
          <img src="../../images/icon/sindaTextIcon.png">
        </div>
        <div class="telHeaderBox" @click="telMenu()"><!-- 选择城市下拉框 -->
          <span class="telArrow" :class="{telTranDeg:isShow==true}">></span>
          <span class="telChoosedCity">{{pcChoosedCity.name}}</span><!-- 已经选择的城市 -->
        </div>
        <div class="telMenuBox" v-show="isShow"><p v-for="eachCity in pcCityNameSuc.city" :key="eachCity" @click="pcChoosed()" :class="{pcChoosedCity:1==pcChoosedNum}">{{eachCity}}</p></div><!-- 已经开通的城市 -->
        <!-- 全部产品--xs以下--轮播图片 -->
        <el-row class="hidden-sm-and-up">
          <el-col :xs="{span:24}" >
            <el-carousel trigger="click" height="2.8rem">
            <el-carousel-item v-for="carouselImg in carouselList" :key="carouselImg.id">
              <img v-bind:src="carouselImg.id" class="telCarouselImg">
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
        <!-- 手机端--头部导航栏 -->
        <el-row>
          <div class="telNavBox">
            <el-col :xs="6" v-for="(telNav,navIdx) in telNavs" :key="telNav.telNavImg">
              <router-link :to="{ path: telNav.url, query: {code:telNav.code}}" tag="div">       
                <div  class="telNavBoxIn">
                  <div>
                    <img :src="telNav.telNavImg" class="telNavImg">
                  </div>
                  <p class="telNavText">{{telNav.telNavInfo}}</p>
                </div>
              </router-link>
            </el-col>
          </div>
        </el-row>
      </div>
        <!-- 全部产品--xs以上--轮播图片 -->
        <el-col  :sm="{span:24}" :md="{span:24}" :lg="{span:24}" class="hidden-xs-only">
            <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="carouselImg in carouselList" :key="carouselImg.id">
              <img v-bind:src="carouselImg.id" class="pcCarouselImg">
              </el-carousel-item>
            </el-carousel>
          </el-col>

    <!-- 明星产品推荐标题 -->
    <el-row class="hidden-xs-only">
      <el-col>
        <p class="pcAllProColumn">明星产品推荐</p> 
        <div class="pcAllProLine"></div>
      </el-col>
    </el-row>
    <!-- 明星产品推荐文章列表 -->
    <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox hidden-xs-only">
        <el-col :sm="6" :md="6" :lg="6" v-for="star in starList" :key="star.id">
          <div class="pcAllProStarOut">
            <div class="pcAllProStarIn starBox">
              <img :src="require('../../images/allProduct/'+star.img)" class="starImg">
              <p class="pcCreateServieceNameP">{{star.til}}</p>
              <p class="starInfo" >{{star.info}}</p>
              <span class="pcCreatemarketPrice">{{star.money}}</span>
              <span class="pcCreateunit" >{{star.unit}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    <!-- 初创企业必备标题--xs以上 -->
      <el-row class="hidden-xs-only">
        <el-col>
          <p class="pcAllProColumn">初创企业必备</p>
          <div class="pcAllProLine"></div>
        </el-col>
      </el-row>
      <!-- 初创企业必备文章列表--xs以上 -->
      <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox hidden-xs-only">
          <el-col :sm="6" :md="6" :lg="6"  v-for="product in products" :key="product.serviceName">
            <div class="pcAllProStarOut">
              <div class="pcAllProStarIn">
                <img class="pcCreateImg" :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg">
                <p class="pcCreateServieceNameP">{{product.serviceName}}</p>
                <p class="pcoCreateServiceInfoP" >{{product.serviceInfo}}</p>
                <span class="pcCreatemarketPrice">￥{{product.marketPrice}}</span>
                <span class="pcCreateunit" >{{product.unit}}</span>
                <button class="pcCreateDetail" @click="productDetail(product.id)">查看详情</button>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 知识产权标题 -->
        <el-row>
          <el-col>
            <p class="pcAllProColumn hidden-xs-only">知识产权</p>
            <p class="telColumn hidden-sm-and-up">知识产权</p>
            <div class="pcAllProLine"></div>
          </el-col>
        </el-row>
      <!-- pc端：知识产权图片列表 -->
      <div class="hidden-xs-only">
        <el-row>
          <el-col :sm="8" :md="8" :lg="8">
            <img src="../../images/allProduct/k1.png" class="pcKnoImg hidden-xs-only">
          </el-col>
          <el-col :sm="16" :md="16" :lg="16">
            <div class="pcKnoLeftBox">
              <img src="../../images/allProduct/k2.png" alt="">
              <img src="../../images/allProduct/k3.png" alt="">
              <img src="../../images/allProduct/k4.png" alt="">
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 手机端：知识产权图片列表 -->
      <el-row class="hidden-sm-and-up">
      <el-col :xs='{span:24}'>
        <div class="telKnow">
          <img src="../../images/telIndex/knowledge.png">
        </div>
      </el-col>
      </el-row>
      <!-- 初创企业必备标题--xs以上 -->
      <el-row class="hidden-sm-and-up">
        <el-col>
          <p class="pcAllProColumn hidden-xs-only">初创企业必备</p>
          <p class="telColumn hidden-sm-and-up">初创企业必备</p>
          <div class="pcAllProLine"></div>
        </el-col>
      </el-row>
      <!-- 初创企业必备文章列表--xs以下--手机端 -->
      <el-row class="telCreatBox hidden-sm-and-up" v-for="product in products" :key="product.serviceName">
          <el-col :xs="5"><img :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg" class="telCreatImg"></el-col>
          <el-col :xs="{span:17,offset:2}">
            <div>
              <p class="telCreatText" @click="productDetail(product.id)">{{product.serviceName}}</p>
              <p class="telCreatInfo" >{{product.serviceInfo}}</p>
              <span class="telCreatemarketPrice">￥{{product.marketPrice}}</span>
              <span class="telCreateunit" >{{product.unit}}</span>
            </div>
          </el-col>
      </el-row>
        <!-- 手机端--首页底部logo -->
        <div class="hidden-sm-and-up">
          <div class="telCompanyIconBox telFootImg">
            <img src="../../images/icon/sindaTextIcon.png">
          </div>
          <p class="telFooterP">一站式企业交易中心</p>
        </div>

        <!-- 通栏图片 -->
        <img src="../../images/allProduct/u100.png" alt="" class="pcAd hidden-xs-only">

      <!-- 推荐服务商标题 -->
        <el-row>
          <el-col class="pcRecTilBox hidden-xs-only">
            <span class="pcAllProColumn" :class="{pcRecCliAft:pcSerSty==index}" v-for='(pcSerCli,index) in pcSerCliList' :key='pcSerCli' @click='pcSerClick(index)'>{{pcSerCli}}</span>
            <div class="pcAllProLine"></div>
          </el-col>
        </el-row>
      <!-- 推荐服务商文章列表 -->
      <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox hidden-xs-only"  v-show='pcSer==index'>
          <el-col :sm="5" :md="5" :lg="5" v-for="pcRecommend in pcRecommends" :key="pcRecommend.providerName">
            <div class="pcAllProStarOut">
              <!-- <div class="pcAllProStarIn"> -->
              <div class="pcSerBox">
                <div class="pcSerIcon pcSerLoc">
                  <img class="pcCreateImg" :src="'http://115.182.107.203:8088/xinda/pic'+pcRecommend.providerImg">
                </div>
                <p class="pcCreateServieceNameP pcSerLoc">{{pcRecommend.providerName}}</p>
                <p class="pcoCreateServiceInfoP pcSerLoc">服务指数：8.9分</p>
                <p class="pcoCreateServiceInfoP pcSerLoc">提供的服务</p>
                <div class="pcRecoBox pcSerLoc"><button v-for="(serNam,serIdx) in pcRecommend.serviceName" :key="serNam" class="pcRecoBtn pcShowAll" @click="productDetail(pcRecommend.id[serIdx])">{{serNam}}</button></div>
              </div>
            </div>
          </el-col>
        </el-row>
      <!-- 推荐服务文章列表 -->
      <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox hidden-xs-only"  v-show='pcSer!==index'>
          <el-col :sm="6" :md="6" :lg="6"  v-for="product in products" :key="product.serviceName">
            <div class="pcAllProStarOut">
              <div class="pcAllProStarIn">
                <img class="pcCreateImg pcSerLoc" :src="'http://115.182.107.203:8088/xinda/pic'+product.providerImg">
                <p class="pcCreateServieceNameP">{{product.serviceName}}</p>
                <p class="pcoCreateServiceInfoP" >{{product.serviceInfo}}</p>
                  <span class="pcCreatemarketPrice">￥{{product.marketPrice}}</span>
                  <span class="pcCreateunit" >{{product.unit}}</span>
                  <button class="pcCreateDetail" @click="productDetail(product.id)">查看详情</button>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 合作伙伴必备标题 -->
        <el-row class="hidden-xs-only">
          <el-col>
            <p class="pcAllProColumn">合作伙伴</p>
            <div class="pcAllProLine"></div>
          </el-col>
        </el-row>
        <img src="../../images/allProduct/u246.png" class="pcFri hidden-xs-only">
    </div>
  </div>
</template>

<script>
import getCitys from "../../pcPublic/pcHeader/public"; //向服务器请求城市数据
import { handleCon } from "../../pcPublic/pcHeader/public"; //判断选择城市的状态出现不同的提示
const gourl = "/merchandise/taxationService"; //点击手机端端头部导航图片、文字，跳转到指定路径
import { Row, Col,Carousel,CarouselItem,Message } from "element-ui";
export default {
  name: "allProduct",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Carousel.name]:Carousel,
    [CarouselItem.name]:CarouselItem
  },
  created() {
    getCitys(this.pcChoosedCity, this.pcCityNameSuc);
    var that = this;
    this.ajax //初创企业必备
      .post("/xinda-api/recommend/list")
      .then(function(data) {
        var pcCreateData = data.data.data;
        that.products = pcCreateData.product;
      });

    this.ajax //推荐服务商
      .post("/xinda-api/product/package/search-grid")
      .then(function(data) {
        var recommendR = data.data.data;
        var preServer = [];
        var myArray = [];
        var eachServerId = [];
        for (var i in recommendR) {
          //循环recommendR的每个对象
          preServer.push(recommendR[i].serviceName); //将recommendR中的每个对象的serviceName放入preServer数组中
          eachServerId.push(recommendR[i].id);
          var j = Number(i) + 1; //为了整除好用，因此这样
          if (j % 4 == 0) {
            //如果j被4整除进行如下操作
            recommendR[i].id = eachServerId;
            recommendR[i].serviceName = preServer; //每隔4个对象的首位对象的serviceName被重新赋值成preServer，此时preServer中已经有4个serviceName
            preServer = []; //清空preServer，避免把所有的preServer有所有的serviceName，保证每4个serviceName组成一个数组
            eachServerId = [];
            myArray.push(recommendR[i]); //将每隔4个对象的首位对象加入数组myArray中
          }
        }
        that.pcRecommends = myArray;
      });
  },
  data() {
    return {
      //手机端
      isShow: false, //控制选择城市下拉框的出现与消失的初始值
      telNavShow: false, //点击财税服务后控制弹出框出现或消失的初始值
      pcChoosedNum: 0, //判断用户是否选择城市
      pcChoosedCity: { name: "" }, //当前已选城市
      pcCityNameSuc: { city: "" }, //已开通城市名称
      dialogVisible: false, //控制“切换城市”弹出框的出现、消失
      telNavs: [
        {
          telNavImg: require("../../images/telIndex/m_homepage1.png"), //手机端--头部导航图片
          telNavInfo: "财税服务", //手机端--头部导航文字
          code: 1,
          url: gourl //点击后向/merchandise/taxationService发送code，请求相关数据
        },
        {
          telNavImg: require("../../images/telIndex/m_homepage2.png"),
          telNavInfo: "开公司",
          code: 4,
          url: gourl
        },
        {
          telNavImg: require("../../images/telIndex/m_homepage3.png"),
          telNavInfo: "公司变更",
          code: 5,
          url: gourl
        },
        {
          telNavImg: require("../../images/telIndex/m_homepage4.png"),
          telNavInfo: "个人社保",
          code: 7,
          url: gourl
        },
        {
          telNavImg: require("../../images/telIndex/m_homepage5.png"),
          telNavInfo: "公司社保",
          code: 6,
          url: gourl
        },
        {
          telNavImg: require("../../images/telIndex/m_homepage6.png"),
          telNavInfo: "知识产权",
          code: 3,
          url: gourl
        },
        {
          telNavImg: require("../../images/telIndex/m_homepage7.png"),
          telNavInfo: "全部服务",
          code: -1,
          url: "/merchandise/navShow"
        }
      ],
      telIndex: 1, //点击财税服务后弹出框默认出现的初始值

      //pc端
      index: -1, //轮播图左边导航mouseover\mouseleave事件的变量
      pcSer: -1, //推荐服务商的标题click的变量
      pcSerCliList: ["推荐服务商", "推荐服务"],
      pcSerSty: 0,
      // rDataObjs: {titles:{}},
      products: [], //初创企业必备
      pcRecommends: [], //推荐服务商
      pcCompanyRegisterList: [], //公司工商三级标题
      pcAllProTilName: [], //轮播图左边的所有二级标题
      carouselList: [
        //轮播图片
        { id: require("../../images/allProduct/sinda1.png") },
        { id: require("../../images/allProduct/sinda2.png") },
        { id: require("../../images/allProduct/sinda3.png") }
      ],

      starList: [
        //明星产品推荐文章列表
        {
          id: "1",
          img: "star1.png",
          til: "标准五险一金",
          info: "定制化社保代理，定制化代缴服务",
          money: "20",
          unit: "元/人/月"
        },
        {
          id: "2",
          img: "star2.png",
          til: "内资有限公司注册",
          info: "一键完成注册，快速开办公司",
          money: "600",
          unit: "元/次"
        },
        {
          id: "3",
          img: "star3.png",
          til: "小规模代理记账/年",
          info: "专业会计报税，高效、便捷、贴心",
          money: "3000",
          unit: "元/年"
        },
        {
          id: "4",
          img: "star3.png",
          til: "国内普通商标注册",
          info: "次日提交商标申请，最快保护品牌价值",
          money: "1000",
          unit: "元/次"
        }
      ]
    };
  },
  methods: {
    productDetail(proId) {
      //查看初创企业必备的产品详情
      this.$router.push({
        path: "/merchandise/productdetail",
        query: { id: proId }
      });
    },
    pcSerClick: function(index) {
      this.pcSer = index;
      this.pcSerSty = index;
      if (index == 0) {
        this.pcSer = -1;
      }
    },
    telNavClick(telIdx) {
      this.telIndex = telIdx;
      telIdx = !telIdx;
    }, //手机端头部导航
    telMenu() {
      //选择城市下拉框
      this.isShow = !this.isShow;
      if (this.isShow == false && this.pcChoosedNum == 0) {
        handleCon(this.dialogVisible, this.pcChoosedNum, this);
      }
    },
    pcChoosed() {
      //判断用户是否选择城市
      this.pcChoosedNum = 1;
      handleCon(this.dialogVisible, this.pcChoosedNum, this);
    },
    telNavControlShow(navIdx) {
      if (navIdx == 6) {
        //点击全部服务
        this.telNavShow = !this.telNavShow;
        this.telIndex = 1;
        this.$route.path = "http://localhost:8080/#/merchandise/allProduct";
      } else {
        this.$route.path = "/merchandise/taxationService";
      }
    }
  }
};
</script>

<style scoped lang='less'>
//pc端
//栏目标题下面的蓝色横线
.pcAllProLine {
  height: 2px;
  background: #2693d4;
}
.pcCarouselImg {
  padding-bottom: 40%;
  width: 100%;
  height: 400px;
}
.telCarouselImg{
  height: 2.8rem;
  width: 100%;
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
.pcAllProduct {
  max-width: 1200px;
  margin: 0 auto;
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
.pcSerBox {
  height: 382px;
  background: #fafafa;
  text-align: center;
}
.pcSerIcon {
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
.pcSerLoc {
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
//合作伙伴必备标题
.pcFri {
  width: 100%;
  height: 12.25%;
  margin-top: 42px;
  margin-bottom: 100px;
}
//明星产品推荐文章列表
.starImg {
  width: 48.33%;
  height: 32.33%;
}
.starInfo {
  font-size: 14px;
  color: #656565;
}
.starBox {
  p {
    width: 90%;
    padding-left: 8%;
    padding-right: 8%;
  }
  span {
    text-align: center;
  }
}

//手机端
//初创企业必备文章列表--xs以下--手机端
.telCreatBox {
  padding-top: 27px;
  padding-bottom: 20px;
  padding-left: 17px;
  padding-right: 40px;
  border-bottom: 1px solid #cfcfcf;
}
.telCreatText {
  font-size: 0.28rem;
  font-weight: bold;
  margin-bottom: 19px;
}
.telCreatInfo {
  font-size: 0.23rem;
  // margin-bottom: 19px;
}
.telCreatImg {
  height: 1.15rem;
  width: 116%;
}
.telCreateunit {
  font-size: 0.14rem;
}
.telCreatemarketPrice {
  color: red;
  font-size: 0.24rem;
  margin-top: -0.6rem;
  display: inline-block;
}
//手机端--头部
.telCompanyIconBox {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 7px;
  img {
    width: 20%;
    height: 0.6rem;
  }
}
.telChoosedCity {
  font-size: 0.23rem;
  // text-align: center;
}
.telArrow {
  transform: rotate(90deg);
  display: inline-block;
  font-size: 0.28rem;
}
.telHeaderBox {
  // display: flex;
  // justify-content: center;
  position: absolute;
  z-index: 600;
  top: -0.58rem;
  left: 2%;
}
.telMenuBox {
  background: rgba(255, 255, 255, 0.8);
  width: 15%;
  padding-top: 0.08rem;
  border: 1px solid;
  border-top: none;
  padding-bottom: 0.08rem;
  position: absolute;
  z-index: 600;
  top: 0.5rem;
  left: 2%;
  p {
    text-align: center;
    font-size: 0.16rem;
  }
}
.telTranDeg {
  transform: rotate(-90deg);
  display: inline-block;
}
//手机端---头部导航
.telNavBox {
  text-align: center;
  padding-left: 4%;
  padding-right: 4%;
  margin-top: 36px;
}
.telNavBoxIn {
  margin-bottom: 27px;
}
.telNavImg {
  width: 58.67%;
}
.telNavText {
  font-size: 0.21rem;
}
.telFooterP {
  text-align: center;
  color: #8e8e8e;
  font-size: 0.22rem;
  margin-bottom: 1.5rem;
}
//手机底部
.telFootImg {
  margin-bottom: 0.2rem;
  img {
    width: 20%;
    height: 0.6rem;
  }
}
//手机端栏目标题
.telColumn {
  font-size: 0.29rem;
  margin-bottom: 0.1rem;
  margin-left: 3%;
}
//手机端：知识产权图片列表
.telKnow {
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  img {
    width: 93%;
    height: 3.94rem;
  }
}
</style>
