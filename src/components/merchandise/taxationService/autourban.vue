<template>
  <div>
   <!-- pc端三级联动 -->
      <el-row class="pcauto-wrap hidden-xs-only">
        <el-col :span="3"><div class="pcau-serv-area">服务区域</div></el-col>
        <el-col :span="21"><sanji class="pcv-dist-selec"></sanji></el-col>
      </el-row>
    </div>
</template>
<script>
import sanji from './sanjiliandong'

export default {
  name: "autourban",
  data() {
    return {
    };
  },
  components: {sanji}
};
</script>


<style lang='less'>
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.clear::after{
    display: block;
    clear: both;
    content: "";
}
.pcauto-wrap{
    //   background: #f7f7f7;
    .pcau-serv-area{
        background: #f7f7f7;
        text-align:center;
        font-size: 16px;
        color: #010101;
        height: 40px;
        line-height:40px;
        border: 1px solid #ccc;
    }
    .pcv-dist-selec{
        background: #f7f7f7;
        padding-top: 8px;
        height: 32px;
        border: 1px solid #ccc;
        border-left: 0;
        select{
            min-width: 86px;
            max-width: 120px;
            margin-left: 9px;
            padding: 0;
            color:#636363;
            height: 22px;
            font-size: 13px;
            background: #f7f7f7;
            border: 1px solid #ccc;
            border-radius: 1px;
            option{
                max-width: 86px;
            }
        }
    }
}
</style>
