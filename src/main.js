// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import './libs/sass/reset.css';
import * as ajax from './services';
import store from './store';

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.prototype.$ajax = ajax;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
