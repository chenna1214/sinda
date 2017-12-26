<template>
    <div>
        <div class="pageBox">
            <button @click="upPage()">上一页</button>
            <span v-for="(eachPage,idxPage) in pageNums" :key="idxPage" class="pcPage" @click="pageClick(idxPage)" :class="{pageColor:textColor==idxPage}">{{eachPage}}</span>
            <button @click="downPage()">下一页</button>
        </div>
    </div>
</template>  

<script>
export default {
  name: "pagePublic",
  data() {
    return {
        pageNums:[],
      pageNum: 0, //zong页数
      eachContent: 0, //每页内容
      page: "", //每类数据分的总页数
      textColor: 0 //控制页码被选中后的动态样式的初始值
    };
  },
  created(){
     console.log(this.page,this.limitPage);
        for (var i = 0; i < pageNum; i++) {
            pageNums[i] = i + 1;
          }
  },
  watch:{
      page(newVal,oldVal){
          this.pageNum=Math.ceil(newVal/this.limitPage);
          for (var i = 0; i < pageNum; i++) {
            pageNums[i] = i + 1;
          }
      }
  },
  props:{
      page:String,
      limitPage:Number,
  },
  methods: {
    upPage() {
      //点击向上一页翻页

      if (this.eachContent - 1 >= 0) {
        this.eachContent = this.eachContent - 1;
        // if (!this.code) {
        //   this.paging(eachContent,limitPage);
        // } else {
        //   this.paging(eachContent,limitPage)
        // }
        // this.textColor = this.eachContent;
      }
    },
    downPage() {
      //点击向下一页翻页
      if (Number(this.eachContent) + 1 < this.page) {
        this.eachContent = Number(this.eachContent) + 1;
        if (!this.code) {
         this.paging(eachContent,limitPage)
        } else {
          this.paging(eachContent,limitPage)
        }
        this.textColor = this.eachContent;
      }
    },
    pageClick(code) {
      //点击某个页码进行翻页
      if(this.eachContent!=code){
          this.eachContent=code;
          this.$emit('native',this.eachContent);
      }
      this.eachContent = idxPage;
      if (!this.code) {
        this.paging(eachContent,limitPage)
      } else {
        this.paging(eachContent,limitPage)
      }
      this.textColor = idxPage;
    },
    paging(eachContent,limitPage,page) {
      //产品列表
      var that = this;
      var params = {
        start: this.eachContent * 3,
        limit:limitPage
      };
      if (window.screen.availWidth >= 768) {
        params.limit = 3;
      } else {
        delete params.limit;
      }
          var pageCount = {};
          for (var i = 0; i < page; i++) {
            pageCount[i] = i + 1;
          }
          that.pageNum = pageCount;
          that.page = page;
          that.totalCount = data.data.totalCount - 1; //从服务器请求的信息总条数
    }
  }
};
</script>

<style scoped lang="less">

</style>

