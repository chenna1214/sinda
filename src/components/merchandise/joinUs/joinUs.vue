<template>
  <div class="joinUsOut"><!-- 加盟我们 -->
    <div class="joinAdImg"><!-- 头部广告 -->
      <div class="joinAdIn">
        <p>加盟我们</p>
        <p>只做有价值的平台</p>
      </div>
    </div>
    <div class="pcjoinUsIn">
      <div class="pcSerPeo"><!-- 服务商 -->
        <img src="../../images/joinUs/serPeo.png" class="pcSerPeoImg">
        <p class="pcGetCNTex pcSerText">服务商加盟</p>
        <p class="pcWebAdr">www.xinda.com</p>
        <p class="pcPubTil">信达提供线上精准营销方案、帮助服务商快捷、低成本的获取有效客户，为传统优质服务商插上互联网的翅膀，助力企业腾飞。</p>
      </div>
    </div>
    <div class="pcGetBox"><!-- 你将获得 -->
    <div class="pcGetTilBox">
      <img src="../../images/joinUs/getTil.png" class="pcGetTilImg">
    </div>
      <p class="pcGetENTex">YOU WILL RECEIVE</p>
      <p class="pcGetCNTex">你将获得</p>
      <p class="pcWebAdr">www.xinda.com</p>
      <el-row class="pcGetDetail">
        <el-col v-for='(getSin,index) in getList' :key="getSin" :sm="12" :md="12" :lg="12">
          <div class="pcGetDetailInner">
              <div :class="{pcGoal:index==0,pcIdea:index==1,pcDollar:index==2,pcCard:index==3}"></div>
              <p class="pcGetDetailP">{{getSin}}</p>
          </div> 
        </el-col>
      </el-row>
    </div>
    <div class="pcGetBox pcJob"><!-- 哪些职业可以加盟 -->
      <div class="pcGetTilBox">
        <img src="../../images/joinUs/job.png" class="pcGetTilImg">
      </div>
        <p class="pcGetENTex">PROFESSIONAL</p>
        <p class="pcGetCNTex">哪些职业可以加盟</p>
        <p class="pcWebAdr">www.xinda.com</p>
      <div class="pcjoinUsIn">
      <el-row>
        <el-col :sm="6" :md="6" :lg="6" v-for="(pcJob,index) in pcJobs" :key="pcJob.jobTil" class="pcJobInner">
          <div @mouseover="pcJobOver(index)">
            <div class="pcJobIconBox">
              <div class="pcJobIcon" :class="{pcNote:index==0,pcAnchor:index==1,pcBook:index==2,pcPeople:index==3}"></div>
            </div>
            <p class="pcJobTil" :class="{pcJobOver:pcJobO==index}">{{pcJob.jobTil}}</p>
            <p class="pcJobInfo" :class="{pcJobOver:pcJobO==index}">{{pcJob.jobInfo}}</p>
          </div>
        </el-col>
      </el-row>
      <p class="pcPubTil">我们需要什么样的服务商？</p>
      <div class="pcJobDetailBox"><p class="pcJobDetail">{{serviceDetail}}</p></div>
    </div>
    </div>

   </div>
</template>

<script>
export default {
  name: "joinUs",
  data() {
    return {
      index:'',
      pcJobO:-1,
      getList: [
        //你将获得
        "精准的线上曝光机会",
        "万亿市场份额",
        "系统化的营销解决方案",
        "各种补贴优惠"
      ],
      serviceDetail: "在公司注册、公司变更、资质审批等领域深耕多年，在业内享有一定的知名度，可以提供优质优价的服务；与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。",
      pcJobDetailList: [
        "在公司注册、公司变更、资质审批等领域深耕多年，在业内享有一定的知名度，可以提供优质优价的服务；与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。",
        "在代理记账、审计验资等领域深耕多年，可以提供涉足各个行业优秀的财会人员；与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。",
        "在商标注册，版权专利，著作权等领域深耕多年，具有丰富的知识产权经验；与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。",
        "在人事代理、企业社保、个人社保等领域深耕多年，具有丰富的社保代理经验。"
      ],
      pcJobs: [
        //哪些职业可以加盟
        {
          jobTil: "工商注册",
          jobInfo: "REGISTERED"
        },
        {
          jobTil: "财税服务",
          jobInfo: "SERVICE"
        },
        {
          jobTil: "知识产权",
          jobInfo: "INTELLECTUAL PROPERTY"
        },
        {
          jobTil: "人力外包",
          jobInfo: "HR OUTSOURCING"
        }
      ]
    };
  },
  methods:{
    pcJobOver:function(index){//哪些职业可以加盟
      this.serviceDetail=this.pcJobDetailList[index];
      this.pcJobO=index;
    }
  }
};
</script>

