<template>
    <div>
                <!-- 手机端--全部产品--轮播左边的导航 -->
        <div class="telNavToal" >
          <el-row v-for="(rDataObj,telIdx) in rDataObjs.titles" :key="rDataObj.id" class="telNavBoxOut">
            <el-col :xs="5">
                <div @click="telNavClick(telIdx)" :class="{telNavClickAft:telIdx==telIndex}" class="telNavTextBox">
                    <p class="telNavText">{{rDataObj.name}}</p>
                </div>
            </el-col>
            <el-col :xs="{span:19,offset:5}" class="telNavClickOut">
                <router-link tag='div' :to="{ path: '/merchandise/taxationService', query: {code:secondTil.code}}"v-for="secondTil in rDataObj.itemList" :key="secondTil.id">
                  <div   class="telTilBox" v-show="telIdx==telIndex">
                    <div class="telSecondTil">{{secondTil.name}}</div>  
                    <div>
                      <router-link tag='div' :to="{path:'/merchandise/taxationService',query:{thirdId:thirdTil.id}}" v-for="thirdTil in secondTil.itemList" :key="thirdTil.id">
                        <p  class="telNavThrid">{{thirdTil.name}}<span class="telCarsoulArrow">></span>
                        </p>
                      </router-link>
                    </div>
                  </div>
                </router-link>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
import {getTitles} from '../../pcPublic/pcHeader/public'//获取产品导航标题
export default {
  name: "navShow",
  data() {
    return {
      telIndex: 1, //点击财税服务后弹出框默认出现的初始值
      rDataObjs: {titles:{}},
    }
  },
  created() {
   getTitles(this.rDataObjs);//获取产品导航标题
    var that = this; //this是指main.js中的new Vue
  },
  methods: {
    telNavClick(telIdx) {
      this.telIndex = telIdx;
      telIdx = !telIdx;
    } //手机端头部导航
  }
};
</script>

<style scoped lang='less'>
.telNavToal {
  .telNavBoxOut:nth-child(1) {
    margin-top: -30px;
  }
  .telNavBoxOut:nth-child(2) {
    margin-top: 64px;
  }
  .telNavBoxOut:nth-child(3) {
    margin-top: 158px;
  }
  .telNavBoxOut:nth-child(4) {
    margin-top: 252px;
  }
}
.telNavBoxOut {
  position: absolute;
  z-index: 9;
  width: 100%;
}
.telNavClickAft {
  background: #f3f4f6;
}
.telNavTextBox {
  height: 94px;
  line-height: 94px;
  border-bottom: 1px solid #cbcbcd;
//   background: white;
}
.telNavText {
  font-size: 22px;
}
.telNavText {
  font-size: 25px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
}
.telNavClickOut {
  margin-top: -69px;
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
  font-size: 22px;

  border-bottom: 1px solid #cbcbcd;
  padding-top: 23px;
  padding-bottom: 23px;
  background: #f3f4f6;
}
.telNavThrid {
  color: #666465;
  font-size: 18px;
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

