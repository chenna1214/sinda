<template>
    <div>
        <div @click="gouwuche" class="pctaxservices-body">
            <a class="pctaxservices-title">首页/购物车</a>
            <el-row>
                <el-col :span="24">
                    <div class="pcsp-all">全部商品</div>
                </el-col>
                
            </el-row>
        </div>
    </div>
</template>

<script>
// import {mapActions} from 'vuex'//改变数据
export default {
  name: "shoppingtrolley",
  methods: {
    // ...mapActions(['setNum']),
    // toDetail(id){
    //   this.$router.push({path:'/merchandise/productdetail',query:{id:id}});
    // },
    gouwuche: function() {
      var that = this;
      this.ajax.post("/xinda-api/cart/list")
        .then(function(data) {
          console.log('购物车===',data);
          //that.products = data.data.data;
        });
    }
  },
  created() {
    var that = this;
    this.ajax.post(
        "http://115.182.107.203:8088/xinda/xinda-api/cart/list")
      .then(function(data) {
        console.log(data);
      });
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang='less'>
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
</style>
