<template>
<div class="pcTopOutter">
  <el-row>
    <el-col>
      <div class="pcTop hidden-xs-only"><!-- 最顶部 -->
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div>
            
            <p class="pcTopBlackText pcWelcomeText">欢迎<span class="pcUserName">{{getName}}</span>来到信达！</p>
            <a href="#/userData/login"  class="pcTopBlueText" v-show="!getName">登录</a>
            <span class="pcTopBlueText" v-show="getName" @click="logOff()">退出登录</span>
            <a href="#/userData/register"  class="pcTopBlueText pcTopRegisterText">快速注册</a>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="{span:12}">
          <div class="pcTopRight">
            <img src="../../images/pcTop/shoppingcarIcon.png" alt="购物车" class="pcShoppingcarIcon">
            <p class="pcTopBlackText">购物车</p>
            <p class="pcTopBlueText saveBuyNum">{{getNum}}</p>
            <p class="pcTopBlackText">件</p>
            <p class="pcTopBlueText pcTopServiceEntryText">服务商入口</p>
          </div>
        </el-col>
      </div>
    </el-col>
   </el-row>


   
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "pcTop",
  data() {
    return {
      pcUserName: "", //退出登录后清空用户姓名

    };
  },

  methods: {
    ...mapActions(["setName"]),
    logOff() {
      sessionStorage.removeItem("userName");
      this.setName(this.pcUserName); //有时失效
      setTimeout(
        this.$message({
          type: "success",
          message: "您已成功退出登录!"
        }),
        100
      );
    }
  },
  computed: {
    ...mapGetters(["getNum","getName"]),
    // ...mapGetters(["getName"])
  },
  created(){
    //  var saveBuyNum=document.getElementsByClassName('saveBuyNum')[0];
    
    // // buyNumData=saveBuyNum.innerHTML;
    //  console.log('buyNumData',saveBuyNum.innerHTML)
    // sessionStorage.setItem('buyNum')
   
  },
  mounted(){
    //  var saveBuyNum=document.getElementsByClassName('saveBuyNum')[0];
    // buyNumData=saveBuyNum.innerHTML;
    //  console.log('buyNumData',buyNumData)
    

     
    
  }
};
</script>

<style scoped lang='less'>
.pcTopRegisterText {
  margin-left: 24px;
}
.pcTopServiceEntryText {
  margin-left: 10px;
}
.pcTopRight {
  display: flex;
  justify-content: flex-end;
  line-height: 35px;
  img {
    margin-top: 10px;
    margin-right: 2px;
  }
}
.pcTopOutter {
  background: #f2f2f2;
}
.pcTop {
  align-items: center;
  background: #f2f2f2;
  height: 35px;
  margin: 0 auto;
  max-width: 1200px;
}
.pcTopBlackText {
  font-size: 12px;
  display: inline-block;
}
.pcTopBlueText {
  display: inline-block;
  color: #2794d5;
  font-size: 12px;
  text-decoration: none;
}
.pcShoppingcarIcon {
  width: 21px;
  height: 17px;
}
.pcUserName {
  color: #2794d5;
  font-size: 16px;
}
</style>
