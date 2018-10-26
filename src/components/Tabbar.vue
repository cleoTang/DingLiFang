<template>
  <div class="dlf-tabbar">
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      tag='div'
      :id="route.name">
      <div>
        <i :class="`icon iconfont icon-${route.name}-normal`"></i>
        <!-- <i :class="`icon iconfont icon-${route.name}-active`" v-show="true"></i> -->
      </div>
      <p>{{route.text}}</p>
    </router-link>
  </div>
</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'tabbar',
  data() {
    return {
      routes: routes.filter(item => item.isTabbar === true),
    };
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
