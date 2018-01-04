<template>
  <div>
  <!-- 次顶部 -->
    <div class="hidden-xs-only pcHeaderOutter">
      <el-row>
        <el-col><div class="pcHeader">
          <el-row>
            <div class="pcHeaderTopContent"><!-- 上半部分内容 -->
              <el-col :sm="5" :md="5" :lg="6">
                <div class="pcHeaderLeft"><!-- 上半部分内容--左边 -->
                  <a href="#/merchandise/allProduct">
                    <img src="../images/icon/sindaTextIcon.png" class="pcHeaderLeftsindaTextIcon">
                  </a>
                  <!-- 当前已选城市 -->
                  <!-- <div class="pcHeaderCityBox">
                    <p class="pcHeaderCityText">{{pcChoosedCity.name}}</p>
                    <el-button type="text" @click="dialogVisible = true" class="pcHeaderChangeCityText">[切换城市]</el-button>
                    <el-dialog
                      title="选择城市"
                      :visible.sync="dialogVisible"
                      width="30%"
                    >
                      <span v-for="eachCity in pcCityNameSuc.city" :key="eachCity" @click="pcChoosed()" :class="{pcChoosedCity:1==pcChoosedNum}">{{eachCity}}</span>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="handleCan()">取 消</el-button>
                          <el-button @click="handleConfirm()">确 定</el-button>
                      </span>
                    </el-dialog>
                    </div> -->
                    <div class="pcHeaderCityBox">
                    <p class="pcHeaderCityText">北京市</p>
                    <el-button type="text" @click="dialogVisible = true" class="pcHeaderChangeCityText">[切换城市]</el-button>
                    <el-dialog
                      title="选择城市"
                      :visible.sync="dialogVisible"
                      width="30%"
                    >
                      <span @click="pcChoosed()" :class="{pcChoosedCity:1==pcChoosedNum}">北京市</span>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="handleCan()">取 消</el-button>
                          <el-button @click="handleConfirm()">确 定</el-button>
                      </span>
                    </el-dialog>
                    </div>
                  </div>
                </el-col>
                <el-col :sm="19" :md="14" :lg="12">
                  <div><!-- 上半部分内容--中间 -->
                <span class="pcHeaderChangeCityText pcHeaderMiddleProductText" :class="{pcChangeColor:bgBlue}" @click="choseType(1)">产品|</span>
                <span class="pcHeaderCityText" :class="{pcChangeColor:!bgBlue}" @click="choseType()">服务商</span><br>

                <div class="pcSearchBox">
                  <input type="text" class="pcHeaderSearchInput" placeholder="搜索您需要的服务或服务商" @input='pcSearch()' v-model="serVal" @blur="searchBlur()"><!-- 模糊搜索 -->
                  <img src="../images/icon/serchIcon.png" class="pcHeaderMiddleSearchImg" align="absmiddle" @click="searchBtn()">
                </div>
                <!-- 匹配搜索内容 -->
                <div class="pcSerBox" v-show='serShow'>
                  <p v-for="(eachSer,searchIdx) in serchMatch" :key="searchIdx"  @click='pcDetail(eachSer.id)'>{{eachSer.serviceName||eachSer.providerName}}</p>
                </div>

                <p class="pcHeaderMiddleHotServiceText">热门服务：<span class="pointer" @click="hotSearch('d0711135245247d486b3a6fb274546da')">社保开户</span>  <span class="pointer" @click="hotSearch('c3dbb4e69d6247ba9ef6785f573518a1')">公司注册</span></p>
                  </div>
                  </el-col>
                  <el-col :md="5" :lg="6" class="pcHeaderRightBox hidden-sm-and-down"><!-- 上半部分内容--右边 -->
                    <img src="../images/icon/pcHeadertelIcon.png">
                  </el-col>
              </div>
            </el-row>
            <el-row class="pcHeaderBottom" type="flex" justify="center"><!-- 头部下半部分 -->
                <el-col :sm="4" :md="4" :lg="{span:4,offset:1}"><router-link :to="{path:'/merchandise/allProduct'}" class="pcHeaderBottomLink" active-class="active" @mouseover.native="navOver()" @mouseleave.native="navDisLeave()">全部产品</router-link></el-col>
                <el-col :sm="4" :md="4" :lg="4"><router-link :to="{path:'/merchandise/taxationService?code=3'}"  active-class="active" class="pcHeaderBottomLink">财税服务</router-link></el-col>
                <el-col :sm="4" :md="4" :lg="4"><router-link :to="{path:'/merchandise/taxationServer?code=5'}"  active-class="active" class="pcHeaderBottomLink">公司工商</router-link></el-col>
                <el-col :sm="4" :md="4" :lg="4"><router-link :to="{path:'/merchandise/joinUs'}"  active-class="active" class="pcHeaderBottomLink">加盟我们</router-link></el-col>
                <el-col :sm="7" :md="7" :lg="7"><router-link :to="{path:'/merchandise/shop'}"  active-class="active" class="pcHeaderBottomLink">店铺</router-link></el-col>
            </el-row>
            <!-- 全部产品--pc端--轮播左边的导航 -->
            <div class="pcNavBoxOut" v-show="navDis" >
              <el-row v-for="(rDataObj,idx) in rDataObjs.titles" :key="rDataObj.id">
                <el-col :sm="23" :md="23" :lg="23" >
                    <div @mouseover="navDisOver()" @mouseleave="navDis=false">
                      <div class="pcAllProductHeaderInner hidden-xs-only" @mouseover="pcNavOver(idx)" @mouseleave="pcNavLeave(idx)"  :class="{pcNavEventAft:idx==index}">
                        <img :src="pcNavImg[idx-1]" class="pcAllProductHeader-taxImg hidden-sm-and-down">
                          <div class="pcAllProductHeader-taxText">
                            <span class="pcFirstTil">{{rDataObj.name}}</span><br>
                            <router-link :to="{ path: '/merchandise/taxationService', query: {code:secondTil.code}}" v-for="(secondTil,secIdx) in rDataObj.itemList" :key="secondTil.id">
                              <span class="pcSecondTil">{{secondTil.name}}</span>
                            </router-link >
                          </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :sm="{span:24,offset:23}" :md="{span:24,offset:23}" :lg="{span:24,offset:23}" >
                      <div @mouseover="navDisOver()" @mouseleave="navDis=false">
                        <div class="pcAllProTil hidden-xs-only" v-show="idx==index"  @mouseover="pcNavOver(idx)" @mouseleave="pcNavLeave(idx)">
                        <router-link tag='div':to="{ path: '/merchandise/taxationService', query: {code:secondTil.code}}" v-for="(secondTil,secIdx) in rDataObj.itemList" :key="secondTil.id">
                            <div class="pcNavSec"  >{{secondTil.name}}
                                <div class="pcNavTidBox">
                                  <router-link  :to="{path:'/merchandise/taxationService',query:{thirdId:thirdTil.id}}" v-for="thirdTil in secondTil.itemList" :key="thirdTil.id">
                                    <span class="pcNavSpan" >|{{thirdTil.name}}</span>
                                  </router-link>
                                </div>
                            </div>
                        </router-link>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 视图路由 -->
    <router-view/>

    <!-- 次底部 -->
    <div class="pcfooterOutter">
    <div class="pcfooter hidden-xs-only">
      <p>关于我们</p><br>
      <p>联系我们：contact@xinkehr.com</p>
      <p>公司地址：北京市朝阳区大望路soho现代城5号楼2004室</p>
      <p>官方客服电话：010-83421842</p>
    </div>
      <!-- 手机端--底部导航 -->
      <el-row class="hidden-sm-and-up">
        <el-col :xs="{span:24}" >
          <div class="telFooterFix" v-if="telDis==this.telIf">
            <div class="telFootBox hidden-sm-and-up">
              <div v-for="(eachTil,index) in telFootTil" :key="index" @click="telColorChange(index)">
                <a :href='eachTil.href' class="telFootNavHref">
                  <div class="telFootImgBox">
                    <div class="telImg homeClickBefor" :class="{telHome:index==0,telShop:index==1,telShoppingCar:index==2,telUser:index==3}"></div>
                  </div>
                  <p class="telTil" :class="{telChangeText:textCol==index}">{{eachTil.name}}</p>
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

   </div>
