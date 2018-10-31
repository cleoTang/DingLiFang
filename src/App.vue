<template>
  <div class="dlf">
    <div class="dlf-header1">
      <header-nav
      v-if="showTabbar === '/home' || showTabbar === '/mall'"
      ></header-nav>
    </div>
    <div class="dlf-content">
      <router-view></router-view>
    </div>
    <div class="dlf-tabbar1">
      <tabbar
      v-if="showTabbar === '/home' || showTabbar === '/mall' || showTabbar === '/cart' || showTabbar === '/mine'"
      ></tabbar>
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
  data() {
    return{
      isTabbar: '',
    };
  },
  computed: {
    showTabbar() {
      this.isTabbar=this.$route.path;
      return this.isTabbar;
    },
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
  &-content{
    flex: 1;
    overflow-y: auto;
  }
}
</style>
