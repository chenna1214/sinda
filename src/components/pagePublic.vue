<template>
<!-- 分页功能 -->
    <div>
        <div class="pageBox">
            <button @click="upPage()" class="pageBtn">上一页</button>
            <span v-for="num in pages" :key="num" @click="numc(num)" :class="'page-num '+(currentp==num?'active':'')">{{num}}</span>
            <button @click="downPage()" class="pageBtn">下一页</button>
        </div>
    </div>
</template>  
<script>
export default {
  name: "pagePublic",
  data() {
    return {
      pages: 0,
      eachContent: 0, //每页内容
      textColor: 0, //控制页码被选中后的动态样式的初始值
      currentp: 1
    }; 
  },
  created() {
    this.pages = Math.ceil(this.total / this.pageNum);
  },
  watch: {
    total(newVal, oldVal) {
      this.pages = Math.ceil(this.total / this.pageNum);
    },
    currentPage() {
      this.currentp = this.currentPage;
    }
  },
  props: {
    total: Number, //总条目
    pageNum: Number, //每页多少条
    currentPage: {
      type: Number,
      default: 1
    } //当前是第几页
  },
  methods: {
    numc(num) {
      //点击某个页码进行翻页
      this.currentp = num; //点击后改变样式
      this.$emit("numc", num); //将num参数、numc事件向父组件传递
    },
    upPage() {
      //点击向上一页翻页
      this.$emit("upPage");
    },
    downPage() {
      //点击向下一页翻页
      this.$emit("downPage");
    }
  }
};
</script>
<style scoped lang="less">
.page-num {
  display: inline-block;
  border: 1px solid #2693d4;
  padding: 5px;
  color: #000;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
}
.pageBtn {
  border: 1px solid #2693d4;
  background: white;
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
}
.active {
  background: #2693d4;
  color: #fff;
}
</style>

