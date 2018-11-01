<template>
  <div class="dlf-search">
    <div class="dlf-search-header">
      <div class="dlf-search-header-back" @click="toPath">返回</div>
      <div class="dlf-search-header-input">
        <input ref="searchinput" type="text" placeholder="顶立方"/>
      </div>
      <div class="dlf-search-header-btn">搜索</div>
    </div>
    <div class="dlf-search-searchHistory search-style">
      <h2>历史搜索</h2>
      <div>
        <p>电脑</p>
        <p>电动牙刷</p>
        <p>毛毯</p>
        <p>手机</p>
        <p>机械键盘</p>
        <p>手机</p>
        <p>机械键盘</p>
      </div>
    </div>
    <div class="dlf-search-hotSearch search-style">
      <h2>热门搜索</h2>
      <div>
        <p>电脑</p>
        <p>电动牙刷</p>
        <p>毛毯</p>
        <p>手机</p>
        <p>机械键盘</p>
        <p>手机</p>
        <p>机械键盘</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    toPath(){
      this.$router.go('-1');
    }
  },
  mounted(){
    this.$refs.searchinput.focus();
  },
}
</script>

<style lang='scss' scoped>
.dlf-search{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-header{
    width:100%;
    height: 64px;
    line-height: 64px;
    background: #eed268;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 18px;
    &-input{
      width:70%;
      height:38px;
      input{
        width:100%;
        box-sizing: border-box;
        border: none;
        border-radius: 15px;
        height: 38px;
        padding-left:30px;
        font-size: 15px;
        outline: none;
      }
    }
  }
  .search-style{
    padding: 20px 10px;
    h2{
      font-size: 20px;
      color: #bdbcbb;
      margin-bottom: 10px;
    }
    div{
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      p{
        padding: 5px 10px;
        border: 1px solid #b3b1b1;
        margin: 5px 5px;
      }
    }
  }
}
</style>
