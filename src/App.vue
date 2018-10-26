<template>
  <div class="dlf">
    <div class="dlf-header">头部</div>
    <div class="dlf-content">内容</div>
    <div class="dlf-tabbar">
      <tabbar></tabbar>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar';

export default {
  name: 'App',
  components: {
    Tabbar,
  },
};
</script>

<style lang="scss">
.dlf{
  display: flex;
  flex-direction: column;
  .dlf-header{
    height: 64px;
    background: pink;
  }
  .dlf-content{
    flex: 1;
  }
  .dlf-tabbar{
    position: absolute;
    bottom: 0;
    right:0;
    left:0;
  }
}
</style>
