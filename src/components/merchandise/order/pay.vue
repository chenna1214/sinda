<template>
    <div>
      <!-- 银联支付 -->
      <div class="UnionHtml" v-loading.fullscreen.lock="fullscreenLoading"></div>

        
    </div>

</template>

<script>

export default {

  name: "Unionpay",
  data() {
    return {
      fullscreenLoading:true
    };
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
  },
  created(){
       const loading = this.$loading({
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

  

