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
      <div class="set-account" v-show="setone">1</div>
      <!-- 修改密码 -->
      <div class="set-change" v-show="settwo">2</div>
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
</style>
