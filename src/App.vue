<template>
  <div class="dlf">
    <div class="dlf-header1">
      <header-nav></header-nav>
    </div>
    <div class="dlf-content">
      <router-view></router-view>
    </div>
    <div class="dlf-tabbar1">
      <tabbar v-if='istabbar'></tabbar>
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
  data(){
    return {istabbar: this.$store.state.isTabbar};
  },
  mounted(){
    console.log(this.istabbar);
  },
};
</script>

<style  lang="scss">
body,html{
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
    overflow-y: auto;
  }
  &-tabbar1{
    height: 64px;
  }
}
</style>