</template>

<script>
// import 'element-ui/lib/theme-chalk/display.css';
// import 'element-ui/lib/theme-chalk/index.css'
import { mapActions } from "vuex";
import getCitys from "./public.js"; //向服务器请求城市数据
import { handleCon } from "./public.js"; //判断选择城市的状态出现不同的提示
import { getTitles } from "./public.js"; //获取产品导航标题
import { Message, Col, Row, Button, Dialog } from "element-ui";
let searchVal = "";
export default {
  name: "pcHeader",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      //首页次顶部
      //选择城市
      pcChoosedCity: { name: "" }, //当前已选城市
      pcCityNameSuc: { city: "" }, //已开通城市名称
      dialogVisible: false, //控制“切换城市”弹出框的出现、消失
      pcChoosedNum: 0, //判断用户是否选择城市
      //模糊搜索
      searchArr: [], //搜索源
      serchMatch: [], //与用户输入所匹配的内容
      serName: [], //服务商公司名称
      serVal: "", //搜索input
      proServiceName: [], //产品搜索---产品名称
      proAllData: [], //全部产品数据
      bgBlue: true, //控制选择搜索类型点击后的样式
      serShow: true, //控制匹配搜索内容框的出现或消失
      getSearch: null, //搜索函数的初始值
      matchSearchDis: function() {}, //用户使搜索框失去焦点时，指定时间后执行此函数，使匹配搜索内容框消失
      searchMatchId: "", //商品详情的id
      //全部产品导航
      rDataObjs: { titles: {} },
      index: -1, //轮播图左边导航mouseover\mouseleave事件的变量
       pcNavImg: [
        require("../images/allProduct/icon1.png"),
        require("../images/allProduct/icon2.png"),
        require("../images/allProduct/icon3.png"),
        require("../images/allProduct/icon4.png")
      ],
      navDis: false, //控制全部产品的下拉框是否出现或消失
      navGone: function() {}, //控制全部产品的下拉框是否出现或消失
      x: "",
      //首页次底部
       telFootTil: [
        //手机端--首页底部导航标签
        { name: "首页", href: "#/merchandise/allProduct" },
        { name: "店铺", href: "#/merchandise/shop" },
        { name: "购物车", href: "#/merchandise/shoppingtrolley" },
        { name: "我的", href: "javascript:void(0);" }
      ],
      textCol: -1, //点击改变手机端首页底部导航标签颜色的初始值
      changeHref: "",
    };
  },
  created() {
    // getCitys(this.pcChoosedCity, this.pcCityNameSuc); //城市选择
    // this.getSearch = this.debounce(this.getSearchList, 600);
    // getTitles(this.rDataObjs);
  },
  methods: {
    //获得全部产品标题数据
    navOver(){
      this.navDis=true;
      getTitles(this.rDataObjs);
    },
    //首页次顶部
    //城市选择
    pcChoosed() {
      //判断用户是否选择城市
      this.pcChoosedNum = 1;
    },
    handleCan() {
      this.dialogVisible = false;
      Message({
        type: "info",
        message: "已取消选择城市"
      });
    },
    handleConfirm() {
      handleCon(this.dialogVisible, this.pcChoosedNum, this);
    },
    // pc端--全部产品导航
    pcNavOver: function(index) {
      this.index = index;
    },
    pcNavLeave: function() {
      this.index = -1;
    },
    navDisLeave() {
      //用户从全部产品移开300毫秒后执行下拉框消失
      var that = this;
      this.navGone = setTimeout(function() {
        that.navDis = false;
      }, 300);
    },
    navDisOver() {
      //用户从全部产品移开后，进入下拉框时停止执行navDisLeave()函数
      clearTimeout(this.navGone);
      this.navDis = true;
    },
    ...mapActions(["setNum"]),
    //模糊搜索
    getSearchList() {
      var url = "";
      if (this.bgBlue) {
        url = "/xinda-api/product/package/search-grid"; //产品搜索
      } else {
        url = "/xinda-api/provider/search-grid"; //服务商接口
      }
      this.ajax
        .post(url, this.qs.stringify({ searchName: this.serVal }))
        .then(data => {
          this.serchMatch = [];
          this.serchMatch = data.data.data;
          if (data.data.data.length == 0) {
            this.serchMatch = [{ serviceName: "没有相关搜索内容" }];
          }
        });
    },
    searchBtn() {
      //点击搜索按钮进行跳转
      if (this.serVal && this.serchMatch[0].serviceName != "没有相关搜索内容") {
        this.$router.push({ path: "/merchandise/shop" });
      }
    },
    searchBlur() {
      //搜索框失去焦点时清空input的value值并且使匹配搜索内容框消失
      var that = this;
      this.matchSearchDis = setTimeout(function() {
        that.serShow = false;
        that.serVal = "";
      }, 1000);
    },
    pcDetail: function(searchMatchId) {
      //用户点击匹配的搜索内容，查看详情
      if (this.serchMatch[0].serviceName != "没有相关搜索内容") {
        if (this.bgBlue == true) {
          this.$router.push({
            path: "/merchandise/productdetail",
            query: { id: searchMatchId }
          });
        }
        if (this.bgBlue == false) {
          this.$router.push({
            path: "/merchandise/pc_shophp",
            query: { id: searchMatchId }
          });
        }
      }
    },
    hotSearch(searchMatchId) {
      //热门搜索
      this.$router.push({
        path: "/merchandise/productdetail",
        query: { id: searchMatchId }
      });
    },
    choseType(param) {
      //选择搜索种类（产品/服务商）
      if (param) {
        //点击产品时
        this.bgBlue = true;
      } else {
        this.bgBlue = false;
      }
      this.serchMatch = [];
      this.serVal = "";
    },
    pcSearch() {
      //模糊搜索
      this.serShow = true; //使匹配搜索内容框出现
      if (!this.serVal) {
        //当input事件首次触发后，用中文输入法输入字母，但没有拼成文字前，input框内的value是空的，就返回。有的中文输入法时打汉字时，虽然有汉语拼音，但input框内的value值是空的，却触发input事件
        return;
      }
      if (searchVal == this.serVal) {
        //当全局定义的空字符串等于input框内的value时，就返回，不执行以下代码
        return;
      } else {
        searchVal = this.serVal; //全局定义的空字符串不等于input框内的value时，就将当前输入的input框的value值赋值给全局字符串
      }
      
      this.getSearch = this.debounce(this.getSearchList, 600);
      this.getSearch();
      //计算input宽度
      var searchInput = document.getElementsByClassName(
        "pcHeaderSearchInput"
      )[0]; //输入搜索内容的input
      var matchBox = document.getElementsByClassName("pcSerBox")[0]; //匹配搜索内容框
      //input框宽度
      var width = getComputedStyle(searchInput).width;
      var reallyWidth = width.substr(0, width.indexOf("px"));
      matchBox.style.width = Number(reallyWidth) + 5 + "px";
    },


    //首页次底部
        telColorChange(index) {
      //点击改变手机端底部导航按钮颜色
      this.textCol = index;
      var telImg = document.querySelectorAll(".telImg"); //待优化：用backgroundPosition太繁琐
      if (index == 0) {
        telImg[0].style.backgroundPosition = "0 -42px";
      } else {
        telImg[0].style.backgroundPosition = "0 0";
      }
      if (index == 1) {
        telImg[1].style.backgroundPosition = "0 -89px";
      } else {
        telImg[1].style.backgroundPosition = "0 -131px";
      }
      if (index == 2) {
        telImg[2].style.backgroundPosition = "0 -229px";
      } else {
        telImg[2].style.backgroundPosition = "0 -184px";
      }
      if (index == 3) {
        telImg[3].style.backgroundPosition = "-60px -37px";
        this.ajax.post("/xinda-api/sso/login-info").then(data => {
          console.log("登录", data.data.status);
          if (data.data.status == 1) {
            this.$router.push("/merchandise/havelogined");
          } else {
            this.$router.push("/merchandise/unregistered");
          }
          this.changeHref = this.telFootTil[3].href;
          console.log("this.changeHref==", this.changeHref);
        });
      } else {
        telImg[3].style.backgroundPosition = "-60px -0";
      }
    }


  }
};

