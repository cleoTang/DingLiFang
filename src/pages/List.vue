<template>
  <div class="dlf-list">
    <div class="dlf-list-nav">
      <ul>
        <li>销量</li>
        <li>价格</li>
        <li>新品</li>
        <li>筛选</li>
      </ul>
    </div>
    <div class="dlf-list-content">
      <div class="dlf-list-content-msg">
        <div class="dlf-list-content-msg-img">
          <img src="" title="图片"/>
        </div>
        <h2>行李箱行李箱行李箱行李箱行李箱行李</h2>
        <p>￥148</p>
      </div>
      <div class="dlf-list-content-msg">
        <div class="dlf-list-content-msg-img">
          <img src="" title="图片"/>
        </div>
        <h2>行李箱行李箱行李箱行李箱行李箱行</h2>
        <p>￥148</p>
      </div>
      <div class="dlf-list-content-msg">
        <div class="dlf-list-content-msg-img">
          <img src="" title="图片"/>
        </div>
        <h2>行李箱行李箱行李箱行李箱行李箱行</h2>
        <p>￥148</p>
      </div>
      <div class="dlf-list-content-msg">
        <div class="dlf-list-content-msg-img">
          <img src="" title="图片"/>
        </div>
        <h2>行李箱行李箱行李箱行李箱行李箱行</h2>
        <p>￥148</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.dlf-list {
  width: 100%;
  height: 100%;
  background: #e6e4e4;
  .dlf-list-nav{
    width: 100%;
    height: 40px;
    background: pink;
    line-height: 40px;
    ul{
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      color: rgb(70, 68, 68);
    }
  }
  .dlf-list-content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .dlf-list-content-msg{
      margin-top: 10px;
      width: 47%;
      height: 200px;
      background: white;
  
      .dlf-list-content-msg-img{
        width: 100%;
        height: 120px;
        background: pink;
        img{
          height: 100%;
          width: 100%;
        }
      }
      h2{
        width: 100%;
        height: 50px;
        padding-left: 10px;
        padding-top: 5px;
        line-height: 20px;
      }
      p{
        width: 100%;
        padding-left: 10px;
        font-size: 18px;
        color: rgb(207, 17, 17);
      }
    }
  }
}
</style>
