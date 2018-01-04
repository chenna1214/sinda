<template>
  <div>
    <!-- 商品详情页 -->
    <div class="prodetail hidden-xs-only" >
      <!-- 商品详情页：首页/财税服务 -->
      <div class="pro-top">
        <p>首页 / 财税服务</p>
      </div>
      <!-- 商品详情 -->
      <div class="pro-parciaular" :key="goods.id">
        <!-- 左边 -->
        <div class="par-img">
          <img :src="imgCreatedUrl+goods.img" alt="">
        </div>
        <!-- 中间 -->
        <div class="par-infor">
          <div class="parinf-acting">{{goods.servicename}}</div>
          <div class="parinf-serve">{{goods.info}}</div>
          <div class="parinf-price">
            <div>市场价： <del>￥{{goods.marketprice}}</del></div>
            <div class="parpri-price">价  格： <p>￥{{goods.price*buynum}}元</p></div>
          </div>
          <!-- 类型 -->
          <div class="parinf-mold">
            <div>类型：</div>
            <div class="parinf-chose">
              <div>{{goods.servicename}}</div>
            </div>
          </div>
          <!-- 地址 -->
          <div class="parinf-address">
            <div>地区：</div>
            <div class="parinf-detailed">{{goods.regionText}}</div>
          </div>
          <!-- 购买数量 -->
          <div class="parinf-num">
            购买数量：<input type="number" @change="addsubtract" v-model="buynum">
          </div>
          <!-- 立即购买，加入购物车 -->
          <div class="parinf-btn">
            <!-- <router-link tag="button" :to="{path: '/merchandise/shoppingtrolley'}" class="paynow">立即购买</router-link> -->
            <a href='#/merchandise/shoppingtrolley' class="paynow" @click="join">立即购买</a>
            <button @click="join">加入购物车</button>
          </div>
        </div>
        <!-- 右边 -->
        <div class="par-contact">
          <h1>顶级服务商</h1>
          <p>北京信达服务中心</p>
          <div>
            联系： <button class="parcon-btn" @click="refer">马上咨询</button>
          </div>
          <div class="parcon-div" @click="toShophp((goods.provider).id)">查看服务商</div>
        </div>
      </div>
      <!-- 广告 -->
      <div class="pro-adver">
        <img src="../pc_images/pc_detail_adver.png" alt="">
      </div>
      <!-- 服务内容，商品评价 -->
      <div class="pro-evaluate">
        <!-- 头 -->
        <div class="eva-top">
          <div class="evatop-one" v-on:click="fuwu">服务内容<!-- <span></span> --></div>
          <div class="evatop-two" v-on:click="shangpin">商品评价</div>
        </div>
        <!-- 身体 -->
        <div class="eva-body">
          <!-- 服务内容 -->
          <div class="eva-serve" v-html="goods.content"></div>
          <!-- 商品评价 -->
          <div class="eva-app" style="display: none;">
            <!-- 上 -->
            <div class="app-percent">
              <div class="per-left">
                <div class="per-good">
                  <div>0%</div>
                  <p>好评</p>
                </div>
                <div class="per-three">
                  <div><p>好评（0%）</p><div></div></div>
                  <div><p>中评（0%）</p><div></div></div>
                  <div><p>差评（0%）</p><div></div></div>
                </div>
              </div>
              <div class="per-right">
                <div>客户印象</div>
                <div>暂无已添加的印象标签</div>
              </div>            
            </div>
            <!-- 中 -->
            <div class="app-fourapp" :key="proevas.id">
              <div style="background-color: #2693d4;color: #fff;">全部评价（{{proevas.goodNum+proevas.midNum+proevas.badNum}}）</div>
              <div class="app-good">好评（{{proevas.goodNum}}）</div>
              <div class="app-middle">中评（{{proevas.midNum}}）</div>
              <div class="app-bad">差评（{{proevas.badNum}}）</div>
            </div>
            <!-- 下 -->
            <div class="app-under">
              <div class="und-top">
                <div>评价</div>
                <div>满意度</div>
                <div>用户</div>
              </div>
              <div class="und-down" :key="evaluates.id">
                <!-- 评价 -->
                <div class="dow-estimate">
                  <div class="dowest-pay">
                    价格包含养老、失业、医疗、工伤、生育、企业、个人缴纳费用1360元/月。
                    服务费为50元/月。（北京市-朝阳区）  2017-04-02
                  </div>
                  <div class="dowest-app">
                    服务很快
                  </div>
                </div>
                <!-- 满意度 -->
                <div class="dow-satisfaction">
                  <div class="dowsat-star"></div>
                  <div class="dowsat-ye">
                    <div class="satye-prev">上一页</div>
                    <div class="satye-one">1</div>
                    <div class="satye-next">下一页</div>
                  </div>
                </div>
                <!-- 用户 -->
                <div class="dow-user"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 点击马上咨询出现 -->
      <div class="pro-consult">
        <!-- 头 -->
        <div class="procon-top">
          <div class="contop-free">免费电话咨询</div>
          <div class="contop-x" @click="close">×</div>
        </div>
        <!-- 身体 -->
        <div class="procon-body">
          <!-- 点之前 -->
          <div class="conbod-one">
            <div class="bodone-line"></div>
            <div class="bodone-pot">
              <div style="color: #57d8c1;border-color: #57d8c1;">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
            <div class="bodone-cha">
              <div>输入手机号码</div>
              <div>您接听来电</div>
              <div>被叫方接听</div>
              <div>咨询结束</div>
            </div>
            <!-- 输入框 -->
            <div class="bodone-input">
              <!-- 手机号码 -->
              <div class="bodinp-tel">
                <input type="text" placeholder="请输入手机号码" @focus="telfocus" @blur="telblur" v-model="telvalue">
                <div class="tel-please" :class="telstyle">请输入11位中国大陆手机号</div>
                <div class="tel-wrong" :class="wrostyle">× 手机号码输入错误</div>
                <div class="tel-nonull" :class="nonstyle">× 手机号码不能为空</div>
              </div>
              <!-- 图形验证码 -->
              <div class="bodinp-piccode">
                <div class="bodinp-graphcode">
                  <input type="text" placeholder="请输入图形验证码" v-model="imgCode" @focus="Zyan" @blur="Cyan">
                </div>
                <div class="bodinp-image" @click="imgReflash">
                  <img :src="bodimg" alt="">
                </div>
                <div class="code-nonull" v-show="yyan">× 验证码不能为空</div>
                <div class="code-wrong" v-show="eyan">× 验证码错误</div>
              </div>
              <!-- 验证码 -->
              <div class="bodinp-code">
                <div class="bodinp-chacode">
                  <input type="text" placeholder="请输入验证码" v-model="smsNumber" @focus="Zduan" @blur="Cduan">
                </div>
                <div class="bodinp-getcode">
                  <button v-show = "show" @click="getCode">获取验证码</button>
                  <span v-show = "!show" class="getgray">重新获取{{count}}s</span>
                </div>
                <div class="cha-nonull" :class="chanons">× 验证码不能为空</div>
                <div class="cha-wrong" :class="chawros">× 验证码错误</div>
              </div>
              <!-- 开始免费咨询 -->
              <div class="bodinp-free">
                <button @click="transfer">开始免费咨询</button>
              </div>
              <!-- 免费 -->
              <div class="bodinp-down">
                本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！
              </div>
            </div>
          </div>
          <!-- 点之后 -->
          <div class="conbod-two">
            <div style="color: #aaa">本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！</div>
            <div style="color: #57d8c1;text-align: center;">正在为您接通电话</div>
            <div style="color: #57d8c1;text-align: center;">请您注意接听来电</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 微信端 -->
    <div class="hidden-sm-and-up" :key="goods.id">
      <!-- 顶部图片及文字 -->
      <div class="wepic">
        <div class="wep-img">
          <img :src="imgCreatedUrl+goods.img" alt="">
        </div>
        <div class="wep-cha">
          <div class="wep-name">{{goods.servicename}}</div>
          <div class="wep-info">{{goods.info}}</div>
        </div>
      </div>
      <!-- 图片下的区域价格 -->
      <div class="wearea">
        <div class="wea-area">区域：{{goods.regionText}}</div>
        <div class="wea-price">
          <div>价格：</div>
          <div class="wea-now">￥{{goods.price*buynum}}.00</div>
          <del class="wea-del">￥{{goods.marketprice}}.00</del>
        </div>
      </div>
      <!-- 服务商家 -->
      <div class="weservice">
        <div class="wes-service">
          <div class="wes-ser">服务商家</div>
          <span></span>
        </div>
        <!-- 具体信息 -->
        <div class="wes-shop">
          <div class="wes-logo">
            <img :src="imgCreatedUrl+goods.providerimg" alt="">
          </div>
          <div class="wes-mes">
            <div class="wes-name">{{goods.name}}</div>
            <div class="wes-credit">
              <div>信誉</div>
              <div class="wes-diamond">
                <div><img src="../pc_images/hdiamond.png" alt=""></div>
                <div><img src="../pc_images/hdiamond.png" alt=""></div>
                <div><img src="../pc_images/hdiamond.png" alt=""></div>
                <div><img src="../pc_images/hdiamond.png" alt=""></div>
                <div><img src="../pc_images/bdiamond.png" alt=""></div>
              </div>
            </div>
            <div class="wes-area">{{goods.regionText}}</div>
            <div class="wes-num">累计服务客户次数：8272</div>
            <router-link tag="div" :to="{path: '/merchandise/shop'}" class="wes-enter">进入店铺</router-link>
          </div>
        </div>
        <!-- 金牌服务商 -->
        <div class="wes-gold">
          <div class="wes-goldpic"></div>
          <div class="wes-goldcha">金牌服务商</div>
        </div>
      </div>
      <!-- 服务介绍 -->
      <div class="weintro">
        <div class="wei-intro">
          <div class="wei-int">服务介绍</div>
          <span></span>
        </div>
        <div class="wei-mes" v-html="goods.content"></div>
      </div>
      <!-- 用户评价 -->
      <div class="weuseva">
        <div class="weu-useva">
          <div class="weu-use">用户评价</div>
          <span></span>
        </div>
        <div class="weu-eva">
          <!-- 可循环部分 -->
          <div class="weu-mes">
            <div class="weu-img">
              <img src="../pc_images/m_people.png" alt="">
            </div>
            <div class="weu-satiseva">
              <div class="weu-satis">
                <div>满意度</div>
                <div class="weu-hstar"><img src="../pc_images/wehstar.png" alt=""></div>
                <div class="weu-hstar"><img src="../pc_images/wehstar.png" alt=""></div>
                <div class="weu-hstar"><img src="../pc_images/wehstar.png" alt=""></div>
                <div class="weu-hstar"><img src="../pc_images/wehstar.png" alt=""></div>
                <div class="weu-bstar"><img src="../pc_images/webstar.png" alt=""></div>
              </div>
              <div class="weu-eva">评价：很好！</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 固定部分 -->
      <div class="wefixed">
        <!-- 联系商家 -->
        <div class="wef-contact"  @click="refers">
          <div class="wef-conimg">
            <img src="../pc_images/m_contact.png" alt="">
          </div>
          <div>联系商家</div>
        </div>
        <!-- 加入购物车 -->
        <div class="wef-join" @click="join">加入购物车</div>
        <!-- 立即购买 -->
        <!-- <router-link tag="div" :to="{path: '/merchandise/shoppingtrolley'}" class="wef-pay" @click="join">立即购买</router-link> -->
        <a href='#/merchandise/shoppingtrolley' class="wef-pay" @click="join">立即购买</a>
      </div>

      <!-- 出现部分 -->
      <div class="joinsucess" v-show="joinsuc">加入成功</div>
      <div class="pro-consult" v-show="wrefer">
        <!-- 头 -->
        <div class="procon-top">
          <div class="contop-free">免费电话咨询</div>
          <div class="contop-x" @click="closes">×</div>
        </div>
        <!-- 身体 -->
        <div class="procon-body">
          <!-- 点之前 -->
          <div class="conbod-one" v-show="before">
            <!-- 免费 -->
            <div class="bodinp-down">
              本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！
            </div>
            <!-- 输入框 -->
            <div class="bodone-input">
              <!-- 手机号码 -->
              <div class="bodinp-tel">
                <input type="text" placeholder="请输入手机号码" @focus="telfocus" @blur="telblur" v-model="telvalue">
                <div class="tel-please" :class="telstyle">请输入11位中国大陆手机号</div>
                <div class="tel-wrong" :class="wrostyle">× 手机号码输入错误</div>
                <div class="tel-nonull" :class="nonstyle">× 手机号码不能为空</div>
              </div>
              <!-- 图形验证码 -->
              <div class="bodinp-piccode">
                <div class="bodinp-graphcode">
                  <input type="text" placeholder="请输入图形验证码" v-model="imgCode" @focus="Zyan" @blur="Cyan">
                </div>
                <div class="bodinp-image" @click="imgReflash">
                  <img :src="bodimg" alt="">
                </div>
                <div class="code-nonull" v-show="yyan">× 验证码不能为空</div>
                <div class="code-wrong" v-show="eyan">× 验证码错误</div>
              </div>
              <!-- 验证码 -->
              <div class="bodinp-code">
                <div class="bodinp-chacode">
                  <input type="text" placeholder="请输入验证码" v-model="smsNumber" @focus="Zduan" @blur="Cduan">
                </div>
                <div class="bodinp-getcode">
                  <button v-show = "show" @click="getCode">验证码</button>
                  <div v-show = "!show" class="getgray">重新获取{{count}}s</div>
                </div>
                <div class="cha-nonull" :class="chanons">× 验证码不能为空</div>
                <div class="cha-wrong" :class="chawros">× 验证码错误</div>
              </div>
              <!-- 开始免费咨询 -->
              <div class="bodinp-free">
                <button @click="transfers">开始免费咨询</button>
              </div>
            </div>
          </div>
          <!-- 点之后 -->
          <div class="conbod-two" v-show="forword">
            <div style="color: #aaa">本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用！</div>
            <div style="color: #57d8c1;text-align: center;">正在为您接通电话</div>
            <div style="color: #57d8c1;text-align: center;">请您注意接听来电</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions} from "vuex"; //显示数据
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css'
  export default {
    name: "productdetail",
    watch:{
      $route:function(){
        this.upData(this.$route.query.id);
      }
    },
    created() {
      this.upData(this.$route.query.id)
      // console.log('window==',document.body.clientWidth)
    },

    data() {
      return {
        imgCreatedUrl,// 图片地址
        lgwindow: true,
        proevas: [],
        evaluates: [],
        goods: [],
        actstyle: 'chose',
        tastyle: 'choses',
        smstyle: 'choses',
        buynum: 1,
        show: true,
        // 手机号
        telstyle: 'chahide',
        wrostyle: 'chahide',
        nonstyle: 'chahide',
        telvalue: '',

        // 图片验证码
        bodimg: "/xinda-api/ajaxAuthcode",
        imgCode: '',
        yyan: false,
        eyan: false,
        // 验证码
        chanons: 'chahide',
        chawros: 'chahide',
        smsNumber: "",
        // 点击获取
        count: "",
        timer: null,
        // 微信-加入购物车
        jData: [],
        joinsuc: false,
        // 微信-联系商家
        wrefer: false,
        before: true,
        forword: false,
      };
    },
    methods: {
      // 微信
      refers: function () {
        this.wrefer = true;
        this.before = true;
        this.forword = false;
      },
      closes: function () {
        this.wrefer = false;
        this.before = false;
        this.forword = false;
      },

      upData(){
        var that = this;
        this.ajax.post('/xinda-api/product/package/detail',
        this.qs.stringify({
          sId: this.$route.query.id,
        })).then(function (data) {
          var good = data.data.data
          that.goods = good;
          that.goods.marketprice = that.goods.product.marketPrice;//市场价
          that.goods.img = that.goods.product.img;//图片
          that.goods.price = that.goods.providerProduct.price;//价格
          that.goods.servicename = that.goods.providerProduct.serviceName;//名字
          that.goods.info= that.goods.providerProduct.serviceInfo;//介绍
          that.goods.content = that.goods.providerProduct.serviceContent;//服务内容
          that.goods.name = that.goods.provider.name;//微信端服务商家
          that.goods.providerimg = that.goods.provider.providerImg;//微信端服务商家图片
          console.log('good ==',good)
        });

         this.ajax.post("/xinda-api/product/judge/detail",
        this.qs.stringify({
          serviceId: this.$route.query.id,
          })).then(function (data) {
          var prodata = data.data.data;
          that.proevas = prodata;
        });
        this.ajax.post('/xinda-api/product/judge/grid',
          this.qs.stringify({
            start:0,
            limit:10,
            serviceId: this.$route.query.id,
            type:1,
            })).then(function (eva) {
              // console.log(eva.data)
        });
    },


      //加入购物车
       ...mapActions(["setNum"]),
       join () {
        // console.log(this.buynum);//购买数量
        var that = this;
        this.setNum();
        this.ajax.post("/xinda-api/cart/add", this.qs.stringify({ id: this.$route.query.id, num: this.buynum }))
        .then(function(data) {
          var jData = data.data;
          console.log(jData.status);
          if (jData.status == 1) {
            that.joinsuc = true;
            setInterval((function(){
              that.joinsuc = false;
            }),1500);
          }
        });
       },

      // 去店铺首页界面
      toShophp (id) {
        this.$router.push({
          path: '/merchandise/pc_shophp',
          query: {id: id}
        });
      },

      fuwu: function() {
        document.querySelector('.eva-serve').style.display = 'block';
        document.querySelector('.evatop-one').style.color = '#fff';
        document.querySelector('.evatop-one').style.backgroundColor = '#2693d4';
        document.querySelector('.eva-app').style.display = 'none';
        document.querySelector('.evatop-two').style.color = '#636363';
        document.querySelector('.evatop-two').style.backgroundColor = '#f7f7f7';
      },
      shangpin: function() {
        document.querySelector('.eva-app').style.display = 'block';
        document.querySelector('.evatop-two').style.color = '#fff';
        document.querySelector('.evatop-two').style.backgroundColor = '#2693d4';
        document.querySelector('.eva-serve').style.display = 'none';
        document.querySelector('.evatop-one').style.color = '#636363';
        document.querySelector('.evatop-one').style.backgroundColor = '#f7f7f7';
      },
      close: function () {
        document.querySelector('.pro-consult').style.display = 'none';
      },
      refer: function () {
        document.querySelector('.pro-consult').style.display = 'block';
        document.querySelector('.conbod-one').style.display = 'block';
        document.querySelector('.conbod-two').style.display = 'none';
      },
      // PC端--开始免费咨询
      transfer: function () {
        // 判断手机号
        if (this.telvalue) {
          //手机号有输入时
          if (!/^1[3|4|5|7|8]\d{9}$/.test(this.telvalue)) {
            //手机号匹配错误
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chashow';
          } else {
            //手机号匹配正确
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chahide';
            // 文字验证码
            var smsNumberStyle = /^[0-9]{6}$/;
            if (this.smsNumber) {//输入框有输入
              this.chanons = 'chahide';
              if (!smsNumberStyle.test(this.smsNumber)) {//不符合正则
                this.chanons = 'chahide';
                this.chawros = 'chashow';
              } else {//符合正则
                this.chanons = 'chahide';
                this.chawros = 'chahide';
                document.querySelector('.conbod-one').style.display = 'none';
                document.querySelector('.conbod-two').style.display = 'block';
              }
            } else {//无输入
              this.chanons = 'chashow';
              this.chawros = 'chahide';
            }
            // 判断验证码
            if (this.imgCode) {
              //验证码有输入时
              //图片验证码匹配
              this.ajax
                .post(
                  "/xinda-api/register/sendsms",
                  this.qs.stringify({
                    cellphone: this.telvalue,
                    smsType: 1,
                    imgCode: this.imgCode
                  })
                )
                .then(data => {
                  console.log(data, data.data.status);
                  if (data.data.status == 1) {
                    //图片验证码输入正确
                    this.get = false;
                    this.getNew = true;
                    this.eyan = false;
                    this.yyan = false;
                    const TIME_COUNT = 60;
                    if (!this.timer) {
                      this.count = TIME_COUNT;
                      this.show = false;
                      this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                          this.count--;
                        } else {
                          this.show = false;
                          clearInterval(this.timer);
                          this.timer = null;
                        }
                      }, 1000);
                    }
                  } else {
                    //图片验证码输入错误
                    console.log(data.data.msg);
                    this.yyan = false;
                    this.eyan = true;
                    this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
                  }
                });
            } else {
              //验证码为空时
              this.yyan = true;
              this.eyan = false;
            }
          }
        } else {
          //手机号为空时
          this.nonstyle = 'chashow';
          this.telstyle = 'chahide';
          this.wrostyle = 'chahide';
        }
      },
      addsubtract: function () {
        var parinfNum = document.querySelector('.parinf-num input').value;
        if(parinfNum <= 0){//变为0太慢了
          console.log(parinfNum=0)
          document.querySelector('.parinf-num input').value = 1;
        }
      },
      // 微信--点击开始免费咨询
      transfers:function () {
        // 判断手机号
        if (this.telvalue) {
          //手机号有输入时
          if (!/^1[3|4|5|7|8]\d{9}$/.test(this.telvalue)) {
            //手机号匹配错误
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chashow';
          } else {
            //手机号匹配正确
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chahide';
            // 文字验证码
            var smsNumberStyle = /^[0-9]{6}$/;
            if (this.smsNumber) {//输入框有输入
              this.chanons = 'chahide';
              if (!smsNumberStyle.test(this.smsNumber)) {//不符合正则
                this.chanons = 'chahide';
                this.chawros = 'chashow';
              } else {//符合正则
                this.chanons = 'chahide';
                this.chawros = 'chahide';
                this.wrefer = true;
                this.before = false;
                this.forword = true; 
              }
            } else {//无输入
              this.chanons = 'chashow';
              this.chawros = 'chahide';
            }
            // 判断验证码
            if (this.imgCode) {
              //验证码有输入时
              //图片验证码匹配
              this.ajax
                .post(
                  "/xinda-api/register/sendsms",
                  this.qs.stringify({
                    cellphone: this.telvalue,
                    smsType: 1,
                    imgCode: this.imgCode
                  })
                )
                .then(data => {
                  console.log(data, data.data.status);
                  if (data.data.status == 1) {
                    //图片验证码输入正确
                    this.get = false;
                    this.getNew = true;
                    this.eyan = false;
                    this.yyan = false;
                    const TIME_COUNT = 60;
                    if (!this.timer) {
                      this.count = TIME_COUNT;
                      this.show = false;
                      this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                          this.count--;
                        } else {
                          this.show = false;
                          clearInterval(this.timer);
                          this.timer = null;
                        }
                      }, 1000);
                    }
                  } else {
                    //图片验证码输入错误
                    console.log(data.data.msg);
                    this.yyan = false;
                    this.eyan = true;
                    this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
                  }
                });
            } else {
              //验证码为空时
              this.yyan = true;
              this.eyan = false;
            }
          }
        } else {
          //手机号为空时
          this.nonstyle = 'chashow';
          this.telstyle = 'chahide';
          this.wrostyle = 'chahide';
        }
      },
      // 手机号码
      telfocus: function (){
        this.telstyle = 'chashow';
        this.nonstyle = 'chahide';
        this.wrostyle = 'chahide';
      },
      telblur: function () {
        if (!this.telvalue) {//未输入手机号码
          this.nonstyle = 'chashow';
          this.telstyle = 'chahide';
          this.wrostyle = 'chahide';
        }else {//手机号码输入
          var telzz = /^1[3|4|5|7|8]\d{9}$/;
          if (!telzz.test(this.telvalue)) {//手机号码不符合正则表达式
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chashow';
          }else {//手机号码符合正则表达式
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chahide';
          }
        }
      },
      // 图片验证码
        //验证码图片点击更换
      imgReflash: function() {
        this.bodimg = this.bodimg + "?t=" + new Date().getTime();
      },
      Zyan: function() {
        this.eyan = false;
        this.yyan = false;
      },
      Cyan: function() {
        this.yyan = false;
        this.eyan = false;
        var imgCodeStyle = /^[A-Za-z0-9]{4}$/;
        if (this.imgCode) {//输入了验证码
          if (!imgCodeStyle.test(this.imgCode)) {//不符合正则
            this.yyan = false;
            this.eyan = true;
          } else {//符合正则
            this.eyan = false;
            this.yyan = false;
          }
        } else {//验证码未输入
          this.yyan = true;
          this.eyan = false;
        }
      },
      // 短信验证码
      Zduan: function() {
        this.eduan = false;
        this.yduan = true;
        this.showYDuan = false;
      },
      Cduan: function() {
        var smsNumberStyle = /^[0-9]{6}$/;
        if (this.smsNumber) {//输入框有输入
          this.chanons = 'chahide';
          if (!smsNumberStyle.test(this.smsNumber)) {//不符合正则
            this.chanons = 'chahide';
            this.chawros = 'chashow';
          } else {//符合正则
            this.chanons = 'chahide';
            this.chawros = 'chahide';
          }
        } else {//无输入
          this.chanons = 'chashow';
          this.chawros = 'chahide';
        }
      },
      //点击获取短信验证码
      getCode: function() {
        // 判断手机号
        if (this.telvalue) {
          //手机号有输入时
          if (!/^1[3|4|5|7|8]\d{9}$/.test(this.telvalue)) {
            //手机号匹配错误
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chashow';
          } else {
            //手机号匹配正确
            this.telstyle = 'chahide';
            this.nonstyle = 'chahide';
            this.wrostyle = 'chahide';
          }
        } else {
          //手机号为空时
          this.nonstyle = 'chashow';
          this.telstyle = 'chahide';
          this.wrostyle = 'chahide';
        }
        // 判断验证码
        if (this.imgCode) {
          //验证码有输入时
          //图片验证码匹配
          this.ajax
            .post(
              "/xinda-api/register/sendsms",
              this.qs.stringify({
                cellphone: this.telvalue,
                smsType: 1,
                imgCode: this.imgCode
              })
            )
            .then(data => {
              console.log(data, data.data.status);
              if (data.data.status == 1) {
                //图片验证码输入正确
                this.get = false;
                this.getNew = true;
                this.eyan = false;
                this.yyan = false;
                const TIME_COUNT = 60;
                if (!this.timer) {
                  this.count = TIME_COUNT;
                  this.show = false;
                  this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                      this.count--;
                    } else {
                      this.show = true;
                      clearInterval(this.timer);
                      this.timer = null;
                    }
                  }, 1000);
                }
              } else {
                //图片验证码输入错误
                console.log(data.data.msg);
                this.yyan = false;
                this.eyan = true;
                this.imgUrl = this.imgUrl + "?t" + new Date().getTime();
              }
            });
        } else {
          //验证码为空时
          this.yyan = true;
          this.eyan = false;
        }
      },
    }
  };
