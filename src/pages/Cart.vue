<template>
  <div class="dlf-cart">
    <div class="dlf-cart-content">
      <div class="dlf-cart-content-detail">
        <div>
          <input type="checkbox" />
        </div>
        <div class="dlf-cart-content-detail-img">
          <img src="" alt="图片"/>
        </div>
        <div class="dlf-cart-content-detail-desc">
          <div class="dlf-cart-content-detail-desc-title">
            <h1>苹果苹果苹果苹果苹果苹果苹果苹果</h1>
            <h2>苹果苹果苹果苹果苹果苹果苹果苹果</h2>
          </div>
          <div class="dlf-cart-content-detail-desc-msg">
            <div class="detail-desc-msg-price">￥1159</div>
            <div class="detail-desc-msg-number">
              <span class="detail-desc-msg-number-add">-</span>
              <span class="detail-desc-msg-number-count">10</span>
              <span class="detail-desc-msg-number-reduce">+</span>
            </div>
          </div>
        </div>
      </div>
       <div class="dlf-cart-content-detail">
        <div>
          <input type="checkbox" />
        </div>
        <div class="dlf-cart-content-detail-img">
          <img src="" alt="图片"/>
        </div>
        <div class="dlf-cart-content-detail-desc">
          <div class="dlf-cart-content-detail-desc-title">
            <h1>苹果苹果苹果苹果苹果苹果苹果苹果</h1>
            <h2>苹苹果苹果苹果苹果苹果</h2>
          </div>
          <div class="dlf-cart-content-detail-desc-msg">
            <div class="detail-desc-msg-price">￥1159</div>
            <div class="detail-desc-msg-number">
              <span class="detail-desc-msg-number-add">-</span>
              <span class="detail-desc-msg-number-count">10</span>
              <span class="detail-desc-msg-number-reduce">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dlf-cart-content-more">点击或者上拉加载更多</div>
    </div>
    <div class="dlf-cart-footer">
      <div class="dlf-cart-footer-check"><input type="checkbox" />全选</div>
      <div class="dlf-cart-footer-total">总计：<span>0</span></div>
      <div class="dlf-cart-footer-btn">
        <button>结算（<span>0</span>）</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
};
</script>

<style  lang="scss">
.dlf-cart{
  width:100%;
  height:100%;
  background: rgb(240, 237, 238);
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
        height:100px;
        width:30%;
        border:1px solid;
        padding:10px;
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
      position: absolute;
      bottom: 64px;
      left: 0;
      right: 0;
      .dlf-cart-footer-check{
        padding-left: 10px;
        width: 50%;
      }
      .dlf-cart-footer-total{
        width:25%;
      }
      .dlf-cart-footer-btn{
        width: 25%;
        height:50px;
        button{
          border: none;
          width:100%;
          height: 100%;
          background:#eed268;
          font-size: 16px;
          color: white;
        } 
      }
    }
}
</style>
