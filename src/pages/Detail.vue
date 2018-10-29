<template>
  <div class="dlf-detail"
  item="item">
    <div class="dlf-detail-img">
      <img :src='item.swiper' alt="图片"/>
    </div>
    <div class="dlf-detail-desc">
      <h1>{{item.title}}</h1>
      <h2>￥{{item.price}}</h2>
      <p>
        <span>运费：免邮</span>
        <span>已售0件</span>
      </p>
    </div>
    <div class="dlf-detail-type">已选：粉色/20寸</div>
    <div class="dlf-detail-btn">
      <div class="dlf-detail-icon">
        <i class="icon iconfont icon-cart-normal"></i>
      </div>
      <div class="dlf-detail-add">加入购物车</div>
      <div class="dlf-detail-buy">立即购买</div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper';

export default {
  name: 'detail',
  components: {
    Swiper,
  },
  data(){
    return {
      item: {},
    };
  },
  mounted(){
    //console.log(this.$route.params.id);
    this.$ajax.getDetail(this.$route.params.id)
    .then(resp =>{
      this.item = resp.data.data;
    })
    .catch(err =>{
      console.log(err);
    });
  }
};
</script>

<style lang="scss">
@import '../libs/icon/icon.css';
.dlf-detail{
  width: 100%;
  height: 100%;
  background: #f1f0f0;
  &-img{
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .dlf-detail-desc{
    background: white;
    width: 100%;
    height: 140px;
    padding:0 20px;
    h1{
      font-size: 18px;
      height:80px;
      line-height: 30px;
      padding: 10px 0;
    }
    h2{
      font-size: 20px;
      color: rgb(207, 19, 19);
    }
    p{
      display: flex;
      justify-content: space-between;
      color: #c0bdbd;
      margin-top: 5px;
    }
  }
  .dlf-detail-type{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: 10px 0;
    padding-left: 20px;
    background: white;
    color: #c0bdbd;
  }
  .dlf-detail-btn{
    width: 100%;
    height: 64px;
    display: flex;
    line-height: 64px;
    border-top: 1px solid #dedede;
    text-align: center;
    font-size: 20px;
    background: white;
    position: absolute;
    bottom: 64px;
    left: 0;
    right: 0;
    .dlf-detail-icon{
      width: 20%;
      i{
        font-size: 30px;
      }
    }
    .dlf-detail-add{
      width: 40%;
      border-left: 1px solid #dedede;
    }
    .dlf-detail-buy{
      width: 40%;
      background: #eed268;
      color: white;
    }
  }
}
</style>
