<template>
  <div>
   <!-- 店铺 -->
    <div class="company" v-for="product in products" :key="product.id">
      {{product.providerName}}
      <div class="com_logo"></div>
      <div class="com-character"></div>
    </div>
    <div class="introduction">
    
    </div>
    <div class="serving">
    
    </div>
    <router-view/>
   </div>
</template>

<script>
export default {
  name: 'pc_shophp',
  created () {
    var that = this;
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/provider/grid').then(function(data){
      var rData = data.data.data;
      that.products = rData;
      // console.log(rData);
    });
  },
  data () {
    return {
      products: [],
    }
  }
}
</script>

<style scoped lang='less'>

</style>
