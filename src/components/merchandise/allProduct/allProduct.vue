<template>
  <div><!-- 全部产品 --> 
    <div class="pcAllProduct">

        <el-row>
          <el-col :sm="4" :md="4" :lg="4">
              <div class="pcAllProductHeaderInner" @mouseover="pcNavOver($event)" @mouseleave="pcNavLeave($event)">
      <!-- 全部产品轮播左边导航栏 -->
                <div class="pcAllProductHeader-taxImg"></div>
                  <div class="pcAllProductHeader-taxText">
                    <span>财税服务</span><br>
                    <span>代理记账</span>
                    <span>税务代办</span><br>
                    <span>审计报告</span>
                  </div>
              </div>
          </el-col>
          <el-col :sm="{span:20,offset:4}" :md="{span:20,offset:4}" :lg="{span:20,offset:4}">
            <div class="pcAllProTil" v-show="isShow" @mouseover="pcNavOver($event)" @mouseleave="pcNavLeave($event)">  <!-- 财税服务 -->
                <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==5" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
                <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="index==40" :key="pcCompanyRegister">{{'0|'+pcCompanyRegister}}</span><br>
                <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==4" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
                <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="8<=index" :key="pcCompanyRegister">{{'|'+pcCompanyRegister}}</span>
                 <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==3" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
                <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="8<=index" :key="pcCompanyRegister">{{'|'+pcCompanyRegister}}</span>
            </div>
          </el-col>
      </el-row>

<el-row>
  <el-col :sm="4" :md="4" :lg="4">
      <div class="pcAllProductHeaderInner" @mouseover="pcNavOver($event)" @mouseleave="pcNavLeave($event)">
      <div class="pcAllProductHeader-companyImg"></div>
      <div class="pcAllProductHeader-taxText">
        <span>公司工商</span><br>
        <span>公司注册</span>
        <span>公司变更</span><br>
      </div>
    </div>
  </el-col>
 <el-col :sm="20" :md="20" :lg="{span:20,offset:4}">
        <div class="pcAllProTil pcCompany" v-show="isShow" @mouseover="pcNavOver($event)" @mouseleave="pcNavLeave($event)">
          <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==6" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
          <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="index<8" :key="pcCompanyRegister">{{'|'+pcCompanyRegister}}</span><br>
          <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==7" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
          <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="8<=index" :key="pcCompanyRegister">{{'|'+pcCompanyRegister}}</span>
        </div>
  </el-col>
</el-row>

<el-row>
  <el-col :sm="4" :md="4" :lg="4">
        <div class="pcAllProductHeaderInner" v-on:mouseover="pcNavOver()" v-on:mouseleave="pcNavLeave()">
      <div class="pcAllProductHeader-kownlegdeImg"></div>
      <div class="pcAllProductHeader-taxText">
        <span>知识产权</span><br>
        <span>专利申请</span>
        <span>商标注册</span><br>
        <span>版权保护</span>
      </div>
    </div>
</el-col>
<el-col :sm="20" :md="20" :lg="{span:20,offset:4}">
      <div class="pcAllProTil" v-show="isShow" v-on:mouseover="pcNavOver()" v-on:mouseleave="pcNavLeave()">
          <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==6" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
          <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="index<8" :key="pcCompanyRegister">{{'|0'+pcCompanyRegister}}</span><br>
          <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==7" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
          <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="8<=index" :key="pcCompanyRegister">{{'|'+pcCompanyRegister}}</span>
        </div>
        </el-col>
</el-row>

<el-row>
  <el-col :sm="4" :md="4" :lg="4">
        <div class="pcAllProductHeaderInner" v-on:mouseover="pcNavOver()" v-on:mouseleave="pcNavLeave()">
      <div class="pcAllProductHeader-agentImg"></div>
      <div class="pcAllProductHeader-taxText">
        <span>社保代理</span><br>
        <span>企业社保</span>
        <span>个人社保</span><br>
      </div>
    </div>
  </el-col>
  <el-col :sm="20" :md="20" :lg="{span:20,offset:4}">
    <div class="pcAllProTil" v-show="isShow" v-on:mouseover="pcNavOver()" v-on:mouseleave="pcNavLeave()">
          <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==6" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
          <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="index<8" :key="pcCompanyRegister">{{'|'+pcCompanyRegister}}</span><br>
          <span v-for="(pcAllProTilNameSingle,index) in pcAllProTilName" v-if="index==7" :key="pcAllProTilNameSingle">{{pcAllProTilNameSingle+'>'}}</span>
          <span v-for="(pcCompanyRegister,index) in pcCompanyRegisterList" v-if="8<=index" :key="pcCompanyRegister">{{'|'+pcCompanyRegister}}</span>
        </div>
    </el-col>
  </el-row>