</script>

<style scoped lang='less'>    // 显示隐藏
    .chashow{
      display: block;
    }
    .chahide{
      display: none;
    }
  @media all and (min-width: 768px){
    .chose{
      color: #2693d4;
      border-color: #2693d4;
    }
    button{
      cursor: pointer;
    }
    //  商品详情页：首页/财税服务的样式
    .prodetail {
      width: 78%;
      margin: 0 auto;
      margin-bottom: 2%;
    }
    .pro-top {
      font-size: 14px;
      color: #696969;
      line-height: 27px;
    }
    // 商品详情的样式
    .pro-parciaular {
      width: 100%;
      margin-top: 2%;
      margin-bottom: 7%;
      display: flex;
      .par-img {
        width: 30%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      // 中间
      .par-infor {
        width: 44%;
        margin-left: 2%;
        .parinf-acting{
          font-size: 22px;
          font-weight: bold;
        }
        .parinf-serve{
          font-size: 14px;
          line-height: 30px;
          color: #555;
        }
        .parinf-price{
          width: 100%;
          height: 18%;
          margin-top: 2%;
          background-color: #eee;
          >div{
            width: 96%;
            height: 50%;   
            font-size: 18px;
            color: #aaa; 
            margin: 0 auto;      
          }
          .parpri-price{
            display: flex;
            >p{
              color: #f00;
              font-weight: bold;
            }
          }
        }
        // 类型
        .parinf-mold{
          width: 96%;
          font-size: 14px;
          margin: 0 auto;
          margin-top: 3%;
          display: flex;
          .parinf-chose{
            margin-left: 7%;
            >div{
              color: #2693d4;
              line-height: 35px;
              border: 1px solid #2693d4;
              text-align: center;
              margin-bottom: 2%;
            }
          }
        }
        // 地址
        .parinf-address{
          width: 96%;
          margin: 0 auto;
          font-size: 14px;
          display: flex;
          >div{
            line-height: 30px;
          }
          .parinf-detailed{
            margin-left: 7%;
          }
        }
        // 购买数量
        .parinf-num{
          width: 96%;
          margin: 0 auto;
          font-size: 14px;
          >input{
            height: 28px;
            margin-left: 2%;
          }
        }
        // 立即购买，加入购物车
        .parinf-btn{
          margin-top: 3%;
          >button{
            width: 25%;
            line-height: 38px;
            margin-left: 15%;
            border: 1px solid #ccc;
            border-radius: 6px;
            background-color: #fff;
          }
          .paynow{
            width: 25%;
            line-height: 38px;
            border-radius: 6px;
            text-align: center;
            display: inline-block;
            text-decoration: none;
            color: #fff;
            border-color: #2693d4;
            background-color: #2693d4;
          }
        }
      }
      // 右边
      .par-contact {
        width: 20%;
        height: 50%;
        margin-left: 4%;
        border: 1px solid #2693d4;
        h1 {
          text-align: center;
          line-height: 46px;
        }
        p {
          color: #666;
          text-align: center;
          line-height: 35px;
        }
        div {
          width: 73%;
          margin-left: 20%;
          button {
            width: 50%;
            height: 34px;
            color: #75b2df;
            border: 1px solid #2693d4;
            background-color: #fff;
            border-radius: 10px;
            margin-left: 8%;
          }
        }
        .parcon-div{
          width: 54%;
          line-height: 40px;
          text-align: center;
          background-color: #2693d4;
          color: #fff;
          font-size: 17px;
          border-radius: 3px;
          margin: 0 auto;
          margin-top: 8%;
          margin-bottom: 8%;
          cursor: pointer;
        }
      }
    }
    // 广告的样式
    .pro-adver {
      width: 100%;
      height: 5%;
      margin-top: 4%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // 服务内容和商品评价的样式
    .pro-evaluate {
      width: 100%;
      height: 68%;
      border: 1px solid #ccc;
      margin-top: 1%;
      .eva-top {
        width: 100%;
        background-color: #f7f7f7;
        border-bottom: 1px solid #ccc;
        display: flex;
        div {
          width: 12%;
          color: #636363;
          text-align: center;
          line-height: 44px;
          cursor: pointer;
        }
        .evatop-one {
          background-color: #2693d4;
          color: #fff;
          // span{
          //   width: 0;
          //   height: 0;
          //   border-left: 6px solid transparent;
          //   border-top: 6px solid #2693d4;
          //   border-right: 6px solid transparent;
          //   border-bottom: 6px solid transparent;
          // }
        }
      }
      // 服务内容
      .eva-serve {
        width: 80%;
        margin-bottom: 10%;
        margin-left: 3%;
        margin-top: 2%;
        text-indent: 2em;
        color: #686868;
        line-height: 40px;
      }
      // 上
      .app-percent{
        width: 90%;
        height: 20%;
        padding: 2% 0 2% 2%;
        display: flex;
        >div{
          display: flex;
        }
        .per-left{
          width: 60%;
          border-right: 1px solid #bbb;
          .per-good{
            display: flex;
            color: #2693d4;
            align-items: flex-end;
            div{
              font-size: 76px;
              font-weight: bold;
            }
        }

        }
        .per-three{
          width: 55%;
          >div{
            width: 83%;
            height: 20px;
            margin: 2% 0 4% 0;
            padding: 0 0 0 10%;
            >p{
              width: 33%;
            }
            >div{
              width: 63%;
              height: 20px;
              background-color: #ccc;
              margin-left: 37%;
              margin-top: -7%;
            }
          }
        }
        .per-right{
          width: 22%;
          height: 20%;
          margin-top: 2%;
          margin-left: 3%;
          >div{
            height: 25px;
            &:nth-child(2){
              margin-top: 18%;
              margin-left: -26%;
            }
          }
        }
      }
      // 中
      .app-fourapp{
        width: 100%;
        height: 20%;
        background-color: #f7f7f7;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        display: flex;
        >div{
          width: 15%;
          line-height: 50px;
          text-align: center;
          &:hover{
            background-color: #2693d4;
            color: #fff;
          }
        }
      }
      // 下
      .app-under{
        width: 96%;
        margin: 0 auto;
        margin-top: 1%;
        margin-bottom: 5%;
        border-left: 1px solid #ccc;
        .und-top{
          width: 98%;
          margin: 0 auto;
          border-bottom: 1px solid #ccc;
          display: flex;
          justify-content: space-around;
          >div{
            height: 30px;
          }
        }
        .und-down{
          width: 98%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          >div{
            width: 30%;
          }
          .dow-estimate{
            margin-top: 2%;
            .dowest-pay{
              line-height: 30px;
              font-size: 13px;
              color: #ccc;
            }
            .dowest-app{
              line-height: 40px;
            }
          }
          .dow-satisfaction{
            .dowsat-star{
              width: 19%;
              height: 11px;
              background: url(../pc_images/code.png) -559px -1130px;
              margin-left: 18%;
              margin-top: 14%;
            }
            .dowsat-ye{
              display: flex;
              width: 50%;
              margin-top: 24%;
              .satye-prev{
                width: 42%;
                height: 31px;
                text-align: center;
                line-height: 31px;
                border: 1px solid #ccc;
              }
              .satye-one{
                width: 21%;
                border: 1px solid #2693d4;
                color: #2693d4;
                text-align: center;
                line-height: 30px;
                margin: 0 4% 0 4%;
              }
              .satye-next{
                width: 42%;
                height: 31px;
                text-align: center;
                line-height: 31px;
                border: 1px solid #ccc;
              }
            }
          }
          .dow-user{
            width: 16%;
            height: 98px;
            background: url(../pc_images/login_logo.png) no-repeat 0 -113px ;
            margin-top: 4%;
          }
        }
      }
    }
    // 点击马上咨询
    .pro-consult{
      width: 48%;
      border-bottom: 1px solid #aaa;
      box-shadow: 2px 1px 2px 1px #aaa;
      background-color: #fff;
      left: 35%;
      top: 16%;
      z-index: 25;
      overflow: hidden;
      position: fixed;
      display: none;
      // 头
      .procon-top{
        width: 100%;
        height: 10%;
        display: flex;
        background-color: #eee;
        justify-content: space-between;
        .contop-free{
          width: 20%;
          height: 100%;
          line-height: 40px;
          text-align: center;
        }
        .contop-x{
          width: 5%;
          font-size: 24px;
          text-align: center;
          line-height: 40px;
          background-color: #aaa;
          cursor: pointer;
        }
      }
      // 身体
      .procon-body{
        width: 100%;
        height: 80%;
        // 一
        .conbod-one{
          width: 100%;
          .bodone-line{
            width: 80%;
            height: 5px;
            margin: 0 auto;
            margin-top: 5%;
            background-color: #ddd;
          }
          .bodone-pot{
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            margin-top: -1.5%;
            >div{
              width: 3%;
              font-size: 14px;
              color: #777;
              text-align: center;
              border: 1px solid #777;
              border-radius: 50%;
              background-color: #fff;
            }
          }
          .bodone-cha{
            width: 87%;
            display: flex;
            justify-content: space-between;
            margin-left: 5%;
            margin-top: 1%;
          }
          .bodone-input{
            width:76%;
            margin: 0 auto;
            margin-top: 3%;
            margin-bottom: 5%;
            >div{
              width: 86%;
              margin: 0 auto;
              margin-top: 3%;
            }
            // 手机号码
            .bodinp-tel{
              font-size: 13px;
              display: flex;
              input{
                width: 62%;
                height: 34px;
                border: 1px solid #aaa;
                border-radius: 4px;
              }
              .tel-please{
                color: #777;
                margin-left: 5%;
                // line-height: 36px;
              }
              .tel-wrong{
                color: #f00;
                margin-left: 5%;
                line-height: 36px;
              }
              .tel-nonull{
                color: #f00;
                margin-left: 5%;
                line-height: 36px;
              }
            }
            // 图形验证码
            .bodinp-piccode{
              font-size: 13px;
              color: #777;
              display: flex;
              .bodinp-graphcode{
                width: 40%;
                height: 34px;
                input{
                  width: 100%;
                  height: 100%;
                  border: 1px solid #aaa;
                  border-radius: 4px;
                }
              }
              .bodinp-image{
                width: 20%;
                height: 34px;
                margin-left: 2%;
                border: 1px solid #999;
                border-radius: 4px;
                img{
                  width: 100%;
                  height: 100%;
                  border-radius: 4px;
                }
              }
              .code-nonull{
                color: #f00;
                line-height: 34px;
                margin-left: 5%;
              }
              .code-wrong{
                color: #f00;
                line-height: 34px;
                margin-left: 5%;
              }
            }
            // 验证码
            .bodinp-code{
              font-size: 13px;
              display: flex;
              .bodinp-chacode{
                width: 40%;
                height: 34px;
                input{
                  width: 100%;
                  height: 100%;
                  border: 1px solid #aaa;
                  border-radius: 4px;
                }
              }
              .bodinp-getcode{
                width: 20%;
                height: 34px;
                margin-left: 2%;
                button{
                  width: 100%;
                  height: 100%;
                  border: none;
                  border-radius: 4px;
                }
                .getgray{
                  text-align: center;
                  line-height: 34px;
                  color: #6e6d6d;
                }
              }
              .cha-nonull{
                color: #f00;
                line-height: 34px;
                margin-left: 5%;
              }
              .cha-wrong{
                color: #f00;
                line-height: 34px;
                margin-left: 5%;
              }
            }
            // 开始免费咨询
            .bodinp-free{
              button{
                width: 100%;
                height: 34px;
                color: #fff;
                font-size: 16px;
                border: none;
                background-color: #57d8c1;
                border-radius: 4px;
              }
            }
            .bodinp-down{
              width: 80%;
              font-size: 13px;
              color: #888;
              text-align: center;
            }
          }
        }
        // 二
        .conbod-two{
          width: 80%;
          margin: 0 auto;
          display: none;
          >div{
            font-size: 24px;
            line-height: 40px;
            margin-bottom: 2%;
            &:nth-child(1){
              margin-top: 7%;
            }
            &:nth-child(3){
              margin-bottom: 22%;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 767px){
    span{
      width: 0;
      height: 0;
      display: inline-block;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #2693d4;
      border-bottom: 4px solid transparent;
      transform: rotate(180deg);
      // margin-top: -0.08rem;
      margin-left: 0.8rem;
      position: absolute;
    }
    // 顶部图片及文字
    .wepic{
      width: 100%;
      height: 4.8rem;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      .wep-img{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;  
        }
      }
      .wep-cha{
        width: 100%;
        height: 1.2rem;
        color: #fff;
        margin-top: 3.6rem;
        background-color: rgba(128,120,108,.5);
        position: absolute;
        >div{
          margin-left: 0.3rem;
        }
        .wep-name{
          font-size: 0.3rem;
          line-height: 0.7rem;
          font-weight: bold;
        }
        .wep-info{
          font-size: 0.24rem;
          line-height: 0.48rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    // 图片下的区域价格
    .wearea{
      width: 100%;
      border-bottom: 5px solid #ebebeb;
      >div{
        font-size: 0.25rem;
        margin-left: 0.3rem;
        line-height: 0.64rem;
        display: flex;
      }
      .wea-area{
        border-bottom: 1px solid #c5c5c5;
      }
      .wea-price{
        .wea-now{
          color: #f00;
          font-size: 0.28rem;
          font-weight: bold;
        }
        .wea-del{
          font-size: 0.2rem;
          margin-left: 0.32rem;
        }
      }
    }
    // 服务商家
    .weservice{
      width: 100%;
      border-bottom: 5px solid #ebebeb;
      .wes-service{
        width: 100%;
        font-size: 0.28rem;
        border-bottom: 2px solid #2693d4;
        .wes-ser{
          width: 1.72rem;
          text-align: center;
          line-height: 0.52rem;
          margin-top: 0.2rem;
        }
      }
      // 具体信息
      .wes-shop{
        width: 100%;
        display: flex;
        .wes-logo{
          // background: 
          width: 1.24rem;
          height: 0.56rem;
          margin-left: 0.78rem;
          margin-top: 0.86rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .wes-mes{
          font-size: 0.14rem;
          color: #101010;
          line-height: 0.3rem;
          margin-left: 0.44rem;
          margin-top: 0.35rem;
          >div{
            margin-top: 0.2rem;
          }
          .wes-credit{
            display: flex;
            .wes-diamond{
              display: flex;
              >div{
                height: 0.3rem;
                margin-left: 0.04rem;
                display: inline-block;
              }
            }
          }
          .wes-enter{
            width: 102px;
            text-align: center;
            line-height: 33px;
            border-radius: 4px;
            color: #fff;
            background-color: #ff591b;
          }
        }
      }
      // 金牌服务商
      .wes-gold{
        width: 3rem;
        font-size: 0.14rem;
        line-height: 0.4rem;
        margin: 0.1rem 0rem 0.17rem 0.36rem;
        display: flex;
        .wes-goldpic{
          width: 40px;
          height: 40px;
          display: block;
          background: url("/static/images/m_xbt.png") no-repeat -66px -75px;
        }
        .wes-goldcha{
          margin-left: 0.12rem;
        }
      }
    }
    // 服务介绍
    .weintro{
      width: 100%;
      border-bottom: 5px solid #ebebeb;
      .wei-intro{
        width: 100%;
        font-size: 0.28rem;
        border-bottom: 2px solid #2693d4;
        .wei-int{
          width: 1.72rem;
          text-align: center;
          line-height: 0.52rem;
          margin-top: 0.2rem;
        }
      }
      // 信息
      .wei-mes{
        font-size: 0.14rem;
        line-height: 0.4rem;
        margin: 0.16rem 0rem 0.22rem 0.28rem;
      }
    }
    // 用户评价
    .weuseva{
      width: 100%;
      margin-bottom: 3rem;
      .weu-useva{
        width: 100%;
        font-size: 0.28rem;
        border-bottom: 2px solid #2693d4;
        .weu-use{
          width: 1.72rem;
          text-align: center;
          line-height: 0.52rem;
          margin-top: 0.2rem;
        }
      }
      // 评价
      .weu-eva{
        width: 100%;
        // 可循环部分
        .weu-mes{
          height: 1.2rem;
          display: flex;
          align-items: center;
          .weu-img{
            width: 0.58rem;
            height: 0.58rem;
            margin-left: 0.26rem;
            img{
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .weu-satiseva{
            width: 100%;
            height: 100%;
            margin-left: 0.25rem;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            >div{
              width: 100%;
              height: 0.4rem;
            }
            .weu-satis{
              display: flex;
              font-size: 0.23rem;
              >div{
                line-height: 0.4rem;
                margin-left: 0.1rem;
              }
              .weu-hstar{
                width: 0.4rem;
                height: 0.36rem;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .weu-bstar{
                width: 0.4rem;
                height: 0.36rem;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .weu-eva{
              font-size: 0.23rem;
              margin-left: 0.1rem;
              line-height: 0.4rem;
            }
          }
        }
      }
    }
    // 固定部分
    .wefixed{
      width: 100%;
      height: 1.15rem;
      display: flex;
      position: fixed;
      bottom: 60px;
      // 联系商家
      .wef-contact{
        width: 34%;
        font-size: 0.3rem;
        color: #2d2d2d;
        background-color: #edeff2;
        display: flex;
        flex-wrap: wrap;
        cursor: pointer;
        >div{
          width: 100%;
          text-align: center;
          line-height: 0.42rem;
        }
        .wef-conimg{
          width: 0.51rem;
          height: 0.41rem;
          margin: 0 auto;
          margin-top: 0.16rem;
          // 图片
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
      // 加入购物车
      .wef-join{
        width: 33%;
        font-size: 0.3rem;
        color: #fff;
        text-align: center;
        line-height: 1.15rem;
        background-color: #2693d4;
        cursor: pointer;
      }
      // 立即购买
      .wef-pay{
        width: 33%;
        font-size: 0.3rem;
        color: #fff;
        text-align: center;
        line-height: 1.15rem;
        text-decoration: none;
        background-color: #fc4145;
        display: inline-block;
        cursor: pointer;
      }
    }

    .joinsucess{
      width: 1.15rem;
      height: 0.73rem;
      font-size: 0.2rem;
      color: #fff;
      text-align: center;
      line-height: 0.73rem;
      background-color: rgba(0,0,0,.3);
      left: 36%;
      top: 46%;
      z-index: 25;
      overflow: hidden;
      position: fixed;
    }
    .pro-consult{
      width: 98%;
      margin: 0 auto;
      border-bottom: 1px solid #aaa;
      box-shadow: 2px 1px 2px 1px #aaa;
      background-color: #fff;
      left: 1%;
      top: 10%;
      z-index: 25;
      overflow: hidden;
      position: fixed;
      // 头
      .procon-top{
        width: 100%;
        height: 10%;
        display: flex;
        background-color: #eee;
        justify-content: space-between;
        .contop-free{
          width: 30%;
          height: 100%;
          font-size: 0.14rem;
          line-height: 0.4rem;
          text-align: center;
        }
        .contop-x{
          width: 5%;
          font-size: 0.24rem;
          text-align: center;
          line-height: 0.4rem;
          background-color: #aaa;
          cursor: pointer;
        }
      }
      // 身体
      .procon-body{
        width: 100%;
        height: 80%;
        // 一
        .conbod-one{
          width: 100%;
          .bodinp-down{
            width: 80%;
            font-size: 0.13rem;
            color: #888;
            text-align: center;
            margin: 0 auto;
            margin-top: 2%;
          }
          .bodone-input{
            width:92%;
            margin: 0 auto;
            margin-top: 3%;
            margin-bottom: 5%;
            >div{
              width: 86%;
              margin: 0 auto;
              margin-top: 3%;
            }
            // 手机号码
            .bodinp-tel{
              font-size: 0.13rem;
              display: flex;
              input{
                width: 62%;
                height: 0.34rem;
                border: 1px solid #aaa;
                border-radius: 4px;
              }
              .tel-please{
                color: #777;
                margin-left: 5%;
              }
              .tel-wrong{
                color: #f00;
                margin-left: 5%;
                // line-height: 0.36rem;
              }
              .tel-nonull{
                color: #f00;
                margin-left: 5%;
                // line-height: 0.36rem;
              }
            }
            // 图形验证码
            .bodinp-piccode{
              font-size: 0.13rem;
              color: #777;
              display: flex;
              .bodinp-graphcode{
                width: 40%;
                height: 0.34rem;
                input{
                  width: 100%;
                  height: 100%;
                  border: 1px solid #aaa;
                  border-radius: 4px;
                }
              }
              .bodinp-image{
                width: 20%;
                height: 0.34rem;
                margin-left: 2%;
                border: 1px solid #999;
                border-radius: 4px;
                img{
                  width: 100%;
                  height: 100%;
                  border-radius: 4px;
                }
              }
              .code-nonull{
                color: #f00;
                // line-height: 0.34rem;
                margin-left: 5%;
              }
              .code-wrong{
                color: #f00;
                // line-height: 0.34rem;
                margin-left: 5%;
              }
            }
            // 验证码
            .bodinp-code{
              font-size: 0.13rem;
              display: flex;
              .bodinp-chacode{
                width: 40%;
                height: 0.34rem;
                input{
                  width: 100%;
                  height: 100%;
                  border: 1px solid #aaa;
                  border-radius: 4px;
                }
              }
              .bodinp-getcode{
                width: 20%;
                height: 0.34rem;
                margin-left: 2%;
                button{
                  width: 100%;
                  height: 100%;
                  border: none;
                  border-radius: 4px;
                }
                .getgray{
                  text-align: center;
                  line-height: 0.34rem;
                  color: #6e6d6d;
                }
              }
              .cha-nonull{
                color: #f00;
                // line-height: 0.34rem;
                margin-left: 5%;
              }
              .cha-wrong{
                color: #f00;
                // line-height: 0.34rem;
                margin-left: 5%;
              }
            }
            // 开始免费咨询
            .bodinp-free{
              button{
                width: 100%;
                height: 0.34rem;
                color: #fff;
                font-size: 0.16rem;
                border: none;
                background-color: #57d8c1;
                border-radius: 4px;
              }
            }
          }
        }
        // 二
        .conbod-two{
          width: 80%;
          height: 3.4rem;
          background-color: #fff;
          margin: 0 auto;
          >div{
            font-size: 0.24rem;
            line-height: 0.4rem;
            margin-bottom: 2%;
            &:nth-child(1){
              margin-top: 7%;
            }
            &:nth-child(3){
              margin-bottom: 22%;
            }
          }
        }
      }
    }
  } 
  // span
  @media all and (max-width: 767px) and (min-width: 680px){
    .weservice{
      span{
        margin-top: -0.08rem;
      }
    }
    .weintro{
      span{
        margin-top: -0.08rem;
      }
    }
    .weuseva{
      span{
        margin-top: -0.08rem;
      }
    }
  }
  @media all and (max-width: 680px) and (min-width: 490px){
    .weservice{
      span{
        margin-top: -0.1rem;
      }
    }
    .weintro{
      span{
        margin-top: -0.1rem;
      }
    }
    .weuseva{
      span{
        margin-top: -0.1rem;
      }
    }
  }
  @media all and (max-width: 490px) and (min-width: 380px){
    .weservice{
      span{
        margin-top: -0.14rem;
      }
    }
    .weintro{
      span{
        margin-top: -0.14rem;
      }
    }
    .weuseva{
      span{
        margin-top: -0.14rem;
      }
    }
  }
  @media all and (max-width: 380px){
    .weservice{
      span{
        margin-top: -0.18rem;
      }
    }
    .weintro{
      span{
        margin-top: -0.18rem;
      }
    }
    .weuseva{
      span{
        margin-top: -0.18rem;
      }
    }
  }
</style>
