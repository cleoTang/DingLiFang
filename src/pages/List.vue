<template>
  <div class="dlf-list">
    <div class="dlf-list-header">
      <P @click="toPath">返回</P>
      <span>礼品箱包</span>
    </div>
    <div class="dlf-list-nav">
      <ul>
        <li>销量</li>
        <li>价格</li>
        <li>新品</li>
        <li>筛选</li>
      </ul>
    </div>
    <div class="dlf-list-content">
      <router-link
      class="dlf-list-content-msg"
      :to='`/detail/${item.id}`'
      tag="div"
      v-for="item in todos"
      :key="item.id"
      >
        <div class="dlf-list-content-msg-img">
          <img :src='item.img' title="图片"/>
        </div>
        <h2>{{item.title}}</h2>
        <p>￥{{item.price}}</p>
      </router-link>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data(){
    return {
      todos: [],
    }
  },
  mounted() {
    this.$ajax.getMallList()
      .then(resp => {
        this.todos=resp.data.data;
      })
      .catch(err =>{
        console.log(err);
      });
  },
  methods: {
    toPath(){
      this.$router.go('-1');
    }
  },
};
</script>

<style scoped lang="scss">
.dlf-list {
  width: 100%;
  height: 100%;
  background: rgb(240, 239, 239);
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
  .dlf-list-nav{
    width: 100%;
    height: 40px;
    background: white;
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
    flex: 1;
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
        font-size: 15px;
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
