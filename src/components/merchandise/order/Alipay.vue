<template>
    <div>
      <!-- 支付宝支付 -->
      <div class="Alipay" v-loading.fullscreen.lock="fullscreenLoading"></div>
    </div>

</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: "Alipay",
  data() {
    return {};
  },
  mounted() {
    // 支付宝支付
    var AlipayData = sessionStorage.getItem("Alipay");
    var Alipay = document.getElementsByClassName("Alipay")[0];
    Alipay.innerHTML = AlipayData.substring(
      AlipayData.indexOf("<form"),
      AlipayData.indexOf("</form>") + 7
    );
    var formId = document.getElementById("alipaysubmit");
    formId.submit();
  },
   created(){
       const loading = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
  }
};
</script>

<style scoped lang="less">

</style>

  

