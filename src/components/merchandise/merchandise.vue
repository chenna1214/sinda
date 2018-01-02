<template>
  <div>
    <pcHeader>大头部</pcHeader><!-- 头部 -->
    <router-view/>
    <pcfooter>大底部</pcfooter><!-- 底部 -->
   </div>
</template>
<script>
import pcHeader from '../pcPublic/pcHeader/pcHeader'
import pcfooter from '../pcPublic/pcfooter/pcfooter'
export default {
  name: 'sinda',
  components:{pcHeader,pcfooter}
}
</script>
<style>
</style>