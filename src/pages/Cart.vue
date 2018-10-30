<template>
  <div class="dlf-cart">
    <div class="dlf-cart-content">
      <div 
      class="dlf-cart-content-detail"
      v-for='item in todos'
      :key='item.id'>
        <div>
          <input 
          type="checkbox"
          :checked='checked(item.id)'
          @change="onCheckedChange(item.id)"/>
        </div>
        <div class="dlf-cart-content-detail-img">
          <img :src='item.swiper' alt="图片"/>
        </div>
        <div class="dlf-cart-content-detail-desc">
          <div class="dlf-cart-content-detail-desc-title">
            <h1>{{item.title}}</h1>
            <h2>{{item.desc}}</h2>
          </div>
          <div class="dlf-cart-content-detail-desc-msg">
            <div class="detail-desc-msg-price">￥{{item.price}}</div>
            <div class="detail-desc-msg-number">
              <span
              class="detail-desc-msg-number-add"
              @click="decrement(item.id)"
              >-</span>
              <span class="detail-desc-msg-number-count">{{item.count}}</span>
              <span class="detail-desc-msg-number-reduce" 
              @click="increment(item.id)"
              >+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dlf-cart-content-more">点击或者上拉加载更多</div>
    </div>
    <div class="dlf-cart-footer">
      <div 
      class="dlf-cart-footer-check">
        <input type="checkbox" 
        v-model="isAllChecked" />
        全选
        </div>
      <div class="dlf-cart-footer-total">总计：<span>{{checkedTotalPrice.toFixed(2)}}</span></div>
      <div class="dlf-cart-footer-btn">结算({{totalCount}})</div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
} from 'vuex';

export default {
  name: 'cart',
  data(){
    return {
    checkedItems: [],
    };
  },
  computed: {
    ...mapState(['todos']),
    isAllChecked: {
      get() {
        return this.checkedItems.length === this.todos.length;
      },
      set(val) {
        if (val){
          this.checkedItems = this.todos.map(item => item.id);
        } else {
          this.checkedItems = [];
        }
      },
    },
    totalCount(){
      return this.todos.reduce((result, item) => {
        if (this.checkedItems.includes(item.id)) {
          result += item.count;
        }
        return result;
      }, 0);
    },
    checkedTotalPrice() {
      return this.todos.reduce((result, item) => {
        if (this.checkedItems.includes(item.id)) {
          result += item.price * item.count;
        }
        return result;
      }, 0);
    },
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    onCheckedChange(id) {
      if (this.checkedItems.includes(id)) {
        this.checkedItems = this.checkedItems.filter(item => item !== id);
      } else {
        this.checkedItems.push(id);
    }
    },
    checked(id) {
      return this.checkedItems.includes(id);
    },
  },
};
</script>

<style  lang="scss">
.dlf-cart{
  width:100%;
  height:100%;
  background: rgb(235, 234, 234);
  .dlf-cart-content{
    .dlf-cart-content-more{
      width: 100%;
      height: 200px;
      text-align: center;
      line-height: 100px;
    }
    .dlf-cart-content-detail{
      background: white;
      height:140px;
      border-bottom: 1px solid #eeeded;
      display: flex;
      padding:20px 10px;
      .dlf-cart-content-detail-img{
        height:80px;
        width:30%;
        margin-left: 10px;
        margin-right: 10px;
        img{
          height:100%;
          width:100%;
        }
      }
      .dlf-cart-content-detail-desc{
        .dlf-cart-content-detail-desc-title{
          width:100%;
          h1{
            font-size: 16px;
          }
          h2{
            font-size: 13px;
            color:#b3b1b1;
          }
        }
      }
      .dlf-cart-content-detail-desc-msg{
        display: flex;
        justify-content: space-between;
        height:40px;
        line-height: 40px;
        font-size: 18px;
        .detail-desc-msg-price{
          color:rgb(197, 18, 18);
        }
        .detail-desc-msg-number{
          width:90px;
          height:100%;
          span{
            display: inline-block;
          }
          .detail-desc-msg-number-add,
          .detail-desc-msg-number-reduce{
            width:25px;
            height:25px;
            background: #ecdf22;
            border: 1px solid #555454;
            border-radius: 50%;
            line-height: 20px;
            text-align: center;
            font-weight: bolder;
          }
          .detail-desc-msg-number-count{
            width:29px;
            text-align: center;
          }
        }
      }
    }
  }
  .dlf-cart-footer{
      width: 100%;
      display: flex;
      height: 50px;
      background: white;
      line-height: 50px;
      position: fixed;
      bottom: 64px;
      left: 0;
      right: 0;
      .dlf-cart-footer-check{
        padding-left: 10px;
        width: 50%;
      }
      .dlf-cart-footer-total{
        width:35%;
        height: 100%;
      }
      .dlf-cart-footer-btn{
        width: 25%;
        height:50px;
        background:#eed268;
        font-size: 16px;
        color: white;
        text-align: center;
      }
    }
}
</style>
