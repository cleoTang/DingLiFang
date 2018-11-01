<template>
  <div class="dlf-mall">
    <div class="dlf-mall-title">
      <h2>分类</h2>
      <h2>CATEGORY</h2>
    </div>
    <div class="dlf-mall-content">
      <router-link 
      tag="p" 
      :to='`/list/${item.title}`'
      :key='item.id'
      v-for='item in malllist'>
        <i class="icon iconfont icon-jiushuishouru"></i>
        <span>{{item.title}}</span>
      </router-link>
    </div>
    <div class="dlf-mall-img">
      <p></p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'mall',
  data(){
    return {
      malllist: [],
    };
  },
  mounted(){
    this.$ajax.malllist()
    .then(resp => {
      this.malllist=resp.data.data;
    })
    .catch(err =>{
      console.log(err);
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../libs/icon/icon.css';

.dlf-mall{
  height:100%;
  background: white;
  .dlf-mall-title{
    width:100%;
    height:60px;
    padding-top:30px;
    margin-bottom: 20px;
    h2{
      height:30px;
      font-size: 20px;
      text-align: center;
    }
  }
  .dlf-mall-content{
    width:100%;
    height:300px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: space-around;
    p{
      width:24%;
      display: flex;
      flex-direction: column;
      text-align: center;
      line-height: 35px;
      i{
        font-size: 33px;
      }
      span{
        color: #b8b7b7;
      }
    }
  }
  .dlf-mall-img{
    width:100%;
    height:100px;
    border-top: 5px solid #f0eded;
    p{
      height:100px;
      background: #ebe373;
    }
  }
}
</style>
