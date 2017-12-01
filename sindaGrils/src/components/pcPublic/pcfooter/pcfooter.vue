<template>
  <div class="pcfooterOutter hidden-xs-only"><!-- 脚部 -->
   <div class="pcfooter">
     <p>关于我们</p><br>
     <p>联系我们：contact@xinkehr.com</p>
     <p>公司地址：北京市朝阳区大望路soho现代城5号楼2004室</p>
     <p>官方客服电话：010-83421842</p>
   </div>
   </div>
</template>

<script>
export default {
  name: 'pcfooter',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang='less'>
.pcfooterOutter{
  background: #f8f8f8;
}
.pcfooter{
  padding-top: 38px;
  max-width: 1200px;
  height:163px;
  margin:0 auto;
  p{
    font-size: 14px;
    margin-left: 24px;
  }
}
</style>
