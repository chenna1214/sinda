<template>
  <div class="pcfooterOutter"><!-- 脚部 -->
   <div class="pcfooter hidden-xs-only">
     <p>关于我们</p><br>
     <p>联系我们：contact@xinkehr.com</p>
     <p>公司地址：北京市朝阳区大望路soho现代城5号楼2004室</p>
     <p>官方客服电话：010-83421842</p>
   </div>
     <!-- 手机端--底部导航 -->
    <el-row class="hidden-sm-and-up">
      <el-col :xs="{span:24}" >
        <div class="telFooterFix">
          <div class="telFootBox hidden-sm-and-up">
            <div v-for="(eachTil,index) in telFootTil" :key="index" @click="telColorChange(index)">
              <a :href='eachTil.href' class="telFootNavHref">
                <div class="telFootImgBox">
                  <div class="telImg" :class="{telHome:index==0,telShop:index==1,telShoppingCar:index==2,telUser:index==3}"></div>
                </div>
                <p class="telTil" :class="{telChangeText:textCol==index}">{{eachTil.name}}</p>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "pcfooter",
  data() {
    return {
      telFootTil: [
        //手机端--首页底部导航标签
        { name: "首页", href: "#/merchandise/allProduct" },
        { name: "店铺", href: "#/merchandise/shop" },
        { name: "购物车", href: "#/merchandise/shoppingtrolley" },
        { name: "我的", href: "#/merchandise/havelogined" }
      ],
      textCol: -1 //点击改变手机端首页底部导航标签颜色的初始值
    };
  },
  methods: {
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
      } else {
        telImg[3].style.backgroundPosition = "-60px -0";
      }
    }
  }
};
</script>

<style scoped lang='less'>
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
    background: url("../../images/telIndex/telFooter.png") no-repeat;
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
    padding-bottom: 0.1rem;
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
    z-index: 6000;
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
