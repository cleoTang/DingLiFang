<template>
  <div class="dlf-header">
    <div class="dlf-title">顶立方</div>
    <div class="dlf-input" @click="toSearch">
      <input  type="text" placeholder="顶立方"/>
    </div>
    <div class="dlf-icon">
      <i class="icon iconfont icon-tixing"></i>
      <i class="icon iconfont icon-saoyisao"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headernav',
  methods: {
    toSearch(){
      this.$router.push('/search');
    },
  },
};
</script>

<style  lang="scss">
@import '../libs/sass/public.scss';
@import '../libs/icon/icon.css';
.dlf-header{
  height:64px;
  width:100%;
  display: flex;
  background: $background-color;
  justify-content: space-around;
  align-items: center;
  .dlf-title{
    font-size: 25px;
    font-weight: bolder;
    color: rgb(29, 3, 3);
  }
  .dlf-input{
    width:50%;
    height:38px;
    input{
      width:100%;
      box-sizing: border-box;
      border: none;
      border-radius: 15px;
      height: 38px;
      padding-left:20px;
      font-size: 15px;
      outline: none;
    }
  }
  .dlf-icon{
    i{
      font-size: 23px;
      margin-right: 10px;
      font-weight: bolder;
    }
  }
}
</style>
