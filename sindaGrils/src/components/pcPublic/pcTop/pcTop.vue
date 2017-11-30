<template>
  <div class="pcTop">
   <!-- 最顶部 -->
<p class="pcTopBlackText">欢迎来到信达！</p>
<a href="#/userData/login"  class="pcTopBlueText">登录</a>
<a href="#/userData/register"  class="pcTopBlueText">注册</a>
<img src="../../images/pcTop/shoppingcarIcon.png" alt="购物车" class="pcShoppingcarIcon">
<p class="pcTopBlackText">购物车</p>
<p  class="pcTopBlueText">0</p>
<p class="pcTopBlackText">件</p>
<p  class="pcTopBlueText">服务商入口</p>
   </div>
</template>

<script>

export default {
  name: 'pcTop',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang='less'>
.pcTop{
  display: flex;
  align-items: center;
  background: #f2f2f2;
  height:35px;
}
.pcTopBlackText{
  font-size: 12px;
  
}
.pcTopBlueText{
  color: #2794d5;
  font-size: 12px;
  text-decoration: none;
}
.pcShoppingcarIcon{
  width:21px;
  height:17px;
}
</style>
