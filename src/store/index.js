import Vuex from 'vuex';
import Vue from 'vue';
import state from './state';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
const isDev = process.env.NODE_ENV === 'development';

export default new Vuex.Store({
  strict: isDev,
  state,
  mutations,
  getters,
});
