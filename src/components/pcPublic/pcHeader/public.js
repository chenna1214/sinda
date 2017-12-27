import Vue from 'vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import Router from 'vue-router'

export default function getCitys(pcChoosedCity, pcCityNameSuc) {
    axios.post("/xinda-api/common/select-region").then(data => {
        //当前已选城市
        pcChoosedCity.name = data.data.data.name;
    });
    axios.post("/xinda-api/common/open-region").then(data => {
        //已开通城市
        var pcCityExist = data.data.data;
        var pcCityArr = [];
        for (var key in pcCityExist) {
            // var pcCityId = pcCityExist[key].id;
            var pcCityName = pcCityExist[key].name;
            pcCityArr.push(pcCityName);
        }
        pcCityNameSuc.city = pcCityArr;
    });
}


export function handleCon(dialogVisible, pcChoosedNum, vm) {//判断选择城市的状态出现不同的提示
    dialogVisible = false;
    if (pcChoosedNum == 0) {
        vm.$message({
            type: "warning",
            message: "您未选择城市!"
        });
        vm.$message({
            type: "warning",
            message: "您未选择城市!"
        });
    }
    if (pcChoosedNum == 1) {
        pcChoosedNum = 0;
        vm.$message({
            type: "success",
            message: "城市选择成功!"
        });
    }
}

export function getTitles(rDataObjs) {//获取产品导航标题
    axios.post("/xinda-api/product/style/list")
        .then(data=>{
            var rData = data.data.data;
            var rDataObj = {};
            for (var Key in rData) {
                rDataObj[rData[Key].code] = rData[Key];
            }
            rDataObjs.titles = rDataObj; 
            console.log('rDataObjs.titles',rDataObjs.titles)
            
        });
}


