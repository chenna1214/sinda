<template>
  <div class="topcolor">
   <!-- 最顶部 -->
最顶部
<pcTopLink></pcTopLink><!-- 最顶部链接 -->
   </div>
</template>

<script>
import pcTopLink from './pcTopLink';
export default {
  name: 'pcTop',
  components:{pcTopLink},
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang='less'>
.topcolor{
  background: yellow;
  width:1000px;
  height:100px;
}
</style>
