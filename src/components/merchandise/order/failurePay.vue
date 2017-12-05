<!-- 支付失败页面 -->

<template>
    <div class="defeated">
        <div class="order-header">
            <a href="#" class="home">首页/</a>
            <a href="#" class="pay">支付</a>
        </div>
        <div class="order-green">
            <p>支付失败</p>
            <!-- 横线 -->
            <div></div>
        </div>
        <div class="failBody">
            <!-- 紫色的图片 -->
            <div class="violet"></div>
            <div>
                <p class="headings">支付失败！</p>
                <!-- 横线 -->
                <div class="line"></div>
                <div class="skip">
                    <p class="repetition">支付未成功：让我们再试一次吧！</p>
                    <a href="javascript:void(0)"><p>返回支付页</p></a>
                </div>
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
        >.violet{
            margin: 51px 72px 52px 138px;
            background-image: url("../pc_images/code.png");
            background-position: -312px -1649px;
            height: 200px;
            width: 185px;
        }
        >div{
            .headings{
                color: #4eb5ba;
                font-size: 29px;
                padding-top: 70px;
                padding-bottom: 70px;
            }
            .line{
                background: #ccc;
                width: 750px;
                height: 1px;
            }
            .skip{
                display: flex;
                .repetition{
                    font-size: 18px;
                    margin-top: 11px;
                }
                >a{
                    text-decoration: none;
                    color: #4eb5ba;
                    >p{
                        border: 1px solid #4eb5ba;
                        padding: 1px 8px;
                        border-radius: 4px;
                        margin-top: 11px;
                    }
                }
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