<!-- 全部产-轮播图片 -->-
<el-col :sm="20" :md="20" :lg="{span:20,offset:4}" class="pcAllProCarousel">

    <el-carousel trigger="click" height="400px">
     <el-carousel-item v-for="carouselImg in carouselList" :key="carouselImg.id">
       <img v-bind:src="carouselImg.id" class="pcCarouselImg">
      </el-carousel-item>
    </el-carousel>

  </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "allProduct",
  created() {
    var that = this; //this是指main.js中的new Vue
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list")
      .then(function(data) {
        var rData = data.data.data;

for(var key0 in rData){
  // console.log('key0',key0)
for (var key1 in rData[key0].itemList) {//公司工商三级标题
          var pcCompanyRegisterData =
            rData[key0].itemList[key1].itemList;
          for (var key2 in pcCompanyRegisterData) {
            var pcCompany = pcCompanyRegisterData[key2].name.replace('、','');
          that.pcCompanyRegisterList.push(pcCompany);
          // console.log('pcCompany',pcCompany)
          }
        }
}
console.log('pcCompanyRegisterList',that.pcCompanyRegisterList)
   


     

        for(var key00 in rData){//轮播图左边的所有二级标题
          for(var key01 in rData[key00].itemList){
            var pcAllProTil=rData[key00].itemList[key01].name;
            // console.log(pcAllProTil)
            that.pcAllProTilName.push(rData[key00].itemList[key01].name);
          }
        }
      });
  },
  mounted() {},
  data() {
    return {
      pcCompanyRegisterList: [],//公司工商三级标题
      pcAllProTilName:[],//轮播图左边的所有二级标题
      carouselList: [
        { id: "src/components/images/allProduct/1.png" },
        { id: "src/components/images/allProduct/2.jpg" },
        { id: "src/components/images/allProduct/3.png" }
      ],
      isShow:true,
    };   
  },
  // methods: {
  //   pcNavOver:function(event){
  //     // var pcNav=document.getElementByClassName('.pcNav').children;
  //     // event.currentTarget.onmouseover = function(){
  //       this.isShow=true;
  //       console.log('this==',this)
  //     // };
  //     console.log('event.currentTarget==',event.currentTarget)
  //     // console.log(pcNav)
  //   },
  //   // pcNavLeave:function(){
     
  //   //   console.log(2222)
  //   // }
  //   pcNavLeave:function(event){
  //     event.currentTarget.isShow = false;
  //   }
  // }
};
</script>

<style scoped lang='less'>
.uu{
  color:red;
}
.active{
  color:red;
}
.pcCarouselImg {
  padding-bottom: 40%;
  width: 100%;
}
.pcAllProduct {
  max-width: 1200px;
  margin: 0 auto;
}
.pcAllProductHeaderInner {
  display: flex;
  justify-content: center;
  padding-top: 17px;
  padding-bottom: 20px;
  cursor: pointer;
  background: #212121;
  height: 116px;
}
.pcAllProductHeader-taxImg {
  background: url(../../images/allProduct/allproductheader.png) 0 0 no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-companyImg {
  background: url(../../images/allProduct/allproductheader.png) 0 -57px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-kownlegdeImg {
  background: url(../../images/allProduct/allproductheader.png) 0 -100px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-agentImg {
  background: url(../../images/allProduct/allproductheader.png) 0 -164px no-repeat;
  width: 26px;
  height: 26px;
}
.pcAllProductHeader-taxText {
  margin-left: 9px;
  span {
    color: white;
    font-size: 12px;
  }
  span:nth-child(1) {
    font-size: 15px;
  }
}
.pcAllProTil {
  margin-top: -116px;
  padding-top: 17px;
  padding-bottom: 20px;
  height:84px;
  background-color:rgba(152,171,196,0.5);
  z-index: 10;
    position: absolute;
  span{
    color:white;
    font-size:13px;
    margin-left:10px;
  }
}
// .pcNav{
//     z-index: 200;
//     position: absolute;
// }
.pcAllProCarousel{
  margin-top: -612px;
    // z-index: 100;
    // position: absolute;
}
</style>
