<template>
  <!-- 我的订单 -->
  <!-- 微信端 -->
  <div class="hidden-sm-and-up myorder">
    <!-- 头部 -->
    <div class="weorder">
      <span></span>
      <div class="we-order">我的订单</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "myorder",
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped lang='less'>
  @media all and (max-width: 767px){
    // 头部
    .weorder {
      height: 0.72rem;
      background: #e5e5e5;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
        border-left: 2px solid #838383;
        border-top: 2px solid #838383;
        transform: rotate(-45deg);
      }
      .we-order {
        width: 88%;
        text-align: center;
        line-height: 0.72rem;
        font-size: 0.3rem;
      }
    }
    // 
  } 
</style>
