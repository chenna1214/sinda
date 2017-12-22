<template>
  <div>
    <!-- 去评价 -->
    <!-- 头部 -->
    <div class="to-head">
      <div>评价</div>
    </div>
    <!-- 主体 -->
    <div class="to-part">
      <!-- 服务单号 -->
      <div class="to-num">
        <div>服务单号：B1823</div>
        <div>购买内容：test</div>
        <div>购买时间：2016-01-01 02:12:21</div>
      </div>
      <!-- 评价 -->
      <div class="to-eva">
        <div style="font-size: 13px;">评价：</div>
        <div>
          <input type="radio" name="" id="">好评
        </div>
        <div>
          <input type="radio" name="" id="">中评
        </div>
        <div>
          <input type="radio" name="" id="">差评
        </div>
      </div>
      <!-- 评分 -->
      <div class="to-grade">
        <div>评分：</div>
        <div class="to-star">
          <span @click="star(0)" :class="index>=0?'spanstar':''"></span>
          <span @click="star(1)" :class="index>=1?'spanstar':''"></span>
          <span @click="star(2)" :class="index>=2?'spanstar':''"></span>
          <span @click="star(3)" :class="index>=3?'spanstar':''"></span>
          <span @click="star(4)" :class="index>=4?'spanstar':''"></span>
        </div>
      </div>
      <!-- 感受 -->
      <div class="to-feel">
        <div>感受：</div>
        <div>
          <textarea name="" id="" cols="80" rows="15"></textarea>
        </div>
      </div>
      <!-- 提交 -->
      <router-link tag="div" :to="{path: '/merchandise/membercenter/userevalua'}" class="to-submit">
        <input type="submit" value="提交" @click="mit">
      </router-link>
    </div>
   </div>
</template>

<script>
export default {
  name: 'toevaluate',
  data () {
    return {
      index: -1,
    }
  },
  methods: {
    star: function (index) {
      this.index = index;
    },
    // 提交评价
    // mit: function () {

    // }
  }
}
</script>

<style scoped lang='less'>
  // 头部
  .to-head{
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #e9e9e9;
    >div{
      width: 13%;
      color: #52a3da;
      font-size: 18px;
      line-height: 40px;
      text-align: center;
      margin-left: 3%;
      border-bottom: 2px solid #2693d4;
    }
  }
  // 主体
  .to-part{
    width: 94%;
    margin: 0 auto;
    >div{
      margin-top: 4%;
    }
    // 服务单号
    .to-num{
      display: flex;
      >div{
        width: 25%;
        font-size: 13px;
        line-height: 30px;
        &:nth-child(3){
          width: 40%;
        }
      }
    }
    // 评价
    .to-eva{
      display: flex;
      >div{
        width: 8%;
      }
    }
    // 评分
    .to-grade{
      display: flex;
      >div{
        font-size: 13px;
        line-height: 32px;
        &:nth-child(1){
          width: 8%;
        }
      }
      .to-star{
        display: flex;
        span{
          width: 32px;
          height: 32px;
          display: block;
          background: url(/src/components/images/companyIdstry/m_xbt.png) no-repeat -63px 0;
        }
        .spanstar{
          width: 32px;
          height: 32px;
          display: block;
          background: url(/src/components/images/companyIdstry/m_xbt.png) no-repeat -63px -36px;
        }
      }
    }
    // 感受
    .to-feel{
      display: flex;
      >div{
        width: 8%;
        font-size: 13px;
        line-height: 32px;
        &:nth-child(2){
          width: 67%;
          textarea{
            width: 100%;
          }
        }
      }
    }
    // 提交
    .to-submit{
      width: 17%;
      margin-top: 3%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
      input{
        width: 100%;
        height: 40px;
        color: #fff;
        background-color: #2693d4;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
</style>