<style scoped lang='less'>
//公共样式
.pcGetENTex {
  font-size: 20px;
  text-align: center;
  margin-top: -8%;
}
.pcGetCNTex {
  font-size: 28px;
  color: red;
  text-align: center;
  margin-top: 3.5%;
}
.pcSerText {
  margin-top: -39.5%;
}
.pcWebAdr {
  font-size: 8px;
  color: #585858;
  margin-top: 0.5%;
  text-align: center;
}
.pcPubTil {
  font-size: 20px;
  margin-top: 4%;
  font-weight: bold;
  text-align: center;
}
//头部
.pcjoinUsIn {
  max-width: 1200px;
  margin: 0 auto;
}
.joinAdImg {
  width: 100%;
  height: 338px;
  background: url(../../images/joinUs/joinAd.png) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    font-size: 29px;
  }
  p:nth-child(2) {
    color: #817b7c;
    margin-top: 3.5%;
  }
}
.joinAdIn {
  margin-top: 6.83%;
}
//服务商
.pcSerPeo {
  height: 531px;
  .pcSerPeoImg {
    margin-left: 24.3%;
    width: 56%;
  }
}
//你将获得
.pcGetBox {
  background: #edf0f3;
}
.pcGetTilBox {
  display: flex;
  justify-content: center;
  .pcGetTilImg {
    margin-top: 5%;
  }
}
.pcGoal {
  background: url(../../images/joinUs/getIcon.png) 0 0 no-repeat;
  height: 75px;
  width: 75px;
}
.pcIdea {
  background: url(../../images/joinUs/getIcon.png) -176px 0 no-repeat;
  height: 80px;
  width: 77px;
}
.pcDollar {
  background: url(../../images/joinUs/getIcon.png) 0 -163px no-repeat;
  height: 61px;
  width: 82px;
}
.pcCard {
  background: url(../../images/joinUs/getIcon.png) -176px -163px no-repeat;
  height: 57px;
  width: 79px;
}
.pcGetDetail {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3%;
  margin-left: 24%;
}
.pcGetDetailP {
  font-size: 17px;
  margin-left: 85px;
  margin-top: -45px;
}
.pcGetDetailInner {
  margin-bottom: 19.33%;
}

.pcJob {
  background: #fff;
}
.pcJobTil {
  font-size: 17px;
  font-weight: bold;
  padding-top: 37px;
}
.pcJobInfo {
  font-size: 11px;
  color: #878787;
}
.pcJobIcon {
  background: url(../../images/joinUs/jobIcon.png) no-repeat;
  max-width: 138px;
  width: 70%;
  padding-bottom: 153px;
}
.pcNote {
  background-position: 0 0;
}
.pcAnchor {
  background-position: -242px 0;
}
.pcBook {
  background-position: 0 -290px;
}
.pcPeople {
  background-position: -242px -290px;
}
.pcJobInner {
  text-align: center;
  margin-top: 47px;
}
.pcJobIconBox {
  display: flex;
  justify-content: center;
}
.pcJobDetail{
  font-size: 17px;
  text-align: center;
  margin-top: 27px;
  width:60%;
  color:#a3a3a3;
  padding-bottom: 96px;
}
.pcJobDetailBox{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.pcJobOver{
  color: #2693d4;
}
</style>
