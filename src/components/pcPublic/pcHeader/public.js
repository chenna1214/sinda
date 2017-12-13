import axios from 'axios';

export default function getCitys(pcChoosedCity,pcCityNameSuc) {
    axios.post("/xinda-api/common/select-region").then(data => {
        //当前已选城市
        pcChoosedCity.name = data.data.data.name;
    });
    axios.post("/xinda-api/common/open-region").then(data => {
        //已开通城市
        var pcCityExist = data.data.data;
        var pcCityArr=[];
        for (var key in pcCityExist) {
            // var pcCityId = pcCityExist[key].id;
            var pcCityName = pcCityExist[key].name;
            pcCityArr.push(pcCityName);
        }
        pcCityNameSuc.city=pcCityArr;
    });
}

//问题：如何暴露多个函数