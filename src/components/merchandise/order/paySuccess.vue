<!-- 支付成功页面 -->

<template>
    <div class="defeated">
        <div class="order-header">
            <a href="#" class="home">首页/</a>
            <a href="#" class="pay">支付</a>
        </div>
        <div class="order-green">
            <p>支付成功</p>
            <!-- 横线 -->
            <div></div>
        </div>
        <div class="failBody">
            <!-- 紫色的图片 -->
            <div class="yellow"></div>
            <div>
                <p class="headings">支付成功！</p>
                <p class="thank">感谢您的购买！</p>
                <!-- 横线 -->
                <div class="nowrap">
                    <p>我们将尽快确认您的</p>
                    <div></div>
                    <p>付款信息</p>
                </div>
                <div class="line"></div>
                <div class="relation">
                    <p>如有问题，请联系客服：</p>
                    <p>010-83421842</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'failurePay',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang='less'>
    .defeated{
        width: 1200px;
        margin: 0 auto;
        .order-header{
                font-size:15px;
                padding-top: 10px;
            .home{
                color: gray;
                text-decoration: none;
            }
            .pay{
                color: #ccc;
                text-decoration: none;                
            }
        }
    }
    .order-green{
        >p{
            font-size: 18px;
            color: #4eb5ba;
            padding-top: 25px;
            padding-bottom: 10px;            
        }
        >div{
            width: 1200px;
            height: 1px;
            background: #dfdfdc;
        }
    }
    .failBody{
        width: 1200px;
        height: 303px;
        background: #f7f7f7;
        margin-top: 10px;
        margin-bottom: 189px;
        display:flex;
        >.yellow{
            margin: 51px 72px 52px 138px;
            background-image: url("../pc_images/code.png");
            background-position: -6px -1641px;
            height: 207px;
            width: 208px;
        }
        >div{
            .headings{
                color: #4eb5ba;
                font-size: 29px;
                padding-top: 70px;
                padding-bottom: 10px;
            }
            .thank{
                font-size: 29px;
            }
            .nowrap{
                display: flex;
                color: #666c6e;
                font-size: 16px;
                margin-bottom: 13px;
            }
            .line{
                background: #ccc;
                width: 750px;
                height: 1px;
            }
            .relation{
                display: flex;
                p:nth-child(1){
                    font-size: 12px;
                    color: #767474;
                    margin-top: 20px;
                }
                p:nth-child(2){
                    font-size: 17px;
                    font-weight:bold;
                    margin-top: 18px;
                }
            }
        }
    }
</style>