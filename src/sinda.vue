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

</style>