</script>

<style scoped lang='less'>
//首页次顶部
// 全部产品导航
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
.pcAllProductHeader-taxImg {
  width: 26px;
  height: 26px;
  margin-left: 10%;
  margin-top: 5px;
}
.pcAllProductHeader-taxText {
  padding-left: 3%;
  .pcSecondTil {
    color: white;
    font-size: 12px;
    width: 50%;
    display: inline-block;
    white-space: nowrap;
  }
  .pcFirstTil {
    color: white;
    font-size: 15px;
    width: 60px;
  }
}
.pcAllProTil {
  margin-top: -100px;
  padding-top: 10px;
  padding-bottom: 6px;
  min-height: 84px;
  height: auto;
  background-color: rgba(152, 171, 196, 0.8);
  z-index: 100;
  position: absolute;
  width: 550%;
  margin-left: -1px;
}
.pcNavSec {
  color: white;
  font-size: 13px;
  margin-left: 10px;
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
  margin-left: 0.5%;
  white-space: normal;
}
.pcNavBoxOut {
  position: absolute;
  z-index: 100;
  margin-top: -2px;
  padding-top: -30px;
}
//切换城市
.eachCity {
  font-size: 13px;
  position: absolute;
  left: 420px;
  top: 173px;
  z-index: 2056;
}
.pcSerBox {
  position: absolute;
  z-index: 2000;
  margin-top: -1px;
  background: white;
  width: 39.5%;
  font-size: 13px;
  text-align: center;
  border: 2px solid #2693d4;
  border-top: none;
}
// 如何引用公共less
.pcHeaderOutter {
  border-bottom: 1px solid #2693d4;
}
.pcHeader {
  max-width: 1200px;
  margin: 0 auto;
  height: 160px;
  margin-bottom: -6px;
}
.pcHeaderTopContent {
  margin-top: 24px;
  display: flex;
  align-items: center;
}
//头部的左边内容
.pcHeaderLeft {
  display: flex;
  align-items: center;
}
.pcHeaderLeftsindaTextIcon {
  width: 100%;
}
.pcHeaderCityBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 61px;
  margin-left: 20px;
}
.pcHeaderCityText {
  font-size: 12px;
  display: inline-block;
}
.pcHeaderChangeCityText {
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: black;
}
.pcChangeColor {
  color: #2794d5;
}
//头部的中间内容
.pcHeaderSearchInput {
  width: 78%;
  height: 37px;
  border: 2px solid #2693d4;
  padding-left: 10px;
}
.pcHeaderMiddleHotServiceText {
  font-size: 11px;
  color: #c7c7c7;
  margin-top: 7px;
}
.pointer {
  cursor: pointer;
}
.pcHeaderMiddleProductText {
  margin-bottom: 5px;
}
.pcHeaderMiddleSearchImg {
  margin-left: -6px;
}
//头部的右边内容
.pcHeaderRightBox {
  display: flex;
  justify-content: flex-end;
  img {
    width: 57%;
    height: 15%;
  }
}
//头部下半部分
.pcHeaderBottom {
  margin-top: 8px;
}
.pcHeaderBottomLink {
  font-size: 17px;
  text-decoration: none;
  color: #414141;
  display: inline-block;
  height: 28px;
}
.active {
  color: #2693d4;
  border-bottom: 3px solid #2693d4;
}
.pcSearchBox {
  display: flex;
  align-items: center;
}
//首页次底部
@media all and (min-width: 768px) {
  .pcfooterOutter {
    background: #f8f8f8;
  }
  .pcfooter {
    padding-top: 38px;
    max-width: 1200px;
    height: 163px;
    margin: 0 auto;
    p {
      font-size: 14px;
      margin-left: 24px;
    }
  }
}
//手机端--底部导航
@media all and (max-width: 767px) {

  .telImg {
    background: url("../images/telIndex/telFooter.png") no-repeat;
    width: 35px;
    height: 35px;
  }
  .telTil {
    font-size: 0.23rem;
    color: #999;
  }
  .telFootImgBox {
    display: flex;
    justify-content: space-around;
  }
  .telFootBox {
    display: flex;
    justify-content: space-around;
    padding-top: 0.1rem;
    text-align: center;
  }
  .telFootNavHref {
    text-decoration: none;
  }
  .telFooterFix {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 26000;
    height: 0.8rem;
    min-height: 65px;
  }
  //手机端--底部--灰色--导航logo
  .telHome {
    background-position: 0 0;
  }
  .telShop {
    background-position: 0 -131px;
  }
  .telShoppingCar {
    background-position: 0 -184px;
  }
  .telUser {
    background-position: -60px -0;
  }
  .telChangeText {
    color: #2693d4;
  }
}
</style>