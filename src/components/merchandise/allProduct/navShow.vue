<template>
    <div>
       <!-- 手机端--全部产品--轮播左边的导航 -->
        <div class="telNavToal" >
          <el-row v-for="(rDataObj,telIdx) in rDataObjs.titles" :key="rDataObj.id" class="telNavBoxOut">
            <!-- 题目 -->
            <el-col :xs="5" class="telNavTextBoxw">
              <div @click="telNavClick(telIdx)" :class="{telNavClickAft:telIdx==telIndex}" class="telNavTextBox">
                  <p class="telNavText">{{rDataObj.name}}</p>
              </div>
              <div class="telNavClickOut">
                <router-link tag='div' :to="{ path: '/merchandise/taxationService', query: {code:secondTil.code}}"v-for="secondTil in rDataObj.itemList" :key="secondTil.id">
                  <div class="telTilBox" v-show="telIdx==telIndex">
                    <div class="telSecondTil">{{secondTil.name}}</div>  
                    <div>
                    <router-link tag='div' :to="{path:'/merchandise/taxationService',query:{thirdId:thirdTil.id}}" v-for="thirdTil in secondTil.itemList" :key="thirdTil.id">
                      <p  class="telNavThrid">{{thirdTil.name}}<span class="telCarsoulArrow">></span>
                      </p>
                    </router-link>
                    </div>
                  </div>
                </router-link>
              </div>
            </el-col>
            <!-- 内容 -->
          </el-row>
        </div>
    </div>
</template>

<script>
import { getTitles } from "../../pcPublic/pcHeader/public"; //获取产品导航标题
export default {
  name: "navShow",
  data() {
    return {
      telIndex: 1, //点击财税服务后弹出框默认出现的初始值
      rDataObjs: { titles: {} }
    };
  },
  created() {
    getTitles(this.rDataObjs); //获取产品导航标题
    var that = this; //this是指main.js中的new Vue
  },
  methods: {
    telNavClick(telIdx) {
      this.telIndex = telIdx;
      telIdx = !telIdx;
    }, //手机端头部导航
  }
};
</script>

<style scoped lang='less'>
.telNavToal {
  background: #f3f4f6;


}

.telNavBoxOut:nth-child(1){
  .telNavClickOut{
    top: 94px;
  }
}
.telNavBoxOut:nth-child(2){
  .telNavClickOut{
    top: 0px;
  }
}
.telNavBoxOut:nth-child(3){
  .telNavClickOut{
    top: -94px;
  }
}
.telNavBoxOut:nth-child(4){
  .telNavClickOut{
    top: -188px;
  }
}
.telNavBoxOut {
  width: 100%;
}
.telNavClickAft {
  background: #f3f4f6;
  z-index: 51;
}

.telNavTextBoxw {
  position: relative;
  z-index: 51;
  background: #fff;
}

.telNavTextBox {
  height: 94px;
  line-height: 94px;
  border-bottom: 1px solid #cbcbcd;
}
.telNavText {
  font-size: 0.22rem;
  z-index: 51;
}
.telNavText {
  font-size: 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
}
.telNavClickOut {
  position: absolute;
  left: 100%;
  margin-top: -69px;
  z-index: 50;
  width: 500%;
}
.telTilBox {
  padding-top: 10px;
  padding-bottom: 6px;
  min-height: 84px;
  height: auto;
  background: #f3f4f6;
  margin-top: -26px;
}
.telSecondTil {
  color: #666465;
  font-size: 0.22rem;

  border-bottom: 1px solid #cbcbcd;
  padding-top: 23px;
  padding-bottom: 23px;
  background: #f3f4f6;
}
.telNavThrid {
  color: #666465;
  font-size: 0.16rem;
  margin-left: 60px;
  padding-top: 28px;
  padding-bottom: 23px;
  border-bottom: 1px solid #cbcbcd;
}
.telCarsoulArrow {
  float: right;
  margin-right: 3%;
}
</style>

