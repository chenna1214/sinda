<template>
    <div>
       <select name="" id="" @change="proChange" v-model="province">
            <option value="0">省</option>
            <option :value="code" v-for="(province,code) in provinces" :key="province.code">{{province}}</option>
        </select>
        <select name="" id="" @change="cityChange" v-model="city">
            <option value="0">市</option>
            <option :value="code" v-for="(city,code) in citys" :key="city.code">{{city}}</option>
        </select>
        <select name="" id="" v-model="area">
            <option value="">区</option>
            <option :value="code" v-for="(area,code) in areas" :key="area.code">{{area}}</option>            
        </select>
    </div>
</template>
<script>
import dist from '../../../districts/districts'

export default {
  name: 'sanjiliandong',
  data(){
      return{
           //三级联动
            provinces:dist[100000],
            citys:[],
            areas:[],
            province:'0',
            city:'0',
            area:'',
      }
  },
  methods:{
    //三级联动
    proChange(){
      this.citys = dist[this.province];
    },
    cityChange(){
      this.areas = dist[this.city];
    },
    selected(data){
      this.distCode = data.area.code;
    },
}}
</script>
