<template>
  <!-- 未注册 -->
  <div class="hidden-sm-and-up">
    <!-- 头像 -->
    <div class="weavatar">
      <img src="../pc_images/we-people.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "pcfooter",
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped lang='less'>
  .weavatar{
    img{
      width: 8.2rem;
      height: 8.2rem;
      display: block;
    }
  }
</style>
