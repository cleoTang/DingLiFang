<template>
  <div class="dlf-detail"
  item="item">
    <div class="dlf-detail-header">
      <P @click="toPath">返回</P>
      <span>商品详情</span>
    </div>
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
    <div class="dlf-detail-type">已选：粉色/20寸 </div>
    <div class="dlf-detail-btn">
      <router-link tag='div' to='/cart' class="dlf-detail-icon">
        <span 
        class="dlf-detail-icon-badge"
        >{{todos.length}}</span>
        <i class="icon iconfont icon-cart-normal"></i>
      </router-link>
      <div class="dlf-detail-add" @click="addtocart(item)">加入购物车</div>
      <div class="dlf-detail-buy">立即购买</div>
    </div>
  </div>
</template>

<script>
import {
  mapMutations,
  mapState,
} from 'vuex';

export default {
  name: 'detail',
  data(){
    return {
      item: {},
    };
  },
  mounted(){
    this.$ajax.getDetail(this.$route.params.id)
    .then(resp => {
      resp.data.data.id=this.$route.params.id;
      this.item = resp.data.data;
    })
    .catch(err =>{
      console.log(err);
    });
  },
  methods: {
    ...mapMutations(['addtocart','showbage']),
    toPath(){
      this.$router.go('-1');
    }
  },
  computed: {
    ...mapState(['todos']),
  },
};
</script>

<style lang="scss">
@import '../libs/icon/icon.css';
.dlf-detail{
  width: 100%;
  height: 100%;
  background: #f1f0f0;
  &-header{
    height: 64px;
    width: 100%;
    background: #eed268;
    line-height: 64px;
    display: flex;
    padding-left: 14px;
    font-size: 20px;
    span{
      margin-left: 30%;
    }
  }
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
    bottom:0;
    left: 0;
    right: 0;
    .dlf-detail-icon{
      width: 20%;
      i{
        font-size: 30px;
      }
      &-badge{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        color: white;
        line-height: 20px;
        position: absolute;
        bottom: 38px;
        left: 42px;
        font-size: 14px;
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
