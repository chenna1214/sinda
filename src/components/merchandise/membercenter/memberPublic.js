//从服务订单接口获取订单数据
import axios from 'axios';
import qs from 'qs'
export  function getGoodsAllData(vm) {
    var goods = {};
    if (window.location.href.indexOf('myOrderTel') != -1) {
        goods = {}
    } else {
        goods = {
            businessNo: vm.orderNum,
            limit: vm.pagen,
            start: (vm.eachContent - 1) * vm.pagen
        }
    }
    axios.post(
        "/xinda-api/service-order/grid",
        qs.stringify(goods)
    ).then(function (data) {
        var Data = data.data.data;
        var business = {}; //定义空对象
        for (var i in Data) {
            // 不同订单号下的商品
            var businessNo = Data[i].businessNo; //让gData里的订单号等于businessNo
            if (!business[businessNo]) {
                //business里没有businessNo
                business[businessNo] = Data[i]; //让business[businessNo]等于gData[i]
                // console.log(business[businessNo])
                business[businessNo].subItem = []; //给对象business[businessNo]里定义一个新的属性
            }
            business[businessNo].subItem.push(Data[i]); //将gData[i]放入新属性里
            vm.products = business;
            // 时间戳转化为时间函数
            var gDate = new Date(vm.products[businessNo].createTime);
            var gyear = gDate.getFullYear();
            var gmonth = gDate.getMonth() + 1;
            var gdate = gDate.getDate();
            var ghour = gDate.getHours();
            var gminute = gDate.getMinutes();
            var gsecond = gDate.getSeconds();
            var gNowDate =
                [gyear, gmonth, gdate].join("-") +
                " " +
                ghour +
                ":" +
                gminute +
                ":" +
                gsecond;
            vm.products[businessNo].gdate = gNowDate;
        }
        console.log('products==',vm.products)
        vm.total = data.data.totalCount; //从服务器请求的信息总条数
    });
}