<template>
  <div>
   <!-- 财税服务 -->
    <div class="pctaxservices-body">
      <a class="pctaxservices-title">首页/财税服务</a>
      <el-row>
        <el-col :span="19">
          <div>
            <el-row class="pcauto-wrap hidden-xs-only">
              <el-col :span="3"><div class="pcau-serv-classify">服务分类</div></el-col>
              <el-col :span="21">
                <ul class="pctax-servisenav clear">
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">代理记账</a></li>
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">税务代办</a></li>
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">审计报告</a></li>
                </ul>
              </el-col>
            </el-row>
          <el-row class="pcauto-wrap hidden-xs-only">
            <el-col :span="3"><div class="pcau-serv-classify">类型</div></el-col>
            <el-col :span="21"><ul class="pctax-servisenav clear">
              <li class="pctax-svsnav-elem"><a href="javascript:void(0)">小规模记账</a></li>
              <li class="pctax-svsnav-elem pctax-svsnav-eleml"><a href="javascript:void(0)">一般纳税人记账</a></li>
            </ul></el-col>
          </el-row>
          <!-- 三级联动 -->
          <autourban></autourban>
          </div>
        </el-col>
        <el-col :span="5" class="hidden-xs-only">
          <div class="pccopny-r-wrap">
            <ul class="pccopny-rintr">
              <li class="pccopny-rel1">
                <div class="pccopny-relim1"></div>
                <p class="pccopny-r-tit">平台担保</p>
              </li>
              <li class="pccopny-rel2">
                <div class="pccopny-relim2"></div>
                <p class="pccopny-r-tit">优质服务</p>
              </li>
              <li class="pccopny-rel3">
                <div class="pccopny-relim3"></div>
                <p class="pccopny-r-tit">过程监督</p>
              </li>
              <li class="pccopny-rel4">
                <div class="pccopny-relim4"></div>
                <p class="pccopny-r-tit">增值服务</p>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      
    </div>
   </div>
</template>

<script>
// 三级联动模块
import autourban from './autourban';

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
  components: {autourban}
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
  // 服务分类内容
  .pctax-servisenav{
    background: #f7f7f7;
    height: 44px;
    li{
      margin:9px 0 0 15px;
      float: left;
      width: 80px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 2px;
    }
    // 点击样式
    .pxtax-clickst-1{
      background: #2693d4;
    }
  }
  // 财税服务单行
  .pcauto-wrap{
    // 行名称
    .pcau-serv-classify{
      background: #f7f7f7;
      text-align: center;
      height: 44px;
      line-height: 44px;          
      border: 1px solid #ccc;
      border-bottom: 0;
    }
    // 行内容
    .pctax-servisenav{
      height: 44px;
      font-size: 13px;
      border: 1px solid #ccc;
      border-bottom: 0;
      border-left: 0;
      li{
        width: 80;
        height: 25px;
        border-radius: 2px;
        a{
          color: #626262;
        }
      }
      .pctax-svsnav-eleml{
        width: 106px;        
      }
      li:hover{
        background: #2693d4;
        a{
          color: #fff;
        }
      }
    }
  }
}


// 右侧图标条
.pccopny-r-wrap{
  padding-left: 12px;
  .pccopny-rintr{
    max-width: 170px;
    padding: 0 37px 0 28px;
    border:1px solid #ccc;
    li{
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      height: 148px;
      div{
        margin: 11px auto 5px;
        width:108px;
        height: 108px;
      }
      p{
        font-size: 17px;
        color: #000;
        line-height: 26px;
        text-align: center;
      }
    }
    .pccopny-relim1{
      background: url(../pc_images/code.png) 0 -726px;
    }
    .pccopny-relim2{
      background: url(../pc_images/code.png) 0 -864px;
    }
    .pccopny-relim3{
      background: url(../pc_images/code.png) 0 -995px;
    }
    .pccopny-relim4{
      background: url(../pc_images/code.png) 0 -1140px;      
    }
    .pccopny-rel4{
      border: 0;
    }
  }
}
.active{
  background: blue;
}
</style>
