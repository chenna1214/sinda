<template>
  <div>
   <!-- pc端三级联动 -->
    <el-row class="pcauto-wrap hidden-xs-only">
      <el-col :span="3">
        <div class="pcau-serv-area">服务区域</div>
      </el-col>
      <el-col :span="21">
        <div  class="pcv-dist-selec">
          <select name="" id="" @change="proChange" v-model="province">
            <option value="0">省</option>
            <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
          </select>
          <select name="" id="" @change="cityChange" v-model="city">
            <option value="0">市</option>
            <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
          </select>
          <select name="" id="" v-model="area" @change="areaChange">
            <option value="">区</option>
            <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>            
          </select>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import dist from "../../../districts/districts";

export default {
  name: "autourban",
  data() {
    return {
      //三级联动
      provinces: dist[100000],
      citys: [],
      areas: [],
      province: "0",
      city: "0",
      area: ""
    };
  },
  methods: {
    //三级联动
    proChange() {
      this.citys = dist[this.province];
    },
    cityChange() {
      this.areas = dist[this.city];
    },
    selected(data) {
      this.distCode = data.area.code;
    },
    areaChange() {
      this.$emit("selected", this.area);
    }
  },
  components: {}
};
</script>


<style lang='less'>
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.clear::after {
  display: block;
  clear: both;
  content: "";
}
.pcauto-wrap {
  .pcau-serv-area {
    background: #f7f7f7;
    text-align: center;
    font-size: 16px;
    color: #010101;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
  }
  .pcv-dist-selec {
    background: #f7f7f7;
    padding-top: 8px;
    height: 32px;
    border: 1px solid #ccc;
    border-left: 0;
    select {
      min-width: 86px;
      max-width: 120px;
      margin-left: 9px;
      padding: 0;
      color: #636363;
      height: 22px;
      font-size: 13px;
      background: #f7f7f7;
      border: 1px solid #ccc;
      border-radius: 1px;
      option {
        max-width: 86px;
      }
    }
  }
}
</style>
