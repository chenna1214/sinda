<template>
    <div>
        <div class="pccopny-r-wrap">
            <ul class="pccopny-rintr">
              <li class="pccopny-rel1">
                <div class="pccopny-relim1"></div>
                <p class="pccopny-r-tit">平台担保</p>
              </li>
              <li class="pccopny-rel2">
                <div class="pccopny-relim2"></div>
                <p class="pccopny-r-tit">优质服务</p>
              </li>
              <li class="pccopny-rel3">
                <div class="pccopny-relim3"></div>
                <p class="pccopny-r-tit">过程监督</p>
              </li>
              <li class="pccopny-rel4">
                <div class="pccopny-relim4"></div>
                <p class="pccopny-r-tit">增值服务</p>
              </li>
            </ul>
          </div>
    </div>
</template>

<script>
export default {
    name:'company'
};
</script>

<style scoped lang="less">
.pccopny-r-wrap {
  padding-left: 12px;
  .pccopny-rintr {
    max-width: 170px;
    padding: 0 37px 0 28px;
    border: 1px solid #ccc;
    li {
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      height: 148px;
      div {
        margin: 11px auto 13px;
        width: 98px;
        height: 98px;
      }
      p {
        font-size: 17px;
        color: #000;
        line-height: 26px;
        text-align: center;
      }
    }
    .pccopny-relim1 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -8px 0;
    }
    .pccopny-relim2 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -8px -113px;
    }
    .pccopny-relim3 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -8px -226px;
    }
    .pccopny-relim4 {
      background: url(../../images/companyIdstry/cpnyIndus.png) -7px -341px;
    }
    .pccopny-rel4 {
      border: 0;
    }
  }
}
</style>



