<template>
  <div class="dlf">
    <div class="dlf-header1">
      <header-nav></header-nav>
    </div>
    <div class="dlf-content">
      <router-view></router-view>
    </div>
    <div class="dlf-tabbar1">
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

<style  lang="scss">
body{
  width: 100%;
  height: 100%;
}
.dlf{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  &-header1{
    height: 64px;
  }
  &-content{
    flex: 1;
  }
  &-tabbar1{
    height: 64px;
    // position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
  }
}
</style>
