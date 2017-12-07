<template>
  <div id="sinda">
    <pcTop>最顶部</pcTop><!-- 最顶部 -->
    <router-view/>
    <pcBottom>最底部</pcBottom><!-- 最底部 -->
   </div>
</template>

<script>
import pcTop from "./components/pcPublic/pcTop/pcTop";
import pcBottom from "./components/pcPublic/pcBottom/pcBottom";

export default {
  name: "sinda",
  components: { pcTop, pcBottom }
};
</script>

<style lang='less'>
//注册  三级联动样式
.register-android-wheel {
  select {
    height: 35px;
    width: 90px;
    font-size: 0.9rem;
    margin-bottom: 26px;
  }
}
</style>
