<template>
  <div class="dlf">
    <div class="dlf-header">
      <header-nav></header-nav>
    </div>
    <div class="dlf-content"></div>
    <router-view></router-view>
    <div class="dlf-tabbar">
      <tabbar></tabbar>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/Header';
import Tabbar from '@/components/Tabbar';

export default {
  name: 'App',
  components: {
    Tabbar,
    HeaderNav,
  },
};
</script>

<style scoped lang="scss">
body{
  width: 100%;
  height: 100%;
}
.dlf{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
