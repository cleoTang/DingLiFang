<template>
  <div class="dlf-tabbar">
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      tag='div'
      :id="route.name"
    >
      <div>
        <span 
        class="dlf-tabbar-badge"
        v-if="route.path === '/cart' && todos.length"
        >{{totalCount | maxNumber}}</span>
        <i v-if="changePath === route.path" :class="`icon iconfont icon-${route.name}-active`"></i>
        <i v-else :class="`icon iconfont icon-${route.name}-normal`"></i>
      </div>
      <p>{{route.text}}</p>
    </router-link>
  </div>
</template>

<script>
import routes from '@/router/routes';
import {
  mapGetters,
  mapState,
} from 'vuex';

export default {
  name: 'tabbar',
  data() {
    return {
      routes: routes.filter(item => item.isTabbar === true),
      routerPath: '',
    };
  },
  computed: {
    ...mapGetters(['totalCount']),
    ...mapState(['todos']),
    changePath() {
      this.routerPath = this.$route.path;
      return this.routerPath;
    },
  },
  filters: {
    maxNumber(n) {
      return n > 99 ? '99+' : n;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../libs/sass/public.scss';
@import '../libs/icon/icon.css';
.dlf-tabbar{
  display: flex;
  justify-content: space-around;
  border-top: 1px solid $border-color;
  height:64px;
  color: $font-color;
  font-size: 18px;
  text-align: center;
  padding-top:10px;
  background: white;
  &-badge{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: red;
    border-radius: 50%;
    color: white;
    line-height: 25px;
    position: absolute;
    bottom: 38px;
    left: 242px;
    font-size: 14px;
  }
  i{
    font-size: 25px;
    color: $font-color;
  }
}
.router-link-exact-active,
.router-link-active{
  color:$background-color;
  i{
    color: $background-color;
  }
}
</style>
