<template>
  <div class="dlf-mall">
    <div class="dlf-mall-title">
      <h2>分类</h2>
      <h2>CATEGORY</h2>
    </div>
    <div class="dlf-mall-content">
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
     <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
     <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
      <router-link tag="p" to='/list/1'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>礼品</span>
      </router-link>
    </div>
    <div class="dlf-mall-img">
      <p></p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'mall',
};
</script>

<style lang="scss" scoped>
@import '../libs/icon/icon.css';

.dlf-mall{
  height:100%;
  .dlf-mall-title{
    width:100%;
    height:60px;
    margin-top:30px;
    margin-bottom: 20px;
    h2{
      height:30px;
      font-size: 20px;
      text-align: center;
    }
  }
  .dlf-mall-content{
    width:100%;
    height:300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    p{
      width:24%;
      display: flex;
      flex-direction: column;
      text-align: center;
      line-height: 35px;
      i{
        font-size: 33px;
      }
      span{
        color: #b8b7b7;
      }
    }
  }
  .dlf-mall-img{
    width:100%;
    height:100px;
    border-top: 5px solid #f0eded;
    p{
      height:100px;
      background: #ebe373;
    }
  }
}
</style>
