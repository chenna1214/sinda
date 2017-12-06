<template>
  <div>
    <div class="pcAllProduct">
      <!-- 全部产品--轮播左边的导航 -->
        <el-row v-for="rDataObj in rDataObjs" :key="rDataObj.id">
          <el-col :sm="4" :md="4" :lg="4">
            <!-- v-bind:class="pcNavCla" -->
            <!-- v-bind:class="{ 'pcNavEventAft' : isA, 'pcNavEventAft': !isA}" -->
              <div class="pcAllProductHeaderInner" @mouseover="pcNavOver(rDataObj)" @mouseleave="pcNavLeave(rDataObj)" v-bind:class="pcNavCla">
                <div class="pcAllProductHeader-taxImg"></div>
                <!-- <div v-bind:class={"pcAllProductHeader-taxImg":rDataObj.name=='财税服务'}></div> -->
                <!-- <img :src="pcNavImg" v-for="(pcNavImg,index) in pcNavImg" :key="pcNavImg"> -->
                  <div class="pcAllProductHeader-taxText">
                    <span>{{rDataObj.name}}</span><br>
                    <span v-for="secondTil in rDataObj.itemList" :key="secondTil.id">{{secondTil.name}}</span>
                  </div>
              </div>
          </el-col>
          <el-col :sm="{span:20,offset:4}" :md="{span:20,offset:4}" :lg="{span:20,offset:4}">
            <div class="pcAllProTil" v-show="isShow" @mouseleave="pcNavLeave()" @mouseover="pcNavOver()">  
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
    <el-col :sm="6" :md="6" :lg="6">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn">

        </div>
      </div>
    </el-col>

     <el-col :sm="6" :md="6" :lg="6">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn">

        </div>
      </div>
    </el-col>

     <el-col :sm="6" :md="6" :lg="6">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn">

        </div>
      </div>
    </el-col>

     <el-col :sm="6" :md="6" :lg="6">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn">

        </div>
      </div>
    </el-col>
  </el-row>
<!-- 初创企业必备 -->
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

<!-- 推荐服务商标题 -->
  <el-row>
    <el-col>
      <p class="pcAllProColumn">推荐服务商</p>
      <div class="pcAllProLine"></div>
    </el-col>
  </el-row>
<!-- 推荐服务商文章列表 -->
<!-- v-for="pcRecommend in pcRecommends" -->
 <!-- <el-row type="flex" justify="space-between" :gutter="30" class="pcAllProStarBox">
    <el-col :sm="6" :md="6" :lg="6" v-for="pcRecommend in pcRecommends">
      <div class="pcAllProStarOut">
        <div class="pcAllProStarIn">
          <img class="pcCreateImg" :src="'http://115.182.107.203:8088/xinda/pic'+pcRecommend[0].providerImg">
          <p class="pcCreateServieceNameP">{{pcRecommend[0].providerName}}</p>
          <p class="pcoCreateServiceInfoP">服务指数：8.9分</p>
          <p class="pcoCreateServiceInfoP">提供的服务</p>
          <p>{{pcRecommend[0].serviceName}}</p>
          <p>{{pcRecommend[1].serviceName}}</p>
          <p>{{pcRecommend[2].serviceName}}</p>


        </div>
      </div>
    </el-col>
  </el-row> -->


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
        // console.log("rDataObjs==", rDataObj);
        // var types = [
        //   {
        //     name: "知识产权",
        //     subType: ["专利申请", "商标注册"],
        //     nodeType: ["审查意见答复", "外观专利减缓（共同申请）"]
        //   }
        // ];
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
        for (var i in recommendR) {//循环recommendR的每个对象
          // var newReco1Obj = newReco1[i].serviceName;
          preServer.push(recommendR[i].serviceName);//将recommendR中的每个对象放入preServer数组中
          var j = Number(i)+1;//为了整除好用，因此这样
          if(j%4==0){//如果j被4整除进行如下操作
            recommendR[i].serviceName = preServer;//每隔4个对象的首位对象的serviceName被重新赋值成preServer，此时preServer中已经有4个serviceName
            preServer = [];//清空preServer
            myArray.push(recommendR[i]);//将每隔4个对象的首位对象加入数组myArray中
          }
        }
        console.log("myArray==", myArray);
      });
  },
  mounted() {},
  data() {
    return {
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
      pcNavImg:[
       "src/components/images/allProduct/icon1.png",
       "src/components/images/allProduct/icon2.png",
       "src/components/images/allProduct/icon3.png",
       "src/components/images/allProduct/icon4.png",
      ],
      isShow: false,
      // isA:flase,
      pcNavCla:{
        'pcNavEventPre':true,
        'pcNavEventAft':false
      }
    };
  },
  methods: {
    pcNavOver:function(rDataObj){
      // var pcNav=document.getElementByClassName('.pcNav').children;
      // event.currentTarget.onmouseover = function(){
        // this.event.target.isShow=true;
        this.isShow=true;
        // rDataObj.isShow=true;
        this.pcNavCla.pcNavEventPre=false;
        this.pcNavCla.pcNavEventAft=true;
        // this.isA = !this.isA;
    },
    // pcNavLeave:function(){

    //   console.log(2222)
    // }
    pcNavLeave:function(rDataObj){
      this.isShow = false;
      // rDataObj.isShow=false;
      this.pcNavCla.pcNavEventAft=false;
      this.pcNavCla.pcNavEventPre=true;
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
.pcNavEventPre{
  background: #212121;
}
.pcNavEventAft{
  background: #2693d4;
}
// .pcNavEventAft{
//    padding-top: 10px;
//     padding-bottom: 11px;
//   cursor: pointer;
//   display: flex;
//   height: 79px;
//   background: #2693d4;
// }
.pcAllProductHeaderInner {
    padding-top: 10px;
    padding-bottom: 11px;
  cursor: pointer;
  // background: #212121;
  display: flex;
  height: 79px;
}

.pcNavCompanyH {
  height: 47px;
}
.pcAllProductHeader-taxImg {
  background: url(../../images/allProduct/header.png) 0 0 no-repeat;
  width: 26px;
  height: 26px;
  margin-left: 10%;
}
.pcAllProductHeader-companyImg {
  background: url(../../images/allProduct/header.png) 0 -57px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-kownlegdeImg {
  background: url(../../images/allProduct/header.png) 0 -100px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-agentImg {
  background: url(../../images/allProduct/header.png) 0 -164px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-taxText {
  // margin-left: 5px;
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
.pcAllProTil {
  margin-top: -100px;
  padding-top: 10px;
  padding-bottom: 6px;
  height: 84px;
  background-color: rgba(152, 171, 196, 0.5); 
  z-index: 10;
  position: absolute;
  width: 83.33333%;
  margin-left: -1px;
}
.pcNavTidBox{
  margin-top: -17px;
  margin-left: 70px
}
.pcNavSpan{
   color: white;
   font-size: 13px;
   margin-bottom: 10px;
   display: inline-block;
}
.pcNavSec{
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
.pcAllProColumn {
  font-size: 15px;
  margin-top: 53px;
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
</style>
