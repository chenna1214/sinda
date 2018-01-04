<template>
  <div>
    <!-- <el-row justify="center" type="flex"> -->
      <!-- <el-col class="hidden-xs-only" :sm="20" :md="20" :lg="20"> -->
        <div class="hidden-xs-only">
          <!-- 登录、注册、忘记密码头部 -->
          <div class="welcome">
            <!-- 信达图标 -->
            <div class="logo"></div>
            <!-- 竖线 -->
            <div class="virgule"></div>
            <!-- 欢迎登录 -->
            <p>{{getTitle}}</p>
          </div>
        </div>
      <!-- </el-col> -->
    <!-- </el-row> -->

   <router-view/> 
   </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
import { mapGetters } from "vuex";
var md5 = require("md5");

export default {
  name: "userData",
  data() {
    return {
      userTitle: ""
    };
  },
  mounted() {
    // if (window.location.href == "http://localhost:8080/#/userData/register") {
    //   this.userTitle = "注册";
    //   console.log('注册',window.location.href)
    // }
    //  if (window.location.href == "http://localhost:8080/#/userData/login") {
    //   this.userTitle = "登录";
    //   console.log('登录',window.location.href)
    // }
    //  if (window.location.href == "http://localhost:8080/#/userData/forgetPassword") {
    //   this.userTitle = "忘记密码";
    //   console.log('忘记密码')
    // }
  },
  computed: {
    ...mapGetters(["getTitle"])
  }
};
</script>

<style scoped lang='less'>
.welcome {
  max-width: 1200px;
  height: 97px;
  margin: 0 auto;
  display: flex;
  .logo {
    width: 125px;
    height: 56px;
    background-image: url("../merchandise/pc_images/login_logo.png");
    margin: 21px 38px 20px 12px;
  }
  .virgule {
    width: 1px;
    height: 47px;
    background: #b4b4b4;
    margin-top: 25px;
  }
  p {
    font-size: 18px;
    color: #2a2a2a;
    margin: 39px 0 21px 26px;
  }
}
</style>




