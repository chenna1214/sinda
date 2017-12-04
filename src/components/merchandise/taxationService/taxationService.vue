<template>
  <div>
   <!-- 财税服务 -->
    <div class="pctaxservices-body">
      <a class="pctaxservices-title">首页/财税服务</a>
      <v-distpicker class="pcv-dist-selec" province="北京市" city="市辖区" area="朝阳区"></v-distpicker>
    </div>
   </div>
</template>

<script>
// import Distpicker from 'v-distpicker'
export default {
  name: "taxationService",
  created(){
    var that = this;
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/grid').then(function(data){
      that.products = data.data.data;
    })

  },
  data() {
    return {
      hideArea:true,
      products: []
    };
  },
  components: {}
};
</script>

<style scoped lang='less'>
// 财税服务框架
.pctaxservices-body {
  max-width: 1200px;
  margin: 0 auto;
  .pctaxservices-title {
    display: inline-block;
    margin-top: 19px;
    font-size: 13px;
    color: #696969;
    line-height: 27px;
  }
  
}

.pctaxservices-body{
  .address{
    width: 500px;
    select{
      width: 65px;
      border: 2px solid;
    }
  }
}

</style>
