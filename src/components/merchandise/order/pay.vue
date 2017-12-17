<template>
    <div>
      <!-- 银联支付 -->
      <div class="UnionHtml"></div>

        
    </div>

</template>

<script>
export default {
  name: "Unionpay",
  data() {
    return {};
  },
  mounted() {
    // 银联支付
    var UnionData = sessionStorage.getItem("Unionpay");
    var UnionHtml = document.getElementsByClassName("UnionHtml")[0];
    UnionHtml.innerHTML = UnionData.substring(
      UnionData.indexOf("<form"),
      UnionData.indexOf("</form>") + 7
    );
    var formId = document.getElementById("pay_form");
    formId.submit();

    
  }
};
</script>

<style scoped lang="less">

</style>

  

