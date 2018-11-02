<template>
  <div class="dlf-detail"
  item="item">
    <div class="dlf-detail-header">
      <P @click="toPath">返回</P>
      <span>商品详情</span>
    </div>
    <div class="none"></div>
    <div class="dlf-detail-img">
      <img :src="item.swiper" alt="">
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
    <div class="dlf-detail-message">
      <div class="nav">
        <mt-button size="small" @click.native.prevent="active = 'tab-container1'">商品详情</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container2'">评论</mt-button>
      </div>
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
          <mt-tab-container-item id="tab-container1">
            <div>
              <img :src='item.img1' alt="">
              <img :src='item.img2' alt="">
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <div class="img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541646376&di=966e3872844391ea11eeffd11212ebd9&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F07%2F85%2F23%2F5933c89eecfff.png" alt='评论'/>
              <p>暂时还没有评论哦~~~</p>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="dlf-detail-btn">
      <router-link tag='div' to='/cart' class="dlf-detail-icon">
        <span v-if='showbage'
        class="dlf-detail-icon-badge"
        >{{todos.length}}</span>
        <i class="icon iconfont icon-cart-normal"></i>
      </router-link>
      <div class="dlf-detail-add" @click="addClickBtn()">加入购物车{{showbage}}</div>
      <div class="dlf-detail-buy">立即购买</div>
      <div class="dlf-addclick" v-if='isshowModule'>
        <div class='dlf-addclick-img'>
          <img :src='item.swiper' alt="">
          <p>
            <span>￥{{item.price}}</span>
            <span>库存：50件</span>
          </p>
          <div class="cancel" @click="cancel">X</div>
        </div>
        <div class='dlf-addclick-number'>
          <p>数量:</p>
          <p class="dlf-addclick-number-action">
            <span class="reduce" @click='reduce'>-</span>
            <span class="count">{{cartcount}}</span>
            <span class="add" @click="add">+</span>
          </p>
        </div>
        <div class='dlf-addclick-btn' @click='addtocart1({item,num:cartcount})'>确定</div>
      </div>
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
      active: 'tab-container1',
      isshowModule: false,
      cartcount:1,
      isShowBage:false,
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
    },
    addClickBtn(){
      this.isshowModule=true;
    },
    add(){
      this.cartcount=this.cartcount +=1;
    },
    reduce(){
      if(this.cartcount<=1){
        this.cartcount=1;
      }else{
        this.cartcount=this.cartcount -=1
      }
    },
    addtocart1(item){
      this.addtocart(item);
      this.isshowModule=false;
      this.cartcount=1;
    },
    cancel(){
      this.isshowModule=false;
    },
  },
  computed: {
    ...mapState(['todos']),
  },
};
</script>

<style scoped lang="scss">
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
    position: fixed;
    span{
      margin-left: 30%;
    }
  }
  &-img{
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 200px;
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
  .dlf-detail-message{
    width: 100%;
    height: 400px;
    background: white;
    z-index: -99;
    &-title{
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
      padding: 0 10px;
      p{
        padding: 5px 10px;
        border-bottom: 1px solid;
      }
    }
    &-info{
      margin-top: 20px;
    }
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
  .item {
    display: inline-block;
  }
  .nav {
    padding: 10px;
  }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
  .img{
    width: 100%;
    height: 100;
    text-align: center;
    img{
      width: 200px;
      height: 200px;
      margin-top: 20px;
    }
  }
  .dlf-addclick{
    width: 100%;
    height: 200px;
    background: white;
    position: absolute;
    border-top: 3px solid #f3db86;
    left: 0;
    bottom: 0;
    padding: 0 10px;
    &-img{
      width: 100%;
      height: 60px;
      display: flex;
      margin-top: 20px;
      p{
          display: flex;
          flex-direction: column;
          height:60px;
          font-size: 15px;
          color: #bebebe;
          span{
            height: 20px;
          }
        }
      img{
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }
    }
    &-number{
      width: 100%;
      height: 64px;
      margin-top: 10px;
      display: flex;
      p{
        margin-right: 20px;
      }
      &-action{
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #a09e9e;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        span{
          height: 40px;
          width: 40px;
        }
        .count{
          border-left: 1px solid #a09e9e;
          border-right: 1px solid #a09e9e;
        }
      }
    }
  } 
  .dlf-addclick-btn{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: white;
    background: #eed268;
    margin-top: 10px;
    border-radius: 5px;
  }
  .cancel{
    position: absolute;
    right:23px;
    top: 0;
    color: #d1cece;
  }
  .none{
    width: 100%;
    height: 64px;
  }
}
</style>
