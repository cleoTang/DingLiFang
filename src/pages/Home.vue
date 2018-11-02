<template>
  <div class="dlf-Home">
    <div class=dlf-swiper>
      <swiper></swiper>
    </div>
    <div class="dlf-nav">
      <router-link tag='p' to='/list/直兑精品'>
        <i class="icon iconfont icon-liwu"></i>
        <span>直兑精品</span>
      </router-link>
      <router-link tag='p' to='/list/美妆个护'>
        <i class="icon iconfont icon-guo"></i>
        <span>美妆个护</span>
      </router-link>
      <router-link tag='p' to='/list/数码家电'>
        <i class="icon iconfont icon-zhangpeng2"></i>
        <span>数码家电</span>
      </router-link>
      <router-link tag='p' to='/list/玩具乐器'>
        <i class="icon iconfont icon-shumajiadianleimufill"></i>
        <span>玩具乐器</span>
      </router-link>
      <router-link tag='p' to='/list/食品酒水'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>食品酒水</span>
      </router-link>
      <router-link tag='p' to='/list/运动户外'>
        <i class="icon iconfont icon-ziyuan"></i>
        <span>运动户外</span>
      </router-link>
      <router-link tag='p' to='/list/家居日用'>
        <i class="icon iconfont icon-tixing"></i>
        <span>家居日用</span>
      </router-link>
      <router-link tag='p' to='/list/钟表首饰'>
        <i class="icon iconfont icon-meizhuangyongpin"></i>
        <span>钟表首饰</span>
      </router-link>
    </div>
    <div class="dlf-main">
      <div class="dlf-main-box">
        <h2>直/兑/精/品</h2>
        <div class="dlf-main-links">
          <div class="dlf-main-links-wrapper">
            <div>
              <img src="http://yanxuan.nosdn.127.net/6d312d726fcf52d6e4af3205a7d6145c.jpg?imageView&thumbnail=430x430&quality=95" alt="图片"/>
              <p>TOTOP纯白</p>
            </div>
            <div>
              <img src="http://yanxuan.nosdn.127.net/097fdada61bdd546674cfca627047192.jpg?imageView&thumbnail=430x430&quality=95" alt="图片"/>
              <p>竹居·小魔方组合斗柜</p>
            </div>
            <div>
              <img src="http://yanxuan.nosdn.127.net/6d312d726fcf52d6e4af3205a7d6145c.jpg?imageView&thumbnail=430x430&quality=95" alt="图片"/>
              <p>TOTOP纯白</p>
            </div>
            <div>
              <img src="http://yanxuan.nosdn.127.net/097fdada61bdd546674cfca627047192.jpg?imageView&thumbnail=430x430&quality=95" alt="图片"/>
              <p>竹居·小魔方组合斗柜</p>
            </div>
          </div>
        </div> 
      </div>
      <div class="dlf-main-box">
        <h2>美/妆/个/护</h2>
        <div class="dlf-main-links">
          <div class="dlf-main-links-wrapper">
            <div>
              <img src="../libs/img/44.jpg" alt="图片"/>
              <p>TOTOP纯白</p>
            </div>
            <div>
              <img src="../libs/img/33.jpg" alt="图片"/>
              <p>竹居·小魔方组合斗柜</p>
            </div>
            <div>
              <img src="http://yanxuan.nosdn.127.net/6d312d726fcf52d6e4af3205a7d6145c.jpg?imageView&thumbnail=430x430&quality=95" alt="图片"/>
              <p>TOTOP纯白</p>
            </div>
            <div>
              <img src="http://yanxuan.nosdn.127.net/097fdada61bdd546674cfca627047192.jpg?imageView&thumbnail=430x430&quality=95" alt="图片"/>
              <p>竹居·小魔方组合斗柜</p>
            </div>
          </div>
        </div> 
      </div>
      <div class="dlf-main-product">
        <h3>精品推荐</h3>
        <div class="dlf-main-product-list">
          <img src="https://yanxuan.nosdn.127.net/a11f65f9168377b897f4d1d98b6fae1c.jpg" alt="图片"/>
          <p>升级款95%白鹅绒秋冬加厚羽绒被</p>
          <div class="dlf-main-product-list-title">
            <span>￥238</span>
            <p>已售17件</p>
          </div>
        </div>
      </div>
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
html,
body,
{
  height: 100%;
  width: 100%;
  background: #f0f0f0;
}
.dlf-Home{
  height: 100%;
}
.dlf-nav{
  background: white;
  width:100%;
  height:200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-top: 10px;
  p{
    width:21%;
    height:80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #9c9a9a;
    i{
      width: 60px;
      height:60px;
      line-height: 50px;
      border-radius: 50%;
      background: rgb(248, 236, 238);
      font-size: 30px;
      color: #f7d24d;
    }
  }
}
.dlf-main-box{
  width: 100%;
  height: 220px;
  background: white;
  margin-top: 10px;
  h2{
    text-align: center;
    height: 50px;
    font-size: 18px;
    padding: 15px 0;
  }
}
.dlf-main-links{
  width: 100%;
  height: 170px;
  overflow-y: hidden;
  &-wrapper{
    width: 200%;
    height:160px;
    display: flex;
    div{
      width: 38%;
      height: 160px;
      margin-right:10px;
      img{
        width: 100%;
        height: 140px;
      }
      p{
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: center;
      }
    }
  }
}
.dlf-main-product{
  width: 100%;
  height: 100%;
  background: white;
  margin-top: 10px;
  h3{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    border-right: 3px solid rgb(212, 226, 10);
  }
  &-list{
    width: 100%;
    height: 200px;
    padding: 0 10px;
    img{
      width: 100%;
      height: 150px;
    }
    p{
      color: #363535;
      height: 20px;
      line-height: 20px;
    }
    &-title{
      display: flex;
      height: 30px;
      line-height: 30px;
      justify-content: space-between;
      p{
        color: #a39d9d;
      }
      span{
        font-size: 18px;
      }
    }
  }
}
</style>
