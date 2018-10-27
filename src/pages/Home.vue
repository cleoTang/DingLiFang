<template>
  <div class="dlf">
    <div class=dlf-swiper>
      <swiper></swiper>
    </div>
    <div class="dlf-nav">
      <p>
        <i class="icon iconfont icon-liwu"></i>
        <span>礼品</span>
      </p>
      <p>
        <i class="icon iconfont icon-guo"></i>
        <span>礼品</span>
      </p>
      <p>
        <i class="icon iconfont icon-zhangpeng2"></i>
        <span>礼品</span>
      </p>
      <p>
        <i class="icon iconfont icon-shumajiadianleimufill"></i>
        <span>礼品</span>
      </p>
      <p>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </p>
      <p>
        <i class="icon iconfont icon-ziyuan"></i>
        <span>礼品</span>
      </p>
      <p>
        <i class="icon iconfont icon-tixing"></i>
        <span>礼品</span>
      </p>
      <p>
        <i class="icon iconfont icon-meizhuangyongpin"></i>
        <span>礼品</span>
      </p>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper';

export default {
  name: 'home',
  components: {
    Swiper,
  },
};
</script>

<style  lang="scss">
@import '../libs/icon/icon.css';
.dlf-nav{
  width:100%;
  height:200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  p{
    width:21%;
    height:80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    i{
      width: 100%;
      height:60px;
      line-height: 50px;
      border-radius: 50%;
      background: rgb(248, 236, 238);
      font-size: 30px;
      color: #f7d24d;
    }
  }
  
}
</style>
