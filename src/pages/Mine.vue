<template>
  <div class="dlf-mine">
    <div class="dlf-mine-header">
      <span>我的</span>
    </div>
    <div class="dlf-content">
      <router-link to='/login' tag='div' class='dlf-content-login'>
        <p class='dlf-content-login-img'></p>
        <p >登录/注册</p>
      </router-link>
      <div class="dlf-content-list">
        <div class="dlf-content-list-title">
          <p>我的订单</p>
          <span>查看全部订单</span>
        </div>
        <div class="dlf-content-list-icon">
          <p>
            <i class="icon iconfont icon-home-active"></i>
            <span>代付款</span>
          </p>
          <p>
            <i class="icon iconfont icon-mine-active"></i>
            <span>代发货</span>
          </p>
          <p>
            <i class="icon iconfont icon-cart-active"></i>
            <span>待收货</span>
          </p>
          <p>
            <i class="icon iconfont icon-mall-active"></i>
            <span>退货</span>
          </p>
        </div>
      </div>
      <div class="dlf-content-type">
        <p>
          <i class="icon iconfont icon-liwu"></i>
          <span>每日签到</span>
        </p>
        <p>
          <i class="icon iconfont icon-liwu"></i>
          <span>交易明细</span>
        </p>
        <p>
          <i class="icon iconfont icon-liwu"></i>
          <span>兑换记录</span>
        </p>
        <p>
          <i class="icon iconfont icon-liwu"></i>
          <span>点我抽奖</span>
        </p>
        <p>
          <i class="icon iconfont icon-liwu"></i>
          <span>点我抽奖</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
};
</script>

<style lang="scss">
@import '../libs/icon/icon.css';
.dlf-mine{
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  &-header{
    width: 100%;
    height: 64px;
    background: #eed268;
    line-height: 64px;
    padding-left: 14px;
    font-size: 20px;
    text-align: center;
  }
  .dlf-content{
    width: 100%;
    &-login{
      width: 100%;
      height: 74px;
      background: white;
      padding: 0 10px;
      line-height: 74px;
      display: flex;
      margin-bottom: 10px;
      &-img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #f0f0f0;
        margin-top: 10px;
      }
      p{
        margin-right: 10px;
      }
    }
    &-list{
      width: 100%;
      height: 150px;
      background: white;
      padding: 0 10px;
      &-title{
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        span{
          color: #afaaaa;
        }
      }
      &-icon{
        width: 100%;
        display: flex;
        justify-content: space-between;
        p{
          width: 23%;
          height: 80px;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          i{
            font-size: 30px;
            color: #eed268;
          }
          span{
            color: type;
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
    &-type{
      width: 100%;
      height: 100%;
      background: white;
      padding: 0 10px;
      margin-top: 10px;
      p{
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #d1cece;
        color: #999797;
        span{
          margin-right: 20px;
        }
      }
    }
  } 
}
</style>
