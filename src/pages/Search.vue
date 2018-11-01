<template>
  <div class="dlf-search">
    <div class="dlf-search-header">
      <div class="dlf-search-header-back" @click="toPath">返回</div>
      <div class="dlf-search-header-input">
        <input 
        ref="searchinput" 
        type="text" 
        placeholder="顶立方"
        v-model="searchInfo"/>
        <i class="icon iconfont icon-sousuo"></i>
      </div>
      <div class="dlf-search-header-btn" @click="addClickBtn(searchInfo)">搜索</div>
    </div>
    <div class="dlf-search-searchHistory search-style"
    v-if="hasResult">
      <h2>历史搜索</h2>
      <div>
        <p v-for='(item, index) in search' :key="index">{{item}}</p>
      </div>
      <div class="dlf-search-searchHistory-icon">
        <i class="icon iconfont icon-lajitong" @click="deleteHistory"></i>
      </div>
    </div>
    <div class="dlf-search-hotSearch search-style">
      <h2>热门搜索</h2>
      <div>
        <p v-for='item in hotSearch' :key="item.title">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
} from 'vuex';

export default {
  name: 'search',
  data() {
    return {
      hotSearch: [],
      searchInfo: '',
    };
  },
  methods: {
    toPath(){
      this.$router.go('-1');
    },
    ...mapMutations(['addSearchInfo']),
    ...mapMutations(['deleteHistory']),
    addClickBtn(info){
      this.addSearchInfo(info);
      this.$refs.searchinput.focus();
      this.$router.push(`/list/${this.searchInfo}`);
      this.searchInfo='';
    },
  },
  mounted(){
    this.$refs.searchinput.focus();
    this.$ajax.hotsearch()
    .then(resp =>{
      this.hotSearch=resp.data.data;
    })
    .catch(err =>{
      console.log(err);
    });
  },
  computed: {
    ...mapState(['search']),
    hasResult() {
      return this.search.length >0;
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../libs/icon/icon.css';
.dlf-search{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(255, 252, 252);
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
        padding-left:50px;
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
  .icon-sousuo{
    position: absolute;
    top: 1px;
    left: 23%;
  }
  .dlf-search-searchHistory-icon{
    position: relative;
  }
  .icon-lajitong{
    position: absolute;
    top: -64px;
    right: 14px;
    font-size: 20px;
  }
}
</style>
