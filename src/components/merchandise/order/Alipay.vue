<template>
    <div>
      <!-- 支付宝支付 -->
      <div class="Alipay"></div>
        
    </div>

</template>

<script>
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
    console.log('支付宝', Alipay.innerHTML)
    
    
    
  }
};
</script>

<style scoped lang="less">

</style>

  

