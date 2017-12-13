<template>
  <div class="hidden-xs-only pcHeaderOutter"><!-- 头部 -->
    <el-row>
    <el-col><div class="pcHeader">
      <el-row>
        <div class="pcHeaderTopContent"><!-- 上半部分内容 -->
<el-col :sm="5" :md="5" :lg="6">

<div class="pcHeaderLeft"><!-- 上半部分内容--左边 -->
<img src="../../images/icon/sindaTextIcon.png" class="pcHeaderLeftsindaTextIcon">



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
<span class="pcHeaderChangeCityText pcHeaderMiddleProductText" >产品|</span>
<span class="pcHeaderCityText">服务商</span><br>
<input type="text" class="pcHeaderSearchInput" placeholder="搜索您需要的服务或服务商" @keyup='pcSearch()' v-model="serVal"><!-- 模糊搜索 -->
<!-- 匹配搜索内容 -->
<p class="pcSerBox"  v-for="eachSer in serchMatch" :key="eachSer.providerName"  @click='pcDetail()'>{{eachSer.providerName}}</p>

<img src="../../images/icon/serchIcon.png" alt="" class="pcHeaderMiddleSearchImg" align="absmiddle">
<p class="pcHeaderMiddleHotServiceText">热门服务：社保开户  公司注册</p>
  </div>
  </el-col>
<el-col :md="5" :lg="6" class="pcHeaderRightBox hidden-sm-and-down"><!-- 上半部分内容--右边 -->
 <img src="../../images/icon/pcHeadertelIcon.png">
  </el-col>
  </div>
      </el-row>
      <el-row class="pcHeaderBottom" type="flex" justify="center"><!-- 头部下半部分 -->
        <el-col :sm="4" :md="4" :lg="{span:4,offset:1}"><a href="#/merchandise/allProduct" class="pcHeaderBottomLink pcChoosedLink">全部产品</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/taxationService" class="pcHeaderBottomLink">财税服务</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/companyIndustry" class="pcHeaderBottomLink">公司工商</a></el-col>
        <el-col :sm="4" :md="4" :lg="4"><a href="#/merchandise/joinUs" class="pcHeaderBottomLink">加盟我们</a></el-col>
        <el-col :sm="7" :md="7" :lg="7"><a href="#/merchandise/shop" class="pcHeaderBottomLink">店铺</a></el-col>
      </el-row>
    </div></el-col>
    </el-row>
   </div>
   
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import getCitys from "./public"; //向服务器请求城市数据
// import {moreFn} from './public'
import { handleCon } from "./public"; //判断选择城市的状态出现不同的提示

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
      pcChoosedCity: { name: "" }, //当前已选城市
      pcCityNameSuc: { city: "" }, //已开通城市名称
      dialogVisible: false, //控制“切换城市”弹出框的出现、消失
      pcChoosedNum: 0, //判断用户是否选择城市
      searchArr: [], //搜索源
      serchMatch: [], //与用户输入所匹配的内容
      serName: [], //服务商公司名称
      serVal: "" //搜索input
    };
  },
  created() {
    getCitys(this.pcChoosedCity, this.pcCityNameSuc);
  },
  methods: {
    ...mapActions(["setNum"]),
    goodsNum() {
      this.setNum();
    },
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
    // handleCon() {
    //   this.dialogVisible = false;
    //   if (this.pcChoosedNum == 0) {
    //     this.$message({
    //       type: "warning",
    //       message: "您未选择城市!"
    //     });
    //   }
    //   if (this.pcChoosedNum == 1) {
    //     this.pcChoosedNum = 0;
    //     this.$message({
    //       type: "success",
    //       message: "城市选择成功!"
    //     });
    //   }
    // },
    pcSearch() {
      //模糊搜索
      var that = this;
      this.serchMatch = [];
      this.ajax //待优化：如何在用户完全输入完后才向服务器发送请求
        .post(
          "/xinda-api/provider/search-grid",
          this.qs.stringify({
            searchName: this.serVal
          })
        )
        .then(data => {
          var searchData = data.data.data;
          for (var key in searchData) {
            var eachArr = searchData[key];
            that.searchArr.push(eachArr);
            var serCompany = searchData[key].providerName;
            that.serName.push(serCompany);
          }
          if (this.serVal !== "") {
            for (var i = 0; i < this.serName.length; i++) {
              if (this.serName[i].indexOf(this.serVal) !== -1) {
                this.serchMatch.push(this.searchArr[i]);
              }
            }
          }
        });
    },
    pcDetail(searchCon) {
      //匹配搜索内容
      for (var a = 0; a < this.serchMatch.length; a++) {
        if (this.serchMatch[a].providerName == "大唐注册代理事务所") {
          console.log("大唐注册代理事务所");
        }
        if (this.serchMatch[a].providerName == "云智慧咨询服务有限公司") {
          console.log("云智慧咨询服务有限公司");
        }
      }
    }
  }
};
</script>

<style scoped lang='less'>
//切换城市
.eachCity {
  font-size: 13px;
  position: absolute;
  left: 420px;
  top: 173px;
  z-index: 2056;
}
//搜索源
// .pcSerTil {
//   font-size: 15px;
//   color: #2693d4;
//   text-align: center;
//   margin-top: 20px;
// }
// .serContent {
//   font-size: 9px;
//   margin-top: 10px;
// }
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
// .pcChoosedCity {
//   color: #2693d4;
// }
// 如何引用公共less
.pcHeaderOutter {
  border-bottom: 1px solid #2693d4;
}
.pcHeader {
  max-width: 1200px;
  margin: 0 auto;
  height: 160px;
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
  width: 41%;
  height: 19%;
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
  color: #2794d5;
  font-size: 12px;
  text-decoration: none;
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
.pcHeaderMiddleProductText {
  margin-bottom: 5px;
}
.pcHeaderMiddleSearchImg {
  margin-left: -6px;
  padding-top: 2px;
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
</style>
