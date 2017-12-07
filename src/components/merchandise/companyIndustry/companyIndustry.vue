<template>
  <div>
   <!-- 公司工商 -->
    <div class="pctaxservices-body">
      <a class="pctaxservices-title">首页/公司工商</a>
      <el-row>
        <el-col :span="19">
          <div>
            <el-row class="pcauto-wrap hidden-xs-only">
              <el-col :span="3"><div class="pcau-serv-classify">服务分类</div></el-col>
              <el-col :span="21">
                <ul class="pctax-servisenav clear">
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">公司注册</a></li>
                  <li class="pctax-svsnav-elem"><a href="javascript:void(0)">公司变更</a></li>
                </ul>
            </el-col>
          </el-row>
          <el-row class="pcauto-wrap hidden-xs-only">
            <el-col :span="3">
              <div class="pcau-serv-classify pccpny-indutype">类型</div>
            </el-col>
            <el-col :span="21">
              <ul id="pccpny-indunav" class="pctax-servisenav clear">
                <li class="pctax-svsnav-elem pctax-svsnav-eleml" v-for="(ar,idx) in arr" :key="ar.item" :class='{"pxtax-clickst-1":idx==index}' @click="change(idx)"><a class="pxtax-clickst-1a" href="javascript:void(0)">{{ar.item}}</a></li>
              </ul>
            </el-col>
          </el-row>
          <!-- 三级联动 -->
          <autourban></autourban>
          </div>
          <!-- 公司工商 商品列表 -->
          <div class="pccny-gds">
            <ul class="pccn-ghead clear">
              <li>综合排序</li>
              <li>价格<span class="pccn-ghico"></span></li>
            </ul>
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
   </div>
</template>

<script>
// 三级联动模块
import autourban from "../taxationService/autourban";

export default {
  name: "companyIndustry",
  methods: {
    change: function(index) {
      this.index = index;
    },
    getCode: function() {
      this.ajax.post("/xinda-api/product/style/list").then(data => {
        var dataInner = data.data.data["5af629246fa34f6f8d49758c6a7b25f1"];
        console.log(dataInner);
      });
    }
  },
  data() {
    return {
      aaa: "",
      msg: "我试试",
      index: 0,
      arr: [
        { item: "分公司注册" },
        { item: "公司注册地址" },
        { item: "合伙企业注册" },
        { item: "外商独资公司注册" },
        { item: "VIE架构" },
        { item: "股份公司注册" },
        { item: "有限责任公司注册" },
        { item: "一般纳税注册地址" }
      ]
    };
  },
  components: { autourban }
};
</script>

<style scoped lang='less'>
// 公司工商
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
  .pctax-servisenav {
    background: #f7f7f7;
    padding-left: 7px;
    height: 44px;
    li {
      margin: 9px 0 0 0;
      float: left;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 2px;
    }
    // 点击样式
    li.pxtax-clickst-1 {
      background: #2693d4;
      a {
        color: #fff !important;
      }
    }
  }
  #pccpny-indunav {
    height: 80px;
  }
  // 财税服务单行
  .pcauto-wrap {
    background: transparent;
    // 行名称
    .pcau-serv-classify {
      background: #f7f7f7;
      text-align: center;
      height: 44px;
      line-height: 44px;
      border: 1px solid #ccc;
      border-bottom: 0;
    }
    .pccpny-indutype {
      height: 80px;
      line-height: 80px;
    }
    // 行内容
    .pctax-servisenav {
      height: 44px;
      font-size: 13px;
      border: 1px solid #ccc;
      border-bottom: 0;
      border-left: 0;
      li {
        padding: 0 15px;
        height: 25px;
        border-radius: 2px;
        a {
          color: #626262;
        }
      }
      .pxtax-clickst-1 {
        background: #2693d4;
      }
      li:hover {
        background: #2693d4;
        a {
          color: #fff;
        }
      }
    }
  }
}
// 点击样式
.pxtax-clickst-1 {
  background: #2693d4;
  .pxtax-clickst-1a {
    color: #fff;
  }
}
// 右侧图标条
.pccopny-r-wrap {
  padding-left: 12px;
  .pccopny-rintr {
    max-width: 170px;
    padding: 0 37px 0 28px;
    border: 1px solid #ccc;
    li {
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      height: 148px;
      div {
        margin: 11px auto 13px;
        width: 98px;
        height: 98px;
      }
      p {
        font-size: 17px;
        color: #000;
        line-height: 26px;
        text-align: center;
      }
    }
    .pccopny-relim1 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -8px 0;
    }
    .pccopny-relim2 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -8px -113px;
    }
    .pccopny-relim3 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -8px -226px;
    }
    .pccopny-relim4 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -7px -341px;
    }
    .pccopny-rel4 {
      border: 0;
    }
  }
}


// 商品列表

.pccny-gds{
  margin-top: 25px;
  border: 1px solid #ccc;
  .pccn-ghead{
    li{
      float: left;
    }
  }
}
</style>
 