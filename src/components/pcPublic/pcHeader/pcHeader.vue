<template>
  <div class="hidden-xs-only pcHeaderOutter"><!-- 头部 -->
    <el-row>
    <el-col><div class="pcHeader">
      <el-row>
        <div class="pcHeaderTopContent"><!-- 上半部分内容 -->
    <el-col :sm="5" :md="5" :lg="6">

<div class="pcHeaderLeft"><!-- 上半部分内容--左边 -->
<a href="#/merchandise/allProduct">
  <img src="../../images/icon/sindaTextIcon.png" class="pcHeaderLeftsindaTextIcon">
</a>



  <div class="pcHeaderCityBox">
    <p class="pcHeaderCityText">{{pcChoosedCity.name}}</p><!-- 当前已选城市 -->
    <el-button type="text" @click="dialogVisible = true" class="pcHeaderChangeCityText">[切换城市]</el-button><!-- 切换城市按钮 -->
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
  </div>





  </div>
  </el-col>
<el-col :sm="19" :md="14" :lg="12">
  <div><!-- 上半部分内容--中间 -->
<span class="pcHeaderChangeCityText pcHeaderMiddleProductText" :class="{pcChangeColor:bgBlue}" @click="choseType(1)">产品|</span>
<span class="pcHeaderCityText" :class="{pcChangeColor:!bgBlue}" @click="choseType()">服务商</span><br>

<div class="pcSearchBox">
   <!-- @blur="serShow=false" -->
  <input type="text" class="pcHeaderSearchInput" placeholder="搜索您需要的服务或服务商" @input='pcSearch()' v-model="serVal" @blur="searchBlur()" ><!-- 模糊搜索 -->
  <img src="../../images/icon/serchIcon.png" class="pcHeaderMiddleSearchImg" align="absmiddle" @click="searchBtn()">
</div>
<!-- 匹配搜索内容 -->
<div class="pcSerBox" v-show='serShow'>
  <p v-for="(eachSer,searchIdx) in serchMatch" :key="searchIdx"  @click='pcDetail(eachSer.id)'>{{eachSer.serviceName||eachSer.providerName}}</p>
</div>

<p class="pcHeaderMiddleHotServiceText">热门服务：<span class="pointer" @click="pcDetail('d0711135245247d486b3a6fb274546da')">社保开户</span>  <span class="pointer" @click="pcDetail('c3dbb4e69d6247ba9ef6785f573518a1')">公司注册</span></p>
  </div>
  </el-col>
<el-col :md="5" :lg="6" class="pcHeaderRightBox hidden-sm-and-down"><!-- 上半部分内容--右边 -->
 <img src="../../images/icon/pcHeadertelIcon.png">
  </el-col>
  </div>
      </el-row>
      <el-row class="pcHeaderBottom" type="flex" justify="center"><!-- 头部下半部分 -->
        <el-col :sm="4" :md="4" :lg="{span:4,offset:1}"><a href="#/merchandise/allProduct" class="pcHeaderBottomLink pcChoosedLink" @mouseover="navDis=true" @mouseleave="navDisLeave()">全部产品</a></el-col><!-- @mouseleave="navDisLeave()" -->
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/taxationService?code=3" class="pcHeaderBottomLink">财税服务</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/taxationService?code=5" class="pcHeaderBottomLink">公司工商</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/joinUs" class="pcHeaderBottomLink">加盟我们</a></el-col>
        <el-col :sm="7" :md="7" :lg="7"><a href="#/merchandise/shop" class="pcHeaderBottomLink">店铺</a></el-col>
      </el-row>



            <!-- 全部产品--pc端--轮播左边的导航 -->
      <div class="pcNavBoxOut" v-show="navDis">
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
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import getCitys from "./public"; //向服务器请求城市数据
import { handleCon } from "./public"; //判断选择城市的状态出现不同的提示
import {getTitles} from './public'//获取产品导航标题


