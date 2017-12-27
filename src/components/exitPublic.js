import axios from 'axios';
import ElementUI from 'element-ui';
export function logOff(vm) {//点击退出登录
    axios.post("/xinda-api/sso/ logout").then(data => {
        if (data.data.msg == "成功退出登录") {
            sessionStorage.removeItem("userName");
            vm.setName(vm.pcUserName);
            vm.$message({
                type: "success",
                message: "您已成功退出登录!"
            });
            vm.exit=data.data.msg; 
        }
    });
}