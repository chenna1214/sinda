<template>
  <div>
    <!-- 用户评价 -->
    <!-- 头部 -->
    <div class="use-head">
      <div>我的评价</div>
    </div>
    <!-- 我的评价-身体 -->
    <div class="use-body">
      <!-- 评价内容 -->
      <div class="use-content">
        <!-- 未评价，已评价 -->
        <div class="usecon-top">
          <div class="use-noeva" @click="useno" :class="nostyle">
            <div>未评价</div>
            <span v-show="nospan"></span>
          </div>
          <div class="use-haveeva" @click="usehave" :class="havestyle">
            <div>已评价</div>
            <span v-show="havespan"></span>
          </div>
        </div>
        <!-- 主体 -->
        <div class="usecon-main">
          <!-- 未评价 -->
          <div v-show="nospan">
            <div class="not-usemain">
              <!-- 公司 -->
              <div class="not-company">
                <div class="notcom-img">
                  <img src="../pc_images/pc_logo.png" alt="">
                </div>
                <div>
                  <div class="notcom-name">信达北京服务中心</div>
                  <div>
                    <div>服务单号：</div>
                    <div style="color: #ff4b4b;">B1823</div>
                  </div>
                  <div>
                    <div>购买内容：</div>
                    <div>test</div>
                  </div>
                </div>
              </div>
              <!-- 时间 -->
              <div class="not-time">
                <div>购买时间：</div>
                <div>2016-01-01 02:12:21</div>
              </div>
              <!-- 去评价 -->
              <router-link class="toeva" tag="div" :to="{path: '/merchandise/membercenter/userevalua/toevaluate'}">去评价</router-link>
            </div>
          </div>
          <!-- 已评价 -->
          <div v-show="havespan">
            <div class="have-usemain">
              <!-- 公司 -->
              <div class="have-com">
                <div class="havecom-img">
                  <img src="../pc_images/pc_logo.png" alt="">
                </div>
                <div>
                  <div class="havename">薪客北京服务中心</div>
                  <div>
                    <div>服务单号：</div>
                    <div style="color: #ff4b4b;">B162</div>
                  </div>
                  <div>
                    <div>购买内容：</div>
                    <div>test</div>
                  </div>
                </div>
              </div>
              <!-- 时间 -->
              <div class="have-time">
                <div>购买时间：</div>
                <div>2015-03-06 16:18:35</div>
              </div>
              <!-- 已评价 -->
              <div class="haveeva">已评价</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页数 -->
    <div class="use-page">
      <div>上一页</div>
      <div style="color: #2494d4;border-color: #2494d4;width: 3%;">1</div>
      <div>下一页</div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'userevalua',
  created () {
    // 用户评价：
    this.ajax.post ('/xinda-api/service/judge/grid',
    this.qs.stringify({
      
      // start: 0,
      // limit: 6,
      // status: 2,
    })).then (function (data) {
      console.log(data.data)
    });
  },
  data () {
    return {
      nostyle: 'evatrans',
      havestyle: 'eva',
      nospan: true,
      havespan: false,
    }
  },
  methods:{
    useno: function () {
      this.nostyle = 'evatrans';
      this.havestyle = 'eva';
      this.havespan = false;
      this.nospan = true;
    },
    usehave: function () {
      this.nostyle = 'eva';
      this.havestyle = 'evatrans';
      this.havespan = true;
      this.nospan = false;
    }
  }
}
</script>

<style scoped lang='less'>
  .eva{
    background-color: #f7f7f7;
    >div{
      color: #3e3e3e;
    }
  }
  .evatrans{
    background-color: #2693d4;
    >div{
      color: #fff;
    }
  }
  // 用户评价头部
  .use-head{
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
  // 我的评价--身体
  .use-body{
    width: 100%;
    border: 1px solid #ccc;
    margin-top: 3%;
    // 评价内容
    .use-content{
      width: 100%;
      // 未评价，已评价
      .usecon-top{
        width: 100%;
        border-bottom: 1px solid #ccc;
        background-color: #f7f7f7;
        display: flex;
        >div{
          width: 13%;
          font-size: 14px;
          line-height: 41px;
          color: #3e3e3e;
          text-align: center;
          cursor: pointer;
          >span{
            width: 0px;
            height: 0px;
            display: inline-block;
            border-left: 7px solid transparent;
            border-top: 7px solid #2693d4;
            border-bottom: 7px solid transparent;
            border-right: 7px solid transparent;
            position: absolute;
          }
        }
      }
      // 主体
      .usecon-main{
        width: 100%;
        >div{
          // 未评价
          .not-usemain{
            margin-top: 2%;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;
            // 公司
            .not-company{
              width: 35%;
              margin-bottom: 2%;
              display: flex;
              >div{
                margin-left: 2%;
                >div{
                  font-size: 14px;
                  color: #404040;
                  line-height: 36px;
                  display: flex;
                }
                .notcom-name{
                  font-size: 16px;
                  font-weight: bold;
                  line-height: 41px;
                }
              }
              .notcom-img{
                width: 110px;
                height: 110px;
                border: 1px solid #ccc;
                img{
                  width: 70%;
                  height: 70%;
                  display: block;
                  margin: 0 auto;
                  margin-top: 15%;
                }
              }
            }
            // 时间
            .not-time{
              width: 50%;
              font-size: 14px;
              color: #404040;
              display: flex;
              align-items: center;
              >div{
                text-align: center;
              }
            }
            // 去评价
            .toeva{
              width: 10%;
              color: #5caedf;
              height: 35px;
              line-height: 35px;
              text-align: center;
              border: 1px solid #2693d4;
              border-radius: 6px;
              cursor: pointer;
            }
          }
          // 已评价
          .have-usemain{
            margin-top: 2%;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;
            // 公司
            .have-com{
              width: 35%;
              margin-bottom: 2%;
              display: flex;
              >div{
                margin-left: 2%;
                >div{
                  font-size: 14px;
                  color: #404040;
                  line-height: 36px;
                  display: flex;
                }
                .havename{
                  font-size: 16px;
                  font-weight: bold;
                  line-height: 41px;
                }
              }
              .havecom-img{
                width: 110px;
                height: 110px;
                border: 1px solid #ccc;
                img{
                  width: 70%;
                  height: 70%;
                  display: block;
                  margin: 0 auto;
                  margin-top: 15%;
                }
              }
            }
            // 时间
            .have-time{
              width: 50%;
              font-size: 14px;
              color: #404040;
              display: flex;
              align-items: center;
              >div{
                text-align: center;
              }
            }
            // 已评价
            .haveeva{
              width: 10%;
              color: #fff;
              height: 35px;
              line-height: 35px;
              text-align: center;
              background-color: #ccc;
              border-radius: 6px;
            }
          }
        }
      }
    }
  }
  // 页数
  .use-page{
    width: 30%;
    margin: 0 auto;
    margin-top: 4%;
    margin-bottom: 4%;
    display: flex;
    justify-content: space-around;
    >div{
      width: 19%;
      border: 1px solid #ccc;
      padding: 3% 6% 3% 6%;
      color: #ccc;
    }
  }
</style>
