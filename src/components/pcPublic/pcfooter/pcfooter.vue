<template>
  <div class="pcfooterOutter"><!-- 脚部 -->
   <div class="pcfooter hidden-xs-only">
     <p>关于我们</p><br>
     <p>联系我们：contact@xinkehr.com</p>
     <p>公司地址：北京市朝阳区大望路soho现代城5号楼2004室</p>
     <p>官方客服电话：010-83421842</p>
   </div>
     <!-- 手机端--底部导航 -->
    <div class="telFootBox hidden-sm-and-up">
      <div v-for="(eachTil,index) in telFootTil" :key="eachTil" @click="telColorChange(index)">
        <div class="telFootBox">
          <div class="telImg" :class="{telHome:index==0,telShop:index==1,telShoppingCar:index==2,telUser:index==3}"></div>
        </div>
        <p class="telTil" :class="{telChangeText:textCol==index}">{{eachTil}}</p>
      </div>

    </div>
    

  </div>
</template>

<script>
export default {
  name: "pcfooter",
  data() {
    return {
      telFootTil: ["首页", "店铺", "购物车", "我的"], //手机端--首页底部导航标签
      textCol: -1 //点击改变手机端首页底部导航标签颜色的初始值
    };
  },
  methods: {
    telColorChange(index) {
      //点击改变手机端底部导航按钮颜色
      this.textCol = index;
      var telImg = document.querySelectorAll(".telImg");//待优化：用backgroundPosition太繁琐
      if (index == 0) {
        telImg[0].style.backgroundPosition = "0 -42px";
      }else{
        telImg[0].style.backgroundPosition = "0 0";
      }
      if (index == 1) {
        telImg[1].style.backgroundPosition = "0 -89px";
      }else{
        telImg[1].style.backgroundPosition = "0 -131px";
      }
       if (index == 2) {
        telImg[2].style.backgroundPosition = "0 -229px";
      }else{
        telImg[2].style.backgroundPosition = "0 -184px";
      }
       if (index == 3) {
        telImg[3].style.backgroundPosition = "-60px -37px";
      }else{
        telImg[3].style.backgroundPosition = "-60px -0";
      }
    }
  }
};
</script>

<style scoped lang='less'>
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
//手机端--底部导航
.telImg {
  background: url("../../images/telIndex/telFooter.png") no-repeat;
  width: 35px;
  height: 35px;
}
.telTil {
  font-size: 23px;
  color: #999;
}
.telFootBox {
  display: flex;
  justify-content: space-around;
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
</style>
