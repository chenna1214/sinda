<template>
  <div>
    <!-- 账户设置 -->
    <!-- 头部 -->
    <div class="set-head">
      <div @click="setacc" :class="accstyle">账户设置</div>
      <div @click="setcha" :class="chastyle">修改密码</div>
    </div>
    <!-- 主体 -->
    <div class="set-body">
      <!-- 账户设置 -->
      <div class="set-account" v-show="setone">
        <!-- 当前头像 -->
        <div class="set-current">
          <div>当前头像：</div>
          <div class="cur-image"></div>
        </div>
        <!-- 姓名 -->
        <div class="set-name">
          <div>姓名：</div>
          <div class="name-input">
            <input type="text" placeholder="请输入姓名">
          </div>
        </div>
        <!-- 性别 -->
        <div class="set-sex">
          <div>性别：</div>
          <div class="sex-input">
            <div>
              <input type="radio" value="男">男
            </div>
            <div>
              <input type="radio" value="女">女
            </div>
          </div>
        </div>
        <!-- 邮箱 -->
        <div class="set-email">
          <div>邮箱：</div>
          <div class="email-input">
            <input type="email" name="" id="" placeholder="请输入邮箱地址">
          </div>
        </div>
        <!-- 所在地区 -->
        <div class="set-area">
          <div>所在地区：</div>
          <div></div>
        </div>
        <!-- 保存 -->
        <div class="set-save">保存</div>
      </div>


      <!-- 修改密码 -->
      <div class="set-change" v-show="settwo">
        <div class="oldpwd">
          旧密码：<input type="password">
        </div>
        <div class="newpwd">
          新密码：<input type="password">
        </div>
        <div class="pwdagain">
          再次输入新密码：<input type="password">
        </div>
        <!-- 保存 -->
        <div class="cha-save">保存</div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'memaccount',
  data () {
    return {
      accstyle: 'set',
      chastyle: 'sets',
      setone: true,
      settwo: false,
    }
  },
  methods: {
    setacc: function () {
      this.accstyle = 'set';
      this.chastyle = 'sets';
      this.setone = true;
      this.settwo = false;
    },
    setcha: function () {
      this.accstyle = 'sets';
      this.chastyle = 'set';
      this.setone = false;
      this.settwo = true;
    }
  }
}
</script>

<style scoped lang='less'>
  .set{
    color: #349ad7;
    border-bottom: 2px solid #2693d4;
  }
  .sets{
    color: #111;
    border-bottom: none;
  }
  // 头部
  .set-head{
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #e9e9e9;
    display: flex;
    >div{
      width: 13%;
      font-size: 18px;
      line-height: 40px;
      text-align: center;
      margin-left: 3%;
      cursor: pointer;
    }
  }
  // 主体
  .set-body{
    width: 100%;
    // 账户设置
    .set-account{
      width: 100%;
      >div{
        margin-top: 3%;
        display: flex;
        >div{
          &:nth-child(1){
            width: 10%;
          }
        }
      }
      // 当前头像
      .set-current{
        width: 100%;
        align-items: center;
        .cur-image{
          width: 11%;
          height: 100px;
          background: url(../pc_images/login_logo.png) no-repeat 0 -113px;
        }
      }
      // 姓名
      .set-name{
        width: 100%;
        align-items: center;
        .name-input{
          width: 27%;
          height: 35px;
          input{
            width: 98%;
            height: 90%;
          }
        }
      }
      // 性别
      .set-sex{
        width: 100%;
        align-items: center;
        .sex-input{
          width: 10%;
          display: flex;
          justify-content: space-around;
          >div{
            width: 40%;
          }
        }
      }
      // 邮箱
      .set-email{
        width: 100%;
        align-items: center;
        .email-input{
          width: 27%;
          height: 35px;
          input{
            width: 98%;
            height: 90%;
          }
        }
      }
      // 所在地区
      .set-area{

      }
      // 保存
      .set-save{
        width: 12%;
        font-size: 19px;
        color: #5caedf;
        line-height: 40px;
        border: 1px solid #2693d4;
        border-radius: 6px;
        margin-left: 13%;
        justify-content: center;
        cursor: pointer;
      }
    }
    // 修改密码
    .set-change{
      width: 100%;
      >div{
        width: 42%;
        margin-top: 3%;
        // align-items: center;
        input{
          width: 60%;
          height: 35px;
        }
      }
      // 旧密码
      .oldpwd{
        margin-left: 7%;
      }
      // 新密码
      .newpwd{
        margin-left: 7%;
      }
      // 再次输入新密码
      .pwdagain{

      }
      // 保存
      .cha-save{
        width: 12%;
        font-size: 19px;
        color: #5caedf;
        line-height: 40px;
        border: 1px solid #2693d4;
        border-radius: 6px;
        margin-left: 18%;
        text-align: center;
        cursor: pointer;
      }
    }
  }
</style>