let searchVal = "";
export default {
  name: "pcHeader",
  mounted() {
    var pcHeaderLink = document.querySelectorAll(".pcHeaderBottomLink");
    var pcChoosedLink = document.querySelectorAll(".pcChoosedLink");

    if (
      window.location.href == "http://localhost:8080/#/merchandise/allProduct"
    ) {
      //问题
      pcChoosedLink[0].style.color = "#2693d4";
      pcChoosedLink[0].style.borderBottom = "3px solid #2693d4";
    }
    for (var i = 0; i < pcHeaderLink.length; i++) {
      //待优化
      pcHeaderLink[i].onclick = function() {
        for (var i = 0; i < pcHeaderLink.length; i++) {
          pcHeaderLink[i].style.color = "#414141";
          pcHeaderLink[i].style.borderBottom = "none";
        }
        this.style.color = "#2693d4";
        this.style.borderBottom = "3px solid #2693d4";
      };
    }
  },
  data() {
    return {
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
      bgBlue: true,//控制选择搜索类型点击后的样式
      serShow: true,//控制匹配搜索内容框的出现或消失
      getSearch: null,//搜索函数的初始值
      matchSearchDis:function(){},//用户使搜索框失去焦点时，指定时间后执行此函数，使匹配搜索内容框消失
      searchMatchId:'',//商品详情的id
      //全部产品导航
      rDataObjs: {titles:{}},
      index: -1, //轮播图左边导航mouseover\mouseleave事件的变量
      pcNavImg: [
        "src/components/images/allProduct/icon1.png",
        "src/components/images/allProduct/icon2.png",
        "src/components/images/allProduct/icon3.png",
        "src/components/images/allProduct/icon4.png"
      ],
      navDis: false,//控制全部产品的下拉框是否出现或消失
      navGone: function() {},//控制全部产品的下拉框是否出现或消失


    };
  },
  created() {
  
    
    getCitys(this.pcChoosedCity, this.pcCityNameSuc);//城市选择
    this.getSearch = this.debounce(this.getSearchList, 600);
    getTitles(this.rDataObjs);
  },
  methods: {
    //
    //  goodsNum() {
    //   this.setNum();
    // },
    //城市选择
    pcChoosed() {
      //判断用户是否选择城市
      this.pcChoosedNum = 1;
    },
    handleCan() {
      this.dialogVisible = false;

      this.$message({
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
    navDisLeave() {//用户从全部产品移开300毫秒后执行下拉框消失
      var that = this;
      this.navGone = setTimeout(function() {
        that.navDis = false;
      }, 300);
    },
    navDisOver() {//用户从全部产品移开后，进入下拉框时停止执行navDisLeave()函数
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
    searchBtn(){//点击搜索按钮进行跳转
      this.$router.push({path:'/merchandise/shop'});
    },
    searchBlur(){//搜索框失去焦点时清空input的value值并且使匹配搜索内容框消失
      var that =this;
      this.matchSearchDis=setTimeout(function(){
      that.serShow=false;
      that.serVal='';
      },1000)
    },
    pcDetail: function(searchMatchId) {//用户点击匹配的搜索内容，查看详情
        this.$router.push({
          path: "/merchandise/productdetail",
          query: { id:searchMatchId }
        });
        if(this.bgBlue==false){
          this.$router.push({
          path: "/merchandise/pc_shophp",
          query: { id:searchMatchId }
        });

        }
    },   
    choseType(param) {//选择搜索种类（产品/服务商）
      if (param) {
        this.bgBlue = true;
      } else {
        this.bgBlue = false;
      }
      this.serchMatch = [];
      this.serVal = "";
    },
    pcSearch() {
      //模糊搜索
      this.serShow=true;//使匹配搜索内容框出现
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
      this.getSearch();
    },
  },
};
</script>

<style scoped lang='less'>
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
  background: #98f5ff;
  width: 40%;
  font-size: 15px;
  color: #2693d4;
  text-align: center;
}
.proBox {
  position: absolute;
  z-index: 2000;
  margin-top: -1px;
  background: #98f5ff;
  width: 40%;
  font-size: 15px;
  color: #2693d4;
  text-align: center;
  height: 200px;
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
.pointer{
   cursor:pointer;

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
  .pcHeaderBottomLink {
    font-size: 17px;
    text-decoration: none;
    color: #414141;
    display: inline-block;
    height: 28px;
  }
}
.pcSearchBox {
  display: flex;
  align-items: center;
}
</style>
