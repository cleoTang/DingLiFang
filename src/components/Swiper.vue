<template>
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">
        <img src="../libs/img/44.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="slide2">
        <img src="../libs/img/22.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="slide3">
        <img src="../libs/img/33.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'swiper',
};
</script>

<style scoped lang="scss">
      .page-swipe{
        text-align: center;
        color: #666;
        margin-bottom: 5px;
      }
      .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
      }
      .mint-swipe-item {
        line-height: 200px;
        img{
          height: 100%;
          width: 100%;
        }
      }
</style>
